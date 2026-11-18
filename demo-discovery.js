import {sameVehicleModel} from './vehicle-models.js';
import {ALL_DEMO_CARS,BUDGETS,matches,homePriceBand,bodySelection,makeSelection,fuelSelection} from './model.js';
function budgetRange(p){const band=homePriceBand(p.budget);if(band)return [band.min,band.max];return String(p.budget).startsWith('search:')?p.budget.split(':').slice(1).map(Number):(BUDGETS.find(b=>b[0]===p.budget)||BUDGETS.at(-1)).slice(2);}
export function demoDifferences(car,profile,seller='all'){
 const [min,max]=budgetRange(profile),differences=[];
 if(profile.city&&profile.city!=='Any'&&car.city!==profile.city)differences.push(`In ${car.city}`);
 if(car.price<min||car.price>max||(homePriceBand(profile.budget)?.maxExclusive&&car.price===max))differences.push('Outside selected budget');
 if(bodySelection(profile.body).length&&!bodySelection(profile.body).includes(car.body))differences.push(`Body type: ${car.body}`);
 if(makeSelection(profile.make).length&&!makeSelection(profile.make).includes(car.make))differences.push(`Brand: ${car.make}`);
 if(fuelSelection(profile.fuel).length&&!fuelSelection(profile.fuel).includes(car.fuel))differences.push(`Fuel: ${car.fuel}`);
 if(profile.transmission&&profile.transmission!=='Any'&&car.transmission!==profile.transmission)differences.push(car.transmission);
 if(profile.model&&profile.model!=='Any'&&!sameVehicleModel(car.model,profile.model))differences.push('Different model');
 if(profile.seats&&profile.seats!=='Any'&&car.seats!==Number(profile.seats))differences.push(car.seats?`${car.seats} seats`:'Seats not supplied');
 if(seller!=='all'&&car.seller!==seller)differences.push('Different seller category');
 return differences;
}
/** Combine unique exact records before considering explicitly labelled alternatives. */
export function discoverDemoCars(profile,{seller='all',accept=()=>true,limit=24}={}){
 const accepts=c=>(seller==='all'||c.seller===seller)&&accept(c);
 const exact=matches(profile,ALL_DEMO_CARS).filter(c=>accepts(c)&&(!profile.seats||profile.seats==='Any'||c.seats===Number(profile.seats)));
 const snapshot=exact.find(c=>c.isDemoSnapshot);
 const notice=snapshot?`Sourced demo listings · ${snapshot.fetchedAt} snapshot. Prices and availability may have changed.`:'';
 // An exact match never prevents the rest of the catalogue from being considered.
 if(exact.length>=6)return {cars:exact.slice(0,limit),total:exact.length,mode:snapshot?'expanded':'original',notice};
 const [min,max]=budgetRange(profile),exactIds=new Set(exact.map(c=>c.id));
 const score=c=>demoDifferences(c,profile,seller).length*100+(c.city!==profile.city?1000:0)+Math.max(0,min-c.price,c.price-max);
 // Affordability is a hard constraint; alternatives may differ from discovery preferences only.
 const alternatives=ALL_DEMO_CARS.filter(c=>!exactIds.has(c.id)&&accepts(c)).sort((a,b)=>score(a)-score(b)||a.price-b.price).slice(0,Math.min(12,Math.max(0,limit-exact.length))).map(c=>({...c,demoDifferences:demoDifferences(c,profile,seller)}));
 if(exact.length)return {cars:[...exact,...alternatives].slice(0,limit),total:exact.length,mode:alternatives.length?'mixed':snapshot?'expanded':'original',notice:alternatives.length?`${notice||'Dated demo listings.'} ${exact.length} exact ${exact.length===1?'match':'matches'} first, followed by alternatives with differences labelled. Your preferences are kept.`:notice};
 return {cars:alternatives,total:0,mode:'alternatives',notice:'Demo alternatives for you. Some preferences differ; your selected filters are kept. Each listing shows the differences. Prices and availability are a dated snapshot.'};
}
