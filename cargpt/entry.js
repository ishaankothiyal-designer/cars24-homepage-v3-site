// Colour followed by paper: two prepainted discs, only transform/opacity animate.
// The short staged reveal explains the transition from the tapped CarGPT entry.
let active=null;
export function revealCarGPT({trigger,enter}) {
 if(active)return;
 const screen=document.querySelector('.screen');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(!screen||!trigger||reduced||typeof screen.animate!=='function'){enter();return;}
 const bounds=screen.getBoundingClientRect(),rect=trigger.getBoundingClientRect();
 const width=screen.clientWidth,height=screen.clientHeight;
 const x=(rect.left+rect.width/2-bounds.left)*width/bounds.width;
 const y=(rect.top+rect.height/2-bounds.top)*height/bounds.height;
 const radius=Math.hypot(Math.max(x,width-x),Math.max(y,height-y));
 const size=radius*2+8,ratio=Math.max(32,rect.width*width/bounds.width)/size;
 const layer=document.createElement('div');layer.className='cargpt-entry-wave';layer.setAttribute('aria-hidden','true');
 layer.innerHTML='<i class="cargpt-colour-wave"></i><i class="cargpt-paper-wave"></i>';
 for(const disc of layer.children)Object.assign(disc.style,{left:`${x-size/2}px`,top:`${y-size/2}px`,width:`${size}px`,height:`${size}px`});
 screen.append(layer);
 const colour=layer.firstElementChild,paper=layer.lastElementChild;
 const curve='cubic-bezier(0.23, 1, 0.32, 1)';
 const animations=[colour.animate([{transform:`scale(${ratio})`,opacity:1},{transform:'scale(1)',opacity:1}],{duration:500,easing:curve,fill:'both'}),paper.animate([{transform:`scale(${ratio})`,opacity:1},{transform:'scale(1)',opacity:1}],{duration:500,delay:100,easing:curve,fill:'both'})];
 let entered=false;
 const timer=setTimeout(()=>{entered=true;enter();layer.style.pointerEvents='none';document.querySelector('.cargpt-view')?.classList.add('cargpt-arriving');},300);
 const cleanup=()=>{clearTimeout(timer);document.removeEventListener('keydown',onKey,true);animations.forEach(a=>a.cancel());layer.remove();active=null;};
 const onKey=event=>{if(event.key==='Escape'){if(entered){cleanup();return;}event.preventDefault();event.stopImmediatePropagation();cleanup();}};
 active=cleanup;document.addEventListener('keydown',onKey,true);
 Promise.all(animations.map(a=>a.finished)).then(cleanup,cleanup);
}
export function leaveCarGPT(view,close,{instant=false}={}) {
 if(instant||!view||matchMedia('(prefers-reduced-motion: reduce)').matches||typeof view.animate!=='function'){close();return;}
 if(view.dataset.leaving)return;view.dataset.leaving='true';
 view.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(16px)'}],{duration:160,easing:'cubic-bezier(0.23, 1, 0.32, 1)',fill:'forwards'}).finished.then(close,close);
}
