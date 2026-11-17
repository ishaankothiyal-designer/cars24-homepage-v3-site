const e=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=name=>`<i class="cargpt-icon" data-icon="${name}" aria-hidden="true"></i>`;
export function galleryGroups(car){return car.gallery||{Exterior:car.photos?.length?car.photos:[car.imageUrl||car.image]};}
export function gallerySelection(car,state={}){
 const groups=galleryGroups(car),category=groups[state.category]?.length?state.category:Object.keys(groups).find(key=>groups[key]?.length)||'Exterior',photos=groups[category]||[];
 return {category,index:Math.max(0,Math.min(photos.length-1,state.index||0)),photos};
}
/** Figma 9954:236837 / C1GalleryView, using the selected listing's own photos.
 * Buttons pass through the prototype's Turbo Core rendering bridge. */
export function galleryMarkup(car,state={},key=car.id){
 const groups=galleryGroups(car),{category,index,photos}=gallerySelection(car,state);
 return `<section class="cargpt-gallery" data-gallery-key="${e(key)}" data-gallery-car="${e(car.id)}" aria-label="${e(car.year+' '+car.model)} photos">
  <div class="cargpt-gallery-tabs" role="tablist" aria-label="Photo categories">${['Exterior','Interior','Features','Tyres'].map(name=>`<button type="button" role="tab" aria-selected="${name===category}" tabindex="${name===category?0:-1}" data-c3-action="gallery-category" data-category="${name}" ${groups[name]?.length?'':'disabled'}>${name}</button>`).join('')}</div>
  <div class="cargpt-photo-gallery" role="group" aria-roledescription="carousel" aria-label="${e(category)} photos">${photos.map((photo,n)=>`<button type="button" class="cargpt-gallery-photo" data-c3-action="gallery-enlarge" data-photo="${n}" aria-label="Enlarge ${e(category.toLowerCase())} photo ${n+1}" tabindex="${n===index?0:-1}"><img src="${e(photo)}" alt="${e(car.year+' '+car.model+' · '+category+' · '+(n+1))}" loading="lazy"></button>`).join('')}</div>
  <div class="cargpt-gallery-dots" aria-hidden="true">${photos.map((_,n)=>`<span data-active="${n===index}"></span>`).join('')}</div>
  <div class="cargpt-gallery-thumbnails" aria-label="Choose ${e(category.toLowerCase())} photo">${photos.map((photo,n)=>`<button type="button" data-c3-action="gallery-photo" data-photo="${n}" aria-label="View ${e(category.toLowerCase())} photo ${n+1}" aria-pressed="${n===index}"><img src="${e(photo)}" alt="" loading="lazy"></button>`).join('')}</div>
  <div class="cargpt-gallery-feedback" aria-label="Response feedback">${[['up','thumbs-up-outline','Helpful response'],['down','thumbs-down-outline','Unhelpful response']].map(([value,glyph,label])=>`<button type="button" data-c3-action="gallery-feedback" data-feedback="${value}" aria-label="${label}" aria-pressed="${state.feedback===value}">${icon(glyph)}</button>`).join('')}<button type="button" data-c3-action="gallery-share" aria-label="Copy car listing link">${icon('share-1')}</button></div>
  <hr><strong class="cargpt-question">What would you like to do next?</strong><div class="cargpt-gallery-actions"><button type="button" class="cargpt-chip" data-c3-action="emi" data-id="${e(car.id)}">EMI Options</button><button type="button" class="cargpt-chip" data-c3-action="book" data-id="${e(car.id)}">Book Test drive</button></div>
 </section>`;
}
