import {animate} from '../ui/cargpt-motion.js';
export function visualPayload({phase='idle',level=0,permissionDenied=false,active=true,reducedMotion=false}={}) {
 const normalized=Number.isFinite(level)?Math.max(0,Math.min(1,level)):0;
 return {kind:'light',phase:['thinking','working'].includes(phase)?'thinking':['speaking','listening'].includes(phase)?phase:'idle',level:['speaking','listening'].includes(phase)?normalized:0,active:active&&phase!=='inactive',reducedMotion,permissionDenied:permissionDenied||phase==='permission-denied',beat:'conversation',instant:reducedMotion};
}
export function mountC3Visuals(container) {
 const host=document.createElement('div');host.className='c3-source-visuals';host.setAttribute('aria-hidden','true');
 const orb=document.createElement('canvas');orb.className='c3-source-orb';host.append(orb);container.append(host);
 const screen=container.closest('.screen'),material=document.createElement('div');material.className='c3-source-material';material.setAttribute('aria-hidden','true');
 screen.append(material);
 let renderer=null;const media=matchMedia('(prefers-reduced-motion: reduce)');
 let state={phase:'idle',level:0,active:false},loading=false,dead=false,closing=null;
 function resize(){const scale=screen.clientWidth/360;material.style.height=`${130*scale}px`;}
 const observer=new ResizeObserver(resize);observer.observe(screen);resize();
 function paint(){
  if(dead)return;const active=state.active&&!document.hidden;host.hidden=!state.active;material.hidden=!state.active;screen.classList.toggle('is-cargpt-voice',state.active);
  const sizes={listening:64.4,speaking:77,'permission-denied':83.125};
  const size=state.intro?180:media.matches?70:(sizes[state.phase]||70);orb.dataset.diameter=String(size);if(!closing)orb.style.transform=`translate(-50%,-50%) scale(${size/180})`;host.dataset.phase=state.phase;
  if(state.active&&!renderer&&!loading){loading=true;import('../ui/cargpt-rive.js').then(({mountRiveOrb})=>{if(dead)return;renderer=mountRiveOrb(orb);paint();}).catch(()=>{if(!dead)orb.dataset.renderer='unavailable';});}renderer?.update({phase:state.phase,level:state.level,size,appear:1,travel:0,reducedMotion:media.matches,active});
 }
 media.addEventListener('change',paint);document.addEventListener('visibilitychange',paint);paint();
 return{
  update(next={}){state={...state,...next};paint();},
  async dismissTo(target,{instant=false}={}){
   if(closing)return closing;const a=orb.getBoundingClientRect(),b=target.getBoundingClientRect(),zoom=host.getBoundingClientRect().width/host.clientWidth;
   const dx=(b.left+b.width/2-a.left-a.width/2)/zoom,dy=(b.top+b.height/2-a.top-a.height/2)/zoom;
   // Keep a fixed drawing surface and dock the composed Rive pose.
   // Dock its visible diameter down to the source 32pt control, never scale(0).
   const flight=document.createElement('div');flight.className='c3-source-flight';
   const bounds=host.getBoundingClientRect();
   Object.assign(flight.style,{position:'absolute',inset:'0',transformOrigin:`${(a.left+a.width/2-bounds.left)/zoom}px ${(a.top+a.height/2-bounds.top)/zoom}px`});
   host.append(flight);flight.append(orb);
   const reduced=instant||media.matches,diameter=Number(orb.dataset.diameter)||70;
   const controls=animate(flight,{transform:reduced?'none':`translate(${dx}px,${dy}px) scale(${32/diameter})`,opacity:0},{type:'spring',duration:instant?0:reduced?.16:.5,bounce:reduced?0:.2});
   // Retire the animated wrapper, not the renderer. A completed fill effect
   // must never make the retained canvas invisible on the next voice session.
   closing=Promise.resolve(controls).then(()=>{controls.stop();host.append(orb);flight.remove();closing=null;paint();});return closing;
  },
  destroy(){dead=true;observer.disconnect();renderer?.destroy();media.removeEventListener('change',paint);document.removeEventListener('visibilitychange',paint);material.remove();host.remove();screen.classList.remove('is-cargpt-voice');}
 };
}
