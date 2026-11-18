const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function renderShowrooms({showrooms=[]}={}){
 const locations=[...new Map(showrooms.filter(item=>item?.value&&item?.label).map(item=>[item.value,item])).values()];
 if(!locations.length)return `<section class="showroom-directory" aria-label="Showroom directory"><div class="empty showroom-empty"><h3>No showrooms to display</h3><button type="button" class="primary" data-action="listings">Browse cars</button></div></section>`;
 return `<section class="showroom-directory" aria-label="Showroom directory"><p class="showroom-intro">Explore showrooms in Gurugram.</p><div class="showroom-list">${locations.map(({value,label})=>`<article class="showroom-card"><h3>${esc(label)}</h3><button type="button" class="secondary" data-action="showroom-cars" data-value="${esc(value)}" aria-label="View matching cars at ${esc(label)}">View matching cars</button></article>`).join('')}</div></section>`;
}
