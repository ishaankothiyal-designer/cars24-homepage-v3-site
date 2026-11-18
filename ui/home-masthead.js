const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/** Shared Home masthead; native status chrome remains the responsibility of the screen shell. */
export function renderHomeMasthead({profile={},variant='brand'}={}){
 const city=profile.city||'Gurugram';
 const locality=[profile.locality,profile.address].find(value=>typeof value==='string'&&value.trim());
 const location=locality?city+' • '+locality:city;
 const light=variant==='light',theme=light?'light':'brand';
 const sourceGlyph=(name,cls='home-masthead-glyph')=>`<img class="${cls}" src="./assets/header-9156/${theme}-${name}.svg" alt="">`;
 return `<header class="home-masthead${variant==='light'?' home-masthead--light':''}"><div class="home-brand-row"><span class="home-brand-mark"><img class="home-brand-logo" src="${light?'./assets/l1-header/brand-logo.png':'./assets/flow-home/home-brand-logo.png'}" alt="Cars24" loading="eager" decoding="async"></span><div class="home-header-actions"><button type="button" class="home-header-icon" data-action="home-notifications" aria-label="Notifications">${sourceGlyph('bell-outline')}</button><button type="button" class="home-header-icon" data-action="account" aria-label="Your preferences and account">${sourceGlyph('people-circle-user-circle-avatar-profile-outline','home-header-avatar home-masthead-glyph')}</button></div></div><div class="home-location-row"><button class="home-location" type="button" data-action="city" aria-label="Choose city"><span class="home-location-pin">${sourceGlyph('icon')}</span><span class="home-location-name">${escape(location)}</span><span class="home-location-glyph">${sourceGlyph('chevron-down-small-outline')}</span></button></div></header>`;
}
