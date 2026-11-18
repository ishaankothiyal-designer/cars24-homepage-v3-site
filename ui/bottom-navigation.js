import {carGPTOrbMarkup} from './cargpt-discovery.js';
const asset=name=>`./assets/bottom-bar-9177/${name}.svg`;
const tabs=[['home','Home','Home'],['activity','Activity','Activity'],['garage','Garage','My Garage']];
export function renderBottomNav({selected='home',assistantAction='cargpt',className=''}={}){
 const active=tabs.some(([id])=>id===selected)?selected:'home';
 return `<nav class="bottom-nav bottom-nav-9177 ${className}" aria-label="Main navigation" data-theme="cars24"><div class="bottom-nav-pill" data-selected="${active}"><span class="bottom-nav-selection" aria-hidden="true"></span>${tabs.map(([id,label,accessible])=>`<button type="button" class="bottom-nav-tab" data-action="bottom-nav" data-value="${id}" aria-label="${accessible}"${id===active?' aria-current="page"':''}><img src="${asset(id+'-'+(id===active?'active':'rest'))}" alt=""><span>${label}</span></button>`).join('')}</div><button type="button" class="bottom-nav-search" data-action="${assistantAction}" aria-label="Open CarGPT">${carGPTOrbMarkup()}</button></nav>`;
}

const indicatorPositions=new WeakMap();

export function mountBottomNav(root){
 const indicator=root.querySelector('.bottom-nav-9177 .bottom-nav-selection');
 if(!indicator)return ()=>{};
 const target=indicator.offsetLeft;
 const previous=indicatorPositions.get(root);
 const media=matchMedia('(prefers-reduced-motion: reduce)');
 let animation;
 const settle=()=>{
  animation?.cancel();animation=null;
  indicatorPositions.set(root,target);
 };
 if(previous!==undefined&&previous!==target&&!media.matches){
  animation=indicator.animate([
   {transform:`translateX(${previous-target}px)`},
   {transform:'translateX(0px)'}
  ],{duration:240,easing:'cubic-bezier(.22,1,.36,1)'});
  animation.onfinish=settle;
 }else indicatorPositions.set(root,target);
 const reduced=()=>{if(media.matches)settle();};
 media.addEventListener('change',reduced);
 return ()=>{
  // Keep the visible position across route replacement, including rapid retargets.
  const transform=getComputedStyle(indicator).transform;
  const offset=transform==='none'?0:new DOMMatrixReadOnly(transform).m41;
  indicatorPositions.set(root,target+offset);
  if(animation)animation.onfinish=null;
  animation?.cancel();
  media.removeEventListener('change',reduced);
 };
}
