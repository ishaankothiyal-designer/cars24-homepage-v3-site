import {DEMO_CARS} from './demo-inventory.bundle.js';
import {CARS} from './inventory.js';
import {fuelSelection,bodySelection,bodyLabel,makeSelection,makeLabel} from './discovery-controls.js';
export {fuelSelection,toggleFuel,fuelChoices,TOP_LEVEL_INTENTS,OWNERSHIP_GROUPS,ownershipLandingTab,landingBucket,bodySelection,bodyLabel,toggleBody,bodyChoices,makeSelection,makeLabel,toggleMake,makeChoices,makePicker} from './discovery-controls.js';
// Dated CARS24 India inventory snapshot; see inventory.js for provenance and availability limits.
export const DEFAULT_PROFILE={intent:'buy',budget:'8-12',body:'SUV',make:'Any',fuel:'Any',transmission:'Any',city:'Gurugram'};
export const BUDGETS=[['under-5','Under ₹5 lakh',0,5],['5-8','₹5–8 lakh',5,8],['8-12','₹8–12 lakh',8,12],['over-12','Over ₹12 lakh',12,50],['any','I’m still exploring',0,50]];
export const CITIES=['Gurugram','Delhi','Bengaluru','Mumbai','Pune','Hyderabad','Chennai','Noida'];
export const SERVICES=[{id:'buy',label:'Buy car',sub:'Used cars, new cars and bikes',icon:0},{id:'sell',label:'Sell car',sub:'Valuation, selling and scrapping',icon:1},{id:'loans',label:'Get loans',sub:'Borrow, pay EMI, Gold loan',icon:4},{id:'ownership',label:'Vehicle ownership',sub:'Car checks, challans, insurance, FASTag and care',icon:2}];
export {CARS} from './inventory.js';
export {DEMO_CARS};
export const ALL_DEMO_CARS=[...CARS,...DEMO_CARS.filter(c=>!CARS.some(original=>original.id===c.id))];
export function budgetLabel(id){if(String(id).startsWith('search:')){const [,min,max]=id.split(':').map(Number);return min?`₹${min}–${max} lakh`:`Under ₹${max} lakh`;}return BUDGETS.find(b=>b[0]===id)?.[1]||'Any budget';}
export function matches(profile,cars=CARS){const range=String(profile.budget).startsWith('search:')?profile.budget.split(':').slice(1).map(Number):null;const b=range?['search','Custom budget',...range]:BUDGETS.find(b=>b[0]===profile.budget)||BUDGETS[4];return cars.filter(c=>(!profile.city||profile.city==='Any'||!c.city||c.city===profile.city)&&c.price>=b[2]&&c.price<=b[3]&&(!profile.model||profile.model==='Any'||c.model===profile.model)&&(!profile.seats||profile.seats==='Any'||(c.seats||5)===Number(profile.seats))&&(!bodySelection(profile.body).length||bodySelection(profile.body).includes(c.body))&&(!makeSelection(profile.make).length||makeSelection(profile.make).some(make=>c.make===make||c.model===make))&&(!fuelSelection(profile.fuel).length||fuelSelection(profile.fuel).includes(c.fuel))&&(!profile.transmission||profile.transmission==='Any'||c.transmission===profile.transmission));}
export function homeOrder(intent){return ['loans','checks','insurance'].includes(intent)?[intent,'buy','cars','makes','sell','services']:intent==='sell'?['sell','buy','cars','makes','ownership','services']:intent==='challan'?['challan','buy','cars','makes','sell','services']:intent==='ownership'?['ownership','buy','cars','makes','sell','services']:intent==='buy'?['buy','cars','makes','sell','services']:['buy','cars','makes','sell','services'];}
export function profileLine(p){return [bodySelection(p.body).length?bodyLabel(p.body):'Cars',p.budget&&p.budget!=='any'?budgetLabel(p.budget).toLowerCase():'for every budget',makeSelection(p.make).length?makeLabel(p.make):'open to every make'].join(' · ');}
export function validRegistration(value){return /^(?:[A-Z]{2}\d{1,2}[A-Z]{1,3}\d{4}|\d{2}BH\d{4}[A-Z]{1,2})$/.test(value.replace(/\s/g,'').toUpperCase());}
export function normalizeRegistration(s){return s.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,11);}
