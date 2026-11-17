import {CARS} from '../model.js';
import '../components/car-card/car-card.js';
import {carImage,cardData} from '../car-card-adapter.js';
import {BOOKING_SLOTS,BOOKING_UNAVAILABLE} from './session.js';
import {mountC3Visuals} from './visuals.js';
const e=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=name=>`<i class="cargpt-icon" data-icon="${name}" aria-hidden="true"></i>`;
const asset=name=>`./cargpt/assets/${name}.svg`;
const button=(label,action,extra='',cls='cargpt-chip')=>`<button type="button" class="${cls}" data-c3-action="${action}" ${extra}>${label}</button>`;
const introduction='Hey I’m CarGPT, your voice assistant. Tell the brand and budget of car you want to buy and I’ll help you short list it.';
const examples=['Show me cars within ₹12 Lakh budget','Car for 6 people under ₹8 lakhs','Kia Seltos under ₹7 lakhs'];
const stream=(text,s)=>{const full=String(text??'');return `<span class="cargpt-stream" data-c3-current="${Boolean(s.messages)}" data-c3-full="${e(full)}"><span class="cargpt-stream-visible">${e(full)}</span><span class="cargpt-stream-pending" aria-hidden="true"></span></span>`;};
const identity=()=>'<div class="cargpt-identity"><span aria-hidden="true">✦</span> CarGPT</div>';
const labels={idle:'Ready',connecting:'Connecting',listening:'Listening',thinking:'Thinking',speaking:'Speaking','permission-required':'','permission-denied':'Mic permission needed','voice-paused':'Voice paused','mic-off':'Mic off'};

export function mountCarGPT(root,{session,bridge}) {
 root.innerHTML=`<section class="cargpt-view" aria-label="CarGPT voice assistant" data-stage="intro"><header class="cargpt-header"><button type="button" class="cargpt-header-control" data-c3-action="back" aria-label="Back">${icon('arrow-left-filled')}</button><strong>CarGPT</strong><button type="button" class="cargpt-header-control" data-c3-action="menu" aria-label="CarGPT menu">${icon('hamburger-menu-outline')}</button></header><div class="cargpt-feed" tabindex="-1"></div>${session.snapshot().searchContext?'<form class="cargpt-composer" aria-label="Continue with CarGPT"><label class="sr-only" for="cargpt-reply">Message CarGPT</label><input id="cargpt-reply" name="reply" type="text" autocomplete="off" placeholder="Tell me what you’d like to change"><button type="submit" aria-label="Send message">Send</button></form>':''}<footer class="cargpt-dock"><div class="cargpt-visuals"></div><p class="cargpt-transcript" aria-live="polite"></p><div class="cargpt-controls"><button type="button" class="cargpt-control" data-c3-action="microphone" aria-label="Start microphone"><img src="${asset('mic-on')}" alt=""></button><span class="cargpt-orb-space" aria-hidden="true"></span><button type="button" class="cargpt-control" data-c3-action="close" aria-label="Close voice"><img src="${asset('close')}" alt=""></button></div><p class="cargpt-status" role="status"></p></footer></section>`;
 const view=root.firstElementChild,feed=view.querySelector('.cargpt-feed'),transcript=view.querySelector('.cargpt-transcript'),status=view.querySelector('.cargpt-status');
 const visuals=mountC3Visuals(view.querySelector('.cargpt-visuals'),{reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches,onIntroFrame:frame=>{for(const [key,value] of Object.entries({close:frame.close,copy:frame.firstText,button:frame.button})){if(Number.isFinite(value))view.style.setProperty(`--c3-intro-${key}`,String(value));}frame.chips?.forEach((value,index)=>view.style.setProperty(`--c3-intro-chip-${index}`,String(value)));}});
 let snapshot=session.snapshot(),lastMarkup='',destroyed=false,menu=false,date='',slot='',expanded=false,permissionPrompt=false,conversationScroll=0;const messageTimes=new Map();
 const prompts=()=>`<div class="cargpt-prompts">${(snapshot.searchContext?['Show me cars under ₹12 lakh','Any make','Search in Gurugram']:examples).map(q=>button(e(q),'example',`data-query="${e(q)}" aria-label="Try example: ${e(q)}"`)).join('')}</div>`;
 const selected=s=>s.selectedCar||CARS.find(c=>c.id===s.booking?.carId)||null;
 function dateLabel(value,options={day:'numeric',month:'short',year:'numeric'}){return value?new Date(`${value}T12:00:00`).toLocaleDateString('en-IN',options):'';}
 function card(car){return `<car-card class="cargpt-result-card" data-c3-car="${e(car.id)}" data-car-id="${e(car.id)}"></car-card>`;}
 function hydrateCards(){feed.querySelectorAll('car-card[data-c3-car]').forEach(card=>{const car=CARS.find(car=>car.id===card.dataset.c3Car);if(car)card.data=cardData(car,bridge.saved.has(car.id),true);});}

 function bookingPanel(s){
  const booking=s.booking||{},car=['confirmation','booking-pending'].includes(s.stage)?booking.car||CARS.find(c=>c.id===booking.carId)||selected(s):selected(s),bookDate=booking.date||date,bookSlot=booking.slot||slot;
  if(s.stage==='booking-pending')return `${identity()}<div class="cargpt-loading" role="status"><span></span>Confirming your test drive…</div><p class="cargpt-response small">${e(car?.model)} · ${e(dateLabel(bookDate))} · ${e(bookSlot)}</p>`;
  if(s.stage==='confirmation')return `${identity()}<div class="cargpt-ticket"><div class="cargpt-ticket-top">${car?`<img src="${e(carImage(car))}" alt="${e(car.model)}">`:''}<div><h2>${booking.status==='cancelled'?'Test drive cancelled':'Test drive scheduled'}</h2><p>${e(car?.year+' '+car?.model)}</p></div></div><div class="cargpt-ticket-body"><div class="cargpt-ticket-datetime"><div><span>Date</span><strong>${e(dateLabel(bookDate))}</strong></div><div><span>Time</span><strong>${e(bookSlot)}</strong></div></div><div class="cargpt-ticket-location"><span>Test drive location:</span><strong>${e(car?.location||car?.city)}</strong>${button('View full address','address',`data-id="${e(car?.id)}"`,'cargpt-text-button')}</div></div><div class="cargpt-ticket-actions">${button('Cancel','cancel-booking',booking.status==='cancelled'||s.historyMessage?'disabled':'','cargpt-ticket-cancel')}${button('Reschedule','reschedule',s.historyMessage?'disabled':'','cargpt-ticket-reschedule')}</div></div><p class="cargpt-response">${stream(booking.status==='cancelled'?'Your demo test drive has been cancelled.':s.messages?.filter(m=>m.role==='assistant').at(-1)?.text||'Your demo test-drive ticket is ready. No appointment has been submitted.',s)}</p>${!s.historyMessage&&!s.narration?.active?`<strong class="cargpt-question">Anything else I can help you with?</strong>${button('Show me similar cars','results')}`:''}`;
  const dates=s.dates||[];if(!date&&dates[0])date=typeof dates[0]==='string'?dates[0]:dates[0].id||dates[0].date;
  return `${identity()}<p class="cargpt-response small">Choose a date and time for your test drive, or tell me when you’d like to visit.</p><div class="cargpt-slot-picker"><h2>Select date</h2><div class="cargpt-date-rail">${dates.map((value,index)=>{const id=typeof value==='string'?value:value.id||value.date;return button(`<span>${index===0?'Tomorrow':dateLabel(id,{weekday:'short'})}</span><strong>${e(dateLabel(id,{day:'numeric',month:'short'}))}</strong>`,'date',`data-date="${e(id)}" aria-pressed="${date===id}" aria-label="${e(dateLabel(id))}"`,'cargpt-date');}).join('')}</div><hr><h3>Select Time Slot</h3><div class="cargpt-slot-grid">${BOOKING_SLOTS.slice(0,expanded?12:8).map((t,index)=>button(`${index===0?'<span class="cargpt-filling">Filling fast</span>':''}${e(t)}`,'slot',`data-slot="${e(t)}" aria-pressed="${slot===t}" ${BOOKING_UNAVAILABLE.includes(t)?'disabled':''}`,'cargpt-slot')).join('')}</div>${button(expanded?'See fewer':'See more','more-slots','','cargpt-see-more')}<p class="cargpt-booking-error" role="alert">${e(s.error||'')}</p>${button('Book test drive','confirm-booking',slot?'':'disabled','cargpt-primary')}</div>`;
 }
 function detail(s){const car=selected(s);if(!car)return '';return `${identity()}<div class="cargpt-detail"><h2>${e(car.year+' '+car.model)}</h2><p>${e(car.variant)}</p><div class="cargpt-detail-badges"><span>${e(car.seller)}</span></div><button type="button" class="cargpt-detail-photo" data-c3-action="source" data-id="${e(car.id)}" aria-label="Open original vehicle listing"><img src="${e(carImage(car))}" alt="${e(car.year+' '+car.model)}"></button><p>${car.km.toLocaleString('en-IN')} km · ${e(car.fuel)} · ${e(car.transmission)}</p><strong class="cargpt-detail-price">₹${car.price.toFixed(2)} lakh${car.originalPriceRupees>car.priceRupees?` <del>₹${(car.originalPriceRupees/100000).toFixed(2)} lakh</del>`:''}</strong>${car.emiMonthlyRupees?`<p class="cargpt-detail-emi">Easy EMI from ₹${car.emiMonthlyRupees.toLocaleString('en-IN')}/month</p>`:''}<div class="cargpt-detail-summary"><strong>Listed in ${e(car.city)}</strong><p>Listed at ${e(car.location||car.city)}. Ask for the final on-road quote.</p></div><h3>In short</h3><p>${e(car.year+' '+car.model+' '+car.variant)}. ${e(car.fuel)} ${e(car.transmission.toLowerCase())}, ${car.km.toLocaleString('en-IN')} km.</p><a href="${e(car.listingUrl)}" target="_blank" rel="noopener noreferrer">View original Cars24 listing ↗</a><hr><div class="cargpt-detail-prompts">${button('EMI Options','emi',`data-id="${e(car.id)}"`)}${button('Book Test drive','book',`data-id="${e(car.id)}"`)}${button('Show me similar cars','results')}</div></div>`;}
 function userMessage(message){if(!messageTimes.has(message.id))messageTimes.set(message.id,new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}));return `<div class="cargpt-user-message" data-c3-message="${e(message.id)}"><p>${e(message.text)}</p><small>${e(messageTimes.get(message.id))} ✓✓</small></div>`;}
 function retainedMessages(s){
  const messages=s.messages||[],latest=messages.filter(m=>m.role!=='user').at(-1)?.id;
  return messages.map(message=>{
   if(message.role==='user')return userMessage(message);
   const current=message.id===latest,paintState=current?s:{};
   let content='';
   if(message.kind==='results'){const cars=(message.carIds||[]).map(id=>CARS.find(car=>car.id===id)).filter(Boolean);content=`${identity()}<div class="cargpt-recommendations" aria-label="Recommended cars">${cars.map(card).join('')}</div><p class="cargpt-response">${stream(message.text,paintState)}</p>`;}
   else if(['booking','booking-update'].includes(message.kind)&&message.booking?.status!=='draft'){content=bookingPanel({...s,stage:'confirmation',booking:message.booking,selectedCar:message.booking.car,historyMessage:!current,messages:[message],narration:current?s.narration:null});}
   else content=`${identity()}<p class="cargpt-response">${stream(message.text,paintState)}</p>`;
   return `<div class="cargpt-turn" data-c3-message="${e(message.id)}" ${current?'data-c3-latest-agent="true"':''}>${content}</div>`;
  }).join('');
 }
 function markup(s){
  if(permissionPrompt)return `${identity()}<p class="cargpt-response">I need your microphone and speech recognition permission to have a conversation and assist you</p><p class="cargpt-response small">Your browser may process speech online.</p>${snapshot.supported?button('Give permission','give-permission'):'<p class="cargpt-response">Voice input is unavailable in this browser. Choose a suggested request to continue.</p>'+prompts()}`;
  if(menu)return `<div class="cargpt-menu" role="dialog" aria-label="CarGPT menu">${button('Replay first-time experience','replay')}${button('New conversation','new')}${button('About this inventory','about')}${button('Cancel','dismiss-menu')}</div>`;
  if(s.stage==='intro')return `<div class="cargpt-introduction"><button type="button" class="cargpt-intro-close" data-c3-action="close" aria-label="Close introduction"><img src="${asset('close')}" alt=""></button><p class="cargpt-introduction-copy">${stream(introduction,s)}</p><div class="cargpt-introduction-prompts">${s.introComplete&&!s.narration?.active?prompts():''}</div>${s.introComplete&&!s.narration?.active?button(`${icon('microphone-outline')} Start talking`,'start-voice','','cargpt-primary cargpt-start-talking'):''}</div>`;
  const history=retainedMessages(s),ready=!s.narration?.active&&s.phase!=='speaking';
  if(s.stage==='detail')return `${history}<div class="cargpt-turn" data-c3-current-widget="detail">${detail(s)}</div>`;
  if(['slots','booking-pending'].includes(s.stage))return `${history}<div class="cargpt-turn" data-c3-current-widget="${s.stage}">${bookingPanel(s)}</div>`;
  if(s.stage==='confirmation'){const retained=(s.messages||[]).some(m=>['booking','booking-update'].includes(m.kind)&&m.booking?.id===s.booking?.id);return history+(retained?'':bookingPanel(s));}
  if(s.stage==='services')return `${history}<div class="cargpt-prompts">${(s.services||[]).map(service=>button(e(service.label),'service',`data-route="${e(service.route)}" data-family="${e(service.family)}"`)).join('')}</div>`;
  if(s.phase==='permission-denied'||s.permission==='denied')return `${history}<div class="cargpt-turn">${identity()}<p class="cargpt-response">I need your microphone and speech recognition permission to have a conversation and assist you</p>${button('Give permission','start-voice')}</div>`;
  if(s.phase==='permission-required')return `${history}<p class="cargpt-response">I need your microphone and speech recognition permission to have a conversation and assist you</p>`;
  if(s.phase==='thinking')return `${history}<div class="cargpt-loading" role="status"><span></span>Finding cars that fit your request…</div>`;
  if(s.error)return `${history}<p class="cargpt-response">${e(s.error)}</p>${ready?prompts():''}`;
  const latest=(s.messages||[]).filter(m=>m.role!=='user').at(-1);
  return history+(ready?(latest?.kind==='results'?`<div class="cargpt-prompts">${button('Automatic only','example','data-query="Automatic only"')}${button('Show cheaper cars','example','data-query="Show cheaper cars"')}</div>`:prompts()):'');
 }
 function paint(s){
  if(destroyed)return;const previous=snapshot;snapshot=s;view.dataset.stage=permissionPrompt?'conversation':s.stage;view.dataset.phase=s.phase;view.dataset.searchFallback=String(Boolean(s.searchContext));
  const next=markup(s);if(next!==lastMarkup){
   const scroll=feed.scrollTop,focused=feed.contains(document.activeElement)?document.activeElement:null;
   const shadowAction=focused?.shadowRoot?.activeElement?.dataset.action;
   const cardFocus=shadowAction&&focused.matches('car-card[data-c3-car]')?{id:focused.dataset.c3Car,message:focused.closest('[data-c3-message]')?.dataset.c3Message,action:shadowAction}:null;
   const focusKey=focused?.dataset?{action:focused.dataset.c3Action,id:focused.dataset.id,slot:focused.dataset.slot,date:focused.dataset.date}:null;
   const oldWidget=['detail','slots','booking-pending'].includes(previous.stage),newWidget=['detail','slots','booking-pending'].includes(s.stage);
   if(!oldWidget&&newWidget)conversationScroll=scroll;
   feed.innerHTML=next;hydrateCards();lastMarkup=next;feed.scrollTop=oldWidget&&!newWidget?conversationScroll:scroll;
   const priorUser=previous.messages?.filter(m=>m.role==='user').at(-1)?.id,currentUser=s.messages?.filter(m=>m.role==='user').at(-1)?.id;
   const anchor=currentUser!==priorUser?[...feed.querySelectorAll('[data-c3-message]')].find(n=>n.dataset.c3Message===String(currentUser)):previous.stage!==s.stage?(newWidget?feed.querySelector('[data-c3-current-widget]'):s.stage==='confirmation'?feed.querySelector('[data-c3-latest-agent]'):null):null;
   if(anchor)feed.scrollTop=anchor.offsetTop-feed.offsetTop;
   if(cardFocus){const card=[...feed.querySelectorAll('car-card[data-c3-car]')].find(node=>node.dataset.c3Car===cardFocus.id&&node.closest('[data-c3-message]')?.dataset.c3Message===cardFocus.message);[...card?.shadowRoot?.querySelectorAll('[data-action]')||[]].find(node=>node.dataset.action===cardFocus.action)?.focus({preventScroll:true});}
   if(focusKey?.action){const target=[...feed.querySelectorAll('[data-c3-action]')].find(n=>n.dataset.c3Action===focusKey.action&&n.dataset.id===focusKey.id&&n.dataset.slot===focusKey.slot&&n.dataset.date===focusKey.date);target?.focus({preventScroll:true});}
  }
  const handoff=bridge.matches&&session.takeSearchResults?.();if(handoff)queueMicrotask(()=>{if(!destroyed)bridge.matches(handoff);});
  feed.querySelectorAll('.cargpt-stream').forEach(node=>{
   const full=node.dataset.c3Full,bound=node.dataset.c3Current==='true'&&s.narration?.active&&s.narration.text===full;
   const count=bound?Math.max(0,Math.min(full.length,s.narration.revealed||0)):full.length;
   const shown=full.slice(0,count),hidden=full.slice(count),visible=node.querySelector('.cargpt-stream-visible'),pending=node.querySelector('.cargpt-stream-pending');
   if(visible.textContent!==shown)visible.textContent=shown;if(pending.textContent!==hidden)pending.textContent=hidden;
  });
  transcript.textContent=s.phase==='listening'?s.transcript||'':'';status.textContent=labels[s.phase]||'Ready';
  const listening=s.phase==='listening',speaking=s.phase==='speaking';const control=view.querySelector('[data-c3-action="microphone"]');control.setAttribute('aria-label',listening?'Pause microphone':speaking?'Interrupt and speak':'Start microphone');control.setAttribute('aria-pressed',String(listening));control.disabled=s.phase==='permission-required';view.querySelector('.cargpt-controls [data-c3-action=close]').disabled=s.phase==='permission-required';control.querySelector('img').src=asset(listening?'mic-off':'mic-on');
  visuals.update({phase:s.phase,level:s.level||0,permissionDenied:s.phase==='permission-denied',active:true,intro:s.stage==='intro'&&!permissionPrompt});
 }
 const composer=view.querySelector('.cargpt-composer'),replyInput=composer?.querySelector('input');
 const onSubmit=event=>{event.preventDefault();const text=replyInput.value.trim();if(!text)return;replyInput.value='';session.submit(text);};
 composer?.addEventListener('submit',onSubmit);
 const unsubscribe=session.subscribe(paint);
 const onClick=event=>{const hit=event.target.closest('[data-c3-action]');if(!hit||hit.disabled)return;const a=hit.dataset.c3Action,id=hit.dataset.id;
  if(a==='close'){session.suspend();bridge.close();}
  else if(a==='back'){if(snapshot.stage==='detail'||snapshot.stage==='slots'||snapshot.stage==='confirmation')session.showResults();else{session.suspend();bridge.close();}}
  else if(a==='menu'){menu=true;lastMarkup='';paint(snapshot);}
  else if(a==='dismiss-menu'){menu=false;lastMarkup='';paint(snapshot);}
  else if(a==='about')bridge.about();
  else if(a==='replay'||a==='new'){menu=false;bridge.restart();}
  else if(a==='give-permission'){permissionPrompt=false;session.startVoice();}
  else if(a==='microphone'){if(snapshot.phase==='listening')session.pauseVoice();else session.startVoice();}
  else if(a==='start-voice'){if(snapshot.stage==='intro'){permissionPrompt=true;session.requestPermission?.();lastMarkup='';paint(session.snapshot());}else session.startVoice();}
  else if(a==='example'){permissionPrompt=false;session.submitExample(hit.dataset.query);}
  else if(a==='results')session.showResults();
  else if(a==='select-car')session.selectCar(id);
  else if(a==='book'){date='';slot='';session.beginBooking(id);}
  else if(a==='date'){date=hit.dataset.date;slot='';lastMarkup='';paint(snapshot);}
  else if(a==='more-slots'){expanded=!expanded;lastMarkup='';paint(snapshot);}
  else if(a==='slot'){slot=hit.dataset.slot;lastMarkup='';paint(snapshot);}
  else if(a==='confirm-booking'){if(!date||!slot)return;session.book(selected(snapshot)?.id,date,slot);}
  else if(a==='cancel-booking')session.cancelBooking();
  else if(a==='reschedule'){date='';slot='';session.reschedule();}
  else if(a==='service'){session.suspend();bridge.service(hit.dataset.route,hit.dataset.family);}
  else if(a==='source')window.open(CARS.find(c=>c.id===id)?.listingUrl,'_blank','noopener,noreferrer');
  else if(a==='emi'){const car=CARS.find(car=>car.id===id);if(car)window.open(car.listingUrl,'_blank','noopener,noreferrer');}
  else if(a==='address'){const car=CARS.find(car=>car.id===id)||selected(snapshot);bridge.notice(car?.location||car?.city);}
 };
 const onCardSave=event=>{const card=event.target.closest('car-card[data-c3-car]');if(!card)return;bridge.save(card.dataset.c3Car,card.wishlisted);feed.querySelectorAll('car-card[data-c3-car]').forEach(other=>{if(other.dataset.c3Car===card.dataset.c3Car&&other!==card)other.wishlisted=card.wishlisted;});};
 const onCardDetails=event=>{const card=event.target.closest('car-card[data-c3-car]');if(card){if(snapshot.searchContext){session.suspend();bridge.details(card.dataset.c3Car);}else session.selectCar(card.dataset.c3Car);}};
 view.addEventListener('wishlist-toggle',onCardSave);view.addEventListener('view-details',onCardDetails);
 const onVisibility=()=>{if(document.hidden)session.suspend();};view.addEventListener('click',onClick);document.addEventListener('visibilitychange',onVisibility);if(session.snapshot().stage==='intro')session.intro();
 return ()=>{destroyed=true;composer?.removeEventListener('submit',onSubmit);unsubscribe();session.suspend();visuals.destroy();view.removeEventListener('click',onClick);view.removeEventListener('wishlist-toggle',onCardSave);view.removeEventListener('view-details',onCardDetails);document.removeEventListener('visibilitychange',onVisibility);};
}
