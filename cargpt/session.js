import {CARS} from '../model.js';
import {interpretQuery,matchingCars,openFilters,serviceMatches} from '../search-model.js';
import {createSpeechAdapter} from './speech.js';

export const CARGPT_NOTICE='Prototype interpretation over a dated CARS24 listing snapshot. Test drives are saved only in this demo.';
export const INTRODUCTION='Hey I’m CarGPT, your voice assistant. Tell the brand and budget of car you want to buy and I’ll help you short list it.';
export const CARGPT_PROMPTS=['Show me cars within ₹12 Lakh budget','Car for 6 people under ₹8 lakhs','Kia Seltos under ₹7 lakhs'];
export const INTRO_CUE_URL=new URL('./assets/weather-sting-fog.wav',import.meta.url).href;
export const BOOKING_SLOTS=['10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4:30 PM','5:30 PM','6 PM','6:30 PM','7 PM','7:30 PM'];
export const BOOKING_UNAVAILABLE=['12 PM','5:30 PM'];

export function interpretFollowUp(query,previous=openFilters()) {
 const parsed=interpretQuery(query.replace(/\bwithin\b/i,'under'),previous.city),next={...previous};
 if(/\b(?:[2-9]|six|seven|eight)\s*(?:seats?|people|persons?|passengers?)\b/i.test(query))parsed.unsupported.push('verified seating capacity');
 const unlistedMake=['Kia','Toyota','MG','Renault','Skoda','Volkswagen','Nissan','Ford','Jeep','Mercedes','BMW','Audi'].find(make=>new RegExp(`\\b${make}\\b`,'i').test(query));
 if(unlistedMake){parsed.filters.make=unlistedMake;parsed.explicit.push('make');}
 if(/\bseltos\b/i.test(query)){parsed.filters.make='Kia';parsed.filters.model='Kia Seltos';parsed.explicit.push('model');}
 const fresh=/\b(start over|new search|reset|all cars|clear filters)\b/i.test(query);
 if(fresh)Object.assign(next,openFilters(previous.city));
 if(parsed.explicit.includes('make'))next.model='Any';
 if(parsed.explicit.includes('model'))next.make='Any';
 for(const key of parsed.explicit)next[key]=parsed.filters[key];
 if(parsed.explicit.includes('max')&&!parsed.explicit.includes('min'))next.min=0;
 const cleared=query.match(/\b(?:any|all) (fuel|transmission|body|make|model)/i);
 if(cleared){const key=cleared[1].toLowerCase();next[key]='Any';if(key==='make')next.model='Any';}
 const cheaper=/\b(cheaper|less expensive|lower price|more affordable)\b/i.test(query);
 if(cheaper&&!parsed.explicit.some(k=>k==='max'||k==='min')){
  const current=matchingCars(previous).map(c=>c.price).sort((a,b)=>a-b);
  if(current.length)next.max=current[Math.floor((current.length-1)/2)];
 }
 return {...parsed,filters:next,mode:fresh||cheaper||cleared||(parsed.mode==='unknown'&&parsed.explicit.length)?'cars':parsed.mode};
}

export function bookingDates(now=new Date()) {
 return Array.from({length:7},(_,index)=>{
  const day=new Date(now);day.setDate(day.getDate()+index+1);
  return `${day.getFullYear()}-${String(day.getMonth()+1).padStart(2,'0')}-${String(day.getDate()).padStart(2,'0')}`;
 });
}

function copyBooking(value){return value?{...value,car:value.car?{...value.car}:value.car}:null;}
function copyTurn(value){return {...value,...(value.carIds?{carIds:[...value.carIds]}:{}),...(value.filters?{filters:{...value.filters}}:{}),...(value.booking?{booking:copyBooking(value.booking)}:{})};}

export function createCarGPTSession({city='Gurugram',speech=createSpeechAdapter(),schedule=setTimeout,cancel=clearTimeout,now=()=>new Date(),delay=450}={}) {
 let state={phase:'idle',stage:'intro',permission:'unknown',transcript:'',query:'',messages:[],results:[],filters:openFilters(city),selectedCar:null,booking:null,error:'',supported:speech.supported,ttsSupported:speech.ttsSupported,level:0,introComplete:false,notice:CARGPT_NOTICE,dates:bookingDates(now()),services:[],searchContext:null,narration:{text:'',revealed:0,active:false,started:false,kind:'intro',cue:false}};
 let revision=0,timer=null,closed=false,introStarted=false,messageId=0,lastSearchHandoff=0;
 const listeners=new Set();
 const snapshot=()=>({...state,filters:{...state.filters},messages:state.messages.map(copyTurn),results:[...state.results],booking:copyBooking(state.booking),dates:[...state.dates],services:[...state.services],narration:{...state.narration}});
 const emit=()=>{if(!closed)for(const fn of listeners)fn(snapshot());};
 const patch=next=>{state={...state,...next};emit();};
 function clearTimers(){if(timer!==null){cancel(timer);timer=null;}}
 function interrupt(){revision++;clearTimers();speech.stop();speech.cancelSpeech();speech.cancelCue?.();state={...state,narration:{...state.narration,active:false,cue:false,revealed:state.narration.text.length}};if(state.booking?.status==='pending')state={...state,stage:'slots',booking:{...state.booking,status:'draft'},error:'The demo booking was stopped before confirmation.'};}
 function message(role,text,metadata={}){state={...state,messages:[...state.messages,copyTurn({...metadata,id:++messageId,role,text})]};}
 function say(text,{introduction=false}={}){
  const token=revision;let completed=false;
  patch({narration:{text,revealed:0,active:true,started:false,kind:introduction?'intro':'response',cue:false}});
  const finish=error=>{
   if(closed||token!==revision||completed)return;completed=true;
   patch({phase:'idle',narration:{...state.narration,active:false,cue:false,revealed:text.length},introComplete:introduction?true:state.introComplete,...(error?{error:'Spoken playback is unavailable. You can read the response and choose an example.'}:{})});
  };
  // Word boundaries come from playback. No character timer or synthetic audio level.
  speech.speak(text,{
   onStart:()=>{if(!closed&&token===revision&&!completed)patch({phase:'speaking',narration:{...state.narration,started:true}});},
   onBoundary:({charIndex,charLength=0})=>{
    if(closed||token!==revision||completed)return;
    const start=Math.max(0,Math.min(text.length,Number(charIndex)||0)),length=charLength>0?charLength:(text.slice(start).match(/^\S+/)?.[0].length||0);
    patch({narration:{...state.narration,revealed:Math.max(state.narration.revealed,Math.min(text.length,start+length))}});
   },onEnd:()=>finish(),onError:()=>finish(true)
  });
 }
 function command(text){
  const q=text.toLowerCase(),ordinal=q.match(/\b(first|second|third|1st|2nd|3rd)\b/);
  const index=ordinal?({first:0,second:1,third:2,'1st':0,'2nd':1,'3rd':2})[ordinal[1]]:null;
  let action=null,reply='';
  if(/\b(cancel|stop)\b/.test(q)&&/\b(booking|test.drive)\b/.test(q)){
   action=()=>cancelBooking();reply=state.booking?'':'There is no demo test drive to cancel.';
  }else if(/\breschedule\b/.test(q)){
   action=()=>reschedule();reply=state.booking?.reference?'':state.selectedCar?'Choose a new demo date and time.':'Open a car before choosing a demo test drive.';
  }else if(/\bback to (?:the )?(?:results|cars|list)\b/.test(q)){
   action=()=>api.showResults();reply='Here are your search results.';
  }else if((ordinal&&/\b(open|show|view|details?)\b/.test(q))||/\b(show|open|view) (?:the |car )?details\b|\btell me more\b/.test(q)){
   const car=index!==null?state.results[index]:state.selectedCar;
   action=()=>{if(car)selectCar(car.id);};reply=car?`Here are the details for the ${car.year} ${car.model}.`:'Choose a car from your results first.';
  }else if(/\b(book|schedule|choose)\b/.test(q)&&/\b(test.drive|slot|appointment)\b/.test(q)){
   action=()=>{if(state.selectedCar)reschedule();};reply=state.selectedCar?'Choose a date and time for this demo test drive. No appointment will be sent to CARS24.':'Open a car from your results before choosing a demo test drive.';
  }else if(state.stage==='slots'&&state.selectedCar){
   const date=q.match(/\b\d{4}-\d{2}-\d{2}\b/)?.[0]||(q.includes('day after tomorrow')?state.dates[1]:q.includes('tomorrow')?state.dates[0]:state.dates.find(value=>q.includes(new Date(`${value}T12:00:00`).toLocaleDateString('en-US',{weekday:'long'}).toLowerCase())));
   let timeText=q.replace(/\b\d{4}-\d{2}-\d{2}\b/g,'');
   for(const [word,value] of [['four thirty','4:30'],['five thirty','5:30'],['six thirty','6:30'],['seven thirty','7:30'],['ten','10'],['eleven','11'],['twelve','12'],['one','1'],['two','2'],['three','3'],['four','4'],['five','5'],['six','6'],['seven','7']])timeText=timeText.replace(new RegExp(`\\b${word}\\b`,'g'),value);
   const hour=timeText.match(/\b(1[0-2]|[1-9])(?::([0-5]\d))?\s*(am|pm|a\.m\.|p\.m\.)?\b/);
   const slot=hour?BOOKING_SLOTS.find(value=>{const parts=value.match(/^(\d+)(?::(\d+))? (AM|PM)$/);return parts[1]===hour[1]&&Number(parts[2]||0)===Number(hour[2]||0)&&(!hour[3]||parts[3].toLowerCase()===hour[3].replaceAll('.',''));}):null;
   if(date&&slot){action=()=>book(state.selectedCar,date,slot);reply='';}
  }
  if(!action)return false;
  interrupt();message('user',text);patch({query:text,transcript:text,error:'',phase:'idle'});action();
  if(reply){message('assistant',reply);emit();say(reply);}return true;
 }
 function submit(query){
  const text=String(query||'').trim().slice(0,600);if(!text||closed)return;
  if(command(text))return;
  interrupt();const token=revision;
  const parsed=interpretFollowUp(text,state.filters);
  message('user',text);
  patch({query:text,transcript:text,phase:'thinking',error:'',services:[],selectedCar:null,introComplete:true});
  timer=schedule(()=>{
   timer=null;if(closed||token!==revision)return;
   if(parsed.mode==='services'){
    const services=serviceMatches(text),reply=services.length?'This is a Cars24 service. Choose a service to continue.':'I could not match that service. Try a car model, budget or body type.';
    message('assistant',reply);patch({phase:'idle',stage:'services',services,results:[]});say(reply);return;
   }
   if(parsed.mode==='unknown'||parsed.unsupported.length){
    const reply=parsed.unsupported.length?`This preview cannot verify ${parsed.unsupported.join(' or ')}. Try model, budget, body type, fuel or transmission.`:'Try telling me a model, budget, body type, fuel or transmission.';
    message('assistant',reply);patch({phase:'idle',stage:state.results.length?'results':'conversation'});say(reply);return;
   }
   const cars=matchingCars(parsed.filters),reply=cars.length?`I found ${cars.length} ${cars.length===1?'car':'cars'} in the ${parsed.filters.city} listing snapshot. You can open a car or refine your preferences.`:`No cars in this snapshot match those preferences${parsed.filters.city!=='Gurugram'?'. This snapshot covers Gurugram only.':'. Try widening your budget or changing a preference.'}`;
   message('assistant',reply,{kind:cars.length?'results':'conversation',carIds:cars.map(car=>car.id),filters:parsed.filters});patch({phase:'idle',stage:cars.length?'results':'conversation',filters:parsed.filters,results:cars,introComplete:true});say(reply);
  },delay);
 }
 function continueSearch({query,filters,unsupported=[]}){
  if(closed)return;interrupt();introStarted=true;
  const parsed=interpretFollowUp(query,filters||openFilters(city));
  const applied={...(filters||parsed.filters)};
  // Preserve an unlisted model rather than silently interpreting it as all stock.
  if(parsed.explicit.includes('make'))applied.make=parsed.filters.make;
  if(parsed.explicit.includes('model'))applied.model=parsed.filters.model;
  const parts=[applied.make!=='Any'?applied.make:null,applied.model!=='Any'?applied.model:null,applied.max<50?`under ₹${applied.max} lakh`:null,applied.city].filter(Boolean);
  const reply=unsupported.length?`Let’s work through “${query}”. I can’t verify ${unsupported.join(' or ')} in this listing snapshot. Which matters most: your budget, preferred model or transmission?`:`Let’s keep looking for “${query}”. I don’t have an exact match in this listing snapshot${parts.length?` for ${parts.join(', ')}`:''}. Would you like to change the budget, explore other brands, or search in another city?`;
  message('user',query);message('assistant',reply);
  patch({stage:'conversation',phase:'idle',query,transcript:query,filters:applied,results:[],selectedCar:null,services:[],introComplete:true,error:'',searchContext:{query,filters:{...applied},unsupported:[...unsupported]}});
 }
 function intro(){
  if(closed||introStarted)return;introStarted=true;const token=revision;
  message('assistant',INTRODUCTION);
  patch({phase:'connecting',narration:{text:INTRODUCTION,revealed:0,active:true,started:false,kind:'intro',cue:true}});
  let released=false;
  const narrate=()=>{if(closed||token!==revision||released)return;released=true;say(INTRODUCTION,{introduction:true});};
  if(speech.playCue){const started=speech.playCue(INTRO_CUE_URL,{onEnd:narrate,onError:narrate});if(started===false)narrate();}else narrate();

 }
 function startVoice(){
  if(closed)return;
  interrupt();const token=revision;
  patch({phase:speech.supported?(state.permission==='granted'?'connecting':'permission-required'):'idle',stage:state.stage==='intro'?'conversation':state.stage,error:'',transcript:'',introComplete:true});
  let finalReceived=false,recognitionFailed=false;
  speech.start({
   onStart:()=>{if(!closed&&token===revision)patch({phase:'listening',permission:'granted'});},
   onTranscript:({text,final})=>{if(closed||token!==revision)return;patch({transcript:text});if(final&&!finalReceived){finalReceived=true;submit(text);}},
   onEnd:()=>{if(closed||token!==revision||finalReceived||recognitionFailed)return;patch({phase:'idle',error:'No speech was captured. Try the microphone again or choose an example.'});},
   onError:code=>{
    if(closed||token!==revision)return;recognitionFailed=true;
    const denied=['not-allowed','service-not-allowed'].includes(code);
    const error=code==='unsupported'?'Voice input is not supported in this browser. Choose an example or use ordinary search.':denied?'Microphone access is unavailable or blocked. Check your browser permissions, or choose an example.':code==='network'?'The browser speech service could not connect. Check your connection or choose an example.':code==='no-speech'?'No speech was detected. Try again or choose an example.':'Voice input stopped. Try again or choose an example.';
    patch({phase:denied?'permission-denied':'idle',permission:denied?'denied':state.permission,error});
   }
  });
 }
 function pauseVoice(){if(closed)return;interrupt();patch({phase:'voice-paused',introComplete:true});}
 function stopSpeaking(){if(closed)return;interrupt();patch({phase:'idle',introComplete:true});}
 function selectCar(id){if(closed)return;const car=CARS.find(c=>c.id===(typeof id==='string'?id:id?.id));if(!car)return;interrupt();patch({stage:'detail',selectedCar:car,phase:'idle',error:''});}
 function selectSlot(date,slot){
  if(closed)return false;
  if(!state.dates.includes(date)||!BOOKING_SLOTS.includes(slot)){patch({error:'Choose one of the available demo dates and times.'});return false;}
  if(BOOKING_UNAVAILABLE.includes(slot)){patch({error:'That demo time is unavailable. Choose another time.'});return false;}
  patch({booking:{...(state.booking||{}),carId:state.selectedCar?.id||state.booking?.carId,car:state.selectedCar||state.booking?.car,date,slot,status:'draft'},error:''});return true;
 }
 function book(carOrId,date,slot){
  if(closed)return false;
  const car=CARS.find(c=>c.id===(typeof carOrId==='string'?carOrId:carOrId?.id));if(!car){patch({error:'Choose a car before selecting a demo test drive.'});return false;}
  interrupt();state={...state,selectedCar:car};
  if(!selectSlot(date,slot))return false;
  const token=revision,reference=`DEMO-${car.id.slice(-4)}-${date.replaceAll('-','')}-${slot.replace(/\W/g,'')}`;
  patch({phase:'thinking',stage:'booking-pending',booking:{...state.booking,id:reference,reference,status:'pending'},error:''});
  timer=schedule(()=>{
   timer=null;if(closed||token!==revision)return;
   const booking={...state.booking,status:'confirmed'},reply=`Your demo test drive for the ${car.year} ${car.model} is saved for ${date} at ${slot}. No appointment has been sent to CARS24.`;
   message('assistant',reply,{kind:'booking',booking});patch({phase:'idle',stage:'confirmation',booking});say(reply);
  },delay);return true;
 }
 function cancelBooking(){
  if(closed||!state.booking)return;interrupt();const booking={...state.booking,status:'cancelled'},reply='The demo test drive is cancelled. No external appointment was changed.';message('assistant',reply,{kind:'booking-update',booking});patch({phase:'idle',stage:'confirmation',booking,error:''});say(reply);
 }
 function reschedule(){
  if(closed||!state.selectedCar)return;interrupt();const booking=state.booking?{...state.booking,status:'draft'}:null;const reply='Choose a new demo date and time. The previous ticket remains in this conversation.';if(booking?.reference)message('assistant',reply,{kind:'booking-update',booking});patch({phase:'idle',stage:'slots',booking,error:''});if(booking?.reference)say(reply);
 }
 function suspend(){
  if(closed)return;const wasPending=state.booking?.status==='pending';interrupt();
  patch({phase:'idle',introComplete:true,...(wasPending?{stage:'slots',booking:{...state.booking,status:'draft'},error:'The demo booking was stopped before confirmation.'}:{})});
 }
 function close(){if(closed)return;suspend();closed=true;listeners.clear();speech.destroy();}
 const api={
  snapshot,subscribe(fn){if(closed)return()=>{};listeners.add(fn);fn(snapshot());return()=>listeners.delete(fn);},
  intro,continueSearch,takeSearchResults(){const turn=state.messages.filter(m=>m.kind==='results').at(-1);if(!state.searchContext||state.stage!=='results'||!state.results.length||!turn||turn.id===lastSearchHandoff)return null;lastSearchHandoff=turn.id;return {query:state.query,originQuery:state.searchContext.query,filters:{...state.filters},ai:true,need:null};},openConversation(){if(!closed){interrupt();patch({stage:'conversation',phase:'idle',introComplete:true,error:''});}},requestPermission(){if(!closed){interrupt();patch({stage:'conversation',phase:'permission-required',introComplete:true,error:''});}},startVoice,startListening:startVoice,pauseVoice,pause:pauseVoice,resume:startVoice,stopListening:pauseVoice,stopSpeaking,submit,submitExample:submit,
  selectCar,showResults(){if(!closed){interrupt();patch({phase:'idle',stage:state.results.length?'results':'intro',selectedCar:null,error:''});}},
  beginBooking(id){selectCar(id);if(state.selectedCar)reschedule();},selectSlot,book,confirmBooking(){return book(state.selectedCar,state.booking?.date,state.booking?.slot);},cancelBooking,reschedule,rescheduleBooking:reschedule,
  showSlots(){reschedule();},suspend,close,destroy:close
 };
 return api;
}
