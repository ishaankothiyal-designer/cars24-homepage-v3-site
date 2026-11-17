// IntroMotion.swift and IntroClock.swift use one master clock for these values.
const unit=x=>Math.max(0,Math.min(1,x));
export function bezierAt(x,x1=.34,y1=0,x2=.07,y2=1){
 const v=(t,a,b)=>3*(1-t)*(1-t)*t*a+3*(1-t)*t*t*b+t*t*t;
 let lo=0,hi=1;for(let i=0;i<32;i++){const t=(lo+hi)/2;if(v(t,x1,x2)<unit(x))lo=t;else hi=t;}
 return v((lo+hi)/2,y1,y2);
}
const progress=(t,start,duration)=>bezierAt(unit((t-start)/duration));
const fade=(t,start,duration)=>bezierAt(unit((t-start)/duration),.2,.8,.2,1);
const derivative=x=>{const h=.0001;return(bezierAt(Math.min(1,x+h))-bezierAt(Math.max(0,x-h)))/(Math.min(1,x+h)-Math.max(0,x-h));};
const peak=Math.max(...Array.from({length:99},(_,i)=>derivative((i+1)/100)));
export function introFrame(time,{reducedMotion=false}={}){
 const t=Math.max(0,time),textStart=.08+.9*.6222222222,buttonStart=textStart+5*.06,landedTime=Math.max(.08+.04+.9,buttonStart+.42);
 if(reducedMotion){const opacity=fade(t,0,.3);return{x:180,y:286,size:180,opacity,appear:1,travel:0,scaleX:1,scaleY:1,close:opacity,firstText:opacity,restText:opacity,chips:[opacity,opacity,opacity],button:opacity,canStart:t>=.3,landed:t>=.3,elapsed:t,generation:1,velocity:{x:0,y:0},fabricOpacity:0,releaseAge:null,reducedMotion:true};}
 const positionTime=unit((t-.08)/.9),velocity=positionTime>0&&positionTime<1?Math.min(derivative(positionTime),peak*1.25):0,speed=unit(velocity/peak);
 return{x:180,y:860-574*bezierAt(positionTime),size:58+122*progress(t,.12,.9),opacity:fade(t,.08,.16),appear:progress(t,.34,.66),travel:speed,scaleX:1-.04*.75*speed,scaleY:1+.04*speed,close:progress(t,Math.max(0,textStart-.04),.42),firstText:progress(t,textStart,.42),restText:progress(t,textStart+.06,.42),chips:[0,1,2].map(i=>progress(t,textStart+(i+2)*.06,.42)),button:progress(t,buttonStart,.42),canStart:t>=buttonStart,landed:t>=landedTime,elapsed:t,generation:1,velocity:{x:0,y:-574*velocity/.9},fabricOpacity:fade(t,.08,.16)*(1-fade(t,.62,.38)),releaseAge:t>=.62?t-.62:null,reducedMotion:false};
}
