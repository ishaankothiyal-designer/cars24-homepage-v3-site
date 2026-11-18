import {CLP_FILTER_OPTIONS} from './clp-filter-options.js';
import {homePriceBand} from './discovery-controls.js';

const list=value=>(Array.isArray(value)?value:[value]).filter(v=>v!==undefined&&v!==null&&v!==''&&v!=='Any'&&v!=='any');
const norm=value=>String(value??'').toLowerCase().replace(/[^a-z0-9]/g,'');
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ranged=range=>!!range&&(range.min!==undefined&&range.min!==''||range.max!==undefined&&range.max!=='');
function profileRange(value){
 const home=homePriceBand(value);if(home)return {min:home.min*100000,max:home.max*100000,maxExclusive:home.maxExclusive};
 if(String(value).startsWith('search:')){const [,min,max]=value.split(':');return {min:Number(min)*100000,max:Number(max)*100000};}
 const ranges={'under-5':[0,5],'5-8':[5,8],'8-12':[8,12],'over-12':[12,50]};
 const r=ranges[value];return r?{min:r[0]*100000,max:r[1]*100000}:null;
}
function within(value,range){
 if(!ranged(range))return true;
 if(value===null||value===undefined||value===''||!Number.isFinite(Number(value)))return false;
 const n=Number(value),hasMin=range.min!==undefined&&range.min!=='',hasMax=range.max!==undefined&&range.max!=='';
 return (!hasMin||n>=Number(range.min))&&(!hasMax||(range.maxExclusive?n<Number(range.max):n<=Number(range.max)));
}
function canonicalMake(value,catalog){
 const n=norm(value),brand=catalog.filters.makeModel.brands.find(b=>[b.value,...b.prototypeAliases||[]].some(v=>norm(v)===n));
 return norm(brand?.value||value);
}
function modelMatches(car,value,catalog){
 const parts=String(value).split('::'),make=parts.length>1?parts.shift():null,model=parts.join('::');
 if(make&&canonicalMake(car.make,catalog)!==canonicalMake(make,catalog))return false;
 const brand=catalog.filters.makeModel.brands.find(b=>canonicalMake(b.value,catalog)===canonicalMake(car.make,catalog));
 const aliases=[car.make,make,brand?.value,...brand?.prototypeAliases||[]].filter(Boolean).map(norm).sort((a,b)=>b.length-a.length);
 const strip=v=>{let n=norm(v);const prefix=aliases.find(a=>n.startsWith(a));return prefix?n.slice(prefix.length):n;};
 return strip(car.model)===strip(model);
}
const numberChoice=value=>{const n=Number(value);if(Number.isFinite(n))return n;const owner={'firstowner':1,'secondowner':2,'thirdowner':3,'fourthowner':4};return owner[norm(value)]??Number(String(value).match(/^\d+/)?.[0]);};

export function clpFilterChips({profile={},extra={},seller='all',catalog=CLP_FILTER_OPTIONS}={}){
 return [['budget','Budget'],['makeModel','Make & Model'],['category','Car Category'],['year','Model Year'],['km','Kms Driven'],['fuel','Fuel'],['body','Body Type'],['transmission','Transmission'],['seats','Seats'],['owners','Owners'],['assurance','Return Assurance'],['color','Color'],['features','Features'],['rto','RTO'],['safety','Safety'],['airbags','Airbags'],['showrooms','Cars24 HUB'],['discount','Discount']].map(([key,label])=>({label:catalog.filters[key]?.label||label,action:key==='category'?'retail-clp-category':'retail-clp-filter',value:key,active:key==='category'?seller!=='all':key==='makeModel'?!!(list(extra.makes).length||list(extra.models).length||list(profile.make).length||list(profile.model).length):key==='budget'?!!(ranged(extra.budget)||profileRange(profile.budget)):['year','km'].includes(key)?ranged(extra[key]):!!(list(extra[key]).length||list(profile[key]).length)}));
}

export function filterClpCars(cars,{profile={},extra={},catalog=CLP_FILTER_OPTIONS}={}){
 return cars.filter(car=>{
  const price=car.priceRupees??(Number.isFinite(car.price)?car.price*100000:null);
  if(!within(price,profileRange(profile.budget))||!within(price,extra.budget)||!within(car.year,extra.year)||!within(car.km,extra.km))return false;
  if(profile.city&&profile.city!=='Any'&&car.city&&norm(profile.city)!==norm(car.city))return false;
  for(const choices of [list(profile.make),list(extra.makes)])if(choices.length&&!choices.some(v=>canonicalMake(v,catalog)===canonicalMake(car.make,catalog)||modelMatches(car,v,catalog)))return false;
  for(const choices of [list(profile.model),list(extra.models)])if(choices.length&&!choices.some(v=>modelMatches(car,v,catalog)))return false;
  for(const key of ['fuel','body','transmission'])for(const choices of [list(profile[key]),list(extra[key])])if(choices.length&&!choices.some(v=>norm(v)===norm(car[key])))return false;
  for(const key of ['seats','owners']){
   const actual=key==='owners'?(car.owners??car.ownerCount):car.seats;
   for(const choices of [list(profile[key]),list(extra[key])])if(choices.length&&(actual===undefined||actual===null||!choices.some(v=>numberChoice(v)===numberChoice(actual))))return false;
  }
  for(const key of ['color','features','safety','airbags','showrooms']){
   const requested=list(extra[key]);if(!requested.length)continue;
   const recorded=list(car[key==='showrooms'?'showroom':key]);
   if(!recorded.length||!requested.some(v=>recorded.some(actual=>norm(actual)===norm(v))))return false;
  }
  if(list(extra.assurance).length&&!list(extra.assurance).some(v=>v==='30 Day Return'&&list(car.assurances).some(actual=>/30 days? return/i.test(actual))))return false;
  if(list(extra.rto).length&&!list(extra.rto).some(v=>String(car.registrationRegion||'').toUpperCase().startsWith(String(v).split(' ')[0].toUpperCase())))return false;
  if(list(extra.discount).length){const original=car.originalPriceRupees,discount=original>0?(original-price)/original*100:null;if(!list(extra.discount).some(v=>/^\d+%/.test(v)&&discount!==null&&discount>=Number(v.match(/^\d+/)[0])))return false;}
  return true;
 });
}

export function renderClpFilterEditor({catalog=CLP_FILTER_OPTIONS,profile={},extra={},selected='all',e=escape,button}={}){
 const checked=(key,value)=>{
  const values=key==='makes'?[...list(profile.make),...list(extra.makes)]:key==='models'?[...list(profile.model),...list(extra.models)]:[...list(profile[key]),...list(extra[key])];
  if(key==='makes')return values.some(v=>canonicalMake(v,catalog)===canonicalMake(value,catalog));
  return values.some(v=>norm(v)===norm(value));
 };
 const option=(key,opt)=>`<label class="clp-filter-option"><input type="checkbox" data-action="retail-clp-option" data-value="${e(key+'|'+encodeURIComponent(opt.value))}" ${checked(key,opt.value)?'checked':''}><span>${e(opt.label)}</span></label>`;
 const range=(key,group)=>{
  const current=extra[key]||(key==='budget'?profileRange(profile.budget):null)||{};
  return `<div class="clp-filter-range">${['min','max'].map(edge=>`<label>${edge==='min'?'Minimum':'Maximum'}${key==='budget'?' (₹)':key==='km'?' (km)':''}<input type="number" name="clp-range-${key}-${edge}" min="${group.min}" max="${group.max}" step="${key==='budget'?1000:1}" inputmode="numeric" value="${e(Number.isFinite(Number(current[edge]))&&current[edge]!==''?current[edge]:'')}" placeholder="${group[edge]}"></label>`).join('')}</div>`;
 };
 const group=key=>{
  const g=catalog.filters[key];if(!g)return '';
  const content=['budget','year','km'].includes(key)?range(key,g):key==='makeModel'?'<label class="clp-brand-search">Search a brand or model<input type="search" name="clp-brand-query" placeholder="Search a brand or model" autocomplete="off"></label>'+g.brands.map(brand=>`<details class="clp-filter-brand"><summary>${option('makes',brand)}</summary><div role="group" aria-label="${e(brand.label)} models">${brand.models.map(model=>option('models',{label:model.label,value:brand.value+'::'+model.value})).join('')}${!brand.modelsVerified?'<p class="inline-note">Model options were not verified for this brand.</p>':''}</div></details>`).join(''):g.options?.map(opt=>option(key,opt)).join('')||'';
  return `<fieldset class="clp-filter-group" data-clp-filter-group="${key}"><legend>${e(g.label)}</legend>${content}</fieldset>`;
 };
 const keys=['budget','makeModel','year','km','fuel','body','transmission','seats','owners'];
 const close=button?button('Done','retail-clp-filter-done','','secondary'):'<button type="button" data-action="retail-clp-filter-done">Done</button>';
 return `<section class="clp-filter-editor" aria-label="${selected==='all'?'Car filters':e(catalog.filters[selected]?.label||'Car filters')}"><div class="clp-filter-editor-heading"><h2>${selected==='all'?'Filters':e(catalog.filters[selected]?.label||'Filters')}</h2>${close}</div>${(selected==='all'?keys:keys.filter(k=>k===selected)).map(group).join('')}<p class="clp-filter-source">Filter choices from Cars24 · ${e(catalog.provenance.observedAt)} · Local sample results</p></section>`;
}


const editorBindings=new WeakMap();
export function setupClpFilterEditor(root){
 editorBindings.get(root)?.();
 const query=root.querySelector('[name="clp-brand-query"]');
 if(!query)return ()=>{};
 const brands=[...root.querySelectorAll('.clp-filter-brand')],originalOpen=new Map(brands.map(n=>[n,n.open]));
 const update=()=>{
  const term=norm(query.value);
  for(const brand of brands){
   const summary=brand.querySelector('summary'),brandMatch=norm(summary.textContent).includes(term),models=[...brand.querySelectorAll('[role="group"] .clp-filter-option')];
   for(const option of models)option.hidden=!!term&&!brandMatch&&!norm(option.textContent).includes(term);
   brand.hidden=!!term&&!brandMatch&&!models.some(option=>!option.hidden);
   brand.open=term?!brand.hidden:originalOpen.get(brand);
  }
 };
 query.addEventListener('input',update);
 const dispose=()=>{query.removeEventListener('input',update);editorBindings.delete(root);};
 editorBindings.set(root,dispose);return dispose;
}
