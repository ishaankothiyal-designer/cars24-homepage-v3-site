const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const carGPTOrbMarkup=({playbackRate=1}={})=>`<canvas class="cargpt-entry-live" data-cargpt-orb${playbackRate!==1?` data-playback-rate="${playbackRate}"`:''} aria-hidden="true"></canvas>`;
export function carGPTDiscoveryMarkup({surface='listing',carId=''}={}){
 const detail=surface==='detail',action=detail?'cdp-ask':'clp-cargpt';
 const prompts=['Show me all photos of this car','Book test drive for this car','Is this a good deal?','Show me similar cars'];
 return `<aside class="cargpt-discovery-entry" data-cargpt-discovery data-surface="${surface}" data-entry-key="${escape(surface+':'+carId)}" data-expanded="false" aria-label="CarGPT assistance">${detail?'<div class="cargpt-discovery-material" aria-hidden="true"></div>':''}<button type="button" class="bottom-nav-search cargpt-discovery-launcher" data-action="${action}" aria-label="${detail?'Ask CarGPT about this car':'Open CarGPT'}">${carGPTOrbMarkup()}</button>${detail?`<div class="cargpt-entry-nudges" role="region" aria-label="CarGPT suggestions" tabindex="0" inert>${prompts.map((label,index)=>`<button type="button" class="cargpt-entry-nudge" data-action="cdp-cargpt-query" data-value="${escape(label)}" data-cargpt-nudge="${index}">${escape(label)}</button>`).join('')}</div>`:''}</aside>`;
}

// Preserve a revealed CDP on return from chat. CLP always stays compact.
// Nudges follow scroll direction: tucked away on the way down, revealed when
// the user scrolls back up. Native horizontal scrolling stays independent.
const revealed=new Set();
export function mountCarGPTDiscovery(root){
 let dead=false;const cleanups=[];
 for(const canvas of root.querySelectorAll('[data-cargpt-orb]')){
  let orb,visible=true;
  const update=()=>orb?.update({phase:'idle',active:visible&&!document.hidden});
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update();});observer.observe(canvas);
  document.addEventListener('visibilitychange',update);
  import('./cargpt-rive.js').then(({mountRiveOrb})=>{if(dead)return;orb=mountRiveOrb(canvas,{playbackRate:Number(canvas.dataset.playbackRate)||1});update();}).catch(()=>{if(!dead)canvas.dataset.renderer='unavailable';});
  cleanups.push(()=>{observer.disconnect();document.removeEventListener('visibilitychange',update);orb?.destroy();});
 }
 for(const entry of root.querySelectorAll('[data-cargpt-discovery]')){
  let keyboardScroll=false;
  const scroll=root.querySelector('.clp-scroll,.cdp-page-scroll'),rail=entry.querySelector('.cargpt-entry-nudges'),key=entry.dataset.entryKey;
  const resize=()=>entry.querySelector('.cargpt-discovery-launcher').style.setProperty('--c3-entry-travel',`${Math.max(0,entry.clientWidth-80)}px`);
  const observer=new ResizeObserver(resize);observer.observe(entry);resize();
  cleanups.push(()=>observer.disconnect());
  if(!rail||!scroll)continue;
  let lastTop=scroll.scrollTop;
  const expand=value=>{if(entry.dataset.expanded===String(value))return;if(keyboardScroll)entry.dataset.instant='true';else delete entry.dataset.instant;entry.dataset.expanded=String(value);rail.inert=!value;if(value)revealed.add(key);else{revealed.delete(key);if(rail.contains(document.activeElement))entry.querySelector('.cargpt-discovery-launcher').focus({preventScroll:true});}};
  if(lastTop>0&&revealed.has(key)){expand(true);entry.dataset.instant='true';}else revealed.delete(key);
  const reveal=()=>{const top=scroll.scrollTop,delta=top-lastTop;if(!delta||(Math.abs(delta)<8&&top!==0))return;expand(delta<0);lastTop=top;};
  const onKey=event=>{
   if(rail.contains(event.target)||event.target.matches('input,textarea,select,[contenteditable="true"]')||!['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key))return;
   keyboardScroll=true;event.preventDefault();const top=scroll.scrollTop,page=scroll.clientHeight*.8;
   const amount=event.key==='ArrowDown'?40:event.key==='ArrowUp'?-40:event.key==='PageUp'||(event.key===' '&&event.shiftKey)?-page:page;
   const next=Math.max(0,Math.min(scroll.scrollHeight-scroll.clientHeight,event.key==='Home'?0:event.key==='End'?scroll.scrollHeight:top+amount));
   if(next!==top)expand(next<top);lastTop=next;scroll.scrollTo({top:next,behavior:'instant'});
  };
  const onPointer=()=>{keyboardScroll=false;};
  root.addEventListener('keydown',onKey);scroll.addEventListener('scroll',reveal,{passive:true});scroll.addEventListener('pointerdown',onPointer,{passive:true});scroll.addEventListener('wheel',onPointer,{passive:true});
  const keyboard=event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();rail.scrollTo({left:event.key==='Home'?0:event.key==='End'?rail.scrollWidth:rail.scrollLeft+(event.key==='ArrowRight'?1:-1)*rail.clientWidth*.8,behavior:'instant'});};
  rail.addEventListener('keydown',keyboard);
  cleanups.push(()=>{root.removeEventListener('keydown',onKey);scroll.removeEventListener('scroll',reveal);scroll.removeEventListener('pointerdown',onPointer);scroll.removeEventListener('wheel',onPointer);rail.removeEventListener('keydown',keyboard);});
 }
 return()=>{dead=true;cleanups.forEach(dispose=>dispose());};
}
