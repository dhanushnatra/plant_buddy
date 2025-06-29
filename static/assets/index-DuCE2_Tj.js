(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function r(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(d){if(d.ep)return;d.ep=!0;const f=r(d);fetch(d.href,f)}})();function B0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gd={exports:{}},Qs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function sb(){if(mp)return Qs;mp=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function r(o,d,f){var h=null;if(f!==void 0&&(h=""+f),d.key!==void 0&&(h=""+d.key),"key"in d){f={};for(var g in d)g!=="key"&&(f[g]=d[g])}else f=d;return d=f.ref,{$$typeof:n,type:o,key:h,ref:d!==void 0?d:null,props:f}}return Qs.Fragment=s,Qs.jsx=r,Qs.jsxs=r,Qs}var gp;function lb(){return gp||(gp=1,gd.exports=sb()),gd.exports}var c=lb(),pd={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function rb(){if(pp)return me;pp=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.iterator;function z(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,A={};function T(E,U,Z){this.props=E,this.context=U,this.refs=A,this.updater=Z||C}T.prototype.isReactComponent={},T.prototype.setState=function(E,U){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,U,"setState")},T.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function G(){}G.prototype=T.prototype;function X(E,U,Z){this.props=E,this.context=U,this.refs=A,this.updater=Z||C}var V=X.prototype=new G;V.constructor=X,j(V,T.prototype),V.isPureReactComponent=!0;var L=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},Q=Object.prototype.hasOwnProperty;function B(E,U,Z,J,ee,fe){return Z=fe.ref,{$$typeof:n,type:E,key:U,ref:Z!==void 0?Z:null,props:fe}}function re(E,U){return B(E.type,U,void 0,void 0,void 0,E.props)}function Se(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function xe(E){var U={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Z){return U[Z]})}var Ye=/\/+/g;function Ne(E,U){return typeof E=="object"&&E!==null&&E.key!=null?xe(""+E.key):U.toString(36)}function Oe(){}function Be(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Oe,Oe):(E.status="pending",E.then(function(U){E.status==="pending"&&(E.status="fulfilled",E.value=U)},function(U){E.status==="pending"&&(E.status="rejected",E.reason=U)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function _e(E,U,Z,J,ee){var fe=typeof E;(fe==="undefined"||fe==="boolean")&&(E=null);var ae=!1;if(E===null)ae=!0;else switch(fe){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(E.$$typeof){case n:case s:ae=!0;break;case b:return ae=E._init,_e(ae(E._payload),U,Z,J,ee)}}if(ae)return ee=ee(E),ae=J===""?"."+Ne(E,0):J,L(ee)?(Z="",ae!=null&&(Z=ae.replace(Ye,"$&/")+"/"),_e(ee,U,Z,"",function(Fe){return Fe})):ee!=null&&(Se(ee)&&(ee=re(ee,Z+(ee.key==null||E&&E.key===ee.key?"":(""+ee.key).replace(Ye,"$&/")+"/")+ae)),U.push(ee)),1;ae=0;var je=J===""?".":J+":";if(L(E))for(var ue=0;ue<E.length;ue++)J=E[ue],fe=je+Ne(J,ue),ae+=_e(J,U,Z,fe,ee);else if(ue=z(E),typeof ue=="function")for(E=ue.call(E),ue=0;!(J=E.next()).done;)J=J.value,fe=je+Ne(J,ue++),ae+=_e(J,U,Z,fe,ee);else if(fe==="object"){if(typeof E.then=="function")return _e(Be(E),U,Z,J,ee);throw U=String(E),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ae}function k(E,U,Z){if(E==null)return E;var J=[],ee=0;return _e(E,J,"","",function(fe){return U.call(Z,fe,ee++)}),J}function K(E){if(E._status===-1){var U=E._result;U=U(),U.then(function(Z){(E._status===0||E._status===-1)&&(E._status=1,E._result=Z)},function(Z){(E._status===0||E._status===-1)&&(E._status=2,E._result=Z)}),E._status===-1&&(E._status=0,E._result=U)}if(E._status===1)return E._result.default;throw E._result}var I=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function se(){}return me.Children={map:k,forEach:function(E,U,Z){k(E,function(){U.apply(this,arguments)},Z)},count:function(E){var U=0;return k(E,function(){U++}),U},toArray:function(E){return k(E,function(U){return U})||[]},only:function(E){if(!Se(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},me.Component=T,me.Fragment=r,me.Profiler=d,me.PureComponent=X,me.StrictMode=o,me.Suspense=x,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,me.__COMPILER_RUNTIME={__proto__:null,c:function(E){return P.H.useMemoCache(E)}},me.cache=function(E){return function(){return E.apply(null,arguments)}},me.cloneElement=function(E,U,Z){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=j({},E.props),ee=E.key,fe=void 0;if(U!=null)for(ae in U.ref!==void 0&&(fe=void 0),U.key!==void 0&&(ee=""+U.key),U)!Q.call(U,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&U.ref===void 0||(J[ae]=U[ae]);var ae=arguments.length-2;if(ae===1)J.children=Z;else if(1<ae){for(var je=Array(ae),ue=0;ue<ae;ue++)je[ue]=arguments[ue+2];J.children=je}return B(E.type,ee,void 0,void 0,fe,J)},me.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},me.createElement=function(E,U,Z){var J,ee={},fe=null;if(U!=null)for(J in U.key!==void 0&&(fe=""+U.key),U)Q.call(U,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ee[J]=U[J]);var ae=arguments.length-2;if(ae===1)ee.children=Z;else if(1<ae){for(var je=Array(ae),ue=0;ue<ae;ue++)je[ue]=arguments[ue+2];ee.children=je}if(E&&E.defaultProps)for(J in ae=E.defaultProps,ae)ee[J]===void 0&&(ee[J]=ae[J]);return B(E,fe,void 0,void 0,null,ee)},me.createRef=function(){return{current:null}},me.forwardRef=function(E){return{$$typeof:g,render:E}},me.isValidElement=Se,me.lazy=function(E){return{$$typeof:b,_payload:{_status:-1,_result:E},_init:K}},me.memo=function(E,U){return{$$typeof:p,type:E,compare:U===void 0?null:U}},me.startTransition=function(E){var U=P.T,Z={};P.T=Z;try{var J=E(),ee=P.S;ee!==null&&ee(Z,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(se,I)}catch(fe){I(fe)}finally{P.T=U}},me.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},me.use=function(E){return P.H.use(E)},me.useActionState=function(E,U,Z){return P.H.useActionState(E,U,Z)},me.useCallback=function(E,U){return P.H.useCallback(E,U)},me.useContext=function(E){return P.H.useContext(E)},me.useDebugValue=function(){},me.useDeferredValue=function(E,U){return P.H.useDeferredValue(E,U)},me.useEffect=function(E,U,Z){var J=P.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(E,U)},me.useId=function(){return P.H.useId()},me.useImperativeHandle=function(E,U,Z){return P.H.useImperativeHandle(E,U,Z)},me.useInsertionEffect=function(E,U){return P.H.useInsertionEffect(E,U)},me.useLayoutEffect=function(E,U){return P.H.useLayoutEffect(E,U)},me.useMemo=function(E,U){return P.H.useMemo(E,U)},me.useOptimistic=function(E,U){return P.H.useOptimistic(E,U)},me.useReducer=function(E,U,Z){return P.H.useReducer(E,U,Z)},me.useRef=function(E){return P.H.useRef(E)},me.useState=function(E){return P.H.useState(E)},me.useSyncExternalStore=function(E,U,Z){return P.H.useSyncExternalStore(E,U,Z)},me.useTransition=function(){return P.H.useTransition()},me.version="19.1.0",me}var yp;function qo(){return yp||(yp=1,pd.exports=rb()),pd.exports}var W=qo();const fn=B0(W);var yd={exports:{}},Ks={},xd={exports:{}},bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function ob(){return xp||(xp=1,function(n){function s(k,K){var I=k.length;k.push(K);e:for(;0<I;){var se=I-1>>>1,E=k[se];if(0<d(E,K))k[se]=K,k[I]=E,I=se;else break e}}function r(k){return k.length===0?null:k[0]}function o(k){if(k.length===0)return null;var K=k[0],I=k.pop();if(I!==K){k[0]=I;e:for(var se=0,E=k.length,U=E>>>1;se<U;){var Z=2*(se+1)-1,J=k[Z],ee=Z+1,fe=k[ee];if(0>d(J,I))ee<E&&0>d(fe,J)?(k[se]=fe,k[ee]=I,se=ee):(k[se]=J,k[Z]=I,se=Z);else if(ee<E&&0>d(fe,I))k[se]=fe,k[ee]=I,se=ee;else break e}}return K}function d(k,K){var I=k.sortIndex-K.sortIndex;return I!==0?I:k.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var h=Date,g=h.now();n.unstable_now=function(){return h.now()-g}}var x=[],p=[],b=1,v=null,z=3,C=!1,j=!1,A=!1,T=!1,G=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function L(k){for(var K=r(p);K!==null;){if(K.callback===null)o(p);else if(K.startTime<=k)o(p),K.sortIndex=K.expirationTime,s(x,K);else break;K=r(p)}}function P(k){if(A=!1,L(k),!j)if(r(x)!==null)j=!0,Q||(Q=!0,Ne());else{var K=r(p);K!==null&&_e(P,K.startTime-k)}}var Q=!1,B=-1,re=5,Se=-1;function xe(){return T?!0:!(n.unstable_now()-Se<re)}function Ye(){if(T=!1,Q){var k=n.unstable_now();Se=k;var K=!0;try{e:{j=!1,A&&(A=!1,X(B),B=-1),C=!0;var I=z;try{t:{for(L(k),v=r(x);v!==null&&!(v.expirationTime>k&&xe());){var se=v.callback;if(typeof se=="function"){v.callback=null,z=v.priorityLevel;var E=se(v.expirationTime<=k);if(k=n.unstable_now(),typeof E=="function"){v.callback=E,L(k),K=!0;break t}v===r(x)&&o(x),L(k)}else o(x);v=r(x)}if(v!==null)K=!0;else{var U=r(p);U!==null&&_e(P,U.startTime-k),K=!1}}break e}finally{v=null,z=I,C=!1}K=void 0}}finally{K?Ne():Q=!1}}}var Ne;if(typeof V=="function")Ne=function(){V(Ye)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Be=Oe.port2;Oe.port1.onmessage=Ye,Ne=function(){Be.postMessage(null)}}else Ne=function(){G(Ye,0)};function _e(k,K){B=G(function(){k(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return z},n.unstable_next=function(k){switch(z){case 1:case 2:case 3:var K=3;break;default:K=z}var I=z;z=K;try{return k()}finally{z=I}},n.unstable_requestPaint=function(){T=!0},n.unstable_runWithPriority=function(k,K){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var I=z;z=k;try{return K()}finally{z=I}},n.unstable_scheduleCallback=function(k,K,I){var se=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,k){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=I+E,k={id:b++,callback:K,priorityLevel:k,startTime:I,expirationTime:E,sortIndex:-1},I>se?(k.sortIndex=I,s(p,k),r(x)===null&&k===r(p)&&(A?(X(B),B=-1):A=!0,_e(P,I-se))):(k.sortIndex=E,s(x,k),j||C||(j=!0,Q||(Q=!0,Ne()))),k},n.unstable_shouldYield=xe,n.unstable_wrapCallback=function(k){var K=z;return function(){var I=z;z=K;try{return k.apply(this,arguments)}finally{z=I}}}}(bd)),bd}var bp;function cb(){return bp||(bp=1,xd.exports=ob()),xd.exports}var vd={exports:{}},bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function ub(){if(vp)return bt;vp=1;var n=qo();function s(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(s(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(x,p,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:v==null?null:""+v,children:x,containerInfo:p,implementation:b}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,bt.createPortal=function(x,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return f(x,p,null,b)},bt.flushSync=function(x){var p=h.T,b=o.p;try{if(h.T=null,o.p=2,x)return x()}finally{h.T=p,o.p=b,o.d.f()}},bt.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(x,p))},bt.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},bt.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var b=p.as,v=g(b,p.crossOrigin),z=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?o.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:z,fetchPriority:C}):b==="script"&&o.d.X(x,{crossOrigin:v,integrity:z,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bt.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=g(p.as,p.crossOrigin);o.d.M(x,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(x)},bt.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,v=g(b,p.crossOrigin);o.d.L(x,b,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bt.preloadModule=function(x,p){if(typeof x=="string")if(p){var b=g(p.as,p.crossOrigin);o.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(x)},bt.requestFormReset=function(x){o.d.r(x)},bt.unstable_batchedUpdates=function(x,p){return x(p)},bt.useFormState=function(x,p,b){return h.H.useFormState(x,p,b)},bt.useFormStatus=function(){return h.H.useHostTransitionStatus()},bt.version="19.1.0",bt}var Sp;function db(){if(Sp)return vd.exports;Sp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),vd.exports=ub(),vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function fb(){if(jp)return Ks;jp=1;var n=cb(),s=qo(),r=db();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return g(l),e;if(u===i)return g(l),t;u=u.sibling}throw Error(o(188))}if(a.return!==i.return)a=l,i=u;else{for(var m=!1,y=l.child;y;){if(y===a){m=!0,a=l,i=u;break}if(y===i){m=!0,i=l,a=u;break}y=y.sibling}if(!m){for(y=u.child;y;){if(y===a){m=!0,a=u,i=l;break}if(y===i){m=!0,i=u,a=l;break}y=y.sibling}if(!m)throw Error(o(189))}}if(a.alternate!==i)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,v=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),V=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),xe=Symbol.for("react.memo_cache_sentinel"),Ye=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=Ye&&e[Ye]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Symbol.for("react.client.reference");function Be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case T:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case Q:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case V:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case L:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:Be(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return Be(e(t))}catch{}}return null}var _e=Array.isArray,k=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],E=-1;function U(e){return{current:e}}function Z(e){0>E||(e.current=se[E],se[E]=null,E--)}function J(e,t){E++,se[E]=e.current,e.current=t}var ee=U(null),fe=U(null),ae=U(null),je=U(null);function ue(e,t){switch(J(ae,t),J(fe,e),J(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gg(t),e=Pg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ee),J(ee,e)}function Fe(){Z(ee),Z(fe),Z(ae)}function on(e){e.memoizedState!==null&&J(je,e);var t=ee.current,a=Pg(t,e.type);t!==a&&(J(fe,e),J(ee,a))}function At(e){fe.current===e&&(Z(ee),Z(fe)),je.current===e&&(Z(je),Ps._currentValue=I)}var Ue=Object.prototype.hasOwnProperty,at=n.unstable_scheduleCallback,Rt=n.unstable_cancelCallback,bl=n.unstable_shouldYield,nc=n.unstable_requestPaint,Lt=n.unstable_now,ac=n.unstable_getCurrentPriorityLevel,vl=n.unstable_ImmediatePriority,Sl=n.unstable_UserBlockingPriority,Xa=n.unstable_NormalPriority,F=n.unstable_LowPriority,Re=n.unstable_IdlePriority,pt=n.log,ut=n.unstable_setDisableYieldValue,Ji=null,Bt=null;function Pn(e){if(typeof pt=="function"&&ut(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Ji,e)}catch{}}var Ht=Math.clz32?Math.clz32:Vy,Py=Math.log,Yy=Math.LN2;function Vy(e){return e>>>=0,e===0?32:31-(Py(e)/Yy|0)|0}var jl=256,wl=4194304;function ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function El(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var y=i&134217727;return y!==0?(i=y&~u,i!==0?l=ba(i):(m&=y,m!==0?l=ba(m):a||(a=y&~e,a!==0&&(l=ba(a))))):(y=i&~u,y!==0?l=ba(y):m!==0?l=ba(m):a||(a=i&~e,a!==0&&(l=ba(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function Ii(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(){var e=jl;return jl<<=1,(jl&4194048)===0&&(jl=256),e}function zf(){var e=wl;return wl<<=1,(wl&62914560)===0&&(wl=4194304),e}function ic(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Wi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fy(e,t,a,i,l,u){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,D=e.hiddenUpdates;for(a=m&~a;0<a;){var H=31-Ht(a),Y=1<<H;y[H]=0,S[H]=-1;var M=D[H];if(M!==null)for(D[H]=null,H=0;H<M.length;H++){var N=M[H];N!==null&&(N.lane&=-536870913)}a&=~Y}i!==0&&Af(e,i,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Af(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ht(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&4194090}function Rf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Ht(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function sc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tf(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:op(e.type))}function Qy(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var Yn=Math.random().toString(36).slice(2),yt="__reactFiber$"+Yn,Tt="__reactProps$"+Yn,Fa="__reactContainer$"+Yn,rc="__reactEvents$"+Yn,Ky="__reactListeners$"+Yn,Zy="__reactHandles$"+Yn,Cf="__reactResources$"+Yn,es="__reactMarker$"+Yn;function oc(e){delete e[yt],delete e[Tt],delete e[rc],delete e[Ky],delete e[Zy]}function Qa(e){var t=e[yt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Fa]||a[yt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Fg(e);e!==null;){if(a=e[yt])return a;e=Fg(e)}return t}e=a,a=e.parentNode}return null}function Ka(e){if(e=e[yt]||e[Fa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ts(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Za(e){var t=e[Cf];return t||(t=e[Cf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[es]=!0}var Of=new Set,Df={};function va(e,t){Ja(e,t),Ja(e+"Capture",t)}function Ja(e,t){for(Df[e]=t,e=0;e<t.length;e++)Of.add(t[e])}var Jy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kf={},Mf={};function Iy(e){return Ue.call(Mf,e)?!0:Ue.call(kf,e)?!1:Jy.test(e)?Mf[e]=!0:(kf[e]=!0,!1)}function $l(e,t,a){if(Iy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function zl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function En(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}var cc,Nf;function Ia(e){if(cc===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);cc=t&&t[1]||"",Nf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cc+e+Nf}var uc=!1;function dc(e,t){if(!e||uc)return"";uc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(N){var M=N}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(N){M=N}e.call(Y.prototype)}}else{try{throw Error()}catch(N){M=N}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(N){if(N&&M&&typeof N.stack=="string")return[N.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),m=u[0],y=u[1];if(m&&y){var S=m.split(`
`),D=y.split(`
`);for(l=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(i===S.length||l===D.length)for(i=S.length-1,l=D.length-1;1<=i&&0<=l&&S[i]!==D[l];)l--;for(;1<=i&&0<=l;i--,l--)if(S[i]!==D[l]){if(i!==1||l!==1)do if(i--,l--,0>l||S[i]!==D[l]){var H=`
`+S[i].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=i&&0<=l);break}}}finally{uc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ia(a):""}function Wy(e){switch(e.tag){case 26:case 27:case 5:return Ia(e.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 15:return dc(e.type,!1);case 11:return dc(e.type.render,!1);case 1:return dc(e.type,!0);case 31:return Ia("Activity");default:return""}}function _f(e){try{var t="";do t+=Wy(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function e1(e){var t=Uf(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Al(e){e._valueTracker||(e._valueTracker=e1(e))}function Lf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Uf(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var t1=/[\n"\\]/g;function Zt(e){return e.replace(t1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fc(e,t,a,i,l,u,m,y){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kt(t)):e.value!==""+Kt(t)&&(e.value=""+Kt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?hc(e,m,Kt(t)):a!=null?hc(e,m,Kt(a)):i!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Kt(y):e.removeAttribute("name")}function Bf(e,t,a,i,l,u,m,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;a=a!=null?""+Kt(a):"",t=t!=null?""+Kt(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=y?e.checked:!!i,e.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function hc(e,t,a){t==="number"&&Rl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Wa(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Kt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Hf(e,t,a){if(t!=null&&(t=""+Kt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Kt(a):""}function qf(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(o(92));if(_e(i)){if(1<i.length)throw Error(o(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Kt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i)}function ei(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var n1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gf(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||n1.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Pf(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Gf(e,l,i)}else for(var u in t)t.hasOwnProperty(u)&&Gf(e,u,t[u])}function mc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var a1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(e){return i1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gc=null;function pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ti=null,ni=null;function Yf(e){var t=Ka(e);if(t&&(e=t.stateNode)){var a=e[Tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[Tt]||null;if(!l)throw Error(o(90));fc(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Lf(i)}break e;case"textarea":Hf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Wa(e,!!a.multiple,t,!1)}}}var yc=!1;function Vf(e,t,a){if(yc)return e(t,a);yc=!0;try{var i=e(t);return i}finally{if(yc=!1,(ti!==null||ni!==null)&&(mr(),ti&&(t=ti,e=ni,ni=ti=null,Yf(t),e)))for(t=0;t<e.length;t++)Yf(e[t])}}function ns(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Tt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=!1;if($n)try{var as={};Object.defineProperty(as,"passive",{get:function(){xc=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{xc=!1}var Vn=null,bc=null,Cl=null;function Xf(){if(Cl)return Cl;var e,t=bc,a=t.length,i,l="value"in Vn?Vn.value:Vn.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(i=1;i<=m&&t[a-i]===l[u-i];i++);return Cl=l.slice(e,1<i?1-i:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function Ff(){return!1}function Ct(e){function t(a,i,l,u,m){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Dl:Ff,this.isPropagationStopped=Ff,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),t}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Ct(Sa),is=b({},Sa,{view:0,detail:0}),s1=Ct(is),vc,Sc,ss,Ml=b({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ss&&(ss&&e.type==="mousemove"?(vc=e.screenX-ss.screenX,Sc=e.screenY-ss.screenY):Sc=vc=0,ss=e),vc)},movementY:function(e){return"movementY"in e?e.movementY:Sc}}),Qf=Ct(Ml),l1=b({},Ml,{dataTransfer:0}),r1=Ct(l1),o1=b({},is,{relatedTarget:0}),jc=Ct(o1),c1=b({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),u1=Ct(c1),d1=b({},Sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),f1=Ct(d1),h1=b({},Sa,{data:0}),Kf=Ct(h1),m1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p1[e])?!!t[e]:!1}function wc(){return y1}var x1=b({},is,{key:function(e){if(e.key){var t=m1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b1=Ct(x1),v1=b({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Ct(v1),S1=b({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),j1=Ct(S1),w1=b({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),E1=Ct(w1),$1=b({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z1=Ct($1),A1=b({},Sa,{newState:0,oldState:0}),R1=Ct(A1),T1=[9,13,27,32],Ec=$n&&"CompositionEvent"in window,ls=null;$n&&"documentMode"in document&&(ls=document.documentMode);var C1=$n&&"TextEvent"in window&&!ls,Jf=$n&&(!Ec||ls&&8<ls&&11>=ls),If=" ",Wf=!1;function eh(e,t){switch(e){case"keyup":return T1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ai=!1;function O1(e,t){switch(e){case"compositionend":return th(t);case"keypress":return t.which!==32?null:(Wf=!0,If);case"textInput":return e=t.data,e===If&&Wf?null:e;default:return null}}function D1(e,t){if(ai)return e==="compositionend"||!Ec&&eh(e,t)?(e=Xf(),Cl=bc=Vn=null,ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jf&&t.locale!=="ko"?null:t.data;default:return null}}var k1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!k1[e.type]:t==="textarea"}function ah(e,t,a,i){ti?ni?ni.push(i):ni=[i]:ti=i,t=vr(t,"onChange"),0<t.length&&(a=new kl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var rs=null,os=null;function M1(e){Ug(e,0)}function Nl(e){var t=ts(e);if(Lf(t))return e}function ih(e,t){if(e==="change")return t}var sh=!1;if($n){var $c;if($n){var zc="oninput"in document;if(!zc){var lh=document.createElement("div");lh.setAttribute("oninput","return;"),zc=typeof lh.oninput=="function"}$c=zc}else $c=!1;sh=$c&&(!document.documentMode||9<document.documentMode)}function rh(){rs&&(rs.detachEvent("onpropertychange",oh),os=rs=null)}function oh(e){if(e.propertyName==="value"&&Nl(os)){var t=[];ah(t,os,e,pc(e)),Vf(M1,t)}}function N1(e,t,a){e==="focusin"?(rh(),rs=t,os=a,rs.attachEvent("onpropertychange",oh)):e==="focusout"&&rh()}function _1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(os)}function U1(e,t){if(e==="click")return Nl(t)}function L1(e,t){if(e==="input"||e==="change")return Nl(t)}function B1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:B1;function cs(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Ue.call(t,l)||!qt(e[l],t[l]))return!1}return!0}function ch(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uh(e,t){var a=ch(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ch(a)}}function dh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Rl(e.document)}return t}function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var H1=$n&&"documentMode"in document&&11>=document.documentMode,ii=null,Rc=null,us=null,Tc=!1;function hh(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tc||ii==null||ii!==Rl(i)||(i=ii,"selectionStart"in i&&Ac(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),us&&cs(us,i)||(us=i,i=vr(Rc,"onSelect"),0<i.length&&(t=new kl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=ii)))}function ja(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var si={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Cc={},mh={};$n&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function wa(e){if(Cc[e])return Cc[e];if(!si[e])return e;var t=si[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in mh)return Cc[e]=t[a];return e}var gh=wa("animationend"),ph=wa("animationiteration"),yh=wa("animationstart"),q1=wa("transitionrun"),G1=wa("transitionstart"),P1=wa("transitioncancel"),xh=wa("transitionend"),bh=new Map,Oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Oc.push("scrollEnd");function cn(e,t){bh.set(e,t),va(t,[e])}var vh=new WeakMap;function Jt(e,t){if(typeof e=="object"&&e!==null){var a=vh.get(e);return a!==void 0?a:(t={value:e,source:t,stack:_f(t)},vh.set(e,t),t)}return{value:e,source:t,stack:_f(t)}}var It=[],li=0,Dc=0;function _l(){for(var e=li,t=Dc=li=0;t<e;){var a=It[t];It[t++]=null;var i=It[t];It[t++]=null;var l=It[t];It[t++]=null;var u=It[t];if(It[t++]=null,i!==null&&l!==null){var m=i.pending;m===null?l.next=l:(l.next=m.next,m.next=l),i.pending=l}u!==0&&Sh(a,l,u)}}function Ul(e,t,a,i){It[li++]=e,It[li++]=t,It[li++]=a,It[li++]=i,Dc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function kc(e,t,a,i){return Ul(e,t,a,i),Ll(e)}function ri(e,t){return Ul(e,null,null,t),Ll(e)}function Sh(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,i=u.alternate,i!==null&&(i.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Ht(a),e=u.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),u):null}function Ll(e){if(50<Ns)throw Ns=0,Bu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function Y1(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,a,i){return new Y1(e,t,a,i)}function Mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zn(e,t){var a=e.alternate;return a===null?(a=Gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jh(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bl(e,t,a,i,l,u){var m=0;if(i=e,typeof e=="function")Mc(e)&&(m=1);else if(typeof e=="string")m=Xx(e,a,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=Gt(31,a,t,l),e.elementType=Se,e.lanes=u,e;case j:return Ea(a.children,l,u,t);case A:m=8,l|=24;break;case T:return e=Gt(12,a,t,l|2),e.elementType=T,e.lanes=u,e;case P:return e=Gt(13,a,t,l),e.elementType=P,e.lanes=u,e;case Q:return e=Gt(19,a,t,l),e.elementType=Q,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:case V:m=10;break e;case X:m=9;break e;case L:m=11;break e;case B:m=14;break e;case re:m=16,i=null;break e}m=29,a=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Gt(m,a,t,l),t.elementType=e,t.type=i,t.lanes=u,t}function Ea(e,t,a,i){return e=Gt(7,e,i,t),e.lanes=a,e}function Nc(e,t,a){return e=Gt(6,e,null,t),e.lanes=a,e}function _c(e,t,a){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ci=[],ui=0,Hl=null,ql=0,Wt=[],en=0,$a=null,An=1,Rn="";function za(e,t){ci[ui++]=ql,ci[ui++]=Hl,Hl=e,ql=t}function wh(e,t,a){Wt[en++]=An,Wt[en++]=Rn,Wt[en++]=$a,$a=e;var i=An;e=Rn;var l=32-Ht(i)-1;i&=~(1<<l),a+=1;var u=32-Ht(t)+l;if(30<u){var m=l-l%5;u=(i&(1<<m)-1).toString(32),i>>=m,l-=m,An=1<<32-Ht(t)+l|a<<l|i,Rn=u+e}else An=1<<u|a<<l|i,Rn=e}function Uc(e){e.return!==null&&(za(e,1),wh(e,1,0))}function Lc(e){for(;e===Hl;)Hl=ci[--ui],ci[ui]=null,ql=ci[--ui],ci[ui]=null;for(;e===$a;)$a=Wt[--en],Wt[en]=null,Rn=Wt[--en],Wt[en]=null,An=Wt[--en],Wt[en]=null}var wt=null,Ve=null,ze=!1,Aa=null,pn=!1,Bc=Error(o(519));function Ra(e){var t=Error(o(418,""));throw hs(Jt(t,e)),Bc}function Eh(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[yt]=e,t[Tt]=i,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<Us.length;a++)ve(Us[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Bf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Al(t);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),qf(t,i.value,i.defaultValue,i.children),Al(t)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||qg(t.textContent,a)?(i.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),i.onScroll!=null&&ve("scroll",t),i.onScrollEnd!=null&&ve("scrollend",t),i.onClick!=null&&(t.onclick=Sr),t=!0):t=!1,t||Ra(e)}function $h(e){for(wt=e.return;wt;)switch(wt.tag){case 5:case 13:pn=!1;return;case 27:case 3:pn=!0;return;default:wt=wt.return}}function ds(e){if(e!==wt)return!1;if(!ze)return $h(e),ze=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||td(e.type,e.memoizedProps)),a=!a),a&&Ve&&Ra(e),$h(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ve=dn(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ve=null}}else t===27?(t=Ve,ra(e.type)?(e=sd,sd=null,Ve=e):Ve=t):Ve=wt?dn(e.stateNode.nextSibling):null;return!0}function fs(){Ve=wt=null,ze=!1}function zh(){var e=Aa;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),Aa=null),e}function hs(e){Aa===null?Aa=[e]:Aa.push(e)}var Hc=U(null),Ta=null,Tn=null;function Xn(e,t,a){J(Hc,t._currentValue),t._currentValue=a}function Cn(e){e._currentValue=Hc.current,Z(Hc)}function qc(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Gc(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var y=u;u=l;for(var S=0;S<t.length;S++)if(y.context===t[S]){u.lanes|=a,y=u.alternate,y!==null&&(y.lanes|=a),qc(u.return,a,e),i||(m=null);break e}u=y.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(o(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),qc(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function ms(e,t,a,i){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var y=l.type;qt(l.pendingProps.value,m.value)||(e!==null?e.push(y):e=[y])}}else if(l===je.current){if(m=l.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ps):e=[Ps])}l=l.return}e!==null&&Gc(t,e,a,i),t.flags|=262144}function Gl(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ta=e,Tn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return Ah(Ta,e)}function Pl(e,t){return Ta===null&&Ca(e),Ah(e,t)}function Ah(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Tn===null){if(e===null)throw Error(o(308));Tn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Tn=Tn.next=t;return a}var V1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},X1=n.unstable_scheduleCallback,F1=n.unstable_NormalPriority,et={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pc(){return{controller:new V1,data:new Map,refCount:0}}function gs(e){e.refCount--,e.refCount===0&&X1(F1,function(){e.controller.abort()})}var ps=null,Yc=0,di=0,fi=null;function Q1(e,t){if(ps===null){var a=ps=[];Yc=0,di=Xu(),fi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Yc++,t.then(Rh,Rh),t}function Rh(){if(--Yc===0&&ps!==null){fi!==null&&(fi.status="fulfilled");var e=ps;ps=null,di=0,fi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function K1(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Th=k.S;k.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Q1(e,t),Th!==null&&Th(e,t)};var Oa=U(null);function Vc(){var e=Oa.current;return e!==null?e:He.pooledCache}function Yl(e,t){t===null?J(Oa,Oa.current):J(Oa,t.pool)}function Ch(){var e=Vc();return e===null?null:{parent:et._currentValue,pool:e}}var ys=Error(o(460)),Oh=Error(o(474)),Vl=Error(o(542)),Xc={then:function(){}};function Dh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xl(){}function kh(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Xl,Xl),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nh(e),e;default:if(typeof t.status=="string")t.then(Xl,Xl);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nh(e),e}throw xs=t,ys}}var xs=null;function Mh(){if(xs===null)throw Error(o(459));var e=xs;return xs=null,e}function Nh(e){if(e===ys||e===Vl)throw Error(o(483))}var Fn=!1;function Fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Te&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Ll(e),Sh(e,null,a),t}return Ul(e,i,t,a),Ll(e)}function bs(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Rf(e,a)}}function Kc(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Zc=!1;function vs(){if(Zc){var e=fi;if(e!==null)throw e}}function Ss(e,t,a,i){Zc=!1;var l=e.updateQueue;Fn=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var S=y,D=S.next;S.next=null,m===null?u=D:m.next=D,m=S;var H=e.alternate;H!==null&&(H=H.updateQueue,y=H.lastBaseUpdate,y!==m&&(y===null?H.firstBaseUpdate=D:y.next=D,H.lastBaseUpdate=S))}if(u!==null){var Y=l.baseState;m=0,H=D=S=null,y=u;do{var M=y.lane&-536870913,N=M!==y.lane;if(N?(we&M)===M:(i&M)===M){M!==0&&M===di&&(Zc=!0),H!==null&&(H=H.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var oe=e,ie=y;M=t;var Me=a;switch(ie.tag){case 1:if(oe=ie.payload,typeof oe=="function"){Y=oe.call(Me,Y,M);break e}Y=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ie.payload,M=typeof oe=="function"?oe.call(Me,Y,M):oe,M==null)break e;Y=b({},Y,M);break e;case 2:Fn=!0}}M=y.callback,M!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[M]:N.push(M))}else N={lane:M,tag:y.tag,payload:y.payload,callback:y.callback,next:null},H===null?(D=H=N,S=Y):H=H.next=N,m|=M;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;N=y,y=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);H===null&&(S=Y),l.baseState=S,l.firstBaseUpdate=D,l.lastBaseUpdate=H,u===null&&(l.shared.lanes=0),aa|=m,e.lanes=m,e.memoizedState=Y}}function _h(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Uh(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_h(a[e],t)}var hi=U(null),Fl=U(0);function Lh(e,t){e=Un,J(Fl,e),J(hi,t),Un=e|t.baseLanes}function Jc(){J(Fl,Un),J(hi,hi.current)}function Ic(){Un=Fl.current,Z(hi),Z(Fl)}var Zn=0,pe=null,De=null,Je=null,Ql=!1,mi=!1,Da=!1,Kl=0,js=0,gi=null,Z1=0;function Qe(){throw Error(o(321))}function Wc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!qt(e[a],t[a]))return!1;return!0}function eu(e,t,a,i,l,u){return Zn=u,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Sm:jm,Da=!1,u=a(i,l),Da=!1,mi&&(u=Hh(t,a,i,l)),Bh(e),u}function Bh(e){k.H=tr;var t=De!==null&&De.next!==null;if(Zn=0,Je=De=pe=null,Ql=!1,js=0,gi=null,t)throw Error(o(300));e===null||st||(e=e.dependencies,e!==null&&Gl(e)&&(st=!0))}function Hh(e,t,a,i){pe=e;var l=0;do{if(mi&&(gi=null),js=0,mi=!1,25<=l)throw Error(o(301));if(l+=1,Je=De=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}k.H=ax,u=t(a,i)}while(mi);return u}function J1(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?ws(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(pe.flags|=1024),t}function tu(){var e=Kl!==0;return Kl=0,e}function nu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function au(e){if(Ql){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ql=!1}Zn=0,Je=De=pe=null,mi=!1,js=Kl=0,gi=null}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?pe.memoizedState=Je=e:Je=Je.next=e,Je}function Ie(){if(De===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Je===null?pe.memoizedState:Je.next;if(t!==null)Je=t,De=e;else{if(e===null)throw pe.alternate===null?Error(o(467)):Error(o(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Je===null?pe.memoizedState=Je=e:Je=Je.next=e}return Je}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ws(e){var t=js;return js+=1,gi===null&&(gi=[]),e=kh(gi,e,t),t=pe,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Sm:jm),e}function Zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ws(e);if(e.$$typeof===V)return xt(e)}throw Error(o(438,String(e)))}function su(e){var t=null,a=pe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=pe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=iu(),pe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=xe;return t.index++,a}function On(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Ie();return lu(t,De,e)}function lu(e,t,a){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=a;var l=e.baseQueue,u=i.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}t.baseQueue=l=u,i.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var y=m=null,S=null,D=t,H=!1;do{var Y=D.lane&-536870913;if(Y!==D.lane?(we&Y)===Y:(Zn&Y)===Y){var M=D.revertLane;if(M===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),Y===di&&(H=!0);else if((Zn&M)===M){D=D.next,M===di&&(H=!0);continue}else Y={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(y=S=Y,m=u):S=S.next=Y,pe.lanes|=M,aa|=M;Y=D.action,Da&&a(u,Y),u=D.hasEagerState?D.eagerState:a(u,Y)}else M={lane:Y,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(y=S=M,m=u):S=S.next=M,pe.lanes|=Y,aa|=Y;D=D.next}while(D!==null&&D!==t);if(S===null?m=u:S.next=y,!qt(u,e.memoizedState)&&(st=!0,H&&(a=fi,a!==null)))throw a;e.memoizedState=u,e.baseState=m,e.baseQueue=S,i.lastRenderedState=u}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ru(e){var t=Ie(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);qt(u,t.memoizedState)||(st=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,i]}function qh(e,t,a){var i=pe,l=Ie(),u=ze;if(u){if(a===void 0)throw Error(o(407));a=a()}else a=t();var m=!qt((De||l).memoizedState,a);m&&(l.memoizedState=a,st=!0),l=l.queue;var y=Yh.bind(null,i,l,e);if(Es(2048,8,y,[e]),l.getSnapshot!==t||m||Je!==null&&Je.memoizedState.tag&1){if(i.flags|=2048,pi(9,Il(),Ph.bind(null,i,l,a,t),null),He===null)throw Error(o(349));u||(Zn&124)!==0||Gh(i,t,a)}return a}function Gh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=pe.updateQueue,t===null?(t=iu(),pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ph(e,t,a,i){t.value=a,t.getSnapshot=i,Vh(t)&&Xh(e)}function Yh(e,t,a){return a(function(){Vh(t)&&Xh(e)})}function Vh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!qt(e,a)}catch{return!0}}function Xh(e){var t=ri(e,2);t!==null&&Ft(t,e,2)}function ou(e){var t=Ot();if(typeof e=="function"){var a=e;if(e=a(),Da){Pn(!0);try{a()}finally{Pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t}function Fh(e,t,a,i){return e.baseState=a,lu(e,De,typeof i=="function"?i:On)}function I1(e,t,a,i,l){if(er(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};k.T!==null?a(!0):u.isTransition=!1,i(u),a=t.pending,a===null?(u.next=t.pending=u,Qh(t,u)):(u.next=a.next,t.pending=a.next=u)}}function Qh(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var u=k.T,m={};k.T=m;try{var y=a(l,i),S=k.S;S!==null&&S(m,y),Kh(e,t,y)}catch(D){cu(e,t,D)}finally{k.T=u}}else try{u=a(l,i),Kh(e,t,u)}catch(D){cu(e,t,D)}}function Kh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Zh(e,t,i)},function(i){return cu(e,t,i)}):Zh(e,t,a)}function Zh(e,t,a){t.status="fulfilled",t.value=a,Jh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Qh(e,a)))}function cu(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Jh(t),t=t.next;while(t!==i)}e.action=null}function Jh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ih(e,t){return t}function Wh(e,t){if(ze){var a=He.formState;if(a!==null){e:{var i=pe;if(ze){if(Ve){t:{for(var l=Ve,u=pn;l.nodeType!==8;){if(!u){l=null;break t}if(l=dn(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Ve=dn(l.nextSibling),i=l.data==="F!";break e}}Ra(i)}i=!1}i&&(t=a[0])}}return a=Ot(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ih,lastRenderedState:t},a.queue=i,a=xm.bind(null,pe,i),i.dispatch=a,i=ou(!1),u=mu.bind(null,pe,!1,i.queue),i=Ot(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=I1.bind(null,pe,l,u,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function em(e){var t=Ie();return tm(t,De,e)}function tm(e,t,a){if(t=lu(e,t,Ih)[0],e=Jl(On)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ws(t)}catch(m){throw m===ys?Vl:m}else i=t;t=Ie();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(pe.flags|=2048,pi(9,Il(),W1.bind(null,l,a),null)),[i,u,e]}function W1(e,t){e.action=t}function nm(e){var t=Ie(),a=De;if(a!==null)return tm(t,a,e);Ie(),t=t.memoizedState,a=Ie();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function pi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=pe.updateQueue,t===null&&(t=iu(),pe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function Il(){return{destroy:void 0,resource:void 0}}function am(){return Ie().memoizedState}function Wl(e,t,a,i){var l=Ot();i=i===void 0?null:i,pe.flags|=e,l.memoizedState=pi(1|t,Il(),a,i)}function Es(e,t,a,i){var l=Ie();i=i===void 0?null:i;var u=l.memoizedState.inst;De!==null&&i!==null&&Wc(i,De.memoizedState.deps)?l.memoizedState=pi(t,u,a,i):(pe.flags|=e,l.memoizedState=pi(1|t,u,a,i))}function im(e,t){Wl(8390656,8,e,t)}function sm(e,t){Es(2048,8,e,t)}function lm(e,t){return Es(4,2,e,t)}function rm(e,t){return Es(4,4,e,t)}function om(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cm(e,t,a){a=a!=null?a.concat([e]):null,Es(4,4,om.bind(null,t,e),a)}function uu(){}function um(e,t){var a=Ie();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Wc(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function dm(e,t){var a=Ie();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Wc(t,i[1]))return i[0];if(i=e(),Da){Pn(!0);try{e()}finally{Pn(!1)}}return a.memoizedState=[i,t],i}function du(e,t,a){return a===void 0||(Zn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=mg(),pe.lanes|=e,aa|=e,a)}function fm(e,t,a,i){return qt(a,t)?a:hi.current!==null?(e=du(e,a,i),qt(e,t)||(st=!0),e):(Zn&42)===0?(st=!0,e.memoizedState=a):(e=mg(),pe.lanes|=e,aa|=e,t)}function hm(e,t,a,i,l){var u=K.p;K.p=u!==0&&8>u?u:8;var m=k.T,y={};k.T=y,mu(e,!1,t,a);try{var S=l(),D=k.S;if(D!==null&&D(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=K1(S,i);$s(e,t,H,Xt(e))}else $s(e,t,i,Xt(e))}catch(Y){$s(e,t,{then:function(){},status:"rejected",reason:Y},Xt())}finally{K.p=u,k.T=m}}function ex(){}function fu(e,t,a,i){if(e.tag!==5)throw Error(o(476));var l=mm(e).queue;hm(e,l,t,I,a===null?ex:function(){return gm(e),a(i)})}function mm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gm(e){var t=mm(e).next.queue;$s(e,t,{},Xt())}function hu(){return xt(Ps)}function pm(){return Ie().memoizedState}function ym(){return Ie().memoizedState}function tx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Xt();e=Qn(a);var i=Kn(t,e,a);i!==null&&(Ft(i,t,a),bs(i,t,a)),t={cache:Pc()},e.payload=t;return}t=t.return}}function nx(e,t,a){var i=Xt();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},er(e)?bm(t,a):(a=kc(e,t,a,i),a!==null&&(Ft(a,e,i),vm(a,t,i)))}function xm(e,t,a){var i=Xt();$s(e,t,a,i)}function $s(e,t,a,i){var l={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(er(e))bm(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,y=u(m,a);if(l.hasEagerState=!0,l.eagerState=y,qt(y,m))return Ul(e,t,l,0),He===null&&_l(),!1}catch{}finally{}if(a=kc(e,t,l,i),a!==null)return Ft(a,e,i),vm(a,t,i),!0}return!1}function mu(e,t,a,i){if(i={lane:2,revertLane:Xu(),action:i,hasEagerState:!1,eagerState:null,next:null},er(e)){if(t)throw Error(o(479))}else t=kc(e,a,i,2),t!==null&&Ft(t,e,2)}function er(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function bm(e,t){mi=Ql=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function vm(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Rf(e,a)}}var tr={readContext:xt,use:Zl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Sm={readContext:xt,use:Zl,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:im,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Wl(4194308,4,om.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Wl(4194308,4,e,t)},useInsertionEffect:function(e,t){Wl(4,2,e,t)},useMemo:function(e,t){var a=Ot();t=t===void 0?null:t;var i=e();if(Da){Pn(!0);try{e()}finally{Pn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Ot();if(a!==void 0){var l=a(t);if(Da){Pn(!0);try{a(t)}finally{Pn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=nx.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:function(e){e=ou(e);var t=e.queue,a=xm.bind(null,pe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:uu,useDeferredValue:function(e,t){var a=Ot();return du(a,e,t)},useTransition:function(){var e=ou(!1);return e=hm.bind(null,pe,e.queue,!0,!1),Ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=pe,l=Ot();if(ze){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),He===null)throw Error(o(349));(we&124)!==0||Gh(i,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,im(Yh.bind(null,i,u,e),[e]),i.flags|=2048,pi(9,Il(),Ph.bind(null,i,u,a,t),null),a},useId:function(){var e=Ot(),t=He.identifierPrefix;if(ze){var a=Rn,i=An;a=(i&~(1<<32-Ht(i)-1)).toString(32)+a,t="«"+t+"R"+a,a=Kl++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Z1++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:hu,useFormState:Wh,useActionState:Wh,useOptimistic:function(e){var t=Ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=mu.bind(null,pe,!0,a),a.dispatch=t,[e,t]},useMemoCache:su,useCacheRefresh:function(){return Ot().memoizedState=tx.bind(null,pe)}},jm={readContext:xt,use:Zl,useCallback:um,useContext:xt,useEffect:sm,useImperativeHandle:cm,useInsertionEffect:lm,useLayoutEffect:rm,useMemo:dm,useReducer:Jl,useRef:am,useState:function(){return Jl(On)},useDebugValue:uu,useDeferredValue:function(e,t){var a=Ie();return fm(a,De.memoizedState,e,t)},useTransition:function(){var e=Jl(On)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:ws(e),t]},useSyncExternalStore:qh,useId:pm,useHostTransitionStatus:hu,useFormState:em,useActionState:em,useOptimistic:function(e,t){var a=Ie();return Fh(a,De,e,t)},useMemoCache:su,useCacheRefresh:ym},ax={readContext:xt,use:Zl,useCallback:um,useContext:xt,useEffect:sm,useImperativeHandle:cm,useInsertionEffect:lm,useLayoutEffect:rm,useMemo:dm,useReducer:ru,useRef:am,useState:function(){return ru(On)},useDebugValue:uu,useDeferredValue:function(e,t){var a=Ie();return De===null?du(a,e,t):fm(a,De.memoizedState,e,t)},useTransition:function(){var e=ru(On)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:ws(e),t]},useSyncExternalStore:qh,useId:pm,useHostTransitionStatus:hu,useFormState:nm,useActionState:nm,useOptimistic:function(e,t){var a=Ie();return De!==null?Fh(a,De,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:su,useCacheRefresh:ym},yi=null,zs=0;function nr(e){var t=zs;return zs+=1,yi===null&&(yi=[]),kh(yi,e,t)}function As(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ar(e,t){throw t.$$typeof===v?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wm(e){var t=e._init;return t(e._payload)}function Em(e){function t(R,$){if(e){var O=R.deletions;O===null?(R.deletions=[$],R.flags|=16):O.push($)}}function a(R,$){if(!e)return null;for(;$!==null;)t(R,$),$=$.sibling;return null}function i(R){for(var $=new Map;R!==null;)R.key!==null?$.set(R.key,R):$.set(R.index,R),R=R.sibling;return $}function l(R,$){return R=zn(R,$),R.index=0,R.sibling=null,R}function u(R,$,O){return R.index=O,e?(O=R.alternate,O!==null?(O=O.index,O<$?(R.flags|=67108866,$):O):(R.flags|=67108866,$)):(R.flags|=1048576,$)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function y(R,$,O,q){return $===null||$.tag!==6?($=Nc(O,R.mode,q),$.return=R,$):($=l($,O),$.return=R,$)}function S(R,$,O,q){var te=O.type;return te===j?H(R,$,O.props.children,q,O.key):$!==null&&($.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===re&&wm(te)===$.type)?($=l($,O.props),As($,O),$.return=R,$):($=Bl(O.type,O.key,O.props,null,R.mode,q),As($,O),$.return=R,$)}function D(R,$,O,q){return $===null||$.tag!==4||$.stateNode.containerInfo!==O.containerInfo||$.stateNode.implementation!==O.implementation?($=_c(O,R.mode,q),$.return=R,$):($=l($,O.children||[]),$.return=R,$)}function H(R,$,O,q,te){return $===null||$.tag!==7?($=Ea(O,R.mode,q,te),$.return=R,$):($=l($,O),$.return=R,$)}function Y(R,$,O){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Nc(""+$,R.mode,O),$.return=R,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case z:return O=Bl($.type,$.key,$.props,null,R.mode,O),As(O,$),O.return=R,O;case C:return $=_c($,R.mode,O),$.return=R,$;case re:var q=$._init;return $=q($._payload),Y(R,$,O)}if(_e($)||Ne($))return $=Ea($,R.mode,O,null),$.return=R,$;if(typeof $.then=="function")return Y(R,nr($),O);if($.$$typeof===V)return Y(R,Pl(R,$),O);ar(R,$)}return null}function M(R,$,O,q){var te=$!==null?$.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return te!==null?null:y(R,$,""+O,q);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case z:return O.key===te?S(R,$,O,q):null;case C:return O.key===te?D(R,$,O,q):null;case re:return te=O._init,O=te(O._payload),M(R,$,O,q)}if(_e(O)||Ne(O))return te!==null?null:H(R,$,O,q,null);if(typeof O.then=="function")return M(R,$,nr(O),q);if(O.$$typeof===V)return M(R,$,Pl(R,O),q);ar(R,O)}return null}function N(R,$,O,q,te){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return R=R.get(O)||null,y($,R,""+q,te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case z:return R=R.get(q.key===null?O:q.key)||null,S($,R,q,te);case C:return R=R.get(q.key===null?O:q.key)||null,D($,R,q,te);case re:var ye=q._init;return q=ye(q._payload),N(R,$,O,q,te)}if(_e(q)||Ne(q))return R=R.get(O)||null,H($,R,q,te,null);if(typeof q.then=="function")return N(R,$,O,nr(q),te);if(q.$$typeof===V)return N(R,$,O,Pl($,q),te);ar($,q)}return null}function oe(R,$,O,q){for(var te=null,ye=null,ne=$,le=$=0,rt=null;ne!==null&&le<O.length;le++){ne.index>le?(rt=ne,ne=null):rt=ne.sibling;var $e=M(R,ne,O[le],q);if($e===null){ne===null&&(ne=rt);break}e&&ne&&$e.alternate===null&&t(R,ne),$=u($e,$,le),ye===null?te=$e:ye.sibling=$e,ye=$e,ne=rt}if(le===O.length)return a(R,ne),ze&&za(R,le),te;if(ne===null){for(;le<O.length;le++)ne=Y(R,O[le],q),ne!==null&&($=u(ne,$,le),ye===null?te=ne:ye.sibling=ne,ye=ne);return ze&&za(R,le),te}for(ne=i(ne);le<O.length;le++)rt=N(ne,R,le,O[le],q),rt!==null&&(e&&rt.alternate!==null&&ne.delete(rt.key===null?le:rt.key),$=u(rt,$,le),ye===null?te=rt:ye.sibling=rt,ye=rt);return e&&ne.forEach(function(fa){return t(R,fa)}),ze&&za(R,le),te}function ie(R,$,O,q){if(O==null)throw Error(o(151));for(var te=null,ye=null,ne=$,le=$=0,rt=null,$e=O.next();ne!==null&&!$e.done;le++,$e=O.next()){ne.index>le?(rt=ne,ne=null):rt=ne.sibling;var fa=M(R,ne,$e.value,q);if(fa===null){ne===null&&(ne=rt);break}e&&ne&&fa.alternate===null&&t(R,ne),$=u(fa,$,le),ye===null?te=fa:ye.sibling=fa,ye=fa,ne=rt}if($e.done)return a(R,ne),ze&&za(R,le),te;if(ne===null){for(;!$e.done;le++,$e=O.next())$e=Y(R,$e.value,q),$e!==null&&($=u($e,$,le),ye===null?te=$e:ye.sibling=$e,ye=$e);return ze&&za(R,le),te}for(ne=i(ne);!$e.done;le++,$e=O.next())$e=N(ne,R,le,$e.value,q),$e!==null&&(e&&$e.alternate!==null&&ne.delete($e.key===null?le:$e.key),$=u($e,$,le),ye===null?te=$e:ye.sibling=$e,ye=$e);return e&&ne.forEach(function(ib){return t(R,ib)}),ze&&za(R,le),te}function Me(R,$,O,q){if(typeof O=="object"&&O!==null&&O.type===j&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case z:e:{for(var te=O.key;$!==null;){if($.key===te){if(te=O.type,te===j){if($.tag===7){a(R,$.sibling),q=l($,O.props.children),q.return=R,R=q;break e}}else if($.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===re&&wm(te)===$.type){a(R,$.sibling),q=l($,O.props),As(q,O),q.return=R,R=q;break e}a(R,$);break}else t(R,$);$=$.sibling}O.type===j?(q=Ea(O.props.children,R.mode,q,O.key),q.return=R,R=q):(q=Bl(O.type,O.key,O.props,null,R.mode,q),As(q,O),q.return=R,R=q)}return m(R);case C:e:{for(te=O.key;$!==null;){if($.key===te)if($.tag===4&&$.stateNode.containerInfo===O.containerInfo&&$.stateNode.implementation===O.implementation){a(R,$.sibling),q=l($,O.children||[]),q.return=R,R=q;break e}else{a(R,$);break}else t(R,$);$=$.sibling}q=_c(O,R.mode,q),q.return=R,R=q}return m(R);case re:return te=O._init,O=te(O._payload),Me(R,$,O,q)}if(_e(O))return oe(R,$,O,q);if(Ne(O)){if(te=Ne(O),typeof te!="function")throw Error(o(150));return O=te.call(O),ie(R,$,O,q)}if(typeof O.then=="function")return Me(R,$,nr(O),q);if(O.$$typeof===V)return Me(R,$,Pl(R,O),q);ar(R,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,$!==null&&$.tag===6?(a(R,$.sibling),q=l($,O),q.return=R,R=q):(a(R,$),q=Nc(O,R.mode,q),q.return=R,R=q),m(R)):a(R,$)}return function(R,$,O,q){try{zs=0;var te=Me(R,$,O,q);return yi=null,te}catch(ne){if(ne===ys||ne===Vl)throw ne;var ye=Gt(29,ne,null,R.mode);return ye.lanes=q,ye.return=R,ye}finally{}}}var xi=Em(!0),$m=Em(!1),tn=U(null),yn=null;function Jn(e){var t=e.alternate;J(tt,tt.current&1),J(tn,e),yn===null&&(t===null||hi.current!==null||t.memoizedState!==null)&&(yn=e)}function zm(e){if(e.tag===22){if(J(tt,tt.current),J(tn,e),yn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(yn=e)}}else In()}function In(){J(tt,tt.current),J(tn,tn.current)}function Dn(e){Z(tn),yn===e&&(yn=null),Z(tt)}var tt=U(0);function ir(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||id(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function gu(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var pu={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Xt(),l=Qn(i);l.payload=t,a!=null&&(l.callback=a),t=Kn(e,l,i),t!==null&&(Ft(t,e,i),bs(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Xt(),l=Qn(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Kn(e,l,i),t!==null&&(Ft(t,e,i),bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Xt(),i=Qn(a);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,a),t!==null&&(Ft(t,e,a),bs(t,e,a))}};function Am(e,t,a,i,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,m):t.prototype&&t.prototype.isPureReactComponent?!cs(a,i)||!cs(l,u):!0}function Rm(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&pu.enqueueReplaceState(t,t.state,null)}function ka(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Tm(e){sr(e)}function Cm(e){console.error(e)}function Om(e){sr(e)}function lr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Dm(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function yu(e,t,a){return a=Qn(a),a.tag=3,a.payload={element:null},a.callback=function(){lr(e,t)},a}function km(e){return e=Qn(e),e.tag=3,e}function Mm(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;e.payload=function(){return l(u)},e.callback=function(){Dm(t,a,i)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Dm(t,a,i),typeof l!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function ix(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ms(t,a,l,!0),a=tn.current,a!==null){switch(a.tag){case 13:return yn===null?qu():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===Xc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Pu(e,i,l)),!1;case 22:return a.flags|=65536,i===Xc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Pu(e,i,l)),!1}throw Error(o(435,a.tag))}return Pu(e,i,l),qu(),!1}if(ze)return t=tn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Bc&&(e=Error(o(422),{cause:i}),hs(Jt(e,a)))):(i!==Bc&&(t=Error(o(423),{cause:i}),hs(Jt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Jt(i,a),l=yu(e.stateNode,i,l),Kc(e,l),Xe!==4&&(Xe=2)),!1;var u=Error(o(520),{cause:i});if(u=Jt(u,a),Ms===null?Ms=[u]:Ms.push(u),Xe!==4&&(Xe=2),t===null)return!0;i=Jt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=yu(a.stateNode,i,e),Kc(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ia===null||!ia.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=km(l),Mm(l,e,a,i),Kc(a,l),!1}a=a.return}while(a!==null);return!1}var Nm=Error(o(461)),st=!1;function dt(e,t,a,i){t.child=e===null?$m(t,null,a,i):xi(t,e.child,a,i)}function _m(e,t,a,i,l){a=a.render;var u=t.ref;if("ref"in i){var m={};for(var y in i)y!=="ref"&&(m[y]=i[y])}else m=i;return Ca(t),i=eu(e,t,a,m,u,l),y=tu(),e!==null&&!st?(nu(e,t,l),kn(e,t,l)):(ze&&y&&Uc(t),t.flags|=1,dt(e,t,i,l),t.child)}function Um(e,t,a,i,l){if(e===null){var u=a.type;return typeof u=="function"&&!Mc(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Lm(e,t,u,i,l)):(e=Bl(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!$u(e,l)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:cs,a(m,i)&&e.ref===t.ref)return kn(e,t,l)}return t.flags|=1,e=zn(u,i),e.ref=t.ref,e.return=t,t.child=e}function Lm(e,t,a,i,l){if(e!==null){var u=e.memoizedProps;if(cs(u,i)&&e.ref===t.ref)if(st=!1,t.pendingProps=i=u,$u(e,l))(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,kn(e,t,l)}return xu(e,t,a,i,l)}function Bm(e,t,a){var i=t.pendingProps,l=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=u!==null?u.baseLanes|a:a,e!==null){for(l=t.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;t.childLanes=u&~i}else t.childLanes=0,t.child=null;return Hm(e,t,i,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yl(t,u!==null?u.cachePool:null),u!==null?Lh(t,u):Jc(),zm(t);else return t.lanes=t.childLanes=536870912,Hm(e,t,u!==null?u.baseLanes|a:a,a)}else u!==null?(Yl(t,u.cachePool),Lh(t,u),In(),t.memoizedState=null):(e!==null&&Yl(t,null),Jc(),In());return dt(e,t,l,a),t.child}function Hm(e,t,a,i){var l=Vc();return l=l===null?null:{parent:et._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Yl(t,null),Jc(),zm(t),e!==null&&ms(e,t,i,!0),null}function rr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function xu(e,t,a,i,l){return Ca(t),a=eu(e,t,a,i,void 0,l),i=tu(),e!==null&&!st?(nu(e,t,l),kn(e,t,l)):(ze&&i&&Uc(t),t.flags|=1,dt(e,t,a,l),t.child)}function qm(e,t,a,i,l,u){return Ca(t),t.updateQueue=null,a=Hh(t,i,a,l),Bh(e),i=tu(),e!==null&&!st?(nu(e,t,u),kn(e,t,u)):(ze&&i&&Uc(t),t.flags|=1,dt(e,t,a,u),t.child)}function Gm(e,t,a,i,l){if(Ca(t),t.stateNode===null){var u=oi,m=a.contextType;typeof m=="object"&&m!==null&&(u=xt(m)),u=new a(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=pu,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},Fc(t),m=a.contextType,u.context=typeof m=="object"&&m!==null?xt(m):oi,u.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(gu(t,a,m,i),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&pu.enqueueReplaceState(u,u.state,null),Ss(t,i,u,l),vs(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var y=t.memoizedProps,S=ka(a,y);u.props=S;var D=u.context,H=a.contextType;m=oi,typeof H=="object"&&H!==null&&(m=xt(H));var Y=a.getDerivedStateFromProps;H=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||D!==m)&&Rm(t,u,i,m),Fn=!1;var M=t.memoizedState;u.state=M,Ss(t,i,u,l),vs(),D=t.memoizedState,y||M!==D||Fn?(typeof Y=="function"&&(gu(t,a,Y,i),D=t.memoizedState),(S=Fn||Am(t,a,S,i,M,D,m))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=D),u.props=i,u.state=D,u.context=m,i=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,Qc(e,t),m=t.memoizedProps,H=ka(a,m),u.props=H,Y=t.pendingProps,M=u.context,D=a.contextType,S=oi,typeof D=="object"&&D!==null&&(S=xt(D)),y=a.getDerivedStateFromProps,(D=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==Y||M!==S)&&Rm(t,u,i,S),Fn=!1,M=t.memoizedState,u.state=M,Ss(t,i,u,l),vs();var N=t.memoizedState;m!==Y||M!==N||Fn||e!==null&&e.dependencies!==null&&Gl(e.dependencies)?(typeof y=="function"&&(gu(t,a,y,i),N=t.memoizedState),(H=Fn||Am(t,a,H,i,M,N,S)||e!==null&&e.dependencies!==null&&Gl(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,N,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,N,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),u.props=i,u.state=N,u.context=S,i=H):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,rr(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=xi(t,e.child,null,l),t.child=xi(t,null,a,l)):dt(e,t,a,l),t.memoizedState=u.state,e=t.child):e=kn(e,t,l),e}function Pm(e,t,a,i){return fs(),t.flags|=256,dt(e,t,a,i),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vu(e){return{baseLanes:e,cachePool:Ch()}}function Su(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nn),e}function Ym(e,t,a){var i=t.pendingProps,l=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(tt.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(l?Jn(t):In(),ze){var y=Ve,S;if(S=y){e:{for(S=y,y=pn;S.nodeType!==8;){if(!y){y=null;break e}if(S=dn(S.nextSibling),S===null){y=null;break e}}y=S}y!==null?(t.memoizedState={dehydrated:y,treeContext:$a!==null?{id:An,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},S=Gt(18,null,null,0),S.stateNode=y,S.return=t,t.child=S,wt=t,Ve=null,S=!0):S=!1}S||Ra(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return id(y)?t.lanes=32:t.lanes=536870912,null;Dn(t)}return y=i.children,i=i.fallback,l?(In(),l=t.mode,y=or({mode:"hidden",children:y},l),i=Ea(i,l,a,null),y.return=t,i.return=t,y.sibling=i,t.child=y,l=t.child,l.memoizedState=vu(a),l.childLanes=Su(e,m,a),t.memoizedState=bu,i):(Jn(t),ju(t,y))}if(S=e.memoizedState,S!==null&&(y=S.dehydrated,y!==null)){if(u)t.flags&256?(Jn(t),t.flags&=-257,t=wu(e,t,a)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),l=i.fallback,y=t.mode,i=or({mode:"visible",children:i.children},y),l=Ea(l,y,a,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,xi(t,e.child,null,a),i=t.child,i.memoizedState=vu(a),i.childLanes=Su(e,m,a),t.memoizedState=bu,t=l);else if(Jn(t),id(y)){if(m=y.nextSibling&&y.nextSibling.dataset,m)var D=m.dgst;m=D,i=Error(o(419)),i.stack="",i.digest=m,hs({value:i,source:null,stack:null}),t=wu(e,t,a)}else if(st||ms(e,t,a,!1),m=(a&e.childLanes)!==0,st||m){if(m=He,m!==null&&(i=a&-a,i=(i&42)!==0?1:sc(i),i=(i&(m.suspendedLanes|a))!==0?0:i,i!==0&&i!==S.retryLane))throw S.retryLane=i,ri(e,i),Ft(m,e,i),Nm;y.data==="$?"||qu(),t=wu(e,t,a)}else y.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ve=dn(y.nextSibling),wt=t,ze=!0,Aa=null,pn=!1,e!==null&&(Wt[en++]=An,Wt[en++]=Rn,Wt[en++]=$a,An=e.id,Rn=e.overflow,$a=t),t=ju(t,i.children),t.flags|=4096);return t}return l?(In(),l=i.fallback,y=t.mode,S=e.child,D=S.sibling,i=zn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,D!==null?l=zn(D,l):(l=Ea(l,y,a,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,y=e.child.memoizedState,y===null?y=vu(a):(S=y.cachePool,S!==null?(D=et._currentValue,S=S.parent!==D?{parent:D,pool:D}:S):S=Ch(),y={baseLanes:y.baseLanes|a,cachePool:S}),l.memoizedState=y,l.childLanes=Su(e,m,a),t.memoizedState=bu,i):(Jn(t),a=e.child,e=a.sibling,a=zn(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function ju(e,t){return t=or({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function or(e,t){return e=Gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function wu(e,t,a){return xi(t,e.child,null,a),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vm(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),qc(e.return,t,a)}function Eu(e,t,a,i,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=a,u.tailMode=l)}function Xm(e,t,a){var i=t.pendingProps,l=i.revealOrder,u=i.tail;if(dt(e,t,i.children,a),i=tt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vm(e,a,t);else if(e.tag===19)Vm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(J(tt,i),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ir(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Eu(t,!1,l,a,u);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ir(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Eu(t,!0,a,null,u);break;case"together":Eu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function kn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ms(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=zn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=zn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function $u(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gl(e)))}function sx(e,t,a){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),Xn(t,et,e.memoizedState.cache),fs();break;case 27:case 5:on(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:Xn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Jn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ym(e,t,a):(Jn(t),e=kn(e,t,a),e!==null?e.sibling:null);Jn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ms(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return Xm(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(tt,tt.current),i)break;return null;case 22:case 23:return t.lanes=0,Bm(e,t,a);case 24:Xn(t,et,e.memoizedState.cache)}return kn(e,t,a)}function Fm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)st=!0;else{if(!$u(e,a)&&(t.flags&128)===0)return st=!1,sx(e,t,a);st=(e.flags&131072)!==0}else st=!1,ze&&(t.flags&1048576)!==0&&wh(t,ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Mc(i)?(e=ka(i,e),t.tag=1,t=Gm(null,t,i,e,a)):(t.tag=0,t=xu(null,t,i,e,a));else{if(i!=null){if(l=i.$$typeof,l===L){t.tag=11,t=_m(null,t,i,e,a);break e}else if(l===B){t.tag=14,t=Um(null,t,i,e,a);break e}}throw t=Be(i)||i,Error(o(306,t,""))}}return t;case 0:return xu(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=ka(i,t.pendingProps),Gm(e,t,i,l,a);case 3:e:{if(ue(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var u=t.memoizedState;l=u.element,Qc(e,t),Ss(t,i,null,a);var m=t.memoizedState;if(i=m.cache,Xn(t,et,i),i!==u.cache&&Gc(t,[et],a,!0),vs(),i=m.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Pm(e,t,i,a);break e}else if(i!==l){l=Jt(Error(o(424)),t),hs(l),t=Pm(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=dn(e.firstChild),wt=t,ze=!0,Aa=null,pn=!0,a=$m(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fs(),i===l){t=kn(e,t,a);break e}dt(e,t,i,a)}t=t.child}return t;case 26:return rr(e,t),e===null?(a=Jg(t.type,null,t.pendingProps,null))?t.memoizedState=a:ze||(a=t.type,e=t.pendingProps,i=jr(ae.current).createElement(a),i[yt]=t,i[Tt]=e,ht(i,a,e),it(i),t.stateNode=i):t.memoizedState=Jg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return on(t),e===null&&ze&&(i=t.stateNode=Qg(t.type,t.pendingProps,ae.current),wt=t,pn=!0,l=Ve,ra(t.type)?(sd=l,Ve=dn(i.firstChild)):Ve=l),dt(e,t,t.pendingProps.children,a),rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((l=i=Ve)&&(i=kx(i,t.type,t.pendingProps,pn),i!==null?(t.stateNode=i,wt=t,Ve=dn(i.firstChild),pn=!1,l=!0):l=!1),l||Ra(t)),on(t),l=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,i=u.children,td(l,u)?i=null:m!==null&&td(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=eu(e,t,J1,null,null,a),Ps._currentValue=l),rr(e,t),dt(e,t,i,a),t.child;case 6:return e===null&&ze&&((e=a=Ve)&&(a=Mx(a,t.pendingProps,pn),a!==null?(t.stateNode=a,wt=t,Ve=null,e=!0):e=!1),e||Ra(t)),null;case 13:return Ym(e,t,a);case 4:return ue(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xi(t,null,i,a):dt(e,t,i,a),t.child;case 11:return _m(e,t,t.type,t.pendingProps,a);case 7:return dt(e,t,t.pendingProps,a),t.child;case 8:return dt(e,t,t.pendingProps.children,a),t.child;case 12:return dt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Xn(t,t.type,i.value),dt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ca(t),l=xt(l),i=i(l),t.flags|=1,dt(e,t,i,a),t.child;case 14:return Um(e,t,t.type,t.pendingProps,a);case 15:return Lm(e,t,t.type,t.pendingProps,a);case 19:return Xm(e,t,a);case 31:return i=t.pendingProps,a=t.mode,i={mode:i.mode,children:i.children},e===null?(a=or(i,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=zn(e.child,i),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Bm(e,t,a);case 24:return Ca(t),i=xt(et),e===null?(l=Vc(),l===null&&(l=He,u=Pc(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:i,cache:l},Fc(t),Xn(t,et,l)):((e.lanes&a)!==0&&(Qc(e,t),Ss(t,null,null,a),vs()),l=e.memoizedState,u=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Xn(t,et,i)):(i=u.cache,Xn(t,et,i),i!==l.cache&&Gc(t,[et],a,!0))),dt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Mn(e){e.flags|=4}function Qm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!np(t)){if(t=tn.current,t!==null&&((we&4194048)===we?yn!==null:(we&62914560)!==we&&(we&536870912)===0||t!==yn))throw xs=Xc,Oh;e.flags|=8192}}function cr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zf():536870912,e.lanes|=t,ji|=t)}function Rs(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function lx(e,t,a){var i=t.pendingProps;switch(Lc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Cn(et),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ds(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zh())),Pe(t),null;case 26:return a=t.memoizedState,e===null?(Mn(t),a!==null?(Pe(t),Qm(t,a)):(Pe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Mn(t),Pe(t),Qm(t,a)):(Pe(t),t.flags&=-16777217):(e.memoizedProps!==i&&Mn(t),Pe(t),t.flags&=-16777217),null;case 27:At(t),a=ae.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Pe(t),null}e=ee.current,ds(t)?Eh(t):(e=Qg(l,i,a),t.stateNode=e,Mn(t))}return Pe(t),null;case 5:if(At(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Pe(t),null}if(e=ee.current,ds(t))Eh(t);else{switch(l=jr(ae.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(a,{is:i.is}):l.createElement(a)}}e[yt]=t,e[Tt]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ht(e,a,i),a){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Mn(t)}}return Pe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ae.current,ds(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=wt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[yt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||qg(e.nodeValue,a)),e||Ra(t)}else e=jr(e).createTextNode(i),e[yt]=t,t.stateNode=e}return Pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ds(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[yt]=t}else fs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),l=!1}else l=zh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Dn(t),t):(Dn(t),null)}if(Dn(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=i!==null,e=e!==null&&e.memoizedState!==null,a){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var u=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),cr(t,t.updateQueue),Pe(t),null;case 4:return Fe(),e===null&&Zu(t.stateNode.containerInfo),Pe(t),null;case 10:return Cn(t.type),Pe(t),null;case 19:if(Z(tt),l=t.memoizedState,l===null)return Pe(t),null;if(i=(t.flags&128)!==0,u=l.rendering,u===null)if(i)Rs(l,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ir(e),u!==null){for(t.flags|=128,Rs(l,!1),e=u.updateQueue,t.updateQueue=e,cr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)jh(a,e),a=a.sibling;return J(tt,tt.current&1|2),t.child}e=e.sibling}l.tail!==null&&Lt()>fr&&(t.flags|=128,i=!0,Rs(l,!1),t.lanes=4194304)}else{if(!i)if(e=ir(u),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,cr(t,e),Rs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!ze)return Pe(t),null}else 2*Lt()-l.renderingStartTime>fr&&a!==536870912&&(t.flags|=128,i=!0,Rs(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Lt(),t.sibling=null,e=tt.current,J(tt,i?e&1|2:e&1),t):(Pe(t),null);case 22:case 23:return Dn(t),Ic(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),a=t.updateQueue,a!==null&&cr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&Z(Oa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Cn(et),Pe(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function rx(e,t){switch(Lc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn(et),Fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return At(t),null;case 13:if(Dn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));fs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(tt),null;case 4:return Fe(),null;case 10:return Cn(t.type),null;case 22:case 23:return Dn(t),Ic(),e!==null&&Z(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Cn(et),null;case 25:return null;default:return null}}function Km(e,t){switch(Lc(t),t.tag){case 3:Cn(et),Fe();break;case 26:case 27:case 5:At(t);break;case 4:Fe();break;case 13:Dn(t);break;case 19:Z(tt);break;case 10:Cn(t.type);break;case 22:case 23:Dn(t),Ic(),e!==null&&Z(Oa);break;case 24:Cn(et)}}function Ts(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var u=a.create,m=a.inst;i=u(),m.destroy=i}a=a.next}while(a!==l)}}catch(y){Le(t,t.return,y)}}function Wn(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&e)===e){var m=i.inst,y=m.destroy;if(y!==void 0){m.destroy=void 0,l=t;var S=a,D=y;try{D()}catch(H){Le(l,S,H)}}}i=i.next}while(i!==u)}}catch(H){Le(t,t.return,H)}}function Zm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Uh(t,a)}catch(i){Le(e,e.return,i)}}}function Jm(e,t,a){a.props=ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Le(e,t,i)}}function Cs(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){Le(e,t,l)}}function xn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){Le(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Le(e,t,l)}else a.current=null}function Im(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){Le(e,e.return,l)}}function zu(e,t,a){try{var i=e.stateNode;Rx(i,e.type,a,t),i[Tt]=t}catch(l){Le(e,e.return,l)}}function Wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ru(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Sr));else if(i!==4&&(i===27&&ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ru(e,t,a),e=e.sibling;e!==null;)Ru(e,t,a),e=e.sibling}function ur(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ur(e,t,a),e=e.sibling;e!==null;)ur(e,t,a),e=e.sibling}function eg(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ht(t,i,a),t[yt]=e,t[Tt]=a}catch(u){Le(e,e.return,u)}}var Nn=!1,Ke=!1,Tu=!1,tg=typeof WeakSet=="function"?WeakSet:Set,lt=null;function ox(e,t){if(e=e.containerInfo,Wu=Rr,e=fh(e),Ac(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var m=0,y=-1,S=-1,D=0,H=0,Y=e,M=null;t:for(;;){for(var N;Y!==a||l!==0&&Y.nodeType!==3||(y=m+l),Y!==u||i!==0&&Y.nodeType!==3||(S=m+i),Y.nodeType===3&&(m+=Y.nodeValue.length),(N=Y.firstChild)!==null;)M=Y,Y=N;for(;;){if(Y===e)break t;if(M===a&&++D===l&&(y=m),M===u&&++H===i&&(S=m),(N=Y.nextSibling)!==null)break;Y=M,M=Y.parentNode}Y=N}a=y===-1||S===-1?null:{start:y,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(ed={focusedElem:e,selectionRange:a},Rr=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,i=a.stateNode;try{var oe=ka(a.type,l,a.elementType===a.type);e=i.getSnapshotBeforeUpdate(oe,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Le(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ad(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ad(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function ng(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),i&4&&Ts(5,a);break;case 1:if(ea(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Le(a,a.return,m)}else{var l=ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Le(a,a.return,m)}}i&64&&Zm(a),i&512&&Cs(a,a.return);break;case 3:if(ea(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Uh(e,t)}catch(m){Le(a,a.return,m)}}break;case 27:t===null&&i&4&&eg(a);case 26:case 5:ea(e,a),t===null&&i&4&&Im(a),i&512&&Cs(a,a.return);break;case 12:ea(e,a);break;case 13:ea(e,a),i&4&&sg(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),Nx(e,a))));break;case 22:if(i=a.memoizedState!==null||Nn,!i){t=t!==null&&t.memoizedState!==null||Ke,l=Nn;var u=Ke;Nn=i,(Ke=t)&&!u?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),Nn=l,Ke=u}break;case 30:break;default:ea(e,a)}}function ag(e){var t=e.alternate;t!==null&&(e.alternate=null,ag(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&oc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,Dt=!1;function _n(e,t,a){for(a=a.child;a!==null;)ig(e,t,a),a=a.sibling}function ig(e,t,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Ji,a)}catch{}switch(a.tag){case 26:Ke||xn(a,t),_n(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||xn(a,t);var i=Ge,l=Dt;ra(a.type)&&(Ge=a.stateNode,Dt=!1),_n(e,t,a),Bs(a.stateNode),Ge=i,Dt=l;break;case 5:Ke||xn(a,t);case 6:if(i=Ge,l=Dt,Ge=null,_n(e,t,a),Ge=i,Dt=l,Ge!==null)if(Dt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(u){Le(a,t,u)}else try{Ge.removeChild(a.stateNode)}catch(u){Le(a,t,u)}break;case 18:Ge!==null&&(Dt?(e=Ge,Xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fs(e)):Xg(Ge,a.stateNode));break;case 4:i=Ge,l=Dt,Ge=a.stateNode.containerInfo,Dt=!0,_n(e,t,a),Ge=i,Dt=l;break;case 0:case 11:case 14:case 15:Ke||Wn(2,a,t),Ke||Wn(4,a,t),_n(e,t,a);break;case 1:Ke||(xn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Jm(a,t,i)),_n(e,t,a);break;case 21:_n(e,t,a);break;case 22:Ke=(i=Ke)||a.memoizedState!==null,_n(e,t,a),Ke=i;break;default:_n(e,t,a)}}function sg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fs(e)}catch(a){Le(t,t.return,a)}}function cx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tg),t;default:throw Error(o(435,e.tag))}}function Cu(e,t){var a=cx(e);t.forEach(function(i){var l=xx.bind(null,e,i);a.has(i)||(a.add(i),i.then(l,l))})}function Pt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],u=e,m=t,y=m;e:for(;y!==null;){switch(y.tag){case 27:if(ra(y.type)){Ge=y.stateNode,Dt=!1;break e}break;case 5:Ge=y.stateNode,Dt=!1;break e;case 3:case 4:Ge=y.stateNode.containerInfo,Dt=!0;break e}y=y.return}if(Ge===null)throw Error(o(160));ig(u,m,l),Ge=null,Dt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)lg(t,e),t=t.sibling}var un=null;function lg(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pt(t,e),Yt(e),i&4&&(Wn(3,e,e.return),Ts(3,e),Wn(5,e,e.return));break;case 1:Pt(t,e),Yt(e),i&512&&(Ke||a===null||xn(a,a.return)),i&64&&Nn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=un;if(Pt(t,e),Yt(e),i&512&&(Ke||a===null||xn(a,a.return)),i&4){var u=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":u=l.getElementsByTagName("title")[0],(!u||u[es]||u[yt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(i),l.head.insertBefore(u,l.querySelector("head > title"))),ht(u,i,a),u[yt]=e,it(u),i=u;break e;case"link":var m=ep("link","href",l).get(i+(a.href||""));if(m){for(var y=0;y<m.length;y++)if(u=m[y],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(y,1);break t}}u=l.createElement(i),ht(u,i,a),l.head.appendChild(u);break;case"meta":if(m=ep("meta","content",l).get(i+(a.content||""))){for(y=0;y<m.length;y++)if(u=m[y],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(y,1);break t}}u=l.createElement(i),ht(u,i,a),l.head.appendChild(u);break;default:throw Error(o(468,i))}u[yt]=e,it(u),i=u}e.stateNode=i}else tp(l,e.type,e.stateNode);else e.stateNode=Wg(l,i,e.memoizedProps);else u!==i?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,i===null?tp(l,e.type,e.stateNode):Wg(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&zu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Pt(t,e),Yt(e),i&512&&(Ke||a===null||xn(a,a.return)),a!==null&&i&4&&zu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Pt(t,e),Yt(e),i&512&&(Ke||a===null||xn(a,a.return)),e.flags&32){l=e.stateNode;try{ei(l,"")}catch(N){Le(e,e.return,N)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,zu(e,l,a!==null?a.memoizedProps:l)),i&1024&&(Tu=!0);break;case 6:if(Pt(t,e),Yt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(N){Le(e,e.return,N)}}break;case 3:if($r=null,l=un,un=wr(t.containerInfo),Pt(t,e),un=l,Yt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Fs(t.containerInfo)}catch(N){Le(e,e.return,N)}Tu&&(Tu=!1,rg(e));break;case 4:i=un,un=wr(e.stateNode.containerInfo),Pt(t,e),Yt(e),un=i;break;case 12:Pt(t,e),Yt(e);break;case 13:Pt(t,e),Yt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_u=Lt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cu(e,i)));break;case 22:l=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,D=Nn,H=Ke;if(Nn=D||l,Ke=H||S,Pt(t,e),Ke=H,Nn=D,Yt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||S||Nn||Ke||Ma(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){S=a=t;try{if(u=S.stateNode,l)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{y=S.stateNode;var Y=S.memoizedProps.style,M=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;y.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(N){Le(S,S.return,N)}}}else if(t.tag===6){if(a===null){S=t;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(N){Le(S,S.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Cu(e,a))));break;case 19:Pt(t,e),Yt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cu(e,i)));break;case 30:break;case 21:break;default:Pt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Wm(i)){a=i;break}i=i.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var l=a.stateNode,u=Au(e);ur(e,u,l);break;case 5:var m=a.stateNode;a.flags&32&&(ei(m,""),a.flags&=-33);var y=Au(e);ur(e,y,m);break;case 3:case 4:var S=a.stateNode.containerInfo,D=Au(e);Ru(e,D,S);break;default:throw Error(o(161))}}catch(H){Le(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ng(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Ma(t);break;case 1:xn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Jm(t,t.return,a),Ma(t);break;case 27:Bs(t.stateNode);case 26:case 5:xn(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:ta(l,u,a),Ts(4,u);break;case 1:if(ta(l,u,a),i=u,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){Le(i,i.return,D)}if(i=u,l=i.updateQueue,l!==null){var y=i.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)_h(S[l],y)}catch(D){Le(i,i.return,D)}}a&&m&64&&Zm(u),Cs(u,u.return);break;case 27:eg(u);case 26:case 5:ta(l,u,a),a&&i===null&&m&4&&Im(u),Cs(u,u.return);break;case 12:ta(l,u,a);break;case 13:ta(l,u,a),a&&m&4&&sg(l,u);break;case 22:u.memoizedState===null&&ta(l,u,a),Cs(u,u.return);break;case 30:break;default:ta(l,u,a)}t=t.sibling}}function Ou(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&gs(a))}function Du(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gs(e))}function bn(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)og(e,t,a,i),t=t.sibling}function og(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:bn(e,t,a,i),l&2048&&Ts(9,t);break;case 1:bn(e,t,a,i);break;case 3:bn(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gs(e)));break;case 12:if(l&2048){bn(e,t,a,i),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,y=u.onPostCommit;typeof y=="function"&&y(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Le(t,t.return,S)}}else bn(e,t,a,i);break;case 13:bn(e,t,a,i);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?bn(e,t,a,i):Os(e,t):u._visibility&2?bn(e,t,a,i):(u._visibility|=2,bi(e,t,a,i,(t.subtreeFlags&10256)!==0)),l&2048&&Ou(m,t);break;case 24:bn(e,t,a,i),l&2048&&Du(t.alternate,t);break;default:bn(e,t,a,i)}}function bi(e,t,a,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,m=t,y=a,S=i,D=m.flags;switch(m.tag){case 0:case 11:case 15:bi(u,m,y,S,l),Ts(8,m);break;case 23:break;case 22:var H=m.stateNode;m.memoizedState!==null?H._visibility&2?bi(u,m,y,S,l):Os(u,m):(H._visibility|=2,bi(u,m,y,S,l)),l&&D&2048&&Ou(m.alternate,m);break;case 24:bi(u,m,y,S,l),l&&D&2048&&Du(m.alternate,m);break;default:bi(u,m,y,S,l)}t=t.sibling}}function Os(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:Os(a,i),l&2048&&Ou(i.alternate,i);break;case 24:Os(a,i),l&2048&&Du(i.alternate,i);break;default:Os(a,i)}t=t.sibling}}var Ds=8192;function vi(e){if(e.subtreeFlags&Ds)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 26:vi(e),e.flags&Ds&&e.memoizedState!==null&&Qx(un,e.memoizedState,e.memoizedProps);break;case 5:vi(e);break;case 3:case 4:var t=un;un=wr(e.stateNode.containerInfo),vi(e),un=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ds,Ds=16777216,vi(e),Ds=t):vi(e));break;default:vi(e)}}function ug(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ks(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];lt=i,fg(i,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dg(e),e=e.sibling}function dg(e){switch(e.tag){case 0:case 11:case 15:ks(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:ks(e);break;case 12:ks(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,dr(e)):ks(e);break;default:ks(e)}}function dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];lt=i,fg(i,e)}ug(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),dr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,dr(t));break;default:dr(t)}e=e.sibling}}function fg(e,t){for(;lt!==null;){var a=lt;switch(a.tag){case 0:case 11:case 15:Wn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:gs(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,lt=i;else e:for(a=e;lt!==null;){i=lt;var l=i.sibling,u=i.return;if(ag(i),i===a){lt=null;break e}if(l!==null){l.return=u,lt=l;break e}lt=u}}}var ux={getCacheForType:function(e){var t=xt(et),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},dx=typeof WeakMap=="function"?WeakMap:Map,Te=0,He=null,be=null,we=0,Ce=0,Vt=null,na=!1,Si=!1,ku=!1,Un=0,Xe=0,aa=0,Na=0,Mu=0,nn=0,ji=0,Ms=null,kt=null,Nu=!1,_u=0,fr=1/0,hr=null,ia=null,ft=0,sa=null,wi=null,Ei=0,Uu=0,Lu=null,hg=null,Ns=0,Bu=null;function Xt(){if((Te&2)!==0&&we!==0)return we&-we;if(k.T!==null){var e=di;return e!==0?e:Xu()}return Tf()}function mg(){nn===0&&(nn=(we&536870912)===0||ze?$f():536870912);var e=tn.current;return e!==null&&(e.flags|=32),nn}function Ft(e,t,a){(e===He&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&($i(e,0),la(e,we,nn,!1)),Wi(e,a),((Te&2)===0||e!==He)&&(e===He&&((Te&2)===0&&(Na|=a),Xe===4&&la(e,we,nn,!1)),vn(e))}function gg(e,t,a){if((Te&6)!==0)throw Error(o(327));var i=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Ii(e,t),l=i?mx(e,t):Gu(e,t,!0),u=i;do{if(l===0){Si&&!i&&la(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!fx(a)){l=Gu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var y=e;l=Ms;var S=y.current.memoizedState.isDehydrated;if(S&&($i(y,m).flags|=256),m=Gu(y,m,!1),m!==2){if(ku&&!S){y.errorRecoveryDisabledLanes|=u,Na|=u,l=4;break e}u=kt,kt=l,u!==null&&(kt===null?kt=u:kt.push.apply(kt,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){$i(e,0),la(e,t,0,!0);break}e:{switch(i=e,u=l,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:la(i,t,nn,!na);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(l=_u+300-Lt(),10<l)){if(la(i,t,nn,!na),El(i,0,!0)!==0)break e;i.timeoutHandle=Yg(pg.bind(null,i,a,kt,hr,Nu,t,nn,Na,ji,na,u,2,-0,0),l);break e}pg(i,a,kt,hr,Nu,t,nn,Na,ji,na,u,0,-0,0)}}break}while(!0);vn(e)}function pg(e,t,a,i,l,u,m,y,S,D,H,Y,M,N){if(e.timeoutHandle=-1,Y=t.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Gs={stylesheets:null,count:0,unsuspend:Fx},cg(t),Y=Kx(),Y!==null)){e.cancelPendingCommit=Y(wg.bind(null,e,t,u,a,i,l,m,y,S,H,1,M,N)),la(e,u,m,!D);return}wg(e,t,u,a,i,l,m,y,S)}function fx(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],u=l.getSnapshot;l=l.value;try{if(!qt(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,a,i){t&=~Mu,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var u=31-Ht(l),m=1<<u;i[u]=-1,l&=~m}a!==0&&Af(e,a,t)}function mr(){return(Te&6)===0?(_s(0),!1):!0}function Hu(){if(be!==null){if(Ce===0)var e=be.return;else e=be,Tn=Ta=null,au(e),yi=null,zs=0,e=be;for(;e!==null;)Km(e.alternate,e),e=e.return;be=null}}function $i(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Hu(),He=e,be=a=zn(e.current,null),we=t,Ce=0,Vt=null,na=!1,Si=Ii(e,t),ku=!1,ji=nn=Mu=Na=aa=Xe=0,kt=Ms=null,Nu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Ht(i),u=1<<l;t|=e[l],i&=~u}return Un=t,_l(),a}function yg(e,t){pe=null,k.H=tr,t===ys||t===Vl?(t=Mh(),Ce=3):t===Oh?(t=Mh(),Ce=4):Ce=t===Nm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vt=t,be===null&&(Xe=1,lr(e,Jt(t,e.current)))}function xg(){var e=k.H;return k.H=tr,e===null?tr:e}function bg(){var e=k.A;return k.A=ux,e}function qu(){Xe=4,na||(we&4194048)!==we&&tn.current!==null||(Si=!0),(aa&134217727)===0&&(Na&134217727)===0||He===null||la(He,we,nn,!1)}function Gu(e,t,a){var i=Te;Te|=2;var l=xg(),u=bg();(He!==e||we!==t)&&(hr=null,$i(e,t)),t=!1;var m=Xe;e:do try{if(Ce!==0&&be!==null){var y=be,S=Vt;switch(Ce){case 8:Hu(),m=6;break e;case 3:case 2:case 9:case 6:tn.current===null&&(t=!0);var D=Ce;if(Ce=0,Vt=null,zi(e,y,S,D),a&&Si){m=0;break e}break;default:D=Ce,Ce=0,Vt=null,zi(e,y,S,D)}}hx(),m=Xe;break}catch(H){yg(e,H)}while(!0);return t&&e.shellSuspendCounter++,Tn=Ta=null,Te=i,k.H=l,k.A=u,be===null&&(He=null,we=0,_l()),m}function hx(){for(;be!==null;)vg(be)}function mx(e,t){var a=Te;Te|=2;var i=xg(),l=bg();He!==e||we!==t?(hr=null,fr=Lt()+500,$i(e,t)):Si=Ii(e,t);e:do try{if(Ce!==0&&be!==null){t=be;var u=Vt;t:switch(Ce){case 1:Ce=0,Vt=null,zi(e,t,u,1);break;case 2:case 9:if(Dh(u)){Ce=0,Vt=null,Sg(t);break}t=function(){Ce!==2&&Ce!==9||He!==e||(Ce=7),vn(e)},u.then(t,t);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:Dh(u)?(Ce=0,Vt=null,Sg(t)):(Ce=0,Vt=null,zi(e,t,u,7));break;case 5:var m=null;switch(be.tag){case 26:m=be.memoizedState;case 5:case 27:var y=be;if(!m||np(m)){Ce=0,Vt=null;var S=y.sibling;if(S!==null)be=S;else{var D=y.return;D!==null?(be=D,gr(D)):be=null}break t}}Ce=0,Vt=null,zi(e,t,u,5);break;case 6:Ce=0,Vt=null,zi(e,t,u,6);break;case 8:Hu(),Xe=6;break e;default:throw Error(o(462))}}gx();break}catch(H){yg(e,H)}while(!0);return Tn=Ta=null,k.H=i,k.A=l,Te=a,be!==null?0:(He=null,we=0,_l(),Xe)}function gx(){for(;be!==null&&!bl();)vg(be)}function vg(e){var t=Fm(e.alternate,e,Un);e.memoizedProps=e.pendingProps,t===null?gr(e):be=t}function Sg(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=qm(a,t,t.pendingProps,t.type,void 0,we);break;case 11:t=qm(a,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:au(t);default:Km(a,t),t=be=jh(t,Un),t=Fm(a,t,Un)}e.memoizedProps=e.pendingProps,t===null?gr(e):be=t}function zi(e,t,a,i){Tn=Ta=null,au(t),yi=null,zs=0;var l=t.return;try{if(ix(e,l,t,a,we)){Xe=1,lr(e,Jt(a,e.current)),be=null;return}}catch(u){if(l!==null)throw be=l,u;Xe=1,lr(e,Jt(a,e.current)),be=null;return}t.flags&32768?(ze||i===1?e=!0:Si||(we&536870912)!==0?e=!1:(na=e=!0,(i===2||i===9||i===3||i===6)&&(i=tn.current,i!==null&&i.tag===13&&(i.flags|=16384))),jg(t,e)):gr(t)}function gr(e){var t=e;do{if((t.flags&32768)!==0){jg(t,na);return}e=t.return;var a=lx(t.alternate,t,Un);if(a!==null){be=a;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Xe===0&&(Xe=5)}function jg(e,t){do{var a=rx(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);Xe=6,be=null}function wg(e,t,a,i,l,u,m,y,S){e.cancelPendingCommit=null;do pr();while(ft!==0);if((Te&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Dc,Fy(e,a,u,m,y,S),e===He&&(be=He=null,we=0),wi=t,sa=e,Ei=a,Uu=u,Lu=l,hg=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bx(Xa,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=k.T,k.T=null,l=K.p,K.p=2,m=Te,Te|=4;try{ox(e,t,a)}finally{Te=m,K.p=l,k.T=i}}ft=1,Eg(),$g(),zg()}}function Eg(){if(ft===1){ft=0;var e=sa,t=wi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null;var i=K.p;K.p=2;var l=Te;Te|=4;try{lg(t,e);var u=ed,m=fh(e.containerInfo),y=u.focusedElem,S=u.selectionRange;if(m!==y&&y&&y.ownerDocument&&dh(y.ownerDocument.documentElement,y)){if(S!==null&&Ac(y)){var D=S.start,H=S.end;if(H===void 0&&(H=D),"selectionStart"in y)y.selectionStart=D,y.selectionEnd=Math.min(H,y.value.length);else{var Y=y.ownerDocument||document,M=Y&&Y.defaultView||window;if(M.getSelection){var N=M.getSelection(),oe=y.textContent.length,ie=Math.min(S.start,oe),Me=S.end===void 0?ie:Math.min(S.end,oe);!N.extend&&ie>Me&&(m=Me,Me=ie,ie=m);var R=uh(y,ie),$=uh(y,Me);if(R&&$&&(N.rangeCount!==1||N.anchorNode!==R.node||N.anchorOffset!==R.offset||N.focusNode!==$.node||N.focusOffset!==$.offset)){var O=Y.createRange();O.setStart(R.node,R.offset),N.removeAllRanges(),ie>Me?(N.addRange(O),N.extend($.node,$.offset)):(O.setEnd($.node,$.offset),N.addRange(O))}}}}for(Y=[],N=y;N=N.parentNode;)N.nodeType===1&&Y.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Y.length;y++){var q=Y[y];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Rr=!!Wu,ed=Wu=null}finally{Te=l,K.p=i,k.T=a}}e.current=t,ft=2}}function $g(){if(ft===2){ft=0;var e=sa,t=wi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=k.T,k.T=null;var i=K.p;K.p=2;var l=Te;Te|=4;try{ng(e,t.alternate,t)}finally{Te=l,K.p=i,k.T=a}}ft=3}}function zg(){if(ft===4||ft===3){ft=0,nc();var e=sa,t=wi,a=Ei,i=hg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ft=5:(ft=0,wi=sa=null,Ag(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ia=null),lc(a),t=t.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Ji,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=k.T,l=K.p,K.p=2,k.T=null;try{for(var u=e.onRecoverableError,m=0;m<i.length;m++){var y=i[m];u(y.value,{componentStack:y.stack})}}finally{k.T=t,K.p=l}}(Ei&3)!==0&&pr(),vn(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Bu?Ns++:(Ns=0,Bu=e):Ns=0,_s(0)}}function Ag(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gs(t)))}function pr(e){return Eg(),$g(),zg(),Rg()}function Rg(){if(ft!==5)return!1;var e=sa,t=Uu;Uu=0;var a=lc(Ei),i=k.T,l=K.p;try{K.p=32>a?32:a,k.T=null,a=Lu,Lu=null;var u=sa,m=Ei;if(ft=0,wi=sa=null,Ei=0,(Te&6)!==0)throw Error(o(331));var y=Te;if(Te|=4,dg(u.current),og(u,u.current,m,a),Te=y,_s(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Ji,u)}catch{}return!0}finally{K.p=l,k.T=i,Ag(e,t)}}function Tg(e,t,a){t=Jt(a,t),t=yu(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Wi(e,2),vn(e))}function Le(e,t,a){if(e.tag===3)Tg(e,e,a);else for(;t!==null;){if(t.tag===3){Tg(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ia===null||!ia.has(i))){e=Jt(a,e),a=km(2),i=Kn(t,a,2),i!==null&&(Mm(a,i,t,e),Wi(i,2),vn(i));break}}t=t.return}}function Pu(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new dx;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(ku=!0,l.add(a),e=px.bind(null,e,t,a),t.then(e,e))}function px(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(we&a)===a&&(Xe===4||Xe===3&&(we&62914560)===we&&300>Lt()-_u?(Te&2)===0&&$i(e,0):Mu|=a,ji===we&&(ji=0)),vn(e)}function Cg(e,t){t===0&&(t=zf()),e=ri(e,t),e!==null&&(Wi(e,t),vn(e))}function yx(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cg(e,a)}function xx(e,t){var a=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Cg(e,a)}function bx(e,t){return at(e,t)}var yr=null,Ai=null,Yu=!1,xr=!1,Vu=!1,_a=0;function vn(e){e!==Ai&&e.next===null&&(Ai===null?yr=Ai=e:Ai=Ai.next=e),xr=!0,Yu||(Yu=!0,Sx())}function _s(e,t){if(!Vu&&xr){Vu=!0;do for(var a=!1,i=yr;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var u=0;else{var m=i.suspendedLanes,y=i.pingedLanes;u=(1<<31-Ht(42|e)+1)-1,u&=l&~(m&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Mg(i,u))}else u=we,u=El(i,i===He?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Ii(i,u)||(a=!0,Mg(i,u));i=i.next}while(a);Vu=!1}}function vx(){Og()}function Og(){xr=Yu=!1;var e=0;_a!==0&&(Tx()&&(e=_a),_a=0);for(var t=Lt(),a=null,i=yr;i!==null;){var l=i.next,u=Dg(i,t);u===0?(i.next=null,a===null?yr=l:a.next=l,l===null&&(Ai=a)):(a=i,(e!==0||(u&3)!==0)&&(xr=!0)),i=l}_s(e)}function Dg(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Ht(u),y=1<<m,S=l[m];S===-1?((y&a)===0||(y&i)!==0)&&(l[m]=Xy(y,t)):S<=t&&(e.expiredLanes|=y),u&=~y}if(t=He,a=we,a=El(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Rt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ii(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Rt(i),lc(a)){case 2:case 8:a=Sl;break;case 32:a=Xa;break;case 268435456:a=Re;break;default:a=Xa}return i=kg.bind(null,e),a=at(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Rt(i),e.callbackPriority=2,e.callbackNode=null,2}function kg(e,t){if(ft!==0&&ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pr()&&e.callbackNode!==a)return null;var i=we;return i=El(e,e===He?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(gg(e,i,t),Dg(e,Lt()),e.callbackNode!=null&&e.callbackNode===a?kg.bind(null,e):null)}function Mg(e,t){if(pr())return null;gg(e,t,!0)}function Sx(){Ox(function(){(Te&6)!==0?at(vl,vx):Og()})}function Xu(){return _a===0&&(_a=$f()),_a}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tl(""+e)}function _g(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function jx(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var u=Ng((l[Tt]||null).action),m=i.submitter;m&&(t=(t=m[Tt]||null)?Ng(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var y=new kl("action","action",null,i,l);e.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(_a!==0){var S=m?_g(l,m):new FormData(l);fu(a,{pending:!0,data:S,method:l.method,action:u},null,S)}}else typeof u=="function"&&(y.preventDefault(),S=m?_g(l,m):new FormData(l),fu(a,{pending:!0,data:S,method:l.method,action:u},u,S))},currentTarget:l}]})}}for(var Fu=0;Fu<Oc.length;Fu++){var Qu=Oc[Fu],wx=Qu.toLowerCase(),Ex=Qu[0].toUpperCase()+Qu.slice(1);cn(wx,"on"+Ex)}cn(gh,"onAnimationEnd"),cn(ph,"onAnimationIteration"),cn(yh,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(q1,"onTransitionRun"),cn(G1,"onTransitionStart"),cn(P1,"onTransitionCancel"),cn(xh,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),va("onBeforeInput",["compositionend","keypress","textInput","paste"]),va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Us));function Ug(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var m=i.length-1;0<=m;m--){var y=i[m],S=y.instance,D=y.currentTarget;if(y=y.listener,S!==u&&l.isPropagationStopped())break e;u=y,l.currentTarget=D;try{u(l)}catch(H){sr(H)}l.currentTarget=null,u=S}else for(m=0;m<i.length;m++){if(y=i[m],S=y.instance,D=y.currentTarget,y=y.listener,S!==u&&l.isPropagationStopped())break e;u=y,l.currentTarget=D;try{u(l)}catch(H){sr(H)}l.currentTarget=null,u=S}}}}function ve(e,t){var a=t[rc];a===void 0&&(a=t[rc]=new Set);var i=e+"__bubble";a.has(i)||(Lg(t,e,2,!1),a.add(i))}function Ku(e,t,a){var i=0;t&&(i|=4),Lg(a,e,i,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function Zu(e){if(!e[br]){e[br]=!0,Of.forEach(function(a){a!=="selectionchange"&&($x.has(a)||Ku(a,!1,e),Ku(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,Ku("selectionchange",!1,t))}}function Lg(e,t,a,i){switch(op(t)){case 2:var l=Ix;break;case 8:l=Wx;break;default:l=ud}a=l.bind(null,t,a,e),l=void 0,!xc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Ju(e,t,a,i,l){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var y=i.stateNode.containerInfo;if(y===l)break;if(m===4)for(m=i.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;y!==null;){if(m=Qa(y),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){i=u=m;continue e}y=y.parentNode}}i=i.return}Vf(function(){var D=u,H=pc(a),Y=[];e:{var M=bh.get(e);if(M!==void 0){var N=kl,oe=e;switch(e){case"keypress":if(Ol(a)===0)break e;case"keydown":case"keyup":N=b1;break;case"focusin":oe="focus",N=jc;break;case"focusout":oe="blur",N=jc;break;case"beforeblur":case"afterblur":N=jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=j1;break;case gh:case ph:case yh:N=u1;break;case xh:N=E1;break;case"scroll":case"scrollend":N=s1;break;case"wheel":N=z1;break;case"copy":case"cut":case"paste":N=f1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Zf;break;case"toggle":case"beforetoggle":N=R1}var ie=(t&4)!==0,Me=!ie&&(e==="scroll"||e==="scrollend"),R=ie?M!==null?M+"Capture":null:M;ie=[];for(var $=D,O;$!==null;){var q=$;if(O=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||O===null||R===null||(q=ns($,R),q!=null&&ie.push(Ls($,q,O))),Me)break;$=$.return}0<ie.length&&(M=new N(M,oe,null,a,H),Y.push({event:M,listeners:ie}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",M&&a!==gc&&(oe=a.relatedTarget||a.fromElement)&&(Qa(oe)||oe[Fa]))break e;if((N||M)&&(M=H.window===H?H:(M=H.ownerDocument)?M.defaultView||M.parentWindow:window,N?(oe=a.relatedTarget||a.toElement,N=D,oe=oe?Qa(oe):null,oe!==null&&(Me=f(oe),ie=oe.tag,oe!==Me||ie!==5&&ie!==27&&ie!==6)&&(oe=null)):(N=null,oe=D),N!==oe)){if(ie=Qf,q="onMouseLeave",R="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Zf,q="onPointerLeave",R="onPointerEnter",$="pointer"),Me=N==null?M:ts(N),O=oe==null?M:ts(oe),M=new ie(q,$+"leave",N,a,H),M.target=Me,M.relatedTarget=O,q=null,Qa(H)===D&&(ie=new ie(R,$+"enter",oe,a,H),ie.target=O,ie.relatedTarget=Me,q=ie),Me=q,N&&oe)t:{for(ie=N,R=oe,$=0,O=ie;O;O=Ri(O))$++;for(O=0,q=R;q;q=Ri(q))O++;for(;0<$-O;)ie=Ri(ie),$--;for(;0<O-$;)R=Ri(R),O--;for(;$--;){if(ie===R||R!==null&&ie===R.alternate)break t;ie=Ri(ie),R=Ri(R)}ie=null}else ie=null;N!==null&&Bg(Y,M,N,ie,!1),oe!==null&&Me!==null&&Bg(Y,Me,oe,ie,!0)}}e:{if(M=D?ts(D):window,N=M.nodeName&&M.nodeName.toLowerCase(),N==="select"||N==="input"&&M.type==="file")var te=ih;else if(nh(M))if(sh)te=L1;else{te=_1;var ye=N1}else N=M.nodeName,!N||N.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?D&&mc(D.elementType)&&(te=ih):te=U1;if(te&&(te=te(e,D))){ah(Y,te,a,H);break e}ye&&ye(e,M,D),e==="focusout"&&D&&M.type==="number"&&D.memoizedProps.value!=null&&hc(M,"number",M.value)}switch(ye=D?ts(D):window,e){case"focusin":(nh(ye)||ye.contentEditable==="true")&&(ii=ye,Rc=D,us=null);break;case"focusout":us=Rc=ii=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,hh(Y,a,H);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":hh(Y,a,H)}var ne;if(Ec)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else ai?eh(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Jf&&a.locale!=="ko"&&(ai||le!=="onCompositionStart"?le==="onCompositionEnd"&&ai&&(ne=Xf()):(Vn=H,bc="value"in Vn?Vn.value:Vn.textContent,ai=!0)),ye=vr(D,le),0<ye.length&&(le=new Kf(le,e,null,a,H),Y.push({event:le,listeners:ye}),ne?le.data=ne:(ne=th(a),ne!==null&&(le.data=ne)))),(ne=C1?O1(e,a):D1(e,a))&&(le=vr(D,"onBeforeInput"),0<le.length&&(ye=new Kf("onBeforeInput","beforeinput",null,a,H),Y.push({event:ye,listeners:le}),ye.data=ne)),jx(Y,e,D,a,H)}Ug(Y,t)})}function Ls(e,t,a){return{instance:e,listener:t,currentTarget:a}}function vr(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=ns(e,a),l!=null&&i.unshift(Ls(e,l,u)),l=ns(e,t),l!=null&&i.push(Ls(e,l,u))),e.tag===3)return i;e=e.return}return[]}function Ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bg(e,t,a,i,l){for(var u=t._reactName,m=[];a!==null&&a!==i;){var y=a,S=y.alternate,D=y.stateNode;if(y=y.tag,S!==null&&S===i)break;y!==5&&y!==26&&y!==27||D===null||(S=D,l?(D=ns(a,u),D!=null&&m.unshift(Ls(a,D,S))):l||(D=ns(a,u),D!=null&&m.push(Ls(a,D,S)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var zx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function Hg(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Ax,"")}function qg(e,t){return t=Hg(t),Hg(e)===t}function Sr(){}function ke(e,t,a,i,l,u){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ei(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ei(e,""+i);break;case"className":zl(e,"class",i);break;case"tabIndex":zl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":zl(e,a,i);break;case"style":Pf(e,i,u);break;case"data":if(t!=="object"){zl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Tl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&ke(e,t,"name",l.name,l,null),ke(e,t,"formEncType",l.formEncType,l,null),ke(e,t,"formMethod",l.formMethod,l,null),ke(e,t,"formTarget",l.formTarget,l,null)):(ke(e,t,"encType",l.encType,l,null),ke(e,t,"method",l.method,l,null),ke(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Tl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Sr);break;case"onScroll":i!=null&&ve("scroll",e);break;case"onScrollEnd":i!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Tl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":ve("beforetoggle",e),ve("toggle",e),$l(e,"popover",i);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":$l(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=a1.get(a)||a,$l(e,a,i))}}function Iu(e,t,a,i,l,u){switch(a){case"style":Pf(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof i=="string"?ei(e,i):(typeof i=="number"||typeof i=="bigint")&&ei(e,""+i);break;case"onScroll":i!=null&&ve("scroll",e);break;case"onScrollEnd":i!=null&&ve("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Sr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Df.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[Tt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof i=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):$l(e,a,i)}}}function ht(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var i=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ke(e,t,u,m,a,null)}}l&&ke(e,t,"srcSet",a.srcSet,a,null),i&&ke(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var y=u=m=l=null,S=null,D=null;for(i in a)if(a.hasOwnProperty(i)){var H=a[i];if(H!=null)switch(i){case"name":l=H;break;case"type":m=H;break;case"checked":S=H;break;case"defaultChecked":D=H;break;case"value":u=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:ke(e,t,i,H,a,null)}}Bf(e,u,y,S,D,m,l,!1),Al(e);return;case"select":ve("invalid",e),i=m=u=null;for(l in a)if(a.hasOwnProperty(l)&&(y=a[l],y!=null))switch(l){case"value":u=y;break;case"defaultValue":m=y;break;case"multiple":i=y;default:ke(e,t,l,y,a,null)}t=u,a=m,e.multiple=!!i,t!=null?Wa(e,!!i,t,!1):a!=null&&Wa(e,!!i,a,!0);return;case"textarea":ve("invalid",e),u=l=i=null;for(m in a)if(a.hasOwnProperty(m)&&(y=a[m],y!=null))switch(m){case"value":i=y;break;case"defaultValue":l=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:ke(e,t,m,y,a,null)}qf(e,i,l,u),Al(e);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(i=a[S],i!=null))switch(S){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ke(e,t,S,i,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(i=0;i<Us.length;i++)ve(Us[i],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(i=a[D],i!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ke(e,t,D,i,a,null)}return;default:if(mc(t)){for(H in a)a.hasOwnProperty(H)&&(i=a[H],i!==void 0&&Iu(e,t,H,i,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(i=a[y],i!=null&&ke(e,t,y,i,a,null))}function Rx(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,y=null,S=null,D=null,H=null;for(N in a){var Y=a[N];if(a.hasOwnProperty(N)&&Y!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=Y;default:i.hasOwnProperty(N)||ke(e,t,N,null,i,Y)}}for(var M in i){var N=i[M];if(Y=a[M],i.hasOwnProperty(M)&&(N!=null||Y!=null))switch(M){case"type":u=N;break;case"name":l=N;break;case"checked":D=N;break;case"defaultChecked":H=N;break;case"value":m=N;break;case"defaultValue":y=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:N!==Y&&ke(e,t,M,N,i,Y)}}fc(e,m,y,S,D,H,u,l);return;case"select":N=m=y=M=null;for(u in a)if(S=a[u],a.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":N=S;default:i.hasOwnProperty(u)||ke(e,t,u,null,i,S)}for(l in i)if(u=i[l],S=a[l],i.hasOwnProperty(l)&&(u!=null||S!=null))switch(l){case"value":M=u;break;case"defaultValue":y=u;break;case"multiple":m=u;default:u!==S&&ke(e,t,l,u,i,S)}t=y,a=m,i=N,M!=null?Wa(e,!!a,M,!1):!!i!=!!a&&(t!=null?Wa(e,!!a,t,!0):Wa(e,!!a,a?[]:"",!1));return;case"textarea":N=M=null;for(y in a)if(l=a[y],a.hasOwnProperty(y)&&l!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:ke(e,t,y,null,i,l)}for(m in i)if(l=i[m],u=a[m],i.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":M=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==u&&ke(e,t,m,l,i,u)}Hf(e,M,N);return;case"option":for(var oe in a)if(M=a[oe],a.hasOwnProperty(oe)&&M!=null&&!i.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:ke(e,t,oe,null,i,M)}for(S in i)if(M=i[S],N=a[S],i.hasOwnProperty(S)&&M!==N&&(M!=null||N!=null))switch(S){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:ke(e,t,S,M,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)M=a[ie],a.hasOwnProperty(ie)&&M!=null&&!i.hasOwnProperty(ie)&&ke(e,t,ie,null,i,M);for(D in i)if(M=i[D],N=a[D],i.hasOwnProperty(D)&&M!==N&&(M!=null||N!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:ke(e,t,D,M,i,N)}return;default:if(mc(t)){for(var Me in a)M=a[Me],a.hasOwnProperty(Me)&&M!==void 0&&!i.hasOwnProperty(Me)&&Iu(e,t,Me,void 0,i,M);for(H in i)M=i[H],N=a[H],!i.hasOwnProperty(H)||M===N||M===void 0&&N===void 0||Iu(e,t,H,M,i,N);return}}for(var R in a)M=a[R],a.hasOwnProperty(R)&&M!=null&&!i.hasOwnProperty(R)&&ke(e,t,R,null,i,M);for(Y in i)M=i[Y],N=a[Y],!i.hasOwnProperty(Y)||M===N||M==null&&N==null||ke(e,t,Y,M,i,N)}var Wu=null,ed=null;function jr(e){return e.nodeType===9?e:e.ownerDocument}function Gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function td(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nd=null;function Tx(){var e=window.event;return e&&e.type==="popstate"?e===nd?!1:(nd=e,!0):(nd=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(e){return Vg.resolve(null).then(e).catch(Dx)}:Yg;function Dx(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function Xg(e,t){var a=t,i=0,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<i&&8>i){a=i;var m=e.ownerDocument;if(a&1&&Bs(m.documentElement),a&2&&Bs(m.body),a&4)for(a=m.head,Bs(a),m=a.firstChild;m;){var y=m.nextSibling,S=m.nodeName;m[es]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||a.removeChild(m),m=y}}if(l===0){e.removeChild(u),Fs(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:i=a.charCodeAt(0)-48;else i=0;a=u}while(a);Fs(t)}function ad(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ad(a),oc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kx(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[es])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=dn(e.nextSibling),e===null)break}return null}function Mx(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=dn(e.nextSibling),e===null))return null;return e}function id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Nx(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var sd=null;function Fg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Qg(e,t,a){switch(t=jr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Bs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);oc(e)}var an=new Map,Kg=new Set;function wr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ln=K.d;K.d={f:_x,r:Ux,D:Lx,C:Bx,L:Hx,m:qx,X:Px,S:Gx,M:Yx};function _x(){var e=Ln.f(),t=mr();return e||t}function Ux(e){var t=Ka(e);t!==null&&t.tag===5&&t.type==="form"?gm(t):Ln.r(e)}var Ti=typeof document>"u"?null:document;function Zg(e,t,a){var i=Ti;if(i&&typeof t=="string"&&t){var l=Zt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Kg.has(l)||(Kg.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),ht(t,"link",e),it(t),i.head.appendChild(t)))}}function Lx(e){Ln.D(e),Zg("dns-prefetch",e,null)}function Bx(e,t){Ln.C(e,t),Zg("preconnect",e,t)}function Hx(e,t,a){Ln.L(e,t,a);var i=Ti;if(i&&e&&t){var l='link[rel="preload"][as="'+Zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Zt(a.imageSizes)+'"]')):l+='[href="'+Zt(e)+'"]';var u=l;switch(t){case"style":u=Ci(e);break;case"script":u=Oi(e)}an.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),an.set(u,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Hs(u))||t==="script"&&i.querySelector(qs(u))||(t=i.createElement("link"),ht(t,"link",e),it(t),i.head.appendChild(t)))}}function qx(e,t){Ln.m(e,t);var a=Ti;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Zt(i)+'"][href="'+Zt(e)+'"]',u=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Oi(e)}if(!an.has(u)&&(e=b({rel:"modulepreload",href:e},t),an.set(u,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qs(u)))return}i=a.createElement("link"),ht(i,"link",e),it(i),a.head.appendChild(i)}}}function Gx(e,t,a){Ln.S(e,t,a);var i=Ti;if(i&&e){var l=Za(i).hoistableStyles,u=Ci(e);t=t||"default";var m=l.get(u);if(!m){var y={loading:0,preload:null};if(m=i.querySelector(Hs(u)))y.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=an.get(u))&&ld(e,a);var S=m=i.createElement("link");it(S),ht(S,"link",e),S._p=new Promise(function(D,H){S.onload=D,S.onerror=H}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Er(m,t,i)}m={type:"stylesheet",instance:m,count:1,state:y},l.set(u,m)}}}function Px(e,t){Ln.X(e,t);var a=Ti;if(a&&e){var i=Za(a).hoistableScripts,l=Oi(e),u=i.get(l);u||(u=a.querySelector(qs(l)),u||(e=b({src:e,async:!0},t),(t=an.get(l))&&rd(e,t),u=a.createElement("script"),it(u),ht(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function Yx(e,t){Ln.M(e,t);var a=Ti;if(a&&e){var i=Za(a).hoistableScripts,l=Oi(e),u=i.get(l);u||(u=a.querySelector(qs(l)),u||(e=b({src:e,async:!0,type:"module"},t),(t=an.get(l))&&rd(e,t),u=a.createElement("script"),it(u),ht(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function Jg(e,t,a,i){var l=(l=ae.current)?wr(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ci(a.href),a=Za(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ci(a.href);var u=Za(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(Hs(e)))&&!u._p&&(m.instance=u,m.state.loading=5),an.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},an.set(e,a),u||Vx(l,e,a,m.state))),t&&i===null)throw Error(o(528,""));return m}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Oi(a),a=Za(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ci(e){return'href="'+Zt(e)+'"'}function Hs(e){return'link[rel="stylesheet"]['+e+"]"}function Ig(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Vx(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ht(t,"link",a),it(t),e.head.appendChild(t))}function Oi(e){return'[src="'+Zt(e)+'"]'}function qs(e){return"script[async]"+e}function Wg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(i)return t.instance=i,it(i),i;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),it(i),ht(i,"style",l),Er(i,a.precedence,e),t.instance=i;case"stylesheet":l=Ci(a.href);var u=e.querySelector(Hs(l));if(u)return t.state.loading|=4,t.instance=u,it(u),u;i=Ig(a),(l=an.get(l))&&ld(i,l),u=(e.ownerDocument||e).createElement("link"),it(u);var m=u;return m._p=new Promise(function(y,S){m.onload=y,m.onerror=S}),ht(u,"link",i),t.state.loading|=4,Er(u,a.precedence,e),t.instance=u;case"script":return u=Oi(a.src),(l=e.querySelector(qs(u)))?(t.instance=l,it(l),l):(i=a,(l=an.get(u))&&(i=b({},a),rd(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),it(l),ht(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Er(i,a.precedence,e));return t.instance}function Er(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,u=l,m=0;m<i.length;m++){var y=i[m];if(y.dataset.precedence===t)u=y;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ld(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function rd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $r=null;function ep(e,t,a){if($r===null){var i=new Map,l=$r=new Map;l.set(a,i)}else l=$r,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[es]||u[yt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var y=i.get(m);y?y.push(u):i.set(m,[u])}}return i}function tp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Xx(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function np(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Gs=null;function Fx(){}function Qx(e,t,a){if(Gs===null)throw Error(o(475));var i=Gs;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ci(a.href),u=e.querySelector(Hs(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=zr.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=u,it(u);return}u=e.ownerDocument||e,a=Ig(a),(l=an.get(l))&&ld(a,l),u=u.createElement("link"),it(u);var m=u;m._p=new Promise(function(y,S){m.onload=y,m.onerror=S}),ht(u,"link",a),t.instance=u}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=zr.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Kx(){if(Gs===null)throw Error(o(475));var e=Gs;return e.stylesheets&&e.count===0&&od(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&od(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zr(){if(this.count--,this.count===0){if(this.stylesheets)od(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ar=null;function od(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ar=new Map,t.forEach(Zx,e),Ar=null,zr.call(e))}function Zx(e,t){if(!(t.state.loading&4)){var a=Ar.get(e);if(a)var i=a.get(null);else{a=new Map,Ar.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),i=m)}i&&a.set(null,i)}l=t.instance,m=l.getAttribute("data-precedence"),u=a.get(m)||i,u===i&&a.set(null,l),a.set(m,l),this.count++,i=zr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ps={$$typeof:V,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Jx(e,t,a,i,l,u,m,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ic(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.hiddenUpdates=ic(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function ap(e,t,a,i,l,u,m,y,S,D,H,Y){return e=new Jx(e,t,a,m,y,S,D,Y),t=1,u===!0&&(t|=24),u=Gt(3,null,null,t),e.current=u,u.stateNode=e,t=Pc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:a,cache:t},Fc(u),e}function ip(e){return e?(e=oi,e):oi}function sp(e,t,a,i,l,u){l=ip(l),i.context===null?i.context=l:i.pendingContext=l,i=Qn(t),i.payload={element:a},u=u===void 0?null:u,u!==null&&(i.callback=u),a=Kn(e,i,t),a!==null&&(Ft(a,e,t),bs(a,e,t))}function lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function cd(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}function rp(e){if(e.tag===13){var t=ri(e,67108864);t!==null&&Ft(t,e,67108864),cd(e,67108864)}}var Rr=!0;function Ix(e,t,a,i){var l=k.T;k.T=null;var u=K.p;try{K.p=2,ud(e,t,a,i)}finally{K.p=u,k.T=l}}function Wx(e,t,a,i){var l=k.T;k.T=null;var u=K.p;try{K.p=8,ud(e,t,a,i)}finally{K.p=u,k.T=l}}function ud(e,t,a,i){if(Rr){var l=dd(i);if(l===null)Ju(e,t,i,Tr,a),cp(e,i);else if(tb(l,e,t,a,i))i.stopPropagation();else if(cp(e,i),t&4&&-1<eb.indexOf(e)){for(;l!==null;){var u=Ka(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=ba(u.pendingLanes);if(m!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;m;){var S=1<<31-Ht(m);y.entanglements[1]|=S,m&=~S}vn(u),(Te&6)===0&&(fr=Lt()+500,_s(0))}}break;case 13:y=ri(u,2),y!==null&&Ft(y,u,2),mr(),cd(u,2)}if(u=dd(i),u===null&&Ju(e,t,i,Tr,a),u===l)break;l=u}l!==null&&i.stopPropagation()}else Ju(e,t,i,null,a)}}function dd(e){return e=pc(e),fd(e)}var Tr=null;function fd(e){if(Tr=null,e=Qa(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Tr=e,null}function op(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ac()){case vl:return 2;case Sl:return 8;case Xa:case F:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hd=!1,oa=null,ca=null,ua=null,Ys=new Map,Vs=new Map,da=[],eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cp(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(t.pointerId)}}function Xs(e,t,a,i,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Ka(t),t!==null&&rp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function tb(e,t,a,i,l){switch(t){case"focusin":return oa=Xs(oa,e,t,a,i,l),!0;case"dragenter":return ca=Xs(ca,e,t,a,i,l),!0;case"mouseover":return ua=Xs(ua,e,t,a,i,l),!0;case"pointerover":var u=l.pointerId;return Ys.set(u,Xs(Ys.get(u)||null,e,t,a,i,l)),!0;case"gotpointercapture":return u=l.pointerId,Vs.set(u,Xs(Vs.get(u)||null,e,t,a,i,l)),!0}return!1}function up(e){var t=Qa(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Qy(e.priority,function(){if(a.tag===13){var i=Xt();i=sc(i);var l=ri(a,i);l!==null&&Ft(l,a,i),cd(a,i)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=dd(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);gc=i,a.target.dispatchEvent(i),gc=null}else return t=Ka(a),t!==null&&rp(t),e.blockedOn=a,!1;t.shift()}return!0}function dp(e,t,a){Cr(e)&&a.delete(t)}function nb(){hd=!1,oa!==null&&Cr(oa)&&(oa=null),ca!==null&&Cr(ca)&&(ca=null),ua!==null&&Cr(ua)&&(ua=null),Ys.forEach(dp),Vs.forEach(dp)}function Or(e,t){e.blockedOn===t&&(e.blockedOn=null,hd||(hd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nb)))}var Dr=null;function fp(e){Dr!==e&&(Dr=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Dr===e&&(Dr=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(fd(i||a)===null)continue;break}var u=Ka(a);u!==null&&(e.splice(t,3),t-=3,fu(u,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Fs(e){function t(S){return Or(S,e)}oa!==null&&Or(oa,e),ca!==null&&Or(ca,e),ua!==null&&Or(ua,e),Ys.forEach(t),Vs.forEach(t);for(var a=0;a<da.length;a++){var i=da[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<da.length&&(a=da[0],a.blockedOn===null);)up(a),a.blockedOn===null&&da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],u=a[i+1],m=l[Tt]||null;if(typeof u=="function")m||fp(a);else if(m){var y=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[Tt]||null)y=m.formAction;else if(fd(l)!==null)continue}else y=m.action;typeof y=="function"?a[i+1]=y:(a.splice(i,3),i-=3),fp(a)}}}function md(e){this._internalRoot=e}kr.prototype.render=md.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,i=Xt();sp(a,i,e,t,null,null)},kr.prototype.unmount=md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sp(e.current,2,null,e,null,null),mr(),t[Fa]=null}};function kr(e){this._internalRoot=e}kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<da.length&&t!==0&&t<da[a].priority;a++);da.splice(a,0,e),a===0&&up(e)}};var hp=s.version;if(hp!=="19.1.0")throw Error(o(527,hp,"19.1.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var ab={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{Ji=Mr.inject(ab),Bt=Mr}catch{}}return Ks.createRoot=function(e,t){if(!d(e))throw Error(o(299));var a=!1,i="",l=Tm,u=Cm,m=Om,y=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=ap(e,1,!1,null,null,a,i,l,u,m,y,null),e[Fa]=t.current,Zu(e),new md(t)},Ks.hydrateRoot=function(e,t,a){if(!d(e))throw Error(o(299));var i=!1,l="",u=Tm,m=Cm,y=Om,S=null,D=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(D=a.formState)),t=ap(e,1,!0,t,a??null,i,l,u,m,y,S,D),t.context=ip(null),a=t.current,i=Xt(),i=sc(i),l=Qn(i),l.callback=null,Kn(a,l,i),a=i,t.current.lanes=a,Wi(t,a),vn(t),e[Fa]=t.current,Zu(e),new kr(t)},Ks.version="19.1.0",Ks}var wp;function hb(){if(wp)return yd.exports;wp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),yd.exports=fb(),yd.exports}var mb=hb(),ct=function(){return ct=Object.assign||function(s){for(var r,o=1,d=arguments.length;o<d;o++){r=arguments[o];for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&(s[f]=r[f])}return s},ct.apply(this,arguments)};function dl(n,s,r){if(r||arguments.length===2)for(var o=0,d=s.length,f;o<d;o++)(f||!(o in s))&&(f||(f=Array.prototype.slice.call(s,0,o)),f[o]=s[o]);return n.concat(f||Array.prototype.slice.call(s))}var qe="-ms-",cl="-moz-",Ae="-webkit-",H0="comm",Go="rule",mf="decl",gb="@import",q0="@keyframes",pb="@layer",G0=Math.abs,gf=String.fromCharCode,Gd=Object.assign;function yb(n,s){return ot(n,0)^45?(((s<<2^ot(n,0))<<2^ot(n,1))<<2^ot(n,2))<<2^ot(n,3):0}function P0(n){return n.trim()}function Bn(n,s){return(n=s.exec(n))?n[0]:n}function ge(n,s,r){return n.replace(s,r)}function xo(n,s,r){return n.indexOf(s,r)}function ot(n,s){return n.charCodeAt(s)|0}function Yi(n,s,r){return n.slice(s,r)}function jn(n){return n.length}function Y0(n){return n.length}function ol(n,s){return s.push(n),n}function xb(n,s){return n.map(s).join("")}function Ep(n,s){return n.filter(function(r){return!Bn(r,s)})}var Po=1,Vi=1,V0=0,ln=0,We=0,Qi="";function Yo(n,s,r,o,d,f,h,g){return{value:n,root:s,parent:r,type:o,props:d,children:f,line:Po,column:Vi,length:h,return:"",siblings:g}}function pa(n,s){return Gd(Yo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},s)}function Di(n){for(;n.root;)n=pa(n.root,{children:[n]});ol(n,n.siblings)}function bb(){return We}function vb(){return We=ln>0?ot(Qi,--ln):0,Vi--,We===10&&(Vi=1,Po--),We}function hn(){return We=ln<V0?ot(Qi,ln++):0,Vi++,We===10&&(Vi=1,Po++),We}function Ba(){return ot(Qi,ln)}function bo(){return ln}function Vo(n,s){return Yi(Qi,n,s)}function Pd(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sb(n){return Po=Vi=1,V0=jn(Qi=n),ln=0,[]}function jb(n){return Qi="",n}function Sd(n){return P0(Vo(ln-1,Yd(n===91?n+2:n===40?n+1:n)))}function wb(n){for(;(We=Ba())&&We<33;)hn();return Pd(n)>2||Pd(We)>3?"":" "}function Eb(n,s){for(;--s&&hn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Vo(n,bo()+(s<6&&Ba()==32&&hn()==32))}function Yd(n){for(;hn();)switch(We){case n:return ln;case 34:case 39:n!==34&&n!==39&&Yd(We);break;case 40:n===41&&Yd(n);break;case 92:hn();break}return ln}function $b(n,s){for(;hn()&&n+We!==57;)if(n+We===84&&Ba()===47)break;return"/*"+Vo(s,ln-1)+"*"+gf(n===47?n:hn())}function zb(n){for(;!Pd(Ba());)hn();return Vo(n,ln)}function Ab(n){return jb(vo("",null,null,null,[""],n=Sb(n),0,[0],n))}function vo(n,s,r,o,d,f,h,g,x){for(var p=0,b=0,v=h,z=0,C=0,j=0,A=1,T=1,G=1,X=0,V="",L=d,P=f,Q=o,B=V;T;)switch(j=X,X=hn()){case 40:if(j!=108&&ot(B,v-1)==58){xo(B+=ge(Sd(X),"&","&\f"),"&\f",G0(p?g[p-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:B+=Sd(X);break;case 9:case 10:case 13:case 32:B+=wb(j);break;case 92:B+=Eb(bo()-1,7);continue;case 47:switch(Ba()){case 42:case 47:ol(Rb($b(hn(),bo()),s,r,x),x);break;default:B+="/"}break;case 123*A:g[p++]=jn(B)*G;case 125*A:case 59:case 0:switch(X){case 0:case 125:T=0;case 59+b:G==-1&&(B=ge(B,/\f/g,"")),C>0&&jn(B)-v&&ol(C>32?zp(B+";",o,r,v-1,x):zp(ge(B," ","")+";",o,r,v-2,x),x);break;case 59:B+=";";default:if(ol(Q=$p(B,s,r,p,b,d,g,V,L=[],P=[],v,f),f),X===123)if(b===0)vo(B,s,Q,Q,L,f,v,g,P);else switch(z===99&&ot(B,3)===110?100:z){case 100:case 108:case 109:case 115:vo(n,Q,Q,o&&ol($p(n,Q,Q,0,0,d,g,V,d,L=[],v,P),P),d,P,v,g,o?L:P);break;default:vo(B,Q,Q,Q,[""],P,0,g,P)}}p=b=C=0,A=G=1,V=B="",v=h;break;case 58:v=1+jn(B),C=j;default:if(A<1){if(X==123)--A;else if(X==125&&A++==0&&vb()==125)continue}switch(B+=gf(X),X*A){case 38:G=b>0?1:(B+="\f",-1);break;case 44:g[p++]=(jn(B)-1)*G,G=1;break;case 64:Ba()===45&&(B+=Sd(hn())),z=Ba(),b=v=jn(V=B+=zb(bo())),X++;break;case 45:j===45&&jn(B)==2&&(A=0)}}return f}function $p(n,s,r,o,d,f,h,g,x,p,b,v){for(var z=d-1,C=d===0?f:[""],j=Y0(C),A=0,T=0,G=0;A<o;++A)for(var X=0,V=Yi(n,z+1,z=G0(T=h[A])),L=n;X<j;++X)(L=P0(T>0?C[X]+" "+V:ge(V,/&\f/g,C[X])))&&(x[G++]=L);return Yo(n,s,r,d===0?Go:g,x,p,b,v)}function Rb(n,s,r,o){return Yo(n,s,r,H0,gf(bb()),Yi(n,2,-2),0,o)}function zp(n,s,r,o,d){return Yo(n,s,r,mf,Yi(n,0,o),Yi(n,o+1,-1),o,d)}function X0(n,s,r){switch(yb(n,s)){case 5103:return Ae+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+n+n;case 4789:return cl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+n+cl+n+qe+n+n;case 5936:switch(ot(n,s+11)){case 114:return Ae+n+qe+ge(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ae+n+qe+ge(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ae+n+qe+ge(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ae+n+qe+n+n;case 6165:return Ae+n+qe+"flex-"+n+n;case 5187:return Ae+n+ge(n,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+qe+"flex-$1$2")+n;case 5443:return Ae+n+qe+"flex-item-"+ge(n,/flex-|-self/g,"")+(Bn(n,/flex-|baseline/)?"":qe+"grid-row-"+ge(n,/flex-|-self/g,""))+n;case 4675:return Ae+n+qe+"flex-line-pack"+ge(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ae+n+qe+ge(n,"shrink","negative")+n;case 5292:return Ae+n+qe+ge(n,"basis","preferred-size")+n;case 6060:return Ae+"box-"+ge(n,"-grow","")+Ae+n+qe+ge(n,"grow","positive")+n;case 4554:return Ae+ge(n,/([^-])(transform)/g,"$1"+Ae+"$2")+n;case 6187:return ge(ge(ge(n,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),n,"")+n;case 5495:case 3959:return ge(n,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return ge(ge(n,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+n+n;case 4200:if(!Bn(n,/flex-|baseline/))return qe+"grid-column-align"+Yi(n,s)+n;break;case 2592:case 3360:return qe+ge(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(o,d){return s=d,Bn(o.props,/grid-\w+-end/)})?~xo(n+(r=r[s].value),"span",0)?n:qe+ge(n,"-start","")+n+qe+"grid-row-span:"+(~xo(r,"span",0)?Bn(r,/\d+/):+Bn(r,/\d+/)-+Bn(n,/\d+/))+";":qe+ge(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(o){return Bn(o.props,/grid-\w+-start/)})?n:qe+ge(ge(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ge(n,/(.+)-inline(.+)/,Ae+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jn(n)-1-s>6)switch(ot(n,s+1)){case 109:if(ot(n,s+4)!==45)break;case 102:return ge(n,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+cl+(ot(n,s+3)==108?"$3":"$2-$3"))+n;case 115:return~xo(n,"stretch",0)?X0(ge(n,"stretch","fill-available"),s,r)+n:n}break;case 5152:case 5920:return ge(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,d,f,h,g,x,p){return qe+d+":"+f+p+(h?qe+d+"-span:"+(g?x:+x-+f)+p:"")+n});case 4949:if(ot(n,s+6)===121)return ge(n,":",":"+Ae)+n;break;case 6444:switch(ot(n,ot(n,14)===45?18:11)){case 120:return ge(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(ot(n,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+qe+"$2box$3")+n;case 100:return ge(n,":",":"+qe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(n,"scroll-","scroll-snap-")+n}return n}function To(n,s){for(var r="",o=0;o<n.length;o++)r+=s(n[o],o,n,s)||"";return r}function Tb(n,s,r,o){switch(n.type){case pb:if(n.children.length)break;case gb:case mf:return n.return=n.return||n.value;case H0:return"";case q0:return n.return=n.value+"{"+To(n.children,o)+"}";case Go:if(!jn(n.value=n.props.join(",")))return""}return jn(r=To(n.children,o))?n.return=n.value+"{"+r+"}":""}function Cb(n){var s=Y0(n);return function(r,o,d,f){for(var h="",g=0;g<s;g++)h+=n[g](r,o,d,f)||"";return h}}function Ob(n){return function(s){s.root||(s=s.return)&&n(s)}}function Db(n,s,r,o){if(n.length>-1&&!n.return)switch(n.type){case mf:n.return=X0(n.value,n.length,r);return;case q0:return To([pa(n,{value:ge(n.value,"@","@"+Ae)})],o);case Go:if(n.length)return xb(r=n.props,function(d){switch(Bn(d,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Di(pa(n,{props:[ge(d,/:(read-\w+)/,":"+cl+"$1")]})),Di(pa(n,{props:[d]})),Gd(n,{props:Ep(r,o)});break;case"::placeholder":Di(pa(n,{props:[ge(d,/:(plac\w+)/,":"+Ae+"input-$1")]})),Di(pa(n,{props:[ge(d,/:(plac\w+)/,":"+cl+"$1")]})),Di(pa(n,{props:[ge(d,/:(plac\w+)/,qe+"input-$1")]})),Di(pa(n,{props:[d]})),Gd(n,{props:Ep(r,o)});break}return""})}}var kb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qt={},Xi=typeof process<"u"&&Qt!==void 0&&(Qt.REACT_APP_SC_ATTR||Qt.SC_ATTR)||"data-styled",F0="active",Q0="data-styled-version",Xo="6.1.19",pf=`/*!sc*/
`,Co=typeof window<"u"&&typeof document<"u",Mb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qt!==void 0&&Qt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qt.REACT_APP_SC_DISABLE_SPEEDY!==""?Qt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qt!==void 0&&Qt.SC_DISABLE_SPEEDY!==void 0&&Qt.SC_DISABLE_SPEEDY!==""&&Qt.SC_DISABLE_SPEEDY!=="false"&&Qt.SC_DISABLE_SPEEDY),Nb={},Fo=Object.freeze([]),Fi=Object.freeze({});function K0(n,s,r){return r===void 0&&(r=Fi),n.theme!==r.theme&&n.theme||s||r.theme}var Z0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_b=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ub=/(^-|-$)/g;function Ap(n){return n.replace(_b,"-").replace(Ub,"")}var Lb=/(a)(d)/gi,Nr=52,Rp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Vd(n){var s,r="";for(s=Math.abs(n);s>Nr;s=s/Nr|0)r=Rp(s%Nr)+r;return(Rp(s%Nr)+r).replace(Lb,"$1-$2")}var jd,J0=5381,Hi=function(n,s){for(var r=s.length;r;)n=33*n^s.charCodeAt(--r);return n},I0=function(n){return Hi(J0,n)};function W0(n){return Vd(I0(n)>>>0)}function Bb(n){return n.displayName||n.name||"Component"}function wd(n){return typeof n=="string"&&!0}var ey=typeof Symbol=="function"&&Symbol.for,ty=ey?Symbol.for("react.memo"):60115,Hb=ey?Symbol.for("react.forward_ref"):60112,qb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ny={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pb=((jd={})[Hb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jd[ty]=ny,jd);function Tp(n){return("type"in(s=n)&&s.type.$$typeof)===ty?ny:"$$typeof"in n?Pb[n.$$typeof]:qb;var s}var Yb=Object.defineProperty,Vb=Object.getOwnPropertyNames,Cp=Object.getOwnPropertySymbols,Xb=Object.getOwnPropertyDescriptor,Fb=Object.getPrototypeOf,Op=Object.prototype;function ay(n,s,r){if(typeof s!="string"){if(Op){var o=Fb(s);o&&o!==Op&&ay(n,o,r)}var d=Vb(s);Cp&&(d=d.concat(Cp(s)));for(var f=Tp(n),h=Tp(s),g=0;g<d.length;++g){var x=d[g];if(!(x in Gb||r&&r[x]||h&&x in h||f&&x in f)){var p=Xb(s,x);try{Yb(n,x,p)}catch{}}}}return n}function Ga(n){return typeof n=="function"}function yf(n){return typeof n=="object"&&"styledComponentId"in n}function Ua(n,s){return n&&s?"".concat(n," ").concat(s):n||s||""}function Xd(n,s){if(n.length===0)return"";for(var r=n[0],o=1;o<n.length;o++)r+=n[o];return r}function fl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Fd(n,s,r){if(r===void 0&&(r=!1),!r&&!fl(n)&&!Array.isArray(n))return s;if(Array.isArray(s))for(var o=0;o<s.length;o++)n[o]=Fd(n[o],s[o]);else if(fl(s))for(var o in s)n[o]=Fd(n[o],s[o]);return n}function xf(n,s){Object.defineProperty(n,"toString",{value:s})}function Pa(n){for(var s=[],r=1;r<arguments.length;r++)s[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Qb=function(){function n(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return n.prototype.indexOfGroup=function(s){for(var r=0,o=0;o<s;o++)r+=this.groupSizes[o];return r},n.prototype.insertRules=function(s,r){if(s>=this.groupSizes.length){for(var o=this.groupSizes,d=o.length,f=d;s>=f;)if((f<<=1)<0)throw Pa(16,"".concat(s));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var h=d;h<f;h++)this.groupSizes[h]=0}for(var g=this.indexOfGroup(s+1),x=(h=0,r.length);h<x;h++)this.tag.insertRule(g,r[h])&&(this.groupSizes[s]++,g++)},n.prototype.clearGroup=function(s){if(s<this.length){var r=this.groupSizes[s],o=this.indexOfGroup(s),d=o+r;this.groupSizes[s]=0;for(var f=o;f<d;f++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(s){var r="";if(s>=this.length||this.groupSizes[s]===0)return r;for(var o=this.groupSizes[s],d=this.indexOfGroup(s),f=d+o,h=d;h<f;h++)r+="".concat(this.tag.getRule(h)).concat(pf);return r},n}(),So=new Map,Oo=new Map,jo=1,_r=function(n){if(So.has(n))return So.get(n);for(;Oo.has(jo);)jo++;var s=jo++;return So.set(n,s),Oo.set(s,n),s},Kb=function(n,s){jo=s+1,So.set(n,s),Oo.set(s,n)},Zb="style[".concat(Xi,"][").concat(Q0,'="').concat(Xo,'"]'),Jb=new RegExp("^".concat(Xi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ib=function(n,s,r){for(var o,d=r.split(","),f=0,h=d.length;f<h;f++)(o=d[f])&&n.registerName(s,o)},Wb=function(n,s){for(var r,o=((r=s.textContent)!==null&&r!==void 0?r:"").split(pf),d=[],f=0,h=o.length;f<h;f++){var g=o[f].trim();if(g){var x=g.match(Jb);if(x){var p=0|parseInt(x[1],10),b=x[2];p!==0&&(Kb(b,p),Ib(n,b,x[3]),n.getTag().insertRules(p,d)),d.length=0}else d.push(g)}}},Dp=function(n){for(var s=document.querySelectorAll(Zb),r=0,o=s.length;r<o;r++){var d=s[r];d&&d.getAttribute(Xi)!==F0&&(Wb(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function ev(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iy=function(n){var s=document.head,r=n||s,o=document.createElement("style"),d=function(g){var x=Array.from(g.querySelectorAll("style[".concat(Xi,"]")));return x[x.length-1]}(r),f=d!==void 0?d.nextSibling:null;o.setAttribute(Xi,F0),o.setAttribute(Q0,Xo);var h=ev();return h&&o.setAttribute("nonce",h),r.insertBefore(o,f),o},tv=function(){function n(s){this.element=iy(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,d=0,f=o.length;d<f;d++){var h=o[d];if(h.ownerNode===r)return h}throw Pa(17)}(this.element),this.length=0}return n.prototype.insertRule=function(s,r){try{return this.sheet.insertRule(r,s),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},n.prototype.getRule=function(s){var r=this.sheet.cssRules[s];return r&&r.cssText?r.cssText:""},n}(),nv=function(){function n(s){this.element=iy(s),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(s,r){if(s<=this.length&&s>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[s]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},n.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},n}(),av=function(){function n(s){this.rules=[],this.length=0}return n.prototype.insertRule=function(s,r){return s<=this.length&&(this.rules.splice(s,0,r),this.length++,!0)},n.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},n.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},n}(),kp=Co,iv={isServer:!Co,useCSSOMInjection:!Mb},Do=function(){function n(s,r,o){s===void 0&&(s=Fi),r===void 0&&(r={});var d=this;this.options=ct(ct({},iv),s),this.gs=r,this.names=new Map(o),this.server=!!s.isServer,!this.server&&Co&&kp&&(kp=!1,Dp(this)),xf(this,function(){return function(f){for(var h=f.getTag(),g=h.length,x="",p=function(v){var z=function(G){return Oo.get(G)}(v);if(z===void 0)return"continue";var C=f.names.get(z),j=h.getGroup(v);if(C===void 0||!C.size||j.length===0)return"continue";var A="".concat(Xi,".g").concat(v,'[id="').concat(z,'"]'),T="";C!==void 0&&C.forEach(function(G){G.length>0&&(T+="".concat(G,","))}),x+="".concat(j).concat(A,'{content:"').concat(T,'"}').concat(pf)},b=0;b<g;b++)p(b);return x}(d)})}return n.registerId=function(s){return _r(s)},n.prototype.rehydrate=function(){!this.server&&Co&&Dp(this)},n.prototype.reconstructWithOptions=function(s,r){return r===void 0&&(r=!0),new n(ct(ct({},this.options),s),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(s=function(r){var o=r.useCSSOMInjection,d=r.target;return r.isServer?new av(d):o?new tv(d):new nv(d)}(this.options),new Qb(s)));var s},n.prototype.hasNameForId=function(s,r){return this.names.has(s)&&this.names.get(s).has(r)},n.prototype.registerName=function(s,r){if(_r(s),this.names.has(s))this.names.get(s).add(r);else{var o=new Set;o.add(r),this.names.set(s,o)}},n.prototype.insertRules=function(s,r,o){this.registerName(s,r),this.getTag().insertRules(_r(s),o)},n.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},n.prototype.clearRules=function(s){this.getTag().clearGroup(_r(s)),this.clearNames(s)},n.prototype.clearTag=function(){this.tag=void 0},n}(),sv=/&/g,lv=/^\s*\/\/.*$/gm;function sy(n,s){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(s," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(s," ")),r.props=r.props.map(function(o){return"".concat(s," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=sy(r.children,s)),r})}function rv(n){var s,r,o,d=Fi,f=d.options,h=f===void 0?Fi:f,g=d.plugins,x=g===void 0?Fo:g,p=function(z,C,j){return j.startsWith(r)&&j.endsWith(r)&&j.replaceAll(r,"").length>0?".".concat(s):z},b=x.slice();b.push(function(z){z.type===Go&&z.value.includes("&")&&(z.props[0]=z.props[0].replace(sv,r).replace(o,p))}),h.prefix&&b.push(Db),b.push(Tb);var v=function(z,C,j,A){C===void 0&&(C=""),j===void 0&&(j=""),A===void 0&&(A="&"),s=A,r=C,o=new RegExp("\\".concat(r,"\\b"),"g");var T=z.replace(lv,""),G=Ab(j||C?"".concat(j," ").concat(C," { ").concat(T," }"):T);h.namespace&&(G=sy(G,h.namespace));var X=[];return To(G,Cb(b.concat(Ob(function(V){return X.push(V)})))),X};return v.hash=x.length?x.reduce(function(z,C){return C.name||Pa(15),Hi(z,C.name)},J0).toString():"",v}var ov=new Do,Qd=rv(),ly=fn.createContext({shouldForwardProp:void 0,styleSheet:ov,stylis:Qd});ly.Consumer;fn.createContext(void 0);function Kd(){return W.useContext(ly)}var cv=function(){function n(s,r){var o=this;this.inject=function(d,f){f===void 0&&(f=Qd);var h=o.name+f.hash;d.hasNameForId(o.id,h)||d.insertRules(o.id,h,f(o.rules,h,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=r,xf(this,function(){throw Pa(12,String(o.name))})}return n.prototype.getName=function(s){return s===void 0&&(s=Qd),this.name+s.hash},n}(),uv=function(n){return n>="A"&&n<="Z"};function Mp(n){for(var s="",r=0;r<n.length;r++){var o=n[r];if(r===1&&o==="-"&&n[0]==="-")return n;uv(o)?s+="-"+o.toLowerCase():s+=o}return s.startsWith("ms-")?"-"+s:s}var ry=function(n){return n==null||n===!1||n===""},oy=function(n){var s,r,o=[];for(var d in n){var f=n[d];n.hasOwnProperty(d)&&!ry(f)&&(Array.isArray(f)&&f.isCss||Ga(f)?o.push("".concat(Mp(d),":"),f,";"):fl(f)?o.push.apply(o,dl(dl(["".concat(d," {")],oy(f),!1),["}"],!1)):o.push("".concat(Mp(d),": ").concat((s=d,(r=f)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||s in kb||s.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function ya(n,s,r,o){if(ry(n))return[];if(yf(n))return[".".concat(n.styledComponentId)];if(Ga(n)){if(!Ga(f=n)||f.prototype&&f.prototype.isReactComponent||!s)return[n];var d=n(s);return ya(d,s,r,o)}var f;return n instanceof cv?r?(n.inject(r,o),[n.getName(o)]):[n]:fl(n)?oy(n):Array.isArray(n)?Array.prototype.concat.apply(Fo,n.map(function(h){return ya(h,s,r,o)})):[n.toString()]}function cy(n){for(var s=0;s<n.length;s+=1){var r=n[s];if(Ga(r)&&!yf(r))return!1}return!0}var dv=I0(Xo),fv=function(){function n(s,r,o){this.rules=s,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&cy(s),this.componentId=r,this.baseHash=Hi(dv,r),this.baseStyle=o,Do.registerId(r)}return n.prototype.generateAndInjectStyles=function(s,r,o){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))d=Ua(d,this.staticRulesId);else{var f=Xd(ya(this.rules,s,r,o)),h=Vd(Hi(this.baseHash,f)>>>0);if(!r.hasNameForId(this.componentId,h)){var g=o(f,".".concat(h),void 0,this.componentId);r.insertRules(this.componentId,h,g)}d=Ua(d,h),this.staticRulesId=h}else{for(var x=Hi(this.baseHash,o.hash),p="",b=0;b<this.rules.length;b++){var v=this.rules[b];if(typeof v=="string")p+=v;else if(v){var z=Xd(ya(v,s,r,o));x=Hi(x,z+b),p+=z}}if(p){var C=Vd(x>>>0);r.hasNameForId(this.componentId,C)||r.insertRules(this.componentId,C,o(p,".".concat(C),void 0,this.componentId)),d=Ua(d,C)}}return d},n}(),hl=fn.createContext(void 0);hl.Consumer;function hv(n){var s=fn.useContext(hl),r=W.useMemo(function(){return function(o,d){if(!o)throw Pa(14);if(Ga(o)){var f=o(d);return f}if(Array.isArray(o)||typeof o!="object")throw Pa(8);return d?ct(ct({},d),o):o}(n.theme,s)},[n.theme,s]);return n.children?fn.createElement(hl.Provider,{value:r},n.children):null}var Ed={};function mv(n,s,r){var o=yf(n),d=n,f=!wd(n),h=s.attrs,g=h===void 0?Fo:h,x=s.componentId,p=x===void 0?function(L,P){var Q=typeof L!="string"?"sc":Ap(L);Ed[Q]=(Ed[Q]||0)+1;var B="".concat(Q,"-").concat(W0(Xo+Q+Ed[Q]));return P?"".concat(P,"-").concat(B):B}(s.displayName,s.parentComponentId):x,b=s.displayName,v=b===void 0?function(L){return wd(L)?"styled.".concat(L):"Styled(".concat(Bb(L),")")}(n):b,z=s.displayName&&s.componentId?"".concat(Ap(s.displayName),"-").concat(s.componentId):s.componentId||p,C=o&&d.attrs?d.attrs.concat(g).filter(Boolean):g,j=s.shouldForwardProp;if(o&&d.shouldForwardProp){var A=d.shouldForwardProp;if(s.shouldForwardProp){var T=s.shouldForwardProp;j=function(L,P){return A(L,P)&&T(L,P)}}else j=A}var G=new fv(r,z,o?d.componentStyle:void 0);function X(L,P){return function(Q,B,re){var Se=Q.attrs,xe=Q.componentStyle,Ye=Q.defaultProps,Ne=Q.foldedComponentIds,Oe=Q.styledComponentId,Be=Q.target,_e=fn.useContext(hl),k=Kd(),K=Q.shouldForwardProp||k.shouldForwardProp,I=K0(B,_e,Ye)||Fi,se=function(fe,ae,je){for(var ue,Fe=ct(ct({},ae),{className:void 0,theme:je}),on=0;on<fe.length;on+=1){var At=Ga(ue=fe[on])?ue(Fe):ue;for(var Ue in At)Fe[Ue]=Ue==="className"?Ua(Fe[Ue],At[Ue]):Ue==="style"?ct(ct({},Fe[Ue]),At[Ue]):At[Ue]}return ae.className&&(Fe.className=Ua(Fe.className,ae.className)),Fe}(Se,B,I),E=se.as||Be,U={};for(var Z in se)se[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&se.theme===I||(Z==="forwardedAs"?U.as=se.forwardedAs:K&&!K(Z,E)||(U[Z]=se[Z]));var J=function(fe,ae){var je=Kd(),ue=fe.generateAndInjectStyles(ae,je.styleSheet,je.stylis);return ue}(xe,se),ee=Ua(Ne,Oe);return J&&(ee+=" "+J),se.className&&(ee+=" "+se.className),U[wd(E)&&!Z0.has(E)?"class":"className"]=ee,re&&(U.ref=re),W.createElement(E,U)}(V,L,P)}X.displayName=v;var V=fn.forwardRef(X);return V.attrs=C,V.componentStyle=G,V.displayName=v,V.shouldForwardProp=j,V.foldedComponentIds=o?Ua(d.foldedComponentIds,d.styledComponentId):"",V.styledComponentId=z,V.target=o?d.target:n,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=o?function(P){for(var Q=[],B=1;B<arguments.length;B++)Q[B-1]=arguments[B];for(var re=0,Se=Q;re<Se.length;re++)Fd(P,Se[re],!0);return P}({},d.defaultProps,L):L}}),xf(V,function(){return".".concat(V.styledComponentId)}),f&&ay(V,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function Np(n,s){for(var r=[n[0]],o=0,d=s.length;o<d;o+=1)r.push(s[o],n[o+1]);return r}var _p=function(n){return Object.assign(n,{isCss:!0})};function uy(n){for(var s=[],r=1;r<arguments.length;r++)s[r-1]=arguments[r];if(Ga(n)||fl(n))return _p(ya(Np(Fo,dl([n],s,!0))));var o=n;return s.length===0&&o.length===1&&typeof o[0]=="string"?ya(o):_p(ya(Np(o,s)))}function Zd(n,s,r){if(r===void 0&&(r=Fi),!s)throw Pa(1,s);var o=function(d){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return n(s,r,uy.apply(void 0,dl([d],f,!1)))};return o.attrs=function(d){return Zd(n,s,ct(ct({},r),{attrs:Array.prototype.concat(r.attrs,d).filter(Boolean)}))},o.withConfig=function(d){return Zd(n,s,ct(ct({},r),d))},o}var dy=function(n){return Zd(mv,n)},w=dy;Z0.forEach(function(n){w[n]=dy(n)});var gv=function(){function n(s,r){this.rules=s,this.componentId=r,this.isStatic=cy(s),Do.registerId(this.componentId+1)}return n.prototype.createStyles=function(s,r,o,d){var f=d(Xd(ya(this.rules,r,o,d)),""),h=this.componentId+s;o.insertRules(h,h,f)},n.prototype.removeStyles=function(s,r){r.clearRules(this.componentId+s)},n.prototype.renderStyles=function(s,r,o,d){s>2&&Do.registerId(this.componentId+s),this.removeStyles(s,o),this.createStyles(s,r,o,d)},n}();function pv(n){for(var s=[],r=1;r<arguments.length;r++)s[r-1]=arguments[r];var o=uy.apply(void 0,dl([n],s,!1)),d="sc-global-".concat(W0(JSON.stringify(o))),f=new gv(o,d),h=function(x){var p=Kd(),b=fn.useContext(hl),v=fn.useRef(p.styleSheet.allocateGSInstance(d)).current;return p.styleSheet.server&&g(v,x,p.styleSheet,b,p.stylis),fn.useLayoutEffect(function(){if(!p.styleSheet.server)return g(v,x,p.styleSheet,b,p.stylis),function(){return f.removeStyles(v,p.styleSheet)}},[v,x,p.styleSheet,b,p.stylis]),null};function g(x,p,b,v,z){if(f.isStatic)f.renderStyles(x,Nb,b,z);else{var C=ct(ct({},p),{theme:K0(p,v,h.defaultProps)});f.renderStyles(x,C,b,z)}}return fn.memo(h)}const yv=(n,s,r,o)=>{const d=[r,{code:s,...o||{}}];if(n?.services?.logger?.forward)return n.services.logger.forward(d,"warn","react-i18next::",!0);Ha(d[0])&&(d[0]=`react-i18next:: ${d[0]}`),n?.services?.logger?.warn?n.services.logger.warn(...d):console?.warn&&console.warn(...d)},Up={},Jd=(n,s,r,o)=>{Ha(r)&&Up[r]||(Ha(r)&&(Up[r]=new Date),yv(n,s,r,o))},fy=(n,s)=>()=>{if(n.isInitialized)s();else{const r=()=>{setTimeout(()=>{n.off("initialized",r)},0),s()};n.on("initialized",r)}},Id=(n,s,r)=>{n.loadNamespaces(s,fy(n,r))},Lp=(n,s,r,o)=>{if(Ha(r)&&(r=[r]),n.options.preload&&n.options.preload.indexOf(s)>-1)return Id(n,r,o);r.forEach(d=>{n.options.ns.indexOf(d)<0&&n.options.ns.push(d)}),n.loadLanguages(s,fy(n,o))},xv=(n,s,r={})=>!s.languages||!s.languages.length?(Jd(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(n,{lng:r.lng,precheck:(o,d)=>{if(r.bindI18n?.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!d(o.isLanguageChangingTo,n))return!1}}),Ha=n=>typeof n=="string",bv=n=>typeof n=="object"&&n!==null,vv=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Sv={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},jv=n=>Sv[n],wv=n=>n.replace(vv,jv);let Wd={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:wv};const Ev=(n={})=>{Wd={...Wd,...n}},$v=()=>Wd;let hy;const zv=n=>{hy=n},Av=()=>hy,Rv={type:"3rdParty",init(n){Ev(n.options.react),zv(n)}},Tv=W.createContext();class Cv{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Ov=(n,s)=>{const r=W.useRef();return W.useEffect(()=>{r.current=n},[n,s]),r.current},my=(n,s,r,o)=>n.getFixedT(s,r,o),Dv=(n,s,r,o)=>W.useCallback(my(n,s,r,o),[n,s,r,o]),rn=(n,s={})=>{const{i18n:r}=s,{i18n:o,defaultNS:d}=W.useContext(Tv)||{},f=r||o||Av();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new Cv),!f){Jd(f,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const L=(Q,B)=>Ha(B)?B:bv(B)&&Ha(B.defaultValue)?B.defaultValue:Array.isArray(Q)?Q[Q.length-1]:Q,P=[L,{},!1];return P.t=L,P.i18n={},P.ready=!1,P}f.options.react?.wait&&Jd(f,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const h={...$v(),...f.options.react,...s},{useSuspense:g,keyPrefix:x}=h;let p=d||f.options?.defaultNS;p=Ha(p)?[p]:p||["translation"],f.reportNamespaces.addUsedNamespaces?.(p);const b=(f.isInitialized||f.initializedStoreOnce)&&p.every(L=>xv(L,f,h)),v=Dv(f,s.lng||null,h.nsMode==="fallback"?p:p[0],x),z=()=>v,C=()=>my(f,s.lng||null,h.nsMode==="fallback"?p:p[0],x),[j,A]=W.useState(z);let T=p.join();s.lng&&(T=`${s.lng}${T}`);const G=Ov(T),X=W.useRef(!0);W.useEffect(()=>{const{bindI18n:L,bindI18nStore:P}=h;X.current=!0,!b&&!g&&(s.lng?Lp(f,s.lng,p,()=>{X.current&&A(C)}):Id(f,p,()=>{X.current&&A(C)})),b&&G&&G!==T&&X.current&&A(C);const Q=()=>{X.current&&A(C)};return L&&f?.on(L,Q),P&&f?.store.on(P,Q),()=>{X.current=!1,f&&L?.split(" ").forEach(B=>f.off(B,Q)),P&&f&&P.split(" ").forEach(B=>f.store.off(B,Q))}},[f,T]),W.useEffect(()=>{X.current&&b&&A(z)},[f,x,b]);const V=[j,f,b];if(V.t=j,V.i18n=f,V.ready=b,b||!b&&!g)return V;throw new Promise(L=>{s.lng?Lp(f,s.lng,p,()=>L()):Id(f,p,()=>L())})};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mv=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,r,o)=>o?o.toUpperCase():r.toLowerCase()),Bp=n=>{const s=Mv(n);return s.charAt(0).toUpperCase()+s.slice(1)},gy=(...n)=>n.filter((s,r,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===r).join(" ").trim(),Nv=n=>{for(const s in n)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=W.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:d="",children:f,iconNode:h,...g},x)=>W.createElement("svg",{ref:x,..._v,width:s,height:s,stroke:n,strokeWidth:o?Number(r)*24/Number(s):r,className:gy("lucide",d),...!f&&!Nv(g)&&{"aria-hidden":"true"},...g},[...h.map(([p,b])=>W.createElement(p,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(n,s)=>{const r=W.forwardRef(({className:o,...d},f)=>W.createElement(Uv,{ref:f,iconNode:s,className:gy(`lucide-${kv(Bp(n))}`,`lucide-${n}`,o),...d}));return r.displayName=Bp(n),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],wo=ce("arrow-left",Lv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Hv=ce("arrow-right",Bv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Hp=ce("book-open",qv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Hn=ce("calendar",Gv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],xa=ce("camera",Pv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Vv=ce("check",Yv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qp=ce("chevron-right",Xv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Gi=ce("circle-check-big",Fv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ur=ce("clock",Qv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Lr=ce("database",Kv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],Gp=ce("droplets",Zv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Iv=ce("ellipsis-vertical",Jv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ef=ce("eye-off",Wv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],mn=ce("eye",eS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tf=ce("file-text",tS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ko=ce("globe",nS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],iS=ce("grid-3x3",aS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],lS=ce("heart",sS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],oS=ce("image",rS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],nf=ce("info",cS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Ya=ce("leaf",uS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],fS=ce("list",dS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],mS=ce("log-in",hS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],af=ce("lock",gS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],yS=ce("log-out",pS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],bf=ce("mail",xS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],vS=ce("map-pin",bS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],jS=ce("menu",SS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],$d=ce("microscope",wS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Br=ce("pen-line",ES);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Zs=ce("play",$S);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Pp=ce("plus",zS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],sf=ce("rotate-ccw",AS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Yp=ce("save",RS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],zd=ce("scan",TS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Eo=ce("search",CS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],DS=ce("settings",OS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Pi=ce("shield",kS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],NS=ce("sun",MS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Hr=ce("target",_S);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Ad=ce("trash-2",US);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],BS=ce("trending-up",LS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],qi=ce("triangle-alert",HS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],vf=ce("upload",qS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Mo=ce("user",GS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],No=ce("users",PS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sn=ce("x",YS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Rd=ce("zap",VS),ki={colors:{primary:{light:"#10b981",main:"#059669",dark:"#047857",darker:"#065f46"},secondary:{light:"#34d399",main:"#10b981",dark:"#059669"},gradient:{primary:"linear-gradient(135deg, #10b981 0%,rgb(33, 175, 135) 100%)",secondary:"linear-gradient(135deg, #34d399 0%, #10b981 100%)",accent:"linear-gradient(135deg, #6ee7b7 0%, #34d399 100%)"},background:{main:"#f0fdf4",secondary:"#ecfdf5",paper:"#ffffff"},text:{primary:"#047857",secondary:"#065f46",light:"#6b7280"},status:{healthy:"#10b981",diseased:"#ef4444",unknown:"#f59e0b"}},breakpoints:{mobile:"480px",tablet:"768px",desktop:"1024px",large:"1200px"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}},Js=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${n=>n.theme.spacing.md};
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    padding: 0 ${n=>n.theme.spacing.sm};
  }
`,XS=w.div`
  background: ${n=>n.theme.colors.gradient.primary};
  min-height: 100vh;
`,qn=w.div`
  background: ${n=>n.theme.colors.background.paper};
  border-radius: ${n=>n.theme.borderRadius.lg};
  box-shadow: ${n=>n.theme.shadows.lg};
  padding: ${n=>n.theme.spacing.xl};
  margin: ${n=>n.theme.spacing.md} 0;
  
  @media (max-width: ${n=>n.theme.breakpoints.mobile}) {
    padding: ${n=>n.theme.spacing.lg};
    margin: ${n=>n.theme.spacing.sm} 0;
  }
`,Ee=w.button`
  background: ${n=>n.variant==="secondary"?n.theme.colors.gradient.secondary:n.theme.colors.gradient.primary};
  color: white;
  border: none;
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.size==="sm"?`${n.theme.spacing.sm} ${n.theme.spacing.md}`:`${n.theme.spacing.md} ${n.theme.spacing.xl}`};
  font-size: ${n=>n.size==="sm"?"0.875rem":"1rem"};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${n=>n.theme.spacing.sm};
  min-height: ${n=>n.size==="sm"?"36px":"48px"};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${n=>n.theme.shadows.lg};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: ${n=>n.theme.breakpoints.mobile}) {
    padding: ${n=>n.theme.spacing.sm} ${n=>n.theme.spacing.lg};
    font-size: 0.9rem;
  }
`,FS=w(Ee)`
  padding: ${n=>n.theme.spacing.md};
  border-radius: ${n=>n.theme.borderRadius.full};
  min-height: auto;
  width: 48px;
  height: 48px;
`;w.input`
  width: 100%;
  padding: ${n=>n.theme.spacing.md};
  border: 2px solid ${n=>n.theme.colors.primary.light};
  border-radius: ${n=>n.theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
`;const lf=w.h1`
  background: ${n=>n.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: ${n=>n.theme.spacing.sm};
  
  @media (max-width: ${n=>n.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,QS=w.h2`
  color: ${n=>n.theme.colors.text.secondary};
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${n=>n.theme.spacing.xl};
  
  @media (max-width: ${n=>n.theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`,nt=w.p`
  color: ${n=>n.theme.colors.text.primary};
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: ${n=>n.theme.spacing.lg};
  
  @media (max-width: ${n=>n.theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`,Gn=w.div`
  display: flex;
  gap: ${n=>n.theme.spacing.md};
  align-items: ${n=>n.align||"center"};
  justify-content: ${n=>n.justify||"center"};
  flex-wrap: ${n=>n.wrap||"nowrap"};
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    flex-direction: ${n=>n.mobileDirection||"column"};
    gap: ${n=>n.theme.spacing.sm};
  }
`,Vp=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${n=>n.theme.spacing.lg};
  
  @media (max-width: ${n=>n.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${n=>n.theme.spacing.md};
  }
`,KS=w.div`
  border: 4px solid rgba(16, 185, 129, 0.1);
  border-left: 4px solid ${n=>n.theme.colors.primary.main};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;w.div`
  background: ${n=>{switch(n.status){case"healthy":return n.theme.colors.status.healthy;case"diseased":return n.theme.colors.status.diseased;default:return n.theme.colors.status.unknown}}};
  color: white;
  padding: ${n=>n.theme.spacing.sm} ${n=>n.theme.spacing.md};
  border-radius: ${n=>n.theme.borderRadius.full};
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.xs};
`;const ZS=w.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
  padding: ${n=>n.theme.spacing.md} 0;
  position: sticky;
  top: 0;
  z-index: 100;
`,JS=w.div`
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.sm};
  font-size: 1.5rem;
  font-weight: 800;
  color: ${n=>n.theme.colors.primary.main};
`,IS=w.div`
  width: 32px;
  height: 32px;
  background: ${n=>n.theme.colors.gradient.primary};
  border-radius: ${n=>n.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`,WS=w.nav`
  display: none;
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    display: ${n=>n.isOpen?"flex":"none"};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: ${n=>n.theme.spacing.lg};
    box-shadow: ${n=>n.theme.shadows.lg};
    justify-content: flex-start;
    align-items: center;
    gap: ${n=>n.theme.spacing.md};
  }
`,e2=w.div`
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.lg};
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    display: none;
  }
`,Xp=w.button`
  background: ${n=>n.theme.colors.gradient.primary};
  color: white;
  border: none;
  border-radius: ${n=>n.theme.borderRadius.md};
  padding: ${n=>n.theme.spacing.sm} ${n=>n.theme.spacing.md};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
    background: ${n=>n.theme.colors.primary.dark};
  }
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: center;
    margin: ${n=>n.theme.spacing.sm} 0;
  }
`,qr=w.button`
  background: none;
  border: none;
  color: ${n=>n.theme.colors.text.primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: ${n=>n.theme.spacing.sm} ${n=>n.theme.spacing.md};
  border-radius: ${n=>n.theme.borderRadius.md};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(16, 185, 129, 0.1);
    color: ${n=>n.theme.colors.primary.main};
  }
`,Fp=w.select`
  background: ${n=>n.theme.colors.gradient.primary};
  color: white;
  border: none;
  border-radius: ${n=>n.theme.borderRadius.md};
  padding: ${n=>n.theme.spacing.sm} ${n=>n.theme.spacing.md};
  font-size: 0.9rem;
  cursor: pointer;
  
  option {
    background: white;
    color: ${n=>n.theme.colors.text.primary};
  }
`,t2=w(FS)`
  display: none;
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    display: flex;
  }
`,n2=w.div`
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.sm};
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: center;
    margin-top: ${n=>n.theme.spacing.md};
  }
`,a2=w.button`
  background: ${n=>n.theme.colors.gradient.primary};
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${n=>n.theme.shadows.md};
  }
`,i2=w.div`
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.sm};
  color: ${n=>n.theme.colors.text.primary};
  font-size: 0.9rem;
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    display: none;
  }
`,s2=({onAboutClick:n,onFeaturesClick:s,user:r,onLoginClick:o,onProfileClick:d,onPlantsClick:f})=>{const{t:h,i18n:g}=rn(),[x,p]=W.useState(!1),b=z=>{g.changeLanguage(z)},v=()=>{p(!x)};return c.jsx(ZS,{children:c.jsxs(Gn,{justify:"space-between",style:{maxWidth:"1200px",margin:"0 auto",padding:"0 1rem"},children:[c.jsxs(JS,{children:[c.jsx(IS,{children:"🌿"}),h("title")]}),c.jsxs(WS,{isOpen:x,children:[c.jsx(qr,{onClick:n,children:h("about")}),c.jsx(qr,{onClick:s,children:h("features")}),r&&c.jsxs(Xp,{onClick:f,children:[c.jsx(Ya,{size:16}),"My Plants"]}),c.jsxs(Gn,{align:"center",gap:"0.5rem",children:[c.jsx(ko,{size:20,color:"#059669"}),c.jsxs(Fp,{value:g.language,onChange:z=>b(z.target.value),children:[c.jsx("option",{value:"en",children:"English"}),c.jsxs("optgroup",{label:"🇮🇳 Indian Languages",children:[c.jsx("option",{value:"hi",children:"हिंदी (Hindi)"}),c.jsx("option",{value:"ta",children:"தமிழ் (Tamil)"}),c.jsx("option",{value:"te",children:"తెలుగు (Telugu)"}),c.jsx("option",{value:"bn",children:"বাংলা (Bengali)"}),c.jsx("option",{value:"pa",children:"ਪੰਜਾਬੀ (Punjabi)"}),c.jsx("option",{value:"gu",children:"ગુજરાતી (Gujarati)"}),c.jsx("option",{value:"mr",children:"मराठी (Marathi)"})]}),c.jsxs("optgroup",{label:"🌍 International",children:[c.jsx("option",{value:"es",children:"Español"}),c.jsx("option",{value:"fr",children:"Français"})]})]})]})]}),c.jsxs(e2,{children:[c.jsx(qr,{onClick:n,children:h("about")}),c.jsx(qr,{onClick:s,children:h("features")}),r&&c.jsxs(Xp,{onClick:f,children:[c.jsx(Ya,{size:16}),"My Plants"]}),c.jsxs(Gn,{align:"center",gap:"0.5rem",children:[c.jsx(ko,{size:20,color:"#059669"}),c.jsxs(Fp,{value:g.language,onChange:z=>b(z.target.value),children:[c.jsx("option",{value:"en",children:"English"}),c.jsxs("optgroup",{label:"🇮🇳 Indian Languages",children:[c.jsx("option",{value:"hi",children:"हिंदी (Hindi)"}),c.jsx("option",{value:"ta",children:"தமிழ் (Tamil)"}),c.jsx("option",{value:"te",children:"తెలుగు (Telugu)"}),c.jsx("option",{value:"bn",children:"বাংলা (Bengali)"}),c.jsx("option",{value:"pa",children:"ਪੰਜਾਬੀ (Punjabi)"}),c.jsx("option",{value:"gu",children:"ગુજરાતી (Gujarati)"}),c.jsx("option",{value:"mr",children:"मराठी (Marathi)"})]}),c.jsxs("optgroup",{label:"🌍 International",children:[c.jsx("option",{value:"es",children:"Español"}),c.jsx("option",{value:"fr",children:"Français"})]})]})]}),c.jsx(n2,{children:r?c.jsxs(c.Fragment,{children:[c.jsxs(i2,{children:["Welcome, ",r.name||"Plant Lover"]}),c.jsx(a2,{onClick:d,title:`${r.name||"Profile"}`,children:c.jsx(Mo,{size:20})})]}):c.jsxs(Ee,{variant:"secondary",size:"sm",onClick:o,children:[c.jsx(mS,{size:16}),"Sign In"]})})]}),c.jsx(t2,{onClick:v,children:x?c.jsx(sn,{size:24}):c.jsx(jS,{size:24})})]})})};var $o={exports:{}},l2=$o.exports,Qp;function r2(){return Qp||(Qp=1,function(n,s){(function(o,d){n.exports=d(qo())})(l2,function(r){return function(o){var d={};function f(h){if(d[h])return d[h].exports;var g=d[h]={i:h,l:!1,exports:{}};return o[h].call(g.exports,g,g.exports,f),g.l=!0,g.exports}return f.m=o,f.c=d,f.d=function(h,g,x){f.o(h,g)||Object.defineProperty(h,g,{enumerable:!0,get:x})},f.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},f.t=function(h,g){if(g&1&&(h=f(h)),g&8||g&4&&typeof h=="object"&&h&&h.__esModule)return h;var x=Object.create(null);if(f.r(x),Object.defineProperty(x,"default",{enumerable:!0,value:h}),g&2&&typeof h!="string")for(var p in h)f.d(x,p,(function(b){return h[b]}).bind(null,p));return x},f.n=function(h){var g=h&&h.__esModule?function(){return h.default}:function(){return h};return f.d(g,"a",g),g},f.o=function(h,g){return Object.prototype.hasOwnProperty.call(h,g)},f.p="",f(f.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(o,d,f){f.r(d);var h=f("react"),g=function(){var z=function(C,j){return z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,T){A.__proto__=T}||function(A,T){for(var G in T)T.hasOwnProperty(G)&&(A[G]=T[G])},z(C,j)};return function(C,j){z(C,j);function A(){this.constructor=C}C.prototype=j===null?Object.create(j):(A.prototype=j.prototype,new A)}}(),x=function(){return x=Object.assign||function(z){for(var C,j=1,A=arguments.length;j<A;j++){C=arguments[j];for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(z[T]=C[T])}return z},x.apply(this,arguments)},p=function(z,C){var j={};for(var A in z)Object.prototype.hasOwnProperty.call(z,A)&&C.indexOf(A)<0&&(j[A]=z[A]);if(z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,A=Object.getOwnPropertySymbols(z);T<A.length;T++)C.indexOf(A[T])<0&&Object.prototype.propertyIsEnumerable.call(z,A[T])&&(j[A[T]]=z[A[T]]);return j};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(C){var j=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return j?new Promise(function(A,T){j.call(navigator,C,A,T)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function b(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var v=function(z){g(C,z);function C(j){var A=z.call(this,j)||this;return A.canvas=null,A.ctx=null,A.requestUserMediaId=0,A.unmounted=!1,A.state={hasUserMedia:!1},A}return C.prototype.componentDidMount=function(){var j=this,A=j.state,T=j.props;if(this.unmounted=!1,!b()){T.onUserMediaError("getUserMedia not supported");return}A.hasUserMedia||this.requestUserMedia(),T.children&&typeof T.children!="function"&&console.warn("children must be a function")},C.prototype.componentDidUpdate=function(j){var A=this.props;if(!b()){A.onUserMediaError("getUserMedia not supported");return}var T=JSON.stringify(j.audioConstraints)!==JSON.stringify(A.audioConstraints),G=JSON.stringify(j.videoConstraints)!==JSON.stringify(A.videoConstraints),X=j.minScreenshotWidth!==A.minScreenshotWidth,V=j.minScreenshotHeight!==A.minScreenshotHeight;(G||X||V)&&(this.canvas=null,this.ctx=null),(T||G)&&(this.stopAndCleanup(),this.requestUserMedia())},C.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},C.stopMediaStream=function(j){j&&(j.getVideoTracks&&j.getAudioTracks?(j.getVideoTracks().map(function(A){j.removeTrack(A),A.stop()}),j.getAudioTracks().map(function(A){j.removeTrack(A),A.stop()})):j.stop())},C.prototype.stopAndCleanup=function(){var j=this.state;j.hasUserMedia&&(C.stopMediaStream(this.stream),j.src&&window.URL.revokeObjectURL(j.src))},C.prototype.getScreenshot=function(j){var A=this,T=A.state,G=A.props;if(!T.hasUserMedia)return null;var X=this.getCanvas(j);return X&&X.toDataURL(G.screenshotFormat,G.screenshotQuality)},C.prototype.getCanvas=function(j){var A=this,T=A.state,G=A.props;if(!this.video||!T.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var X=this.video.videoWidth,V=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var L=X/V;X=G.minScreenshotWidth||this.video.clientWidth,V=X/L,G.minScreenshotHeight&&V<G.minScreenshotHeight&&(V=G.minScreenshotHeight,X=V*L)}this.canvas=document.createElement("canvas"),this.canvas.width=j?.width||X,this.canvas.height=j?.height||V,this.ctx=this.canvas.getContext("2d")}var P=this,Q=P.ctx,B=P.canvas;return Q&&B&&(B.width=j?.width||B.width,B.height=j?.height||B.height,G.mirrored&&(Q.translate(B.width,0),Q.scale(-1,1)),Q.imageSmoothingEnabled=G.imageSmoothing,Q.drawImage(this.video,0,0,j?.width||B.width,j?.height||B.height),G.mirrored&&(Q.scale(-1,1),Q.translate(-B.width,0))),B},C.prototype.requestUserMedia=function(){var j=this,A=this.props,T=function(V,L){var P={video:typeof L<"u"?L:!0};A.audio&&(P.audio=typeof V<"u"?V:!0),j.requestUserMediaId++;var Q=j.requestUserMediaId;navigator.mediaDevices.getUserMedia(P).then(function(B){j.unmounted||Q!==j.requestUserMediaId?C.stopMediaStream(B):j.handleUserMedia(null,B)}).catch(function(B){j.handleUserMedia(B)})};if("mediaDevices"in navigator)T(A.audioConstraints,A.videoConstraints);else{var G=function(V){return{optional:[{sourceId:V}]}},X=function(V){var L=V.deviceId;return typeof L=="string"?L:Array.isArray(L)&&L.length>0?L[0]:typeof L=="object"&&L.ideal?L.ideal:null};MediaStreamTrack.getSources(function(V){var L=null,P=null;V.forEach(function(re){re.kind==="audio"?L=re.id:re.kind==="video"&&(P=re.id)});var Q=X(A.audioConstraints);Q&&(L=Q);var B=X(A.videoConstraints);B&&(P=B),T(G(L),G(P))})}},C.prototype.handleUserMedia=function(j,A){var T=this.props;if(j||!A){this.setState({hasUserMedia:!1}),T.onUserMediaError(j);return}this.stream=A;try{this.video&&(this.video.srcObject=A),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(A)})}T.onUserMedia(A)},C.prototype.render=function(){var j=this,A=this,T=A.state,G=A.props,X=G.audio;G.forceScreenshotSourceSize;var V=G.disablePictureInPicture;G.onUserMedia,G.onUserMediaError,G.screenshotFormat,G.screenshotQuality,G.minScreenshotWidth,G.minScreenshotHeight,G.audioConstraints,G.videoConstraints,G.imageSmoothing;var L=G.mirrored,P=G.style,Q=P===void 0?{}:P,B=G.children,re=p(G,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),Se=L?x(x({},Q),{transform:(Q.transform||"")+" scaleX(-1)"}):Q,xe={getScreenshot:this.getScreenshot.bind(this)};return h.createElement(h.Fragment,null,h.createElement("video",x({autoPlay:!0,disablePictureInPicture:V,src:T.src,muted:!X,playsInline:!0,ref:function(Ye){j.video=Ye},style:Se},re)),B&&B(xe))},C.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},C}(h.Component);d.default=v},react:function(o,d){o.exports=r}}).default})}($o)),$o.exports}var o2=r2();const c2=B0(o2),u2=w.div`
  position: relative;
  border-radius: ${n=>n.theme.borderRadius.lg};
  overflow: hidden;
  background: #000;
  margin: ${n=>n.theme.spacing.lg} 0;
`,d2=w(c2)`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
`,f2=w.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed rgba(255, 255, 255, 0.8);
  width: 80%;
  height: 80%;
  border-radius: ${n=>n.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
`,h2=w.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #dc2626;
  padding: ${n=>n.theme.spacing.md};
  border-radius: ${n=>n.theme.borderRadius.md};
  text-align: center;
  margin: ${n=>n.theme.spacing.md} 0;
`,m2=w.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: ${n=>n.theme.borderRadius.lg};
`,g2=({onImageCapture:n,disabled:s})=>{const{t:r}=rn(),o=W.useRef(null),[d,f]=W.useState(null),[h,g]=W.useState(null),[x,p]=W.useState(!1),b={width:1280,height:720,facingMode:"environment"},v=W.useCallback(()=>{p(!0),g(null)},[]),z=W.useCallback(T=>{console.error("Camera error:",T),p(!1),T.name==="NotAllowedError"?g(r("cameraPermissionDenied")):g(r("cameraNotSupported"))},[r]),C=W.useCallback(()=>{const T=o.current.getScreenshot();f(T)},[o]),j=W.useCallback(()=>{f(null)},[]),A=W.useCallback(()=>{d&&n&&fetch(d).then(T=>T.blob()).then(T=>{const G=new File([T],"camera-capture.jpg",{type:"image/jpeg"});n(G)})},[d,n]);return h?c.jsx(qn,{children:c.jsxs(h2,{children:[c.jsx(xa,{size:48,style:{margin:"0 auto 1rem",display:"block"}}),h]})}):c.jsxs(qn,{children:[c.jsx(nt,{children:r("scanWithCamera")}),c.jsx(u2,{children:d?c.jsx(m2,{src:d,alt:"Captured plant"}):c.jsxs(c.Fragment,{children:[c.jsx(d2,{ref:o,audio:!1,screenshotFormat:"image/jpeg",videoConstraints:b,onUserMedia:v,onUserMediaError:z}),!x&&c.jsxs(f2,{children:[c.jsx(xa,{size:64,style:{marginBottom:"1rem"}}),c.jsx(nt,{style:{color:"white",marginBottom:0},children:"Waiting for camera permission..."})]})]})}),c.jsx(Gn,{children:d?c.jsxs(c.Fragment,{children:[c.jsxs(Ee,{onClick:j,variant:"secondary",disabled:s,children:[c.jsx(sf,{size:20}),r("retakePhoto")]}),c.jsxs(Ee,{onClick:A,disabled:s,children:[c.jsx(Vv,{size:20}),r("analyzeImage")]})]}):c.jsxs(Ee,{onClick:C,disabled:!x||s,children:[c.jsx(xa,{size:20}),r("takePhoto")]})})]})},p2=w.div`
  border: 2px dashed ${n=>n.isDragOver?n.theme.colors.primary.main:n.theme.colors.primary.light};
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.theme.spacing.xxl};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${n=>n.isDragOver?"rgba(16, 185, 129, 0.05)":"transparent"};
  margin: ${n=>n.theme.spacing.lg} 0;
  
  &:hover {
    border-color: ${n=>n.theme.colors.primary.main};
    background: rgba(16, 185, 129, 0.05);
  }
`,y2=w.input`
  display: none;
`,x2=w.div`
  position: relative;
  margin: ${n=>n.theme.spacing.lg} 0;
`,b2=w.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: ${n=>n.theme.borderRadius.lg};
`,v2=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.sm};
  right: ${n=>n.theme.spacing.sm};
  background: rgba(239, 68, 68, 0.9);
  color: white;
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #dc2626;
  }
`,S2=w.div`
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid ${n=>n.theme.colors.primary.light};
  border-radius: ${n=>n.theme.borderRadius.md};
  padding: ${n=>n.theme.spacing.md};
  margin: ${n=>n.theme.spacing.md} 0;
  text-align: left;
`,j2=w.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #dc2626;
  padding: ${n=>n.theme.spacing.md};
  border-radius: ${n=>n.theme.borderRadius.md};
  text-align: center;
  margin: ${n=>n.theme.spacing.md} 0;
`,w2=({onImageUpload:n,disabled:s})=>{const{t:r}=rn(),[o,d]=W.useState(null),[f,h]=W.useState(null),[g,x]=W.useState(!1),[p,b]=W.useState(null),v=W.useRef(null),z=["image/jpeg","image/jpg","image/png","image/webp"],C=10*1024*1024,j=B=>z.includes(B.type)?B.size>C?(b("File too large. Please upload images smaller than 10MB."),!1):(b(null),!0):(b("Invalid file type. Please upload JPG, PNG, or WEBP images."),!1),A=B=>{if(j(B)){d(B);const re=URL.createObjectURL(B);h(re)}},T=B=>{const re=B.target.files[0];re&&A(re)},G=B=>{B.preventDefault(),x(!1);const re=B.dataTransfer.files;re.length>0&&A(re[0])},X=B=>{B.preventDefault(),x(!0)},V=()=>{x(!1)},L=()=>{v.current?.click()},P=()=>{d(null),h(null),b(null),v.current&&(v.current.value="")},Q=()=>{o&&n&&n(o)};return c.jsxs(qn,{children:[c.jsx(nt,{children:r("uploadImage")}),o?c.jsxs(x2,{children:[c.jsx(b2,{src:f,alt:"Selected plant"}),c.jsx(v2,{onClick:P,children:c.jsx(sn,{size:16})})]}):c.jsxs(p2,{isDragOver:g,onDrop:G,onDragOver:X,onDragLeave:V,onClick:L,children:[c.jsx(vf,{size:64,color:"#059669",style:{marginBottom:"1rem"}}),c.jsx(nt,{style:{marginBottom:"0.5rem",fontSize:"1.1rem",fontWeight:600},children:r("selectFile")}),c.jsx(nt,{style:{marginBottom:0,color:"#6b7280"},children:r("supportedFormats")}),c.jsx(nt,{style:{marginBottom:0,color:"#6b7280",fontSize:"0.9rem"},children:"Drag and drop or click to browse"})]}),o&&c.jsxs(S2,{children:[c.jsx("strong",{children:"File:"})," ",o.name,c.jsx("br",{}),c.jsx("strong",{children:"Size:"})," ",(o.size/1024/1024).toFixed(2)," MB",c.jsx("br",{}),c.jsx("strong",{children:"Type:"})," ",o.type]}),p&&c.jsx(j2,{children:p}),c.jsx(y2,{ref:v,type:"file",accept:z.join(","),onChange:T}),o&&c.jsx(Gn,{children:c.jsxs(Ee,{onClick:Q,disabled:s,children:[c.jsx(oS,{size:20}),r("analyzeImage")]})})]})},E2=w.div`
  background: ${n=>n.theme.colors.background.paper};
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.theme.spacing.xl};
  margin: ${n=>n.theme.spacing.lg} 0;
  box-shadow: ${n=>n.theme.shadows.lg};
`,$2=w.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: ${n=>n.theme.borderRadius.lg};
  margin-bottom: ${n=>n.theme.spacing.lg};
`,z2=w.div`
  text-align: center;
  margin-bottom: ${n=>n.theme.spacing.xl};
`,A2=w.h2`
  background: ${n=>n.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: ${n=>n.theme.spacing.md};
`,R2=w.div`
  width: 100%;
  height: 12px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: ${n=>n.theme.borderRadius.full};
  overflow: hidden;
  margin: ${n=>n.theme.spacing.sm} 0;
`,T2=w.div`
  height: 100%;
  background: ${n=>n.theme.colors.gradient.primary};
  width: ${n=>n.confidence}%;
  transition: width 0.5s ease;
`,C2=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${n=>n.theme.spacing.lg};
  margin: ${n=>n.theme.spacing.xl} 0;
`,Td=w.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.theme.spacing.lg};
  text-align: center;
`,Cd=w.div`
  width: 48px;
  height: 48px;
  border-radius: ${n=>n.theme.borderRadius.full};
  background: ${n=>n.theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${n=>n.theme.spacing.md};
  color: white;
`,Gr=w.h3`
  color: ${n=>n.theme.colors.text.primary};
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: ${n=>n.theme.spacing.sm};
`,Is=w.p`
  color: ${n=>n.theme.colors.text.secondary};
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0;
`,O2=w.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  fontSize: 2rem;
`,D2=w.li`
  display: flex;
  align-items: flex-start;
  gap: ${n=>n.theme.spacing.sm};
  padding: ${n=>n.theme.spacing.sm} 0;
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`,k2=w.div`
  width: 20px;
  height: 20px;
  border-radius: ${n=>n.theme.borderRadius.full};
  background: ${n=>n.theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
`,Kp=w.div`
  display: flex;
  gap: ${n=>n.theme.spacing.md};
  justify-content: center;
  margin: ${n=>n.theme.spacing.xl} 0 ${n=>n.theme.spacing.lg} 0;
  flex-wrap: wrap;
  
  @media (max-width: ${n=>n.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`,Pr=w(Ee)`
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.sm};
  min-width: 140px;
  justify-content: center;
  font-weight: 600;
  
  &.recheck {
    background: ${n=>n.theme.colors.gradient.secondary};
    border: none;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${n=>n.theme.shadows.lg};
    }
  }
  
  &.pdf-generate {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    border: none;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
    }
  }
`,M2=({result:n,imageUrl:s,onRecheck:r})=>{const{t:o,i18n:d}=rn();if(!n)return null;const{status:f,confidence:h,diseaseName:g,healthScore:x,recommendations:p=[]}=n,b=Array.isArray(p)?p:[],v=()=>{const C=`
PLANT BUDDY - ANALYSIS REPORT
${new Date().toLocaleDateString()}

PLANT HEALTH STATUS: ${f}
CONFIDENCE LEVEL: ${h}%
${g?`DISEASE DETECTED: ${g}`:""}
HEALTH SCORE: ${x}%

RECOMMENDATIONS:
${b.length>0?b.map((G,X)=>`${X+1}. ${G}`).join(`
`):"No specific recommendations available at this time."}

ANALYSIS DETAILS:
- Overall Condition: ${f}
- Confidence Level: ${h>=90?"Very High":h>=70?"High":h>=50?"Moderate":"Low"}
- Action Required: ${f==="healthy"?"Continue monitoring":f==="diseased"?"Immediate attention needed":"Monitor closely"}
- Analysis Timestamp: ${n.timestamp||new Date().toISOString()}

Generated by Plant Buddy AI
Visit: https://plantbuddy.app
    `.trim(),j=new Blob([C],{type:"text/plain;charset=utf-8"}),A=URL.createObjectURL(j),T=document.createElement("a");T.href=A,T.download=`plant-analysis-report-${new Date().toISOString().split("T")[0]}.txt`,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(A)},z=()=>{r&&r()};return c.jsxs(E2,{children:[c.jsxs(z2,{children:[c.jsx(A2,{children:o("results")}),s&&c.jsx($2,{src:s,alt:"Analyzed plant"})]}),c.jsx("center",{style:{marginBottom:"1rem",fontSize:"1.5rem",color:"#333"},children:f}),c.jsxs("div",{children:[c.jsxs(Gn,{justify:"space-between",style:{marginBottom:"0.5rem"},children:[c.jsxs("span",{style:{fontWeight:600},children:[o("confidence"),":"]}),c.jsxs("span",{children:[h,"%"]})]}),c.jsx(R2,{children:c.jsx(T2,{confidence:h})})]}),g&&c.jsxs("div",{style:{textAlign:"center",margin:"1rem 0",fontSize:"2rem",backgroundColor:"greenascent"},children:[c.jsx("strong",{children:"Disease Detected: "}),g]}),c.jsxs(Kp,{children:[c.jsxs(Pr,{className:"recheck",onClick:z,title:"Take another photo for re-analysis",children:[c.jsx(sf,{size:18}),"Recheck"]}),c.jsxs(Pr,{className:"pdf-generate",onClick:v,title:"Download analysis report",children:[c.jsx(tf,{size:18}),"Generate Report"]})]}),c.jsxs(C2,{children:[c.jsxs(Td,{children:[c.jsx(Cd,{children:c.jsx(Ya,{size:24})}),c.jsx(Gr,{children:"Plant Health"}),c.jsxs(Is,{children:["Overall health score: ",x||Math.floor(h),"%",c.jsx("br",{}),f==="healthy"?"Your plant appears to be in good condition.":f==="diseased"?"Signs of disease detected. Take action.":"Unable to determine health status clearly."]})]}),c.jsxs(Td,{children:[c.jsx(Cd,{children:c.jsx(Pi,{size:24})}),c.jsx(Gr,{children:"Analysis Confidence"}),c.jsxs(Is,{children:[h>=90?"Very High":h>=70?"High":h>=50?"Moderate":"Low"," confidence level",c.jsx("br",{}),h>=70?"Results are reliable.":"Consider taking another photo for better accuracy."]})]}),c.jsxs(Td,{children:[c.jsx(Cd,{children:c.jsx(BS,{size:24})}),c.jsx(Gr,{children:"Next Steps"}),c.jsx(Is,{children:f==="healthy"?"Continue monitoring and maintain current care.":f==="diseased"?"Immediate attention required to prevent spread.":"Monitor closely and consider expert consultation."})]})]}),c.jsxs(qn,{style:{marginTop:"2rem"},children:[c.jsx(Gr,{style:{textAlign:"center",marginBottom:"1rem"},children:o("recommendations")}),b.length>0?c.jsx(O2,{children:b.map((C,j)=>c.jsxs(D2,{children:[c.jsx(k2,{children:j+1}),c.jsx(Is,{style:{margin:0,textAlign:"left"},children:C})]},j))}):c.jsx(Is,{style:{textAlign:"center",fontStyle:"italic",color:"#666"},children:"No specific recommendations available. Please consult with a plant expert if you have concerns."})]}),c.jsxs(Kp,{children:[c.jsxs(Pr,{className:"recheck",onClick:()=>window.location.reload(),children:[c.jsx(sf,{size:16}),o("recheck")]}),c.jsxs(Pr,{className:"pdf-generate",onClick:()=>alert("PDF Report Generated!"),children:[c.jsx(tf,{size:16}),o("generate_pdf")]})]})]})},N2=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${n=>n.theme.spacing.xxl};
  text-align: center;
`,_2=w.p`
  color: ${n=>n.theme.colors.text.primary};
  font-size: 1.1rem;
  font-weight: 600;
  margin: ${n=>n.theme.spacing.lg} 0 ${n=>n.theme.spacing.sm};
`,U2=w.p`
  color: ${n=>n.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0;
  max-width: 300px;
`,L2=w.div`
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.md};
  margin: ${n=>n.theme.spacing.xl} 0;
`,B2=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: ${n=>n.active?1:.5};
  transition: opacity 0.3s ease;
`,H2=w.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${n=>n.active?n.theme.colors.gradient.primary:"rgba(16, 185, 129, 0.2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${n=>n.active?"white":n.theme.colors.primary.main};
  font-weight: 600;
  margin-bottom: ${n=>n.theme.spacing.sm};
`,q2=w.span`
  font-size: 0.8rem;
  color: ${n=>n.theme.colors.text.secondary};
`,G2=({step:n=1})=>{const{t:s}=rn(),r=[{id:1,text:"Uploading Image",detail:"Sending your plant image to our AI server..."},{id:2,text:"AI Analysis",detail:"Analyzing plant health and detecting diseases..."},{id:3,text:"Generating Results",detail:"Preparing recommendations and report..."}],o=r.find(d=>d.id===n)||r[0];return c.jsxs(N2,{children:[c.jsx(KS,{}),c.jsx(_2,{children:s("analyzing")}),c.jsx(U2,{children:o.detail}),c.jsx(L2,{children:r.map(d=>c.jsxs(B2,{active:n>=d.id,children:[c.jsx(H2,{active:n>=d.id,children:n>d.id?"✓":d.id}),c.jsx(q2,{children:d.text})]},d.id))})]})},P2=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${n=>n.theme.spacing.md};
  overflow-y: auto;
`,Y2=w.div`
  background: ${n=>n.theme.colors.background.paper};
  border-radius: ${n=>n.theme.borderRadius.lg};
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,V2=w.div`
  background: #059669;
  background: ${n=>n.theme.colors.gradient.primary};
  color: white;
  padding: ${n=>n.theme.spacing.xl};
  border-radius: ${n=>n.theme.borderRadius.lg} ${n=>n.theme.borderRadius.lg} 0 0;
  position: relative;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,X2=w.h2`
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
  margin-bottom: 0.5rem;
  text-align: left;
`,F2=w.p`
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  font-size: 1.1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
`,Q2=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.lg};
  right: ${n=>n.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,K2=w.div`
  padding: ${n=>n.theme.spacing.xl};
`,Mi=w.div`
  margin-bottom: ${n=>n.theme.spacing.xl};
`,Yr=w.h3`
  color: #2d3748;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: ${n=>n.theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.sm};
`,Zp=w.p`
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: ${n=>n.theme.spacing.lg};
`,Jp=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${n=>n.theme.spacing.lg};
  margin: ${n=>n.theme.spacing.xl} 0;
`,Vr=w.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.theme.spacing.lg};
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${n=>n.theme.shadows.lg};
    border-color: ${n=>n.theme.colors.primary.main};
  }
`,Xr=w.div`
  width: 60px;
  height: 60px;
  border-radius: ${n=>n.theme.borderRadius.full};
  background: ${n=>n.theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${n=>n.theme.spacing.md};
  color: white;
`,Fr=w.h4`
  color: #2d3748;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: ${n=>n.theme.spacing.sm};
`,Qr=w.p`
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`,Z2=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${n=>n.theme.spacing.md};
  margin: ${n=>n.theme.spacing.lg} 0;
`,J2=w.div`
  background: #f7fafc;
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.theme.spacing.md};
  text-align: center;
  transition: all 0.3s ease;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:hover {
    border-color: ${n=>n.theme.colors.primary.main};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
  }
  
  img {
    max-width: 100%;
    max-height: 80px;
    object-fit: contain;
    margin-bottom: ${n=>n.theme.spacing.sm};
  }
`,I2=w.div`
  width: 100%;
  height: 120px;
  border-radius: ${n=>n.theme.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${n=>n.theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,W2=w.div`
  width: 100%;
  height: 120px;
  background: ${n=>n.theme.colors.gradient.accent};
  border-radius: ${n=>n.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${n=>n.theme.colors.primary.dark};
  font-size: 2rem;
  margin-bottom: ${n=>n.theme.spacing.sm};
`,ej=w.h5`
  color: #2d3748;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
`,tj=w.p`
  color: #4a5568;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
`,nj=w.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,aj=w.li`
  display: flex;
  align-items: flex-start;
  gap: ${n=>n.theme.spacing.sm};
  padding: ${n=>n.theme.spacing.sm} 0;
  color: #4a5568;
  line-height: 1.6;
`,ij=w.div`
  width: 20px;
  height: 20px;
  border-radius: ${n=>n.theme.borderRadius.full};
  background: ${n=>n.theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  margin-top: 2px;
`,sj=({isOpen:n,onClose:s})=>{const{t:r}=rn();if(!n)return null;const o=[{icon:c.jsx(mn,{size:24}),title:r("smartDiseaseDetection"),description:r("smartDiseaseDetectionDesc")},{icon:c.jsx(Ya,{size:24}),title:r("comprehensivePlantDatabase"),description:r("comprehensivePlantDatabaseDesc")},{icon:c.jsx(Pi,{size:24}),title:r("preventionTreatment"),description:r("preventionTreatmentDesc")},{icon:c.jsx(No,{size:24}),title:r("forEveryone"),description:r("forEveryoneDesc")}],d=[{name:"Leaf Spot",emoji:"🍃",image:"/images/leaf-spot.svg"},{name:"Black Rot",emoji:"🍇",image:"/images/black-rot.svg"},{name:"Rust Disease",emoji:"🌱",image:"/images/rust-disease.svg"},{name:"Powdery Mildew",emoji:"🌿"},{name:"Blight",emoji:"🍅"},{name:"Mosaic Virus",emoji:"🥒"}],f=["Identify diseases affecting leaves and fruits of everyday plants","Understand the full life cycle of each disease for effective timing","Get clear, actionable guidance for treatment and prevention","Access organic and eco-friendly treatment recommendations","Learn to spot early warning signs before diseases spread","Receive expert advice tailored to your specific plant type"];return c.jsx(P2,{onClick:s,children:c.jsxs(Y2,{onClick:h=>h.stopPropagation(),children:[c.jsxs(V2,{children:[c.jsx(Q2,{onClick:s,children:c.jsx(sn,{size:20})}),c.jsx(X2,{children:"🌿 Plant Buddy"}),c.jsx(F2,{children:r("smartCompanion")})]}),c.jsxs(K2,{children:[c.jsx(Mi,{children:c.jsx(Zp,{style:{fontSize:"1.1rem",fontWeight:500},children:"Plant Buddy is your smart companion for healthy gardens, orchards, and indoor plants. By combining state‑of‑the‑art image recognition with a comprehensive plant‑disease knowledge base, Plant Buddy empowers hobbyists, small‑scale farmers, and gardeners to maintain thriving, disease-free plants."})}),c.jsxs(Mi,{children:[c.jsxs(Yr,{children:[c.jsx(Pi,{size:24}),r("keyFeatures")]}),c.jsx(Jp,{children:o.map((h,g)=>c.jsxs(Vr,{children:[c.jsx(Xr,{children:h.icon}),c.jsx(Fr,{children:h.title}),c.jsx(Qr,{children:h.description})]},g))})]}),c.jsxs(Mi,{children:[c.jsxs(Yr,{children:[c.jsx(Ya,{size:24}),r("whatPlantBuddyHelps")]}),c.jsx(nj,{children:f.map((h,g)=>c.jsxs(aj,{children:[c.jsx(ij,{children:c.jsx(Gi,{size:12})}),h]},g))})]}),c.jsxs(Mi,{children:[c.jsxs(Yr,{children:[c.jsx(mn,{size:24}),r("commonDiseases")]}),c.jsx(Zp,{children:"Whether you're noticing yellow spots on your rose leaves, black rot on your grapes, or suspect rust on your beans, Plant Buddy gives you clear, actionable guidance."}),c.jsx(Z2,{children:d.map((h,g)=>c.jsxs(J2,{children:[h.image?c.jsx(I2,{children:c.jsx("img",{src:h.image,alt:h.name})}):c.jsx(W2,{children:h.emoji}),c.jsx(ej,{children:h.name}),c.jsx(tj,{children:h.image?r("imageAvailable"):r("imageNotAvailable")})]},g))})]}),c.jsxs(Mi,{children:[c.jsxs(Yr,{children:[c.jsx(No,{size:24}),r("perfectFor")]}),c.jsxs(Jp,{children:[c.jsxs(Vr,{children:[c.jsx(Xr,{children:"🏡"}),c.jsx(Fr,{children:r("homeGardeners")}),c.jsx(Qr,{children:r("homeGardenersDesc")})]}),c.jsxs(Vr,{children:[c.jsx(Xr,{children:"🚜"}),c.jsx(Fr,{children:r("smallScaleFarmers")}),c.jsx(Qr,{children:r("smallScaleFarmersDesc")})]}),c.jsxs(Vr,{children:[c.jsx(Xr,{children:"🌳"}),c.jsx(Fr,{children:r("orchardOwners")}),c.jsx(Qr,{children:r("orchardOwnersDesc")})]})]})]}),c.jsx(Mi,{style:{marginBottom:0},children:c.jsx(Gn,{children:c.jsxs(Ee,{onClick:s,children:[c.jsx(Hv,{size:20}),r("getStartedNow")]})})})]})]})})},lj=`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;if(!document.querySelector("#plant-buddy-animations")){const n=document.createElement("style");n.id="plant-buddy-animations",n.textContent=lj,document.head.appendChild(n)}const rj=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${n=>n.theme.spacing.md};
  overflow-y: auto;
`,oj=w.div`
  background: ${n=>n.theme.colors.background.paper};
  border-radius: ${n=>n.theme.borderRadius.lg};
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,cj=w.div`
  background: #059669;
  background: ${n=>n.theme.colors.gradient.primary};
  color: white;
  padding: ${n=>n.theme.spacing.xl};
  border-radius: ${n=>n.theme.borderRadius.lg} ${n=>n.theme.borderRadius.lg} 0 0;
  position: relative;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,uj=w.h2`
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
  margin-bottom: 0.5rem;
  text-align: left;
`,dj=w.p`
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  font-size: 1.1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
`,fj=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.lg};
  left: ${n=>n.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`,hj=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.lg};
  right: ${n=>n.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,mj=w.div`
  padding: ${n=>n.theme.spacing.xl};
`,gj=w.div`
  margin-bottom: ${n=>n.theme.spacing.xxl};
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
  padding-bottom: ${n=>n.theme.spacing.xl};
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,Ip=w.h2`
  color: #2d3748;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: ${n=>n.theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.sm};
`,Wp=w.p`
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: ${n=>n.theme.spacing.xl};
`,Ws=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${n=>n.theme.spacing.lg};
  margin: ${n=>n.theme.spacing.lg} 0;
`,Et=w.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.theme.spacing.lg};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${n=>n.theme.shadows.lg};
    border-color: ${n=>n.theme.colors.primary.main};
  }
`,vt=w.div`
  width: 50px;
  height: 50px;
  border-radius: ${n=>n.theme.borderRadius.lg};
  background: ${n=>n.theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${n=>n.theme.spacing.md};
  color: white;
`,$t=w.h3`
  color: #2d3748;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${n=>n.theme.spacing.sm};
`,zt=w.p`
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`,pj=w.div`
  display: flex;
  flex-direction: column;
  gap: ${n=>n.theme.spacing.md};
  margin: ${n=>n.theme.spacing.lg} 0;
`,Kr=w.div`
  display: flex;
  align-items: flex-start;
  gap: ${n=>n.theme.spacing.md};
  padding: ${n=>n.theme.spacing.md};
  background: rgba(16, 185, 129, 0.05);
  border-radius: ${n=>n.theme.borderRadius.md};
  border-left: 4px solid ${n=>n.theme.colors.primary.main};
`,Zr=w.div`
  width: 30px;
  height: 30px;
  border-radius: ${n=>n.theme.borderRadius.full};
  background: ${n=>n.theme.colors.primary.main};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
`,Jr=w.div`
  flex: 1;
`,Ir=w.h4`
  color: #2d3748;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: ${n=>n.theme.spacing.xs};
`,Ni=w.p`
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`,Od=w.div`
  background: ${n=>n.theme.colors.gradient.accent};
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.theme.spacing.lg};
  margin: ${n=>n.theme.spacing.lg} 0;
  border: 2px solid ${n=>n.theme.colors.primary.light};
`,Dd=w.h3`
  color: #2d3748;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: ${n=>n.theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.sm};
`,Wr=w.ul`
  list-style: none;
  padding: 0;
  margin: ${n=>n.theme.spacing.md} 0;
`,mt=w.li`
  display: flex;
  align-items: flex-start;
  gap: ${n=>n.theme.spacing.sm};
  padding: ${n=>n.theme.spacing.xs} 0;
  color: #4a5568;
  line-height: 1.6;
`,gt=w.div`
  width: 18px;
  height: 18px;
  border-radius: ${n=>n.theme.borderRadius.full};
  background: ${n=>n.theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  margin-top: 2px;
`,yj=({isOpen:n,onClose:s})=>{const{t:r}=rn(),[o,d]=W.useState(null);if(!n)return null;const f=[{id:"instantDetection",icon:c.jsx(Rd,{size:24}),title:"Instant Disease Detection",description:"Get immediate, AI-powered disease diagnosis with confidence scores and reference comparisons.",shortDesc:"Upload a photo and get instant AI diagnosis"},{id:"diseaseProfiles",icon:c.jsx(Hp,{size:24}),title:"Comprehensive Disease Profiles",description:"Detailed information with symptom galleries, lifecycle diagrams, and environmental data.",shortDesc:"Explore detailed disease information and galleries"},{id:"interactiveVisualizations",icon:c.jsx(Zs,{size:24}),title:"Interactive Lifecycle Visualizations",description:"Animated timelines and interactive elements showing disease development and spread.",shortDesc:"Watch animated disease progression timelines"},{id:"treatmentPlans",icon:c.jsx(Pi,{size:24}),title:"Personalized Treatment Plans",description:"Customized organic and chemical treatment options with timing and safety guidelines.",shortDesc:"Get personalized treatment recommendations"},{id:"diseaseLibrary",icon:c.jsx(Eo,{size:24}),title:"Disease Library & Search",description:"Comprehensive searchable database organized by species, symptoms, and pathogens.",shortDesc:"Search extensive disease database"}],h=b=>({instantDetection:{icon:c.jsx(Rd,{size:32}),title:"Instant Disease Detection",subtitle:"AI-Powered Plant Health Analysis",sections:[{title:"Key Capabilities",icon:c.jsx(Hr,{size:20}),content:c.jsxs(Ws,{children:[c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(Gi,{size:20})}),c.jsx($t,{children:"95%+ Accuracy"}),c.jsx(zt,{children:"Professional-grade accuracy with confidence scoring for reliable results."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(Ur,{size:20})}),c.jsx($t,{children:"Real-time Results"}),c.jsx(zt,{children:"Get instant diagnosis within 2-3 seconds of image upload."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(xa,{size:20})}),c.jsx($t,{children:"Multiple Formats"}),c.jsx(zt,{children:"Support for JPG, PNG, WEBP with drag-and-drop functionality."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(ko,{size:20})}),c.jsx($t,{children:"Multi-language"}),c.jsx(zt,{children:"Results available in 12 languages including regional Indian languages."})]})]})}]},diseaseProfiles:{icon:c.jsx(Hp,{size:32}),title:"Comprehensive Disease Profiles",subtitle:"Complete Disease Information Database",sections:[{title:"Disease Information Coverage",icon:c.jsx(nf,{size:20}),content:c.jsxs(Wr,{children:[c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(mn,{size:12})}),"High-resolution symptom galleries showing disease progression from early to advanced stages"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx($d,{size:12})}),"Detailed lifecycle diagrams illustrating pathogen development and reproduction cycles"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Lr,{size:12})}),"Comprehensive host range information covering affected plant species and varieties"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Hn,{size:12})}),"Seasonal risk factors and climatic preferences for disease development"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(qi,{size:12})}),"Environmental conditions favoring disease outbreak and spread patterns"]})]})},{title:"Visual Learning Tools",icon:c.jsx(mn,{size:20}),content:c.jsxs(Ws,{children:[c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(xa,{size:20})}),c.jsx($t,{children:"Symptom Gallery"}),c.jsx(zt,{children:"Professional photos showing symptoms at different growth stages and severity levels."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(Zs,{size:20})}),c.jsx($t,{children:"Progression Videos"}),c.jsx(zt,{children:"Time-lapse videos showing how diseases develop and spread over time."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx($d,{size:20})}),c.jsx($t,{children:"Microscopic Views"}),c.jsx(zt,{children:"Detailed microscopic images of pathogens, spores, and infection structures."})]})]})}]},interactiveVisualizations:{icon:c.jsx(Zs,{size:32}),title:"Interactive Lifecycle Visualizations",subtitle:"Animated Disease Development Timelines",sections:[{title:"Animation Features",icon:c.jsx(Zs,{size:20}),content:c.jsxs(pj,{children:[c.jsxs(Kr,{children:[c.jsx(Zr,{children:c.jsx(Ya,{size:16})}),c.jsxs(Jr,{children:[c.jsx(Ir,{children:"Spore Formation & Dispersal"}),c.jsx(Ni,{children:"Watch how pathogens form spores and spread through wind, water, or insect vectors in detailed animations."})]})]}),c.jsxs(Kr,{children:[c.jsx(Zr,{children:c.jsx(Hr,{size:16})}),c.jsxs(Jr,{children:[c.jsx(Ir,{children:"Infection Process"}),c.jsx(Ni,{children:"Interactive sequences showing how pathogens penetrate plant tissues and establish infections."})]})]}),c.jsxs(Kr,{children:[c.jsx(Zr,{children:c.jsx(Ur,{size:16})}),c.jsxs(Jr,{children:[c.jsx(Ir,{children:"Disease Development"}),c.jsx(Ni,{children:"Visualize symptom appearance, pathogen multiplication, and damage progression over time."})]})]}),c.jsxs(Kr,{children:[c.jsx(Zr,{children:c.jsx(qp,{size:16})}),c.jsxs(Jr,{children:[c.jsx(Ir,{children:"Reproduction Cycle"}),c.jsx(Ni,{children:"Interactive diagrams showing sporulation, secondary infections, and disease spread patterns."})]})]})]})},{title:"Interactive Elements",icon:c.jsx(Hr,{size:20}),content:c.jsxs(Od,{children:[c.jsxs(Dd,{children:[c.jsx(Zs,{size:20}),"Click & Learn Features"]}),c.jsxs(Wr,{children:[c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(nf,{size:12})}),"Interactive tooltips explaining key disease milestones and biological processes"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Ur,{size:12})}),"Timeline controls to pause, rewind, and explore specific infection stages"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(qi,{size:12})}),"Critical intervention points highlighted for optimal treatment timing"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Hn,{size:12})}),"Environmental factor overlays showing temperature, humidity, and seasonal influences"]})]})]})}]},treatmentPlans:{icon:c.jsx(Pi,{size:32}),title:"Personalized Treatment Plans",subtitle:"Customized Disease Management Solutions",sections:[{title:"Treatment Options",icon:c.jsx(Pi,{size:20}),content:c.jsxs(Ws,{children:[c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(Ya,{size:20})}),c.jsx($t,{children:"Organic Methods"}),c.jsx(zt,{children:"Natural treatments using botanical extracts, beneficial microorganisms, and eco-friendly solutions."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(Rd,{size:20})}),c.jsx($t,{children:"Chemical Controls"}),c.jsx(zt,{children:"Targeted fungicides and bactericides with precise dosage recommendations and safety protocols."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(No,{size:20})}),c.jsx($t,{children:"Cultural Practices"}),c.jsx(zt,{children:"Preventive measures including crop rotation, sanitation, and resistant variety selection."})]})]})},{title:"Smart Scheduling",icon:c.jsx(Hn,{size:20}),content:c.jsxs("div",{children:[c.jsxs(Wr,{children:[c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Hn,{size:12})}),"Automated treatment reminders based on disease development stages and weather conditions"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Ur,{size:12})}),"Optimal application timing recommendations considering pathogen lifecycle and plant growth"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(qi,{size:12})}),"Safety interval tracking for harvest timing and worker protection protocols"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Hr,{size:12})}),"Resistance management strategies with rotation schedules for chemical treatments"]})]}),c.jsxs(Od,{children:[c.jsxs(Dd,{children:[c.jsx(Hn,{size:20}),"Never Miss a Treatment"]}),c.jsx(Ni,{children:"Set up automated reminders for fungicide applications, cultural measures, and monitoring schedules. Get push notifications based on weather forecasts and disease pressure models."})]})]})}]},diseaseLibrary:{icon:c.jsx(Eo,{size:32}),title:"Disease Library & Search",subtitle:"Comprehensive Plant Disease Database",sections:[{title:"Search & Browse Capabilities",icon:c.jsx(Eo,{size:20}),content:c.jsxs(Ws,{children:[c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(Lr,{size:20})}),c.jsx($t,{children:"Plant Species Filter"}),c.jsx(zt,{children:"Browse diseases by specific crops: tomato, potato, citrus, rice, wheat, and 100+ other species."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(mn,{size:20})}),c.jsx($t,{children:"Symptom Search"}),c.jsx(zt,{children:"Find diseases by visual symptoms: spots, wilting, yellowing, rotting, and other characteristics."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx($d,{size:20})}),c.jsx($t,{children:"Pathogen Categories"}),c.jsx(zt,{children:"Filter by pathogen type: fungi, bacteria, viruses, nematodes, and physiological disorders."})]}),c.jsxs(Et,{children:[c.jsx(vt,{children:c.jsx(ko,{size:20})}),c.jsx($t,{children:"Regional Data"}),c.jsx(zt,{children:"Location-specific disease prevalence and seasonal occurrence patterns for your area."})]})]})},{title:"Advanced Features",icon:c.jsx(Lr,{size:20}),content:c.jsxs("div",{children:[c.jsxs(Wr,{children:[c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(qi,{size:12})}),"Severity level indicators from minor aesthetic damage to crop-threatening diseases"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Hn,{size:12})}),"Seasonal occurrence patterns and risk prediction models for proactive management"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(No,{size:12})}),"Economic impact assessments showing potential yield losses and control costs"]}),c.jsxs(mt,{children:[c.jsx(gt,{children:c.jsx(Gi,{size:12})}),"Quarantine status and regulatory information for exotic and emerging diseases"]})]}),c.jsxs(Od,{children:[c.jsxs(Dd,{children:[c.jsx(Lr,{size:20}),"Comprehensive Coverage"]}),c.jsx(Ni,{children:"Access detailed profiles for 500+ plant diseases affecting major crops worldwide. Database includes both common diseases and emerging threats with regular updates from plant pathology experts."})]})]})}]}})[b],g=b=>{d(b)},x=()=>{d(null)},p=()=>{if(!o)return null;const b=h(o);return c.jsx("div",{style:{animation:"slideIn 0.3s ease-out"},children:c.jsxs(gj,{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"2rem"},children:[c.jsx(vt,{style:{width:"80px",height:"80px",fontSize:"2rem"},children:b.icon}),c.jsxs("div",{children:[c.jsx(Ip,{style:{margin:0,fontSize:"2.2rem"},children:b.title}),c.jsx(Wp,{style:{margin:"0.5rem 0 0 0",fontSize:"1.1rem",opacity:.8},children:b.subtitle})]})]}),b.sections.map((v,z)=>c.jsxs("div",{style:{marginBottom:"2.5rem"},children:[c.jsxs(Ip,{style:{fontSize:"1.4rem",marginBottom:"1.5rem"},children:[v.icon,v.title]}),v.content]},z)),c.jsxs(Gn,{style:{marginTop:"2rem"},children:[c.jsx(Ee,{onClick:x,children:"← Back to All Features"}),c.jsx(Ee,{onClick:s,children:"Start Using Plant Buddy"})]})]})})};return c.jsx(rj,{onClick:s,children:c.jsxs(oj,{onClick:b=>b.stopPropagation(),children:[c.jsxs(cj,{children:[c.jsx(hj,{onClick:s,children:c.jsx(sn,{size:20})}),o&&c.jsx(fj,{onClick:x,children:c.jsx(wo,{size:20})}),c.jsxs(uj,{children:["🚀 ",o?h(o).title:"Plant Buddy Features"]}),c.jsx(dj,{children:o?h(o).subtitle:"Comprehensive Plant Disease Detection & Management Tools"})]}),c.jsx(mj,{children:o?p():c.jsxs(c.Fragment,{children:[c.jsx(Wp,{style:{textAlign:"center",fontSize:"1.1rem",marginBottom:"2rem"},children:"Click on any feature below to explore detailed capabilities and see how Plant Buddy revolutionizes plant disease management."}),c.jsx(Ws,{style:{gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"2rem"},children:f.map(b=>c.jsxs(Et,{onClick:()=>g(b.id),style:{cursor:"pointer",transition:"all 0.3s ease",border:"2px solid rgba(16, 185, 129, 0.2)"},onMouseEnter:v=>{v.target.style.borderColor="rgba(16, 185, 129, 0.5)",v.target.style.transform="translateY(-8px)"},onMouseLeave:v=>{v.target.style.borderColor="rgba(16, 185, 129, 0.2)",v.target.style.transform="translateY(-4px)"},children:[c.jsx(vt,{style:{marginBottom:"1rem"},children:b.icon}),c.jsx($t,{style:{fontSize:"1.3rem",marginBottom:"0.8rem"},children:b.title}),c.jsx(zt,{style:{marginBottom:"1rem",lineHeight:"1.6"},children:b.description}),c.jsxs("div",{style:{display:"flex",alignItems:"center",color:"rgba(16, 185, 129, 1)",fontWeight:"600",fontSize:"0.9rem"},children:["Click to explore ",c.jsx(qp,{size:16,style:{marginLeft:"0.5rem"}})]})]},b.id))}),c.jsx(Gn,{style:{marginTop:"2.5rem"},children:c.jsx(Ee,{onClick:s,children:"Start Using Plant Buddy"})})]})})]})})},xj=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${n=>n.theme.spacing.md};
  overflow-y: auto;
`,bj=w.div`
  background: ${n=>n.theme.colors.background.paper};
  border-radius: ${n=>n.theme.borderRadius.lg};
  max-width: 400px;
  width: 100%;
  position: relative;
  box-shadow: ${n=>n.theme.shadows.xl};
`,vj=w.div`
  background: #059669;
  background: ${n=>n.theme.colors.gradient.primary};
  color: white;
  padding: ${n=>n.theme.spacing.xl};
  border-radius: ${n=>n.theme.borderRadius.lg} ${n=>n.theme.borderRadius.lg} 0 0;
  text-align: center;
  position: relative;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Sj=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.lg};
  right: ${n=>n.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,jj=w.h2`
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
`,wj=w.p`
  color: rgba(255, 255, 255, 0.95);
  margin: 0.5rem 0 0 0;
  font-size: 0.95rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
`,Ej=w.div`
  padding: ${n=>n.theme.spacing.xl};
`,e0=w.div`
  margin-bottom: ${n=>n.theme.spacing.lg};
`,t0=w.label`
  display: block;
  color: #2d3748;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: ${n=>n.theme.spacing.sm};
`,n0=w.div`
  position: relative;
`,a0=w.input`
  width: 100%;
  padding: ${n=>n.theme.spacing.md} ${n=>n.theme.spacing.md} ${n=>n.theme.spacing.md} 3rem;
  border: 2px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`,i0=w.div`
  position: absolute;
  left: ${n=>n.theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
`,$j=w.button`
  position: absolute;
  right: ${n=>n.theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #718096;
  cursor: pointer;
  
  &:hover {
    color: ${n=>n.theme.colors.primary.main};
  }
`,zj=w(Ee)`
  width: 100%;
  background: ${n=>n.theme.colors.gradient.primary};
  border: none;
  padding: ${n=>n.theme.spacing.md};
  font-size: 1rem;
  font-weight: 600;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${n=>n.theme.shadows.lg};
  }
`,Aj=w.p`
  text-align: center;
  color: #4a5568;
  margin-top: ${n=>n.theme.spacing.lg};
  
  a {
    color: ${n=>n.theme.colors.primary.main};
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,Rj=({isOpen:n,onClose:s,onSwitchToSignUp:r,onSuccess:o})=>{const{t:d}=rn(),[f,h]=W.useState(!1),[g,x]=W.useState({email:"",password:""});if(!n)return null;const p=v=>{const{name:z,value:C}=v.target;x(j=>({...j,[z]:C}))},b=v=>{if(v.preventDefault(),g.email&&g.password){const z={id:1,name:g.email.split("@")[0],email:g.email,joinDate:new Date().toISOString(),analysisCount:Math.floor(Math.random()*50)+1};o(z),s()}};return c.jsx(xj,{onClick:s,children:c.jsxs(bj,{onClick:v=>v.stopPropagation(),children:[c.jsxs(vj,{children:[c.jsx(Sj,{onClick:s,children:c.jsx(sn,{size:20})}),c.jsx(jj,{children:"Welcome Back"}),c.jsx(wj,{children:"Sign in to your Plant Buddy account"})]}),c.jsxs(Ej,{children:[c.jsxs("form",{onSubmit:b,children:[c.jsxs(e0,{children:[c.jsx(t0,{htmlFor:"email",children:"Email Address"}),c.jsxs(n0,{children:[c.jsx(i0,{children:c.jsx(bf,{size:18})}),c.jsx(a0,{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:g.email,onChange:p,required:!0})]})]}),c.jsxs(e0,{children:[c.jsx(t0,{htmlFor:"password",children:"Password"}),c.jsxs(n0,{children:[c.jsx(i0,{children:c.jsx(af,{size:18})}),c.jsx(a0,{type:f?"text":"password",id:"password",name:"password",placeholder:"Enter your password",value:g.password,onChange:p,required:!0}),c.jsx($j,{type:"button",onClick:()=>h(!f),children:f?c.jsx(ef,{size:18}):c.jsx(mn,{size:18})})]})]}),c.jsx(zj,{type:"submit",children:"Sign In"})]}),c.jsxs(Aj,{children:["Don't have an account?"," ",c.jsx("a",{onClick:r,children:"Sign up here"})]})]})]})})},Tj=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${n=>n.theme.spacing.md};
  overflow-y: auto;
`,Cj=w.div`
  background: ${n=>n.theme.colors.background.paper};
  border-radius: ${n=>n.theme.borderRadius.lg};
  max-width: 400px;
  width: 100%;
  position: relative;
  box-shadow: ${n=>n.theme.shadows.xl};
`,Oj=w.div`
  background: #10b981;
  background: ${n=>n.theme.colors.gradient.secondary};
  color: white;
  padding: ${n=>n.theme.spacing.xl};
  border-radius: ${n=>n.theme.borderRadius.lg} ${n=>n.theme.borderRadius.lg} 0 0;
  text-align: center;
  position: relative;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Dj=w.h2`
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
`,kj=w.p`
  color: rgba(255, 255, 255, 0.95);
  margin: 0.5rem 0 0 0;
  font-size: 0.95rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
`,Mj=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.lg};
  right: ${n=>n.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,Nj=w.div`
  padding: ${n=>n.theme.spacing.xl};
`,eo=w.div`
  margin-bottom: ${n=>n.theme.spacing.lg};
`,to=w.label`
  display: block;
  color: #2d3748;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: ${n=>n.theme.spacing.sm};
`,no=w.div`
  position: relative;
`,ao=w.input`
  width: 100%;
  padding: ${n=>n.theme.spacing.md} ${n=>n.theme.spacing.md} ${n=>n.theme.spacing.md} 3rem;
  border: 2px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`,io=w.div`
  position: absolute;
  left: ${n=>n.theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
`,s0=w.button`
  position: absolute;
  right: ${n=>n.theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #718096;
  cursor: pointer;
  
  &:hover {
    color: ${n=>n.theme.colors.primary.main};
  }
`,_j=w(Ee)`
  width: 100%;
  background: ${n=>n.theme.colors.gradient.secondary};
  border: none;
  padding: ${n=>n.theme.spacing.md};
  font-size: 1rem;
  font-weight: 600;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${n=>n.theme.shadows.lg};
  }
`,Uj=w.p`
  text-align: center;
  color: #4a5568;
  margin-top: ${n=>n.theme.spacing.lg};
  
  a {
    color: ${n=>n.theme.colors.primary.main};
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,Lj=({isOpen:n,onClose:s,onSwitchToLogin:r,onSuccess:o})=>{const{t:d}=rn(),[f,h]=W.useState(!1),[g,x]=W.useState(!1),[p,b]=W.useState({name:"",email:"",password:"",confirmPassword:""});if(!n)return null;const v=C=>{const{name:j,value:A}=C.target;b(T=>({...T,[j]:A}))},z=C=>{if(C.preventDefault(),p.password!==p.confirmPassword){alert("Passwords do not match!");return}if(p.name&&p.email&&p.password){const j={id:Date.now(),name:p.name,email:p.email,joinDate:new Date().toISOString(),analysisCount:0};o(j),s()}};return c.jsx(Tj,{onClick:s,children:c.jsxs(Cj,{onClick:C=>C.stopPropagation(),children:[c.jsxs(Oj,{children:[c.jsx(Mj,{onClick:s,children:c.jsx(sn,{size:20})}),c.jsx(Dj,{children:"Join Plant Buddy"}),c.jsx(kj,{children:"Create your account to get started"})]}),c.jsxs(Nj,{children:[c.jsxs("form",{onSubmit:z,children:[c.jsxs(eo,{children:[c.jsx(to,{htmlFor:"name",children:"Full Name"}),c.jsxs(no,{children:[c.jsx(io,{children:c.jsx(Mo,{size:18})}),c.jsx(ao,{type:"text",id:"name",name:"name",placeholder:"Enter your full name",value:p.name,onChange:v,required:!0})]})]}),c.jsxs(eo,{children:[c.jsx(to,{htmlFor:"email",children:"Email Address"}),c.jsxs(no,{children:[c.jsx(io,{children:c.jsx(bf,{size:18})}),c.jsx(ao,{type:"email",id:"email",name:"email",placeholder:"Enter your email",autoComplete:"off",value:p.email,onChange:v,required:!0})]})]}),c.jsxs(eo,{children:[c.jsx(to,{htmlFor:"password",children:"Password"}),c.jsxs(no,{children:[c.jsx(io,{children:c.jsx(af,{size:18})}),c.jsx(ao,{type:f?"text":"password",id:"password",name:"password",placeholder:"Create a password",value:p.password,onChange:v,required:!0,minLength:6}),c.jsx(s0,{type:"button",onClick:()=>h(!f),children:f?c.jsx(ef,{size:18}):c.jsx(mn,{size:18})})]})]}),c.jsxs(eo,{children:[c.jsx(to,{htmlFor:"confirmPassword",children:"Confirm Password"}),c.jsxs(no,{children:[c.jsx(io,{children:c.jsx(af,{size:18})}),c.jsx(ao,{type:g?"text":"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm your password",value:p.confirmPassword,onChange:v,required:!0,minLength:6}),c.jsx(s0,{type:"button",onClick:()=>x(!g),children:g?c.jsx(ef,{size:18}):c.jsx(mn,{size:18})})]})]}),c.jsx(_j,{type:"submit",children:"Create Account"})]}),c.jsxs(Uj,{children:["Already have an account?"," ",c.jsx("a",{onClick:r,children:"Sign in here"})]})]})]})})},Bj=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${n=>n.theme.spacing.md};
  overflow-y: auto;
`,Hj=w.div`
  background: ${n=>n.theme.colors.background.paper};
  border-radius: ${n=>n.theme.borderRadius.lg};
  max-width: 450px;
  width: 100%;
  position: relative;
  box-shadow: ${n=>n.theme.shadows.xl};
`,qj=w.div`
  background: ${n=>n.theme.colors.gradient.primary};
  color: white;
  padding: ${n=>n.theme.spacing.xl};
  border-radius: ${n=>n.theme.borderRadius.lg} ${n=>n.theme.borderRadius.lg} 0 0;
  text-align: center;
  position: relative;
`,Gj=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.lg};
  right: ${n=>n.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`,Pj=w.div`
  padding: ${n=>n.theme.spacing.xl};
`,Yj=w.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${n=>n.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${n=>n.theme.spacing.lg};
  font-size: 2rem;
  color: white;
`,Vj=w.div`
  margin-bottom: ${n=>n.theme.spacing.xl};
`,kd=w.div`
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.md};
  padding: ${n=>n.theme.spacing.md} 0;
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  svg {
    color: ${n=>n.theme.colors.primary.main};
    flex-shrink: 0;
  }
`,Md=w.span`
  font-size: 0.9rem;
  color: ${n=>n.theme.colors.text.secondary};
  margin-bottom: 0.25rem;
  display: block;
`,Nd=w.span`
  font-size: 1rem;
  color: ${n=>n.theme.colors.text.primary};
  font-weight: 500;
`,Xj=w.div`
  display: flex;
  flex-direction: column;
  gap: ${n=>n.theme.spacing.md};
  margin-top: ${n=>n.theme.spacing.xl};
`,Fj=({isOpen:n,onClose:s,user:r,onLogout:o})=>{const{t:d}=rn();if(!n)return null;const f=g=>{g.target===g.currentTarget&&s()},h=()=>{o(),s()};return c.jsx(Bj,{onClick:f,children:c.jsxs(Hj,{children:[c.jsxs(qj,{children:[c.jsx(Gj,{onClick:s,children:c.jsx(sn,{size:20})}),c.jsx(Yj,{children:c.jsx(Mo,{size:32})}),c.jsx(lf,{style:{color:"white",margin:0,fontSize:"1.5rem"},children:r?.name||"Plant Lover"}),c.jsxs(nt,{style:{color:"rgba(255, 255, 255, 0.8)",margin:"0.5rem 0 0"},children:["Member since ",new Date().toLocaleDateString()]})]}),c.jsxs(Pj,{children:[c.jsxs(Vj,{children:[c.jsxs(kd,{children:[c.jsx(Mo,{size:20}),c.jsxs("div",{children:[c.jsx(Md,{children:"Full Name"}),c.jsx(Nd,{children:r?.name||"Plant Lover"})]})]}),c.jsxs(kd,{children:[c.jsx(bf,{size:20}),c.jsxs("div",{children:[c.jsx(Md,{children:"Email Address"}),c.jsx(Nd,{children:r?.email||"user@plantbuddy.com"})]})]}),c.jsxs(kd,{children:[c.jsx(Hn,{size:20}),c.jsxs("div",{children:[c.jsx(Md,{children:"Member Since"}),c.jsx(Nd,{children:new Date().toLocaleDateString()})]})]})]}),c.jsxs(Xj,{children:[c.jsxs(Ee,{variant:"secondary",style:{justifyContent:"flex-start",gap:"0.75rem"},children:[c.jsx(DS,{size:18}),"Account Settings"]}),c.jsxs(Ee,{onClick:h,style:{background:"linear-gradient(135deg, #ef4444, #dc2626)",justifyContent:"flex-start",gap:"0.75rem"},children:[c.jsx(yS,{size:18}),"Sign Out"]})]})]})]})})},Qj=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${n=>n.theme.spacing.md};
  overflow-y: auto;
`,Kj=w.div`
  background: ${n=>n.theme.colors.background.paper};
  border-radius: ${n=>n.theme.borderRadius.lg};
  max-width: 1200px;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`,Zj=w.div`
  background: #059669;
  background: ${n=>n.theme.colors.gradient.primary};
  color: white;
  padding: ${n=>n.theme.spacing.xl};
  border-radius: ${n=>n.theme.borderRadius.lg} ${n=>n.theme.borderRadius.lg} 0 0;
  position: relative;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,el=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.lg};
  right: ${n=>n.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`,Jj=w.h2`
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
`,Ij=w.p`
  color: rgba(255, 255, 255, 0.95);
  margin: 0.5rem 0 0 0;
  font-size: 0.95rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
`,Wj=w.div`
  padding: ${n=>n.theme.spacing.xl};
`,ew=w.div`
  display: flex;
  gap: ${n=>n.theme.spacing.md};
  margin-bottom: ${n=>n.theme.spacing.xl};
  flex-wrap: wrap;
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,tw=w.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,nw=w.input`
  width: 100%;
  padding: ${n=>n.theme.spacing.md} ${n=>n.theme.spacing.md} ${n=>n.theme.spacing.md} 3rem;
  border: 2px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`,aw=w.div`
  position: absolute;
  left: ${n=>n.theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
`,iw=w.div`
  display: flex;
  background: rgba(16, 185, 129, 0.1);
  border-radius: ${n=>n.theme.borderRadius.md};
  overflow: hidden;
`,l0=w.button`
  background: ${n=>n.active?n.theme.colors.primary.main:"transparent"};
  color: ${n=>n.active?"white":n.theme.colors.primary.main};
  border: none;
  padding: ${n=>n.theme.spacing.sm} ${n=>n.theme.spacing.md};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${n=>n.active?n.theme.colors.primary.dark:"rgba(16, 185, 129, 0.2)"};
  }
`,sw=w.div`
  display: grid;
  grid-template-columns: ${n=>n.viewMode==="grid"?"repeat(auto-fill, minmax(320px, 1fr))":"1fr"};
  gap: ${n=>n.theme.spacing.lg};
  margin-bottom: ${n=>n.theme.spacing.xl};
  
  @media (max-width: ${n=>n.theme.breakpoints.tablet}) {
    grid-template-columns: ${n=>n.viewMode==="grid"?"repeat(auto-fill, minmax(280px, 1fr))":"1fr"};
    gap: ${n=>n.theme.spacing.md};
  }
`,lw=w.div`
  background: white;
  border: 2px solid rgba(16, 185, 129, 0.1);
  border-radius: ${n=>n.theme.borderRadius.lg};
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${n=>n.theme.colors.primary.main};
  }
`,rw=w.div`
  height: 220px;
  background: ${n=>n.theme.colors.gradient.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.9) 100%);
    z-index: 1;
  }
  
  span {
    position: relative;
    z-index: 2;
  }
`,ow=w.div`
  position: absolute;
  top: ${n=>n.theme.spacing.md};
  right: ${n=>n.theme.spacing.md};
  background: ${n=>n.status==="healthy"?"#10b981":n.status==="diseased"?"#ef4444":n.status==="warning"?"#f59e0b":"#6b7280"};
  color: white;
  padding: ${n=>n.theme.spacing.xs} ${n=>n.theme.spacing.sm};
  border-radius: ${n=>n.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,cw=w.button`
  position: absolute;
  top: ${n=>n.theme.spacing.md};
  left: ${n=>n.theme.spacing.md};
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: ${n=>n.theme.borderRadius.full};
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
  color: ${n=>n.isFavorite?"#ef4444":"#6b7280"};

  &:hover {
    background: white;
    transform: scale(1.1);
  }
`,uw=w.div`
  padding: ${n=>n.theme.spacing.lg};
`,dw=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${n=>n.theme.spacing.md};
`,fw=w.h3`
  color: ${n=>n.theme.colors.text.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
`,hw=w.p`
  color: ${n=>n.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0.25rem 0 0 0;
`,mw=w.button`
  background: none;
  border: none;
  color: ${n=>n.theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: ${n=>n.theme.borderRadius.sm};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(16, 185, 129, 0.1);
    color: ${n=>n.theme.colors.primary.main};
  }
`,gw=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${n=>n.theme.spacing.sm};
  margin-bottom: ${n=>n.theme.spacing.md};
  padding: ${n=>n.theme.spacing.md};
  background: rgba(16, 185, 129, 0.05);
  border-radius: ${n=>n.theme.borderRadius.md};
`,so=w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${n=>n.theme.colors.text.secondary};
  font-size: 0.85rem;
  
  svg {
    color: ${n=>n.theme.colors.primary.main};
  }
`,pw=w.div`
  display: flex;
  gap: ${n=>n.theme.spacing.sm};
  flex-wrap: wrap;
`,_d=w.button`
  background: ${n=>n.variant==="primary"?n.theme.colors.gradient.primary:"transparent"};
  color: ${n=>n.variant==="primary"?"white":n.theme.colors.primary.main};
  border: ${n=>n.variant==="primary"?"none":`1px solid ${n.theme.colors.primary.main}`};
  border-radius: ${n=>n.theme.borderRadius.md};
  padding: ${n=>n.theme.spacing.sm} ${n=>n.theme.spacing.md};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex: 1;
  justify-content: center;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${n=>n.theme.shadows.md};
    background: ${n=>n.variant==="primary"?n.theme.colors.primary.dark:"rgba(16, 185, 129, 0.1)"};
  }
`,yw=w.div`
  background: white;
  border: 2px solid rgba(16, 185, 129, 0.1);
  border-radius: ${n=>n.theme.borderRadius.lg};
  padding: ${n=>n.theme.spacing.lg};
  margin-bottom: ${n=>n.theme.spacing.xl};
`,xw=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${n=>n.theme.spacing.lg};
`,lo=w.div`
  text-align: center;
`,ro=w.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${n=>n.theme.colors.primary.main};
  margin-bottom: 0.25rem;
`,oo=w.div`
  color: ${n=>n.theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 500;
`,bw=w.div`
  display: flex;
  gap: ${n=>n.theme.spacing.sm};
  margin-bottom: ${n=>n.theme.spacing.lg};
  flex-wrap: wrap;
`,co=w.button`
  background: ${n=>n.active?n.theme.colors.primary.main:"transparent"};
  color: ${n=>n.active?"white":n.theme.colors.text.secondary};
  border: 1px solid ${n=>n.active?n.theme.colors.primary.main:"rgba(16, 185, 129, 0.3)"};
  border-radius: ${n=>n.theme.borderRadius.full};
  padding: ${n=>n.theme.spacing.sm} ${n=>n.theme.spacing.md};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${n=>n.active?n.theme.colors.primary.dark:"rgba(16, 185, 129, 0.1)"};
    color: ${n=>n.active?"white":n.theme.colors.primary.main};
  }
`,tl=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: ${n=>n.theme.spacing.md};
`,nl=w.div`
  background: white;
  border-radius: ${n=>n.theme.borderRadius.lg};
  max-width: ${n=>n.size==="large"?"800px":"500px"};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`,uo=w.div`
  background: ${n=>n.theme.colors.gradient.primary};
  color: white;
  padding: ${n=>n.theme.spacing.xl};
  border-radius: ${n=>n.theme.borderRadius.lg} ${n=>n.theme.borderRadius.lg} 0 0;
  position: relative;
`,fo=w.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`,ho=w.p`
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
  font-size: 0.95rem;
`,al=w.div`
  padding: ${n=>n.theme.spacing.xl};
`,Mt=w.div`
  margin-bottom: ${n=>n.theme.spacing.lg};
`,Nt=w.label`
  display: block;
  margin-bottom: ${n=>n.theme.spacing.sm};
  font-weight: 600;
  color: ${n=>n.theme.colors.text.primary};
`,_i=w.input`
  width: 100%;
  padding: ${n=>n.theme.spacing.md};
  border: 2px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
`,Ui=w.select`
  width: 100%;
  padding: ${n=>n.theme.spacing.md};
  border: 2px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
`,r0=w.textarea`
  width: 100%;
  min-height: 80px;
  padding: ${n=>n.theme.spacing.md};
  border: 2px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.md};
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${n=>n.theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
`,Li=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${n=>n.theme.spacing.md};
`,o0=w.div`
  margin-bottom: ${n=>n.theme.spacing.xl};
`,c0=w.h3`
  color: ${n=>n.theme.colors.text.primary};
  margin-bottom: ${n=>n.theme.spacing.md};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,vw=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${n=>n.theme.spacing.lg};
`,Ud=w.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.md};
  padding: ${n=>n.theme.spacing.lg};
`,ha=w.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${n=>n.theme.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,ma=w.span`
  font-weight: 600;
  color: ${n=>n.theme.colors.text.secondary};
`,ga=w.span`
  color: ${n=>n.theme.colors.text.primary};
  font-weight: 500;
`,il=w.div`
  display: flex;
  gap: ${n=>n.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${n=>n.theme.spacing.xl};
  
  @media (max-width: ${n=>n.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`,Sw=w.div`
  text-align: center;
  padding: ${n=>n.theme.spacing.xl};
`,jw=w.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  border: 2px dashed rgba(16, 185, 129, 0.3);
  border-radius: ${n=>n.theme.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${n=>n.theme.spacing.lg} auto;
  background: rgba(16, 185, 129, 0.05);
  position: relative;
  overflow: hidden;
`,ww=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${n=>n.theme.borderRadius.lg};
`,Ew=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n=>n.theme.spacing.md};
  color: ${n=>n.theme.colors.text.secondary};
`,$w=w.input`
  display: none;
`,zw=w.div`
  margin-top: ${n=>n.theme.spacing.xl};
  padding: ${n=>n.theme.spacing.lg};
  background: rgba(16, 185, 129, 0.05);
  border-radius: ${n=>n.theme.borderRadius.lg};
  border: 1px solid rgba(16, 185, 129, 0.2);
`,mo=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${n=>n.theme.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,sl=w.span`
  font-weight: 600;
  color: ${n=>n.theme.colors.text.primary};
`,go=w.span`
  color: ${n=>n.status==="healthy"?"#10b981":n.status==="diseased"?"#ef4444":n.status==="warning"?"#f59e0b":n.theme.colors.text.secondary};
  font-weight: 500;
`,Aw=w.div`
  width: 100%;
  height: 8px;
  background: rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.full};
  overflow: hidden;
  margin: ${n=>n.theme.spacing.md} 0;
`,Rw=w.div`
  height: 100%;
  background: ${n=>n.theme.colors.gradient.primary};
  width: ${n=>n.progress}%;
  transition: width 0.3s ease;
`,Tw=w.div`
  text-align: center;
  padding: ${n=>n.theme.spacing.xl};
`,Cw=w.div`
  width: 80px;
  height: 80px;
  border-radius: ${n=>n.theme.borderRadius.full};
  background: rgba(239, 68, 68, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${n=>n.theme.spacing.lg};
  color: #ef4444;
`,Ow=w.h3`
  color: ${n=>n.theme.colors.text.primary};
  margin-bottom: ${n=>n.theme.spacing.md};
`,Dw=w.p`
  color: ${n=>n.theme.colors.text.secondary};
  margin-bottom: ${n=>n.theme.spacing.xl};
  line-height: 1.6;
`,kw=w.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: ${n=>n.theme.borderRadius.md};
  box-shadow: ${n=>n.theme.shadows.lg};
  z-index: 10;
  min-width: 150px;
  overflow: hidden;
`,po=w.button`
  width: 100%;
  padding: ${n=>n.theme.spacing.md};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${n=>n.theme.spacing.sm};
  color: ${n=>n.danger?"#ef4444":n.theme.colors.text.primary};
  transition: background 0.3s ease;
  
  &:hover {
    background: ${n=>n.danger?"rgba(239, 68, 68, 0.1)":"rgba(16, 185, 129, 0.1)"};
  }
`,Mw=w.div`
  text-align: center;
  padding: ${n=>n.theme.spacing.xxl};
  color: ${n=>n.theme.colors.text.secondary};
`,Nw=w.div`
  font-size: 4rem;
  margin-bottom: ${n=>n.theme.spacing.lg};
  opacity: 0.5;
`,_w=({isOpen:n,onClose:s,user:r})=>{const{t:o}=rn(),[d,f]=W.useState(""),[h,g]=W.useState("grid"),[x,p]=W.useState("all"),[b,v]=W.useState(!1),[z,C]=W.useState(!1),[j,A]=W.useState(!1),[T,G]=W.useState(!1),[X,V]=W.useState(!1),[L,P]=W.useState(null),[Q,B]=W.useState(null),[re,Se]=W.useState(null),[xe,Ye]=W.useState(null),[Ne,Oe]=W.useState(!1),[Be,_e]=W.useState(0),[k,K]=W.useState({name:"",type:"",location:"",emoji:"🌱",wateringSchedule:"",notes:"",plantedDate:""}),[I,se]=W.useState([{id:1,name:"Heritage Tomato",type:"Vegetable",status:"healthy",lastScanned:"2 hours ago",location:"Greenhouse A",emoji:"🍅",isFavorite:!0,plantedDate:"2024-03-15",wateringSchedule:"Every 2 days",healthScore:95,notes:"Growing beautifully, ready for harvest soon"},{id:2,name:"English Rose",type:"Flower",status:"diseased",lastScanned:"1 day ago",location:"Garden B",emoji:"🌹",isFavorite:!1,plantedDate:"2024-02-10",wateringSchedule:"Daily",healthScore:45,notes:"Shows signs of black spot disease"},{id:3,name:"Sweet Basil",type:"Herb",status:"healthy",lastScanned:"3 hours ago",location:"Kitchen Garden",emoji:"🌿",isFavorite:!0,plantedDate:"2024-04-01",wateringSchedule:"Every 3 days",healthScore:88,notes:"Perfect for cooking, very aromatic"},{id:4,name:"Honeycrisp Apple",type:"Tree",status:"warning",lastScanned:"1 week ago",location:"Orchard",emoji:"🍎",isFavorite:!1,plantedDate:"2023-11-20",wateringSchedule:"Weekly",healthScore:72,notes:"Needs pruning and pest inspection"},{id:5,name:"Lavender Dreams",type:"Herb",status:"healthy",lastScanned:"5 hours ago",location:"Aromatherapy Garden",emoji:"💜",isFavorite:!0,plantedDate:"2024-01-20",wateringSchedule:"Weekly",healthScore:92,notes:"Blooming beautifully, very fragrant"},{id:6,name:"Japanese Maple",type:"Tree",status:"healthy",lastScanned:"2 days ago",location:"Front Yard",emoji:"�",isFavorite:!1,plantedDate:"2023-09-10",wateringSchedule:"Twice weekly",healthScore:85,notes:"Beautiful autumn colors developing"}]);if(!n)return null;const E=F=>{F.target===F.currentTarget&&s()},U=F=>{F.target.closest(".menu-button")||B(null)},Z=F=>{se(I.map(Re=>Re.id===F?{...Re,isFavorite:!Re.isFavorite}:Re))},J=()=>{K({name:"",type:"",location:"",emoji:"🌱",wateringSchedule:"",notes:"",plantedDate:""}),v(!0)},ee=F=>{P(F),K({name:F.name,type:F.type,location:F.location,emoji:F.emoji,wateringSchedule:F.wateringSchedule,notes:F.notes,plantedDate:F.plantedDate}),C(!0)},fe=F=>{P(F),A(!0)},ae=F=>{if(F.preventDefault(),b){const Re={id:Math.max(...I.map(pt=>pt.id))+1,...k,status:"healthy",lastScanned:"Just added",isFavorite:!1,healthScore:85};se([...I,Re]),v(!1)}else z&&(se(I.map(Re=>Re.id===L.id?{...Re,...k}:Re)),C(!1))},je=F=>{const{name:Re,value:pt}=F.target;K(ut=>({...ut,[Re]:pt}))},ue=()=>{v(!1),C(!1),A(!1),G(!1),V(!1),P(null),Se(null),Ye(null),Oe(!1),_e(0),B(null)},Fe=F=>{P(F),G(!0)},on=F=>{const Re=F.target.files[0];if(Re){const pt=new FileReader;pt.onload=ut=>{Se(ut.target.result),At()},pt.readAsDataURL(Re)}},At=async()=>{Oe(!0),_e(0),Ye(null);const F=setInterval(()=>{_e(ut=>ut>=100?(clearInterval(F),100):ut+10)},200);await new Promise(ut=>setTimeout(ut,2500));const Re=[{status:"healthy",confidence:92,disease:null,healthScore:95,recommendations:["Continue current care routine","Monitor for seasonal changes"]},{status:"diseased",confidence:87,disease:"Leaf Spot Disease",healthScore:45,recommendations:["Remove affected leaves","Apply fungicide treatment","Improve air circulation"]},{status:"warning",confidence:78,disease:"Early Blight",healthScore:65,recommendations:["Reduce watering frequency","Apply preventive treatment","Monitor closely"]}],pt=Re[Math.floor(Math.random()*Re.length)];Ye(pt),Oe(!1),L&&se(I.map(ut=>ut.id===L.id?{...ut,status:pt.status,healthScore:pt.healthScore,lastScanned:"Just now",notes:pt.disease?`${ut.notes?ut.notes+" | ":""}Scan detected: ${pt.disease}`:ut.notes}:ut))},Ue=F=>{P(F),V(!0),B(null)},at=()=>{L&&(se(I.filter(F=>F.id!==L.id)),V(!1),P(null))},Rt=F=>{B(Q===F?null:F)},bl=I.filter(F=>{const Re=F.name.toLowerCase().includes(d.toLowerCase())||F.type.toLowerCase().includes(d.toLowerCase())||F.location.toLowerCase().includes(d.toLowerCase()),pt=x==="all"||F.status===x;return Re&&pt}),nc=F=>{switch(F){case"healthy":return c.jsx(Gi,{size:14});case"diseased":return c.jsx(qi,{size:14});case"warning":return c.jsx(qi,{size:14});default:return c.jsx(mn,{size:14})}},Lt=F=>{switch(F){case"healthy":return"Healthy";case"diseased":return"Needs Care";case"warning":return"Monitor";default:return"Unknown"}},ac=I.length,vl=I.filter(F=>F.status==="healthy").length,Sl=I.filter(F=>F.status==="diseased").length,Xa=I.filter(F=>F.isFavorite).length;return c.jsxs(Qj,{onClick:E,children:[c.jsxs(Kj,{onClick:F=>F.stopPropagation(),children:[c.jsxs(Zj,{children:[c.jsx(el,{onClick:s,children:c.jsx(sn,{size:20})}),c.jsx(Jj,{children:"🌱 My Plant Collection"}),c.jsx(Ij,{children:"Track, monitor, and care for your plants with AI-powered insights"})]}),c.jsxs(Wj,{children:[c.jsxs(yw,{children:[c.jsx("h3",{style:{marginBottom:"1rem",color:"#374151"},children:"Garden Overview"}),c.jsxs(xw,{children:[c.jsxs(lo,{children:[c.jsx(ro,{children:ac}),c.jsx(oo,{children:"Total Plants"})]}),c.jsxs(lo,{children:[c.jsx(ro,{children:vl}),c.jsx(oo,{children:"Healthy"})]}),c.jsxs(lo,{children:[c.jsx(ro,{children:Sl}),c.jsx(oo,{children:"Need Care"})]}),c.jsxs(lo,{children:[c.jsx(ro,{children:Xa}),c.jsx(oo,{children:"Favorites"})]})]})]}),c.jsxs(ew,{children:[c.jsxs(tw,{children:[c.jsx(aw,{children:c.jsx(Eo,{size:18})}),c.jsx(nw,{type:"text",placeholder:"Search plants by name, type, or location...",value:d,onChange:F=>f(F.target.value)})]}),c.jsxs(Ee,{size:"sm",onClick:J,children:[c.jsx(Pp,{size:16}),"Add Plant"]}),c.jsxs(iw,{children:[c.jsx(l0,{active:h==="grid",onClick:()=>g("grid"),children:c.jsx(iS,{size:16})}),c.jsx(l0,{active:h==="list",onClick:()=>g("list"),children:c.jsx(fS,{size:16})})]})]}),c.jsxs(bw,{children:[c.jsx(co,{active:x==="all",onClick:()=>p("all"),children:"All Plants"}),c.jsx(co,{active:x==="healthy",onClick:()=>p("healthy"),children:"Healthy"}),c.jsx(co,{active:x==="diseased",onClick:()=>p("diseased"),children:"Need Care"}),c.jsx(co,{active:x==="warning",onClick:()=>p("warning"),children:"Monitor"})]}),bl.length>0?c.jsx(sw,{viewMode:h,children:bl.map(F=>c.jsxs(lw,{onClick:U,children:[c.jsxs(rw,{children:[c.jsx("span",{children:F.emoji}),c.jsx(cw,{isFavorite:F.isFavorite,onClick:Re=>{Re.stopPropagation(),Z(F.id)},children:c.jsx(lS,{size:16,fill:F.isFavorite?"currentColor":"none"})}),c.jsxs(ow,{status:F.status,children:[nc(F.status),Lt(F.status)]})]}),c.jsxs(uw,{children:[c.jsxs(dw,{children:[c.jsxs("div",{children:[c.jsx(fw,{children:F.name}),c.jsx(hw,{children:F.type})]}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx(mw,{className:"menu-button",onClick:Re=>{Re.stopPropagation(),Rt(F.id)},children:c.jsx(Iv,{size:16})}),Q===F.id&&c.jsxs(kw,{children:[c.jsxs(po,{onClick:()=>fe(F),children:[c.jsx(mn,{size:14}),"View Details"]}),c.jsxs(po,{onClick:()=>ee(F),children:[c.jsx(Br,{size:14}),"Edit Plant"]}),c.jsxs(po,{onClick:()=>Fe(F),children:[c.jsx(zd,{size:14}),"Scan Plant"]}),c.jsxs(po,{danger:!0,onClick:()=>Ue(F),children:[c.jsx(Ad,{size:14}),"Delete"]})]})]})]}),c.jsxs(gw,{children:[c.jsxs(so,{children:[c.jsx(Hn,{size:14}),c.jsxs("span",{children:["Planted ",new Date(F.plantedDate).toLocaleDateString()]})]}),c.jsxs(so,{children:[c.jsx(Gp,{size:14}),c.jsx("span",{children:F.wateringSchedule})]}),c.jsxs(so,{children:[c.jsx(NS,{size:14}),c.jsx("span",{children:F.location})]}),c.jsxs(so,{children:[c.jsx(Gi,{size:14}),c.jsxs("span",{children:["Health: ",F.healthScore,"%"]})]})]}),c.jsx(nt,{style:{fontSize:"0.85rem",marginBottom:"1rem",fontStyle:"italic"},children:F.notes}),c.jsxs(pw,{children:[c.jsxs(_d,{variant:"primary",onClick:()=>Fe(F),children:[c.jsx(xa,{size:14}),"Scan"]}),c.jsxs(_d,{onClick:()=>fe(F),children:[c.jsx(mn,{size:14}),"Details"]}),c.jsxs(_d,{onClick:()=>ee(F),children:[c.jsx(Br,{size:14}),"Edit"]})]})]})]},F.id))}):c.jsxs(Mw,{children:[c.jsx(Nw,{children:"🌱"}),c.jsx("h3",{children:"No plants found"}),c.jsx(nt,{children:d?`No plants match "${d}". Try a different search term.`:"Start building your plant collection by adding your first plant!"}),c.jsxs(Ee,{style:{marginTop:"1rem"},onClick:J,children:[c.jsx(Pp,{size:16}),"Add Your First Plant"]})]})]})]}),b&&c.jsx(tl,{onClick:ue,children:c.jsxs(nl,{onClick:F=>F.stopPropagation(),children:[c.jsxs(uo,{children:[c.jsx(el,{onClick:ue,children:c.jsx(sn,{size:20})}),c.jsx(fo,{children:"Add New Plant"}),c.jsx(ho,{children:"Add a new plant to your collection"})]}),c.jsx(al,{children:c.jsxs("form",{onSubmit:ae,children:[c.jsxs(Li,{children:[c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Plant Name"}),c.jsx(_i,{type:"text",name:"name",value:k.name,onChange:je,placeholder:"e.g., My Tomato Plant",required:!0})]}),c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Plant Type"}),c.jsxs(Ui,{name:"type",value:k.type,onChange:je,required:!0,children:[c.jsx("option",{value:"",children:"Select a type"}),c.jsx("option",{value:"Vegetable",children:"Vegetable"}),c.jsx("option",{value:"Flower",children:"Flower"}),c.jsx("option",{value:"Herb",children:"Herb"}),c.jsx("option",{value:"Tree",children:"Tree"}),c.jsx("option",{value:"Houseplant",children:"Houseplant"}),c.jsx("option",{value:"Succulent",children:"Succulent"})]})]})]}),c.jsxs(Li,{children:[c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Location"}),c.jsx(_i,{type:"text",name:"location",value:k.location,onChange:je,placeholder:"e.g., Garden A, Kitchen",required:!0})]}),c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Planted Date"}),c.jsx(_i,{type:"date",name:"plantedDate",value:k.plantedDate,onChange:je,required:!0})]})]}),c.jsxs(Li,{children:[c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Emoji"}),c.jsxs(Ui,{name:"emoji",value:k.emoji,onChange:je,children:[c.jsx("option",{value:"🌱",children:"🌱 Seedling"}),c.jsx("option",{value:"🍅",children:"🍅 Tomato"}),c.jsx("option",{value:"🌹",children:"🌹 Rose"}),c.jsx("option",{value:"🌿",children:"🌿 Herb"}),c.jsx("option",{value:"🍎",children:"🍎 Apple"}),c.jsx("option",{value:"💜",children:"💜 Lavender"}),c.jsx("option",{value:"🍁",children:"🍁 Maple"}),c.jsx("option",{value:"🌻",children:"🌻 Sunflower"}),c.jsx("option",{value:"🌵",children:"🌵 Cactus"}),c.jsx("option",{value:"🌺",children:"🌺 Hibiscus"})]})]}),c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Watering Schedule"}),c.jsxs(Ui,{name:"wateringSchedule",value:k.wateringSchedule,onChange:je,required:!0,children:[c.jsx("option",{value:"",children:"Select schedule"}),c.jsx("option",{value:"Daily",children:"Daily"}),c.jsx("option",{value:"Every 2 days",children:"Every 2 days"}),c.jsx("option",{value:"Every 3 days",children:"Every 3 days"}),c.jsx("option",{value:"Weekly",children:"Weekly"}),c.jsx("option",{value:"Twice weekly",children:"Twice weekly"}),c.jsx("option",{value:"Monthly",children:"Monthly"})]})]})]}),c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Notes"}),c.jsx(r0,{name:"notes",value:k.notes,onChange:je,placeholder:"Add any notes about your plant..."})]}),c.jsxs(il,{children:[c.jsx(Ee,{type:"button",variant:"secondary",onClick:ue,children:"Cancel"}),c.jsxs(Ee,{type:"submit",children:[c.jsx(Yp,{size:16}),"Add Plant"]})]})]})})]})}),z&&L&&c.jsx(tl,{onClick:ue,children:c.jsxs(nl,{onClick:F=>F.stopPropagation(),children:[c.jsxs(uo,{children:[c.jsx(el,{onClick:ue,children:c.jsx(sn,{size:20})}),c.jsx(fo,{children:"Edit Plant"}),c.jsxs(ho,{children:["Update ",L.name," information"]})]}),c.jsx(al,{children:c.jsxs("form",{onSubmit:ae,children:[c.jsxs(Li,{children:[c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Plant Name"}),c.jsx(_i,{type:"text",name:"name",value:k.name,onChange:je,required:!0})]}),c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Plant Type"}),c.jsxs(Ui,{name:"type",value:k.type,onChange:je,required:!0,children:[c.jsx("option",{value:"Vegetable",children:"Vegetable"}),c.jsx("option",{value:"Flower",children:"Flower"}),c.jsx("option",{value:"Herb",children:"Herb"}),c.jsx("option",{value:"Tree",children:"Tree"}),c.jsx("option",{value:"Houseplant",children:"Houseplant"}),c.jsx("option",{value:"Succulent",children:"Succulent"})]})]})]}),c.jsxs(Li,{children:[c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Location"}),c.jsx(_i,{type:"text",name:"location",value:k.location,onChange:je,required:!0})]}),c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Planted Date"}),c.jsx(_i,{type:"date",name:"plantedDate",value:k.plantedDate,onChange:je,required:!0})]})]}),c.jsxs(Li,{children:[c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Emoji"}),c.jsxs(Ui,{name:"emoji",value:k.emoji,onChange:je,children:[c.jsx("option",{value:"🌱",children:"🌱 Seedling"}),c.jsx("option",{value:"🍅",children:"🍅 Tomato"}),c.jsx("option",{value:"🌹",children:"🌹 Rose"}),c.jsx("option",{value:"🌿",children:"🌿 Herb"}),c.jsx("option",{value:"🍎",children:"🍎 Apple"}),c.jsx("option",{value:"💜",children:"💜 Lavender"}),c.jsx("option",{value:"🍁",children:"🍁 Maple"}),c.jsx("option",{value:"🌻",children:"🌻 Sunflower"}),c.jsx("option",{value:"🌵",children:"🌵 Cactus"}),c.jsx("option",{value:"🌺",children:"🌺 Hibiscus"})]})]}),c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Watering Schedule"}),c.jsxs(Ui,{name:"wateringSchedule",value:k.wateringSchedule,onChange:je,required:!0,children:[c.jsx("option",{value:"Daily",children:"Daily"}),c.jsx("option",{value:"Every 2 days",children:"Every 2 days"}),c.jsx("option",{value:"Every 3 days",children:"Every 3 days"}),c.jsx("option",{value:"Weekly",children:"Weekly"}),c.jsx("option",{value:"Twice weekly",children:"Twice weekly"}),c.jsx("option",{value:"Monthly",children:"Monthly"})]})]})]}),c.jsxs(Mt,{children:[c.jsx(Nt,{children:"Notes"}),c.jsx(r0,{name:"notes",value:k.notes,onChange:je,placeholder:"Add any notes about your plant..."})]}),c.jsxs(il,{children:[c.jsx(Ee,{type:"button",variant:"secondary",onClick:ue,children:"Cancel"}),c.jsxs(Ee,{type:"submit",children:[c.jsx(Yp,{size:16}),"Save Changes"]})]})]})})]})}),j&&L&&c.jsx(tl,{onClick:ue,children:c.jsxs(nl,{size:"large",onClick:F=>F.stopPropagation(),children:[c.jsxs(uo,{children:[c.jsx(el,{onClick:ue,children:c.jsx(sn,{size:20})}),c.jsxs(fo,{children:[L.emoji," ",L.name]}),c.jsx(ho,{children:"Complete plant information and care details"})]}),c.jsxs(al,{children:[c.jsxs(o0,{children:[c.jsxs(c0,{children:[c.jsx(nf,{size:20}),"Basic Information"]}),c.jsxs(vw,{children:[c.jsxs(Ud,{children:[c.jsxs(ha,{children:[c.jsx(ma,{children:"Plant Name:"}),c.jsx(ga,{children:L.name})]}),c.jsxs(ha,{children:[c.jsx(ma,{children:"Type:"}),c.jsx(ga,{children:L.type})]}),c.jsxs(ha,{children:[c.jsx(ma,{children:"Status:"}),c.jsx(ga,{style:{color:L.status==="healthy"?"#10b981":L.status==="diseased"?"#ef4444":"#f59e0b"},children:Lt(L.status)})]}),c.jsxs(ha,{children:[c.jsx(ma,{children:"Health Score:"}),c.jsxs(ga,{children:[L.healthScore,"%"]})]})]}),c.jsxs(Ud,{children:[c.jsxs(ha,{children:[c.jsx(ma,{children:"Location:"}),c.jsxs(ga,{children:[c.jsx(vS,{size:14,style:{display:"inline",marginRight:"4px"}}),L.location]})]}),c.jsxs(ha,{children:[c.jsx(ma,{children:"Planted Date:"}),c.jsxs(ga,{children:[c.jsx(Hn,{size:14,style:{display:"inline",marginRight:"4px"}}),new Date(L.plantedDate).toLocaleDateString()]})]}),c.jsxs(ha,{children:[c.jsx(ma,{children:"Watering:"}),c.jsxs(ga,{children:[c.jsx(Gp,{size:14,style:{display:"inline",marginRight:"4px"}}),L.wateringSchedule]})]}),c.jsxs(ha,{children:[c.jsx(ma,{children:"Last Scanned:"}),c.jsx(ga,{children:L.lastScanned})]})]})]})]}),c.jsxs(o0,{children:[c.jsxs(c0,{children:[c.jsx(Br,{size:20}),"Notes & Observations"]}),c.jsx(Ud,{children:c.jsx(nt,{style:{margin:0,lineHeight:1.6},children:L.notes||"No notes available for this plant."})})]}),c.jsxs(il,{children:[c.jsx(Ee,{variant:"secondary",onClick:ue,children:"Close"}),c.jsxs(Ee,{onClick:()=>{A(!1),ee(L)},children:[c.jsx(Br,{size:16}),"Edit Plant"]})]})]})]})}),T&&L&&c.jsx(tl,{onClick:ue,children:c.jsxs(nl,{onClick:F=>F.stopPropagation(),children:[c.jsxs(uo,{children:[c.jsx(el,{onClick:ue,children:c.jsx(sn,{size:20})}),c.jsxs(fo,{children:[c.jsx(zd,{size:20,style:{display:"inline",marginRight:"8px"}}),"Scan ",L.name]}),c.jsx(ho,{children:"Upload an image to analyze plant health"})]}),c.jsx(al,{children:c.jsxs(Sw,{children:[c.jsx(jw,{children:re?c.jsx(ww,{src:re,alt:"Plant scan"}):c.jsxs(Ew,{children:[c.jsx(xa,{size:48}),c.jsx(nt,{children:"Upload an image of your plant"}),c.jsxs(Ee,{onClick:()=>document.getElementById("scan-file-input").click(),children:[c.jsx(vf,{size:16}),"Choose Image"]})]})}),c.jsx($w,{id:"scan-file-input",type:"file",accept:"image/*",onChange:on}),Ne&&c.jsxs("div",{children:[c.jsx(nt,{children:"Analyzing plant health..."}),c.jsx(Aw,{children:c.jsx(Rw,{progress:Be})}),c.jsxs(nt,{style:{fontSize:"0.9rem",color:"#6b7280"},children:[Be,"% complete"]})]}),xe&&!Ne&&c.jsxs(zw,{children:[c.jsxs("h3",{style:{margin:"0 0 1rem 0",color:"#374151"},children:[c.jsx(Gi,{size:20,style:{display:"inline",marginRight:"8px",color:"#10b981"}}),"Scan Results"]}),c.jsxs(mo,{children:[c.jsx(sl,{children:"Health Status:"}),c.jsx(go,{status:xe.status,children:xe.status==="healthy"?"Healthy":xe.status==="diseased"?"Disease Detected":"Needs Attention"})]}),c.jsxs(mo,{children:[c.jsx(sl,{children:"Confidence:"}),c.jsxs(go,{children:[xe.confidence,"%"]})]}),c.jsxs(mo,{children:[c.jsx(sl,{children:"Health Score:"}),c.jsxs(go,{children:[xe.healthScore,"%"]})]}),xe.disease&&c.jsxs(mo,{children:[c.jsx(sl,{children:"Detected Issue:"}),c.jsx(go,{status:"diseased",children:xe.disease})]}),xe.recommendations&&c.jsxs("div",{style:{marginTop:"1rem"},children:[c.jsx(sl,{style:{display:"block",marginBottom:"0.5rem"},children:"Recommendations:"}),c.jsx("ul",{style:{margin:0,paddingLeft:"1.5rem"},children:xe.recommendations.map((F,Re)=>c.jsx("li",{style:{marginBottom:"0.25rem",color:"#374151"},children:F},Re))})]})]}),c.jsxs(il,{children:[c.jsx(Ee,{variant:"secondary",onClick:ue,children:"Close"}),xe&&c.jsxs(Ee,{onClick:()=>{const F={plant:L.name,date:new Date().toLocaleDateString(),results:xe};console.log("Generating report:",F),alert("Scan report generated! (Check console for details)")},children:[c.jsx(tf,{size:16}),"Generate Report"]}),re&&!Ne&&!xe&&c.jsxs(Ee,{onClick:At,children:[c.jsx(zd,{size:16}),"Analyze Plant"]})]})]})})]})}),X&&L&&c.jsx(tl,{onClick:ue,children:c.jsx(nl,{onClick:F=>F.stopPropagation(),children:c.jsx(al,{children:c.jsxs(Tw,{children:[c.jsx(Cw,{children:c.jsx(Ad,{size:32})}),c.jsx(Ow,{children:"Delete Plant"}),c.jsxs(Dw,{children:["Are you sure you want to delete ",c.jsx("strong",{children:L.name}),"? This action cannot be undone and all data associated with this plant will be permanently removed."]}),c.jsxs(il,{children:[c.jsx(Ee,{variant:"secondary",onClick:ue,children:"Cancel"}),c.jsxs(Ee,{onClick:at,style:{background:"#ef4444","&:hover":{background:"#dc2626"}},children:[c.jsx(Ad,{size:16}),"Delete Plant"]})]})]})})})})]})};function py(n,s){return function(){return n.apply(s,arguments)}}const{toString:Uw}=Object.prototype,{getPrototypeOf:Sf}=Object,{iterator:Qo,toStringTag:yy}=Symbol,Ko=(n=>s=>{const r=Uw.call(s);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),gn=n=>(n=n.toLowerCase(),s=>Ko(s)===n),Zo=n=>s=>typeof s===n,{isArray:Ki}=Array,ml=Zo("undefined");function Lw(n){return n!==null&&!ml(n)&&n.constructor!==null&&!ml(n.constructor)&&_t(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const xy=gn("ArrayBuffer");function Bw(n){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(n):s=n&&n.buffer&&xy(n.buffer),s}const Hw=Zo("string"),_t=Zo("function"),by=Zo("number"),Jo=n=>n!==null&&typeof n=="object",qw=n=>n===!0||n===!1,zo=n=>{if(Ko(n)!=="object")return!1;const s=Sf(n);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(yy in n)&&!(Qo in n)},Gw=gn("Date"),Pw=gn("File"),Yw=gn("Blob"),Vw=gn("FileList"),Xw=n=>Jo(n)&&_t(n.pipe),Fw=n=>{let s;return n&&(typeof FormData=="function"&&n instanceof FormData||_t(n.append)&&((s=Ko(n))==="formdata"||s==="object"&&_t(n.toString)&&n.toString()==="[object FormData]"))},Qw=gn("URLSearchParams"),[Kw,Zw,Jw,Iw]=["ReadableStream","Request","Response","Headers"].map(gn),Ww=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function yl(n,s,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let o,d;if(typeof n!="object"&&(n=[n]),Ki(n))for(o=0,d=n.length;o<d;o++)s.call(null,n[o],o,n);else{const f=r?Object.getOwnPropertyNames(n):Object.keys(n),h=f.length;let g;for(o=0;o<h;o++)g=f[o],s.call(null,n[g],g,n)}}function vy(n,s){s=s.toLowerCase();const r=Object.keys(n);let o=r.length,d;for(;o-- >0;)if(d=r[o],s===d.toLowerCase())return d;return null}const La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Sy=n=>!ml(n)&&n!==La;function rf(){const{caseless:n}=Sy(this)&&this||{},s={},r=(o,d)=>{const f=n&&vy(s,d)||d;zo(s[f])&&zo(o)?s[f]=rf(s[f],o):zo(o)?s[f]=rf({},o):Ki(o)?s[f]=o.slice():s[f]=o};for(let o=0,d=arguments.length;o<d;o++)arguments[o]&&yl(arguments[o],r);return s}const e5=(n,s,r,{allOwnKeys:o}={})=>(yl(s,(d,f)=>{r&&_t(d)?n[f]=py(d,r):n[f]=d},{allOwnKeys:o}),n),t5=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),n5=(n,s,r,o)=>{n.prototype=Object.create(s.prototype,o),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:s.prototype}),r&&Object.assign(n.prototype,r)},a5=(n,s,r,o)=>{let d,f,h;const g={};if(s=s||{},n==null)return s;do{for(d=Object.getOwnPropertyNames(n),f=d.length;f-- >0;)h=d[f],(!o||o(h,n,s))&&!g[h]&&(s[h]=n[h],g[h]=!0);n=r!==!1&&Sf(n)}while(n&&(!r||r(n,s))&&n!==Object.prototype);return s},i5=(n,s,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=s.length;const o=n.indexOf(s,r);return o!==-1&&o===r},s5=n=>{if(!n)return null;if(Ki(n))return n;let s=n.length;if(!by(s))return null;const r=new Array(s);for(;s-- >0;)r[s]=n[s];return r},l5=(n=>s=>n&&s instanceof n)(typeof Uint8Array<"u"&&Sf(Uint8Array)),r5=(n,s)=>{const o=(n&&n[Qo]).call(n);let d;for(;(d=o.next())&&!d.done;){const f=d.value;s.call(n,f[0],f[1])}},o5=(n,s)=>{let r;const o=[];for(;(r=n.exec(s))!==null;)o.push(r);return o},c5=gn("HTMLFormElement"),u5=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,d){return o.toUpperCase()+d}),u0=(({hasOwnProperty:n})=>(s,r)=>n.call(s,r))(Object.prototype),d5=gn("RegExp"),jy=(n,s)=>{const r=Object.getOwnPropertyDescriptors(n),o={};yl(r,(d,f)=>{let h;(h=s(d,f,n))!==!1&&(o[f]=h||d)}),Object.defineProperties(n,o)},f5=n=>{jy(n,(s,r)=>{if(_t(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const o=n[r];if(_t(o)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},h5=(n,s)=>{const r={},o=d=>{d.forEach(f=>{r[f]=!0})};return Ki(n)?o(n):o(String(n).split(s)),r},m5=()=>{},g5=(n,s)=>n!=null&&Number.isFinite(n=+n)?n:s;function p5(n){return!!(n&&_t(n.append)&&n[yy]==="FormData"&&n[Qo])}const y5=n=>{const s=new Array(10),r=(o,d)=>{if(Jo(o)){if(s.indexOf(o)>=0)return;if(!("toJSON"in o)){s[d]=o;const f=Ki(o)?[]:{};return yl(o,(h,g)=>{const x=r(h,d+1);!ml(x)&&(f[g]=x)}),s[d]=void 0,f}}return o};return r(n,0)},x5=gn("AsyncFunction"),b5=n=>n&&(Jo(n)||_t(n))&&_t(n.then)&&_t(n.catch),wy=((n,s)=>n?setImmediate:s?((r,o)=>(La.addEventListener("message",({source:d,data:f})=>{d===La&&f===r&&o.length&&o.shift()()},!1),d=>{o.push(d),La.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",_t(La.postMessage)),v5=typeof queueMicrotask<"u"?queueMicrotask.bind(La):typeof process<"u"&&process.nextTick||wy,S5=n=>n!=null&&_t(n[Qo]),_={isArray:Ki,isArrayBuffer:xy,isBuffer:Lw,isFormData:Fw,isArrayBufferView:Bw,isString:Hw,isNumber:by,isBoolean:qw,isObject:Jo,isPlainObject:zo,isReadableStream:Kw,isRequest:Zw,isResponse:Jw,isHeaders:Iw,isUndefined:ml,isDate:Gw,isFile:Pw,isBlob:Yw,isRegExp:d5,isFunction:_t,isStream:Xw,isURLSearchParams:Qw,isTypedArray:l5,isFileList:Vw,forEach:yl,merge:rf,extend:e5,trim:Ww,stripBOM:t5,inherits:n5,toFlatObject:a5,kindOf:Ko,kindOfTest:gn,endsWith:i5,toArray:s5,forEachEntry:r5,matchAll:o5,isHTMLForm:c5,hasOwnProperty:u0,hasOwnProp:u0,reduceDescriptors:jy,freezeMethods:f5,toObjectSet:h5,toCamelCase:u5,noop:m5,toFiniteNumber:g5,findKey:vy,global:La,isContextDefined:Sy,isSpecCompliantForm:p5,toJSONObject:y5,isAsyncFn:x5,isThenable:b5,setImmediate:wy,asap:v5,isIterable:S5};function he(n,s,r,o,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",s&&(this.code=s),r&&(this.config=r),o&&(this.request=o),d&&(this.response=d,this.status=d.status?d.status:null)}_.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const Ey=he.prototype,$y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{$y[n]={value:n}});Object.defineProperties(he,$y);Object.defineProperty(Ey,"isAxiosError",{value:!0});he.from=(n,s,r,o,d,f)=>{const h=Object.create(Ey);return _.toFlatObject(n,h,function(x){return x!==Error.prototype},g=>g!=="isAxiosError"),he.call(h,n.message,s,r,o,d),h.cause=n,h.name=n.name,f&&Object.assign(h,f),h};const j5=null;function of(n){return _.isPlainObject(n)||_.isArray(n)}function zy(n){return _.endsWith(n,"[]")?n.slice(0,-2):n}function d0(n,s,r){return n?n.concat(s).map(function(d,f){return d=zy(d),!r&&f?"["+d+"]":d}).join(r?".":""):s}function w5(n){return _.isArray(n)&&!n.some(of)}const E5=_.toFlatObject(_,{},null,function(s){return/^is[A-Z]/.test(s)});function Io(n,s,r){if(!_.isObject(n))throw new TypeError("target must be an object");s=s||new FormData,r=_.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,T){return!_.isUndefined(T[A])});const o=r.metaTokens,d=r.visitor||b,f=r.dots,h=r.indexes,x=(r.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(s);if(!_.isFunction(d))throw new TypeError("visitor must be a function");function p(j){if(j===null)return"";if(_.isDate(j))return j.toISOString();if(_.isBoolean(j))return j.toString();if(!x&&_.isBlob(j))throw new he("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(j)||_.isTypedArray(j)?x&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function b(j,A,T){let G=j;if(j&&!T&&typeof j=="object"){if(_.endsWith(A,"{}"))A=o?A:A.slice(0,-2),j=JSON.stringify(j);else if(_.isArray(j)&&w5(j)||(_.isFileList(j)||_.endsWith(A,"[]"))&&(G=_.toArray(j)))return A=zy(A),G.forEach(function(V,L){!(_.isUndefined(V)||V===null)&&s.append(h===!0?d0([A],L,f):h===null?A:A+"[]",p(V))}),!1}return of(j)?!0:(s.append(d0(T,A,f),p(j)),!1)}const v=[],z=Object.assign(E5,{defaultVisitor:b,convertValue:p,isVisitable:of});function C(j,A){if(!_.isUndefined(j)){if(v.indexOf(j)!==-1)throw Error("Circular reference detected in "+A.join("."));v.push(j),_.forEach(j,function(G,X){(!(_.isUndefined(G)||G===null)&&d.call(s,G,_.isString(X)?X.trim():X,A,z))===!0&&C(G,A?A.concat(X):[X])}),v.pop()}}if(!_.isObject(n))throw new TypeError("data must be an object");return C(n),s}function f0(n){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(o){return s[o]})}function jf(n,s){this._pairs=[],n&&Io(n,this,s)}const Ay=jf.prototype;Ay.append=function(s,r){this._pairs.push([s,r])};Ay.toString=function(s){const r=s?function(o){return s.call(this,o,f0)}:f0;return this._pairs.map(function(d){return r(d[0])+"="+r(d[1])},"").join("&")};function $5(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ry(n,s,r){if(!s)return n;const o=r&&r.encode||$5;_.isFunction(r)&&(r={serialize:r});const d=r&&r.serialize;let f;if(d?f=d(s,r):f=_.isURLSearchParams(s)?s.toString():new jf(s,r).toString(o),f){const h=n.indexOf("#");h!==-1&&(n=n.slice(0,h)),n+=(n.indexOf("?")===-1?"?":"&")+f}return n}class h0{constructor(){this.handlers=[]}use(s,r,o){return this.handlers.push({fulfilled:s,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){_.forEach(this.handlers,function(o){o!==null&&s(o)})}}const Ty={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},z5=typeof URLSearchParams<"u"?URLSearchParams:jf,A5=typeof FormData<"u"?FormData:null,R5=typeof Blob<"u"?Blob:null,T5={isBrowser:!0,classes:{URLSearchParams:z5,FormData:A5,Blob:R5},protocols:["http","https","file","blob","url","data"]},wf=typeof window<"u"&&typeof document<"u",cf=typeof navigator=="object"&&navigator||void 0,C5=wf&&(!cf||["ReactNative","NativeScript","NS"].indexOf(cf.product)<0),O5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",D5=wf&&window.location.href||"http://localhost",k5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:wf,hasStandardBrowserEnv:C5,hasStandardBrowserWebWorkerEnv:O5,navigator:cf,origin:D5},Symbol.toStringTag,{value:"Module"})),St={...k5,...T5};function M5(n,s){return Io(n,new St.classes.URLSearchParams,Object.assign({visitor:function(r,o,d,f){return St.isNode&&_.isBuffer(r)?(this.append(o,r.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)}},s))}function N5(n){return _.matchAll(/\w+|\[(\w*)]/g,n).map(s=>s[0]==="[]"?"":s[1]||s[0])}function _5(n){const s={},r=Object.keys(n);let o;const d=r.length;let f;for(o=0;o<d;o++)f=r[o],s[f]=n[f];return s}function Cy(n){function s(r,o,d,f){let h=r[f++];if(h==="__proto__")return!0;const g=Number.isFinite(+h),x=f>=r.length;return h=!h&&_.isArray(d)?d.length:h,x?(_.hasOwnProp(d,h)?d[h]=[d[h],o]:d[h]=o,!g):((!d[h]||!_.isObject(d[h]))&&(d[h]=[]),s(r,o,d[h],f)&&_.isArray(d[h])&&(d[h]=_5(d[h])),!g)}if(_.isFormData(n)&&_.isFunction(n.entries)){const r={};return _.forEachEntry(n,(o,d)=>{s(N5(o),d,r,0)}),r}return null}function U5(n,s,r){if(_.isString(n))try{return(s||JSON.parse)(n),_.trim(n)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(n)}const xl={transitional:Ty,adapter:["xhr","http","fetch"],transformRequest:[function(s,r){const o=r.getContentType()||"",d=o.indexOf("application/json")>-1,f=_.isObject(s);if(f&&_.isHTMLForm(s)&&(s=new FormData(s)),_.isFormData(s))return d?JSON.stringify(Cy(s)):s;if(_.isArrayBuffer(s)||_.isBuffer(s)||_.isStream(s)||_.isFile(s)||_.isBlob(s)||_.isReadableStream(s))return s;if(_.isArrayBufferView(s))return s.buffer;if(_.isURLSearchParams(s))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let g;if(f){if(o.indexOf("application/x-www-form-urlencoded")>-1)return M5(s,this.formSerializer).toString();if((g=_.isFileList(s))||o.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return Io(g?{"files[]":s}:s,x&&new x,this.formSerializer)}}return f||d?(r.setContentType("application/json",!1),U5(s)):s}],transformResponse:[function(s){const r=this.transitional||xl.transitional,o=r&&r.forcedJSONParsing,d=this.responseType==="json";if(_.isResponse(s)||_.isReadableStream(s))return s;if(s&&_.isString(s)&&(o&&!this.responseType||d)){const h=!(r&&r.silentJSONParsing)&&d;try{return JSON.parse(s)}catch(g){if(h)throw g.name==="SyntaxError"?he.from(g,he.ERR_BAD_RESPONSE,this,null,this.response):g}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:St.classes.FormData,Blob:St.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],n=>{xl.headers[n]={}});const L5=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),B5=n=>{const s={};let r,o,d;return n&&n.split(`
`).forEach(function(h){d=h.indexOf(":"),r=h.substring(0,d).trim().toLowerCase(),o=h.substring(d+1).trim(),!(!r||s[r]&&L5[r])&&(r==="set-cookie"?s[r]?s[r].push(o):s[r]=[o]:s[r]=s[r]?s[r]+", "+o:o)}),s},m0=Symbol("internals");function ll(n){return n&&String(n).trim().toLowerCase()}function Ao(n){return n===!1||n==null?n:_.isArray(n)?n.map(Ao):String(n)}function H5(n){const s=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(n);)s[o[1]]=o[2];return s}const q5=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Ld(n,s,r,o,d){if(_.isFunction(o))return o.call(this,s,r);if(d&&(s=r),!!_.isString(s)){if(_.isString(o))return s.indexOf(o)!==-1;if(_.isRegExp(o))return o.test(s)}}function G5(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,r,o)=>r.toUpperCase()+o)}function P5(n,s){const r=_.toCamelCase(" "+s);["get","set","has"].forEach(o=>{Object.defineProperty(n,o+r,{value:function(d,f,h){return this[o].call(this,s,d,f,h)},configurable:!0})})}let Ut=class{constructor(s){s&&this.set(s)}set(s,r,o){const d=this;function f(g,x,p){const b=ll(x);if(!b)throw new Error("header name must be a non-empty string");const v=_.findKey(d,b);(!v||d[v]===void 0||p===!0||p===void 0&&d[v]!==!1)&&(d[v||x]=Ao(g))}const h=(g,x)=>_.forEach(g,(p,b)=>f(p,b,x));if(_.isPlainObject(s)||s instanceof this.constructor)h(s,r);else if(_.isString(s)&&(s=s.trim())&&!q5(s))h(B5(s),r);else if(_.isObject(s)&&_.isIterable(s)){let g={},x,p;for(const b of s){if(!_.isArray(b))throw TypeError("Object iterator must return a key-value pair");g[p=b[0]]=(x=g[p])?_.isArray(x)?[...x,b[1]]:[x,b[1]]:b[1]}h(g,r)}else s!=null&&f(r,s,o);return this}get(s,r){if(s=ll(s),s){const o=_.findKey(this,s);if(o){const d=this[o];if(!r)return d;if(r===!0)return H5(d);if(_.isFunction(r))return r.call(this,d,o);if(_.isRegExp(r))return r.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,r){if(s=ll(s),s){const o=_.findKey(this,s);return!!(o&&this[o]!==void 0&&(!r||Ld(this,this[o],o,r)))}return!1}delete(s,r){const o=this;let d=!1;function f(h){if(h=ll(h),h){const g=_.findKey(o,h);g&&(!r||Ld(o,o[g],g,r))&&(delete o[g],d=!0)}}return _.isArray(s)?s.forEach(f):f(s),d}clear(s){const r=Object.keys(this);let o=r.length,d=!1;for(;o--;){const f=r[o];(!s||Ld(this,this[f],f,s,!0))&&(delete this[f],d=!0)}return d}normalize(s){const r=this,o={};return _.forEach(this,(d,f)=>{const h=_.findKey(o,f);if(h){r[h]=Ao(d),delete r[f];return}const g=s?G5(f):String(f).trim();g!==f&&delete r[f],r[g]=Ao(d),o[g]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const r=Object.create(null);return _.forEach(this,(o,d)=>{o!=null&&o!==!1&&(r[d]=s&&_.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,r])=>s+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...r){const o=new this(s);return r.forEach(d=>o.set(d)),o}static accessor(s){const o=(this[m0]=this[m0]={accessors:{}}).accessors,d=this.prototype;function f(h){const g=ll(h);o[g]||(P5(d,h),o[g]=!0)}return _.isArray(s)?s.forEach(f):f(s),this}};Ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Ut.prototype,({value:n},s)=>{let r=s[0].toUpperCase()+s.slice(1);return{get:()=>n,set(o){this[r]=o}}});_.freezeMethods(Ut);function Bd(n,s){const r=this||xl,o=s||r,d=Ut.from(o.headers);let f=o.data;return _.forEach(n,function(g){f=g.call(r,f,d.normalize(),s?s.status:void 0)}),d.normalize(),f}function Oy(n){return!!(n&&n.__CANCEL__)}function Zi(n,s,r){he.call(this,n??"canceled",he.ERR_CANCELED,s,r),this.name="CanceledError"}_.inherits(Zi,he,{__CANCEL__:!0});function Dy(n,s,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?n(r):s(new he("Request failed with status code "+r.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Y5(n){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return s&&s[1]||""}function V5(n,s){n=n||10;const r=new Array(n),o=new Array(n);let d=0,f=0,h;return s=s!==void 0?s:1e3,function(x){const p=Date.now(),b=o[f];h||(h=p),r[d]=x,o[d]=p;let v=f,z=0;for(;v!==d;)z+=r[v++],v=v%n;if(d=(d+1)%n,d===f&&(f=(f+1)%n),p-h<s)return;const C=b&&p-b;return C?Math.round(z*1e3/C):void 0}}function X5(n,s){let r=0,o=1e3/s,d,f;const h=(p,b=Date.now())=>{r=b,d=null,f&&(clearTimeout(f),f=null),n.apply(null,p)};return[(...p)=>{const b=Date.now(),v=b-r;v>=o?h(p,b):(d=p,f||(f=setTimeout(()=>{f=null,h(d)},o-v)))},()=>d&&h(d)]}const _o=(n,s,r=3)=>{let o=0;const d=V5(50,250);return X5(f=>{const h=f.loaded,g=f.lengthComputable?f.total:void 0,x=h-o,p=d(x),b=h<=g;o=h;const v={loaded:h,total:g,progress:g?h/g:void 0,bytes:x,rate:p||void 0,estimated:p&&g&&b?(g-h)/p:void 0,event:f,lengthComputable:g!=null,[s?"download":"upload"]:!0};n(v)},r)},g0=(n,s)=>{const r=n!=null;return[o=>s[0]({lengthComputable:r,total:n,loaded:o}),s[1]]},p0=n=>(...s)=>_.asap(()=>n(...s)),F5=St.hasStandardBrowserEnv?((n,s)=>r=>(r=new URL(r,St.origin),n.protocol===r.protocol&&n.host===r.host&&(s||n.port===r.port)))(new URL(St.origin),St.navigator&&/(msie|trident)/i.test(St.navigator.userAgent)):()=>!0,Q5=St.hasStandardBrowserEnv?{write(n,s,r,o,d,f){const h=[n+"="+encodeURIComponent(s)];_.isNumber(r)&&h.push("expires="+new Date(r).toGMTString()),_.isString(o)&&h.push("path="+o),_.isString(d)&&h.push("domain="+d),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read(n){const s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function K5(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Z5(n,s){return s?n.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):n}function ky(n,s,r){let o=!K5(s);return n&&(o||r==!1)?Z5(n,s):s}const y0=n=>n instanceof Ut?{...n}:n;function Va(n,s){s=s||{};const r={};function o(p,b,v,z){return _.isPlainObject(p)&&_.isPlainObject(b)?_.merge.call({caseless:z},p,b):_.isPlainObject(b)?_.merge({},b):_.isArray(b)?b.slice():b}function d(p,b,v,z){if(_.isUndefined(b)){if(!_.isUndefined(p))return o(void 0,p,v,z)}else return o(p,b,v,z)}function f(p,b){if(!_.isUndefined(b))return o(void 0,b)}function h(p,b){if(_.isUndefined(b)){if(!_.isUndefined(p))return o(void 0,p)}else return o(void 0,b)}function g(p,b,v){if(v in s)return o(p,b);if(v in n)return o(void 0,p)}const x={url:f,method:f,data:f,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:g,headers:(p,b,v)=>d(y0(p),y0(b),v,!0)};return _.forEach(Object.keys(Object.assign({},n,s)),function(b){const v=x[b]||d,z=v(n[b],s[b],b);_.isUndefined(z)&&v!==g||(r[b]=z)}),r}const My=n=>{const s=Va({},n);let{data:r,withXSRFToken:o,xsrfHeaderName:d,xsrfCookieName:f,headers:h,auth:g}=s;s.headers=h=Ut.from(h),s.url=Ry(ky(s.baseURL,s.url,s.allowAbsoluteUrls),n.params,n.paramsSerializer),g&&h.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let x;if(_.isFormData(r)){if(St.hasStandardBrowserEnv||St.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((x=h.getContentType())!==!1){const[p,...b]=x?x.split(";").map(v=>v.trim()).filter(Boolean):[];h.setContentType([p||"multipart/form-data",...b].join("; "))}}if(St.hasStandardBrowserEnv&&(o&&_.isFunction(o)&&(o=o(s)),o||o!==!1&&F5(s.url))){const p=d&&f&&Q5.read(f);p&&h.set(d,p)}return s},J5=typeof XMLHttpRequest<"u",I5=J5&&function(n){return new Promise(function(r,o){const d=My(n);let f=d.data;const h=Ut.from(d.headers).normalize();let{responseType:g,onUploadProgress:x,onDownloadProgress:p}=d,b,v,z,C,j;function A(){C&&C(),j&&j(),d.cancelToken&&d.cancelToken.unsubscribe(b),d.signal&&d.signal.removeEventListener("abort",b)}let T=new XMLHttpRequest;T.open(d.method.toUpperCase(),d.url,!0),T.timeout=d.timeout;function G(){if(!T)return;const V=Ut.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),P={data:!g||g==="text"||g==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:V,config:n,request:T};Dy(function(B){r(B),A()},function(B){o(B),A()},P),T=null}"onloadend"in T?T.onloadend=G:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(G)},T.onabort=function(){T&&(o(new he("Request aborted",he.ECONNABORTED,n,T)),T=null)},T.onerror=function(){o(new he("Network Error",he.ERR_NETWORK,n,T)),T=null},T.ontimeout=function(){let L=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const P=d.transitional||Ty;d.timeoutErrorMessage&&(L=d.timeoutErrorMessage),o(new he(L,P.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,n,T)),T=null},f===void 0&&h.setContentType(null),"setRequestHeader"in T&&_.forEach(h.toJSON(),function(L,P){T.setRequestHeader(P,L)}),_.isUndefined(d.withCredentials)||(T.withCredentials=!!d.withCredentials),g&&g!=="json"&&(T.responseType=d.responseType),p&&([z,j]=_o(p,!0),T.addEventListener("progress",z)),x&&T.upload&&([v,C]=_o(x),T.upload.addEventListener("progress",v),T.upload.addEventListener("loadend",C)),(d.cancelToken||d.signal)&&(b=V=>{T&&(o(!V||V.type?new Zi(null,n,T):V),T.abort(),T=null)},d.cancelToken&&d.cancelToken.subscribe(b),d.signal&&(d.signal.aborted?b():d.signal.addEventListener("abort",b)));const X=Y5(d.url);if(X&&St.protocols.indexOf(X)===-1){o(new he("Unsupported protocol "+X+":",he.ERR_BAD_REQUEST,n));return}T.send(f||null)})},W5=(n,s)=>{const{length:r}=n=n?n.filter(Boolean):[];if(s||r){let o=new AbortController,d;const f=function(p){if(!d){d=!0,g();const b=p instanceof Error?p:this.reason;o.abort(b instanceof he?b:new Zi(b instanceof Error?b.message:b))}};let h=s&&setTimeout(()=>{h=null,f(new he(`timeout ${s} of ms exceeded`,he.ETIMEDOUT))},s);const g=()=>{n&&(h&&clearTimeout(h),h=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(f):p.removeEventListener("abort",f)}),n=null)};n.forEach(p=>p.addEventListener("abort",f));const{signal:x}=o;return x.unsubscribe=()=>_.asap(g),x}},e4=function*(n,s){let r=n.byteLength;if(r<s){yield n;return}let o=0,d;for(;o<r;)d=o+s,yield n.slice(o,d),o=d},t4=async function*(n,s){for await(const r of n4(n))yield*e4(r,s)},n4=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const s=n.getReader();try{for(;;){const{done:r,value:o}=await s.read();if(r)break;yield o}}finally{await s.cancel()}},x0=(n,s,r,o)=>{const d=t4(n,s);let f=0,h,g=x=>{h||(h=!0,o&&o(x))};return new ReadableStream({async pull(x){try{const{done:p,value:b}=await d.next();if(p){g(),x.close();return}let v=b.byteLength;if(r){let z=f+=v;r(z)}x.enqueue(new Uint8Array(b))}catch(p){throw g(p),p}},cancel(x){return g(x),d.return()}},{highWaterMark:2})},Wo=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ny=Wo&&typeof ReadableStream=="function",a4=Wo&&(typeof TextEncoder=="function"?(n=>s=>n.encode(s))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),_y=(n,...s)=>{try{return!!n(...s)}catch{return!1}},i4=Ny&&_y(()=>{let n=!1;const s=new Request(St.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!s}),b0=64*1024,uf=Ny&&_y(()=>_.isReadableStream(new Response("").body)),Uo={stream:uf&&(n=>n.body)};Wo&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(s=>{!Uo[s]&&(Uo[s]=_.isFunction(n[s])?r=>r[s]():(r,o)=>{throw new he(`Response type '${s}' is not supported`,he.ERR_NOT_SUPPORT,o)})})})(new Response);const s4=async n=>{if(n==null)return 0;if(_.isBlob(n))return n.size;if(_.isSpecCompliantForm(n))return(await new Request(St.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(_.isArrayBufferView(n)||_.isArrayBuffer(n))return n.byteLength;if(_.isURLSearchParams(n)&&(n=n+""),_.isString(n))return(await a4(n)).byteLength},l4=async(n,s)=>{const r=_.toFiniteNumber(n.getContentLength());return r??s4(s)},r4=Wo&&(async n=>{let{url:s,method:r,data:o,signal:d,cancelToken:f,timeout:h,onDownloadProgress:g,onUploadProgress:x,responseType:p,headers:b,withCredentials:v="same-origin",fetchOptions:z}=My(n);p=p?(p+"").toLowerCase():"text";let C=W5([d,f&&f.toAbortSignal()],h),j;const A=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let T;try{if(x&&i4&&r!=="get"&&r!=="head"&&(T=await l4(b,o))!==0){let P=new Request(s,{method:"POST",body:o,duplex:"half"}),Q;if(_.isFormData(o)&&(Q=P.headers.get("content-type"))&&b.setContentType(Q),P.body){const[B,re]=g0(T,_o(p0(x)));o=x0(P.body,b0,B,re)}}_.isString(v)||(v=v?"include":"omit");const G="credentials"in Request.prototype;j=new Request(s,{...z,signal:C,method:r.toUpperCase(),headers:b.normalize().toJSON(),body:o,duplex:"half",credentials:G?v:void 0});let X=await fetch(j,z);const V=uf&&(p==="stream"||p==="response");if(uf&&(g||V&&A)){const P={};["status","statusText","headers"].forEach(Se=>{P[Se]=X[Se]});const Q=_.toFiniteNumber(X.headers.get("content-length")),[B,re]=g&&g0(Q,_o(p0(g),!0))||[];X=new Response(x0(X.body,b0,B,()=>{re&&re(),A&&A()}),P)}p=p||"text";let L=await Uo[_.findKey(Uo,p)||"text"](X,n);return!V&&A&&A(),await new Promise((P,Q)=>{Dy(P,Q,{data:L,headers:Ut.from(X.headers),status:X.status,statusText:X.statusText,config:n,request:j})})}catch(G){throw A&&A(),G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)?Object.assign(new he("Network Error",he.ERR_NETWORK,n,j),{cause:G.cause||G}):he.from(G,G&&G.code,n,j)}}),df={http:j5,xhr:I5,fetch:r4};_.forEach(df,(n,s)=>{if(n){try{Object.defineProperty(n,"name",{value:s})}catch{}Object.defineProperty(n,"adapterName",{value:s})}});const v0=n=>`- ${n}`,o4=n=>_.isFunction(n)||n===null||n===!1,Uy={getAdapter:n=>{n=_.isArray(n)?n:[n];const{length:s}=n;let r,o;const d={};for(let f=0;f<s;f++){r=n[f];let h;if(o=r,!o4(r)&&(o=df[(h=String(r)).toLowerCase()],o===void 0))throw new he(`Unknown adapter '${h}'`);if(o)break;d[h||"#"+f]=o}if(!o){const f=Object.entries(d).map(([g,x])=>`adapter ${g} `+(x===!1?"is not supported by the environment":"is not available in the build"));let h=s?f.length>1?`since :
`+f.map(v0).join(`
`):" "+v0(f[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return o},adapters:df};function Hd(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Zi(null,n)}function S0(n){return Hd(n),n.headers=Ut.from(n.headers),n.data=Bd.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Uy.getAdapter(n.adapter||xl.adapter)(n).then(function(o){return Hd(n),o.data=Bd.call(n,n.transformResponse,o),o.headers=Ut.from(o.headers),o},function(o){return Oy(o)||(Hd(n),o&&o.response&&(o.response.data=Bd.call(n,n.transformResponse,o.response),o.response.headers=Ut.from(o.response.headers))),Promise.reject(o)})}const Ly="1.10.0",ec={};["object","boolean","number","function","string","symbol"].forEach((n,s)=>{ec[n]=function(o){return typeof o===n||"a"+(s<1?"n ":" ")+n}});const j0={};ec.transitional=function(s,r,o){function d(f,h){return"[Axios v"+Ly+"] Transitional option '"+f+"'"+h+(o?". "+o:"")}return(f,h,g)=>{if(s===!1)throw new he(d(h," has been removed"+(r?" in "+r:"")),he.ERR_DEPRECATED);return r&&!j0[h]&&(j0[h]=!0,console.warn(d(h," has been deprecated since v"+r+" and will be removed in the near future"))),s?s(f,h,g):!0}};ec.spelling=function(s){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${s}`),!0)};function c4(n,s,r){if(typeof n!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const o=Object.keys(n);let d=o.length;for(;d-- >0;){const f=o[d],h=s[f];if(h){const g=n[f],x=g===void 0||h(g,f,n);if(x!==!0)throw new he("option "+f+" must be "+x,he.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new he("Unknown option "+f,he.ERR_BAD_OPTION)}}const Ro={assertOptions:c4,validators:ec},Sn=Ro.validators;let qa=class{constructor(s){this.defaults=s||{},this.interceptors={request:new h0,response:new h0}}async request(s,r){try{return await this._request(s,r)}catch(o){if(o instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const f=d.stack?d.stack.replace(/^.+\n/,""):"";try{o.stack?f&&!String(o.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+f):o.stack=f}catch{}}throw o}}_request(s,r){typeof s=="string"?(r=r||{},r.url=s):r=s||{},r=Va(this.defaults,r);const{transitional:o,paramsSerializer:d,headers:f}=r;o!==void 0&&Ro.assertOptions(o,{silentJSONParsing:Sn.transitional(Sn.boolean),forcedJSONParsing:Sn.transitional(Sn.boolean),clarifyTimeoutError:Sn.transitional(Sn.boolean)},!1),d!=null&&(_.isFunction(d)?r.paramsSerializer={serialize:d}:Ro.assertOptions(d,{encode:Sn.function,serialize:Sn.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ro.assertOptions(r,{baseUrl:Sn.spelling("baseURL"),withXsrfToken:Sn.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let h=f&&_.merge(f.common,f[r.method]);f&&_.forEach(["delete","get","head","post","put","patch","common"],j=>{delete f[j]}),r.headers=Ut.concat(h,f);const g=[];let x=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(r)===!1||(x=x&&A.synchronous,g.unshift(A.fulfilled,A.rejected))});const p=[];this.interceptors.response.forEach(function(A){p.push(A.fulfilled,A.rejected)});let b,v=0,z;if(!x){const j=[S0.bind(this),void 0];for(j.unshift.apply(j,g),j.push.apply(j,p),z=j.length,b=Promise.resolve(r);v<z;)b=b.then(j[v++],j[v++]);return b}z=g.length;let C=r;for(v=0;v<z;){const j=g[v++],A=g[v++];try{C=j(C)}catch(T){A.call(this,T);break}}try{b=S0.call(this,C)}catch(j){return Promise.reject(j)}for(v=0,z=p.length;v<z;)b=b.then(p[v++],p[v++]);return b}getUri(s){s=Va(this.defaults,s);const r=ky(s.baseURL,s.url,s.allowAbsoluteUrls);return Ry(r,s.params,s.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(s){qa.prototype[s]=function(r,o){return this.request(Va(o||{},{method:s,url:r,data:(o||{}).data}))}});_.forEach(["post","put","patch"],function(s){function r(o){return function(f,h,g){return this.request(Va(g||{},{method:s,headers:o?{"Content-Type":"multipart/form-data"}:{},url:f,data:h}))}}qa.prototype[s]=r(),qa.prototype[s+"Form"]=r(!0)});let u4=class By{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(f){r=f});const o=this;this.promise.then(d=>{if(!o._listeners)return;let f=o._listeners.length;for(;f-- >0;)o._listeners[f](d);o._listeners=null}),this.promise.then=d=>{let f;const h=new Promise(g=>{o.subscribe(g),f=g}).then(d);return h.cancel=function(){o.unsubscribe(f)},h},s(function(f,h,g){o.reason||(o.reason=new Zi(f,h,g),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const r=this._listeners.indexOf(s);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const s=new AbortController,r=o=>{s.abort(o)};return this.subscribe(r),s.signal.unsubscribe=()=>this.unsubscribe(r),s.signal}static source(){let s;return{token:new By(function(d){s=d}),cancel:s}}};function d4(n){return function(r){return n.apply(null,r)}}function f4(n){return _.isObject(n)&&n.isAxiosError===!0}const ff={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ff).forEach(([n,s])=>{ff[s]=n});function Hy(n){const s=new qa(n),r=py(qa.prototype.request,s);return _.extend(r,qa.prototype,s,{allOwnKeys:!0}),_.extend(r,s,null,{allOwnKeys:!0}),r.create=function(d){return Hy(Va(n,d))},r}const Ze=Hy(xl);Ze.Axios=qa;Ze.CanceledError=Zi;Ze.CancelToken=u4;Ze.isCancel=Oy;Ze.VERSION=Ly;Ze.toFormData=Io;Ze.AxiosError=he;Ze.Cancel=Ze.CanceledError;Ze.all=function(s){return Promise.all(s)};Ze.spread=d4;Ze.isAxiosError=f4;Ze.mergeConfig=Va;Ze.AxiosHeaders=Ut;Ze.formToJSON=n=>Cy(_.isHTMLForm(n)?new FormData(n):n);Ze.getAdapter=Uy.getAdapter;Ze.HttpStatusCode=ff;Ze.default=Ze;const{Axios:KR,AxiosError:ZR,CanceledError:JR,isCancel:IR,CancelToken:WR,VERSION:e8,all:t8,Cancel:n8,isAxiosError:a8,spread:i8,toFormData:s8,AxiosHeaders:l8,HttpStatusCode:r8,formToJSON:o8,getAdapter:c8,mergeConfig:u8}=Ze,h4="https://plant-buddy-38to.onrender.com",Ef=Ze.create({baseURL:h4,timeout:3e4});Ef.interceptors.request.use(n=>(console.log("Making API request:",n.method?.toUpperCase(),n.url),n),n=>(console.error("Request error:",n),Promise.reject(n)));Ef.interceptors.response.use(n=>(console.log("API response received:",n.status,n.data),n),n=>{throw console.error("API Error:",n.response?.data||n.message),n.code==="ECONNABORTED"?new Error("Request timeout. Please try again."):n.response?.status===413?new Error("Image file too large. Please choose a smaller image."):n.response?.status===415?new Error("Unsupported image format. Please use JPG, PNG, or WEBP."):n.response?.status>=500?new Error("Server error. Please try again later."):n.response?.status===400?new Error(n.response.data?.message||"Invalid request. Please check your image."):new Error(n.response?.data?.message||"Network error. Please check your connection.")});const m4=async(n,s="en")=>{try{if(!n)throw new Error("No image file provided");const r=10*1024*1024;if(n.size>r)throw new Error("Image file too large. Please choose an image smaller than 10MB.");if(!["image/jpeg","image/jpg","image/png","image/webp"].includes(n.type))throw new Error("Unsupported image format. Please use JPG, PNG, or WEBP.");const d=new FormData;d.append("image",n),d.append("language",s),console.log("=== Sending to Backend ==="),console.log("Image File Details:",{fileName:n.name,fileSize:n.size,fileType:n.type,lastModified:n.lastModified,language:s}),console.log("FormData contents:");for(let[g,x]of d.entries())x instanceof File?console.log(`${g}:`,{name:x.name,size:x.size,type:x.type}):console.log(`${g}:`,x);const h=(await Ef.post("/predict",d,{headers:{"Content-Type":"multipart/form-data"},timeout:3e4,onUploadProgress:g=>{const x=Math.round(g.loaded*100/g.total);console.log(`Upload Progress: ${x}%`)}})).data;if(!h||typeof h!="object")throw new Error("Invalid response from server");return console.log("Received analysis result:",h),{status:h.status||"unknown",confidence:h.confidence||0,diseaseName:h.diseaseName||h.disease_name||null,healthScore:h.healthScore||h.health_score||Math.floor(h.confidence||0),recommendations:h.recommendations||[],analysisDetails:h.analysisDetails||h.analysis_details||{},timestamp:new Date().toISOString(),...h}}catch(r){throw console.error("Plant analysis error:",r),r.message?.includes("Network Error")||r.code==="ERR_NETWORK"?new Error("Cannot connect to analysis server. Please ensure the backend is running at http://localhost:3000"):r.code==="ECONNREFUSED"?new Error("Connection refused. Please check if the backend server is running."):r.code==="ERR_BLOCKED_BY_CLIENT"?new Error("Request blocked by browser. Please check if ad blockers or security extensions are interfering."):r.name==="AxiosError"&&!r.response?new Error("Network error. Please check your internet connection and ensure the backend server is running at http://localhost:3000"):r}},de=n=>typeof n=="string",rl=()=>{let n,s;const r=new Promise((o,d)=>{n=o,s=d});return r.resolve=n,r.reject=s,r},w0=n=>n==null?"":""+n,g4=(n,s,r)=>{n.forEach(o=>{s[o]&&(r[o]=s[o])})},p4=/###/g,E0=n=>n&&n.indexOf("###")>-1?n.replace(p4,"."):n,$0=n=>!n||de(n),ul=(n,s,r)=>{const o=de(s)?s.split("."):s;let d=0;for(;d<o.length-1;){if($0(n))return{};const f=E0(o[d]);!n[f]&&r&&(n[f]=new r),Object.prototype.hasOwnProperty.call(n,f)?n=n[f]:n={},++d}return $0(n)?{}:{obj:n,k:E0(o[d])}},z0=(n,s,r)=>{const{obj:o,k:d}=ul(n,s,Object);if(o!==void 0||s.length===1){o[d]=r;return}let f=s[s.length-1],h=s.slice(0,s.length-1),g=ul(n,h,Object);for(;g.obj===void 0&&h.length;)f=`${h[h.length-1]}.${f}`,h=h.slice(0,h.length-1),g=ul(n,h,Object),g?.obj&&typeof g.obj[`${g.k}.${f}`]<"u"&&(g.obj=void 0);g.obj[`${g.k}.${f}`]=r},y4=(n,s,r,o)=>{const{obj:d,k:f}=ul(n,s,Object);d[f]=d[f]||[],d[f].push(r)},Lo=(n,s)=>{const{obj:r,k:o}=ul(n,s);if(r&&Object.prototype.hasOwnProperty.call(r,o))return r[o]},x4=(n,s,r)=>{const o=Lo(n,r);return o!==void 0?o:Lo(s,r)},qy=(n,s,r)=>{for(const o in s)o!=="__proto__"&&o!=="constructor"&&(o in n?de(n[o])||n[o]instanceof String||de(s[o])||s[o]instanceof String?r&&(n[o]=s[o]):qy(n[o],s[o],r):n[o]=s[o]);return n},Bi=n=>n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var b4={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const v4=n=>de(n)?n.replace(/[&<>"'\/]/g,s=>b4[s]):n;class S4{constructor(s){this.capacity=s,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(s){const r=this.regExpMap.get(s);if(r!==void 0)return r;const o=new RegExp(s);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(s,o),this.regExpQueue.push(s),o}}const j4=[" ",",","?","!",";"],w4=new S4(20),E4=(n,s,r)=>{s=s||"",r=r||"";const o=j4.filter(h=>s.indexOf(h)<0&&r.indexOf(h)<0);if(o.length===0)return!0;const d=w4.getRegExp(`(${o.map(h=>h==="?"?"\\?":h).join("|")})`);let f=!d.test(n);if(!f){const h=n.indexOf(r);h>0&&!d.test(n.substring(0,h))&&(f=!0)}return f},hf=(n,s,r=".")=>{if(!n)return;if(n[s])return Object.prototype.hasOwnProperty.call(n,s)?n[s]:void 0;const o=s.split(r);let d=n;for(let f=0;f<o.length;){if(!d||typeof d!="object")return;let h,g="";for(let x=f;x<o.length;++x)if(x!==f&&(g+=r),g+=o[x],h=d[g],h!==void 0){if(["string","number","boolean"].indexOf(typeof h)>-1&&x<o.length-1)continue;f+=x-f+1;break}d=h}return d},gl=n=>n?.replace("_","-"),$4={type:"logger",log(n){this.output("log",n)},warn(n){this.output("warn",n)},error(n){this.output("error",n)},output(n,s){console?.[n]?.apply?.(console,s)}};class Bo{constructor(s,r={}){this.init(s,r)}init(s,r={}){this.prefix=r.prefix||"i18next:",this.logger=s||$4,this.options=r,this.debug=r.debug}log(...s){return this.forward(s,"log","",!0)}warn(...s){return this.forward(s,"warn","",!0)}error(...s){return this.forward(s,"error","")}deprecate(...s){return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(s,r,o,d){return d&&!this.debug?null:(de(s[0])&&(s[0]=`${o}${this.prefix} ${s[0]}`),this.logger[r](s))}create(s){return new Bo(this.logger,{prefix:`${this.prefix}:${s}:`,...this.options})}clone(s){return s=s||this.options,s.prefix=s.prefix||this.prefix,new Bo(this.logger,s)}}var wn=new Bo;class tc{constructor(){this.observers={}}on(s,r){return s.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const d=this.observers[o].get(r)||0;this.observers[o].set(r,d+1)}),this}off(s,r){if(this.observers[s]){if(!r){delete this.observers[s];return}this.observers[s].delete(r)}}emit(s,...r){this.observers[s]&&Array.from(this.observers[s].entries()).forEach(([d,f])=>{for(let h=0;h<f;h++)d(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([d,f])=>{for(let h=0;h<f;h++)d.apply(d,[s,...r])})}}class A0 extends tc{constructor(s,r={ns:["translation"],defaultNS:"translation"}){super(),this.data=s||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(s){this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}removeNamespaces(s){const r=this.options.ns.indexOf(s);r>-1&&this.options.ns.splice(r,1)}getResource(s,r,o,d={}){const f=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator,h=d.ignoreJSONStructure!==void 0?d.ignoreJSONStructure:this.options.ignoreJSONStructure;let g;s.indexOf(".")>-1?g=s.split("."):(g=[s,r],o&&(Array.isArray(o)?g.push(...o):de(o)&&f?g.push(...o.split(f)):g.push(o)));const x=Lo(this.data,g);return!x&&!r&&!o&&s.indexOf(".")>-1&&(s=g[0],r=g[1],o=g.slice(2).join(".")),x||!h||!de(o)?x:hf(this.data?.[s]?.[r],o,f)}addResource(s,r,o,d,f={silent:!1}){const h=f.keySeparator!==void 0?f.keySeparator:this.options.keySeparator;let g=[s,r];o&&(g=g.concat(h?o.split(h):o)),s.indexOf(".")>-1&&(g=s.split("."),d=r,r=g[1]),this.addNamespaces(r),z0(this.data,g,d),f.silent||this.emit("added",s,r,o,d)}addResources(s,r,o,d={silent:!1}){for(const f in o)(de(o[f])||Array.isArray(o[f]))&&this.addResource(s,r,f,o[f],{silent:!0});d.silent||this.emit("added",s,r,o)}addResourceBundle(s,r,o,d,f,h={silent:!1,skipCopy:!1}){let g=[s,r];s.indexOf(".")>-1&&(g=s.split("."),d=o,o=r,r=g[1]),this.addNamespaces(r);let x=Lo(this.data,g)||{};h.skipCopy||(o=JSON.parse(JSON.stringify(o))),d?qy(x,o,f):x={...x,...o},z0(this.data,g,x),h.silent||this.emit("added",s,r,o)}removeResourceBundle(s,r){this.hasResourceBundle(s,r)&&delete this.data[s][r],this.removeNamespaces(r),this.emit("removed",s,r)}hasResourceBundle(s,r){return this.getResource(s,r)!==void 0}getResourceBundle(s,r){return r||(r=this.options.defaultNS),this.getResource(s,r)}getDataByLanguage(s){return this.data[s]}hasLanguageSomeTranslations(s){const r=this.getDataByLanguage(s);return!!(r&&Object.keys(r)||[]).find(d=>r[d]&&Object.keys(r[d]).length>0)}toJSON(){return this.data}}var Gy={processors:{},addPostProcessor(n){this.processors[n.name]=n},handle(n,s,r,o,d){return n.forEach(f=>{s=this.processors[f]?.process(s,r,o,d)??s}),s}};const R0={},T0=n=>!de(n)&&typeof n!="boolean"&&typeof n!="number";class Ho extends tc{constructor(s,r={}){super(),g4(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],s,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=wn.create("translator")}changeLanguage(s){s&&(this.language=s)}exists(s,r={interpolation:{}}){const o={...r};return s==null?!1:this.resolve(s,o)?.res!==void 0}extractFromKey(s,r){let o=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const d=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let f=r.ns||this.options.defaultNS||[];const h=o&&s.indexOf(o)>-1,g=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!E4(s,o,d);if(h&&!g){const x=s.match(this.interpolator.nestingRegexp);if(x&&x.length>0)return{key:s,namespaces:de(f)?[f]:f};const p=s.split(o);(o!==d||o===d&&this.options.ns.indexOf(p[0])>-1)&&(f=p.shift()),s=p.join(d)}return{key:s,namespaces:de(f)?[f]:f}}translate(s,r,o){let d=typeof r=="object"?{...r}:r;if(typeof d!="object"&&this.options.overloadTranslationOptionHandler&&(d=this.options.overloadTranslationOptionHandler(arguments)),typeof options=="object"&&(d={...d}),d||(d={}),s==null)return"";Array.isArray(s)||(s=[String(s)]);const f=d.returnDetails!==void 0?d.returnDetails:this.options.returnDetails,h=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator,{key:g,namespaces:x}=this.extractFromKey(s[s.length-1],d),p=x[x.length-1];let b=d.nsSeparator!==void 0?d.nsSeparator:this.options.nsSeparator;b===void 0&&(b=":");const v=d.lng||this.language,z=d.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return z?f?{res:`${p}${b}${g}`,usedKey:g,exactUsedKey:g,usedLng:v,usedNS:p,usedParams:this.getUsedParamsDetails(d)}:`${p}${b}${g}`:f?{res:g,usedKey:g,exactUsedKey:g,usedLng:v,usedNS:p,usedParams:this.getUsedParamsDetails(d)}:g;const C=this.resolve(s,d);let j=C?.res;const A=C?.usedKey||g,T=C?.exactUsedKey||g,G=["[object Number]","[object Function]","[object RegExp]"],X=d.joinArrays!==void 0?d.joinArrays:this.options.joinArrays,V=!this.i18nFormat||this.i18nFormat.handleAsObject,L=d.count!==void 0&&!de(d.count),P=Ho.hasDefaultValue(d),Q=L?this.pluralResolver.getSuffix(v,d.count,d):"",B=d.ordinal&&L?this.pluralResolver.getSuffix(v,d.count,{ordinal:!1}):"",re=L&&!d.ordinal&&d.count===0,Se=re&&d[`defaultValue${this.options.pluralSeparator}zero`]||d[`defaultValue${Q}`]||d[`defaultValue${B}`]||d.defaultValue;let xe=j;V&&!j&&P&&(xe=Se);const Ye=T0(xe),Ne=Object.prototype.toString.apply(xe);if(V&&xe&&Ye&&G.indexOf(Ne)<0&&!(de(X)&&Array.isArray(xe))){if(!d.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const Oe=this.options.returnedObjectHandler?this.options.returnedObjectHandler(A,xe,{...d,ns:x}):`key '${g} (${this.language})' returned an object instead of string.`;return f?(C.res=Oe,C.usedParams=this.getUsedParamsDetails(d),C):Oe}if(h){const Oe=Array.isArray(xe),Be=Oe?[]:{},_e=Oe?T:A;for(const k in xe)if(Object.prototype.hasOwnProperty.call(xe,k)){const K=`${_e}${h}${k}`;P&&!j?Be[k]=this.translate(K,{...d,defaultValue:T0(Se)?Se[k]:void 0,joinArrays:!1,ns:x}):Be[k]=this.translate(K,{...d,joinArrays:!1,ns:x}),Be[k]===K&&(Be[k]=xe[k])}j=Be}}else if(V&&de(X)&&Array.isArray(j))j=j.join(X),j&&(j=this.extendTranslation(j,s,d,o));else{let Oe=!1,Be=!1;!this.isValidLookup(j)&&P&&(Oe=!0,j=Se),this.isValidLookup(j)||(Be=!0,j=g);const k=(d.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&Be?void 0:j,K=P&&Se!==j&&this.options.updateMissing;if(Be||Oe||K){if(this.logger.log(K?"updateKey":"missingKey",v,p,g,K?Se:j),h){const U=this.resolve(g,{...d,keySeparator:!1});U&&U.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,d.lng||this.language);if(this.options.saveMissingTo==="fallback"&&se&&se[0])for(let U=0;U<se.length;U++)I.push(se[U]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(d.lng||this.language):I.push(d.lng||this.language);const E=(U,Z,J)=>{const ee=P&&J!==j?J:k;this.options.missingKeyHandler?this.options.missingKeyHandler(U,p,Z,ee,K,d):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(U,p,Z,ee,K,d),this.emit("missingKey",U,p,Z,j)};this.options.saveMissing&&(this.options.saveMissingPlurals&&L?I.forEach(U=>{const Z=this.pluralResolver.getSuffixes(U,d);re&&d[`defaultValue${this.options.pluralSeparator}zero`]&&Z.indexOf(`${this.options.pluralSeparator}zero`)<0&&Z.push(`${this.options.pluralSeparator}zero`),Z.forEach(J=>{E([U],g+J,d[`defaultValue${J}`]||Se)})}):E(I,g,Se))}j=this.extendTranslation(j,s,d,C,o),Be&&j===g&&this.options.appendNamespaceToMissingKey&&(j=`${p}${b}${g}`),(Be||Oe)&&this.options.parseMissingKeyHandler&&(j=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}${b}${g}`:g,Oe?j:void 0,d))}return f?(C.res=j,C.usedParams=this.getUsedParamsDetails(d),C):j}extendTranslation(s,r,o,d,f){if(this.i18nFormat?.parse)s=this.i18nFormat.parse(s,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||d.usedLng,d.usedNS,d.usedKey,{resolved:d});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const x=de(s)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(x){const v=s.match(this.interpolator.nestingRegexp);p=v&&v.length}let b=o.replace&&!de(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),s=this.interpolator.interpolate(s,b,o.lng||this.language||d.usedLng,o),x){const v=s.match(this.interpolator.nestingRegexp),z=v&&v.length;p<z&&(o.nest=!1)}!o.lng&&d&&d.res&&(o.lng=this.language||d.usedLng),o.nest!==!1&&(s=this.interpolator.nest(s,(...v)=>f?.[0]===v[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${r[0]}`),null):this.translate(...v,r),o)),o.interpolation&&this.interpolator.reset()}const h=o.postProcess||this.options.postProcess,g=de(h)?[h]:h;return s!=null&&g?.length&&o.applyPostProcessor!==!1&&(s=Gy.handle(g,s,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...d,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),s}resolve(s,r={}){let o,d,f,h,g;return de(s)&&(s=[s]),s.forEach(x=>{if(this.isValidLookup(o))return;const p=this.extractFromKey(x,r),b=p.key;d=b;let v=p.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const z=r.count!==void 0&&!de(r.count),C=z&&!r.ordinal&&r.count===0,j=r.context!==void 0&&(de(r.context)||typeof r.context=="number")&&r.context!=="",A=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);v.forEach(T=>{this.isValidLookup(o)||(g=T,!R0[`${A[0]}-${T}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(g)&&(R0[`${A[0]}-${T}`]=!0,this.logger.warn(`key "${d}" for languages "${A.join(", ")}" won't get resolved as namespace "${g}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),A.forEach(G=>{if(this.isValidLookup(o))return;h=G;const X=[b];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(X,b,G,T,r);else{let L;z&&(L=this.pluralResolver.getSuffix(G,r.count,r));const P=`${this.options.pluralSeparator}zero`,Q=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(z&&(X.push(b+L),r.ordinal&&L.indexOf(Q)===0&&X.push(b+L.replace(Q,this.options.pluralSeparator)),C&&X.push(b+P)),j){const B=`${b}${this.options.contextSeparator}${r.context}`;X.push(B),z&&(X.push(B+L),r.ordinal&&L.indexOf(Q)===0&&X.push(B+L.replace(Q,this.options.pluralSeparator)),C&&X.push(B+P))}}let V;for(;V=X.pop();)this.isValidLookup(o)||(f=V,o=this.getResource(G,T,V,r))}))})}),{res:o,usedKey:d,exactUsedKey:f,usedLng:h,usedNS:g}}isValidLookup(s){return s!==void 0&&!(!this.options.returnNull&&s===null)&&!(!this.options.returnEmptyString&&s==="")}getResource(s,r,o,d={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(s,r,o,d):this.resourceStore.getResource(s,r,o,d)}getUsedParamsDetails(s={}){const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=s.replace&&!de(s.replace);let d=o?s.replace:s;if(o&&typeof s.count<"u"&&(d.count=s.count),this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),!o){d={...d};for(const f of r)delete d[f]}return d}static hasDefaultValue(s){const r="defaultValue";for(const o in s)if(Object.prototype.hasOwnProperty.call(s,o)&&r===o.substring(0,r.length)&&s[o]!==void 0)return!0;return!1}}class C0{constructor(s){this.options=s,this.supportedLngs=this.options.supportedLngs||!1,this.logger=wn.create("languageUtils")}getScriptPartFromCode(s){if(s=gl(s),!s||s.indexOf("-")<0)return null;const r=s.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(s){if(s=gl(s),!s||s.indexOf("-")<0)return s;const r=s.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(s){if(de(s)&&s.indexOf("-")>-1){let r;try{r=Intl.getCanonicalLocales(s)[0]}catch{}return r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r||(this.options.lowerCaseLng?s.toLowerCase():s)}return this.options.cleanCode||this.options.lowerCaseLng?s.toLowerCase():s}isSupportedCode(s){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(s=this.getLanguagePartFromCode(s)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(s)>-1}getBestMatchFromCodes(s){if(!s)return null;let r;return s.forEach(o=>{if(r)return;const d=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(d))&&(r=d)}),!r&&this.options.supportedLngs&&s.forEach(o=>{if(r)return;const d=this.getScriptPartFromCode(o);if(this.isSupportedCode(d))return r=d;const f=this.getLanguagePartFromCode(o);if(this.isSupportedCode(f))return r=f;r=this.options.supportedLngs.find(h=>{if(h===f)return h;if(!(h.indexOf("-")<0&&f.indexOf("-")<0)&&(h.indexOf("-")>0&&f.indexOf("-")<0&&h.substring(0,h.indexOf("-"))===f||h.indexOf(f)===0&&f.length>1))return h})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(s,r){if(!s)return[];if(typeof s=="function"&&(s=s(r)),de(s)&&(s=[s]),Array.isArray(s))return s;if(!r)return s.default||[];let o=s[r];return o||(o=s[this.getScriptPartFromCode(r)]),o||(o=s[this.formatLanguageCode(r)]),o||(o=s[this.getLanguagePartFromCode(r)]),o||(o=s.default),o||[]}toResolveHierarchy(s,r){const o=this.getFallbackCodes((r===!1?[]:r)||this.options.fallbackLng||[],s),d=[],f=h=>{h&&(this.isSupportedCode(h)?d.push(h):this.logger.warn(`rejecting language code not found in supportedLngs: ${h}`))};return de(s)&&(s.indexOf("-")>-1||s.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&f(this.formatLanguageCode(s)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&f(this.getScriptPartFromCode(s)),this.options.load!=="currentOnly"&&f(this.getLanguagePartFromCode(s))):de(s)&&f(this.formatLanguageCode(s)),o.forEach(h=>{d.indexOf(h)<0&&f(this.formatLanguageCode(h))}),d}}const O0={zero:0,one:1,two:2,few:3,many:4,other:5},D0={select:n=>n===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class z4{constructor(s,r={}){this.languageUtils=s,this.options=r,this.logger=wn.create("pluralResolver"),this.pluralRulesCache={}}addRule(s,r){this.rules[s]=r}clearCache(){this.pluralRulesCache={}}getRule(s,r={}){const o=gl(s==="dev"?"en":s),d=r.ordinal?"ordinal":"cardinal",f=JSON.stringify({cleanedCode:o,type:d});if(f in this.pluralRulesCache)return this.pluralRulesCache[f];let h;try{h=new Intl.PluralRules(o,{type:d})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),D0;if(!s.match(/-|_/))return D0;const x=this.languageUtils.getLanguagePartFromCode(s);h=this.getRule(x,r)}return this.pluralRulesCache[f]=h,h}needsPlural(s,r={}){let o=this.getRule(s,r);return o||(o=this.getRule("dev",r)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(s,r,o={}){return this.getSuffixes(s,o).map(d=>`${r}${d}`)}getSuffixes(s,r={}){let o=this.getRule(s,r);return o||(o=this.getRule("dev",r)),o?o.resolvedOptions().pluralCategories.sort((d,f)=>O0[d]-O0[f]).map(d=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${d}`):[]}getSuffix(s,r,o={}){const d=this.getRule(s,o);return d?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${d.select(r)}`:(this.logger.warn(`no plural rule found for: ${s}`),this.getSuffix("dev",r,o))}}const k0=(n,s,r,o=".",d=!0)=>{let f=x4(n,s,r);return!f&&d&&de(r)&&(f=hf(n,r,o),f===void 0&&(f=hf(s,r,o))),f},qd=n=>n.replace(/\$/g,"$$$$");class A4{constructor(s={}){this.logger=wn.create("interpolator"),this.options=s,this.format=s?.interpolation?.format||(r=>r),this.init(s)}init(s={}){s.interpolation||(s.interpolation={escapeValue:!0});const{escape:r,escapeValue:o,useRawValueToEscape:d,prefix:f,prefixEscaped:h,suffix:g,suffixEscaped:x,formatSeparator:p,unescapeSuffix:b,unescapePrefix:v,nestingPrefix:z,nestingPrefixEscaped:C,nestingSuffix:j,nestingSuffixEscaped:A,nestingOptionsSeparator:T,maxReplaces:G,alwaysFormat:X}=s.interpolation;this.escape=r!==void 0?r:v4,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=d!==void 0?d:!1,this.prefix=f?Bi(f):h||"{{",this.suffix=g?Bi(g):x||"}}",this.formatSeparator=p||",",this.unescapePrefix=b?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":b||"",this.nestingPrefix=z?Bi(z):C||Bi("$t("),this.nestingSuffix=j?Bi(j):A||Bi(")"),this.nestingOptionsSeparator=T||",",this.maxReplaces=G||1e3,this.alwaysFormat=X!==void 0?X:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const s=(r,o)=>r?.source===o?(r.lastIndex=0,r):new RegExp(o,"g");this.regexp=s(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=s(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=s(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(s,r,o,d){let f,h,g;const x=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},p=C=>{if(C.indexOf(this.formatSeparator)<0){const G=k0(r,x,C,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(G,void 0,o,{...d,...r,interpolationkey:C}):G}const j=C.split(this.formatSeparator),A=j.shift().trim(),T=j.join(this.formatSeparator).trim();return this.format(k0(r,x,A,this.options.keySeparator,this.options.ignoreJSONStructure),T,o,{...d,...r,interpolationkey:A})};this.resetRegExp();const b=d?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=d?.interpolation?.skipOnVariables!==void 0?d.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:C=>qd(C)},{regex:this.regexp,safeValue:C=>this.escapeValue?qd(this.escape(C)):qd(C)}].forEach(C=>{for(g=0;f=C.regex.exec(s);){const j=f[1].trim();if(h=p(j),h===void 0)if(typeof b=="function"){const T=b(s,f,d);h=de(T)?T:""}else if(d&&Object.prototype.hasOwnProperty.call(d,j))h="";else if(v){h=f[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${s}`),h="";else!de(h)&&!this.useRawValueToEscape&&(h=w0(h));const A=C.safeValue(h);if(s=s.replace(f[0],A),v?(C.regex.lastIndex+=h.length,C.regex.lastIndex-=f[0].length):C.regex.lastIndex=0,g++,g>=this.maxReplaces)break}}),s}nest(s,r,o={}){let d,f,h;const g=(x,p)=>{const b=this.nestingOptionsSeparator;if(x.indexOf(b)<0)return x;const v=x.split(new RegExp(`${b}[ ]*{`));let z=`{${v[1]}`;x=v[0],z=this.interpolate(z,h);const C=z.match(/'/g),j=z.match(/"/g);((C?.length??0)%2===0&&!j||j.length%2!==0)&&(z=z.replace(/'/g,'"'));try{h=JSON.parse(z),p&&(h={...p,...h})}catch(A){return this.logger.warn(`failed parsing options string in nesting for key ${x}`,A),`${x}${b}${z}`}return h.defaultValue&&h.defaultValue.indexOf(this.prefix)>-1&&delete h.defaultValue,x};for(;d=this.nestingRegexp.exec(s);){let x=[];h={...o},h=h.replace&&!de(h.replace)?h.replace:h,h.applyPostProcessor=!1,delete h.defaultValue;let p=!1;if(d[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(d[1])){const b=d[1].split(this.formatSeparator).map(v=>v.trim());d[1]=b.shift(),x=b,p=!0}if(f=r(g.call(this,d[1].trim(),h),h),f&&d[0]===s&&!de(f))return f;de(f)||(f=w0(f)),f||(this.logger.warn(`missed to resolve ${d[1]} for nesting ${s}`),f=""),p&&(f=x.reduce((b,v)=>this.format(b,v,o.lng,{...o,interpolationkey:d[1].trim()}),f.trim())),s=s.replace(d[0],f),this.regexp.lastIndex=0}return s}}const R4=n=>{let s=n.toLowerCase().trim();const r={};if(n.indexOf("(")>-1){const o=n.split("(");s=o[0].toLowerCase().trim();const d=o[1].substring(0,o[1].length-1);s==="currency"&&d.indexOf(":")<0?r.currency||(r.currency=d.trim()):s==="relativetime"&&d.indexOf(":")<0?r.range||(r.range=d.trim()):d.split(";").forEach(h=>{if(h){const[g,...x]=h.split(":"),p=x.join(":").trim().replace(/^'+|'+$/g,""),b=g.trim();r[b]||(r[b]=p),p==="false"&&(r[b]=!1),p==="true"&&(r[b]=!0),isNaN(p)||(r[b]=parseInt(p,10))}})}return{formatName:s,formatOptions:r}},M0=n=>{const s={};return(r,o,d)=>{let f=d;d&&d.interpolationkey&&d.formatParams&&d.formatParams[d.interpolationkey]&&d[d.interpolationkey]&&(f={...f,[d.interpolationkey]:void 0});const h=o+JSON.stringify(f);let g=s[h];return g||(g=n(gl(o),d),s[h]=g),g(r)}},T4=n=>(s,r,o)=>n(gl(r),o)(s);class C4{constructor(s={}){this.logger=wn.create("formatter"),this.options=s,this.init(s)}init(s,r={interpolation:{}}){this.formatSeparator=r.interpolation.formatSeparator||",";const o=r.cacheInBuiltFormats?M0:T4;this.formats={number:o((d,f)=>{const h=new Intl.NumberFormat(d,{...f});return g=>h.format(g)}),currency:o((d,f)=>{const h=new Intl.NumberFormat(d,{...f,style:"currency"});return g=>h.format(g)}),datetime:o((d,f)=>{const h=new Intl.DateTimeFormat(d,{...f});return g=>h.format(g)}),relativetime:o((d,f)=>{const h=new Intl.RelativeTimeFormat(d,{...f});return g=>h.format(g,f.range||"day")}),list:o((d,f)=>{const h=new Intl.ListFormat(d,{...f});return g=>h.format(g)})}}add(s,r){this.formats[s.toLowerCase().trim()]=r}addCached(s,r){this.formats[s.toLowerCase().trim()]=M0(r)}format(s,r,o,d={}){const f=r.split(this.formatSeparator);if(f.length>1&&f[0].indexOf("(")>1&&f[0].indexOf(")")<0&&f.find(g=>g.indexOf(")")>-1)){const g=f.findIndex(x=>x.indexOf(")")>-1);f[0]=[f[0],...f.splice(1,g)].join(this.formatSeparator)}return f.reduce((g,x)=>{const{formatName:p,formatOptions:b}=R4(x);if(this.formats[p]){let v=g;try{const z=d?.formatParams?.[d.interpolationkey]||{},C=z.locale||z.lng||d.locale||d.lng||o;v=this.formats[p](g,C,{...b,...d,...z})}catch(z){this.logger.warn(z)}return v}else this.logger.warn(`there was no format function for ${p}`);return g},s)}}const O4=(n,s)=>{n.pending[s]!==void 0&&(delete n.pending[s],n.pendingCount--)};class D4 extends tc{constructor(s,r,o,d={}){super(),this.backend=s,this.store=r,this.services=o,this.languageUtils=o.languageUtils,this.options=d,this.logger=wn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=d.maxParallelReads||10,this.readingCalls=0,this.maxRetries=d.maxRetries>=0?d.maxRetries:5,this.retryTimeout=d.retryTimeout>=1?d.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,d.backend,d)}queueLoad(s,r,o,d){const f={},h={},g={},x={};return s.forEach(p=>{let b=!0;r.forEach(v=>{const z=`${p}|${v}`;!o.reload&&this.store.hasResourceBundle(p,v)?this.state[z]=2:this.state[z]<0||(this.state[z]===1?h[z]===void 0&&(h[z]=!0):(this.state[z]=1,b=!1,h[z]===void 0&&(h[z]=!0),f[z]===void 0&&(f[z]=!0),x[v]===void 0&&(x[v]=!0)))}),b||(g[p]=!0)}),(Object.keys(f).length||Object.keys(h).length)&&this.queue.push({pending:h,pendingCount:Object.keys(h).length,loaded:{},errors:[],callback:d}),{toLoad:Object.keys(f),pending:Object.keys(h),toLoadLanguages:Object.keys(g),toLoadNamespaces:Object.keys(x)}}loaded(s,r,o){const d=s.split("|"),f=d[0],h=d[1];r&&this.emit("failedLoading",f,h,r),!r&&o&&this.store.addResourceBundle(f,h,o,void 0,void 0,{skipCopy:!0}),this.state[s]=r?-1:2,r&&o&&(this.state[s]=0);const g={};this.queue.forEach(x=>{y4(x.loaded,[f],h),O4(x,s),r&&x.errors.push(r),x.pendingCount===0&&!x.done&&(Object.keys(x.loaded).forEach(p=>{g[p]||(g[p]={});const b=x.loaded[p];b.length&&b.forEach(v=>{g[p][v]===void 0&&(g[p][v]=!0)})}),x.done=!0,x.errors.length?x.callback(x.errors):x.callback())}),this.emit("loaded",g),this.queue=this.queue.filter(x=>!x.done)}read(s,r,o,d=0,f=this.retryTimeout,h){if(!s.length)return h(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:s,ns:r,fcName:o,tried:d,wait:f,callback:h});return}this.readingCalls++;const g=(p,b)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(p&&b&&d<this.maxRetries){setTimeout(()=>{this.read.call(this,s,r,o,d+1,f*2,h)},f);return}h(p,b)},x=this.backend[o].bind(this.backend);if(x.length===2){try{const p=x(s,r);p&&typeof p.then=="function"?p.then(b=>g(null,b)).catch(g):g(null,p)}catch(p){g(p)}return}return x(s,r,g)}prepareLoading(s,r,o={},d){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();de(s)&&(s=this.languageUtils.toResolveHierarchy(s)),de(r)&&(r=[r]);const f=this.queueLoad(s,r,o,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(h=>{this.loadOne(h)})}load(s,r,o){this.prepareLoading(s,r,{},o)}reload(s,r,o){this.prepareLoading(s,r,{reload:!0},o)}loadOne(s,r=""){const o=s.split("|"),d=o[0],f=o[1];this.read(d,f,"read",void 0,void 0,(h,g)=>{h&&this.logger.warn(`${r}loading namespace ${f} for language ${d} failed`,h),!h&&g&&this.logger.log(`${r}loaded namespace ${f} for language ${d}`,g),this.loaded(s,h,g)})}saveMissing(s,r,o,d,f,h={},g=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const x={...h,isUpdate:f},p=this.backend.create.bind(this.backend);if(p.length<6)try{let b;p.length===5?b=p(s,r,o,d,x):b=p(s,r,o,d),b&&typeof b.then=="function"?b.then(v=>g(null,v)).catch(g):g(null,b)}catch(b){g(b)}else p(s,r,o,d,g,x)}!s||!s[0]||this.store.addResource(s[0],r,o,d)}}}const N0=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:n=>{let s={};if(typeof n[1]=="object"&&(s=n[1]),de(n[1])&&(s.defaultValue=n[1]),de(n[2])&&(s.tDescription=n[2]),typeof n[2]=="object"||typeof n[3]=="object"){const r=n[3]||n[2];Object.keys(r).forEach(o=>{s[o]=r[o]})}return s},interpolation:{escapeValue:!0,format:n=>n,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),_0=n=>(de(n.ns)&&(n.ns=[n.ns]),de(n.fallbackLng)&&(n.fallbackLng=[n.fallbackLng]),de(n.fallbackNS)&&(n.fallbackNS=[n.fallbackNS]),n.supportedLngs?.indexOf?.("cimode")<0&&(n.supportedLngs=n.supportedLngs.concat(["cimode"])),typeof n.initImmediate=="boolean"&&(n.initAsync=n.initImmediate),n),yo=()=>{},k4=n=>{Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(r=>{typeof n[r]=="function"&&(n[r]=n[r].bind(n))})};class pl extends tc{constructor(s={},r){if(super(),this.options=_0(s),this.services={},this.logger=wn,this.modules={external:[]},k4(this),r&&!this.isInitialized&&!s.isClone){if(!this.options.initAsync)return this.init(s,r),this;setTimeout(()=>{this.init(s,r)},0)}}init(s={},r){this.isInitializing=!0,typeof s=="function"&&(r=s,s={}),s.defaultNS==null&&s.ns&&(de(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const o=N0();this.options={...o,...this.options,..._0(s)},this.options.interpolation={...o.interpolation,...this.options.interpolation},s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const d=p=>p?typeof p=="function"?new p:p:null;if(!this.options.isClone){this.modules.logger?wn.init(d(this.modules.logger),this.options):wn.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:p=C4;const b=new C0(this.options);this.store=new A0(this.options.resources,this.options);const v=this.services;v.logger=wn,v.resourceStore=this.store,v.languageUtils=b,v.pluralResolver=new z4(b,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=d(p),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new A4(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new D4(d(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(z,...C)=>{this.emit(z,...C)}),this.modules.languageDetector&&(v.languageDetector=d(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=d(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Ho(this.services,this.options),this.translator.on("*",(z,...C)=>{this.emit(z,...C)}),this.modules.external.forEach(z=>{z.init&&z.init(this)})}if(this.format=this.options.interpolation.format,r||(r=yo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=(...b)=>this.store[p](...b)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=(...b)=>(this.store[p](...b),this)});const g=rl(),x=()=>{const p=(b,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),g.resolve(v),r(b,v)};if(this.languages&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initAsync?x():setTimeout(x,0),g}loadResources(s,r=yo){let o=r;const d=de(s)?s:this.language;if(typeof s=="function"&&(o=s),!this.options.resources||this.options.partialBundledLanguages){if(d?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const f=[],h=g=>{if(!g||g==="cimode")return;this.services.languageUtils.toResolveHierarchy(g).forEach(p=>{p!=="cimode"&&f.indexOf(p)<0&&f.push(p)})};d?h(d):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(x=>h(x)),this.options.preload?.forEach?.(g=>h(g)),this.services.backendConnector.load(f,this.options.ns,g=>{!g&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(g)})}else o(null)}reloadResources(s,r,o){const d=rl();return typeof s=="function"&&(o=s,s=void 0),typeof r=="function"&&(o=r,r=void 0),s||(s=this.languages),r||(r=this.options.ns),o||(o=yo),this.services.backendConnector.reload(s,r,f=>{d.resolve(),o(f)}),d}use(s){if(!s)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!s.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return s.type==="backend"&&(this.modules.backend=s),(s.type==="logger"||s.log&&s.warn&&s.error)&&(this.modules.logger=s),s.type==="languageDetector"&&(this.modules.languageDetector=s),s.type==="i18nFormat"&&(this.modules.i18nFormat=s),s.type==="postProcessor"&&Gy.addPostProcessor(s),s.type==="formatter"&&(this.modules.formatter=s),s.type==="3rdParty"&&this.modules.external.push(s),this}setResolvedLanguage(s){if(!(!s||!this.languages)&&!(["cimode","dev"].indexOf(s)>-1)){for(let r=0;r<this.languages.length;r++){const o=this.languages[r];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(s)<0&&this.store.hasLanguageSomeTranslations(s)&&(this.resolvedLanguage=s,this.languages.unshift(s))}}changeLanguage(s,r){this.isLanguageChangingTo=s;const o=rl();this.emit("languageChanging",s);const d=g=>{this.language=g,this.languages=this.services.languageUtils.toResolveHierarchy(g),this.resolvedLanguage=void 0,this.setResolvedLanguage(g)},f=(g,x)=>{x?this.isLanguageChangingTo===s&&(d(x),this.translator.changeLanguage(x),this.isLanguageChangingTo=void 0,this.emit("languageChanged",x),this.logger.log("languageChanged",x)):this.isLanguageChangingTo=void 0,o.resolve((...p)=>this.t(...p)),r&&r(g,(...p)=>this.t(...p))},h=g=>{!s&&!g&&this.services.languageDetector&&(g=[]);const x=de(g)?g:g&&g[0],p=this.store.hasLanguageSomeTranslations(x)?x:this.services.languageUtils.getBestMatchFromCodes(de(g)?[g]:g);p&&(this.language||d(p),this.translator.language||this.translator.changeLanguage(p),this.services.languageDetector?.cacheUserLanguage?.(p)),this.loadResources(p,b=>{f(b,p)})};return!s&&this.services.languageDetector&&!this.services.languageDetector.async?h(this.services.languageDetector.detect()):!s&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(h):this.services.languageDetector.detect(h):h(s),o}getFixedT(s,r,o){const d=(f,h,...g)=>{let x;typeof h!="object"?x=this.options.overloadTranslationOptionHandler([f,h].concat(g)):x={...h},x.lng=x.lng||d.lng,x.lngs=x.lngs||d.lngs,x.ns=x.ns||d.ns,x.keyPrefix!==""&&(x.keyPrefix=x.keyPrefix||o||d.keyPrefix);const p=this.options.keySeparator||".";let b;return x.keyPrefix&&Array.isArray(f)?b=f.map(v=>`${x.keyPrefix}${p}${v}`):b=x.keyPrefix?`${x.keyPrefix}${p}${f}`:f,this.t(b,x)};return de(s)?d.lng=s:d.lngs=s,d.ns=r,d.keyPrefix=o,d}t(...s){return this.translator?.translate(...s)}exists(...s){return this.translator?.exists(...s)}setDefaultNamespace(s){this.options.defaultNS=s}hasLoadedNamespace(s,r={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=r.lng||this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const h=(g,x)=>{const p=this.services.backendConnector.state[`${g}|${x}`];return p===-1||p===0||p===2};if(r.precheck){const g=r.precheck(this,h);if(g!==void 0)return g}return!!(this.hasResourceBundle(o,s)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||h(o,s)&&(!d||h(f,s)))}loadNamespaces(s,r){const o=rl();return this.options.ns?(de(s)&&(s=[s]),s.forEach(d=>{this.options.ns.indexOf(d)<0&&this.options.ns.push(d)}),this.loadResources(d=>{o.resolve(),r&&r(d)}),o):(r&&r(),Promise.resolve())}loadLanguages(s,r){const o=rl();de(s)&&(s=[s]);const d=this.options.preload||[],f=s.filter(h=>d.indexOf(h)<0&&this.services.languageUtils.isSupportedCode(h));return f.length?(this.options.preload=d.concat(f),this.loadResources(h=>{o.resolve(),r&&r(h)}),o):(r&&r(),Promise.resolve())}dir(s){if(s||(s=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!s)return"rtl";const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new C0(N0());return r.indexOf(o.getLanguagePartFromCode(s))>-1||s.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(s={},r){return new pl(s,r)}cloneInstance(s={},r=yo){const o=s.forkResourceStore;o&&delete s.forkResourceStore;const d={...this.options,...s,isClone:!0},f=new pl(d);if((s.debug!==void 0||s.prefix!==void 0)&&(f.logger=f.logger.clone(s)),["store","services","language"].forEach(g=>{f[g]=this[g]}),f.services={...this.services},f.services.utils={hasLoadedNamespace:f.hasLoadedNamespace.bind(f)},o){const g=Object.keys(this.store.data).reduce((x,p)=>(x[p]={...this.store.data[p]},x[p]=Object.keys(x[p]).reduce((b,v)=>(b[v]={...x[p][v]},b),x[p]),x),{});f.store=new A0(g,d),f.services.resourceStore=f.store}return f.translator=new Ho(f.services,d),f.translator.on("*",(g,...x)=>{f.emit(g,...x)}),f.init(d,r),f.translator.options=d,f.translator.backendConnector.services.utils={hasLoadedNamespace:f.hasLoadedNamespace.bind(f)},f}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const jt=pl.createInstance();jt.createInstance=pl.createInstance;jt.createInstance;jt.dir;jt.init;jt.loadResources;jt.reloadResources;jt.use;jt.changeLanguage;jt.getFixedT;jt.t;jt.exists;jt.setDefaultNamespace;jt.hasLoadedNamespace;jt.loadNamespaces;jt.loadLanguages;const M4="Plant Buddy",N4="AI-Powered Plant Disease Detection",_4="Welcome to Plant Buddy",U4="Detect plant diseases quickly and accurately using our advanced AI technology. Take a photo or upload an image to get instant results.",L4="Scan with Camera",B4="Upload Image",H4="Take Photo",q4="Retake Photo",G4="Analyze Image",P4="Analyzing...",Y4="Analysis Results",V4="Health Status",X4="Confidence",F4="Recommendations",Q4="Healthy",K4="Disease Detected",Z4="Unknown",J4="No file selected",I4="Select File",W4="Supported formats: JPG, PNG, WEBP",eE="Camera not supported by your browser",tE="Camera permission denied",nE="Error analyzing image. Please try again.",aE="Error uploading image. Please try again.",iE="Back",sE="Try Again",lE="Language",rE="About",oE="Features",cE="Menu",uE="Your Smart Companion for Healthy Gardens",dE="Key Features",fE="Smart Disease Detection",hE="Advanced AI-powered image recognition identifies diseases from leaf and fruit photos with high accuracy.",mE="Comprehensive Plant Database",gE="Covers major diseases affecting tomato, potato, citrus, mango, apple, and many other common plants.",pE="Prevention & Treatment",yE="Get tailored organic and integrated pest management recommendations to prevent disease spread.",xE="For Everyone",bE="Perfect for hobbyists, small-scale farmers, gardeners, and anyone passionate about plant health.",vE="What Plant Buddy Helps You Do",SE="Common Plant Diseases We Detect",jE="Perfect For",wE="Home Gardeners",EE="Keep your backyard garden, indoor plants, and flower beds healthy and thriving.",$E="Small-Scale Farmers",zE="Protect your crops and increase yields with early disease detection and treatment.",AE="Orchard Owners",RE="Maintain healthy fruit trees and prevent disease spread across your orchard.",TE="Get Started Now",CE="Instant Disease Detection",OE="Comprehensive Disease Profiles",DE="Interactive Lifecycle Visualizations",kE="Personalized Treatment Plans",ME="Disease Library & Search",NE="Upload Your Photo",_E="AI Analysis",UE="Get Diagnosis",LE="Confidence Score",BE="Symptom Gallery",HE="Lifecycle Diagrams",qE="Environmental Data",GE="Timeline Animation",PE="Key Milestones",YE="Organic Solutions",VE="Treatment Scheduler",XE="Smart Search",FE="Comprehensive Database",QE="Start Using Plant Buddy",KE={title:M4,subtitle:N4,welcome:_4,description:U4,scanWithCamera:L4,uploadImage:B4,takePhoto:H4,retakePhoto:q4,analyzeImage:G4,analyzing:P4,results:Y4,healthStatus:V4,confidence:X4,recommendations:F4,healthy:Q4,diseased:K4,unknown:Z4,noFileSelected:J4,selectFile:I4,supportedFormats:W4,cameraNotSupported:eE,cameraPermissionDenied:tE,analysisError:nE,uploadError:aE,back:iE,tryAgain:sE,language:lE,about:rE,features:oE,menu:cE,smartCompanion:uE,keyFeatures:dE,smartDiseaseDetection:fE,smartDiseaseDetectionDesc:hE,comprehensivePlantDatabase:mE,comprehensivePlantDatabaseDesc:gE,preventionTreatment:pE,preventionTreatmentDesc:yE,forEveryone:xE,forEveryoneDesc:bE,whatPlantBuddyHelps:vE,commonDiseases:SE,perfectFor:jE,homeGardeners:wE,homeGardenersDesc:EE,smallScaleFarmers:$E,smallScaleFarmersDesc:zE,orchardOwners:AE,orchardOwnersDesc:RE,getStartedNow:TE,instantDiseaseDetection:CE,comprehensiveDiseaseProfiles:OE,interactiveLifecycleVisualizations:DE,personalizedTreatmentPlans:kE,diseaseLibrarySearch:ME,uploadPhoto:NE,aiAnalysis:_E,getDiagnosis:UE,confidenceScore:LE,symptomGallery:BE,lifecycleDiagrams:HE,environmentalData:qE,timelineAnimation:GE,keyMilestones:PE,organicSolutions:YE,treatmentScheduler:VE,smartSearch:XE,comprehensiveDatabase:FE,startUsingPlantBuddy:QE},ZE="Plant Buddy",JE="Detección de Enfermedades de Plantas con IA",IE="Bienvenido a Plant Buddy",WE="Detecta enfermedades de plantas de forma rápida y precisa usando nuestra tecnología de IA avanzada. Toma una foto o sube una imagen para obtener resultados instantáneos.",e3="Escanear con Cámara",t3="Subir Imagen",n3="Tomar Foto",a3="Repetir Foto",i3="Analizar Imagen",s3="Analizando...",l3="Resultados del Análisis",r3="Estado de Salud",o3="Confianza",c3="Recomendaciones",u3="Saludable",d3="Enfermedad Detectada",f3="Desconocido",h3="Ningún archivo seleccionado",m3="Seleccionar Archivo",g3="Formatos soportados: JPG, PNG, WEBP",p3="Cámara no soportada por tu navegador",y3="Permiso de cámara denegado",x3="Error al analizar la imagen. Inténtalo de nuevo.",b3="Error al subir la imagen. Inténtalo de nuevo.",v3="Atrás",S3="Intentar de Nuevo",j3="Idioma",w3="Acerca de",E3="Características",$3="Menú",z3={title:ZE,subtitle:JE,welcome:IE,description:WE,scanWithCamera:e3,uploadImage:t3,takePhoto:n3,retakePhoto:a3,analyzeImage:i3,analyzing:s3,results:l3,healthStatus:r3,confidence:o3,recommendations:c3,healthy:u3,diseased:d3,unknown:f3,noFileSelected:h3,selectFile:m3,supportedFormats:g3,cameraNotSupported:p3,cameraPermissionDenied:y3,analysisError:x3,uploadError:b3,back:v3,tryAgain:S3,language:j3,about:w3,features:E3,menu:$3},A3="Plant Buddy",R3="Détection des Maladies des Plantes par IA",T3="Bienvenue sur Plant Buddy",C3="Détectez les maladies des plantes rapidement et précisément grâce à notre technologie IA avancée. Prenez une photo ou téléchargez une image pour obtenir des résultats instantanés.",O3="Scanner avec Caméra",D3="Télécharger Image",k3="Prendre Photo",M3="Reprendre Photo",N3="Analyser Image",_3="Analyse en cours...",U3="Résultats d'Analyse",L3="État de Santé",B3="Confiance",H3="Recommandations",q3="Sain",G3="Maladie Détectée",P3="Inconnu",Y3="Aucun fichier sélectionné",V3="Sélectionner Fichier",X3="Formats supportés: JPG, PNG, WEBP",F3="Caméra non supportée par votre navigateur",Q3="Permission caméra refusée",K3="Erreur lors de l'analyse de l'image. Veuillez réessayer.",Z3="Erreur lors du téléchargement de l'image. Veuillez réessayer.",J3="Retour",I3="Réessayer",W3="Langue",e$="À Propos",t$="Fonctionnalités",n$="Menu",a$={title:A3,subtitle:R3,welcome:T3,description:C3,scanWithCamera:O3,uploadImage:D3,takePhoto:k3,retakePhoto:M3,analyzeImage:N3,analyzing:_3,results:U3,healthStatus:L3,confidence:B3,recommendations:H3,healthy:q3,diseased:G3,unknown:P3,noFileSelected:Y3,selectFile:V3,supportedFormats:X3,cameraNotSupported:F3,cameraPermissionDenied:Q3,analysisError:K3,uploadError:Z3,back:J3,tryAgain:I3,language:W3,about:e$,features:t$,menu:n$},i$="प्लांट बडी",s$="AI-संचालित पौधों की बीमारी का पता लगाना",l$="प्लांट बडी में आपका स्वागत है",r$="हमारी उन्नत AI तकनीक का उपयोग करके पौधों की बीमारियों को जल्दी और सटीक रूप से पहचानें। तुरंत परिणाम पाने के लिए एक फोटो लें या एक छवि अपलोड करें।",o$="कैमरे से स्कैन करें",c$="छवि अपलोड करें",u$="फोटो लें",d$="दोबारा फोटो लें",f$="छवि का विश्लेषण करें",h$="विश्लेषण कर रहे हैं...",m$="विश्लेषण परिणाम",g$="स्वास्थ्य स्थिति",p$="विश्वास",y$="सुझाव",x$="स्वस्थ",b$="बीमारी का पता चला",v$="अज्ञात",S$="कोई फाइल चयनित नहीं",j$="फाइल चुनें",w$="समर्थित प्रारूप: JPG, PNG, WEBP",E$="आपके ब्राउज़र द्वारा कैमरा समर्थित नहीं है",$$="कैमरा अनुमति अस्वीकृत",z$="छवि का विश्लेषण करने में त्रुटि। कृपया पुनः प्रयास करें।",A$="छवि अपलोड करने में त्रुटि। कृपया पुनः प्रयास करें।",R$="वापस",T$="पुनः प्रयास करें",C$="भाषा",O$="हमारे बारे में",D$="सुविधाएं",k$="मेनू",M$="स्वस्थ बगीचों के लिए आपका स्मार्ट साथी",N$="मुख्य विशेषताएं",_$="स्मार्ट रोग का पता लगाना",U$="उन्नत AI-संचालित छवि पहचान पत्ती और फल की तस्वीरों से उच्च सटीकता के साथ रोगों की पहचान करती है।",L$="व्यापक पौधा डेटाबेस",B$="टमाटर, आलू, खट्टे फल, आम, सेब और कई अन्य सामान्य पौधों को प्रभावित करने वाली प्रमुख बीमारियों को कवर करता है।",H$="रोकथाम और उपचार",q$="रोग के प्रसार को रोकने के लिए अनुकूलित जैविक और एकीकृत कीट प्रबंधन सुझाव प्राप्त करें।",G$="सभी के लिए",P$="शौकीनों, छोटे पैमाने के किसानों, बागवानों और पौधों के स्वास्थ्य के प्रति उत्साही किसी भी व्यक्ति के लिए एकदम सही।",Y$="प्लांट बडी आपकी क्या मदद करता है",V$="सामान्य पौधे की बीमारियां जिनका हम पता लगाते हैं",X$="बिल्कुल सही है",F$="घरेलू बागवान",Q$="अपने पिछवाड़े के बगीचे, इनडोर पौधों और फूलों की क्यारियों को स्वस्थ और फलता-फूलता रखें।",K$="छोटे पैमाने के किसान",Z$="प्रारंभिक रोग का पता लगाने और उपचार के साथ अपनी फसलों की रक्षा करें और उपज बढ़ाएं।",J$="बगीचे के मालिक",I$="स्वस्थ फलों के पेड़ों को बनाए रखें और अपने बगीचे में रोग के प्रसार को रोकें।",W$="अभी शुरू करें",ez="तत्काल रोग का पता लगाना",tz="व्यापक रोग प्रोफाइल",nz="इंटरैक्टिव जीवनचक्र विज़ुअलाइज़ेशन",az="व्यक्तिगत उपचार योजनाएं",iz="रोग पुस्तकालय और खोज",sz="अपनी फोटो अपलोड करें",lz="AI विश्लेषण",rz="निदान प्राप्त करें",oz="विश्वास स्कोर",cz="लक्षण गैलरी",uz="जीवनचक्र चित्र",dz="पर्यावरणीय डेटा",fz="समयरेखा एनीमेशन",hz="मुख्य मील के पत्थर",mz="जैविक समाधान",gz="उपचार अनुसूचक",pz="स्मार्ट खोज",yz="व्यापक डेटाबेस",xz="प्लांट बडी का उपयोग शुरू करें",bz={title:i$,subtitle:s$,welcome:l$,description:r$,scanWithCamera:o$,uploadImage:c$,takePhoto:u$,retakePhoto:d$,analyzeImage:f$,analyzing:h$,results:m$,healthStatus:g$,confidence:p$,recommendations:y$,healthy:x$,diseased:b$,unknown:v$,noFileSelected:S$,selectFile:j$,supportedFormats:w$,cameraNotSupported:E$,cameraPermissionDenied:$$,analysisError:z$,uploadError:A$,back:R$,tryAgain:T$,language:C$,about:O$,features:D$,menu:k$,smartCompanion:M$,keyFeatures:N$,smartDiseaseDetection:_$,smartDiseaseDetectionDesc:U$,comprehensivePlantDatabase:L$,comprehensivePlantDatabaseDesc:B$,preventionTreatment:H$,preventionTreatmentDesc:q$,forEveryone:G$,forEveryoneDesc:P$,whatPlantBuddyHelps:Y$,commonDiseases:V$,perfectFor:X$,homeGardeners:F$,homeGardenersDesc:Q$,smallScaleFarmers:K$,smallScaleFarmersDesc:Z$,orchardOwners:J$,orchardOwnersDesc:I$,getStartedNow:W$,instantDiseaseDetection:ez,comprehensiveDiseaseProfiles:tz,interactiveLifecycleVisualizations:nz,personalizedTreatmentPlans:az,diseaseLibrarySearch:iz,uploadPhoto:sz,aiAnalysis:lz,getDiagnosis:rz,confidenceScore:oz,symptomGallery:cz,lifecycleDiagrams:uz,environmentalData:dz,timelineAnimation:fz,keyMilestones:hz,organicSolutions:mz,treatmentScheduler:gz,smartSearch:pz,comprehensiveDatabase:yz,startUsingPlantBuddy:xz},vz="பிளாண்ட் பட்டி",Sz="AI-இயங்கும் தாவர நோய் கண்டறிதல்",jz="பிளாண்ட் பட்டிக்கு வரவேற்கிறோம்",wz="எங்கள் மேம்பட்ட AI தொழில்நுட்பத்தைப் பயன்படுத்தி தாவர நோய்களை விரைவாகவும் துல்லியமாகவும் கண்டறியுங்கள். உடனடி முடிவுகளைப் பெற ஒரு புகைப்படம் எடுங்கள் அல்லது படத்தை பதிவேற்றுங்கள்।",Ez="கேமராவுடன் ஸ்கேன் செய்யுங்கள்",$z="படத்தை பதிவேற்றுங்கள்",zz="புகைப்படம் எடுங்கள்",Az="மீண்டும் புகைப்படம் எடுங்கள்",Rz="படத்தை பகுப்பாய்வு செய்யுங்கள்",Tz="பகுப்பாய்வு செய்கிறோம்...",Cz="பகுப்பாய்வு முடிவுகள்",Oz="ஆரோக்கிய நிலை",Dz="நம்பிக்கை",kz="பரிந்துரைகள்",Mz="ஆரோக்கியமான",Nz="நோய் கண்டறியப்பட்டது",_z="தெரியாத",Uz="எந்த கோப்பும் தேர்ந்தெடுக்கப்படவில்லை",Lz="கோப்பைத் தேர்ந்தெடுக்கவும்",Bz="ஆதரிக்கப்படும் வடிவங்கள்: JPG, PNG, WEBP",Hz="உங்கள் உலாவியால் கேமரா ஆதரிக்கப்படவில்லை",qz="கேமரா அனுமதி மறுக்கப்பட்டது",Gz="படத்தை பகுப்பாய்வு செய்வதில் பிழை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",Pz="படத்தை பதிவேற்றுவதில் பிழை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",Yz="திரும்பு",Vz="மீண்டும் முயற்சிக்கவும்",Xz="மொழி",Fz="எங்களைப் பற்றி",Qz="அம்சங்கள்",Kz="மெனு",Zz={title:vz,subtitle:Sz,welcome:jz,description:wz,scanWithCamera:Ez,uploadImage:$z,takePhoto:zz,retakePhoto:Az,analyzeImage:Rz,analyzing:Tz,results:Cz,healthStatus:Oz,confidence:Dz,recommendations:kz,healthy:Mz,diseased:Nz,unknown:_z,noFileSelected:Uz,selectFile:Lz,supportedFormats:Bz,cameraNotSupported:Hz,cameraPermissionDenied:qz,analysisError:Gz,uploadError:Pz,back:Yz,tryAgain:Vz,language:Xz,about:Fz,features:Qz,menu:Kz},Jz="ప్లాంట్ బడ్డీ",Iz="AI-శక్తితో మొక్కల వ్యాధి గుర్తింపు",Wz="ప్లాంట్ బడ్డీకి స్వాగతం",eA="మా అధునాతన AI సాంకేతికతను ఉపయోగించి మొక్కల వ్యాధులను త్వరగా మరియు ఖచ్చితంగా గుర్తించండి. తక్షణ ఫలితాలను పొందడానికి ఫోటో తీయండి లేదా చిత్రాన్ని అప్‌లోడ్ చేయండి।",tA="కెమెరాతో స్కాన్ చేయండి",nA="చిత్రాన్ని అప్‌లోడ్ చేయండి",aA="ఫోటో తీయండి",iA="మళ్లీ ఫోటో తీయండి",sA="చిత్రాన్ని విశ్లేషించండి",lA="విశ్లేషిస్తున్నాం...",rA="విశ్లేషణ ఫలితాలు",oA="ఆరోగ్య స్థితి",cA="విశ్వాసం",uA="సిఫార్సులు",dA="ఆరోగ్యకరమైన",fA="వ్యాధి గుర్తించబడింది",hA="తెలియని",mA="ఫైల్ ఎంచుకోబడలేదు",gA="ఫైల్ ఎంచుకోండి",pA="మద్దతు ఉన్న ఫార్మాట్లు: JPG, PNG, WEBP",yA="మీ బ్రౌజర్‌కు కెమెరా మద్దతు లేదు",xA="కెమెరా అనుమతి నిరాకరించబడింది",bA="చిత్రాన్ని విశ్లేషించడంలో లోపం. దయచేసి మళ్లీ ప్రయత్నించండి.",vA="చిత్రాన్ని అప్‌లోడ్ చేయడంలో లోపం. దయచేసి మళ్లీ ప్రయత్నించండి.",SA="వెనుకకు",jA="మళ్లీ ప్రయత్నించండి",wA="భాష",EA="మా గురించి",$A="లక్షణాలు",zA="మెనూ",AA={title:Jz,subtitle:Iz,welcome:Wz,description:eA,scanWithCamera:tA,uploadImage:nA,takePhoto:aA,retakePhoto:iA,analyzeImage:sA,analyzing:lA,results:rA,healthStatus:oA,confidence:cA,recommendations:uA,healthy:dA,diseased:fA,unknown:hA,noFileSelected:mA,selectFile:gA,supportedFormats:pA,cameraNotSupported:yA,cameraPermissionDenied:xA,analysisError:bA,uploadError:vA,back:SA,tryAgain:jA,language:wA,about:EA,features:$A,menu:zA},RA="প্ল্যান্ট বাডি",TA="AI-চালিত উদ্ভিদ রোগ নির্ণয়",CA="প্ল্যান্ট বাডিতে স্বাগতম",OA="আমাদের উন্নত AI প্রযুক্তি ব্যবহার করে দ্রুত এবং নির্ভুলভাবে উদ্ভিদের রোগ নির্ণয় করুন। তাৎক্ষণিক ফলাফল পেতে একটি ছবি তুলুন বা একটি ছবি আপলোড করুন।",DA="ক্যামেরা দিয়ে স্ক্যান করুন",kA="ছবি আপলোড করুন",MA="ছবি তুলুন",NA="আবার ছবি তুলুন",_A="ছবি বিশ্লেষণ করুন",UA="বিশ্লেষণ করছি...",LA="বিশ্লেষণের ফলাফল",BA="স্বাস্থ্যের অবস্থা",HA="আস্থা",qA="সুপারিশ",GA="সুস্থ",PA="রোগ শনাক্ত করা হয়েছে",YA="অজানা",VA="কোন ফাইল নির্বাচিত নেই",XA="ফাইল নির্বাচন করুন",FA="সমর্থিত ফর্ম্যাট: JPG, PNG, WEBP",QA="আপনার ব্রাউজার ক্যামেরা সমর্থন করে না",KA="ক্যামেরার অনুমতি প্রত্যাখ্যান করা হয়েছে",ZA="ছবি বিশ্লেষণে ত্রুটি। অনুগ্রহ করে আবার চেষ্টা করুন।",JA="ছবি আপলোড করতে ত্রুটি। অনুগ্রহ করে আবার চেষ্টা করুন।",IA="ফিরে যান",WA="আবার চেষ্টা করুন",e6="ভাষা",t6="আমাদের সম্পর্কে",n6="বৈশিষ্ট্য",a6="মেনু",i6={title:RA,subtitle:TA,welcome:CA,description:OA,scanWithCamera:DA,uploadImage:kA,takePhoto:MA,retakePhoto:NA,analyzeImage:_A,analyzing:UA,results:LA,healthStatus:BA,confidence:HA,recommendations:qA,healthy:GA,diseased:PA,unknown:YA,noFileSelected:VA,selectFile:XA,supportedFormats:FA,cameraNotSupported:QA,cameraPermissionDenied:KA,analysisError:ZA,uploadError:JA,back:IA,tryAgain:WA,language:e6,about:t6,features:n6,menu:a6},s6="ਪਲਾਂਟ ਬੱਡੀ",l6="AI-ਸੰਚਾਲਿਤ ਪੌਧਿਆਂ ਦੀ ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ",r6="ਪਲਾਂਟ ਬੱਡੀ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",o6="ਸਾਡੀ ਐਡਵਾਂਸ AI ਤਕਨਾਲੋਜੀ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਪੌਧਿਆਂ ਦੀਆਂ ਬਿਮਾਰੀਆਂ ਨੂੰ ਤੇਜ਼ੀ ਨਾਲ ਅਤੇ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਪਛਾਣੋ। ਤੁਰੰਤ ਨਤੀਜੇ ਪਾਉਣ ਲਈ ਇੱਕ ਫੋਟੋ ਖਿੱਚੋ ਜਾਂ ਇੱਕ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ।",c6="ਕੈਮਰੇ ਨਾਲ ਸਕੈਨ ਕਰੋ",u6="ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ",d6="ਫੋਟੋ ਖਿੱਚੋ",f6="ਦੁਬਾਰਾ ਫੋਟੋ ਖਿੱਚੋ",h6="ਤਸਵੀਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",m6="ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਹੇ ਹਾਂ...",g6="ਵਿਸ਼ਲੇਸ਼ਣ ਨਤੀਜੇ",p6="ਸਿਹਤ ਦੀ ਸਥਿਤੀ",y6="ਭਰੋਸਾ",x6="ਸਿਫਾਰਸ਼ਾਂ",b6="ਸਿਹਤਮੰਦ",v6="ਬਿਮਾਰੀ ਦਾ ਪਤਾ ਲੱਗਿਆ",S6="ਅਣਜਾਣ",j6="ਕੋਈ ਫਾਈਲ ਚੁਣੀ ਨਹੀਂ ਗਈ",w6="ਫਾਈਲ ਚੁਣੋ",E6="ਸਮਰਥਿਤ ਫਾਰਮੈਟ: JPG, PNG, WEBP",$6="ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਦੁਆਰਾ ਕੈਮਰਾ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ",z6="ਕੈਮਰਾ ਇਜਾਜ਼ਤ ਇਨਕਾਰ ਕੀਤੀ ਗਈ",A6="ਤਸਵੀਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਵਿੱਚ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",R6="ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰਨ ਵਿੱਚ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",T6="ਪਿੱਛੇ",C6="ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",O6="ਭਾਸ਼ਾ",D6="ਸਾਡੇ ਬਾਰੇ",k6="ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",M6="ਮੀਨੂ",N6={title:s6,subtitle:l6,welcome:r6,description:o6,scanWithCamera:c6,uploadImage:u6,takePhoto:d6,retakePhoto:f6,analyzeImage:h6,analyzing:m6,results:g6,healthStatus:p6,confidence:y6,recommendations:x6,healthy:b6,diseased:v6,unknown:S6,noFileSelected:j6,selectFile:w6,supportedFormats:E6,cameraNotSupported:$6,cameraPermissionDenied:z6,analysisError:A6,uploadError:R6,back:T6,tryAgain:C6,language:O6,about:D6,features:k6,menu:M6},_6="પ્લાન્ટ બડી",U6="AI-સંચાલિત છોડની બીમારીની ઓળખ",L6="પ્લાન્ટ બડીમાં આપનું સ્વાગત છે",B6="અમારી અદ્યતન AI ટેકનોલોજીનો ઉપયોગ કરીને છોડની બીમારીઓને ઝડપથી અને સચોટ રીતે ઓળખો. તાત્કાલિક પરિણામો મેળવવા માટે ફોટો લો અથવા છબી અપલોડ કરો।",H6="કેમેરા સાથે સ્કેન કરો",q6="છબી અપલોડ કરો",G6="ફોટો લો",P6="ફરી ફોટો લો",Y6="છબીનું વિશ્લેષણ કરો",V6="વિશ્લેષણ કરી રહ્યાં છીએ...",X6="વિશ્લેષણ પરિણામો",F6="આરોગ્યની સ્થિતિ",Q6="વિશ્વાસ",K6="ભલામણો",Z6="તંદુરસ્ત",J6="બીમારી મળી આવી",I6="અજ્ઞાત",W6="કોઈ ફાઈલ પસંદ થયેલ નથી",eR="ફાઈલ પસંદ કરો",tR="સપોર્ટેડ ફોર્મેટ: JPG, PNG, WEBP",nR="તમારા બ્રાઉઝર દ્વારા કેમેરા સપોર્ટેડ નથી",aR="કેમેરાની પરવાનગી નકારવામાં આવી",iR="છબીનું વિશ્લેષણ કરવામાં ભૂલ. કૃપા કરીને ફરી પ્રયાસ કરો.",sR="છબી અપલોડ કરવામાં ભૂલ. કૃપા કરીને ફરી પ્રયાસ કરો.",lR="પાછળ",rR="ફરી પ્રયાસ કરો",oR="ભાષા",cR="અમારા વિશે",uR="લક્ષણો",dR="મેનૂ",fR={title:_6,subtitle:U6,welcome:L6,description:B6,scanWithCamera:H6,uploadImage:q6,takePhoto:G6,retakePhoto:P6,analyzeImage:Y6,analyzing:V6,results:X6,healthStatus:F6,confidence:Q6,recommendations:K6,healthy:Z6,diseased:J6,unknown:I6,noFileSelected:W6,selectFile:eR,supportedFormats:tR,cameraNotSupported:nR,cameraPermissionDenied:aR,analysisError:iR,uploadError:sR,back:lR,tryAgain:rR,language:oR,about:cR,features:uR,menu:dR},hR="प्लांट बडी",mR="AI-चालित वनस्पती रोग ओळख",gR="प्लांट बडीमध्ये आपले स्वागत आहे",pR="आमच्या प्रगत AI तंत्रज्ञानाचा वापर करून वनस्पतींच्या रोगांची जलद आणि अचूक ओळख करा. तत्काळ परिणाम मिळवण्यासाठी फोटो घ्या किंवा प्रतिमा अपलोड करा।",yR="कॅमेऱ्याने स्कॅन करा",xR="प्रतिमा अपलोड करा",bR="फोटो घ्या",vR="पुन्हा फोटो घ्या",SR="प्रतिमेचे विश्लेषण करा",jR="विश्लेषण करत आहे...",wR="विश्लेषण परिणाम",ER="आरोग्य स्थिती",$R="विश्वास",zR="शिफारसी",AR="निरोगी",RR="रोग आढळला",TR="अज्ञात",CR="कोणतीही फाइल निवडली नाही",OR="फाइल निवडा",DR="समर्थित स्वरूप: JPG, PNG, WEBP",kR="तुमच्या ब्राउझरद्वारे कॅमेरा समर्थित नाही",MR="कॅमेरा परवानगी नाकारली",NR="प्रतिमा विश्लेषणात त्रुटी. कृपया पुन्हा प्रयत्न करा.",_R="प्रतिमा अपलोड करण्यात त्रुटी. कृपया पुन्हा प्रयत्न करा.",UR="परत",LR="पुन्हा प्रयत्न करा",BR="भाषा",HR="आमच्या विषयी",qR="वैशिष्ट्ये",GR="मेनू",PR={title:hR,subtitle:mR,welcome:gR,description:pR,scanWithCamera:yR,uploadImage:xR,takePhoto:bR,retakePhoto:vR,analyzeImage:SR,analyzing:jR,results:wR,healthStatus:ER,confidence:$R,recommendations:zR,healthy:AR,diseased:RR,unknown:TR,noFileSelected:CR,selectFile:OR,supportedFormats:DR,cameraNotSupported:kR,cameraPermissionDenied:MR,analysisError:NR,uploadError:_R,back:UR,tryAgain:LR,language:BR,about:HR,features:qR,menu:GR},YR={en:{translation:KE},es:{translation:z3},fr:{translation:a$},hi:{translation:bz},ta:{translation:Zz},te:{translation:AA},bn:{translation:i6},pa:{translation:N6},gu:{translation:fR},mr:{translation:PR}};jt.use(Rv).init({resources:YR,lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});const U0=w.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 6px;
  
  ${n=>n.status===!0?`
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
        border: 1px solid rgba(16, 185, 129, 0.3);
      `:n.status===!1?`
        background: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        border: 1px solid rgba(239, 68, 68, 0.3);
      `:`
        background: rgba(107, 114, 128, 0.1);
        color: #6b7280;
        border: 1px solid rgba(107, 114, 128, 0.3);
      `}
`,L0=w.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
`;function VR(){const{t:n,i18n:s}=rn(),[r,o]=W.useState("home"),[d,f]=W.useState(null),[h,g]=W.useState(null),[x,p]=W.useState(1),[b,v]=W.useState(!1),[z,C]=W.useState(!1),[j,A]=W.useState(null),[T,G]=W.useState(null),[X,V]=W.useState(null),[L,P]=W.useState(!1),[Q,B]=W.useState(!1),[re,Se]=W.useState(!1),[xe,Ye]=W.useState(!1);W.useEffect(()=>{const Ue=async()=>{console.log("Checking API connection...");try{const Rt=await checkApiHealth();console.log("API health check result:",Rt),G(Rt)}catch(Rt){console.error("Health check failed:",Rt),G(!1)}};Ue();const at=setInterval(Ue,3e4);return()=>clearInterval(at)},[]);const Ne=async Ue=>{console.log("=== Starting Image Analysis ==="),console.log("Image file:",{name:Ue.name,size:Ue.size,type:Ue.type}),console.log("API connected status:",T),console.log("Current language:",s.language);try{T===!1&&console.warn("API connection status shows disconnected, but attempting request anyway..."),console.log("Setting up UI for analysis..."),g(URL.createObjectURL(Ue)),o("loading"),p(1),A(null),console.log("Starting loading sequence..."),setTimeout(()=>{console.log("Loading step 2..."),p(2)},500),setTimeout(()=>{console.log("Loading step 3..."),p(3)},1500),console.log("Calling analyzePlantImage API...");const at=await m4(Ue,s.language);console.log("Analysis completed successfully:",at),f(at),o("results"),console.log("UI updated with results")}catch(at){console.error("=== Analysis Error ==="),console.error("Error object:",at),console.error("Error message:",at.message),console.error("Error stack:",at.stack),A(at.message||"Failed to analyze image. Please try again."),o("home");let Rt=at.message||"Please check your connection and try again.";(at.message?.includes("Network Error")||at.message?.includes("ECONNREFUSED"))&&(Rt="Cannot connect to analysis server. Please ensure the backend is running at http://localhost:3000"),console.error("Showing error to user:",Rt),alert(`Analysis failed: ${Rt}`)}},Oe=()=>{o("home"),f(null),g(null),p(1)},Be=()=>{v(!0)},_e=()=>{v(!1)},k=()=>{C(!0)},K=()=>{C(!1)},I=()=>{f(null),g(null),p(1),o("home")},se=()=>{P(!0)},E=()=>{Se(!0)},U=()=>{Ye(!0)},Z=()=>{P(!1)},J=()=>{B(!1)},ee=()=>{Se(!1)},fe=()=>{Ye(!1)},ae=Ue=>{V(Ue),P(!1),B(!1)},je=Ue=>{V(Ue),P(!1),B(!1)},ue=()=>{V(null),Se(!1)},Fe=()=>{P(!1),B(!0)},on=()=>{B(!1),P(!0)},At=()=>{switch(r){case"camera":return c.jsxs(Js,{children:[c.jsxs(Ee,{onClick:Oe,variant:"secondary",style:{alignSelf:"flex-start",marginBottom:"1rem"},children:[c.jsx(wo,{size:20}),n("back")]}),c.jsx(g2,{onImageCapture:Ne,disabled:r==="loading"})]});case"upload":return c.jsxs(Js,{children:[c.jsxs(Ee,{onClick:Oe,variant:"secondary",style:{alignSelf:"flex-start",marginBottom:"1rem"},children:[c.jsx(wo,{size:20}),n("back")]}),c.jsx(w2,{onImageUpload:Ne,disabled:r==="loading"})]});case"loading":return c.jsx(Js,{children:c.jsx(qn,{children:c.jsx(G2,{step:x})})});case"results":return c.jsxs(Js,{children:[c.jsxs(Ee,{onClick:Oe,variant:"secondary",style:{alignSelf:"flex-start",marginBottom:"1rem"},children:[c.jsx(wo,{size:20}),n("back")]}),c.jsx(M2,{result:d,imageUrl:h,onRecheck:I})]});default:return c.jsxs(Js,{children:[c.jsxs(qn,{style:{textAlign:"center",marginTop:"2rem"},children:[c.jsx(lf,{children:n("welcome")}),c.jsx(QS,{children:n("subtitle")}),c.jsx(nt,{children:n("description")}),c.jsxs(Vp,{style:{marginTop:"2rem"},children:[c.jsxs(qn,{style:{background:"rgba(16, 185, 129, 0.05)",border:"1px solid rgba(16, 185, 129, 0.2)"},children:[c.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📷"}),c.jsx("h3",{style:{color:ki.colors.text.primary,marginBottom:"1rem"},children:n("scanWithCamera")}),c.jsx(nt,{style:{marginBottom:"1.5rem"},children:"your device camera to capture a photo of your plant in real-time."}),c.jsxs(Ee,{onClick:()=>o("camera"),children:[c.jsx(xa,{size:20}),n("scanWithCamera")]})]}),c.jsxs(qn,{style:{background:"rgba(16, 185, 129, 0.05)",border:"1px solid rgba(16, 185, 129, 0.2)"},children:[c.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📁"}),c.jsx("h3",{style:{color:ki.colors.text.primary,marginBottom:"1rem"},children:n("uploadImage")}),c.jsx(nt,{style:{marginBottom:"1.5rem"},children:"Upload an existing image of your plant from your device gallery."}),c.jsxs(Ee,{onClick:()=>o("upload"),variant:"secondary",children:[c.jsx(vf,{size:20}),n("uploadImage")]})]})]})]}),c.jsxs(qn,{style:{marginTop:"3rem"},children:[c.jsx(lf,{style:{fontSize:"2rem",marginBottom:"2rem"},children:n("features")}),c.jsxs(Vp,{children:[c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"1rem"},children:"🤖"}),c.jsx("h3",{style:{color:ki.colors.text.primary,marginBottom:"0.5rem"},children:"AI-Powered Detection"}),c.jsx(nt,{style:{marginBottom:0},children:"Advanced machine learning algorithms for accurate plant disease detection."})]}),c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"1rem"},children:"⚡"}),c.jsx("h3",{style:{color:ki.colors.text.primary,marginBottom:"0.5rem"},children:"Instant Results"}),c.jsx(nt,{style:{marginBottom:0},children:"Get immediate analysis results with confidence scores and recommendations."})]}),c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"1rem"},children:"🌍"}),c.jsx("h3",{style:{color:ki.colors.text.primary,marginBottom:"0.5rem"},children:"Multi-Language"}),c.jsx(nt,{style:{marginBottom:0},children:"Available in multiple languages for users worldwide."})]})]})]})]})}};return c.jsx(hv,{theme:ki,children:c.jsxs(XS,{children:[c.jsxs(U0,{status:T,children:[c.jsx(L0,{}),T===null?"Checking...":T?"API Connected":"API Disconnected"]}),c.jsx(s2,{onAboutClick:Be,onFeaturesClick:k,user:X,onLoginClick:se,onProfileClick:E,onPlantsClick:U}),At(),c.jsx(sj,{isOpen:b,onClose:_e}),c.jsx(yj,{isOpen:z,onClose:K}),c.jsx(Rj,{isOpen:L,onClose:Z,onSuccess:ae,onSwitchToSignUp:Fe}),c.jsx(Lj,{isOpen:Q,onClose:J,onSuccess:je,onSwitchToLogin:on}),"        ",c.jsx(Fj,{isOpen:re,onClose:ee,user:X,onLogout:ue}),c.jsx(_w,{isOpen:xe,onClose:fe,user:X}),c.jsxs(U0,{status:T,children:[c.jsx(L0,{}),T===null&&"Checking connection...",T===!0&&"Connected",T===!1&&"Disconnected"]})]})})}const XR=pv`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    color: #047857;
    background: #f0fdf4;
  }

  #root {
    min-height: 100vh;
  }

  button {
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #059669;
  }
`;mb.createRoot(document.getElementById("root")).render(c.jsxs(W.StrictMode,{children:[c.jsx(XR,{}),c.jsx(VR,{})]}));
