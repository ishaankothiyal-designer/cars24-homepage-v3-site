export function carImage(car) {
 return car.imageUrl || (/^https?:/.test(car.image) ? car.image : `./assets/${car.image}`);
}
const lakh=rupees=>`${(rupees/100000).toFixed(2)} lakh`;
export function cardData(car, saved=false, recommended=false) {
 const photos=car.photos?.length?car.photos:[carImage(car)];
 return {
  id:car.id, name:`${car.year} ${car.model}`, variant:car.variant || car.body,
  tags:[`${car.km.toLocaleString('en-IN')} km`,car.fuel,car.transmission==='Automatic'?'Auto':car.transmission,car.registrationRegion].filter(Boolean),
  price:`₹${car.price.toFixed(2)} lakh`, photos,photo:car.isDemoSnapshot&&car.cutoutImageUrl?car.cutoutImageUrl:photos[0],photoCount:photos.length,photoIndex:0,
  seller:car.seller,city:car.city,freeTestDrive:!!car.freeTestDrive,location:car.location || car.city,sourceNote:`${car.seller} · Checked ${car.fetchedAt}`,
  listingUrl:car.listingUrl,wishlisted:saved,owned:car.seller==='Cars24 Owned Stock',
  elite:car.category==='ELITE',categoryLabel:car.category==='PRIME'?'PRIME':car.category==='BUDGET'?'Budget':'',recommended,
  ribbon:car.ribbon||(car.originalPriceRupees>car.priceRupees?'Price Drop':undefined),
  recommendedLabel:'Recommended',assuranceLead:car.assuranceLead||'',assurance:car.assurance||'',
  assurances:car.assurances||[],emi:car.emiMonthlyRupees?`EMI ₹${car.emiMonthlyRupees.toLocaleString('en-IN')}/mo`:'',priceWas:car.originalPriceRupees>car.priceRupees?`₹${lakh(car.originalPriceRupees)}`:'',usp:car.uspLabel||'',
  ctaPrimary:car.freeTestDrive?'Free Test Drive':'View on CARS24',ctaSecondary:'View Details'
 };
}
export function cardSource(car,recommended=false) {
 return `${car.location || car.city} · CARS24 listing checked ${car.fetchedAt}${recommended?' · Recommended from your selected filters':''}`;
}

/** Shared legacy-to-source data mapping for every runtime vehicle-card consumer. */
export function toVehicleCardData(d,{family=d.family,oneFooter=true}={}){
 const list=family==='list',compact=family==='carousel-grid',assurance=[d.assuranceLead,d.assurance].filter(Boolean).join(' ');
 return {id:d.id,name:d.name,variant:d.variant,tags:list?d.tags?.slice(0,3):d.tags,photo:d.photo,
  photos:compact||list?undefined:d.photos?.map((photo,index)=>index===0?d.photo:photo),
  price:d.emiFirst&&d.emi?d.emi:d.price,emi:compact?undefined:d.emiFirst?`Full price ${d.price}`:d.emi,previousPrice:d.priceWas,
  seller:d.seller,categoryLabel:d.elite?'Elite':d.categoryLabel==='PRIME'?'Mid-range':d.categoryLabel,
  usp:d.usp==='As good as new'?'Good as new':d.usp,ribbon:d.recommended?'Recommended':d.ribbon,
  assurance:assurance||undefined,location:oneFooter&&assurance?undefined:d.location||d.city,wishlisted:d.wishlisted};
}
