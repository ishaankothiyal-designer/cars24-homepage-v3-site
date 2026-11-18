/** Model identity shared by typed/voice search and retained listings. */
export const SEARCH_MAKES=['Maruti Suzuki','Mercedes-Benz','Volkswagen','Mahindra','Hyundai','Renault','Toyota','Datsun','Nissan','Skoda','Honda','Tata','Kia','Ford','Jeep','Lexus','Audi','BMW','MG'];
export const vehicleWords=value=>String(value||'').toLowerCase().replace(/\bmaruti\s+suzuki\b/g,'maruti').replace(/\b(x)\s+(u)\s+(v)\b/g,'xuv').replace(/\bi\s+ten\b/g,'i10').replace(/([a-z])(\d)/g,'$1 $2').replace(/(\d)([a-z])/g,'$1 $2').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
const phrasePattern=value=>new RegExp(`(?:^|\\s)${vehicleWords(value).split(' ').join('\\s*')}(?=\\s|$)`);
export const makeKey=value=>vehicleWords(value);
export function vehicleModelKey(value){const name=vehicleWords(value),brand=SEARCH_MAKES.map(vehicleWords).sort((a,b)=>b.length-a.length).find(make=>name.startsWith(make+' '));return brand?name.slice(brand.length+1):name;}
export const sameVehicleModel=(a,b)=>vehicleModelKey(a)===vehicleModelKey(b);
export function resolveVehicleModel(query,cars){
 const words=vehicleWords(query),groups=new Map();
 for(const car of cars){const key=vehicleModelKey(car.model);if(!groups.has(key))groups.set(key,{...car,aliases:new Set()});const group=groups.get(key);group.aliases.add(vehicleWords(car.model));group.aliases.add(key);}
 return [...groups.values()].flatMap(car=>[...car.aliases].filter(alias=>phrasePattern(alias).test(words)).map(alias=>({car,score:alias.replaceAll(' ','').length}))).sort((a,b)=>b.score-a.score)[0]?.car||null;
}
export const resolveVehicleMake=query=>SEARCH_MAKES.find(make=>phrasePattern(make).test(vehicleWords(query)))||null;
