import {HOME_SERVICE_TABS,serviceArtwork} from './navigation-artwork.js';

/** Shared seven-service navigation; the host keeps its existing routing and layout styles. */
export function renderServiceTabs({selected='all',variant='standard',action='nav'}={}){
 const command=String(action).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const artwork=id=>variant==='home'
  ?`<img class="home-tab-image" src="./assets/flow-home/top-${id}.png" alt="" loading="eager" decoding="sync" >${id==='insurance'?'<img class="home-insurance-layer home-tab-image" src="./assets/flow-home/top-insurance-base.png" alt="" loading="eager" decoding="sync" >':''}`
  :`<img src="./assets/${serviceArtwork[id]}" alt="" width="46" height="46">`;
 return `<nav class="nav-tabs" aria-label="Cars24 services">${HOME_SERVICE_TABS.map(([id,label])=>`<button class="nav-tab ${id===selected?'active':''}" data-action="${command}" data-value="${id}" ${id===selected?'aria-current="page"':''}><span class="nav-img">${artwork(id)}</span>${label}</button>`).join('')}</nav>`;
}
