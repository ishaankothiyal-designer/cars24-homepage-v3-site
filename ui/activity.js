const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

/** Activity reflects recorded session actions; unknown or repeated inventory IDs are ignored. */
export function renderActivity({visited=[],saved=[],cars=[],cardMarkup}={}){
 const inventory=new Map(cars.map(car=>[car.id,car]));
 const records=ids=>[...new Set(ids)].map(id=>inventory.get(id)).filter(Boolean);
 const savedCars=records(saved),recentCars=records(visited);
 if(!savedCars.length&&!recentCars.length)return '<section class="activity-content" aria-label="Activity"><div class="activity-empty empty"><h3>No activity yet</h3><p>Cars you view or save will appear here.</p><button type="button" class="primary" data-action="listings">Browse cars</button></div></section>';
 const group=(title,items,link='')=>items.length?`<section class="activity-section" aria-label="${esc(title)}"><div class="activity-section-heading"><h3>${esc(title)}</h3>${link}</div><div class="activity-cars">${items.map(car=>cardMarkup(car)).join('')}</div></section>`:'';
 return `<div class="activity-content" aria-label="Activity">${group('Saved cars',savedCars,'<button type="button" class="text-btn" data-action="saved">View all saved cars</button>')}${group('Recently viewed',recentCars)}</div>`;
}
