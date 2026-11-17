// Recognition uses the browser's service, which may process audio remotely.
export function createSpeechAdapter({scope=globalThis}={}) {
 const Recognition=scope.SpeechRecognition||scope.webkitSpeechRecognition;
 const synth=scope.speechSynthesis,Utterance=scope.SpeechSynthesisUtterance;
 let recognition=null,utterance=null,audio=null,recognitionRevision=0,speechRevision=0,cueRevision=0,destroyed=false,microphoneGranted=false,permissionWatch=null,watchingPermission=false;
 const permissionChanged=()=>{if(permissionWatch?.state!=='granted')microphoneGranted=false;};
 function watchPermission(){
  if(watchingPermission||!scope.navigator?.permissions?.query)return;
  watchingPermission=true;
  // Revoking access in browser controls must invalidate the capture cache.
  // Querying permission never substitutes for the native getUserMedia prompt.
  scope.navigator.permissions.query({name:'microphone'}).then(status=>{if(destroyed)return;permissionWatch=status;status.addEventListener?.('change',permissionChanged);}).catch(()=>{watchingPermission=false;});
 }
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
  start({requestPermission=false,onPermission=()=>{},onStart=()=>{},onTranscript=()=>{},onEnd=()=>{},onError=()=>{}}={}){
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
   const begin=()=>{if(!valid())return false;try{current.start();return true;}catch(error){recognition=null;onError(error.name==='NotAllowedError'?'not-allowed':'recognition-error');return false;}};
   // Explicit permission retries always reach the browser, including after a
   // speech-service error. Conversational turns reuse a successful grant.
   // Release the probe stream before recognition takes over capture.
   const devices=scope.navigator?.mediaDevices;
   if(requestPermission)microphoneGranted=false;
   if(!microphoneGranted&&devices?.getUserMedia){
    watchPermission();
    devices.getUserMedia({audio:true}).then(stream=>{
     stream.getTracks().forEach(track=>track.stop());
     if(!valid())return;microphoneGranted=true;onPermission();begin();
    }).catch(error=>{if(valid()){recognition=null;onError(['NotAllowedError','SecurityError'].includes(error.name)?'not-allowed':error.name==='NotFoundError'?'audio-capture':'recognition-error');}});
    return true;
   }
   return begin();
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
  destroy(){stop();cancelSpeech();cancelCue();destroyed=true;permissionWatch?.removeEventListener?.('change',permissionChanged);}

 };
}
