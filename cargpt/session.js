import {CARS,matchingCars,nearbyCars} from './catalogue.js';
import {interpretQuery,openFilters,serviceMatches} from '../search-model.js';
import {createSpeechAdapter} from './speech.js';
import {ALL_DEMO_CARS} from '../model.js';
import {resolveComparison,buildCarComparison,cloneComparison} from '../ui/car-comparison.js';

export const CARGPT_NOTICE='Prototype interpretation over a dated CARS24 listing snapshot. Test drives are saved only in this demo.';
export const INTRODUCTION='Hey I’m CarGPT, your voice assistant. Tell the brand and budget of car you want to buy and I’ll help you short list it.';
export const CARGPT_PROMPTS=['Show me cars within ₹12 Lakh budget','Car for 6 people under ₹8 lakhs','Kia Seltos under ₹7 lakhs'];
export const INTRO_CUE_URL=new URL('./assets/weather-sting-fog.wav',import.meta.url).href;
export const BOOKING_SLOTS=['10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4:30 PM','5:30 PM','6 PM','6:30 PM','7 PM','7:30 PM'];
export const BOOKING_UNAVAILABLE=['12 PM','5:30 PM'];

export function interpretFollowUp(query,previous=openFilters()) {
 const parsed=interpretQuery(query.replace(/\bwithin\b/i,'under'),previous.city),next={...previous};
 const seats=query.match(/\b([2-9]|two|three|four|five|six|seven|eight|nine)[ -]*(?:seats?|seaters?|people|persons?|passengers?)\b/i);
 if(seats){parsed.filters.seats=Number(seats[1])||({two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9})[seats[1].toLowerCase()];parsed.explicit.push('seats');}
 const distance=query.replaceAll(',','').match(/(?:under|below|less than|up to)\s*(\d+(?:\.\d+)?)\s*(k)?\s*(?:km|kilomet(?:er|re)s?)/i);
 if(distance){parsed.filters.maxKm=Number(distance[1])*(distance[2]?1000:1);parsed.explicit.push('maxKm');if(parsed.explicit.includes('max')&&!/\b(?:lakh|lac|budget)\b/i.test(query))parsed.explicit=parsed.explicit.filter(k=>k!=='max');}
 if(/\bertiga\b/i.test(query)){parsed.filters.model='Maruti Ertiga';parsed.explicit.push('model');}
 if(/\bcheapest\b/i.test(query)){parsed.filters.cheapest=true;parsed.explicit.push('cheapest');}
 const unlistedMake=['Kia','Toyota','MG','Renault','Skoda','Volkswagen','Nissan','Ford','Jeep','Mercedes','BMW','Audi'].find(make=>new RegExp(`\\b${make}\\b`,'i').test(query));
 if(unlistedMake){parsed.filters.make=unlistedMake;parsed.explicit.push('make');}
 if(/\bseltos\b/i.test(query)){parsed.filters.make='Kia';parsed.filters.model='Kia Seltos';parsed.explicit.push('model');}
 const fresh=/\b(start over|new search|reset|all cars|clear filters)\b/i.test(query);
 if(fresh){for(const key of Object.keys(next))delete next[key];Object.assign(next,openFilters(previous.city));}
 if(parsed.explicit.includes('make'))next.model='Any';
 if(parsed.explicit.includes('model')){next.make='Any';if(!seats)delete next.seats;}
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
 return Array.from({length:14},(_,index)=>{
  const day=new Date(now);day.setDate(day.getDate()+index+1);
  return `${day.getFullYear()}-${String(day.getMonth()+1).padStart(2,'0')}-${String(day.getDate()).padStart(2,'0')}`;
 });
}

function copyBooking(value){return value?{...value,car:value.car?{...value.car}:value.car}:null;}
function copyTurn(value){return {...value,...(value.comparison?{comparison:cloneComparison(value.comparison)}:{}),...(value.comparisonAnchor?{comparisonAnchor:{...value.comparisonAnchor}}:{}),...(value.attachments?{attachments:value.attachments.map(file=>({...file}))}:{}),...(value.car?{car:{...value.car}}:{}),...(value.carIds?{carIds:[...value.carIds]}:{}),...(value.filters?{filters:{...value.filters}}:{}),...(value.booking?{booking:copyBooking(value.booking)}:{})};}

// Summaries use only facts already present in the visible answer.
export function spokenSummary(text){
 const emi=text.match(/^For the (.+?) at .+?a (\d+%) down payment[\s\S]+?Over (\d+) months at an assumed (\d+%) annual interest, the estimated EMI is (₹[\d,]+\/month)/);
 if(emi)return `For the ${emi[1]}, the estimated EMI is ${emi[5]} over ${emi[3]} months, with ${emi[2]} down at an assumed ${emi[4]} annual interest. This is a demo estimate; final rates and approval depend on your profile.`;
 const sentences=text.split(/(?<=[.!?])\s+/);
 let summary='';for(const sentence of sentences){if(summary&&`${summary} ${sentence}`.trim().split(/\s+/).length>45)break;summary+=(summary?' ':'')+sentence;if(summary.trim().split(/\s+/).length>=28)break;}
 return summary.trim()||text;
}

export function createCarGPTSession({city='Gurugram',speech=createSpeechAdapter(),schedule=setTimeout,cancel=clearTimeout,now=()=>new Date(),delay=450}={}) {
 let state={phase:'idle',stage:'intro',outputMode:'voice',permission:'unknown',transcript:'',query:'',messages:[],results:[],filters:openFilters(city),selectedCar:null,booking:null,error:'',supported:speech.supported,ttsSupported:speech.ttsSupported,level:0,introComplete:false,notice:CARGPT_NOTICE,dates:bookingDates(now()),services:[],searchContext:null,comparison:null,pendingComparison:null,narration:{text:'',revealed:0,active:false,started:false,kind:'intro',cue:false}};
 let revision=0,audioRevision=0,timer=null,closed=false,introStarted=false,messageId=0,lastSearchHandoff=0,continuousVoice=false;
 const listeners=new Set(),contextCars=new Map(),galleryStates=new Map();
 const comparisonCars=()=>[...contextCars.values(),...CARS,...ALL_DEMO_CARS].filter((car,index,all)=>all.findIndex(other=>(other.listingUrl||other.id)===(car.listingUrl||car.id))===index);
 const findCar=id=>CARS.find(car=>car.id===id)||contextCars.get(id)||ALL_DEMO_CARS.find(car=>car.id===id);
 const snapshot=()=>({...state,comparison:cloneComparison(state.comparison),pendingComparison:state.pendingComparison?{...state.pendingComparison,cars:state.pendingComparison.cars.map(car=>({...car}))}:null,filters:{...state.filters},messages:state.messages.map(copyTurn),results:[...state.results],booking:copyBooking(state.booking),dates:[...state.dates],services:[...state.services],narration:{...state.narration},galleryStates:Object.fromEntries([...galleryStates].map(([key,value])=>[key,{...value}]))});
 const emit=()=>{if(!closed)for(const fn of listeners)fn(snapshot());};
 const patch=next=>{state={...state,...next,...(Object.hasOwn(next,'error')&&!Object.hasOwn(next,'errorCode')?{errorCode:''}:{})};emit();};
 function clearTimers(){if(timer!==null){cancel(timer);timer=null;}}
 function interrupt(){revision++;clearTimers();speech.stop();speech.cancelSpeech();speech.cancelCue?.();state={...state,narration:{...state.narration,active:false,cue:false,revealed:state.narration.text.length}};if(state.booking?.status==='pending')state={...state,stage:'slots',booking:{...state.booking,status:'draft'},error:'The demo booking was stopped before confirmation.'};}
 function message(role,text,metadata={}){state={...state,messages:[...state.messages,copyTurn({...metadata,id:++messageId,role,text})]};}
 function say(text,{introduction=false}={}){
  const token=revision;let completed=false;
  const spokenText=introduction?text:spokenSummary(text);
  patch({phase:introduction?'connecting':'streaming',narration:{text,spokenText,revealed:0,active:true,started:false,kind:introduction?'intro':'response',cue:false}});
  const finish=error=>{
   if(closed||token!==revision||completed)return;completed=true;
   patch({phase:'idle',narration:{...state.narration,active:false,cue:false,revealed:text.length},introComplete:introduction?true:state.introComplete,...(error?{error:'Spoken playback is unavailable. You can read the response and choose an example.'}:{})});
   if(continuousVoice&&state.outputMode==='voice'&&!error&&!introduction&&state.permission==='granted'&&token===revision)timer=schedule(()=>{timer=null;if(continuousVoice&&token===revision&&!closed)startVoice();},200);
  };
  const speak=()=>{
   if(closed||token!==revision||completed)return;
   if(state.outputMode==='text'){finish();return;}
   const playback=audioRevision,current=()=>!closed&&token===revision&&playback===audioRevision&&state.outputMode==='voice'&&!completed;
   return speech.speak(spokenText,{
   onStart:()=>{if(current())patch({phase:'speaking',narration:{...state.narration,started:true}});},
   onBoundary:({charIndex,charLength=0})=>{
    if(!introduction||!current())return;
    const start=Math.max(0,Math.min(text.length,Number(charIndex)||0)),length=charLength>0?charLength:(text.slice(start).match(/^\S+/)?.[0].length||0);
    patch({narration:{...state.narration,revealed:Math.max(state.narration.revealed,Math.min(text.length,start+length))}});
   },onEnd:()=>{if(current())finish();},onError:()=>{if(current())finish(true);}
  });
  };
  if(introduction){speak();return;}
  // Complete the answer in <=320ms, then speak a concise summary. Audio word
  // boundaries must never pace or rewind the already readable response.
  const chunk=Math.max(16,Math.ceil(text.length/20));
  const reveal=()=>{
   timer=null;if(closed||token!==revision||completed)return;
   const revealed=Math.min(text.length,state.narration.revealed+chunk);
   patch({narration:{...state.narration,revealed}});
   if(revealed===text.length)speak();else timer=schedule(reveal,16);
  };
  timer=schedule(reveal,16);
 }
 function command(text){
  const q=text.toLowerCase(),ordinal=q.match(/\b(first|second|third|1st|2nd|3rd)\b/);
  const contextualCar=state.selectedCar||state.results[0];
  if(/\bsimilar\b/.test(q)&&contextualCar){
   interrupt();
   const cars=matchingCars({...openFilters(contextualCar.city),body:contextualCar.body},true).filter(car=>car.id!==contextualCar.id&&car.listingUrl!==contextualCar.listingUrl).sort((a,b)=>Math.abs(a.price-contextualCar.price)-Math.abs(b.price-contextualCar.price));
   const reply=cars.length?`Here are ${cars.length} other ${contextualCar.body} ${cars.length===1?'option':'options'} in ${contextualCar.city}, ordered by the closest listed price to the ${contextualCar.model}.`:`I couldn’t find another ${contextualCar.body} in this catalogue. Try a different body type or show all cars.`;
   message('user',text);message('assistant',reply,{kind:cars.length?'results':'conversation',carIds:cars.map(car=>car.id)});
   patch({query:text,transcript:text,phase:'idle',stage:cars.length?'results':'conversation',results:cars,selectedCar:cars[0]||contextualCar,error:''});say(reply);return true;
  }
  const index=ordinal?({first:0,second:1,third:2,'1st':0,'2nd':1,'3rd':2})[ordinal[1]]:null;
  let action=null,reply='',metadata={};
  if(/\b(?:photos?|images?|gallery)\b/.test(q)){
   action=()=>{if(contextualCar)patch({stage:'gallery',selectedCar:contextualCar,phase:'idle',error:''});};reply=contextualCar?`Here are all the photos of the ${contextualCar.year} ${contextualCar.model} — take a closer look!`:'Choose a car first, then I can show its original listing photos.';if(contextualCar)metadata={kind:'gallery',car:{...contextualCar}};
  }else if(/\b(?:emi|loans?|finance)\b/.test(q)&&contextualCar){
   action=()=>{};const price=contextualCar.price*100000,principal=price*.8,rate=.12/12,months=60,payment=principal*rate/(1-Math.pow(1+rate,-months)),money=n=>'₹'+Math.round(n).toLocaleString('en-IN');
   reply=`For the ${contextualCar.year} ${contextualCar.model} at ${money(price)}, a 20% down payment is ${money(price*.2)} and you would finance ${money(principal)}. Over 60 months at an assumed 12% annual interest, the estimated EMI is ${money(payment)}/month. Total interest is approximately ${money(payment*months-principal)}. This demo estimate excludes lender fees; final rates and approval depend on your profile.`;
  }else if(/\bremind(?:er)?\b/.test(q)){
   action=()=>{};reply=state.booking?.status==='confirmed'?`Your ${state.booking.car.year} ${state.booking.car.model} demo test drive is saved for ${state.booking.date} at ${state.booking.slot}. No external reminder has been created.`:'Choose a test-drive date and time first, and I’ll keep the details in this conversation.';
  }else if(/\bwhy\b|recommend this|good deal|price break/.test(q)){
   action=()=>{};reply=contextualCar?`The ${contextualCar.year} ${contextualCar.model} is listed at ₹${contextualCar.price.toFixed(2)} lakh, with ${contextualCar.km.toLocaleString('en-IN')} km and ${contextualCar.transmission.toLowerCase()} transmission.${contextualCar.seats?` It has ${contextualCar.seats} seats.`:''} Review the service records and take a test drive to assess its condition. I can also show similar cars to compare listed prices.`:'Tell me your budget and preferred car first, and I can explain the shortlist.';
  }else if(/\b(cancel|stop)\b/.test(q)&&/\b(booking|test.drive)\b/.test(q)){
   action=()=>cancelBooking({record:false});reply=state.booking?'':'There is no demo test drive to cancel.';
  }else if(/\breschedule\b/.test(q)){
   action=()=>reschedule({record:false});reply=state.selectedCar?'':'Open a car before choosing a test drive.';
  }else if(/\bback to (?:the )?(?:results|cars|list)\b/.test(q)){
   action=()=>api.showResults({record:false});
  }else if((ordinal&&/\b(open|show|view|details?)\b/.test(q))||/\b(show|open|view) (?:the |car )?details\b|\btell me more\b|\binspection\b/.test(q)){
   const car=index!==null?state.results[index]:contextualCar;
   action=()=>{if(car)selectCar(car.id,{record:false});};reply=car?`Here are the details for the ${car.year} ${car.model}.`:'Choose a car from your results first.';if(car)metadata={kind:'detail',car:{...car}};
  }else if(/\b(book|schedule|choose)\b/.test(q)&&/\b(test.drive|slot|appointment)\b/.test(q)){
   action=()=>{if(state.selectedCar)reschedule({record:false});};reply=state.selectedCar?'':'Open a car from your results before choosing a test drive.';
  }
  if(contextualCar&&(state.stage==='slots'||/test.drive|\bbook\b|reschedule/.test(q))){
   const date=q.match(/\b\d{4}-\d{2}-\d{2}\b/)?.[0]||(q.includes('day after tomorrow')?state.dates[1]:q.includes('tomorrow')?state.dates[0]:state.dates.find(value=>q.includes(new Date(`${value}T12:00:00`).toLocaleDateString('en-US',{weekday:'long'}).toLowerCase())));
   let timeText=q.replace(/\b\d{4}-\d{2}-\d{2}\b/g,'');
   for(const [word,value] of [['four thirty','4:30'],['five thirty','5:30'],['six thirty','6:30'],['seven thirty','7:30'],['ten','10'],['eleven','11'],['twelve','12'],['one','1'],['two','2'],['three','3'],['four','4'],['five','5'],['six','6'],['seven','7']])timeText=timeText.replace(new RegExp(`\\b${word}\\b`,'g'),value);
   const hour=timeText.match(/\b(1[0-2]|[1-9])(?::([0-5]\d))?\s*(am|pm|a\.m\.|p\.m\.)?\b/);
   const slot=hour?BOOKING_SLOTS.find(value=>{const parts=value.match(/^(\d+)(?::(\d+))? (AM|PM)$/);return parts[1]===hour[1]&&Number(parts[2]||0)===Number(hour[2]||0)&&(!hour[3]||parts[3].toLowerCase()===hour[3].replaceAll('.',''));}):null;
   if(date&&slot){action=()=>book(contextualCar,date,slot,{record:false});reply='';}
  }
  if(!action)return false;
  interrupt();message('user',text);patch({query:text,transcript:text,error:'',phase:'idle'});action();
  if(reply){message('assistant',reply,metadata);emit();say(reply);}return true;
 }
 function recordComparison(comparison,query=comparison.query){
  if(closed)return;interrupt();const value=cloneComparison(comparison);value.cars.forEach(car=>contextCars.set(car.id,car));
  message('user',query||`Compare ${value.cars.map(car=>car.year+' '+car.model).join(' with ')}`);
  message('assistant',value.recommendation.text,{kind:'comparison',comparison:value});
  patch({stage:'comparison',phase:'idle',comparison:value,pendingComparison:null,selectedCar:value.cars.find(car=>car.id===value.recommendation.winnerId)||value.cars[0],query:query||value.query,transcript:query||value.query,introComplete:true,error:''});say(value.recommendation.text);
 }
 function askComparison(result,query){
  interrupt();message('user',query);message('assistant',result.prompt,{kind:'comparison-picker',comparisonAnchor:result.cars[0]||null});
  patch({stage:'comparison',phase:'idle',pendingComparison:{cars:result.cars},query,transcript:query,introComplete:true,error:''});say(result.prompt);
 }
 function chooseComparisonCar(id,anchorId=''){
  const car=findCar(id),anchor=anchorId?findCar(anchorId):null;if(!car)return;
  if(anchor&&(anchor.id===car.id||anchor.listingUrl&&anchor.listingUrl===car.listingUrl))return;
  if(anchor){recordComparison(buildCarComparison([anchor,car],{query:`Compare ${anchor.year} ${anchor.model} with ${car.year} ${car.model}`}));return;}
  askComparison({cars:[car],prompt:`Which car would you like to compare with the ${car.year} ${car.model}?`},`Compare the ${car.year} ${car.model}`);
 }
 function submit(query,{attachments=[],fresh=false}={}){
  const text=String(query||'').trim().slice(0,600);if(!text||closed)return;
  const comparison=resolveComparison(text,{cars:comparisonCars(),currentCar:state.selectedCar,results:state.results,previous:state.comparison&&(!state.selectedCar||state.comparison.cars.some(car=>car.id===state.selectedCar.id))?state.comparison:null,pending:state.pendingComparison,city:state.filters.city});
  if(comparison){if(comparison.status==='ready')recordComparison(comparison.comparison,text);else askComparison(comparison,text);return;}
  if(command(text))return;
  interrupt();const token=revision;
  const parsed=interpretFollowUp(text,fresh?openFilters(state.filters.city):state.filters);
  message('user',text,{...(attachments.length?{attachments:attachments.map(file=>({...file}))}:{})});
  patch({stage:state.stage==='intro'?'conversation':state.stage,query:text,transcript:text,phase:'thinking',error:'',services:[],selectedCar:null,comparison:null,pendingComparison:null,introComplete:true});
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
   const cars=matchingCars(parsed.filters,!state.searchContext),alternatives=cars.length?[]:nearbyCars(parsed.filters);
   const first=cars[0],fit=first?(parsed.filters.seats?` The ${first.year} ${first.model} has ${first.seats} seats for your ${parsed.filters.seats}-person search.`:parsed.filters.cheapest?` The ${first.year} ${first.model} has the lowest listed price in this shortlist.`:parsed.filters.transmission==='Automatic'?` The ${first.year} ${first.model} is the newest automatic in this shortlist.`:''):'';
   const reply=cars.length?`I found ${cars.length} ${cars.length===1?'car':'cars'} in ${parsed.filters.city} that ${cars.length===1?'matches':'match'} your preferences.${fit}`:`No cars in this snapshot match those preferences${parsed.filters.city!=='Gurugram'?'. This snapshot covers Gurugram only.':alternatives.length?'. Here are nearby alternatives; they differ from your request. Your filters are unchanged.':'. Try widening your budget or changing a preference.'}`;
   message('assistant',reply,{kind:cars.length?'results':alternatives.length?'alternatives':'conversation',carIds:(cars.length?cars:alternatives).map(car=>car.id),filters:parsed.filters});patch({phase:'idle',stage:cars.length?'results':'conversation',filters:parsed.filters,results:cars,selectedCar:cars[0]||null,introComplete:true});say(reply);
  },delay);
 }
 function continueSearch({query,filters,unsupported=[]}){
  if(closed)return;interrupt();introStarted=true;
  // Search has already resolved typed/voice intent and any selected shortcut.
  // Re-parsing its display label would overwrite that explicit model metadata.
  const applied={...(filters||interpretFollowUp(query,openFilters(city)).filters)};
  const parts=[applied.make!=='Any'?applied.make:null,applied.model!=='Any'?applied.model:null,applied.max<50?`under ₹${applied.max} lakh`:null,applied.city].filter(Boolean);
  const reply=unsupported.length?`Let’s work through “${query}”. I can’t verify ${unsupported.join(' or ')} in this listing snapshot. Which matters most: your budget, preferred model or transmission?`:`Let’s keep looking for “${query}”. I don’t have an exact match in this listing snapshot${parts.length?` for ${parts.join(', ')}`:''}. Would you like to change the budget, explore other brands, or search in another city?`;
  message('user',query);message('assistant',reply);
  patch({stage:'conversation',phase:'idle',query,transcript:query,filters:applied,results:[],selectedCar:null,services:[],introComplete:true,error:'',searchContext:{query,filters:{...applied},unsupported:[...unsupported]}});
  say(reply);
 }
 function intro(){
  if(closed||introStarted)return;introStarted=true;const token=revision;
  message('assistant',INTRODUCTION);
  patch({phase:'connecting',narration:{text:INTRODUCTION,revealed:0,active:true,started:false,kind:'intro',cue:true}});
  let released=false;
  const narrate=()=>{if(closed||token!==revision||released)return;released=true;say(INTRODUCTION,{introduction:true});};
  if(state.outputMode==='voice'&&speech.playCue){const started=speech.playCue(INTRO_CUE_URL,{onEnd:narrate,onError:narrate});if(started===false)narrate();}else narrate();

 }
 function startVoice({requestPermission=false}={}){
  if(closed)return;
  interrupt();const token=revision;
  patch({outputMode:'voice',phase:speech.supported?(!requestPermission&&state.permission==='granted'?'connecting':'permission-required'):'idle',stage:state.stage,error:'',errorCode:'',transcript:'',introComplete:true});
  const current=()=>!closed&&token===revision&&state.outputMode==='voice';
  let finalReceived=false,recognitionFailed=false;
  speech.start({
   requestPermission,
   onPermission:()=>{if(current())patch({permission:'granted',phase:'connecting'});},
   onStart:()=>{if(current())patch({phase:'listening',permission:'granted'});},
   onTranscript:({text,final})=>{if(!current())return;patch({transcript:text});if(final&&!finalReceived){finalReceived=true;submit(text);}},
   onEnd:()=>{if(!current()||finalReceived||recognitionFailed)return;patch({phase:'idle',error:'No speech was captured. Try the microphone again or choose an example.'});},
   onError:code=>{
    if(!current())return;recognitionFailed=true;
    const denied=['not-allowed','service-not-allowed'].includes(code);
    const error=code==='unsupported'?'Voice input is not supported in this browser. You can keep typing.':denied?'Allow Microphone in your browser permissions, then try again.':code==='network'?'The speech service could not connect. Try again, or open this preview in Chrome for voice chat.':code==='audio-capture'?'No microphone was found. Connect a microphone or keep typing.':code==='no-speech'?'I didn’t catch that. Tap to speak again.':'Voice input stopped. Tap to try again.';
    patch({phase:denied?'permission-denied':'idle',permission:denied?'denied':state.permission,error,errorCode:code});
   }
  });
 }
 function setOutputMode(mode){
  if(closed||!['text','voice'].includes(mode)||state.outputMode===mode)return;
  if(mode==='voice'){patch({outputMode:mode});return;}
  // Silence playback/capture without cancelling a pending answer or its text stream.
  continuousVoice=false;audioRevision++;state={...state,outputMode:mode};speech.stop();speech.cancelSpeech();speech.cancelCue?.();
  const streaming=state.phase==='streaming',finishingNarration=state.narration.active&&!streaming;
  patch({outputMode:mode,level:0,...(!['thinking','streaming'].includes(state.phase)?{phase:'idle'}:{}),...(finishingNarration?{narration:{...state.narration,active:false,cue:false,revealed:state.narration.text.length},introComplete:true}:{})});
 }
 function pauseVoice(){if(closed)return;continuousVoice=false;interrupt();patch({phase:'voice-paused',introComplete:true});}
 function stopSpeaking(){if(closed)return;interrupt();patch({phase:'idle',introComplete:true});}
 function selectCar(id,{entry=false,record=true}={}){if(closed)return;const car=typeof id==='object'?id:findCar(id);if(car)contextCars.set(car.id,car);if(!car)return;interrupt();const reply=`Here are the details for the ${car.year} ${car.model}.`;if(record){message('user',`View details for the ${car.year} ${car.model}`);message('assistant',reply,{kind:'detail',car:{...car}});}patch({stage:'detail',selectedCar:car,phase:'idle',error:'',...(entry?{searchContext:null}:{})});if(record)say(reply);}
 function selectSlot(date,slot){
  if(closed)return false;
  if(!state.dates.includes(date)||!BOOKING_SLOTS.includes(slot)){patch({error:'Choose one of the available demo dates and times.'});return false;}
  if(BOOKING_UNAVAILABLE.includes(slot)){patch({error:'That demo time is unavailable. Choose another time.'});return false;}
  patch({booking:{...(state.booking||{}),carId:state.selectedCar?.id||state.booking?.carId,car:state.selectedCar||state.booking?.car,date,slot,status:'draft'},error:''});return true;
 }
 function book(carOrId,date,slot,{record=true}={}){
  if(closed)return false;
  const car=typeof carOrId==='object'?carOrId:findCar(carOrId);if(!car){patch({error:'Choose a car before selecting a demo test drive.'});return false;}
  interrupt();state={...state,selectedCar:car};
  if(!selectSlot(date,slot))return false;
  if(record)message('user',`Book a test drive for the ${car.year} ${car.model} on ${date} at ${slot}`);
  const token=revision,reference=`DEMO-${car.id.slice(-4)}-${date.replaceAll('-','')}-${slot.replace(/\W/g,'')}`;
  patch({phase:'thinking',stage:'booking-pending',booking:{...state.booking,id:reference,reference,status:'pending'},error:''});
  timer=schedule(()=>{
   timer=null;if(closed||token!==revision)return;
   const dateText=new Date(`${date}T12:00:00`).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});
   const booking={...state.booking,status:'confirmed'},reply=`Your test drive for the ${car.year} ${car.model} is scheduled for ${dateText} at ${slot}.`;
   message('assistant',reply,{kind:'booking',booking});patch({phase:'idle',stage:'confirmation',booking});say(reply);
  },delay);return true;
 }
 function cancelBooking({record=true}={}){
  if(closed||!state.booking)return;interrupt();if(record)message('user','Cancel my test drive');const booking={...state.booking,status:'cancelled'},reply='Your test drive has been cancelled.';message('assistant',reply,{kind:'booking-update',booking});patch({phase:'idle',stage:'confirmation',booking,error:''});say(reply);
 }
 function reschedule({record=true}={}){
  if(closed||!state.selectedCar)return;interrupt();const booking=state.booking?{...state.booking,status:'draft'}:null;
  if(record)message('user',booking?.reference?'Reschedule my test drive':`Book a test drive for the ${state.selectedCar.year} ${state.selectedCar.model}`);
  const reply=booking?.reference?'Choose a new date and time for your test drive.':'Choose a date and time for your test drive, or tell me when you’d like to visit.';
  message('assistant',reply,{kind:'booking-prompt',car:{...state.selectedCar}});patch({phase:'idle',stage:'slots',booking,error:''});say(reply);
 }
 function suspend(){
  if(closed)return;continuousVoice=false;const wasPending=state.booking?.status==='pending';interrupt();
  patch({phase:'idle',introComplete:true,...(wasPending?{stage:'slots',booking:{...state.booking,status:'draft'},error:'The demo booking was stopped before confirmation.'}:{})});
 }
 function close(){if(closed)return;for(const url of new Set(state.messages.flatMap(message=>(message.attachments||[]).map(file=>file.previewUrl).filter(Boolean))))URL.revokeObjectURL(url);suspend();closed=true;listeners.clear();speech.destroy();}
 const api={
  getGalleryState(key){const value=galleryStates.get(key);return value?{...value}:undefined;},setGalleryState(key,value){if(!closed)galleryStates.set(key,{...value});},
  setOutputMode,
  setContinuousVoice(enabled){continuousVoice=Boolean(enabled);},
  snapshot,subscribe(fn){if(closed)return()=>{};listeners.add(fn);fn(snapshot());return()=>listeners.delete(fn);},
  setListingContext(filters){if(closed)return;interrupt();patch({filters:{...openFilters(city),...filters},results:[],selectedCar:null,stage:state.messages.length?'conversation':'intro',searchContext:null,error:'',phase:'idle'});},
  recordComparison,chooseComparisonCar,comparisonCars,
  intro,continueSearch,takeSearchResults(){const turn=state.messages.filter(m=>m.kind==='results').at(-1);if(!state.searchContext||state.stage!=='results'||!state.results.length||!turn||turn.id===lastSearchHandoff)return null;lastSearchHandoff=turn.id;return {query:state.query,originQuery:state.searchContext.query,filters:{...state.filters},ai:true,need:null};},openConversation(){if(!closed){interrupt();patch({stage:'conversation',phase:'idle',introComplete:true,error:''});}},requestPermission(){if(!closed){interrupt();patch({phase:'permission-required',introComplete:true,error:''});}},startVoice,startListening:startVoice,pauseVoice,pause:pauseVoice,resume:startVoice,stopListening:pauseVoice,stopSpeaking,submit,submitExample(query){submit(query,{fresh:true});},
  selectCar,showResults({record=true}={}){if(!closed){interrupt();if(record)message('user','Show my search results');const reply=state.results.length?'Here are your search results.':'There are no search results yet. Tell me which car you would like.';message('assistant',reply,{kind:state.results.length?'results':'conversation',carIds:state.results.map(car=>car.id)});patch({phase:'idle',stage:state.results.length?'results':'conversation',selectedCar:null,error:''});say(reply);}},
  beginBooking(id){selectCar(id,{record:false});if(state.selectedCar)reschedule();},selectSlot,book,confirmBooking(){return book(state.selectedCar,state.booking?.date,state.booking?.slot);},cancelBooking,reschedule,rescheduleBooking:reschedule,
  showSlots(){reschedule();},suspend,close,destroy:close
 };
 return api;
}
