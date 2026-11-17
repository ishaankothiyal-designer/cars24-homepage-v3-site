// Roadmap interaction rules. Inventory uses a dated India listing snapshot; roadmap simulations remain labelled samples.
import {CARS,matches} from './model.js';
export const BUY_STEPS=['budget','body','transmission','fuel','make','model'];
export const TIMING=['Within a week','Within a month','In 1–3 months','Just exploring'];
export const PRESETS=[{id:'diesel-auto',label:'Diesel automatic',filters:{fuel:'Diesel',transmission:'Automatic'}},{id:'seven-under-six',label:'7-seater under ₹6 lakh',filters:{seats:7,budget:'search:0:6'}},{id:'automatic-under-ten',label:'Automatic under ₹10 lakh',filters:{transmission:'Automatic',budget:'search:0:10'}}];
export const OPEN_FILTERS={budget:'any',body:'Any',make:'Any',model:'Any',transmission:'Any',fuel:'Any',seats:'Any'};
export function applyPreset(profile,id){return {...profile,...PRESETS.find(p=>p.id===id)?.filters};}
export function filteredCars(profile,cars=CARS){return matches(profile,cars).filter(c=>(!profile.model||profile.model==='Any'||profile.model===c.model)&&(!profile.seats||profile.seats==='Any'||(c.seats||5)===Number(profile.seats)));}
export function monthlyPayment(price,downPayment,rate=12,months=60){const principal=Math.max(0,price-downPayment),r=rate/1200;return r?principal*r/(1-Math.pow(1+r,-months)):principal/months;}
export function affordableCars(profile,emi,cars=CARS){return filteredCars(profile,cars).filter(c=>c.price*100000>=emi.down&&monthlyPayment(c.price*100000,emi.down,emi.rate,emi.months)<=emi.monthly);}
export function similarCars(car,cars=CARS){return cars.filter(c=>c.id!==car.id).map(c=>({car:c,distance:Math.abs(c.price-car.price)+(c.body===car.body?0:3)+(c.transmission===car.transmission?0:1)})).sort((a,b)=>a.distance-b.distance||a.car.id.localeCompare(b.car.id)).slice(0,3).map(x=>x.car);}
// Demonstration of contextual ordering, NOT a trained DS or a lending decision.
// Region/channel/device are explicit review scenarios; credit never excludes stock.
export function rankCars(cars,sort='Recommended',context={},lastCar=null){const ranked=[...cars];if(sort==='Price: low to high')return ranked.sort((a,b)=>a.price-b.price);if(sort==='Price: high to low')return ranked.sort((a,b)=>b.price-a.price);if(sort==='Newest first')return ranked.sort((a,b)=>b.year-a.year);const score=c=>(lastCar&&c.body===lastCar.body?3:0)+(context.channel==='Finance'&&c.price<=8?2:0)+(context.device==='Mobile'&&c.transmission==='Automatic'?1:0)+(context.region==='City'&&c.body==='Hatchback'?2:0)+(context.credit==='Finance exploring'&&c.price<=8?1:0);return ranked.sort((a,b)=>score(b)-score(a));}
export const SLOT_OPTIONS={Current:['Tomorrow · 10–11 am','Tomorrow · 2–3 pm','Day after · 11 am–12 pm'],Wider:['Tomorrow · Morning (9 am–12 pm)','Tomorrow · Afternoon (12–5 pm)','Day after · Morning (9 am–12 pm)'],'No slots':['Request a callback to arrange a time']};
export function offerFor(car,offer,now=Date.now()){return offer.enabled&&car.id===CARS[0].id&&offer.expires>now?{discount:10000,expires:offer.expires}:null;}
export const ROADMAP=[
 ['Guided onboarding & intent','Bet','Onboarding → CLP','budget','Budget, preferences and purchase timing'],
 ['Returning user journey','Essential','Home → CLP','resume','Resume locally saved preferences, shortlist and recent car'],
 ['EMI assisted discovery','Experiment','Onboarding → CLP','emi','Monthly EMI and available down payment'],
 ['Unified AI search','Essential','Home → CLP','search','Existing structured and natural-language search'],
 ['Voice discovery','Bet','Home → CLP','voice','Permission-based speech input with editable transcript'],
 ['Quick multi filters','Essential','CLP → CDP','listings','One-click combinations and editable filters'],
 ['Contextual default sorting','Essential','CLP → CDP','ranking','Review device, region, credit and channel scenarios'],
 ['Similar cars after CDP','Essential','CLP → CDP','similar','Return to listing with context from the viewed car'],
 ['You may also like','Essential','CLP → CDP','recommendations','Labelled fixture, no live collaborative model'],
 ['EV details','Essential','CDP → BI','ev','Missing-data state; verified battery data required'],
 ['Actual-car video','Bet','CDP → BI','video','Unavailable until a video for this vehicle is supplied'],
 ['Inspection report','Essential','CDP → BI','inspection','Summary, issues and detailed-report sample'],
 ['Features & specifications','Essential','CDP → BI','specifications','Vehicle facts from the synthetic fixture'],
 ['Condition in gallery','Essential','CDP → BI','gallery','Labelled sample imperfections with location selection'],
 ['Return, warranty & ABB','Essential','CDP → BI','promises','Coverage, exclusions, eligibility, charges and use'],
 ['Smart car comparison','Bet','CDP → BI','comparison','Compare saved or selected cars and trade-offs'],
 ['Swipeable car details','Bet','CDP → BI','swipe','Previous/next buttons and horizontal swipe'],
 ['Time-based discounting','Bet','CDP → BC','offers','Explicit sample offer consistent through booking'],
 ['Test-drive slots','Experiment','BI → V','booking','Current, wider and no-slot treatments'],
 ['Visit to GT discovery','Bet','V → GT','research','Research required; no product flow specified'],
 ['GT to delivery discovery','Bet','GT → D','research','Research required; no product flow specified']
];
