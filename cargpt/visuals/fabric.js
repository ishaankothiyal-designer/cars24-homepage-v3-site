// Direct Canvas2D port of FabricStreak.swift at the recorded source commit.
export class FabricSimulation{
 constructor(){this.reset();}
 reset(){this.positions=[];this.velocities=[];this.lastTime=null;this.generation=-1;this.releaseTop=null;this.released=Array(12).fill(false);}
 nodes(frame,aspect,bottomY){const bottom={x:180,y:bottomY},top={x:frame.x,y:Math.min(bottomY-.5,frame.y+.30*frame.size*aspect)};
  if(!this.positions.length||(this.generation!==frame.generation&&!frame.exiting)){this.positions=Array.from({length:12},(_,i)=>({x:top.x+(bottom.x-top.x)*i/11,y:top.y+(bottom.y-top.y)*i/11}));this.velocities=Array.from({length:12},()=>({x:0,y:0}));this.releaseTop=null;this.released=Array(12).fill(false);this.lastTime=frame.elapsed;}
  if(this.generation!==frame.generation){this.lastTime=frame.elapsed;this.generation=frame.generation;}
  const dt=Math.min(1/30,Math.max(0,frame.elapsed-(this.lastTime??frame.elapsed)));this.lastTime=frame.elapsed;
  if(frame.releaseAge!=null&&!this.releaseTop)this.releaseTop={...this.positions[0]};const attachment=this.releaseTop||top;
  for(let i=0;i<12;i++){const t=i/11,released=this.released[i]||(frame.releaseAge!=null&&frame.releaseAge>=i*.015);this.released[i]=released;
   if(i===11){this.positions[i]={...bottom};this.velocities[i]={x:0,y:0};continue;}
   if(i===0&&!released){this.positions[i]={...top};this.velocities[i]={...frame.velocity};continue;}
   const ripple=Math.sin(frame.elapsed*8+i*.9)*5*frame.travel*(1-t),target=released?bottom:{x:attachment.x+(bottom.x-attachment.x)*t+ripple,y:attachment.y+(bottom.y-attachment.y)*t};
   const omega=2*Math.PI/(frame.exiting?.30:.45),stiffness=released?omega*omega:180,damping=released?2*.78*omega:24;
   for(const key of ['x','y']){this.velocities[i][key]+=((target[key]-this.positions[i][key])*stiffness-this.velocities[i][key]*damping)*dt;this.positions[i][key]+=this.velocities[i][key]*dt;}
  }return this.positions;
 }
}
function ribbon(context,points,widths){const left=points.map((p,i)=>({x:p.x-widths[i]/2,y:p.y})),right=points.map((p,i)=>({x:p.x+widths[i]/2,y:p.y})).reverse();
 const smooth=ps=>{for(let i=0;i<ps.length-1;i++){const p0=ps[Math.max(0,i-1)],p1=ps[i],p2=ps[i+1],p3=ps[Math.min(ps.length-1,i+2)];context.bezierCurveTo(p1.x+(p2.x-p0.x)/6,p1.y+(p2.y-p0.y)/6,p2.x-(p3.x-p1.x)/6,p2.y-(p3.y-p1.y)/6,p2.x,p2.y);}};
 context.beginPath();context.moveTo(left[0].x,left[0].y);smooth(left);context.lineTo(right[0].x,right[0].y);smooth(right);context.closePath();
}
export function mountFabric(canvas){const context=canvas.getContext('2d'),simulation=new FabricSimulation();return{draw(frame){if(!context)return;const width=canvas.clientWidth||360,height=canvas.clientHeight||800,dpr=Math.min(2,globalThis.devicePixelRatio||1);if(canvas.width!==Math.round(width*dpr)||canvas.height!==Math.round(height*dpr)){canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);}context.setTransform(dpr,0,0,dpr,0,0);context.clearRect(0,0,width,height);if(frame.reducedMotion||frame.fabricOpacity<=.001)return;
 const sx=width/360,sy=height/800,bottom=800+24/sy,points=simulation.nodes(frame,sx/sy,bottom),rest=(bottom-599-.30*96*sx/sy)/11,widths=[],thinning=[];let stretchSum=0;
 for(let i=0;i<12;i++){const a=i===11?10:i,b=i===11?11:i+1,stretch=Math.max(1,Math.hypot(points[b].x-points[a].x,points[b].y-points[a].y)/rest),t=i/11,narrowing=Math.max(.55,Math.min(1,1/Math.sqrt(stretch)));widths.push((.55*frame.size+(1.15*360-.55*frame.size)*Math.pow(t,.7))*(i===11?1:narrowing));thinning.push(Math.max(.45,Math.min(1,1/stretch)));stretchSum+=stretch-1;}
 const mapped=points.map(p=>({x:p.x*sx,y:p.y*sy})),topY=Math.min(...mapped.map(p=>p.y)),bottomY=Math.max(topY+1,height+24*sy),gradient=context.createLinearGradient(width/2,topY,width/2,bottomY);
 for(let i=0;i<12;i++){const t=i/11;gradient.addColorStop(t,`rgba(${184+(112-184)*t},${140+(199-140)*t},255,${.75*(1-t)*thinning[i]*frame.fabricOpacity})`);}
 context.save();context.filter=`blur(${30*sx}px)`;context.fillStyle=gradient;ribbon(context,mapped,widths.map(w=>w*sx));context.fill();context.restore();
 const sheen=context.createLinearGradient(width/2,topY,width/2,bottomY);sheen.addColorStop(0,'white');sheen.addColorStop(1,'rgba(255,255,255,0)');context.save();context.filter=`blur(${10*sx}px)`;context.globalAlpha=.35*Math.min(1,stretchSum/22)*frame.fabricOpacity;context.fillStyle=sheen;ribbon(context,mapped,widths.map(w=>w*sx*.30));context.fill();context.restore();
 },clear(){context?.clearRect(0,0,canvas.width,canvas.height);simulation.reset();}};}
