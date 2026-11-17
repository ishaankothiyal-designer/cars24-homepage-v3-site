import {mountFabric} from './visuals/fabric.js';
import {introFrame,bezierAt} from './visuals/intro-motion.js';
import {mountOrb} from './visuals/orb.js';
const STYLE = `
.c3-visuals{--c3-violet:#5227ff;--c3-lilac:#b19eef;--c3-pink:#ff9ffc;--c3-deep:#7c5cff;--c3-paper:#fff;--c3-muted:#90a1b9;position:absolute;inset:0;overflow:hidden;pointer-events:none;isolation:isolate}
.c3-material{position:absolute;bottom:0;left:0;right:0;height:130px;overflow:hidden;pointer-events:none}
.c3-material iframe{position:absolute;bottom:0;left:0;width:100%;height:800px;border:0;transform:scaleY(.65);transform-origin:bottom center;pointer-events:none;background:transparent}
.c3-fabric{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.c3-orb{position:absolute;left:50%;top:var(--orb-center-y,calc(100% - 34px - 53px));width:var(--orb-base-size,70px);height:var(--orb-base-size,70px);transform:translate(-50%,-50%) scale(var(--c3-orb-scale,1));background:transparent;pointer-events:none}
.c3-visuals[data-inactive="true"]{visibility:hidden}
.c3-visuals[data-reduced="true"] .c3-orb{transition:none}
@media(prefers-reduced-motion:reduce){.c3-orb{transition:none}}
`;

export function visualPayload({phase='idle',level=0,permissionDenied=false,active=true,reducedMotion=false}={}) {
 const normalized=Number.isFinite(level)?Math.max(0,Math.min(1,level)):0;
 return {kind:'light',phase:['thinking','working'].includes(phase)?'thinking':['speaking','listening'].includes(phase)?phase:'idle',level:['speaking','listening'].includes(phase)?normalized:0,active:active&&phase!=='inactive',reducedMotion,permissionDenied:permissionDenied||phase==='permission-denied',beat:'conversation',instant:reducedMotion};
}

export function mountC3Visuals(container,{reducedMotion=false,onIntroFrame=()=>{}}={}) {
 const host=document.createElement('div');host.className='c3-visuals';host.setAttribute('aria-hidden','true');
 const style=document.createElement('style');style.textContent=STYLE;
 const material=document.createElement('div');material.className='c3-material';
 const frame=document.createElement('iframe');frame.src=new URL('./visuals/aurora.html#light',import.meta.url).href;frame.title='';frame.tabIndex=-1;frame.setAttribute('aria-hidden','true');
 const fabricCanvas=document.createElement('canvas');fabricCanvas.className='c3-fabric';const fabric=mountFabric(fabricCanvas);
 const orb=document.createElement('canvas');orb.className='c3-orb';material.append(frame);host.append(style,material,fabricCanvas,orb);container.append(host);
 const orbRenderer=mountOrb(orb);
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let state={phase:'idle',level:0,active:true,permissionDenied:false},destroyed=false,introStarted=false,introAnimation=0,introStart=0,pose=null,lastRect=null,dockAnimation=null;
 const paint=()=>{
  if(destroyed)return;
  const reduced=reducedMotion||motion.matches;
  const payload=visualPayload({...state,active:state.active&&!document.hidden,reducedMotion:reduced});
  host.dataset.phase=state.permissionDenied?'permission-denied':state.phase;host.dataset.inactive=String(!payload.active);host.dataset.reduced=String(reduced);
  const sizes={'permission-required':114,'permission-denied':83.125,listening:64.4,speaking:77};
  const size=reduced?70:(sizes[host.dataset.phase]||70);
  if(state.intro&&pose){
   orb.style.left=`${pose.x/360*100}%`;orb.style.top=`${pose.y/800*100}%`;orb.style.width=`${pose.size}px`;orb.style.height=`${pose.size}px`;orb.style.opacity=String(pose.opacity);orb.style.transform=`translate(-50%,-50%) scale(${pose.scaleX},${pose.scaleY})`;
  }else{orb.style.left='50%';orb.style.top='var(--orb-center-y,calc(100% - 34px - 53px))';orb.style.width=`${size}px`;orb.style.height=`${size}px`;orb.style.opacity='1';orb.style.transform='translate(-50%,-50%)';}
  orbRenderer.update({phase:host.dataset.phase,level:state.level,size:state.intro?(pose?.size||180):size,appear:state.intro?(pose?.appear??0):1,travel:state.intro?(pose?.travel||0):0,reducedMotion:reduced,active:payload.active});
  if(state.intro)lastRect=orb.getBoundingClientRect();
  try {frame.contentWindow?.updateC1Aurora?.(payload);} catch { /* The static orb remains available if the material fails to load. */ }
 };
 function animateIntro(now){
  if(destroyed||!state.intro)return;
  if(!introStart)introStart=now;
  pose=introFrame((now-introStart)/1000,{reducedMotion:reducedMotion||motion.matches});
  for(const [key,value]of Object.entries({close:pose.close,'first-text':pose.firstText,'rest-text':pose.restText,button:pose.button,'chip-1':pose.chips[0],'chip-2':pose.chips[1],'chip-3':pose.chips[2]}))container.style.setProperty(`--c3-${key}`,String(value));
  fabric.draw(pose);onIntroFrame(pose);paint();introAnimation=pose.landed?0:requestAnimationFrame(animateIntro);
 }
 function dockFrom(rect){
  if(!rect||typeof orb.animate!=='function')return;
  const end=orb.getBoundingClientRect(),scale=end.width/parseFloat(orb.style.width),dx=(rect.x+rect.width/2-end.x-end.width/2)/scale,dy=(rect.y+rect.height/2-end.y-end.height/2)/scale,ratio=rect.width/end.width;
  const reduced=reducedMotion||motion.matches;
  const frames=reduced?[{opacity:0},{opacity:1}]:Array.from({length:21},(_,i)=>{const p=i/20,s=bezierAt(p);return{offset:p,transform:`translate(calc(-50% + ${dx*(1-s)+32*Math.sin(Math.PI*s)}px),calc(-50% + ${dy*(1-s)-28*Math.sin(Math.PI*s)}px)) scale(${ratio+(1-ratio)*s})`};});
  dockAnimation=orb.animate(frames,{duration:reduced?300:700,delay:reduced?0:60,easing:'linear',fill:'none'});
 }
 const onload=()=>paint();frame.addEventListener('load',onload);motion.addEventListener('change',paint);document.addEventListener('visibilitychange',paint);paint();
 return {update(next={}){const wasIntro=state.intro,from=lastRect;state={...state,...next};if(state.intro&&!introStarted){introStarted=true;pose=introFrame(0,{reducedMotion:reducedMotion||motion.matches});introAnimation=requestAnimationFrame(animateIntro);}if(wasIntro&&!state.intro){cancelAnimationFrame(introAnimation);fabric.clear();}paint();if(wasIntro&&!state.intro)dockFrom(from);},destroy(){destroyed=true;fabric.clear();cancelAnimationFrame(introAnimation);dockAnimation?.cancel();orbRenderer.destroy();frame.removeEventListener('load',onload);motion.removeEventListener('change',paint);document.removeEventListener('visibilitychange',paint);frame.src='about:blank';host.remove();}};
}
