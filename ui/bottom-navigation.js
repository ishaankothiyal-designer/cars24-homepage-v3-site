import {carGPTOrbMarkup} from './cargpt-discovery.js';
const asset=name=>`./assets/bottom-bar-9177/${name}.svg`;
const tabs=[['home','Home','Home'],['showrooms','Showroom','Showrooms'],['garage','Garage','My Garage']];
export function renderBottomNav({selected='home',assistantAction='cargpt',className=''}={}){
 const active=tabs.some(([id])=>id===selected)?selected:'home';
 return `<nav class="bottom-nav bottom-nav-9177 ${className}" aria-label="Main navigation" data-theme="cars24"><div class="bottom-nav-pill" data-selected="${active}"><span class="bottom-nav-selection" aria-hidden="true"></span>${tabs.map(([id,label,accessible])=>`<button type="button" class="bottom-nav-tab" data-action="bottom-nav" data-value="${id}" aria-label="${accessible}"${id===active?' aria-current="page"':''}><img src="${asset((id==='showrooms'?'showroom':id)+'-'+(id===active?'active':'rest'))}" alt=""><span>${label}</span></button>`).join('')}</div><button type="button" class="bottom-nav-search" data-action="${assistantAction}" aria-label="Open CarGPT">${carGPTOrbMarkup()}</button></nav>`;
}
