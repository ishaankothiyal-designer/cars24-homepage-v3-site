import {HOME_SERVICE_TABS} from './navigation-artwork.js';

/** Shared seven-service navigation; the host keeps routing and scroll state. */
export function renderServiceTabs({selected='all',variant='standard',action='nav'}={}){
 const command=String(action).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const layout=variant==='home'?'home':'standard';
 const image=(file,extra='')=>`<img class="home-tab-image${extra?' '+extra:''}" src="./assets/header-9156/${file}.png" alt="" loading="eager" decoding="sync" >`;
 const artwork=id=>{const active=id===selected,file=id==='all'?(active?(layout==='home'?'all-brand-active':'all-active'):'all-inactive'):id==='insurance'?'insurance-shield':`${id}-${active?'active':'inactive'}`;return image(file)+(id==='insurance'&&!active?image('insurance-overlay','home-insurance-layer'):'');};
 return `<nav class="nav-tabs service-tabs" data-service-tabs-variant="${layout}" aria-label="Cars24 services">${HOME_SERVICE_TABS.map(([id,label])=>`<button class="nav-tab ${id===selected?'active':''}" data-action="${command}" data-value="${id}" ${id===selected?'aria-current="page"':''}><span class="nav-img">${artwork(id)}</span>${label}</button>`).join('')}</nav>`;
}
