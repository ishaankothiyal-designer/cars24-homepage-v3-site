import {ALL_DEMO_CARS,CARS,BUDGETS,homePriceBand,matches,makeLabel,bodyLabel,normalizeRegistration,validRegistration} from '../model.js';
import {openFilters} from '../search-model.js';

export const JOURNEY_SERVICES=[
 {id:'buy',label:'Buy car',description:'Search Cars24 inventory',icon:'buy'},
 {id:'sell',label:'Sell car',description:'Get an instant price estimate',icon:'sell'},
 {id:'loans',label:'Get loans',description:'Get car or personal loans',icon:'loans'},
 {id:'challan',label:'Pay challan',description:'Check and resolve fines',icon:'challan'}
];
const choices=value=>Array.isArray(value)?value.length>0:!!value&&!['Any','any','all'].includes(value);
export const BUY_FIELDS=['budget','body','transmission','fuel','make'];
export function profileFilters(profile={}){
 const band=homePriceBand(profile.budget);
 const custom=String(profile.budget).startsWith('search:')?profile.budget.split(':').slice(1).map(Number):null;
 const range=custom||(band?[band.min,band.max]:(BUDGETS.find(b=>b[0]===profile.budget)||BUDGETS.at(-1)).slice(2));
 return {...openFilters(profile.city||'Gurugram'),min:range[0],max:range[1],...Object.fromEntries(['body','make','model','fuel','transmission'].map(key=>[key,profile[key]||'Any']))};
}
// Work only from cards visible above the sticky controls and within the scroll
// viewport. A stale previously visited car must never displace the current one.
export function visibleCarId(rectangles,{top,bottom}){
 let best=null,area=0;
 for(const rect of rectangles){const visible=Math.max(0,Math.min(bottom,rect.bottom)-Math.max(top,rect.top))*rect.width;
  if(visible>area){area=visible;best=rect.id;}
 }
 return best;
}
export function leadWithCar(cars,id){const index=cars.findIndex(car=>car.id===id);return index>0?[cars[index],...cars.slice(0,index),...cars.slice(index+1)]:[...cars];}

export function vehicleForEntry(vehicle={},draft){
 if(draft===undefined)return {...vehicle};
 if(normalizeRegistration(draft)===normalizeRegistration(vehicle.registration||''))return {...vehicle,registration:draft};
 // A new number is a different vehicle; never attach the previous car's facts.
 return {registration:draft,city:vehicle.city};
}

export function resolveEntryContext({route,homeTab='all',profile={},vehicle={},onboarding={},onboardingTask='',loanApproval=null,listing=null,selectedCar=null,lastServiceTab=null,fallbackJourney='all'}={}){
 const serviceTab=route==='l1'?homeTab:['home','garage'].includes(route)?homeTab:null;
 const lastTab=['buy','sell','loans','checks','challan','insurance','ownership'].includes(lastServiceTab)?lastServiceTab:null;
 let journey=listing||selectedCar?'buy':serviceTab&&serviceTab!=='all'?serviceTab:lastTab||(profile.intent&&profile.intent!=='all'?profile.intent:fallbackJourney);
 if(journey==='ownership'){if(/challan/i.test(onboardingTask))journey='challan';else if(/check|inspection/i.test(onboardingTask))journey='checks';else if(/insurance/i.test(onboardingTask))journey='insurance';}
 if(journey==='care')journey='ownership';
 const surface=selectedCar?'detail':listing?'listing':route==='home'||route==='l1'?'home':'service';
 const filters=listing?structuredClone(listing.filters):profileFilters(profile);
 if(journey==='buy'&&loanApproval?.active)filters.max=Math.min(filters.max,loanApproval.cap);
 const answered=BUY_FIELDS.filter(key=>choices(profile[key])||(profile.intent==='buy'&&onboarding.answered?.includes(key)));
 let cars=[];
 if(listing)cars=leadWithCar(listing.cars,listing.visibleId);
 else if(journey==='buy'&&!buyQuestion(answered)){const original=matches({...profile,budget:`search:${filters.min}:${filters.max}`},CARS);cars=original.length?original:matches({...profile,budget:`search:${filters.min}:${filters.max}`},ALL_DEMO_CARS);}
 const registration=validRegistration(vehicle.registration||'')?normalizeRegistration(vehicle.registration):'';
 const context={journey:journey||'all',surface,filters:journey==='buy'?filters:openFilters(profile.city||'Gurugram'),answered,cars,buyFilters:profileFilters(profile),vehicle:{...vehicle,registration},loanApproval:loanApproval?{...loanApproval}:null,selectedId:selectedCar?.id||null};
 context.key=JSON.stringify([context.journey,surface,context.filters,answered,registration,vehicle.model,vehicle.variant,loanApproval?.cap,context.selectedId,cars.map(car=>car.id)]);
 return context;
}
export function preferenceSummary(filters){
 return [choices(filters.make)?makeLabel(filters.make):null,choices(filters.model)?filters.model:null,choices(filters.body)?bodyLabel(filters.body):null,choices(filters.transmission)?filters.transmission:null,choices(filters.fuel)?(Array.isArray(filters.fuel)?filters.fuel.join(' or '):filters.fuel):null,filters.min>0?`₹${filters.min}–${filters.max} lakh`:filters.max<50?`under ₹${filters.max} lakh`:null].filter(Boolean).join(' · ');
}
export function buyQuestion(answered=[]){
 const key=BUY_FIELDS.find(field=>!answered.includes(field));
 const questions={
  budget:['What budget would you like to stay within?',[['Under ₹5 lakh','0:5'],['₹5–8 lakh','5:8'],['₹8–12 lakh','8:12'],['Any budget','0:50']]],
  body:['Which body type would you prefer?',[['Hatchback','Hatchback'],['Sedan','Sedan'],['SUV','SUV'],['Open to all','Any']]],
  transmission:['Would you prefer an automatic or a manual?',[['Automatic','Automatic'],['Manual','Manual'],['Open to both','Any']]],
  fuel:['Do you have a fuel preference?',[['Petrol','Petrol'],['Diesel','Diesel'],['CNG','CNG'],['Open to all','Any']]],
  make:['Any preferred car brands?',[['Maruti Suzuki','Maruti Suzuki'],['Hyundai','Hyundai'],['Tata','Tata'],['Honda','Honda'],['Open to all','Any']]]
 };
 return key?{key,text:questions[key][0],options:questions[key][1].map(([label,value])=>({label,value}))}:null;
}
export function serviceFromQuery(query){
 const value=query.toLowerCase().trim().replace(/[.!?]+$/,'');
 if(/^(?:(?:i (?:want|need|would like) to|help me|let me) )?(?:buy|buying)(?: (?:a |my |used |new )?cars?)?$/.test(value))return 'buy';
 if(/^(?:(?:i (?:want|need|would like) to|help me) )?(?:sell|selling)(?: (?:a |my )?cars?)?$/.test(value))return 'sell';
 if(/^(?:get |i need (?:a )?)?(?:loans?|car loans?|personal loans?)$/.test(value))return 'loans';
 if(/^(?:(?:pay|check|resolve) )?(?:my )?challans?$/.test(value))return 'challan';
 return null;
}
