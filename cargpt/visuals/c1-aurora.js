(()=>{var BT=Object.create;var e_=Object.defineProperty;var zT=Object.getOwnPropertyDescriptor;var FT=Object.getOwnPropertyNames;var HT=Object.getPrototypeOf,VT=Object.prototype.hasOwnProperty;var ra=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var GT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of FT(t))!VT.call(e,a)&&a!==n&&e_(e,a,{get:()=>t[a],enumerable:!(i=zT(t,a))||i.enumerable});return e};var hn=(e,t,n)=>(n=e!=null?BT(HT(e)):{},GT(t||!e||!e.__esModule?e_(n,"default",{value:e,enumerable:!0}):n,e));var p_=ra(Ft=>{"use strict";var gp=Symbol.for("react.transitional.element"),kT=Symbol.for("react.portal"),XT=Symbol.for("react.fragment"),WT=Symbol.for("react.strict_mode"),qT=Symbol.for("react.profiler"),YT=Symbol.for("react.consumer"),ZT=Symbol.for("react.context"),JT=Symbol.for("react.forward_ref"),$T=Symbol.for("react.suspense"),KT=Symbol.for("react.memo"),r_=Symbol.for("react.lazy"),QT=Symbol.for("react.activity"),jT=Symbol.for("react.view_transition"),n_=Symbol.iterator;function tE(e){return e===null||typeof e!="object"?null:(e=n_&&e[n_]||e["@@iterator"],typeof e=="function"?e:null)}var o_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l_=Object.assign,c_={};function kr(e,t,n){this.props=e,this.context=t,this.refs=c_,this.updater=n||o_}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function u_(){}u_.prototype=kr.prototype;function vp(e,t,n){this.props=e,this.context=t,this.refs=c_,this.updater=n||o_}var _p=vp.prototype=new u_;_p.constructor=vp;l_(_p,kr.prototype);_p.isPureReactComponent=!0;var i_=Array.isArray;function mp(){}var Ue={H:null,A:null,T:null,S:null},h_=Object.prototype.hasOwnProperty;function yp(e,t,n){var i=n.ref;return{$$typeof:gp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function eE(e,t){return yp(e.type,t,e.props)}function xp(e){return typeof e=="object"&&e!==null&&e.$$typeof===gp}function nE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var a_=/\/+/g;function pp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nE(""+e.key):t.toString(36)}function iE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(mp,mp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Gr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case gp:case kT:r=!0;break;case r_:return r=e._init,Gr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+pp(e,0):i,i_(a)?(n="",r!=null&&(n=r.replace(a_,"$&/")+"/"),Gr(a,t,n,"",function(c){return c})):a!=null&&(xp(a)&&(a=eE(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(a_,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(i_(e))for(var l=0;l<e.length;l++)i=e[l],s=o+pp(i,l),r+=Gr(i,t,n,s,a);else if(l=tE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+pp(i,l++),r+=Gr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Gr(iE(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Mu(e,t,n){if(e==null)return e;var i=[],a=0;return Gr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function aE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var s_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function f_(e){var t=Ue.T,n={};n.types=t!==null?t.types:null,Ue.T=n;try{var i=e(),a=Ue.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(mp,s_)}catch(s){s_(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ue.T=t}}function d_(e){var t=Ue.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else f_(d_.bind(null,e))}var sE={map:Mu,forEach:function(e,t,n){Mu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mu(e,function(){t++}),t},toArray:function(e){return Mu(e,function(t){return t})||[]},only:function(e){if(!xp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Activity=QT;Ft.Children=sE;Ft.Component=kr;Ft.Fragment=XT;Ft.Profiler=qT;Ft.PureComponent=vp;Ft.StrictMode=WT;Ft.Suspense=$T;Ft.ViewTransition=jT;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ue.H.useMemoCache(e)}};Ft.addTransitionType=d_;Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cacheSignal=function(){return null};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=l_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!h_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return yp(e.type,a,i)};Ft.createContext=function(e){return e={$$typeof:ZT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:YT,_context:e},e};Ft.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)h_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return yp(e,s,a)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:JT,render:e}};Ft.isValidElement=xp;Ft.lazy=function(e){return{$$typeof:r_,_payload:{_status:-1,_result:e},_init:aE}};Ft.memo=function(e,t){return{$$typeof:KT,type:e,compare:t===void 0?null:t}};Ft.startTransition=f_;Ft.unstable_useCacheRefresh=function(){return Ue.H.useCacheRefresh()};Ft.use=function(e){return Ue.H.use(e)};Ft.useActionState=function(e,t,n){return Ue.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return Ue.H.useCallback(e,t)};Ft.useContext=function(e){return Ue.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return Ue.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t){return Ue.H.useEffect(e,t)};Ft.useEffectEvent=function(e){return Ue.H.useEffectEvent(e)};Ft.useId=function(){return Ue.H.useId()};Ft.useImperativeHandle=function(e,t,n){return Ue.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return Ue.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return Ue.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return Ue.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return Ue.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return Ue.H.useReducer(e,t,n)};Ft.useRef=function(e){return Ue.H.useRef(e)};Ft.useState=function(e){return Ue.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return Ue.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return Ue.H.useTransition()};Ft.version="19.3.1"});var Da=ra((lL,m_)=>{"use strict";m_.exports=p_()});var E_=ra(Be=>{"use strict";function Tp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<Tu(a,t))e[i]=t,e[n]=a,n=i;else break t}}function oa(e){return e.length===0?null:e[0]}function Au(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Tu(o,n))l<a&&0>Tu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>Tu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Tu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Be.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(g_=performance,Be.unstable_now=function(){return g_.now()}):(bp=Date,v_=bp.now(),Be.unstable_now=function(){return bp.now()-v_});var g_,bp,v_,Ua=[],ns=[],rE=1,Mi=null,Cn=3,Ep=!1,El=!1,Al=!1,Ap=!1,x_=typeof setTimeout=="function"?setTimeout:null,b_=typeof clearTimeout=="function"?clearTimeout:null,__=typeof setImmediate<"u"?setImmediate:null;function Eu(e){for(var t=oa(ns);t!==null;){if(t.callback===null)Au(ns);else if(t.startTime<=e)Au(ns),t.sortIndex=t.expirationTime,Tp(Ua,t);else break;t=oa(ns)}}function wp(e){if(Al=!1,Eu(e),!El)if(oa(Ua)!==null)El=!0,Wr||(Wr=!0,Xr());else{var t=oa(ns);t!==null&&Cp(wp,t.startTime-e)}}var Wr=!1,wl=-1,S_=5,M_=-1;function T_(){return Ap?!0:!(Be.unstable_now()-M_<S_)}function Sp(){if(Ap=!1,Wr){var e=Be.unstable_now();M_=e;var t=!0;try{t:{El=!1,Al&&(Al=!1,b_(wl),wl=-1),Ep=!0;var n=Cn;try{e:{for(Eu(e),Mi=oa(Ua);Mi!==null&&!(Mi.expirationTime>e&&T_());){var i=Mi.callback;if(typeof i=="function"){Mi.callback=null,Cn=Mi.priorityLevel;var a=i(Mi.expirationTime<=e);if(e=Be.unstable_now(),typeof a=="function"){Mi.callback=a,Eu(e),t=!0;break e}Mi===oa(Ua)&&Au(Ua),Eu(e)}else Au(Ua);Mi=oa(Ua)}if(Mi!==null)t=!0;else{var s=oa(ns);s!==null&&Cp(wp,s.startTime-e),t=!1}}break t}finally{Mi=null,Cn=n,Ep=!1}t=void 0}}finally{t?Xr():Wr=!1}}}var Xr;typeof __=="function"?Xr=function(){__(Sp)}:typeof MessageChannel<"u"?(Mp=new MessageChannel,y_=Mp.port2,Mp.port1.onmessage=Sp,Xr=function(){y_.postMessage(null)}):Xr=function(){x_(Sp,0)};var Mp,y_;function Cp(e,t){wl=x_(function(){e(Be.unstable_now())},t)}Be.unstable_IdlePriority=5;Be.unstable_ImmediatePriority=1;Be.unstable_LowPriority=4;Be.unstable_NormalPriority=3;Be.unstable_Profiling=null;Be.unstable_UserBlockingPriority=2;Be.unstable_cancelCallback=function(e){e.callback=null};Be.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S_=0<e?Math.floor(1e3/e):5};Be.unstable_getCurrentPriorityLevel=function(){return Cn};Be.unstable_next=function(e){switch(Cn){case 1:case 2:case 3:var t=3;break;default:t=Cn}var n=Cn;Cn=t;try{return e()}finally{Cn=n}};Be.unstable_requestPaint=function(){Ap=!0};Be.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Cn;Cn=e;try{return t()}finally{Cn=n}};Be.unstable_scheduleCallback=function(e,t,n){var i=Be.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:rE++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,Tp(ns,e),oa(Ua)===null&&e===oa(ns)&&(Al?(b_(wl),wl=-1):Al=!0,Cp(wp,n-i))):(e.sortIndex=a,Tp(Ua,e),El||Ep||(El=!0,Wr||(Wr=!0,Xr()))),e};Be.unstable_shouldYield=T_;Be.unstable_wrapCallback=function(e){var t=Cn;return function(){var n=Cn;Cn=t;try{return e.apply(this,arguments)}finally{Cn=n}}}});var w_=ra((uL,A_)=>{"use strict";A_.exports=E_()});var N_=ra(Rn=>{"use strict";var oE=Da();function R_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function is(){}var On={d:{f:is,r:function(){throw Error(R_(522))},D:is,C:is,L:is,m:is,X:is,S:is,M:is},p:0,findDOMNode:null},lE=Symbol.for("react.portal"),cE=Symbol.for("react.recoverable"),C_=Symbol.for("react.optimistic_key");function uE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lE,key:i==null?null:i===C_?C_:""+i,children:e,containerInfo:t,implementation:n}}var Cl=oE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=On;Rn.browser=function(e){return{$$typeof:cE,_reason:e}};Rn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(R_(299));return uE(e,t,null,n)};Rn.flushSync=function(e){var t=Cl.T,n=On.p;try{if(Cl.T=null,On.p=2,e)return e()}finally{Cl.T=t,On.p=n,On.d.f()}};Rn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,On.d.C(e,t))};Rn.prefetchDNS=function(e){typeof e=="string"&&On.d.D(e)};Rn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?On.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&On.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Rn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=wu(t.as,t.crossOrigin);On.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&On.d.M(e)};Rn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin);On.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Rn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=wu(t.as,t.crossOrigin);On.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else On.d.m(e)};Rn.requestFormReset=function(e){On.d.r(e)};Rn.unstable_batchedUpdates=function(e,t){return e(t)};Rn.useFormState=function(e,t,n){return Cl.H.useFormState(e,t,n)};Rn.useFormStatus=function(){return Cl.H.useHostTransitionStatus()};Rn.version="19.3.1"});var L_=ra((fL,U_)=>{"use strict";function D_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D_)}catch(e){console.error(e)}}D_(),U_.exports=N_()});var y1=ra(cf=>{"use strict";var ln=w_(),_x=Da(),hE=L_();function nt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function yx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function xx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O_(e){if(mc(e)!==e)throw Error(nt(188))}function fE(e){var t=e.alternate;if(!t){if(t=mc(e),t===null)throw Error(nt(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return O_(a),e;if(s===i)return O_(a),t;s=s.sibling}throw Error(nt(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(nt(189))}}if(n.alternate!==i)throw Error(nt(190))}if(n.tag!==3)throw Error(nt(188));return n.stateNode.current===n?e:t}function Sx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Sx(e),t!==null)return t;e=e.sibling}return null}function Zn(e,t,n,i,a,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Zn(e.child,t,n,i,a,s))return!0;e=e.sibling}return!1}function Sr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function I_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Mx(e){var t=[null,null],n=Sr(e);return n===null||Tx(t,e,n.child,{foundSelf:!1}),t}function Tx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Tx(e,t,n.child,i))return!0;n=n.sibling}return!1}function on(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(nt(559))}}var Qr=null,rm=null;function dE(e,t,n){return e===n?!0:e===t?(Qr=e,!0):!1}function pE(e,t,n){return e===n?(rm=e,!1):e===t?(rm!==null&&(Qr=e),!0):!1}function P_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function om(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var s=t;s;s=n(s))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Re=Object.assign,mE=Symbol.for("react.element"),Cu=Symbol.for("react.transitional.element"),Il=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Ex=Symbol.for("react.strict_mode"),lm=Symbol.for("react.profiler"),Ax=Symbol.for("react.consumer"),da=Symbol.for("react.context"),v0=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),um=Symbol.for("react.suspense_list"),_0=Symbol.for("react.memo"),os=Symbol.for("react.lazy"),hm=Symbol.for("react.activity"),gE=Symbol.for("react.legacy_hidden"),vE=Symbol.for("react.memo_cache_sentinel"),fm=Symbol.for("react.view_transition"),_E=Symbol.for("react.recoverable"),B_=Symbol.iterator;function Rl(e){return e===null||typeof e!="object"?null:(e=B_&&e[B_]||e["@@iterator"],typeof e=="function"?e:null)}var yE=Symbol.for("react.client.reference");function dm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jr:return"Fragment";case lm:return"Profiler";case Ex:return"StrictMode";case cm:return"Suspense";case um:return"SuspenseList";case hm:return"Activity";case fm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Il:return"Portal";case da:return e.displayName||"Context";case Ax:return(e._context.displayName||"Context")+".Consumer";case v0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _0:return t=e.displayName||null,t!==null?t:dm(e.type)||"Memo";case os:t=e._payload,e=e._init;try{return dm(e(t))}catch{}}return null}var Pl=Array.isArray,It=_x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=hE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cr={pending:!1,data:null,method:null,action:null},pm=[],to=-1;function xa(e){return{current:e}}function Mn(e){0>to||(e.current=pm[to],pm[to]=null,to--)}function Ie(e,t){to++,pm[to]=e.current,e.current=t}var va=xa(null),jl=xa(null),gs=xa(null),ph=xa(null);function mh(e,t){switch(Ie(gs,t),Ie(jl,e),Ie(va,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ky(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ky(t),e=ZS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Mn(va),Ie(va,e)}function bo(){Mn(va),Mn(jl),Mn(gs)}function mm(e){var t=e.memoizedState;t!==null&&(Do._currentValue=t.memoizedState,Ie(ph,e)),t=va.current;var n=ZS(t,e.type);t!==n&&(Ie(jl,e),Ie(va,n))}function gh(e){jl.current===e&&(Mn(va),Mn(jl)),ph.current===e&&(Mn(ph),Do._currentValue=cr)}var Rp,z_;function ss(e){if(Rp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rp=t&&t[1]||"",z_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rp+e+z_}var Np=!1;function Dp(e,t){if(!e||Np)return"";Np=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{Np=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ss(n):""}function xE(e,t){switch(e.tag){case 26:case 27:case 5:return ss(e.type);case 16:return ss("Lazy");case 13:return e.child!==t&&t!==null?ss("Suspense Fallback"):ss("Suspense");case 19:return ss("SuspenseList");case 0:case 15:return Dp(e.type,!1);case 11:return Dp(e.type.render,!1);case 1:return Dp(e.type,!0);case 31:return ss("Activity");case 30:return ss("ViewTransition");default:return""}}function F_(e){try{var t="",n=null;do t+=xE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var gm=Object.prototype.hasOwnProperty,y0=ln.unstable_scheduleCallback,Up=ln.unstable_cancelCallback,bE=ln.unstable_shouldYield,SE=ln.unstable_requestPaint,ci=ln.unstable_now,ME=ln.unstable_getCurrentPriorityLevel,wx=ln.unstable_ImmediatePriority,Cx=ln.unstable_UserBlockingPriority,vh=ln.unstable_NormalPriority,TE=ln.unstable_LowPriority,Rx=ln.unstable_IdlePriority,EE=ln.log,AE=ln.unstable_setDisableYieldValue,gc=null,ui=null;function us(e){if(typeof EE=="function"&&AE(e),ui&&typeof ui.setStrictMode=="function")try{ui.setStrictMode(gc,e)}catch{}}var hi=Math.clz32?Math.clz32:RE,wE=Math.log,CE=Math.LN2;function RE(e){return e>>>=0,e===0?32:31-(wE(e)/CE|0)|0}var Ru=256,Nu=262144,Du=4194304;function ar(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ar(i):(r&=o,r!==0?a=ar(r):n||(n=o&~e,n!==0&&(a=ar(n))))):(o=i&~s,o!==0?a=ar(o):r!==0?a=ar(r):n||(n=i&~e,n!==0&&(a=ar(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function vc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Nx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-hi(n),a=1<<i;t|=e[i],n&=~a}return t}function NE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dx(){var e=Du;return Du<<=1,(Du&62914560)===0&&(Du=4194304),e}function Lp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _c(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function DE(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-hi(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Ux(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function Ux(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-hi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Lx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-hi(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Ox(e,t){var n=t&-t;return n=(n&42)!==0?1:x0(n),(n&(e.suspendedLanes|t))!==0?0:n}function x0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function b0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ix(){var e=he.p;return e!==0?e:(e=window.event,e===void 0?32:g1(e.type))}function H_(e,t){var n=he.p;try{return he.p=e,t()}finally{he.p=n}}var Wa=Math.random().toString(36).slice(2),bn="__reactFiber$"+Wa,Jn="__reactProps$"+Wa,Oo="__reactContainer$"+Wa,V_="__reactEvents$"+Wa,UE="__reactListeners$"+Wa,LE="__reactHandles$"+Wa,G_="__reactResources$"+Wa,yc="__reactMarker$"+Wa,_h="__reactLoad$"+Wa;function Xh(e){delete e[bn],delete e[Jn],delete e[UE],delete e[LE]}function or(e){var t;if(t=e[bn])return t;for(var n=e.parentNode;n;){if(t=n[Oo]||n[bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sx(e);e!==null;){if(n=e[bn])return n;e=sx(e)}return t}e=n,n=e.parentNode}return null}function Io(e){if(e=e[bn]||e[Oo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(nt(33))}function uo(e){var t=e[G_];return t||(t=e[G_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pn(e){e[yc]=!0}function Px(e){e[_h]=void 0}var Bx=new Set,zx={};function Mr(e,t){So(e,t),So(e+"Capture",t)}function So(e,t){for(zx[e]=t,e=0;e<t.length;e++)Bx.add(t[e])}var OE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),k_={},X_={};function IE(e){return gm.call(X_,e)?!0:gm.call(k_,e)?!1:OE.test(e)?X_[e]=!0:(k_[e]=!0,!1)}var le=!1;function W_(){var e=le;return le=!1,e}function Ju(e,t,n){if(IE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Uu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function La(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function si(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function PE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vm(e){if(!e._valueTracker){var t=Fx(e)?"checked":"value";e._valueTracker=PE(e,t,""+e[t])}}function Hx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Fx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var BE=/[\n"\\]/g;function Ci(e){return e.replace(BE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _m(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+si(t)):e.value!==""+si(t)&&(e.value=""+si(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Op(e,si(e.value)):Op(e,si(t)):n!=null?Op(e,si(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+si(o):e.removeAttribute("name")}function Vx(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){vm(e);return}n=n!=null?""+si(n):"",t=t!=null?""+si(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),vm(e)}function Op(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ho(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+si(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Gx(e,t,n){if(t!=null&&(t=""+si(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+si(n):""}function kx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(nt(92));if(Pl(i)){if(1<i.length)throw Error(nt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=si(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),vm(e)}function Mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function q_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||zE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Xx(e,t,n){if(t!=null&&typeof t!="object")throw Error(nt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",le=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(q_(e,a,i),le=!0)}else for(var s in t)t.hasOwnProperty(s)&&q_(e,s,t[s])}function S0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var FE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),HE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $u(e){return HE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var ym=null;function M0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var eo=null,fo=null;function Y_(e){var t=Io(e);if(t&&(e=t.stateNode)){var n=e[Jn]||null;t:switch(e=t.stateNode,t.type){case"input":if(_m(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ci(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Jn]||null;if(!a)throw Error(nt(90));_m(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Hx(i)}break t;case"textarea":Gx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&ho(e,!!n.multiple,t,!1)}}}var Ip=!1;function Wx(e,t,n){if(Ip)return e(t,n);Ip=!0;try{var i=e(t);return i}finally{if(Ip=!1,(eo!==null||fo!==null)&&(sf(),eo&&(t=eo,e=fo,fo=eo=null,Y_(t),e)))for(t=0;t<e.length;t++)Y_(e[t])}}function tc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Jn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(nt(231,t,typeof n));return n}var Fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xm=!1;if(Fa)try{qr={},Object.defineProperty(qr,"passive",{get:function(){xm=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{xm=!1}var qr,hs=null,T0=null,Ku=null;function qx(){if(Ku)return Ku;var e,t=T0,n=t.length,i,a="value"in hs?hs.value:hs.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Ku=a.slice(e,1<i?1-i:void 0)}function Qu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lu(){return!0}function Z_(){return!1}function zn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lu:Z_,this.isPropagationStopped=Z_,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lu)},persist:function(){},isPersistent:Lu}),t}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=zn(Ds),xc=Re({},Ds,{view:0,detail:0}),VE=zn(xc),Pp,Bp,Nl,qh=Re({},xc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:E0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nl&&(Nl&&e.type==="mousemove"?(Pp=e.screenX-Nl.screenX,Bp=e.screenY-Nl.screenY):Bp=Pp=0,Nl=e),Pp)},movementY:function(e){return"movementY"in e?e.movementY:Bp}}),J_=zn(qh),GE=Re({},qh,{dataTransfer:0}),kE=zn(GE),XE=Re({},xc,{relatedTarget:0}),zp=zn(XE),WE=Re({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),qE=zn(WE),YE=Re({},Ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ZE=zn(YE),JE=Re({},Ds,{data:0}),$_=zn(JE),$E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=QE[e])?!!t[e]:!1}function E0(){return jE}var tA=Re({},xc,{key:function(e){if(e.key){var t=$E[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?KE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:E0,charCode:function(e){return e.type==="keypress"?Qu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eA=zn(tA),nA=Re({},qh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K_=zn(nA),iA=Re({},Ds,{submitter:0}),aA=zn(iA),sA=Re({},xc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:E0}),rA=zn(sA),oA=Re({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),lA=zn(oA),cA=Re({},qh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uA=zn(cA),hA=Re({},Ds,{newState:0,oldState:0,source:0}),fA=zn(hA),dA=[9,13,27,32],A0=Fa&&"CompositionEvent"in window,Hl=null;Fa&&"documentMode"in document&&(Hl=document.documentMode);var pA=Fa&&"TextEvent"in window&&!Hl,Yx=Fa&&(!A0||Hl&&8<Hl&&11>=Hl),Q_=" ",j_=!1;function Zx(e,t){switch(e){case"keyup":return dA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var no=!1;function mA(e,t){switch(e){case"compositionend":return Jx(t);case"keypress":return t.which!==32?null:(j_=!0,Q_);case"textInput":return e=t.data,e===Q_&&j_?null:e;default:return null}}function gA(e,t){if(no)return e==="compositionend"||!A0&&Zx(e,t)?(e=qx(),Ku=T0=hs=null,no=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yx&&t.locale!=="ko"?null:t.data;default:return null}}var vA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ty(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vA[e.type]:t==="textarea"}function $x(e,t,n,i){eo?fo?fo.push(i):fo=[i]:eo=i,t=Hh(t,"onChange"),0<t.length&&(n=new Wh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Vl=null,ec=null;function _A(e){WS(e,0)}function Yh(e){var t=Bl(e);if(Hx(t))return e}function ey(e,t){if(e==="change")return t}var Kx=!1;Fa&&(Fa?(Iu="oninput"in document,Iu||(Fp=document.createElement("div"),Fp.setAttribute("oninput","return;"),Iu=typeof Fp.oninput=="function"),Ou=Iu):Ou=!1,Kx=Ou&&(!document.documentMode||9<document.documentMode));var Ou,Iu,Fp;function ny(){Vl&&(Vl.detachEvent("onpropertychange",Qx),ec=Vl=null)}function Qx(e){if(e.propertyName==="value"&&Yh(ec)){var t=[];$x(t,ec,e,M0(e)),Wx(_A,t)}}function yA(e,t,n){e==="focusin"?(ny(),Vl=t,ec=n,Vl.attachEvent("onpropertychange",Qx)):e==="focusout"&&ny()}function xA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yh(ec)}function bA(e,t){if(e==="click")return Yh(t)}function SA(e,t){if(e==="input"||e==="change")return Yh(t)}function MA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var di=typeof Object.is=="function"?Object.is:MA;function nc(e,t){if(di(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!gm.call(t,a)||!di(e[a],t[a]))return!1}return!0}function bm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function iy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ay(e,t){var n=iy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=iy(n)}}function jx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tb(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bm(e.document)}return t}function w0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var TA=Fa&&"documentMode"in document&&11>=document.documentMode,io=null,Sm=null,Gl=null,Mm=!1;function sy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mm||io==null||io!==bm(i)||(i=io,"selectionStart"in i&&w0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Gl&&nc(Gl,i)||(Gl=i,i=Hh(Sm,"onSelect"),0<i.length&&(t=new Wh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=io)))}function nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ao={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Hp={},eb={};Fa&&(eb=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Tr(e){if(Hp[e])return Hp[e];if(!ao[e])return e;var t=ao[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eb)return Hp[e]=t[n];return e}var nb=Tr("animationend"),ib=Tr("animationiteration"),ab=Tr("animationstart"),EA=Tr("transitionrun"),AA=Tr("transitionstart"),wA=Tr("transitioncancel"),sb=Tr("transitionend"),rb=new Map,Tm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tm.push("scrollEnd");function Zi(e,t){rb.set(e,t),Mr(t,[e])}var CA=0;function Ha(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Yi.identifierPrefix;var n=CA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function ry(e){if(e==null||typeof e=="string")return e;var t=null,n=xo;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function qa(e,t){return e=ry(e),t=ry(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var yh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],so=0,C0=0;function Zh(){for(var e=so,t=C0=so=0;t<e;){var n=Ei[t];Ei[t++]=null;var i=Ei[t];Ei[t++]=null;var a=Ei[t];Ei[t++]=null;var s=Ei[t];if(Ei[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&ob(n,a,s)}}function Jh(e,t,n,i){Ei[so++]=e,Ei[so++]=t,Ei[so++]=n,Ei[so++]=i,C0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function R0(e,t,n,i){return Jh(e,t,n,i),xh(e)}function Er(e,t){return Jh(e,null,null,t),xh(e)}function ob(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-hi(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function xh(e){if(50<Ql)throw Ql=0,lh=null,Error(nt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ro={};function RA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,t,n,i){return new RA(e,t,n,i)}function N0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ba(e,t){var n=e.alternate;return n===null?(n=qn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function lb(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ju(e,t,n,i,a,s){var r=0;if(i=e,typeof i=="function")N0(i)&&(r=1);else if(typeof i=="string")r=eC(e,n,va.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case hm:return e=qn(31,n,t,a),e.elementType=hm,e.lanes=s,e;case jr:return ur(n.children,a,s,t);case Ex:r=8,a|=24;break;case lm:return e=qn(12,n,t,a|2),e.elementType=lm,e.lanes=s,e;case cm:return e=qn(13,n,t,a),e.elementType=cm,e.lanes=s,e;case um:return e=qn(19,n,t,a),e.elementType=um,e.lanes=s,e;case gE:case fm:return e=a|32,e=qn(30,n,t,e),e.elementType=fm,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case da:r=10;break t;case Ax:r=9;break t;case v0:r=11;break t;case _0:r=14;break t;case os:r=16,i=null;break t}r=29,n=Error(nt(130,e===null?"null":typeof e,"")),i=null}return t=qn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function ur(e,t,n,i){return e=qn(7,e,i,t),e.lanes=n,e}function Vp(e,t,n){return e=qn(6,e,null,t),e.lanes=n,e}function cb(e){var t=qn(18,null,null,0);return t.stateNode=e,t}function Gp(e,t,n){return t=qn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var oy=new WeakMap;function Ri(e,t){if(typeof e=="object"&&e!==null){var n=oy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:F_(t)},oy.set(e,t),t)}return{value:e,source:t,stack:F_(t)}}var oo=[],lo=0,bh=null,ic=0,Ai=[],wi=0,As=null,ma=1,ga="";function Ia(e,t){oo[lo++]=ic,oo[lo++]=bh,bh=e,ic=t}function ub(e,t,n){Ai[wi++]=ma,Ai[wi++]=ga,Ai[wi++]=As,As=e;var i=ma;e=ga;var a=32-hi(i)-1;i&=~(1<<a),n+=1;var s=32-hi(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,ma=1<<32-hi(t)+a|n<<a|i,ga=s+e}else ma=1<<s|n<<a|i,ga=e}function $h(e){e.return!==null&&(Ia(e,1),ub(e,1,0))}function D0(e){for(;e===bh;)bh=oo[--lo],oo[lo]=null,ic=oo[--lo],oo[lo]=null;for(;e===As;)As=Ai[--wi],Ai[wi]=null,ga=Ai[--wi],Ai[wi]=null,ma=Ai[--wi],Ai[wi]=null}function hb(e,t){Ai[wi++]=ma,Ai[wi++]=ga,Ai[wi++]=As,ma=t.id,ga=t.overflow,As=e}var mn=null,Oe=null,Jt=!1,vs=null,Ni=!1,Em=Error(nt(519));function ws(e){var t=Error(nt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ac(Ri(t,e)),Em}function ly(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[bn]=e,t[Jn]=i,n){case"dialog":Kt("cancel",t),Kt("close",t);break;case"iframe":case"object":case"embed":Kt("load",t);break;case"video":case"audio":for(n=0;n<lc.length;n++)Kt(lc[n],t);break;case"source":Kt("error",t);break;case"img":case"image":case"link":Kt("error",t),Kt("load",t);break;case"details":Kt("toggle",t);break;case"input":Kt("invalid",t),Vx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Kt("invalid",t);break;case"textarea":Kt("invalid",t),kx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||YS(t.textContent,n)?(i.popover!=null&&(Kt("beforetoggle",t),Kt("toggle",t)),i.onScroll!=null&&Kt("scroll",t),i.onScrollEnd!=null&&Kt("scrollend",t),i.onClick!=null&&(t.onclick=pa),t=!0):t=!1,t||ws(e,!0)}function Sh(e){for(mn=e.return;mn;)switch(mn.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:mn=mn.return}}function Yr(e){if(e!==mn)return!1;if(!Jt)return Sh(e),Jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||c0(e.type,e.memoizedProps)),n=!n),n&&Oe&&ws(e),Sh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Oe=ax(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Oe=ax(e)}else t===27?(t=Oe,Us(e.type)?(e=d0,d0=null,Oe=e):Oe=t):Oe=mn?Di(e.stateNode.nextSibling):null;return!0}function pr(){Oe=mn=null,Jt=!1}function kp(){var e=vs;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),vs=null),e}function ac(e){vs===null?vs=[e]:vs.push(e)}var Am=xa(null),Ar=null,Pa=null;function fs(e,t,n){Ie(Am,t._currentValue),t._currentValue=n}function za(e){e._currentValue=Am.current,Mn(Am)}function th(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function wm(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),th(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(nt(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),th(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),th(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function mr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(nt(387));if(r=r.memoizedProps,r!==null){var o=a.type;di(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===ph.current){if(r=a.alternate,r===null)throw Error(nt(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}a=a.return}return e!==null&&wm(t,e,n,i),t.flags|=262144,e!==null}function Mh(e){for(e=e.firstContext;e!==null;){if(!di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){Ar=e,Pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return fb(Ar,e)}function Pu(e,t){return Ar===null&&gr(e),fb(e,t)}function fb(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Pa===null){if(e===null)throw Error(nt(308));Pa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pa=Pa.next=t;return n}var NA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},DA=ln.unstable_scheduleCallback,UA=ln.unstable_NormalPriority,je={$$typeof:da,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function U0(){return{controller:new NA,data:new Map,refCount:0}}function bc(e){e.refCount--,e.refCount===0&&DA(UA,function(){e.controller.abort()})}function cy(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var zl=null;function LA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var kl=null,Cm=0,vr=0,po=null;function OA(e,t){if(kl===null){var n=kl=[];Cm=0,vr=rg(),po={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Cm++,t.then(uy,uy),t}function uy(){if(--Cm===0&&(zl=null,kl!==null)){po!==null&&(po.status="fulfilled");var e=kl;kl=null,vr=0,po=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function IA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var hy=It.S;It.S=function(e,t){if(NS=ci(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&OA(e,t),zl!==null)for(var n=Co;n!==null;)cy(n,zl),n=n.next;if(n=e.types,n!==null){for(var i=Co;i!==null;)cy(i,n),i=i.next;if(vr!==0){i=zl,i===null&&(i=zl=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}hy!==null&&hy(e,t)};var hr=xa(null);function L0(){var e=hr.current;return e!==null?e:Ce.pooledCache}function eh(e,t){t===null?Ie(hr,hr.current):Ie(hr,t.pool)}function db(){var e=L0();return e===null?null:{parent:je._currentValue,pool:e}}var Po=Error(nt(460)),O0=Error(nt(474)),Kh=Error(nt(542)),Th={then:function(){}};function fy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pb(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(pa,pa),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,py(e),e===void 0&&!("reason"in t)?Error(nt(600)):e;default:if(typeof t.status=="string")t.then(pa,pa);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(nt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,py(e),e}throw fr=t,Po}}function sr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fr=n,Po):n}}var fr=null;function dy(){if(fr===null)throw Error(nt(459));var e=fr;return fr=null,e}function py(e){if(e===Po||e===Kh)throw Error(nt(483))}var mo=null,sc=0;function Bu(e){var t=sc;return sc+=1,mo===null&&(mo=[]),pb(mo,e,t)}function as(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zu(e,t){throw t.$$typeof===mE?Error(nt(525)):(e=Object.prototype.toString.call(t),Error(nt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mb(e){function t(h,_){if(e){var b=h.deletions;b===null?(h.deletions=[_],h.flags|=16):b.push(_)}}function n(h,_){if(!e)return null;for(;_!==null;)t(h,_),_=_.sibling;return null}function i(h){for(var _=new Map;h!==null;)h.key===null?_.set(h.index,h):_.set(h.key,h),h=h.sibling;return _}function a(h,_){return h=Ba(h,_),h.index=0,h.sibling=null,h}function s(h,_,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<_?(h.flags|=2,_):b):(h.flags|=134217730,_)):(h.flags|=1048576,_)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,_,b,y){return _===null||_.tag!==6?(_=Vp(b,h.mode,y),_.return=h,_):(_=a(_,b),_.return=h,_)}function l(h,_,b,y){var T=b.type;return T===jr?(h=f(h,_,b.props.children,y,b.key),as(h,b),h):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===os&&sr(T)===_.type)?(_=a(_,b.props),as(_,b),_.return=h,_):(_=ju(b.type,b.key,b.props,null,h.mode,y),as(_,b),_.return=h,_)}function c(h,_,b,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==b.containerInfo||_.stateNode.implementation!==b.implementation?(_=Gp(b,h.mode,y),_.return=h,_):(_=a(_,b.children||[]),_.return=h,_)}function f(h,_,b,y,T){return _===null||_.tag!==7?(_=ur(b,h.mode,y,T),_.return=h,_):(_=a(_,b),_.return=h,_)}function p(h,_,b){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Vp(""+_,h.mode,b),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Cu:return b=ju(_.type,_.key,_.props,null,h.mode,b),as(b,_),b.return=h,b;case Il:return _=Gp(_,h.mode,b),_.return=h,_;case os:return _=sr(_),p(h,_,b)}if(Pl(_)||Rl(_))return _=ur(_,h.mode,b,null),_.return=h,_;if(typeof _.then=="function")return p(h,Bu(_),b);if(_.$$typeof===da)return p(h,Pu(h,_),b);zu(h,_)}return null}function u(h,_,b,y){var T=_!==null?_.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return T!==null?null:o(h,_,""+b,y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Cu:return b.key===T?l(h,_,b,y):null;case Il:return b.key===T?c(h,_,b,y):null;case os:return b=sr(b),u(h,_,b,y)}if(Pl(b)||Rl(b))return T!==null?null:f(h,_,b,y,null);if(typeof b.then=="function")return u(h,_,Bu(b),y);if(b.$$typeof===da)return u(h,_,Pu(h,b),y);zu(h,b)}return null}function d(h,_,b,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(b)||null,o(_,h,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cu:return h=h.get(y.key===null?b:y.key)||null,l(_,h,y,T);case Il:return h=h.get(y.key===null?b:y.key)||null,c(_,h,y,T);case os:return y=sr(y),d(h,_,b,y,T)}if(Pl(y)||Rl(y))return h=h.get(b)||null,f(_,h,y,T,null);if(typeof y.then=="function")return d(h,_,b,Bu(y),T);if(y.$$typeof===da)return d(h,_,b,Pu(_,y),T);zu(_,y)}return null}function v(h,_,b,y){for(var T=null,E=null,C=_,x=_=0,w=null;C!==null&&x<b.length;x++){C.index>x?(w=C,C=null):w=C.sibling;var R=u(h,C,b[x],y);if(R===null){C===null&&(C=w);break}e&&C&&R.alternate===null&&t(h,C),_=s(R,_,x),E===null?T=R:E.sibling=R,E=R,C=w}if(x===b.length)return n(h,C),Jt&&Ia(h,x),T;if(C===null){for(;x<b.length;x++)C=p(h,b[x],y),C!==null&&(_=s(C,_,x),E===null?T=C:E.sibling=C,E=C);return Jt&&Ia(h,x),T}for(C=i(C);x<b.length;x++)w=d(C,h,x,b[x],y),w!==null&&(e&&(R=w.alternate,R!==null&&C.delete(R.key===null?x:R.key)),_=s(w,_,x),E===null?T=w:E.sibling=w,E=w);return e&&C.forEach(function(I){return t(h,I)}),Jt&&Ia(h,x),T}function M(h,_,b,y){if(b==null)throw Error(nt(151));for(var T=null,E=null,C=_,x=_=0,w=null,R=b.next();C!==null&&!R.done;x++,R=b.next()){C.index>x?(w=C,C=null):w=C.sibling;var I=u(h,C,R.value,y);if(I===null){C===null&&(C=w);break}e&&C&&I.alternate===null&&t(h,C),_=s(I,_,x),E===null?T=I:E.sibling=I,E=I,C=w}if(R.done)return n(h,C),Jt&&Ia(h,x),T;if(C===null){for(;!R.done;x++,R=b.next())R=p(h,R.value,y),R!==null&&(_=s(R,_,x),E===null?T=R:E.sibling=R,E=R);return Jt&&Ia(h,x),T}for(C=i(C);!R.done;x++,R=b.next())R=d(C,h,x,R.value,y),R!==null&&(e&&(w=R.alternate,w!==null&&C.delete(w.key===null?x:w.key)),_=s(R,_,x),E===null?T=R:E.sibling=R,E=R);return e&&C.forEach(function(F){return t(h,F)}),Jt&&Ia(h,x),T}function g(h,_,b,y){if(typeof b=="object"&&b!==null&&b.type===jr&&b.key===null&&b.props.ref===void 0&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Cu:t:{for(var T=b.key;_!==null;){if(_.key===T){if(T=b.type,T===jr){if(_.tag===7){n(h,_.sibling),y=a(_,b.props.children),as(y,b),y.return=h,h=y;break t}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===os&&sr(T)===_.type){n(h,_.sibling),y=a(_,b.props),as(y,b),y.return=h,h=y;break t}n(h,_);break}else t(h,_);_=_.sibling}b.type===jr?(y=ur(b.props.children,h.mode,y,b.key),as(y,b),y.return=h,h=y):(y=ju(b.type,b.key,b.props,null,h.mode,y),as(y,b),y.return=h,h=y)}return r(h);case Il:t:{for(T=b.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===b.containerInfo&&_.stateNode.implementation===b.implementation){n(h,_.sibling),y=a(_,b.children||[]),y.return=h,h=y;break t}else{n(h,_);break}else t(h,_);_=_.sibling}y=Gp(b,h.mode,y),y.return=h,h=y}return r(h);case os:return b=sr(b),g(h,_,b,y)}if(Pl(b))return v(h,_,b,y);if(Rl(b)){if(T=Rl(b),typeof T!="function")throw Error(nt(150));return b=T.call(b),M(h,_,b,y)}if(typeof b.then=="function")return g(h,_,Bu(b),y);if(b.$$typeof===da)return g(h,_,Pu(h,b),y);zu(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,_!==null&&_.tag===6?(n(h,_.sibling),y=a(_,b),y.return=h,h=y):(n(h,_),y=Vp(b,h.mode,y),y.return=h,h=y),r(h)):n(h,_)}return function(h,_,b,y){try{sc=0;var T=g(h,_,b,y);return mo=null,T}catch(C){if(C===Po||C===Kh)throw C;var E=qn(29,C,null,h.mode);return E.lanes=y,E.return=h,E}}}var _r=mb(!0),gb=mb(!1),ls=!1;function I0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _s(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ys(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ue&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=xh(e),ob(e,null,n),t}return Jh(e,i,t,n),xh(e)}function Xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lx(e,n)}}function Xp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Nm=!1;function Wl(){if(Nm){var e=po;if(e!==null)throw e}}function ql(e,t,n,i){Nm=!1;var a=e.updateQueue;ls=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,f=c=l=null,o=s;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(te&u)===u:(i&u)===u){u!==0&&u===vr&&(Nm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=Re({},p,u);break t;case 2:ls=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);f===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,s===null&&(a.shared.lanes=0),Ns|=r,e.lanes=r,e.memoizedState=p}}function vb(e,t){if(typeof e!="function")throw Error(nt(191,e));e.call(t)}function _b(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vb(n[e],t)}var Cs=xa(null),Eh=xa(0);function my(e,t){e=Xa,Ie(Eh,e),Ie(Cs,t),Xa=e|t.baseLanes}function Dm(){Ie(Eh,Xa),Ie(Cs,Cs.current)}function P0(){Xa=Eh.current,Mn(Cs),Mn(Eh)}var An=xa(null),Nn=null;function xs(e){var t=e.alternate;Ie(Tn,Tn.current&1),Ie(An,e),Nn===null&&(t===null||Cs.current!==null||t.memoizedState!==null)&&(Nn=e)}function Um(e){Ie(Tn,Tn.current),Ie(An,e),Nn===null&&(Nn=e)}function yb(e){e.tag===22?(Ie(Tn,Tn.current),Ie(An,e),Nn===null&&(Nn=e)):bs()}function bs(){Ie(Tn,Tn.current),Ie(An,An.current)}function ri(e){Mn(An),Nn===e&&(Nn=null),Mn(Tn)}var Tn=xa(0);function rc(e,t){Ie(An,An.current),Ie(Tn,t)}function B0(e){Mn(Tn),Mn(An),Nn===e&&(Nn=null)}function Ah(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||f0(n)||ug(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Va=0,qt=null,Ee=null,Qe=null,wh=!1,go=!1,yr=!1,Ch=0,oc=0,vo=null,PA=0;function Ve(){throw Error(nt(321))}function z0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!di(e[n],t[n]))return!1;return!0}function F0(e,t,n,i,a,s){return Va=s,qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,It.H=e===null||e.memoizedState===null?$b:Kb,yr=!1,s=n(i,a),yr=!1,go&&(s=bb(t,n,i,a)),xb(e),s}function xb(e){It.H=Rh;var t=Ee!==null&&Ee.next!==null;if(Va=0,Qe=Ee=qt=null,wh=!1,oc=0,vo=null,t)throw Error(nt(300));e===null||tn||(e=e.dependencies,e!==null&&Mh(e)&&(tn=!0))}function bb(e,t,n,i){qt=e;var a=0;do{if(go&&(vo=null),oc=0,go=!1,25<=a)throw Error(nt(301));if(a+=1,Qe=Ee=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}It.H=XA,s=t(n,i)}while(go);return s}function BA(){var e=It.H,t=e.useState()[0];return t=typeof t.then=="function"?Sc(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(qt.flags|=1024),t}function H0(){var e=Ch!==0;return Ch=0,e}function V0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function G0(e){if(wh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wh=!1}Va=0,Qe=Ee=qt=null,go=!1,oc=Ch=0,vo=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?qt.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ze(){if(Ee===null){var e=qt.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Qe===null?qt.memoizedState:Qe.next;if(t!==null)Qe=t,Ee=e;else{if(e===null)throw qt.alternate===null?Error(nt(467)):Error(nt(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Qe===null?qt.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Qh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sc(e){var t=oc;return oc+=1,vo===null&&(vo=[]),e=pb(vo,e,t),t=qt,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,It.H=t===null||t.memoizedState===null?$b:Kb),e}function jh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sc(e);if(e.$$typeof===_E)return;if(e.$$typeof===da)return Sn(e)}throw Error(nt(438,String(e)))}function k0(e){var t=null,n=qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qh(),qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=vE;return t.index++,n}function Ga(e,t){return typeof t=="function"?t(e):t}function nh(e){var t=Ze();return X0(t,Ee,e)}function X0(e,t,n){var i=e.queue;if(i===null)throw Error(nt(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(te&p)===p:(Va&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===vr&&(f=!0);else if((Va&u)===u){c=c.next,u===vr&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,qt.lanes|=u,Ns|=u;p=c.action,yr&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,qt.lanes|=p,Ns|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!di(s,e.memoizedState)&&(tn=!0,f&&(n=po,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Wp(e){var t=Ze(),n=t.queue;if(n===null)throw Error(nt(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);di(s,t.memoizedState)||(tn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Sb(e,t,n){var i=qt,a=Ze(),s=Jt;if(s){if(n===void 0)throw Error(nt(407));n=n()}else n=t();var r=!di((Ee||a).memoizedState,n);if(r&&(a.memoizedState=n,tn=!0),a=a.queue,W0(Eb.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||r||Qe!==null&&(Qe.memoizedState.tag&1)!==0,To(e?9:8,{destroy:void 0},Tb.bind(null,i,a,n,t),null),e){if(i.flags|=2048,Ce===null)throw Error(nt(349));s||(Va&127)!==0||Mb(i,t,n)}return n}function Mb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qt.updateQueue,t===null?(t=Qh(),qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tb(e,t,n,i){t.value=n,t.getSnapshot=i,Ab(t)&&wb(e)}function Eb(e,t,n){return n(function(){Ab(t)&&wb(e)})}function Ab(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!di(e,n)}catch{return!0}}function wb(e){var t=Er(e,2);t!==null&&Yn(t,e,2)}function Lm(e){var t=Bn();if(typeof e=="function"){var n=e;if(e=n(),yr){us(!0);try{n()}finally{us(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:e},t}function Cb(e,t,n,i){return e.baseState=n,X0(e,Ee,typeof i=="function"?i:Ga)}function zA(e,t,n,i,a){if(ef(e))throw Error(nt(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};It.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Rb(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Rb(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=It.T,r={};r.types=s!==null?s.types:null,It.T=r;try{var o=n(a,i),l=It.S;l!==null&&l(r,o),gy(e,t,o)}catch(c){Om(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),It.T=s}}else try{s=n(a,i),gy(e,t,s)}catch(c){Om(e,t,c)}}function gy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){vy(e,t,i)},function(i){return Om(e,t,i)}):vy(e,t,n)}function vy(e,t,n){t.status="fulfilled",t.value=n,Nb(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Rb(e,n)))}function Om(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Nb(t),t=t.next;while(t!==i)}e.action=null}function Nb(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Db(e,t){return t}function _y(e,t){if(Jt){var n=Ce.formState;if(n!==null){t:{var i=qt;if(Jt){if(Oe){e:{for(var a=Oe,s=Ni;a.nodeType!==8;){if(!s){a=null;break e}if(a=Di(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Oe=Di(a.nextSibling),i=a.data==="F!";break t}}ws(i)}i=!1}i&&(t=n[0])}}return n=Bn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Db,lastRenderedState:t},n.queue=i,n=Yb.bind(null,qt,i),i.dispatch=n,i=Lm(!1),s=J0.bind(null,qt,!1,i.queue),i=Bn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=zA.bind(null,qt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function yy(e){var t=Ze();return Ub(t,Ee,e)}function Ub(e,t,n){if(t=X0(e,t,Db)[0],e=nh(Ga)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Sc(t)}catch(r){throw r===Po?Kh:r}else i=t;t=Ze();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(qt.flags|=2048,To(9,{destroy:void 0},FA.bind(null,a,n),null)),[i,s,e]}function FA(e,t){e.action=t}function xy(e){var t=Ze(),n=Ee;if(n!==null)return Ub(t,n,e);Ze(),t=t.memoizedState,n=Ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function To(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=qt.updateQueue,t===null&&(t=Qh(),qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Lb(){return Ze().memoizedState}function ih(e,t,n,i){var a=Bn();qt.flags|=e,a.memoizedState=To(1|t,{destroy:void 0},n,i===void 0?null:i)}function tf(e,t,n,i){var a=Ze();i=i===void 0?null:i;var s=a.memoizedState.inst;Ee!==null&&i!==null&&z0(i,Ee.memoizedState.deps)?a.memoizedState=To(t,s,n,i):(qt.flags|=e,a.memoizedState=To(1|t,s,n,i))}function by(e,t){ih(8390656,8,e,t)}function W0(e,t){tf(2048,8,e,t)}function HA(e){qt.flags|=4;var t=qt.updateQueue;if(t===null)t=Qh(),qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ob(e){var t=Ze().memoizedState;return HA({ref:t,nextImpl:e}),function(){if((ue&2)!==0)throw Error(nt(440));return t.impl.apply(void 0,arguments)}}function Ib(e,t){return tf(4,2,e,t)}function Pb(e,t){return tf(4,4,e,t)}function Bb(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zb(e,t,n){n=n!=null?n.concat([e]):null,tf(4,4,Bb.bind(null,t,e),n)}function q0(){}function Fb(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&z0(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Hb(e,t){var n=Ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&z0(t,i[1]))return i[0];if(i=e(),yr){us(!0);try{e()}finally{us(!1)}}return n.memoizedState=[i,t],i}function Y0(e,t,n){return n===void 0||(Va&1073741824)!==0&&(te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=US(),qt.lanes|=e,Ns|=e,n)}function Vb(e,t,n,i){return di(n,t)?n:Cs.current!==null?(e=Y0(e,n,i),di(e,t)||(tn=!0),e):(Va&106)===0||(Va&1073741824)!==0&&(te&261930)===0?(tn=!0,e.memoizedState=n):(e=US(),qt.lanes|=e,Ns|=e,t)}function Gb(e,t,n,i,a){var s=he.p;he.p=s!==0&&8>s?s:8;var r=It.T,o={};o.types=r!==null?r.types:null,It.T=o,J0(e,!1,t,n);try{var l=a(),c=It.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=IA(l,i);Yl(e,t,f,fi(e))}else Yl(e,t,i,fi(e))}catch(p){Yl(e,t,{then:function(){},status:"rejected",reason:p},fi())}finally{he.p=s,r!==null&&o.types!==null&&(r.types=o.types),It.T=r}}function VA(){}function Im(e,t,n,i){if(e.tag!==5)throw Error(nt(476));var a=kb(e).queue;Gb(e,a,t,cr,n===null?VA:function(){return Xb(e),n(i)})}function kb(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:cr,baseState:cr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:cr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xb(e){var t=kb(e);t.next===null&&(t=e.alternate.memoizedState),Yl(e,t.next.queue,{},fi())}function Z0(){return Sn(Do)}function Wb(){return Ze().memoizedState}function qb(){return Ze().memoizedState}function GA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=fi();e=_s(n);var i=ys(t,e,n);i!==null&&(Yn(i,t,n),Xl(i,t,n)),t={cache:U0()},e.payload=t;return}t=t.return}}function kA(e,t,n){var i=fi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ef(e)?Zb(t,n):(n=R0(e,t,n,i),n!==null&&(Yn(n,e,i),Jb(n,t,i)))}function Yb(e,t,n){var i=fi();Yl(e,t,n,i)}function Yl(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ef(e))Zb(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,di(o,r))return Jh(e,t,a,0),Ce===null&&Zh(),!1}catch{}if(n=R0(e,t,a,i),n!==null)return Yn(n,e,i),Jb(n,t,i),!0}return!1}function J0(e,t,n,i){if(i={lane:2,revertLane:rg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ef(e)){if(t)throw Error(nt(479))}else t=R0(e,n,i,2),t!==null&&Yn(t,e,2)}function ef(e){var t=e.alternate;return e===qt||t!==null&&t===qt}function Zb(e,t){go=wh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jb(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lx(e,n)}}var Rh={readContext:Sn,use:jh,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve,useEffectEvent:Ve},$b={readContext:Sn,use:jh,useCallback:function(e,t){return Bn().memoizedState=[e,t===void 0?null:t],e},useContext:Sn,useEffect:by,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ih(4194308,4,Bb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ih(4194308,4,e,t)},useInsertionEffect:function(e,t){ih(4,2,e,t)},useMemo:function(e,t){var n=Bn();t=t===void 0?null:t;var i=e();if(yr){us(!0);try{e()}finally{us(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Bn();if(n!==void 0){var a=n(t);if(yr){us(!0);try{n(t)}finally{us(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=kA.bind(null,qt,e),[i.memoizedState,e]},useRef:function(e){var t=Bn();return e={current:e},t.memoizedState=e},useState:function(e){e=Lm(e);var t=e.queue,n=Yb.bind(null,qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:q0,useDeferredValue:function(e,t){var n=Bn();return Y0(n,e,t)},useTransition:function(){var e=Lm(!1);return e=Gb.bind(null,qt,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=qt,a=Bn();if(Jt){if(n===void 0)throw Error(nt(407));n=n()}else{if(n=t(),Ce===null)throw Error(nt(349));(te&127)!==0||Mb(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,by(Eb.bind(null,i,s,e),[e]),i.flags|=2048,To(9,{destroy:void 0},Tb.bind(null,i,s,n,t),null),n},useId:function(){var e=Bn(),t=Ce.identifierPrefix;if(Jt){var n=ga,i=ma;n=(i&~(1<<32-hi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ch++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=PA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Z0,useFormState:_y,useActionState:_y,useOptimistic:function(e){var t=Bn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=J0.bind(null,qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:k0,useCacheRefresh:function(){return Bn().memoizedState=GA.bind(null,qt)},useEffectEvent:function(e){var t=Bn(),n={impl:e};return t.memoizedState=n,function(){if((ue&2)!==0)throw Error(nt(440));return n.impl.apply(void 0,arguments)}}},Kb={readContext:Sn,use:jh,useCallback:Fb,useContext:Sn,useEffect:W0,useImperativeHandle:zb,useInsertionEffect:Ib,useLayoutEffect:Pb,useMemo:Hb,useReducer:nh,useRef:Lb,useState:function(){return nh(Ga)},useDebugValue:q0,useDeferredValue:function(e,t){var n=Ze();return Vb(n,Ee.memoizedState,e,t)},useTransition:function(){var e=nh(Ga)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Sc(e),t]},useSyncExternalStore:Sb,useId:Wb,useHostTransitionStatus:Z0,useFormState:yy,useActionState:yy,useOptimistic:function(e,t){var n=Ze();return Cb(n,Ee,e,t)},useMemoCache:k0,useCacheRefresh:qb,useEffectEvent:Ob},XA={readContext:Sn,use:jh,useCallback:Fb,useContext:Sn,useEffect:W0,useImperativeHandle:zb,useInsertionEffect:Ib,useLayoutEffect:Pb,useMemo:Hb,useReducer:Wp,useRef:Lb,useState:function(){return Wp(Ga)},useDebugValue:q0,useDeferredValue:function(e,t){var n=Ze();return Ee===null?Y0(n,e,t):Vb(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Wp(Ga)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Sc(e),t]},useSyncExternalStore:Sb,useId:Wb,useHostTransitionStatus:Z0,useFormState:xy,useActionState:xy,useOptimistic:function(e,t){var n=Ze();return Ee!==null?Cb(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:k0,useCacheRefresh:qb,useEffectEvent:Ob};function qp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=fi(),a=_s(i);a.payload=t,n!=null&&(a.callback=n),t=ys(e,a,i),t!==null&&(Yn(t,e,i),Xl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=fi(),a=_s(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ys(e,a,i),t!==null&&(Yn(t,e,i),Xl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fi(),i=_s(n);i.tag=2,t!=null&&(i.callback=t),t=ys(e,i,n),t!==null&&(Yn(t,e,n),Xl(t,e,n))}};function Sy(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!nc(n,i)||!nc(a,s):!0}function My(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Pm.enqueueReplaceState(t,t.state,null)}function xr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Re({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Qb(e){yh(e)}function jb(e){console.error(e)}function tS(e){yh(e)}function Nh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ty(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Bm(e,t,n){return n=_s(n),n.tag=3,n.payload={element:null},n.callback=function(){Nh(e,t)},n}function eS(e){return e=_s(e),e.tag=3,e}function nS(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Ty(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Ty(t,n,i),typeof a!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function WA(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&mr(t,n,a,!0),n=An.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Nn===null?zh():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Th?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),jp(e,i,a)),!1;case 22:return n.flags|=65536,i===Th?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),jp(e,i,a)),!1}throw Error(nt(435,n.tag))}return jp(e,i,a),zh(),!1}if(Jt)return t=An.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Em&&(e=Error(nt(422),{cause:i}),ac(Ri(e,n)))):(i!==Em&&(t=Error(nt(423),{cause:i}),ac(Ri(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Ri(i,n),a=Bm(e.stateNode,i,a),Xp(e,a),Ge!==4&&(Ge=2)),!1;var s=Error(nt(520),{cause:i});if(s=Ri(s,n),Kl===null?Kl=[s]:Kl.push(s),Ge!==4&&(Ge=2),t===null)return!0;i=Ri(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Bm(n.stateNode,i,e),Xp(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ss===null||!Ss.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=eS(a),nS(a,e,n,i),Xp(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var $0=Error(nt(461)),tn=!1;function rn(e,t,n,i){t.child=e===null?gb(t,null,n,i):_r(t,e.child,n,i)}function Ey(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return gr(t),i=F0(e,t,n,r,s,a),o=H0(),e!==null&&!tn?(V0(e,t,a),ka(e,t,a)):(Jt&&o&&$h(t),t.flags|=1,rn(e,t,i,a),t.child)}function Ay(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!N0(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,iS(e,t,s,i,a)):(e=ju(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Q0(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:nc,n(r,i)&&e.ref===t.ref)return ka(e,t,a)}return t.flags|=1,e=Ba(s,i),e.ref=t.ref,e.return=t,t.child=e}function iS(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(nc(s,i)&&e.ref===t.ref)if(tn=!1,t.pendingProps=i=s,Q0(e,a))(e.flags&131072)!==0&&(tn=!0);else return t.lanes=e.lanes,ka(e,t,a)}return zm(e,t,n,i,a)}function aS(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return wy(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&eh(t,s!==null?s.cachePool:null),s!==null?my(t,s):Dm(),yb(t);else return i=t.lanes=536870912,wy(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(eh(t,s.cachePool),my(t,s),bs(),t.memoizedState=null):(e!==null&&eh(t,null),Dm(),bs());return rn(e,t,a,n),t.child}function Zl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function wy(e,t,n,i,a){var s=L0();return s=s===null?null:{parent:je._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&eh(t,null),Dm(),yb(t),e!==null&&mr(e,t,i,!0),t.childLanes=a,null}function ah(e,t){return t=nf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Cy(e,t,n){return _r(t,e.child,null,n),e=ah(t,t.pendingProps),e.flags|=2,ri(t),t.memoizedState=null,e}function qA(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Jt){if(i.mode==="hidden")return e=ah(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Zl(null,e);if(Um(t),(e=Oe)?(e=a1(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:As!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},n=cb(e),n.return=t,t.child=n,mn=t,Oe=null)):e=null,e===null)throw ws(t);return t.lanes=536870912,null}return ah(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Um(t),a)if(t.flags&256)t.flags&=-257,t=Cy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(nt(558));else if(tn||mr(e,t,n,!1),a=(n&e.childLanes)!==0,tn||a){if(Cs.current===null){if(i=Ce,i!==null&&(r=Ox(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Er(e,r),Yn(i,e,r),$0;zh()}t=Cy(e,t,n)}else e=s.treeContext,Oe=Di(r.nextSibling),mn=t,Jt=!0,vs=null,Ni=!1,e!==null&&hb(t,e),t=ah(t,i),t.flags|=134221824;return t}return e=Ba(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(nt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zm(e,t,n,i,a){return gr(t),n=F0(e,t,n,i,void 0,a),i=H0(),e!==null&&!tn?(V0(e,t,a),ka(e,t,a)):(Jt&&i&&$h(t),t.flags|=1,rn(e,t,n,a),t.child)}function Ry(e,t,n,i,a,s){return gr(t),t.updateQueue=null,n=bb(t,i,n,a),xb(e),i=H0(),e!==null&&!tn?(V0(e,t,s),ka(e,t,s)):(Jt&&i&&$h(t),t.flags|=1,rn(e,t,n,s),t.child)}function Ny(e,t,n,i,a){if(gr(t),t.stateNode===null){var s=ro,r=n.contextType;typeof r=="object"&&r!==null&&(s=Sn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Pm,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},I0(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?Sn(r):ro,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(qp(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Pm.enqueueReplaceState(s,s.state,null),ql(t,i,s,a),Wl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=xr(n,o);s.props=l;var c=s.context,f=n.contextType;r=ro,typeof f=="object"&&f!==null&&(r=Sn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&My(t,s,i,r),ls=!1;var u=t.memoizedState;s.state=u,ql(t,i,s,a),Wl(),c=t.memoizedState,o||u!==c||ls?(typeof p=="function"&&(qp(t,n,p,i),c=t.memoizedState),(l=ls||Sy(t,n,l,i,u,c,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Rm(e,t),r=t.memoizedProps,f=xr(n,r),s.props=f,p=t.pendingProps,u=s.context,c=n.contextType,l=ro,typeof c=="object"&&c!==null&&(l=Sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&My(t,s,i,l),ls=!1,u=t.memoizedState,s.state=u,ql(t,i,s,a),Wl();var d=t.memoizedState;r!==p||u!==d||ls||e!==null&&e.dependencies!==null&&Mh(e.dependencies)?(typeof o=="function"&&(qp(t,n,o,i),d=t.memoizedState),(f=ls||Sy(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&Mh(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,d,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,d,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=l,i=f):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Jr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=_r(t,e.child,null,a),t.child=_r(t,null,n,a)):rn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ka(e,t,a),e}function Dy(e,t,n,i){return pr(),t.flags|=256,rn(e,t,n,i),t.child}var Fm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hm(e){return{baseLanes:e,cachePool:db()}}function Vm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=li),e}function sS(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Tn.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Jt){if(a?xs(t):bs(),(e=Oe)?(e=a1(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:As!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},n=cb(e),n.return=t,t.child=n,mn=t,Oe=null)):e=null,e===null)throw ws(t);return ug(e)?t.lanes=32:t.lanes=536870912,null}return s=i.children,i=i.fallback,a?(bs(),a=t.mode,s=nf({mode:"hidden",children:s},a),i=ur(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=Hm(n),i.childLanes=Vm(e,r,n),t.memoizedState=Fm,Zl(null,i)):(xs(t),K0(t,s))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return YA(e,t,s,r,i,l,o,n)}return a?(bs(),a=i.fallback,s=t.mode,o=e.child,l=o.sibling,i=Ba(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=Ba(l,a):(a=ur(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,Zl(null,i),i=t.child,a=e.child.memoizedState,a===null?a=Hm(n):(s=a.cachePool,s!==null?(o=je._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=db(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=Vm(e,r,n),t.memoizedState=Fm,Zl(e.child,i)):(xs(t),n=e.child,e=n.sibling,n=Ba(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function K0(e,t){return t=nf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function nf(e,t){return e=qn(22,e,null,t),e.lanes=0,e}function Fu(e,t,n){return _r(t,e.child,null,n),e=K0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function YA(e,t,n,i,a,s,r,o){if(n)return t.flags&256?(xs(t),t.flags&=-257,Fu(e,t,o)):t.memoizedState!==null?(bs(),t.child=e.child,t.flags|=128,null):(bs(),s=a.fallback,r=t.mode,a=nf({mode:"visible",children:a.children},r),s=ur(s,r,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,_r(t,e.child,null,o),a=t.child,a.memoizedState=Hm(o),a.childLanes=Vm(e,i,o),t.memoizedState=Fm,Zl(null,a));if(xs(t),ug(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(nt(419)),a.stack="",a.digest=i,ac({value:a,source:null,stack:null})),Fu(e,t,o)}if(tn||mr(e,t,o,!1),i=(o&e.childLanes)!==0,tn||i){if(Cs.current!==null)return Fu(e,t,o);if(i=Ce,i!==null&&(a=Ox(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,Er(e,a),Yn(i,e,a),$0;return f0(s)||zh(),Fu(e,t,o)}return f0(s)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Oe=Di(s.nextSibling),mn=t,Jt=!0,vs=null,Ni=!1,e!==null&&hb(t,e),t=K0(t,a.children),t.flags|=134221824,t)}function Uy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),th(e.return,t,n)}function Ly(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ah(n)===null&&(t=e),e=e.sibling}return t}function Hu(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Yp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Gm(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Tn.current;if(t.flags&128)return rc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,rc(t,r),a==="backwards"&&e!==null?(Yp(e),rn(e,t,i,n),Yp(e)):rn(e,t,i,n),i=Jt?ic:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uy(e,n,t);else if(e.tag===19)Uy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=Ly(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,Yp(t)),Hu(t,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ah(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Hu(t,!0,n,null,s,i);break;case"together":Hu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Ly(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Hu(t,!1,a,n,s,i)}return t.child}function Oy(e,t,n){var i=t.pendingProps;return fs(t,t.type,i.value),rn(e,t,i.children,n),t.child}function ka(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ns|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(mr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(nt(153));if(t.child!==null){for(e=t.child,n=Ba(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ba(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Q0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mh(e)))}function ZA(e,t,n){switch(t.tag){case 3:mh(t,t.stateNode.containerInfo),fs(t,je,e.memoizedState.cache),pr();break;case 27:case 5:mm(t);break;case 4:mh(t,t.stateNode.containerInfo);break;case 10:fs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Um(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return xs(t),t.flags|=128,null;i=mr(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?sS(e,t,n):(xs(t),e=ka(e,t,n),e!==null?e.sibling:null)}xs(t);break;case 19:if(t.flags&128)return Gm(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(mr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Gm(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),rc(t,Tn.current),i)break;return null;case 22:return t.lanes=0,aS(e,t,n,t.pendingProps);case 24:fs(t,je,e.memoizedState.cache)}return ka(e,t,n)}function rS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tn=!0;else{if(!Q0(e,n)&&(t.flags&128)===0)return tn=!1,ZA(e,t,n);tn=(e.flags&131072)!==0}else tn=!1,Jt&&(t.flags&1048576)!==0&&ub(t,ic,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=sr(t.elementType),t.type=e,typeof e=="function")N0(e)?(i=xr(e,i),t.tag=1,t=Ny(null,t,e,i,n)):(t.tag=0,t=zm(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===v0){t.tag=11,t=Ey(null,t,e,i,n);break t}else if(a===_0){t.tag=14,t=Ay(null,t,e,i,n);break t}else if(a===da){t.tag=10,t.type=e,t=Oy(null,t,n);break t}}throw t=dm(e)||e,Error(nt(306,t,""))}}return t;case 0:return zm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=xr(i,t.pendingProps),Ny(e,t,i,a,n);case 3:t:{if(mh(t,t.stateNode.containerInfo),e===null)throw Error(nt(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Rm(e,t),ql(t,i,null,n);var r=t.memoizedState;if(i=r.cache,fs(t,je,i),i!==s.cache&&wm(t,[je],n,!0),Wl(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Dy(e,t,i,n);break t}else if(i!==a){a=Ri(Error(nt(424)),t),ac(a),t=Dy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Di(e.firstChild),mn=t,Jt=!0,vs=null,Ni=!0,n=gb(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(pr(),i===a){t=ka(e,t,n);break t}rn(e,t,i,n)}t=t.child}return t;case 26:return Jr(e,t),e===null?(n=ox(t.type,null,t.pendingProps,null))?t.memoizedState=n:Jt||(t.stateNode=JS(t.type,t.pendingProps,gs.current,t)):t.memoizedState=ox(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return mm(t),e===null&&Jt&&(i=t.stateNode=s1(t.type,t.pendingProps,gs.current),mn=t,Ni=!0,a=Oe,Us(t.type)?(d0=a,Oe=Di(i.firstChild)):Oe=a),rn(e,t,t.pendingProps.children,n),Jr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Jt&&((a=i=Oe)&&(i=Hw(i,t.type,t.pendingProps,Ni),i!==null?(t.stateNode=i,mn=t,Oe=Di(i.firstChild),Ni=!1,a=!0):a=!1),a||ws(t)),mm(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,c0(a,s)?i=null:r!==null&&c0(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=F0(e,t,BA,null,null,n),Do._currentValue=a),Jr(e,t),rn(e,t,i,n),t.child;case 6:return e===null&&Jt&&((e=n=Oe)&&(n=Vw(n,t.pendingProps,Ni),n!==null?(t.stateNode=n,mn=t,Oe=null,e=!0):e=!1),e||ws(t)),null;case 13:return sS(e,t,n);case 4:return mh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_r(t,null,i,n):rn(e,t,i,n),t.child;case 11:return Ey(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Jr(e,t),rn(e,t,i,n),t.child;case 8:return rn(e,t,t.pendingProps.children,n),t.child;case 12:return rn(e,t,t.pendingProps.children,n),t.child;case 10:return Oy(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,gr(t),a=Sn(a),i=i(a),t.flags|=1,rn(e,t,i,n),t.child;case 14:return Ay(e,t,t.type,t.pendingProps,n);case 15:return iS(e,t,t.type,t.pendingProps,n);case 19:return Gm(e,t,n);case 31:return qA(e,t,n);case 22:return aS(e,t,n,t.pendingProps);case 24:return gr(t),i=Sn(je),e===null?(a=L0(),a===null&&(a=Ce,s=U0(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},I0(t),fs(t,je,a)):((e.lanes&n)!==0&&(Rm(e,t),ql(t,null,null,n),Wl()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),fs(t,je,i)):(i=s.cache,fs(t,je,i),i!==a.cache&&wm(t,[je],n,!0))),rn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Jt&&$h(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Jr(e,t),rn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(nt(156,t.tag))}function Oa(e){e.flags|=4}function Zp(e,t,n,i,a){var s;if((s=(e.mode&32)!==0)&&(s=n===null?ux(t,i):ux(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(IS())e.flags|=8192;else throw fr=Th,O0}else e.flags&=-16777217}function Iy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!c1(t))if(IS())e.flags|=8192;else throw fr=Th,O0}function Vu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Dx():536870912,e.lanes|=t,Eo|=t)}function Dl(e,t){if(!Jt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function JA(e,t,n){var i=t.pendingProps;switch(D0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),za(je),bo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?Oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kp())),Le(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Oa(t),s!==null?(Le(t),Iy(t,s)):(Le(t),Zp(t,a,null,i,n))):s?s!==e.memoizedState?(Oa(t),Le(t),Iy(t,s)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Oa(t),Le(t),Zp(t,a,e,i,n)),null;case 27:if(gh(t),n=gs.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Oa(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Le(t),t.subtreeFlags&=-33554433,null}e=va.current,Yr(t)?ly(t,e):(e=s1(a,i,n),t.stateNode=e,Oa(t))}return Le(t),t.subtreeFlags&=-33554433,null;case 5:if(gh(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Oa(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Le(t),t.subtreeFlags&=-33554433,null}if(s=va.current,Yr(t))ly(t,s);else{var r=uc(gs.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[bn]=t,s[Jn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(En(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Oa(t)}}return Le(t),t.subtreeFlags&=-33554433,Zp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Oa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(nt(166));if(e=gs.current,Yr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=mn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[bn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||YS(e.nodeValue,n)),e||ws(t,!0)}else e=uc(e).createTextNode(i),e[bn]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Yr(t),n!==null){if(e===null){if(!i)throw Error(nt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(557));e[bn]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=kp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ri(t),t):(ri(t),null);if((t.flags&128)!==0)throw Error(nt(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(nt(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(nt(317));a[bn]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),a=!1}else a=kp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ri(t),t):(ri(t),null)}return ri(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vu(t,t.updateQueue),Le(t),null);case 4:return bo(),e===null&&og(t.stateNode.containerInfo),t.flags|=67108864,Le(t),null;case 10:return za(t.type),Le(t),null;case 19:if(B0(t),i=t.memoizedState,i===null)return Le(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Dl(i,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ah(e),s!==null){for(t.flags|=128,Dl(i,!1),e=s.updateQueue,t.updateQueue=e,Vu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)lb(n,e),n=n.sibling;return rc(t,Tn.current&1|2),Jt&&Ia(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ci()>Ph&&(t.flags|=128,a=!0,Dl(i,!1),t.lanes=4194304)}else{if(!a)if(e=Ah(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Vu(t,e),Dl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!Jt)return Le(t),null}else 2*ci()-i.renderingStartTime>Ph&&n!==536870912&&(t.flags|=128,a=!0,Dl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ci(),e.sibling=null,s=Tn.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Jt?rc(t,s):(n=s,Ie(An,t),Ie(Tn,n),Nn===null&&(Nn=t)),Jt&&Ia(t,i.treeForkCount),e}return Le(t),null;case 22:case 23:return ri(t),P0(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Vu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Mn(hr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),za(je),Le(t),null;case 25:return null;case 30:return t.flags|=33554432,Le(t),null}throw Error(nt(156,t.tag))}function $A(e,t){switch(D0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return za(je),bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gh(t),null;case 31:if(t.memoizedState!==null){if(ri(t),t.alternate===null)throw Error(nt(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ri(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(nt(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B0(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return bo(),null;case 10:return za(t.type),null;case 22:case 23:return ri(t),P0(),e!==null&&Mn(hr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return za(je),null;case 25:return null;default:return null}}function oS(e,t){switch(D0(t),t.tag){case 3:za(je),bo();break;case 26:case 27:case 5:gh(t);break;case 4:bo();break;case 31:t.memoizedState!==null&&ri(t);break;case 13:ri(t);break;case 19:B0(t);break;case 10:za(t.type);break;case 22:case 23:ri(t),P0(),e!==null&&Mn(hr);break;case 24:za(je)}}function Mc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){be(t,t.return,o)}}function Rs(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(f){be(a,l,f)}}}i=i.next}while(i!==s)}}catch(f){be(t,t.return,f)}}function lS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_b(t,n)}catch(i){be(e,e.return,i)}}}function cS(e,t,n){n.props=xr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){be(e,t,i)}}function ha(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,s=Ha(e.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=jS(s)),i=a.ref;break;case 7:if(e.stateNode===null){var r=new pi(e);Zn(e.child,!1,zw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){be(e,t,o)}}function xn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){be(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){be(e,t,a)}else n.current=null}function Dh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)i1(e.stateNode,t[n])}function Py(e){for(var t=e.return;t!==null&&(tg(t)&&i1(e.stateNode,t.stateNode),!j0(t));)t=t.return}function Jl(e){for(var t=e.return;t!==null&&(tg(t)&&Fw(e.stateNode,t.stateNode),!j0(t));)t=t.return}function j0(e){return e.tag===5||e.tag===3||e.tag===27}function tg(e){return e&&e.tag===7&&e.stateNode!==null}function km(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){be(e,e.return,a)}}function Jp(e,t,n){try{var i=e.stateNode;xw(i,e.type,n,t),i[Jn]=t}catch(a){be(e,e.return,a)}}function uS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Us(e.type)||e.tag===4}function $p(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||uS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Us(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xm(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pa)),Dh(e,i),le=!0;else if(a!==4&&(a===27&&(Dh(e,i),i=null,Us(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Xm(e,t,n,i),e=e.sibling;e!==null;)Xm(e,t,n,i),e=e.sibling}function Uh(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Dh(e,i),le=!0;else if(a!==4&&(a===27&&(Dh(e,i),i=null,Us(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Uh(e,t,n,i),e=e.sibling;e!==null;)Uh(e,t,n,i),e=e.sibling}function hS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);En(t,i,n),t[bn]=e,t[Jn]=n}catch(s){be(e,e.return,s)}}var Lh=!1,oi=null;function By(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Lh=!0)}var fa=null;function zy(){var e=fa;return fa=null,e}var Wn=0;function Bo(e,t,n,i,a){return Wn=0,fS(e.child,t,n,i,a)}function fS(e,t,n,i,a){for(var s=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=u0(r);i.push(o),o.view&&(s=!0)}else s||u0(r).view&&(s=!0);Lh=!0,$S(r,Wn===0?t:t+"_"+Wn,n),Wn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||fS(e.child,t,n,i,a)&&(s=!0));e=e.sibling}return s}function ya(e,t){for(;e!==null;)e.tag===5?KS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ya(e.child,t)),e=e.sibling}function sh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(sh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(nt(544));var n=t.name;t=qa(t.default,t.share),t!=="none"&&(Bo(e,n,t,null,!1)||ya(e.child,!1))}e=e.sibling}}function Wm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Ha(i,n),s=qa(i.default,n.paired?i.share:i.enter);s!=="none"?Bo(e,a,s,null,!1)?(sh(e),n.paired||t||Ao(e,i.onEnter)):ya(e.child,!1):sh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Wm(e,t),e=e.sibling;else sh(e)}function qm(e){if(oi!==null&&oi.size!==0){var t=oi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var s=qa(n.default,n.share);if(s!=="none"&&(Bo(e,i,s,null,!1)?(s=e.stateNode,a.paired=s,s.paired=a,Ao(e,n.onShare)):ya(e.child,!1)),t.delete(i),t.size===0)break}}}qm(e)}e=e.sibling}}}function Ym(e){if(e.tag===30){var t=e.memoizedProps,n=Ha(t,e.stateNode),i=oi!==null?oi.get(n):void 0,a=qa(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(Bo(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,oi.delete(n),Ao(e,t.onShare)):Ao(e,t.onExit):ya(e.child,!1)),oi!==null&&qm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ym(e),e=e.sibling;else oi!==null&&qm(e)}function dS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ha(t,e.stateNode);t=qa(t.default,t.update),e.flags&=-5,t!=="none"&&Bo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&dS(e);e=e.sibling}}function Zm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ya(e.child,!1))}Zm(e)}e=e.sibling}}function rh(e){if(e.tag===30)e.stateNode.paired=null,ya(e.child,!1),Zm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)rh(e),e=e.sibling;else Zm(e)}function pS(e){for(e=e.child;e!==null;)e.tag===30?ya(e.child,!1):(e.subtreeFlags&33554432)!==0&&pS(e),e=e.sibling}function eg(e,t,n,i,a,s,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(s!==null&&Wn<s.length){var c=s[Wn],f=u0(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&$S(l,Wn===0?n:n+"_"+Wn,a),o&&(e.flags&4)!==0||(fa===null&&(fa=[]),fa.push(l,Wn===0?i:i+"_"+Wn,t.memoizedProps)),Wn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:eg(e,t.child,n,i,a,s,r)&&(o=!0));t=t.sibling}return o}function mS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Ha(n,i),s=qa(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(Aw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Wn=0,a=eg(i,o,a,a,s,r,!1),(e.flags&4)!==0&&a&&(t||Ao(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&mS(e,t);e=e.sibling}}var fn=!1,ve=!1,la=!1,Kp=!1,Fy=typeof WeakSet=="function"?WeakSet:Set,dn=null,ca=!1,Fl=!1,Oh=!1,Jm=!1;function KA(e,t,n){if(e=e.containerInfo,o0=Uo,e=tb(e),w0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||s!==0&&u.nodeType!==3||(l=o+s),u!==r||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===s&&(l=o),d===r&&++p===a&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(l0={focusedElem:e,selectionRange:i},Uo=!1,n=(n&335544064)===n,dn=t,t=n?9270:1024;dn!==null;){if(e=dn,n&&(i=e.deletions,i!==null))for(s=0;s<i.length;s++)n&&Ym(i[s]);if(e.alternate===null&&(e.flags&2)!==0)n&&By(e),Gu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Ym(i),Gu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&By(e),Gu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,dn=i):(n&&dS(e),Gu(n))}}oi=null}function Gu(e){for(;dn!==null;){var t=dn,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=t.stateNode;try{var r=xr(t.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){be(t,t.return,o)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)h0(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":h0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Ha(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=qa(a.default,a.update),a!=="none"&&Bo(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(nt(163))}if(i=t.sibling,i!==null){i.return=t.return,dn=i;break}dn=t.return}}function gS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ua(e,n),i&4&&Mc(5,n);break;case 1:if(ua(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){be(n,n.return,r)}else{var a=xr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){be(n,n.return,r)}}i&64&&lS(n),i&512&&ha(n,n.return);break;case 3:if(ua(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_b(e,t)}catch(r){be(n,n.return,r)}}break;case 27:t===null&&i&4&&hS(n);case 26:case 5:ua(e,n),t===null&&i&4&&km(n),i&512&&ha(n,n.return);break;case 12:ua(e,n);break;case 31:ua(e,n),i&4&&xS(e,n);break;case 13:ua(e,n),i&4&&bS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=cw.bind(null,n),Gw(e,n))));break;case 22:if(i=n.memoizedState!==null||fn,!i){var s=t!==null&&t.memoizedState!==null||ve;t=fn,a=ve,fn=i,(ve=s)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Xi(e,n,i)):ua(e,n),fn=t,ve=a}break;case 30:ua(e,n),i&512&&ha(n,n.return);break;case 7:i&512&&ha(n,n.return);default:ua(e,n)}}function $m(e,t){for(e=e.child;e!==null;)vS(e,t),e=e.sibling}function vS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,s=e.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){be(e,e.return,l)}Km(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,le=!0}catch(l){be(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?ex(o,!0):ex(e.stateNode,!1)}catch(l){be(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&$m(e,t);break;default:$m(e,t)}}function Km(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:vS(n,i);break t;case 22:n.memoizedState===null&&Km(n,i);break t;default:Km(n,i)}}e=e.sibling}}function _S(e){var t=e.alternate;t!==null&&(e.alternate=null,_S(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,kn=!1;function ki(e,t,n){for(n=n.child;n!==null;)yS(e,t,n),n=n.sibling}function yS(e,t,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 26:ve||xn(n,t),ki(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ve&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ve||xn(n,t),Jl(n);var i=ze,a=kn;Us(n.type)&&(ze=n.stateNode,kn=!1),ki(e,t,n),r1(n.stateNode,n.type,n.memoizedProps),ze=i,kn=a;break;case 5:ve||xn(n,t),Jl(n);case 6:if(n.tag===6&&Jl(n),i=ze,a=kn,ze=null,ki(e,t,n),ze=i,kn=a,ze!==null)if(kn)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(n.stateNode),le=!0}catch(s){be(n,t,s)}else try{ze.removeChild(n.stateNode),le=!0}catch(s){be(n,t,s)}break;case 18:ze!==null&&(kn?(e=ze,tx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Lo(e)):tx(ze,n.stateNode));break;case 4:i=ze,a=kn,ze=n.stateNode.containerInfo,kn=!0,ki(e,t,n),ze=i,kn=a;break;case 0:case 11:case 14:case 15:Rs(2,n,t),ve||Rs(4,n,t),ki(e,t,n);break;case 1:ve||(xn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&cS(n,t,i)),ki(e,t,n);break;case 21:ki(e,t,n);break;case 22:ve=(i=ve)||n.memoizedState!==null,ki(e,t,n),ve=i;break;case 30:xn(n,t),ki(e,t,n);break;case 7:ve||xn(n,t),ki(e,t,n);break;default:ki(e,t,n)}}function xS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Lo(e)}catch(n){be(t,t.return,n)}}}function bS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(n){be(t,t.return,n)}}function QA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fy),t;default:throw Error(nt(435,e.tag))}}function ku(e,t){var n=QA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=uw.bind(null,e,i);i.then(a,a)}})}function In(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Us(l.type)){ze=l.stateNode,kn=!1;break t}break;case 5:ze=l.stateNode,kn=!1;break t;case 3:case 4:ze=l.stateNode.containerInfo,kn=!0;break t}l=l.return}if(ze===null)throw Error(nt(160));yS(r,o,s),ze=null,kn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)SS(t,e,n),t=t.sibling}var Wi=null;function SS(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}In(t,e,n),Pn(e),a&4&&(Rs(3,e,e.return),Mc(3,e),Rs(5,e,e.return));break;case 1:In(t,e,n),Pn(e),a&512&&(ve||i===null||xn(i,i.return)),a&64&&fn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(s=Wi,In(t,e,n),Pn(e),a&512&&(ve||i===null||xn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(fn)e.stateNode=JS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=s.ownerDocument||s;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[yc]||i[bn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),En(i,t,n),i[bn]=e,pn(i),t=i;break t;case"link":if(s=cx("link","href",a).get(t+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break e}}i=a.createElement(t),En(i,t,n),a.head.appendChild(i);break;case"meta":if(s=cx("meta","content",a).get(t+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break e}}i=a.createElement(t),En(i,t,n),a.head.appendChild(i);break;default:throw Error(nt(468,t))}i[bn]=e,pn(i),t=i}e.stateNode=t}else fn||p0(s,e.type,e.stateNode);else e.stateNode=lx(s,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||ve||t.parentNode.removeChild(t)):a.count--,n===null?fn||p0(s,e.type,e.stateNode):lx(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Jp(e,e.memoizedProps,i.memoizedProps);break;case 27:In(t,e,n),Pn(e),a&512&&(ve||i===null||xn(i,i.return)),i!==null&&a&4&&Jp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(s=la,la=!1,In(t,e,n),la=s,Pn(e),a&512&&(ve||i===null||xn(i,i.return)),e.flags&32){t=e.stateNode;try{Mo(t,""),le=!0}catch(f){be(e,e.return,f)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Jp(e,t,i!==null?i.memoizedProps:t)),a&1024&&(Kp=!0);break;case 6:if(In(t,e,n),Pn(e),a&4){if(e.stateNode===null)throw Error(nt(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,le=!0}catch(f){be(e,e.return,f)}}break;case 3:if(le=!1,uh=null,s=Wi,Wi=hc(t.containerInfo),In(t,e,n),Wi=s,Pn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Lo(t.containerInfo)}catch(f){be(e,e.return,f)}Kp&&(Kp=!1,MS(e)),le=!1;break;case 4:a=la,la=fn,i=W_(),s=Wi,Wi=hc(e.stateNode.containerInfo),In(t,e,n),Pn(e),Wi=s,le&&Fl&&(Oh=!0),le=i,la=a;break;case 12:In(t,e,n),Pn(e);break;case 31:In(t,e,n),Pn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:In(t,e,n),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(af=ci()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:s=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=fn,l=ve,c=la;fn=o||s,la=c||s,ve=l||r,In(t,e,n),ve=l,la=c,fn=o,Pn(e),a&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||i===null||r||fn||ve||(t=r||ve,n=fn,i=ve,fn=s||fn,ve=t,rs(e,2),fn=n,ve=i),!s&&la||$m(e,s)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:In(t,e,n),Pn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:a&512&&(ve||i===null||xn(i,i.return)),a=W_(),s=Fl,r=(n&335544064)===n,o=e.memoizedProps,Fl=r&&qa(o.default,o.update)!=="none",In(t,e,n),Pn(e),r&&i!==null&&le&&(e.flags|=4),Fl=s,le=a;break;case 21:break;case 7:a&512&&(ve||i===null||xn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:In(t,e,n),Pn(e)}}function Pn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(uS(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(tg(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(j0(a))break;a=a.return}var r=i;if(n==null)throw Error(nt(160));switch(n.tag){case 27:var o=n.stateNode,l=$p(e);Uh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Mo(c,""),n.flags&=-33);var f=$p(e);Uh(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=$p(e);Xm(e,u,p,r);break;default:throw Error(nt(161))}}catch(d){be(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function MS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;MS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Uo=!0,t.reset(),Uo=!1),e=e.sibling}}function Zr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)TS(t,e),t=t.sibling;else mS(t,!1)}function TS(e,t){var n=e.alternate;if(n===null)Wm(e,!1);else switch(e.tag){case 3:if(Jm=ca=!1,zy(),Zr(t,e),!ca&&!Oh){if(e=fa,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];KS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jm=!0}fa=null;break;case 5:Zr(t,e);break;case 4:i=ca,ca=!1,Zr(t,e),ca&&(Oh=!0),ca=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Wm(e,!1):Zr(t,e));break;case 30:i=ca,a=zy(),ca=!1,Zr(t,e),ca&&(e.flags|=4);var s=e.memoizedProps,r=e.stateNode;t=Ha(s,r),r=Ha(n.memoizedProps,r);var o=qa(s.default,s.update);o==="none"?t=!1:(s=n.memoizedState,n.memoizedState=null,n=e.child,Wn=0,t=eg(e,n,t,r,o,s,!0),Wn!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Ao(e,e.memoizedProps.onUpdate),fa=a):a!==null&&(a.push.apply(a,fa),fa=a),ca=(e.flags&32)!==0?!0:i;break;default:Zr(t,e)}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gS(e,t.alternate,t),t=t.sibling}function rs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Rs(4,n,n.return),rs(n,i);break;case 1:xn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cS(n,n.return,a),rs(n,i);break;case 27:(i&2)!==0&&r1(n.stateNode,n.type,n.memoizedProps);case 5:xn(n,n.return),n.tag!==5&&n.tag!==27||Jl(n),rs(n,i);break;case 6:Jl(n);break;case 26:xn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||ve||a.parentNode.removeChild(a),rs(n,i);break;case 22:n.memoizedState===null&&rs(n,i);break;case 30:xn(n,n.return),rs(n,i);break;case 7:xn(n,n.return);default:rs(n,i)}e=e.sibling}}function Xi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:Xi(a,s,n),Mc(4,s);break;case 1:if(Xi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(f){be(i,i.return,f)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)vb(c[a],l)}catch(f){be(i,i.return,f)}}o&&r&64&&lS(s),ha(s,s.return);break;case 27:(n&2)!==0&&hS(s);case 5:s.tag!==5&&s.tag!==27||Py(s),Xi(a,s,n),o&&i===null&&r&4&&km(s),ha(s,s.return);break;case 6:Py(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||fn||p0(hc(l.ownerDocument),s.type,l),Xi(a,s,n),o&&i===null&&r&4&&km(s),ha(s,s.return);break;case 12:Xi(a,s,n);break;case 31:Xi(a,s,n),o&&r&4&&xS(a,s);break;case 13:Xi(a,s,n),o&&r&4&&bS(a,s);break;case 22:s.memoizedState===null&&Xi(a,s,n),ha(s,s.return);break;case 30:Xi(a,s,n),ha(s,s.return);break;case 7:ha(s,s.return);default:Xi(a,s,n)}t=t.sibling}}function ng(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bc(n))}function ig(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bc(e))}function Ti(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)ES(e,t,n,i),t=t.sibling;else a&&pS(t)}function ES(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&rh(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ti(e,t,n,i),s&2048&&Mc(9,t);break;case 1:Ti(e,t,n,i);break;case 3:Ti(e,t,n,i),a&&Jm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&bc(s)));break;case 12:if(s&2048){Ti(e,t,n,i),s=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(c){be(t,t.return,c)}}else Ti(e,t,n,i);break;case 31:Ti(e,t,n,i);break;case 13:Ti(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&rh(o),r._visibility&2?Ti(e,t,n,i):$l(e,t)):(a&&o!==null&&o.memoizedState!==null&&rh(t),r._visibility&2?Ti(e,t,n,i):(r._visibility|=2,$r(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),s&2048&&ng(o,t);break;case 24:Ti(e,t,n,i),s&2048&&ig(t.alternate,t);break;case 30:a&&(s=t.alternate,s!==null&&(ya(s.child,!0),ya(t.child,!0))),Ti(e,t,n,i);break;default:Ti(e,t,n,i)}}function $r(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:$r(s,r,o,l,a),Mc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?$r(s,r,o,l,a):$l(s,r):(f._visibility|=2,$r(s,r,o,l,a)),a&&c&2048&&ng(r.alternate,r);break;case 24:$r(s,r,o,l,a),a&&c&2048&&ig(r.alternate,r);break;default:$r(s,r,o,l,a)}t=t.sibling}}function $l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:$l(n,i),a&2048&&ng(i.alternate,i);break;case 24:$l(n,i),a&2048&&ig(i.alternate,i);break;default:$l(n,i)}t=t.sibling}}var rr=8192;function ir(e,t,n){if(e.subtreeFlags&rr)for(e=e.child;e!==null;)AS(e,t,n),e=e.sibling}function AS(e,t,n){switch(e.tag){case 26:ir(e,t,n),e.flags&rr&&(e.memoizedState!==null?nC(n,Wi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&hx(n,e)));break;case 5:ir(e,t,n),e.flags&rr&&(e=e.stateNode,(t&335544128)===t&&hx(n,e));break;case 3:case 4:var i=Wi;Wi=hc(e.stateNode.containerInfo),ir(e,t,n),Wi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rr,rr=16777216,ir(e,t,n),rr=i):ir(e,t,n));break;case 30:if((e.flags&rr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,oi===null&&(oi=new Map),oi.set(i,a)}ir(e,t,n);break;default:ir(e,t,n)}}function wS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ul(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,RS(i,e)}wS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)CS(e),e=e.sibling}function CS(e){switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&Rs(9,e,e.return);break;case 3:Ul(e);break;case 12:Ul(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,oh(e)):Ul(e);break;default:Ul(e)}}function oh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,RS(i,e)}wS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rs(8,t,t.return),oh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,oh(t));break;default:oh(t)}e=e.sibling}}function RS(e,t){for(;dn!==null;){var n=dn;switch(n.tag){case 0:case 11:case 15:Rs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:bc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,dn=i;else t:for(n=e;dn!==null;){i=dn;var a=i.sibling,s=i.return;if(_S(i),i===n){dn=null;break t}if(a!==null){a.return=s,dn=a;break t}dn=s}}}var jA={getCacheForType:function(e){var t=Sn(je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Sn(je).controller.signal}},tw=typeof WeakMap=="function"?WeakMap:Map,ue=0,Ce=null,Qt=null,te=0,ye=0,ai=null,ds=!1,zo=!1,ag=!1,Xa=0,Ge=0,Ns=0,dr=0,Ih=0,li=0,Eo=0,Kl=null,Xn=null,Qm=!1,af=0,NS=0,Ph=1/0,Bh=null,Ss=null,Fe=0,Yi=null,br=null,_a=0,jm=0,t0=null,DS=null,_o=null,yo=null,xo=null,Ql=0,lh=null;function fi(){return(ue&2)!==0&&te!==0?te&-te:It.T!==null?rg():Ix()}function US(){if(li===0)if((te&536870912)===0||Jt){var e=Nu;Nu<<=1,(Nu&3932160)===0&&(Nu=262144),li=e}else li=536870912;return e=An.current,e!==null&&(e.flags|=32),li}function Ao(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=jS(Ha(e.memoizedProps,n))),yo===null&&(yo=[]),yo.push(t.bind(null,i))}}function Yn(e,t,n){(e===Ce&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(wo(e,0),ps(e,te,li,!1)),_c(e,n),((ue&2)===0||e!==Ce)&&(e===Ce&&((ue&2)===0&&(dr|=n),Ge===4&&ps(e,te,li,!1)),ba(e))}function LS(e,t,n){if((ue&6)!==0)throw Error(nt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vc(e,t),a=i?iw(e,t):Qp(e,t,!0),s=i;do{if(a===0){zo&&!i&&ps(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!ew(n)){a=Qp(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Kl;var l=o.current.memoizedState.isDehydrated;if(l&&(wo(o,r).flags|=256),r=Qp(o,r,!1),r!==2&&r!==6){if(ag&&!l){o.errorRecoveryDisabledLanes|=s,dr|=s,a=4;break t}s=Xn,Xn=a,s!==null&&(Xn===null?Xn=s:Xn.push.apply(Xn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){wo(e,0),ps(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(nt(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ps(i,t,li,!ds);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(nt(329))}if((t&62914560)===t&&(a=af+300-ci(),10<a)){if(ps(i,t,li,!ds),kh(i,0,!0)!==0)break t;_a=t,i.timeoutHandle=lg(Hy.bind(null,i,n,Xn,Bh,Qm,t,li,dr,Eo,ds,s,"Throttled",-0,0),a);break t}Hy(i,n,Xn,Bh,Qm,t,li,dr,Eo,ds,s,null,-0,0)}}break}while(!0);ba(e)}function Hy(e,t,n,i,a,s,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,M=(s&335544064)===s;if(p=null,(M||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},oi=null,AS(t,s,p),M&&(v=p,M=e.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(v.count++,v.waitingForViewTransition=!0,v=fc.bind(v),M.finished.then(v,v))),v=(s&62914560)===s?af-ci():(s&4194048)===s?NS-ci():0,v=iC(p,v),v!==null)){_a=s,e.cancelPendingCommit=v(Gy.bind(null,e,t,s,n,i,a,r,o,l,c,f,p,null,u,d)),ps(e,s,r,!c);return}Gy(e,t,s,n,i,a,r,o,l,c,f,p)}function ew(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!di(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ps(e,t,n,i){t=Nx(e,t),t&=~Ih,t&=~dr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-hi(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Ux(e,n,t)}function sf(){return(ue&6)===0?(Tc(0,!1),!1):!0}function sg(){if(Qt!==null){if(ye===0)var e=Qt.return;else e=Qt,Pa=Ar=null,G0(e),mo=null,sc=0,e=Qt;for(;e!==null;)oS(e.alternate,e),e=e.return;Qt=null}}function wo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Mw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_a=0,sg(),Ce=e,Qt=n=Ba(e.current,null),te=t,ye=0,ai=null,ds=!1,zo=vc(e,t),ag=!1,Eo=li=Ih=dr=Ns=Ge=0,Xn=Kl=null,Qm=!1,Xa=Nx(e,t),Zh(),n}function OS(e,t){qt=null,It.H=Rh,t===Po||t===Kh?(t=dy(),ye=3):t===O0?(t=dy(),ye=4):ye=t===$0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ai=t,Qt===null&&(Ge=1,Nh(e,Ri(t,e.current)))}function IS(){var e=An.current;return e===null?!0:(te&4194048)===te?Nn===null:(te&62914560)===te||(te&536870912)!==0?e===Nn:!1}function PS(){var e=It.H;return It.H=Rh,e===null?Rh:e}function BS(){var e=It.A;return It.A=jA,e}function zh(){Ge=4,ds||(te&4194048)!==te&&An.current!==null||(zo=!0),(Ns&134217727)===0&&(dr&134217727)===0||Ce===null||ps(Ce,te,li,!1)}function Qp(e,t,n){var i=ue;ue|=2;var a=PS(),s=BS();(Ce!==e||te!==t)&&(Bh=null,wo(e,t)),t=!1;var r=Ge;t:do try{if(ye!==0&&Qt!==null){var o=Qt,l=ai;switch(ye){case 8:sg(),r=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(t=!0);var c=ye;if(ye=0,ai=null,co(e,o,l,c),n&&zo){r=0;break t}break;default:c=ye,ye=0,ai=null,co(e,o,l,c)}}nw(),r=Ge;break}catch(f){OS(e,f)}while(!0);return t&&e.shellSuspendCounter++,Pa=Ar=null,ue=i,It.H=a,It.A=s,Qt===null&&(Ce=null,te=0,Zh()),r}function nw(){for(;Qt!==null;)zS(Qt)}function iw(e,t){var n=ue;ue|=2;var i=PS(),a=BS();Ce!==e||te!==t?(Bh=null,Ph=ci()+500,wo(e,t)):zo=vc(e,t);t:do try{if(ye!==0&&Qt!==null){t=Qt;var s=ai;e:switch(ye){case 1:ye=0,ai=null,co(e,t,s,1);break;case 2:case 9:if(fy(s)){ye=0,ai=null,Vy(t);break}t=function(){ye!==2&&ye!==9||Ce!==e||(ye=7),ba(e)},s.then(t,t);break t;case 3:ye=7;break t;case 4:ye=5;break t;case 7:fy(s)?(ye=0,ai=null,Vy(t)):(ye=0,ai=null,co(e,t,s,7));break;case 5:var r=null;switch(Qt.tag){case 26:r=Qt.memoizedState;case 5:case 27:var o=Qt;if(r?c1(r):o.stateNode.complete){ye=0,ai=null;var l=o.sibling;if(l!==null)Qt=l;else{var c=o.return;c!==null?(Qt=c,rf(c)):Qt=null}break e}}ye=0,ai=null,co(e,t,s,5);break;case 6:ye=0,ai=null,co(e,t,s,6);break;case 8:sg(),Ge=6;break t;default:throw Error(nt(462))}}aw();break}catch(f){OS(e,f)}while(!0);return Pa=Ar=null,It.H=i,It.A=a,ue=n,Qt!==null?0:(Ce=null,te=0,Zh(),Ge)}function aw(){for(;Qt!==null&&!bE();)zS(Qt)}function zS(e){var t=rS(e.alternate,e,Xa);e.memoizedProps=e.pendingProps,t===null?rf(e):Qt=t}function Vy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ry(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=Ry(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:G0(t);var i=t;i===mn&&(Jt?(Sh(i),i.tag===5&&i.stateNode!=null&&(Oe=i.stateNode)):(Sh(i),Jt=!0));default:oS(n,t),t=Qt=lb(t,Xa),t=rS(n,t,Xa)}e.memoizedProps=e.pendingProps,t===null?rf(e):Qt=t}function co(e,t,n,i){Pa=Ar=null,G0(t),mo=null,sc=0;var a=t.return;try{if(WA(e,a,t,n,te)){Ge=1,Nh(e,Ri(n,e.current)),Qt=null;return}}catch(s){if(a!==null)throw Qt=a,s;Ge=1,Nh(e,Ri(n,e.current)),Qt=null;return}t.flags&32768?(Jt||i===1?e=!0:zo||(te&536870912)!==0?e=!1:(ds=e=!0,(i===2||i===9||i===3||i===6)&&(i=An.current,i!==null&&i.tag===13&&(i.flags|=16384))),FS(t,e)):rf(t)}function rf(e){var t=e;do{if((t.flags&32768)!==0){FS(t,ds);return}e=t.return;var n=JA(t.alternate,t,Xa);if(n!==null){Qt=n;return}if(t=t.sibling,t!==null){Qt=t;return}Qt=t=e}while(t!==null);Ge===0&&(Ge=5)}function FS(e,t){do{var n=$A(e.alternate,e);if(n!==null){n.flags&=32767,Qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Qt=e;return}Qt=e=n}while(e!==null);Ge=6,Qt=null}function Gy(e,t,n,i,a,s,r,o,l,c,f,p){e.cancelPendingCommit=null;do of();while(Fe!==0);if((ue&6)!==0)throw Error(nt(327));if(t!==null){if(t===e.current)throw Error(nt(177));e===Ce&&(Qt=Ce=null,te=0),br=t,Yi=e,_a=n,t0=a,DS=i,sw(e,t,n,r,o,l,p)}}function sw(e,t,n,i,a,s,r){var o=t.lanes|t.childLanes;if(jm=o,o|=C0,DE(e,n,o,i,a,s),yo=null,(n&335544064)===n?(xo=LA(e),i=10262):(xo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,hw(vh,function(){return a0(),null})):(e.callbackNode=null,e.callbackPriority=0),Lh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null,a=he.p,he.p=2,s=ue,ue|=4;try{KA(e,t,n)}finally{ue=s,he.p=a,It.T=i}}Fe=1,Lh?_o=Rw(r,e.containerInfo,xo,e0,n0,ow,i0,a0,rw,null,null):(e0(),n0(),i0())}function rw(e){if(Fe!==0){var t=Yi.onRecoverableError;t(e,{componentStack:null})}}function ow(){Fe===3&&(Fe=0,TS(br,Yi),Fe=4)}function e0(){if(Fe===1){Fe=0;var e=Yi,t=br,n=_a,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null;var a=he.p;he.p=2;var s=ue;ue|=4;try{Fl=Oh=!1,SS(t,e,n),n=l0;var r=tb(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&jx(o.ownerDocument.documentElement,o)){if(l!==null&&w0(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),g=l.end===void 0?M:Math.min(l.end,v);!d.extend&&M>g&&(r=g,g=M,M=r);var h=ay(o,M),_=ay(o,g);if(h&&_&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var b=p.createRange();b.setStart(h.node,h.offset),d.removeAllRanges(),M>g?(d.addRange(b),d.extend(_.node,_.offset)):(b.setEnd(_.node,_.offset),d.addRange(b))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Uo=!!o0,l0=o0=null}finally{ue=s,he.p=a,It.T=i}}e.current=t,Fe=2}}function n0(){if(Fe===2){Fe=0;var e=Yi,t=br,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=It.T,It.T=null;var i=he.p;he.p=2;var a=ue;ue|=4;try{gS(e,t.alternate,t)}finally{ue=a,he.p=i,It.T=n}}Fe=3}}function i0(){if(Fe===4||Fe===3){Fe=0;var e=_o;_o=null,SE();var t=Yi,n=br,i=_a,a=DS,s=(i&335544064)===i?10262:10256;if((n.subtreeFlags&s)!==0||(n.flags&s)!==0?Fe=5:(Fe=0,br=Yi=null,HS(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(Ss=null),b0(i),n=n.stateNode,ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(gc,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=It.T,s=he.p,he.p=2,It.T=null;try{for(var r=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];r(l.value,{componentStack:l.stack})}}finally{It.T=n,he.p=s}}if(a=yo,r=xo,xo=null,a!==null&&(yo=null,r===null&&(r=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(r),n!==void 0&&e.finished.finally(n);(_a&3)!==0&&of(),ba(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===lh?Ql++:(Ql=0,lh=t):(Ql=0,lh=null),Tc(0,!1)}}function HS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bc(t)))}function of(){return _o!==null&&(_o.skipTransition(),_o=null),e0(),n0(),i0(),a0()}function a0(){if(Fe!==5)return!1;var e=Yi,t=jm;jm=0;var n=b0(_a),i=It.T,a=he.p;try{he.p=32>n?32:n,It.T=null,n=t0,t0=null;var s=Yi,r=_a;if(Fe=0,br=Yi=null,_a=0,(ue&6)!==0)throw Error(nt(331));var o=ue;if(ue|=4,CS(s.current),ES(s,s.current,r,n),ue=o,Tc(0,!1),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(gc,s)}catch{}return!0}finally{he.p=a,It.T=i,HS(e,t)}}function ky(e,t,n){t=Ri(n,t),t=Bm(e.stateNode,t,2),e=ys(e,t,2),e!==null&&(_c(e,2),ba(e))}function be(e,t,n){if(e.tag===3)ky(e,e,n);else for(;t!==null;){if(t.tag===3){ky(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ss===null||!Ss.has(i))){e=Ri(n,e),n=eS(2),i=ys(t,n,2),i!==null&&(nS(n,i,t,e),_c(i,2),ba(i));break}}t=t.return}}function jp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new tw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(ag=!0,a.add(n),e=lw.bind(null,e,t,n),t.then(e,e))}function lw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ce===e&&(te&n)===n&&((Ge===4||Ge===3&&(te&62914560)===te&&300>ci()-af)&&(ue&2)===0?wo(e,0):Ih|=n,Eo===te&&(Eo=0)),ba(e)}function VS(e,t){t===0&&(t=Dx()),e=Er(e,t),e!==null&&(_c(e,t),ba(e))}function cw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),VS(e,n)}function uw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(nt(314))}i!==null&&i.delete(t),VS(e,n)}function hw(e,t){return y0(e,t)}var Co=null,Kr=null,s0=!1,Fh=!1,tm=!1,ms=0;function ba(e){e!==Kr&&e.next===null&&(Kr===null?Co=Kr=e:Kr=Kr.next=e),Fh=!0,s0||(s0=!0,dw())}function Tc(e,t){if(!tm&&Fh){tm=!0;do for(var n=!1,i=Co;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-hi(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Xy(i,s))}else s=te,s=kh(i,i===Ce?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||vc(i,s)||(n=!0,Xy(i,s));i=i.next}while(n);tm=!1}}function fw(){GS()}function GS(){Fh=s0=!1;var e=0;ms!==0&&Sw()&&(e=ms);for(var t=ci(),n=null,i=Co;i!==null;){var a=i.next,s=kS(i,t);s===0?(i.next=null,n===null?Co=a:n.next=a,a===null&&(Kr=n)):(n=i,(e!==0||(s&3)!==0)&&(Fh=!0)),i=a}Fe!==0&&Fe!==5||Tc(e,!1),ms!==0&&(ms=0)}function kS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-hi(s),o=1<<r,l=a[r];l===-1?((o&n)===0||(o&i)!==0)&&(a[r]=NE(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Ce,n=te,n=kh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Up(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Up(i),b0(n)){case 2:case 8:n=Cx;break;case 32:n=vh;break;case 268435456:n=Rx;break;default:n=vh}return i=XS.bind(null,e),n=y0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Up(i),e.callbackPriority=2,e.callbackNode=null,2}function XS(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(of()&&e.callbackNode!==n)return null;var i=te;return i=kh(e,e===Ce?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(LS(e,i,t),kS(e,ci()),e.callbackNode!=null&&e.callbackNode===n?XS.bind(null,e):null)}function Xy(e,t){if(of())return null;LS(e,t,!0)}function dw(){Tw(function(){(ue&6)!==0?y0(wx,fw):GS()})}function rg(){if(ms===0){var e=vr;e===0&&(e=Ru,Ru<<=1,(Ru&261888)===0&&(Ru=256)),ms=e}return ms}function Wy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$u(e)}function pw(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Wy((a[Jn]||null).action),r=i.submitter;r&&(t=(t=r[Jn]||null)?Wy(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Wh("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ms!==0){var l=new FormData(a,r);Im(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(a,r),Im(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(Xu=0;Xu<Tm.length;Xu++)Wu=Tm[Xu],qy=Wu.toLowerCase(),Yy=Wu[0].toUpperCase()+Wu.slice(1),Zi(qy,"on"+Yy);var Wu,qy,Yy,Xu;Zi(nb,"onAnimationEnd");Zi(ib,"onAnimationIteration");Zi(ab,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(EA,"onTransitionRun");Zi(AA,"onTransitionStart");Zi(wA,"onTransitionCancel");Zi(sb,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lc));function WS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){yh(f)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){yh(f)}a.currentTarget=null,s=l}}}}function Kt(e,t){var n=t[V_];n===void 0&&(n=t[V_]=new Set);var i=e+"__bubble";n.has(i)||(qS(t,e,2,!1),n.add(i))}function em(e,t,n){var i=0;t&&(i|=4),qS(n,e,i,t)}var qu="_reactListening"+Math.random().toString(36).slice(2);function og(e){if(!e[qu]){e[qu]=!0,Bx.forEach(function(n){n!=="selectionchange"&&(mw.has(n)||em(n,!1,e),em(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qu]||(t[qu]=!0,em("selectionchange",!1,t))}}function qS(e,t,n,i){switch(g1(t)){case 2:var a=oC;break;case 8:a=lC;break;default:a=pg}n=a.bind(null,t,n,e),a=void 0,!xm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function nm(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=or(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}Wx(function(){var c=s,f=M0(n),p=[];t:{var u=rb.get(e);if(u!==void 0){var d=Wh,v=e;switch(e){case"keypress":if(Qu(n)===0)break t;case"keydown":case"keyup":d=eA;break;case"focusin":v="focus",d=zp;break;case"focusout":v="blur",d=zp;break;case"beforeblur":case"afterblur":d=zp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=J_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=kE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=rA;break;case nb:case ib:case ab:d=qE;break;case sb:d=lA;break;case"scroll":case"scrollend":d=VE;break;case"wheel":d=uA;break;case"copy":case"cut":case"paste":d=ZE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=K_;break;case"submit":d=aA;break;case"toggle":case"beforetoggle":d=fA}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),h=M?u!==null?u+"Capture":null:u;M=[];for(var _=c,b;_!==null;){var y=_;if(b=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||b===null||h===null||(y=tc(_,h),y!=null&&M.push(cc(_,y,b))),g)break;_=_.return}0<M.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==ym&&(v=n.relatedTarget||n.fromElement)&&(or(v)||v[Oo]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?or(d):null,d!==null&&(g=mc(d),M=d.tag,d!==g||M!==5&&M!==27&&M!==6)&&(d=null)):(u=null,d=c),u!==d&&(M=J_,y="onMouseLeave",h="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(M=K_,y="onPointerLeave",h="onPointerEnter",_="pointer"),g=u==null?v:Bl(u),b=d==null?v:Bl(d),v=new M(y,_+"leave",u,n,f),v.target=g,v.relatedTarget=b,y=null,or(f)===c&&(M=new M(h,_+"enter",d,n,f),M.target=b,M.relatedTarget=g,y=M),g=y,M=u&&d?om(u,d,gw):null,u!==null&&Zy(p,v,u,M,!1),d!==null&&g!==null&&Zy(p,g,d,M,!0)))}t:{if(u=c?Bl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=ey;else if(ty(u))if(Kx)T=SA;else{T=xA;var E=yA}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&S0(c.elementType)&&(T=ey):T=bA;if(T&&(T=T(e,c))){$x(p,T,n,f);break t}E&&E(e,u,c)}switch(E=c?Bl(c):window,e){case"focusin":(ty(E)||E.contentEditable==="true")&&(io=E,Sm=c,Gl=null);break;case"focusout":Gl=Sm=io=null;break;case"mousedown":Mm=!0;break;case"contextmenu":case"mouseup":case"dragend":Mm=!1,sy(p,n,f);break;case"selectionchange":if(TA)break;case"keydown":case"keyup":sy(p,n,f)}var C;if(A0)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else no?Zx(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Yx&&n.locale!=="ko"&&(no||x!=="onCompositionStart"?x==="onCompositionEnd"&&no&&(C=qx()):(hs=f,T0="value"in hs?hs.value:hs.textContent,no=!0)),E=Hh(c,x),0<E.length&&(x=new $_(x,e,null,n,f),p.push({event:x,listeners:E}),C?x.data=C:(C=Jx(n),C!==null&&(x.data=C)))),(C=pA?mA(e,n):gA(e,n))&&(x=Hh(c,"onBeforeInput"),0<x.length&&(E=new $_("onBeforeInput","beforeinput",null,n,f),p.push({event:E,listeners:x}),E.data=C)),pw(p,e,c,n,f)}WS(p,t)})}function cc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hh(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=tc(e,n),a!=null&&i.unshift(cc(e,a,s)),a=tc(e,t),a!=null&&i.push(cc(e,a,s))),e.tag===3)return i;e=e.return}return[]}function gw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zy(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=tc(n,s),c!=null&&r.unshift(cc(n,c,l))):a||(c=tc(n,s),c!=null&&r.push(cc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var vw=/\r\n?/g,_w=/\u0000|\uFFFD/g;function Jy(e){return(typeof e=="string"?e:""+e).replace(vw,`
`).replace(_w,"")}function YS(e,t){return t=Jy(t),Jy(e)===t}function xe(e,t,n,i,a,s){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Mo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Mo(e,""+i);else return;break;case"className":Uu(e,"class",i);break;case"tabIndex":Uu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Uu(e,n,i);break;case"style":Xx(e,i,s);return;case"data":if(t!=="object"){Uu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$u(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&xe(e,t,"name",a.name,a,null),xe(e,t,"formEncType",a.formEncType,a,null),xe(e,t,"formMethod",a.formMethod,a,null),xe(e,t,"formTarget",a.formTarget,a,null)):(xe(e,t,"encType",a.encType,a,null),xe(e,t,"method",a.method,a,null),xe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$u(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=pa);return;case"onScroll":i!=null&&Kt("scroll",e);return;case"onScrollEnd":i!=null&&Kt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(nt(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=$u(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Kt("beforetoggle",e),Kt("toggle",e),Ju(e,"popover",i);break;case"xlinkActuate":La(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":La(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":La(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":La(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":La(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":La(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":La(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":La(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":La(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ju(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=FE.get(n)||n,Ju(e,n,i);else return}le=!0}function r0(e,t,n,i,a,s){switch(n){case"style":Xx(e,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(nt(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Mo(e,i);else if(typeof i=="number"||typeof i=="bigint")Mo(e,""+i);else return;break;case"onScroll":i!=null&&Kt("scroll",e);return;case"onScrollEnd":i!=null&&Kt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=pa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),t=e[Jn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(s,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(s,i,a);break t}le=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ju(e,n,i)}return}le=!0}function En(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Kt("error",e),Kt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:xe(e,t,s,r,n,null)}}a&&xe(e,t,"srcSet",n.srcSet,n,null),i&&xe(e,t,"src",n.src,n,null);return;case"input":Kt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(nt(137,t));break;default:xe(e,t,i,f,n,null)}}Vx(e,s,o,l,c,r,a,!1);return;case"select":Kt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:xe(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?ho(e,!!i,t,!1):n!=null&&ho(e,!!i,n,!0);return;case"textarea":Kt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(nt(91));break;default:xe(e,t,r,o,n,null)}kx(e,i,a,s);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":xe(e,t,l,i,n,null));return;case"dialog":Kt("beforetoggle",e),Kt("toggle",e),Kt("cancel",e),Kt("close",e);break;case"iframe":case"object":Kt("load",e);break;case"video":case"audio":for(i=0;i<lc.length;i++)Kt(lc[i],e);break;case"image":Kt("error",e),Kt("load",e);break;case"details":Kt("toggle",e);break;case"embed":case"source":case"link":Kt("error",e),Kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:xe(e,t,c,i,n,null)}return;default:if(S0(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&r0(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&xe(e,t,o,i,n,null))}var yw={};function xw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||xe(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(le=!0),s=d;break;case"name":d!==p&&(le=!0),a=d;break;case"checked":d!==p&&(le=!0),c=d;break;case"defaultChecked":d!==p&&(le=!0),f=d;break;case"value":d!==p&&(le=!0),r=d;break;case"defaultValue":d!==p&&(le=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(nt(137,t));break;default:d!==p&&xe(e,t,u,d,i,p)}}_m(e,r,o,l,c,f,s,a);return;case"select":d=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(s)||xe(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":s!==l&&(le=!0),u=s;break;case"defaultValue":s!==l&&(le=!0),o=s;break;case"multiple":s!==l&&(le=!0),r=s;default:s!==l&&xe(e,t,a,s,i,l)}t=o,n=r,i=d,u!=null?ho(e,!!n,u,!1):!!i!=!!n&&(t!=null?ho(e,!!n,t,!0):ho(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:xe(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(le=!0),u=a;break;case"defaultValue":a!==s&&(le=!0),d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(nt(91));break;default:a!==s&&xe(e,t,r,a,i,s)}Gx(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:xe(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(le=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):xe(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&xe(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(nt(137,t));break;default:xe(e,t,c,u,i,d)}return;default:if(S0(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&r0(e,t,g,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||r0(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&xe(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||xe(e,t,p,u,i,d)}function $y(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&$y(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&$y(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var o0=null,l0=null;function uc(e){return e.nodeType===9?e:e.ownerDocument}function Ky(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ZS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function JS(e,t,n,i){return n=uc(n).createElement(e),n[bn]=i,n[Jn]=t,En(n,e,t),pn(n),n}function c0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var im=null;function Sw(){var e=window.event;return e&&e.type==="popstate"?e===im?!1:(im=e,!0):(im=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,Mw=typeof clearTimeout=="function"?clearTimeout:void 0,Qy=typeof Promise=="function"?Promise:void 0,jy=typeof requestAnimationFrame=="function"?requestAnimationFrame:lg,Tw=typeof queueMicrotask=="function"?queueMicrotask:typeof Qy<"u"?function(e){return Qy.resolve(null).then(e).catch(Ew)}:lg;function Ew(e){setTimeout(function(){throw e})}function Us(e){return e==="head"}function tx(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Lo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")sm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,sm(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[yc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&sm(e.ownerDocument.body);n=a}while(n);Lo(t)}function ex(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function $S(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var s=t[a];0<s.width&&0<s.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function KS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function QS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function u0(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return QS(t,n,e)}function Aw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return QS(t,n,e)}function ww(e){return e.documentElement.clientHeight}function Cw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Rw(e,t,n,i,a,s,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var M=[];if(v==="loaded"&&(ww(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),v=M.length,e!==null)for(var g=e.suspenseyImages,h=0,_=0;_<g.length;_++){var b=g[_];if(!b.complete){var y=b.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=u1(b),h>hh){M.length=v;break}b=new Promise(Cw.bind(b)),M.push(b)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(T){return setTimeout(T,500)})]).then(a,a),(d?Promise.allSettled([d.finished,u]):u).then(s,s);if(a(),d)return d.finished.then(s,s);s()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],M=v.effect,g=M.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(v),v=M.getKeyframes();for(var h=g=void 0,_=!0,b=0;b<v.length;b++){var y=v[b],T=y.width;if(g===void 0)g=T;else if(g!==T){_=!1;break}if(T=y.height,h===void 0)h=T;else if(h!==T){_=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}_&&g!==void 0&&h!==void 0&&(M.setKeyframes(v),_=getComputedStyle(M.target,M.pseudoElement),_.width!==g||_.height!==h)&&(_=v[0],_.width=g,_.height=h,_=v[v.length-1],_.width=g,_.height=h,M.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),a(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),a(),r(),null}}function lr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}lr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Re({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};lr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===e&&s.pseudoElement===t&&i.push(n[a])}return i};lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function jS(e){return{name:e,group:new lr("group",e),imagePair:new lr("image-pair",e),old:new lr("old",e),new:new lr("new",e)}}function pi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(t1(s,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Ro(n),s.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),Zn(this._fragmentFiber.child,!1,Nw,e,o,i)}this._eventListeners=s}};function Nw(e,t,n,i){return on(e).addEventListener(t,n,i),!1}pi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=t1(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var s=a.cleanup;a=Ro(a.optionsOrUseCapture),Zn(this._fragmentFiber.child,!1,Dw,e,n,a),i.splice(t,1),s!==null&&s()}};function Dw(e,t,n,i){return on(e).removeEventListener(t,n,i),!1}function Ro(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function nx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function t1(e,t,n,i){if(e.length===0)return-1;i=nx(i);for(var a=0;a<e.length;a++){var s=e[a];if(s.type===t&&s.listener===n&&nx(s.optionsOrUseCapture)===i)return a}return-1}pi.prototype.dispatchEvent=function(e){var t=Sr(this._fragmentFiber);if(t===null)return!0;t=on(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,Ro(s.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,Ro(s.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};pi.prototype.focus=function(e){Zn(this._fragmentFiber.child,!0,e1,e,void 0,void 0)};function e1(e,t){return e.tag===6?!1:(e=on(e),kw(e,t))}pi.prototype.focusLast=function(e){var t=[];Zn(this._fragmentFiber.child,!0,cg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!e1(t[n],e);n--);};function cg(e,t){return t.push(e),!1}pi.prototype.blur=function(){var e=Sr(this._fragmentFiber);e!==null&&(e=on(e),e=uc(e).activeElement,e!==null&&Zn(this._fragmentFiber.child,!1,Uw,e,void 0,void 0))};function Uw(e,t){return e.tag===6?!1:(e=on(e),e===t||e.contains(t)?(t.blur(),!0):!1)}pi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Zn(this._fragmentFiber.child,!1,Lw,e,void 0,void 0)};function Lw(e,t){return e.tag===6||(e=on(e),t.observe(e)),!1}pi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Zn(this._fragmentFiber.child,!1,Ow,e,void 0,void 0);for(var n=t=0;n<qi.length;n++){var i=qi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):qi[t++]=i}qi.length=t}};function Ow(e,t){return e.tag===6||(e=on(e),t.unobserve(e)),!1}var qi=[],am=!1;function Iw(e,t,n){qi.push({fragmentInstance:e,observer:t,instance:n}),am||(am=!0,Xw(function(){am=!1;var i=qi;qi=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}pi.prototype.getClientRects=function(){var e=[];return Zn(this._fragmentFiber.child,!1,Pw,e,void 0,void 0),e};function Pw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=on(e),t.push.apply(t,e.getClientRects());return!1}pi.prototype.getRootNode=function(e){var t=Sr(this._fragmentFiber);return t===null?this:on(t).getRootNode(e)};pi.prototype.compareDocumentPosition=function(e){var t=Sr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Zn(this._fragmentFiber.child,!1,cg,n,void 0,void 0);var i=on(t);if(n.length===0){if(n=i,I_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Mx(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=on(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=on(n[0]),a=on(n[n.length-1]);var s=I_(this._fragmentFiber)?t.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||s&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!s&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Bw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Bw(e,t,n,i,a){var s=or(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)t:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){n=!0;break t}s=s.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;t:{for(s=t,t=Sr(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break t}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===n)&&(t=om(n,s,P_),t===null?t=!1:(Zn(t,!0,dE,s,n),s=Qr,Qr=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===i)&&(t=om(i,s,P_),t===null?t=!1:(Zn(t,!0,pE,s,i),s=Qr,rm=Qr=null,t=s!==null)),t):!1}function ix(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(nt(566));var t=[];Zn(this._fragmentFiber.child,!1,cg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Mx(this._fragmentFiber);if(i=n?i[1]||i[0]||Sr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=on(i),ix(e,n);return}if(i=on(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=on(a),ix(a,n)):on(a).scrollIntoView(e),i+=n?-1:1}};function zw(e,t){return e=on(e),n1(e,t),!1}function n1(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function i1(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,Ro(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<qi.length;o++){var l=qi[o];(l.fragmentInstance!==t||l.observer!==s||l.instance!==e)&&(qi[r++]=l)}qi.length=r,s.observe(e)}),n1(e,t))}function Fw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,Ro(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?Iw(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function h0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":h0(n),Xh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Hw(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[yc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function Vw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Di(e.nextSibling),e===null))return null;return e}function a1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Di(e.nextSibling),e===null))return null;return e}function f0(e){return e.data==="$?"||e.data==="$~"}function ug(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Di(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var d0=null;function ax(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Di(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function sx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function kw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Xw(e){jy(function(){jy(function(t){return e(t)})})}function s1(e,t,n){switch(t=uc(n),e){case"html":if(e=t.documentElement,!e)throw Error(nt(452));return e;case"head":if(e=t.head,!e)throw Error(nt(453));return e;case"body":if(e=t.body,!e)throw Error(nt(454));return e;default:throw Error(nt(451))}}function r1(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&xe(e,t,i,null,yw,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===pa&&(e.onclick=null),Xh(e)}function sm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xh(e)}var Ui=new Map,rx=new Set;function hc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ya=he.d;he.d={f:Ww,r:qw,D:Yw,C:Zw,L:Jw,m:$w,X:Qw,S:Kw,M:jw};function Ww(){var e=Ya.f(),t=sf();return e||t}function qw(e){var t=Io(e);t!==null&&t.tag===5&&t.type==="form"?Xb(t):Ya.r(e)}var Fo=typeof document>"u"?null:document;function o1(e,t,n){var i=Fo;if(i&&typeof t=="string"&&t){var a=Ci(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),rx.has(a)||(rx.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),En(t,"link",e),pn(t),i.head.appendChild(t)))}}function Yw(e){Ya.D(e),o1("dns-prefetch",e,null)}function Zw(e,t){Ya.C(e,t),o1("preconnect",e,t)}function Jw(e,t,n){Ya.L(e,t,n);var i=Fo;if(i&&e&&t){var a='link[rel="preload"][as="'+Ci(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ci(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ci(n.imageSizes)+'"]')):a+='[href="'+Ci(e)+'"]';var s=a;switch(t){case"style":s=No(e);break;case"script":s=Ho(e)}if(!(Ui.has(s)||(e=Re({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ui.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ec(s))||t==="script"&&i.querySelector(Ac(s))))){var r=i.createElement("link");En(r,"link",e),t==="style"&&(r[_h]=!0,r.onload=r.onerror=function(){Px(r)}),pn(r),i.head.appendChild(r)}}}function $w(e,t){Ya.m(e,t);var n=Fo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ci(i)+'"][href="'+Ci(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ho(e)}if(!Ui.has(s)&&(e=Re({rel:"modulepreload",href:e},t),Ui.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ac(s)))return}i=n.createElement("link"),En(i,"link",e),pn(i),n.head.appendChild(i)}}}function Kw(e,t,n){Ya.S(e,t,n);var i=Fo;if(i&&e){var a=uo(i).hoistableStyles,s=No(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ec(s)))o.loading=5;else{e=Re({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ui.get(s))&&hg(e,n);var l=r=i.createElement("link");pn(l),En(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ch(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function Qw(e,t){Ya.X(e,t);var n=Fo;if(n&&e){var i=uo(n).hoistableScripts,a=Ho(e),s=i.get(a);s||(s=n.querySelector(Ac(a)),s||(e=Re({src:e,async:!0},t),(t=Ui.get(a))&&fg(e,t),s=n.createElement("script"),pn(s),En(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function jw(e,t){Ya.M(e,t);var n=Fo;if(n&&e){var i=uo(n).hoistableScripts,a=Ho(e),s=i.get(a);s||(s=n.querySelector(Ac(a)),s||(e=Re({src:e,async:!0,type:"module"},t),(t=Ui.get(a))&&fg(e,t),s=n.createElement("script"),pn(s),En(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function ox(e,t,n,i){var a=(a=gs.current)?hc(a):null;if(!a)throw Error(nt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=No(n.href),t=uo(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=No(n.href);var s=uo(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Ec(e)))?s._p||(r.instance=s,r.state.loading=5):(s=Ui.get(e),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ui.set(e,s)),tC(a,e,s,r.state))),t&&i===null)throw Error(nt(528,""));return r}if(t&&i!==null)throw Error(nt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Ho(n),t=uo(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(nt(444,e))}}function No(e){return'href="'+Ci(e)+'"'}function Ec(e){return'link[rel="stylesheet"]['+e+"]"}function l1(e){return Re({},e,{"data-precedence":e.precedence,precedence:null})}function tC(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[_h]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[_h]=!0,t.onload=t.onerror=Px.bind(null,t),En(t,"link",n),pn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Ho(e){return'[src="'+Ci(e)+'"]'}function Ac(e){return"script[async]"+e}function lx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ci(n.href)+'"]');if(i)return t.instance=i,pn(i),i;var a=Re({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),pn(i),En(i,"style",a),ch(i,n.precedence,e),t.instance=i;case"stylesheet":a=No(n.href);var s=e.querySelector(Ec(a));if(s)return t.state.loading|=4,t.instance=s,pn(s),s;i=l1(n),(a=Ui.get(a))&&hg(i,a),s=(e.ownerDocument||e).createElement("link"),pn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),En(s,"link",i),t.state.loading|=4,ch(s,n.precedence,e),t.instance=s;case"script":return s=Ho(n.src),(a=e.querySelector(Ac(s)))?(t.instance=a,pn(a),a):(i=n,(a=Ui.get(s))&&(i=Re({},n),fg(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),pn(a),En(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(nt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ch(i,n.precedence,e));return t.instance}function ch(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function hg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var uh=null;function cx(e,t,n){if(uh===null){var i=new Map,a=uh=new Map;a.set(n,i)}else a=uh,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[yc]||s[bn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function p0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function eC(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ux(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function c1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function u1(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function hx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=u1(t),e.suspenseyImages.push(t)),e=aC.bind(e),t.decode().then(e,e))}function nC(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=No(i.href),s=t.querySelector(Ec(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,pn(s);return}s=t.ownerDocument||t,i=l1(i),(a=Ui.get(a))&&hg(i,a),s=s.createElement("link"),pn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),En(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=fc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hh=0;function iC(e,t){return e.stylesheets&&e.count===0&&fh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&fh(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&hh===0&&(hh=62500*bw());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fh(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>hh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function h1(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)fh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function fc(){this.count--,h1(this)}function aC(){this.imgCount--,h1(this)}var Vh=null;function fh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vh=new Map,t.forEach(sC,e),Vh=null,fc.call(e))}function sC(e,t){if(!(t.state.loading&4)){var n=Vh.get(e);if(n)var i=n.get(null);else{n=new Map,Vh.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=fc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Do={$$typeof:da,Provider:null,Consumer:null,_currentValue:cr,_currentValue2:cr,_threadCount:0};function rC(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lp(0),this.hiddenUpdates=Lp(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function f1(e,t,n,i,a,s,r,o,l,c,f,p){return e=new rC(e,t,n,r,l,c,f,p,o),t=1,s===!0&&(t|=24),s=qn(3,null,null,t),e.current=s,s.stateNode=e,t=U0(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},I0(s),e}function d1(e){return e?(e=ro,e):ro}function p1(e,t,n,i,a,s){a=d1(a),i.context===null?i.context=a:i.pendingContext=a,i=_s(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=ys(e,i,t),n!==null&&(Yn(n,e,t),Xl(n,e,t))}function fx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dg(e,t){fx(e,t),(e=e.alternate)&&fx(e,t)}function m1(e){if(e.tag===13||e.tag===31){var t=Er(e,67108864);t!==null&&Yn(t,e,67108864),dg(e,67108864)}}function dx(e){if(e.tag===13||e.tag===31){var t=fi();t=x0(t);var n=Er(e,t);n!==null&&Yn(n,e,t),dg(e,t)}}var Uo=!0;function oC(e,t,n,i){var a=It.T;It.T=null;var s=he.p;try{he.p=2,pg(e,t,n,i)}finally{he.p=s,It.T=a}}function lC(e,t,n,i){var a=It.T;It.T=null;var s=he.p;try{he.p=8,pg(e,t,n,i)}finally{he.p=s,It.T=a}}function pg(e,t,n,i){if(Uo){var a=m0(i);if(a===null)nm(e,t,i,Gh,n),px(e,i);else if(uC(a,e,t,n,i))i.stopPropagation();else if(px(e,i),t&4&&-1<cC.indexOf(e)){for(;a!==null;){var s=Io(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ar(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-hi(r);o.entanglements[1]|=l,r&=~l}ba(s),(ue&6)===0&&(Ph=ci()+500,Tc(0,!1))}}break;case 31:case 13:o=Er(s,2),o!==null&&Yn(o,s,2),sf(),dg(s,2)}if(s=m0(i),s===null&&nm(e,t,i,Gh,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else nm(e,t,i,null,n)}}function m0(e){return e=M0(e),mg(e)}var Gh=null;function mg(e){if(Gh=null,e=or(e),e!==null){var t=mc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=xx(t),e!==null)return e;e=null}else if(n===31){if(e=bx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gh=e,null}function g1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ME()){case wx:return 2;case Cx:return 8;case vh:case TE:return 32;case Rx:return 268435456;default:return 32}default:return 32}}var g0=!1,Ms=null,Ts=null,Es=null,dc=new Map,pc=new Map,cs=[],cC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function px(e,t){switch(e){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Ts=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":dc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pc.delete(t.pointerId)}}function Ll(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Io(t),t!==null&&m1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function uC(e,t,n,i,a){switch(t){case"focusin":return Ms=Ll(Ms,e,t,n,i,a),!0;case"dragenter":return Ts=Ll(Ts,e,t,n,i,a),!0;case"mouseover":return Es=Ll(Es,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return dc.set(s,Ll(dc.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,pc.set(s,Ll(pc.get(s)||null,e,t,n,i,a)),!0}return!1}function v1(e){var t=or(e.target);if(t!==null){var n=mc(t);if(n!==null){if(t=n.tag,t===13){if(t=xx(n),t!==null){e.blockedOn=t,H_(e.priority,function(){dx(n)});return}}else if(t===31){if(t=bx(n),t!==null){e.blockedOn=t,H_(e.priority,function(){dx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=m0(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ym=i,n.target.dispatchEvent(i),ym=null}else return t=Io(n),t!==null&&m1(t),e.blockedOn=n,!1;t.shift()}return!0}function mx(e,t,n){dh(e)&&n.delete(t)}function hC(){g0=!1,Ms!==null&&dh(Ms)&&(Ms=null),Ts!==null&&dh(Ts)&&(Ts=null),Es!==null&&dh(Es)&&(Es=null),dc.forEach(mx),pc.forEach(mx)}function Yu(e,t){e.blockedOn===t&&(e.blockedOn=null,g0||(g0=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,hC)))}var Zu=null;function gx(e){Zu!==e&&(Zu=e,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,function(){Zu===e&&(Zu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(mg(i||n)===null)continue;break}var s=Io(n);s!==null&&(e.splice(t,3),t-=3,Im(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Lo(e){function t(l){return Yu(l,e)}Ms!==null&&Yu(Ms,e),Ts!==null&&Yu(Ts,e),Es!==null&&Yu(Es,e),dc.forEach(t),pc.forEach(t);for(var n=0;n<cs.length;n++){var i=cs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<cs.length&&(n=cs[0],n.blockedOn===null);)v1(n),n.blockedOn===null&&cs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Jn]||null;if(typeof s=="function")r||gx(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Jn]||null)o=r.formAction;else if(mg(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),gx(n)}}}function _1(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function gg(e){this._internalRoot=e}lf.prototype.render=gg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(nt(409));var n=t.current,i=fi();p1(n,i,e,t,null,null)};lf.prototype.unmount=gg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;p1(e.current,2,null,e,null,null),sf(),t[Oo]=null}};function lf(e){this._internalRoot=e}lf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ix();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cs.length&&t!==0&&t<cs[n].priority;n++);cs.splice(n,0,e),n===0&&v1(e)}};var vx=_x.version;if(vx!=="19.3.1")throw Error(nt(527,vx,"19.3.1"));he.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(nt(188)):(e=Object.keys(e).join(","),Error(nt(268,e)));return e=fE(t),e=e!==null?Sx(e):null,e=e===null?null:e.stateNode,e};var fC={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:It,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ol.isDisabled&&Ol.supportsFiber))try{gc=Ol.inject(fC),ui=Ol}catch{}var Ol;cf.createRoot=function(e,t){if(!yx(e))throw Error(nt(299));var n=!1,i="",a=Qb,s=jb,r=tS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=f1(e,1,!1,null,null,n,i,null,a,s,r,_1),e[Oo]=t.current,og(e),new gg(t)};cf.hydrateRoot=function(e,t,n){if(!yx(e))throw Error(nt(299));var i=!1,a="",s=Qb,r=jb,o=tS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=f1(e,1,!0,t,n??null,i,a,l,s,r,o,_1),t.context=d1(null),n=t.current,i=fi(),i=x0(i),a=_s(i),a.callback=null,ys(n,a,i),n=i,t.current.lanes=n,_c(t,n),ba(t),e[Oo]=t.current,og(e),new lf(t)};cf.version="19.3.1"});var S1=ra((pL,b1)=>{"use strict";function x1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x1)}catch(e){console.error(e)}}x1(),b1.exports=y1()});var sT=ra(ap=>{"use strict";var VD=Symbol.for("react.transitional.element"),GD=Symbol.for("react.fragment");function aT(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:VD,type:e,key:i,ref:t!==void 0?t:null,props:n}}ap.Fragment=GD;ap.jsx=aT;ap.jsxs=aT});var Hi=ra((uB,rT)=>{"use strict";rT.exports=sT()});var nn=hn(Da(),1),CT=hn(S1(),1);var Ks=hn(Da(),1);var ei=hn(Da(),1);var G1=0,Wg=1,k1=2;var Jc=1,X1=2,ol=3,Ws=0,Hn=1,Ca=2,Bi=0,ll=1,qg=2,Yg=3,Zg=4,W1=5;var Pr=100,q1=101,Y1=102,Z1=103,J1=104,$1=200,K1=201,Q1=202,j1=203,Jg=204,$g=205,tM=206,eM=207,nM=208,iM=209,aM=210,sM=211,rM=212,oM=213,lM=214,Df=0,Uf=1,Lf=2,el=3,Of=4,If=5,Pf=6,Bf=7,Kg=0,cM=1,uM=2,ta=0,Qg=1,jg=2,tv=3,ev=4,nv=5,iv=6,av=7;var sv=300,qs=301,Br=302,ld=303,cd=304,$c=306,zf=1e3,Ma=1001,Ff=1002,vn=1003,hM=1004;var Kc=1005;var wn=1006,ud=1007;var Ys=1008;var yi=1009,rv=1010,ov=1011,cl=1012,hd=1013,ea=1014,na=1015,ia=1016,fd=1017,dd=1018,ul=1020,lv=35902,cv=35899,uv=1021,hv=1022,zi=1023,Ta=1026,Zs=1027,fv=1028,pd=1029,Js=1030,md=1031;var gd=1033,Qc=33776,jc=33777,tu=33778,eu=33779,vd=35840,_d=35841,yd=35842,xd=35843,bd=36196,Sd=37492,Md=37496,Td=37488,Ed=37489,nu=37490,Ad=37491,wd=37808,Cd=37809,Rd=37810,Nd=37811,Dd=37812,Ud=37813,Ld=37814,Od=37815,Id=37816,Pd=37817,Bd=37818,zd=37819,Fd=37820,Hd=37821,Vd=36492,Gd=36494,kd=36495,Xd=36283,Wd=36284,iu=36285,qd=36286;var Uc=2300,Hf=2301,Rf=2302,Fg=2303,Hg=2400,Vg=2401,Gg=2402;var fM=3200;var dv=0,dM=1,Fi="",vi="srgb",Lc="srgb-linear",Oc="linear",_e="srgb";var Nf=7680;var pM=519,mM=512,gM=513,vM=514,Yd=515,_M=516,yM=517,Zd=518,xM=519,bM=35044;var pv="300 es",ji=2e3,Ic=2001;function dC(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Pc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function SM(){let e=Pc("canvas");return e.style.display="block",e}var M1={},nl=null;function mv(...e){let t="THREE."+e.shift();nl?nl("log",t,...e):console.log(t,...e)}function MM(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ot(...e){e=MM(e);let t="THREE."+e.shift();if(nl)nl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Pt(...e){e=MM(e);let t="THREE."+e.shift();if(nl)nl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ur(...e){let t=e.join(" ");t in M1||(M1[t]=!0,Ot(...e))}function TM(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var EM={[Df]:Uf,[Lf]:Pf,[Of]:Bf,[el]:If,[Uf]:Df,[Pf]:Lf,[Bf]:Of,[If]:el},Ea=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vg=Math.PI/180,Vf=180/Math.PI;function au(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[e&255]+Dn[e>>8&255]+Dn[e>>16&255]+Dn[e>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function ie(e,t,n){return Math.max(t,Math.min(n,e))}function mC(e,t){return(e%t+t)%t}function _g(e,t,n){return(1-n)*e+n*t}function wc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ae=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Aa=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],f=i[a+2],p=i[a+3],u=s[r+0],d=s[r+1],v=s[r+2],M=s[r+3];if(p!==M||l!==u||c!==d||f!==v){let g=l*u+c*d+f*v+p*M;g<0&&(u=-u,d=-d,v=-v,M=-M,g=-g);let h=1-o;if(g<.9995){let _=Math.acos(g),b=Math.sin(_);h=Math.sin(h*_)/b,o=Math.sin(o*_)/b,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o;let _=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=_,c*=_,f*=_,p*=_}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],p=s[r],u=s[r+1],d=s[r+2],v=s[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),p=o(s/2),u=l(i/2),d=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(r-a)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(a+r)/d,this._z=(s+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(s-c)/d,this._x=(a+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-a)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+a*c-s*l,this._y=a*f+r*l+s*o-i*c,this._z=s*f+r*c+i*l-a*o,this._w=r*f-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(T1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(T1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),f=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-s*p,this.z=a+l*p+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yg.copy(this).projectOnVector(t),this.sub(yg)}reflect(t){return this.sub(yg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yg=new W,T1=new Aa,Ht=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],M=a[0],g=a[3],h=a[6],_=a[1],b=a[4],y=a[7],T=a[2],E=a[5],C=a[8];return s[0]=r*M+o*_+l*T,s[3]=r*g+o*b+l*E,s[6]=r*h+o*y+l*C,s[1]=c*M+f*_+p*T,s[4]=c*g+f*b+p*E,s[7]=c*h+f*y+p*C,s[2]=u*M+d*_+v*T,s[5]=u*g+d*b+v*E,s[8]=u*h+d*y+v*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*s*f+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*s,d=c*s-r*l,v=n*p+i*u+a*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=p*M,t[1]=(a*c-f*i)*M,t[2]=(o*i-a*r)*M,t[3]=u*M,t[4]=(f*n-a*l)*M,t[5]=(a*s-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*s)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xg.makeScale(t,n)),this}rotate(t){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xg.makeRotation(-t)),this}translate(t,n){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xg=new Ht,E1=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A1=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gC(){let e={enabled:!0,workingColorSpace:Lc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===_e&&(a.r=ja(a.r),a.g=ja(a.g),a.b=ja(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_e&&(a.r=tl(a.r),a.g=tl(a.g),a.b=tl(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Fi?Oc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Lc]:{primaries:t,whitePoint:i,transfer:Oc,toXYZ:E1,fromXYZ:A1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:E1,fromXYZ:A1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),e}var ee=gC();function ja(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function tl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Vo,Gf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vo===void 0&&(Vo=Pc("canvas")),Vo.width=t.width,Vo.height=t.height;let a=Vo.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Vo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Pc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ja(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ja(n[i]/255)*255):n[i]=ja(n[i]);return{data:n,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vC=0,il=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vC++}),this.uuid=au(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(bg(a[r].image)):s.push(bg(a[r]))}else s=bg(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function bg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Gf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var _C=0,Sg=new W,Qn=class e extends Ea{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ma,a=Ma,s=wn,r=Ys,o=zi,l=yi,c=e.DEFAULT_ANISOTROPY,f=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_C++}),this.uuid=au(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sg).x}get height(){return this.source.getSize(Sg).y}get depth(){return this.source.getSize(Sg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ot(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zf:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case Ff:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zf:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case Ff:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=sv;Qn.DEFAULT_ANISOTROPY=1;var He=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let b=(c+1)/2,y=(d+1)/2,T=(h+1)/2,E=(f+u)/4,C=(p+M)/4,x=(v+g)/4;return b>y&&b>T?b<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(b),a=E/i,s=C/i):y>T?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=E/a,s=x/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=C/s,a=x/s),this.set(i,a,s,n),this}let _=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(p-M)/_,this.z=(u-f)/_,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this.w=ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this.w=ie(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kf=class extends Ea{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new He(0,0,t,n),this.scissorTest=!1,this.viewport=new He(0,0,t,n),this.textures=[];let a={width:t,height:n,depth:i.depth},s=new Qn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new il(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends kf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Bc=class extends Qn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xf=class extends Qn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Je=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,a,s,r,o,l,c,f,p,u,d,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,f,p,u,d,v,M,g)}set(t,n,i,a,s,r,o,l,c,f,p,u,d,v,M,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=a,h[1]=s,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/Go.setFromMatrixColumn(t,0).length(),s=1/Go.setFromMatrixColumn(t,1).length(),r=1/Go.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u+M*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=M-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+M,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yC,t,xC)}lookAt(t,n,i){let a=this.elements;return mi.subVectors(t,n),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Ls.crossVectors(i,mi),Ls.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Ls.crossVectors(i,mi)),Ls.normalize(),uf.crossVectors(mi,Ls),a[0]=Ls.x,a[4]=uf.x,a[8]=mi.x,a[1]=Ls.y,a[5]=uf.y,a[9]=mi.y,a[2]=Ls.z,a[6]=uf.z,a[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],M=i[6],g=i[10],h=i[14],_=i[3],b=i[7],y=i[11],T=i[15],E=a[0],C=a[4],x=a[8],w=a[12],R=a[1],I=a[5],F=a[9],z=a[13],D=a[2],B=a[6],Z=a[10],X=a[14],k=a[3],G=a[7],J=a[11],Q=a[15];return s[0]=r*E+o*R+l*D+c*k,s[4]=r*C+o*I+l*B+c*G,s[8]=r*x+o*F+l*Z+c*J,s[12]=r*w+o*z+l*X+c*Q,s[1]=f*E+p*R+u*D+d*k,s[5]=f*C+p*I+u*B+d*G,s[9]=f*x+p*F+u*Z+d*J,s[13]=f*w+p*z+u*X+d*Q,s[2]=v*E+M*R+g*D+h*k,s[6]=v*C+M*I+g*B+h*G,s[10]=v*x+M*F+g*Z+h*J,s[14]=v*w+M*z+g*X+h*Q,s[3]=_*E+b*R+y*D+T*k,s[7]=_*C+b*I+y*B+T*G,s[11]=_*x+b*F+y*Z+T*J,s[15]=_*w+b*z+y*X+T*Q,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],M=t[7],g=t[11],h=t[15],_=l*d-c*u,b=o*d-c*p,y=o*u-l*p,T=r*d-c*f,E=r*u-l*f,C=r*p-o*f;return n*(M*_-g*b+h*y)-i*(v*_-g*T+h*E)+a*(v*b-M*T+h*C)-s*(v*y-M*E+g*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(s*f-o*l)+a*(s*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],M=t[13],g=t[14],h=t[15],_=n*o-i*r,b=n*l-a*r,y=n*c-s*r,T=i*l-a*o,E=i*c-s*o,C=a*c-s*l,x=f*M-p*v,w=f*g-u*v,R=f*h-d*v,I=p*g-u*M,F=p*h-d*M,z=u*h-d*g,D=_*z-b*F+y*I+T*R-E*w+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(o*z-l*F+c*I)*B,t[1]=(a*F-i*z-s*I)*B,t[2]=(M*C-g*E+h*T)*B,t[3]=(u*E-p*C-d*T)*B,t[4]=(l*R-r*z-c*w)*B,t[5]=(n*z-a*R+s*w)*B,t[6]=(g*y-v*C-h*b)*B,t[7]=(f*C-u*y+d*b)*B,t[8]=(r*F-o*R+c*x)*B,t[9]=(i*R-n*F-s*x)*B,t[10]=(v*E-M*y+h*_)*B,t[11]=(p*y-f*E-d*_)*B,t[12]=(o*w-r*I-l*x)*B,t[13]=(n*I-i*w+a*x)*B,t[14]=(M*b-v*T-g*_)*B,t[15]=(f*T-p*b+u*_)*B,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,f=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*r,0,c*l-a*o,f*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,f=r+r,p=o+o,u=s*c,d=s*f,v=s*p,M=r*f,g=r*p,h=o*p,_=l*c,b=l*f,y=l*p,T=i.x,E=i.y,C=i.z;return a[0]=(1-(M+h))*T,a[1]=(d+y)*T,a[2]=(v-b)*T,a[3]=0,a[4]=(d-y)*E,a[5]=(1-(u+h))*E,a[6]=(g+_)*E,a[7]=0,a[8]=(v+b)*C,a[9]=(g-_)*C,a[10]=(1-(u+M))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Go.set(a[0],a[1],a[2]).length(),o=Go.set(a[4],a[5],a[6]).length(),l=Go.set(a[8],a[9],a[10]).length();s<0&&(r=-r),Ji.copy(this);let c=1/r,f=1/o,p=1/l;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=f,Ji.elements[5]*=f,Ji.elements[6]*=f,Ji.elements[8]*=p,Ji.elements[9]*=p,Ji.elements[10]*=p,n.setFromRotationMatrix(Ji),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=ji,l=!1){let c=this.elements,f=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),d=(i+a)/(i-a),v,M;if(l)v=s/(r-s),M=r*s/(r-s);else if(o===ji)v=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===Ic)v=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=ji,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),d=-(i+a)/(i-a),v,M;if(l)v=1/(r-s),M=r/(r-s);else if(o===ji)v=-2/(r-s),M=-(r+s)/(r-s);else if(o===Ic)v=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Go=new W,Ji=new Je,yC=new W(0,0,0),xC=new W(1,1,1),Ls=new W,uf=new W,mi=new W,w1=new Je,C1=new Aa,Fs=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],f=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ie(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return w1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(w1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return C1.setFromEuler(this),this.setFromQuaternion(C1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fs.DEFAULT_ORDER="XYZ";var zc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bC=0,R1=new W,ko=new Aa,Za=new Je,hf=new W,Cc=new W,SC=new W,MC=new Aa,N1=new W(1,0,0),D1=new W(0,1,0),U1=new W(0,0,1),L1={type:"added"},TC={type:"removed"},Xo={type:"childadded",child:null},Mg={type:"childremoved",child:null},Pi=class e extends Ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=au(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new Fs,i=new Aa,a=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ht}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ko.setFromAxisAngle(t,n),this.quaternion.multiply(ko),this}rotateOnWorldAxis(t,n){return ko.setFromAxisAngle(t,n),this.quaternion.premultiply(ko),this}rotateX(t){return this.rotateOnAxis(N1,t)}rotateY(t){return this.rotateOnAxis(D1,t)}rotateZ(t){return this.rotateOnAxis(U1,t)}translateOnAxis(t,n){return R1.copy(t).applyQuaternion(this.quaternion),this.position.add(R1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(N1,t)}translateY(t){return this.translateOnAxis(D1,t)}translateZ(t){return this.translateOnAxis(U1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Za.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?hf.copy(t):hf.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Cc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Za.lookAt(Cc,hf,this.up):Za.lookAt(hf,Cc,this.up),this.quaternion.setFromRotationMatrix(Za),a&&(Za.extractRotation(a.matrixWorld),ko.setFromRotationMatrix(Za),this.quaternion.premultiply(ko.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(L1),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(TC),Mg.child=t,this.dispatchEvent(Mg),Mg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Za.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Za.multiply(t.parent.matrixWorld)),t.applyMatrix4(Za),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(L1),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cc,t,SC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cc,MC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pi.DEFAULT_UP=new W(0,1,0);Pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dr=class extends Pi{constructor(){super(),this.isGroup=!0,this.type="Group"}},EC={type:"move"},al=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(EC)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Dr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},AM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},ff={h:0,s:0,l:0};function Tg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var se=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ee.workingColorSpace){return this.r=t,this.g=n,this.b=i,ee.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ee.workingColorSpace){if(t=mC(t,1),n=ie(n,0,1),i=ie(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Tg(r,s,t+1/3),this.g=Tg(r,s,t),this.b=Tg(r,s,t-1/3)}return ee.colorSpaceToWorking(this,a),this}setStyle(t,n=vi){function i(s){s!==void 0&&parseFloat(s)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ot("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=vi){let i=AM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}copyLinearToSRGB(t){return this.r=tl(t.r),this.g=tl(t.g),this.b=tl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return ee.workingToColorSpace(Un.copy(this),t),Math.round(ie(Un.r*255,0,255))*65536+Math.round(ie(Un.g*255,0,255))*256+Math.round(ie(Un.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ee.workingColorSpace){ee.workingToColorSpace(Un.copy(this),n);let i=Un.r,a=Un.g,s=Un.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=ee.workingColorSpace){return ee.workingToColorSpace(Un.copy(this),n),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=vi){ee.workingToColorSpace(Un.copy(this),t);let n=Un.r,i=Un.g,a=Un.b;return t!==vi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Os),this.setHSL(Os.h+t,Os.s+n,Os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Os),t.getHSL(ff);let i=_g(Os.h,ff.h,n),a=_g(Os.s,ff.s,n),s=_g(Os.l,ff.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new se;se.NAMES=AM;var Fc=class extends Pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},$i=new W,Ja=new W,Eg=new W,$a=new W,Wo=new W,qo=new W,O1=new W,Ag=new W,wg=new W,Cg=new W,Rg=new He,Ng=new He,Dg=new He,zs=class e{constructor(t=new W,n=new W,i=new W){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),$i.subVectors(t,n),a.cross($i);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){$i.subVectors(a,n),Ja.subVectors(i,n),Eg.subVectors(t,n);let r=$i.dot($i),o=$i.dot(Ja),l=$i.dot(Eg),c=Ja.dot(Ja),f=Ja.dot(Eg),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return s.set(1-d-v,v,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,$a)===null?!1:$a.x>=0&&$a.y>=0&&$a.x+$a.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,$a)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$a.x),l.addScaledVector(r,$a.y),l.addScaledVector(o,$a.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Rg.setScalar(0),Ng.setScalar(0),Dg.setScalar(0),Rg.fromBufferAttribute(t,n),Ng.fromBufferAttribute(t,i),Dg.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Rg,s.x),r.addScaledVector(Ng,s.y),r.addScaledVector(Dg,s.z),r}static isFrontFacing(t,n,i,a){return $i.subVectors(i,n),Ja.subVectors(t,n),$i.cross(Ja).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $i.subVectors(this.c,this.b),Ja.subVectors(this.a,this.b),$i.cross(Ja).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;Wo.subVectors(a,i),qo.subVectors(s,i),Ag.subVectors(t,i);let l=Wo.dot(Ag),c=qo.dot(Ag);if(l<=0&&c<=0)return n.copy(i);wg.subVectors(t,a);let f=Wo.dot(wg),p=qo.dot(wg);if(f>=0&&p<=f)return n.copy(a);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(Wo,r);Cg.subVectors(t,s);let d=Wo.dot(Cg),v=qo.dot(Cg);if(v>=0&&d<=v)return n.copy(s);let M=d*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(qo,o);let g=f*v-d*p;if(g<=0&&p-f>=0&&d-v>=0)return O1.subVectors(s,a),o=(p-f)/(p-f+(d-v)),n.copy(a).addScaledVector(O1,o);let h=1/(g+M+u);return r=M*h,o=u*h,n.copy(i).addScaledVector(Wo,r).addScaledVector(qo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hs=class{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ki):Ki.fromBufferAttribute(s,r),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),df.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),df.copy(i.boundingBox)),df.applyMatrix4(t.matrixWorld),this.union(df)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rc),pf.subVectors(this.max,Rc),Yo.subVectors(t.a,Rc),Zo.subVectors(t.b,Rc),Jo.subVectors(t.c,Rc),Is.subVectors(Zo,Yo),Ps.subVectors(Jo,Zo),wr.subVectors(Yo,Jo);let n=[0,-Is.z,Is.y,0,-Ps.z,Ps.y,0,-wr.z,wr.y,Is.z,0,-Is.x,Ps.z,0,-Ps.x,wr.z,0,-wr.x,-Is.y,Is.x,0,-Ps.y,Ps.x,0,-wr.y,wr.x,0];return!Ug(n,Yo,Zo,Jo,pf)||(n=[1,0,0,0,1,0,0,0,1],!Ug(n,Yo,Zo,Jo,pf))?!1:(mf.crossVectors(Is,Ps),n=[mf.x,mf.y,mf.z],Ug(n,Yo,Zo,Jo,pf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ka),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ka=[new W,new W,new W,new W,new W,new W,new W,new W],Ki=new W,df=new Hs,Yo=new W,Zo=new W,Jo=new W,Is=new W,Ps=new W,wr=new W,Rc=new W,pf=new W,mf=new W,Cr=new W;function Ug(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Cr.fromArray(e,s);let o=a.x*Math.abs(Cr.x)+a.y*Math.abs(Cr.y)+a.z*Math.abs(Cr.z),l=t.dot(Cr),c=n.dot(Cr),f=i.dot(Cr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var en=new W,gf=new ae,AC=0,Oi=class extends Ea{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AC++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=bM,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gf.fromBufferAttribute(this,n),gf.applyMatrix3(t),this.setXY(n,gf.x,gf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix3(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(t),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(t),this.setXYZ(n,en.x,en.y,en.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=wc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=wc(n,this.array)),n}setX(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=wc(n,this.array)),n}setY(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=wc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=wc(n,this.array)),n}setW(t,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),i=$n(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),i=$n(i,this.array),a=$n(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=$n(n,this.array),i=$n(i,this.array),a=$n(a,this.array),s=$n(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hc=class extends Oi{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Vc=class extends Oi{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ii=class extends Oi{constructor(t,n,i){super(new Float32Array(t),n,i)}},wC=new Hs,Nc=new W,Lg=new W,sl=class{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):wC.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nc.subVectors(t,this.center);let n=Nc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Nc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nc.copy(t.center).add(Lg)),this.expandByPoint(Nc.copy(t.center).sub(Lg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},CC=0,Li=new Je,Og=new Pi,$o=new W,gi=new Hs,Dc=new Hs,gn=new W,wa=class e extends Ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CC++}),this.uuid=au(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dC(t)?Vc:Hc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,n,i){return Li.makeTranslation(t,n,i),this.applyMatrix4(Li),this}scale(t,n,i){return Li.makeScale(t,n,i),this.applyMatrix4(Li),this}lookAt(t){return Og.lookAt(t),Og.updateMatrix(),this.applyMatrix4(Og.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ii(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Dc.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(gi.min,Dc.min),gi.expandByPoint(gn),gn.addVectors(gi.max,Dc.max),gi.expandByPoint(gn)):(gi.expandByPoint(Dc.min),gi.expandByPoint(Dc.max))}gi.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)gn.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(gn));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)gn.fromBufferAttribute(o,c),l&&($o.fromBufferAttribute(t,c),gn.add($o)),a=Math.max(a,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new W,l[x]=new W;let c=new W,f=new W,p=new W,u=new ae,d=new ae,v=new ae,M=new W,g=new W;function h(x,w,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,R),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,w),v.fromBufferAttribute(s,R),f.sub(c),p.sub(c),d.sub(u),v.sub(u);let I=1/(d.x*v.y-v.x*d.y);isFinite(I)&&(M.copy(f).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(I),g.copy(p).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(I),o[x].add(M),o[w].add(M),o[R].add(M),l[x].add(g),l[w].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let x=0,w=_.length;x<w;++x){let R=_[x],I=R.start,F=R.count;for(let z=I,D=I+F;z<D;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new W,y=new W,T=new W,E=new W;function C(x){T.fromBufferAttribute(a,x),E.copy(T);let w=o[x];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),y.crossVectors(E,w);let I=y.dot(l[x])<0?-1:1;r.setXYZW(x,b.x,b.y,b.z,I)}for(let x=0,w=_.length;x<w;++x){let R=_[x],I=R.start,F=R.count;for(let z=I,D=I+F;z<D;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let a=new W,s=new W,r=new W,o=new W,l=new W,c=new W,f=new W,p=new W;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),f.subVectors(r,s),p.subVectors(a,s),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,s),p.subVectors(a,s),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)gn.fromBufferAttribute(t,n),gn.normalize(),t.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new Oi(u,f,p)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(a[l]=f,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let f=a[c];this.setAttribute(c,f.clone(n))}let s=t.morphAttributes;for(let c in s){let f=[],p=s[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ig=new W,RC=new W,NC=new Ht,Qi=class{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=Ig.subVectors(i,n).cross(RC.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta(Ig),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||NC.getNormalMatrix(t),a=this.coplanarPoint(Ig).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},DC=0,Lr=class extends Ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=au(),this.name="",this.type="Material",this.blending=ll,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jg,this.blendDst=$g,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=el,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nf,this.stencilZFail=Nf,this.stencilZPass=Nf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ot(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Qi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Qa=new W,Pg=new W,vf=new W,_f=new W,Wf=class{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Qa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Qa.copy(this.origin).addScaledVector(this.direction,n),Qa.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Pg.copy(t).add(n).multiplyScalar(.5),vf.copy(n).sub(t).normalize(),_f.copy(this.origin).sub(Pg);let s=t.distanceTo(n)*.5,r=-this.direction.dot(vf),o=_f.dot(this.direction),l=-_f.dot(vf),c=_f.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=s*f,p>=0)if(u>=-v)if(u<=v){let M=1/f;p*=M,u*=M,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Pg).addScaledVector(vf,u),d}intersectSphere(t,n){if(t.radius<0)return null;Qa.subVectors(t.center,this.origin);let i=Qa.dot(this.direction),a=Qa.dot(Qa)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),f>=0?(s=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(s=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Qa)!==null}intersectTriangle(t,n,i,a,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,M=n.y-r.y,g=n.z-r.z,h=i.x-r.x,_=i.y-r.y,b=i.z-r.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(f),C,x,w,R,I,F,z,D,B,Z,X,k;if(y>=T&&y>=E?(w=l,F=p,B=v,k=h,l>=0?(C=c,x=f,R=u,I=d,z=M,D=g,Z=_,X=b):(C=f,x=c,R=d,I=u,z=g,D=M,Z=b,X=_)):T>=E?(w=c,F=u,B=M,k=_,c>=0?(C=f,x=l,R=d,I=p,z=g,D=v,Z=b,X=h):(C=l,x=f,R=p,I=d,z=v,D=g,Z=h,X=b)):(w=f,F=d,B=g,k=b,f>=0?(C=l,x=c,R=p,I=u,z=v,D=M,Z=h,X=_):(C=c,x=l,R=u,I=p,z=M,D=v,Z=_,X=h)),w===0)return null;let G=C/w,J=x/w,Q=1/w,ot=R-G*F,rt=I-J*F,ct=z-G*B,Lt=D-J*B,kt=Z-G*k,$=X-J*k,tt=kt*Lt-$*ct,bt=ot*$-rt*kt,Dt=ct*rt-Lt*ot;if(a){if(tt<0||bt<0||Dt<0)return null}else if((tt<0||bt<0||Dt<0)&&(tt>0||bt>0||Dt>0))return null;let ht=tt+bt+Dt;if(ht===0)return null;let Nt=Q*(tt*F+bt*B+Dt*k);return(ht>0?Nt<0:Nt>0)?null:this.at(Nt/ht,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gc=class extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=Kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},I1=new Je,Rr=new Wf,yf=new sl,P1=new W,xf=new W,bf=new W,Sf=new W,Bg=new W,Mf=new W,B1=new W,Tf=new W,ti=class extends Pi{constructor(t=new wa,n=new Gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){Mf.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=o[l],p=s[l];f!==0&&(Bg.fromBufferAttribute(p,t),r?Mf.addScaledVector(Bg,f):Mf.addScaledVector(Bg.sub(n),f))}n.add(Mf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yf.copy(i.boundingSphere),yf.applyMatrix4(s),Rr.copy(t.ray).recast(t.near),!(yf.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(yf,P1)===null||Rr.origin.distanceToSquared(P1)>(t.far-t.near)**2))&&(I1.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(I1),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Rr)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let g=u[v],h=r[g.materialIndex],_=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,T=b;y<T;y+=3){let E=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);a=Ef(this,h,t,i,c,f,p,E,C,x),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let v=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=v,h=M;g<h;g+=3){let _=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);a=Ef(this,r,t,i,c,f,p,_,b,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let g=u[v],h=r[g.materialIndex],_=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,T=b;y<T;y+=3){let E=y,C=y+1,x=y+2;a=Ef(this,h,t,i,c,f,p,E,C,x),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let v=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=v,h=M;g<h;g+=3){let _=g,b=g+1,y=g+2;a=Ef(this,r,t,i,c,f,p,_,b,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}};function UC(e,t,n,i,a,s,r,o){let l;if(t.side===Hn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Ws,o),l===null)return null;Tf.copy(o),Tf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Tf);return c<n.near||c>n.far?null:{distance:c,point:Tf.clone(),object:e}}function Ef(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,xf),e.getVertexPosition(l,bf),e.getVertexPosition(c,Sf);let f=UC(e,t,n,i,xf,bf,Sf,B1);if(f){let p=new W;zs.getBarycoord(B1,xf,bf,Sf,p),a&&(f.uv=zs.getInterpolatedAttribute(a,o,l,c,p,new ae)),s&&(f.uv1=zs.getInterpolatedAttribute(s,o,l,c,p,new ae)),r&&(f.normal=zs.getInterpolatedAttribute(r,o,l,c,p,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new W,materialIndex:0};zs.getNormal(xf,bf,Sf,u.normal),f.face=u,f.barycoord=p}return f}var qf=class extends Qn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=vn,f=vn,p,u){super(null,r,o,l,c,f,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=new sl,LC=new ae(.5,.5),Af=new W,kc=class{constructor(t=new Qi,n=new Qi,i=new Qi,a=new Qi,s=new Qi,r=new Qi){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ji,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],f=s[4],p=s[5],u=s[6],d=s[7],v=s[8],M=s[9],g=s[10],h=s[11],_=s[12],b=s[13],y=s[14],T=s[15];if(a[0].setComponents(c-r,d-f,h-v,T-_).normalize(),a[1].setComponents(c+r,d+f,h+v,T+_).normalize(),a[2].setComponents(c+o,d+p,h+M,T+b).normalize(),a[3].setComponents(c-o,d-p,h-M,T-b).normalize(),i)a[4].setComponents(l,u,g,y).normalize(),a[5].setComponents(c-l,d-u,h-g,T-y).normalize();else if(a[4].setComponents(c-l,d-u,h-g,T-y).normalize(),n===ji)a[5].setComponents(c+l,d+u,h+g,T+y).normalize();else if(n===Ic)a[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){Nr.center.set(0,0,0);let n=LC.distanceTo(t.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(Af.x=a.normal.x>0?t.max.x:t.min.x,Af.y=a.normal.y>0?t.max.y:t.min.y,Af.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Af)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xc=class extends Qn{constructor(t=[],n=qs,i,a,s,r,o,l,c,f){super(t,n,i,a,s,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Vs=class extends Qn{constructor(t,n,i=ea,a,s,r,o=vn,l=vn,c,f=Ta,p=1){if(f!==Ta&&f!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,a,s,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new il(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Yf=class extends Vs{constructor(t,n=ea,i=qs,a,s,r=vn,o=vn,l,c=Ta){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wc=class extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},rl=class e extends wa{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(f,3)),this.setAttribute("uv",new Ii(p,2));function v(M,g,h,_,b,y,T,E,C,x,w){let R=y/C,I=T/x,F=y/2,z=T/2,D=E/2,B=C+1,Z=x+1,X=0,k=0,G=new W;for(let J=0;J<Z;J++){let Q=J*I-z;for(let ot=0;ot<B;ot++){let rt=ot*R-F;G[M]=rt*_,G[g]=Q*b,G[h]=D,c.push(G.x,G.y,G.z),G[M]=0,G[g]=0,G[h]=E>0?1:-1,f.push(G.x,G.y,G.z),p.push(ot/C),p.push(1-J/x),X+=1}}for(let J=0;J<x;J++)for(let Q=0;Q<C;Q++){let ot=u+Q+B*J,rt=u+Q+B*(J+1),ct=u+(Q+1)+B*(J+1),Lt=u+(Q+1)+B*J;l.push(ot,rt,Lt),l.push(rt,ct,Lt),k+=6}o.addGroup(d,k,w),d+=k,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Or=class e extends wa{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],M=[],g=[];for(let h=0;h<f;h++){let _=h*u-r;for(let b=0;b<c;b++){let y=b*p-s;v.push(y,-_,0),M.push(0,0,1),g.push(b/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){let b=_+c*h,y=_+c*(h+1),T=_+1+c*(h+1),E=_+1+c*h;d.push(b,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new Ii(v,3)),this.setAttribute("normal",new Ii(M,3)),this.setAttribute("uv",new Ii(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function zr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];if(z1(a))a.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(z1(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Ln(e){let t={};for(let n=0;n<e.length;n++){let i=zr(e[n]);for(let a in i)t[a]=i[a]}return t}function z1(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function OC(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function gv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var wM={clone:zr,merge:Ln},IC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IC,this.fragmentShader=PC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=OC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(a.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(a.value);break;case"v3":this.uniforms[i].value=new W().fromArray(a.value);break;case"v4":this.uniforms[i].value=new He().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Je().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qc=class extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Zf=class extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jf=class extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ko(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function zg(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Gs=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$f=class extends Gs{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hg,endingEnd:Hg}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case Vg:s=t,o=2*n-i;break;case Gg:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vg:r=t,l=2*i-n;break;case Gg:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(a-n),M=v*v,g=M*v,h=-u*g+2*u*M-u*v,_=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*v+1,b=(-1-d)*g+(1.5+d)*M+.5*v,y=d*g-d*M;for(let T=0;T!==o;++T)s[T]=h*r[f+T]+_*r[c+T]+b*r[l+T]+y*r[p+T];return s}},Kf=class extends Gs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(a-n),p=1-f;for(let u=0;u!==o;++u)s[u]=r[c+u]*p+r[l+u]*f;return s}},Qf=class extends Gs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},jf=class extends Gs{interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(a-n),M=1-v;for(let g=0;g!==o;++g)s[g]=r[c+g]*M+r[l+g]*v;return s}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let M=r[c+v],g=r[l+v],h=d*u+v*2,_=p[h],b=p[h+1],y=t*u+v*2,T=f[y],E=f[y+1],C=zC(i,n,_,T,a);s[v]=CM(C,M,b,E,g)}return s}};function CM(e,t,n,i,a){let s=1-e;return s*s*s*t+3*s*s*e*n+3*s*e*e*i+e*e*e*a}function BC(e,t,n,i,a){let s=1-e;return 3*s*s*(n-t)+6*s*e*(i-n)+3*e*e*(a-i)}function zC(e,t,n,i,a){let s=(e-t)/(a-t);for(let r=0;r<8;r++){let o=CM(s,t,n,i,a)-e;if(Math.abs(o)<1e-10)break;let l=BC(s,t,n,i,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var _i=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ko(n,this.TimeBufferType),this.values=Ko(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ko(t.times,Array),values:Ko(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a),zg(t.settings)&&(i.settings={inTangents:Ko(t.settings.inTangents,Array),outTangents:Ko(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Qf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $f(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new jf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Uc:n=this.InterpolantFactoryMethodDiscrete;break;case Hf:n=this.InterpolantFactoryMethodLinear;break;case Rf:n=this.InterpolantFactoryMethodSmooth;break;case Fg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ot("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uc;case this.InterpolantFactoryMethodLinear:return Hf;case this.InterpolantFactoryMethodSmooth:return Rf;case this.InterpolantFactoryMethodBezier:return Fg}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;zg(this.settings)&&(F1(this.settings.inTangents,t),F1(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&pC(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Rf,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(a)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let M=n[p+v];if(M!==n[u+v]||M!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,zg(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function F1(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Hf;var ks=class extends _i{constructor(t,n,i){super(t,n,i)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Uc;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var td=class extends _i{constructor(t,n,i,a){super(t,n,i,a)}};td.prototype.ValueTypeName="color";var ed=class extends _i{constructor(t,n,i,a){super(t,n,i,a)}};ed.prototype.ValueTypeName="number";var nd=class extends Gs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let f=c+o;c!==f;c+=4)Aa.slerpFlat(s,0,r,c-o,r,c,l);return s}},Yc=class extends _i{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new nd(this.times,this.values,this.getValueSize(),t)}};Yc.prototype.ValueTypeName="quaternion";Yc.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends _i{constructor(t,n,i){super(t,n,i)}};Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Uc;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var id=class extends _i{constructor(t,n,i,a){super(t,n,i,a)}};id.prototype.ValueTypeName="vector";var ad=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&a.onStart!==void 0&&a.onStart(f,r,o),s=!0},this.itemEnd=function(f){r++,a.onProgress!==void 0&&a.onProgress(f,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(f){a.onError!==void 0&&a.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},RM=new ad,sd=class{constructor(t){this.manager=t!==void 0?t:RM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};sd.DEFAULT_MATERIAL_NAME="__DEFAULT";var wf=new W,Cf=new Aa,Sa=new W,Zc=class extends Pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wf,Cf,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wf,Cf,Sa.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(wf,Cf,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wf,Cf,Sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bs=new W,H1=new ae,V1=new ae,Kn=class extends Zc{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Vf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vf*2*Math.atan(Math.tan(vg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z)}getViewSize(t,n){return this.getViewBounds(t,H1,V1),n.subVectors(V1,H1)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(vg*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Ir=class extends Zc{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Qo=-90,jo=1,rd=class extends Pi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new Kn(Qo,jo,t,n);a.layers=this.layers,this.add(a);let s=new Kn(Qo,jo,t,n);s.layers=this.layers,this.add(s);let r=new Kn(Qo,jo,t,n);r.layers=this.layers,this.add(r);let o=new Kn(Qo,jo,t,n);o.layers=this.layers,this.add(o);let l=new Kn(Qo,jo,t,n);l.layers=this.layers,this.add(l);let c=new Kn(Qo,jo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===ji)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},od=class extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var vv="\\[\\]\\.:\\/",FC=new RegExp("["+vv+"]","g"),_v="[^"+vv+"]",HC="[^"+vv.replace("\\.","")+"]",VC=/((?:WC+[\/:])*)/.source.replace("WC",_v),GC=/(WCOD+)?/.source.replace("WCOD",HC),kC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_v),XC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_v),WC=new RegExp("^"+VC+GC+kC+XC+"$"),qC=["material","materials","bones","map"],kg=class{constructor(t,n,i){let a=i||Pe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Pe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(FC,"")}static parseTrackName(t){let n=WC.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);qC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=kg;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mL=new Float32Array(1);var Xg=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};function yv(e,t,n,i){let a=YC(i);switch(n){case uv:return e*t;case fv:return e*t/a.components*a.byteLength;case pd:return e*t/a.components*a.byteLength;case Js:return e*t*2/a.components*a.byteLength;case md:return e*t*2/a.components*a.byteLength;case hv:return e*t*3/a.components*a.byteLength;case zi:return e*t*4/a.components*a.byteLength;case gd:return e*t*4/a.components*a.byteLength;case Qc:case jc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(e,16)*Math.max(t,8)/4;case vd:case yd:return Math.max(e,8)*Math.max(t,8)/2;case bd:case Sd:case Td:case Ed:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Md:case nu:case Ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case zd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Vd:case Gd:case kd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case iu:case qd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YC(e){switch(e){case yi:case rv:return{byteLength:1,components:1};case cl:case ov:case ia:return{byteLength:2,components:1};case fd:case dd:return{byteLength:2,components:4};case ea:case hd:case na:return{byteLength:4,components:1};case lv:case cv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function KM(){let e=null,t=!1,n=null,i=null;function a(s,r){i=e.requestAnimationFrame(a),n(s,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function JC(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],M=p[d];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let M=p[d];e.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var $C=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,y2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,b2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,S2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A2="gl_FragColor = linearToOutputTexel( gl_FragColor );",w2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,G2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,k2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,j2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,A3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_R=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:$C,alphahash_pars_fragment:KC,alphamap_fragment:QC,alphamap_pars_fragment:jC,alphatest_fragment:t2,alphatest_pars_fragment:e2,aomap_fragment:n2,aomap_pars_fragment:i2,batching_pars_vertex:a2,batching_vertex:s2,begin_vertex:r2,beginnormal_vertex:o2,bsdfs:l2,iridescence_fragment:c2,bumpmap_pars_fragment:u2,clipping_planes_fragment:h2,clipping_planes_pars_fragment:f2,clipping_planes_pars_vertex:d2,clipping_planes_vertex:p2,color_fragment:m2,color_pars_fragment:g2,color_pars_vertex:v2,color_vertex:_2,common:y2,cube_uv_reflection_fragment:x2,defaultnormal_vertex:b2,displacementmap_pars_vertex:S2,displacementmap_vertex:M2,emissivemap_fragment:T2,emissivemap_pars_fragment:E2,colorspace_fragment:A2,colorspace_pars_fragment:w2,envmap_fragment:C2,envmap_common_pars_fragment:R2,envmap_pars_fragment:N2,envmap_pars_vertex:D2,envmap_physical_pars_fragment:G2,envmap_vertex:U2,fog_vertex:L2,fog_pars_vertex:O2,fog_fragment:I2,fog_pars_fragment:P2,gradientmap_pars_fragment:B2,lightmap_pars_fragment:z2,lights_lambert_fragment:F2,lights_lambert_pars_fragment:H2,lights_pars_begin:V2,lights_toon_fragment:k2,lights_toon_pars_fragment:X2,lights_phong_fragment:W2,lights_phong_pars_fragment:q2,lights_physical_fragment:Y2,lights_physical_pars_fragment:Z2,lights_fragment_begin:J2,lights_fragment_maps:$2,lights_fragment_end:K2,lightprobes_pars_fragment:Q2,logdepthbuf_fragment:j2,logdepthbuf_pars_fragment:t3,logdepthbuf_pars_vertex:e3,logdepthbuf_vertex:n3,map_fragment:i3,map_pars_fragment:a3,map_particle_fragment:s3,map_particle_pars_fragment:r3,metalnessmap_fragment:o3,metalnessmap_pars_fragment:l3,morphinstance_vertex:c3,morphcolor_vertex:u3,morphnormal_vertex:h3,morphtarget_pars_vertex:f3,morphtarget_vertex:d3,normal_fragment_begin:p3,normal_fragment_maps:m3,normal_pars_fragment:g3,normal_pars_vertex:v3,normal_vertex:_3,normalmap_pars_fragment:y3,clearcoat_normal_fragment_begin:x3,clearcoat_normal_fragment_maps:b3,clearcoat_pars_fragment:S3,iridescence_pars_fragment:M3,opaque_fragment:T3,packing:E3,premultiplied_alpha_fragment:A3,project_vertex:w3,dithering_fragment:C3,dithering_pars_fragment:R3,roughnessmap_fragment:N3,roughnessmap_pars_fragment:D3,shadowmap_pars_fragment:U3,shadowmap_pars_vertex:L3,shadowmap_vertex:O3,shadowmask_pars_fragment:I3,skinbase_vertex:P3,skinning_pars_vertex:B3,skinning_vertex:z3,skinnormal_vertex:F3,specularmap_fragment:H3,specularmap_pars_fragment:V3,tonemapping_fragment:G3,tonemapping_pars_fragment:k3,transmission_fragment:X3,transmission_pars_fragment:W3,uv_pars_fragment:q3,uv_pars_vertex:Y3,uv_vertex:Z3,worldpos_vertex:J3,background_vert:$3,background_frag:K3,backgroundCube_vert:Q3,backgroundCube_frag:j3,cube_vert:tR,cube_frag:eR,depth_vert:nR,depth_frag:iR,distance_vert:aR,distance_frag:sR,equirect_vert:rR,equirect_frag:oR,linedashed_vert:lR,linedashed_frag:cR,meshbasic_vert:uR,meshbasic_frag:hR,meshlambert_vert:fR,meshlambert_frag:dR,meshmatcap_vert:pR,meshmatcap_frag:mR,meshnormal_vert:gR,meshnormal_frag:vR,meshphong_vert:_R,meshphong_frag:yR,meshphysical_vert:xR,meshphysical_frag:bR,meshtoon_vert:SR,meshtoon_frag:MR,points_vert:TR,points_frag:ER,shadow_vert:AR,shadow_frag:wR,sprite_vert:CR,sprite_frag:RR},_t={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Na={basic:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ln([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ln([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new se(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ln([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ln([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ln([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ln([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ln([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ln([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ln([_t.common,_t.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ln([_t.lights,_t.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Na.physical={uniforms:Ln([Na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Jd={r:0,b:0,g:0},NR=new Je,QM=new Ht;QM.set(-1,0,0,0,1,0,0,0,1);function DR(e,t,n,i,a,s){let r=new se(0),o=a===!0?0:1,l,c,f=null,p=0,u=null;function d(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=t.get(b,y)}return b}function v(_){let b=!1,y=d(_);y===null?g(r,o):y&&y.isColor&&(g(y,1),b=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(_,b){let y=d(b);y&&(y.isCubeTexture||y.mapping===$c)?(c===void 0&&(c=new ti(new rl(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:zr(Na.backgroundCube.uniforms),vertexShader:Na.backgroundCube.vertexShader,fragmentShader:Na.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NR.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(QM),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==_e,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ti(new Or(2,2),new Fn({name:"BackgroundMaterial",uniforms:zr(Na.background.uniforms),vertexShader:Na.background.vertexShader,fragmentShader:Na.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,b){_.getRGB(Jd,gv(e)),n.buffers.color.setClear(Jd.r,Jd.g,Jd.b,b,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,b=1){r.set(_),o=b,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(r,o)},render:v,addToRenderList:M,dispose:h}}function UR(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null),s=a,r=!1;function o(I,F,z,D,B){let Z=!1,X=p(I,D,z,F);s!==X&&(s=X,c(s.object)),Z=d(I,D,z,B),Z&&v(I,D,z,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,y(I,F,z,D),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function f(I){return e.deleteVertexArray(I)}function p(I,F,z,D){let B=D.wireframe===!0,Z=i[F.id];Z===void 0&&(Z={},i[F.id]=Z);let X=I.isInstancedMesh===!0?I.id:0,k=Z[X];k===void 0&&(k={},Z[X]=k);let G=k[z.id];G===void 0&&(G={},k[z.id]=G);let J=G[B];return J===void 0&&(J=u(l()),G[B]=J),J}function u(I){let F=[],z=[],D=[];for(let B=0;B<n;B++)F[B]=0,z[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:D,object:I,attributes:{},index:null}}function d(I,F,z,D){let B=s.attributes,Z=F.attributes,X=0,k=z.getAttributes();for(let G in k)if(k[G].location>=0){let Q=B[G],ot=Z[G];if(ot===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor)),Q===void 0||Q.attribute!==ot||ot&&Q.data!==ot.data)return!0;X++}return s.attributesNum!==X||s.index!==D}function v(I,F,z,D){let B={},Z=F.attributes,X=0,k=z.getAttributes();for(let G in k)if(k[G].location>=0){let Q=Z[G];Q===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let ot={};ot.attribute=Q,Q&&Q.data&&(ot.data=Q.data),B[G]=ot,X++}s.attributes=B,s.attributesNum=X,s.index=D}function M(){let I=s.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function g(I){h(I,0)}function h(I,F){let z=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;z[I]=1,D[I]===0&&(e.enableVertexAttribArray(I),D[I]=1),B[I]!==F&&(e.vertexAttribDivisor(I,F),B[I]=F)}function _(){let I=s.newAttributes,F=s.enabledAttributes;for(let z=0,D=F.length;z<D;z++)F[z]!==I[z]&&(e.disableVertexAttribArray(z),F[z]=0)}function b(I,F,z,D,B,Z,X){X===!0?e.vertexAttribIPointer(I,F,z,B,Z):e.vertexAttribPointer(I,F,z,D,B,Z)}function y(I,F,z,D){M();let B=D.attributes,Z=z.getAttributes(),X=F.defaultAttributeValues;for(let k in Z){let G=Z[k];if(G.location>=0){let J=B[k];if(J===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let Q=J.normalized,ot=J.itemSize,rt=t.get(J);if(rt===void 0)continue;let ct=rt.buffer,Lt=rt.type,kt=rt.bytesPerElement,$=Lt===e.INT||Lt===e.UNSIGNED_INT||J.gpuType===hd;if(J.isInterleavedBufferAttribute){let tt=J.data,bt=tt.stride,Dt=J.offset;if(tt.isInstancedInterleavedBuffer){for(let ht=0;ht<G.locationSize;ht++)h(G.location+ht,tt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ht=0;ht<G.locationSize;ht++)g(G.location+ht);e.bindBuffer(e.ARRAY_BUFFER,ct);for(let ht=0;ht<G.locationSize;ht++)b(G.location+ht,ot/G.locationSize,Lt,Q,bt*kt,(Dt+ot/G.locationSize*ht)*kt,$)}else{if(J.isInstancedBufferAttribute){for(let tt=0;tt<G.locationSize;tt++)h(G.location+tt,J.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let tt=0;tt<G.locationSize;tt++)g(G.location+tt);e.bindBuffer(e.ARRAY_BUFFER,ct);for(let tt=0;tt<G.locationSize;tt++)b(G.location+tt,ot/G.locationSize,Lt,Q,ot*kt,ot/G.locationSize*tt*kt,$)}}else if(X!==void 0){let Q=X[k];if(Q!==void 0)switch(Q.length){case 2:e.vertexAttrib2fv(G.location,Q);break;case 3:e.vertexAttrib3fv(G.location,Q);break;case 4:e.vertexAttrib4fv(G.location,Q);break;default:e.vertexAttrib1fv(G.location,Q)}}}}_()}function T(){w();for(let I in i){let F=i[I];for(let z in F){let D=F[z];for(let B in D){let Z=D[B];for(let X in Z)f(Z[X].object),delete Z[X];delete D[B]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let z in F){let D=F[z];for(let B in D){let Z=D[B];for(let X in Z)f(Z[X].object),delete Z[X];delete D[B]}}delete i[I.id]}function C(I){for(let F in i){let z=i[F];for(let D in z){let B=z[D];if(B[I.id]===void 0)continue;let Z=B[I.id];for(let X in Z)f(Z[X].object),delete Z[X];delete B[I.id]}}}function x(I){for(let F in i){let z=i[F],D=I.isInstancedMesh===!0?I.id:0,B=z[D];if(B!==void 0){for(let Z in B){let X=B[Z];for(let k in X)f(X[k].object),delete X[k];delete B[Z]}delete z[D],Object.keys(z).length===0&&delete i[F]}}}function w(){R(),r=!0,s!==a&&(s=a,c(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:_}}function LR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function OR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(C){return!(C!==zi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==yi&&C!==na&&!x&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Ot("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:T,samples:E}}function IR(e){let t=this,n=null,i=0,a=!1,s=!1,r=new Qi,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!a||v===null||v.length===0||s&&!g)s?f(null):c();else{let _=s?0:i,b=_*4,y=h.clippingState||null;l.value=y,y=f(v,u,b,d);for(let T=0;T!==b;++T)y[T]=n[T];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,v!==!0||g===null){let h=d+M*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<h)&&(g=new Float32Array(h));for(let b=0,y=d;b!==M;++b,y+=4)r.copy(p[b]).applyMatrix4(_,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var fl=4,PR=6,BR=20,zR=256,su=new Ir,NM=new se,xv=null,bv=0,Sv=0,Mv=!1,FR=new W,Fr=new W,Kd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=FR}=s;xv=this._renderer.getRenderTarget(),bv=this._renderer.getActiveCubeFace(),Sv=this._renderer.getActiveMipmapLevel(),Mv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=LM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=UM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xv,bv,Sv),this._renderer.xr.enabled=Mv,t.scissorTest=!1,hl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===qs||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xv=this._renderer.getRenderTarget(),bv=this._renderer.getActiveCubeFace(),Sv=this._renderer.getActiveMipmapLevel(),Mv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ia,format:zi,colorSpace:Lc,depthBuffer:!1},a=DM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=DM(t,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=HR(s)),this._blurMaterial=GR(s,t,n),this._ggxMaterial=VR(s,t,n)}return a}_compileMaterial(t){let n=new ti(new wa,t);this._renderer.compile(n,su)}_sceneToCubeUV(t,n,i,a,s){let l=new Kn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(NM),p.toneMapping=ta,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new rl,new Gc({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,h=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,h=!0):(g.color.copy(NM),h=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[b]));let T=this._cubeSize;hl(a,y*T,b>2?T:0,T,T),p.setRenderTarget(a),h&&p.render(M,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===qs||t.mapping===Br;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=LM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=UM());let s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,su)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){let a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,d=p*u,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-fl?i-v+fl:0),h=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,hl(s,g,h,3*M,2*M),a.setRenderTarget(s),a.render(o,su),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,hl(t,g,h,3*M,2*M),a.setRenderTarget(t),a.render(o,su)}_blur(t,n,i,a){let s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,s,n,i,r),this._blurPass(s,t,i,i,r)}_blurPass(t,n,i,a,s){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[a],p=3*f*(a>this._lodMax-fl?a-this._lodMax+fl:0),u=4*(this._cubeSize-f);hl(n,p,u,3*f,2*f),r.setRenderTarget(n),r.render(l,su)}};function HR(e){let t=[],n=[],i=e,a=e-fl+1+PR;for(let s=0;s<a;s++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,v=new Float32Array(d*u*p),M=new Float32Array(d*u*p);for(let h=0;h<p;h++){let _=h%3*2/3-1,b=h>2?0:-1,y=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];v.set(y,d*u*h);for(let T=0;T<u;T++){let E=f[T*2]*2-1,C=f[T*2+1]*2-1;h===0?Fr.set(1,C,E):h===1?Fr.set(-E,1,-C):h===2?Fr.set(-E,C,1):h===3?Fr.set(-1,C,-E):h===4?Fr.set(-E,-1,C):Fr.set(E,C,-1),Fr.toArray(M,(h*u+T)*d)}}let g=new wa;g.setAttribute("position",new Oi(v,d)),g.setAttribute("outputDirection",new Oi(M,d)),n.push(new ti(g,null)),i>fl&&i--}return{lodMeshes:n,sizeLods:t}}function DM(e,t,n){let i=new jn(e,t,n);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function VR(e,t,n){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function GR(e,t,n){return new Fn({name:"SphericalGaussianBlur",defines:{SAMPLES:BR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function UM(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function LM(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function tp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qd=class extends jn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Xc(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new rl(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:Bi});s.uniforms.tEquirect.value=n;let r=new ti(a,s),o=n.minFilter;return n.minFilter===Ys&&(n.minFilter=wn),new rd(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}};function kR(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?r(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===ld||d===cd)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let M=new Qd(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,v=d===ld||d===cd,M=d===qs||d===Br;if(v||M){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Kd(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return v&&_&&_.height>0||M&&_&&l(_)?(i===null&&(i=new Kd(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,d){return d===ld?u.mapping=qs:d===cd&&(u.mapping=Br),u}function l(u){let d=0,v=6;for(let M=0;M<v;M++)u[M]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function XR(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Ur("WebGLRenderer: "+i+" extension not supported."),a}}}function WR(e,t,n,i){let a={},s=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,v=p.attributes.position,M=0;if(v===void 0)return;if(d!==null){let _=d.array;M=d.version;for(let b=0,y=_.length;b<y;b+=3){let T=_[b+0],E=_[b+1],C=_[b+2];u.push(T,E,E,C,C,T)}}else{let _=v.array;M=v.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let T=b+0,E=b+1,C=b+2;u.push(T,E,E,C,C,T)}}let g=new(v.count>=65535?Vc:Hc)(u,1);g.version=M;let h=s.get(p);h&&t.remove(h),s.set(p,g)}function f(p){let u=s.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function qR(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,s,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function YR(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:Pt("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function ZR(e,t,n){let i=new WeakMap,a=new He;function s(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;d===!0&&(b=1),v===!0&&(b=2),M===!0&&(b=3);let y=o.attributes.position.count*b,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*p),C=new Bc(E,y,T,p);C.type=na,C.needsUpdate=!0;let x=b*4;for(let R=0;R<p;R++){let I=g[R],F=h[R],z=_[R],D=y*T*4*R;for(let B=0;B<I.count;B++){let Z=B*x;d===!0&&(a.fromBufferAttribute(I,B),E[D+Z+0]=a.x,E[D+Z+1]=a.y,E[D+Z+2]=a.z,E[D+Z+3]=0),v===!0&&(a.fromBufferAttribute(F,B),E[D+Z+4]=a.x,E[D+Z+5]=a.y,E[D+Z+6]=a.z,E[D+Z+7]=0),M===!0&&(a.fromBufferAttribute(z,B),E[D+Z+8]=a.x,E[D+Z+9]=a.y,E[D+Z+10]=a.z,E[D+Z+11]=z.itemSize===4?a.w:1)}}u={count:p,texture:C,size:new ae(y,T)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function JR(e,t,n,i,a){let s=new WeakMap;function r(c){let f=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==f&&(t.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return u}function o(){s=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var $R={[Qg]:"LINEAR_TONE_MAPPING",[jg]:"REINHARD_TONE_MAPPING",[tv]:"CINEON_TONE_MAPPING",[ev]:"ACES_FILMIC_TONE_MAPPING",[iv]:"AGX_TONE_MAPPING",[av]:"NEUTRAL_TONE_MAPPING",[nv]:"CUSTOM_TONE_MAPPING"};function KR(e,t,n,i,a,s){let r=new jn(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new wa;c.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ii([0,2,0,0,2,0],2));let f=new qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ti(c,f),u=new Ir(-1,1,1,-1,0,1),d=null,v=null,M=!1,g,h=null,_=[],b=!1;this.setSize=function(y,T){r.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let E=0;E<_.length;E++){let C=_[E];C.setSize&&C.setSize(y,T)}},this.setEffects=function(y){_=y,b=_.length>0&&_[0].isRenderPass===!0;let T=r.width,E=r.height;_.length>0&&o===null&&(o=new jn(T,E,{type:ia,depthBuffer:!1,stencilBuffer:!1}),l=new jn(T,E,{type:ia,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let x=_[C];x.setSize&&x.setSize(T,E)}},this.begin=function(y,T){if(M||y.toneMapping===ta&&_.length===0)return!1;if(h=T,T!==null){let E=T.width,C=T.height;(r.width!==E||r.height!==C)&&this.setSize(E,C)}return b===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=ta,!0},this.hasRenderPass=function(){return b},this.end=function(y,T){y.toneMapping=g,M=!0;let E=r,C=o;for(let x=0;x<_.length;x++){let w=_[x];w.enabled!==!1&&(w.render(y,C,E,T),w.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(d!==y.outputColorSpace||v!==y.toneMapping){d=y.outputColorSpace,v=y.toneMapping,f.defines={},ee.getTransfer(d)===_e&&(f.defines.SRGB_TRANSFER="");let x=$R[v];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(h),y.render(p,u),h=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var jM=new Qn,Av=new Vs(1,1),tT=new Bc,eT=new Xf,nT=new Xc,OM=[],IM=[],PM=new Float32Array(16),BM=new Float32Array(9),zM=new Float32Array(4);function pl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=OM[a];if(s===void 0&&(s=new Float32Array(a),OM[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function cn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function un(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function ep(e,t){let n=IM[t];n===void 0&&(n=new Int32Array(t),IM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function QR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function jR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2fv(this.addr,t),un(n,t)}}function tN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cn(n,t))return;e.uniform3fv(this.addr,t),un(n,t)}}function eN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4fv(this.addr,t),un(n,t)}}function nN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;zM.set(i),e.uniformMatrix2fv(this.addr,!1,zM),un(n,i)}}function iN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;BM.set(i),e.uniformMatrix3fv(this.addr,!1,BM),un(n,i)}}function aN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;PM.set(i),e.uniformMatrix4fv(this.addr,!1,PM),un(n,i)}}function sN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function rN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2iv(this.addr,t),un(n,t)}}function oN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3iv(this.addr,t),un(n,t)}}function lN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4iv(this.addr,t),un(n,t)}}function cN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function uN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2uiv(this.addr,t),un(n,t)}}function hN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3uiv(this.addr,t),un(n,t)}}function fN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4uiv(this.addr,t),un(n,t)}}function dN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Av.compareFunction=n.isReversedDepthBuffer()?Zd:Yd,s=Av):s=jM,n.setTexture2D(t||s,a)}function pN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||eT,a)}function mN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||nT,a)}function gN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||tT,a)}function vN(e){switch(e){case 5126:return QR;case 35664:return jR;case 35665:return tN;case 35666:return eN;case 35674:return nN;case 35675:return iN;case 35676:return aN;case 5124:case 35670:return sN;case 35667:case 35671:return rN;case 35668:case 35672:return oN;case 35669:case 35673:return lN;case 5125:return cN;case 36294:return uN;case 36295:return hN;case 36296:return fN;case 35678:case 36198:case 36298:case 36306:case 35682:return dN;case 35679:case 36299:case 36307:return pN;case 35680:case 36300:case 36308:case 36293:return mN;case 36289:case 36303:case 36311:case 36292:return gN}}function _N(e,t){e.uniform1fv(this.addr,t)}function yN(e,t){let n=pl(t,this.size,2);e.uniform2fv(this.addr,n)}function xN(e,t){let n=pl(t,this.size,3);e.uniform3fv(this.addr,n)}function bN(e,t){let n=pl(t,this.size,4);e.uniform4fv(this.addr,n)}function SN(e,t){let n=pl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function MN(e,t){let n=pl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function TN(e,t){let n=pl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function EN(e,t){e.uniform1iv(this.addr,t)}function AN(e,t){e.uniform2iv(this.addr,t)}function wN(e,t){e.uniform3iv(this.addr,t)}function CN(e,t){e.uniform4iv(this.addr,t)}function RN(e,t){e.uniform1uiv(this.addr,t)}function NN(e,t){e.uniform2uiv(this.addr,t)}function DN(e,t){e.uniform3uiv(this.addr,t)}function UN(e,t){e.uniform4uiv(this.addr,t)}function LN(e,t,n){let i=this.cache,a=t.length,s=ep(n,a);cn(i,s)||(e.uniform1iv(this.addr,s),un(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Av:r=jM;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function ON(e,t,n){let i=this.cache,a=t.length,s=ep(n,a);cn(i,s)||(e.uniform1iv(this.addr,s),un(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||eT,s[r])}function IN(e,t,n){let i=this.cache,a=t.length,s=ep(n,a);cn(i,s)||(e.uniform1iv(this.addr,s),un(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||nT,s[r])}function PN(e,t,n){let i=this.cache,a=t.length,s=ep(n,a);cn(i,s)||(e.uniform1iv(this.addr,s),un(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||tT,s[r])}function BN(e){switch(e){case 5126:return _N;case 35664:return yN;case 35665:return xN;case 35666:return bN;case 35674:return SN;case 35675:return MN;case 35676:return TN;case 5124:case 35670:return EN;case 35667:case 35671:return AN;case 35668:case 35672:return wN;case 35669:case 35673:return CN;case 5125:return RN;case 36294:return NN;case 36295:return DN;case 36296:return UN;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return ON;case 35680:case 36300:case 36308:case 36293:return IN;case 36289:case 36303:case 36311:case 36292:return PN}}var wv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vN(n.type)}},Cv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BN(n.type)}},Rv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},Tv=/(\w+)(\])?(\[|\.)?/g;function FM(e,t){e.seq.push(t),e.map[t.id]=t}function zN(e,t,n){let i=e.name,a=i.length;for(Tv.lastIndex=0;;){let s=Tv.exec(i),r=Tv.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){FM(n,c===void 0?new wv(o,e,t):new Cv(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Rv(o),FM(n,p)),n=p}}}var dl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);zN(o,l,this)}let a=[],s=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function HM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var FN=37297,HN=0;function VN(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var VM=new Ht;function GN(e){ee._getMatrix(VM,ee.workingColorSpace,e);let t=`mat3( ${VM.elements.map(n=>n.toFixed(4))} )`;switch(ee.getTransfer(e)){case Oc:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function GM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+VN(e.getShaderSource(t),o)}else return s}function kN(e,t){let n=GN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var XN={[Qg]:"Linear",[jg]:"Reinhard",[tv]:"Cineon",[ev]:"ACESFilmic",[iv]:"AgX",[av]:"Neutral",[nv]:"Custom"};function WN(e,t){let n=XN[t];return n===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var $d=new W;function qN(){ee.getLuminanceCoefficients($d);let e=$d.x.toFixed(4),t=$d.y.toFixed(4),n=$d.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ou).join(`
`)}function ZN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function JN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function ou(e){return e!==""}function kM(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function XM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $N=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nv(e){return e.replace($N,QN)}var KN=new Map;function QN(e,t){let n=Yt[t];if(n===void 0){let i=KN.get(t);if(i!==void 0)n=Yt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nv(n)}var jN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function WM(e){return e.replace(jN,tD)}function tD(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function qM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var eD={[Jc]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function nD(e){return eD[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iD={[qs]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function aD(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":iD[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var sD={[Br]:"ENVMAP_MODE_REFRACTION"};function rD(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":sD[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var oD={[Kg]:"ENVMAP_BLENDING_MULTIPLY",[cM]:"ENVMAP_BLENDING_MIX",[uM]:"ENVMAP_BLENDING_ADD"};function lD(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":oD[e.combine]||"ENVMAP_BLENDING_NONE"}function cD(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function uD(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=nD(n),c=aD(n),f=rD(n),p=lD(n),u=cD(n),d=YN(n),v=ZN(s),M=a.createProgram(),g,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ou).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ou).join(`
`),h.length>0&&(h+=`
`)):(g=[qM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ou).join(`
`),h=[qM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ta?"#define TONE_MAPPING":"",n.toneMapping!==ta?Yt.tonemapping_pars_fragment:"",n.toneMapping!==ta?WN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,kN("linearToOutputTexel",n.outputColorSpace),qN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ou).join(`
`)),r=Nv(r),r=kM(r,n),r=XM(r,n),o=Nv(o),o=kM(o,n),o=XM(o,n),r=WM(r),o=WM(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let b=_+g+r,y=_+h+o,T=HM(a,a.VERTEX_SHADER,b),E=HM(a,a.FRAGMENT_SHADER,y);a.attachShader(M,T),a.attachShader(M,E),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function C(I){if(e.debug.checkShaderErrors){let F=a.getProgramInfoLog(M)||"",z=a.getShaderInfoLog(T)||"",D=a.getShaderInfoLog(E)||"",B=F.trim(),Z=z.trim(),X=D.trim(),k=!0,G=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,T,E);else{let J=GM(a,T,"vertex"),Q=GM(a,E,"fragment");Pt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+J+`
`+Q)}else B!==""?Ot("WebGLProgram: Program Info Log:",B):(Z===""||X==="")&&(G=!1);G&&(I.diagnostics={runnable:k,programLog:B,vertexShader:{log:Z,prefix:g},fragmentShader:{log:X,prefix:h}})}a.deleteShader(T),a.deleteShader(E),x=new dl(a,M),w=JN(a,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,FN)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HN++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}var hD=0,Dv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Uv(t),n.set(t,i)),i}},Uv=class{constructor(t){this.id=hD++,this.code=t,this.usedTimes=0}};function fD(e){return e===Js||e===nu||e===iu}function dD(e,t,n,i,a,s){let r=new zc,o=new Dv,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,w,R,I,F,z){let D=I.fog,B=F.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||Z,X),G=k&&k.mapping===$c?k.image.height:null,J=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ot("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=Q!==void 0?Q.length:0,rt=0;B.morphAttributes.position!==void 0&&(rt=1),B.morphAttributes.normal!==void 0&&(rt=2),B.morphAttributes.color!==void 0&&(rt=3);let ct,Lt,kt,$;if(J){let Me=Na[J];ct=Me.vertexShader,Lt=Me.fragmentShader}else{ct=x.vertexShader,Lt=x.fragmentShader;let Me=o.getVertexShaderStage(x),jt=o.getFragmentShaderStage(x);o.update(x,Me,jt),kt=Me.id,$=jt.id}let tt=e.getRenderTarget(),bt=e.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,ht=F.isBatchedMesh===!0,Nt=!!x.map,Ae=!!x.matcap,Bt=!!k,Zt=!!x.aoMap,oe=!!x.lightMap,Xt=!!x.bumpMap&&x.wireframe===!1,re=!!x.normalMap,Ne=!!x.displacementMap,Xe=!!x.emissiveMap,de=!!x.metalnessMap,we=!!x.roughnessMap,L=x.anisotropy>0,Se=x.clearcoat>0,it=x.dispersion>0,A=x.retroreflectivity>0,m=x.iridescence>0,N=x.sheen>0,P=x.transmission>0,Y=L&&!!x.anisotropyMap,st=Se&&!!x.clearcoatMap,lt=Se&&!!x.clearcoatNormalMap,K=Se&&!!x.clearcoatRoughnessMap,j=m&&!!x.iridescenceMap,ft=m&&!!x.iridescenceThicknessMap,Ct=N&&!!x.sheenColorMap,gt=N&&!!x.sheenRoughnessMap,dt=!!x.specularMap,Rt=!!x.specularColorMap,Ut=!!x.specularIntensityMap,Vt=P&&!!x.transmissionMap,O=P&&!!x.thicknessMap,pt=!!x.gradientMap,et=!!x.alphaMap,ut=x.alphaTest>0,yt=!!x.alphaHash,at=!!x.extensions,wt=ta;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(wt=e.toneMapping);let Et={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:Lt,defines:x.defines,customVertexShaderID:kt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ht,batchingColor:ht&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Nt,matcap:Ae,envMap:Bt,envMapMode:Bt&&k.mapping,envMapCubeUVHeight:G,aoMap:Zt,lightMap:oe,bumpMap:Xt,normalMap:re,displacementMap:Ne,emissiveMap:Xe,normalMapObjectSpace:re&&x.normalMapType===dM,normalMapTangentSpace:re&&x.normalMapType===dv,packedNormalMap:re&&x.normalMapType===dv&&fD(x.normalMap.format),metalnessMap:de,roughnessMap:we,anisotropy:L,anisotropyMap:Y,clearcoat:Se,clearcoatMap:st,clearcoatNormalMap:lt,clearcoatRoughnessMap:K,dispersion:it,retroreflection:A,iridescence:m,iridescenceMap:j,iridescenceThicknessMap:ft,sheen:N,sheenColorMap:Ct,sheenRoughnessMap:gt,specularMap:dt,specularColorMap:Rt,specularIntensityMap:Ut,transmission:P,transmissionMap:Vt,thicknessMap:O,gradientMap:pt,opaque:x.transparent===!1&&x.blending===ll&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:ut,alphaHash:yt,combine:x.combine,mapUv:Nt&&v(x.map.channel),aoMapUv:Zt&&v(x.aoMap.channel),lightMapUv:oe&&v(x.lightMap.channel),bumpMapUv:Xt&&v(x.bumpMap.channel),normalMapUv:re&&v(x.normalMap.channel),displacementMapUv:Ne&&v(x.displacementMap.channel),emissiveMapUv:Xe&&v(x.emissiveMap.channel),metalnessMapUv:de&&v(x.metalnessMap.channel),roughnessMapUv:we&&v(x.roughnessMap.channel),anisotropyMapUv:Y&&v(x.anisotropyMap.channel),clearcoatMapUv:st&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(x.sheenRoughnessMap.channel),specularMapUv:dt&&v(x.specularMap.channel),specularColorMapUv:Rt&&v(x.specularColorMap.channel),specularIntensityMapUv:Ut&&v(x.specularIntensityMap.channel),transmissionMapUv:Vt&&v(x.transmissionMap.channel),thicknessMapUv:O&&v(x.thicknessMap.channel),alphaMapUv:et&&v(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(re||L),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Nt||et),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:bt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:wt,decodeVideoTexture:Nt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:Xe&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ca,flipSided:x.side===Hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function g(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(h(w,x),_(w,x),w.push(e.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function h(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function b(x){let w=d[x.type],R;if(w){let I=Na[w];R=wM.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,w){let R=f.get(w);return R!==void 0?++R.usedTimes:(R=new uD(e,w,x,a),c.push(R),f.set(w,R)),R}function T(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:C}}function pD(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function mD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function YM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ZM(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,M,g,h){let _=e[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:h},e[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=v,_.materialVariant=r(u),_.groupOrder=M,_.renderOrder=u.renderOrder,_.z=g,_.group=h),t++,_}function l(u,d,v,M,g,h,_){_.reversedDepth===!0&&(g=-g);let b=o(u,d,v,M,g,h);v.transmission>0?i.push(b):v.transparent===!0?a.push(b):n.push(b)}function c(u,d,v,M,g,h){let _=o(u,d,v,M,g,h);v.transmission>0?i.unshift(_):v.transparent===!0?a.unshift(_):n.unshift(_)}function f(u,d){n.length>1&&n.sort(u||mD),i.length>1&&i.sort(d||YM),a.length>1&&a.sort(d||YM)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:f}}function gD(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new ZM,e.set(i,[r])):a>=s.length?(r=new ZM,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function vD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new W,color:new se};break;case"SpotLight":n={position:new W,direction:new W,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new W,halfWidth:new W,halfHeight:new W};break}return e[t.id]=n,n}}}function _D(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var yD=0;function xD(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function bD(e){let t=new vD,n=_D(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let a=new W,s=new Je,r=new Je;function o(c){let f=0,p=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,v=0,M=0,g=0,h=0,_=0,b=0,y=0,T=0,E=0,C=0,x=0,w=0,R=0;c.sort(xD);for(let F=0,z=c.length;F<z;F++){let D=c[F],B=D.color,Z=D.intensity,X=D.distance,k=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Js?k=D.shadow.map.texture:k=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=B.r*Z,p+=B.g*Z,u+=B.b*Z;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],Z);R++}else if(D.isSunLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,Q=n.get(D);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[v]=Q,i.sunShadowMap[v]=k;let ot=J.getViewportCount();for(let rt=0;rt<ot;rt++)i.sunShadowMatrix[M+rt]=J.getMatrix(rt),i.sunShadowCascade[M+rt]=J._cascadeData[rt];M+=ot,v++}i.sun[d]=G,d++}else if(D.isDirectionalLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,Q=n.get(D);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=k,i.directionalShadowMatrix[g]=D.shadow.matrix,T++}i.directional[g]=G,g++}else if(D.isSpotLight){let G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(Z),G.distance=X,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[_]=G;let J=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,J.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=J.matrix,D.castShadow){let Q=n.get(D);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=k,C++}_++}else if(D.isRectAreaLight){let G=t.get(D);G.color.copy(B).multiplyScalar(Z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=G,b++}else if(D.isPointLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let J=D.shadow,Q=n.get(D);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,i.pointShadow[h]=Q,i.pointShadowMap[h]=k,i.pointShadowMatrix[h]=D.shadow.matrix,E++}i.point[h]=G,h++}else if(D.isHemisphereLight){let G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(Z),G.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[y]=G,y++}}b>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let I=i.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==h||I.spotLength!==_||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==v||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==C||I.numSpotMaps!==x||I.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=_,i.rectArea.length=b,i.point.length=h,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,I.sunLength=d,I.directionalLength=g,I.pointLength=h,I.spotLength=_,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=v,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=C,I.numSpotMaps=x,I.numLightProbes=R,i.version=yD++)}function l(c,f){let p=0,u=0,d=0,v=0,M=0,g=0,h=f.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let y=c[_];if(y.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(h),u++}else if(y.isSpotLight){let T=i.spot[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(h),v++}else if(y.isRectAreaLight){let T=i.rectArea[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),r.identity(),s.copy(y.matrixWorld),s.premultiply(h),r.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),M++}else if(y.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:i}}function JM(e){let t=new bD(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function SD(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new JM(e),t.set(a,[o])):s>=r.length?(o=new JM(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var MD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ED=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],AD=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],$M=new Je,ru=new W,Ev=new W;function wD(e,t,n){let i=new kc,a=new ae,s=new ae,r=new He,o=new Zf,l=new Jf,c={},f=n.maxTextureSize,p={[Ws]:Hn,[Hn]:Ws,[Ca]:Ca},u=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:MD,fragmentShader:TD}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new wa;v.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ti(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let h=this.type;this.render=function(E,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===X1&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jc);let w=e.getRenderTarget(),R=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Bi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=h!==this.type;z&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=E.length;D<B;D++){let Z=E[D],X=Z.shadow;if(X===void 0){Ot("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);let k=X.getFrameExtents();a.multiply(k),s.copy(X.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/k.x),a.x=s.x*k.x,X.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/k.y),a.y=s.y*k.y,X.mapSize.y=s.y));let G=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=G,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ol){if(Z.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new jn(a.x,a.y,{format:Js,type:ia,minFilter:wn,magFilter:wn,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new Vs(a.x,a.y,na),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=Ta,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn}else Z.isPointLight?(X.map=new Qd(a.x),X.map.depthTexture=new Yf(a.x,ea)):(X.map=new jn(a.x,a.y),X.map.depthTexture=new Vs(a.x,a.y,ea)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=Ta,this.type===Jc?(X.map.depthTexture.compareFunction=G?Zd:Yd,X.map.depthTexture.minFilter=wn,X.map.depthTexture.magFilter=wn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==a.x||X.map.height!==a.y)&&X.map.setSize(a.x,a.y);let J=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,x);for(let Q=0;Q<J;Q++){let ot=X.getCamera(Q);if(Z.isPointLight){let rt=X.camera,ct=X.matrix,Lt=Z.distance||rt.far;Lt!==rt.far&&(rt.far=Lt,rt.updateProjectionMatrix()),ru.setFromMatrixPosition(Z.matrixWorld),rt.position.copy(ru),Ev.copy(rt.position),Ev.add(ED[Q]),rt.up.copy(AD[Q]),rt.lookAt(Ev),rt.updateMatrixWorld(),ct.makeTranslation(-ru.x,-ru.y,-ru.z),$M.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),X._frustum.setFromProjectionMatrix($M,rt.coordinateSystem,rt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,Q),e.clear();else{Q===0&&(e.setRenderTarget(X.map),e.clear());let rt=X.getViewport(Q);r.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),F.viewport(r)}i=X.getFrustum(Q),y(C,x,ot,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ol&&_(X,x),X.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(w,R,I)};function _(E,C){let x=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new jn(a.x,a.y,{format:Js,type:ia}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(C,null,x,d,M,null)}function b(E,C,x,w){let R=null,I=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=R.uuid,z=C.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let B=D[z];B===void 0&&(B=R.clone(),D[z]=B,C.addEventListener("dispose",T)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,w===ol?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=e.properties.get(R);F.light=x}return R}function y(E,C,x,w,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===ol)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let z=t.update(E),D=E.material;if(Array.isArray(D)){let B=z.groups;for(let Z=0,X=B.length;Z<X;Z++){let k=B[Z],G=D[k.materialIndex];if(G&&G.visible){let J=b(E,G,w,R);E.onBeforeShadow(e,E,C,x,z,J,k),e.renderBufferDirect(x,null,z,J,E,k),E.onAfterShadow(e,E,C,x,z,J,k)}}}else if(D.visible){let B=b(E,D,w,R);E.onBeforeShadow(e,E,C,x,z,B,null),e.renderBufferDirect(x,null,z,B,E,null),E.onAfterShadow(e,E,C,x,z,B,null)}}let F=E.children;for(let z=0,D=F.length;z<D;z++)y(F[z],C,x,w,R)}function T(E){E.target.removeEventListener("dispose",T);for(let x in c){let w=c[x],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function CD(e,t){function n(){let O=!1,pt=new He,et=null,ut=new He(0,0,0,0);return{setMask:function(yt){et!==yt&&!O&&(e.colorMask(yt,yt,yt,yt),et=yt)},setLocked:function(yt){O=yt},setClear:function(yt,at,wt,Et,Me){Me===!0&&(yt*=Et,at*=Et,wt*=Et),pt.set(yt,at,wt,Et),ut.equals(pt)===!1&&(e.clearColor(yt,at,wt,Et),ut.copy(pt))},reset:function(){O=!1,et=null,ut.set(-1,0,0,0)}}}function i(){let O=!1,pt=!1,et=null,ut=null,yt=null;return{setReversed:function(at){if(pt!==at){let wt=t.get("EXT_clip_control");at?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),pt=at;let Et=yt;yt=null,this.setClear(Et)}},getReversed:function(){return pt},setTest:function(at){at?tt(e.DEPTH_TEST):bt(e.DEPTH_TEST)},setMask:function(at){et!==at&&!O&&(e.depthMask(at),et=at)},setFunc:function(at){if(pt&&(at=EM[at]),ut!==at){switch(at){case Df:e.depthFunc(e.NEVER);break;case Uf:e.depthFunc(e.ALWAYS);break;case Lf:e.depthFunc(e.LESS);break;case el:e.depthFunc(e.LEQUAL);break;case Of:e.depthFunc(e.EQUAL);break;case If:e.depthFunc(e.GEQUAL);break;case Pf:e.depthFunc(e.GREATER);break;case Bf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ut=at}},setLocked:function(at){O=at},setClear:function(at){yt!==at&&(yt=at,pt&&(at=1-at),e.clearDepth(at))},reset:function(){O=!1,et=null,ut=null,yt=null,pt=!1}}}function a(){let O=!1,pt=null,et=null,ut=null,yt=null,at=null,wt=null,Et=null,Me=null;return{setTest:function(jt){O||(jt?tt(e.STENCIL_TEST):bt(e.STENCIL_TEST))},setMask:function(jt){pt!==jt&&!O&&(e.stencilMask(jt),pt=jt)},setFunc:function(jt,an,bi){(et!==jt||ut!==an||yt!==bi)&&(e.stencilFunc(jt,an,bi),et=jt,ut=an,yt=bi)},setOp:function(jt,an,bi){(at!==jt||wt!==an||Et!==bi)&&(e.stencilOp(jt,an,bi),at=jt,wt=an,Et=bi)},setLocked:function(jt){O=jt},setClear:function(jt){Me!==jt&&(e.clearStencil(jt),Me=jt)},reset:function(){O=!1,pt=null,et=null,ut=null,yt=null,at=null,wt=null,Et=null,Me=null}}}let s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],M=null,g=!1,h=null,_=null,b=null,y=null,T=null,E=null,C=null,x=new se(0,0,0),w=0,R=!1,I=null,F=null,z=null,D=null,B=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,k=0,G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=k>=2);let J=null,Q={},ot=e.getParameter(e.SCISSOR_BOX),rt=e.getParameter(e.VIEWPORT),ct=new He().fromArray(ot),Lt=new He().fromArray(rt);function kt(O,pt,et,ut){let yt=new Uint8Array(4),at=e.createTexture();e.bindTexture(O,at),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let wt=0;wt<et;wt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(pt,0,e.RGBA,1,1,ut,0,e.RGBA,e.UNSIGNED_BYTE,yt):e.texImage2D(pt+wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,yt);return at}let $={};$[e.TEXTURE_2D]=kt(e.TEXTURE_2D,e.TEXTURE_2D,1),$[e.TEXTURE_CUBE_MAP]=kt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[e.TEXTURE_2D_ARRAY]=kt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),$[e.TEXTURE_3D]=kt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(el),Xt(!1),re(Wg),tt(e.CULL_FACE),Zt(Bi);function tt(O){f[O]!==!0&&(e.enable(O),f[O]=!0)}function bt(O){f[O]!==!1&&(e.disable(O),f[O]=!1)}function Dt(O,pt){return u[O]!==pt?(e.bindFramebuffer(O,pt),u[O]=pt,O===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=pt),O===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=pt),!0):!1}function ht(O,pt){let et=v,ut=!1;if(O){et=d.get(pt),et===void 0&&(et=[],d.set(pt,et));let yt=O.textures;if(et.length!==yt.length||et[0]!==e.COLOR_ATTACHMENT0){for(let at=0,wt=yt.length;at<wt;at++)et[at]=e.COLOR_ATTACHMENT0+at;et.length=yt.length,ut=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,ut=!0);ut&&e.drawBuffers(et)}function Nt(O){return M!==O?(e.useProgram(O),M=O,!0):!1}let Ae={[Pr]:e.FUNC_ADD,[q1]:e.FUNC_SUBTRACT,[Y1]:e.FUNC_REVERSE_SUBTRACT};Ae[Z1]=e.MIN,Ae[J1]=e.MAX;let Bt={[$1]:e.ZERO,[K1]:e.ONE,[Q1]:e.SRC_COLOR,[Jg]:e.SRC_ALPHA,[aM]:e.SRC_ALPHA_SATURATE,[nM]:e.DST_COLOR,[tM]:e.DST_ALPHA,[j1]:e.ONE_MINUS_SRC_COLOR,[$g]:e.ONE_MINUS_SRC_ALPHA,[iM]:e.ONE_MINUS_DST_COLOR,[eM]:e.ONE_MINUS_DST_ALPHA,[sM]:e.CONSTANT_COLOR,[rM]:e.ONE_MINUS_CONSTANT_COLOR,[oM]:e.CONSTANT_ALPHA,[lM]:e.ONE_MINUS_CONSTANT_ALPHA};function Zt(O,pt,et,ut,yt,at,wt,Et,Me,jt){if(O===Bi){g===!0&&(bt(e.BLEND),g=!1);return}if(g===!1&&(tt(e.BLEND),g=!0),O!==W1){if(O!==h||jt!==R){if((_!==Pr||T!==Pr)&&(e.blendEquation(e.FUNC_ADD),_=Pr,T=Pr),jt)switch(O){case ll:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case qg:e.blendFunc(e.ONE,e.ONE);break;case Yg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pt("WebGLState: Invalid blending: ",O);break}else switch(O){case ll:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case qg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Yg:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zg:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",O);break}b=null,y=null,E=null,C=null,x.set(0,0,0),w=0,h=O,R=jt}return}yt=yt||pt,at=at||et,wt=wt||ut,(pt!==_||yt!==T)&&(e.blendEquationSeparate(Ae[pt],Ae[yt]),_=pt,T=yt),(et!==b||ut!==y||at!==E||wt!==C)&&(e.blendFuncSeparate(Bt[et],Bt[ut],Bt[at],Bt[wt]),b=et,y=ut,E=at,C=wt),(Et.equals(x)===!1||Me!==w)&&(e.blendColor(Et.r,Et.g,Et.b,Me),x.copy(Et),w=Me),h=O,R=!1}function oe(O,pt){O.side===Ca?bt(e.CULL_FACE):tt(e.CULL_FACE);let et=O.side===Hn;pt&&(et=!et),Xt(et),O.blending===ll&&O.transparent===!1?Zt(Bi):Zt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);let ut=O.stencilWrite;o.setTest(ut),ut&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Xe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(O){I!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),I=O)}function re(O){O!==G1?(tt(e.CULL_FACE),O!==F&&(O===Wg?e.cullFace(e.BACK):O===k1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):bt(e.CULL_FACE),F=O}function Ne(O){O!==z&&(X&&e.lineWidth(O),z=O)}function Xe(O,pt,et){O?(tt(e.POLYGON_OFFSET_FILL),(D!==pt||B!==et)&&(D=pt,B=et,r.getReversed()&&(pt=-pt),e.polygonOffset(pt,et))):bt(e.POLYGON_OFFSET_FILL)}function de(O){O?tt(e.SCISSOR_TEST):bt(e.SCISSOR_TEST)}function we(O){O===void 0&&(O=e.TEXTURE0+Z-1),J!==O&&(e.activeTexture(O),J=O)}function L(O,pt,et){et===void 0&&(J===null?et=e.TEXTURE0+Z-1:et=J);let ut=Q[et];ut===void 0&&(ut={type:void 0,texture:void 0},Q[et]=ut),(ut.type!==O||ut.texture!==pt)&&(J!==et&&(e.activeTexture(et),J=et),e.bindTexture(O,pt||$[O]),ut.type=O,ut.texture=pt)}function Se(){let O=Q[J];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function it(){try{e.compressedTexImage2D(...arguments)}catch(O){Pt("WebGLState:",O)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(O){Pt("WebGLState:",O)}}function m(){try{e.texSubImage2D(...arguments)}catch(O){Pt("WebGLState:",O)}}function N(){try{e.texSubImage3D(...arguments)}catch(O){Pt("WebGLState:",O)}}function P(){try{e.compressedTexSubImage2D(...arguments)}catch(O){Pt("WebGLState:",O)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(O){Pt("WebGLState:",O)}}function st(){try{e.texStorage2D(...arguments)}catch(O){Pt("WebGLState:",O)}}function lt(){try{e.texStorage3D(...arguments)}catch(O){Pt("WebGLState:",O)}}function K(){try{e.texImage2D(...arguments)}catch(O){Pt("WebGLState:",O)}}function j(){try{e.texImage3D(...arguments)}catch(O){Pt("WebGLState:",O)}}function ft(O){return p[O]!==void 0?p[O]:e.getParameter(O)}function Ct(O,pt){p[O]!==pt&&(e.pixelStorei(O,pt),p[O]=pt)}function gt(O){ct.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),ct.copy(O))}function dt(O){Lt.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),Lt.copy(O))}function Rt(O,pt){let et=c.get(pt);et===void 0&&(et=new WeakMap,c.set(pt,et));let ut=et.get(O);ut===void 0&&(ut=e.getUniformBlockIndex(pt,O.name),et.set(O,ut))}function Ut(O,pt){let ut=c.get(pt).get(O);l.get(pt)!==ut&&(e.uniformBlockBinding(pt,ut,O.__bindingPointIndex),l.set(pt,ut))}function Vt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},J=null,Q={},u={},d=new WeakMap,v=[],M=null,g=!1,h=null,_=null,b=null,y=null,T=null,E=null,C=null,x=new se(0,0,0),w=0,R=!1,I=null,F=null,z=null,D=null,B=null,ct.set(0,0,e.canvas.width,e.canvas.height),Lt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:tt,disable:bt,bindFramebuffer:Dt,drawBuffers:ht,useProgram:Nt,setBlending:Zt,setMaterial:oe,setFlipSided:Xt,setCullFace:re,setLineWidth:Ne,setPolygonOffset:Xe,setScissorTest:de,activeTexture:we,bindTexture:L,unbindTexture:Se,compressedTexImage2D:it,compressedTexImage3D:A,texImage2D:K,texImage3D:j,pixelStorei:Ct,getParameter:ft,updateUBOMapping:Rt,uniformBlockBinding:Ut,texStorage2D:st,texStorage3D:lt,texSubImage2D:m,texSubImage3D:N,compressedTexSubImage2D:P,compressedTexSubImage3D:Y,scissor:gt,viewport:dt,reset:Vt}}function RD(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,f=new WeakMap,p=new Set,u,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,m){return v?new OffscreenCanvas(A,m):Pc("canvas")}function g(A,m,N){let P=1,Y=it(A);if((Y.width>N||Y.height>N)&&(P=N/Math.max(Y.width,Y.height)),P<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let st=Math.floor(P*Y.width),lt=Math.floor(P*Y.height);u===void 0&&(u=M(st,lt));let K=m?M(st,lt):u;return K.width=st,K.height=lt,K.getContext("2d").drawImage(A,0,0,st,lt),Ot("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+st+"x"+lt+")."),K}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function h(A){return A.generateMipmaps}function _(A){e.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(A,m,N,P,Y,st=!1){if(A!==null){if(e[A]!==void 0)return e[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt;P&&(lt=t.get("EXT_texture_norm16"),lt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=m;if(m===e.RED&&(N===e.FLOAT&&(K=e.R32F),N===e.HALF_FLOAT&&(K=e.R16F),N===e.UNSIGNED_BYTE&&(K=e.R8),N===e.UNSIGNED_SHORT&&lt&&(K=lt.R16_EXT),N===e.SHORT&&lt&&(K=lt.R16_SNORM_EXT)),m===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(K=e.R8UI),N===e.UNSIGNED_SHORT&&(K=e.R16UI),N===e.UNSIGNED_INT&&(K=e.R32UI),N===e.BYTE&&(K=e.R8I),N===e.SHORT&&(K=e.R16I),N===e.INT&&(K=e.R32I)),m===e.RG&&(N===e.FLOAT&&(K=e.RG32F),N===e.HALF_FLOAT&&(K=e.RG16F),N===e.UNSIGNED_BYTE&&(K=e.RG8),N===e.UNSIGNED_SHORT&&lt&&(K=lt.RG16_EXT),N===e.SHORT&&lt&&(K=lt.RG16_SNORM_EXT)),m===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(K=e.RG8UI),N===e.UNSIGNED_SHORT&&(K=e.RG16UI),N===e.UNSIGNED_INT&&(K=e.RG32UI),N===e.BYTE&&(K=e.RG8I),N===e.SHORT&&(K=e.RG16I),N===e.INT&&(K=e.RG32I)),m===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(K=e.RGB8UI),N===e.UNSIGNED_SHORT&&(K=e.RGB16UI),N===e.UNSIGNED_INT&&(K=e.RGB32UI),N===e.BYTE&&(K=e.RGB8I),N===e.SHORT&&(K=e.RGB16I),N===e.INT&&(K=e.RGB32I)),m===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),N===e.UNSIGNED_INT&&(K=e.RGBA32UI),N===e.BYTE&&(K=e.RGBA8I),N===e.SHORT&&(K=e.RGBA16I),N===e.INT&&(K=e.RGBA32I)),m===e.RGB&&(N===e.UNSIGNED_SHORT&&lt&&(K=lt.RGB16_EXT),N===e.SHORT&&lt&&(K=lt.RGB16_SNORM_EXT),N===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),m===e.RGBA){let j=st?Oc:ee.getTransfer(Y);N===e.FLOAT&&(K=e.RGBA32F),N===e.HALF_FLOAT&&(K=e.RGBA16F),N===e.UNSIGNED_BYTE&&(K=j===_e?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT&&lt&&(K=lt.RGBA16_EXT),N===e.SHORT&&lt&&(K=lt.RGBA16_SNORM_EXT),N===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function T(A,m){let N;return A?m===null||m===ea||m===ul?N=e.DEPTH24_STENCIL8:m===na?N=e.DEPTH32F_STENCIL8:m===cl&&(N=e.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===ea||m===ul?N=e.DEPTH_COMPONENT24:m===na?N=e.DEPTH_COMPONENT32F:m===cl&&(N=e.DEPTH_COMPONENT16),N}function E(A,m){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==vn&&A.minFilter!==wn?Math.log2(Math.max(m.width,m.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?m.mipmaps.length:1}function C(A){let m=A.target;m.removeEventListener("dispose",C),w(m),m.isVideoTexture&&f.delete(m),m.isHTMLTexture&&p.delete(m)}function x(A){let m=A.target;m.removeEventListener("dispose",x),I(m)}function w(A){let m=i.get(A);if(m.__webglInit===void 0)return;let N=A.source,P=d.get(N);if(P){let Y=P[m.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(A),Object.keys(P).length===0&&d.delete(N)}i.remove(A)}function R(A){let m=i.get(A);e.deleteTexture(m.__webglTexture);let N=A.source,P=d.get(N);delete P[m.__cacheKey],r.memory.textures--}function I(A){let m=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(m.__webglFramebuffer[P]))for(let Y=0;Y<m.__webglFramebuffer[P].length;Y++)e.deleteFramebuffer(m.__webglFramebuffer[P][Y]);else e.deleteFramebuffer(m.__webglFramebuffer[P]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[P])}else{if(Array.isArray(m.__webglFramebuffer))for(let P=0;P<m.__webglFramebuffer.length;P++)e.deleteFramebuffer(m.__webglFramebuffer[P]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let P=0;P<m.__webglColorRenderbuffer.length;P++)m.__webglColorRenderbuffer[P]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[P]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let N=A.textures;for(let P=0,Y=N.length;P<Y;P++){let st=i.get(N[P]);st.__webglTexture&&(e.deleteTexture(st.__webglTexture),r.memory.textures--),i.remove(N[P])}i.remove(A)}let F=0;function z(){F=0}function D(){return F}function B(A){F=A}function Z(){let A=F;return A>=a.maxTextures&&Ot("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+a.maxTextures),F+=1,A}function X(A){let m=[];return m.push(A.wrapS),m.push(A.wrapT),m.push(A.wrapR||0),m.push(A.magFilter),m.push(A.minFilter),m.push(A.anisotropy),m.push(A.internalFormat),m.push(A.format),m.push(A.type),m.push(A.generateMipmaps),m.push(A.premultiplyAlpha),m.push(A.flipY),m.push(A.unpackAlignment),m.push(A.colorSpace),m.join()}function k(A,m){let N=i.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){let P=A.image;if(P===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(N,A,m);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+m)}function G(A,m){let N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){bt(N,A,m);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+m)}function J(A,m){let N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){bt(N,A,m);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+m)}function Q(A,m){let N=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){Dt(N,A,m);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+m)}let ot={[zf]:e.REPEAT,[Ma]:e.CLAMP_TO_EDGE,[Ff]:e.MIRRORED_REPEAT},rt={[vn]:e.NEAREST,[hM]:e.NEAREST_MIPMAP_NEAREST,[Kc]:e.NEAREST_MIPMAP_LINEAR,[wn]:e.LINEAR,[ud]:e.LINEAR_MIPMAP_NEAREST,[Ys]:e.LINEAR_MIPMAP_LINEAR},ct={[mM]:e.NEVER,[xM]:e.ALWAYS,[gM]:e.LESS,[Yd]:e.LEQUAL,[vM]:e.EQUAL,[Zd]:e.GEQUAL,[_M]:e.GREATER,[yM]:e.NOTEQUAL};function Lt(A,m){if(m.type===na&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===wn||m.magFilter===ud||m.magFilter===Kc||m.magFilter===Ys||m.minFilter===wn||m.minFilter===ud||m.minFilter===Kc||m.minFilter===Ys)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,ot[m.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,ot[m.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,ot[m.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,rt[m.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,rt[m.minFilter]),m.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,ct[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===vn||m.minFilter!==Kc&&m.minFilter!==Ys||m.type===na&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,a.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function kt(A,m){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,m.addEventListener("dispose",C));let P=m.source,Y=d.get(P);Y===void 0&&(Y={},d.set(P,Y));let st=X(m);if(st!==A.__cacheKey){Y[st]===void 0&&(Y[st]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,N=!0),Y[st].usedTimes++;let lt=Y[A.__cacheKey];lt!==void 0&&(Y[A.__cacheKey].usedTimes--,lt.usedTimes===0&&R(m)),A.__cacheKey=st,A.__webglTexture=Y[st].texture}return N}function $(A,m,N){return Math.floor(Math.floor(A/N)/m)}function tt(A,m,N,P){let st=A.updateRanges;if(st.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,N,P,m.data);else{st.sort((Ct,gt)=>Ct.start-gt.start);let lt=0;for(let Ct=1;Ct<st.length;Ct++){let gt=st[lt],dt=st[Ct],Rt=gt.start+gt.count,Ut=$(dt.start,m.width,4),Vt=$(gt.start,m.width,4);dt.start<=Rt+1&&Ut===Vt&&$(dt.start+dt.count-1,m.width,4)===Ut?gt.count=Math.max(gt.count,dt.start+dt.count-gt.start):(++lt,st[lt]=dt)}st.length=lt+1;let K=n.getParameter(e.UNPACK_ROW_LENGTH),j=n.getParameter(e.UNPACK_SKIP_PIXELS),ft=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let Ct=0,gt=st.length;Ct<gt;Ct++){let dt=st[Ct],Rt=Math.floor(dt.start/4),Ut=Math.ceil(dt.count/4),Vt=Rt%m.width,O=Math.floor(Rt/m.width),pt=Ut,et=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,Vt,O,pt,et,N,P,m.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,K),n.pixelStorei(e.UNPACK_SKIP_PIXELS,j),n.pixelStorei(e.UNPACK_SKIP_ROWS,ft)}}function bt(A,m,N){let P=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(P=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(P=e.TEXTURE_3D);let Y=kt(A,m),st=m.source;n.bindTexture(P,A.__webglTexture,e.TEXTURE0+N);let lt=i.get(st);if(st.version!==lt.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+N),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let et=ee.getPrimaries(ee.workingColorSpace),ut=m.colorSpace===Fi?null:ee.getPrimaries(m.colorSpace),yt=m.colorSpace===Fi||et===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}n.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment);let j=g(m.image,!1,a.maxTextureSize);j=Se(m,j);let ft=s.convert(m.format,m.colorSpace),Ct=s.convert(m.type),gt=y(m.internalFormat,ft,Ct,m.normalized,m.colorSpace,m.isVideoTexture);Lt(P,m);let dt,Rt=m.mipmaps,Ut=m.isVideoTexture!==!0,Vt=lt.__version===void 0||Y===!0,O=st.dataReady,pt=E(m,j);if(m.isDepthTexture)gt=T(m.format===Zs,m.type),Vt&&(Ut?n.texStorage2D(e.TEXTURE_2D,1,gt,j.width,j.height):n.texImage2D(e.TEXTURE_2D,0,gt,j.width,j.height,0,ft,Ct,null));else if(m.isDataTexture)if(Rt.length>0){Ut&&Vt&&n.texStorage2D(e.TEXTURE_2D,pt,gt,Rt[0].width,Rt[0].height);for(let et=0,ut=Rt.length;et<ut;et++)dt=Rt[et],Ut?O&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,dt.width,dt.height,ft,Ct,dt.data):n.texImage2D(e.TEXTURE_2D,et,gt,dt.width,dt.height,0,ft,Ct,dt.data);m.generateMipmaps=!1}else Ut?(Vt&&n.texStorage2D(e.TEXTURE_2D,pt,gt,j.width,j.height),O&&tt(m,j,ft,Ct)):n.texImage2D(e.TEXTURE_2D,0,gt,j.width,j.height,0,ft,Ct,j.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ut&&Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,gt,Rt[0].width,Rt[0].height,j.depth);for(let et=0,ut=Rt.length;et<ut;et++)if(dt=Rt[et],m.format!==zi)if(ft!==null)if(Ut){if(O)if(m.layerUpdates.size>0){let yt=yv(dt.width,dt.height,m.format,m.type);for(let at of m.layerUpdates){let wt=dt.data.subarray(at*yt/dt.data.BYTES_PER_ELEMENT,(at+1)*yt/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,at,dt.width,dt.height,1,ft,wt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,j.depth,ft,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,gt,dt.width,dt.height,j.depth,0,dt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?O&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,dt.width,dt.height,j.depth,ft,Ct,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,gt,dt.width,dt.height,j.depth,0,ft,Ct,dt.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ut&&Vt&&n.texStorage2D(e.TEXTURE_2D,pt,gt,Rt[0].width,Rt[0].height);for(let et=0,ut=Rt.length;et<ut;et++)dt=Rt[et],m.format!==zi?ft!==null?Ut?O&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,dt.width,dt.height,ft,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,et,gt,dt.width,dt.height,0,dt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?O&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,dt.width,dt.height,ft,Ct,dt.data):n.texImage2D(e.TEXTURE_2D,et,gt,dt.width,dt.height,0,ft,Ct,dt.data)}else if(m.isDataArrayTexture)if(Ut){if(Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,gt,j.width,j.height,j.depth),O)if(m.layerUpdates.size>0){let et=yv(j.width,j.height,m.format,m.type);for(let ut of m.layerUpdates){let yt=j.data.subarray(ut*et/j.data.BYTES_PER_ELEMENT,(ut+1)*et/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ut,j.width,j.height,1,ft,Ct,yt)}m.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,Ct,j.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,gt,j.width,j.height,j.depth,0,ft,Ct,j.data);else if(m.isData3DTexture)Ut?(Vt&&n.texStorage3D(e.TEXTURE_3D,pt,gt,j.width,j.height,j.depth),O&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,Ct,j.data)):n.texImage3D(e.TEXTURE_3D,0,gt,j.width,j.height,j.depth,0,ft,Ct,j.data);else if(m.isFramebufferTexture){if(Vt)if(Ut)n.texStorage2D(e.TEXTURE_2D,pt,gt,j.width,j.height);else{let et=j.width,ut=j.height;for(let yt=0;yt<pt;yt++)n.texImage2D(e.TEXTURE_2D,yt,gt,et,ut,0,ft,Ct,null),et>>=1,ut>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in e){let et=e.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),j.parentNode!==et){et.appendChild(j),p.add(m),et.onpaint=ut=>{let yt=ut.changedElements;for(let at of p)yt.includes(at.image)&&(at.needsUpdate=!0)},et.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,j);else{let yt=e.RGBA,at=e.RGBA,wt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,yt,at,wt,j)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Ut&&Vt){let et=it(Rt[0]);n.texStorage2D(e.TEXTURE_2D,pt,gt,et.width,et.height)}for(let et=0,ut=Rt.length;et<ut;et++)dt=Rt[et],Ut?O&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ft,Ct,dt):n.texImage2D(e.TEXTURE_2D,et,gt,ft,Ct,dt);m.generateMipmaps=!1}else if(Ut){if(Vt){let et=it(j);n.texStorage2D(e.TEXTURE_2D,pt,gt,et.width,et.height)}O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Ct,j)}else n.texImage2D(e.TEXTURE_2D,0,gt,ft,Ct,j);h(m)&&_(P),lt.__version=st.version,m.onUpdate&&m.onUpdate(m)}A.__version=m.version}function Dt(A,m,N){if(m.image.length!==6)return;let P=kt(A,m),Y=m.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+N);let st=i.get(Y);if(Y.version!==st.__version||P===!0){n.activeTexture(e.TEXTURE0+N);let lt=ee.getPrimaries(ee.workingColorSpace),K=m.colorSpace===Fi?null:ee.getPrimaries(m.colorSpace),j=m.colorSpace===Fi||lt===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ft=m.isCompressedTexture||m.image[0].isCompressedTexture,Ct=m.image[0]&&m.image[0].isDataTexture,gt=[];for(let at=0;at<6;at++)!ft&&!Ct?gt[at]=g(m.image[at],!0,a.maxCubemapSize):gt[at]=Ct?m.image[at].image:m.image[at],gt[at]=Se(m,gt[at]);let dt=gt[0],Rt=s.convert(m.format,m.colorSpace),Ut=s.convert(m.type),Vt=y(m.internalFormat,Rt,Ut,m.normalized,m.colorSpace),O=m.isVideoTexture!==!0,pt=st.__version===void 0||P===!0,et=Y.dataReady,ut=E(m,dt);Lt(e.TEXTURE_CUBE_MAP,m);let yt;if(ft){O&&pt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Vt,dt.width,dt.height);for(let at=0;at<6;at++){yt=gt[at].mipmaps;for(let wt=0;wt<yt.length;wt++){let Et=yt[wt];m.format!==zi?Rt!==null?O?et&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,0,0,Et.width,Et.height,Rt,Et.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,Vt,Et.width,Et.height,0,Et.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,0,0,Et.width,Et.height,Rt,Ut,Et.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,Vt,Et.width,Et.height,0,Rt,Ut,Et.data)}}}else{if(yt=m.mipmaps,O&&pt){yt.length>0&&ut++;let at=it(gt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Vt,at.width,at.height)}for(let at=0;at<6;at++)if(Ct){O?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,gt[at].width,gt[at].height,Rt,Ut,gt[at].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Vt,gt[at].width,gt[at].height,0,Rt,Ut,gt[at].data);for(let wt=0;wt<yt.length;wt++){let Me=yt[wt].image[at].image;O?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,0,0,Me.width,Me.height,Rt,Ut,Me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,Vt,Me.width,Me.height,0,Rt,Ut,Me.data)}}else{O?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Rt,Ut,gt[at]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Vt,Rt,Ut,gt[at]);for(let wt=0;wt<yt.length;wt++){let Et=yt[wt];O?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,0,0,Rt,Ut,Et.image[at]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,Vt,Rt,Ut,Et.image[at])}}}h(m)&&_(e.TEXTURE_CUBE_MAP),st.__version=Y.version,m.onUpdate&&m.onUpdate(m)}A.__version=m.version}function ht(A,m,N,P,Y,st){let lt=s.convert(N.format,N.colorSpace),K=s.convert(N.type),j=y(N.internalFormat,lt,K,N.normalized,N.colorSpace),ft=i.get(m),Ct=i.get(N);if(Ct.__renderTarget=m,!ft.__hasExternalTextures){let gt=Math.max(1,m.width>>st),dt=Math.max(1,m.height>>st);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,st,j,gt,dt,m.depth,0,lt,K,null):n.texImage2D(Y,st,j,gt,dt,0,lt,K,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),we(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,P,Y,Ct.__webglTexture,0,de(m)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,P,Y,Ct.__webglTexture,st),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Nt(A,m,N){if(e.bindRenderbuffer(e.RENDERBUFFER,A),m.depthBuffer){let P=m.depthTexture,Y=P&&P.isDepthTexture?P.type:null,st=T(m.stencilBuffer,Y),lt=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;we(m)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(m),st,m.width,m.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(m),st,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,st,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,lt,e.RENDERBUFFER,A)}else{let P=m.textures;for(let Y=0;Y<P.length;Y++){let st=P[Y],lt=s.convert(st.format,st.colorSpace),K=s.convert(st.type),j=y(st.internalFormat,lt,K,st.normalized,st.colorSpace);we(m)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(m),j,m.width,m.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(m),j,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,j,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(A,m,N){let P=m.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(m.depthTexture);if(Y.__renderTarget=m,(!Y.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),P){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,m.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,m.depthTexture);let ft=s.convert(m.depthTexture.format),Ct=s.convert(m.depthTexture.type),gt;m.depthTexture.format===Ta?gt=e.DEPTH_COMPONENT24:m.depthTexture.format===Zs&&(gt=e.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,gt,m.width,m.height,0,ft,Ct,null)}}else k(m.depthTexture,0);let st=Y.__webglTexture,lt=de(m),K=P?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,j=m.depthTexture.format===Zs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===Ta)we(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,K,st,0,lt):e.framebufferTexture2D(e.FRAMEBUFFER,j,K,st,0);else if(m.depthTexture.format===Zs)we(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,K,st,0,lt):e.framebufferTexture2D(e.FRAMEBUFFER,j,K,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(A){let m=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==A.depthTexture){let P=A.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),P){let Y=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,P.removeEventListener("dispose",Y)};P.addEventListener("dispose",Y),m.__depthDisposeCallback=Y}m.__boundDepthTexture=P}if(A.depthTexture&&!m.__autoAllocateDepthBuffer)if(N)for(let P=0;P<6;P++)Ae(m.__webglFramebuffer[P],A,P);else{let P=A.texture.mipmaps;P&&P.length>0?Ae(m.__webglFramebuffer[0],A,0):Ae(m.__webglFramebuffer,A,0)}else if(N){m.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[P]),m.__webglDepthbuffer[P]===void 0)m.__webglDepthbuffer[P]=e.createRenderbuffer(),Nt(m.__webglDepthbuffer[P],A,!1);else{let Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=m.__webglDepthbuffer[P];e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,st)}}else{let P=A.texture.mipmaps;if(P&&P.length>0?n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),Nt(m.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,st)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Zt(A,m,N){let P=i.get(A);m!==void 0&&ht(P.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&Bt(A)}function oe(A){let m=A.texture,N=i.get(A),P=i.get(m);A.addEventListener("dispose",x);let Y=A.textures,st=A.isWebGLCubeRenderTarget===!0,lt=Y.length>1;if(lt||(P.__webglTexture===void 0&&(P.__webglTexture=e.createTexture()),P.__version=m.version,r.memory.textures++),st){N.__webglFramebuffer=[];for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer[K]=[];for(let j=0;j<m.mipmaps.length;j++)N.__webglFramebuffer[K][j]=e.createFramebuffer()}else N.__webglFramebuffer[K]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer=[];for(let K=0;K<m.mipmaps.length;K++)N.__webglFramebuffer[K]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(lt)for(let K=0,j=Y.length;K<j;K++){let ft=i.get(Y[K]);ft.__webglTexture===void 0&&(ft.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&we(A)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let j=Y[K];N.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[K]);let ft=s.convert(j.format,j.colorSpace),Ct=s.convert(j.type),gt=y(j.internalFormat,ft,Ct,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),dt=de(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,dt,gt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,N.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),Nt(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(st){n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,m);for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0)for(let j=0;j<m.mipmaps.length;j++)ht(N.__webglFramebuffer[K][j],A,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else ht(N.__webglFramebuffer[K],A,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(m)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(lt){for(let K=0,j=Y.length;K<j;K++){let ft=Y[K],Ct=i.get(ft),gt=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(gt,Ct.__webglTexture),Lt(gt,ft),ht(N.__webglFramebuffer,A,ft,e.COLOR_ATTACHMENT0+K,gt,0),h(ft)&&_(gt)}n.unbindTexture()}else{let K=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,P.__webglTexture),Lt(K,m),m.mipmaps&&m.mipmaps.length>0)for(let j=0;j<m.mipmaps.length;j++)ht(N.__webglFramebuffer[j],A,m,e.COLOR_ATTACHMENT0,K,j);else ht(N.__webglFramebuffer,A,m,e.COLOR_ATTACHMENT0,K,0);h(m)&&_(K),n.unbindTexture()}A.depthBuffer&&Bt(A)}function Xt(A){let m=A.textures;for(let N=0,P=m.length;N<P;N++){let Y=m[N];if(h(Y)){let st=b(A),lt=i.get(Y).__webglTexture;n.bindTexture(st,lt),_(st),n.unbindTexture()}}}let re=[],Ne=[];function Xe(A){if(A.samples>0){if(we(A)===!1){let m=A.textures,N=A.width,P=A.height,Y=e.COLOR_BUFFER_BIT,st=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=i.get(A),K=m.length>1;if(K)for(let ft=0;ft<m.length;ft++)n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ft=0;ft<m.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);let Ct=i.get(m[ft]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ct,0)}e.blitFramebuffer(0,0,N,P,0,0,N,P,Y,e.NEAREST),l===!0&&(re.length=0,Ne.length=0,re.push(e.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(re.push(st),Ne.push(st),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ne)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let ft=0;ft<m.length;ft++){n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);let Ct=i.get(m[ft]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,Ct,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let m=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function de(A){return Math.min(a.maxSamples,A.samples)}function we(A){let m=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function L(A){let m=r.render.frame;f.get(A)!==m&&(f.set(A,m),A.update())}function Se(A,m){let N=A.colorSpace,P=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Lc&&N!==Fi&&(ee.getTransfer(N)===_e?(P!==zi||Y!==yi)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",N)),m}function it(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=z,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=Zt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ND(e,t){function n(i,a=Fi){let s,r=ee.getTransfer(a);if(i===yi)return e.UNSIGNED_BYTE;if(i===fd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===dd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===cv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===rv)return e.BYTE;if(i===ov)return e.SHORT;if(i===cl)return e.UNSIGNED_SHORT;if(i===hd)return e.INT;if(i===ea)return e.UNSIGNED_INT;if(i===na)return e.FLOAT;if(i===ia)return e.HALF_FLOAT;if(i===uv)return e.ALPHA;if(i===hv)return e.RGB;if(i===zi)return e.RGBA;if(i===Ta)return e.DEPTH_COMPONENT;if(i===Zs)return e.DEPTH_STENCIL;if(i===fv)return e.RED;if(i===pd)return e.RED_INTEGER;if(i===Js)return e.RG;if(i===md)return e.RG_INTEGER;if(i===gd)return e.RGBA_INTEGER;if(i===Qc||i===jc||i===tu||i===eu)if(r===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===_d||i===yd||i===xd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bd||i===Sd||i===Md||i===Td||i===Ed||i===nu||i===Ad)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bd||i===Sd)return r===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Md)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Td)return s.COMPRESSED_R11_EAC;if(i===Ed)return s.COMPRESSED_SIGNED_R11_EAC;if(i===nu)return s.COMPRESSED_RG11_EAC;if(i===Ad)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wd||i===Cd||i===Rd||i===Nd||i===Dd||i===Ud||i===Ld||i===Od||i===Id||i===Pd||i===Bd||i===zd||i===Fd||i===Hd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ud)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ld)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Od)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Id)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vd||i===Gd||i===kd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Vd)return r===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===Wd||i===iu||i===qd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ul?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var DD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Wc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Fn({vertexShader:DD,fragmentShader:UD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new Or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ov=class extends Ea{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,M=typeof XRWebGLBinding<"u",g=new Lv,h={},_=n.getContextAttributes(),b=null,y=null,T=[],E=[],C=new ae,x=null,w=null,R=new Kn;R.viewport=new He;let I=new Kn;I.viewport=new He;let F=[R,I],z=new od,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=T[$];return tt===void 0&&(tt=new al,T[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=T[$];return tt===void 0&&(tt=new al,T[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=T[$];return tt===void 0&&(tt=new al,T[$]=tt),tt.getHandSpace()};function Z($){let tt=E.indexOf($.inputSource);if(tt===-1)return;let bt=T[tt];bt!==void 0&&(bt.update($.inputSource,$.frame,c||r),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",k);for(let $=0;$<T.length;$++){let tt=E[$];tt!==null&&(E[$]=null,T[$].disconnect(tt))}D=null,B=null,g.reset();for(let $ in h)delete h[$];if(t.setRenderTarget(b),d=null,u=null,p=null,a=null,y=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(b=t.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",X),a.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Dt=null,ht=null;_.depth&&(ht=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=_.stencil?Zs:Ta,Dt=_.stencil?ul:ea);let Nt={colorFormat:n.RGBA8,depthFormat:ht,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Nt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new jn(u.textureWidth,u.textureHeight,{format:zi,type:yi,depthTexture:new Vs(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,n,bt),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new jn(d.framebufferWidth,d.framebufferHeight,{format:zi,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),kt.setContext(a),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k($){for(let tt=0;tt<$.removed.length;tt++){let bt=$.removed[tt],Dt=E.indexOf(bt);Dt>=0&&(E[Dt]=null,T[Dt].disconnect(bt))}for(let tt=0;tt<$.added.length;tt++){let bt=$.added[tt],Dt=E.indexOf(bt);if(Dt===-1){for(let Nt=0;Nt<T.length;Nt++)if(Nt>=E.length){E.push(bt),Dt=Nt;break}else if(E[Nt]===null){E[Nt]=bt,Dt=Nt;break}if(Dt===-1)break}let ht=T[Dt];ht&&ht.connect(bt)}}let G=new W,J=new W;function Q($,tt,bt){G.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(bt.matrixWorld);let Dt=G.distanceTo(J),ht=tt.projectionMatrix.elements,Nt=bt.projectionMatrix.elements,Ae=ht[14]/(ht[10]-1),Bt=ht[14]/(ht[10]+1),Zt=(ht[9]+1)/ht[5],oe=(ht[9]-1)/ht[5],Xt=(ht[8]-1)/ht[0],re=(Nt[8]+1)/Nt[0],Ne=Ae*Xt,Xe=Ae*re,de=Dt/(-Xt+re),we=de*-Xt;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(we),$.translateZ(de),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ht[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let L=Ae+de,Se=Bt+de,it=Ne-we,A=Xe+(Dt-we),m=Zt*Bt/Se*L,N=oe*Bt/Se*L;$.projectionMatrix.makePerspective(it,A,m,N,L,Se),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ot($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let tt=$.near,bt=$.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),z.near=I.near=R.near=tt,z.far=I.far=R.far=bt,(D!==z.near||B!==z.far)&&(a.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,B=z.far),z.layers.mask=$.layers.mask|6,R.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;let Dt=$.parent,ht=z.cameras;ot(z,Dt);for(let Nt=0;Nt<ht.length;Nt++)ot(ht[Nt],Dt);ht.length===2?Q(z,R,I):z.projectionMatrix.copy(R.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),rt($,z,Dt)};function rt($,tt,bt){bt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function($){return h[$]};let ct=null;function Lt($,tt){if(f=tt.getViewerPose(c||r),v=tt,f!==null){let bt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Dt=!1;bt.length!==z.cameras.length&&(z.cameras.length=0,Dt=!0);for(let Bt=0;Bt<bt.length;Bt++){let Zt=bt[Bt],oe=null;if(d!==null)oe=d.getViewport(Zt);else{let re=p.getViewSubImage(u,Zt);oe=re.viewport,Bt===0&&(t.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(y))}let Xt=F[Bt];Xt===void 0&&(Xt=new Kn,Xt.layers.enable(Bt),Xt.viewport=new He,F[Bt]=Xt),Xt.matrix.fromArray(Zt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Zt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(oe.x,oe.y,oe.width,oe.height),Bt===0&&(z.matrix.copy(Xt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Dt===!0&&z.cameras.push(Xt)}let ht=a.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let Bt=p.getDepthInformation(bt[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(Bt,a.renderState)}if(ht&&ht.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Bt=0;Bt<bt.length;Bt++){let Zt=bt[Bt].camera;if(Zt){let oe=h[Zt];oe||(oe=new Wc,h[Zt]=oe);let Xt=p.getCameraImage(Zt);oe.sourceTexture=Xt}}}}for(let bt=0;bt<T.length;bt++){let Dt=E[bt],ht=T[bt];Dt!==null&&ht!==void 0&&ht.update(Dt,tt,c||r)}ct&&ct($,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}let kt=new KM;kt.setAnimationLoop(Lt),this.setAnimationLoop=function($){ct=$},this.dispose=function(){}}},LD=new Je,iT=new Ht;iT.set(-1,0,0,0,1,0,0,0,1);function OD(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,gv(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function a(g,h,_,b,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),p(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),u(g,h),h.isMeshPhysicalMaterial&&d(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),v(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),M(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,_,b):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Hn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Hn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let _=t.get(h),b=_.envMap,y=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(LD.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(iT),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,_,b){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*_,g.scale.value=b*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,_){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Hn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){let _=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function ID(e,t,n,i){let a={},s={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let E=T.program;i.uniformBlockBinding(y,E)}function c(y,T){let E=a[y.id];E===void 0&&(g(y),E=f(y),a[y.id]=E,y.addEventListener("dispose",_));let C=T.program;i.updateUBOMapping(y,C);let x=t.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function f(y){let T=p();y.__bindingPointIndex=T;let E=e.createBuffer(),C=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=a[y.id],E=y.uniforms,C=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){let R=E[x];if(Array.isArray(R))for(let I=0,F=R.length;I<F;I++)d(R[I],x,I,C);else d(R,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(y,T,E,C){if(M(y,T,E,C)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let I=0;I<w.length;I++){let F=w[I],z=h(F);v(F,y.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function v(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function M(y,T,E,C){let x=y.value,w=T+"_"+E;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:ArrayBuffer.isView(x)?C[w]=x.slice():C[w]=x.clone(),!0;{let R=C[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){let T=y.uniforms,E=0,C=16;for(let w=0,R=T.length;w<R;w++){let I=Array.isArray(T[w])?T[w]:[T[w]];for(let F=0,z=I.length;F<z;F++){let D=I[F],B=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,X=B.length;Z<X;Z++){let k=B[Z],G=h(k),J=E%C,Q=J%G.boundary,ot=J+Q;E+=Q,ot!==0&&C-ot<G.storage&&(E+=C-ot),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=G.storage}}}let x=E%C;return x>0&&(E+=C-x),y.__size=E,y.__cache={},this}function h(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",y),T}function _(y){let T=y.target;T.removeEventListener("dispose",_);let E=r.indexOf(T.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function b(){for(let y in a)e.deleteBuffer(a[y]);r=[],a={},s={}}return{bind:l,update:c,dispose:b}}var PD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ra=null;function BD(){return Ra===null&&(Ra=new qf(PD,16,16,Js,ia),Ra.name="DFG_LUT",Ra.minFilter=wn,Ra.magFilter=wn,Ra.wrapS=Ma,Ra.wrapT=Ma,Ra.generateMipmaps=!1,Ra.needsUpdate=!0),Ra}var jd=class{constructor(t={}){let{canvas:n=SM(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=yi}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let M=d,g=new Set([gd,md,pd]),h=new Set([yi,ea,cl,ul,fd,dd]),_=new Uint32Array(4),b=new Int32Array(4),y=new W,T=null,E=null,C=[],x=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,F=null,z=null,D=null,B=null;this._outputColorSpace=vi;let Z=0,X=0,k=null,G=-1,J=null,Q=new He,ot=new He,rt=null,ct=new se(0),Lt=0,kt=n.width,$=n.height,tt=1,bt=null,Dt=null,ht=new He(0,0,kt,$),Nt=new He(0,0,kt,$),Ae=!1,Bt=new kc,Zt=!1,oe=!1,Xt=new Je,re=new W,Ne=new He,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function we(){return k===null?tt:1}let L=i;function Se(S,U){return n.getContext(S,U)}let it,A,m,N,P,Y,st,lt,K,j,ft,Ct,gt,dt,Rt,Ut,Vt,O,pt,et,ut,yt,at;try{let S={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",jt,!1),n.addEventListener("webglcontextcreationerror",an,!1),L===null){let U="webgl2";if(L=Se(U,S),L===null)throw Se(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(S){throw n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",jt,!1),n.removeEventListener("webglcontextcreationerror",an,!1),Pt("WebGLRenderer: "+S.message),S}function wt(){it=new XR(L),it.init(),ut=new ND(L,it),A=new OR(L,it,t,ut),m=new CD(L,it),A.reversedDepthBuffer&&u&&m.buffers.depth.setReversed(!0),z=L.createFramebuffer(),D=L.createFramebuffer(),B=L.createFramebuffer(),N=new YR(L),P=new pD,Y=new RD(L,it,m,P,A,ut,N),st=new kR(R),lt=new JC(L),yt=new UR(L,lt),K=new WR(L,lt,N,yt),j=new JR(L,K,lt,yt,N),O=new ZR(L,A,Y),Rt=new IR(P),ft=new dD(R,st,it,A,yt,Rt),Ct=new OD(R,P),gt=new gD,dt=new SD(it),Vt=new DR(R,st,m,j,v,l),Ut=new wD(R,j,A),at=new ID(L,N,A,m),pt=new LR(L,it,N),et=new qR(L,it,N),N.programs=ft.programs,R.capabilities=A,R.extensions=it,R.properties=P,R.renderLists=gt,R.shadowMap=Ut,R.state=m,R.info=N}M!==yi&&(w=new KR(M,n.width,n.height,o,a,s));let Et=new Ov(R,L);this.xr=Et,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(kt,$,!1))},this.getSize=function(S){return S.set(kt,$)},this.setSize=function(S,U,q=!0){if(Et.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=S,$=U,n.width=Math.floor(S*tt),n.height=Math.floor(U*tt),q===!0&&(n.style.width=S+"px",n.style.height=U+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(kt*tt,$*tt).floor()},this.setDrawingBufferSize=function(S,U,q){kt=S,$=U,tt=q,n.width=Math.floor(S*q),n.height=Math.floor(U*q),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(M===yi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Q)},this.getViewport=function(S){return S.copy(ht)},this.setViewport=function(S,U,q,H){S.isVector4?ht.set(S.x,S.y,S.z,S.w):ht.set(S,U,q,H),m.viewport(Q.copy(ht).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Nt)},this.setScissor=function(S,U,q,H){S.isVector4?Nt.set(S.x,S.y,S.z,S.w):Nt.set(S,U,q,H),m.scissor(ot.copy(Nt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(S){m.setScissorTest(Ae=S)},this.setOpaqueSort=function(S){bt=S},this.setTransparentSort=function(S){Dt=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,q=!0){let H=0;if(S){let V=!1;if(k!==null){let vt=k.texture.format;V=g.has(vt)}if(V){let vt=k.texture.type,St=h.has(vt),mt=Vt.getClearColor(),Mt=Vt.getClearAlpha(),At=mt.r,zt=mt.g,Wt=mt.b;St?(_[0]=At,_[1]=zt,_[2]=Wt,_[3]=Mt,L.clearBufferuiv(L.COLOR,0,_)):(b[0]=At,b[1]=zt,b[2]=Wt,b[3]=Mt,L.clearBufferiv(L.COLOR,0,b))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",jt,!1),n.removeEventListener("webglcontextcreationerror",an,!1),Vt.dispose(),gt.dispose(),dt.dispose(),P.dispose(),st.dispose(),j.dispose(),yt.dispose(),at.dispose(),ft.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",_l),Et.removeEventListener("sessionend",js),Si.stop()};function Me(S){S.preventDefault(),mv("WebGLRenderer: Context Lost."),I=!0}function jt(){mv("WebGLRenderer: Context Restored."),I=!1;let S=N.autoReset,U=Ut.enabled,q=Ut.autoUpdate,H=Ut.needsUpdate,V=Ut.type;wt(),N.autoReset=S,Ut.enabled=U,Ut.autoUpdate=q,Ut.needsUpdate=H,Ut.type=V}function an(S){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function bi(S){let U=S.target;U.removeEventListener("dispose",bi),ni(U)}function ni(S){up(S),P.remove(S)}function up(S){let U=P.get(S).programs;U!==void 0&&(U.forEach(function(q){ft.releaseProgram(q)}),S.isShaderMaterial&&ft.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,q,H,V,vt){U===null&&(U=Xe);let St=V.isMesh&&V.matrixWorld.determinantAffine()<0,mt=mu(S,U,q,H,V);m.setMaterial(H,St);let Mt=q.index,At=1;if(H.wireframe===!0){if(Mt=K.getWireframeAttribute(q),Mt===void 0)return;At=2}let zt=q.drawRange,Wt=q.attributes.position,Tt=zt.start*At,ne=(zt.start+zt.count)*At;vt!==null&&(Tt=Math.max(Tt,vt.start*At),ne=Math.min(ne,(vt.start+vt.count)*At)),Mt!==null?(Tt=Math.max(Tt,0),ne=Math.min(ne,Mt.count)):Wt!=null&&(Tt=Math.max(Tt,0),ne=Math.min(ne,Wt.count));let De=ne-Tt;if(De<0||De===1/0)return;yt.setup(V,H,mt,q,Mt);let Te,pe=pt;if(Mt!==null&&(Te=lt.get(Mt),pe=et,pe.setIndex(Te)),V.isMesh)H.wireframe===!0?(m.setLineWidth(H.wireframeLinewidth*we()),pe.setMode(L.LINES)):pe.setMode(L.TRIANGLES);else if(V.isLine){let We=H.linewidth;We===void 0&&(We=1),m.setLineWidth(We*we()),V.isLineSegments?pe.setMode(L.LINES):V.isLineLoop?pe.setMode(L.LINE_LOOP):pe.setMode(L.LINE_STRIP)}else V.isPoints?pe.setMode(L.POINTS):V.isSprite&&pe.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(it.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let We=V._multiDrawStarts,xt=V._multiDrawCounts,Ke=V._multiDrawCount,$t=Mt?lt.get(Mt).bytesPerElement:1,yn=P.get(H).currentProgram.getUniforms();for(let ii=0;ii<Ke;ii++)yn.setValue(L,"_gl_DrawID",ii),pe.render(We[ii]/$t,xt[ii])}else if(V.isInstancedMesh)pe.renderInstances(Tt,De,V.count);else if(q.isInstancedBufferGeometry){let We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xt=Math.min(q.instanceCount,We);pe.renderInstances(Tt,De,xt)}else pe.render(Tt,De)};function du(S,U,q,H){F!==null&&S.isNodeMaterial&&F.setObject(H,S),Zt===!0&&Rt.setState(S,q,!1),S.transparent===!0&&S.side===Ca&&S.forceSinglePass===!1?(S.side=Hn,S.needsUpdate=!0,er(S,U,H),S.side=Ws,S.needsUpdate=!0,er(S,U,H),S.side=Ca):er(S,U,H)}this.compile=function(S,U,q=null){q===null&&(q=S),F!==null&&F.renderStart(S,U,q),E=dt.get(q),E.init(U),x.push(E),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),S!==q&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),oe=this.localClippingEnabled,Zt=Rt.init(this.clippingPlanes,oe),Zt===!0&&Rt.setGlobalState(this.clippingPlanes,U),F!==null&&Ut.render(E.state.shadowsArray,q,U);let H=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let vt=V.material;if(vt)if(Array.isArray(vt))for(let St=0;St<vt.length;St++){let mt=vt[St];du(mt,q,U,V),H.add(mt)}else du(vt,q,U,V),H.add(vt)}),E=x.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(S,U,q=null){let H=this.compile(S,U,q);return new Promise(V=>{function vt(){if(H.forEach(function(St){let Mt=P.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(St)}),H.size===0){V(S);return}setTimeout(vt,10)}it.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Gt=null;function sn(S){Gt&&Gt(S)}function _l(){Si.stop()}function js(){Si.start()}let Si=new KM;Si.setAnimationLoop(sn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(S){Gt=S,Et.setAnimationLoop(S),S===null?Si.stop():Si.start()},Et.addEventListener("sessionstart",_l),Et.addEventListener("sessionend",js),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(S,U);let q=Et.enabled===!0&&Et.isPresenting===!0,H=w!==null&&(k===null||q)&&w.begin(R,k);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(U),U=Et.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,U,k),E=dt.get(S,x.length),E.init(U),E.state.textureUnits=Y.getTextureUnits(),x.push(E),Xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(Xt,ji,U.reversedDepth),oe=this.localClippingEnabled,Zt=Rt.init(this.clippingPlanes,oe),T=gt.get(S,C.length),T.init(),C.push(T),Et.enabled===!0&&Et.isPresenting===!0){let St=R.xr.getDepthSensingMesh();St!==null&&ts(St,U,-1/0,R.sortObjects)}ts(S,U,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(bt,Dt),de=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,de&&Vt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Rt.beginShadows();let V=E.state.shadowsArray;if(Ut.render(V,S,U),Zt===!0&&Rt.endShadows(),(H&&w.hasRenderPass())===!1){let St=T.opaque,mt=T.transmissive;if(E.setupLights(),U.isArrayCamera){let Mt=U.cameras;if(mt.length>0)for(let At=0,zt=Mt.length;At<zt;At++){let Wt=Mt[At];xl(St,mt,S,Wt)}de&&Vt.render(S);for(let At=0,zt=Mt.length;At<zt;At++){let Wt=Mt[At];yl(T,S,Wt,Wt.viewport)}}else mt.length>0&&xl(St,mt,S,U),de&&Vt.render(S),yl(T,S,U)}k!==null&&X===0&&(Y.updateMultisampleRenderTarget(k),Y.updateRenderTargetMipmap(k)),H&&w.end(R),S.isScene===!0&&S.onAfterRender(R,S,U),yt.resetDefaultState(),G=-1,J=null,x.pop(),x.length>0?(E=x[x.length-1],Y.setTextureUnits(E.state.textureUnits),Zt===!0&&Rt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,F!==null&&F.renderEnd()};function ts(S,U,q,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Bt)){H&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Xt);let St=j.update(S),mt=S.material;mt.visible&&T.push(S,St,mt,q,Ne.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Bt))){let St=j.update(S),mt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ne.copy(St.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(Xt)),Array.isArray(mt)){let Mt=St.groups;for(let At=0,zt=Mt.length;At<zt;At++){let Wt=Mt[At],Tt=mt[Wt.materialIndex];Tt&&Tt.visible&&T.push(S,St,Tt,q,Ne.z,Wt,U)}}else mt.visible&&T.push(S,St,mt,q,Ne.z,null,U)}}let vt=S.children;for(let St=0,mt=vt.length;St<mt;St++)ts(vt[St],U,q,H)}function yl(S,U,q,H){let{opaque:V,transmissive:vt,transparent:St}=S;E.setupLightsView(q),Zt===!0&&Rt.setGlobalState(R.clippingPlanes,q),H&&m.viewport(Q.copy(H)),V.length>0&&tr(V,U,q),vt.length>0&&tr(vt,U,q),St.length>0&&tr(St,U,q),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function xl(S,U,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Tt=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new jn(1,1,{generateMipmaps:!0,type:Tt?ia:yi,minFilter:Ys,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let vt=E.state.transmissionRenderTarget[H.id],St=H.viewport||Q;vt.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);let mt=R.getRenderTarget(),Mt=R.getActiveCubeFace(),At=R.getActiveMipmapLevel();R.setRenderTarget(vt),R.getClearColor(ct),Lt=R.getClearAlpha(),Lt<1&&R.setClearColor(16777215,.5),R.clear(),de&&Vt.render(q);let zt=R.toneMapping;R.toneMapping=ta;let Wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Zt===!0&&Rt.setGlobalState(R.clippingPlanes,H),tr(S,q,H),Y.updateMultisampleRenderTarget(vt),Y.updateRenderTargetMipmap(vt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ne=0,De=U.length;ne<De;ne++){let Te=U[ne],{object:pe,geometry:We,material:xt,group:Ke}=Te;if(xt.side===Ca&&pe.layers.test(H.layers)){let $t=xt.side;xt.side=Hn,xt.needsUpdate=!0,bl(pe,q,H,We,xt,Ke),xt.side=$t,xt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Y.updateMultisampleRenderTarget(vt),Y.updateRenderTargetMipmap(vt))}R.setRenderTarget(mt,Mt,At),R.setClearColor(ct,Lt),Wt!==void 0&&(H.viewport=Wt),R.toneMapping=zt}function tr(S,U,q){let H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,vt=S.length;V<vt;V++){let St=S[V],{object:mt,geometry:Mt,group:At}=St,zt=St.material;zt.allowOverride===!0&&H!==null&&(zt=H),mt.layers.test(q.layers)&&bl(mt,U,q,Mt,zt,At)}}function bl(S,U,q,H,V,vt){F!==null&&V.isNodeMaterial&&F.setObject(S,V),S.onBeforeRender(R,U,q,H,V,vt),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(R,U,q,H,S,vt),V.transparent===!0&&V.side===Ca&&V.forceSinglePass===!1?(V.side=Hn,V.needsUpdate=!0,R.renderBufferDirect(q,U,H,V,S,vt),V.side=Ws,V.needsUpdate=!0,R.renderBufferDirect(q,U,H,V,S,vt),V.side=Ca):R.renderBufferDirect(q,U,H,V,S,vt),S.onAfterRender(R,U,q,H,V,vt)}function er(S,U,q){U.isScene!==!0&&(U=Xe);let H=P.get(S),V=E.state.lights,vt=E.state.shadowsArray,St=V.state.version,mt=ft.getParameters(S,V.state,vt,U,q,E.state.lightProbeGridArray),Mt=ft.getProgramCacheKey(mt),At=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let zt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=st.get(S.envMap||H.environment,zt),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",bi),At=new Map,H.programs=At);let Wt=At.get(Mt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===St)return Ml(S,mt),Wt}else mt.uniforms=ft.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,q,mt),S.onBeforeCompile(mt,R),Wt=ft.acquireProgram(mt,Mt),At.set(Mt,Wt),H.uniforms=mt.uniforms;let Tt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=Rt.uniform),Ml(S,mt),H.needsLights=vu(S),H.lightsStateVersion=St,H.needsLights&&(Tt.ambientLightColor.value=V.state.ambient,Tt.lightProbe.value=V.state.probe,Tt.sunLights.value=V.state.sun,Tt.sunLightShadows.value=V.state.sunShadow,Tt.directionalLights.value=V.state.directional,Tt.directionalLightShadows.value=V.state.directionalShadow,Tt.spotLights.value=V.state.spot,Tt.spotLightShadows.value=V.state.spotShadow,Tt.rectAreaLights.value=V.state.rectArea,Tt.ltc_1.value=V.state.rectAreaLTC1,Tt.ltc_2.value=V.state.rectAreaLTC2,Tt.pointLights.value=V.state.point,Tt.pointLightShadows.value=V.state.pointShadow,Tt.hemisphereLights.value=V.state.hemi,Tt.sunShadowMatrix.value=V.state.sunShadowMatrix,Tt.sunShadowCascade.value=V.state.sunShadowCascade,Tt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Tt.spotLightMatrix.value=V.state.spotLightMatrix,Tt.spotLightMap.value=V.state.spotLightMap,Tt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=Wt,H.uniformsList=null,Wt}function Sl(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=dl.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ml(S,U){let q=P.get(S);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function pu(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,H=S.length;q<H;q++){let V=S[q];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function mu(S,U,q,H,V){U.isScene!==!0&&(U=Xe),Y.resetTextureUnits();let vt=U.fog,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,mt=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ee.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,At=st.get(H.envMap||St,Mt),zt=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,De=!!q.morphAttributes.color,Te=ta;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Te=R.toneMapping);let pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,We=pe!==void 0?pe.length:0,xt=P.get(H),Ke=E.state.lights;if(Zt===!0&&(oe===!0||S!==J)){let ge=S===J&&H.id===G;Rt.setState(H,S,ge)}let $t=!1;H.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Ke.state.version||xt.outputColorSpace!==mt||V.isBatchedMesh&&xt.batching===!1||!V.isBatchedMesh&&xt.batching===!0||V.isBatchedMesh&&xt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&xt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&xt.instancing===!1||!V.isInstancedMesh&&xt.instancing===!0||V.isSkinnedMesh&&xt.skinning===!1||!V.isSkinnedMesh&&xt.skinning===!0||V.isInstancedMesh&&xt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&xt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&xt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&xt.instancingMorph===!1&&V.morphTexture!==null||xt.envMap!==At||H.fog===!0&&xt.fog!==vt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Rt.numPlanes||xt.numIntersection!==Rt.numIntersection)||xt.vertexAlphas!==zt||xt.vertexTangents!==Wt||xt.morphTargets!==Tt||xt.morphNormals!==ne||xt.morphColors!==De||xt.toneMapping!==Te||xt.morphTargetsCount!==We||!!xt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,xt.__version=H.version);let yn=xt.currentProgram;$t===!0&&(yn=er(H,U,V),F&&H.isNodeMaterial&&F.onUpdateProgram(H,yn,xt));let ii=!1,Vn=!1,Gn=!1,ce=yn.getUniforms(),me=xt.uniforms;if(m.useProgram(yn.program)&&(ii=!0,Vn=!0,Gn=!0),H.id!==G&&(G=H.id,Vn=!0),xt.needsLights){let ge=pu(E.state.lightProbeGridArray,V);xt.lightProbeGrid!==ge&&(xt.lightProbeGrid=ge,Vn=!0)}if(ii||J!==S){m.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ce.setValue(L,"projectionMatrix",S.projectionMatrix),ce.setValue(L,"viewMatrix",S.matrixWorldInverse);let aa=ce.map.cameraPosition;aa!==void 0&&aa.setValue(L,re.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ce.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Vn=!0,Gn=!0)}if(xt.needsLights&&(Ke.state.sunShadowMap.length>0&&ce.setValue(L,"sunShadowMap",Ke.state.sunShadowMap,Y),Ke.state.directionalShadowMap.length>0&&ce.setValue(L,"directionalShadowMap",Ke.state.directionalShadowMap,Y),Ke.state.spotShadowMap.length>0&&ce.setValue(L,"spotShadowMap",Ke.state.spotShadowMap,Y),Ke.state.pointShadowMap.length>0&&ce.setValue(L,"pointShadowMap",Ke.state.pointShadowMap,Y)),V.isSkinnedMesh){ce.setOptional(L,V,"bindMatrix"),ce.setOptional(L,V,"bindMatrixInverse");let ge=V.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),ce.setValue(L,"boneTexture",ge.boneTexture,Y))}V.isBatchedMesh&&(ce.setOptional(L,V,"batchingTexture"),ce.setValue(L,"batchingTexture",V._matricesTexture,Y),ce.setOptional(L,V,"batchingIdTexture"),ce.setValue(L,"batchingIdTexture",V._indirectTexture,Y),ce.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ce.setValue(L,"batchingColorTexture",V._colorsTexture,Y));let Vi=q.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&O.update(V,q,yn),(Vn||xt.receiveShadow!==V.receiveShadow)&&(xt.receiveShadow=V.receiveShadow,ce.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(me.envMapIntensity.value=U.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=BD()),Vn){if(ce.setValue(L,"toneMappingExposure",R.toneMappingExposure),xt.needsLights&&gu(me,Gn),vt&&H.fog===!0&&Ct.refreshFogUniforms(me,vt),Ct.refreshMaterialUniforms(me,H,tt,$,E.state.transmissionRenderTarget[S.id]),xt.needsLights&&xt.lightProbeGrid){let ge=xt.lightProbeGrid;me.probesSH.value=ge.texture,me.probesMin.value.copy(ge.boundingBox.min),me.probesMax.value.copy(ge.boundingBox.max),me.probesResolution.value.copy(ge.resolution)}dl.upload(L,Sl(xt),me,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(dl.upload(L,Sl(xt),me,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(L,"center",V.center),ce.setValue(L,"modelViewMatrix",V.modelViewMatrix),ce.setValue(L,"normalMatrix",V.normalMatrix),ce.setValue(L,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let ge=H.uniformsGroups;for(let aa=0,es=ge.length;aa<es;aa++){let _u=ge[aa];at.update(_u,yn),at.bind(_u,yn)}}return yn}function gu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function vu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,U,q){let H=P.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),P.get(S.texture).__webglTexture=U,P.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let q=P.get(S);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,q=0){k=S,Z=U,X=q;let H=null,V=!1,vt=!1;if(S){let mt=P.get(S);if(mt.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(L.FRAMEBUFFER,mt.__webglFramebuffer),Q.copy(S.viewport),ot.copy(S.scissor),rt=S.scissorTest,m.viewport(Q),m.scissor(ot),m.setScissorTest(rt),G=-1;return}else if(mt.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(mt.__hasExternalTextures)Y.rebindTextures(S,P.get(S.texture).__webglTexture,P.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let zt=S.depthTexture;if(mt.__boundDepthTexture!==zt){if(zt!==null&&P.has(zt)&&(S.width!==zt.image.width||S.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(vt=!0);let At=P.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[U])?H=At[U][q]:H=At[U],V=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?H=P.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?H=At[q]:H=At,Q.copy(S.viewport),ot.copy(S.scissor),rt=S.scissorTest}else Q.copy(ht).multiplyScalar(tt).floor(),ot.copy(Nt).multiplyScalar(tt).floor(),rt=Ae;if(q!==0&&(H=z),m.bindFramebuffer(L.FRAMEBUFFER,H)&&m.drawBuffers(S,H),m.viewport(Q),m.scissor(ot),m.setScissorTest(rt),V){let mt=P.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,q)}else if(vt){let mt=U;for(let Mt=0;Mt<S.textures.length;Mt++){let At=P.get(S.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,At.__webglTexture,q,mt)}}else if(S!==null&&q!==0){let mt=P.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,q)}G=-1};function Tl(S){let U=P.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=A.textureFormatReadable(S.format),U.__typeReadable=A.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,q,H,V,vt,St,mt=0){if(!(S&&S.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=P.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt){m.bindFramebuffer(L.FRAMEBUFFER,Mt);try{let At=S.textures[mt],zt=At.format,Wt=At.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt);let Tt=Tl(At);if(Tt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&q>=0&&q<=S.height-V&&L.readPixels(U,q,H,V,ut.convert(zt),ut.convert(Wt),vt)}finally{let At=k!==null?P.get(k).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,U,q,H,V,vt,St,mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=P.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt)if(U>=0&&U<=S.width-H&&q>=0&&q<=S.height-V){m.bindFramebuffer(L.FRAMEBUFFER,Mt);let At=S.textures[mt],zt=At.format,Wt=At.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt);let Tt=Tl(At);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(U,q,H,V,ut.convert(zt),ut.convert(Wt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let De=k!==null?P.get(k).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,De);let Te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await TM(L,Te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ne),L.deleteSync(Te),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,q=0){let H=Math.pow(2,-q),V=Math.floor(S.image.width*H),vt=Math.floor(S.image.height*H),St=U!==null?U.x:0,mt=U!==null?U.y:0;Y.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,St,mt,V,vt),m.unbindTexture()},this.copyTextureToTexture=function(S,U,q=null,H=null,V=0,vt=0){let St,mt,Mt,At,zt,Wt,Tt,ne,De,Te=S.isCompressedTexture?S.mipmaps[vt]:S.image;if(q!==null)St=q.max.x-q.min.x,mt=q.max.y-q.min.y,Mt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,zt=q.min.y,Wt=q.isBox3?q.min.z:0;else{let me=Math.pow(2,-V);St=Math.floor(Te.width*me),mt=Math.floor(Te.height*me),S.isDataArrayTexture?Mt=Te.depth:S.isData3DTexture?Mt=Math.floor(Te.depth*me):Mt=1,At=0,zt=0,Wt=0}H!==null?(Tt=H.x,ne=H.y,De=H.z):(Tt=0,ne=0,De=0);let pe=ut.convert(U.format),We=ut.convert(U.type),xt;U.isData3DTexture?(Y.setTexture3D(U,0),xt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),xt=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),xt=L.TEXTURE_2D),m.activeTexture(L.TEXTURE0),m.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),m.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),m.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Ke=m.getParameter(L.UNPACK_ROW_LENGTH),$t=m.getParameter(L.UNPACK_IMAGE_HEIGHT),yn=m.getParameter(L.UNPACK_SKIP_PIXELS),ii=m.getParameter(L.UNPACK_SKIP_ROWS),Vn=m.getParameter(L.UNPACK_SKIP_IMAGES);m.pixelStorei(L.UNPACK_ROW_LENGTH,Te.width),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te.height),m.pixelStorei(L.UNPACK_SKIP_PIXELS,At),m.pixelStorei(L.UNPACK_SKIP_ROWS,zt),m.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);let Gn=S.isDataArrayTexture||S.isData3DTexture,ce=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let me=P.get(S),Vi=P.get(U),ge=P.get(me.__renderTarget),aa=P.get(Vi.__renderTarget);m.bindFramebuffer(L.READ_FRAMEBUFFER,ge.__webglFramebuffer),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let es=0;es<Mt;es++)Gn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(S).__webglTexture,V,Wt+es),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(U).__webglTexture,vt,De+es)),L.blitFramebuffer(At,zt,St,mt,Tt,ne,St,mt,L.DEPTH_BUFFER_BIT,L.NEAREST);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||P.has(S)){let me=P.get(S),Vi=P.get(U);m.bindFramebuffer(L.READ_FRAMEBUFFER,D),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let ge=0;ge<Mt;ge++)Gn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,V,Wt+ge):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,V),ce?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vi.__webglTexture,vt,De+ge):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vi.__webglTexture,vt),V!==0?L.blitFramebuffer(At,zt,St,mt,Tt,ne,St,mt,L.COLOR_BUFFER_BIT,L.NEAREST):ce?L.copyTexSubImage3D(xt,vt,Tt,ne,De+ge,At,zt,St,mt):L.copyTexSubImage2D(xt,vt,Tt,ne,At,zt,St,mt);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ce?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(xt,vt,Tt,ne,De,St,mt,Mt,pe,We,Te.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(xt,vt,Tt,ne,De,St,mt,Mt,pe,Te.data):L.texSubImage3D(xt,vt,Tt,ne,De,St,mt,Mt,pe,We,Te):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,Tt,ne,St,mt,pe,We,Te.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,Tt,ne,Te.width,Te.height,pe,Te.data):L.texSubImage2D(L.TEXTURE_2D,vt,Tt,ne,St,mt,pe,We,Te);m.pixelStorei(L.UNPACK_ROW_LENGTH,Ke),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),m.pixelStorei(L.UNPACK_SKIP_PIXELS,yn),m.pixelStorei(L.UNPACK_SKIP_ROWS,ii),m.pixelStorei(L.UNPACK_SKIP_IMAGES,Vn),vt===0&&U.generateMipmaps&&L.generateMipmap(xt),m.unbindTexture()},this.initRenderTarget=function(S){P.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),m.unbindTexture()},this.resetState=function(){Z=0,X=0,k=null,m.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=ee._getUnpackColorSpace()}};var np=class extends jd{constructor(t){super({...t,premultipliedAlpha:!0})}},FD=e=>e.replace(/\b(gl_FragColor|fragColor)\s*=\s*[^;]+;/g,(t,n)=>`${t}
${n}.rgb *= ${n}.a;`),ip=class extends Fn{constructor(t){super({...t,fragmentShader:FD(t.fragmentShader)})}};var zv=hn(Hi(),1),Iv={idle:{speed:1,color:1,react:.4,listen:0,think:0},listening:{speed:1.2,color:1.3,react:.8,listen:1,think:0},thinking:{speed:2.2,color:4,react:.3,listen:.2,think:1},speaking:{speed:1.5,color:1.8,react:1,listen:.3,think:0}},Bv=["#ff006e","#8338ec","#3a86ff","#06ffa5"],$e=(e,t,n)=>Math.min(n,Math.max(t,e)),_n=(e,t)=>Number.isFinite(e)?e:t,kD=(e,t,n)=>{let i=$e((n-e)/(t-e),0,1);return i*i*(3-2*i)},lu=new se,Pv=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),XD=(e,t)=>{try{lu.setStyle((e??t).trim()||t,Fi)}catch{lu.setStyle(t,Fi)}let n=Pv(lu.r),i=Pv(lu.g),a=Pv(lu.b),s=Math.cbrt(.4122214708*n+.5363325363*i+.0514459929*a),r=Math.cbrt(.2119034982*n+.6806995451*i+.1073969566*a),o=Math.cbrt(.0883024619*n+.2817188376*i+.6299787005*a),l=.2104542553*s+.793617785*r-.0040720468*o,c=1.9779984951*s-2.428592205*r+.4505937099*o,f=.0259040371*s+.7827717662*r-.808675766*o;return new W(l,Math.hypot(c,f),Math.atan2(f,c))},WD=e=>{let t=window.matchMedia("(prefers-reduced-motion: reduce)");return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},qD=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,YD=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,ZD=`
precision highp float;

uniform float uTime;
uniform float uColorTime;
uniform vec2 uResolution;
uniform float uGlowIntensity;
uniform float uNoiseScale;
uniform float uInnerScale;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform float uRimWidth;
uniform float uRimIntensity;
uniform float uCoreIntensity;
uniform float uGlints;
uniform float uHalo;
uniform float uWobble;
uniform float uLevel;
uniform float uReact;
uniform float uListen;
uniform float uThink;
uniform vec2 uLook;
uniform float uJiggle;
uniform float uTapAngle;
uniform float uTapAge;
uniform float uInk;
uniform float uFade;
uniform float uGrow;

#define PI_TWO 6.28318530718

float rng(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float perlin(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);
  float res = mix(
    mix(rng(ip), rng(ip + vec2(1.0, 0.0)), u.x),
    mix(rng(ip + vec2(0.0, 1.0)), rng(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fractal(vec2 p) {
  return (perlin(p) * 0.5 + perlin(p * 2.0) * 0.25) / 0.75;
}

float brightness(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

mat3 rotateX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c);
}

mat3 rotateY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
}

mat3 rotateZ(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0);
}

vec3 blendHue(vec3 a, vec3 b, float k) {
  float turn = b.z - a.z;
  turn -= PI_TWO * floor((turn + 3.14159265) / PI_TWO);
  float lightness = mix(a.x, b.x, k);
  float chroma = mix(a.y, b.y, k);
  float hue = a.z + turn * k;
  vec3 lms = mat3(1.0, 1.0, 1.0, 0.3963377774, -0.1055613458, -0.0894841775, 0.2158037573, -0.0638541728, -1.291485548) * vec3(lightness, chroma * cos(hue), chroma * sin(hue));
  lms = lms * lms * lms;
  vec3 linear = mat3(4.0767416621, -1.2684380046, -0.0041960863, -3.3077115913, 2.6097574011, -0.7034186147, 0.2309699292, -0.3413193965, 1.707614701) * lms;
  return pow(clamp(linear, 0.0, 1.0), vec3(1.0 / 2.2));
}

vec3 ramp(float t) {
  float g = fract(t) * 4.0;
  if (g < 1.0) return blendHue(uColor1, uColor2, smoothstep(0.0, 1.0, g));
  if (g < 2.0) return blendHue(uColor2, uColor3, smoothstep(0.0, 1.0, g - 1.0));
  if (g < 3.0) return blendHue(uColor3, uColor4, smoothstep(0.0, 1.0, g - 2.0));
  return blendHue(uColor4, uColor1, smoothstep(0.0, 1.0, g - 3.0));
}

void main() {
  float minRes = min(uResolution.x, uResolution.y);
  vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / minRes * 1.5;
  float t = uTime;

  float bearing = atan(uv.y, uv.x);
  float squish = uJiggle * exp(-uTapAge * 3.0) * sin(uTapAge * 13.0) * 0.07 * cos(2.0 * (bearing - uTapAngle));
  float sway = uWobble * 0.035 * (sin(3.0 * bearing + t * 0.9) * sin(t * 0.6) + 0.6 * sin(2.0 * bearing - t * 0.7 + 1.3));
  uv /= max(uGrow * (1.0 + uLevel * uReact * 0.06 + squish + sway), 0.05);

  float l = dot(uv, uv);
  if (l > 2.5) {
    gl_FragColor = vec4(0.0);
    return;
  }

  float sm = smoothstep(1.04, 0.96, l);
  float z = sqrt(max(0.0, 1.0 - min(l, 1.0)));
  vec3 noisePos = normalize(vec3(uv.x, uv.y, z));

  float angleX = sin(t * 0.23) * 1.5 + cos(t * 0.37) * 0.6 + uLook.y * 0.6;
  float angleY = sin(t * 0.19) * 1.3 + cos(t * 0.41) * 0.7 - uLook.x * 0.6;
  float angleZ = sin(t * 0.31) * 1.1 + cos(t * 0.29) * 0.5;
  noisePos = rotateX(angleX) * noisePos;
  noisePos = rotateY(angleY) * noisePos;
  noisePos = rotateZ(angleZ) * noisePos;

  float d = sm * l * l * l * 2.0;
  vec3 norm = normalize(vec3(uv.x, uv.y, 0.7 - d));

  float nx = fractal(noisePos.xy * 2.0 * uNoiseScale / 3.0 + t * 0.4 + 25.69);
  float ny = fractal(noisePos.xy * 2.0 * uNoiseScale / 3.0 + t * 0.4 + 86.31);
  float n = fractal(noisePos.xy * uNoiseScale + 2.0 * vec2(nx, ny));
  vec3 col = vec3(n * 0.5 + 0.25);
  vec3 gradientColor = ramp(atan(noisePos.y, noisePos.x) / PI_TWO + uColorTime * 0.1);

  col *= gradientColor;
  col *= 2.0 * uGlowIntensity * 1.25 * (1.0 + uListen * 0.35 + uLevel * uReact * 0.6);
  vec3 cd = abs(col);
  vec3 c = col * d * uRimIntensity;

  vec3 lightDir = normalize(vec3(uLook.x * 0.35, uLook.y * 0.35, -1.0));
  float lightDot = max(0.0, dot(norm, lightDir));
  float glint = lightDot * lightDot * lightDot * lightDot * lightDot * 3.0 * uGlints;
  c += (c * 0.5 + vec3(1.0) - brightness(c)) * glint;

  float inner = 1.0 - 0.02 * max(uRimWidth, 0.05);
  float outline = max((1.0 - smoothstep(1.0, inner, l) - pow(max(0.0, length(uv) - 1.0), 0.2)) * 2.0, 0.0);
  col = c + col * outline * outline * outline * outline * uRimIntensity;

  float f = fractal(noisePos.xy * 2.0 + t) + 0.1;
  vec2 innerUV = uv * (f + 0.1) * 0.5 / max(uInnerScale, 0.05);
  float innerL = dot(innerUV, innerUV);
  vec3 ins = normalize(cd + 0.0001) + 0.1;
  float ind = 0.2 + pow(smoothstep(0.0, 1.5, sqrt(innerL)) * 48.0, 0.25);
  ind *= ind * ind * ind;
  ind = 1.0 / ind;
  ins *= ind;
  float pulse = uCoreIntensity * (1.0 + uLevel * uReact * 0.9 + uThink * 0.3 * sin(t * 3.5) + uJiggle * exp(-uTapAge * 2.0) * 0.9);
  vec3 coreGlow = ins * ins * smoothstep(0.05, 1.0, ind);
  vec3 core = (1.0 - exp(-coreGlow * 3.0)) * sm * uGlowIntensity * 1.15 * pulse;
  vec3 shade = abs(norm) * (1.0 - d) * sm * 0.25;

  float edgeDist = length(uv);
  float edgeFalloff = smoothstep(1.0, 0.95, edgeDist);
  float spread = max(uHalo, 0.05);
  float halo = exp(-max(edgeDist - 1.0, 0.0) * (14.0 / spread)) * smoothstep(0.96, 1.0, edgeDist) * uGlowIntensity * min(spread, 1.5) * (1.0 + uLevel * uReact + uListen * 0.4);
  vec3 vivid = gradientColor / max(max(gradientColor.r, max(gradientColor.g, gradientColor.b)), 0.0001);

  if (uInk > 0.5) {
    float inside = smoothstep(1.012, 0.988, edgeDist);
    float line = clamp(outline * outline * outline * outline * uRimIntensity * 0.9, 0.0, 1.0);
    float band = clamp(pow(d * (n * 0.9 + 0.2) * 0.55, 1.7) * uRimIntensity * 1.3, 0.0, 1.0);
    float rimA = clamp(line + band, 0.0, 1.0) * inside;
    float coreA = clamp(pow(brightness(core), 2.2) * 1.8, 0.0, 0.85);
    float haloA = clamp(halo * 0.28, 0.0, 1.0) * (1.0 - inside * 0.6);
    vec3 coreInk = mix(vivid, vec3(1.0), 0.18) * 0.9;
    float weight = max(rimA + coreA + haloA, 0.0001);
    vec3 paint = (vivid * 0.82 * rimA + coreInk * coreA + vivid * haloA) / weight;
    float cover = 1.0 - (1.0 - rimA) * (1.0 - coreA) * (1.0 - haloA);
    gl_FragColor = vec4(paint, clamp(cover, 0.0, 1.0) * uFade);
    return;
  }

  col += core + shade;
  float alpha = clamp(sm * pow(brightness(col), 2.5) * 2.0, 0.0, 1.0) * edgeFalloff;
  col = pow(max(col, 0.0), vec3(0.95));
  float glowA = clamp(halo * 0.35, 0.0, 1.0) * (1.0 - alpha);
  float total = alpha + glowA;
  vec3 mixed = (col * alpha + vivid * 1.1 * glowA) / max(total, 0.0001);
  gl_FragColor = vec4(mixed, clamp(total, 0.0, 1.0) * uFade);
}
`;function JD(e,t,n){let i=e.ownerDocument,a=i.defaultView??window,s;try{s=new np({antialias:!0,alpha:!0,powerPreference:"high-performance",premultipliedAlpha:!1,stencil:!1,depth:!1})}catch{return null}s.setClearColor(0,0);let r=s.domElement;r.setAttribute("aria-hidden","true"),r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;background:transparent",t.appendChild(r);let o=()=>n.current,l={uTime:{value:0},uColorTime:{value:0},uResolution:{value:new ae(1,1)},uGlowIntensity:{value:.8},uNoiseScale:{value:3},uInnerScale:{value:1},uColor1:{value:new W},uColor2:{value:new W},uColor3:{value:new W},uColor4:{value:new W},uRimWidth:{value:1},uRimIntensity:{value:1},uCoreIntensity:{value:1},uGlints:{value:1},uHalo:{value:1},uWobble:{value:0},uLevel:{value:0},uReact:{value:.4},uListen:{value:0},uThink:{value:0},uLook:{value:new ae},uJiggle:{value:0},uTapAngle:{value:0},uTapAge:{value:10},uInk:{value:0},uFade:{value:1},uGrow:{value:1}},c=new ip({uniforms:l,vertexShader:YD,fragmentShader:ZD,transparent:!1,blending:Bi,depthTest:!1,depthWrite:!1}),f=new Or(2,2),p=new ti(f,c);p.frustumCulled=!1;let u=new Fc;u.add(p);let d=new Ir(-1,1,1,-1,0,1),v=0,M=0,g=1,h=!1,_="",b=-10,y=0,T=0,E=0,C=0,x=0,w=0,R=0,I=0,F=0,z=10,D=-1,B=1,Z=0,X=1,k=0,G=0,J=!1,Q=!1,ot=!1,rt=null,ct={...Iv.idle},Lt=()=>{let it=e.parentElement;for(;it;){let A=a.getComputedStyle(it).backgroundColor.match(/rgba?\(([^)]+)\)/);if(A){let m=A[1].split(",").map(N=>Number.parseFloat(N));if(m.length<4||m[3]>.05)return .2126*m[0]+.7152*m[1]+.0722*m[2]>140}it=it.parentElement}return!a.matchMedia("(prefers-color-scheme: dark)").matches},kt=()=>{let it=o(),A=it.colors.length?it.colors:Bv,m=A.join("|");if(m===_)return;_=m;let N=P=>XD(A[P]??A[P%A.length],Bv[P]);l.uColor1.value.copy(N(0)),l.uColor2.value.copy(N(1)),l.uColor3.value.copy(N(2)),l.uColor4.value.copy(N(3))},$=()=>{let it=o();l.uInk.value=it.blend==="ink"?1:it.blend==="glow"?0:Lt()?1:0},tt=()=>{let it=o(),A=Math.round(e.clientWidth),m=Math.round(e.clientHeight);if(A<2||m<2)return h=!1,!1;let N=Math.min(a.devicePixelRatio||1,2)*$e(_n(it.resolution,1),.25,2);return h&&A===v&&m===M&&N===g?!1:(h=!0,v=A,M=m,g=N,s.setPixelRatio(g),s.setSize(v,M,!1),l.uResolution.value.set(v*g,M*g),!0)},bt=(it,A)=>{let m=Math.pow(.5+.5*Math.sin(it*9+2*Math.sin(it*2.3)),3),N=kD(.2,.65,.5+.35*Math.sin(it*.9)+.25*Math.sin(it*2.1+1));return m*N*(.7+.3*Math.sin(it*13.7))*(A==="speaking"?1:.6)},Dt=(it,A)=>{if(it.getVolume)try{return $e(_n(it.getVolume(),0),0,1)}catch{return 0}return it.volume!==void 0?$e(_n(it.volume,0),0,1):it.autoVolume&&(it.state==="listening"||it.state==="speaking")?bt(A/1e3,it.state):0},ht=()=>{if(!h)return;let it=o();performance.now()-b>1e3&&(b=performance.now(),$()),kt(),l.uTime.value=y,l.uColorTime.value=T,l.uGlowIntensity.value=$e(_n(it.glowIntensity,.8),0,3),l.uNoiseScale.value=$e(_n(it.noiseScale,3),.1,20),l.uInnerScale.value=$e(_n(it.innerScale,1),.05,5),l.uRimWidth.value=$e(_n(it.rimWidth,1),.05,6),l.uRimIntensity.value=$e(_n(it.rimIntensity,1),0,3),l.uCoreIntensity.value=$e(_n(it.coreIntensity,1),0,3),l.uGlints.value=$e(_n(it.glints,1),0,3),l.uHalo.value=$e(_n(it.halo,1),0,3),l.uWobble.value=it.reduced?0:$e(_n(it.wobble,0),0,3),l.uLevel.value=E,l.uReact.value=$e(_n(it.reactivity,1),0,3)*ct.react,l.uListen.value=ct.listen,l.uThink.value=ct.think,l.uLook.value.set(C,x),l.uJiggle.value=I,l.uTapAngle.value=F,l.uTapAge.value=z,l.uFade.value=X,l.uGrow.value=B,s.render(u,d)},Nt=()=>{Q||ot||!J||k||(k=requestAnimationFrame(Ae))},Ae=it=>{if(k=0,Q||ot)return;let A=o(),m=G&&it-G<100?Math.min(Math.max((it-G)/1e3,0),.05):1/60;G=it;let N=!A.reduced&&!A.paused,P=Iv[A.state]??Iv.idle,Y=A.reduced?1:1-Math.exp(-m/.35);if(ct.speed+=(P.speed-ct.speed)*Y,ct.color+=(P.color-ct.color)*Y,ct.react+=(P.react-ct.react)*Y,ct.listen+=(P.listen-ct.listen)*Y,ct.think+=(P.think-ct.think)*Y,N){let j=$e(_n(A.animationSpeed,1),0,5);y+=m*j*ct.speed,T+=m*j*$e(_n(A.colorSpeed,1),0,5)*ct.color,z+=m,z>6&&(I=0)}let st=N?Dt(A,it):0;E+=(st-E)*(1-Math.exp(-m/(st>E?.05:.22)));let lt=A.reduced?1:1-Math.exp(-m/.35);C+=(w-C)*lt,x+=(R-x)*lt,A.intro&&!A.reduced?(D<0&&(D=it),X=$e((it-D)/450,0,1),Z+=(-70*(B-1)-9*Z)*m,B+=Z*m):(X=1,B=1,Z=0),ht();let K=Math.abs(w-C)+Math.abs(R-x)>5e-4||E>5e-4||Math.abs(B-1)+Math.abs(Z)>5e-4||X<1;(N||K)&&!i.hidden?k=requestAnimationFrame(Ae):G=0},Bt=(it,A)=>{I=Math.min(I*Math.exp(-z*3)+A,2.2),z=0,F=it},Zt=it=>{it.isPrimary&&(it.pointerType==="mouse"&&it.button!==0||(rt={id:it.pointerId,x:it.clientX,y:it.clientY,time:performance.now()}))},oe=it=>{let A=rt;if(rt=null,!A||A.id!==it.pointerId||Math.hypot(it.clientX-A.x,it.clientY-A.y)>10||performance.now()-A.time>600)return;let m=o();if(!m.interactive||m.reduced||m.paused)return;let N=e.getBoundingClientRect();N.width<=0||N.height<=0||(Bt(Math.atan2(N.top+N.height/2-it.clientY,it.clientX-N.left-N.width/2),1),Nt())},Xt=it=>{if(it.pointerType==="touch")return;let A=o(),m=e.getBoundingClientRect();if(m.width<=0||m.height<=0)return;let N=$e(_n(A.hoverTilt,1),0,3);w=$e(((it.clientX-m.left)/m.width-.5)*2,-1,1)*N,R=$e((.5-(it.clientY-m.top)/m.height)*2,-1,1)*N,Nt()},re=it=>{it.pointerType!=="touch"&&(w=0,R=0,Nt())},Ne=()=>{rt=null},Xe=()=>{G=0,Nt()},de=it=>{it.preventDefault(),ot=!0,cancelAnimationFrame(k),k=0},we=()=>{ot=!1,_="",Nt()},L=new ResizeObserver(()=>{tt()&&(ht(),Nt())}),Se=new IntersectionObserver(([it])=>{J=it.isIntersecting,G=0,Nt()},{rootMargin:"120px"});return e.addEventListener("pointerdown",Zt),e.addEventListener("pointerup",oe),e.addEventListener("pointermove",Xt),e.addEventListener("pointerleave",re),e.addEventListener("pointercancel",Ne),i.addEventListener("visibilitychange",Xe),r.addEventListener("webglcontextlost",de),r.addEventListener("webglcontextrestored",we),L.observe(e),Se.observe(e),o().intro&&!o().reduced&&(B=.7,X=0),y=o().reduced?2:0,tt(),{sync:()=>{b=-10,tt(),G=0,!k&&J&&(ht(),Nt())},tap:(it,A)=>{o().reduced||(Bt(it===void 0?Math.random()*Math.PI*2:_n(it,0)*Math.PI/180,$e(_n(A??1,1),0,2)),Nt())},destroy:()=>{Q=!0,cancelAnimationFrame(k),L.disconnect(),Se.disconnect(),e.removeEventListener("pointerdown",Zt),e.removeEventListener("pointerup",oe),e.removeEventListener("pointermove",Xt),e.removeEventListener("pointerleave",re),e.removeEventListener("pointercancel",Ne),i.removeEventListener("visibilitychange",Xe),r.removeEventListener("webglcontextlost",de),r.removeEventListener("webglcontextrestored",we),u.remove(p),f.dispose(),c.dispose(),s.dispose(),r.remove()}}}var Fv=(0,ei.forwardRef)(function({size:t=400,animationSpeed:n=1,glowIntensity:i=.8,noiseScale:a=3,innerScale:s=1,resolution:r=1,colors:o=Bv,state:l="idle",volume:c,getVolume:f,autoVolume:p=!0,reactivity:u=1,rimWidth:d=1,rimIntensity:v=1,coreIntensity:M=1,glints:g=1,halo:h=1,colorSpeed:_=1,wobble:b=0,hoverTilt:y=1,interactive:T=!0,blend:E="auto",intro:C=!0,paused:x=!1,className:w,style:R},I){let F=(0,ei.useRef)(null),z=(0,ei.useRef)(null),D=(0,ei.useRef)(null),B=(0,ei.useSyncExternalStore)(WD,qD,()=>!1),Z={size:t,animationSpeed:n,glowIntensity:i,noiseScale:a,innerScale:s,resolution:r,colors:o,state:l,volume:c,getVolume:f,autoVolume:p,reactivity:u,rimWidth:d,rimIntensity:v,coreIntensity:M,glints:g,halo:h,colorSpeed:_,wobble:b,hoverTilt:y,interactive:T,blend:E,intro:C,paused:x,reduced:B},X=(0,ei.useRef)(Z);return(0,ei.useEffect)(()=>{X.current=Z,D.current?.sync()}),(0,ei.useEffect)(()=>{let k=F.current,G=z.current;if(!k||!G)return;let J=JD(k,G,X);return D.current=J,()=>{J?.destroy(),D.current=null}},[]),(0,ei.useImperativeHandle)(I,()=>({tap:(k,G)=>D.current?.tap(k,G)}),[]),(0,zv.jsx)("div",{ref:F,className:["ai-blob",w].filter(Boolean).join(" "),style:{width:t,height:t,touchAction:"manipulation",...R},children:(0,zv.jsx)("div",{ref:z,"aria-hidden":"true",className:"ai-blob__stage"})})});Fv.displayName="AIBlob";var bT=hn(Da(),1);var ke=hn(Hi(),1),fe=hn(Da(),1);function mT(e){let t=e.trim(),n=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(n){let a=n[1].length===3?n[1].split("").map(s=>s+s).join(""):n[1];return[parseInt(a.slice(0,2),16),parseInt(a.slice(2,4),16),parseInt(a.slice(4,6),16)]}let i=t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);return i?[Math.round(+i[1]),Math.round(+i[2]),Math.round(+i[3])]:null}function $D(e){let t=mT(e);return t?`rgb(${t[0]}, ${t[1]}, ${t[2]})`:null}function sp(e){let t=mT(e);return t?`${t[0]}, ${t[1]}, ${t[2]}`:null}var KD={dark:{strokeOpacity:1.16,innerOpacity:.47,bloomOpacity:.89,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2,brightness:1.1},light:{strokeOpacity:1.2,innerOpacity:.85,bloomOpacity:.5,innerShadow:"rgba(0, 0, 0, 0.08)",saturation:1.6,brightness:.95,hueRange:40,hueDuration:8.5,hueBase:5,strength:.8,bandStrength:1.7}},$s=[{x:0,w:74,h:46,band:0},{x:-36,w:54,h:40,band:1},{x:36,w:54,h:40,band:1},{x:-72,w:48,h:32,band:2},{x:72,w:48,h:32,band:2},{x:-108,w:42,h:26,band:1},{x:108,w:42,h:26,band:1}],QD=36,jD=QD*$s.length,tU={colorful:{dark:["rgb(255, 70, 120)","rgb(60, 190, 255)","rgb(175, 70, 255)","rgb(60, 220, 130)","rgb(255, 150, 40)","rgb(90, 100, 255)","rgb(40, 200, 190)"],light:["rgb(255, 201, 21)","rgb(126, 196, 255)","rgb(180, 40, 230)","rgb(235, 100, 160)","rgb(255, 176, 122)","rgb(154, 160, 255)","rgb(127, 217, 238)"]},mono:{dark:["rgb(215, 215, 215)","rgb(180, 180, 180)","rgb(190, 190, 190)","rgb(160, 160, 160)","rgb(170, 170, 170)","rgb(150, 150, 150)","rgb(155, 155, 155)"],light:["rgb(60, 60, 60)","rgb(90, 90, 90)","rgb(85, 85, 85)","rgb(110, 110, 110)","rgb(105, 105, 105)","rgb(125, 125, 125)","rgb(120, 120, 120)"]},ocean:{dark:["rgb(80, 140, 255)","rgb(40, 200, 230)","rgb(120, 90, 255)","rgb(30, 170, 210)","rgb(160, 80, 240)","rgb(60, 110, 255)","rgb(40, 190, 180)"],light:["rgb(40, 100, 240)","rgb(20, 160, 200)","rgb(90, 60, 230)","rgb(20, 130, 180)","rgb(130, 50, 220)","rgb(40, 80, 230)","rgb(20, 150, 150)"]},sunset:{dark:["rgb(255, 110, 60)","rgb(255, 180, 40)","rgb(255, 60, 90)","rgb(255, 210, 80)","rgb(240, 70, 140)","rgb(255, 140, 50)","rgb(230, 50, 110)"],light:["rgb(235, 80, 30)","rgb(230, 150, 10)","rgb(230, 30, 70)","rgb(225, 175, 30)","rgb(215, 40, 110)","rgb(235, 110, 20)","rgb(205, 30, 90)"]},forest:{dark:["rgb(70, 220, 120)","rgb(40, 200, 180)","rgb(140, 230, 80)","rgb(30, 170, 140)","rgb(190, 235, 70)","rgb(50, 190, 110)","rgb(30, 150, 120)"],light:["rgb(30, 170, 80)","rgb(20, 150, 130)","rgb(90, 180, 30)","rgb(20, 130, 100)","rgb(130, 180, 20)","rgb(30, 150, 80)","rgb(20, 120, 90)"]},candy:{dark:["rgb(255, 90, 170)","rgb(255, 120, 220)","rgb(210, 80, 255)","rgb(255, 150, 190)","rgb(180, 110, 255)","rgb(255, 70, 140)","rgb(230, 100, 240)"],light:["rgb(235, 40, 140)","rgb(230, 70, 190)","rgb(180, 40, 230)","rgb(235, 100, 160)","rgb(150, 70, 230)","rgb(230, 30, 110)","rgb(200, 60, 210)"]},ice:{dark:["rgb(150, 230, 255)","rgb(90, 200, 255)","rgb(190, 240, 255)","rgb(120, 190, 255)","rgb(160, 220, 250)","rgb(80, 170, 255)","rgb(200, 235, 255)"],light:["rgb(30, 160, 220)","rgb(20, 130, 210)","rgb(60, 180, 230)","rgb(40, 120, 220)","rgb(50, 160, 220)","rgb(20, 110, 220)","rgb(70, 170, 230)"]},gold:{dark:["rgb(255, 200, 70)","rgb(255, 170, 40)","rgb(255, 220, 110)","rgb(240, 150, 30)","rgb(255, 235, 140)","rgb(230, 160, 40)","rgb(250, 210, 90)"],light:["rgb(200, 140, 10)","rgb(190, 120, 0)","rgb(210, 160, 30)","rgb(180, 110, 0)","rgb(205, 170, 40)","rgb(175, 115, 5)","rgb(195, 150, 20)"]}};function eU(e,t){let n=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return n?`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${t.toFixed(2)})`:e}function Hv(e,t=1){return Math.max(.5,Math.round(e*t*100)/100)}function nU(e,t){return`calc(50% + (var(--vb-cx-${t}) + var(--vb-x${e}-${t})) * var(--vb-w-${t}) * var(--vb-z-${t}, 1))`}function Vv({id:e,colors:t,alpha:n,sw:i,sh:a,y:s,fade:r,count:o}){return(o?$s.slice(0,o):$s).map((l,c)=>{let f=n>=1?t[c%t.length]:eU(t[c%t.length],n),p=`calc(${Math.round(l.w*i)}px * var(--vb-w-${e}) * var(--vb-z-${e}, 1))`,u=`calc(${Math.round(l.h*a)}px * var(--vb-h-${e}) * var(--vb-l${c}-${e}) * var(--vb-z-${e}, 1))`,d=`calc(100% + (${s}px + var(--vb-y${c}-${e})) * var(--vb-z-${e}, 1))`;return`radial-gradient(ellipse ${p} ${u} at ${nU(c,e)} ${d}, ${f} 0%, transparent ${r}%)`}).join(`,
    `)}function iU(e){let{id:t,borderRadius:n,borderWidth:i,strokeOpacity:a,innerOpacity:s,bloomOpacity:r,innerShadow:o,colorVariant:l,colors:c,brightness:f,saturation:p,theme:u,hueBase:d=0,glowSize:v=1,glowWidth:M=1,glowHeight:g=1,strokeScale:h=1,innerScale:_=1,innerHeight:b=1,bloomScale:y=1,bloomHeight:T=1,coreSize:E=1,coreLight:C=0,coreLightWidth:x=1,coreLightHeight:w=1,rangeWidth:R=1,rangeHeight:I=1,softness:F=1,distortion:z=!1,scale:D=1}=e,B=Math.round(28*D*10)/10,Z=Math.round(9*D*10)/10,X=Math.max(0,n-i),k=Math.round(Math.max(40,Math.min(95,70*F))),G=m=>M*m,J=m=>g*m,Q=m=>Math.round(m*10)/10,ot=`var(--vb-z-${t}, 1)`,rt=m=>`calc(${Q(m)}px * ${ot})`,ct=u==="dark",Lt=tU[l][ct?"dark":"light"].map((m,N)=>{let P=c?.[N];return P&&$D(P)||m}),kt=l==="mono"?.6:1,$=(a*kt).toFixed(2),tt=(s*kt).toFixed(2),bt=(r*kt).toFixed(2),Dt=f.toFixed(2),ht=p.toFixed(2),Nt=`hue-rotate(calc(var(--voice-hue-base, ${d}deg) + var(--vb-hue-${t})))`,Ae=z?` url(#vb-distort-${t})`:"",Bt=`filter: ${Nt} brightness(${Dt}) saturate(${ht});`,Zt=`filter: ${Nt} brightness(${Dt}) saturate(${ht})${Ae};`,oe=`filter: blur(${rt(Hv(10,v))}) ${Nt} brightness(${Dt}) saturate(${ht});`,Xt=`filter: blur(${rt(Hv(10,v))}) ${Nt} brightness(${Dt}) saturate(${ht})${Ae};`,re=`calc(50% + var(--vb-cx-${t}) * var(--vb-w-${t}) * ${ot})`,Ne=`calc(100% + (2px + var(--vb-cy-${t})) * ${ot})`,Xe=ct?`radial-gradient(ellipse calc(${Q(30*E)}px * var(--vb-w-${t}) * ${ot}) calc(${Q(30*E)}px * var(--vb-h-${t}) * ${ot}) at ${re} ${Ne}, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 30%, transparent 65%)`:`radial-gradient(ellipse calc(${Q(40*E)}px * var(--vb-w-${t}) * ${ot}) calc(${Q(30*E)}px * var(--vb-h-${t}) * ${ot}) at ${re} ${Ne}, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.22) 35%, transparent 70%)`,de=Vv({id:t,colors:Lt,alpha:1,sw:G(h),sh:J(h),y:2,fade:k}),we=Vv({id:t,colors:Lt,alpha:.46,sw:G(.9*_),sh:J(.9*_*b),y:0,fade:k}),L=Vv({id:t,colors:Lt,alpha:ct?.9:.7,sw:G(1.15*y),sh:J(1.5*y*T),y:0,fade:Math.min(95,k+2)}),Se=(m,N,P,Y=0)=>`radial-gradient(ellipse calc(${Q(m*R)}px * var(--vb-w-${t}) * var(--vb-mw-${t}) * ${ot}) calc((${Q(N*I)}px * var(--vb-h-${t}) + var(--vb-bh-${t})) * ${ot}) at ${re} calc(100% + var(--vb-cy-${t}) * ${ot}), white 0%, rgba(255, 255, 255, 0.5) ${P}%${Y>0?`, rgba(255, 255, 255, ${Y}) 85%`:""}, transparent 100%)`,it=(m,N)=>`opacity: calc(var(--vb-opacity-${t}, 1) * var(--vb-glow-${t}) * ${N} * var(--voice-${m}-opacity, 1) * var(--voice-strength, 1));`,A=(m,N,P,Y)=>`${m} {
  ${N}
  position: absolute;
  inset: 0;
  border-radius: ${rt(n)};
  background: ${we};
  box-shadow: inset 0 0 ${rt(Z)} 1px ${o};
  -webkit-mask-image:
    ${Se(170,64,45,.3)},
    linear-gradient(white, transparent ${rt(B)}, transparent calc(100% - ${B}px * ${ot}), white),
    linear-gradient(to right, white, transparent ${rt(B)}, transparent calc(100% - ${B}px * ${ot}), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    ${Se(170,64,45,.3)},
    linear-gradient(white, transparent ${rt(B)}, transparent calc(100% - ${B}px * ${ot}), white),
    linear-gradient(to right, white, transparent ${rt(B)}, transparent calc(100% - ${B}px * ${ot}), white);
  mask-composite: intersect, add;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 1;
  ${P}
  ${it("inner",tt)}
  ${Y}
}`;return`
@property --vb-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-voice-beam="${t}"] {
  position: relative;
  border-radius: ${n}px;
  overflow: hidden;
  --vb-h-${t}: 0.8;
  --vb-w-${t}: 1;
${$s.map((m,N)=>`  --vb-x${N}-${t}: ${m.x}px;
  --vb-l${N}-${t}: 1;
  --vb-y${N}-${t}: 0px;`).join(`
`)}
  --vb-glow-${t}: 0.4;
  --vb-z-${t}: 1;
  --vb-cx-${t}: 0px;
  --vb-cy-${t}: 0px;
  --vb-bh-${t}: 0px;
  --vb-bendA-${t}: 0;
  --vb-mw-${t}: 1;
  --vb-hue-${t}: 0deg;
  --vb-level-${t}: 0;
}

[data-voice-beam="${t}"][data-active] {
  animation: vb-fade-in-${t} 0.6s ease forwards;
}

[data-voice-beam="${t}"][data-fading] {
  animation: vb-fade-out-${t} 0.5s ease forwards;
}

/* Stroke \u2014 the colours painted into the 1px edge ring, masked to the centred ellipse. */
[data-voice-beam="${t}"][data-active]::after,
[data-voice-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${rt(X)};
  padding: ${rt(i)};
  clip-path: inset(0 round ${rt(n)});
  background:
    ${Xe},
    ${de};
  -webkit-mask:
    ${Se(170,64,45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    ${Se(170,64,45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 2;
  ${it("stroke",$)}
  ${Bt}
}

/* Inner glow \u2014 soft light inside the element, faded off at the corners.
   With distortion on, this copy is clipped to ABOVE the band line (the
   polygon the driver writes each frame) and a mirror layer below carries
   the displacement filter, so only the glow under the line warps. */
${A(`[data-voice-beam="${t}"][data-active]::before,
[data-voice-beam="${t}"][data-fading]::before`,'content: "";',z?`clip-path: var(--vb-clip-above-${t}, inset(0 round ${n}px));`:`clip-path: inset(0 round ${n}px);`,Bt)}
${z?A(`[data-voice-beam="${t}"][data-active] [data-voice-beam-warp="inner"],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-warp="inner"]`,"display: block;",`clip-path: var(--vb-clip-below-${t}, inset(0 round ${n}px));`,Zt):""}

/* Bloom \u2014 the blurred halo, tallest of the three, above the content. */
[data-voice-beam="${t}"] [data-voice-beam-bloom],
[data-voice-beam="${t}"] [data-voice-beam-warp] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${rt(X)};
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  opacity: 0;
}

[data-voice-beam="${t}"] [data-voice-beam-bloom],
[data-voice-beam="${t}"] [data-voice-beam-warp="bloom"] {
  -webkit-mask: ${Se(200,130,35)};
  mask: ${Se(200,130,35)};
  background: ${L};
  z-index: 3;
}

[data-voice-beam="${t}"][data-active] [data-voice-beam-bloom],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-bloom] {
  display: block;
  clip-path: ${z?`var(--vb-clip-above-${t}, inset(0 round ${n}px))`:`inset(0 round ${n}px)`};
  ${it("bloom",bt)}
  ${oe}
}
${z?`
[data-voice-beam="${t}"][data-active] [data-voice-beam-warp="bloom"],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-warp="bloom"] {
  display: block;
  clip-path: var(--vb-clip-below-${t}, inset(0 round ${n}px));
  ${it("bloom",bt)}
  ${Xt}
}

/* Processing drops the distortion: the driver marks the wrapper once the
   warp has faded out, the warp layers leave the paint and the base layers
   give up their split at the band line. */
[data-voice-beam="${t}"][data-voice-warp="off"]::before,
[data-voice-beam="${t}"][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${n}px);
}

[data-voice-beam="${t}"][data-voice-warp="off"] [data-voice-beam-warp] {
  display: none;
}`:""}

/* Epicentre \u2014 a soft white wash at the source, under the band line (the
   driver's clip; unclipped when no line is drawn), sitting above every
   glow layer and the band's halo so the centre reads lighter than the
   band (same z as the band canvases, painted after them). Sized by the voice like the
   other layers; off unless \`coreLight\` is set (the light theme sets it).
   Up to 1 it is the wash's opacity; past 1 the solid white core widens
   too, for a centre that stays lighter than a strong band. It follows the
   glow's presence but not \`strength\`, which would only dim it. */
${C>0?(()=>{let m=Math.max(0,Math.min(2,C-1)),N=Math.min(1,m),P=Math.max(0,m-1),Y=1+.3*m,st=Q(45*N+27*P),lt=Q(40+25*N+15*P),K=Math.min(1,.55+.35*N+.1*P).toFixed(2),j=Q(72+14*N+8*P);return`[data-voice-beam="${t}"] [data-voice-beam-core] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${rt(X)};
  overflow: hidden;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  /* The blur sits on this wrapper and the band-line clip on the child,
     so the cut edge is blurred too rather than left hard. */
  filter: blur(${rt(Hv(8,v))});
  z-index: 4;
}

[data-voice-beam="${t}"] [data-voice-beam-core] > div {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse calc(${Q(120*x*Y*D)}px * var(--vb-w-${t}) * ${ot}) calc((${Q(70*w*Y*D)}px * var(--vb-h-${t}) + var(--vb-bh-${t})) * ${ot}) at ${re} calc(100% + var(--vb-cy-${t}) * ${ot}), white 0%, white ${st}%, rgba(255, 255, 255, ${K}) ${lt}%, transparent ${j}%);
  clip-path: var(--vb-clip-below-${t}, none);
}

[data-voice-beam="${t}"][data-active] [data-voice-beam-core],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-core] {
  display: block;
  opacity: calc(var(--vb-opacity-${t}, 1) * min(1, var(--vb-glow-${t}) * ${Math.min(1,C).toFixed(2)} * ${(1.6+1.4*m).toFixed(2)}) * var(--voice-core-light-opacity, 1));
}
`})():""}
/* Band \u2014 the canvas the driver draws the bend's contour on: an organic
   bell with chromatic fringes. Fades with the root, follows the strength
   and turns with the hue drift like the other layers. */
[data-voice-beam="${t}"] [data-voice-beam-band],
[data-voice-beam="${t}"] [data-voice-beam-band-halo] {
  display: none;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 4;
}

[data-voice-beam="${t}"][data-active] [data-voice-beam-band],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-band],
[data-voice-beam="${t}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-band-halo] {
  display: block;
  opacity: calc(var(--vb-opacity-${t}, 1) * var(--voice-band-opacity, 1) * var(--voice-strength, 1));
  /* The blur vars are 0 where the canvas blurs its own strokes; where the
     2D context has no filter (WebKit) the driver sets them and the layers
     are blurred here instead \u2014 the ridge on the band canvas, its wider
     halo on the canvas beneath. */
  filter: blur(var(--vb-band-blur-${t}, 0px)) ${Nt} brightness(${Dt}) saturate(${ht});
}

[data-voice-beam="${t}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-band-halo] {
  filter: blur(var(--vb-band-halo-blur-${t}, 0px)) ${Nt} brightness(${Dt}) saturate(${ht});
}

/* Resolution. The soft layers \u2014 inner light and its warp mirror, bloom and
   its mirror, the epicentre \u2014 are rastered at half size and scaled back
   up by the compositor: the box is halved, every length inside rides the
   layer's factor \`--vb-z\` at 0.5 (the driver also writes the band-line
   clips at half scale), and the will-change transform is rastered
   pre-scale where the engine does that (Chromium, Safari 18). For blurred
   gradients that is the same picture at a quarter of the raster and
   filter work, which is what a phone at 3x runs out of. The 1px stroke
   stays full-res on every screen: at half size it is half a CSS pixel,
   which a 3x phone rasters into a faint smear instead of the hairline,
   and the layer is cheap (no blur). The component sets
   \`data-voice-halfres\`. */
[data-voice-beam="${t}"][data-voice-halfres]::before,
[data-voice-beam="${t}"][data-voice-halfres] [data-voice-beam-warp],
[data-voice-beam="${t}"][data-voice-halfres] [data-voice-beam-bloom],
[data-voice-beam="${t}"][data-voice-halfres] [data-voice-beam-core] {
  --vb-z-${t}: 0.5;
  inset: auto;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  transform: translateZ(0) scale(2);
  transform-origin: 0 0;
}
${z?`[data-voice-beam="${t}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${t}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: var(--vb-clip-above-z-${t}, inset(0 round ${rt(n)}));
}
[data-voice-beam="${t}"][data-voice-halfres][data-active] [data-voice-beam-warp],
[data-voice-beam="${t}"][data-voice-halfres][data-fading] [data-voice-beam-warp] {
  clip-path: var(--vb-clip-below-z-${t}, inset(0 round ${rt(n)}));
}
/* Processing (warp off): the mirrors are gone, so the base layers paint
   the whole box again \u2014 this must outweigh the split above. */
[data-voice-beam="${t}"][data-voice-halfres][data-voice-warp="off"]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${rt(n)});
}`:`[data-voice-beam="${t}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${t}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${rt(n)});
}`}
[data-voice-beam="${t}"][data-voice-halfres] [data-voice-beam-core] > div {
  clip-path: var(--vb-clip-below-z-${t}, none);
}
@keyframes vb-fade-in-${t} {
  to { --vb-opacity-${t}: 1; }
}

@keyframes vb-fade-out-${t} {
  from { --vb-opacity-${t}: 1; }
  to { --vb-opacity-${t}: 0; }
}

[data-voice-beam="${t}"][data-paused],
[data-voice-beam="${t}"][data-paused]::after,
[data-voice-beam="${t}"][data-paused]::before,
[data-voice-beam="${t}"][data-paused] [data-voice-beam-bloom] {
  animation-play-state: paused !important;
}
`}var cu=null;function aU(){if(typeof window>"u")return null;let e=window;return e.AudioContext??e.webkitAudioContext??null}function sU(){let e=aU();return e?(cu||(cu=new e),cu.state==="suspended"&&cu.resume().catch(()=>{}),cu):null}var Gv=new WeakMap;function rU(e){let t=sU();if(!t||e.getAudioTracks().length===0)return null;let n=Gv.get(e);n||(n={node:t.createMediaStreamSource(e),refs:0},Gv.set(e,n)),n.refs+=1;let i=t.createAnalyser();i.fftSize=1024,i.smoothingTimeConstant=.5,n.node.connect(i);let a=!1;return{analyser:i,release:()=>{if(!a){a=!0;try{n.node.disconnect(i)}catch{}if(n.refs-=1,n.refs<=0){try{n.node.disconnect()}catch{}Gv.delete(e)}}}}}var gT={gather:0,offset:0,stretch:0,heldLevel:0,cornerFollow:0},oT=new WeakMap;function oU(e){let t=oT.get(e);return t||(t={level:0,bands:[0,0,0],phase:0,motion:{...gT},t:0,lastTs:0,warp:1,drift:0,fast:0,fastBands:[0,0,0]},oT.set(e,t)),t}var cp=new Set;new Float32Array($s.length);new Float32Array($s.length);var vl=null,Xv=0,lU=1e3/60-2,cU=22,uU=500,hU=4e3,lp=0,kv=!1,rp=!1,ml=0,lT=0,vT=Math.PI*2,fU=5,dU=1.7,pU=[[80,300],[300,2e3],[2e3,6e3]];function gl(e){return e<0?0:e>1?1:e}function mU(e,t){let n=t/2;return((e+n)%t+t)%t-n}function gU(e,t){let n=e/(t/2+4);return Math.max(0,1-n*n)}function cT(e,t){if(e<=t)return 0;let n=(e-t)/Math.max(.001,1-t);return gl((1-Math.exp(-3*n))/(1-Math.exp(-3)))}function uu(e,t,n,i,a){let s=t>e?i:a,r=1-Math.exp(-n/Math.max(.001,s));return e+(t-e)*r}var vU=2,_U=.06,yU=.35,xU=.03,uT=.03,bU=!(typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent)),hT=.05,SU=6,MU=12,TU=.1,fT=.1,EU=170,AU=64,dT=56;function wU(e,t,n,i){let a=e<0?1-i:1+i,s=Math.max(.05,n*a),r=Math.exp(-Math.pow(Math.abs(e)/s,t)),o=Math.exp(-Math.pow(1/s,t));return Math.max(0,(r-o)/(1-o))}function CU(e,t,n,i,a){if(n<=0||t<=0)return 0;let s=t*Math.max(0,Math.min(.98,i));if(e<=s)return 0;let r=Math.min(1,(e-s)/Math.max(1,t-s));return n*Math.pow(r,Math.max(.5,a))}function _T(e,t,n){return Math.max(0,Math.min(e,t/2,n/2))}function Wv(e,t,n,i=0){if(n<=0)return 0;let a=Math.min(e,t-e)-i;if(a>=n)return 0;if(a<=0)return n;let s=n-a;return n-Math.sqrt(Math.max(0,n*n-s*s))}function RU(e,t,n,i){let a=n/2+t.cx*t.w,s=EU*e.rangeWidth*t.w*t.mw,r=i*.82*Math.min(1,e.scale),o=Math.min(r,(AU*e.rangeHeight*t.h+t.lift)*e.bandPosition),l=i-e.bandOffset,c=Math.min(1,t.corner*4),f=e.bandTail*(1-c*c*(3-2*c)),p=f>.001,u=p?e.bandTailOverflow:0,d=p?-u:a-s,v=p?n+u:a+s,M=[];for(let g=0;g<=dT;g++){let h=d+(v-d)*g/dT,_=Math.max(-1,Math.min(1,(h-a)/Math.max(1,s))),b=(h<a?a:n-a)+u,y=wU(_,e.bandCurve,e.bandSpread,e.bandSkew)+CU(Math.abs(h-a),b,f,e.bandTailPosition,e.bandTailCurve),T=t.corner>0?Wv(h,n,_T(e.radius,n,i))*t.corner:0;M.push([h,l-o*y-T])}return M}function NU(e,t,n,i,a){for(let[s,r]of[["",1],["-z",.5]]){let o=p=>(p*r).toFixed(1)+"px",l=n.map(([p,u])=>`${o(p)} ${o(u)}`),c=`polygon(0 ${o(a)}, ${l.join(", ")}, ${o(i)} ${o(a)})`,f=`polygon(0 0, ${o(i)} 0, ${o(i)} ${o(a)}, ${l.slice().reverse().join(", ")}, 0 ${o(a)})`;e.style.setProperty(`--vb-clip-below${s}-${t}`,c),e.style.setProperty(`--vb-clip-above${s}-${t}`,f)}}function DU(e,t,n){let i=n;for(let o=0;o<t.length;o++)t[o][1]<i&&(i=t[o][1]);let a=Math.max(0,Math.min(.9,Math.floor((i-SU)/n/hT)*hT));if(a===e.filterTop)return;e.filterTop=a;let s=1+Math.max(TU,MU/n),r=e.filter;r.setAttribute("x",`${-fT*100}%`),r.setAttribute("width",`${(1+2*fT)*100}%`),r.setAttribute("y",`${(a*100).toFixed(0)}%`),r.setAttribute("height",`${((s-a)*100).toFixed(1)}%`)}function UU(e,t,n){let{canvas:i,ctx:a,el:s,config:r}=e;if(!i||!a)return;let o=s.clientWidth,l=s.clientHeight;if(!o||!l)return;let c=Math.min(vU,typeof window<"u"&&window.devicePixelRatio||1),f=Math.round(o*c),p=Math.round(l*c);(i.width!==f||i.height!==p)&&(i.width=f,i.height=p),a.setTransform(c,0,0,c,0,0),a.clearRect(0,0,o,l);let u=e.haloCanvas,d=e.haloCtx;u&&d&&((u.width!==f||u.height!==p)&&(u.width=f,u.height=p),d.setTransform(c,0,0,c,0,0),d.clearRect(0,0,o,l));let v=Math.min(1,.6*r.bandStrength*t.strength);if(v<.005||r.bandWidth<=0)return;let M=r.theme==="dark",g=r.bandWidth*(1+.35*t.level),h=r.bandAberration*(.35+.65*t.level),_=(4+12*h)*r.scale,b=4*h*r.scale,y=(k,G)=>{a.beginPath(),a.moveTo(n[0][0]+k,n[0][1]+G);for(let J=1;J<n.length;J++)a.lineTo(n[J][0]+k,n[J][1]+G)},T={r:r.bandColors.above,g:r.bandColors.mid,c:r.bandColors.core,b:r.bandColors.below},E=(M?.42:.4)*v,C=14*g,x=3.5*r.bandWidth/2,w=x*c,R=typeof a.filter=="string",I=R?"0px":`${x.toFixed(2)}px`;e.cssBlur!==I&&(s.style.setProperty(`--vb-band-blur-${r.id}`,I),s.style.setProperty(`--vb-band-halo-blur-${r.id}`,R?"0px":`${(x*3).toFixed(2)}px`),e.cssBlur=I);let F=[[1,.16],[.72,.2],[.46,.26],[.22,.34]],z=[{rgb:T.r,a:1,ox:b,oy:-_},{rgb:T.g,a:.55,ox:b*.35,oy:-_*.35},{rgb:T.b,a:1,ox:-b,oy:_},{rgb:T.c,a:.9,ox:0,oy:0}];a.lineCap="round",a.lineJoin="round",a.globalCompositeOperation="source-over";let D=n[0][0],B=n[n.length-1][0],Z=(k,G)=>{let J=a.createLinearGradient(D,0,B,0),Q=r.bandTail>0?.015:.18;return J.addColorStop(0,`rgba(${k}, 0)`),J.addColorStop(Q,`rgba(${k}, ${G.toFixed(3)})`),J.addColorStop(1-Q,`rgba(${k}, ${G.toFixed(3)})`),J.addColorStop(1,`rgba(${k}, 0)`),J},X=!R&&d?d:a;R&&(a.filter=`blur(${(w*3).toFixed(1)}px)`),X.lineCap="round",X.lineJoin="round",X.strokeStyle=Z(T.c,E*.3),X.lineWidth=C*2.2,X.beginPath(),X.moveTo(n[0][0],n[0][1]);for(let k=1;k<n.length;k++)X.lineTo(n[k][0],n[k][1]);X.stroke(),R&&(a.filter=`blur(${w.toFixed(1)}px)`);for(let k of z)for(let[G,J]of F)a.strokeStyle=Z(k.rgb,E*k.a*J),a.lineWidth=Math.max(.6,C*G),y(k.ox,k.oy),a.stroke();R&&(a.filter="none"),a.globalCompositeOperation="source-over"}function LU(e){return(1-Math.cos(vT*e))/2}function OU(e,t){let n=e.analyser,i=e.time,a=e.freq;n.getFloatTimeDomainData(i);let s=0;for(let o=0;o<i.length;o++)s+=i[o]*i[o];t.level=Math.sqrt(s/i.length)*fU*e.config.sensitivity,n.getByteFrequencyData(a);let r=n.context.sampleRate/n.fftSize;for(let o=0;o<3;o++){let[l,c]=pU[o],f=Math.max(0,Math.floor(l/r)),p=Math.min(a.length-1,Math.ceil(c/r)),u=0;for(let v=f;v<=p;v++)u+=a[v];let d=p>=f?u/(p-f+1)/255:0;t.bands[o]=d*dU*e.config.sensitivity}}var Hr={level:0,bands:[0,0,0]};function yT(e){vl=requestAnimationFrame(yT);let t=lp?e-lp:0;if(lp=e,kv){if(rp=!rp,rp)return;e>=lT&&(kv=!1,ml=0)}else t>cU?ml?e-ml>uU&&(kv=!0,rp=!1,lT=e+hU):ml=e:ml=0;e-Xv<lU||(Xv=e,cp.forEach(n=>{var i,a;let{el:s,config:r,source:o,s:l}=n,c=r.paused;if(c&&n.paintedConfig===r)return;let f=c?0:l.lastTs?Math.min(.05,(e-l.lastTs)/1e3):1/60;l.lastTs=e,l.t+=f;let p=l.t;if(!c)if(n.analyser)OU(n,Hr);else{let ct=o.getLevel?gl(o.getLevel()):0;Hr.level=ct,Hr.bands[0]=ct,Hr.bands[1]=ct*(.72+.28*Math.sin(p*9.1)),Hr.bands[2]=ct*(.6+.4*Math.sin(p*13.7+2))}let u=cT(Hr.level,r.threshold);l.level=uu(l.level,u,f,r.attack,r.release);for(let ct=0;ct<3;ct++){let Lt=cT(Hr.bands[ct],r.threshold*.6);l.bands[ct]=uu(l.bands[ct],Lt,f,r.attack,r.release*1.15),n.surface&&(l.fastBands[ct]=uu(l.fastBands[ct],Lt,f,r.attack*.6,uT))}n.surface&&(l.fast=uu(l.fast,u,f,r.attack*.6,uT));let d=jD*r.lobeSpacing;if(!c){let ct=(i=o.getMotion)==null?void 0:i.call(o);l.motion=ct?{gather:gl(ct.gather),offset:ct.offset??0,stretch:gl(ct.stretch??0),heldLevel:gl(ct.heldLevel??0),cornerFollow:gl(ct.cornerFollow??0)}:gT}let v=l.motion,M=v.gather,g=s.clientWidth,h=s.clientHeight,_=r.reducedMotion?0:v.offset*d/2,b=1-M*.6,y=1-M*.45,T=1+M*.3*v.stretch,E=r.reducedMotion?.5:.5+.5*Math.sin(vT*p/r.breatheDuration),C=l.level+(1-l.level)*r.idle*E,x=Math.max(0,Math.min(1,(M-.25)/.75)),w=x*x*(3-2*x),R=Math.max(C,v.heldLevel*w),I=.15+.85*R,F=.5+r.reach*R,z=(.85+r.spread*R)*T;r.flow!==0&&!r.reducedMotion&&(l.phase=((l.phase+r.flow*R*f)%d+d)%d,l.drift+=r.flow*R*f),s.style.setProperty(`--vb-level-${r.id}`,l.level.toFixed(3)),s.style.setProperty(`--vb-cx-${r.id}`,`${_.toFixed(1)}px`),s.style.setProperty(`--vb-mw-${r.id}`,y.toFixed(3));let D=r.bend*R;s.style.setProperty(`--vb-bh-${r.id}`,`${Math.max(0,D).toFixed(1)}px`);let B=r.bend>0?Math.min(1,D/r.bend):0;s.style.setProperty(`--vb-bendA-${r.id}`,B.toFixed(3));let Z={cx:_,w:z,h:F,mw:y,lift:D,strength:B,level:l.level,corner:M},X=g/2+_*z,k=30*r.scale*z,G=_T(r.radius,g,h),J=M*v.cornerFollow;s.style.setProperty(`--vb-cy-${r.id}`,`${(-Wv(X,g,G,k*1.4)*J).toFixed(1)}px`),l.warp=uu(l.warp,M>.02?0:1,f,yU,_U);let Q=l.warp,ot=n.displace!=null&&Q<xU;if(ot!==n.warpOff&&(n.warpOff=ot,ot?s.setAttribute("data-voice-warp","off"):s.removeAttribute("data-voice-warp")),g&&h&&(n.ctx||n.displace)){let ct=RU(r,Z,g,h);(n.displace&&!ot||r.coreLight>0)&&NU(s,r.id,ct,g,h),n.filter&&!ot&&bU&&DU(n,ct,h),n.ctx&&UU(n,Z,ct)}if(n.displace&&!ot){let ct=r.reducedMotion?0:r.distortion*120*r.scale*(.15+.85*R)*Q;n.displace.scale.baseVal=ct,n.noiseShift&&(n.noiseShift.dx.baseVal=8*r.scale*Math.sin(p*.9),n.noiseShift.dy.baseVal=4*r.scale*Math.sin(p*.6+1.3))}s.style.setProperty(`--vb-glow-${r.id}`,I.toFixed(3)),s.style.setProperty(`--vb-h-${r.id}`,F.toFixed(3)),s.style.setProperty(`--vb-w-${r.id}`,z.toFixed(3));for(let ct=0;ct<$s.length;ct++){let Lt=$s[ct],kt=mU(Lt.x*r.lobeSpacing+l.phase,d),$=r.bands?.6+.7*l.bands[Lt.band]:1;s.style.setProperty(`--vb-x${ct}-${r.id}`,`${(kt*b).toFixed(1)}px`),s.style.setProperty(`--vb-l${ct}-${r.id}`,($*gU(kt,d)).toFixed(3));let tt=g/2+(_+kt*b)*z;s.style.setProperty(`--vb-y${ct}-${r.id}`,`${(-Wv(tt,g,G,k)*J).toFixed(1)}px`)}let rt=r.staticColors||r.reducedMotion||r.hueRange===0?0:-r.hueRange+2*r.hueRange*LU(p/r.hueDuration);s.style.setProperty(`--vb-hue-${r.id}`,`${rt.toFixed(2)}deg`),(a=n.onLevel)==null||a.call(n,l.level),n.paintedConfig=r}))}function IU(){vl==null&&(Xv=0,lp=0,ml=0,vl=requestAnimationFrame(yT))}function PU(){cp.size===0&&vl!=null&&(cancelAnimationFrame(vl),vl=null)}function BU(e,t,n,i){let a={el:e,config:t,source:n,onLevel:i,analyser:null,releaseAnalyser:null,time:null,freq:null,canvas:null,ctx:null,haloCanvas:null,haloCtx:null,displace:null,noiseShift:null,filter:null,filterTop:-1,s:oU(e),paintedConfig:null,cssBlur:null,warpOff:e.hasAttribute("data-voice-warp"),surface:null};t.distortion>0&&(a.displace=e.querySelector(":scope > svg feDisplacementMap"),a.noiseShift=e.querySelector(":scope > svg feOffset"),a.filter=e.querySelector(":scope > svg filter"));let s=e.querySelector(":scope > [data-voice-beam-band]");if(s){a.canvas=s,a.ctx=s.getContext("2d");let r=e.querySelector(":scope > [data-voice-beam-band-halo]");r&&(a.haloCanvas=r,a.haloCtx=r.getContext("2d"))}if(a.s.lastTs=0,n.stream){let r=rU(n.stream);r&&(a.analyser=r.analyser,a.releaseAnalyser=r.release,a.time=new Float32Array(r.analyser.fftSize),a.freq=new Uint8Array(r.analyser.frequencyBinCount))}return cp.add(a),IU(),()=>{var r;cp.delete(a),(r=a.releaseAnalyser)==null||r.call(a),PU()}}var zU={scale:1,glowSize:1,strokeOpacity:1,innerOpacity:1,bloomOpacity:1,idle:.18,reach:1.2,spread:1.05,flow:48,bend:60,bandStrength:1.55,bandWidth:2.15,bandPosition:.35,bandCurve:1.75,bandSpread:.87,bandSkew:.12,bandOffset:-27,bandTail:.59,bandTailPosition:.67,bandTailCurve:2.4,bandTailOverflow:15,bandAberration:.89,distortion:.62,distortionDetail:2.3,glowWidth:.65,glowHeight:1.25,lobeSpacing:.85,rangeWidth:.75,rangeHeight:1,softness:1.07,coreSize:1,coreLight:0,coreLightWidth:1,coreLightHeight:1,strokeScale:1,innerScale:1,innerHeight:1,bloomScale:1,bloomHeight:1},FU={default:{},pill:{scale:.45,glowSize:.95,strokeOpacity:1.2,innerOpacity:.85,reach:1.35,spread:1.1,flow:0,bend:23,bandStrength:1.55,bandWidth:1.85,bandCurve:1.95,bandSpread:.38,bandOffset:-16,bandTail:0,distortion:.45,distortionDetail:3,glowWidth:.65,glowHeight:.95,lobeSpacing:.45,rangeWidth:.8,rangeHeight:.7,softness:.88,coreSize:.25,strokeScale:1.25,innerScale:.95,bloomScale:1.05,bloomHeight:2.25},mobile:{scale:1.25,spread:.45,reach:3,flow:60,bend:70,bandWidth:2.4,bandCurve:1.55,bandSpread:.9,bandOffset:-50,bandTail:.62,bandTailPosition:.42,bandTailCurve:2.7,bandTailOverflow:22,bandStrength:1.8,distortionDetail:2,glowWidth:1.15,glowHeight:2.1,lobeSpacing:1.35,rangeWidth:1.25,rangeHeight:1.2,softness:1.1}},HU={default:{brightness:1.15},pill:{brightness:1.35,saturation:1.5},mobile:{strength:1,brightness:1.2,saturation:1.5}},VU={default:{},pill:{},mobile:{strength:1}};function GU(e="default",t="dark"){return(t==="light"?VU[e]:void 0)??HU[e]}var kU={default:{bandStrength:1.7},pill:{bandStrength:2},mobile:{bandStrength:1.7}};function XU(e="default",t="dark"){let n=FU[e],i={};return t==="light"&&(n.reach===void 0&&(i.reach=1.8),n.spread===void 0&&(i.spread=.8),n.coreLight===void 0&&(i.coreLight=1.8)),{...zU,...i,...n,...t==="light"?kU[e]:void 0}}var op={dark:{core:"255, 255, 255",above:"255, 70, 80",mid:"90, 255, 150",below:"80, 140, 255"},light:{core:"197, 139, 255",above:"255, 122, 182",mid:"126, 196, 255",below:"45, 255, 171"}},WU=1,qU=16,YU=6e4,pT=typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent),ZU=(()=>{if(typeof document>"u")return!0;let e=document.createElement("canvas").getContext("2d");return!!e&&typeof e.filter=="string"})();function JU(){let[e,t]=(0,fe.useState)(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,fe.useEffect)(()=>{if(typeof window>"u")return;let n=window.matchMedia("(prefers-color-scheme: dark)"),i=a=>t(a.matches?"dark":"light");return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),e}function $U(){let[e,t]=(0,fe.useState)(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return(0,fe.useEffect)(()=>{if(typeof window>"u"||!window.matchMedia)return;let n=window.matchMedia("(prefers-reduced-motion: reduce)"),i=a=>t(a.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),e}function KU(e,t){return e==="auto"?t:e}var xT=(0,fe.forwardRef)(function({children:e,type:t="default",look:n="glow",dotSize:i=1,dotGap:a=1,dotShape:s="round",lineWidth:r=1,lineGap:o=1,linePattern:l="rows",seeThrough:c=!1,texture:f=.6,gravity:p=1,surfaceHeight:u=1,surfaceCurve:d=1,surfaceTail:v=0,surfaceTailPosition:M=.6,surfaceTailCurve:g=2.4,surfaceFade:h=.2,scale:_,stream:b=null,level:y=0,sensitivity:T=3.1,threshold:E=.015,attack:C=.325,release:x=.86,idle:w,breatheDuration:R=5.2,reach:I,spread:F,bands:z=!0,flow:D,motion:B=null,colorVariant:Z="colorful",colors:X,bandColors:k,theme:G="dark",staticColors:J=!1,hueRange:Q,hueDuration:ot,active:rt=!0,paused:ct=!1,borderRadius:Lt,brightness:kt,saturation:$,glowSize:tt,strokeOpacity:bt,innerOpacity:Dt,bloomOpacity:ht,bend:Nt,bandStrength:Ae,bandWidth:Bt,bandPosition:Zt,bandCurve:oe,bandSpread:Xt,bandSkew:re,bandOffset:Ne,bandTail:Xe,bandTailPosition:de,bandTailCurve:we,bandTailOverflow:L,bandAberration:Se,distortion:it,distortionDetail:A,glowWidth:m,glowHeight:N,lobeSpacing:P,rangeWidth:Y,rangeHeight:st,softness:lt,coreSize:K,coreLight:j,coreLightWidth:ft,coreLightHeight:Ct,strokeScale:gt,innerScale:dt,innerHeight:Rt,bloomScale:Ut,bloomHeight:Vt,strength:O,className:pt,style:et,css:ut,onLevel:yt,onActivate:at,onDeactivate:wt,onAnimationEnd:Et,...Me},jt){let an=(0,fe.useId)().replace(/:/g,"-"),bi=JU(),ni=KU(G,bi),up=X?X.join("|"):"",du=k?[k.core,k.above,k.mid,k.below].join("|"):"",Gt=XU(t,ni),sn=Math.max(.05,_??Gt.scale),_l=tt??Gt.glowSize,js=bt??Gt.strokeOpacity,Si=Dt??Gt.innerOpacity,ts=ht??Gt.bloomOpacity,yl=w??Gt.idle,xl=I??Gt.reach,tr=F??Gt.spread,bl=(D??Gt.flow)*sn,er=(Nt??Gt.bend)*sn,Sl=Ae??Gt.bandStrength,Ml=(Bt??Gt.bandWidth)*sn,pu=Zt??Gt.bandPosition,mu=oe??Gt.bandCurve,gu=Xt??Gt.bandSpread,vu=re??Gt.bandSkew,Tl=(Ne??Gt.bandOffset)*sn,S=Xe??Gt.bandTail,U=de??Gt.bandTailPosition,q=we??Gt.bandTailCurve,H=(L??Gt.bandTailOverflow)*sn,V=Se??Gt.bandAberration,vt=it??Gt.distortion,St=(A??Gt.distortionDetail)/sn,mt=(m??Gt.glowWidth)*sn,Mt=(N??Gt.glowHeight)*sn,At=(P??Gt.lobeSpacing)*sn,zt=(Y??Gt.rangeWidth)*sn,Wt=(st??Gt.rangeHeight)*sn,Tt=lt??Gt.softness,ne=(K??Gt.coreSize)*sn,De=Math.max(0,Math.min(3,j??Gt.coreLight)),Te=ft??Gt.coreLightWidth,pe=Ct??Gt.coreLightHeight,We=gt??Gt.strokeScale,xt=dt??Gt.innerScale,Ke=Rt??Gt.innerHeight,$t=Ut??Gt.bloomScale,yn=Vt??Gt.bloomHeight,ii=$U(),Vn=(0,fe.useRef)(null),[Gn,ce]=(0,fe.useState)(rt),[me,Vi]=(0,fe.useState)(!1),[ge,aa]=(0,fe.useState)(!0),[es,_u]=(0,fe.useState)(null),[RT,NT]=(0,fe.useState)(0);(0,fe.useEffect)(()=>{if(!pT)return;let qe=Vn.current;if(!qe)return;let Ye=()=>NT(qe.clientWidth*qe.clientHeight);if(Ye(),typeof ResizeObserver>"u")return;let sa=new ResizeObserver(Ye);return sa.observe(qe),()=>sa.disconnect()},[]);let yu="glow",DT=!1,Vr=pT&&RT>YU?0:vt;(0,fe.useEffect)(()=>{if(Lt!=null)return;let qe=Vn.current;if(!qe)return;let Ye=()=>{let Su=qe.firstElementChild;if(!Su)return;let PT=getComputedStyle(Su),dp=parseFloat(PT.borderTopLeftRadius);!isNaN(dp)&&dp>0&&_u(dp)};Ye();let sa=new MutationObserver(Ye);return sa.observe(qe,{childList:!0,subtree:!1}),()=>sa.disconnect()},[Lt,e]),(0,fe.useEffect)(()=>{rt&&!Gn&&!me?ce(!0):!rt&&Gn&&!me&&Vi(!0)},[rt,Gn,me]),(0,fe.useEffect)(()=>{let qe=Vn.current;if(!qe||typeof IntersectionObserver>"u")return;let Ye=new IntersectionObserver(sa=>{for(let Su of sa)aa(Su.isIntersecting)},{rootMargin:"256px"});return Ye.observe(qe),()=>Ye.disconnect()},[]);let UT=(0,fe.useCallback)(qe=>{let Ye=qe.animationName;Ye.includes("fade-out")?(ce(!1),Vi(!1),wt?.()):Ye.includes("fade-in")&&at?.(),Et?.(qe)},[at,wt,Et]),Gi=KD[ni],xu=Lt??es??qU,hp=GU(t,ni),LT=O??hp.strength??Gi.strength??1,Zv=Q??Gi.hueRange??24,Jv=ot??Gi.hueDuration??12,bu=kt??hp.brightness??Gi.brightness,$v=$??hp.saturation??Gi.saturation,Kv=(0,fe.useMemo)(()=>iU({id:an,borderRadius:xu,borderWidth:WU,strokeOpacity:Gi.strokeOpacity*js,innerOpacity:Gi.innerOpacity*Si,bloomOpacity:Gi.bloomOpacity*ts,innerShadow:Gi.innerShadow,colorVariant:Z,colors:X,brightness:bu,saturation:$v,theme:ni,hueBase:Gi.hueBase??0,glowSize:_l*sn,glowWidth:mt,glowHeight:Mt,strokeScale:We,innerScale:xt,innerHeight:Ke,bloomScale:$t,bloomHeight:yn,coreSize:ne,coreLight:De,coreLightWidth:Te,coreLightHeight:pe,rangeWidth:zt,rangeHeight:Wt,softness:Tt,distortion:Vr>0,scale:sn}),[an,xu,Gi,Z,up,bu,$v,ni,Gt,_l,js,Si,ts,sn,mt,Mt,We,xt,Ke,$t,yn,ne,De,Te,pe,zt,Wt,Tt,Vr>0,yu]),Qv=(0,fe.useMemo)(()=>({id:an,sensitivity:Math.max(0,T),threshold:Math.max(0,Math.min(.95,E)),attack:Math.max(0,C),release:Math.max(0,x),idle:Math.max(0,Math.min(1,yl)),breatheDuration:Math.max(.2,R),reach:Math.max(0,xl),spread:Math.max(0,tr),bands:z,flow:bl,lobeSpacing:Math.max(.1,At),bend:Math.max(0,er),bandStrength:Math.max(0,Sl),bandWidth:Math.max(0,Ml),bandPosition:Math.max(0,pu),bandCurve:Math.max(.3,mu),bandSpread:Math.max(.05,gu),bandSkew:Math.max(-.9,Math.min(.9,vu)),bandOffset:Tl,bandTail:Math.max(0,Math.min(1.5,S)),bandTailPosition:Math.max(0,Math.min(.98,U)),bandTailCurve:Math.max(.5,q),bandTailOverflow:Math.max(0,H),bandAberration:Math.max(0,Math.min(1,V)),rangeWidth:zt,rangeHeight:Wt,theme:ni,bandColors:{core:k?.core&&sp(k.core)||op[ni].core,above:k?.above&&sp(k.above)||op[ni].above,mid:k?.mid&&sp(k.mid)||op[ni].mid,below:k?.below&&sp(k.below)||op[ni].below},distortion:Math.max(0,Math.min(1,Vr)),coreLight:De,scale:sn,radius:xu,hueRange:Math.max(0,Zv),hueDuration:Math.max(.5,Jv),staticColors:Z==="mono"?!0:J,reducedMotion:ii,paused:ct,look:yu,dotSize:Math.max(.1,i),dotGap:Math.max(.3,a),dotShape:s==="square"?"square":"round",lineWidth:Math.max(.05,r),lineGap:Math.max(.3,o),linePattern:l==="columns"||l==="grid"?l:"rows",seeThrough:c,texture:Math.max(0,Math.min(1,f)),gravity:Math.max(.05,p),surfaceHeight:Math.max(.1,u),surfaceCurve:Math.max(-3,Math.min(5,d)),surfaceTail:Math.max(-2,Math.min(3,v)),surfaceTailPosition:Math.max(0,Math.min(.98,M)),surfaceTailCurve:Math.max(.5,g),surfaceFade:Math.max(0,Math.min(1,h)),layers:{glowWidth:mt,glowHeight:Mt,innerScale:xt,innerHeight:Ke,bloomScale:$t,bloomHeight:yn,strokeScale:We,softness:Tt,coreSize:ne,innerOpacity:Si,bloomOpacity:ts,strokeOpacity:js,brightness:bu}}),[an,T,E,C,x,yl,R,xl,tr,z,bl,At,er,Sl,Ml,pu,mu,gu,vu,Tl,S,U,q,H,V,zt,Wt,ni,du,Vr,De,sn,xu,Zv,Jv,J,Z,ii,ct,yu,i,a,s,r,o,l,c,f,p,u,d,v,M,g,h,mt,Mt,xt,Ke,$t,yn,We,Tt,ne,Si,ts,js,bu]),jv=(0,fe.useRef)(y);jv.current=y;let fp=(0,fe.useRef)(yt);fp.current=yt;let t_=(0,fe.useRef)(B);t_.current=B,(0,fe.useEffect)(()=>{if(!(Gn||me)||!ge)return;let qe=Vn.current;return qe?BU(qe,Qv,{stream:b,getLevel:()=>{let Ye=jv.current;return typeof Ye=="function"?Ye():Ye},getMotion:()=>{let Ye=t_.current;return typeof Ye=="function"?Ye():Ye}},Ye=>{var sa;return(sa=fp.current)==null?void 0:sa.call(fp,Ye)}):void 0},[Qv,b,Gn,me,ge]);let OT=(0,fe.useCallback)(qe=>{Vn.current=qe,typeof jt=="function"?jt(qe):jt&&(jt.current=qe)},[jt]),IT={...et??{},"--voice-strength":Math.max(0,Math.min(1,LT))};return(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("style",{children:ut?`${Kv}
${ut.split("{id}").join(an)}`:Kv}),(0,ke.jsxs)("div",{...Me,ref:OT,"data-voice-beam":an,"data-voice-type":t,"data-voice-look":yu,"data-voice-halfres":"","data-active":Gn&&!me?"":void 0,"data-fading":me?"":void 0,"data-paused":Gn&&!me&&(!ge||ct)?"":void 0,"data-listening":b?"":void 0,className:pt,style:IT,onAnimationEnd:UT,children:[e,DT,(0,ke.jsx)("div",{"data-voice-beam-bloom":!0}),Vr>0&&(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("div",{"data-voice-beam-warp":"inner"}),(0,ke.jsx)("div",{"data-voice-beam-warp":"bloom"})]}),!ZU&&(0,ke.jsx)("canvas",{"data-voice-beam-band-halo":!0,"aria-hidden":"true"}),(0,ke.jsx)("canvas",{"data-voice-beam-band":!0,"aria-hidden":"true"}),De>0&&(0,ke.jsx)("div",{"data-voice-beam-core":!0,children:(0,ke.jsx)("div",{})}),Vr>0&&(0,ke.jsx)("svg",{"aria-hidden":"true",width:"0",height:"0",style:{position:"absolute",pointerEvents:"none"},children:(0,ke.jsxs)("filter",{id:`vb-distort-${an}`,x:"-20%",y:"-20%",width:"140%",height:"140%",colorInterpolationFilters:"sRGB",children:[(0,ke.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:`${(.012*St).toFixed(4)} ${(.05*St).toFixed(4)}`,numOctaves:2,seed:7,result:"noise"}),(0,ke.jsx)("feOffset",{in:"noise",dx:"0",dy:"0",result:"moved"}),(0,ke.jsx)("feColorMatrix",{in:"moved",type:"matrix",values:"1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 0  0 0 0 0 1",result:"map"}),(0,ke.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:0,xChannelSelector:"R",yChannelSelector:"G"})]})})]})]})});var qv=hn(Hi(),1),ST=Object.freeze(["#5227FF","#B19EEF","#FF9FFC","#7C5CFF"]),MT=Object.freeze({colors:ST,glowIntensity:.95,halo:1.3}),QU=[0,1,2,3,0,2,1].map(e=>ST[e]);function jU(e){let t=Number.isFinite(e)?Math.max(0,Math.min(1,e)):0;return Math.min(.85,Math.max(0,t-.018)*.82)}function TT({phase:e,level:t,reducedMotion:n,flow:i=72}){let a=(0,bT.useRef)(0);return a.current=e==="speaking"||e==="listening"?jU(t):0,(0,qv.jsx)(xT,{className:"conversation-glow",type:"mobile",theme:"light",colors:QU,staticColors:!0,style:{"--voice-hue-base":"0deg"},saturation:1.1,brightness:1,level:()=>a.current,active:!0,paused:n,threshold:.015,attack:.045,release:.16,idle:.06,reach:4.2,spread:.65,bend:90,flow:i,bands:!0,bandStrength:0,innerOpacity:1.1,bloomOpacity:.9,children:(0,qv.jsx)("div",{className:"conversation-glow-surface"})})}var hu=hn(Hi(),1);function ET({phase:e,level:t,reduced:n,size:i=144,colors:a}){let[,s]=(0,Ks.useState)(0);(0,Ks.useEffect)(()=>{let c=1050-performance.now();if(c<=0)return;let f=setTimeout(()=>s(1),c);return()=>clearTimeout(f)},[]);let r=(0,Ks.useRef)(t),o=(0,Ks.useRef)(null);r.current=t,(0,Ks.useEffect)(()=>{o.current&&(o.current.style.transform=`scale(${e==="speaking"?1+Math.min(1,t)*.03:1})`)},[e,t]);let l={width:i,height:i};return(0,hu.jsx)("div",{className:"orb-breath",style:l,children:(0,hu.jsx)("div",{className:"orb-expression",ref:o,style:l,children:(0,hu.jsx)("div",{className:"brand-blob",style:l,"aria-hidden":"true",children:(0,hu.jsx)(Fv,{size:i,...MT,...a?{colors:a}:{},blend:"ink",state:["speaking","listening","thinking"].includes(e)?e:"idle",getVolume:()=>r.current,autoVolume:!1,intro:!1,interactive:!1,paused:n})})})})}var bB=hn(Da(),1),Qs=hn(Hi(),1);function AT({motion:e}){return(0,Qs.jsxs)("div",{className:"entrance-light","aria-hidden":"true",children:[(0,Qs.jsx)("div",{className:"light-edge-line"}),(0,Qs.jsx)("div",{className:"entrance-lobes",ref:e.lobes,children:[0,1,2,3,4].map(t=>(0,Qs.jsx)("i",{className:"light-lobe"},t))}),(0,Qs.jsx)("div",{className:"light-plume-position",children:(0,Qs.jsx)("div",{ref:e.plume,className:"light-plume"})})]})}var xi=hn(Hi(),1),tL={kind:location.hash.slice(1)||"blob",phase:"idle",level:0,reducedMotion:!1,active:!0,beat:"hidden",entranceID:0,blur:0,sweep:0,plumeTop:640,instant:!1,ascentMS:2600,permissionDenied:!1},eL=["#90A1B9","#90A1B9","#CAD5E2","#1D293D"],fu=tL,Yv=new Set;window.updateC1Aurora=e=>{fu={...fu,...e},Yv.forEach(t=>t(fu))};var nL="cubic-bezier(.16,1,.3,1)",wT="cubic-bezier(.77,0,.175,1)";function iL(){let[e,t]=(0,nn.useState)(fu);return(0,nn.useEffect)(()=>(Yv.add(t),t(fu),()=>Yv.delete(t)),[]),e}function aL(e){let[t,n]=(0,nn.useState)(e);return(0,nn.useEffect)(()=>{if(e){n(!0);return}let i=setTimeout(()=>n(!1),200);return()=>clearTimeout(i)},[e]),e||t}function sL(){let e=iL(),t=(0,nn.useRef)(null),n=(0,nn.useRef)(null),i=(0,nn.useRef)(null),a=(0,nn.useRef)(null),s=(0,nn.useRef)(null),r=e.active&&["settle","conversation","permission"].includes(e.beat)&&!e.permissionDenied,o=r&&e.phase==="thinking",l=r,c=aL(l),f=(0,nn.useRef)(.3);e.phase==="speaking"&&Number.isFinite(e.level)&&e.level>.08&&(f.current=e.level);let p=o?"speaking":e.phase,u=o?f.current:e.level,d=(0,nn.useRef)([]),v=(0,nn.useRef)({beat:"hidden",entranceID:0,sweep:0}),M=()=>{for(let b of d.current){if(b.effect?.target?.isConnected){let y=b.effect.target,T=getComputedStyle(y);for(let E of["opacity","transform","filter"])y.style[E]=T[E]}b.cancel()}d.current=[]},g=(b,y,T={})=>{if(!b)return;let E=b.animate(y,{fill:"forwards",easing:nL,...T});return d.current.push(E),E.finished.then(()=>{if(E.playState!=="finished"||!b.isConnected)return;let C=y.at(-1);for(let[x,w]of Object.entries(C))["offset","easing"].includes(x)||(b.style[x]=x==="filter"&&w==="blur(0px)"?"none":String(w));E.cancel()}).catch(()=>{}),E};if((0,nn.useEffect)(()=>{let b=5,y,T=()=>{if(performance.now()<1120||e.kind==="blob"&&!document.querySelector("canvas")||--b>0){y=requestAnimationFrame(T);return}window.webkit?.messageHandlers?.c1Visual?.postMessage({ready:e.kind})};return y=requestAnimationFrame(T),()=>cancelAnimationFrame(y)},[]),(0,nn.useLayoutEffect)(()=>{if(e.kind==="blob"){if(e.reducedMotion||e.instant||e.blur===0){t.current.style.filter="none";return}g(t.current,[{filter:getComputedStyle(t.current).filter},{filter:`blur(${e.blur}px)`}],{duration:e.blur?0:800})}},[e.blur,e.reducedMotion,e.instant]),(0,nn.useEffect)(()=>{e.kind!=="blob"||e.sweep===v.current.sweep||e.reducedMotion||(v.current.sweep=e.sweep,g(n.current,[{opacity:0,transform:"translate(-70%,-25%)"},{opacity:.18,transform:"translate(0,0)",offset:.5},{opacity:0,transform:"translate(70%,25%)"}],{duration:240,easing:wT}))},[e.sweep]),(0,nn.useLayoutEffect)(()=>{if(e.kind!=="light")return;let b=s.current.querySelector(".light-edge-line"),y=[...i.current.children];if(v.current.beat==="clock"&&e.beat!=="clock"&&(b.style.opacity="0",y.forEach(E=>E.style.opacity="0"),a.current.style.opacity="0"),e.beat!==v.current.beat||e.entranceID!==v.current.entranceID){if(["dim","settle","docked","hidden","conversation"].includes(e.beat)&&M(),v.current={...v.current,beat:e.beat,entranceID:e.entranceID},e.reducedMotion){for(let E of[b,...y,a.current])E.style.opacity="0";return}if(e.beat==="clock"){M(),b.style.opacity=".3",y.forEach(E=>Object.assign(E.style,{opacity:".65",transform:"none"})),a.current.style.opacity="0";return}if(e.instant){let E=["dim","rise","lift"].includes(e.beat);b.style.opacity=E?".3":"0",y.forEach(C=>Object.assign(C.style,{opacity:E?".65":"0",transform:"none"})),Object.assign(a.current.style,{opacity:E?".7":"0",transform:"scaleX(.75) scaleY(1)"});return}e.beat==="dim"?(g(b,[{opacity:0},{opacity:.3}],{duration:300}),y.forEach((E,C)=>g(E,[{opacity:0,transform:"translateY(60px) scaleY(.15)"},{opacity:.65,transform:"none"}],{duration:1300,delay:[2,1,0,1,2][C]*120}))):e.beat==="rise"?g(a.current,[{opacity:0,transform:"translateY(0) scaleX(1.15) scaleY(.2)"},{opacity:.7,transform:"translateY(0) scaleX(.75) scaleY(1)"}],{duration:e.ascentMS}):(e.beat==="settle"||e.beat==="docked"||e.beat==="hidden"||e.beat==="conversation")&&(g(b,[{opacity:getComputedStyle(b).opacity},{opacity:0}],{duration:200}),y.forEach(E=>g(E,[{opacity:getComputedStyle(E).opacity},{opacity:0}],{duration:220})),g(a.current,[{opacity:getComputedStyle(a.current).opacity,transform:getComputedStyle(a.current).transform},{opacity:0,transform:e.beat==="settle"?"translateY(60px) scaleX(.65) scaleY(.8)":"translateY(60px) scaleX(1.15) scaleY(.2)"}],{duration:240,easing:wT}))}},[e.beat,e.entranceID,e.reducedMotion]),e.kind==="blob")return(0,xi.jsxs)("div",{className:"aurora-material c1-blob-stage","data-motion":e.phase,"data-reduced":e.reducedMotion,"data-active":e.active,children:[(0,xi.jsx)("div",{className:"orb-glass",ref:t,children:(0,xi.jsx)(ET,{size:180,phase:e.permissionDenied?"idle":e.phase,level:e.permissionDenied?0:e.level,reduced:e.reducedMotion||!e.active,colors:e.permissionDenied?eL:void 0})}),(0,xi.jsx)("div",{className:"orb-specular-mask",children:(0,xi.jsx)("div",{className:"orb-specular-sweep",ref:n})})]});let h=document.documentElement.clientHeight||window.innerHeight||800,_=Math.min(1,Math.max(.02,(h-e.plumeTop)/h));return(0,xi.jsxs)("div",{ref:s,className:"aurora-material c1-light-stage","data-beat":e.beat,"data-instant":e.instant,"data-reduced":e.reducedMotion,"data-active":e.active,style:{"--c1-plume-scale":_,"--c1-ascent-ms":`${e.ascentMS}ms`},children:[(0,xi.jsx)("div",{className:"c1-live-light","data-visible":l,"data-state":e.phase,children:c&&(0,xi.jsx)(TT,{phase:p,level:u,flow:o?280:72,reducedMotion:e.reducedMotion||!l})}),(0,xi.jsx)("img",{className:"c1-permission-glow",src:"c1-permission-glow.svg",alt:"",style:{opacity:e.permissionDenied?1:0}}),(0,xi.jsx)(AT,{motion:{lobes:i,plume:a}})]})}(0,CT.createRoot)(document.getElementById("root")).render((0,xi.jsx)(sL,{}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
