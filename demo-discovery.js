import {CARS,DEMO_CARS,ALL_DEMO_CARS,BUDGETS,matches,bodySelection,makeSelection,fuelSelection} from './model.js';
function budgetRange(p){return String(p.budget).startsWith('search:')?p.budget.split(':').slice(1).map(Number):(BUDGETS.find(b=>b[0]===p.budget)||BUDGETS.at(-1)).slice(2);}
export function demoDifferences(car,profile,seller='all'){
 const [min,max]=budgetRange(profile),differences=[];
 if(profile.city&&profile.city!=='Any'&&car.city!==profile.city)differences.push(`In ${car.city}`);
 if(car.price<min||car.price>max)differences.push('Outside selected budget');
 if(bodySelection(profile.body).length&&!bodySelection(profile.body).includes(car.body))differences.push(`Body type: ${car.body}`);
 if(makeSelection(profile.make).length&&!makeSelection(profile.make).includes(car.make))differences.push(`Brand: ${car.make}`);
 if(fuelSelection(profile.fuel).length&&!fuelSelection(profile.fuel).includes(car.fuel))differences.push(`Fuel: ${car.fuel}`);
 if(profile.transmission&&profile.transmission!=='Any'&&car.transmission!==profile.transmission)differences.push(car.transmission);
 if(profile.model&&profile.model!=='Any'&&car.model!==profile.model)differences.push('Different model');
 if(profile.seats&&profile.seats!=='Any'&&car.seats!==Number(profile.seats))differences.push(car.seats?`${car.seats} seats`:'Seats not supplied');
 if(seller!=='all'&&car.seller!==seller)differences.push('Different seller category');
 return differences;
}
/** Prefer exact fixtures, then sourced catalogue, then explicitly labelled nearest alternatives. */
export function discoverDemoCars(profile,{seller='all',accept=()=>true,limit=24}={}){
 const accepts=c=>(seller==='all'||c.seller===seller)&&accept(c);
 const original=matches(profile,CARS).filter(accepts);
 if(original.length)return {cars:original,total:original.length,mode:'original',notice:''};
 const exact=matches(profile,DEMO_CARS).filter(c=>accepts(c)&&(!profile.seats||profile.seats==='Any'||c.seats===Number(profile.seats)));
 if(exact.length)return {cars:exact.slice(0,limit),total:exact.length,mode:'expanded',notice:`Sourced demo listings · ${exact[0].fetchedAt} snapshot. Prices and availability may have changed.`};
 const [min,max]=budgetRange(profile);
 const score=c=>demoDifferences(c,profile,seller).length*100+(c.city!==profile.city?1000:0)+(accept(c)?0:500)+Math.max(0,min-c.price,c.price-max);
 const alternatives=[...ALL_DEMO_CARS].sort((a,b)=>score(a)-score(b)||a.price-b.price).slice(0,12).map(c=>({...c,demoDifferences:[...demoDifferences(c,profile,seller),...(!accept(c)?['Outside monthly affordability']:[])]}));
 return {cars:alternatives,total:alternatives.length,mode:'alternatives',notice:'Demo alternatives for you. Some preferences differ; your selected filters are kept. Each listing shows the differences. Prices and availability are a dated snapshot.'};
}
