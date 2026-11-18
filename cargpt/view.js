import {getCardFamily} from '../car-card-settings.js';
import {CARS} from './catalogue.js';
import {JOURNEY_SERVICES} from './context.js';
import {renderCarGPTServicePicker} from '../ui/cargpt-service-picker.js';
import '../components/car-card/car-card.js';
import {carImage,cardData} from '../car-card-adapter.js';
import {BOOKING_SLOTS,BOOKING_UNAVAILABLE} from './session.js';
import {mountC3Visuals} from './visuals.js';
import {leaveCarGPT} from './entry.js';
import {mountAttachments,mountCarGPTMenu} from '../ui/cargpt-attachments.js';
import {galleryMarkup,gallerySelection} from '../ui/cargpt-gallery.js';
import {mountComparisonWidget,mountComparisonChoices,mountComparisonPage} from '../ui/car-comparison-ui.js';
const e=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=name=>`<i class="cargpt-icon" data-icon="${name}" aria-hidden="true"></i>`;
const asset=name=>`./cargpt/assets/${name}.svg`;
const button=(label,action,extra='',cls='cargpt-chip')=>`<button type="button" class="${cls}" data-c3-action="${action}" ${extra}>${label}</button>`;
const introduction='Hey I’m CarGPT, your voice assistant. Tell the brand and budget of car you want to buy and I’ll help you short list it.';
const examples=['Show me cars within ₹12 Lakh budget','Car for 6 people under ₹8 lakhs','Kia Seltos under ₹7 lakhs'];
const stream=(text,s)=>{const full=String(text??'');return `<span class="cargpt-stream" data-c3-current="${Boolean(s.messages)}" data-c3-full="${e(full)}"><span class="cargpt-stream-visible">${e(full)}</span><span class="cargpt-stream-pending" aria-hidden="true"></span></span>`;};
const identity=()=>'<div class="cargpt-identity"><span aria-hidden="true">✦</span> CarGPT</div>';
const labels={idle:'Ready',connecting:'Connecting',listening:'Listening',thinking:'Thinking',streaming:'Responding',speaking:'Speaking','permission-required':'Ready','permission-denied':'Mic permission needed','voice-paused':'Voice paused','mic-off':'Mic off'};

export function mountCarGPT(root,{session,bridge}) {
 const shell=`<section class="cargpt-view" aria-label="CarGPT voice assistant" data-stage="intro"><header class="cargpt-header"><div class="cargpt-menu-controls"></div><strong>CarGPT</strong><button type="button" class="cargpt-header-control" data-c3-action="exit" aria-label="Close CarGPT">${icon('cross-large-outline')}</button></header><div class="cargpt-feed" tabindex="-1"></div><footer class="cargpt-dock"><div class="cargpt-visuals"></div><p class="cargpt-transcript" aria-live="polite"></p><div class="cargpt-controls"><button type="button" class="cargpt-control" data-c3-action="microphone" aria-label="Start microphone"><img src="${asset('mic-on')}" alt=""></button><span class="cargpt-orb-space" aria-hidden="true"></span><button type="button" class="cargpt-control" data-c3-action="close" aria-label="Close voice"><img src="${asset('close')}" alt=""></button></div><p class="cargpt-status" role="status"></p></footer><form class="cargpt-composer" aria-label="Message CarGPT"><div class="cargpt-draft-attachments"></div><div class="cargpt-composer-body"><div class="cargpt-attachment-controls"></div><input name="cargpt-prompt" aria-label="Message CarGPT" placeholder="Type a prompt..." maxlength="600" autocomplete="off"><button type="submit" class="cargpt-send" aria-label="Start voice chat">${icon('voice-1-wave-outline')}</button></div></form></section>`;
 if(bridge.renderMarkup)bridge.renderMarkup(root,shell);else root.innerHTML=shell;
 const view=root.firstElementChild,feed=view.querySelector('.cargpt-feed'),transcript=view.querySelector('.cargpt-transcript'),status=view.querySelector('.cargpt-status');
 const visuals=mountC3Visuals(view.querySelector('.cargpt-visuals'));
 let snapshot=session.snapshot(),lastMarkup='',firstPaint=true,destroyed=false,date='',slot='',expanded=false,voiceMode=bridge.entryMode==='voice'||(snapshot.outputMode!=='text'&&!bridge.textEntry&&!snapshot.searchContext),conversationScroll=0,queuedQuery=String(bridge.initialQuery||''),photoViewer=null,viewerOpening=false,viewerRevision=0;const messageTimes=new Map(),galleryStates={get:key=>session.getGalleryState(key),set:(key,value)=>session.setGalleryState(key,value)};
 let comparisonDisposers=[],comparisonPage=null,comparisonInput='pointer';
 const revealedComparisons=new Set(snapshot.messages.filter(turn=>turn.kind==='comparison').map(turn=>String(turn.id)));
 const markComparisonInput=event=>{comparisonInput=event.type==='keydown'||event.detail===0?'keyboard':'pointer';};
 view.addEventListener('keydown',markComparisonInput,true);view.addEventListener('click',markComparisonInput,true);
 const clearComparisons=()=>{comparisonDisposers.forEach(dispose=>dispose());comparisonDisposers=[];};
 const composer=view.querySelector('.cargpt-composer'),input=composer.querySelector('input'),send=composer.querySelector('.cargpt-send');
 const welcome=()=>`<div class="cargpt-welcome">${identity()}<p>${introduction}</p>${prompts()}</div>`;
 const exit=(instant=false)=>{session.suspend();leaveCarGPT(view,bridge.close,{instant});};
 const prompts=()=>`<div class="cargpt-prompts">${(snapshot.searchContext?['Show me cars under ₹12 lakh','Any make','Search in Gurugram']:examples).map(q=>button(e(q),'example',`data-query="${e(q)}" aria-label="Try example: ${e(q)}"`)).join('')}</div>`;
 const lookup=id=>session.getCar(id);
 const selected=s=>s.selectedCar||CARS.find(c=>c.id===s.booking?.carId)||null;
 function dateLabel(value,options={day:'numeric',month:'short',year:'numeric'}){return value?new Date(`${value}T12:00:00`).toLocaleDateString('en-IN',options):'';}
 function card(car){return `<car-card class="cargpt-result-card" data-c3-car="${e(car.id)}" data-car-id="${e(car.id)}"></car-card>`;}
 function hydrateCards(){feed.querySelectorAll('car-card[data-c3-car]').forEach(card=>{const car=lookup(card.dataset.c3Car);if(car){card.classList.add('cargpt-result-card');card.data={...cardData(car,bridge.saved.has(car.id),true),layout:'slider',family:getCardFamily('contextual')};}});}

 function hydrateComparisons(){
  feed.querySelectorAll('[data-c3-comparison]').forEach(node=>{const turn=snapshot.messages.find(message=>String(message.id)===node.dataset.c3Comparison);if(turn?.comparison){const id=String(turn.id),animateReveal=!revealedComparisons.has(id)&&comparisonInput!=='keyboard';revealedComparisons.add(id);comparisonDisposers.push(mountComparisonWidget(node,{value:turn.comparison,animateReveal,onOpen:slot=>openComparison(turn.comparison,slot,node.querySelector('button'))}));}});
  feed.querySelectorAll('[data-c3-comparison-picker]').forEach(node=>{const turn=snapshot.messages.find(message=>String(message.id)===node.dataset.c3ComparisonPicker);if(turn)comparisonDisposers.push(mountComparisonChoices(node,{cars:session.comparisonCars(),anchor:turn.comparisonAnchor,onSelect:id=>session.chooseComparisonCar(id,turn.comparisonAnchor?.id)}));});
 }
 function openComparison(initial,initialSlot,trigger){
  if(comparisonPage||destroyed)return;session.suspend();const previousScroll=feed.scrollTop,previousURL=location.href,key='cargpt-comparison-'+Date.now();let current=initial,disposed=false;
  const host=document.createElement('div');host.className='cc-page-host';view.append(host);const hidden=[...view.children].filter(node=>node!==host);hidden.forEach(node=>{node.inert=true;node.setAttribute('aria-hidden','true');});
  history.pushState({...history.state,cargptComparison:key},'',location.pathname+location.search+'#comparison');
  const close=(commit=true)=>{if(disposed)return;disposed=true;window.removeEventListener('popstate',onPop);dispose();host.remove();hidden.forEach(node=>{node.inert=false;node.removeAttribute('aria-hidden');});comparisonPage=null;
   if(history.state?.cargptComparison===key)history.replaceState(null,'',previousURL);
   if(commit&&current.id!==initial.id)session.recordComparison(current,`Compare ${current.cars.map(car=>car.year+' '+car.model).join(' with ')} for ${current.priority==='price'?'lower price':current.priority==='km'?'lower mileage':'a newer car'}`);
   else if(!destroyed){feed.scrollTop=previousScroll;(trigger?.isConnected?trigger:feed).focus({preventScroll:true});}
  };
  const onPop=()=>close();window.addEventListener('popstate',onPop);
  const dispose=mountComparisonPage(host,{initial,animateReveal:comparisonInput!=='keyboard',cars:session.comparisonCars(),initialSlot,onChange:value=>current=value,onBack:()=>{if(history.state?.cargptComparison===key)history.back();else close();}});
  comparisonPage={destroy:()=>close(false)};
 }

 function bookingPanel(s){
  const booking=s.booking||{},car=['confirmation','booking-pending'].includes(s.stage)?booking.car||CARS.find(c=>c.id===booking.carId)||selected(s):selected(s),bookDate=booking.date||date,bookSlot=booking.slot||slot;
  if(s.stage==='booking-pending')return `${identity()}<div class="cargpt-loading" role="status"><span></span>Confirming your test drive…</div><p class="cargpt-response small">${e(car?.model)} · ${e(dateLabel(bookDate))} · ${e(bookSlot)}</p>`;
  if(s.stage==='confirmation'){
   const location=car?.location||car?.city||'Gurugram',directions=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}`;
   const response=s.messages?.filter(m=>m.role==='assistant').at(-1)?.text||'Your test-drive ticket is ready.';
   return `${identity()}<p class="cargpt-response">${stream(response,s)}</p><div class="cargpt-ticket"><div class="cargpt-ticket-top">${car?`<img src="${e(carImage(car))}" alt="${e(car.model)}">`:''}<div><h2>${booking.status==='cancelled'?'Test drive cancelled':'Test drive scheduled'}</h2><p>${e(car?.year+' '+car?.model)}</p></div></div><div class="cargpt-ticket-body"><div class="cargpt-ticket-datetime"><div><span>Date</span><strong>${e(dateLabel(bookDate))}</strong></div><div><span>Time</span><strong>${e(bookSlot)}</strong></div></div><div class="cargpt-ticket-location"><div><span>Test drive location:</span><strong>${e(location)}</strong>${button('View full address','address',`data-id="${e(car?.id)}"`,'cargpt-text-button')}</div><a class="cargpt-directions" href="${e(directions)}" target="_blank" rel="noopener noreferrer" aria-label="Get directions to ${e(location)}">${icon('arrow-lbow-up-right-filled')}</a></div></div><div class="cargpt-ticket-actions">${button('Cancel','cancel-booking',booking.status==='cancelled'||s.historyMessage?'disabled':'','cargpt-ticket-cancel')}${button('Reschedule','reschedule',s.historyMessage?'disabled':'','cargpt-ticket-reschedule')}</div></div>${!s.historyMessage&&!s.narration?.active?`<strong class="cargpt-question">Anything else I can help you with?</strong>${button('Show me similar cars','similar')}`:''}`;
  }
  const dates=s.dates||[];if(!date&&dates[0])date=typeof dates[0]==='string'?dates[0]:dates[0].id||dates[0].date;
  return `${s.omitSlotIntro?'':identity()+'<p class="cargpt-response small">Choose a date and time for your test drive, or tell me when you’d like to visit.</p>'}<div class="cargpt-slot-picker"><h2>Select date</h2><div class="cargpt-date-rail">${dates.map((value,index)=>{const id=typeof value==='string'?value:value.id||value.date;return button(`<span>${index===0?'Tomorrow':dateLabel(id,{weekday:'short'})}</span><strong>${e(dateLabel(id,{day:'numeric',month:'short'}))}</strong>`,'date',`data-date="${e(id)}" aria-pressed="${date===id}" aria-label="${e(dateLabel(id))}"`,'cargpt-date');}).join('')}</div><hr><h3>Select Time Slot</h3><div class="cargpt-slot-grid">${BOOKING_SLOTS.slice(0,expanded?12:8).map((t,index)=>button(`${index===0?'<span class="cargpt-filling">Filling fast</span>':''}${e(t)}`,'slot',`data-slot="${e(t)}" aria-pressed="${slot===t}" ${BOOKING_UNAVAILABLE.includes(t)?'disabled':''}`,'cargpt-slot')).join('')}</div>${button(expanded?'See fewer':'See more','more-slots','','cargpt-see-more')}<p class="cargpt-booking-error" role="alert">${e(s.error||'')}</p>${button('Book test drive','confirm-booking',slot?'':'disabled','cargpt-primary')}</div>`;
 }
 function detail(s){const car=selected(s);if(!car)return '';return `${identity()}<div class="cargpt-detail"><h2>${e(car.year+' '+car.model)}</h2><p>${e(car.variant)}</p><div class="cargpt-detail-badges"><span>${e(car.seller)}</span></div><button type="button" class="cargpt-detail-photo" data-c3-action="source" data-id="${e(car.id)}" aria-label="Open original vehicle listing"><img src="${e(carImage(car))}" alt="${e(car.year+' '+car.model)}"></button><p>${car.km.toLocaleString('en-IN')} km · ${e(car.fuel)} · ${e(car.transmission)}</p><strong class="cargpt-detail-price">₹${car.price.toFixed(2)} lakh${car.originalPriceRupees>car.priceRupees?` <del>₹${(car.originalPriceRupees/100000).toFixed(2)} lakh</del>`:''}</strong>${car.emiMonthlyRupees?`<p class="cargpt-detail-emi">Easy EMI from ₹${car.emiMonthlyRupees.toLocaleString('en-IN')}/month</p>`:''}<div class="cargpt-detail-summary"><strong>Listed in ${e(car.city)}</strong><p>Listed at ${e(car.location||car.city)}. Ask for the final on-road quote.</p></div><h3>In short</h3><p>${e(car.year+' '+car.model+' '+car.variant)}. ${e(car.fuel)} ${e(car.transmission.toLowerCase())}, ${car.km.toLocaleString('en-IN')} km.</p><a href="${e(car.listingUrl)}" target="_blank" rel="noopener noreferrer">View original Cars24 listing ↗</a><hr><div class="cargpt-detail-prompts">${button('More images','gallery',`data-id="${e(car.id)}"`)}${button('EMI Options','emi',`data-id="${e(car.id)}"`)}${button('Book Test drive','book',`data-id="${e(car.id)}"`)}${button('Show me similar cars','similar')}</div></div>`;}
 function userMessage(message){if(!messageTimes.has(message.id))messageTimes.set(message.id,new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}));return `<div class="cargpt-user-message" data-c3-message="${e(message.id)}">${message.attachments?.length?`<div class="cargpt-sent-attachments">${message.attachments.map(file=>file.previewUrl?`<img src="${e(file.previewUrl)}" alt="${e(file.name)}">`:`<span>${e(file.name)}</span>`).join('')}</div>`:''}<p>${e(message.text)}</p><small>${e(messageTimes.get(message.id))} ✓✓</small></div>`;}
 function retainedMessages(s){
  const messages=(s.messages||[]).filter(m=>m.role!=='assistant'||m.text!==introduction),latest=messages.filter(m=>m.role!=='user').at(-1)?.id;
  return messages.map(message=>{
   if(message.role==='user')return userMessage(message);
   const current=message.id===latest,paintState=current?s:{};
   let content='';
   if(message.kind==='service-picker'){if(!current||s.entryContext?.journey!=='all')return '';content=renderCarGPTServicePicker(JOURNEY_SERVICES);}
   else if(['results','alternatives'].includes(message.kind)){const cars=(message.carIds||[]).map(id=>lookup(id)).filter(Boolean);content=`${identity()}<p class="cargpt-response">${stream(message.text,paintState)}</p>${message.contextNote?`<p class="cargpt-context-note">${e(message.contextNote)}</p>`:''}${message.kind==='alternatives'?'<p class="cargpt-response small">Nearby alternatives · differ from your request</p>':''}<div class="cargpt-recommendations" role="region" tabindex="0" aria-label="Recommended cars">${cars.map(card).join('')}</div><p class="cargpt-response">Open a car for photos, EMI options or a test drive.</p>`;}
   else if(message.kind==='comparison'&&message.comparison){content=`${identity()}<p class="cargpt-response small">Here’s how these two listings compare.</p><div data-c3-comparison="${e(message.id)}"></div>`;}
   else if(message.kind==='comparison-picker'){content=`${identity()}<p class="cargpt-response">${stream(message.text,paintState)}</p><div data-c3-comparison-picker="${e(message.id)}"></div>`;}
   else if(message.kind==='detail'&&message.car){content=`${identity()}<p class="cargpt-response small">${stream(message.text,paintState)}</p>${detail({...s,selectedCar:message.car}).replace(identity(),'')}`;}
   else if(message.kind==='booking-prompt'&&message.car){content=`${identity()}<p class="cargpt-response small">${stream(message.text,paintState)}</p>${current&&s.stage==='slots'?bookingPanel({...s,selectedCar:message.car,omitSlotIntro:true}):''}`;}
   else if(message.kind==='gallery'&&message.car){const key='gallery-'+message.id;content=`${identity()}<p class="cargpt-response small">${stream(message.text,paintState)}</p>${galleryMarkup(message.car,galleryStates.get(key),key)}`;}
   else if(['booking','booking-update'].includes(message.kind)&&message.booking?.status!=='draft'){content=bookingPanel({...s,stage:'confirmation',booking:message.booking,selectedCar:message.booking.car,historyMessage:!current,messages:[message],narration:current?s.narration:null});}
   else content=`${identity()}<p class="cargpt-response">${stream(message.text,paintState)}</p>`;
   return `<div class="cargpt-turn" data-c3-message="${e(message.id)}" ${current?'data-c3-latest-agent="true"':''} ${current&&['gallery','detail','booking-prompt'].includes(message.kind)?`data-c3-current-widget="${message.kind==='booking-prompt'?'slots':message.kind}"`:''}>${content}</div>`;
  }).join('');
 }
 function journeyOptions(question){
  return `<div class="cargpt-journey-options" role="group" aria-label="${e(question.text||'Next steps')}">${question.options.map(option=>button(e(option.label),question.key==='continue'?'journey-continue':question.key==='loan'?'loan-type':question.key==='registration'?'manual-vehicle':question.key.startsWith('vehicle-')?'vehicle-answer':'preference',`data-field="${e(question.key)}" data-value="${e(option.value)}"`)).join('')}</div>`;
 }
 function markup(s){

  if(s.stage==='intro')return welcome();

  const history=(s.messages||[]).some(m=>m.text!==introduction)?retainedMessages(s):welcome(),ready=!s.narration?.active&&s.phase!=='speaking';
  if(s.stage==='gallery'){const car=selected(s);return s.messages.some(m=>m.kind==='gallery'&&m.car?.id===car?.id)?history:`${history}<div class="cargpt-turn" data-c3-current-widget="gallery">${identity()}${galleryMarkup(car,galleryStates.get(car.id),car.id)}</div>`;}
  if(s.stage==='detail'||s.stage==='comparison')return history;
  if(s.stage==='slots')return history;
  if(s.stage==='booking-pending')return `${history}<div class="cargpt-turn" data-c3-current-widget="booking-pending">${bookingPanel(s)}</div>`;
  if(s.stage==='confirmation'){const retained=(s.messages||[]).some(m=>['booking','booking-update'].includes(m.kind)&&m.booking?.id===s.booking?.id);return history+(retained?'':bookingPanel(s));}
  if(s.stage==='services')return `${history}<div class="cargpt-prompts">${(s.services||[]).map(service=>button(e(service.label),'service',`data-route="${e(service.route)}" data-family="${e(service.family)}"`)).join('')}</div>`;
  if(s.phase==='thinking')return `${history}<div class="cargpt-loading" role="status"><span></span>Finding cars that fit your request…</div>`;
  if(s.error)return history;
  const latest=(s.messages||[]).filter(m=>m.role!=='user').at(-1);
  if(s.journeyQuestion)return history+journeyOptions(s.journeyQuestion);
  return history+((s.messages||[]).some(m=>m.role==='user')&&ready?(latest?.kind==='results'?`<div class="cargpt-prompts">${button('Automatic only','example','data-query="Automatic only"')}${button('Show cheaper cars','example','data-query="Show cheaper cars"')}</div>`:prompts()):'');
 }
 function paint(s){
  if(destroyed)return;const previous=snapshot;snapshot=s;view.dataset.stage=s.stage==='intro'?'composer':s.stage;view.dataset.mode=voiceMode?'voice':'text';view.dataset.phase=s.phase;
  const next=markup(s);if(next!==lastMarkup){
   const opening=firstPaint;firstPaint=false;
   const scroll=feed.scrollTop,focused=feed.contains(document.activeElement)?document.activeElement:null;
   const railPositions=new Map([...feed.querySelectorAll('.cargpt-recommendations')].map(rail=>[rail.closest('[data-c3-message]')?.dataset.c3Message,rail.scrollLeft]));
   const focusedRail=focused?.matches('.cargpt-recommendations')?focused.closest('[data-c3-message]')?.dataset.c3Message:null;
   const shadowAction=focused?.shadowRoot?.activeElement?.dataset.action;
   const cardFocus=shadowAction&&focused.matches('car-card[data-c3-car]')?{id:focused.dataset.c3Car,message:focused.closest('[data-c3-message]')?.dataset.c3Message,action:shadowAction}:null;
   const focusKey=focused?.dataset?{action:focused.dataset.c3Action,id:focused.dataset.id,slot:focused.dataset.slot,date:focused.dataset.date}:null;
   const oldWidget=['detail','gallery','slots','booking-pending'].includes(previous.stage),newWidget=['detail','gallery','slots','booking-pending'].includes(s.stage);
   if(!oldWidget&&newWidget)conversationScroll=scroll;
   clearComparisons();if(bridge.renderMarkup)bridge.renderMarkup(feed,next);else feed.innerHTML=next;hydrateCards();hydrateComparisons();lastMarkup=next;feed.scrollTop=oldWidget&&!newWidget?conversationScroll:scroll;
   feed.querySelectorAll('.cargpt-recommendations').forEach(rail=>{rail.scrollLeft=railPositions.get(rail.closest('[data-c3-message]')?.dataset.c3Message)||0;});
   feed.querySelectorAll('.cargpt-gallery').forEach(gallery=>{const rail=gallery.querySelector('.cargpt-photo-gallery');rail.scrollLeft=(galleryStates.get(gallery.dataset.galleryKey)?.index||0)*rail.clientWidth;});
   if(focusedRail)[...feed.querySelectorAll('.cargpt-recommendations')].find(rail=>rail.closest('[data-c3-message]')?.dataset.c3Message===focusedRail)?.focus({preventScroll:true});
   const priorUser=previous.messages?.filter(m=>m.role==='user').at(-1)?.id,currentUser=s.messages?.filter(m=>m.role==='user').at(-1)?.id;
   const priorAgent=previous.messages?.filter(m=>m.role==='assistant').at(-1)?.id,currentAgent=s.messages?.filter(m=>m.role==='assistant').at(-1)?.id;
   const anchor=opening?(s.messages?.length>1?feed.querySelector('[data-c3-latest-agent]')||feed.lastElementChild:null):currentUser!==priorUser?[...feed.querySelectorAll('[data-c3-message]')].find(n=>n.dataset.c3Message===String(currentUser)):currentAgent!==priorAgent?feed.querySelector('[data-c3-latest-agent]'):previous.stage!==s.stage?(newWidget?feed.querySelector('[data-c3-current-widget]'):s.stage==='confirmation'?feed.querySelector('[data-c3-latest-agent]'):null):null;
   if(anchor)feed.scrollTop=anchor.offsetTop-feed.offsetTop;
   if(cardFocus){const card=[...feed.querySelectorAll('car-card[data-c3-car]')].find(node=>node.dataset.c3Car===cardFocus.id&&node.closest('[data-c3-message]')?.dataset.c3Message===cardFocus.message);[...card?.shadowRoot?.querySelectorAll('[data-action]')||[]].find(node=>node.dataset.action===cardFocus.action)?.focus({preventScroll:true});}
   if(focusKey?.action){const target=[...feed.querySelectorAll('[data-c3-action]')].find(n=>n.dataset.c3Action===focusKey.action&&n.dataset.id===focusKey.id&&n.dataset.slot===focusKey.slot&&n.dataset.date===focusKey.date&&n.closest('[data-c3-message]')?.dataset.c3Message===focused?.closest('[data-c3-message]')?.dataset.c3Message);target?.focus({preventScroll:true});}
  }
  const handoff=bridge.matches&&session.takeSearchResults?.();if(handoff)queueMicrotask(()=>{if(!destroyed)bridge.matches(handoff);});
  feed.querySelectorAll('.cargpt-stream').forEach(node=>{
   const full=node.dataset.c3Full,bound=node.dataset.c3Current==='true'&&s.narration?.active&&s.narration.text===full;
   const count=bound?Math.max(0,Math.min(full.length,s.narration.revealed||0)):full.length;
   const shown=full.slice(0,count),hidden=full.slice(count),visible=node.querySelector('.cargpt-stream-visible'),pending=node.querySelector('.cargpt-stream-pending');
   if(visible.textContent!==shown)visible.textContent=shown;if(pending.textContent!==hidden)pending.textContent=hidden;
  });
  transcript.textContent=s.phase==='listening'?s.transcript||'':'';status.textContent=s.phase==='idle'&&s.error&&['network','unsupported','audio-capture','recognition-error'].includes(s.errorCode)?'Voice unavailable':labels[s.phase]||'Ready';
  const listening=s.phase==='listening',speaking=s.phase==='speaking';const control=view.querySelector('[data-c3-action="microphone"]');control.setAttribute('aria-label',listening?'Pause microphone':speaking?'Interrupt and speak':'Start microphone');control.setAttribute('aria-pressed',String(listening));control.disabled=s.phase==='permission-required';view.querySelector('.cargpt-controls [data-c3-action=close]').disabled=false;control.querySelector('img').src=asset(['voice-paused','mic-off','permission-denied'].includes(s.phase)?'mic-off':'mic-on');
  if(!closingVoice)visuals.update({phase:s.phase,level:s.level||0,permissionDenied:s.phase==='permission-denied',active:voiceMode,intro:false});
  // A contextual chip is a real user turn. Let the native permission/start
  // handshake settle first so submitting it cannot cancel an in-flight grant.
  if(queuedQuery&&(!voiceMode||!s.supported||s.permission==='denied'||s.phase==='listening'||s.error)){
   const query=queuedQuery;queuedQuery='';queueMicrotask(()=>{if(!destroyed)session.submit(query);});
  }
 }
 let closingVoice=false;
 async function closeVoice(instant=false){if(closingVoice)return;closingVoice=true;attachments.close();session.setOutputMode('text');view.dataset.voiceClosing='true';await visuals.dismissTo(view.querySelector('[data-c3-action="close"]'),{instant});if(destroyed)return;voiceMode=false;delete view.dataset.voiceClosing;closingVoice=false;paint(session.snapshot());input.focus({preventScroll:true});}
 const headerMenu=mountCarGPTMenu(view.querySelector('.cargpt-menu-controls'),{container:view,onNewConversation:bridge.restart,onAbout:bridge.about});
 const attachments=mountAttachments(composer.querySelector('.cargpt-attachment-controls'),{tray:composer.querySelector('.cargpt-draft-attachments'),container:view,onChange:()=>onInput()});
 function galleryContext(node){const gallery=node.closest('.cargpt-gallery');if(!gallery)return null;const key=gallery.dataset.galleryKey,id=gallery.dataset.galleryCar,car=lookup(id)||snapshot.messages.find(m=>m.car?.id===id)?.car||selected(snapshot);return{gallery,key,car,...gallerySelection(car,galleryStates.get(key))};}
 function syncGallery(context,index){const {gallery,key}=context;galleryStates.set(key,{...galleryStates.get(key),category:context.category,index});gallery.querySelectorAll('.cargpt-gallery-dots>span').forEach((n,i)=>n.dataset.active=String(i===index));gallery.querySelectorAll('.cargpt-gallery-thumbnails>button').forEach((n,i)=>n.setAttribute('aria-pressed',String(i===index)));gallery.querySelectorAll('.cargpt-gallery-photo').forEach((n,i)=>n.tabIndex=i===index?0:-1);}
 const onGalleryScroll=event=>{if(!event.target.matches?.('.cargpt-photo-gallery'))return;const context=galleryContext(event.target);if(context){const index=Math.max(0,Math.min(context.photos.length-1,Math.round(event.target.scrollLeft/event.target.clientWidth)));if(index!==context.index)syncGallery(context,index);}};
 // Portalling a modal can briefly move focus outside the phone before its
 // initial focus settles. Capture Escape there too, including while loading.
 const onPhotoKey=event=>{if(event.key==='Escape'&&(viewerOpening||view.querySelector('.cargpt-photo-viewer'))){event.preventDefault();event.stopPropagation();viewerRevision++;viewerOpening=false;photoViewer?.destroy();photoViewer=null;}};
 view.addEventListener('scroll',onGalleryScroll,true);
 document.addEventListener('keydown',onPhotoKey,true);
 session.setOutputMode(voiceMode?'voice':'text');
 const unsubscribe=session.subscribe(paint);
 const onClick=event=>{const hit=event.target.closest('[data-c3-action]');if(!hit||hit.disabled)return;const a=hit.dataset.c3Action,id=hit.dataset.id;
  if(a==='close'){closeVoice(event.detail===0);}
  else if(a==='exit')exit(event.detail===0);
  else if(a==='microphone'){if(snapshot.phase==='listening')session.pauseVoice();else{session.setContinuousVoice?.(true);session.startVoice({requestPermission:true});}}
  else if(a==='start-voice'){voiceMode=true;session.setContinuousVoice?.(true);session.startVoice({requestPermission:true});}
  else if(a==='choose-journey')session.chooseJourney(hit.dataset.journey);
  else if(a==='preference')session.answerPreference(hit.dataset.field,hit.dataset.value,hit.textContent);
  else if(a==='manual-vehicle')session.enterVehicleManually();
  else if(a==='vehicle-answer')session.answerVehicle(hit.dataset.field.slice(8),hit.dataset.value);
  else if(a==='loan-type')session.selectLoanType(hit.dataset.value);
  else if(a==='journey-continue')bridge.continueJourney(snapshot.entryContext);
  else if(a==='example'){snapshot.entryContext?session.submit(hit.dataset.query):session.submitExample(hit.dataset.query);}
  else if(a==='results')session.showResults();
  else if(a==='similar')session.submit('Show me similar cars');
  else if(a==='select-car')session.selectCar(id);
  else if(a==='book'){date='';slot='';session.beginBooking(id);}
  else if(a==='date'){date=hit.dataset.date;slot='';lastMarkup='';paint(snapshot);}
  else if(a==='more-slots'){expanded=!expanded;lastMarkup='';paint(snapshot);}
  else if(a==='slot'){slot=hit.dataset.slot;lastMarkup='';paint(snapshot);}
  else if(a==='confirm-booking'){if(!date||!slot)return;session.book(selected(snapshot)?.id,date,slot);}
  else if(a==='cancel-booking')session.cancelBooking();
  else if(a==='reschedule'){date='';slot='';session.reschedule();}
  else if(a==='service'){session.suspend();bridge.service(hit.dataset.route,hit.dataset.family);}
  else if(a==='source'){const car=snapshot.selectedCar?.id===id?snapshot.selectedCar:lookup(id);if(car?.listingUrl)window.open(car.listingUrl,'_blank','noopener,noreferrer');}
  else if(a==='emi'){session.selectCar(snapshot.selectedCar?.id===id?snapshot.selectedCar:id,{record:false});session.submit('Show EMI options');}
  else if(a==='gallery'){session.selectCar(snapshot.selectedCar?.id===id?snapshot.selectedCar:id,{record:false});session.submit('Show photos');}
  else if(a==='gallery-category'){const c=galleryContext(hit);galleryStates.set(c.key,{...galleryStates.get(c.key),category:hit.dataset.category,index:0});lastMarkup='';paint(snapshot);[...feed.querySelectorAll('.cargpt-gallery')].find(n=>n.dataset.galleryKey===c.key)?.querySelector(`[data-category="${hit.dataset.category}"]`)?.focus({preventScroll:true});}
  else if(a==='gallery-photo'){const c=galleryContext(hit),index=Number(hit.dataset.photo);syncGallery(c,index);c.gallery.querySelector('.cargpt-photo-gallery').scrollTo({left:index*c.gallery.querySelector('.cargpt-photo-gallery').clientWidth,behavior:event.detail&&!matchMedia('(prefers-reduced-motion: reduce)').matches?'smooth':'instant'});}
  else if(a==='gallery-enlarge'){const c=galleryContext(hit),index=Number(hit.dataset.photo),token=++viewerRevision;photoViewer?.destroy();viewerOpening=true;import('../ui/cargpt-photo-viewer.js').then(({mountPhotoViewer})=>{if(!destroyed&&token===viewerRevision){photoViewer=mountPhotoViewer(view,{src:c.photos[index],title:`${c.car.year} ${c.car.model} · ${c.category} · ${index+1}`,trigger:hit,onClose:()=>{viewerOpening=false;photoViewer=null;}});}});}
  else if(a==='gallery-feedback'){const c=galleryContext(hit),value=hit.getAttribute('aria-pressed')==='true'?'':hit.dataset.feedback;galleryStates.set(c.key,{...galleryStates.get(c.key),category:c.category,index:c.index,feedback:value});c.gallery.querySelectorAll('[data-feedback]').forEach(n=>n.setAttribute('aria-pressed',String(n.dataset.feedback===value)));}
  else if(a==='gallery-share'){const c=galleryContext(hit);navigator.clipboard?.writeText(c.car.listingUrl).then(()=>bridge.notice('Car listing link copied.')).catch(()=>bridge.notice('Open the original listing to share this car.'));}
  else if(a==='address'){const car=lookup(id)||selected(snapshot);bridge.notice(car?.location||car?.city);}
 };
 const onCardSave=event=>{const card=event.target.closest('car-card[data-c3-car]');if(!card)return;bridge.save(card.dataset.c3Car,card.wishlisted);feed.querySelectorAll('car-card[data-c3-car]').forEach(other=>{if(other.dataset.c3Car===card.dataset.c3Car&&other!==card)other.wishlisted=card.wishlisted;});};
 const onCardDetails=event=>{const card=event.target.closest('car-card[data-c3-car]');if(card){if(snapshot.searchContext){session.suspend();bridge.details(card.dataset.c3Car);}else session.selectCar(card.dataset.c3Car);}};
 const onCardTestDrive=event=>{const card=event.target.closest('car-card[data-c3-car]');if(card)session.beginBooking(card.dataset.c3Car);};
 const onCardAssurance=event=>{const card=event.target.closest('car-card[data-c3-car]');if(card)bridge.notice([card.data.assuranceLead,card.data.assurance,...card.data.assurances||[]].filter(Boolean).join(' · '));};
 view.addEventListener('test-drive',onCardTestDrive);view.addEventListener('assurance-details',onCardAssurance);
 view.addEventListener('wishlist-toggle',onCardSave);view.addEventListener('view-details',onCardDetails);
 const onVisibility=()=>{if(document.hidden)session.suspend();};view.addEventListener('click',onClick);document.addEventListener('visibilitychange',onVisibility);
 const onInput=()=>{const typing=!!input.value.trim()||attachments.snapshot().length>0;send.setAttribute('aria-label',typing?'Send message':'Start voice chat');send.dataset.typing=String(typing);send.innerHTML=icon(typing?'arrow-up-outline':'voice-1-wave-outline');};
 const onSubmit=event=>{event.preventDefault();const query=input.value.trim();if(query||attachments.snapshot().length){input.value='';const files=attachments.take();onInput();session.submit(query||'Attached files',{attachments:files});}else{attachments.close();voiceMode=true;session.setContinuousVoice?.(true);session.startVoice({requestPermission:true});}};
 const onKey=event=>{if(event.key==='Escape'&&(viewerOpening||view.querySelector('.cargpt-photo-viewer'))){event.preventDefault();event.stopPropagation();viewerRevision++;viewerOpening=false;photoViewer?.destroy();photoViewer=null;return;}const rail=event.target.closest('.cargpt-recommendations');if(rail&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();rail.scrollTo({left:event.key==='Home'?0:event.key==='End'?rail.scrollWidth:rail.scrollLeft+(event.key==='ArrowRight'?1:-1)*261,behavior:'instant'});return;}const tabs=event.target.closest('.cargpt-gallery-tabs');if(tabs&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const buttons=[...tabs.querySelectorAll('button:not(:disabled)')],index=buttons.indexOf(event.target),next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;buttons[next].click();return;}if(event.key!=='Escape'||event.defaultPrevented||view.querySelector('.cargpt-menu-popup,.cargpt-photo-viewer'))return;event.preventDefault();if(voiceMode)closeVoice(true);else exit(true);};
 input.addEventListener('input',onInput);composer.addEventListener('submit',onSubmit);view.addEventListener('keydown',onKey);
 if(voiceMode&&snapshot.permission!=='denied'&&snapshot.supported){session.setContinuousVoice(true);session.startVoice({requestPermission:true});}
 return ()=>{view.removeEventListener('keydown',markComparisonInput,true);view.removeEventListener('click',markComparisonInput,true);comparisonPage?.destroy();clearComparisons();view.removeEventListener('keydown',onKey);document.removeEventListener('keydown',onPhotoKey,true);view.removeEventListener('scroll',onGalleryScroll,true);input.removeEventListener('input',onInput);composer.removeEventListener('submit',onSubmit);destroyed=true;viewerRevision++;photoViewer?.destroy();unsubscribe();headerMenu.destroy();attachments.destroy();session.suspend();visuals.destroy();view.removeEventListener('click',onClick);view.removeEventListener('test-drive',onCardTestDrive);view.removeEventListener('assurance-details',onCardAssurance);view.removeEventListener('wishlist-toggle',onCardSave);view.removeEventListener('view-details',onCardDetails);document.removeEventListener('visibilitychange',onVisibility);};
}
