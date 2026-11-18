/** Dashboard-only presentation preferences. Vehicle data and journey state stay with callers. */
export const CAR_CARD_FAMILIES=['desktop-grid','india-mobile','tile','list','carousel-grid'];
export const CARD_LAYOUT_LABELS={'desktop-grid':'Desktop grid cards','india-mobile':'India Mobile Card',tile:'Tile cards',list:'List cards','carousel-grid':'Carousel grid cards'};
export const cardFamilyKey=scope=>scope==='contextual'?'cars24-contextual-card-family-v1':'cars24-clp-card-family-v2';
export function getCardFamily(scope='listing'){
 try{const value=localStorage.getItem(cardFamilyKey(scope));if(CAR_CARD_FAMILIES.includes(value))return value;}catch{}
 return scope==='contextual'?'carousel-grid':'desktop-grid';
}
export function setCardFamily(scope,family){if(!CAR_CARD_FAMILIES.includes(family))return false;try{localStorage.setItem(cardFamilyKey(scope),family);}catch{}return true;}
export const cardReviewScope=route=>['car-detail','cdp-panel','home','l1','cargpt'].includes(route)?'contextual':'listing';
