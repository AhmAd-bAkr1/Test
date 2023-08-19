(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Xm={exports:{}},Hl={},jm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),ev=Symbol.for("react.portal"),tv=Symbol.for("react.fragment"),nv=Symbol.for("react.strict_mode"),iv=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),ov=Symbol.for("react.forward_ref"),av=Symbol.for("react.suspense"),lv=Symbol.for("react.memo"),uv=Symbol.for("react.lazy"),Gf=Symbol.iterator;function cv(n){return n===null||typeof n!="object"?null:(n=Gf&&n[Gf]||n["@@iterator"],typeof n=="function"?n:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Km={};function Ys(n,e,t){this.props=n,this.context=e,this.refs=Km,this.updater=t||Ym}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ys.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function $m(){}$m.prototype=Ys.prototype;function Rd(n,e,t){this.props=n,this.context=e,this.refs=Km,this.updater=t||Ym}var bd=Rd.prototype=new $m;bd.constructor=Rd;qm(bd,Ys.prototype);bd.isPureReactComponent=!0;var Vf=Array.isArray,Zm=Object.prototype.hasOwnProperty,Cd={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function Jm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zm.call(e,i)&&!Qm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ea,type:n,key:s,ref:o,props:r,_owner:Cd.current}}function dv(n,e){return{$$typeof:ea,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ld(n){return typeof n=="object"&&n!==null&&n.$$typeof===ea}function fv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Wf=/\/+/g;function du(n,e){return typeof n=="object"&&n!==null&&n.key!=null?fv(""+n.key):e.toString(36)}function Ja(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ea:case ev:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+du(o,0):i,Vf(r)?(t="",n!=null&&(t=n.replace(Wf,"$&/")+"/"),Ja(r,e,t,"",function(u){return u})):r!=null&&(Ld(r)&&(r=dv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Vf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+du(s,a);o+=Ja(s,e,t,l,r)}else if(l=cv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+du(s,a++),o+=Ja(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(n,e,t){if(n==null)return n;var i=[],r=0;return Ja(n,i,"","",function(s){return e.call(t,s,r++)}),i}function hv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var $t={current:null},el={transition:null},pv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:el,ReactCurrentOwner:Cd};Ge.Children={map:ca,forEach:function(n,e,t){ca(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ca(n,function(){e++}),e},toArray:function(n){return ca(n,function(e){return e})||[]},only:function(n){if(!Ld(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=Ys;Ge.Fragment=tv;Ge.Profiler=iv;Ge.PureComponent=Rd;Ge.StrictMode=nv;Ge.Suspense=av;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=qm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Zm.call(e,l)&&!Qm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ea,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:sv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:rv,_context:n},n.Consumer=n};Ge.createElement=Jm;Ge.createFactory=function(n){var e=Jm.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:ov,render:n}};Ge.isValidElement=Ld;Ge.lazy=function(n){return{$$typeof:uv,_payload:{_status:-1,_result:n},_init:hv}};Ge.memo=function(n,e){return{$$typeof:lv,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=el.transition;el.transition={};try{n()}finally{el.transition=e}};Ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ge.useCallback=function(n,e){return $t.current.useCallback(n,e)};Ge.useContext=function(n){return $t.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return $t.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return $t.current.useEffect(n,e)};Ge.useId=function(){return $t.current.useId()};Ge.useImperativeHandle=function(n,e,t){return $t.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return $t.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return $t.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return $t.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return $t.current.useReducer(n,e,t)};Ge.useRef=function(n){return $t.current.useRef(n)};Ge.useState=function(n){return $t.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return $t.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return $t.current.useTransition()};Ge.version="18.2.0";jm.exports=Ge;var eg=jm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=eg,gv=Symbol.for("react.element"),_v=Symbol.for("react.fragment"),vv=Object.prototype.hasOwnProperty,yv=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xv={key:!0,ref:!0,__self:!0,__source:!0};function tg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vv.call(e,i)&&!xv.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gv,type:n,key:s,ref:o,props:r,_owner:yv.current}}Hl.Fragment=_v;Hl.jsx=tg;Hl.jsxs=tg;Xm.exports=Hl;var _t=Xm.exports,Sc={},ng={exports:{}},hn={},ig={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,W){var H=D.length;D.push(W);e:for(;0<H;){var N=H-1>>>1,k=D[N];if(0<r(k,W))D[N]=W,D[H]=k,H=N;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],H=D.pop();if(H!==W){D[0]=H;e:for(var N=0,k=D.length,le=k>>>1;N<le;){var oe=2*(N+1)-1,pe=D[oe],_e=oe+1,Me=D[_e];if(0>r(pe,H))_e<k&&0>r(Me,pe)?(D[N]=Me,D[_e]=H,N=_e):(D[N]=pe,D[oe]=H,N=oe);else if(_e<k&&0>r(Me,H))D[N]=Me,D[_e]=H,N=_e;else break e}}return W}function r(D,W){var H=D.sortIndex-W.sortIndex;return H!==0?H:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var W=t(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=D)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(u)}}function x(D){if(y=!1,g(D),!_)if(t(l)!==null)_=!0,Q(E);else{var W=t(u);W!==null&&K(x,W.startTime-D)}}function E(D,W){_=!1,y&&(y=!1,h(I),I=-1),p=!0;var H=f;try{for(g(W),d=t(l);d!==null&&(!(d.expirationTime>W)||D&&!$());){var N=d.callback;if(typeof N=="function"){d.callback=null,f=d.priorityLevel;var k=N(d.expirationTime<=W);W=n.unstable_now(),typeof k=="function"?d.callback=k:d===t(l)&&i(l),g(W)}else i(l);d=t(l)}if(d!==null)var le=!0;else{var oe=t(u);oe!==null&&K(x,oe.startTime-W),le=!1}return le}finally{d=null,f=H,p=!1}}var R=!1,T=null,I=-1,M=5,w=-1;function $(){return!(n.unstable_now()-w<M)}function J(){if(T!==null){var D=n.unstable_now();w=D;var W=!0;try{W=T(!0,D)}finally{W?B():(R=!1,T=null)}}else R=!1}var B;if(typeof v=="function")B=function(){v(J)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,X=j.port2;j.port1.onmessage=J,B=function(){X.postMessage(null)}}else B=function(){m(J,0)};function Q(D){T=D,R||(R=!0,B())}function K(D,W){I=m(function(){D(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,Q(E))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var H=f;f=W;try{return D()}finally{f=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=f;f=D;try{return W()}finally{f=H}},n.unstable_scheduleCallback=function(D,W,H){var N=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?N+H:N):H=N,D){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=H+k,D={id:c++,callback:W,priorityLevel:D,startTime:H,expirationTime:k,sortIndex:-1},H>N?(D.sortIndex=H,e(u,D),t(l)===null&&D===t(u)&&(y?(h(I),I=-1):y=!0,K(x,H-N))):(D.sortIndex=k,e(l,D),_||p||(_=!0,Q(E))),D},n.unstable_shouldYield=$,n.unstable_wrapCallback=function(D){var W=f;return function(){var H=f;f=W;try{return D.apply(this,arguments)}finally{f=H}}}})(rg);ig.exports=rg;var Sv=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg=eg,fn=Sv;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var og=new Set,No={};function Or(n,e){Ls(n,e),Ls(n+"Capture",e)}function Ls(n,e){for(No[n]=e,n=0;n<e.length;n++)og.add(e[n])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=Object.prototype.hasOwnProperty,Mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xf={},jf={};function Ev(n){return Mc.call(jf,n)?!0:Mc.call(Xf,n)?!1:Mv.test(n)?jf[n]=!0:(Xf[n]=!0,!1)}function Tv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Av(n,e,t,i){if(e===null||typeof e>"u"||Tv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ot[n]=new Zt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ot[e]=new Zt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ot[n]=new Zt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ot[n]=new Zt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ot[n]=new Zt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ot[n]=new Zt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ot[n]=new Zt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ot[n]=new Zt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ot[n]=new Zt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function Id(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Pd,Id);Ot[e]=new Zt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Pd,Id);Ot[e]=new Zt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Pd,Id);Ot[e]=new Zt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ot[n]=new Zt(n,1,!1,n.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ot[n]=new Zt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Dd(n,e,t,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Av(e,t,r,i)&&(t=null),i||r===null?Ev(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ei=sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),ag=Symbol.for("react.provider"),lg=Symbol.for("react.context"),Ud=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),Ac=Symbol.for("react.suspense_list"),Od=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),Yf=Symbol.iterator;function eo(n){return n===null||typeof n!="object"?null:(n=Yf&&n[Yf]||n["@@iterator"],typeof n=="function"?n:null)}var ut=Object.assign,fu;function _o(n){if(fu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);fu=e&&e[1]||""}return`
`+fu+n}var hu=!1;function pu(n,e){if(!n||hu)return"";hu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{hu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?_o(n):""}function wv(n){switch(n.tag){case 5:return _o(n.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return n=pu(n.type,!1),n;case 11:return n=pu(n.type.render,!1),n;case 1:return n=pu(n.type,!0),n;default:return""}}function wc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case us:return"Fragment";case ls:return"Portal";case Ec:return"Profiler";case Nd:return"StrictMode";case Tc:return"Suspense";case Ac:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case lg:return(n.displayName||"Context")+".Consumer";case ag:return(n._context.displayName||"Context")+".Provider";case Ud:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Od:return e=n.displayName||null,e!==null?e:wc(n.type)||"Memo";case Di:e=n._payload,n=n._init;try{return wc(n(e))}catch{}}return null}function Rv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wc(e);case 8:return e===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function cg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bv(n){var e=cg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function fa(n){n._valueTracker||(n._valueTracker=bv(n))}function dg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=cg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function hl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rc(n,e){var t=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function qf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ji(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fg(n,e){e=e.checked,e!=null&&Dd(n,"checked",e,!1)}function bc(n,e){fg(n,e);var t=Ji(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Cc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Cc(n,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Kf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Cc(n,e,t){(e!=="number"||hl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var vo=Array.isArray;function Ss(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ji(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Lc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $f(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(vo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ji(t)}}function hg(n,e){var t=Ji(e.value),i=Ji(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Zf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function pg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?pg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ha,mg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Uo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cv=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(n){Cv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Mo[e]=Mo[n]})});function gg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Mo.hasOwnProperty(n)&&Mo[n]?(""+e).trim():e+"px"}function _g(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=gg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Lv=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ic(n,e){if(e){if(Lv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Dc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function Fd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Uc=null,Ms=null,Es=null;function Qf(n){if(n=ia(n)){if(typeof Uc!="function")throw Error(te(280));var e=n.stateNode;e&&(e=jl(e),Uc(n.stateNode,n.type,e))}}function vg(n){Ms?Es?Es.push(n):Es=[n]:Ms=n}function yg(){if(Ms){var n=Ms,e=Es;if(Es=Ms=null,Qf(n),e)for(n=0;n<e.length;n++)Qf(e[n])}}function xg(n,e){return n(e)}function Sg(){}var mu=!1;function Mg(n,e,t){if(mu)return n(e,t);mu=!0;try{return xg(n,e,t)}finally{mu=!1,(Ms!==null||Es!==null)&&(Sg(),yg())}}function Oo(n,e){var t=n.stateNode;if(t===null)return null;var i=jl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var Oc=!1;if(vi)try{var to={};Object.defineProperty(to,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Oc=!1}function Pv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Eo=!1,pl=null,ml=!1,Fc=null,Iv={onError:function(n){Eo=!0,pl=n}};function Dv(n,e,t,i,r,s,o,a,l){Eo=!1,pl=null,Pv.apply(Iv,arguments)}function Nv(n,e,t,i,r,s,o,a,l){if(Dv.apply(this,arguments),Eo){if(Eo){var u=pl;Eo=!1,pl=null}else throw Error(te(198));ml||(ml=!0,Fc=u)}}function Fr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Eg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Jf(n){if(Fr(n)!==n)throw Error(te(188))}function Uv(n){var e=n.alternate;if(!e){if(e=Fr(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Jf(r),n;if(s===i)return Jf(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function Tg(n){return n=Uv(n),n!==null?Ag(n):null}function Ag(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ag(n);if(e!==null)return e;n=n.sibling}return null}var wg=fn.unstable_scheduleCallback,eh=fn.unstable_cancelCallback,Ov=fn.unstable_shouldYield,Fv=fn.unstable_requestPaint,ht=fn.unstable_now,kv=fn.unstable_getCurrentPriorityLevel,kd=fn.unstable_ImmediatePriority,Rg=fn.unstable_UserBlockingPriority,gl=fn.unstable_NormalPriority,Bv=fn.unstable_LowPriority,bg=fn.unstable_IdlePriority,Gl=null,Kn=null;function zv(n){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Gl,n,void 0,(n.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:Vv,Hv=Math.log,Gv=Math.LN2;function Vv(n){return n>>>=0,n===0?32:31-(Hv(n)/Gv|0)|0}var pa=64,ma=4194304;function yo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _l(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=t&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-On(e),r=1<<t,i|=n[t],e&=~r;return i}function Wv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Wv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function kc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Cg(){var n=pa;return pa<<=1,!(pa&4194240)&&(pa=64),n}function gu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ta(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-On(e),n[e]=t}function jv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-On(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Bd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-On(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var $e=0;function Lg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Pg,zd,Ig,Dg,Ng,Bc=!1,ga=[],Gi=null,Vi=null,Wi=null,Fo=new Map,ko=new Map,Fi=[],Yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function th(n,e){switch(n){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function no(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ia(e),e!==null&&zd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function qv(n,e,t,i,r){switch(e){case"focusin":return Gi=no(Gi,n,e,t,i,r),!0;case"dragenter":return Vi=no(Vi,n,e,t,i,r),!0;case"mouseover":return Wi=no(Wi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,no(Fo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ko.set(s,no(ko.get(s)||null,n,e,t,i,r)),!0}return!1}function Ug(n){var e=gr(n.target);if(e!==null){var t=Fr(e);if(t!==null){if(e=t.tag,e===13){if(e=Eg(t),e!==null){n.blockedOn=e,Ng(n.priority,function(){Ig(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=zc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Nc=i,t.target.dispatchEvent(i),Nc=null}else return e=ia(t),e!==null&&zd(e),n.blockedOn=t,!1;e.shift()}return!0}function nh(n,e,t){tl(n)&&t.delete(e)}function Kv(){Bc=!1,Gi!==null&&tl(Gi)&&(Gi=null),Vi!==null&&tl(Vi)&&(Vi=null),Wi!==null&&tl(Wi)&&(Wi=null),Fo.forEach(nh),ko.forEach(nh)}function io(n,e){n.blockedOn===e&&(n.blockedOn=null,Bc||(Bc=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,Kv)))}function Bo(n){function e(r){return io(r,n)}if(0<ga.length){io(ga[0],n);for(var t=1;t<ga.length;t++){var i=ga[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Gi!==null&&io(Gi,n),Vi!==null&&io(Vi,n),Wi!==null&&io(Wi,n),Fo.forEach(e),ko.forEach(e),t=0;t<Fi.length;t++)i=Fi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Fi.length&&(t=Fi[0],t.blockedOn===null);)Ug(t),t.blockedOn===null&&Fi.shift()}var Ts=Ei.ReactCurrentBatchConfig,vl=!0;function $v(n,e,t,i){var r=$e,s=Ts.transition;Ts.transition=null;try{$e=1,Hd(n,e,t,i)}finally{$e=r,Ts.transition=s}}function Zv(n,e,t,i){var r=$e,s=Ts.transition;Ts.transition=null;try{$e=4,Hd(n,e,t,i)}finally{$e=r,Ts.transition=s}}function Hd(n,e,t,i){if(vl){var r=zc(n,e,t,i);if(r===null)wu(n,e,i,yl,t),th(n,i);else if(qv(r,n,e,t,i))i.stopPropagation();else if(th(n,i),e&4&&-1<Yv.indexOf(n)){for(;r!==null;){var s=ia(r);if(s!==null&&Pg(s),s=zc(n,e,t,i),s===null&&wu(n,e,i,yl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else wu(n,e,i,null,t)}}var yl=null;function zc(n,e,t,i){if(yl=null,n=Fd(i),n=gr(n),n!==null)if(e=Fr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Eg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return yl=n,null}function Og(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kv()){case kd:return 1;case Rg:return 4;case gl:case Bv:return 16;case bg:return 536870912;default:return 16}default:return 16}}var Bi=null,Gd=null,nl=null;function Fg(){if(nl)return nl;var n,e=Gd,t=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return nl=r.slice(n,1<i?1-i:void 0)}function il(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function _a(){return!0}function ih(){return!1}function pn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:ih,this.isPropagationStopped=ih,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=pn(qs),na=ut({},qs,{view:0,detail:0}),Qv=pn(na),_u,vu,ro,Vl=ut({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ro&&(ro&&n.type==="mousemove"?(_u=n.screenX-ro.screenX,vu=n.screenY-ro.screenY):vu=_u=0,ro=n),_u)},movementY:function(n){return"movementY"in n?n.movementY:vu}}),rh=pn(Vl),Jv=ut({},Vl,{dataTransfer:0}),ey=pn(Jv),ty=ut({},na,{relatedTarget:0}),yu=pn(ty),ny=ut({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=pn(ny),ry=ut({},qs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sy=pn(ry),oy=ut({},qs,{data:0}),sh=pn(oy),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=uy[n])?!!e[n]:!1}function Wd(){return cy}var dy=ut({},na,{key:function(n){if(n.key){var e=ay[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ly[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fy=pn(dy),hy=ut({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=pn(hy),py=ut({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),my=pn(py),gy=ut({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=pn(gy),vy=ut({},Vl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=pn(vy),xy=[9,13,27,32],Xd=vi&&"CompositionEvent"in window,To=null;vi&&"documentMode"in document&&(To=document.documentMode);var Sy=vi&&"TextEvent"in window&&!To,kg=vi&&(!Xd||To&&8<To&&11>=To),ah=String.fromCharCode(32),lh=!1;function Bg(n,e){switch(n){case"keyup":return xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function My(n,e){switch(n){case"compositionend":return zg(e);case"keypress":return e.which!==32?null:(lh=!0,ah);case"textInput":return n=e.data,n===ah&&lh?null:n;default:return null}}function Ey(n,e){if(cs)return n==="compositionend"||!Xd&&Bg(n,e)?(n=Fg(),nl=Gd=Bi=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kg&&e.locale!=="ko"?null:e.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ty[n.type]:e==="textarea"}function Hg(n,e,t,i){vg(i),e=xl(e,"onChange"),0<e.length&&(t=new Vd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ao=null,zo=null;function Ay(n){Qg(n,0)}function Wl(n){var e=hs(n);if(dg(e))return n}function wy(n,e){if(n==="change")return e}var Gg=!1;if(vi){var xu;if(vi){var Su="oninput"in document;if(!Su){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Su=typeof ch.oninput=="function"}xu=Su}else xu=!1;Gg=xu&&(!document.documentMode||9<document.documentMode)}function dh(){Ao&&(Ao.detachEvent("onpropertychange",Vg),zo=Ao=null)}function Vg(n){if(n.propertyName==="value"&&Wl(zo)){var e=[];Hg(e,zo,n,Fd(n)),Mg(Ay,e)}}function Ry(n,e,t){n==="focusin"?(dh(),Ao=e,zo=t,Ao.attachEvent("onpropertychange",Vg)):n==="focusout"&&dh()}function by(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wl(zo)}function Cy(n,e){if(n==="click")return Wl(e)}function Ly(n,e){if(n==="input"||n==="change")return Wl(e)}function Py(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Py;function Ho(n,e){if(Bn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Mc.call(e,r)||!Bn(n[r],e[r]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,e){var t=fh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fh(t)}}function Wg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Wg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Xg(){for(var n=window,e=hl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=hl(n.document)}return e}function jd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Iy(n){var e=Xg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Wg(t.ownerDocument.documentElement,t)){if(i!==null&&jd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=hh(t,s);var o=hh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dy=vi&&"documentMode"in document&&11>=document.documentMode,ds=null,Hc=null,wo=null,Gc=!1;function ph(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gc||ds==null||ds!==hl(i)||(i=ds,"selectionStart"in i&&jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wo&&Ho(wo,i)||(wo=i,i=xl(Hc,"onSelect"),0<i.length&&(e=new Vd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ds)))}function va(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var fs={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Mu={},jg={};vi&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Xl(n){if(Mu[n])return Mu[n];if(!fs[n])return n;var e=fs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in jg)return Mu[n]=e[t];return n}var Yg=Xl("animationend"),qg=Xl("animationiteration"),Kg=Xl("animationstart"),$g=Xl("transitionend"),Zg=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,e){Zg.set(n,e),Or(e,[n])}for(var Eu=0;Eu<mh.length;Eu++){var Tu=mh[Eu],Ny=Tu.toLowerCase(),Uy=Tu[0].toUpperCase()+Tu.slice(1);tr(Ny,"on"+Uy)}tr(Yg,"onAnimationEnd");tr(qg,"onAnimationIteration");tr(Kg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr($g,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function gh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Nv(i,e,void 0,n),n.currentTarget=null}function Qg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gh(r,a,u),s=l}}}if(ml)throw n=Fc,ml=!1,Fc=null,n}function it(n,e){var t=e[Yc];t===void 0&&(t=e[Yc]=new Set);var i=n+"__bubble";t.has(i)||(Jg(e,n,2,!1),t.add(i))}function Au(n,e,t){var i=0;e&&(i|=4),Jg(t,n,i,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[ya]){n[ya]=!0,og.forEach(function(t){t!=="selectionchange"&&(Oy.has(t)||Au(t,!1,n),Au(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ya]||(e[ya]=!0,Au("selectionchange",!1,e))}}function Jg(n,e,t,i){switch(Og(e)){case 1:var r=$v;break;case 4:r=Zv;break;default:r=Hd}t=r.bind(null,e,t,n),r=void 0,!Oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function wu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Mg(function(){var u=s,c=Fd(t),d=[];e:{var f=Zg.get(n);if(f!==void 0){var p=Vd,_=n;switch(n){case"keypress":if(il(t)===0)break e;case"keydown":case"keyup":p=fy;break;case"focusin":_="focus",p=yu;break;case"focusout":_="blur",p=yu;break;case"beforeblur":case"afterblur":p=yu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=my;break;case Yg:case qg:case Kg:p=iy;break;case $g:p=_y;break;case"scroll":p=Qv;break;case"wheel":p=yy;break;case"copy":case"cut":case"paste":p=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=oh}var y=(e&4)!==0,m=!y&&n==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=u,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=Oo(v,h),x!=null&&y.push(Vo(v,x,g)))),m)break;v=v.return}0<y.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Nc&&(_=t.relatedTarget||t.fromElement)&&(gr(_)||_[yi]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?gr(_):null,_!==null&&(m=Fr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=rh,x="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=oh,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:hs(p),g=_==null?f:hs(_),f=new y(x,v+"leave",p,t,c),f.target=m,f.relatedTarget=g,x=null,gr(c)===u&&(y=new y(h,v+"enter",_,t,c),y.target=g,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,h=_,v=0,g=y;g;g=zr(g))v++;for(g=0,x=h;x;x=zr(x))g++;for(;0<v-g;)y=zr(y),v--;for(;0<g-v;)h=zr(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=zr(y),h=zr(h)}y=null}else y=null;p!==null&&_h(d,f,p,y,!1),_!==null&&m!==null&&_h(d,m,_,y,!0)}}e:{if(f=u?hs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=wy;else if(uh(f))if(Gg)E=Ly;else{E=by;var R=Ry}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Cy);if(E&&(E=E(n,u))){Hg(d,E,t,c);break e}R&&R(n,f,u),n==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Cc(f,"number",f.value)}switch(R=u?hs(u):window,n){case"focusin":(uh(R)||R.contentEditable==="true")&&(ds=R,Hc=u,wo=null);break;case"focusout":wo=Hc=ds=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,ph(d,t,c);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":ph(d,t,c)}var T;if(Xd)e:{switch(n){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else cs?Bg(n,t)&&(I="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(kg&&t.locale!=="ko"&&(cs||I!=="onCompositionStart"?I==="onCompositionEnd"&&cs&&(T=Fg()):(Bi=c,Gd="value"in Bi?Bi.value:Bi.textContent,cs=!0)),R=xl(u,I),0<R.length&&(I=new sh(I,n,null,t,c),d.push({event:I,listeners:R}),T?I.data=T:(T=zg(t),T!==null&&(I.data=T)))),(T=Sy?My(n,t):Ey(n,t))&&(u=xl(u,"onBeforeInput"),0<u.length&&(c=new sh("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=T))}Qg(d,e)})}function Vo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function xl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(n,t),s!=null&&i.unshift(Vo(n,s,r)),s=Oo(n,e),s!=null&&i.push(Vo(n,s,r))),n=n.return}return i}function zr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _h(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Oo(t,s),l!=null&&o.unshift(Vo(t,l,a))):r||(l=Oo(t,s),l!=null&&o.push(Vo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Fy=/\r\n?/g,ky=/\u0000|\uFFFD/g;function vh(n){return(typeof n=="string"?n:""+n).replace(Fy,`
`).replace(ky,"")}function xa(n,e,t){if(e=vh(e),vh(n)!==e&&t)throw Error(te(425))}function Sl(){}var Vc=null,Wc=null;function Xc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,By=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(n){return yh.resolve(null).then(n).catch(Hy)}:jc;function Hy(n){setTimeout(function(){throw n})}function Ru(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Bo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Bo(e)}function Xi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function xh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ks,Wo="__reactProps$"+Ks,yi="__reactContainer$"+Ks,Yc="__reactEvents$"+Ks,Gy="__reactListeners$"+Ks,Vy="__reactHandles$"+Ks;function gr(n){var e=n[jn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[yi]||t[jn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=xh(n);n!==null;){if(t=n[jn])return t;n=xh(n)}return e}n=t,t=n.parentNode}return null}function ia(n){return n=n[jn]||n[yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function jl(n){return n[Wo]||null}var qc=[],ps=-1;function nr(n){return{current:n}}function rt(n){0>ps||(n.current=qc[ps],qc[ps]=null,ps--)}function Je(n,e){ps++,qc[ps]=n.current,n.current=e}var er={},Gt=nr(er),tn=nr(!1),Rr=er;function Ps(n,e){var t=n.type.contextTypes;if(!t)return er;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function nn(n){return n=n.childContextTypes,n!=null}function Ml(){rt(tn),rt(Gt)}function Sh(n,e,t){if(Gt.current!==er)throw Error(te(168));Je(Gt,e),Je(tn,t)}function e_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Rv(n)||"Unknown",r));return ut({},t,i)}function El(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||er,Rr=Gt.current,Je(Gt,n),Je(tn,tn.current),!0}function Mh(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=e_(n,e,Rr),i.__reactInternalMemoizedMergedChildContext=n,rt(tn),rt(Gt),Je(Gt,n)):rt(tn),Je(tn,t)}var di=null,Yl=!1,bu=!1;function t_(n){di===null?di=[n]:di.push(n)}function Wy(n){Yl=!0,t_(n)}function ir(){if(!bu&&di!==null){bu=!0;var n=0,e=$e;try{var t=di;for($e=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}di=null,Yl=!1}catch(r){throw di!==null&&(di=di.slice(n+1)),wg(kd,ir),r}finally{$e=e,bu=!1}}return null}var ms=[],gs=0,Tl=null,Al=0,vn=[],yn=0,br=null,fi=1,hi="";function fr(n,e){ms[gs++]=Al,ms[gs++]=Tl,Tl=n,Al=e}function n_(n,e,t){vn[yn++]=fi,vn[yn++]=hi,vn[yn++]=br,br=n;var i=fi;n=hi;var r=32-On(i)-1;i&=~(1<<r),t+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-On(e)+r|t<<r|i,hi=s+n}else fi=1<<s|t<<r|i,hi=n}function Yd(n){n.return!==null&&(fr(n,1),n_(n,1,0))}function qd(n){for(;n===Tl;)Tl=ms[--gs],ms[gs]=null,Al=ms[--gs],ms[gs]=null;for(;n===br;)br=vn[--yn],vn[yn]=null,hi=vn[--yn],vn[yn]=null,fi=vn[--yn],vn[yn]=null}var dn=null,cn=null,st=!1,Nn=null;function i_(n,e){var t=Mn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Eh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,dn=n,cn=Xi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,dn=n,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=br!==null?{id:fi,overflow:hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Mn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,dn=n,cn=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(st){var e=cn;if(e){var t=e;if(!Eh(n,e)){if(Kc(n))throw Error(te(418));e=Xi(t.nextSibling);var i=dn;e&&Eh(n,e)?i_(i,t):(n.flags=n.flags&-4097|2,st=!1,dn=n)}}else{if(Kc(n))throw Error(te(418));n.flags=n.flags&-4097|2,st=!1,dn=n}}}function Th(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dn=n}function Sa(n){if(n!==dn)return!1;if(!st)return Th(n),st=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Xc(n.type,n.memoizedProps)),e&&(e=cn)){if(Kc(n))throw r_(),Error(te(418));for(;e;)i_(n,e),e=Xi(e.nextSibling)}if(Th(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){cn=Xi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}cn=null}}else cn=dn?Xi(n.stateNode.nextSibling):null;return!0}function r_(){for(var n=cn;n;)n=Xi(n.nextSibling)}function Is(){cn=dn=null,st=!1}function Kd(n){Nn===null?Nn=[n]:Nn.push(n)}var Xy=Ei.ReactCurrentBatchConfig;function In(n,e){if(n&&n.defaultProps){e=ut({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var wl=nr(null),Rl=null,_s=null,$d=null;function Zd(){$d=_s=Rl=null}function Qd(n){var e=wl.current;rt(wl),n._currentValue=e}function Zc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function As(n,e){Rl=n,$d=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(en=!0),n.firstContext=null)}function An(n){var e=n._currentValue;if($d!==n)if(n={context:n,memoizedValue:e,next:null},_s===null){if(Rl===null)throw Error(te(308));_s=n,Rl.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return e}var _r=null;function Jd(n){_r===null?_r=[n]:_r.push(n)}function s_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Jd(e)):(t.next=r.next,r.next=t),e.interleaved=t,xi(n,i)}function xi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ni=!1;function ef(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(n,t)}return r=i.interleaved,r===null?(e.next=e,Jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(n,t)}function rl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bd(n,t)}}function Ah(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function bl(n,e,t,i){var r=n.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,y=a;switch(f=e,p=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=ut({},d,f);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=o,n.lanes=o,n.memoizedState=d}}function wh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var a_=new sg.Component().refs;function Qc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:ut({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ql={isMounted:function(n){return(n=n._reactInternals)?Fr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Kt(),r=qi(n),s=gi(i,r);s.payload=e,t!=null&&(s.callback=t),e=ji(n,s,r),e!==null&&(Fn(e,n,r,i),rl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Kt(),r=qi(n),s=gi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ji(n,s,r),e!==null&&(Fn(e,n,r,i),rl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Kt(),i=qi(n),r=gi(t,i);r.tag=2,e!=null&&(r.callback=e),e=ji(n,r,i),e!==null&&(Fn(e,n,i,t),rl(e,n,i))}};function Rh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(t,i)||!Ho(r,s):!0}function l_(n,e,t){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=nn(e)?Rr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ps(n,r):er),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function bh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ql.enqueueReplaceState(e,e.state,null)}function Jc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=a_,ef(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=nn(e)?Rr:Gt.current,r.context=Ps(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ql.enqueueReplaceState(r,r.state,null),bl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===a_&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Ma(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ch(n){var e=n._init;return e(n._payload)}function u_(n){function e(h,v){if(n){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ki(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,n?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,x){return v===null||v.tag!==6?(v=Uu(g,h.mode,x),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,x){var E=g.type;return E===us?c(h,v,g.props.children,x,g.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Di&&Ch(E)===v.type)?(x=r(v,g.props),x.ref=so(h,v,g),x.return=h,x):(x=cl(g.type,g.key,g.props,null,h.mode,x),x.ref=so(h,v,g),x.return=h,x)}function u(h,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Ou(g,h.mode,x),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function c(h,v,g,x,E){return v===null||v.tag!==7?(v=Mr(g,h.mode,x,E),v.return=h,v):(v=r(v,g),v.return=h,v)}function d(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Uu(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case da:return g=cl(v.type,v.key,v.props,null,h.mode,g),g.ref=so(h,null,v),g.return=h,g;case ls:return v=Ou(v,h.mode,g),v.return=h,v;case Di:var x=v._init;return d(h,x(v._payload),g)}if(vo(v)||eo(v))return v=Mr(v,h.mode,g,null),v.return=h,v;Ma(h,v)}return null}function f(h,v,g,x){var E=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(h,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case da:return g.key===E?l(h,v,g,x):null;case ls:return g.key===E?u(h,v,g,x):null;case Di:return E=g._init,f(h,v,E(g._payload),x)}if(vo(g)||eo(g))return E!==null?null:c(h,v,g,x,null);Ma(h,g)}return null}function p(h,v,g,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,a(v,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case da:return h=h.get(x.key===null?g:x.key)||null,l(v,h,x,E);case ls:return h=h.get(x.key===null?g:x.key)||null,u(v,h,x,E);case Di:var R=x._init;return p(h,v,g,R(x._payload),E)}if(vo(x)||eo(x))return h=h.get(g)||null,c(v,h,x,E,null);Ma(v,x)}return null}function _(h,v,g,x){for(var E=null,R=null,T=v,I=v=0,M=null;T!==null&&I<g.length;I++){T.index>I?(M=T,T=null):M=T.sibling;var w=f(h,T,g[I],x);if(w===null){T===null&&(T=M);break}n&&T&&w.alternate===null&&e(h,T),v=s(w,v,I),R===null?E=w:R.sibling=w,R=w,T=M}if(I===g.length)return t(h,T),st&&fr(h,I),E;if(T===null){for(;I<g.length;I++)T=d(h,g[I],x),T!==null&&(v=s(T,v,I),R===null?E=T:R.sibling=T,R=T);return st&&fr(h,I),E}for(T=i(h,T);I<g.length;I++)M=p(T,h,I,g[I],x),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?I:M.key),v=s(M,v,I),R===null?E=M:R.sibling=M,R=M);return n&&T.forEach(function($){return e(h,$)}),st&&fr(h,I),E}function y(h,v,g,x){var E=eo(g);if(typeof E!="function")throw Error(te(150));if(g=E.call(g),g==null)throw Error(te(151));for(var R=E=null,T=v,I=v=0,M=null,w=g.next();T!==null&&!w.done;I++,w=g.next()){T.index>I?(M=T,T=null):M=T.sibling;var $=f(h,T,w.value,x);if($===null){T===null&&(T=M);break}n&&T&&$.alternate===null&&e(h,T),v=s($,v,I),R===null?E=$:R.sibling=$,R=$,T=M}if(w.done)return t(h,T),st&&fr(h,I),E;if(T===null){for(;!w.done;I++,w=g.next())w=d(h,w.value,x),w!==null&&(v=s(w,v,I),R===null?E=w:R.sibling=w,R=w);return st&&fr(h,I),E}for(T=i(h,T);!w.done;I++,w=g.next())w=p(T,h,I,w.value,x),w!==null&&(n&&w.alternate!==null&&T.delete(w.key===null?I:w.key),v=s(w,v,I),R===null?E=w:R.sibling=w,R=w);return n&&T.forEach(function(J){return e(h,J)}),st&&fr(h,I),E}function m(h,v,g,x){if(typeof g=="object"&&g!==null&&g.type===us&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case da:e:{for(var E=g.key,R=v;R!==null;){if(R.key===E){if(E=g.type,E===us){if(R.tag===7){t(h,R.sibling),v=r(R,g.props.children),v.return=h,h=v;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Di&&Ch(E)===R.type){t(h,R.sibling),v=r(R,g.props),v.ref=so(h,R,g),v.return=h,h=v;break e}t(h,R);break}else e(h,R);R=R.sibling}g.type===us?(v=Mr(g.props.children,h.mode,x,g.key),v.return=h,h=v):(x=cl(g.type,g.key,g.props,null,h.mode,x),x.ref=so(h,v,g),x.return=h,h=x)}return o(h);case ls:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=Ou(g,h.mode,x),v.return=h,h=v}return o(h);case Di:return R=g._init,m(h,v,R(g._payload),x)}if(vo(g))return _(h,v,g,x);if(eo(g))return y(h,v,g,x);Ma(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,g),v.return=h,h=v):(t(h,v),v=Uu(g,h.mode,x),v.return=h,h=v),o(h)):t(h,v)}return m}var Ds=u_(!0),c_=u_(!1),ra={},$n=nr(ra),Xo=nr(ra),jo=nr(ra);function vr(n){if(n===ra)throw Error(te(174));return n}function tf(n,e){switch(Je(jo,e),Je(Xo,n),Je($n,ra),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Pc(e,n)}rt($n),Je($n,e)}function Ns(){rt($n),rt(Xo),rt(jo)}function d_(n){vr(jo.current);var e=vr($n.current),t=Pc(e,n.type);e!==t&&(Je(Xo,n),Je($n,t))}function nf(n){Xo.current===n&&(rt($n),rt(Xo))}var ot=nr(0);function Cl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cu=[];function rf(){for(var n=0;n<Cu.length;n++)Cu[n]._workInProgressVersionPrimary=null;Cu.length=0}var sl=Ei.ReactCurrentDispatcher,Lu=Ei.ReactCurrentBatchConfig,Cr=0,at=null,St=null,Rt=null,Ll=!1,Ro=!1,Yo=0,jy=0;function Ft(){throw Error(te(321))}function sf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Bn(n[t],e[t]))return!1;return!0}function of(n,e,t,i,r,s){if(Cr=s,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=n===null||n.memoizedState===null?$y:Zy,n=t(i,r),Ro){s=0;do{if(Ro=!1,Yo=0,25<=s)throw Error(te(301));s+=1,Rt=St=null,e.updateQueue=null,sl.current=Qy,n=t(i,r)}while(Ro)}if(sl.current=Pl,e=St!==null&&St.next!==null,Cr=0,Rt=St=at=null,Ll=!1,e)throw Error(te(300));return n}function af(){var n=Yo!==0;return Yo=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?at.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function wn(){if(St===null){var n=at.alternate;n=n!==null?n.memoizedState:null}else n=St.next;var e=Rt===null?at.memoizedState:Rt.next;if(e!==null)Rt=e,St=n;else{if(n===null)throw Error(te(310));St=n,n={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Rt===null?at.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}function qo(n,e){return typeof e=="function"?e(n):e}function Pu(n){var e=wn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=St,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Cr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,at.lanes|=c,Lr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Bn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,at.lanes|=s,Lr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Iu(n){var e=wn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Bn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function f_(){}function h_(n,e){var t=at,i=wn(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,lf(g_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(t.flags|=2048,Ko(9,m_.bind(null,t,i,r,e),void 0,null),Ct===null)throw Error(te(349));Cr&30||p_(t,e,r)}return r}function p_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function m_(n,e,t,i){e.value=t,e.getSnapshot=i,__(e)&&v_(n)}function g_(n,e,t){return t(function(){__(e)&&v_(n)})}function __(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Bn(n,t)}catch{return!0}}function v_(n){var e=xi(n,1);e!==null&&Fn(e,n,1,-1)}function Lh(n){var e=Wn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},e.queue=n,n=n.dispatch=Ky.bind(null,at,n),[e.memoizedState,n]}function Ko(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function y_(){return wn().memoizedState}function ol(n,e,t,i){var r=Wn();at.flags|=n,r.memoizedState=Ko(1|e,t,void 0,i===void 0?null:i)}function Kl(n,e,t,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&sf(i,o.deps)){r.memoizedState=Ko(e,t,s,i);return}}at.flags|=n,r.memoizedState=Ko(1|e,t,s,i)}function Ph(n,e){return ol(8390656,8,n,e)}function lf(n,e){return Kl(2048,8,n,e)}function x_(n,e){return Kl(4,2,n,e)}function S_(n,e){return Kl(4,4,n,e)}function M_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function E_(n,e,t){return t=t!=null?t.concat([n]):null,Kl(4,4,M_.bind(null,e,n),t)}function uf(){}function T_(n,e){var t=wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function A_(n,e){var t=wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function w_(n,e,t){return Cr&21?(Bn(t,e)||(t=Cg(),at.lanes|=t,Lr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,en=!0),n.memoizedState=t)}function Yy(n,e){var t=$e;$e=t!==0&&4>t?t:4,n(!0);var i=Lu.transition;Lu.transition={};try{n(!1),e()}finally{$e=t,Lu.transition=i}}function R_(){return wn().memoizedState}function qy(n,e,t){var i=qi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},b_(n))C_(e,t);else if(t=s_(n,e,t,i),t!==null){var r=Kt();Fn(t,n,i,r),L_(t,e,i)}}function Ky(n,e,t){var i=qi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(b_(n))C_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(r.next=r,Jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=s_(n,e,r,i),t!==null&&(r=Kt(),Fn(t,n,i,r),L_(t,e,i))}}function b_(n){var e=n.alternate;return n===at||e!==null&&e===at}function C_(n,e){Ro=Ll=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function L_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bd(n,t)}}var Pl={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},$y={readContext:An,useCallback:function(n,e){return Wn().memoizedState=[n,e===void 0?null:e],n},useContext:An,useEffect:Ph,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ol(4194308,4,M_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ol(4194308,4,n,e)},useInsertionEffect:function(n,e){return ol(4,2,n,e)},useMemo:function(n,e){var t=Wn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Wn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=qy.bind(null,at,n),[i.memoizedState,n]},useRef:function(n){var e=Wn();return n={current:n},e.memoizedState=n},useState:Lh,useDebugValue:uf,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=Lh(!1),e=n[0];return n=Yy.bind(null,n[1]),Wn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=at,r=Wn();if(st){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Ct===null)throw Error(te(349));Cr&30||p_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ph(g_.bind(null,i,s,n),[n]),i.flags|=2048,Ko(9,m_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Wn(),e=Ct.identifierPrefix;if(st){var t=hi,i=fi;t=(i&~(1<<32-On(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Yo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Zy={readContext:An,useCallback:T_,useContext:An,useEffect:lf,useImperativeHandle:E_,useInsertionEffect:x_,useLayoutEffect:S_,useMemo:A_,useReducer:Pu,useRef:y_,useState:function(){return Pu(qo)},useDebugValue:uf,useDeferredValue:function(n){var e=wn();return w_(e,St.memoizedState,n)},useTransition:function(){var n=Pu(qo)[0],e=wn().memoizedState;return[n,e]},useMutableSource:f_,useSyncExternalStore:h_,useId:R_,unstable_isNewReconciler:!1},Qy={readContext:An,useCallback:T_,useContext:An,useEffect:lf,useImperativeHandle:E_,useInsertionEffect:x_,useLayoutEffect:S_,useMemo:A_,useReducer:Iu,useRef:y_,useState:function(){return Iu(qo)},useDebugValue:uf,useDeferredValue:function(n){var e=wn();return St===null?e.memoizedState=n:w_(e,St.memoizedState,n)},useTransition:function(){var n=Iu(qo)[0],e=wn().memoizedState;return[n,e]},useMutableSource:f_,useSyncExternalStore:h_,useId:R_,unstable_isNewReconciler:!1};function Us(n,e){try{var t="",i=e;do t+=wv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Du(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ed(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Jy=typeof WeakMap=="function"?WeakMap:Map;function P_(n,e,t){t=gi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Dl||(Dl=!0,cd=i),ed(n,e)},t}function I_(n,e,t){t=gi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ed(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ed(n,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Ih(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=hx.bind(null,n,e,t),e.then(n,n))}function Dh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Nh(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=gi(-1,1),e.tag=2,ji(t,e,1))),t.lanes|=1),n)}var ex=Ei.ReactCurrentOwner,en=!1;function Yt(n,e,t,i){e.child=n===null?c_(e,null,t,i):Ds(e,n.child,t,i)}function Uh(n,e,t,i,r){t=t.render;var s=e.ref;return As(e,r),i=of(n,e,t,i,s,r),t=af(),n!==null&&!en?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Si(n,e,r)):(st&&t&&Yd(e),e.flags|=1,Yt(n,e,i,r),e.child)}function Oh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,D_(n,e,s,i,r)):(n=cl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ho,t(o,i)&&n.ref===e.ref)return Si(n,e,r)}return e.flags|=1,n=Ki(s,i),n.ref=e.ref,n.return=e,e.child=n}function D_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ho(s,i)&&n.ref===e.ref)if(en=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(en=!0);else return e.lanes=n.lanes,Si(n,e,r)}return td(n,e,t,i,r)}function N_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(ys,un),un|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Je(ys,un),un|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Je(ys,un),un|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Je(ys,un),un|=i;return Yt(n,e,r,t),e.child}function U_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function td(n,e,t,i,r){var s=nn(t)?Rr:Gt.current;return s=Ps(e,s),As(e,r),t=of(n,e,t,i,s,r),i=af(),n!==null&&!en?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Si(n,e,r)):(st&&i&&Yd(e),e.flags|=1,Yt(n,e,t,r),e.child)}function Fh(n,e,t,i,r){if(nn(t)){var s=!0;El(e)}else s=!1;if(As(e,r),e.stateNode===null)al(n,e),l_(e,t,i),Jc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=An(u):(u=nn(t)?Rr:Gt.current,u=Ps(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&bh(e,o,i,u),Ni=!1;var f=e.memoizedState;o.state=f,bl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||tn.current||Ni?(typeof c=="function"&&(Qc(e,t,c,i),l=e.memoizedState),(a=Ni||Rh(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,o_(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:In(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=An(l):(l=nn(t)?Rr:Gt.current,l=Ps(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&bh(e,o,i,l),Ni=!1,f=e.memoizedState,o.state=f,bl(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||tn.current||Ni?(typeof p=="function"&&(Qc(e,t,p,i),_=e.memoizedState),(u=Ni||Rh(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return nd(n,e,t,i,s,r)}function nd(n,e,t,i,r,s){U_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mh(e,t,!1),Si(n,e,s);i=e.stateNode,ex.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ds(e,n.child,null,s),e.child=Ds(e,null,a,s)):Yt(n,e,a,s),e.memoizedState=i.state,r&&Mh(e,t,!0),e.child}function O_(n){var e=n.stateNode;e.pendingContext?Sh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Sh(n,e.context,!1),tf(n,e.containerInfo)}function kh(n,e,t,i,r){return Is(),Kd(r),e.flags|=256,Yt(n,e,t,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(n){return{baseLanes:n,cachePool:null,transitions:null}}function F_(n,e,t){var i=e.pendingProps,r=ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Je(ot,r&1),n===null)return $c(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ql(o,i,0,null),n=Mr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=rd(t),e.memoizedState=id,n):cf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=Mr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?rd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=id,i}return s=n.child,n=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function cf(n,e){return e=Ql({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ea(n,e,t,i){return i!==null&&Kd(i),Ds(e,n.child,null,t),n=cf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function tx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Du(Error(te(422))),Ea(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ds(e,n.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=id,s);if(!(e.mode&1))return Ea(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Du(s,i,void 0),Ea(n,e,o,i)}if(a=(o&n.childLanes)!==0,en||a){if(i=Ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(n,r),Fn(i,n,r,-1))}return gf(),i=Du(Error(te(421))),Ea(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=px.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,cn=Xi(r.nextSibling),dn=e,st=!0,Nn=null,n!==null&&(vn[yn++]=fi,vn[yn++]=hi,vn[yn++]=br,fi=n.id,hi=n.overflow,br=e),e=cf(e,i.children),e.flags|=4096,e)}function Bh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Zc(n.return,e,t)}function Nu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function k_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(n,e,i.children,t),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bh(n,t,e);else if(n.tag===19)Bh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Je(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Cl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Nu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Cl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Nu(e,!0,t,null,s);break;case"together":Nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Si(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Lr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=Ki(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ki(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function nx(n,e,t){switch(e.tag){case 3:O_(e),Is();break;case 5:d_(e);break;case 1:nn(e.type)&&El(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(ot,ot.current&1),e.flags|=128,null):t&e.child.childLanes?F_(n,e,t):(Je(ot,ot.current&1),n=Si(n,e,t),n!==null?n.sibling:null);Je(ot,ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return k_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,N_(n,e,t)}return Si(n,e,t)}var B_,sd,z_,H_;B_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};sd=function(){};z_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,vr($n.current);var s=null;switch(t){case"input":r=Rc(n,r),i=Rc(n,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=Lc(n,r),i=Lc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Sl)}Ic(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(No.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(No.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};H_=function(n,e,t,i){t!==i&&(e.flags|=4)};function oo(n,e){if(!st)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ix(n,e,t){var i=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return nn(e.type)&&Ml(),kt(e),null;case 3:return i=e.stateNode,Ns(),rt(tn),rt(Gt),rf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Sa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(hd(Nn),Nn=null))),sd(n,e),kt(e),null;case 5:nf(e);var r=vr(jo.current);if(t=e.type,n!==null&&e.stateNode!=null)z_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return kt(e),null}if(n=vr($n.current),Sa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[Wo]=s,n=(e.mode&1)!==0,t){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<xo.length;r++)it(xo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":qf(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":$f(i,s),it("invalid",i)}Ic(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,n),r=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(t){case"input":fa(i),Kf(i,s,!0);break;case"textarea":fa(i),Zf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[jn]=e,n[Wo]=i,B_(n,e,!1,!1),e.stateNode=n;e:{switch(o=Dc(t,i),t){case"dialog":it("cancel",n),it("close",n),r=i;break;case"iframe":case"object":case"embed":it("load",n),r=i;break;case"video":case"audio":for(r=0;r<xo.length;r++)it(xo[r],n);r=i;break;case"source":it("error",n),r=i;break;case"img":case"image":case"link":it("error",n),it("load",n),r=i;break;case"details":it("toggle",n),r=i;break;case"input":qf(n,i),r=Rc(n,i),it("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",n);break;case"textarea":$f(n,i),r=Lc(n,i),it("invalid",n);break;default:r=i}Ic(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_g(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Uo(n,l):typeof l=="number"&&Uo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",n):l!=null&&Dd(n,s,l,o))}switch(t){case"input":fa(n),Kf(n,i,!1);break;case"textarea":fa(n),Zf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ji(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ss(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Sl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(n&&e.stateNode!=null)H_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=vr(jo.current),vr($n.current),Sa(e)){if(i=e.stateNode,t=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==t)&&(n=dn,n!==null))switch(n.tag){case 3:xa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return kt(e),null;case 13:if(rt(ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(st&&cn!==null&&e.mode&1&&!(e.flags&128))r_(),Is(),e.flags|=98560,s=!1;else if(s=Sa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[jn]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Nn!==null&&(hd(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ot.current&1?Mt===0&&(Mt=3):gf())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ns(),sd(n,e),n===null&&Go(e.stateNode.containerInfo),kt(e),null;case 10:return Qd(e.type._context),kt(e),null;case 17:return nn(e.type)&&Ml(),kt(e),null;case 19:if(rt(ot),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)oo(s,!1);else{if(Mt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Cl(n),o!==null){for(e.flags|=128,oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Je(ot,ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&ht()>Os&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Cl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return kt(e),null}else 2*ht()-s.renderingStartTime>Os&&t!==1073741824&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ht(),e.sibling=null,t=ot.current,Je(ot,i?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return mf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function rx(n,e){switch(qd(e),e.tag){case 1:return nn(e.type)&&Ml(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ns(),rt(tn),rt(Gt),rf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return nf(e),null;case 13:if(rt(ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Is()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return rt(ot),null;case 4:return Ns(),null;case 10:return Qd(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var Ta=!1,Ht=!1,sx=typeof WeakSet=="function"?WeakSet:Set,me=null;function vs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){dt(n,e,i)}else t.current=null}function od(n,e,t){try{t()}catch(i){dt(n,e,i)}}var zh=!1;function ox(n,e){if(Vc=vl,n=Xg(),jd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wc={focusedElem:n,selectionRange:t},vl=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){dt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return _=zh,zh=!1,_}function bo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&od(e,t,s)}r=r.next}while(r!==i)}}function $l(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ad(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function G_(n){var e=n.alternate;e!==null&&(n.alternate=null,G_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[jn],delete e[Wo],delete e[Yc],delete e[Gy],delete e[Vy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function V_(n){return n.tag===5||n.tag===3||n.tag===4}function Hh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||V_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ld(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(n=n.child,n!==null))for(ld(n,e,t),n=n.sibling;n!==null;)ld(n,e,t),n=n.sibling}function ud(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ud(n,e,t),n=n.sibling;n!==null;)ud(n,e,t),n=n.sibling}var Pt=null,Dn=!1;function wi(n,e,t){for(t=t.child;t!==null;)W_(n,e,t),t=t.sibling}function W_(n,e,t){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Gl,t)}catch{}switch(t.tag){case 5:Ht||vs(t,e);case 6:var i=Pt,r=Dn;Pt=null,wi(n,e,t),Pt=i,Dn=r,Pt!==null&&(Dn?(n=Pt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Pt.removeChild(t.stateNode));break;case 18:Pt!==null&&(Dn?(n=Pt,t=t.stateNode,n.nodeType===8?Ru(n.parentNode,t):n.nodeType===1&&Ru(n,t),Bo(n)):Ru(Pt,t.stateNode));break;case 4:i=Pt,r=Dn,Pt=t.stateNode.containerInfo,Dn=!0,wi(n,e,t),Pt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(t,e,o),r=r.next}while(r!==i)}wi(n,e,t);break;case 1:if(!Ht&&(vs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){dt(t,e,a)}wi(n,e,t);break;case 21:wi(n,e,t);break;case 22:t.mode&1?(Ht=(i=Ht)||t.memoizedState!==null,wi(n,e,t),Ht=i):wi(n,e,t);break;default:wi(n,e,t)}}function Gh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new sx),e.forEach(function(i){var r=mx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Rn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Dn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Dn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(Pt===null)throw Error(te(160));W_(s,o,r),Pt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X_(e,n),e=e.sibling}function X_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(e,n),Vn(n),i&4){try{bo(3,n,n.return),$l(3,n)}catch(y){dt(n,n.return,y)}try{bo(5,n,n.return)}catch(y){dt(n,n.return,y)}}break;case 1:Rn(e,n),Vn(n),i&512&&t!==null&&vs(t,t.return);break;case 5:if(Rn(e,n),Vn(n),i&512&&t!==null&&vs(t,t.return),n.flags&32){var r=n.stateNode;try{Uo(r,"")}catch(y){dt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fg(r,s),Dc(a,o);var u=Dc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?_g(r,d):c==="dangerouslySetInnerHTML"?mg(r,d):c==="children"?Uo(r,d):Dd(r,c,d,u)}switch(a){case"input":bc(r,s);break;case"textarea":hg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ss(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(y){dt(n,n.return,y)}}break;case 6:if(Rn(e,n),Vn(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){dt(n,n.return,y)}}break;case 3:if(Rn(e,n),Vn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(y){dt(n,n.return,y)}break;case 4:Rn(e,n),Vn(n);break;case 13:Rn(e,n),Vn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hf=ht())),i&4&&Gh(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Ht=(u=Ht)||c,Rn(e,n),Ht=u):Rn(e,n),Vn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(me=n,c=n.child;c!==null;){for(d=me=c;me!==null;){switch(f=me,p=f.child,f.tag){case 0:case 11:case 14:case 15:bo(4,f,f.return);break;case 1:vs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){dt(i,t,y)}}break;case 5:vs(f,f.return);break;case 22:if(f.memoizedState!==null){Wh(d);continue}}p!==null?(p.return=f,me=p):Wh(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gg("display",o))}catch(y){dt(n,n.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){dt(n,n.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Rn(e,n),Vn(n),i&4&&Gh(n);break;case 21:break;default:Rn(e,n),Vn(n)}}function Vn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(V_(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Uo(r,""),i.flags&=-33);var s=Hh(n);ud(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hh(n);ld(n,a,o);break;default:throw Error(te(161))}}catch(l){dt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ax(n,e,t){me=n,j_(n)}function j_(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ta;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Ta;var u=Ht;if(Ta=o,(Ht=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Xh(r):l!==null?(l.return=o,me=l):Xh(r);for(;s!==null;)me=s,j_(s),s=s.sibling;me=r,Ta=a,Ht=u}Vh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Vh(n)}}function Vh(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:In(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}wh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Bo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ht||e.flags&512&&ad(e)}catch(f){dt(e,e.return,f)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function Wh(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function Xh(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{$l(4,e)}catch(l){dt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{ad(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{ad(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var lx=Math.ceil,Il=Ei.ReactCurrentDispatcher,df=Ei.ReactCurrentOwner,Tn=Ei.ReactCurrentBatchConfig,je=0,Ct=null,vt=null,Dt=0,un=0,ys=nr(0),Mt=0,$o=null,Lr=0,Zl=0,ff=0,Co=null,Qt=null,hf=0,Os=1/0,ci=null,Dl=!1,cd=null,Yi=null,Aa=!1,zi=null,Nl=0,Lo=0,dd=null,ll=-1,ul=0;function Kt(){return je&6?ht():ll!==-1?ll:ll=ht()}function qi(n){return n.mode&1?je&2&&Dt!==0?Dt&-Dt:Xy.transition!==null?(ul===0&&(ul=Cg()),ul):(n=$e,n!==0||(n=window.event,n=n===void 0?16:Og(n.type)),n):1}function Fn(n,e,t,i){if(50<Lo)throw Lo=0,dd=null,Error(te(185));ta(n,t,i),(!(je&2)||n!==Ct)&&(n===Ct&&(!(je&2)&&(Zl|=t),Mt===4&&ki(n,Dt)),rn(n,i),t===1&&je===0&&!(e.mode&1)&&(Os=ht()+500,Yl&&ir()))}function rn(n,e){var t=n.callbackNode;Xv(n,e);var i=_l(n,n===Ct?Dt:0);if(i===0)t!==null&&eh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&eh(t),e===1)n.tag===0?Wy(jh.bind(null,n)):t_(jh.bind(null,n)),zy(function(){!(je&6)&&ir()}),t=null;else{switch(Lg(i)){case 1:t=kd;break;case 4:t=Rg;break;case 16:t=gl;break;case 536870912:t=bg;break;default:t=gl}t=e0(t,Y_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Y_(n,e){if(ll=-1,ul=0,je&6)throw Error(te(327));var t=n.callbackNode;if(ws()&&n.callbackNode!==t)return null;var i=_l(n,n===Ct?Dt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ul(n,i);else{e=i;var r=je;je|=2;var s=K_();(Ct!==n||Dt!==e)&&(ci=null,Os=ht()+500,Sr(n,e));do try{dx();break}catch(a){q_(n,a)}while(1);Zd(),Il.current=s,je=r,vt!==null?e=0:(Ct=null,Dt=0,e=Mt)}if(e!==0){if(e===2&&(r=kc(n),r!==0&&(i=r,e=fd(n,r))),e===1)throw t=$o,Sr(n,0),ki(n,i),rn(n,ht()),t;if(e===6)ki(n,i);else{if(r=n.current.alternate,!(i&30)&&!ux(r)&&(e=Ul(n,i),e===2&&(s=kc(n),s!==0&&(i=s,e=fd(n,s))),e===1))throw t=$o,Sr(n,0),ki(n,i),rn(n,ht()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:hr(n,Qt,ci);break;case 3:if(ki(n,i),(i&130023424)===i&&(e=hf+500-ht(),10<e)){if(_l(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Kt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=jc(hr.bind(null,n,Qt,ci),e);break}hr(n,Qt,ci);break;case 4:if(ki(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lx(i/1960))-i,10<i){n.timeoutHandle=jc(hr.bind(null,n,Qt,ci),i);break}hr(n,Qt,ci);break;case 5:hr(n,Qt,ci);break;default:throw Error(te(329))}}}return rn(n,ht()),n.callbackNode===t?Y_.bind(null,n):null}function fd(n,e){var t=Co;return n.current.memoizedState.isDehydrated&&(Sr(n,e).flags|=256),n=Ul(n,e),n!==2&&(e=Qt,Qt=t,e!==null&&hd(e)),n}function hd(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function ux(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(n,e){for(e&=~ff,e&=~Zl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-On(e),i=1<<t;n[t]=-1,e&=~i}}function jh(n){if(je&6)throw Error(te(327));ws();var e=_l(n,0);if(!(e&1))return rn(n,ht()),null;var t=Ul(n,e);if(n.tag!==0&&t===2){var i=kc(n);i!==0&&(e=i,t=fd(n,i))}if(t===1)throw t=$o,Sr(n,0),ki(n,e),rn(n,ht()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,hr(n,Qt,ci),rn(n,ht()),null}function pf(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(Os=ht()+500,Yl&&ir())}}function Pr(n){zi!==null&&zi.tag===0&&!(je&6)&&ws();var e=je;je|=1;var t=Tn.transition,i=$e;try{if(Tn.transition=null,$e=1,n)return n()}finally{$e=i,Tn.transition=t,je=e,!(je&6)&&ir()}}function mf(){un=ys.current,rt(ys)}function Sr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,By(t)),vt!==null)for(t=vt.return;t!==null;){var i=t;switch(qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ml();break;case 3:Ns(),rt(tn),rt(Gt),rf();break;case 5:nf(i);break;case 4:Ns();break;case 13:rt(ot);break;case 19:rt(ot);break;case 10:Qd(i.type._context);break;case 22:case 23:mf()}t=t.return}if(Ct=n,vt=n=Ki(n.current,null),Dt=un=e,Mt=0,$o=null,ff=Zl=Lr=0,Qt=Co=null,_r!==null){for(e=0;e<_r.length;e++)if(t=_r[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}_r=null}return n}function q_(n,e){do{var t=vt;try{if(Zd(),sl.current=Pl,Ll){for(var i=at.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(Cr=0,Rt=St=at=null,Ro=!1,Yo=0,df.current=null,t===null||t.return===null){Mt=1,$o=e,vt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Dh(o);if(p!==null){p.flags&=-257,Nh(p,o,a,s,e),p.mode&1&&Ih(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Ih(s,u,e),gf();break e}l=Error(te(426))}}else if(st&&a.mode&1){var m=Dh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Nh(m,o,a,s,e),Kd(Us(l,a));break e}}s=l=Us(l,a),Mt!==4&&(Mt=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=P_(s,l,e);Ah(s,h);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yi===null||!Yi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=I_(s,a,e);Ah(s,x);break e}}s=s.return}while(s!==null)}Z_(t)}catch(E){e=E,vt===t&&t!==null&&(vt=t=t.return);continue}break}while(1)}function K_(){var n=Il.current;return Il.current=Pl,n===null?Pl:n}function gf(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Ct===null||!(Lr&268435455)&&!(Zl&268435455)||ki(Ct,Dt)}function Ul(n,e){var t=je;je|=2;var i=K_();(Ct!==n||Dt!==e)&&(ci=null,Sr(n,e));do try{cx();break}catch(r){q_(n,r)}while(1);if(Zd(),je=t,Il.current=i,vt!==null)throw Error(te(261));return Ct=null,Dt=0,Mt}function cx(){for(;vt!==null;)$_(vt)}function dx(){for(;vt!==null&&!Ov();)$_(vt)}function $_(n){var e=J_(n.alternate,n,un);n.memoizedProps=n.pendingProps,e===null?Z_(n):vt=e,df.current=null}function Z_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=rx(t,e),t!==null){t.flags&=32767,vt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mt=6,vt=null;return}}else if(t=ix(t,e,un),t!==null){vt=t;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=n}while(e!==null);Mt===0&&(Mt=5)}function hr(n,e,t){var i=$e,r=Tn.transition;try{Tn.transition=null,$e=1,fx(n,e,t,i)}finally{Tn.transition=r,$e=i}return null}function fx(n,e,t,i){do ws();while(zi!==null);if(je&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(jv(n,s),n===Ct&&(vt=Ct=null,Dt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Aa||(Aa=!0,e0(gl,function(){return ws(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=$e;$e=1;var a=je;je|=4,df.current=null,ox(n,t),X_(t,n),Iy(Wc),vl=!!Vc,Wc=Vc=null,n.current=t,ax(t),Fv(),je=a,$e=o,Tn.transition=s}else n.current=t;if(Aa&&(Aa=!1,zi=n,Nl=r),s=n.pendingLanes,s===0&&(Yi=null),zv(t.stateNode),rn(n,ht()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,n=cd,cd=null,n;return Nl&1&&n.tag!==0&&ws(),s=n.pendingLanes,s&1?n===dd?Lo++:(Lo=0,dd=n):Lo=0,ir(),null}function ws(){if(zi!==null){var n=Lg(Nl),e=Tn.transition,t=$e;try{if(Tn.transition=null,$e=16>n?16:n,zi===null)var i=!1;else{if(n=zi,zi=null,Nl=0,je&6)throw Error(te(331));var r=je;for(je|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:bo(8,c,s)}var d=c.child;if(d!==null)d.return=c,me=d;else for(;me!==null;){c=me;var f=c.sibling,p=c.return;if(G_(c),c===u){me=null;break}if(f!==null){f.return=p,me=f;break}me=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var v=n.current;for(me=v;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$l(9,a)}}catch(E){dt(a,a.return,E)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if(je=r,ir(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Gl,n)}catch{}i=!0}return i}finally{$e=t,Tn.transition=e}}return!1}function Yh(n,e,t){e=Us(t,e),e=P_(n,e,1),n=ji(n,e,1),e=Kt(),n!==null&&(ta(n,1,e),rn(n,e))}function dt(n,e,t){if(n.tag===3)Yh(n,n,t);else for(;e!==null;){if(e.tag===3){Yh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){n=Us(t,n),n=I_(e,n,1),e=ji(e,n,1),n=Kt(),e!==null&&(ta(e,1,n),rn(e,n));break}}e=e.return}}function hx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Kt(),n.pingedLanes|=n.suspendedLanes&t,Ct===n&&(Dt&t)===t&&(Mt===4||Mt===3&&(Dt&130023424)===Dt&&500>ht()-hf?Sr(n,0):ff|=t),rn(n,e)}function Q_(n,e){e===0&&(n.mode&1?(e=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):e=1);var t=Kt();n=xi(n,e),n!==null&&(ta(n,e,t),rn(n,t))}function px(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Q_(n,t)}function mx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Q_(n,t)}var J_;J_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return en=!1,nx(n,e,t);en=!!(n.flags&131072)}else en=!1,st&&e.flags&1048576&&n_(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(n,e),n=e.pendingProps;var r=Ps(e,Gt.current);As(e,t),r=of(null,e,i,n,r,t);var s=af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ef(e),r.updater=ql,e.stateNode=r,r._reactInternals=e,Jc(e,i,n,t),e=nd(null,e,i,!0,s,t)):(e.tag=0,st&&s&&Yd(e),Yt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(al(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_x(i),n=In(i,n),r){case 0:e=td(null,e,i,n,t);break e;case 1:e=Fh(null,e,i,n,t);break e;case 11:e=Uh(null,e,i,n,t);break e;case 14:e=Oh(null,e,i,In(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),td(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Fh(n,e,i,r,t);case 3:e:{if(O_(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,o_(n,e),bl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(te(423)),e),e=kh(n,e,i,t,r);break e}else if(i!==r){r=Us(Error(te(424)),e),e=kh(n,e,i,t,r);break e}else for(cn=Xi(e.stateNode.containerInfo.firstChild),dn=e,st=!0,Nn=null,t=c_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Is(),i===r){e=Si(n,e,t);break e}Yt(n,e,i,t)}e=e.child}return e;case 5:return d_(e),n===null&&$c(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Xc(i,r)?o=null:s!==null&&Xc(i,s)&&(e.flags|=32),U_(n,e),Yt(n,e,o,t),e.child;case 6:return n===null&&$c(e),null;case 13:return F_(n,e,t);case 4:return tf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ds(e,null,i,t):Yt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Uh(n,e,i,r,t);case 7:return Yt(n,e,e.pendingProps,t),e.child;case 8:return Yt(n,e,e.pendingProps.children,t),e.child;case 12:return Yt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Je(wl,i._currentValue),i._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===r.children&&!tn.current){e=Si(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,t),r=An(r),i=i(r),e.flags|=1,Yt(n,e,i,t),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Oh(n,e,i,r,t);case 15:return D_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),al(n,e),e.tag=1,nn(i)?(n=!0,El(e)):n=!1,As(e,t),l_(e,i,r),Jc(e,i,r,t),nd(null,e,i,!0,n,t);case 19:return k_(n,e,t);case 22:return N_(n,e,t)}throw Error(te(156,e.tag))};function e0(n,e){return wg(n,e)}function gx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(n,e,t,i){return new gx(n,e,t,i)}function _f(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _x(n){if(typeof n=="function")return _f(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ud)return 11;if(n===Od)return 14}return 2}function Ki(n,e){var t=n.alternate;return t===null?(t=Mn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function cl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")_f(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case us:return Mr(t.children,r,s,e);case Nd:o=8,r|=8;break;case Ec:return n=Mn(12,t,e,r|2),n.elementType=Ec,n.lanes=s,n;case Tc:return n=Mn(13,t,e,r),n.elementType=Tc,n.lanes=s,n;case Ac:return n=Mn(19,t,e,r),n.elementType=Ac,n.lanes=s,n;case ug:return Ql(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ag:o=10;break e;case lg:o=9;break e;case Ud:o=11;break e;case Od:o=14;break e;case Di:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Mn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Mr(n,e,t,i){return n=Mn(7,n,i,e),n.lanes=t,n}function Ql(n,e,t,i){return n=Mn(22,n,i,e),n.elementType=ug,n.lanes=t,n.stateNode={isHidden:!1},n}function Uu(n,e,t){return n=Mn(6,n,null,e),n.lanes=t,n}function Ou(n,e,t){return e=Mn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function vx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vf(n,e,t,i,r,s,o,a,l){return n=new vx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(s),n}function yx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function t0(n){if(!n)return er;n=n._reactInternals;e:{if(Fr(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(nn(t))return e_(n,t,e)}return e}function n0(n,e,t,i,r,s,o,a,l){return n=vf(t,i,!0,n,r,s,o,a,l),n.context=t0(null),t=n.current,i=Kt(),r=qi(t),s=gi(i,r),s.callback=e??null,ji(t,s,r),n.current.lanes=r,ta(n,r,i),rn(n,i),n}function Jl(n,e,t,i){var r=e.current,s=Kt(),o=qi(r);return t=t0(t),e.context===null?e.context=t:e.pendingContext=t,e=gi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ji(r,e,o),n!==null&&(Fn(n,r,o,s),rl(n,r,o)),o}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function yf(n,e){qh(n,e),(n=n.alternate)&&qh(n,e)}function xx(){return null}var i0=typeof reportError=="function"?reportError:function(n){console.error(n)};function xf(n){this._internalRoot=n}eu.prototype.render=xf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));Jl(n,e,null,null)};eu.prototype.unmount=xf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Pr(function(){Jl(null,n,null,null)}),e[yi]=null}};function eu(n){this._internalRoot=n}eu.prototype.unstable_scheduleHydration=function(n){if(n){var e=Dg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Fi.length&&e!==0&&e<Fi[t].priority;t++);Fi.splice(t,0,n),t===0&&Ug(n)}};function Sf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Kh(){}function Sx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ol(o);s.call(u)}}var o=n0(e,i,n,0,null,!1,!1,"",Kh);return n._reactRootContainer=o,n[yi]=o.current,Go(n.nodeType===8?n.parentNode:n),Pr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ol(l);a.call(u)}}var l=vf(n,0,!1,null,null,!1,!1,"",Kh);return n._reactRootContainer=l,n[yi]=l.current,Go(n.nodeType===8?n.parentNode:n),Pr(function(){Jl(e,l,t,i)}),l}function nu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ol(o);a.call(l)}}Jl(e,o,n,r)}else o=Sx(t,e,n,r,i);return Ol(o)}Pg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=yo(e.pendingLanes);t!==0&&(Bd(e,t|1),rn(e,ht()),!(je&6)&&(Os=ht()+500,ir()))}break;case 13:Pr(function(){var i=xi(n,1);if(i!==null){var r=Kt();Fn(i,n,1,r)}}),yf(n,1)}};zd=function(n){if(n.tag===13){var e=xi(n,134217728);if(e!==null){var t=Kt();Fn(e,n,134217728,t)}yf(n,134217728)}};Ig=function(n){if(n.tag===13){var e=qi(n),t=xi(n,e);if(t!==null){var i=Kt();Fn(t,n,e,i)}yf(n,e)}};Dg=function(){return $e};Ng=function(n,e){var t=$e;try{return $e=n,e()}finally{$e=t}};Uc=function(n,e,t){switch(e){case"input":if(bc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=jl(i);if(!r)throw Error(te(90));dg(i),bc(i,r)}}}break;case"textarea":hg(n,t);break;case"select":e=t.value,e!=null&&Ss(n,!!t.multiple,e,!1)}};xg=pf;Sg=Pr;var Mx={usingClientEntryPoint:!1,Events:[ia,hs,jl,vg,yg,pf]},ao={findFiberByHostInstance:gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ex={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tg(n),n===null?null:n.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Gl=wa.inject(Ex),Kn=wa}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx;hn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(e))throw Error(te(200));return yx(n,e,null,t)};hn.createRoot=function(n,e){if(!Sf(n))throw Error(te(299));var t=!1,i="",r=i0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vf(n,1,!1,null,null,t,!1,i,r),n[yi]=e.current,Go(n.nodeType===8?n.parentNode:n),new xf(e)};hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=Tg(e),n=n===null?null:n.stateNode,n};hn.flushSync=function(n){return Pr(n)};hn.hydrate=function(n,e,t){if(!tu(e))throw Error(te(200));return nu(null,n,e,!0,t)};hn.hydrateRoot=function(n,e,t){if(!Sf(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=i0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=n0(e,null,n,1,t??null,r,!1,s,o),n[yi]=e.current,Go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new eu(e)};hn.render=function(n,e,t){if(!tu(e))throw Error(te(200));return nu(null,n,e,!1,t)};hn.unmountComponentAtNode=function(n){if(!tu(n))throw Error(te(40));return n._reactRootContainer?(Pr(function(){nu(null,null,n,!1,function(){n._reactRootContainer=null,n[yi]=null})}),!0):!1};hn.unstable_batchedUpdates=pf;hn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!tu(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return nu(n,e,t,!1,i)};hn.version="18.2.0-next-9e3b772b8-20220608";function r0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r0)}catch(n){console.error(n)}}r0(),ng.exports=hn;var Tx=ng.exports,$h=Tx;Sc.createRoot=$h.createRoot,Sc.hydrateRoot=$h.hydrateRoot;function Ax(){return _t.jsxs(_t.Fragment,{children:[_t.jsx("h1",{children:"Ahmed Bakr1"}),_t.jsx("h1",{children:"Ahmed Bakr2"}),_t.jsx("h1",{children:"Ahmed Bakr3"})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mf="155",Hr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wx=0,Zh=1,Rx=2,s0=1,bx=2,ui=3,Mi=0,sn=1,Yn=2,$i=0,Rs=1,Qh=2,Jh=3,ep=4,Cx=5,as=100,Lx=101,Px=102,tp=103,np=104,Ix=200,Dx=201,Nx=202,Ux=203,o0=204,a0=205,Ox=206,Fx=207,kx=208,Bx=209,zx=210,Hx=0,Gx=1,Vx=2,pd=3,Wx=4,Xx=5,jx=6,Yx=7,l0=0,qx=1,Kx=2,Zi=0,$x=1,Zx=2,Qx=3,Jx=4,eS=5,u0=300,Fs=301,ks=302,md=303,gd=304,iu=306,Bs=1e3,xn=1001,Fl=1002,bt=1003,_d=1004,dl=1005,Jt=1006,c0=1007,Ir=1008,Qi=1009,tS=1010,nS=1011,Ef=1012,d0=1013,Hi=1014,pi=1015,Zo=1016,f0=1017,h0=1018,Er=1020,iS=1021,Sn=1023,rS=1024,sS=1025,Tr=1026,zs=1027,oS=1028,p0=1029,aS=1030,m0=1031,g0=1033,Fu=33776,ku=33777,Bu=33778,zu=33779,ip=35840,rp=35841,sp=35842,op=35843,lS=36196,ap=37492,lp=37496,up=37808,cp=37809,dp=37810,fp=37811,hp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,yp=37818,xp=37819,Sp=37820,Mp=37821,Hu=36492,uS=36283,Ep=36284,Tp=36285,Ap=36286,Qo=2300,Hs=2301,Gu=2302,wp=2400,Rp=2401,bp=2402,cS=2500,dS=0,_0=1,vd=2,v0=3e3,Ar=3001,fS=3200,hS=3201,y0=0,pS=1,wr="",Ee="srgb",zn="srgb-linear",x0="display-p3",Vu=7680,mS=519,gS=512,_S=513,vS=514,yS=515,xS=516,SS=517,MS=518,ES=519,yd=35044,Cp="300 es",xd=1035,mi=2e3,kl=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lp=1234567;const Po=Math.PI/180,Gs=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function Tf(n,e){return(n%e+e)%e}function TS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function AS(n,e,t){return n!==e?(t-n)/(e-n):0}function Io(n,e,t){return(1-t)*n+t*e}function wS(n,e,t,i){return Io(n,e,1-Math.exp(-t*i))}function RS(n,e=1){return e-Math.abs(Tf(n,e*2)-e)}function bS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function CS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function LS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function PS(n,e){return n+Math.random()*(e-n)}function IS(n){return n*(.5-Math.random())}function DS(n){n!==void 0&&(Lp=n);let e=Lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function NS(n){return n*Po}function US(n){return n*Gs}function Sd(n){return(n&n-1)===0&&n!==0}function S0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function OS(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*d,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*d,a*u);break;case"ZXZ":n.set(l*d,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const M0={DEG2RAD:Po,RAD2DEG:Gs,generateUUID:kn,clamp:It,euclideanModulo:Tf,mapLinear:TS,inverseLerp:AS,lerp:Io,damp:wS,pingpong:RS,smoothstep:bS,smootherstep:CS,randInt:LS,randFloat:PS,randFloatSpread:IS,seededRandom:DS,degToRad:NS,radToDeg:US,isPowerOfTwo:Sd,ceilPowerOfTwo:S0,floorPowerOfTwo:Bl,setQuaternionFromProperEuler:OS,normalize:Ze,denormalize:qn};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],v=r[1],g=r[4],x=r[7],E=r[2],R=r[5],T=r[8];return s[0]=o*y+a*v+l*E,s[3]=o*m+a*g+l*R,s[6]=o*h+a*x+l*T,s[1]=u*y+c*v+d*E,s[4]=u*m+c*g+d*R,s[7]=u*h+c*x+d*T,s[2]=f*y+p*v+_*E,s[5]=f*m+p*g+_*R,s[8]=f*h+p*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(c*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-u*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new ke;function E0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Pp={};function Do(n){n in Pp||(Pp[n]=!0,console.warn(n))}function bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const FS=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),kS=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function BS(n){return n.convertSRGBToLinear().applyMatrix3(kS)}function zS(n){return n.applyMatrix3(FS).convertLinearToSRGB()}const HS={[zn]:n=>n,[Ee]:n=>n.convertSRGBToLinear(),[x0]:BS},GS={[zn]:n=>n,[Ee]:n=>n.convertLinearToSRGB(),[x0]:zS},bn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return zn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=HS[e],r=GS[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Vr;class T0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=Jo("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bs(t[i]/255)*255):t[i]=bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class A0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ju(r[o].image)):s.push(ju(r[o]))}else s=ju(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ju(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WS=0;class Nt extends kr{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=xn,r=xn,s=Jt,o=Ir,a=Sn,l=Qi,u=Nt.DEFAULT_ANISOTROPY,c=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=kn(),this.name="",this.source=new A0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ar?Ee:wr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?Ar:v0}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ar?Ee:wr}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=u0;Nt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,i=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,x=(p+1)/2,E=(h+1)/2,R=(c+f)/4,T=(d+y)/4,I=(_+m)/4;return g>x&&g>E?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=T/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=I/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=I/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-y)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XS extends kr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ar?Ee:wr),this.texture=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Jt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new A0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends XS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class w0 extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jS extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(d!==y||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*y,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const E=Math.sqrt(g),R=Math.atan2(E,h*v);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const x=a*v;if(l=l*m+f*x,u=u*m+p*x,c=c*m+_*x,d=d*m+y*x,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ip.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new P,Ip=new Qn;class Ti{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox),Wr.applyMatrix4(e.matrixWorld),this.union(Wr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ii.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ii)}else r.boundingBox===null&&r.computeBoundingBox(),Wr.copy(r.boundingBox),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ra.subVectors(this.max,lo),Xr.subVectors(e.a,lo),jr.subVectors(e.b,lo),Yr.subVectors(e.c,lo),Ri.subVectors(jr,Xr),bi.subVectors(Yr,jr),ar.subVectors(Xr,Yr);let t=[0,-Ri.z,Ri.y,0,-bi.z,bi.y,0,-ar.z,ar.y,Ri.z,0,-Ri.x,bi.z,0,-bi.x,ar.z,0,-ar.x,-Ri.y,Ri.x,0,-bi.y,bi.x,0,-ar.y,ar.x,0];return!qu(t,Xr,jr,Yr,Ra)||(t=[1,0,0,0,1,0,0,0,1],!qu(t,Xr,jr,Yr,Ra))?!1:(ba.crossVectors(Ri,bi),t=[ba.x,ba.y,ba.z],qu(t,Xr,jr,Yr,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new P,new P,new P,new P,new P,new P,new P,new P],ii=new P,Wr=new Ti,Xr=new P,jr=new P,Yr=new P,Ri=new P,bi=new P,ar=new P,lo=new P,Ra=new P,ba=new P,lr=new P;function qu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){lr.fromArray(n,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),u=t.dot(lr),c=i.dot(lr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const YS=new Ti,uo=new P,Ku=new P;class Jn{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):YS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(Ku)),this.expandByPoint(uo.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new P,$u=new P,Ca=new P,Ci=new P,Zu=new P,La=new P,Qu=new P;class sa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$u.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub($u);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ca),a=Ci.dot(this.direction),l=-Ci.dot(Ca),u=Ci.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const y=1/c;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($u).addScaledVector(Ca,f),p}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,s){Zu.subVectors(t,e),La.subVectors(i,e),Qu.crossVectors(Zu,La);let o=this.direction.dot(Qu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Ci,La));if(l<0)return null;const u=a*this.direction.dot(Zu.cross(Ci));if(u<0||l+u>o)return null;const c=-a*Ci.dot(Qu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,y,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,y,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,y=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-y*u,t[9]=-a*l,t[2]=y-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,y=u*d;t[0]=f+y*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,y=u*d;t[0]=f-y*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=y-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,y=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+y,t[1]=l*d,t[5]=y*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,y=a*u;t[0]=l*c,t[4]=y-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,y=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+y,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qS,e,KS)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Li.crossVectors(i,an),Li.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Li.crossVectors(i,an)),Li.normalize(),Pa.crossVectors(an,Li),r[0]=Li.x,r[4]=Pa.x,r[8]=an.x,r[1]=Li.y,r[5]=Pa.y,r[9]=an.y,r[2]=Li.z,r[6]=Pa.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],v=i[3],g=i[7],x=i[11],E=i[15],R=r[0],T=r[4],I=r[8],M=r[12],w=r[1],$=r[5],J=r[9],B=r[13],j=r[2],X=r[6],Q=r[10],K=r[14],D=r[3],W=r[7],H=r[11],N=r[15];return s[0]=o*R+a*w+l*j+u*D,s[4]=o*T+a*$+l*X+u*W,s[8]=o*I+a*J+l*Q+u*H,s[12]=o*M+a*B+l*K+u*N,s[1]=c*R+d*w+f*j+p*D,s[5]=c*T+d*$+f*X+p*W,s[9]=c*I+d*J+f*Q+p*H,s[13]=c*M+d*B+f*K+p*N,s[2]=_*R+y*w+m*j+h*D,s[6]=_*T+y*$+m*X+h*W,s[10]=_*I+y*J+m*Q+h*H,s[14]=_*M+y*B+m*K+h*N,s[3]=v*R+g*w+x*j+E*D,s[7]=v*T+g*$+x*X+E*W,s[11]=v*I+g*J+x*Q+E*H,s[15]=v*M+g*B+x*K+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+y*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],v=d*m*u-y*f*u+y*l*p-a*m*p-d*l*h+a*f*h,g=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,x=c*y*u-_*d*u+_*a*p-o*y*p-c*a*h+o*d*h,E=_*d*l-c*y*l-_*a*f+o*y*f+c*a*m-o*d*m,R=t*v+i*g+r*x+s*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*T,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*h+i*l*h)*T,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*T,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*T,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*T,e[8]=x*T,e[9]=(_*d*s-c*y*s-_*i*p+t*y*p+c*i*h-t*d*h)*T,e[10]=(o*y*s-_*a*s+_*i*u-t*y*u-o*i*h+t*a*h)*T,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*T,e[12]=E*T,e[13]=(c*y*r-_*d*r+_*i*f-t*y*f-c*i*m+t*d*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+t*y*l+o*i*m-t*a*m)*T,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,y=o*c,m=o*d,h=a*d,v=l*u,g=l*c,x=l*d,E=i.x,R=i.y,T=i.z;return r[0]=(1-(y+h))*E,r[1]=(p+x)*E,r[2]=(_-g)*E,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(f+h))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(_+g)*T,r[9]=(m-v)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const u=1/s,c=1/o,d=1/a;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=c,Cn.elements[5]*=c,Cn.elements[6]*=c,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=mi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===mi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===kl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=mi){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,y;if(a===mi)_=(o+s)*d,y=-2*d;else if(a===kl)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qr=new P,Cn=new Be,qS=new P(0,0,0),KS=new P(1,1,1),Li=new P,Pa=new P,an=new P,Dp=new Be,Np=new Qn;class ru{constructor(e=0,t=0,i=0,r=ru.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ru.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const Up=new P,Kr=new Qn,si=new Be,Ia=new P,co=new P,ZS=new P,QS=new Qn,Op=new P(1,0,0),Fp=new P(0,1,0),kp=new P(0,0,1),JS={type:"added"},Bp={type:"removed"};class lt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new P,t=new ru,i=new Qn,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new ke}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(Fp,e)}rotateZ(e){return this.rotateOnAxis(kp,e)}translateOnAxis(e,t){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(Fp,e)}translateZ(e){return this.translateOnAxis(kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(co,Ia,this.up):si.lookAt(Ia,co,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(si),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(JS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Bp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,ZS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,QS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}lt.DEFAULT_UP=new P(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new P,oi=new P,Ju=new P,ai=new P,$r=new P,Zr=new P,zp=new P,ec=new P,tc=new P,nc=new P;let Da=!1;class Un{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ln.subVectors(e,t),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ln.subVectors(r,t),oi.subVectors(i,t),Ju.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(oi),l=Ln.dot(Ju),u=oi.dot(oi),c=oi.dot(Ju),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,i,r,s,o,a,l){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ai),l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l}static isFrontFacing(e,t,i,r){return Ln.subVectors(i,t),oi.subVectors(e,t),Ln.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Ln.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),Un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),Zr.subVectors(s,i),ec.subVectors(e,i);const l=$r.dot(ec),u=Zr.dot(ec);if(l<=0&&u<=0)return t.copy(i);tc.subVectors(e,r);const c=$r.dot(tc),d=Zr.dot(tc);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector($r,o);nc.subVectors(e,s);const p=$r.dot(nc),_=Zr.dot(nc);if(_>=0&&p<=_)return t.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Zr,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return zp.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(zp,a);const h=1/(m+y+f);return o=y*h,a=f*h,t.copy(i).addScaledVector($r,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let eM=0;class Zn extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Rs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=o0,this.blendDst=a0,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vu,this.stencilZFail=Vu,this.stencilZPass=Vu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Na={h:0,s:0,l:0};function ic(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ee){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=bn.workingColorSpace){return this.r=e,this.g=t,this.b=i,bn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=bn.workingColorSpace){if(e=Tf(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ic(o,s,e+1/3),this.g=ic(o,s,e),this.b=ic(o,s,e-1/3)}return bn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ee){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ee){const i=b0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Xu(e.r),this.g=Xu(e.g),this.b=Xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ee){return bn.fromWorkingColorSpace(zt.copy(this),e),Math.round(It(zt.r*255,0,255))*65536+Math.round(It(zt.g*255,0,255))*256+Math.round(It(zt.b*255,0,255))}getHexString(e=Ee){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bn.workingColorSpace){bn.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=bn.workingColorSpace){return bn.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ee){bn.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==Ee?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Pn),Pn.h+=e,Pn.s+=t,Pn.l+=i,this.setHSL(Pn.h,Pn.s,Pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Na);const i=Io(Pn.h,Na.h,t),r=Io(Pn.s,Na.s,t),s=Io(Pn.l,Na.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ie;Ie.NAMES=b0;class yr extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new P,Ua=new be;class Ut{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yd,this.updateRange={offset:0,count:-1},this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class C0 extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class L0 extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _i extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tM=0;const gn=new Be,rc=new lt,Qr=new P,ln=new Ti,fo=new Ti,wt=new P;class Hn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?L0:C0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _i(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(ln.min,fo.min),ln.expandByPoint(wt),wt.addVectors(ln.max,fo.max),ln.expandByPoint(wt)):(ln.expandByPoint(fo.min),ln.expandByPoint(fo.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)wt.fromBufferAttribute(a,u),l&&(Qr.fromBufferAttribute(e,u),wt.add(Qr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new P,c[w]=new P;const d=new P,f=new P,p=new P,_=new be,y=new be,m=new be,h=new P,v=new P;function g(w,$,J){d.fromArray(r,w*3),f.fromArray(r,$*3),p.fromArray(r,J*3),_.fromArray(o,w*2),y.fromArray(o,$*2),m.fromArray(o,J*2),f.sub(d),p.sub(d),y.sub(_),m.sub(_);const B=1/(y.x*m.y-m.x*y.y);isFinite(B)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(B),v.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(B),u[w].add(h),u[$].add(h),u[J].add(h),c[w].add(v),c[$].add(v),c[J].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,$=x.length;w<$;++w){const J=x[w],B=J.start,j=J.count;for(let X=B,Q=B+j;X<Q;X+=3)g(i[X+0],i[X+1],i[X+2])}const E=new P,R=new P,T=new P,I=new P;function M(w){T.fromArray(s,w*3),I.copy(T);const $=u[w];E.copy($),E.sub(T.multiplyScalar(T.dot($))).normalize(),R.crossVectors(I,$);const B=R.dot(c[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=B}for(let w=0,$=x.length;w<$;++w){const J=x[w],B=J.start,j=J.count;for(let X=B,Q=B+j;X<Q;X+=3)M(i[X+0]),M(i[X+1]),M(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,u=new P,c=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new Ut(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hp=new Be,ur=new sa,Oa=new Jn,Gp=new P,Jr=new P,es=new P,ts=new P,sc=new P,Fa=new P,ka=new be,Ba=new be,za=new be,Vp=new P,Wp=new P,Xp=new P,Ha=new P,Ga=new P;class En extends lt{constructor(e=new Hn,t=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(sc.fromBufferAttribute(d,e),o?Fa.addScaledVector(sc,c):Fa.addScaledVector(sc.sub(t),c))}t.add(Fa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Oa.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Oa,Gp)===null||ur.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Hp.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Hp),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,E=g;x<E;x+=3){const R=a.getX(x),T=a.getX(x+1),I=a.getX(x+2);r=Va(this,h,e,i,u,c,d,R,T,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Va(this,o,e,i,u,c,d,v,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,E=g;x<E;x+=3){const R=x,T=x+1,I=x+2;r=Va(this,h,e,i,u,c,d,R,T,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=m,g=m+1,x=m+2;r=Va(this,o,e,i,u,c,d,v,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function nM(n,e,t,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mi,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ga);return u<t.near||u>t.far?null:{distance:u,point:Ga.clone(),object:n}}function Va(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Jr),n.getVertexPosition(l,es),n.getVertexPosition(u,ts);const c=nM(n,e,t,i,Jr,es,ts,Ha);if(c){r&&(ka.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),za.fromBufferAttribute(r,u),c.uv=Un.getInterpolation(Ha,Jr,es,ts,ka,Ba,za,new be)),s&&(ka.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),za.fromBufferAttribute(s,u),c.uv1=Un.getInterpolation(Ha,Jr,es,ts,ka,Ba,za,new be),c.uv2=c.uv1),o&&(Vp.fromBufferAttribute(o,a),Wp.fromBufferAttribute(o,l),Xp.fromBufferAttribute(o,u),c.normal=Un.getInterpolation(Ha,Jr,es,ts,Vp,Wp,Xp,new P),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new P,materialIndex:0};Un.getNormal(Jr,es,ts,d.normal),c.face=d}return c}class oa extends Hn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _i(u,3)),this.setAttribute("normal",new _i(c,3)),this.setAttribute("uv",new _i(d,2));function _(y,m,h,v,g,x,E,R,T,I,M){const w=x/T,$=E/I,J=x/2,B=E/2,j=R/2,X=T+1,Q=I+1;let K=0,D=0;const W=new P;for(let H=0;H<Q;H++){const N=H*$-B;for(let k=0;k<X;k++){const le=k*w-J;W[y]=le*v,W[m]=N*g,W[h]=j,u.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[h]=R>0?1:-1,c.push(W.x,W.y,W.z),d.push(k/T),d.push(1-H/I),K+=1}}for(let H=0;H<I;H++)for(let N=0;N<T;N++){const k=f+N+X*H,le=f+N+X*(H+1),oe=f+(N+1)+X*(H+1),pe=f+(N+1)+X*H;l.push(k,le,pe),l.push(le,oe,pe),D+=6}a.addGroup(p,D,M),p+=D,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const r in i)e[r]=i[r]}return e}function iM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function P0(n){return n.getRenderTarget()===null?n.outputColorSpace:zn}const rM={clone:Vs,merge:jt};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=iM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class I0 extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends I0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class aM extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new qt(ns,is,e,t);r.layers=this.layers,this.add(r);const s=new qt(ns,is,e,t);s.layers=this.layers,this.add(s);const o=new qt(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new qt(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new qt(ns,is,e,t);l.layers=this.layers,this.add(l);const u=new qt(ns,is,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class D0 extends Nt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lM extends Dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ar?Ee:wr),this.texture=new D0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oa(5,5,5),s=new Nr({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:$i});s.uniforms.tEquirect.value=t;const o=new En(r,s),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Jt),new aM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const oc=new P,uM=new P,cM=new ke;class Ui{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=oc.subVectors(i,t).cross(uM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(oc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cM.getNormalMatrix(e),r=this.coplanarPoint(oc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Jn,Wa=new P;class Af{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],y=r[10],m=r[11],h=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,f-u,m-p,x-h).normalize(),i[1].setComponents(l+s,f+u,m+p,x+h).normalize(),i[2].setComponents(l+o,f+c,m+_,x+v).normalize(),i[3].setComponents(l-o,f-c,m-_,x-v).normalize(),i[4].setComponents(l-a,f-d,m-y,x-g).normalize(),t===mi)i[5].setComponents(l+a,f+d,m+y,x+g).normalize();else if(t===kl)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function N0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,f),u.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,p=c.updateRange;n.bindBuffer(d,u),p.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class wf extends Hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],y=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let g=0;g<u;g++){const x=g*d-s;_.push(x,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+u*h,x=v+u*(h+1),E=v+1+u*(h+1),R=v+1+u*h;p.push(g,x,R),p.push(x,E,R)}this.setIndex(p),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(y,3)),this.setAttribute("uv",new _i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wf(e.width,e.height,e.widthSegments,e.heightSegments)}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
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
#endif`,pM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EM=`#ifdef USE_IRIDESCENCE
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
#endif`,TM=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,DM=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,NM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,UM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
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
}`,QM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,iE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,uE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_E=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xE=`#if defined( USE_POINTS_UV )
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
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,AE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ZE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,JE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_T=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,vT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,TT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,AT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,wT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,RT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,bT=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,CT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,IT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,DT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,NT=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,OT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,FT=`uniform float size;
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
}`,kT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,BT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,zT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,HT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,GT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ue={alphahash_fragment:fM,alphahash_pars_fragment:hM,alphamap_fragment:pM,alphamap_pars_fragment:mM,alphatest_fragment:gM,alphatest_pars_fragment:_M,aomap_fragment:vM,aomap_pars_fragment:yM,begin_vertex:xM,beginnormal_vertex:SM,bsdfs:MM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:bM,color_fragment:CM,color_pars_fragment:LM,color_pars_vertex:PM,color_vertex:IM,common:DM,cube_uv_reflection_fragment:NM,defaultnormal_vertex:UM,displacementmap_pars_vertex:OM,displacementmap_vertex:FM,emissivemap_fragment:kM,emissivemap_pars_fragment:BM,colorspace_fragment:zM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:WM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:iE,envmap_vertex:jM,fog_vertex:YM,fog_pars_vertex:qM,fog_fragment:KM,fog_pars_fragment:$M,gradientmap_pars_fragment:ZM,lightmap_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:oE,lights_phong_pars_fragment:aE,lights_physical_fragment:lE,lights_physical_pars_fragment:uE,lights_fragment_begin:cE,lights_fragment_maps:dE,lights_fragment_end:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:_E,map_pars_fragment:vE,map_particle_fragment:yE,map_particle_pars_fragment:xE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:AE,morphtarget_vertex:wE,normal_fragment_begin:RE,normal_fragment_maps:bE,normal_pars_fragment:CE,normal_pars_vertex:LE,normal_vertex:PE,normalmap_pars_fragment:IE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:UE,iridescence_pars_fragment:OE,opaque_fragment:FE,packing:kE,premultiplied_alpha_fragment:BE,project_vertex:zE,dithering_fragment:HE,dithering_pars_fragment:GE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:XE,shadowmap_pars_vertex:jE,shadowmap_vertex:YE,shadowmask_pars_fragment:qE,skinbase_vertex:KE,skinning_pars_vertex:$E,skinning_vertex:ZE,skinnormal_vertex:QE,specularmap_fragment:JE,specularmap_pars_fragment:eT,tonemapping_fragment:tT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:rT,uv_pars_fragment:sT,uv_pars_vertex:oT,uv_vertex:aT,worldpos_vertex:lT,background_vert:uT,background_frag:cT,backgroundCube_vert:dT,backgroundCube_frag:fT,cube_vert:hT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distanceRGBA_vert:_T,distanceRGBA_frag:vT,equirect_vert:yT,equirect_frag:xT,linedashed_vert:ST,linedashed_frag:MT,meshbasic_vert:ET,meshbasic_frag:TT,meshlambert_vert:AT,meshlambert_frag:wT,meshmatcap_vert:RT,meshmatcap_frag:bT,meshnormal_vert:CT,meshnormal_frag:LT,meshphong_vert:PT,meshphong_frag:IT,meshphysical_vert:DT,meshphysical_frag:NT,meshtoon_vert:UT,meshtoon_frag:OT,points_vert:FT,points_frag:kT,shadow_vert:BT,shadow_frag:zT,sprite_vert:HT,sprite_frag:GT},ue={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Xn={basic:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:jt([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:jt([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:jt([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:jt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:jt([ue.lights,ue.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Xn.physical={uniforms:jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Xa={r:0,b:0,g:0};function VT(n,e,t,i,r,s,o){const a=new Ie(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;switch(g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0),n.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),v=!0;break}(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===iu)?(c===void 0&&(c=new En(new oa(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:Vs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Ee,(d!==g||f!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new En(new wf(2,2),new Nr({name:"BackgroundMaterial",uniforms:Vs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Ee,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,h){m.getRGB(Xa,P0(n)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function WT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(j,X,Q,K,D){let W=!1;if(o){const H=y(K,Q,X);u!==H&&(u=H,p(u.object)),W=h(j,K,Q,D),W&&v(j,K,Q,D)}else{const H=X.wireframe===!0;(u.geometry!==K.id||u.program!==Q.id||u.wireframe!==H)&&(u.geometry=K.id,u.program=Q.id,u.wireframe=H,W=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(W||c)&&(c=!1,I(j,X,Q,K),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(j){return i.isWebGL2?n.bindVertexArray(j):s.bindVertexArrayOES(j)}function _(j){return i.isWebGL2?n.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function y(j,X,Q){const K=Q.wireframe===!0;let D=a[j.id];D===void 0&&(D={},a[j.id]=D);let W=D[X.id];W===void 0&&(W={},D[X.id]=W);let H=W[K];return H===void 0&&(H=m(f()),W[K]=H),H}function m(j){const X=[],Q=[],K=[];for(let D=0;D<r;D++)X[D]=0,Q[D]=0,K[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Q,attributeDivisors:K,object:j,attributes:{},index:null}}function h(j,X,Q,K){const D=u.attributes,W=X.attributes;let H=0;const N=Q.getAttributes();for(const k in N)if(N[k].location>=0){const oe=D[k];let pe=W[k];if(pe===void 0&&(k==="instanceMatrix"&&j.instanceMatrix&&(pe=j.instanceMatrix),k==="instanceColor"&&j.instanceColor&&(pe=j.instanceColor)),oe===void 0||oe.attribute!==pe||pe&&oe.data!==pe.data)return!0;H++}return u.attributesNum!==H||u.index!==K}function v(j,X,Q,K){const D={},W=X.attributes;let H=0;const N=Q.getAttributes();for(const k in N)if(N[k].location>=0){let oe=W[k];oe===void 0&&(k==="instanceMatrix"&&j.instanceMatrix&&(oe=j.instanceMatrix),k==="instanceColor"&&j.instanceColor&&(oe=j.instanceColor));const pe={};pe.attribute=oe,oe&&oe.data&&(pe.data=oe.data),D[k]=pe,H++}u.attributes=D,u.attributesNum=H,u.index=K}function g(){const j=u.newAttributes;for(let X=0,Q=j.length;X<Q;X++)j[X]=0}function x(j){E(j,0)}function E(j,X){const Q=u.newAttributes,K=u.enabledAttributes,D=u.attributeDivisors;Q[j]=1,K[j]===0&&(n.enableVertexAttribArray(j),K[j]=1),D[j]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,X),D[j]=X)}function R(){const j=u.newAttributes,X=u.enabledAttributes;for(let Q=0,K=X.length;Q<K;Q++)X[Q]!==j[Q]&&(n.disableVertexAttribArray(Q),X[Q]=0)}function T(j,X,Q,K,D,W,H){H===!0?n.vertexAttribIPointer(j,X,Q,D,W):n.vertexAttribPointer(j,X,Q,K,D,W)}function I(j,X,Q,K){if(i.isWebGL2===!1&&(j.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=K.attributes,W=Q.getAttributes(),H=X.defaultAttributeValues;for(const N in W){const k=W[N];if(k.location>=0){let le=D[N];if(le===void 0&&(N==="instanceMatrix"&&j.instanceMatrix&&(le=j.instanceMatrix),N==="instanceColor"&&j.instanceColor&&(le=j.instanceColor)),le!==void 0){const oe=le.normalized,pe=le.itemSize,_e=t.get(le);if(_e===void 0)continue;const Me=_e.buffer,ye=_e.type,Ye=_e.bytesPerElement,Lt=i.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||le.gpuType===d0);if(le.isInterleavedBufferAttribute){const De=le.data,F=De.stride,yt=le.offset;if(De.isInstancedInterleavedBuffer){for(let xe=0;xe<k.locationSize;xe++)E(k.location+xe,De.meshPerAttribute);j.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let xe=0;xe<k.locationSize;xe++)x(k.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let xe=0;xe<k.locationSize;xe++)T(k.location+xe,pe/k.locationSize,ye,oe,F*Ye,(yt+pe/k.locationSize*xe)*Ye,Lt)}else{if(le.isInstancedBufferAttribute){for(let De=0;De<k.locationSize;De++)E(k.location+De,le.meshPerAttribute);j.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<k.locationSize;De++)x(k.location+De);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let De=0;De<k.locationSize;De++)T(k.location+De,pe/k.locationSize,ye,oe,pe*Ye,pe/k.locationSize*De*Ye,Lt)}}else if(H!==void 0){const oe=H[N];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(k.location,oe);break;case 3:n.vertexAttrib3fv(k.location,oe);break;case 4:n.vertexAttrib4fv(k.location,oe);break;default:n.vertexAttrib1fv(k.location,oe)}}}}R()}function M(){J();for(const j in a){const X=a[j];for(const Q in X){const K=X[Q];for(const D in K)_(K[D].object),delete K[D];delete X[Q]}delete a[j]}}function w(j){if(a[j.id]===void 0)return;const X=a[j.id];for(const Q in X){const K=X[Q];for(const D in K)_(K[D].object),delete K[D];delete X[Q]}delete a[j.id]}function $(j){for(const X in a){const Q=a[X];if(Q[j.id]===void 0)continue;const K=Q[j.id];for(const D in K)_(K[D].object),delete K[D];delete Q[j.id]}}function J(){B(),c=!0,u!==l&&(u=l,p(u.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:$,initAttributes:g,enableAttribute:x,disableUnusedAttributes:R}}function XT(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,p;if(r)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function jT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,x=o||e.has("OES_texture_float"),E=g&&x,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:R}}function YT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ui,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,g=v*4;let x=h.clippingState||null;l.value=x,x=c(_,f,g,p);for(let E=0;E!==g;++E)x[E]=t[E];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function qT(n){let e=new WeakMap;function t(o,a){return a===md?o.mapping=Fs:a===gd&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===md||a===gd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new lM(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rf extends I0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,jp=[.125,.215,.35,.446,.526,.582],mr=20,ac=new Rf,Yp=new Ie;let lc=null;const pr=(1+Math.sqrt(5))/2,rs=1/pr,qp=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,pr,rs),new P(0,pr,-rs),new P(rs,0,pr),new P(-rs,0,pr),new P(pr,rs,0),new P(-pr,rs,0)];class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){lc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Zo,format:Sn,colorSpace:zn,depthBuffer:!1},r=$p(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$p(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KT(s)),this._blurMaterial=$T(s,e,t)}return r}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,i,r){const a=new qt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Yp),c.toneMapping=Zi,c.autoClear=!1;const p=new yr({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new En(new oa,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Yp),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const g=this._cubeSize;ja(r,v*g,h>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fs||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new En(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ac)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qp[(r-1)%qp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new En(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),y=s/_,m=isFinite(s)?1+Math.floor(c*y):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const h=[];let v=0;for(let T=0;T<mr;++T){const I=T/y,M=Math.exp(-I*I/2);h.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const x=this._sizeLods[r],E=3*x*(r>g-xs?r-g+xs:0),R=4*(this._cubeSize-x);ja(t,E,R,3*x,2*x),l.setRenderTarget(t),l.render(d,ac)}}function KT(n){const e=[],t=[],i=[];let r=n;const s=n-xs+1+jp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xs?l=jp[o-n+xs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,y=3,m=2,h=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,I=R>2?0:-1,M=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(M,y*_*R),g.set(f,m*_*R);const w=[R,R,R,R,R,R];x.set(w,h*_*R)}const E=new Hn;E.setAttribute("position",new Ut(v,y)),E.setAttribute("uv",new Ut(g,m)),E.setAttribute("faceIndex",new Ut(x,h)),e.push(E),r>xs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $p(n,e,t){const i=new Dr(n,e,t);return i.texture.mapping=iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $T(n,e,t){const i=new Float32Array(mr),r=new P(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Zp(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Qp(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===md||l===gd,c=l===Fs||l===ks;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Kp(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Kp(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function QT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JT(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,x=v.length;g<x;g+=3){const E=v[g+0],R=v[g+1],T=v[g+2];f.push(E,R,R,T,T,E)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const E=g+0,R=g+1,T=g+2;f.push(E,R,R,T,T,E)}}else return;const m=new(E0(f)?L0:C0)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function eA(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,p){n.drawElements(s,p,a,f*l),t.update(p,s,1)}function d(f,p,_){if(_===0)return;let y,m;if(r)y=n,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](s,p,a,f*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function tA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nA(n,e){return n[0]-e[0]}function iA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Qe,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==y){let X=function(){B.dispose(),s.delete(c),c.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),E===!0&&(M=3);let w=c.attributes.position.count*M,$=1;w>e.maxTextureSize&&($=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const J=new Float32Array(w*$*4*y),B=new w0(J,w,$,y);B.type=pi,B.needsUpdate=!0;const j=M*4;for(let Q=0;Q<y;Q++){const K=R[Q],D=T[Q],W=I[Q],H=w*$*4*Q;for(let N=0;N<K.count;N++){const k=N*j;g===!0&&(o.fromBufferAttribute(K,N),J[H+k+0]=o.x,J[H+k+1]=o.y,J[H+k+2]=o.z,J[H+k+3]=0),x===!0&&(o.fromBufferAttribute(D,N),J[H+k+4]=o.x,J[H+k+5]=o.y,J[H+k+6]=o.z,J[H+k+7]=0),E===!0&&(o.fromBufferAttribute(W,N),J[H+k+8]=o.x,J[H+k+9]=o.y,J[H+k+10]=o.z,J[H+k+11]=W.itemSize===4?o.w:1)}}m={count:y,texture:B,size:new be(w,$)},s.set(c,m),c.addEventListener("dispose",X)}let h=0;for(let g=0;g<f.length;g++)h+=f[g];const v=c.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let y=i[c.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[c.id]=y}for(let x=0;x<_;x++){const E=y[x];E[0]=x,E[1]=f[x]}y.sort(iA);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(nA);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const E=a[x],R=E[0],T=E[1];R!==Number.MAX_SAFE_INTEGER&&T?(m&&c.getAttribute("morphTarget"+x)!==m[R]&&c.setAttribute("morphTarget"+x,m[R]),h&&c.getAttribute("morphNormal"+x)!==h[R]&&c.setAttribute("morphNormal"+x,h[R]),r[x]=T,v+=T):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),h&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const g=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function sA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const U0=new Nt,O0=new w0,F0=new jS,k0=new D0,Jp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jp[r];if(s===void 0&&(s=new Float32Array(r),Jp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function su(n,e){let t=em[e];t===void 0&&(t=new Int32Array(e),em[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function lA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function uA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function cA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;im.set(i),n.uniformMatrix2fv(this.addr,!1,im),Tt(t,i)}}function dA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;nm.set(i),n.uniformMatrix3fv(this.addr,!1,nm),Tt(t,i)}}function fA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;tm.set(i),n.uniformMatrix4fv(this.addr,!1,tm),Tt(t,i)}}function hA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function _A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function yA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function xA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function SA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||U0,r)}function MA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||F0,r)}function EA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||k0,r)}function TA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||O0,r)}function AA(n){switch(n){case 5126:return oA;case 35664:return aA;case 35665:return lA;case 35666:return uA;case 35674:return cA;case 35675:return dA;case 35676:return fA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return yA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}function wA(n,e){n.uniform1fv(this.addr,e)}function RA(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function bA(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function CA(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function LA(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function PA(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function IA(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DA(n,e){n.uniform1iv(this.addr,e)}function NA(n,e){n.uniform2iv(this.addr,e)}function UA(n,e){n.uniform3iv(this.addr,e)}function OA(n,e){n.uniform4iv(this.addr,e)}function FA(n,e){n.uniform1uiv(this.addr,e)}function kA(n,e){n.uniform2uiv(this.addr,e)}function BA(n,e){n.uniform3uiv(this.addr,e)}function zA(n,e){n.uniform4uiv(this.addr,e)}function HA(n,e,t){const i=this.cache,r=e.length,s=su(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||U0,s[o])}function GA(n,e,t){const i=this.cache,r=e.length,s=su(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||F0,s[o])}function VA(n,e,t){const i=this.cache,r=e.length,s=su(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||k0,s[o])}function WA(n,e,t){const i=this.cache,r=e.length,s=su(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||O0,s[o])}function XA(n){switch(n){case 5126:return wA;case 35664:return RA;case 35665:return bA;case 35666:return CA;case 35674:return LA;case 35675:return PA;case 35676:return IA;case 5124:case 35670:return DA;case 35667:case 35671:return NA;case 35668:case 35672:return UA;case 35669:case 35673:return OA;case 5125:return FA;case 36294:return kA;case 36295:return BA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return WA}}class jA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=AA(t.type)}}class YA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=XA(t.type)}}class qA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function rm(n,e){n.seq.push(e),n.map[e.id]=e}function KA(n,e,t){const i=n.name,r=i.length;for(uc.lastIndex=0;;){const s=uc.exec(i),o=uc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){rm(t,u===void 0?new jA(a,n,e):new YA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new qA(a),rm(t,d)),t=d}}}class fl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);KA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function sm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let $A=0;function ZA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function QA(n){switch(n){case zn:return["Linear","( value )"];case Ee:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function om(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ZA(n.getShaderSource(e),o)}else return r}function JA(n,e){const t=QA(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ew(n,e){let t;switch(e){case $x:t="Linear";break;case Zx:t="Reinhard";break;case Qx:t="OptimizedCineon";break;case Jx:t="ACESFilmic";break;case eS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(So).join(`
`)}function nw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function So(n){return n!==""}function am(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(n){return n.replace(rw,ow)}const sw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ow(n,e){let t=Ue[e];if(t===void 0){const i=sw.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Md(t)}const aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(n){return n.replace(aw,lw)}function lw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===s0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function cw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case ks:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function fw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case l0:e="ENVMAP_BLENDING_MULTIPLY";break;case qx:e="ENVMAP_BLENDING_MIX";break;case Kx:e="ENVMAP_BLENDING_ADD";break}return e}function hw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uw(t),u=cw(t),c=dw(t),d=fw(t),f=hw(t),p=t.isWebGL2?"":tw(t),_=nw(s),y=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(So).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(So).join(`
`),h.length>0&&(h+=`
`)):(m=[cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),h=[p,cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Zi?ew("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,JA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=Md(o),o=am(o,t),o=lm(o,t),a=Md(a),a=am(a,t),a=lm(a,t),o=um(o),a=um(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+o,x=v+h+a,E=sm(r,r.VERTEX_SHADER,g),R=sm(r,r.FRAGMENT_SHADER,x);if(r.attachShader(y,E),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(y).trim(),w=r.getShaderInfoLog(E).trim(),$=r.getShaderInfoLog(R).trim();let J=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,E,R);else{const j=om(r,E,"vertex"),X=om(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+j+`
`+X)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||$==="")&&(B=!1);B&&(this.diagnostics={runnable:J,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:$,prefix:h}})}r.deleteShader(E),r.deleteShader(R);let T;this.getUniforms=function(){return T===void 0&&(T=new fl(r,y)),T};let I;return this.getAttributes=function(){return I===void 0&&(I=iw(r,y)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$A++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=R,this}let mw=0;class gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _w(e),t.set(e,i)),i}}class _w{constructor(e){this.id=mw++,this.code=e,this.usedTimes=0}}function vw(n,e,t,i,r,s,o){const a=new R0,l=new gw,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,w,$,J,B){const j=J.fog,X=B.geometry,Q=M.isMeshStandardMaterial?J.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),D=K&&K.mapping===iu?K.image.height:null,W=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const H=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,N=H!==void 0?H.length:0;let k=0;X.morphAttributes.position!==void 0&&(k=1),X.morphAttributes.normal!==void 0&&(k=2),X.morphAttributes.color!==void 0&&(k=3);let le,oe,pe,_e;if(W){const nt=Xn[W];le=nt.vertexShader,oe=nt.fragmentShader}else le=M.vertexShader,oe=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const Me=n.getRenderTarget(),ye=B.isInstancedMesh===!0,Ye=!!M.map,Lt=!!M.matcap,De=!!K,F=!!M.aoMap,yt=!!M.lightMap,xe=!!M.bumpMap,Le=!!M.normalMap,Ae=!!M.displacementMap,et=!!M.emissiveMap,Oe=!!M.metalnessMap,Pe=!!M.roughnessMap,Xe=M.anisotropy>0,xt=M.clearcoat>0,At=M.iridescence>0,b=M.sheen>0,S=M.transmission>0,G=Xe&&!!M.anisotropyMap,ie=xt&&!!M.clearcoatMap,ee=xt&&!!M.clearcoatNormalMap,re=xt&&!!M.clearcoatRoughnessMap,ve=At&&!!M.iridescenceMap,se=At&&!!M.iridescenceThicknessMap,V=b&&!!M.sheenColorMap,C=b&&!!M.sheenRoughnessMap,Z=!!M.specularMap,he=!!M.specularColorMap,ae=!!M.specularIntensityMap,fe=S&&!!M.transmissionMap,Ce=S&&!!M.thicknessMap,Ve=!!M.gradientMap,L=!!M.alphaMap,ce=M.alphaTest>0,z=!!M.alphaHash,ne=!!M.extensions,de=!!X.attributes.uv1,Fe=!!X.attributes.uv2,qe=!!X.attributes.uv3;let tt=Zi;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(tt=n.toneMapping),{isWebGL2:c,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:oe,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ye,instancingColor:ye&&B.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:zn,map:Ye,matcap:Lt,envMap:De,envMapMode:De&&K.mapping,envMapCubeUVHeight:D,aoMap:F,lightMap:yt,bumpMap:xe,normalMap:Le,displacementMap:f&&Ae,emissiveMap:et,normalMapObjectSpace:Le&&M.normalMapType===pS,normalMapTangentSpace:Le&&M.normalMapType===y0,metalnessMap:Oe,roughnessMap:Pe,anisotropy:Xe,anisotropyMap:G,clearcoat:xt,clearcoatMap:ie,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,iridescence:At,iridescenceMap:ve,iridescenceThicknessMap:se,sheen:b,sheenColorMap:V,sheenRoughnessMap:C,specularMap:Z,specularColorMap:he,specularIntensityMap:ae,transmission:S,transmissionMap:fe,thicknessMap:Ce,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===Rs,alphaMap:L,alphaTest:ce,alphaHash:z,combine:M.combine,mapUv:Ye&&y(M.map.channel),aoMapUv:F&&y(M.aoMap.channel),lightMapUv:yt&&y(M.lightMap.channel),bumpMapUv:xe&&y(M.bumpMap.channel),normalMapUv:Le&&y(M.normalMap.channel),displacementMapUv:Ae&&y(M.displacementMap.channel),emissiveMapUv:et&&y(M.emissiveMap.channel),metalnessMapUv:Oe&&y(M.metalnessMap.channel),roughnessMapUv:Pe&&y(M.roughnessMap.channel),anisotropyMapUv:G&&y(M.anisotropyMap.channel),clearcoatMapUv:ie&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:V&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:C&&y(M.sheenRoughnessMap.channel),specularMapUv:Z&&y(M.specularMap.channel),specularColorMapUv:he&&y(M.specularColorMap.channel),specularIntensityMapUv:ae&&y(M.specularIntensityMap.channel),transmissionMapUv:fe&&y(M.transmissionMap.channel),thicknessMapUv:Ce&&y(M.thicknessMap.channel),alphaMapUv:L&&y(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Le||Xe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:Fe,vertexUv3s:qe,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Ye||L),fog:!!j,useFog:M.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&$.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,useLegacyLights:n._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yn,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ne&&M.extensions.derivatives===!0,extensionFragDepth:ne&&M.extensions.fragDepth===!0,extensionDrawBuffers:ne&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)w.push($),w.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(v(w,M),g(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),M.push(a.mask)}function x(M){const w=_[M.type];let $;if(w){const J=Xn[w];$=rM.clone(J.uniforms)}else $=M.uniforms;return $}function E(M,w){let $;for(let J=0,B=u.length;J<B;J++){const j=u[J];if(j.cacheKey===w){$=j,++$.usedTimes;break}}return $===void 0&&($=new pw(n,w,M,s),u.push($)),$}function R(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:E,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:I}}function yw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function xw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,y,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,_,y,m){const h=o(d,f,p,_,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,y,m){const h=o(d,f,p,_,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||xw),i.length>1&&i.sort(f||dm),r.length>1&&r.sort(f||dm)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Sw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new fm,n.set(i,[o])):r>=s.length?(o=new fm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Mw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ie};break;case"SpotLight":t={position:new P,direction:new P,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Ew(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Tw=0;function Aw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ww(n,e){const t=new Mw,i=Ew(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new P);const s=new P,o=new Be,a=new Be;function l(c,d){let f=0,p=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,m=0,h=0,v=0,g=0,x=0,E=0,R=0,T=0,I=0;c.sort(Aw);const M=d===!0?Math.PI:1;for(let $=0,J=c.length;$<J;$++){const B=c[$],j=B.color,X=B.intensity,Q=B.distance,K=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=j.r*X*M,p+=j.g*X*M,_+=j.b*X*M;else if(B.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(B.sh.coefficients[D],X);else if(B.isDirectionalLight){const D=t.get(B);if(D.color.copy(B.color).multiplyScalar(B.intensity*M),B.castShadow){const W=B.shadow,H=i.get(B);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,r.directionalShadow[y]=H,r.directionalShadowMap[y]=K,r.directionalShadowMatrix[y]=B.shadow.matrix,x++}r.directional[y]=D,y++}else if(B.isSpotLight){const D=t.get(B);D.position.setFromMatrixPosition(B.matrixWorld),D.color.copy(j).multiplyScalar(X*M),D.distance=Q,D.coneCos=Math.cos(B.angle),D.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),D.decay=B.decay,r.spot[h]=D;const W=B.shadow;if(B.map&&(r.spotLightMap[T]=B.map,T++,W.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[h]=W.matrix,B.castShadow){const H=i.get(B);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,r.spotShadow[h]=H,r.spotShadowMap[h]=K,R++}h++}else if(B.isRectAreaLight){const D=t.get(B);D.color.copy(j).multiplyScalar(X),D.halfWidth.set(B.width*.5,0,0),D.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=D,v++}else if(B.isPointLight){const D=t.get(B);if(D.color.copy(B.color).multiplyScalar(B.intensity*M),D.distance=B.distance,D.decay=B.decay,B.castShadow){const W=B.shadow,H=i.get(B);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,r.pointShadow[m]=H,r.pointShadowMap[m]=K,r.pointShadowMatrix[m]=B.shadow.matrix,E++}r.point[m]=D,m++}else if(B.isHemisphereLight){const D=t.get(B);D.skyColor.copy(B.color).multiplyScalar(X*M),D.groundColor.copy(B.groundColor).multiplyScalar(X*M),r.hemi[g]=D,g++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const w=r.hash;(w.directionalLength!==y||w.pointLength!==m||w.spotLength!==h||w.rectAreaLength!==v||w.hemiLength!==g||w.numDirectionalShadows!==x||w.numPointShadows!==E||w.numSpotShadows!==R||w.numSpotMaps!==T)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=R+T-I,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=I,w.directionalLength=y,w.pointLength=m,w.spotLength=h,w.rectAreaLength=v,w.hemiLength=g,w.numDirectionalShadows=x,w.numPointShadows=E,w.numSpotShadows=R,w.numSpotMaps=T,r.version=Tw++)}function u(c,d){let f=0,p=0,_=0,y=0,m=0;const h=d.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const x=c[v];if(x.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),f++}else if(x.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),_++}else if(x.isRectAreaLight){const E=r.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function hm(n,e){const t=new ww(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Rw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new hm(n,e),t.set(s,[l])):o>=a.length?(l=new hm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class bw extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cw extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iw(n,e,t){let i=new Af;const r=new be,s=new be,o=new Qe,a=new bw({depthPacking:hS}),l=new Cw,u={},c=t.maxTextureSize,d={[Mi]:sn,[sn]:Mi,[Yn]:Yn},f=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Lw,fragmentShader:Pw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new En(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s0;let h=this.type;this.render=function(E,R,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),$=n.state;$.setBlending($i),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=h!==ui&&this.type===ui,B=h===ui&&this.type!==ui;for(let j=0,X=E.length;j<X;j++){const Q=E[j],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const D=K.getFrameExtents();if(r.multiply(D),s.copy(K.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/D.x),r.x=s.x*D.x,K.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/D.y),r.y=s.y*D.y,K.mapSize.y=s.y)),K.map===null||J===!0||B===!0){const H=this.type!==ui?{minFilter:bt,magFilter:bt}:{};K.map!==null&&K.map.dispose(),K.map=new Dr(r.x,r.y,H),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const W=K.getViewportCount();for(let H=0;H<W;H++){const N=K.getViewport(H);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),$.viewport(o),K.updateMatrices(Q,H),i=K.getFrustum(),x(R,T,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===ui&&v(K,T),K.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(I,M,w)};function v(E,R){const T=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Dr(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,T,f,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,T,p,y,null)}function g(E,R,T,I){let M=null;const w=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=T.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=M.uuid,J=R.uuid;let B=u[$];B===void 0&&(B={},u[$]=B);let j=B[J];j===void 0&&(j=M.clone(),B[J]=j),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,I===ui?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=n.properties.get(M);$.light=T}return M}function x(E,R,T,I,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ui)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const J=e.update(E),B=E.material;if(Array.isArray(B)){const j=J.groups;for(let X=0,Q=j.length;X<Q;X++){const K=j[X],D=B[K.materialIndex];if(D&&D.visible){const W=g(E,D,I,M);n.renderBufferDirect(T,null,J,W,E,K)}}}else if(B.visible){const j=g(E,B,I,M);n.renderBufferDirect(T,null,J,j,E,null)}}const $=E.children;for(let J=0,B=$.length;J<B;J++)x($[J],R,T,I,M)}}function Dw(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const ce=new Qe;let z=null;const ne=new Qe(0,0,0,0);return{setMask:function(de){z!==de&&!L&&(n.colorMask(de,de,de,de),z=de)},setLocked:function(de){L=de},setClear:function(de,Fe,qe,tt,Ai){Ai===!0&&(de*=tt,Fe*=tt,qe*=tt),ce.set(de,Fe,qe,tt),ne.equals(ce)===!1&&(n.clearColor(de,Fe,qe,tt),ne.copy(ce))},reset:function(){L=!1,z=null,ne.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,z=null,ne=null;return{setTest:function(de){de?Me(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(de){ce!==de&&!L&&(n.depthMask(de),ce=de)},setFunc:function(de){if(z!==de){switch(de){case Hx:n.depthFunc(n.NEVER);break;case Gx:n.depthFunc(n.ALWAYS);break;case Vx:n.depthFunc(n.LESS);break;case pd:n.depthFunc(n.LEQUAL);break;case Wx:n.depthFunc(n.EQUAL);break;case Xx:n.depthFunc(n.GEQUAL);break;case jx:n.depthFunc(n.GREATER);break;case Yx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z=de}},setLocked:function(de){L=de},setClear:function(de){ne!==de&&(n.clearDepth(de),ne=de)},reset:function(){L=!1,ce=null,z=null,ne=null}}}function o(){let L=!1,ce=null,z=null,ne=null,de=null,Fe=null,qe=null,tt=null,Ai=null;return{setTest:function(nt){L||(nt?Me(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!L&&(n.stencilMask(nt),ce=nt)},setFunc:function(nt,Gn,Vt){(z!==nt||ne!==Gn||de!==Vt)&&(n.stencilFunc(nt,Gn,Vt),z=nt,ne=Gn,de=Vt)},setOp:function(nt,Gn,Vt){(Fe!==nt||qe!==Gn||tt!==Vt)&&(n.stencilOp(nt,Gn,Vt),Fe=nt,qe=Gn,tt=Vt)},setLocked:function(nt){L=nt},setClear:function(nt){Ai!==nt&&(n.clearStencil(nt),Ai=nt)},reset:function(){L=!1,ce=null,z=null,ne=null,de=null,Fe=null,qe=null,tt=null,Ai=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},p={},_=new WeakMap,y=[],m=null,h=!1,v=null,g=null,x=null,E=null,R=null,T=null,I=null,M=!1,w=null,$=null,J=null,B=null,j=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,K=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),Q=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Q=K>=2);let W=null,H={};const N=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),le=new Qe().fromArray(N),oe=new Qe().fromArray(k);function pe(L,ce,z,ne){const de=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(L,Fe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<z;qe++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ce,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ce+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Fe}const _e={};_e[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(n.DEPTH_TEST),l.setFunc(pd),Ae(!1),et(Zh),Me(n.CULL_FACE),xe($i);function Me(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function ye(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function Ye(L,ce){return p[L]!==ce?(n.bindFramebuffer(L,ce),p[L]=ce,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ce),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ce)),!0):!1}function Lt(L,ce){let z=y,ne=!1;if(L)if(z=_.get(ce),z===void 0&&(z=[],_.set(ce,z)),L.isWebGLMultipleRenderTargets){const de=L.texture;if(z.length!==de.length||z[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,qe=de.length;Fe<qe;Fe++)z[Fe]=n.COLOR_ATTACHMENT0+Fe;z.length=de.length,ne=!0}}else z[0]!==n.COLOR_ATTACHMENT0&&(z[0]=n.COLOR_ATTACHMENT0,ne=!0);else z[0]!==n.BACK&&(z[0]=n.BACK,ne=!0);ne&&(t.isWebGL2?n.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}function De(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const F={[as]:n.FUNC_ADD,[Lx]:n.FUNC_SUBTRACT,[Px]:n.FUNC_REVERSE_SUBTRACT};if(i)F[tp]=n.MIN,F[np]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(F[tp]=L.MIN_EXT,F[np]=L.MAX_EXT)}const yt={[Ix]:n.ZERO,[Dx]:n.ONE,[Nx]:n.SRC_COLOR,[o0]:n.SRC_ALPHA,[zx]:n.SRC_ALPHA_SATURATE,[kx]:n.DST_COLOR,[Ox]:n.DST_ALPHA,[Ux]:n.ONE_MINUS_SRC_COLOR,[a0]:n.ONE_MINUS_SRC_ALPHA,[Bx]:n.ONE_MINUS_DST_COLOR,[Fx]:n.ONE_MINUS_DST_ALPHA};function xe(L,ce,z,ne,de,Fe,qe,tt){if(L===$i){h===!0&&(ye(n.BLEND),h=!1);return}if(h===!1&&(Me(n.BLEND),h=!0),L!==Cx){if(L!==v||tt!==M){if((g!==as||R!==as)&&(n.blendEquation(n.FUNC_ADD),g=as,R=as),tt)switch(L){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qh:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ep:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ep:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,E=null,T=null,I=null,v=L,M=tt}return}de=de||ce,Fe=Fe||z,qe=qe||ne,(ce!==g||de!==R)&&(n.blendEquationSeparate(F[ce],F[de]),g=ce,R=de),(z!==x||ne!==E||Fe!==T||qe!==I)&&(n.blendFuncSeparate(yt[z],yt[ne],yt[Fe],yt[qe]),x=z,E=ne,T=Fe,I=qe),v=L,M=!1}function Le(L,ce){L.side===Yn?ye(n.CULL_FACE):Me(n.CULL_FACE);let z=L.side===sn;ce&&(z=!z),Ae(z),L.blending===Rs&&L.transparent===!1?xe($i):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ne=L.stencilWrite;u.setTest(ne),ne&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){w!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),w=L)}function et(L){L!==wx?(Me(n.CULL_FACE),L!==$&&(L===Zh?n.cullFace(n.BACK):L===Rx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),$=L}function Oe(L){L!==J&&(Q&&n.lineWidth(L),J=L)}function Pe(L,ce,z){L?(Me(n.POLYGON_OFFSET_FILL),(B!==ce||j!==z)&&(n.polygonOffset(ce,z),B=ce,j=z)):ye(n.POLYGON_OFFSET_FILL)}function Xe(L){L?Me(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function xt(L){L===void 0&&(L=n.TEXTURE0+X-1),W!==L&&(n.activeTexture(L),W=L)}function At(L,ce,z){z===void 0&&(W===null?z=n.TEXTURE0+X-1:z=W);let ne=H[z];ne===void 0&&(ne={type:void 0,texture:void 0},H[z]=ne),(ne.type!==L||ne.texture!==ce)&&(W!==z&&(n.activeTexture(z),W=z),n.bindTexture(L,ce||_e[L]),ne.type=L,ne.texture=ce)}function b(){const L=H[W];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){le.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function ae(L){oe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function fe(L,ce){let z=d.get(ce);z===void 0&&(z=new WeakMap,d.set(ce,z));let ne=z.get(L);ne===void 0&&(ne=n.getUniformBlockIndex(ce,L.name),z.set(L,ne))}function Ce(L,ce){const ne=d.get(ce).get(L);c.get(ce)!==ne&&(n.uniformBlockBinding(ce,ne,L.__bindingPointIndex),c.set(ce,ne))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},W=null,H={},p={},_=new WeakMap,y=[],m=null,h=!1,v=null,g=null,x=null,E=null,R=null,T=null,I=null,M=!1,w=null,$=null,J=null,B=null,j=null,le.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:ye,bindFramebuffer:Ye,drawBuffers:Lt,useProgram:De,setBlending:xe,setMaterial:Le,setFlipSided:Ae,setCullFace:et,setLineWidth:Oe,setPolygonOffset:Pe,setScissorTest:Xe,activeTexture:xt,bindTexture:At,unbindTexture:b,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:C,texImage3D:Z,updateUBOMapping:fe,uniformBlockBinding:Ce,texStorage2D:se,texStorage3D:V,texSubImage2D:ie,texSubImage3D:ee,compressedTexSubImage2D:re,compressedTexSubImage3D:ve,scissor:he,viewport:ae,reset:Ve}}function Nw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,S){return h?new OffscreenCanvas(b,S):Jo("canvas")}function g(b,S,G,ie){let ee=1;if((b.width>ie||b.height>ie)&&(ee=ie/Math.max(b.width,b.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=S?Bl:Math.floor,ve=re(ee*b.width),se=re(ee*b.height);y===void 0&&(y=v(ve,se));const V=G?v(ve,se):y;return V.width=ve,V.height=se,V.getContext("2d").drawImage(b,0,0,ve,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+se+")."),V}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return Sd(b.width)&&Sd(b.height)}function E(b){return a?!1:b.wrapS!==xn||b.wrapT!==xn||b.minFilter!==bt&&b.minFilter!==Jt}function R(b,S){return b.generateMipmaps&&S&&b.minFilter!==bt&&b.minFilter!==Jt}function T(b){n.generateMipmap(b)}function I(b,S,G,ie,ee=!1){if(a===!1)return S;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=S;return S===n.RED&&(G===n.FLOAT&&(re=n.R32F),G===n.HALF_FLOAT&&(re=n.R16F),G===n.UNSIGNED_BYTE&&(re=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(re=n.R8UI),G===n.UNSIGNED_SHORT&&(re=n.R16UI),G===n.UNSIGNED_INT&&(re=n.R32UI),G===n.BYTE&&(re=n.R8I),G===n.SHORT&&(re=n.R16I),G===n.INT&&(re=n.R32I)),S===n.RG&&(G===n.FLOAT&&(re=n.RG32F),G===n.HALF_FLOAT&&(re=n.RG16F),G===n.UNSIGNED_BYTE&&(re=n.RG8)),S===n.RGBA&&(G===n.FLOAT&&(re=n.RGBA32F),G===n.HALF_FLOAT&&(re=n.RGBA16F),G===n.UNSIGNED_BYTE&&(re=ie===Ee&&ee===!1?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)),(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(b,S,G){return R(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==bt&&b.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function w(b){return b===bt||b===_d||b===dl?n.NEAREST:n.LINEAR}function $(b){const S=b.target;S.removeEventListener("dispose",$),B(S),S.isVideoTexture&&_.delete(S)}function J(b){const S=b.target;S.removeEventListener("dispose",J),X(S)}function B(b){const S=i.get(b);if(S.__webglInit===void 0)return;const G=b.source,ie=m.get(G);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&j(b),Object.keys(ie).length===0&&m.delete(G)}i.remove(b)}function j(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const G=b.source,ie=m.get(G);delete ie[S.__cacheKey],o.memory.textures--}function X(b){const S=b.texture,G=i.get(b),ie=i.get(S);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(G.__webglFramebuffer[ee]))for(let re=0;re<G.__webglFramebuffer[ee].length;re++)n.deleteFramebuffer(G.__webglFramebuffer[ee][re]);else n.deleteFramebuffer(G.__webglFramebuffer[ee]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ee])}else{if(Array.isArray(G.__webglFramebuffer))for(let ee=0;ee<G.__webglFramebuffer.length;ee++)n.deleteFramebuffer(G.__webglFramebuffer[ee]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,re=S.length;ee<re;ee++){const ve=i.get(S[ee]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(b)}let Q=0;function K(){Q=0}function D(){const b=Q;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Q+=1,b}function W(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function H(b,S){const G=i.get(b);if(b.isVideoTexture&&xt(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const ie=b.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(G,b,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function N(b,S){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Ye(G,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function k(b,S){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Ye(G,b,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function le(b,S){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Lt(G,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const oe={[Bs]:n.REPEAT,[xn]:n.CLAMP_TO_EDGE,[Fl]:n.MIRRORED_REPEAT},pe={[bt]:n.NEAREST,[_d]:n.NEAREST_MIPMAP_NEAREST,[dl]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[c0]:n.LINEAR_MIPMAP_NEAREST,[Ir]:n.LINEAR_MIPMAP_LINEAR},_e={[gS]:n.NEVER,[ES]:n.ALWAYS,[_S]:n.LESS,[yS]:n.LEQUAL,[vS]:n.EQUAL,[MS]:n.GEQUAL,[xS]:n.GREATER,[SS]:n.NOTEQUAL};function Me(b,S,G){if(G?(n.texParameteri(b,n.TEXTURE_WRAP_S,oe[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,oe[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,oe[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,pe[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,pe[S.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==xn||S.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,w(S.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==bt&&S.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===bt||S.minFilter!==dl&&S.minFilter!==Ir||S.type===pi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Zo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(b,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ye(b,S){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",$));const ie=S.source;let ee=m.get(ie);ee===void 0&&(ee={},m.set(ie,ee));const re=W(S);if(re!==b.__cacheKey){ee[re]===void 0&&(ee[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[re].usedTimes++;const ve=ee[b.__cacheKey];ve!==void 0&&(ee[b.__cacheKey].usedTimes--,ve.usedTimes===0&&j(S)),b.__cacheKey=re,b.__webglTexture=ee[re].texture}return G}function Ye(b,S,G){let ie=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=n.TEXTURE_3D);const ee=ye(b,S),re=S.source;t.bindTexture(ie,b.__webglTexture,n.TEXTURE0+G);const ve=i.get(re);if(re.version!==ve.__version||ee===!0){t.activeTexture(n.TEXTURE0+G),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const se=E(S)&&x(S.image)===!1;let V=g(S.image,se,!1,c);V=At(S,V);const C=x(V)||a,Z=s.convert(S.format,S.colorSpace);let he=s.convert(S.type),ae=I(S.internalFormat,Z,he,S.colorSpace);Me(ie,S,C);let fe;const Ce=S.mipmaps,Ve=a&&S.isVideoTexture!==!0,L=ve.__version===void 0||ee===!0,ce=M(S,V,C);if(S.isDepthTexture)ae=n.DEPTH_COMPONENT,a?S.type===pi?ae=n.DEPTH_COMPONENT32F:S.type===Hi?ae=n.DEPTH_COMPONENT24:S.type===Er?ae=n.DEPTH24_STENCIL8:ae=n.DEPTH_COMPONENT16:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Tr&&ae===n.DEPTH_COMPONENT&&S.type!==Ef&&S.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Hi,he=s.convert(S.type)),S.format===zs&&ae===n.DEPTH_COMPONENT&&(ae=n.DEPTH_STENCIL,S.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Er,he=s.convert(S.type))),L&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ae,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,ae,V.width,V.height,0,Z,he,null));else if(S.isDataTexture)if(Ce.length>0&&C){Ve&&L&&t.texStorage2D(n.TEXTURE_2D,ce,ae,Ce[0].width,Ce[0].height);for(let z=0,ne=Ce.length;z<ne;z++)fe=Ce[z],Ve?t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,Z,he,fe.data):t.texImage2D(n.TEXTURE_2D,z,ae,fe.width,fe.height,0,Z,he,fe.data);S.generateMipmaps=!1}else Ve?(L&&t.texStorage2D(n.TEXTURE_2D,ce,ae,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,Z,he,V.data)):t.texImage2D(n.TEXTURE_2D,0,ae,V.width,V.height,0,Z,he,V.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ae,Ce[0].width,Ce[0].height,V.depth);for(let z=0,ne=Ce.length;z<ne;z++)fe=Ce[z],S.format!==Sn?Z!==null?Ve?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,V.depth,Z,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,ae,fe.width,fe.height,V.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,V.depth,Z,he,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,ae,fe.width,fe.height,V.depth,0,Z,he,fe.data)}else{Ve&&L&&t.texStorage2D(n.TEXTURE_2D,ce,ae,Ce[0].width,Ce[0].height);for(let z=0,ne=Ce.length;z<ne;z++)fe=Ce[z],S.format!==Sn?Z!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,Z,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,z,ae,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,Z,he,fe.data):t.texImage2D(n.TEXTURE_2D,z,ae,fe.width,fe.height,0,Z,he,fe.data)}else if(S.isDataArrayTexture)Ve?(L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ae,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Z,he,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,V.width,V.height,V.depth,0,Z,he,V.data);else if(S.isData3DTexture)Ve?(L&&t.texStorage3D(n.TEXTURE_3D,ce,ae,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Z,he,V.data)):t.texImage3D(n.TEXTURE_3D,0,ae,V.width,V.height,V.depth,0,Z,he,V.data);else if(S.isFramebufferTexture){if(L)if(Ve)t.texStorage2D(n.TEXTURE_2D,ce,ae,V.width,V.height);else{let z=V.width,ne=V.height;for(let de=0;de<ce;de++)t.texImage2D(n.TEXTURE_2D,de,ae,z,ne,0,Z,he,null),z>>=1,ne>>=1}}else if(Ce.length>0&&C){Ve&&L&&t.texStorage2D(n.TEXTURE_2D,ce,ae,Ce[0].width,Ce[0].height);for(let z=0,ne=Ce.length;z<ne;z++)fe=Ce[z],Ve?t.texSubImage2D(n.TEXTURE_2D,z,0,0,Z,he,fe):t.texImage2D(n.TEXTURE_2D,z,ae,Z,he,fe);S.generateMipmaps=!1}else Ve?(L&&t.texStorage2D(n.TEXTURE_2D,ce,ae,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z,he,V)):t.texImage2D(n.TEXTURE_2D,0,ae,Z,he,V);R(S,C)&&T(ie),ve.__version=re.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Lt(b,S,G){if(S.image.length!==6)return;const ie=ye(b,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+G);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){t.activeTexture(n.TEXTURE0+G),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,V=[];for(let z=0;z<6;z++)!ve&&!se?V[z]=g(S.image[z],!1,!0,u):V[z]=se?S.image[z].image:S.image[z],V[z]=At(S,V[z]);const C=V[0],Z=x(C)||a,he=s.convert(S.format,S.colorSpace),ae=s.convert(S.type),fe=I(S.internalFormat,he,ae,S.colorSpace),Ce=a&&S.isVideoTexture!==!0,Ve=re.__version===void 0||ie===!0;let L=M(S,C,Z);Me(n.TEXTURE_CUBE_MAP,S,Z);let ce;if(ve){Ce&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,L,fe,C.width,C.height);for(let z=0;z<6;z++){ce=V[z].mipmaps;for(let ne=0;ne<ce.length;ne++){const de=ce[ne];S.format!==Sn?he!==null?Ce?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,fe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,de.width,de.height,he,ae,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,fe,de.width,de.height,0,he,ae,de.data)}}}else{ce=S.mipmaps,Ce&&Ve&&(ce.length>0&&L++,t.texStorage2D(n.TEXTURE_CUBE_MAP,L,fe,V[0].width,V[0].height));for(let z=0;z<6;z++)if(se){Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,V[z].width,V[z].height,he,ae,V[z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,fe,V[z].width,V[z].height,0,he,ae,V[z].data);for(let ne=0;ne<ce.length;ne++){const Fe=ce[ne].image[z].image;Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Fe.width,Fe.height,he,ae,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,fe,Fe.width,Fe.height,0,he,ae,Fe.data)}}else{Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,he,ae,V[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,fe,he,ae,V[z]);for(let ne=0;ne<ce.length;ne++){const de=ce[ne];Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,he,ae,de.image[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,fe,he,ae,de.image[z])}}}R(S,Z)&&T(n.TEXTURE_CUBE_MAP),re.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function De(b,S,G,ie,ee,re){const ve=s.convert(G.format,G.colorSpace),se=s.convert(G.type),V=I(G.internalFormat,ve,se,G.colorSpace);if(!i.get(S).__hasExternalTextures){const Z=Math.max(1,S.width>>re),he=Math.max(1,S.height>>re);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,V,Z,he,S.depth,0,ve,se,null):t.texImage2D(ee,re,V,Z,he,0,ve,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Xe(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ee,i.get(G).__webglTexture,0,Pe(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ee,i.get(G).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(b,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let ie=n.DEPTH_COMPONENT16;if(G||Xe(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===pi?ie=n.DEPTH_COMPONENT32F:ee.type===Hi&&(ie=n.DEPTH_COMPONENT24));const re=Pe(S);Xe(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ie,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ie,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Pe(S);G&&Xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,S.width,S.height):Xe(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],ve=s.convert(re.format,re.colorSpace),se=s.convert(re.type),V=I(re.internalFormat,ve,se,re.colorSpace),C=Pe(S);G&&Xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,V,S.width,S.height):Xe(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,V,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,V,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,ee=Pe(S);if(S.depthTexture.format===Tr)Xe(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(S.depthTexture.format===zs)Xe(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function xe(b){const S=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");yt(S.__webglFramebuffer,b)}else if(G){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=n.createRenderbuffer(),F(S.__webglDepthbuffer[ie],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),F(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(b,S,G){const ie=i.get(b);S!==void 0&&De(ie.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&xe(b)}function Ae(b){const S=b.texture,G=i.get(b),ie=i.get(S);b.addEventListener("dispose",J),b.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=S.version,o.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ve=x(b)||a;if(ee){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let V=0;V<S.mipmaps.length;V++)G.__webglFramebuffer[se][V]=n.createFramebuffer()}else G.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)G.__webglFramebuffer[se]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){const se=b.texture;for(let V=0,C=se.length;V<C;V++){const Z=i.get(se[V]);Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Xe(b)===!1){const se=re?S:[S];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let V=0;V<se.length;V++){const C=se[V];G.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[V]);const Z=s.convert(C.format,C.colorSpace),he=s.convert(C.type),ae=I(C.internalFormat,Z,he,C.colorSpace,b.isXRRenderTarget===!0),fe=Pe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,G.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),F(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Me(n.TEXTURE_CUBE_MAP,S,ve);for(let se=0;se<6;se++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let V=0;V<S.mipmaps.length;V++)De(G.__webglFramebuffer[se][V],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,V);else De(G.__webglFramebuffer[se],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);R(S,ve)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const se=b.texture;for(let V=0,C=se.length;V<C;V++){const Z=se[V],he=i.get(Z);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),Me(n.TEXTURE_2D,Z,ve),De(G.__webglFramebuffer,b,Z,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,0),R(Z,ve)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ie.__webglTexture),Me(se,S,ve),a&&S.mipmaps&&S.mipmaps.length>0)for(let V=0;V<S.mipmaps.length;V++)De(G.__webglFramebuffer[V],b,S,n.COLOR_ATTACHMENT0,se,V);else De(G.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,se,0);R(S,ve)&&T(se),t.unbindTexture()}b.depthBuffer&&xe(b)}function et(b){const S=x(b)||a,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0,ee=G.length;ie<ee;ie++){const re=G[ie];if(R(re,S)){const ve=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(re).__webglTexture;t.bindTexture(ve,se),T(ve),t.unbindTexture()}}}function Oe(b){if(a&&b.samples>0&&Xe(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,ie=b.height;let ee=n.COLOR_BUFFER_BIT;const re=[],ve=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(b),V=b.isWebGLMultipleRenderTargets===!0;if(V)for(let C=0;C<S.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let C=0;C<S.length;C++){re.push(n.COLOR_ATTACHMENT0+C),b.depthBuffer&&re.push(ve);const Z=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Z===!1&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[C]),Z===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),V){const he=i.get(S[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,G,ie,0,0,G,ie,ee,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let C=0;C<S.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,se.__webglColorRenderbuffer[C]);const Z=i.get(S[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Pe(b){return Math.min(d,b.samples)}function Xe(b){const S=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xt(b){const S=o.render.frame;_.get(b)!==S&&(_.set(b,S),b.update())}function At(b,S){const G=b.colorSpace,ie=b.format,ee=b.type;return b.isCompressedTexture===!0||b.format===xd||G!==zn&&G!==wr&&(G===Ee?a===!1?e.has("EXT_sRGB")===!0&&ie===Sn?(b.format=xd,b.minFilter=Jt,b.generateMipmaps=!1):S=T0.sRGBToLinear(S):(ie!==Sn||ee!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=le,this.rebindTextures=Le,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Xe}function Uw(n,e,t){const i=t.isWebGL2;function r(s,o=wr){let a;if(s===Qi)return n.UNSIGNED_BYTE;if(s===f0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===h0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===tS)return n.BYTE;if(s===nS)return n.SHORT;if(s===Ef)return n.UNSIGNED_SHORT;if(s===d0)return n.INT;if(s===Hi)return n.UNSIGNED_INT;if(s===pi)return n.FLOAT;if(s===Zo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===iS)return n.ALPHA;if(s===Sn)return n.RGBA;if(s===rS)return n.LUMINANCE;if(s===sS)return n.LUMINANCE_ALPHA;if(s===Tr)return n.DEPTH_COMPONENT;if(s===zs)return n.DEPTH_STENCIL;if(s===xd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===oS)return n.RED;if(s===p0)return n.RED_INTEGER;if(s===aS)return n.RG;if(s===m0)return n.RG_INTEGER;if(s===g0)return n.RGBA_INTEGER;if(s===Fu||s===ku||s===Bu||s===zu)if(o===Ee)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ip||s===rp||s===sp||s===op)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ip)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===op)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ap||s===lp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ap)return o===Ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===up||s===cp||s===dp||s===fp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===yp||s===xp||s===Sp||s===Mp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===up)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_p)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mp)return o===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Hu)return o===Ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===uS||s===Ep||s===Tp||s===Ap)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Hu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ep)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ap)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Ow extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xr extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fw={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kw extends Nt{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Tr,c!==Tr&&c!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Tr&&(i=Hi),i===void 0&&c===zs&&(i=Er),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bw extends kr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const y=t.getContextAttributes();let m=null,h=null;const v=[],g=[],x=new qt;x.layers.enable(1),x.viewport=new Qe;const E=new qt;E.layers.enable(2),E.viewport=new Qe;const R=[x,E],T=new Ow;T.layers.enable(1),T.layers.enable(2);let I=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=v[N];return k===void 0&&(k=new cc,v[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=v[N];return k===void 0&&(k=new cc,v[N]=k),k.getGripSpace()},this.getHand=function(N){let k=v[N];return k===void 0&&(k=new cc,v[N]=k),k.getHandSpace()};function w(N){const k=g.indexOf(N.inputSource);if(k===-1)return;const le=v[k];le!==void 0&&(le.update(N.inputSource,N.frame,u||o),le.dispatchEvent({type:N.type,data:N.inputSource}))}function $(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",J);for(let N=0;N<v.length;N++){const k=g[N];k!==null&&(g[N]=null,v[N].disconnect(k))}I=null,M=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,h=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",$),r.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:p}),h=new Dr(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let k=null,le=null,oe=null;y.depth&&(oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=y.stencil?zs:Tr,le=y.stencil?Er:Hi);const pe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),h=new Dr(f.textureWidth,f.textureHeight,{format:Sn,type:Qi,depthTexture:new kw(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const _e=e.properties.get(h);_e.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(N){for(let k=0;k<N.removed.length;k++){const le=N.removed[k],oe=g.indexOf(le);oe>=0&&(g[oe]=null,v[oe].disconnect(le))}for(let k=0;k<N.added.length;k++){const le=N.added[k];let oe=g.indexOf(le);if(oe===-1){for(let _e=0;_e<v.length;_e++)if(_e>=g.length){g.push(le),oe=_e;break}else if(g[_e]===null){g[_e]=le,oe=_e;break}if(oe===-1)break}const pe=v[oe];pe&&pe.connect(le)}}const B=new P,j=new P;function X(N,k,le){B.setFromMatrixPosition(k.matrixWorld),j.setFromMatrixPosition(le.matrixWorld);const oe=B.distanceTo(j),pe=k.projectionMatrix.elements,_e=le.projectionMatrix.elements,Me=pe[14]/(pe[10]-1),ye=pe[14]/(pe[10]+1),Ye=(pe[9]+1)/pe[5],Lt=(pe[9]-1)/pe[5],De=(pe[8]-1)/pe[0],F=(_e[8]+1)/_e[0],yt=Me*De,xe=Me*F,Le=oe/(-De+F),Ae=Le*-De;k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ae),N.translateZ(Le),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const et=Me+Le,Oe=ye+Le,Pe=yt-Ae,Xe=xe+(oe-Ae),xt=Ye*ye/Oe*et,At=Lt*ye/Oe*et;N.projectionMatrix.makePerspective(Pe,Xe,xt,At,et,Oe),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function Q(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;T.near=E.near=x.near=N.near,T.far=E.far=x.far=N.far,(I!==T.near||M!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,M=T.far);const k=N.parent,le=T.cameras;Q(T,k);for(let oe=0;oe<le.length;oe++)Q(le[oe],k);le.length===2?X(T,x,E):T.projectionMatrix.copy(x.projectionMatrix),K(N,T,k)};function K(N,k,le){le===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(le.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0);const oe=N.children;for(let pe=0,_e=oe.length;pe<_e;pe++)oe[pe].updateMatrixWorld(!0);N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Gs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let D=null;function W(N,k){if(c=k.getViewerPose(u||o),_=k,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let oe=!1;le.length!==T.cameras.length&&(T.cameras.length=0,oe=!0);for(let pe=0;pe<le.length;pe++){const _e=le[pe];let Me=null;if(p!==null)Me=p.getViewport(_e);else{const Ye=d.getViewSubImage(f,_e);Me=Ye.viewport,pe===0&&(e.setRenderTargetTextures(h,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(h))}let ye=R[pe];ye===void 0&&(ye=new qt,ye.layers.enable(pe),ye.viewport=new Qe,R[pe]=ye),ye.matrix.fromArray(_e.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(_e.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),pe===0&&(T.matrix.copy(ye.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),oe===!0&&T.cameras.push(ye)}}for(let le=0;le<v.length;le++){const oe=g[le],pe=v[le];oe!==null&&pe!==void 0&&pe.update(oe,k,u||o)}D&&D(N,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const H=new N0;H.setAnimationLoop(W),this.setAnimationLoop=function(N){D=N},this.dispose=function(){}}}function zw(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,P0(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===sn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function u(v,g){let x=r[v.id];x===void 0&&(_(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(v,E);const R=e.render.frame;s[v.id]!==R&&(f(v),s[v.id]=R)}function c(v){const g=d();v.__bindingPointIndex=g;const x=n.createBuffer(),E=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],x=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let R=0,T=x.length;R<T;R++){const I=x[R];if(p(I,R,E)===!0){const M=I.__offset,w=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let J=0;J<w.length;J++){const B=w[J],j=y(B);typeof B=="number"?(I.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,M+$,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=B.elements[0],I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=B.elements[0],I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=B.elements[0]):(B.toArray(I.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,I.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,g,x){const E=v.value;if(x[g]===void 0){if(typeof E=="number")x[g]=E;else{const R=Array.isArray(E)?E:[E],T=[];for(let I=0;I<R.length;I++)T.push(R[I].clone());x[g]=T}return!0}else if(typeof E=="number"){if(x[g]!==E)return x[g]=E,!0}else{const R=Array.isArray(x[g])?x[g]:[x[g]],T=Array.isArray(E)?E:[E];for(let I=0;I<R.length;I++){const M=R[I];if(M.equals(T[I])===!1)return M.copy(T[I]),!0}}return!1}function _(v){const g=v.uniforms;let x=0;const E=16;let R=0;for(let T=0,I=g.length;T<I;T++){const M=g[T],w={boundary:0,storage:0},$=Array.isArray(M.value)?M.value:[M.value];for(let J=0,B=$.length;J<B;J++){const j=$[J],X=y(j);w.boundary+=X.boundary,w.storage+=X.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,T>0){R=x%E;const J=E-R;R!==0&&J-w.boundary<0&&(x+=E-R,M.__offset=x)}x+=w.storage}return R=x%E,R>0&&(x+=E-R),v.__size=x,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}function Gw(){const n=Jo("canvas");return n.style.display="block",n}class B0{constructor(e={}){const{canvas:t=Gw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const g=this;let x=!1,E=0,R=0,T=null,I=-1,M=null;const w=new Qe,$=new Qe;let J=null;const B=new Ie(0);let j=0,X=t.width,Q=t.height,K=1,D=null,W=null;const H=new Qe(0,0,X,Q),N=new Qe(0,0,X,Q);let k=!1;const le=new Af;let oe=!1,pe=!1,_e=null;const Me=new Be,ye=new be,Ye=new P,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return T===null?K:1}let F=i;function yt(A,O){for(let q=0;q<A.length;q++){const U=A[q],Y=t.getContext(U,O);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mf}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",ne,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),F=yt(O,A),F===null)throw yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,Le,Ae,et,Oe,Pe,Xe,xt,At,b,S,G,ie,ee,re,ve,se,V,C,Z,he,ae,fe,Ce;function Ve(){xe=new QT(F),Le=new jT(F,xe,e),xe.init(Le),ae=new Uw(F,xe,Le),Ae=new Dw(F,xe,Le),et=new tA(F),Oe=new yw,Pe=new Nw(F,xe,Ae,Oe,Le,ae,et),Xe=new qT(g),xt=new ZT(g),At=new dM(F,Le),fe=new WT(F,xe,At,Le),b=new JT(F,At,et,fe),S=new sA(F,b,At,et),C=new rA(F,Le,Pe),ve=new YT(Oe),G=new vw(g,Xe,xt,xe,Le,fe,ve),ie=new zw(g,Oe),ee=new Sw,re=new Rw(xe,Le),V=new VT(g,Xe,xt,Ae,S,f,l),se=new Iw(g,S,Le),Ce=new Hw(F,et,Le,Ae),Z=new XT(F,xe,et,Le),he=new eA(F,xe,et,Le),et.programs=G.programs,g.capabilities=Le,g.extensions=xe,g.properties=Oe,g.renderLists=ee,g.shadowMap=se,g.state=Ae,g.info=et}Ve();const L=new Bw(g,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(X,Q,!1))},this.getSize=function(A){return A.set(X,Q)},this.setSize=function(A,O,q=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,Q=O,t.width=Math.floor(A*K),t.height=Math.floor(O*K),q===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(X*K,Q*K).floor()},this.setDrawingBufferSize=function(A,O,q){X=A,Q=O,K=q,t.width=Math.floor(A*q),t.height=Math.floor(O*q),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,O,q,U){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,O,q,U),Ae.viewport(w.copy(H).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,O,q,U){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,O,q,U),Ae.scissor($.copy(N).multiplyScalar(K).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(A){Ae.setScissorTest(k=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(A=!0,O=!0,q=!0){let U=0;if(A){let Y=!1;if(T!==null){const ge=T.texture.format;Y=ge===g0||ge===m0||ge===p0}if(Y){const ge=T.texture.type,Se=ge===Qi||ge===Hi||ge===Ef||ge===Er||ge===f0||ge===h0,we=V.getClearColor(),Re=V.getClearAlpha(),ze=we.r,Te=we.g,Ne=we.b;Se?(p[0]=ze,p[1]=Te,p[2]=Ne,p[3]=Re,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=ze,_[1]=Te,_[2]=Ne,_[3]=Re,F.clearBufferiv(F.COLOR,0,_))}else U|=F.COLOR_BUFFER_BIT}O&&(U|=F.DEPTH_BUFFER_BIT),q&&(U|=F.STENCIL_BUFFER_BIT),F.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ee.dispose(),re.dispose(),Oe.dispose(),Xe.dispose(),xt.dispose(),S.dispose(),fe.dispose(),Ce.dispose(),G.dispose(),L.dispose(),L.removeEventListener("sessionstart",nt),L.removeEventListener("sessionend",Gn),_e&&(_e.dispose(),_e=null),Vt.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=et.autoReset,O=se.enabled,q=se.autoUpdate,U=se.needsUpdate,Y=se.type;Ve(),et.autoReset=A,se.enabled=O,se.autoUpdate=q,se.needsUpdate=U,se.type=Y}function ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function de(A){const O=A.target;O.removeEventListener("dispose",de),Fe(O)}function Fe(A){qe(A),Oe.remove(A)}function qe(A){const O=Oe.get(A).programs;O!==void 0&&(O.forEach(function(q){G.releaseProgram(q)}),A.isShaderMaterial&&G.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,q,U,Y,ge){O===null&&(O=Lt);const Se=Y.isMesh&&Y.matrixWorld.determinant()<0,we=$0(A,O,q,U,Y);Ae.setMaterial(U,Se);let Re=q.index,ze=1;if(U.wireframe===!0){if(Re=b.getWireframeAttribute(q),Re===void 0)return;ze=2}const Te=q.drawRange,Ne=q.attributes.position;let ct=Te.start*ze,ft=(Te.start+Te.count)*ze;ge!==null&&(ct=Math.max(ct,ge.start*ze),ft=Math.min(ft,(ge.start+ge.count)*ze)),Re!==null?(ct=Math.max(ct,0),ft=Math.min(ft,Re.count)):Ne!=null&&(ct=Math.max(ct,0),ft=Math.min(ft,Ne.count));const mn=ft-ct;if(mn<0||mn===1/0)return;fe.setup(Y,U,we,q,Re);let ti,pt=Z;if(Re!==null&&(ti=At.get(Re),pt=he,pt.setIndex(ti)),Y.isMesh)U.wireframe===!0?(Ae.setLineWidth(U.wireframeLinewidth*De()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(Y.isLine){let He=U.linewidth;He===void 0&&(He=1),Ae.setLineWidth(He*De()),Y.isLineSegments?pt.setMode(F.LINES):Y.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else Y.isPoints?pt.setMode(F.POINTS):Y.isSprite&&pt.setMode(F.TRIANGLES);if(Y.isInstancedMesh)pt.renderInstances(ct,mn,Y.count);else if(q.isInstancedBufferGeometry){const He=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,au=Math.min(q.instanceCount,He);pt.renderInstances(ct,mn,au)}else pt.render(ct,mn)},this.compile=function(A,O){function q(U,Y,ge){U.transparent===!0&&U.side===Yn&&U.forceSinglePass===!1?(U.side=sn,U.needsUpdate=!0,ua(U,Y,ge),U.side=Mi,U.needsUpdate=!0,ua(U,Y,ge),U.side=Yn):ua(U,Y,ge)}m=re.get(A),m.init(),v.push(m),A.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(g._useLegacyLights),A.traverse(function(U){const Y=U.material;if(Y)if(Array.isArray(Y))for(let ge=0;ge<Y.length;ge++){const Se=Y[ge];q(Se,A,U)}else q(Y,A,U)}),v.pop(),m=null};let tt=null;function Ai(A){tt&&tt(A)}function nt(){Vt.stop()}function Gn(){Vt.start()}const Vt=new N0;Vt.setAnimationLoop(Ai),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(A){tt=A,L.setAnimationLoop(A),A===null?Vt.stop():Vt.start()},L.addEventListener("sessionstart",nt),L.addEventListener("sessionend",Gn),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(O),O=L.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,O,T),m=re.get(A,v.length),m.init(),v.push(m),Me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),le.setFromProjectionMatrix(Me),pe=this.localClippingEnabled,oe=ve.init(this.clippingPlanes,pe),y=ee.get(A,h.length),y.init(),h.push(y),Of(A,O,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,W),this.info.render.frame++,oe===!0&&ve.beginShadows();const q=m.state.shadowsArray;if(se.render(q,A,O),oe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(y,A),m.setupLights(g._useLegacyLights),O.isArrayCamera){const U=O.cameras;for(let Y=0,ge=U.length;Y<ge;Y++){const Se=U[Y];Ff(y,A,Se,Se.viewport)}}else Ff(y,A,O);T!==null&&(Pe.updateMultisampleRenderTarget(T),Pe.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,O),fe.resetDefaultState(),I=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Of(A,O,q,U){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){U&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Se=S.update(A),we=A.material;we.visible&&y.push(A,Se,we,q,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){const Se=S.update(A),we=A.material;if(U&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ye.copy(Se.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(we)){const Re=Se.groups;for(let ze=0,Te=Re.length;ze<Te;ze++){const Ne=Re[ze],ct=we[Ne.materialIndex];ct&&ct.visible&&y.push(A,Se,ct,q,Ye.z,Ne)}}else we.visible&&y.push(A,Se,we,q,Ye.z,null)}}const ge=A.children;for(let Se=0,we=ge.length;Se<we;Se++)Of(ge[Se],O,q,U)}function Ff(A,O,q,U){const Y=A.opaque,ge=A.transmissive,Se=A.transparent;m.setupLightsView(q),oe===!0&&ve.setGlobalState(g.clippingPlanes,q),ge.length>0&&K0(Y,ge,O,q),U&&Ae.viewport(w.copy(U)),Y.length>0&&la(Y,O,q),ge.length>0&&la(ge,O,q),Se.length>0&&la(Se,O,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function K0(A,O,q,U){const Y=Le.isWebGL2;_e===null&&(_e=new Dr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Zo:Qi,minFilter:Ir,samples:Y?4:0})),g.getDrawingBufferSize(ye),Y?_e.setSize(ye.x,ye.y):_e.setSize(Bl(ye.x),Bl(ye.y));const ge=g.getRenderTarget();g.setRenderTarget(_e),g.getClearColor(B),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear();const Se=g.toneMapping;g.toneMapping=Zi,la(A,q,U),Pe.updateMultisampleRenderTarget(_e),Pe.updateRenderTargetMipmap(_e);let we=!1;for(let Re=0,ze=O.length;Re<ze;Re++){const Te=O[Re],Ne=Te.object,ct=Te.geometry,ft=Te.material,mn=Te.group;if(ft.side===Yn&&Ne.layers.test(U.layers)){const ti=ft.side;ft.side=sn,ft.needsUpdate=!0,kf(Ne,q,U,ct,ft,mn),ft.side=ti,ft.needsUpdate=!0,we=!0}}we===!0&&(Pe.updateMultisampleRenderTarget(_e),Pe.updateRenderTargetMipmap(_e)),g.setRenderTarget(ge),g.setClearColor(B,j),g.toneMapping=Se}function la(A,O,q){const U=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,ge=A.length;Y<ge;Y++){const Se=A[Y],we=Se.object,Re=Se.geometry,ze=U===null?Se.material:U,Te=Se.group;we.layers.test(q.layers)&&kf(we,O,q,Re,ze,Te)}}function kf(A,O,q,U,Y,ge){A.onBeforeRender(g,O,q,U,Y,ge),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(g,O,q,U,A,ge),Y.transparent===!0&&Y.side===Yn&&Y.forceSinglePass===!1?(Y.side=sn,Y.needsUpdate=!0,g.renderBufferDirect(q,O,U,Y,A,ge),Y.side=Mi,Y.needsUpdate=!0,g.renderBufferDirect(q,O,U,Y,A,ge),Y.side=Yn):g.renderBufferDirect(q,O,U,Y,A,ge),A.onAfterRender(g,O,q,U,Y,ge)}function ua(A,O,q){O.isScene!==!0&&(O=Lt);const U=Oe.get(A),Y=m.state.lights,ge=m.state.shadowsArray,Se=Y.state.version,we=G.getParameters(A,Y.state,ge,O,q),Re=G.getProgramCacheKey(we);let ze=U.programs;U.environment=A.isMeshStandardMaterial?O.environment:null,U.fog=O.fog,U.envMap=(A.isMeshStandardMaterial?xt:Xe).get(A.envMap||U.environment),ze===void 0&&(A.addEventListener("dispose",de),ze=new Map,U.programs=ze);let Te=ze.get(Re);if(Te!==void 0){if(U.currentProgram===Te&&U.lightsStateVersion===Se)return Bf(A,we),Te}else we.uniforms=G.getUniforms(A),A.onBuild(q,we,g),A.onBeforeCompile(we,g),Te=G.acquireProgram(we,Re),ze.set(Re,Te),U.uniforms=we.uniforms;const Ne=U.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=ve.uniform),Bf(A,we),U.needsLights=Q0(A),U.lightsStateVersion=Se,U.needsLights&&(Ne.ambientLightColor.value=Y.state.ambient,Ne.lightProbe.value=Y.state.probe,Ne.directionalLights.value=Y.state.directional,Ne.directionalLightShadows.value=Y.state.directionalShadow,Ne.spotLights.value=Y.state.spot,Ne.spotLightShadows.value=Y.state.spotShadow,Ne.rectAreaLights.value=Y.state.rectArea,Ne.ltc_1.value=Y.state.rectAreaLTC1,Ne.ltc_2.value=Y.state.rectAreaLTC2,Ne.pointLights.value=Y.state.point,Ne.pointLightShadows.value=Y.state.pointShadow,Ne.hemisphereLights.value=Y.state.hemi,Ne.directionalShadowMap.value=Y.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ne.spotShadowMap.value=Y.state.spotShadowMap,Ne.spotLightMatrix.value=Y.state.spotLightMatrix,Ne.spotLightMap.value=Y.state.spotLightMap,Ne.pointShadowMap.value=Y.state.pointShadowMap,Ne.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ct=Te.getUniforms(),ft=fl.seqWithValue(ct.seq,Ne);return U.currentProgram=Te,U.uniformsList=ft,Te}function Bf(A,O){const q=Oe.get(A);q.outputColorSpace=O.outputColorSpace,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function $0(A,O,q,U,Y){O.isScene!==!0&&(O=Lt),Pe.resetTextureUnits();const ge=O.fog,Se=U.isMeshStandardMaterial?O.environment:null,we=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zn,Re=(U.isMeshStandardMaterial?xt:Xe).get(U.envMap||Se),ze=U.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Te=!!q.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ne=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let mn=Zi;U.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mn=g.toneMapping);const ti=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=ti!==void 0?ti.length:0,He=Oe.get(U),au=m.state.lights;if(oe===!0&&(pe===!0||A!==M)){const on=A===M&&U.id===I;ve.setState(U,A,on)}let mt=!1;U.version===He.__version?(He.needsLights&&He.lightsStateVersion!==au.state.version||He.outputColorSpace!==we||Y.isInstancedMesh&&He.instancing===!1||!Y.isInstancedMesh&&He.instancing===!0||Y.isSkinnedMesh&&He.skinning===!1||!Y.isSkinnedMesh&&He.skinning===!0||Y.isInstancedMesh&&He.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&He.instancingColor===!1&&Y.instanceColor!==null||He.envMap!==Re||U.fog===!0&&He.fog!==ge||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ve.numPlanes||He.numIntersection!==ve.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Te||He.morphTargets!==Ne||He.morphNormals!==ct||He.morphColors!==ft||He.toneMapping!==mn||Le.isWebGL2===!0&&He.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,He.__version=U.version);let sr=He.currentProgram;mt===!0&&(sr=ua(U,O,Y));let zf=!1,Js=!1,lu=!1;const Wt=sr.getUniforms(),or=He.uniforms;if(Ae.useProgram(sr.program)&&(zf=!0,Js=!0,lu=!0),U.id!==I&&(I=U.id,Js=!0),zf||M!==A){if(Wt.setValue(F,"projectionMatrix",A.projectionMatrix),Le.logarithmicDepthBuffer&&Wt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Js=!0,lu=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const on=Wt.map.cameraPosition;on!==void 0&&on.setValue(F,Ye.setFromMatrixPosition(A.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Wt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&Wt.setValue(F,"viewMatrix",A.matrixWorldInverse)}if(Y.isSkinnedMesh){Wt.setOptional(F,Y,"bindMatrix"),Wt.setOptional(F,Y,"bindMatrixInverse");const on=Y.skeleton;on&&(Le.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Wt.setValue(F,"boneTexture",on.boneTexture,Pe),Wt.setValue(F,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const uu=q.morphAttributes;if((uu.position!==void 0||uu.normal!==void 0||uu.color!==void 0&&Le.isWebGL2===!0)&&C.update(Y,q,sr),(Js||He.receiveShadow!==Y.receiveShadow)&&(He.receiveShadow=Y.receiveShadow,Wt.setValue(F,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(or.envMap.value=Re,or.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Js&&(Wt.setValue(F,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&Z0(or,lu),ge&&U.fog===!0&&ie.refreshFogUniforms(or,ge),ie.refreshMaterialUniforms(or,U,K,Q,_e),fl.upload(F,He.uniformsList,or,Pe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(fl.upload(F,He.uniformsList,or,Pe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Wt.setValue(F,"center",Y.center),Wt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Wt.setValue(F,"normalMatrix",Y.normalMatrix),Wt.setValue(F,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const on=U.uniformsGroups;for(let cu=0,J0=on.length;cu<J0;cu++)if(Le.isWebGL2){const Hf=on[cu];Ce.update(Hf,sr),Ce.bind(Hf,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function Z0(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Q0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,O,q){Oe.get(A.texture).__webglTexture=O,Oe.get(A.depthTexture).__webglTexture=q;const U=Oe.get(A);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=q===void 0,U.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const q=Oe.get(A);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,q=0){T=A,E=O,R=q;let U=!0,Y=null,ge=!1,Se=!1;if(A){const Re=Oe.get(A);Re.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(F.FRAMEBUFFER,null),U=!1):Re.__webglFramebuffer===void 0?Pe.setupRenderTarget(A):Re.__hasExternalTextures&&Pe.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Te=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Te[O])?Y=Te[O][q]:Y=Te[O],ge=!0):Le.isWebGL2&&A.samples>0&&Pe.useMultisampledRTT(A)===!1?Y=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Te)?Y=Te[q]:Y=Te,w.copy(A.viewport),$.copy(A.scissor),J=A.scissorTest}else w.copy(H).multiplyScalar(K).floor(),$.copy(N).multiplyScalar(K).floor(),J=k;if(Ae.bindFramebuffer(F.FRAMEBUFFER,Y)&&Le.drawBuffers&&U&&Ae.drawBuffers(A,Y),Ae.viewport(w),Ae.scissor($),Ae.setScissorTest(J),ge){const Re=Oe.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,q)}else if(Se){const Re=Oe.get(A.texture),ze=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,q||0,ze)}I=-1},this.readRenderTargetPixels=function(A,O,q,U,Y,ge,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Ae.bindFramebuffer(F.FRAMEBUFFER,we);try{const Re=A.texture,ze=Re.format,Te=Re.type;if(ze!==Sn&&ae.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Te===Zo&&(xe.has("EXT_color_buffer_half_float")||Le.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Te!==Qi&&ae.convert(Te)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Te===pi&&(Le.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-U&&q>=0&&q<=A.height-Y&&F.readPixels(O,q,U,Y,ae.convert(ze),ae.convert(Te),ge)}finally{const Re=T!==null?Oe.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,O,q=0){const U=Math.pow(2,-q),Y=Math.floor(O.image.width*U),ge=Math.floor(O.image.height*U);Pe.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,A.x,A.y,Y,ge),Ae.unbindTexture()},this.copyTextureToTexture=function(A,O,q,U=0){const Y=O.image.width,ge=O.image.height,Se=ae.convert(q.format),we=ae.convert(q.type);Pe.setTexture2D(q,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,A.x,A.y,Y,ge,Se,we,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,Se,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,U,A.x,A.y,Se,we,O.image),U===0&&q.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,O,q,U,Y=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,we=A.max.z-A.min.z+1,Re=ae.convert(U.format),ze=ae.convert(U.type);let Te;if(U.isData3DTexture)Pe.setTexture3D(U,0),Te=F.TEXTURE_3D;else if(U.isDataArrayTexture)Pe.setTexture2DArray(U,0),Te=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Ne=F.getParameter(F.UNPACK_ROW_LENGTH),ct=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ft=F.getParameter(F.UNPACK_SKIP_PIXELS),mn=F.getParameter(F.UNPACK_SKIP_ROWS),ti=F.getParameter(F.UNPACK_SKIP_IMAGES),pt=q.isCompressedTexture?q.mipmaps[0]:q.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?F.texSubImage3D(Te,Y,O.x,O.y,O.z,ge,Se,we,Re,ze,pt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Te,Y,O.x,O.y,O.z,ge,Se,we,Re,pt.data)):F.texSubImage3D(Te,Y,O.x,O.y,O.z,ge,Se,we,Re,ze,pt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ft),F.pixelStorei(F.UNPACK_SKIP_ROWS,mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ti),Y===0&&U.generateMipmaps&&F.generateMipmap(Te),Ae.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Pe.setTextureCube(A,0):A.isData3DTexture?Pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Pe.setTexture2DArray(A,0):Pe.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){E=0,R=0,T=null,Ae.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?Ar:v0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ar?Ee:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vw extends B0{}Vw.prototype.isWebGL1Renderer=!0;class Ww extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Xw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new P;class Cf{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pm=new P,mm=new Qe,gm=new Qe,jw=new P,_m=new Be,ss=new P,dc=new Jn,vm=new Be,fc=new sa;class Yw extends En{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)ss.fromBufferAttribute(t,i),this.applyBoneTransform(i,ss),this.boundingBox.expandByPoint(ss)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)ss.fromBufferAttribute(t,i),this.applyBoneTransform(i,ss),this.boundingSphere.expandByPoint(ss)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dc.copy(this.boundingSphere),dc.applyMatrix4(r),e.ray.intersectsSphere(dc)!==!1&&(vm.copy(r).invert(),fc.copy(e.ray).applyMatrix4(vm),!(this.boundingBox!==null&&fc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;mm.fromBufferAttribute(r.attributes.skinIndex,e),gm.fromBufferAttribute(r.attributes.skinWeight,e),pm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=gm.getComponent(s);if(o!==0){const a=mm.getComponent(s);_m.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(jw.copy(pm).applyMatrix4(_m),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class z0 extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qw extends Nt{constructor(e=null,t=1,i=1,r,s,o,a,l,u=bt,c=bt,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ym=new Be,Kw=new Be;class Lf{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Kw;ym.multiplyMatrices(a,t[s]),ym.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Lf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=S0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new qw(t,e,e,Sn,pi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new z0),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class xm extends Ut{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new Be,Sm=new Be,Ya=[],Mm=new Ti,$w=new Be,ho=new En,po=new Jn;class Zw extends En{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,$w)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),Mm.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Mm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),po.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,os),Sm.multiplyMatrices(i,os),ho.matrixWorld=Sm,ho.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){const l=Ya[o];l.instanceId=s,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class H0 extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Em=new P,Tm=new P,Am=new Be,hc=new sa,qa=new Jn;class Pf extends lt{constructor(e=new Hn,t=new H0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Em.fromBufferAttribute(t,r-1),Tm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Em.distanceTo(Tm);e.setAttribute("lineDistance",new _i(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;Am.copy(r).invert(),hc.copy(e.ray).applyMatrix4(Am);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new P,c=new P,d=new P,f=new P,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=h,x=v-1;g<x;g+=p){const E=_.getX(g),R=_.getX(g+1);if(u.fromBufferAttribute(m,E),c.fromBufferAttribute(m,R),hc.distanceSqToSegment(u,c,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=h,x=v-1;g<x;g+=p){if(u.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),hc.distanceSqToSegment(u,c,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const wm=new P,Rm=new P;class Qw extends Pf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)wm.fromBufferAttribute(t,r),Rm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wm.distanceTo(Rm);e.setAttribute("lineDistance",new _i(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jw extends Pf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class G0 extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bm=new Be,Ed=new sa,Ka=new Jn,$a=new P;class e1 extends lt{constructor(e=new Hn,t=new G0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),Ka.radius+=s,e.ray.intersectsSphere(Ka)===!1)return;bm.copy(r).invert(),Ed.copy(e.ray).applyMatrix4(bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,y=p;_<y;_++){const m=u.getX(_);$a.fromBufferAttribute(d,m),Cm($a,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,y=p;_<y;_++)$a.fromBufferAttribute(d,_),Cm($a,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cm(n,e,t,i,r,s,o){const a=Ed.distanceSqToPoint(n);if(a<t){const l=new P;Ed.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class If extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=y0,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rr extends If{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Pi(n,e,t){return V0(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function Za(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function V0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function t1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Lm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function W0(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class aa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class n1 extends aa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wp,endingEnd:wp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rp:s=e,a=2*t-i;break;case bp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rp:o=e,l=2*i-t;break;case bp:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),y=_*_,m=y*_,h=-f*m+2*f*y-f*_,v=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,g=(-1-p)*m+(1.5+p)*y+.5*_,x=p*m-p*y;for(let E=0;E!==a;++E)s[E]=h*o[c+E]+v*o[u+E]+g*o[l+E]+x*o[d+E];return s}}class i1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(r-t),d=1-c;for(let f=0;f!==a;++f)s[f]=o[u+f]*d+o[l+f]*c;return s}}class r1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Za(t,this.TimeBufferType),this.values=Za(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Za(e.times,Array),values:Za(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new r1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new i1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new n1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qo:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case Gu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Pi(i,s,o),this.values=Pi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&V0(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=Pi(this.times),t=Pi(this.values),i=this.getValueSize(),r=this.getInterpolation()===Gu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(r)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){const y=t[d+_];if(y!==t[f+_]||y!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=Pi(e,0,o),this.values=Pi(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=Pi(this.times,0),t=Pi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Hs;class Zs extends ei{}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Qo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class X0 extends ei{}X0.prototype.ValueTypeName="color";class Ws extends ei{}Ws.prototype.ValueTypeName="number";class s1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let c=u+a;u!==c;u+=4)Qn.slerpFlat(s,0,o,u-a,o,u,l);return s}}class Ur extends ei{InterpolantFactoryMethodLinear(e){return new s1(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.DefaultInterpolation=Hs;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends ei{}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Qo;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends ei{}Xs.prototype.ValueTypeName="vector";class o1{constructor(e,t=-1,i,r=cS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(l1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ei.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const c=t1(l);l=Lm(l,1,c),u=Lm(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new Ws(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],c=u.name.match(s);if(c&&c.length>1){const d=c[1];let f=r[d];f||(r[d]=f=[]),f.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,p,_,y){if(p.length!==0){const m=[],h=[];W0(p,m,h,_),m.length!==0&&y.push(new d(f,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let y=0;y<f[_].morphTargets.length;y++)p[f[_].morphTargets[y]]=-1;for(const y in p){const m=[],h=[];for(let v=0;v!==f[_].morphTargets.length;++v){const g=f[_];m.push(g.time),h.push(g.morphTarget===y?1:0)}r.push(new Ws(".morphTargetInfluence["+y+"]",m,h))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(Xs,p+".position",f,"pos",r),i(Ur,p+".quaternion",f,"rot",r),i(Xs,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function a1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ws;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return X0;case"quaternion":return Ur;case"bool":case"boolean":return Zs;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function l1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=a1(n.type);if(n.times===void 0){const t=[],i=[];W0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const js={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class u1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const c1=new u1;class Br{constructor(e){this.manager=e!==void 0?e:c1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Br.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class d1 extends Error{constructor(e,t){super(e),this.response=t}}class zl extends Br{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=js.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:i,onError:r});return}li[e]=[],li[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=li[e],d=u.body.getReader(),f=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let y=0;const m=new ReadableStream({start(h){v();function v(){d.read().then(({done:g,value:x})=>{if(g)h.close();else{y+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let R=0,T=c.length;R<T;R++){const I=c[R];I.onProgress&&I.onProgress(E)}h.enqueue(x),v()}})}}});return new Response(m)}else throw new d1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{js.add(e,u);const c=li[e];delete li[e];for(let d=0,f=c.length;d<f;d++){const p=c[d];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=li[e];if(c===void 0)throw this.manager.itemError(e),u;delete li[e];for(let d=0,f=c.length;d<f;d++){const p=c[d];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class f1 extends Br{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=js.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Jo("img");function l(){c(),js.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class h1 extends Br{constructor(e){super(e)}load(e,t,i,r){const s=new Nt,o=new f1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ou extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const pc=new Be,Pm=new P,Im=new P;class Df{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Af,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pm),Im.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Im),t.updateMatrixWorld(),pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class p1 extends Df{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Gs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class m1 extends ou{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new p1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dm=new Be,mo=new P,mc=new P;class g1 extends Df{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(mo),mc.copy(i.position),mc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(mc),i.updateMatrixWorld(),r.makeTranslation(-mo.x,-mo.y,-mo.z),Dm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm)}}class _1 extends ou{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new g1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class v1 extends Df{constructor(){super(new Rf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j0 extends ou{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new v1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class y1 extends ou{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Td{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class x1 extends Br{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=js.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){js.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Nf="\\[\\]\\.:\\/",S1=new RegExp("["+Nf+"]","g"),Uf="[^"+Nf+"]",M1="[^"+Nf.replace("\\.","")+"]",E1=/((?:WC+[\/:])*)/.source.replace("WC",Uf),T1=/(WCOD+)?/.source.replace("WCOD",M1),A1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uf),w1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uf),R1=new RegExp("^"+E1+T1+A1+w1+"$"),b1=["material","materials","bones","map"];class C1{constructor(e,t,i){const r=i||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ke{constructor(e,t,i){this.path=t,this.parsedPath=i||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,i):new Ke(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(S1,"")}static parseTrackName(e){const t=R1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);b1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=C1;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);const Um={type:"change"},gc={type:"start"},Om={type:"end"},Qa=new sa,Fm=new Ui,L1=Math.cos(70*M0.DEG2RAD);class P1 extends kr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",S),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Um),i.update(),s=r.NONE},this.update=function(){const C=new P,Z=new Qn().setFromUnitVectors(e.up,new P(0,1,0)),he=Z.clone().invert(),ae=new P,fe=new Qn,Ce=new P,Ve=2*Math.PI;return function(){const ce=i.object.position;C.copy(ce).sub(i.target),C.applyQuaternion(Z),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&$(M()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let z=i.minAzimuthAngle,ne=i.maxAzimuthAngle;isFinite(z)&&isFinite(ne)&&(z<-Math.PI?z+=Ve:z>Math.PI&&(z-=Ve),ne<-Math.PI?ne+=Ve:ne>Math.PI&&(ne-=Ve),z<=ne?a.theta=Math.max(z,Math.min(ne,a.theta)):a.theta=a.theta>(z+ne)/2?Math.max(z,a.theta):Math.min(ne,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*u),C.setFromSpherical(a),C.applyQuaternion(he),ce.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let de=!1;if(i.zoomToCursor&&R){let Fe=null;if(i.object.isPerspectiveCamera){const qe=C.length();Fe=W(qe*u);const tt=qe-Fe;i.object.position.addScaledVector(x,tt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const qe=new P(E.x,E.y,0);qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),de=!0;const tt=new P(E.x,E.y,0);tt.unproject(i.object),i.object.position.sub(tt).add(qe),i.object.updateMatrixWorld(),Fe=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Fe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Fe).add(i.object.position):(Qa.origin.copy(i.object.position),Qa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Qa.direction))<L1?e.lookAt(i.target):(Fm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Qa.intersectPlane(Fm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),de=!0);return u=1,R=!1,de||ae.distanceToSquared(i.object.position)>o||8*(1-fe.dot(i.object.quaternion))>o||Ce.distanceToSquared(i.target)>0?(i.dispatchEvent(Um),ae.copy(i.object.position),fe.copy(i.object.quaternion),Ce.copy(i.target),de=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",Xe),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",Pe),i.domElement.removeEventListener("pointerup",Xe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",S),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Nm,l=new Nm;let u=1;const c=new P,d=new be,f=new be,p=new be,_=new be,y=new be,m=new be,h=new be,v=new be,g=new be,x=new P,E=new be;let R=!1;const T=[],I={};function M(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function $(C){l.theta-=C}function J(C){l.phi-=C}const B=function(){const C=new P;return function(he,ae){C.setFromMatrixColumn(ae,0),C.multiplyScalar(-he),c.add(C)}}(),j=function(){const C=new P;return function(he,ae){i.screenSpacePanning===!0?C.setFromMatrixColumn(ae,1):(C.setFromMatrixColumn(ae,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(he),c.add(C)}}(),X=function(){const C=new P;return function(he,ae){const fe=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;C.copy(Ce).sub(i.target);let Ve=C.length();Ve*=Math.tan(i.object.fov/2*Math.PI/180),B(2*he*Ve/fe.clientHeight,i.object.matrix),j(2*ae*Ve/fe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(B(he*(i.object.right-i.object.left)/i.object.zoom/fe.clientWidth,i.object.matrix),j(ae*(i.object.top-i.object.bottom)/i.object.zoom/fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(C){if(!i.zoomToCursor)return;R=!0;const Z=i.domElement.getBoundingClientRect(),he=C.clientX-Z.left,ae=C.clientY-Z.top,fe=Z.width,Ce=Z.height;E.x=he/fe*2-1,E.y=-(ae/Ce)*2+1,x.set(E.x,E.y,1).unproject(e).sub(e.position).normalize()}function W(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function H(C){d.set(C.clientX,C.clientY)}function N(C){D(C),h.set(C.clientX,C.clientY)}function k(C){_.set(C.clientX,C.clientY)}function le(C){f.set(C.clientX,C.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const Z=i.domElement;$(2*Math.PI*p.x/Z.clientHeight),J(2*Math.PI*p.y/Z.clientHeight),d.copy(f),i.update()}function oe(C){v.set(C.clientX,C.clientY),g.subVectors(v,h),g.y>0?Q(w()):g.y<0&&K(w()),h.copy(v),i.update()}function pe(C){y.set(C.clientX,C.clientY),m.subVectors(y,_).multiplyScalar(i.panSpeed),X(m.x,m.y),_.copy(y),i.update()}function _e(C){D(C),C.deltaY<0?K(w()):C.deltaY>0&&Q(w()),i.update()}function Me(C){let Z=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?J(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),Z=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?J(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),Z=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),Z=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),Z=!0;break}Z&&(C.preventDefault(),i.update())}function ye(){if(T.length===1)d.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),Z=.5*(T[0].pageY+T[1].pageY);d.set(C,Z)}}function Ye(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),Z=.5*(T[0].pageY+T[1].pageY);_.set(C,Z)}}function Lt(){const C=T[0].pageX-T[1].pageX,Z=T[0].pageY-T[1].pageY,he=Math.sqrt(C*C+Z*Z);h.set(0,he)}function De(){i.enableZoom&&Lt(),i.enablePan&&Ye()}function F(){i.enableZoom&&Lt(),i.enableRotate&&ye()}function yt(C){if(T.length==1)f.set(C.pageX,C.pageY);else{const he=V(C),ae=.5*(C.pageX+he.x),fe=.5*(C.pageY+he.y);f.set(ae,fe)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const Z=i.domElement;$(2*Math.PI*p.x/Z.clientHeight),J(2*Math.PI*p.y/Z.clientHeight),d.copy(f)}function xe(C){if(T.length===1)y.set(C.pageX,C.pageY);else{const Z=V(C),he=.5*(C.pageX+Z.x),ae=.5*(C.pageY+Z.y);y.set(he,ae)}m.subVectors(y,_).multiplyScalar(i.panSpeed),X(m.x,m.y),_.copy(y)}function Le(C){const Z=V(C),he=C.pageX-Z.x,ae=C.pageY-Z.y,fe=Math.sqrt(he*he+ae*ae);v.set(0,fe),g.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),Q(g.y),h.copy(v)}function Ae(C){i.enableZoom&&Le(C),i.enablePan&&xe(C)}function et(C){i.enableZoom&&Le(C),i.enableRotate&&yt(C)}function Oe(C){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Pe),i.domElement.addEventListener("pointerup",Xe)),re(C),C.pointerType==="touch"?G(C):xt(C))}function Pe(C){i.enabled!==!1&&(C.pointerType==="touch"?ie(C):At(C))}function Xe(C){ve(C),T.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Pe),i.domElement.removeEventListener("pointerup",Xe)),i.dispatchEvent(Om),s=r.NONE}function xt(C){let Z;switch(C.button){case 0:Z=i.mouseButtons.LEFT;break;case 1:Z=i.mouseButtons.MIDDLE;break;case 2:Z=i.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Hr.DOLLY:if(i.enableZoom===!1)return;N(C),s=r.DOLLY;break;case Hr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;k(C),s=r.PAN}else{if(i.enableRotate===!1)return;H(C),s=r.ROTATE}break;case Hr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;H(C),s=r.ROTATE}else{if(i.enablePan===!1)return;k(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(gc)}function At(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;le(C);break;case r.DOLLY:if(i.enableZoom===!1)return;oe(C);break;case r.PAN:if(i.enablePan===!1)return;pe(C);break}}function b(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(gc),_e(C),i.dispatchEvent(Om))}function S(C){i.enabled===!1||i.enablePan===!1||Me(C)}function G(C){switch(se(C),T.length){case 1:switch(i.touches.ONE){case Gr.ROTATE:if(i.enableRotate===!1)return;ye(),s=r.TOUCH_ROTATE;break;case Gr.PAN:if(i.enablePan===!1)return;Ye(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Gr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(),s=r.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(gc)}function ie(C){switch(se(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;yt(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;et(C),i.update();break;default:s=r.NONE}}function ee(C){i.enabled!==!1&&C.preventDefault()}function re(C){T.push(C)}function ve(C){delete I[C.pointerId];for(let Z=0;Z<T.length;Z++)if(T[Z].pointerId==C.pointerId){T.splice(Z,1);return}}function se(C){let Z=I[C.pointerId];Z===void 0&&(Z=new be,I[C.pointerId]=Z),Z.set(C.pageX,C.pageY)}function V(C){const Z=C.pointerId===T[0].pointerId?T[1]:T[0];return I[Z.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",Xe),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}const _c=new WeakMap;class I1 extends Br{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const s=new zl(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,r)},i,r)}parse(e,t,i){this.decodeDracoFile(e,t,null,null,Ee).catch(i)}decodeDracoFile(e,t,i,r,s=zn){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const i=JSON.stringify(t);if(_c.has(e)){const l=_c.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(r=l,new Promise((u,c)=>{r._callbacks[s]={resolve:u,reject:c},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),_c.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Hn;e.index&&t.setIndex(new Ut(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const r=e.attributes[i],s=r.name,o=r.array,a=r.itemSize,l=new Ut(o,a);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ee)return;const i=new Ie;for(let r=0,s=e.count;r<s;r++)i.fromBufferAttribute(e,r).convertSRGBToLinear(),e.setXYZ(r,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new zl(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((r,s)=>{i.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=D1.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function D1(){let n,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":n=a.decoderConfig,e=new Promise(function(c){n.onModuleLoaded=function(d){c({draco:d})},DracoDecoderModule(n)});break;case"decode":const l=a.buffer,u=a.taskConfig;e.then(c=>{const d=c.draco,f=new d.Decoder;try{const p=t(d,f,new Int8Array(l),u),_=p.attributes.map(y=>y.array.buffer);p.index&&_.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},_)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{d.destroy(f)}});break}};function t(o,a,l,u){const c=u.attributeIDs,d=u.attributeTypes;let f,p;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const y={index:null,attributes:[]};for(const m in c){const h=self[d[m]];let v,g;if(u.useUniqueIDs)g=c[m],v=a.GetAttributeByUniqueId(f,g);else{if(g=a.GetAttributeId(f,o[c[m]]),g===-1)continue;v=a.GetAttribute(f,g)}const x=r(o,a,f,m,h,v);m==="color"&&(x.vertexColorSpace=u.vertexColorSpace),y.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(y.index=i(o,a,f)),o.destroy(f),y}function i(o,a,l){const c=l.num_faces()*3,d=c*4,f=o._malloc(d);a.GetTrianglesUInt32Array(l,d,f);const p=new Uint32Array(o.HEAPF32.buffer,f,c).slice();return o._free(f),{array:p,itemSize:1}}function r(o,a,l,u,c,d){const f=d.num_components(),_=l.num_points()*f,y=_*c.BYTES_PER_ELEMENT,m=s(o,c),h=o._malloc(y);a.GetAttributeDataArrayForAllPoints(l,d,m,y,h);const v=new c(o.HEAPF32.buffer,h,_).slice();return o._free(h),{name:u,array:v,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function km(n,e){if(e===dS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===vd||e===_0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===vd)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class N1 extends Br{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new B1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new Z1(t)})}load(e,t,i,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Td.extractUrlBase(e),this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new zl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,o,function(c){t(c),s.manager.itemEnd(e)},a)}catch(c){a(c)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Y0){try{o[We.KHR_BINARY_GLTF]=new Q1(e)}catch(d){r&&r(d);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new dR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const d=this.pluginCallbacks[c](u);a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const d=s.extensionsUsed[c],f=s.extensionsRequired||[];switch(d){case We.KHR_MATERIALS_UNLIT:o[d]=new F1;break;case We.KHR_DRACO_MESH_COMPRESSION:o[d]=new J1(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[d]=new eR;break;case We.KHR_MESH_QUANTIZATION:o[d]=new tR;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function U1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class O1{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new Ie(16777215);l.color!==void 0&&c.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new j0(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new _1(c),u.distance=d;break;case"spot":u=new m1(c),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,Oi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class F1{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return yr}extendParams(e,t,i){const r=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Ee))}return Promise.all(r)}}class k1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class B1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(s)}}class z1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class H1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ee)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class G1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class V1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie(a[0],a[1],a[2]),Promise.all(s)}}class W1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class X1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ee)),Promise.all(s)}}class j1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Y1{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class q1{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class K1{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $1{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,d=r.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,d,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(c*d);return o.decodeGltfBuffer(new Uint8Array(p),c,d,f,r.mode,r.filter),p})})}else return null}}class Z1{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==_n.TRIANGLES&&u.mode!==_n.TRIANGLE_STRIP&&u.mode!==_n.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(c=>(l[u]=c,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const c=u.pop(),d=c.isGroup?c.children:[c],f=u[0].count,p=[];for(const _ of d){const y=new Be,m=new P,h=new Qn,v=new P(1,1,1),g=new Zw(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),g.setMatrixAt(x,y.compose(m,h,v));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);lt.prototype.copy.call(g,_),this.parser.assignFinalMaterial(g),p.push(g)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const Y0="glTF",go=12,Bm={JSON:1313821514,BIN:5130562};class Q1{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Y0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-go,s=new DataView(e,go);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Bm.JSON){const u=new Uint8Array(e,go+o,a);this.content=i.decode(u)}else if(l===Bm.BIN){const u=go+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class J1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const c in o){const d=Ad[c]||c.toLowerCase();a[d]=o[c]}for(const c in e.attributes){const d=Ad[c]||c.toLowerCase();if(o[c]!==void 0){const f=i.accessors[e.attributes[c]],p=Cs[f.componentType];u[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(d){r.decodeDracoFile(c,function(f){for(const p in f.attributes){const _=f.attributes[p],y=l[p];y!==void 0&&(_.normalized=y)}d(f)},a,u)})})}}class eR{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class tR{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class q0 extends aa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,c=r-t,d=(i-t)/c,f=d*d,p=f*d,_=e*u,y=_-u,m=-2*p+3*f,h=p-f,v=1-m,g=h-f+d;for(let x=0;x!==a;x++){const E=o[y+x+a],R=o[y+x+l]*c,T=o[_+x+a],I=o[_+x]*c;s[x]=v*E+g*R+m*T+h*I}return s}}const nR=new Qn;class iR extends q0{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return nR.fromArray(s).normalize().toArray(s),s}}const _n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zm={9728:bt,9729:Jt,9984:_d,9985:c0,9986:dl,9987:Ir},Hm={33071:xn,33648:Fl,10497:Bs},vc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ad={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rR={CUBICSPLINE:void 0,LINEAR:Hs,STEP:Qo},yc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new If({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),n.DefaultMaterial}function dr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Oi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oR(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const d=e[u];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,c=e.length;u<c;u++){const d=e[u];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const c=u[0],d=u[1],f=u[2];return i&&(n.morphAttributes.position=c),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function aR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lR(n){let e;const t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xc(t.attributes):e=n.indices+":"+xc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+xc(n.targets[i]);return e}function xc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function wd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const cR=new Be;class dR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new U1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new h1(this.options.manager):this.textureLoader=new x1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};dr(s,a,r),Oi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,c]of o.children.entries())s(c,a.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Td.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=vc[r.type],a=Cs[r.componentType],l=r.normalized===!0,u=new a(r.count*o);return Promise.resolve(new Ut(u,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=vc[r.type],u=Cs[r.componentType],c=u.BYTES_PER_ELEMENT,d=c*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let y,m;if(p&&p!==d){const h=Math.floor(f/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let g=t.cache.get(v);g||(y=new u(a,h*p,r.count*p/c),g=new Xw(y,p/c),t.cache.add(v,g)),m=new Cf(g,l,f%p/c,_)}else a===null?y=new u(r.count*l):y=new u(a,f,r.count*l),m=new Ut(y,l,_);if(r.sparse!==void 0){const h=vc.SCALAR,v=Cs[r.sparse.indices.componentType],g=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,E=new v(o[1],g,r.sparse.count*h),R=new u(o[2],x,r.sparse.count*l);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized));for(let T=0,I=E.length;T<I;T++){const M=E[T];if(m.setX(M,R[T*l]),l>=2&&m.setY(M,R[T*l+1]),l>=3&&m.setZ(M,R[T*l+2]),l>=4&&m.setW(M,R[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return c.magFilter=zm[f.magFilter]||Jt,c.minFilter=zm[f.minFilter]||Ir,c.wrapS=Hm[f.wrapS]||Bs,c.wrapT=Hm[f.wrapT]||Bs,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(y){const m=new Nt(y);m.needsUpdate=!0,f(m)}),t.load(Td.resolveURL(d,s.path),_,void 0,p)})}).then(function(d){return u===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||uR(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new G0,Zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new H0,Zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return If}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},u=[];if(l[We.KHR_MATERIALS_UNLIT]){const d=r[We.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,Ee)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Yn);const c=s.alphaMode||yc.OPAQUE;if(c===yc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===yc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yr&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}return s.occlusionTexture!==void 0&&o!==yr&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yr&&(a.emissive=new Ie().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==yr&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ee)),Promise.all(u).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Oi(d,s),t.associations.set(d,{materials:e}),s.extensions&&dr(r,d,s),d})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],c=lR(u),d=r[c];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=Gm(new Hn,u,t),r[c]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const c=o[l].material===void 0?sR(this.cache):this.getDependency("material",o[l].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],d=[];for(let p=0,_=c.length;p<_;p++){const y=c[p],m=o[p];let h;const v=u[p];if(m.mode===_n.TRIANGLES||m.mode===_n.TRIANGLE_STRIP||m.mode===_n.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new Yw(y,v):new En(y,v),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===_n.TRIANGLE_STRIP?h.geometry=km(h.geometry,_0):m.mode===_n.TRIANGLE_FAN&&(h.geometry=km(h.geometry,vd));else if(m.mode===_n.LINES)h=new Qw(y,v);else if(m.mode===_n.LINE_STRIP)h=new Pf(y,v);else if(m.mode===_n.LINE_LOOP)h=new Jw(y,v);else if(m.mode===_n.POINTS)h=new e1(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&aR(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Oi(h,s),m.extensions&&dr(r,h,m),t.assignFinalMaterial(h),d.push(h)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&dr(r,d[0],s),d[0];const f=new xr;s.extensions&&dr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new qt(M0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Rf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Oi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let u=0,c=o.length;u<c;u++){const d=o[u];if(d){a.push(d);const f=new Be;s!==null&&f.fromArray(s.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Lf(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],u=[],c=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],_=r.samplers[p.sampler],y=p.target,m=y.node,h=r.parameters!==void 0?r.parameters[_.input]:_.input,v=r.parameters!==void 0?r.parameters[_.output]:_.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",v)),u.push(_),c.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(d){const f=d[0],p=d[1],_=d[2],y=d[3],m=d[4],h=[];for(let v=0,g=f.length;v<g;v++){const x=f[v],E=p[v],R=_[v],T=y[v],I=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=i._createAnimationTracks(x,E,R,T,I);if(M)for(let w=0;w<M.length;w++)h.push(M[w])}return new o1(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=r.weights.length;l<u;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let u=0,c=a.length;u<c;u++)o.push(i.getDependency("node",a[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(u){const c=u[0],d=u[1],f=u[2];f!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(f,cR)});for(let p=0,_=d.length;p<_;p++)c.add(d[p]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let c;if(s.isBone===!0?c=new z0:u.length>1?c=new xr:u.length===1?c=u[0]:c=new lt,c!==u[0])for(let d=0,f=u.length;d<f;d++)c.add(u[d]);if(s.name&&(c.userData.name=s.name,c.name=o),Oi(c,s),s.extensions&&dr(i,c,s),s.matrix!==void 0){const d=new Be;d.fromArray(s.matrix),c.applyMatrix4(d)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new xr;i.name&&(s.name=r.createUniqueName(i.name)),Oi(s,i),i.extensions&&dr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let c=0,d=l.length;c<d;c++)s.add(l[c]);const u=c=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof Zn||f instanceof Nt)&&d.set(f,p);return c.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=u(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ii[s.path]===Ii.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let u;switch(Ii[s.path]){case Ii.weights:u=Ws;break;case Ii.rotation:u=Ur;break;case Ii.position:case Ii.scale:u=Xs;break;default:switch(i.itemSize){case 1:u=Ws;break;case 2:case 3:default:u=Xs;break}break}const c=r.interpolation!==void 0?rR[r.interpolation]:Hs,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const _=new u(l[f]+"."+Ii[s.path],t.array,d,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=wd(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Ur?iR:q0;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fR(n,e,t){const i=e.attributes,r=new Ti;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(u[0],u[1],u[2])),a.normalized){const c=wd(Cs[a.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let u=0,c=s.length;u<c;u++){const d=s[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const y=wd(Cs[f.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Jn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Gm(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Ad[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Oi(n,e),fR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?oR(n,e.targets,t):n})}class hR{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},i={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let r='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const s=document.createElement("div");return s.id="webglmessage",s.style.fontFamily="monospace",s.style.fontSize="13px",s.style.fontWeight="normal",s.style.textAlign="center",s.style.background="#fff",s.style.color="#000",s.style.padding="1.5em",s.style.width="400px",s.style.margin="5em auto 0",i[e]?r=r.replace("$0","graphics card"):r=r.replace("$0","browser"),r=r.replace("$1",t[e]),s.innerHTML=r,s}}const Vm=hR;function Wm(){const n=document.querySelector("canvas.webgl"),e=new Ww,t=new qt(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=2,e.add(t);const i=new y1(65535);e.add(i);const r=new j0(16777215,3);e.add(r);const s=new I1;s.setDecoderPath("draco/");const o=new N1;o.setDRACOLoader(s),o.load("../public/desktop_pc/scene.gltf",function(c){let d=c.scene;d.scale.set(.15,.15,.15),e.add(d)},void 0,function(c){console.error(c)});const a=new B0({canvas:n,antialias:!0,alpha:!0});a.setSize(500,500),document.body.appendChild(n);const l=new P1(t,n);l.enableZoom=!1;function u(){a.render(e,t),l.update(),window.requestAnimationFrame(u)}if(Vm.isWebGLAvailable())u();else{const c=Vm.getWebGLErrorMessage();document.getElementById("container").appendChild(c)}return _t.jsxs(_t.Fragment,{children:[_t.jsx("h1",{children:"Ahmed Bakr"}),_t.jsx("h1",{children:"Ahmed Bakr"}),_t.jsx("h1",{children:"Ahmed Bakr"})]})}function pR(){return _t.jsxs(_t.Fragment,{children:[_t.jsx("h1",{className:"aa",children:"Ahmed Bakr"}),_t.jsx(Wm,{}),_t.jsx("h1",{children:"Ahmed Bakr"}),_t.jsx("h1",{children:"Ahmed Bakr"}),_t.jsx("h1",{children:"Ahmed Bakr"}),_t.jsx(Wm,{}),_t.jsx(Ax,{})]})}Sc.createRoot(document.getElementById("root")).render(_t.jsx(pR,{}));
