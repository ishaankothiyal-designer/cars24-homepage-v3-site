/** Shared discovery taxonomy and multi-select body-type controls. */
export const TOP_LEVEL_INTENTS=[['buy','Buy car',0],['sell','Sell car',1],['loans','Get loans',4],['ownership','Vehicle ownership',2]];
export const OWNERSHIP_GROUPS=[['garage','My Garage','Manage your car and its services',2],['checks','Car checks','Inspections, history and vehicle records',5],['challan','Check challans','Check with your vehicle number',3],['insurance','Insurance','Car, bike, health and life cover',2],['care','Ownership services','FASTag, roadside assistance and care',4]];
export const ownershipLandingTab=task=>/challan/i.test(task)?'challan':/insurance/i.test(task)?'insurance':/inspection|check|history|odometer|rto|PDI/i.test(task)?'checks':'ownership';
export const landingBucket=id=>['garage','checks','challan','insurance','care'].includes(id)?'ownership':id;
export const bodySelection=value=>Array.isArray(value)?value.filter(x=>x!=='Any'):value&&value!=='Any'?[value]:[];
export function toggleBody(value,body){if(body==='Any')return 'Any';const selected=bodySelection(value);const next=selected.includes(body)?selected.filter(x=>x!==body):[...selected,body];return next.length?next:'Any';}
export const bodyLabel=value=>bodySelection(value).join(' or ')||'All body types';
export function bodyChoices(value,action='retail-pick',prefix='body:'){
 const selected=bodySelection(value);
 return `<div class="options body-type-options" role="group" aria-label="Body types">${['SUV','Hatchback','Sedan','MUV','Any'].map(body=>{const checked=body==='Any'?!selected.length:selected.includes(body);return `<button type="button" class="choice body-type-choice${checked?' selected':''}" role="checkbox" aria-checked="${checked}" data-action="${action}" data-value="${prefix}${body}"><span class="choice-label">${body==='Any'?'Open to all':body}</span><span class="check" aria-hidden="true">✓</span></button>`;}).join('')}</div>`;
}

/** Make values accept legacy single strings and multiple selected makes. */
export const makeSelection=value=>[...new Set((Array.isArray(value)?value:[value]).filter(x=>x&&x!=='Any'))];
export const makeLabel=value=>makeSelection(value).join(' or ')||'All makes';
export function toggleMake(value,make){
 if(make==='Any')return 'Any';
 const selected=makeSelection(value),next=selected.includes(make)?selected.filter(x=>x!==make):[...selected,make];
 return next.length>1?next:next[0]||'Any';
}
const escapeMake=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const DISCOVERY_MAKES=['Maruti Suzuki','Hyundai','Tata','Honda','Mahindra','Kia'];
export function makeChoices(value,query='',action='retail-pick',prefix='make:'){
 const selected=makeSelection(value),visible=DISCOVERY_MAKES.filter(make=>make.toLowerCase().includes(query.trim().toLowerCase()));
 const row=make=>{const checked=make==='Any'?!selected.length:selected.includes(make);return `<button type="button" class="choice make-choice${checked?' selected':''}" role="checkbox" aria-checked="${checked}" data-action="${action}" data-value="${escapeMake(prefix+make)}">${make==='Any'?'':`<make-logo make="${escapeMake(make)}"></make-logo>`}<span class="choice-label">${make==='Any'?'Open to all':escapeMake(make)}</span><span class="check" aria-hidden="true">✓</span></button>`;};
 return `<div class="options make-options" role="group" aria-label="Car makes">${visible.length?visible.map(row).join(''):'<p class="inline-note" role="status">No matching makes. Try another name or stay open to all.</p>'}${row('Any')}</div>`;
}
export function makePicker(value,query='',id='buyer-make-search',action='retail-pick',prefix='make:'){
 return `<div class="make-picker"><label class="field make-search-field" for="${id}">Search makes<input type="search" id="${id}" data-make-search="${id}" placeholder="Search makes" autocomplete="off" value="${escapeMake(query)}" aria-controls="${id}-options"></label><div id="${id}-options">${makeChoices(value,query,action,prefix)}</div></div>`;
}

// Onboarding exposes these three fuel choices; arrays preserve OR filtering.
export const ONBOARDING_FUELS=['Petrol','Diesel','CNG'];
export const fuelSelection=value=>[...new Set((Array.isArray(value)?value:[value]).filter(v=>v&&v!=='Any'))];
export function toggleFuel(value,fuel){if(fuel==='Any')return [...ONBOARDING_FUELS];const selected=fuelSelection(value);return selected.includes(fuel)?selected.filter(v=>v!==fuel):[...selected,fuel];}
export function fuelChoices(value,action='retail-fuel-filter'){const selected=fuelSelection(value);return `<div class="options body-type-options" role="group" aria-label="Fuel types">${['Petrol','Diesel','CNG','Electric','Any'].map(fuel=>{const checked=fuel==='Any'?!selected.length:selected.includes(fuel);return `<button type="button" class="choice body-type-choice${checked?' selected':''}" role="checkbox" aria-checked="${checked}" data-action="${action}" data-value="${fuel}"><span class="choice-label">${fuel==='Any'?'Open to all':fuel}</span><span class="check" aria-hidden="true">✓</span></button>`;}).join('')}</div>`;}

// Home price entries use disjoint CLP bands without changing onboarding budget choices.
export const HOME_PRICE_BANDS=[
 {value:'under-7',id:'home-price:under-7',label:'Under ₹7 lakh',min:0,max:7,maxExclusive:true},
 {value:'7-15',id:'home-price:7-15',label:'₹7–15 lakh',min:7,max:15,maxExclusive:true},
 {value:'over-15',id:'home-price:over-15',label:'₹15 lakh+',min:15,max:Infinity,maxExclusive:false},
];
export const homePriceBand=value=>HOME_PRICE_BANDS.find(band=>band.id===value||band.value===value||band.label===value);
