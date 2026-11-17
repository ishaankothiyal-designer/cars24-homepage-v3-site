/** Original supplied tab artwork, retained from the pre-Autonaut homepage. */
export const HOME_SERVICE_TABS=[['all','All'],['buy','Buy car'],['sell','Sell car'],['loans','Get loans'],['checks','Car check'],['challan','Challan'],['insurance','Insurance']];
export const serviceArtwork={all:'home-imgIcon.png',buy:'home-imgIcon1.png',sell:'home-imgIcon2.png',loans:'home-imgFeatureIcon.png',checks:'home-imgCar.png',challan:'home-imgIcon3.png',insurance:'home-imgShield44.png',ownership:'home-imgIcon3.png'};

/** Established six-cell glass artwork for illustrative slots; utility glyphs remain Autonaut. */
export function glassArtwork(index,className=''){
 const slot=Number.isInteger(index)&&index>=0&&index<6?index:0;
 const cls=String(className).replace(/[^a-zA-Z0-9 _-]/g,'');
 return `<span class="glass glass-${slot}${cls?' '+cls:''}" aria-hidden="true"></span>`;
}
