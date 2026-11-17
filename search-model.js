import {CARS,CITIES} from './model.js';
// Query interpretation is deterministic prototype behaviour; no AI/API request.
export const SEARCH_SERVICES=[
 {label:'Sell my car',family:'sell',icon:'car-outline',aliases:'sell selling valuation exchange',route:'sell'},
 {label:'Car loan',family:'loans',icon:'credit-card-2-card-payment-outline',aliases:'car loan borrow finance funds eligibility',route:'Used-car loan'},
 {label:'Pay your EMI',family:'loans',icon:'credit-card-2-card-payment-outline',aliases:'loan emi repayment pay instalment',route:'Pay your EMI'},
 {label:'Gold loan',family:'loans',icon:'credit-card-2-card-payment-outline',aliases:'gold loan borrow',route:'Gold loan'},
 {label:'Check loan eligibility',family:'loans',icon:'credit-card-2-card-payment-outline',aliases:'loan eligibility',route:'Loan eligibility'},
 {label:'Check credit score',family:'loans',icon:'credit-card-2-card-payment-outline',aliases:'credit score',route:'Check credit score'},
 {label:'Pay challan',family:'ownership',icon:'receipt-bill-purchase-invoice-outline',aliases:'check my challans pay traffic fine',route:'challan'},
 {label:'Car insurance',family:'insurance',icon:'car-insurance-outline',aliases:'motor car insurance cover policy',route:'Car insurance'},
 {label:'Health insurance',family:'insurance',icon:'ownership-line',aliases:'health medical insurance parents cover',route:'Health insurance'},
 {label:'Life insurance',family:'insurance',icon:'ownership-line',aliases:'life insurance cover',route:'Life insurance'},
 {label:'New-car PDI',family:'checks',icon:'car-check-outline',aliases:'pdi pre delivery inspection new car check',route:'New-car PDI'},
 {label:'Vehicle history',family:'checks',icon:'car-check-outline',aliases:'vehicle car history rto records odometer',route:'Vehicle history'},
 {label:'Buy or recharge FASTag',family:'ownership',icon:'receipt-bill-purchase-invoice-outline',aliases:'fastag recharge toll tag',route:'Buy or recharge FASTag'},
 {label:'Roadside assistance',family:'ownership',icon:'car-outline',aliases:'roadside assistance breakdown help',route:'Roadside assistance'},
];
export const FAMILY_LABELS={sell:'Sell car',loans:'Loans24',ownership:'Vehicle ownership',insurance:'Insurance',checks:'Car checks'};
export const PROMPTS=['SUV cars under ₹12 lakh','Car for my parents','Automatic cars in Gurugram','Car for daily office commute'];
const clean=s=>s.toLowerCase().replace(/₹/g,' ').replace(/[^a-z0-9\s.-]/g,' ').replace(/\s+/g,' ').trim();
export const openFilters=(city='Gurugram')=>({city,min:0,max:50,body:'Any',make:'Any',model:'Any',fuel:'Any',transmission:'Any'});
export function interpretQuery(query,city='Gurugram'){
 const q=clean(query),filters=openFilters(city),explicit=[];
 const max=q.match(/(?:under|below|upto|up to|less than)\s*(\d+(?:\.\d+)?)\s*(?:lakh|lac|l\b)?/);
 const range=q.match(/(?:between\s*)?(\d+(?:\.\d+)?)\s*(?:-|and|to)\s*(\d+(?:\.\d+)?)\s*(?:lakh|lac)/);
 if(max){filters.max=+max[1];explicit.push('max');}
 if(range){filters.min=Math.min(+range[1],+range[2]);filters.max=Math.max(+range[1],+range[2]);explicit.push('min','max');}
 for(const [pattern,key,value] of [[/\bsuvs?\b/,'body','SUV'],[/\bhatchbacks?\b/,'body','Hatchback'],[/\bsedans?\b/,'body','Sedan'],[/\bmuvs?\b/,'body','MUV'],[/\bautomatic\b|\bamt\b/,'transmission','Automatic'],[/\bmanual\b/,'transmission','Manual'],[/\bpetrol\b/,'fuel','Petrol'],[/\bdiesel\b/,'fuel','Diesel'],[/\belectric\b|\bev\b/,'fuel','Electric'],[/\bcng\b/,'fuel','CNG']])if(pattern.test(q)){filters[key]=value;explicit.push(key);}
 let correction=null;
 if(/\bbalenol\b/.test(q))correction='Baleno';
 const car=CARS.find(c=>q.includes(clean(c.model))||q.split(' ').includes(clean(c.model.split(' ').at(-1))))||(correction?CARS.find(c=>c.model==='Maruti Baleno'):null);
 if(car){filters.model=car.model;explicit.push('model');}
 else for(const make of ['Maruti Suzuki','Tata','Hyundai','Honda','Mahindra','Kia','Toyota','MG','Renault','Skoda','Volkswagen','Nissan','Ford','Jeep','Mercedes-Benz','BMW','Audi'])if(q.includes(clean(make))||(make==='Maruti Suzuki'&&q.includes('maruti'))){filters.make=make;explicit.push('make');break;}
 const absentModels=[[/\bseltos\b/,'Kia Seltos'],[/\bsierra\b/,'Tata Sierra.EV'],[/\bverna\b/,'Hyundai Verna'],[/\be[ -]?vitara\b/,'Maruti Suzuki e-Vitara'],[/\bbe[ -]?6\b/,'Mahindra BE 6'],[/\bcurvv\b/,'Tata Curvv']];
 const absentModel=absentModels.find(([pattern])=>pattern.test(q));if(absentModel&&!car){filters.model=absentModel[1];explicit.push('model');}
 const queryCity=CITIES.find(c=>q.includes(c.toLowerCase()))||(q.includes('gurgaon')?'Gurugram':null);
 if(queryCity){filters.city=queryCity;explicit.push('city');}
 const parents=/\bparents?\b|\bfamily\b/.test(q),commute=/\bcommute\b|\boffice\b|\bdaily\b/.test(q);
 const unsupported=[];
 if(/\b(blue|red|white|black|silver|grey|gray)\b/.test(q))unsupported.push('colour');
 if(/\b(safe|safest|safety|rating|ratings|maintenance|mileage)\b/.test(q))unsupported.push('verified safety or running-cost information');
 const isCar=explicit.some(k=>k!=='city')||parents||commute||/\bcars?\b|\bsuvs?\b/.test(q);
 const serviceWords=/\b(loan|loans|emi|insurance|challans?|fine|sell|selling|pdi|inspection|history|rto|fastag|roadside|valuation|gold|credit)\b/.test(q);
 const mode=serviceWords&&!explicit.some(k=>['body','model','transmission','max'].includes(k))?'services':isCar?'cars':'unknown';
 return {query:query.trim(),filters,explicit:[...new Set(explicit)],correction,mode,ai:parents||commute||(!car&&explicit.length>1),need:parents?'parents':commute?'commute':null,unsupported};
}
export function serviceMatches(query){
 const q=clean(query),tokens=q.split(' ').filter(t=>t.length>2&&!['the','for','car','cars','my','with','want','check','please'].includes(t));
 return SEARCH_SERVICES.map(s=>({s,score:tokens.reduce((n,t)=>n+((s.label+' '+s.aliases).toLowerCase().includes(t)?1:0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.s);
}
export function buySuggestions(query){
 const parsed=interpretQuery(query),q=clean(query);
 if(!q||parsed.mode==='services'||parsed.unsupported.length)return [];
 const constraintWords=new Set(['car','cars','used','in','under','below','upto','up','to','less','than','between','and','lakh','lakhs','lac','lacs','l',...CITIES.flatMap(c=>clean(c).split(' ')),'gurgaon']);
 const tokens=q.split(' ').filter(t=>!constraintWords.has(t)&&!/^\d+(?:\.\d+)?$/.test(t)&&t!=='-');
 if(!tokens.length)return [];
 const suffix=[parsed.explicit.includes('body')?parsed.filters.body:null,parsed.explicit.includes('min')?`between ₹${parsed.filters.min} and ₹${parsed.filters.max} lakh`:parsed.explicit.includes('max')?`under ₹${parsed.filters.max} lakh`:null,parsed.explicit.includes('city')?`in ${parsed.filters.city}`:null].filter(Boolean).join(' ');
 const models=[...new Set(CARS.filter(c=>parsed.filters.body==='Any'||c.body===parsed.filters.body).map(c=>c.model))];
 return models.flatMap(model=>{
  const cars=CARS.filter(c=>c.model===model),fuels=[...new Set(cars.map(c=>c.fuel))],transmissions=[...new Set(cars.map(c=>c.transmission))];
  const variants=['',...fuels,...transmissions,...cars.map(c=>`${c.transmission} ${c.fuel}`)];
  return [...new Set(variants)].map(variant=>[model,variant,suffix].filter(Boolean).join(' '));
 }).filter(label=>tokens.every(token=>clean(label).split(' ').some(word=>word.startsWith(token)))||(parsed.correction&&label==='Maruti Baleno')).slice(0,8);
}
export function matchingCars(f,cars=CARS){return cars.filter(c=>c.price>=f.min&&c.price<=f.max&&(!f.city||!c.city||c.city===f.city)&&['body','make','model','fuel','transmission'].every(k=>!f[k]||f[k]==='Any'||(Array.isArray(f[k])?(!f[k].length||f[k].includes(c[k])):c[k]===f[k])));}
export function filterChips(f){return [f.min>0||f.max<50?{key:'budget',label:f.min>0?`₹${f.min}–${f.max} lakh`:`Under ₹${f.max} lakh`}:null,...['body','model','make','transmission','fuel'].filter(k=>f[k]&&f[k]!=='Any').map(key=>({key,label:f[key]}))].filter(Boolean);}
export function removeFilter(filters,key){return key==='budget'?{...filters,min:0,max:50}:{...filters,[key]:'Any'};}
