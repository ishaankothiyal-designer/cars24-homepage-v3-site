import {ALL_DEMO_CARS} from './model.js';
import {demoDifferences} from './demo-discovery.js';
import {filterClpCars} from './clp-filters.js';
/** Prototype-only extension: retain real IDs/actions and disclose added alternatives. */
export function extendClpForWidgets(result,{profile,extra={},seller='all',accept=()=>true,minimum=32}={}){
 if(result.cars.length>=minimum)return result;
 const ids=new Set(result.cars.map(car=>car.id));
 const candidates=ALL_DEMO_CARS.filter(car=>!ids.has(car.id)).map(car=>{
  const differences=demoDifferences(car,profile,seller);
  if(!filterClpCars([car],{extra}).length)differences.push('Differs from additional listing filters');
  if(!accept(car))differences.push('Outside selected affordability');
  return {...car,demoDifferences:[...new Set(differences.length?differences:['Additional prototype listing'])]};
 }).sort((a,b)=>(a.city!==profile.city)-(b.city!==profile.city)||a.demoDifferences.length-b.demoDifferences.length||a.price-b.price);
 const cars=[...result.cars,...candidates.slice(0,minimum-result.cars.length)];
 const exact=cars.filter(car=>!car.demoDifferences?.length).length;
 return {...result,cars,mode:exact?'mixed':'alternatives',notice:`${result.notice||'Dated demo listings.'} Prototype preview extended to ${cars.length} cars so all inline widgets can be reviewed. Additional listings are labelled; selected filters are retained.`};
}
