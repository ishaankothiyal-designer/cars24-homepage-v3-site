// Recognition uses the browser's service, which may process audio remotely.
export function createSpeechAdapter({scope=globalThis}={}) {
 const Recognition=scope.SpeechRecognition||scope.webkitSpeechRecognition;
 const synth=scope.speechSynthesis,Utterance=scope.SpeechSynthesisUtterance;
 let recognition=null,utterance=null,audio=null,recognitionRevision=0,speechRevision=0,cueRevision=0,destroyed=false;
 function stop(){
  recognitionRevision++;
  if(!recognition)return;
  const current=recognition;recognition=null;
  current.onstart=current.onresult=current.onerror=current.onend=null;
  try{current.abort();}catch{}
 }
 function cancelSpeech(){
  speechRevision++;
  if(utterance){utterance.onstart=utterance.onend=utterance.onerror=utterance.onboundary=null;utterance=null;synth?.cancel();}
 }
 function cancelCue(){
  cueRevision++;
  if(!audio)return;
  const current=audio;audio=null;current.onended=current.onerror=null;
  try{current.pause();current.currentTime=0;}catch{}
 }
 return {
  supported:Boolean(Recognition),ttsSupported:Boolean(synth&&Utterance),
  start({onStart=()=>{},onTranscript=()=>{},onEnd=()=>{},onError=()=>{}}={}){
   stop();cancelSpeech();cancelCue();
   if(destroyed)return false;
   if(!Recognition){onError('unsupported');return false;}
   const revision=recognitionRevision;
   let current;
   try{current=new Recognition();}catch{onError('unsupported');return false;}
   recognition=current;current.lang='en-IN';current.continuous=false;current.interimResults=true;current.maxAlternatives=1;
   const valid=()=>!destroyed&&recognitionRevision===revision&&recognition===current;
   current.onstart=()=>{if(valid())onStart();};
   current.onresult=event=>{
    if(!valid())return;
    const results=Array.from(event.results||[]),text=results.map(r=>r[0]?.transcript||'').join(' ').trim();
    if(text)onTranscript({text,final:results.length>0&&results.every(r=>r.isFinal)});
   };
   current.onerror=event=>{if(valid())onError(event.error||'recognition-error');};
   current.onend=()=>{if(!valid())return;recognition=null;onEnd();};
   try{current.start();return true;}catch(error){recognition=null;onError(error.name==='NotAllowedError'?'not-allowed':'recognition-error');return false;}
  },
  stop,
  speak(text,{onStart=()=>{},onBoundary=()=>{},onEnd=()=>{},onError=()=>{}}={}){
   cancelSpeech();
   if(destroyed)return false;
   if(!synth||!Utterance){onError('unsupported');return false;}
   const revision=speechRevision,current=new Utterance(String(text));utterance=current;current.lang='en-IN';current.rate=1;
   const voice=synth.getVoices?.().find(v=>v.lang==='en-IN');if(voice)current.voice=voice;
   const valid=()=>!destroyed&&revision===speechRevision&&utterance===current;
   current.onstart=()=>{if(valid())onStart();};
   current.onboundary=event=>{if(valid())onBoundary({charIndex:Math.max(0,Number(event.charIndex)||0),charLength:Math.max(0,Number(event.charLength)||0),name:event.name||'word'});};
   current.onend=()=>{if(!valid())return;utterance=null;onEnd();};
   current.onerror=event=>{if(!valid())return;utterance=null;onError(event.error||'synthesis-error');};
   try{synth.speak(current);return true;}catch{utterance=null;onError('synthesis-error');return false;}
  },
  cancelSpeech,
  playCue(url,{onEnd=()=>{},onError=()=>{}}={}){
   cancelCue();
   if(destroyed)return false;
   if(!scope.Audio){onError('unsupported');return false;}
   const revision=cueRevision;let current;
   try{current=new scope.Audio(url);}catch{onError('unavailable');return false;}
   audio=current;current.preload='auto';
   const valid=()=>!destroyed&&revision===cueRevision&&audio===current;
   current.onended=()=>{if(!valid())return;audio=null;current.onended=current.onerror=null;onEnd();};
   const fail=()=>{if(!valid())return;audio=null;current.onended=current.onerror=null;onError('unavailable');};
   current.onerror=fail;
   try{const result=current.play();result?.catch?.(fail);return true;}catch{fail();return false;}
  },
  cancelCue,
  destroy(){stop();cancelSpeech();cancelCue();destroyed=true;}

 };
}
