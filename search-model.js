import {CARS,CITIES,ALL_DEMO_CARS,searchMatches} from './model.js';
import {correctSearchText,phraseScore,tokenScore} from './fuzzy-search.js';
import {resolveVehicleModel,resolveVehicleMake,sameVehicleModel,vehicleWords,SEARCH_MAKES} from './vehicle-models.js';
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
const searchVocabulary=new Set(clean([
 ...ALL_DEMO_CARS.map(car=>car.model),...SEARCH_MAKES,
 ...SEARCH_SERVICES.map(service=>service.label+' '+service.aliases),
 'automatic manual petrol diesel electric hatchback sedan suv muv',
].join(' ')).split(' '));
const protectedWords=new Set(clean('one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty point show me find want need a an the my please buy used second hand car cars for in under below up to between and lakh lakhs lac lacs auto parents family daily office commute budget rupees with of blue red white black silver grey gray safe safest safety rating ratings maintenance mileage '+CITIES.join(' ')+' gurgaon').split(' '));
const correctedQuery=query=>correctSearchText(query,searchVocabulary,protectedWords);
export const openFilters=(city='Gurugram')=>({city,min:0,max:50,body:'Any',make:'Any',model:'Any',fuel:'Any',transmission:'Any'});
export function interpretQuery(query,city='Gurugram'){
 const numbers={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50};
 const corrected=correctedQuery(query);
 const spoken=corrected.text.replace(/\b(twenty|thirty|forty|fifty)[ -](one|two|three|four|five|six|seven|eight|nine)\b/gi,(_,tens,ones)=>String(numbers[tens.toLowerCase()]+numbers[ones.toLowerCase()]));
 const q=clean(spoken.replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty)\b/gi,word=>String(numbers[word.toLowerCase()])).replace(/(\d+)\s+point\s+(\d+)/g,'$1.$2')),filters=openFilters(city),explicit=[];
 const year=q.match(/\b(19[89]\d|20[0-3]\d)\b/);if(year){filters.year=Number(year[1]);explicit.push('year');}
 const max=q.match(/(?:under|below|upto|up to|less than)\s*(\d+(?:\.\d+)?)\s*(?:lakh|lac|l\b)?/);
 const range=q.match(/(?:between\s*)?(\d+(?:\.\d+)?)\s*(?:-|and|to)\s*(\d+(?:\.\d+)?)\s*(?:lakh|lac)/);
 if(max){filters.max=+max[1];explicit.push('max');}
 if(range){filters.min=Math.min(+range[1],+range[2]);filters.max=Math.max(+range[1],+range[2]);explicit.push('min','max');}
 for(const [pattern,key,value] of [[/\bsuvs?\b/,'body','SUV'],[/\bhatchbacks?\b/,'body','Hatchback'],[/\bsedans?\b/,'body','Sedan'],[/\bmuvs?\b/,'body','MUV'],[/\bautomatic\b|\bamt\b/,'transmission','Automatic'],[/\bmanual\b/,'transmission','Manual'],[/\bpetrol\b/,'fuel','Petrol'],[/\bdiesel\b/,'fuel','Diesel'],[/\belectric\b|\bev\b/,'fuel','Electric'],[/\bcng\b/,'fuel','CNG']])if(pattern.test(q)){filters[key]=value;explicit.push(key);}
 const correction=corrected.corrections.length?corrected.corrections.map(word=>word[0].toUpperCase()+word.slice(1)).join(' '):null;
 const car=resolveVehicleModel(q,ALL_DEMO_CARS),make=resolveVehicleMake(q);
 if(car){filters.model=car.model;explicit.push('model');}
 if(make){filters.make=make;explicit.push('make');}
 if(make&&!car){const ignored=new Set(('show me find want need a an the my please buy used second hand car cars for in under below up to between and lakh lakhs lac lacs automatic manual petrol diesel cng electric suv hatchback sedan muv parents family daily office commute budget rupees with of '+CITIES.join(' ')+' gurgaon').toLowerCase().split(' '));const brand=new Set(vehicleWords(make).split(' ')),unknown=vehicleWords(q).split(' ').filter(word=>!brand.has(word)&&!ignored.has(word)&&!/^\d+(?:\.\d+)?$/.test(word));if(unknown.length){filters.model=make+' '+unknown.join(' ');explicit.push('model');}}
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
 const q=clean(correctedQuery(query).text),tokens=q.split(' ').filter(t=>t.length>2&&!['the','for','car','cars','my','with','want','check','please'].includes(t));
 return SEARCH_SERVICES.map(s=>({s,score:tokens.reduce((n,t)=>n+Math.max(0,...clean(s.label+' '+s.aliases).split(' ').map(word=>tokenScore(t,word))),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.s);
}
export function buySuggestions(query){
 const parsed=interpretQuery(query),q=clean(correctedQuery(query).text);
 if(!q||parsed.mode==='services'||parsed.unsupported.length)return [];
 const constraintWords=new Set(['car','cars','used','in','under','below','upto','up','to','less','than','between','and','lakh','lakhs','lac','lacs','l',...CITIES.flatMap(c=>clean(c).split(' ')),'gurgaon']);
 const tokens=q.split(' ').filter(t=>!constraintWords.has(t)&&!/^\d+(?:\.\d+)?$/.test(t)&&t!=='-');
 if(!tokens.length)return [];
 const suffix=[parsed.filters.year?String(parsed.filters.year):null,parsed.explicit.includes('body')?parsed.filters.body:null,parsed.explicit.includes('min')?`between ₹${parsed.filters.min} and ₹${parsed.filters.max} lakh`:parsed.explicit.includes('max')?`under ₹${parsed.filters.max} lakh`:null,parsed.explicit.includes('city')?`in ${parsed.filters.city}`:null].filter(Boolean).join(' ');
 const models=[...new Set(CARS.filter(c=>parsed.filters.body==='Any'||c.body===parsed.filters.body).map(c=>c.model))];
 return models.flatMap(model=>{
  const cars=CARS.filter(c=>c.model===model),fuels=[...new Set(cars.map(c=>c.fuel))],transmissions=[...new Set(cars.map(c=>c.transmission))];
  const variants=['',...fuels,...transmissions,...cars.map(c=>`${c.transmission} ${c.fuel}`)];
  return [...new Set(variants)].map(variant=>[model,variant,suffix].filter(Boolean).join(' '));
 }).map(label=>({label,score:phraseScore(tokens,clean(label).split(' '))})).filter(item=>item.score>0).sort((a,b)=>b.score-a.score).slice(0,8).map(item=>item.label);
}
export function matchingCars(f,cars){if(!cars)return searchMatches({...f,budget:`search:${f.min}:${f.max}`,clpFilters:f.year?{year:{min:f.year,max:f.year}}:{}});return cars.filter(c=>c.price>=f.min&&c.price<=f.max&&(!f.city||!c.city||c.city===f.city)&&(!f.year||c.year===Number(f.year))&&['body','make','model','fuel','transmission'].every(k=>!f[k]||f[k]==='Any'||(Array.isArray(f[k])?(!f[k].length||f[k].includes(c[k])):k==='model'?sameVehicleModel(c[k],f[k]):c[k]===f[k])));}
export function searchModelSuggestions(query){
 const parsed=interpretQuery(query),seen=new Set();
 const tokens=vehicleWords(correctedQuery(query).text).split(' ').filter(Boolean);
 return ALL_DEMO_CARS.filter(car=>{const key=vehicleWords(car.model);if(seen.has(key))return false;seen.add(key);return true;})
  .map(car=>({car,score:phraseScore(tokens,vehicleWords(car.model).split(' '))||(parsed.filters.model!=='Any'&&sameVehicleModel(car.model,parsed.filters.model)?1:0)}))
  .filter(item=>item.score>0).sort((a,b)=>b.score-a.score).slice(0,8).map(item=>item.car);
}
export function canonicalSearchModel(value){return resolveVehicleModel(value,ALL_DEMO_CARS)?.model||value;}
export function filterChips(f){return [f.min>0||f.max<50?{key:'budget',label:f.min>0?`₹${f.min}–${f.max} lakh`:`Under ₹${f.max} lakh`}:null,...['body','model','make','transmission','fuel'].filter(k=>f[k]&&f[k]!=='Any').map(key=>({key,label:f[key]}))].filter(Boolean);}
export function removeFilter(filters,key){return key==='budget'?{...filters,min:0,max:50}:{...filters,[key]:'Any'};}
