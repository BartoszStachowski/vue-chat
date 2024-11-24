(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},zr=[],en=()=>{},k_=()=>!1,Yo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),rl=t=>t.startsWith("onUpdate:"),Je=Object.assign,sl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},D_=Object.prototype.hasOwnProperty,be=(t,e)=>D_.call(t,e),ce=Array.isArray,Kr=t=>Jo(t)==="[object Map]",If=t=>Jo(t)==="[object Set]",ue=t=>typeof t=="function",We=t=>typeof t=="string",An=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Af=t=>(xe(t)||ue(t))&&ue(t.then)&&ue(t.catch),bf=Object.prototype.toString,Jo=t=>bf.call(t),V_=t=>Jo(t).slice(8,-1),Rf=t=>Jo(t)==="[object Object]",il=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N_=/-(\w)/g,Ut=Xo(t=>t.replace(N_,(e,n)=>n?n.toUpperCase():"")),O_=/\B([A-Z])/g,rr=Xo(t=>t.replace(O_,"-$1").toLowerCase()),Zo=Xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ha=Xo(t=>t?`on${Zo(t)}`:""),Wn=(t,e)=>!Object.is(t,e),Wa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},x_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lh;const ea=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ol(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?U_(r):ol(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||xe(t))return t}const M_=/;(?![^(]*\))/g,L_=/:([^]+)/,F_=/\/\*[^]*?\*\//g;function U_(t){const e={};return t.replace(F_,"").split(M_).forEach(n=>{if(n){const r=n.split(L_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ta(t){let e="";if(We(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=ta(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const B_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$_=nl(B_);function Pf(t){return!!t||t===""}const Cf=t=>!!(t&&t.__v_isRef===!0),qt=t=>We(t)?t:t==null?"":ce(t)||xe(t)&&(t.toString===bf||!ue(t.toString))?Cf(t)?qt(t.value):JSON.stringify(t,kf,2):String(t),kf=(t,e)=>Cf(e)?kf(t,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[za(r,i)+" =>"]=s,n),{})}:If(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>za(n))}:An(e)?za(e):xe(e)&&!ce(e)&&!Rf(e)?String(e):e,za=(t,e="")=>{var n;return An(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class j_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function q_(){return kt}let De;const Ka=new WeakSet;class Df{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uh(this),Of(this);const e=De,n=Wt;De=this,Wt=!0;try{return this.fn()}finally{xf(this),De=e,Wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ll(e);this.deps=this.depsTail=void 0,uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_c(this)&&this.run()}get dirty(){return _c(this)}}let Vf=0,Ks,Gs;function Nf(t,e=!1){if(t.flags|=8,e){t.next=Gs,Gs=t;return}t.next=Ks,Ks=t}function al(){Vf++}function cl(){if(--Vf>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ks;){let e=Ks;for(Ks=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Of(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ll(r),H_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function _c(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Mf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Mf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===oi))return;t.globalVersion=oi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_c(t)){t.flags&=-3;return}const n=De,r=Wt;De=t,Wt=!0;try{Of(t);const s=t.fn(t._value);(e.version===0||Wn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Wt=r,xf(t),t.flags&=-3}}function ll(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ll(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function H_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wt=!0;const Lf=[];function sr(){Lf.push(Wt),Wt=!1}function ir(){const t=Lf.pop();Wt=t===void 0?!0:t}function uh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let oi=0;class W_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Wt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new W_(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Ff(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,oi++,this.notify(e)}notify(e){al();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cl()}}}function Ff(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ff(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ao=new WeakMap,_r=Symbol(""),yc=Symbol(""),ai=Symbol("");function ht(t,e,n){if(Wt&&De){let r=Ao.get(t);r||Ao.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ul),s.map=r,s.key=n),s.track()}}function pn(t,e,n,r,s,i){const o=Ao.get(t);if(!o){oi++;return}const c=l=>{l&&l.trigger()};if(al(),e==="clear")o.forEach(c);else{const l=ce(t),h=l&&il(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===ai||!An(g)&&g>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(ai)),e){case"add":l?h&&c(o.get("length")):(c(o.get(_r)),Kr(t)&&c(o.get(yc)));break;case"delete":l||(c(o.get(_r)),Kr(t)&&c(o.get(yc)));break;case"set":Kr(t)&&c(o.get(_r));break}}cl()}function z_(t,e){const n=Ao.get(t);return n&&n.get(e)}function Fr(t){const e=Ae(t);return e===t?e:(ht(e,"iterate",ai),Lt(t)?e:e.map(dt))}function na(t){return ht(t=Ae(t),"iterate",ai),t}const K_={__proto__:null,[Symbol.iterator](){return Ga(this,Symbol.iterator,dt)},concat(...t){return Fr(this).concat(...t.map(e=>ce(e)?Fr(e):e))},entries(){return Ga(this,"entries",t=>(t[1]=dt(t[1]),t))},every(t,e){return hn(this,"every",t,e,void 0,arguments)},filter(t,e){return hn(this,"filter",t,e,n=>n.map(dt),arguments)},find(t,e){return hn(this,"find",t,e,dt,arguments)},findIndex(t,e){return hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hn(this,"findLast",t,e,dt,arguments)},findLastIndex(t,e){return hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qa(this,"includes",t)},indexOf(...t){return Qa(this,"indexOf",t)},join(t){return Fr(this).join(t)},lastIndexOf(...t){return Qa(this,"lastIndexOf",t)},map(t,e){return hn(this,"map",t,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...t){return Os(this,"push",t)},reduce(t,...e){return hh(this,"reduce",t,e)},reduceRight(t,...e){return hh(this,"reduceRight",t,e)},shift(){return Os(this,"shift")},some(t,e){return hn(this,"some",t,e,void 0,arguments)},splice(...t){return Os(this,"splice",t)},toReversed(){return Fr(this).toReversed()},toSorted(t){return Fr(this).toSorted(t)},toSpliced(...t){return Fr(this).toSpliced(...t)},unshift(...t){return Os(this,"unshift",t)},values(){return Ga(this,"values",dt)}};function Ga(t,e,n){const r=na(t),s=r[e]();return r!==t&&!Lt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const G_=Array.prototype;function hn(t,e,n,r,s,i){const o=na(t),c=o!==t&&!Lt(t),l=o[e];if(l!==G_[e]){const p=l.apply(t,i);return c?dt(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,dt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function hh(t,e,n,r){const s=na(t);let i=n;return s!==t&&(Lt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,dt(c),l,t)}),s[e](i,...r)}function Qa(t,e,n){const r=Ae(t);ht(r,"iterate",ai);const s=r[e](...n);return(s===-1||s===!1)&&fl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Os(t,e,n=[]){sr(),al();const r=Ae(t)[e].apply(t,n);return cl(),ir(),r}const Q_=nl("__proto__,__v_isRef,__isVue"),Uf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(An));function Y_(t){An(t)||(t=String(t));const e=Ae(this);return ht(e,"has",t),e.hasOwnProperty(t)}class Bf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?oy:Hf:i?qf:jf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=K_[n]))return l;if(n==="hasOwnProperty")return Y_}const c=Reflect.get(e,n,nt(e)?e:r);return(An(n)?Uf.has(n):Q_(n))||(s||ht(e,"get",n),i)?c:nt(c)?o&&il(n)?c:c.value:xe(c)?s?zf(c):ra(c):c}}class $f extends Bf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Er(i);if(!Lt(r)&&!Er(r)&&(i=Ae(i),r=Ae(r)),!ce(e)&&nt(i)&&!nt(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&il(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,nt(e)?e:s);return e===Ae(s)&&(o?Wn(r,i)&&pn(e,"set",n,r):pn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!An(n)||!Uf.has(n))&&ht(e,"has",n),r}ownKeys(e){return ht(e,"iterate",ce(e)?"length":_r),Reflect.ownKeys(e)}}class J_ extends Bf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const X_=new $f,Z_=new J_,ey=new $f(!0);const vc=t=>t,Ji=t=>Reflect.getPrototypeOf(t);function ty(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Kr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?vc:e?Ec:dt;return!e&&ht(i,"iterate",l?yc:_r),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Xi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ny(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(Wn(s,c)&&ht(o,"get",s),ht(o,"get",c));const{has:l}=Ji(o),h=e?vc:t?Ec:dt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ht(Ae(s),"iterate",_r),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(Wn(s,c)&&ht(o,"has",s),ht(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?vc:t?Ec:dt;return!t&&ht(l,"iterate",_r),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return Je(n,t?{add:Xi("add"),set:Xi("set"),delete:Xi("delete"),clear:Xi("clear")}:{add(s){!e&&!Lt(s)&&!Er(s)&&(s=Ae(s));const i=Ae(this);return Ji(i).has.call(i,s)||(i.add(s),pn(i,"add",s,s)),this},set(s,i){!e&&!Lt(i)&&!Er(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=Ji(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?Wn(i,d)&&pn(o,"set",s,i):pn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=Ji(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&pn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ty(s,t,e)}),n}function hl(t,e){const n=ny(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const ry={get:hl(!1,!1)},sy={get:hl(!1,!0)},iy={get:hl(!0,!1)};const jf=new WeakMap,qf=new WeakMap,Hf=new WeakMap,oy=new WeakMap;function ay(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cy(t){return t.__v_skip||!Object.isExtensible(t)?0:ay(V_(t))}function ra(t){return Er(t)?t:dl(t,!1,X_,ry,jf)}function Wf(t){return dl(t,!1,ey,sy,qf)}function zf(t){return dl(t,!0,Z_,iy,Hf)}function dl(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=cy(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Gr(t){return Er(t)?Gr(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function fl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function ly(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&Sf(t,"__v_skip",!0),t}const dt=t=>xe(t)?ra(t):t,Ec=t=>xe(t)?zf(t):t;function nt(t){return t?t.__v_isRef===!0:!1}function mt(t){return Kf(t,!1)}function uy(t){return Kf(t,!0)}function Kf(t,e){return nt(t)?t:new hy(t,e)}class hy{constructor(e,n){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Lt(e)||Er(e);e=r?e:Ae(e),Wn(e,n)&&(this._rawValue=e,this._value=r?e:dt(e),this.dep.trigger())}}function Qr(t){return nt(t)?t.value:t}const dy={get:(t,e,n)=>e==="__v_raw"?t:Qr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Gf(t){return Gr(t)?t:new Proxy(t,dy)}function fy(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=my(t,n);return e}class py{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return z_(Ae(this._object),this._key)}}function my(t,e,n){const r=t[e];return nt(r)?r:new py(t,e,n)}class gy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Nf(this,!0),!0}get value(){const e=this.dep.track();return Mf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _y(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new gy(r,s,n)}const Zi={},bo=new WeakMap;let fr;function yy(t,e=!1,n=fr){if(n){let r=bo.get(n);r||bo.set(n,r=[]),r.push(t)}}function vy(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=z=>s?z:Lt(z)||s===!1||s===0?Fn(z,1):Fn(z);let d,p,g,y,C=!1,D=!1;if(nt(t)?(p=()=>t.value,C=Lt(t)):Gr(t)?(p=()=>h(t),C=!0):ce(t)?(D=!0,C=t.some(z=>Gr(z)||Lt(z)),p=()=>t.map(z=>{if(nt(z))return z.value;if(Gr(z))return h(z);if(ue(z))return l?l(z,2):z()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){sr();try{g()}finally{ir()}}const z=fr;fr=d;try{return l?l(t,3,[y]):t(y)}finally{fr=z}}:p=en,e&&s){const z=p,he=s===!0?1/0:s;p=()=>Fn(z(),he)}const O=q_(),$=()=>{d.stop(),O&&O.active&&sl(O.effects,d)};if(i&&e){const z=e;e=(...he)=>{z(...he),$()}}let B=D?new Array(t.length).fill(Zi):Zi;const q=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const he=d.run();if(s||C||(D?he.some((de,I)=>Wn(de,B[I])):Wn(he,B))){g&&g();const de=fr;fr=d;try{const I=[he,B===Zi?void 0:D&&B[0]===Zi?[]:B,y];l?l(e,3,I):e(...I),B=he}finally{fr=de}}}else d.run()};return c&&c(q),d=new Df(p),d.scheduler=o?()=>o(q,!1):q,y=z=>yy(z,!1,d),g=d.onStop=()=>{const z=bo.get(d);if(z){if(l)l(z,4);else for(const he of z)he();bo.delete(d)}},e?r?q(!0):B=d.run():o?o(q.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function Fn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,nt(t))Fn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Fn(t[r],e,n);else if(If(t)||Kr(t))t.forEach(r=>{Fn(r,e,n)});else if(Rf(t)){for(const r in t)Fn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Fn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ai(t,e,n,r){try{return r?t(...r):t()}catch(s){sa(s,e,n)}}function an(t,e,n,r){if(ue(t)){const s=Ai(t,e,n,r);return s&&Af(s)&&s.catch(i=>{sa(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(an(t[i],e,n,r));return s}}function sa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){sr(),Ai(i,null,10,[t,l,h]),ir();return}}Ey(t,n,s,r,o)}function Ey(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Tt=[];let Jt=-1;const Yr=[];let xn=null,Ur=0;const Qf=Promise.resolve();let Ro=null;function Yf(t){const e=Ro||Qf;return t?e.then(this?t.bind(this):t):e}function Ty(t){let e=Jt+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=ci(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function pl(t){if(!(t.flags&1)){const e=ci(t),n=Tt[Tt.length-1];!n||!(t.flags&2)&&e>=ci(n)?Tt.push(t):Tt.splice(Ty(e),0,t),t.flags|=1,Jf()}}function Jf(){Ro||(Ro=Qf.then(Zf))}function wy(t){ce(t)?Yr.push(...t):xn&&t.id===-1?xn.splice(Ur+1,0,t):t.flags&1||(Yr.push(t),t.flags|=1),Jf()}function dh(t,e,n=Jt+1){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Xf(t){if(Yr.length){const e=[...new Set(Yr)].sort((n,r)=>ci(n)-ci(r));if(Yr.length=0,xn){xn.push(...e);return}for(xn=e,Ur=0;Ur<xn.length;Ur++){const n=xn[Ur];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xn=null,Ur=0}}const ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zf(t){try{for(Jt=0;Jt<Tt.length;Jt++){const e=Tt[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ai(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<Tt.length;Jt++){const e=Tt[Jt];e&&(e.flags&=-2)}Jt=-1,Tt.length=0,Xf(),Ro=null,(Tt.length||Yr.length)&&Zf()}}let It=null,ep=null;function So(t){const e=It;return It=t,ep=t&&t.type.__scopeId||null,e}function ia(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Th(-1);const i=So(e);let o;try{o=t(...s)}finally{So(i),r._d&&Th(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(sr(),an(l,n,8,[t.el,c,t,e]),ir())}}const Iy=Symbol("_vte"),Ay=t=>t.__isTeleport;function ml(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ml(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function oa(t,e){return ue(t)?Je({name:t.name},e,{setup:t}):t}function tp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Po(t,e,n,r,s=!1){if(ce(t)){t.forEach((C,D)=>Po(C,e&&(ce(e)?e[D]:e),n,r,s));return}if(Jr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Po(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?El(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ve?c.refs={}:c.refs,p=c.setupState,g=Ae(p),y=p===Ve?()=>!1:C=>be(g,C);if(h!=null&&h!==l&&(We(h)?(d[h]=null,y(h)&&(p[h]=null)):nt(h)&&(h.value=null)),ue(l))Ai(l,c,12,[o,d]);else{const C=We(l),D=nt(l);if(C||D){const O=()=>{if(t.f){const $=C?y(l)?p[l]:d[l]:l.value;s?ce($)&&sl($,i):ce($)?$.includes(i)||$.push(i):C?(d[l]=[i],y(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else C?(d[l]=o,y(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(d[t.k]=o))};o?(O.id=-1,Ct(O,n)):O()}}}ea().requestIdleCallback;ea().cancelIdleCallback;const Jr=t=>!!t.type.__asyncLoader,np=t=>t.type.__isKeepAlive;function by(t,e){rp(t,"a",e)}function Ry(t,e){rp(t,"da",e)}function rp(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)np(s.parent.vnode)&&Sy(r,e,n,s),s=s.parent}}function Sy(t,e,n,r){const s=aa(e,t,r,!0);ip(()=>{sl(r[e],s)},n)}function aa(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sr();const c=bi(n),l=an(e,n,t,o);return c(),ir(),l});return r?s.unshift(i):s.push(i),i}}const bn=t=>(e,n=pt)=>{(!hi||t==="sp")&&aa(t,(...r)=>e(...r),n)},Py=bn("bm"),Cy=bn("m"),ky=bn("bu"),sp=bn("u"),Dy=bn("bum"),ip=bn("um"),Vy=bn("sp"),Ny=bn("rtg"),Oy=bn("rtc");function xy(t,e=pt){aa("ec",t,e)}const My="components";function Ft(t,e){return Fy(My,t,!0,e)||t}const Ly=Symbol.for("v-ndc");function Fy(t,e,n=!0,r=!1){const s=It||pt;if(s){const i=s.type;{const c=Rv(i,!1);if(c&&(c===e||c===Ut(e)||c===Zo(Ut(e))))return i}const o=fh(s[t]||i[t],e)||fh(s.appContext[t],e);return!o&&r?i:o}}function fh(t,e){return t&&(t[e]||t[Ut(e)]||t[Zo(Ut(e))])}function Uy(t,e,n,r){let s;const i=n,o=ce(t);if(o||We(t)){const c=o&&Gr(t);let l=!1;c&&(l=!Lt(t),t=na(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?dt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function By(t,e,n={},r,s){if(It.ce||It.parent&&Jr(It.parent)&&It.parent.ce)return Fe(),ko(wt,null,[Pe("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Fe();const o=i&&op(i(n)),c=n.key||o&&o.key,l=ko(wt,{key:(c&&!An(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function op(t){return t.some(e=>ui(e)?!(e.type===Yn||e.type===wt&&!op(e.children)):!0)?t:null}const Tc=t=>t?Rp(t)?El(t):Tc(t.parent):null,Qs=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tc(t.parent),$root:t=>Tc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>gl(t),$forceUpdate:t=>t.f||(t.f=()=>{pl(t.update)}),$nextTick:t=>t.n||(t.n=Yf.bind(t.proxy)),$watch:t=>cv.bind(t)}),Ya=(t,e)=>t!==Ve&&!t.__isScriptSetup&&be(t,e),$y={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ya(r,e))return o[e]=1,r[e];if(s!==Ve&&be(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&be(h,e))return o[e]=3,i[e];if(n!==Ve&&be(n,e))return o[e]=4,n[e];wc&&(o[e]=0)}}const d=Qs[e];let p,g;if(d)return e==="$attrs"&&ht(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&be(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ya(s,e)?(s[e]=n,!0):r!==Ve&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ve&&be(t,o)||Ya(e,o)||(c=i[0])&&be(c,o)||be(r,o)||be(Qs,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ph(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wc=!0;function jy(t){const e=gl(t),n=t.proxy,r=t.ctx;wc=!1,e.beforeCreate&&mh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:y,updated:C,activated:D,deactivated:O,beforeDestroy:$,beforeUnmount:B,destroyed:q,unmounted:z,render:he,renderTracked:de,renderTriggered:I,errorCaptured:v,serverPrefetch:w,expose:A,inheritAttrs:b,components:R,directives:T,filters:_t}=e;if(h&&qy(h,r,null),o)for(const _e in o){const fe=o[_e];ue(fe)&&(r[_e]=fe.bind(n))}if(s){const _e=s.call(n,n);xe(_e)&&(t.data=ra(_e))}if(wc=!0,i)for(const _e in i){const fe=i[_e],St=ue(fe)?fe.bind(n,n):ue(fe.get)?fe.get.bind(n,n):en,$t=!ue(fe)&&ue(fe.set)?fe.set.bind(n):en,Ot=Rt({get:St,set:$t});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Me=>Ot.value=Me})}if(c)for(const _e in c)ap(c[_e],r,n,_e);if(l){const _e=ue(l)?l.call(n):l;Reflect.ownKeys(_e).forEach(fe=>{co(fe,_e[fe])})}d&&mh(d,t,"c");function je(_e,fe){ce(fe)?fe.forEach(St=>_e(St.bind(n))):fe&&_e(fe.bind(n))}if(je(Py,p),je(Cy,g),je(ky,y),je(sp,C),je(by,D),je(Ry,O),je(xy,v),je(Oy,de),je(Ny,I),je(Dy,B),je(ip,z),je(Vy,w),ce(A))if(A.length){const _e=t.exposed||(t.exposed={});A.forEach(fe=>{Object.defineProperty(_e,fe,{get:()=>n[fe],set:St=>n[fe]=St})})}else t.exposed||(t.exposed={});he&&t.render===en&&(t.render=he),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),T&&(t.directives=T),w&&tp(t)}function qy(t,e,n=en){ce(t)&&(t=Ic(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=tn(s.from||r,s.default,!0):i=tn(s.from||r):i=tn(s),nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function mh(t,e,n){an(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ap(t,e,n,r){let s=r.includes(".")?Ep(n,r):()=>n[r];if(We(t)){const i=e[t];ue(i)&&Ys(s,i)}else if(ue(t))Ys(s,t.bind(n));else if(xe(t))if(ce(t))t.forEach(i=>ap(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Ys(s,i,t)}}function gl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Co(l,h,o,!0)),Co(l,e,o)),xe(e)&&i.set(e,l),l}function Co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Co(t,i,n,!0),s&&s.forEach(o=>Co(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Hy[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Hy={data:gh,props:_h,emits:_h,methods:Us,computed:Us,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Us,directives:Us,watch:zy,provide:gh,inject:Wy};function gh(t,e){return e?t?function(){return Je(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Wy(t,e){return Us(Ic(t),Ic(e))}function Ic(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?Je(Object.create(null),t,e):e}function _h(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:Je(Object.create(null),ph(t),ph(e??{})):e}function zy(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function cp(){return{app:null,config:{isNativeTag:k_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ky=0;function Gy(t,e){return function(r,s=null){ue(r)||(r=Je({},r)),s!=null&&!xe(s)&&(s=null);const i=cp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Ky++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Pv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ue(d.install)?(o.add(d),d.install(h,...p)):ue(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!l){const y=h._ceVNode||Pe(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(y,d):t(y,d,g),l=!0,h._container=d,d.__vue_app__=h,El(y.component)}},onUnmount(d){c.push(d)},unmount(){l&&(an(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Xr;Xr=h;try{return d()}finally{Xr=p}}};return h}}let Xr=null;function co(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function tn(t,e,n=!1){const r=pt||It;if(r||Xr){const s=Xr?Xr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const lp={},up=()=>Object.create(lp),hp=t=>Object.getPrototypeOf(t)===lp;function Qy(t,e,n,r=!1){const s={},i=up();t.propsDefaults=Object.create(null),dp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Wf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ca(t.emitsOptions,g))continue;const y=e[g];if(l)if(be(i,g))y!==i[g]&&(i[g]=y,h=!0);else{const C=Ut(g);s[C]=Ac(l,c,C,y,t,!1)}else y!==i[g]&&(i[g]=y,h=!0)}}}else{dp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!be(e,p)&&((d=rr(p))===p||!be(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ac(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],h=!0)}h&&pn(t.attrs,"set","")}function dp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(zs(l))continue;const h=e[l];let d;s&&be(s,d=Ut(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:ca(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||Ve;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ac(s,l,p,h[p],t,!be(h,p))}}return o}function Ac(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=bi(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===rr(n))&&(r=!0))}return r}const Jy=new WeakMap;function fp(t,e,n=!1){const r=n?Jy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const d=p=>{l=!0;const[g,y]=fp(p,e,!0);Je(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return xe(t)&&r.set(t,zr),zr;if(ce(i))for(let d=0;d<i.length;d++){const p=Ut(i[d]);yh(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=Ut(d);if(yh(p)){const g=i[d],y=o[p]=ce(g)||ue(g)?{type:g}:Je({},g),C=y.type;let D=!1,O=!0;if(ce(C))for(let $=0;$<C.length;++$){const B=C[$],q=ue(B)&&B.name;if(q==="Boolean"){D=!0;break}else q==="String"&&(O=!1)}else D=ue(C)&&C.name==="Boolean";y[0]=D,y[1]=O,(D||be(y,"default"))&&c.push(p)}}const h=[o,c];return xe(t)&&r.set(t,h),h}function yh(t){return t[0]!=="$"&&!zs(t)}const pp=t=>t[0]==="_"||t==="$stable",_l=t=>ce(t)?t.map(Xt):[Xt(t)],Xy=(t,e,n)=>{if(e._n)return e;const r=ia((...s)=>_l(e(...s)),n);return r._c=!1,r},mp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pp(s))continue;const i=t[s];if(ue(i))e[s]=Xy(s,i,r);else if(i!=null){const o=_l(i);e[s]=()=>o}}},gp=(t,e)=>{const n=_l(e);t.slots.default=()=>n},_p=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Zy=(t,e,n)=>{const r=t.slots=up();if(t.vnode.shapeFlag&32){const s=e._;s?(_p(r,e,n),n&&Sf(r,"_",s,!0)):mp(e,r)}else e&&gp(t,e)},ev=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:_p(s,e,n):(i=!e.$stable,mp(e,s)),o=e}else e&&(gp(t,e),o={default:1});if(i)for(const c in s)!pp(c)&&o[c]==null&&delete s[c]},Ct=mv;function tv(t){return nv(t)}function nv(t,e){const n=ea();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=en,insertStaticContent:C}=t,D=(_,E,P,L=null,V=null,F=null,K=void 0,H=null,j=!!E.dynamicChildren)=>{if(_===E)return;_&&!xs(_,E)&&(L=N(_),Me(_,V,F,!0),_=null),E.patchFlag===-2&&(j=!1,E.dynamicChildren=null);const{type:U,ref:re,shapeFlag:Q}=E;switch(U){case la:O(_,E,P,L);break;case Yn:$(_,E,P,L);break;case Za:_==null&&B(E,P,L,K);break;case wt:R(_,E,P,L,V,F,K,H,j);break;default:Q&1?he(_,E,P,L,V,F,K,H,j):Q&6?T(_,E,P,L,V,F,K,H,j):(Q&64||Q&128)&&U.process(_,E,P,L,V,F,K,H,j,Z)}re!=null&&V&&Po(re,_&&_.ref,F,E||_,!E)},O=(_,E,P,L)=>{if(_==null)r(E.el=c(E.children),P,L);else{const V=E.el=_.el;E.children!==_.children&&h(V,E.children)}},$=(_,E,P,L)=>{_==null?r(E.el=l(E.children||""),P,L):E.el=_.el},B=(_,E,P,L)=>{[_.el,_.anchor]=C(_.children,E,P,L,_.el,_.anchor)},q=({el:_,anchor:E},P,L)=>{let V;for(;_&&_!==E;)V=g(_),r(_,P,L),_=V;r(E,P,L)},z=({el:_,anchor:E})=>{let P;for(;_&&_!==E;)P=g(_),s(_),_=P;s(E)},he=(_,E,P,L,V,F,K,H,j)=>{E.type==="svg"?K="svg":E.type==="math"&&(K="mathml"),_==null?de(E,P,L,V,F,K,H,j):w(_,E,V,F,K,H,j)},de=(_,E,P,L,V,F,K,H)=>{let j,U;const{props:re,shapeFlag:Q,transition:te,dirs:ee}=_;if(j=_.el=o(_.type,F,re&&re.is,re),Q&8?d(j,_.children):Q&16&&v(_.children,j,null,L,V,Ja(_,F),K,H),ee&&hr(_,null,L,"created"),I(j,_,_.scopeId,K,L),re){for(const Ie in re)Ie!=="value"&&!zs(Ie)&&i(j,Ie,null,re[Ie],F,L);"value"in re&&i(j,"value",null,re.value,F),(U=re.onVnodeBeforeMount)&&Yt(U,L,_)}ee&&hr(_,null,L,"beforeMount");const se=rv(V,te);se&&te.beforeEnter(j),r(j,E,P),((U=re&&re.onVnodeMounted)||se||ee)&&Ct(()=>{U&&Yt(U,L,_),se&&te.enter(j),ee&&hr(_,null,L,"mounted")},V)},I=(_,E,P,L,V)=>{if(P&&y(_,P),L)for(let F=0;F<L.length;F++)y(_,L[F]);if(V){let F=V.subTree;if(E===F||wp(F.type)&&(F.ssContent===E||F.ssFallback===E)){const K=V.vnode;I(_,K,K.scopeId,K.slotScopeIds,V.parent)}}},v=(_,E,P,L,V,F,K,H,j=0)=>{for(let U=j;U<_.length;U++){const re=_[U]=H?Mn(_[U]):Xt(_[U]);D(null,re,E,P,L,V,F,K,H)}},w=(_,E,P,L,V,F,K)=>{const H=E.el=_.el;let{patchFlag:j,dynamicChildren:U,dirs:re}=E;j|=_.patchFlag&16;const Q=_.props||Ve,te=E.props||Ve;let ee;if(P&&dr(P,!1),(ee=te.onVnodeBeforeUpdate)&&Yt(ee,P,E,_),re&&hr(E,_,P,"beforeUpdate"),P&&dr(P,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&d(H,""),U?A(_.dynamicChildren,U,H,P,L,Ja(E,V),F):K||fe(_,E,H,null,P,L,Ja(E,V),F,!1),j>0){if(j&16)b(H,Q,te,P,V);else if(j&2&&Q.class!==te.class&&i(H,"class",null,te.class,V),j&4&&i(H,"style",Q.style,te.style,V),j&8){const se=E.dynamicProps;for(let Ie=0;Ie<se.length;Ie++){const Te=se[Ie],it=Q[Te],Qe=te[Te];(Qe!==it||Te==="value")&&i(H,Te,it,Qe,V,P)}}j&1&&_.children!==E.children&&d(H,E.children)}else!K&&U==null&&b(H,Q,te,P,V);((ee=te.onVnodeUpdated)||re)&&Ct(()=>{ee&&Yt(ee,P,E,_),re&&hr(E,_,P,"updated")},L)},A=(_,E,P,L,V,F,K)=>{for(let H=0;H<E.length;H++){const j=_[H],U=E[H],re=j.el&&(j.type===wt||!xs(j,U)||j.shapeFlag&70)?p(j.el):P;D(j,U,re,null,L,V,F,K,!0)}},b=(_,E,P,L,V)=>{if(E!==P){if(E!==Ve)for(const F in E)!zs(F)&&!(F in P)&&i(_,F,E[F],null,V,L);for(const F in P){if(zs(F))continue;const K=P[F],H=E[F];K!==H&&F!=="value"&&i(_,F,H,K,V,L)}"value"in P&&i(_,"value",E.value,P.value,V)}},R=(_,E,P,L,V,F,K,H,j)=>{const U=E.el=_?_.el:c(""),re=E.anchor=_?_.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ee}=E;ee&&(H=H?H.concat(ee):ee),_==null?(r(U,P,L),r(re,P,L),v(E.children||[],P,re,V,F,K,H,j)):Q>0&&Q&64&&te&&_.dynamicChildren?(A(_.dynamicChildren,te,P,V,F,K,H),(E.key!=null||V&&E===V.subTree)&&yp(_,E,!0)):fe(_,E,P,re,V,F,K,H,j)},T=(_,E,P,L,V,F,K,H,j)=>{E.slotScopeIds=H,_==null?E.shapeFlag&512?V.ctx.activate(E,P,L,K,j):_t(E,P,L,V,F,K,j):Nt(_,E,j)},_t=(_,E,P,L,V,F,K)=>{const H=_.component=Tv(_,L,V);if(np(_)&&(H.ctx.renderer=Z),wv(H,!1,K),H.asyncDep){if(V&&V.registerDep(H,je,K),!_.el){const j=H.subTree=Pe(Yn);$(null,j,E,P)}}else je(H,_,E,P,V,F,K)},Nt=(_,E,P)=>{const L=E.component=_.component;if(fv(_,E,P))if(L.asyncDep&&!L.asyncResolved){_e(L,E,P);return}else L.next=E,L.update();else E.el=_.el,L.vnode=E},je=(_,E,P,L,V,F,K)=>{const H=()=>{if(_.isMounted){let{next:Q,bu:te,u:ee,parent:se,vnode:Ie}=_;{const ot=vp(_);if(ot){Q&&(Q.el=Ie.el,_e(_,Q,K)),ot.asyncDep.then(()=>{_.isUnmounted||H()});return}}let Te=Q,it;dr(_,!1),Q?(Q.el=Ie.el,_e(_,Q,K)):Q=Ie,te&&Wa(te),(it=Q.props&&Q.props.onVnodeBeforeUpdate)&&Yt(it,se,Q,Ie),dr(_,!0);const Qe=Xa(_),Xe=_.subTree;_.subTree=Qe,D(Xe,Qe,p(Xe.el),N(Xe),_,V,F),Q.el=Qe.el,Te===null&&pv(_,Qe.el),ee&&Ct(ee,V),(it=Q.props&&Q.props.onVnodeUpdated)&&Ct(()=>Yt(it,se,Q,Ie),V)}else{let Q;const{el:te,props:ee}=E,{bm:se,m:Ie,parent:Te,root:it,type:Qe}=_,Xe=Jr(E);if(dr(_,!1),se&&Wa(se),!Xe&&(Q=ee&&ee.onVnodeBeforeMount)&&Yt(Q,Te,E),dr(_,!0),te&&Ce){const ot=()=>{_.subTree=Xa(_),Ce(te,_.subTree,_,V,null)};Xe&&Qe.__asyncHydrate?Qe.__asyncHydrate(te,_,ot):ot()}else{it.ce&&it.ce._injectChildStyle(Qe);const ot=_.subTree=Xa(_);D(null,ot,P,L,_,V,F),E.el=ot.el}if(Ie&&Ct(Ie,V),!Xe&&(Q=ee&&ee.onVnodeMounted)){const ot=E;Ct(()=>Yt(Q,Te,ot),V)}(E.shapeFlag&256||Te&&Jr(Te.vnode)&&Te.vnode.shapeFlag&256)&&_.a&&Ct(_.a,V),_.isMounted=!0,E=P=L=null}};_.scope.on();const j=_.effect=new Df(H);_.scope.off();const U=_.update=j.run.bind(j),re=_.job=j.runIfDirty.bind(j);re.i=_,re.id=_.uid,j.scheduler=()=>pl(re),dr(_,!0),U()},_e=(_,E,P)=>{E.component=_;const L=_.vnode.props;_.vnode=E,_.next=null,Yy(_,E.props,L,P),ev(_,E.children,P),sr(),dh(_),ir()},fe=(_,E,P,L,V,F,K,H,j=!1)=>{const U=_&&_.children,re=_?_.shapeFlag:0,Q=E.children,{patchFlag:te,shapeFlag:ee}=E;if(te>0){if(te&128){$t(U,Q,P,L,V,F,K,H,j);return}else if(te&256){St(U,Q,P,L,V,F,K,H,j);return}}ee&8?(re&16&&At(U,V,F),Q!==U&&d(P,Q)):re&16?ee&16?$t(U,Q,P,L,V,F,K,H,j):At(U,V,F,!0):(re&8&&d(P,""),ee&16&&v(Q,P,L,V,F,K,H,j))},St=(_,E,P,L,V,F,K,H,j)=>{_=_||zr,E=E||zr;const U=_.length,re=E.length,Q=Math.min(U,re);let te;for(te=0;te<Q;te++){const ee=E[te]=j?Mn(E[te]):Xt(E[te]);D(_[te],ee,P,null,V,F,K,H,j)}U>re?At(_,V,F,!0,!1,Q):v(E,P,L,V,F,K,H,j,Q)},$t=(_,E,P,L,V,F,K,H,j)=>{let U=0;const re=E.length;let Q=_.length-1,te=re-1;for(;U<=Q&&U<=te;){const ee=_[U],se=E[U]=j?Mn(E[U]):Xt(E[U]);if(xs(ee,se))D(ee,se,P,null,V,F,K,H,j);else break;U++}for(;U<=Q&&U<=te;){const ee=_[Q],se=E[te]=j?Mn(E[te]):Xt(E[te]);if(xs(ee,se))D(ee,se,P,null,V,F,K,H,j);else break;Q--,te--}if(U>Q){if(U<=te){const ee=te+1,se=ee<re?E[ee].el:L;for(;U<=te;)D(null,E[U]=j?Mn(E[U]):Xt(E[U]),P,se,V,F,K,H,j),U++}}else if(U>te)for(;U<=Q;)Me(_[U],V,F,!0),U++;else{const ee=U,se=U,Ie=new Map;for(U=se;U<=te;U++){const yt=E[U]=j?Mn(E[U]):Xt(E[U]);yt.key!=null&&Ie.set(yt.key,U)}let Te,it=0;const Qe=te-se+1;let Xe=!1,ot=0;const Cn=new Array(Qe);for(U=0;U<Qe;U++)Cn[U]=0;for(U=ee;U<=Q;U++){const yt=_[U];if(it>=Qe){Me(yt,V,F,!0);continue}let xt;if(yt.key!=null)xt=Ie.get(yt.key);else for(Te=se;Te<=te;Te++)if(Cn[Te-se]===0&&xs(yt,E[Te])){xt=Te;break}xt===void 0?Me(yt,V,F,!0):(Cn[xt-se]=U+1,xt>=ot?ot=xt:Xe=!0,D(yt,E[xt],P,null,V,F,K,H,j),it++)}const Vr=Xe?sv(Cn):zr;for(Te=Vr.length-1,U=Qe-1;U>=0;U--){const yt=se+U,xt=E[yt],Nr=yt+1<re?E[yt+1].el:L;Cn[U]===0?D(null,xt,P,Nr,V,F,K,H,j):Xe&&(Te<0||U!==Vr[Te]?Ot(xt,P,Nr,2):Te--)}}},Ot=(_,E,P,L,V=null)=>{const{el:F,type:K,transition:H,children:j,shapeFlag:U}=_;if(U&6){Ot(_.component.subTree,E,P,L);return}if(U&128){_.suspense.move(E,P,L);return}if(U&64){K.move(_,E,P,Z);return}if(K===wt){r(F,E,P);for(let Q=0;Q<j.length;Q++)Ot(j[Q],E,P,L);r(_.anchor,E,P);return}if(K===Za){q(_,E,P);return}if(L!==2&&U&1&&H)if(L===0)H.beforeEnter(F),r(F,E,P),Ct(()=>H.enter(F),V);else{const{leave:Q,delayLeave:te,afterLeave:ee}=H,se=()=>r(F,E,P),Ie=()=>{Q(F,()=>{se(),ee&&ee()})};te?te(F,se,Ie):Ie()}else r(F,E,P)},Me=(_,E,P,L=!1,V=!1)=>{const{type:F,props:K,ref:H,children:j,dynamicChildren:U,shapeFlag:re,patchFlag:Q,dirs:te,cacheIndex:ee}=_;if(Q===-2&&(V=!1),H!=null&&Po(H,null,P,_,!0),ee!=null&&(E.renderCache[ee]=void 0),re&256){E.ctx.deactivate(_);return}const se=re&1&&te,Ie=!Jr(_);let Te;if(Ie&&(Te=K&&K.onVnodeBeforeUnmount)&&Yt(Te,E,_),re&6)Qt(_.component,P,L);else{if(re&128){_.suspense.unmount(P,L);return}se&&hr(_,null,E,"beforeUnmount"),re&64?_.type.remove(_,E,P,Z,L):U&&!U.hasOnce&&(F!==wt||Q>0&&Q&64)?At(U,E,P,!1,!0):(F===wt&&Q&384||!V&&re&16)&&At(j,E,P),L&&Le(_)}(Ie&&(Te=K&&K.onVnodeUnmounted)||se)&&Ct(()=>{Te&&Yt(Te,E,_),se&&hr(_,null,E,"unmounted")},P)},Le=_=>{const{type:E,el:P,anchor:L,transition:V}=_;if(E===wt){Pn(P,L);return}if(E===Za){z(_);return}const F=()=>{s(P),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:K,delayLeave:H}=V,j=()=>K(P,F);H?H(_.el,F,j):j()}else F()},Pn=(_,E)=>{let P;for(;_!==E;)P=g(_),s(_),_=P;s(E)},Qt=(_,E,P)=>{const{bum:L,scope:V,job:F,subTree:K,um:H,m:j,a:U}=_;vh(j),vh(U),L&&Wa(L),V.stop(),F&&(F.flags|=8,Me(K,_,E,P)),H&&Ct(H,E),Ct(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},At=(_,E,P,L=!1,V=!1,F=0)=>{for(let K=F;K<_.length;K++)Me(_[K],E,P,L,V)},N=_=>{if(_.shapeFlag&6)return N(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=g(_.anchor||_.el),P=E&&E[Iy];return P?g(P):E};let Y=!1;const G=(_,E,P)=>{_==null?E._vnode&&Me(E._vnode,null,null,!0):D(E._vnode||null,_,E,null,null,null,P),E._vnode=_,Y||(Y=!0,dh(),Xf(),Y=!1)},Z={p:D,um:Me,m:Ot,r:Le,mt:_t,mc:v,pc:fe,pbc:A,n:N,o:t};let ye,Ce;return{render:G,hydrate:ye,createApp:Gy(G,ye)}}function Ja({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yp(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Mn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&yp(o,c)),c.type===la&&(c.el=o.el)}}function sv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vp(e)}function vh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const iv=Symbol.for("v-scx"),ov=()=>tn(iv);function av(t,e){return yl(t,null,e)}function Ys(t,e,n){return yl(t,e,n)}function yl(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,c=Je({},n),l=e&&r||!e&&i!=="post";let h;if(hi){if(i==="sync"){const y=ov();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=en,y.resume=en,y.pause=en,y}}const d=pt;c.call=(y,C,D)=>an(y,d,C,D);let p=!1;i==="post"?c.scheduler=y=>{Ct(y,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,C)=>{C?y():pl(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const g=vy(t,e,c);return hi&&(h?h.push(g):l&&g()),g}function cv(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Ep(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=bi(this),c=yl(s,i.bind(r),n);return o(),c}function Ep(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const lv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${rr(e)}Modifiers`];function uv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&lv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>We(d)?d.trim():d)),o.number&&(s=n.map(x_)));let c,l=r[c=Ha(e)]||r[c=Ha(Ut(e))];!l&&i&&(l=r[c=Ha(rr(e))]),l&&an(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,an(h,t,6,s)}}function Tp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=h=>{const d=Tp(h,e,!0);d&&(c=!0,Je(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(xe(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):Je(o,i),xe(t)&&r.set(t,o),o)}function ca(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,rr(e))||be(t,e))}function Xa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:g,setupState:y,ctx:C,inheritAttrs:D}=t,O=So(t);let $,B;try{if(n.shapeFlag&4){const z=s||r,he=z;$=Xt(h.call(he,z,d,p,y,g,C)),B=c}else{const z=e;$=Xt(z.length>1?z(p,{attrs:c,slots:o,emit:l}):z(p,null)),B=e.props?c:hv(c)}}catch(z){Js.length=0,sa(z,t,1),$=Pe(Yn)}let q=$;if(B&&D!==!1){const z=Object.keys(B),{shapeFlag:he}=q;z.length&&he&7&&(i&&z.some(rl)&&(B=dv(B,i)),q=rs(q,B,!1,!0))}return n.dirs&&(q=rs(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&ml(q,n.transition),$=q,So(O),$}const hv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},dv=(t,e)=>{const n={};for(const r in t)(!rl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Eh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!ca(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Eh(r,o,h):!0:!!o;return!1}function Eh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ca(n,i))return!0}return!1}function pv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const wp=t=>t.__isSuspense;function mv(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):wy(t)}const wt=Symbol.for("v-fgt"),la=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),Za=Symbol.for("v-stc"),Js=[];let Dt=null;function Fe(t=!1){Js.push(Dt=t?null:[])}function gv(){Js.pop(),Dt=Js[Js.length-1]||null}let li=1;function Th(t,e=!1){li+=t,t<0&&Dt&&e&&(Dt.hasOnce=!0)}function Ip(t){return t.dynamicChildren=li>0?Dt||zr:null,gv(),li>0&&Dt&&Dt.push(t),t}function ze(t,e,n,r,s,i){return Ip(Ee(t,e,n,r,s,i,!0))}function ko(t,e,n,r,s){return Ip(Pe(t,e,n,r,s,!0))}function ui(t){return t?t.__v_isVNode===!0:!1}function xs(t,e){return t.type===e.type&&t.key===e.key}const Ap=({key:t})=>t??null,lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||nt(t)||ue(t)?{i:It,r:t,k:e,f:!!n}:t:null);function Ee(t,e=null,n=null,r=0,s=null,i=t===wt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ap(e),ref:e&&lo(e),scopeId:ep,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return c?(vl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),li>0&&!o&&Dt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Dt.push(l),l}const Pe=_v;function _v(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ly)&&(t=Yn),ui(t)){const c=rs(t,e,!0);return n&&vl(c,n),li>0&&!i&&Dt&&(c.shapeFlag&6?Dt[Dt.indexOf(t)]=c:Dt.push(c)),c.patchFlag=-2,c}if(Sv(t)&&(t=t.__vccOpts),e){e=yv(e);let{class:c,style:l}=e;c&&!We(c)&&(e.class=ta(c)),xe(l)&&(fl(l)&&!ce(l)&&(l=Je({},l)),e.style=ol(l))}const o=We(t)?1:wp(t)?128:Ay(t)?64:xe(t)?4:ue(t)?2:0;return Ee(t,e,n,r,s,o,i,!0)}function yv(t){return t?fl(t)||hp(t)?Je({},t):t:null}function rs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?bp(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Ap(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(lo(e)):[i,lo(e)]:lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ml(d,l.clone(d)),d}function qn(t=" ",e=0){return Pe(la,null,t,e)}function Do(t="",e=!1){return e?(Fe(),ko(Yn,null,t)):Pe(Yn,null,t)}function Xt(t){return t==null||typeof t=="boolean"?Pe(Yn):ce(t)?Pe(wt,null,t.slice()):ui(t)?Mn(t):Pe(la,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rs(t)}function vl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!hp(e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[qn(e)]):n=8);t.children=e,t.shapeFlag|=n}function bp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ta([e.class,r.class]));else if(s==="style")e.style=ol([e.style,r.style]);else if(Yo(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){an(t,e,7,[n,r])}const vv=cp();let Ev=0;function Tv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vv,i={uid:Ev++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(r,s),emitsOptions:Tp(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uv.bind(null,i),t.ce&&t.ce(i),i}let pt=null,Vo,bc;{const t=ea(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Vo=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),bc=e("__VUE_SSR_SETTERS__",n=>hi=n)}const bi=t=>{const e=pt;return Vo(t),t.scope.on(),()=>{t.scope.off(),Vo(e)}},wh=()=>{pt&&pt.scope.off(),Vo(null)};function Rp(t){return t.vnode.shapeFlag&4}let hi=!1;function wv(t,e=!1,n=!1){e&&bc(e);const{props:r,children:s}=t.vnode,i=Rp(t);Qy(t,r,i,e),Zy(t,s,n);const o=i?Iv(t,e):void 0;return e&&bc(!1),o}function Iv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$y);const{setup:r}=n;if(r){sr();const s=t.setupContext=r.length>1?bv(t):null,i=bi(t),o=Ai(r,t,0,[t.props,s]),c=Af(o);if(ir(),i(),(c||t.sp)&&!Jr(t)&&tp(t),c){if(o.then(wh,wh),e)return o.then(l=>{Ih(t,l,e)}).catch(l=>{sa(l,t,0)});t.asyncDep=o}else Ih(t,o,e)}else Sp(t,e)}function Ih(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Gf(e)),Sp(t,n)}let Ah;function Sp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ah&&!r.render){const s=r.template||gl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Je(Je({isCustomElement:i,delimiters:c},o),l);r.render=Ah(s,h)}}t.render=r.render||en}{const s=bi(t);sr();try{jy(t)}finally{ir(),s()}}}const Av={get(t,e){return ht(t,"get",""),t[e]}};function bv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Av),slots:t.slots,emit:t.emit,expose:e}}function El(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Gf(ly(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function Rv(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Sv(t){return ue(t)&&"__vccOpts"in t}const Rt=(t,e)=>_y(t,e,hi);function Pp(t,e,n){const r=arguments.length;return r===2?xe(e)&&!ce(e)?ui(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ui(n)&&(n=[n]),Pe(t,e,n))}const Pv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rc;const bh=typeof window<"u"&&window.trustedTypes;if(bh)try{Rc=bh.createPolicy("vue",{createHTML:t=>t})}catch{}const Cp=Rc?t=>Rc.createHTML(t):t=>t,Cv="http://www.w3.org/2000/svg",kv="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Rh=fn&&fn.createElement("template"),Dv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(Cv,t):e==="mathml"?fn.createElementNS(kv,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rh.innerHTML=Cp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Rh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vv=Symbol("_vtc");function Nv(t,e,n){const r=t[Vv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Sh=Symbol("_vod"),Ov=Symbol("_vsh"),xv=Symbol(""),Mv=/(^|;)\s*display\s*:/;function Lv(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&uo(r,c,"")}else for(const o in e)n[o]==null&&uo(r,o,"");for(const o in n)o==="display"&&(i=!0),uo(r,o,n[o])}else if(s){if(e!==n){const o=r[xv];o&&(n+=";"+o),r.cssText=n,i=Mv.test(n)}}else e&&t.removeAttribute("style");Sh in t&&(t[Sh]=i?r.display:"",t[Ov]&&(r.display="none"))}const Ph=/\s*!important$/;function uo(t,e,n){if(ce(n))n.forEach(r=>uo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Fv(t,e);Ph.test(n)?t.setProperty(rr(r),n.replace(Ph,""),"important"):t[r]=n}}const Ch=["Webkit","Moz","ms"],ec={};function Fv(t,e){const n=ec[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return ec[e]=r;r=Zo(r);for(let s=0;s<Ch.length;s++){const i=Ch[s]+r;if(i in t)return ec[e]=i}return e}const kh="http://www.w3.org/1999/xlink";function Dh(t,e,n,r,s,i=$_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(kh,e.slice(6,e.length)):t.setAttributeNS(kh,e,n):n==null||i&&!Pf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":An(n)?String(n):n)}function Vh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Pf(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Uv(t,e,n,r){t.addEventListener(e,n,r)}function Bv(t,e,n,r){t.removeEventListener(e,n,r)}const Nh=Symbol("_vei");function $v(t,e,n,r,s=null){const i=t[Nh]||(t[Nh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=jv(e);if(r){const h=i[e]=Wv(r,s);Uv(t,c,h,l)}else o&&(Bv(t,c,o,l),i[e]=void 0)}}const Oh=/(?:Once|Passive|Capture)$/;function jv(t){let e;if(Oh.test(t)){e={};let r;for(;r=t.match(Oh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rr(t.slice(2)),e]}let tc=0;const qv=Promise.resolve(),Hv=()=>tc||(qv.then(()=>tc=0),tc=Date.now());function Wv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;an(zv(r,n.value),e,5,[r])};return n.value=t,n.attached=Hv(),n}function zv(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Kv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Nv(t,r,o):e==="style"?Lv(t,n,r):Yo(e)?rl(e)||$v(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gv(t,e,r,o))?(Vh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Dh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Vh(t,Ut(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Dh(t,e,r,o))};function Gv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xh(e)&&We(n)?!1:e in t}const Qv=["ctrl","shift","alt","meta"],Yv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qv.some(n=>t[`${n}Key`]&&!e.includes(n))},Tl=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Yv[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Jv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=rr(s.key);if(e.some(o=>o===i||Jv[o]===i))return t(s)})},Zv=Je({patchProp:Kv},Dv);let Mh;function eE(){return Mh||(Mh=tv(Zv))}const tE=(...t)=>{const e=eE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rE(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rE(t){return We(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof document<"u";function kp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&kp(t.default)}const Se=Object.assign;function nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=zt(s)?s.map(t):t(s)}return n}const Xs=()=>{},zt=Array.isArray,Dp=/#/g,iE=/&/g,oE=/\//g,aE=/=/g,cE=/\?/g,Vp=/\+/g,lE=/%5B/g,uE=/%5D/g,Np=/%5E/g,hE=/%60/g,Op=/%7B/g,dE=/%7C/g,xp=/%7D/g,fE=/%20/g;function wl(t){return encodeURI(""+t).replace(dE,"|").replace(lE,"[").replace(uE,"]")}function pE(t){return wl(t).replace(Op,"{").replace(xp,"}").replace(Np,"^")}function Sc(t){return wl(t).replace(Vp,"%2B").replace(fE,"+").replace(Dp,"%23").replace(iE,"%26").replace(hE,"`").replace(Op,"{").replace(xp,"}").replace(Np,"^")}function mE(t){return Sc(t).replace(aE,"%3D")}function gE(t){return wl(t).replace(Dp,"%23").replace(cE,"%3F")}function _E(t){return t==null?"":gE(t).replace(oE,"%2F")}function di(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yE=/\/$/,vE=t=>t.replace(yE,"");function rc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=IE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:di(o)}}function EE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function TE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ss(e.matched[r],n.matched[s])&&Mp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wE(t[n],e[n]))return!1;return!0}function wE(t,e){return zt(t)?Fh(t,e):zt(e)?Fh(e,t):t===e}function Fh(t,e){return zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function IE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zs||(Zs={}));function AE(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vE(t)}const bE=/^[^#]+#/;function RE(t,e){return t.replace(bE,"#")+e}function SE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ua=()=>({left:window.scrollX,top:window.scrollY});function PE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=SE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uh(t,e){return(history.state?history.state.position-e:-1)+t}const Pc=new Map;function CE(t,e){Pc.set(t,e)}function kE(t){const e=Pc.get(t);return Pc.delete(t),e}let DE=()=>location.protocol+"//"+location.host;function Lp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Lh(l,"")}return Lh(n,t)+r+s}function VE(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=Lp(t,location),C=n.value,D=e.value;let O=0;if(g){if(n.value=y,e.value=g,o&&o===C){o=null;return}O=D?g.position-D.position:0}else r(y);s.forEach($=>{$(n.value,C,{delta:O,type:fi.pop,direction:O?O>0?Zs.forward:Zs.back:Zs.unknown})})};function l(){o=n.value}function h(g){s.push(g);const y=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(y),y}function d(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:ua()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Bh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ua():null}}function NE(t){const{history:e,location:n}=window,r={value:Lp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:DE()+t+l;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(y){console.error(y),n[d?"replace":"assign"](g)}}function o(l,h){const d=Se({},e.state,Bh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Se({},s.value,e.state,{forward:l,scroll:ua()});i(d.current,d,!0);const p=Se({},Bh(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function OE(t){t=AE(t);const e=NE(t),n=VE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:RE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xE(t){return typeof t=="string"||t&&typeof t=="object"}function Fp(t){return typeof t=="string"||typeof t=="symbol"}const Up=Symbol("");var $h;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($h||($h={}));function is(t,e){return Se(new Error,{type:t,[Up]:!0},e)}function dn(t,e){return t instanceof Error&&Up in t&&(e==null||!!(t.type&e))}const jh="[^/]+?",ME={sensitive:!1,strict:!1,start:!0,end:!0},LE=/[.+*?^${}()[\]/\\]/g;function FE(t,e){const n=Se({},ME,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let y=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(LE,"\\$&"),y+=40;else if(g.type===1){const{value:C,repeatable:D,optional:O,regexp:$}=g;i.push({name:C,repeatable:D,optional:O});const B=$||jh;if(B!==jh){y+=10;try{new RegExp(`(${B})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+z.message)}}let q=D?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=O&&h.length<2?`(?:/${q})`:"/"+q),O&&(q+="?"),s+=q,y+=20,O&&(y+=-8),D&&(y+=-20),B===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const y=d[g]||"",C=i[g-1];p[C.name]=y&&C.repeatable?y.split("/"):y}return p}function l(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of g)if(y.type===0)d+=y.value;else if(y.type===1){const{value:C,repeatable:D,optional:O}=y,$=C in h?h[C]:"";if(zt($)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=zt($)?$.join("/"):$;if(!B)if(O)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function UE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Bp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=UE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qh(r))return 1;if(qh(s))return-1}return s.length-r.length}function qh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const BE={type:0,value:""},$E=/[a-zA-Z0-9_]/;function jE(t){if(!t)return[[]];if(t==="/")return[[BE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:$E.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function qE(t,e,n){const r=FE(jE(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function HE(t,e){const n=[],r=new Map;e=Kh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,y){const C=!y,D=Wh(p);D.aliasOf=y&&y.record;const O=Kh(e,p),$=[D];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const he of z)$.push(Wh(Se({},D,{components:y?y.record.components:D.components,path:he,aliasOf:y?y.record:D})))}let B,q;for(const z of $){const{path:he}=z;if(g&&he[0]!=="/"){const de=g.record.path,I=de[de.length-1]==="/"?"":"/";z.path=g.record.path+(he&&I+he)}if(B=qE(z,g,O),y?y.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),C&&p.name&&!zh(B)&&o(p.name)),$p(B)&&l(B),D.children){const de=D.children;for(let I=0;I<de.length;I++)i(de[I],B,y&&y.children[I])}y=y||B}return q?()=>{o(q)}:Xs}function o(p){if(Fp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=KE(p,n);n.splice(g,0,p),p.record.name&&!zh(p)&&r.set(p.record.name,p)}function h(p,g){let y,C={},D,O;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw is(1,{location:p});O=y.record.name,C=Se(Hh(g.params,y.keys.filter(q=>!q.optional).concat(y.parent?y.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Hh(p.params,y.keys.map(q=>q.name))),D=y.stringify(C)}else if(p.path!=null)D=p.path,y=n.find(q=>q.re.test(D)),y&&(C=y.parse(D),O=y.record.name);else{if(y=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!y)throw is(1,{location:p,currentLocation:g});O=y.record.name,C=Se({},g.params,p.params),D=y.stringify(C)}const $=[];let B=y;for(;B;)$.unshift(B.record),B=B.parent;return{name:O,path:D,params:C,matched:$,meta:zE($)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Hh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Wh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:WE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function WE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function zh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zE(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Kh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function KE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Bp(t,e[i])<0?r=i:n=i+1}const s=GE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function GE(t){let e=t;for(;e=e.parent;)if($p(e)&&Bp(t,e)===0)return e}function $p({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function QE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Vp," "),o=i.indexOf("="),c=di(o<0?i:i.slice(0,o)),l=o<0?null:di(i.slice(o+1));if(c in e){let h=e[c];zt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Gh(t){let e="";for(let n in t){const r=t[n];if(n=mE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(zt(r)?r.map(i=>i&&Sc(i)):[r&&Sc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const JE=Symbol(""),Qh=Symbol(""),ha=Symbol(""),jp=Symbol(""),Cc=Symbol("");function Ms(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ln(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(is(4,{from:n,to:e})):g instanceof Error?l(g):xE(g)?l(is(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function sc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(kp(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Ln(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=sE(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const y=(p.__vccOpts||p)[e];return y&&Ln(y,n,r,o,c,s)()}))}}return i}function Yh(t){const e=tn(ha),n=tn(jp),r=Rt(()=>{const l=Qr(t.to);return e.resolve(l)}),s=Rt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(ss.bind(null,d));if(g>-1)return g;const y=Jh(l[h-2]);return h>1&&Jh(d)===y&&p[p.length-1].path!==y?p.findIndex(ss.bind(null,l[h-2])):g}),i=Rt(()=>s.value>-1&&tT(n.params,r.value.params)),o=Rt(()=>s.value>-1&&s.value===n.matched.length-1&&Mp(n.params,r.value.params));function c(l={}){return eT(l)?e[Qr(t.replace)?"replace":"push"](Qr(t.to)).catch(Xs):Promise.resolve()}return{route:r,href:Rt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const XE=oa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yh,setup(t,{slots:e}){const n=ra(Yh(t)),{options:r}=tn(ha),s=Rt(()=>({[Xh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ZE=XE;function eT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xh=(t,e,n)=>t??e??n,nT=oa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tn(Cc),s=Rt(()=>t.route||r.value),i=tn(Qh,0),o=Rt(()=>{let h=Qr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=Rt(()=>s.value.matched[o.value]);co(Qh,Rt(()=>o.value+1)),co(JE,c),co(Cc,s);const l=mt();return Ys(()=>[l.value,c.value,t.name],([h,d,p],[g,y,C])=>{d&&(d.instances[p]=h,y&&y!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),h&&d&&(!y||!ss(d,y)||!g)&&(d.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return Zh(n.default,{Component:g,route:h});const y=p.props[d],C=y?y===!0?h.params:typeof y=="function"?y(h):y:null,O=Pp(g,Se({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Zh(n.default,{Component:O,route:h})||O}}});function Zh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rT=nT;function sT(t){const e=HE(t.routes,t),n=t.parseQuery||QE,r=t.stringifyQuery||Gh,s=t.history,i=Ms(),o=Ms(),c=Ms(),l=uy(Nn);let h=Nn;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=nc.bind(null,N=>""+N),p=nc.bind(null,_E),g=nc.bind(null,di);function y(N,Y){let G,Z;return Fp(N)?(G=e.getRecordMatcher(N),Z=Y):Z=N,e.addRoute(Z,G)}function C(N){const Y=e.getRecordMatcher(N);Y&&e.removeRoute(Y)}function D(){return e.getRoutes().map(N=>N.record)}function O(N){return!!e.getRecordMatcher(N)}function $(N,Y){if(Y=Se({},Y||l.value),typeof N=="string"){const E=rc(n,N,Y.path),P=e.resolve({path:E.path},Y),L=s.createHref(E.fullPath);return Se(E,P,{params:g(P.params),hash:di(E.hash),redirectedFrom:void 0,href:L})}let G;if(N.path!=null)G=Se({},N,{path:rc(n,N.path,Y.path).path});else{const E=Se({},N.params);for(const P in E)E[P]==null&&delete E[P];G=Se({},N,{params:p(E)}),Y.params=p(Y.params)}const Z=e.resolve(G,Y),ye=N.hash||"";Z.params=d(g(Z.params));const Ce=EE(r,Se({},N,{hash:pE(ye),path:Z.path})),_=s.createHref(Ce);return Se({fullPath:Ce,hash:ye,query:r===Gh?YE(N.query):N.query||{}},Z,{redirectedFrom:void 0,href:_})}function B(N){return typeof N=="string"?rc(n,N,l.value.path):Se({},N)}function q(N,Y){if(h!==N)return is(8,{from:Y,to:N})}function z(N){return I(N)}function he(N){return z(Se(B(N),{replace:!0}))}function de(N){const Y=N.matched[N.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let Z=typeof G=="function"?G(N):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),Se({query:N.query,hash:N.hash,params:Z.path!=null?{}:N.params},Z)}}function I(N,Y){const G=h=$(N),Z=l.value,ye=N.state,Ce=N.force,_=N.replace===!0,E=de(G);if(E)return I(Se(B(E),{state:typeof E=="object"?Se({},ye,E.state):ye,force:Ce,replace:_}),Y||G);const P=G;P.redirectedFrom=Y;let L;return!Ce&&TE(r,Z,G)&&(L=is(16,{to:P,from:Z}),Ot(Z,Z,!0,!1)),(L?Promise.resolve(L):A(P,Z)).catch(V=>dn(V)?dn(V,2)?V:$t(V):fe(V,P,Z)).then(V=>{if(V){if(dn(V,2))return I(Se({replace:_},B(V.to),{state:typeof V.to=="object"?Se({},ye,V.to.state):ye,force:Ce}),Y||P)}else V=R(P,Z,!0,_,ye);return b(P,Z,V),V})}function v(N,Y){const G=q(N,Y);return G?Promise.reject(G):Promise.resolve()}function w(N){const Y=Pn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function A(N,Y){let G;const[Z,ye,Ce]=iT(N,Y);G=sc(Z.reverse(),"beforeRouteLeave",N,Y);for(const E of Z)E.leaveGuards.forEach(P=>{G.push(Ln(P,N,Y))});const _=v.bind(null,N,Y);return G.push(_),At(G).then(()=>{G=[];for(const E of i.list())G.push(Ln(E,N,Y));return G.push(_),At(G)}).then(()=>{G=sc(ye,"beforeRouteUpdate",N,Y);for(const E of ye)E.updateGuards.forEach(P=>{G.push(Ln(P,N,Y))});return G.push(_),At(G)}).then(()=>{G=[];for(const E of Ce)if(E.beforeEnter)if(zt(E.beforeEnter))for(const P of E.beforeEnter)G.push(Ln(P,N,Y));else G.push(Ln(E.beforeEnter,N,Y));return G.push(_),At(G)}).then(()=>(N.matched.forEach(E=>E.enterCallbacks={}),G=sc(Ce,"beforeRouteEnter",N,Y,w),G.push(_),At(G))).then(()=>{G=[];for(const E of o.list())G.push(Ln(E,N,Y));return G.push(_),At(G)}).catch(E=>dn(E,8)?E:Promise.reject(E))}function b(N,Y,G){c.list().forEach(Z=>w(()=>Z(N,Y,G)))}function R(N,Y,G,Z,ye){const Ce=q(N,Y);if(Ce)return Ce;const _=Y===Nn,E=Br?history.state:{};G&&(Z||_?s.replace(N.fullPath,Se({scroll:_&&E&&E.scroll},ye)):s.push(N.fullPath,ye)),l.value=N,Ot(N,Y,G,_),$t()}let T;function _t(){T||(T=s.listen((N,Y,G)=>{if(!Qt.listening)return;const Z=$(N),ye=de(Z);if(ye){I(Se(ye,{replace:!0}),Z).catch(Xs);return}h=Z;const Ce=l.value;Br&&CE(Uh(Ce.fullPath,G.delta),ua()),A(Z,Ce).catch(_=>dn(_,12)?_:dn(_,2)?(I(_.to,Z).then(E=>{dn(E,20)&&!G.delta&&G.type===fi.pop&&s.go(-1,!1)}).catch(Xs),Promise.reject()):(G.delta&&s.go(-G.delta,!1),fe(_,Z,Ce))).then(_=>{_=_||R(Z,Ce,!1),_&&(G.delta&&!dn(_,8)?s.go(-G.delta,!1):G.type===fi.pop&&dn(_,20)&&s.go(-1,!1)),b(Z,Ce,_)}).catch(Xs)}))}let Nt=Ms(),je=Ms(),_e;function fe(N,Y,G){$t(N);const Z=je.list();return Z.length?Z.forEach(ye=>ye(N,Y,G)):console.error(N),Promise.reject(N)}function St(){return _e&&l.value!==Nn?Promise.resolve():new Promise((N,Y)=>{Nt.add([N,Y])})}function $t(N){return _e||(_e=!N,_t(),Nt.list().forEach(([Y,G])=>N?G(N):Y()),Nt.reset()),N}function Ot(N,Y,G,Z){const{scrollBehavior:ye}=t;if(!Br||!ye)return Promise.resolve();const Ce=!G&&kE(Uh(N.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return Yf().then(()=>ye(N,Y,Ce)).then(_=>_&&PE(_)).catch(_=>fe(_,N,Y))}const Me=N=>s.go(N);let Le;const Pn=new Set,Qt={currentRoute:l,listening:!0,addRoute:y,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:D,resolve:$,options:t,push:z,replace:he,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:je.add,isReady:St,install(N){const Y=this;N.component("RouterLink",ZE),N.component("RouterView",rT),N.config.globalProperties.$router=Y,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Qr(l)}),Br&&!Le&&l.value===Nn&&(Le=!0,z(s.location).catch(ye=>{}));const G={};for(const ye in Nn)Object.defineProperty(G,ye,{get:()=>l.value[ye],enumerable:!0});N.provide(ha,Y),N.provide(jp,Wf(G)),N.provide(Cc,l);const Z=N.unmount;Pn.add(N),N.unmount=function(){Pn.delete(N),Pn.size<1&&(h=Nn,T&&T(),T=null,l.value=Nn,Le=!1,_e=!1),Z()}}};function At(N){return N.reduce((Y,G)=>Y.then(()=>w(G)),Promise.resolve())}return Qt}function iT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>ss(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>ss(h,l))||s.push(l))}return[n,r,s]}function da(){return tn(ha)}const Bt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},oT={name:"App"};function aT(t,e,n,r,s,i){const o=Ft("RouterView");return Fe(),ko(o)}const cT=Bt(oT,[["render",aT]]);var ed={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,y=h&63;l||(y=64,o||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new uT;const g=i<<2|c>>4;if(r.push(g),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hT=function(t){const e=qp(t);return Hp.encodeByteArray(e,!0)},No=function(t){return hT(t).replace(/\./g,"")},Wp=function(t){try{return Hp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=()=>dT().__FIREBASE_DEFAULTS__,pT=()=>{if(typeof process>"u"||typeof ed>"u")return;const t=ed.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wp(t[1]);return e&&JSON.parse(e)},fa=()=>{try{return fT()||pT()||mT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zp=t=>{var e,n;return(n=(e=fa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gT=t=>{const e=zp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kp=()=>{var t;return(t=fa())===null||t===void 0?void 0:t.config},Gp=t=>{var e;return(e=fa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[No(JSON.stringify(n)),No(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function ET(){var t;const e=(t=fa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AT(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bT(){return!ET()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RT(){try{return typeof indexedDB=="object"}catch{return!1}}function ST(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PT,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Rn(s,c,r)}}function CT(t,e){return t.replace(kT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kT=/\{\$([^}]+)}/g;function DT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(td(i)&&td(o)){if(!Oo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function td(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VT(t,e){const n=new NT(t,e);return n.subscribe.bind(n)}class NT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _T;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LT(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MT(t){return t===pr?void 0:t}function LT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const UT={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},BT=pe.INFO,$T={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},jT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$T[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Il{constructor(e){this.name=e,this._logLevel=BT,this._logHandler=jT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const qT=(t,e)=>e.some(n=>t instanceof n);let nd,rd;function HT(){return nd||(nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WT(){return rd||(rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qp=new WeakMap,kc=new WeakMap,Yp=new WeakMap,oc=new WeakMap,Al=new WeakMap;function zT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qp.set(n,t)}).catch(()=>{}),Al.set(e,t),e}function KT(t){if(kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GT(t){Dc=t(Dc)}function QT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return Yp.set(r,e.sort?e.sort():[e]),zn(r)}:WT().includes(t)?function(...e){return t.apply(ac(this),e),zn(Qp.get(this))}:function(...e){return zn(t.apply(ac(this),e))}}function YT(t){return typeof t=="function"?QT(t):(t instanceof IDBTransaction&&KT(t),qT(t,HT())?new Proxy(t,Dc):t)}function zn(t){if(t instanceof IDBRequest)return zT(t);if(oc.has(t))return oc.get(t);const e=YT(t);return e!==t&&(oc.set(t,e),Al.set(e,t)),e}const ac=t=>Al.get(t);function JT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const XT=["get","getKey","getAll","getAllKeys","count"],ZT=["put","add","delete","clear"],cc=new Map;function sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ZT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return cc.set(e,i),i}GT(t=>({...t,get:(e,n,r)=>sd(e,n)||t.get(e,n,r),has:(e,n)=>!!sd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",id="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Il("@firebase/app"),nw="@firebase/app-compat",rw="@firebase/analytics-compat",sw="@firebase/analytics",iw="@firebase/app-check-compat",ow="@firebase/app-check",aw="@firebase/auth",cw="@firebase/auth-compat",lw="@firebase/database",uw="@firebase/data-connect",hw="@firebase/database-compat",dw="@firebase/functions",fw="@firebase/functions-compat",pw="@firebase/installations",mw="@firebase/installations-compat",gw="@firebase/messaging",_w="@firebase/messaging-compat",yw="@firebase/performance",vw="@firebase/performance-compat",Ew="@firebase/remote-config",Tw="@firebase/remote-config-compat",ww="@firebase/storage",Iw="@firebase/storage-compat",Aw="@firebase/firestore",bw="@firebase/vertexai",Rw="@firebase/firestore-compat",Sw="firebase",Pw="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",Cw={[Vc]:"fire-core",[nw]:"fire-core-compat",[sw]:"fire-analytics",[rw]:"fire-analytics-compat",[ow]:"fire-app-check",[iw]:"fire-app-check-compat",[aw]:"fire-auth",[cw]:"fire-auth-compat",[lw]:"fire-rtdb",[uw]:"fire-data-connect",[hw]:"fire-rtdb-compat",[dw]:"fire-fn",[fw]:"fire-fn-compat",[pw]:"fire-iid",[mw]:"fire-iid-compat",[gw]:"fire-fcm",[_w]:"fire-fcm-compat",[yw]:"fire-perf",[vw]:"fire-perf-compat",[Ew]:"fire-rc",[Tw]:"fire-rc-compat",[ww]:"fire-gcs",[Iw]:"fire-gcs-compat",[Aw]:"fire-fst",[Rw]:"fire-fst-compat",[bw]:"fire-vertex","fire-js":"fire-js",[Sw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map,kw=new Map,Oc=new Map;function od(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Oc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of xo.values())od(n,t);for(const n of kw.values())od(n,t);return!0}function bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Ri("app","Firebase",Dw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=Pw;function Jp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(n||(n=Kp()),!n)throw Kn.create("no-options");const i=xo.get(s);if(i){if(Oo(n,i.options)&&Oo(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const o=new FT(s);for(const l of Oc.values())o.addComponent(l);const c=new Vw(n,r,o);return xo.set(s,c),c}function Xp(t=Nc){const e=xo.get(t);if(!e&&t===Nc&&Kp())return Jp();if(!e)throw Kn.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let s=(r=Cw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(c.join(" "));return}os(new Tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="firebase-heartbeat-database",Ow=1,pi="firebase-heartbeat-store";let lc=null;function Zp(){return lc||(lc=JT(Nw,Ow,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),lc}async function xw(t){try{const n=(await Zp()).transaction(pi),r=await n.objectStore(pi).get(em(t));return await n.done,r}catch(e){if(e instanceof Rn)En.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function ad(t,e){try{const r=(await Zp()).transaction(pi,"readwrite");await r.objectStore(pi).put(e,em(t)),await r.done}catch(n){if(n instanceof Rn)En.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function em(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=1024,Lw=30*24*60*60*1e3;class Fw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Lw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cd(),{heartbeatsToSend:r,unsentEntries:s}=Uw(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return En.warn(n),""}}}function cd(){return new Date().toISOString().substring(0,10)}function Uw(t,e=Mw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ld(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ld(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RT()?ST().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ld(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t){os(new Tr("platform-logger",e=>new ew(e),"PRIVATE")),os(new Tr("heartbeat",e=>new Fw(e),"PRIVATE")),Gn(Vc,id,t),Gn(Vc,id,"esm2017"),Gn("fire-js","")}$w("");var jw="firebase",qw="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(jw,qw,"app");var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,tm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,b,R){for(var T=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)T[_t-2]=arguments[_t];return v.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,w){w||(w=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],b=I.g[2];var R=I.g[3],T=v+(R^w&(b^R))+A[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=R+(b^v&(w^b))+A[1]+3905402710&4294967295,R=v+(T<<12&4294967295|T>>>20),T=b+(w^R&(v^w))+A[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=w+(v^b&(R^v))+A[3]+3250441966&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(R^w&(b^R))+A[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=R+(b^v&(w^b))+A[5]+1200080426&4294967295,R=v+(T<<12&4294967295|T>>>20),T=b+(w^R&(v^w))+A[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=w+(v^b&(R^v))+A[7]+4249261313&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(R^w&(b^R))+A[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=R+(b^v&(w^b))+A[9]+2336552879&4294967295,R=v+(T<<12&4294967295|T>>>20),T=b+(w^R&(v^w))+A[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=w+(v^b&(R^v))+A[11]+2304563134&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(R^w&(b^R))+A[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=R+(b^v&(w^b))+A[13]+4254626195&4294967295,R=v+(T<<12&4294967295|T>>>20),T=b+(w^R&(v^w))+A[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=w+(v^b&(R^v))+A[15]+1236535329&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(b^R&(w^b))+A[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=R+(w^b&(v^w))+A[6]+3225465664&4294967295,R=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(R^v))+A[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=w+(R^v&(b^R))+A[0]+3921069994&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^R&(w^b))+A[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=R+(w^b&(v^w))+A[10]+38016083&4294967295,R=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(R^v))+A[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=w+(R^v&(b^R))+A[4]+3889429448&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^R&(w^b))+A[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=R+(w^b&(v^w))+A[14]+3275163606&4294967295,R=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(R^v))+A[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=w+(R^v&(b^R))+A[8]+1163531501&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^R&(w^b))+A[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=R+(w^b&(v^w))+A[2]+4243563512&4294967295,R=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(R^v))+A[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=w+(R^v&(b^R))+A[12]+2368359562&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(w^b^R)+A[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=R+(v^w^b)+A[8]+2272392833&4294967295,R=v+(T<<11&4294967295|T>>>21),T=b+(R^v^w)+A[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=w+(b^R^v)+A[14]+4259657740&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^R)+A[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=R+(v^w^b)+A[4]+1272893353&4294967295,R=v+(T<<11&4294967295|T>>>21),T=b+(R^v^w)+A[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=w+(b^R^v)+A[10]+3200236656&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^R)+A[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=R+(v^w^b)+A[0]+3936430074&4294967295,R=v+(T<<11&4294967295|T>>>21),T=b+(R^v^w)+A[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=w+(b^R^v)+A[6]+76029189&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^R)+A[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=R+(v^w^b)+A[12]+3873151461&4294967295,R=v+(T<<11&4294967295|T>>>21),T=b+(R^v^w)+A[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=w+(b^R^v)+A[2]+3299628645&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(b^(w|~R))+A[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=R+(w^(v|~b))+A[7]+1126891415&4294967295,R=v+(T<<10&4294967295|T>>>22),T=b+(v^(R|~w))+A[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=w+(R^(b|~v))+A[5]+4237533241&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~R))+A[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=R+(w^(v|~b))+A[3]+2399980690&4294967295,R=v+(T<<10&4294967295|T>>>22),T=b+(v^(R|~w))+A[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=w+(R^(b|~v))+A[1]+2240044497&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~R))+A[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=R+(w^(v|~b))+A[15]+4264355552&4294967295,R=v+(T<<10&4294967295|T>>>22),T=b+(v^(R|~w))+A[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=w+(R^(b|~v))+A[13]+1309151649&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~R))+A[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=R+(w^(v|~b))+A[11]+3174756917&4294967295,R=v+(T<<10&4294967295|T>>>22),T=b+(v^(R|~w))+A[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=w+(R^(b|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,A=this.B,b=this.h,R=0;R<v;){if(b==0)for(;R<=w;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<v;)if(A[b++]=I.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<v;)if(A[b++]=I[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var A=0;32>A;A+=8)I[w++]=this.g[v]>>>A&255;return I};function i(I,v){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function o(I,v){this.h=v;for(var w=[],A=!0,b=I.length-1;0<=b;b--){var R=I[b]|0;A&&R==v||(w[b]=R,A=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(h(-I));for(var v=[],w=1,A=0;I>=w;A++)v[A]=I/w|0,w*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return O(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),A=p,b=0;b<I.length;b+=8){var R=Math.min(8,I.length-b),T=parseInt(I.substring(b,b+R),v);8>R?(R=h(Math.pow(v,R)),A=A.j(R).add(h(T))):(A=A.j(w),A=A.add(h(T)))}return A}var p=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(D(this))return"-"+O(this).toString(I);for(var v=h(Math.pow(I,6)),w=this,A="";;){var b=z(w,v).g;w=$(w,b.j(v));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,C(w))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function D(I){return I.h==-1}t.l=function(I){return I=$(this,I),D(I)?-1:C(I)?0:1};function O(I){for(var v=I.g.length,w=[],A=0;A<v;A++)w[A]=~I.g[A];return new o(w,~I.h).add(g)}t.abs=function(){return D(this)?O(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0,b=0;b<=v;b++){var R=A+(this.i(b)&65535)+(I.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=T>>>16,R&=65535,T&=65535,w[b]=T<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function $(I,v){return I.add(O(v))}t.j=function(I){if(C(this)||C(I))return p;if(D(this))return D(I)?O(this).j(O(I)):O(O(this).j(I));if(D(I))return O(this.j(O(I)));if(0>this.l(y)&&0>I.l(y))return h(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],A=0;A<2*v;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var R=this.i(A)>>>16,T=this.i(A)&65535,_t=I.i(b)>>>16,Nt=I.i(b)&65535;w[2*A+2*b]+=T*Nt,B(w,2*A+2*b),w[2*A+2*b+1]+=R*Nt,B(w,2*A+2*b+1),w[2*A+2*b+1]+=T*_t,B(w,2*A+2*b+1),w[2*A+2*b+2]+=R*_t,B(w,2*A+2*b+2)}for(A=0;A<v;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=v;A<2*v;A++)w[A]=0;return new o(w,0)};function B(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function q(I,v){this.g=I,this.h=v}function z(I,v){if(C(v))throw Error("division by zero");if(C(I))return new q(p,p);if(D(I))return v=z(O(I),v),new q(O(v.g),O(v.h));if(D(v))return v=z(I,O(v)),new q(O(v.g),v.h);if(30<I.g.length){if(D(I)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,A=v;0>=A.l(I);)w=he(w),A=he(A);var b=de(w,1),R=de(A,1);for(A=de(A,2),w=de(w,2);!C(A);){var T=R.add(A);0>=T.l(I)&&(b=b.add(w),R=T),A=de(A,1),w=de(w,1)}return v=$(I,b.j(v)),new q(b,v)}for(b=p;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(w),T=R.j(v);D(T)||0<T.l(I);)w-=A,R=h(w),T=R.j(v);C(R)&&(R=g),b=b.add(R),I=$(I,T)}return new q(b,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)&I.i(A);return new o(w,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)|I.i(A);return new o(w,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)^I.i(A);return new o(w,this.h^I.h)};function he(I){for(var v=I.g.length+1,w=[],A=0;A<v;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(w,I.h)}function de(I,v){var w=v>>5;v%=32;for(var A=I.g.length-w,b=[],R=0;R<A;R++)b[R]=0<v?I.i(R+w)>>>v|I.i(R+w+1)<<32-v:I.i(R+w);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,yr=o}).apply(typeof ud<"u"?ud:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nm,js,rm,ho,xc,sm,im,om;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in f))break e;f=f[S]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,S={next:function(){if(!m&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,S,k){for(var W=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)W[ke-2]=arguments[ke];return u.prototype[S].apply(m,W)}}function D(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(l(m)){const S=a.length||0,k=m.length||0;a.length=S+k;for(let W=0;W<k;W++)a[S+W]=m[W]}else a.push(m)}}class ${constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var he=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function de(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function v(a){const u={};for(const f in a)u[f]=a[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)a[f]=m[f];for(let k=0;k<w.length;k++)f=w[k],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function T(){var a=St;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class _t{constructor(){this.h=this.g=null}add(u,f){const m=Nt.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Nt=new $(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,fe=!1,St=new _t,$t=()=>{const a=c.Promise.resolve(void 0);_e=()=>{a.then(Ot)}};var Ot=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){R(f)}var u=Nt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}fe=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Pn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Qt(a,u){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(he){e:{try{z(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Qt.aa.h.call(this)}}C(Qt,Le);var At={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),Y=0;function G(a,u,f,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=S,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,u,f,m,S){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var W=_(a,u,m,S);return-1<W?(u=a[W],f||(u.fa=!1)):(u=new G(u,this.src,k,!!m,S),u.fa=f,a.push(u)),u};function Ce(a,u){var f=u.type;if(f in a.g){var m=a.g[f],S=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(m,S,1),k&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function _(a,u,f,m){for(var S=0;S<a.length;++S){var k=a[S];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==m)return S}return-1}var E="closure_lm_"+(1e6*Math.random()|0),P={};function L(a,u,f,m,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)L(a,u[k],f,m,S);return null}return f=te(f),a&&a[N]?a.K(u,f,h(m)?!!m.capture:!!m,S):V(a,u,f,!1,m,S)}function V(a,u,f,m,S,k){if(!u)throw Error("Invalid event type");var W=h(S)?!!S.capture:!!S,ke=re(a);if(ke||(a[E]=ke=new ye(a)),f=ke.add(u,f,m,W,k),f.proxy)return f;if(m=F(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Pn||(S=W),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(j(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function a(f){return u.call(a.src,a.listener,f)}const u=U;return a}function K(a,u,f,m,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)K(a,u[k],f,m,S);else m=h(m)?!!m.capture:!!m,f=te(f),a&&a[N]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=_(k,f,m,S),-1<f&&(Z(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=re(a))&&(u=a.g[u.toString()],a=-1,u&&(a=_(u,f,m,S)),(f=-1<a?u[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[N])Ce(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(j(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=re(u))?(Ce(f,a),f.h==0&&(f.src=null,u[E]=null)):Z(a)}}}function j(a){return a in P?P[a]:P[a]="on"+a}function U(a,u){if(a.da)a=!0;else{u=new Qt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&H(a),a=f.call(m,u)}return a}function re(a){return a=a[E],a instanceof ye?a:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(u){return a.handleEvent(u)}),a[Q])}function ee(){Me.call(this),this.i=new ye(this),this.M=this,this.F=null}C(ee,Me),ee.prototype[N]=!0,ee.prototype.removeEventListener=function(a,u,f,m){K(this,a,u,f,m)};function se(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Le(u,a);else if(u instanceof Le)u.target=u.target||a;else{var S=u;u=new Le(m,a),A(u,S)}if(S=!0,f)for(var k=f.length-1;0<=k;k--){var W=u.g=f[k];S=Ie(W,m,!0,u)&&S}if(W=u.g=a,S=Ie(W,m,!0,u)&&S,S=Ie(W,m,!1,u)&&S,f)for(k=0;k<f.length;k++)W=u.g=f[k],S=Ie(W,m,!1,u)&&S}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)Z(f[m]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},ee.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Ie(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var W=u[k];if(W&&!W.da&&W.capture==f){var ke=W.listener,Ze=W.ha||W.src;W.fa&&Ce(a.i,W),S=ke.call(Ze,m)!==!1&&S}}return S&&!m.defaultPrevented}function Te(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function it(a){a.g=Te(()=>{a.g=null,a.i&&(a.i=!1,it(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Qe extends Me{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(a){Me.call(this),this.h=a,this.g={}}C(Xe,Me);var ot=[];function Cn(a){de(a.g,function(u,f){this.g.hasOwnProperty(f)&&H(u)},a),a.g={}}Xe.prototype.N=function(){Xe.aa.N.call(this),Cn(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=c.JSON.stringify,yt=c.JSON.parse,xt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Nr(){}Nr.prototype.h=null;function yu(a){return a.h||(a.h=a.i())}function vu(){}var ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ka(){Le.call(this,"d")}C(ka,Le);function Da(){Le.call(this,"c")}C(Da,Le);var ar={},Eu=null;function Mi(){return Eu=Eu||new ee}ar.La="serverreachability";function Tu(a){Le.call(this,ar.La,a)}C(Tu,Le);function Is(a){const u=Mi();se(u,new Tu(u))}ar.STAT_EVENT="statevent";function wu(a,u){Le.call(this,ar.STAT_EVENT,a),this.stat=u}C(wu,Le);function vt(a){const u=Mi();se(u,new wu(u,a))}ar.Ma="timingevent";function Iu(a,u){Le.call(this,ar.Ma,a),this.size=u}C(Iu,Le);function As(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function a_(a,u,f,m,S,k){a.info(function(){if(a.g)if(k)for(var W="",ke=k.split("&"),Ze=0;Ze<ke.length;Ze++){var we=ke[Ze].split("=");if(1<we.length){var at=we[0];we=we[1];var ct=at.split("_");W=2<=ct.length&&ct[1]=="type"?W+(at+"="+we+"&"):W+(at+"=redacted&")}}else W=null;else W=k;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+f+`
`+W})}function c_(a,u,f,m,S,k,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+f+`
`+k+" "+W})}function Or(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+u_(a,f)+(m?" "+m:"")})}function l_(a,u){a.info(function(){return"TIMEOUT: "+u})}bs.prototype.info=function(){};function u_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var W=1;W<S.length;W++)S[W]=""}}}}return Vr(f)}catch{return u}}var Li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Au={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Va;function Fi(){}C(Fi,Nr),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Va=new Fi;function kn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new Xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bu}function bu(){this.i=null,this.g="",this.h=!1}var Ru={},Na={};function Oa(a,u,f){a.L=1,a.v=ji(ln(u)),a.m=f,a.P=!0,Su(a,null)}function Su(a,u){a.F=Date.now(),Ui(a),a.A=ln(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),$u(f.i,"t",m),a.C=0,f=a.j.J,a.h=new bu,a.g=ih(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Qe(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(ot[0]=S.toString()),S=ot);for(var k=0;k<S.length;k++){var W=L(f,S[k],m||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Is(),a_(a.i,a.u,a.A,a.l,a.R,a.m)}kn.prototype.ca=function(a){a=a.target;const u=this.M;u&&un(a)==3?u.j():this.Y(a)},kn.prototype.Y=function(a){try{if(a==this.g)e:{const ct=un(this.g);var u=this.g.Ba();const Lr=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Gu(this.g)))){this.J||ct!=4||u==7||(u==8||0>=Lr?Is(3):Is(2)),xa(this);var f=this.g.Z();this.X=f;t:if(Pu(this)){var m=Gu(this.g);a="";var S=m.length,k=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),Rs(this);var W="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,c_(this.i,this.u,this.A,this.l,this.R,ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ze=this.g;if((ke=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ke)){var we=ke;break t}}we=null}if(f=we)Or(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,f);else{this.o=!1,this.s=3,vt(12),cr(this),Rs(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<W.length;)if(jt=h_(this,W),jt==Na){ct==4&&(this.s=4,vt(14),f=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Ru){this.s=4,vt(15),Or(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else Or(this.i,this.l,jt,null),Ma(this,jt);if(Pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||W.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)Or(this.i,this.l,W,"[Invalid Chunked Response]"),cr(this),Rs(this);else if(0<W.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ja(at),at.M=!0,vt(11))}}else Or(this.i,this.l,W,null),Ma(this,W);ct==4&&cr(this),this.o&&!this.J&&(ct==4?th(this.j,this):(this.o=!1,Ui(this)))}else P_(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),cr(this),Rs(this)}}}catch{}finally{}};function Pu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function h_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Na:(f=Number(u.substring(f,m)),isNaN(f)?Ru:(m+=1,m+f>u.length?Na:(u=u.slice(m,m+f),a.C=m+f,u)))}kn.prototype.cancel=function(){this.J=!0,cr(this)};function Ui(a){a.S=Date.now()+a.I,Cu(a,a.I)}function Cu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=As(g(a.ba,a),u)}function xa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(l_(this.i,this.A),this.L!=2&&(Is(),vt(17)),cr(this),this.s=2,Rs(this)):Cu(this,this.S-a)};function Rs(a){a.j.G==0||a.J||th(a.j,a)}function cr(a){xa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Cn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ma(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||La(f.h,a))){if(!a.K&&La(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Gi(f),zi(f);else break e;$a(f),vt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=As(g(f.Za,f),6e3));if(1>=Vu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ur(f,11)}else if((a.K||f.g==a)&&Gi(f),!B(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let we=S[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const at=we[3];at!=null&&(f.la=at,f.j.info("VER="+f.la));const ct=we[4];ct!=null&&(f.Aa=ct,f.j.info("SVER="+f.Aa));const Lr=we[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(m=1.5*Lr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const jt=a.g;if(jt){const Yi=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var k=m.h;k.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Fa(k,k.h),k.h=null))}if(m.D){const qa=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(m.ya=qa,Ne(m.I,m.D,qa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=a;if(m.qa=sh(m,m.J?m.ia:null,m.W),W.K){Nu(m.h,W);var ke=W,Ze=m.L;Ze&&(ke.I=Ze),ke.B&&(xa(ke),Ui(ke)),m.g=W}else Zu(m);0<f.i.length&&Ki(f)}else we[0]!="stop"&&we[0]!="close"||ur(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?ur(f,7):Ba(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}Is(4)}catch{}}var d_=class{constructor(a,u){this.g=a,this.map=u}};function ku(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Du(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vu(a){return a.h?1:a.g?a.g.size:0}function La(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Fa(a,u){a.g?a.g.add(u):a.h=u}function Nu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ku.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ou(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return D(a.i)}function f_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function p_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function xu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=p_(a),m=f_(a),S=m.length,k=0;k<S;k++)u.call(void 0,m[k],f&&f[k],a)}var Mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function m_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),S=null;if(0<=m){var k=a[f].substring(0,m);S=a[f].substring(m+1)}else k=a[f];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof lr){this.h=a.h,Bi(this,a.j),this.o=a.o,this.g=a.g,$i(this,a.s),this.l=a.l;var u=a.i,f=new Cs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Lu(this,f),this.m=a.m}else a&&(u=String(a).match(Mu))?(this.h=!1,Bi(this,u[1]||"",!0),this.o=Ss(u[2]||""),this.g=Ss(u[3]||"",!0),$i(this,u[4]),this.l=Ss(u[5]||"",!0),Lu(this,u[6]||"",!0),this.m=Ss(u[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}lr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ps(u,Fu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ps(u,Fu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ps(f,f.charAt(0)=="/"?y_:__,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ps(f,E_)),a.join("")};function ln(a){return new lr(a)}function Bi(a,u,f){a.j=f?Ss(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function $i(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Lu(a,u,f){u instanceof Cs?(a.i=u,T_(a.i,a.h)):(f||(u=Ps(u,v_)),a.i=new Cs(u,a.h))}function Ne(a,u,f){a.i.set(u,f)}function ji(a){return Ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ss(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,g_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function g_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fu=/[#\/\?@]/g,__=/[#\?:]/g,y_=/[#\?]/g,v_=/[#\?@]/g,E_=/#/g;function Cs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&m_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Cs.prototype,t.add=function(a,u){Dn(this),this.i=null,a=xr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Uu(a,u){Dn(a),u=xr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Bu(a,u){return Dn(a),u=xr(a,u),a.g.has(u)}t.forEach=function(a,u){Dn(this),this.g.forEach(function(f,m){f.forEach(function(S){a.call(u,S,m,this)},this)},this)},t.na=function(){Dn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const S=a[m];for(let k=0;k<S.length;k++)f.push(u[m])}return f},t.V=function(a){Dn(this);let u=[];if(typeof a=="string")Bu(this,a)&&(u=u.concat(this.g.get(xr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Dn(this),this.i=null,a=xr(this,a),Bu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function $u(a,u,f){Uu(a,u),0<f.length&&(a.i=null,a.g.set(xr(a,u),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const k=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var S=k;W[m]!==""&&(S+="="+encodeURIComponent(String(W[m]))),a.push(S)}}return this.i=a.join("&")};function xr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function T_(a,u){u&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(Uu(this,m),$u(this,S,f))},a)),a.j=u}function w_(a,u){const f=new bs;if(c.Image){const m=new Image;m.onload=y(Vn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=y(Vn,f,"TestLoadImage: error",!1,u,m),m.onabort=y(Vn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=y(Vn,f,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function I_(a,u){const f=new bs,m=new AbortController,S=setTimeout(()=>{m.abort(),Vn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(S),k.ok?Vn(f,"TestPingServer: ok",!0,u):Vn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Vn(f,"TestPingServer: error",!1,u)})}function Vn(a,u,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function A_(){this.g=new xt}function b_(a,u,f){const m=f||"";try{xu(a,function(S,k){let W=S;h(S)&&(W=Vr(S)),u.push(m+k+"="+encodeURIComponent(W))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function qi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(qi,Nr),qi.prototype.g=function(){return new Hi(this.l,this.j)},qi.prototype.i=function(a){return function(){return a}}({});function Hi(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Hi,ee),t=Hi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ju(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ju(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ks(this):Ds(this),this.readyState==3&&ju(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ks(this))},t.Qa=function(a){this.g&&(this.response=a,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ds(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qu(a){let u="";return de(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Ua(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=qu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ne(a,u,f))}function Be(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Be,ee);var R_=/^https?$/i,S_=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Va.g(),this.v=this.o?yu(this.o):yu(Va),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){Hu(this,k);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())f.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(S_,u,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of f)this.g.setRequestHeader(k,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ku(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Hu(this,k)}};function Hu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Wu(a),Wi(a)}function Wu(a){a.A||(a.A=!0,se(a,"complete"),se(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,se(this,"complete"),se(this,"abort"),Wi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wi(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zu(this):this.bb())},t.bb=function(){zu(this)};function zu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)Te(a.Ea,0,a);else if(se(a,"readystatechange"),un(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=W===0){var S=String(a.D).match(Mu)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!R_.test(S?S.toLowerCase():"")}f=m}if(f)se(a,"complete"),se(a,"success");else{a.m=6;try{var k=2<un(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Wu(a)}}finally{Wi(a)}}}}function Wi(a,u){if(a.g){Ku(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||se(a,"ready");try{f.onreadystatechange=m}catch{}}}function Ku(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),yt(u)}};function Gu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function P_(a){const u={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var f=b(a[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[S]||[];u[S]=k,k.push(f)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Qu(a){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,a),this.cb=Vs("retryDelaySeedMs",1e4,a),this.Wa=Vs("forwardChannelMaxRetries",2,a),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ku(a&&a.concurrentRequestLimit),this.Da=new A_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qu.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){vt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=sh(this,null,this.W),Ki(this)};function Ba(a){if(Yu(a),a.G==3){var u=a.U++,f=ln(a.I);if(Ne(f,"SID",a.K),Ne(f,"RID",u),Ne(f,"TYPE","terminate"),Ns(a,f),u=new kn(a,a.j,u),u.L=2,u.v=ji(ln(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=ih(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ui(u)}rh(a)}function zi(a){a.g&&(ja(a),a.g.cancel(),a.g=null)}function Yu(a){zi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Gi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ki(a){if(!Du(a.h)&&!a.s){a.s=!0;var u=a.Ga;_e||$t(),fe||(_e(),fe=!0),St.add(u,a),a.B=0}}function C_(a,u){return Vu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=As(g(a.Ga,a,u),nh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new kn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=v(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Xu(this,S,u),f=ln(this.I),Ne(f,"RID",a),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),Ns(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(qu(k)))+"&"+u:this.m&&Ua(f,this.m,k)),Fa(this.h,S),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",u),Ne(f,"SID","null"),S.T=!0,Oa(S,f,null)):Oa(S,f,u),this.G=2}}else this.G==3&&(a?Ju(this,a):this.i.length==0||Du(this.h)||Ju(this))};function Ju(a,u){var f;u?f=u.l:f=a.U++;const m=ln(a.I);Ne(m,"SID",a.K),Ne(m,"RID",f),Ne(m,"AID",a.T),Ns(a,m),a.m&&a.o&&Ua(m,a.m,a.o),f=new kn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Xu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fa(a.h,f),Oa(f,m,u)}function Ns(a,u){a.H&&de(a.H,function(f,m){Ne(u,m,f)}),a.l&&xu({},function(f,m){Ne(u,m,f)})}function Xu(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let k=-1;for(;;){const W=["count="+f];k==-1?0<f?(k=S[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let ke=!0;for(let Ze=0;Ze<f;Ze++){let we=S[Ze].g;const at=S[Ze].map;if(we-=k,0>we)k=Math.max(0,S[Ze].g-100),ke=!1;else try{b_(at,W,"req"+we+"_")}catch{m&&m(at)}}if(ke){m=W.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function Zu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;_e||$t(),fe||(_e(),fe=!0),St.add(u,a),a.v=0}}function $a(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=As(g(a.Fa,a),nh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,eh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=As(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),zi(this),eh(this))};function ja(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function eh(a){a.g=new kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ln(a.qa);Ne(u,"RID","rpc"),Ne(u,"SID",a.K),Ne(u,"AID",a.T),Ne(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ne(u,"TO",a.ja),Ne(u,"TYPE","xmlhttp"),Ns(a,u),a.m&&a.o&&Ua(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ji(ln(u)),f.m=null,f.P=!0,Su(f,a)}t.Za=function(){this.C!=null&&(this.C=null,zi(this),$a(this),vt(19))};function Gi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function th(a,u){var f=null;if(a.g==u){Gi(a),ja(a),a.g=null;var m=2}else if(La(a.h,u))f=u.D,Nu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=Mi(),se(m,new Iu(m,f)),Ki(a)}else Zu(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&C_(a,u)||m==2&&$a(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:ur(a,5);break;case 4:ur(a,10);break;case 3:ur(a,6);break;default:ur(a,2)}}}function nh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function ur(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const S=!m;m=new lr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bi(m,"https"),ji(m),S?w_(m.toString(),f):I_(m.toString(),f)}else vt(2);a.G=0,a.l&&a.l.sa(u),rh(a),Yu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function rh(a){if(a.G=0,a.ka=[],a.l){const u=Ou(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function sh(a,u,f){var m=f instanceof lr?ln(f):new lr(f);if(m.g!="")u&&(m.g=u+"."+m.g),$i(m,m.s);else{var S=c.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new lr(null);m&&Bi(k,m),u&&(k.g=u),S&&$i(k,S),f&&(k.l=f),m=k}return f=a.D,u=a.ya,f&&u&&Ne(m,f,u),Ne(m,"VER",a.la),Ns(a,m),m}function ih(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Be(new qi({eb:f})):new Be(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function oh(){}t=oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qi(){}Qi.prototype.g=function(a,u){return new Pt(a,u)};function Pt(a,u){ee.call(this),this.g=new Qu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Mr(this)}C(Pt,ee),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Ba(this.g)},Pt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Vr(a),a=f);u.i.push(new d_(u.Ya++,a)),u.G==3&&Ki(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,Pt.aa.N.call(this)};function ah(a){ka.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(ah,ka);function ch(){Da.call(this),this.status=1}C(ch,Da);function Mr(a){this.g=a}C(Mr,oh),Mr.prototype.ua=function(){se(this.g,"a")},Mr.prototype.ta=function(a){se(this.g,new ah(a))},Mr.prototype.sa=function(a){se(this.g,new ch)},Mr.prototype.ra=function(){se(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,om=function(){return new Qi},im=function(){return Mi()},sm=ar,xc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Li.NO_ERROR=0,Li.TIMEOUT=8,Li.HTTP_ERROR=6,ho=Li,Au.COMPLETE="complete",rm=Au,vu.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",ee.prototype.listen=ee.prototype.K,js=vu,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,nm=Be}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const hd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Il("@firebase/firestore");function $r(){return wr.logLevel}function J(t,...e){if(wr.logLevel<=pe.DEBUG){const n=e.map(Rl);wr.debug(`Firestore (${gs}): ${t}`,...n)}}function Tn(t,...e){if(wr.logLevel<=pe.ERROR){const n=e.map(Rl);wr.error(`Firestore (${gs}): ${t}`,...n)}}function as(t,...e){if(wr.logLevel<=pe.WARN){const n=e.map(Rl);wr.warn(`Firestore (${gs}): ${t}`,...n)}}function Rl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function Re(t,e){t||oe()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Ww{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zw{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new am(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new ut(e)}}class Kw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Gw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Kw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Re(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new Qw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Jw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function cs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Ke(0,0))}static max(){return new ae(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends mi{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const Xw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends mi{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return Xw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Oe.fromString(e))}static fromName(e){return new ne(Oe.fromString(e).popFirst(5))}static empty(){return new ne(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Oe(e.slice()))}}function Zw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Jn(s,ne.empty(),e)}function eI(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ae.min(),ne.empty(),-1)}static max(){return new Jn(ae.max(),ne.empty(),-1)}}function tI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==nI)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function sI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ys(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pa.oe=-1;function ma(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}function iI(t){return typeof t=="number"&&Number.isInteger(t)&&!Mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dd(e)),e=aI(t.get(n),e);return dd(e)}function aI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function dd(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pd(this.data.getIterator())}getIteratorFrom(e){return new pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Ge(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new um("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const cI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Re(!!t),typeof t=="string"){let e=0;const n=cI.exec(t);if(Re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zn(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ga(t){const e=t.mapValue.fields.__previous_value__;return Sl(e)?ga(e):e}function gi(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class _i{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _i("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sl(t)?4:hI(t)?9007199254740991:uI(t)?10:11:oe()}function cn(t,e){if(t===e)return!0;const n=er(t);if(n!==er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gi(t).isEqual(gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xn(s.timestampValue),c=Xn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zn(s.bytesValue).isEqual(Zn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$e(s.doubleValue),c=$e(i.doubleValue);return o===c?Mo(o)===Mo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(fd(o)!==fd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!cn(o[l],c[l])))return!1;return!0}(t,e);default:return oe()}}function yi(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=er(t),r=er(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=$e(i.integerValue||i.doubleValue),l=$e(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return md(t.timestampValue,e.timestampValue);case 4:return md(gi(t),gi(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Zn(i),l=Zn(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ge(c[h],l[h]);if(d!==0)return d}return ge(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ge($e(i.latitude),$e(o.latitude));return c!==0?c:ge($e(i.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return gd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},g=o.fields||{},y=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(l=g.value)===null||l===void 0?void 0:l.arrayValue,D=ge(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:gd(y,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===no.mapValue&&o===no.mapValue)return 0;if(i===no.mapValue)return 1;if(o===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=ge(l[p],d[p]);if(g!==0)return g;const y=ls(c[l[p]],h[d[p]]);if(y!==0)return y}return ge(l.length,d.length)}(t.mapValue,e.mapValue);default:throw oe()}}function md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Xn(t),r=Xn(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function gd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ls(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function us(t){return Mc(t)}function Mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Mc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Mc(n.fields[o])}`;return s+"}"}(t.mapValue):oe()}function fo(t){switch(er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ga(t);return e?16+fo(e):16;case 5:return 2*t.stringValue.length;case 6:return Zn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+fo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return br(r.fields,(i,o)=>{s+=i.length+fo(o)}),s}(t.mapValue);default:throw oe()}}function _d(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lc(t){return!!t&&"integerValue"in t}function Pl(t){return!!t&&"arrayValue"in t}function yd(t){return!!t&&"nullValue"in t}function vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function po(t){return!!t&&"mapValue"in t}function uI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ei(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];po(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(ei(this.value))}}function hm(t){const e=[];return br(t.fields,(n,r)=>{const s=new tt([n]);if(po(r)){const i=hm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ft(e,0,ae.min(),ae.min(),ae.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,ae.min(),ae.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,ae.min(),ae.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.position=e,this.inclusive=n}}function Ed(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Td(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function dI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{}class He extends dm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pI(e,n,r):n==="array-contains"?new _I(e,r):n==="in"?new yI(e,r):n==="not-in"?new vI(e,r):n==="array-contains-any"?new EI(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mI(e,r):new gI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&er(this.value)===er(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends dm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return fm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fm(t){return t.op==="and"}function pm(t){return fI(t)&&fm(t)}function fI(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function Fc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+us(t.value);if(pm(t))return t.filters.map(e=>Fc(e)).join(",");{const e=t.filters.map(n=>Fc(n)).join(",");return`${t.op}(${e})`}}function mm(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&mm(o,s.filters[c]),!0):!1}(t,e):void oe()}function gm(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(gm).join(" ,")+"}"}(t):"Filter"}class pI extends He{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class mI extends He{constructor(e,n){super(e,"in",n),this.keys=_m("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gI extends He{constructor(e,n){super(e,"not-in",n),this.keys=_m("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _m(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class _I extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pl(n)&&yi(n.arrayValue,this.value)}}class yI extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yi(this.value.arrayValue,n)}}class vI extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yi(this.value.arrayValue,n)}}class EI extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function wd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new TI(t,e,n,r,s,i,o)}function Cl(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.ue=n}return e.ue}function kl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Td(t.startAt,e.startAt)&&Td(t.endAt,e.endAt)}function Uc(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wI(t,e,n,r,s,i,o,c){return new vs(t,e,n,r,s,i,o,c)}function Dl(t){return new vs(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ym(t){return t.collectionGroup!==null}function ti(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ge(tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new vi(i,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new vi(tt.keyField(),r))}return e.ce}function nn(t){const e=le(t);return e.le||(e.le=II(e,ti(t))),e.le}function II(t,e){if(t.limitType==="F")return wd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new vi(s.field,i)});const n=t.endAt?new Lo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lo(t.startAt.position,t.startAt.inclusive):null;return wd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bc(t,e){const n=t.filters.concat([e]);return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $c(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _a(t,e){return kl(nn(t),nn(e))&&t.limitType===e.limitType}function vm(t){return`${Cl(nn(t))}|lt:${t.limitType}`}function jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gm(s)).join(", ")}]`),ma(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>us(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>us(s)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function ya(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Ed(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ti(r),s)||r.endAt&&!function(o,c,l){const h=Ed(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ti(r),s))}(t,e)}function AI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Em(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=bI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bI(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ls(l,h):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return lm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Ue(ne.comparator);function wn(){return RI}const Tm=new Ue(ne.comparator);function qs(...t){let e=Tm;for(const n of t)e=e.insert(n.key,n);return e}function wm(t){let e=Tm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return ni()}function Im(){return ni()}function ni(){return new Rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const SI=new Ue(ne.comparator),PI=new Ge(ne.comparator);function me(...t){let e=PI;for(const n of t)e=e.add(n);return e}const CI=new Ge(ge);function kI(){return CI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function Am(t){return{integerValue:""+t}}function DI(t,e){return iI(e)?Am(e):Vl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this._=void 0}}function VI(t,e,n){return t instanceof Ei?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sl(i)&&(i=ga(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ti?Rm(t,e):t instanceof wi?Sm(t,e):function(s,i){const o=bm(s,i),c=Ad(o)+Ad(s.Pe);return Lc(o)&&Lc(s.Pe)?Am(c):Vl(s.serializer,c)}(t,e)}function NI(t,e,n){return t instanceof Ti?Rm(t,e):t instanceof wi?Sm(t,e):n}function bm(t,e){return t instanceof Fo?function(r){return Lc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ei extends va{}class Ti extends va{constructor(e){super(),this.elements=e}}function Rm(t,e){const n=Pm(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class wi extends va{constructor(e){super(),this.elements=e}}function Sm(t,e){let n=Pm(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class Fo extends va{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ad(t){return $e(t.integerValue||t.doubleValue)}function Pm(t){return Pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n){this.field=e,this.transform=n}}function xI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof wi&&s instanceof wi?cs(r.elements,s.elements,cn):r instanceof Fo&&s instanceof Fo?cn(r.Pe,s.Pe):r instanceof Ei&&s instanceof Ei}(t.transform,e.transform)}class MI{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ea{}function Cm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dm(t.key,yn.none()):new Pi(t.key,t.data,yn.none());{const n=t.data,r=Mt.empty();let s=new Ge(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Ht(s.toArray()),yn.none())}}function LI(t,e,n){t instanceof Pi?function(s,i,o){const c=s.value.clone(),l=Rd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Rd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(km(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ri(t,e,n,r){return t instanceof Pi?function(i,o,c,l){if(!mo(i.precondition,o))return c;const h=i.value.clone(),d=Sd(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,c,l){if(!mo(i.precondition,o))return c;const h=Sd(i.fieldTransforms,l,o),d=o.data;return d.setAll(km(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function FI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bm(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function bd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&cs(r,s,(i,o)=>xI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pi extends Ea{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends Ea{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function km(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rd(t,e,n){const r=new Map;Re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,NI(o,c,n[s]))}return r}function Sd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,VI(i,o,e))}return r}class Dm extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UI extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&LI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Im();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Cm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(n,r)=>bd(n,r))&&cs(this.baseMutations,e.baseMutations,(n,r)=>bd(n,r))}}class Nl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length);let s=function(){return SI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,ve;function qI(t){switch(t){default:return oe();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Vm(t){if(t===void 0)return Tn("GRPC error has no .code"),M.UNKNOWN;switch(t){case qe.OK:return M.OK;case qe.CANCELLED:return M.CANCELLED;case qe.UNKNOWN:return M.UNKNOWN;case qe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case qe.INTERNAL:return M.INTERNAL;case qe.UNAVAILABLE:return M.UNAVAILABLE;case qe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case qe.NOT_FOUND:return M.NOT_FOUND;case qe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case qe.ABORTED:return M.ABORTED;case qe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case qe.DATA_LOSS:return M.DATA_LOSS;default:return oe()}}(ve=qe||(qe={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new yr([4294967295,4294967295],0);function Pd(t){const e=HI().encode(t),n=new tm;return n.update(e),new Uint8Array(n.digest())}function Cd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yr([n,r],0),new yr([s,i],0)]}class Ol{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=yr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(yr.fromNumber(r)));return s.compare(WI)===1&&(s=new yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Pd(e),[r,s]=Cd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ol(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Te===0)return;const n=Pd(e),[r,s]=Cd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ta(ae.min(),s,new Ue(ge),wn(),me())}}class Ci{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ci(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Nm{constructor(e,n){this.targetId=e,this.me=n}}class Om{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kd{constructor(){this.fe=0,this.ge=Dd(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe()}}),new Ci(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Dd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zI{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=ro(),this.Qe=ro(),this.Ke=new Ue(ge)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Uc(i))if(r===0){const o=new ne(i.path);this.We(n,o,ft.newNoDocument(o,ae.min()))}else Re(r===1);else{const o=this.Ze(n);if(o!==r){const c=this.Xe(e),l=c?this.et(c,e,o):1;if(l!==0){this.He(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Zn(r).toUint8Array()}catch(l){if(l instanceof um)return as("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ol(o,s,i)}catch(l){return as(l instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Ye(o);if(c){if(i.current&&Uc(c.target)){const l=new ne(c.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,ft.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=me();this.Qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Ye(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ta(e,n,this.Ke,this.ke,r);return this.ke=wn(),this.qe=ro(),this.Qe=ro(),this.Ke=new Ue(ge),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new kd,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Ge(ge),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(ge),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new kd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ro(){return new Ue(ne.comparator)}function Dd(){return new Ue(ne.comparator)}const KI={asc:"ASCENDING",desc:"DESCENDING"},GI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QI={and:"AND",or:"OR"};class YI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jc(t,e){return t.useProto3Json||ma(e)?e:{value:e}}function Uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JI(t,e){return Uo(t,e.toTimestamp())}function rn(t){return Re(!!t),ae.fromTimestamp(function(n){const r=Xn(n);return new Ke(r.seconds,r.nanos)}(t))}function xl(t,e){return qc(t,e).canonicalString()}function qc(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Mm(t){const e=Oe.fromString(t);return Re($m(e)),e}function Hc(t,e){return xl(t.databaseId,e.path)}function uc(t,e){const n=Mm(e);if(n.get(1)!==t.databaseId.projectId)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(Fm(n))}function Lm(t,e){return xl(t.databaseId,e)}function XI(t){const e=Mm(t);return e.length===4?Oe.emptyPath():Fm(e)}function Wc(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fm(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vd(t,e,n){return{name:Hc(t,e),fields:n.value.mapValue.fields}}function ZI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Re(d===void 0||typeof d=="string"),st.fromBase64String(d||"")):(Re(d===void 0||d instanceof Buffer||d instanceof Uint8Array),st.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?M.UNKNOWN:Vm(h.code);return new X(d,h.message||"")}(o);n=new Om(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uc(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):ae.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new go(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uc(t,r.document),i=r.readTime?rn(r.readTime):ae.min(),o=ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new go([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uc(t,r.document),i=r.removedTargetIds||[];n=new go([],i,s,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jI(s,i),c=r.targetId;n=new Nm(c,o)}}return n}function e0(t,e){let n;if(e instanceof Pi)n={update:Vd(t,e.key,e.value)};else if(e instanceof Dm)n={delete:Hc(t,e.key)};else if(e instanceof Sr)n={update:Vd(t,e.key,e.data),updateMask:l0(e.fieldMask)};else{if(!(e instanceof UI))return oe();n={verify:Hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ei)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ti)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:JI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(t,e.precondition)),n}function t0(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(ae.min())&&(o=rn(i)),new MI(o,s.transformResults||[])}(n,e))):[]}function n0(t,e){return{documents:[Lm(t,e.path)]}}function r0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lm(t,s);const i=function(h){if(h.length!==0)return Bm(Kt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:qr(g.field),direction:o0(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=jc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function s0(t){let e=XI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Um(p);return g instanceof Kt&&pm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new vi(Hr(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,ma(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,y=p.values||[];return new Lo(y,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,y=p.values||[];return new Lo(y,g)}(n.endAt)),wI(e,s,o,i,c,"F",l,h)}function i0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Um(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hr(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hr(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hr(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hr(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Hr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>Um(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function o0(t){return KI[t]}function a0(t){return GI[t]}function c0(t){return QI[t]}function qr(t){return{fieldPath:t.canonicalString()}}function Hr(t){return tt.fromServerFormat(t.fieldPath)}function Bm(t){return t instanceof He?function(n){if(n.op==="=="){if(vd(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NAN"}};if(yd(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vd(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NOT_NAN"}};if(yd(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qr(n.field),op:a0(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(s=>Bm(s));return r.length===1?r[0]:{compositeFilter:{op:c0(n.op),filters:r}}}(t):oe()}function l0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $m(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,s,i=ae.min(),o=ae.min(),c=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.ht=e}}function h0(t){const e=s0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$c(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.ln=new f0}addToCollectionParentIndex(e,n){return this.ln.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Jn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class f0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(41943040,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new hs(0)}static Qn(){return new hs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class p0{constructor(e){this.Gn=e,this.buffer=new Ge(Od),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Od(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class m0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ys(n)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await _s(n)}await this.Yn(3e5)})}}class g0{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(pa.oe);const r=new p0(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Nd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nd):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),$r()<=pe.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function _0(t,e){return new g0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.changes=new Rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ri(r.mutation,s,Ht.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=wn();const o=ni(),c=function(){return ni()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ri(d.mutation,h,d.mutation.getFieldMask(),Ke.now())):o.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new v0(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ni();let s=new Ue((o,c)=>o-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Ht.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Im();d.forEach(g=>{if(!i.has(g)){const y=Cm(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ym(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(gr());let c=-1,l=i;return o.next(h=>x.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,me())).next(d=>({batchId:c,changes:wm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const h=function(p,g){return new vs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,ft.newInvalidDocument(d)))});let c=qs();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&ri(d.mutation,h,Ht.empty(),Ke.now()),ya(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return x.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:h0(s.bundledQuery),readTime:rn(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.overlays=new Ue(ne.comparator),this.Er=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=gr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return x.resolve(c)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $I(n,r));let i=this.Er.get(n);i===void 0&&(i=me(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.dr=new Ge(Ye.Ar),this.Rr=new Ge(Ye.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ye(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ne(new Oe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ne(new Oe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=me();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ne.comparator(e.key,n.key)||ge(e.br,n.br)}static Vr(e,n){return ge(e.br,n.br)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Ge(Ye.Ar)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BI(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.vr=this.vr.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const c=this.Cr(o.br);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ge);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],c=>{r=r.add(c.br)})}),x.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new ne(i),0);let c=new Ge(ge);return this.vr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.br)),!0)},o),x.resolve(this.Mr(c))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return x.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ye(n,0),s=this.vr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.Nr=e,this.docs=function(){return new Ue(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wn();const o=n.path,c=new ne(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||tI(eI(d),r)<=0||(s.has(d.key)||ya(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe()}Lr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new R0(this)}getSize(e){return x.resolve(this.size)}}class R0 extends y0{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.persistence=e,this.Br=new Rr(n=>Cl(n),kl),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ml,this.targetCount=0,this.Qr=hs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),x.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Un(n),x.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.Kr={},this.overlays={},this.$r=new pa(0),this.Ur=!1,this.Ur=!0,this.Wr=new I0,this.referenceDelegate=e(this),this.Gr=new S0(this),this.indexManager=new d0,this.remoteDocumentCache=function(s){return new b0(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new u0(n),this.jr=new T0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new w0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new A0(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new P0(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return x.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class P0 extends rI{constructor(e){super(),this.currentSequenceNumber=e}}class Ll{constructor(e){this.persistence=e,this.Zr=new Ml,this.Xr=null}static ei(e){return new Ll(e)}get ti(){if(this.Xr)return this.Xr;throw oe()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),x.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ti,r=>{const s=ne.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return x.or([()=>x.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Bo{constructor(e,n){this.persistence=e,this.ri=new Rr(r=>oI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=_0(this,n)}static ei(e,n){return new Bo(e,n)}Hr(){}Jr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return x.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),x.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fo(e.data.value)),n}ir(e,n,r){return x.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return bT()?8:sI(gt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new C0;return this.ts(e,n,o).next(c=>{if(i.result=c,this.Hi)return this.ns(e,n,o,c.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?($r()<=pe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),x.resolve()):($r()<=pe.DEBUG&&J("QueryEngine","Query:",jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?($r()<=pe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):x.resolve())}Xi(e,n){if(Id(n))return x.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$c(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.rs(n,c);return this.ss(n,h,o,l.readTime)?this.Xi(e,$c(n,null,"F")):this.os(e,h,n,l)}))})))}es(e,n,r,s){return Id(n)||s.isEqual(ae.min())?x.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?x.resolve(null):($r()<=pe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jr(n)),this.os(e,o,n,Zw(s,-1)).next(c=>c))})}rs(e,n){let r=new Ge(Em(e));return n.forEach((s,i)=>{ya(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return $r()<=pe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",jr(n)),this.Zi.getDocumentsMatchingQuery(e,n,Jn.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ue(ge),this.cs=new Rr(i=>Cl(i),kl),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E0(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function V0(t,e,n,r){return new D0(t,e,n,r)}async function qm(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=me();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:c}))})})}function N0(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,g=p.keys();let y=x.resolve();return g.forEach(C=>{y=y.next(()=>d.getEntry(l,C)).next(D=>{const O=h.docVersions.get(C);Re(O!==null),D.version.compareTo(O)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hm(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function O0(t,e){const n=le(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(st.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(D,O,$){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,y,d)&&c.push(n.Gr.updateTargetData(i,y))});let l=wn(),h=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(x0(i,o,e.documentUpdates).next(d=>{l=d.Is,h=d.Es})),!r.isEqual(ae.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return x.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.us=s,i))}function x0(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):J("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Is:o,Es:s}})}function M0(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function L0(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function zc(t,e,n){const r=le(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ys(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function xd(t,e,n){const r=le(t);let s=ae.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=le(l),g=p.cs.get(d);return g!==void 0?x.resolve(p.us.get(g)):p.Gr.getTargetData(h,d)}(r,o,nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:me())).next(c=>(F0(r,AI(e),c),{documents:c,ds:i})))}function F0(t,e,n){let r=t.ls.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Md{constructor(){this.activeTargetIds=kI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class U0{constructor(){this._o=new Md,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Md,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so=null;function hc(){return so===null?so=function(){return 268435456+Math.round(2147483648*Math.random())}():so++,"0x"+so.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class q0 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const c=hc(),l=this.No(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,o),this.Bo(n,l,h,s).then(d=>(J("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw as("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}ko(n,r,s,i,o,c){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=$0[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=hc();return new Promise((o,c)=>{const l=new nm;l.setWithCredentials(!0),l.listenOnce(rm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ho.NO_ERROR:const d=l.getResponseJson();J(lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ho.TIMEOUT:J(lt,`RPC '${e}' ${i} timed out`),c(new X(M.DEADLINE_EXCEEDED,"Request time out"));break;case ho.HTTP_ERROR:const p=l.getStatus();if(J(lt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const C=function(O){const $=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf($)>=0?$:M.UNKNOWN}(y.status);c(new X(C,y.message))}else c(new X(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new X(M.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{J(lt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);J(lt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}qo(e,n,r){const s=hc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=om(),c=im(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");J(lt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,y=!1;const C=new j0({Eo:O=>{y?J(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(J(lt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),J(lt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Ao:()=>p.close()}),D=(O,$,B)=>{O.listen($,q=>{try{B(q)}catch(z){setTimeout(()=>{throw z},0)}})};return D(p,js.EventType.OPEN,()=>{y||(J(lt,`RPC '${e}' stream ${s} transport opened.`),C.So())}),D(p,js.EventType.CLOSE,()=>{y||(y=!0,J(lt,`RPC '${e}' stream ${s} transport closed`),C.Do())}),D(p,js.EventType.ERROR,O=>{y||(y=!0,as(lt,`RPC '${e}' stream ${s} transport errored:`,O),C.Do(new X(M.UNAVAILABLE,"The operation could not be completed")))}),D(p,js.EventType.MESSAGE,O=>{var $;if(!y){const B=O.data[0];Re(!!B);const q=B,z=(q==null?void 0:q.error)||(($=q[0])===null||$===void 0?void 0:$.error);if(z){J(lt,`RPC '${e}' stream ${s} received error:`,z);const he=z.status;let de=function(w){const A=qe[w];if(A!==void 0)return Vm(A)}(he),I=z.message;de===void 0&&(de=M.INTERNAL,I="Unknown error status: "+he+" with message "+z.message),y=!0,C.Do(new X(de,I)),p.close()}else J(lt,`RPC '${e}' stream ${s} received:`,B),C.vo(B)}}),D(c,sm.STAT_EVENT,O=>{O.stat===xc.PROXY?J(lt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===xc.NOPROXY&&J(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.bo()},0),C}}function dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){return new YI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,s,i,o,c,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Wm(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new X(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H0 extends zm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=ZI(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?rn(o.readTime):ae.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Wc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Uc(l)?{documents:n0(i,l)}:{query:r0(i,l).ct},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=xm(i,o.resumeToken);const h=jc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ae.min())>0){c.readTime=Uo(i,o.snapshotVersion.toTimestamp());const h=jc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=i0(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Wc(this.serializer),n.removeTarget=e,this.c_(n)}}class W0 extends zm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Re(!!e.streamToken),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=t0(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Wc(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>e0(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,qc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(M.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.ko(e,qc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(M.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class K0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Tn(n),this.C_=!1):J("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Pr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=le(l);h.k_.add(4),await ki(h),h.K_.set("Unknown"),h.k_.delete(4),await Ia(h)}(this))})}),this.K_=new K0(r,s)}}async function Ia(t){if(Pr(t))for(const e of t.q_)await e(!0)}async function ki(t){for(const e of t.q_)await e(!1)}function Km(t,e){const n=le(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),jl(n)?$l(n):Es(n).s_()&&Bl(n,e))}function Ul(t,e){const n=le(t),r=Es(n);n.B_.delete(e),r.s_()&&Gm(n,e),n.B_.size===0&&(r.s_()?r.a_():Pr(n)&&n.K_.set("Unknown"))}function Bl(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).V_(e)}function Gm(t,e){t.U_.xe(e),Es(t).m_(e)}function $l(t){t.U_=new zI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.K_.F_()}function jl(t){return Pr(t)&&!Es(t).i_()&&t.B_.size>0}function Pr(t){return le(t).k_.size===0}function Qm(t){t.U_=void 0}async function Q0(t){t.K_.set("Online")}async function Y0(t){t.B_.forEach((e,n)=>{Bl(t,e)})}async function J0(t,e){Qm(t),jl(t)?(t.K_.O_(e),$l(t)):t.K_.set("Unknown")}async function X0(t,e,n){if(t.K_.set("Online"),e instanceof Om&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.B_.delete(c),s.U_.removeTarget(c))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $o(t,r)}else if(e instanceof go?t.U_.$e(e):e instanceof Nm?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ae.min()))try{const r=await Hm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.U_.it(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.B_.get(l);if(!d)return;i.B_.set(l,d.withResumeToken(st.EMPTY_BYTE_STRING,d.snapshotVersion)),Gm(i,l);const p=new Hn(d.target,l,h,d.sequenceNumber);Bl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await $o(t,r)}}async function $o(t,e,n){if(!ys(e))throw e;t.k_.add(1),await ki(t),t.K_.set("Offline"),n||(n=()=>Hm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Ia(t)})}function Ym(t,e){return e().catch(n=>$o(t,n,e))}async function Aa(t){const e=le(t),n=tr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Z0(e);)try{const s=await M0(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,eA(e,s)}catch(s){await $o(e,s)}Jm(e)&&Xm(e)}function Z0(t){return Pr(t)&&t.L_.length<10}function eA(t,e){t.L_.push(e);const n=tr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Jm(t){return Pr(t)&&!tr(t).i_()&&t.L_.length>0}function Xm(t){tr(t).start()}async function tA(t){tr(t).w_()}async function nA(t){const e=tr(t);for(const n of t.L_)e.g_(n.mutations)}async function rA(t,e,n){const r=t.L_.shift(),s=Nl.from(r,e,n);await Ym(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Aa(t)}async function sA(t,e){e&&tr(t).f_&&await async function(r,s){if(function(o){return qI(o)&&o!==M.ABORTED}(s.code)){const i=r.L_.shift();tr(r).__(),await Ym(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Aa(r)}}(t,e),Jm(t)&&Xm(t)}async function Fd(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Pr(n);n.k_.add(3),await ki(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Ia(n)}async function iA(t,e){const n=le(t);e?(n.k_.delete(2),await Ia(n)):e||(n.k_.add(2),await ki(n),n.K_.set("Unknown"))}function Es(t){return t.W_||(t.W_=function(n,r,s){const i=le(n);return i.b_(),new H0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:Q0.bind(null,t),mo:Y0.bind(null,t),po:J0.bind(null,t),R_:X0.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),jl(t)?$l(t):t.K_.set("Unknown")):(await t.W_.stop(),Qm(t))})),t.W_}function tr(t){return t.G_||(t.G_=function(n,r,s){const i=le(n);return i.b_(),new W0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:tA.bind(null,t),po:sA.bind(null,t),p_:nA.bind(null,t),y_:rA.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Aa(t)):(await t.G_.stop(),t.L_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ql(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hl(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),ys(t))return new X(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{static emptySet(e){return new Zr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.z_=new Ue(ne.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):oe():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ds(e,n,Zr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class aA{constructor(){this.queries=Bd(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=Bd(),i.forEach((o,c)=>{for(const l of c.J_)l.onError(r)})})(this,new X(M.ABORTED,"Firestore shutting down"))}}function Bd(){return new Rr(t=>vm(t),_a)}async function cA(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new oA,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Hl(o,`Initialization of query '${jr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Wl(n)}async function lA(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uA(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.J_)c.ta(s)&&(r=!0);o.H_=s}}r&&Wl(n)}function hA(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Wl(t){t.X_.forEach(e=>{e.next()})}var Kc,$d;($d=Kc||(Kc={})).na="default",$d.Cache="cache";class dA{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Kc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.key=e}}class eg{constructor(e){this.key=e}}class fA{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=me(),this.mutatedKeys=me(),this.Va=Em(e),this.ma=new Zr(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Ud,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),y=ya(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;g&&y?g.data.isEqual(y.data)?C!==D&&(r.track({type:3,doc:y}),O=!0):this.ya(g,y)||(r.track({type:2,doc:y}),O=!0,(l&&this.Va(y,l)>0||h&&this.Va(y,h)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),O=!0):g&&!y&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(y?(o=o.add(y),i=D?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:c,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(y,C){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return D(y)-D(C)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const c=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,h=l!==this.Aa;return this.Aa=l,o.length!==0||h?{snapshot:new ds(this.query,e.ma,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ud,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=me(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new eg(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Zm(r))}),n}va(e){this.da=e.ds,this.Ra=me();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ds.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class pA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mA{constructor(e){this.key=e,this.Fa=!1}}class gA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Rr(c=>vm(c),_a),this.Oa=new Map,this.Na=new Set,this.La=new Ue(ne.comparator),this.Ba=new Map,this.ka=new Ml,this.qa={},this.Qa=new Map,this.Ka=hs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function _A(t,e,n=!0){const r=og(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await tg(r,e,n,!0),s}async function yA(t,e){const n=og(t);await tg(n,e,!0,!1)}async function tg(t,e,n,r){const s=await L0(t.localStore,nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await vA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Km(t.remoteStore,s),c}async function vA(t,e,n,r,s){t.Ua=(p,g,y)=>async function(D,O,$,B){let q=O.view.ga($);q.ss&&(q=await xd(D.localStore,O.query,!1).then(({documents:I})=>O.view.ga(I,q)));const z=B&&B.targetChanges.get(O.targetId),he=B&&B.targetMismatches.get(O.targetId)!=null,de=O.view.applyChanges(q,D.isPrimaryClient,z,he);return qd(D,O.targetId,de.ba),de.snapshot}(t,p,g,y);const i=await xd(t.localStore,e,!0),o=new fA(e,i.ds),c=o.ga(i.documents),l=Ci.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);qd(t,n,h.ba);const d=new pA(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function EA(t,e,n){const r=le(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!_a(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ul(r.remoteStore,s.targetId),Gc(r,s.targetId)}).catch(_s)):(Gc(r,s.targetId),await zc(r.localStore,s.targetId,!0))}async function TA(t,e){const n=le(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ul(n.remoteStore,r.targetId))}async function wA(t,e,n){const r=CA(t);try{const s=await function(o,c){const l=le(o),h=Ke.now(),d=c.reduce((y,C)=>y.add(C.key),me());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let C=wn(),D=me();return l.hs.getEntries(y,d).next(O=>{C=O,C.forEach(($,B)=>{B.isValidDocument()||(D=D.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,C)).next(O=>{p=O;const $=[];for(const B of c){const q=FI(B,p.get(B.key).overlayedDocument);q!=null&&$.push(new Sr(B.key,q,hm(q.value.mapValue),yn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,$,c)}).next(O=>{g=O;const $=O.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(y,O.batchId,$)})}).then(()=>({batchId:g.batchId,changes:wm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.qa[o.currentUser.toKey()];h||(h=new Ue(ge)),h=h.insert(c,l),o.qa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Di(r,s.changes),await Aa(r.remoteStore)}catch(s){const i=Hl(s,"Failed to persist write");n.reject(i)}}async function ng(t,e){const n=le(t);try{const r=await O0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Re(o.Fa):s.removedDocuments.size>0&&(Re(o.Fa),o.Fa=!1))}),await Di(n,r,e)}catch(r){await _s(r)}}function jd(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const c=o.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=le(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const g of p.J_)g.ea(c)&&(h=!0)}),h&&Wl(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IA(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ue(ne.comparator);o=o.insert(i,ft.newNoDocument(i,ae.min()));const c=me().add(i),l=new Ta(ae.min(),new Map,new Ue(ge),o,c);await ng(r,l),r.La=r.La.remove(i),r.Ba.delete(e),zl(r)}else await zc(r.localStore,e,!1).then(()=>Gc(r,e,n)).catch(_s)}async function AA(t,e){const n=le(t),r=e.batch.batchId;try{const s=await N0(n.localStore,e);sg(n,r,null),rg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Di(n,s)}catch(s){await _s(s)}}async function bA(t,e,n){const r=le(t);try{const s=await function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Re(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);sg(r,e,n),rg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Di(r,s)}catch(s){await _s(s)}}function rg(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function sg(t,e,n){const r=le(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||ig(t,r)})}function ig(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Ul(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),zl(t))}function qd(t,e,n){for(const r of n)r instanceof Zm?(t.ka.addReference(r.key,e),RA(t,r)):r instanceof eg?(J("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||ig(t,r.key)):oe()}function RA(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(J("SyncEngine","New document in limbo: "+n),t.Na.add(r),zl(t))}function zl(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ne(Oe.fromString(e)),r=t.Ka.next();t.Ba.set(r,new mA(n)),t.La=t.La.insert(n,r),Km(t.remoteStore,new Hn(nn(Dl(n.path)),r,"TargetPurposeLimboResolution",pa.oe))}}async function Di(t,e,n){const r=le(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{o.push(r.Ua(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Fl.zi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,h){const d=le(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,g=>x.forEach(g.Wi,y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>x.forEach(g.Gi,y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!ys(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const y=d.us.get(g),C=y.snapshotVersion,D=y.withLastLimboFreeSnapshotVersion(C);d.us=d.us.insert(g,D)}}}(r.localStore,i))}async function SA(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await qm(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(c=>{c.forEach(l=>{l.reject(new X(M.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Di(n,r.Ts)}}function PA(t,e){const n=le(t),r=n.Ba.get(e);if(r&&r.Fa)return me().add(r.key);{let s=me();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const c=n.xa.get(o);s=s.unionWith(c.view.fa)}return s}}function og(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ng.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IA.bind(null,e),e.Ma.R_=uA.bind(null,e.eventManager),e.Ma.Wa=hA.bind(null,e.eventManager),e}function CA(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bA.bind(null,e),e}class jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wa(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return V0(this.persistence,new k0,e.initialUser,this.serializer)}ja(e){return new jm(Ll.ei,this.serializer)}za(e){return new U0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jo.provider={build:()=>new jo};class kA extends jo{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Re(this.persistence.referenceDelegate instanceof Bo);const r=this.persistence.referenceDelegate.garbageCollector;return new m0(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new jm(r=>Bo.ei(r,n),this.serializer)}}class Qc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SA.bind(null,this.syncEngine),await iA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aA}()}createDatastore(e){const n=wa(e.databaseInfo.databaseId),r=function(i){return new q0(i)}(e.databaseInfo);return function(i,o,c,l){return new z0(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new G0(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>jd(this.syncEngine,n,0),function(){return Ld.p()?new Ld:new B0}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new gA(s,i,o,c,l,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);J("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ki(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Qc.provider={build:()=>new Qc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=cm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fc(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NA(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Fd(e.remoteStore,s)),t._onlineComponents=e}async function NA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await fc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await fc(t,new jo)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await fc(t,new kA(void 0));return t._offlineComponents}async function ag(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Hd(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Hd(t,new Qc))),t._onlineComponents}function OA(t){return ag(t).then(e=>e.syncEngine)}async function Wd(t){const e=await ag(t),n=e.eventManager;return n.onListen=_A.bind(null,e.syncEngine),n.onUnlisten=EA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TA.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e,n){if(!n)throw new X(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xA(t,e,n,r){if(e===!0&&r===!0)throw new X(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kd(t){if(!ne.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gd(t){if(ne.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ba(t);throw new X(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hw;switch(r.type){case"firstParty":return new Gw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zd.get(n);r&&(J("ComponentProvider","Removing Datastore"),zd.delete(n),r.terminate())}(this),Promise.resolve()}}function MA(t,e,n,r={}){var s;const i=(t=si(t,Ra))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ut.MOCK_USER;else{c=yT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(h)}t._authCredentials=new Ww(new am(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Qn extends Cr{constructor(e,n,r){super(e,n,Dl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new ne(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function ug(t,e,...n){if(t=rt(t),lg("collection","path",e),t instanceof Ra){const r=Oe.fromString(e,...n);return Gd(r),new Qn(t,null,r)}{if(!(t instanceof Vt||t instanceof Qn))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Gd(r),new Qn(t.firestore,null,r)}}function LA(t,e,...n){if(t=rt(t),arguments.length===1&&(e=cm.newId()),lg("doc","path",e),t instanceof Ra){const r=Oe.fromString(e,...n);return Kd(r),new Vt(t,null,new ne(r))}{if(!(t instanceof Vt||t instanceof Qn))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Kd(r),new Vt(t.firestore,t instanceof Qn?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Wm(this,"async_queue_retry"),this.fu=()=>{const r=dc();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=dc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new vr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ys(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=ql.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&oe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Jd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qo extends Ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Yd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yd(e),this._firestoreClient=void 0,await e}}}function FA(t,e){const n=typeof t=="object"?t:Xp(),r=typeof t=="string"?t:"(default)",s=bl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gT("firestore");i&&MA(s,...i)}return s}function hg(t){if(t._terminated)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||UA(t),t._firestoreClient}function UA(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new lI(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,cg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new VA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(st.fromBase64String(e))}catch(n){throw new X(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fs(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=/^__.*__$/;class $A{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pi(e,this.data,n,this.fieldTransforms)}}function dg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Jl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ho(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(dg(this.Mu)&&BA.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class jA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wa(e)}$u(e,n,r,s=!1){return new Jl({Mu:e,methodName:n,Ku:r,path:tt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fg(t){const e=t._freezeSettings(),n=wa(t._databaseId);return new jA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qA(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);gg("Data must be an object, but it was:",o,r);const c=pg(r,o);let l,h;if(i.merge)l=new Ht(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=WA(e,p,n);if(!o.contains(g))throw new X(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);KA(d,g)||d.push(g)}l=new Ht(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new $A(new Mt(c),l,h)}class Xl extends Gl{_toFieldTransform(e){return new OI(e.path,new Ei)}isEqual(e){return e instanceof Xl}}function HA(t,e,n,r=!1){return Zl(n,t.$u(r?4:3,e))}function Zl(t,e){if(mg(t=rt(t)))return gg("Unsupported field value:",e,t),pg(t,e);if(t instanceof Gl)return function(r,s){if(!dg(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Zl(c,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Ql)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fs)return{bytesValue:xm(s.serializer,r._byteString)};if(r instanceof Vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yl)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return Vl(c.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${ba(r)}`)}(t,e)}function pg(t,e){const n={};return lm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,s)=>{const i=Zl(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function mg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Ql||t instanceof fs||t instanceof Vt||t instanceof Gl||t instanceof Yl)}function gg(t,e,n){if(!mg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ba(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function WA(t,e,n){if((e=rt(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return _g(t,e);throw Ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const zA=new RegExp("[~\\*/\\[\\]]");function _g(t,e,n){if(e.search(zA)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ho(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(M.INVALID_ARGUMENT,c+t+l)}function KA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GA extends yg{data(){return super.data()}}function eu(t,e){return typeof e=="string"?_g(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tu{}class vg extends tu{}function YA(t,e,...n){let r=[];e instanceof tu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ru).length,c=i.filter(l=>l instanceof nu).length;if(o>1||o>0&&c>0)throw new X(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class nu extends vg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nu(e,n,r)}_apply(e){const n=this._parse(e);return Eg(e._query,n),new Cr(e.firestore,e.converter,Bc(e._query,n))}_parse(e){const n=fg(e.firestore);return function(i,o,c,l,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Zd(p,d);const y=[];for(const C of p)y.push(Xd(l,i,C));g={arrayValue:{values:y}}}else g=Xd(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Zd(p,d),g=HA(c,o,p,d==="in"||d==="not-in");return He.create(h,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ru extends tu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ru(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Eg(o,l),o=Bc(o,l)}(e._query,n),new Cr(e.firestore,e.converter,Bc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class su extends vg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new su(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vi(i,o)}(e._query,this._field,this._direction);return new Cr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function JA(t,e="asc"){const n=e,r=eu("orderBy",t);return su._create(r,n)}function Xd(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new X(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ym(e)&&n.indexOf("/")!==-1)throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!ne.isDocumentKey(r))throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _d(t,new ne(r))}if(n instanceof Vt)return _d(t,n._key);throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ba(n)}.`)}function Zd(t,e){if(!Array.isArray(t)||t.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Eg(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class XA{convertValue(e,n="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>$e(o.doubleValue));return new Yl(i)}convertGeoPoint(e){return new Ql($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ga(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Re($m(r));const s=new _i(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tg extends yg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(eu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _o extends Tg{data(e={}){return super.data(e)}}class eb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _o(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new _o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new _o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:tb(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}class wg extends XA{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function nb(t,e){const n=si(t.firestore,qo),r=LA(t),s=ZA(t.converter,e);return sb(n,[qA(fg(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function rb(t,...e){var n,r,s;t=rt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Jd(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Jd(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof Vt)h=si(t.firestore,qo),d=Dl(t._key.path),l={next:p=>{e[o]&&e[o](ib(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=si(t,Cr);h=si(p.firestore,qo),d=p._query;const g=new wg(h);l={next:y=>{e[o]&&e[o](new eb(h,g,p,y))},error:e[o+1],complete:e[o+2]},QA(t._query)}return function(g,y,C,D){const O=new DA(D),$=new dA(y,O,C);return g.asyncQueue.enqueueAndForget(async()=>cA(await Wd(g),$)),()=>{O.eu(),g.asyncQueue.enqueueAndForget(async()=>lA(await Wd(g),$))}}(hg(h),d,c,l)}function sb(t,e){return function(r,s){const i=new vr;return r.asyncQueue.enqueueAndForget(async()=>wA(await OA(r),s,i)),i.promise}(hg(t),e)}function ib(t,e,n){const r=n.docs.get(e._key),s=new wg(t);return new Tg(t,s,e._key,r,new Ws(n.hasPendingWrites,n.fromCache),e.converter)}function ob(){return new Xl("serverTimestamp")}(function(e,n=!0){(function(s){gs=s})(ms),os(new Tr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new qo(new zw(r.getProvider("auth-internal")),new Yw(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _i(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Gn(hd,"4.7.5",e),Gn(hd,"4.7.5","esm2017")})();function iu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ig(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=Ig,Ag=new Ri("auth","Firebase",Ig());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new Il("@firebase/auth");function cb(t,...e){Wo.logLevel<=pe.WARN&&Wo.warn(`Auth (${ms}): ${t}`,...e)}function yo(t,...e){Wo.logLevel<=pe.ERROR&&Wo.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw ou(t,...e)}function sn(t,...e){return ou(t,...e)}function bg(t,e,n){const r=Object.assign(Object.assign({},ab()),{[e]:n});return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function vn(t){return bg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ag.create(t,...e)}function ie(t,e,...n){if(!t)throw ou(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function In(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lb(){return ef()==="http:"||ef()==="https:"}function ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lb()||wT()||"connection"in navigator)?navigator.onLine:!0}function hb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=vT()||IT()}get(){return ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new Vi(3e4,6e4);function or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,s={}){return Sg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Si(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return TT()||(h.referrerPolicy="no-referrer"),Rg.fetch()(Pg(t,t.config.apiHost,n,c),h)})}async function Sg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},db),e);try{const s=new mb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bg(t,d,h);Gt(t,d)}}catch(s){if(s instanceof Rn)throw s;Gt(t,"network-request-failed",{message:String(s)})}}async function Ni(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?au(t.config,s):`${t.config.apiScheme}://${s}`}function pb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),fb.get())})}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function tf(t){return t!==void 0&&t.enterprise!==void 0}class gb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _b(t,e){return Sn(t,"GET","/v2/recaptchaConfig",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function Cg(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vb(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=cu(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ii(pc(s.auth_time)),issuedAtTime:ii(pc(s.iat)),expirationTime:ii(pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function cu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wp(n);return s?JSON.parse(s):(yo("Failed to decode base64 JWT payload"),null)}catch(s){return yo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nf(t){const e=cu(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&Eb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Eb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ps(t,Cg(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kg(i.providerUserInfo):[],c=Ib(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Jc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function wb(t){const e=rt(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ib(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kg(t){return t.map(e=>{var{providerId:n}=e,r=iu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e){const n=await Sg(t,{},async()=>{const r=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Pg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Rg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bb(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ab(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new es;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vb(this,e)}reload(){return wb(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await ps(this,yb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:z,isAnonymous:he,providerData:de,stsTokenManager:I}=n;ie(q&&I,e,"internal-error");const v=es.fromJSON(this.name,I);ie(typeof q=="string",e,"internal-error"),On(p,e.name),On(g,e.name),ie(typeof z=="boolean",e,"internal-error"),ie(typeof he=="boolean",e,"internal-error"),On(y,e.name),On(C,e.name),On(D,e.name),On(O,e.name),On($,e.name),On(B,e.name);const w=new gn({uid:q,auth:e,email:g,emailVerified:z,displayName:p,isAnonymous:he,photoURL:C,phoneNumber:y,tenantId:D,stsTokenManager:v,createdAt:$,lastLoginAt:B});return de&&Array.isArray(de)&&(w.providerData=de.map(A=>Object.assign({},A))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new es;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new es;c.updateFromIdToken(r);const l=new gn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Map;function _n(t){In(t instanceof Function,"Expected a class definition");let e=rf.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dg.type="NONE";const sf=Dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(_n(sf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(sf);const o=vo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=gn._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ts(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ts(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lg(e))return"Blackberry";if(Fg(e))return"Webos";if(Ng(e))return"Safari";if((e.includes("chrome/")||Og(e))&&!e.includes("edge/"))return"Chrome";if(Mg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vg(t=gt()){return/firefox\//i.test(t)}function Ng(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Og(t=gt()){return/crios\//i.test(t)}function xg(t=gt()){return/iemobile/i.test(t)}function Mg(t=gt()){return/android/i.test(t)}function Lg(t=gt()){return/blackberry/i.test(t)}function Fg(t=gt()){return/webos/i.test(t)}function lu(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rb(t=gt()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sb(){return AT()&&document.documentMode===10}function Ug(t=gt()){return lu(t)||Mg(t)||Fg(t)||Lg(t)||/windows phone/i.test(t)||xg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t,e=[]){let n;switch(t){case"Browser":n=of(gt());break;case"Worker":n=`${of(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=6;class Db{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new af(this),this.idTokenSubscription=new af(this),this.beforeStateQueue=new Pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cg(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(vn(this));const n=e?rt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cb(this),n=new Db(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kr(t){return rt(t)}class af{constructor(e){this.auth=e,this.observer=null,this.addObserver=VT(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nb(t){Sa=t}function $g(t){return Sa.loadJS(t)}function Ob(){return Sa.recaptchaEnterpriseScript}function xb(){return Sa.gapiScript}function Mb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Lb{constructor(){this.enterprise=new Fb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Fb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ub="recaptcha-enterprise",jg="NO_RECAPTCHA";class Bb{constructor(e){this.type=Ub,this.auth=kr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{_b(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new gb(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;tf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(jg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Lb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&tf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ob();l.length!==0&&(l+=c),$g(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function cf(t,e,n,r=!1,s=!1){const i=new Bb(t);let o;if(s)o=jg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Xc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await cf(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t,e){const n=bl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Oo(i,e??{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function jb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qb(t,e,n){const r=kr(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qg(e),{host:o,port:c}=Hb(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Wb()}function qg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hb(t){const e=qg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lf(o)}}}function lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function zb(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){return Ni(t,"POST","/v1/accounts:signInWithPassword",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e){return Ni(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}async function Qb(t,e){return Ni(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends uu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ii(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ii(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xc(e,n,"signInWithPassword",Kb);case"emailLink":return Gb(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xc(e,r,"signUpPassword",zb);case"emailLink":return Qb(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return Ni(t,"POST","/v1/accounts:signInWithIdp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="http://localhost";class Ir extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=iu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:Yb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xb(t){const e=Bs($s(t)).link,n=e?Bs($s(e)).deep_link_id:null,r=Bs($s(t)).deep_link_id;return(r?Bs($s(r)).link:null)||r||n||e||t}class hu{constructor(e){var n,r,s,i,o,c;const l=Bs($s(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Jb((s=l.mode)!==null&&s!==void 0?s:null);ie(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Xb(e);try{return new hu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.providerId=Ts.PROVIDER_ID}static credential(e,n){return Ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hu.parseLink(n);return ie(r,"argument-error"),Ii._fromEmailAndCode(e,r.code,r.tenantId)}}Ts.PROVIDER_ID="password";Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Oi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Oi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){return Ni(t,"POST","/v1/accounts:signUp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),o=uf(r);return new Ar({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=uf(r);return new Ar({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Rn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ko(e,n,r,s)}}function Wg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,i,e,r):i})}async function eR(t,e,n=!1){const r=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ar._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(vn(r));const s="reauthenticate";try{const i=await ps(t,Wg(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=cu(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),Ar._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(t,e,n=!1){if(Zt(t.app))return Promise.reject(vn(t));const r="signIn",s=await Wg(t,r,e),i=await Ar._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nR(t,e){return zg(kr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t){const e=kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rR(t,e,n){if(Zt(t.app))return Promise.reject(vn(t));const r=kr(t),o=await Xc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Kg(t),l}),c=await Ar._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function sR(t,e,n){return Zt(t.app)?Promise.reject(vn(t)):nR(rt(t),Ts.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=rt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ps(r,iR(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aR(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function cR(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function lR(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function uR(t){return rt(t).signOut()}const Go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=1e3,dR=10;class Qg extends Gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Sb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qg.type="LOCAL";const fR=Qg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg extends Gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yg.type="SESSION";const Jg=Yg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await pR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=du("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function gR(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function _R(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vR(){return Xg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="firebaseLocalStorageDb",ER=1,Qo="firebaseLocalStorage",e_="fbase_key";class xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function TR(){const t=indexedDB.deleteDatabase(Zg);return new xi(t).toPromise()}function Zc(){const t=indexedDB.open(Zg,ER);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qo,{keyPath:e_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qo)?e(r):(r.close(),await TR(),e(await Zc()))})})}async function hf(t,e,n){const r=Ca(t,!0).put({[e_]:e,value:n});return new xi(r).toPromise()}async function wR(t,e){const n=Ca(t,!1).get(e),r=await new xi(n).toPromise();return r===void 0?null:r.value}function df(t,e){const n=Ca(t,!0).delete(e);return new xi(n).toPromise()}const IR=800,AR=3;class t_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(vR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _R(),!this.activeServiceWorker)return;this.sender=new mR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zc();return await hf(e,Go,"1"),await df(e,Go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>df(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}t_.type="LOCAL";const bR=t_;new Vi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t,e){return e?_n(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SR(t){return zg(t.auth,new fu(t),t.bypassAuthState)}function PR(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),tR(n,new fu(t),t.bypassAuthState)}async function CR(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),eR(n,new fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SR;case"linkViaPopup":case"linkViaRedirect":return CR;case"reauthViaPopup":case"reauthViaRedirect":return PR;default:Gt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new Vi(2e3,1e4);class Wr extends n_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kR.get())};e()}}Wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="pendingRedirect",Eo=new Map;class VR extends n_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const r=await NR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NR(t,e){const n=MR(e),r=xR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function OR(t,e){Eo.set(t._key(),e)}function xR(t){return _n(t._redirectPersistence)}function MR(t){return vo(DR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){if(Zt(t.app))return Promise.reject(vn(t));const r=kr(t),s=RR(r,e),o=await new VR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=10*60*1e3;class UR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!r_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ff(e))}saveEventToCache(e){this.cachedEventUids.add(ff(e)),this.lastProcessedEventTime=Date.now()}}function ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function r_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return r_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qR=/^https?/;async function HR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $R(t);for(const n of e)try{if(WR(n))return}catch{}Gt(t,"unauthorized-domain")}function WR(t){const e=Yc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qR.test(n))return!1;if(jR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Vi(3e4,6e4);function pf(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KR(t){return new Promise((e,n)=>{var r,s,i;function o(){pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pf(),n(sn(t,"network-request-failed"))},timeout:zR.get()})}if(!((s=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=on().gapi)===null||i===void 0)&&i.load)o();else{const c=Mb("iframefcb");return on()[c]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},$g(`${xb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw To=null,e})}let To=null;function GR(t){return To=To||KR(t),To}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=new Vi(5e3,15e3),YR="__/auth/iframe",JR="emulator/auth/iframe",XR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eS(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?au(e,JR):`https://${t.config.authDomain}/${YR}`,r={apiKey:e.apiKey,appName:t.name,v:ms},s=ZR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Si(r).slice(1)}`}async function tS(t){const e=await GR(t),n=on().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:eS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),c=on().setTimeout(()=>{i(o)},QR.get());function l(){on().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rS=500,sS=600,iS="_blank",oS="http://localhost";class mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aS(t,e,n,r=rS,s=sS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},nS),{width:r.toString(),height:s.toString(),top:i,left:o}),h=gt().toLowerCase();n&&(c=Og(h)?iS:n),Vg(h)&&(e=e||oS,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[y,C])=>`${g}${y}=${C},`,"");if(Rb(h)&&c!=="_self")return cS(e||"",c),new mf(null);const p=window.open(e||"",c,d);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new mf(p)}function cS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="__/auth/handler",uS="emulator/auth/handler",hS=encodeURIComponent("fac");async function gf(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:s};if(e instanceof Hg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Oi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${hS}=${encodeURIComponent(l)}`:"";return`${dS(t)}?${Si(c).slice(1)}${h}`}function dS({config:t}){return t.emulator?au(t,uS):`https://${t.authDomain}/${lS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class fS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jg,this._completeRedirectFn=LR,this._overrideRedirectResult=OR}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gf(e,n,r,Yc(),s);return aS(e,o,du())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await gf(e,n,r,Yc(),s);return gR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tS(e),r=new UR(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mc];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ug()||Ng()||lu()}}const pS=fS;var _f="@firebase/auth",yf="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _S(t){os(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bg(t)},h=new Vb(r,s,i,l);return jb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new Tr("auth-internal",e=>{const n=kr(e.getProvider("auth").getImmediate());return(r=>new mS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(_f,yf,gS(t)),Gn(_f,yf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=5*60,vS=Gp("authIdTokenMaxAge")||yS;let vf=null;const ES=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vS)return;const s=n==null?void 0:n.token;vf!==s&&(vf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function TS(t=Xp()){const e=bl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$b(t,{popupRedirectResolver:pS,persistence:[bR,fR,Jg]}),r=Gp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ES(i.toString());cR(n,o,()=>o(n.currentUser)),aR(n,c=>o(c))}}const s=zp("auth");return s&&qb(n,`http://${s}`),n}function wS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Nb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_S("Browser");const IS={apiKey:"AIzaSyAebN4EZbY0dgHv6MuUEq10gGtcMUdXe2k",authDomain:"vue-live-chat-1623e.firebaseapp.com",projectId:"vue-live-chat-1623e",storageBucket:"vue-live-chat-1623e.firebasestorage.app",messagingSenderId:"100719649527",appId:"1:100719649527:web:b116c06a65f32e892769f2",measurementId:"G-4LY3FCSN03"},s_=Jp(IS),i_=FA(s_),Dr=TS(s_),AS={name:"Input",props:{id:{type:String,required:!0},autocomplete:{type:String,default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},modelValue:{type:[String,Number],default:""},error:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const{id:n,label:r,type:s,placeholder:i,modelValue:o,error:c}=fy(t);return{id:n,label:r,type:s,placeholder:i,modelValue:o,error:c,onInput:h=>{e("update:modelValue",h.target.value)}}}},bS=["for"],RS=["id","autocomplete","type","placeholder","required","value"],SS={key:0,class:"text-sm text-red-500 mt-1"};function PS(t,e,n,r,s,i){return Fe(),ze(wt,null,[Ee("label",{for:r.id,class:"block text-sm font-medium text-gray-700"},qt(r.label),9,bS),Ee("input",{id:r.id,autocomplete:n.autocomplete,type:r.type,placeholder:r.placeholder,required:n.required,value:r.modelValue,onInput:e[0]||(e[0]=(...o)=>r.onInput&&r.onInput(...o)),class:"mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"},null,40,RS),r.error?(Fe(),ze("p",SS,qt(r.error),1)):Do("",!0)],64)}const o_=Bt(AS,[["render",PS]]),CS=oa({name:"Button",props:{type:{type:String,default:"button"},variant:{type:String,default:"primary"},size:{type:String,default:"medium"}},emits:["click"],setup(t,{emit:e}){const n=Rt(()=>{switch(t.variant){case"secondary":return"bg-gray-500 hover:bg-gray-600 focus:ring-gray-500";case"danger":return"bg-red-500 hover:bg-red-600 focus:ring-red-500";default:return"bg-blue-500 hover:bg-blue-600 focus:ring-blue-500"}}),r=Rt(()=>{switch(t.size){case"small":return"text-sm py-1 px-2";case"large":return"text-lg py-3 px-5";default:return"text-md"}});return{variantClasses:n,sizeClasses:r,onClick:i=>{e("click",i)}}}}),kS=["type"];function DS(t,e,n,r,s,i){return Fe(),ze("button",{type:t.type,class:ta(["py-2 px-4 rounded-md text-white focus:ring-2 focus:ring-opacity-50",t.variantClasses,t.sizeClasses]),onClick:e[0]||(e[0]=(...o)=>t.onClick&&t.onClick(...o))},[By(t.$slots,"default")],10,kS)}const pu=Bt(CS,[["render",DS]]),wo=mt(null),VS=async(t,e)=>{wo.value=null;try{const n=await sR(Dr,t,e);console.log(n);const r=n.user;return console.log(r),wo.value=null,r}catch(n){console.error(n.message),wo.value=n.message}},NS=()=>({error:wo,login:VS}),OS={name:"LoginForm",components:{Input:o_,Button:pu},setup(t,{emit:e}){const n=mt(""),r=mt(""),{error:s,login:i}=NS();return{email:n,password:r,error:s,handleSubmit:async()=>{await i(n.value,r.value),s.value||e("login")}}}},xS={class:"flex items-center justify-center"},MS={class:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},LS={class:"mb-4"},FS={class:"mb-4"},US={class:"text-red-600 mb-2"};function BS(t,e,n,r,s,i){const o=Ft("Input"),c=Ft("Button");return Fe(),ze("div",xS,[Ee("div",MS,[e[4]||(e[4]=Ee("h2",{class:"text-2xl font-semibold mb-4 text-gray-800"},"Sign in",-1)),Ee("form",{onSubmit:e[2]||(e[2]=Tl((...l)=>r.handleSubmit&&r.handleSubmit(...l),["prevent"]))},[Ee("div",LS,[Pe(o,{modelValue:r.email,"onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),autocomplete:"email",type:"email",id:"email",placeholder:"Enter your email",label:"Email",required:""},null,8,["modelValue"])]),Ee("div",FS,[Pe(o,{modelValue:r.password,"onUpdate:modelValue":e[1]||(e[1]=l=>r.password=l),autocomplete:"current-password",type:"password",id:"password",placeholder:"Enter your password",label:"Password",required:""},null,8,["modelValue"])]),Ee("div",US,qt(r.error),1),Pe(c,{type:"submit",class:"w-full"},{default:ia(()=>e[3]||(e[3]=[qn("Sign in")])),_:1})],32)])])}const $S=Bt(OS,[["render",BS]]),mr=mt(null),jS=async(t,e,n)=>{mr.value=null;try{const r=await rR(Dr,t,e);if(!r)throw new Error("Could not complete the signup");const s=r.user;return await oR(s,{displayName:n}),console.log(r.user),mr.value=null,s}catch(r){switch(r.code){case"auth/email-already-in-use":mr.value="This email is already in use.";break;case"auth/invalid-email":mr.value="The email address is not valid.";break;case"auth/weak-password":mr.value="The password is too weak. It must be at least 6 characters.";break;default:alert(`An error occurred: ${mr.message}`)}}},qS=()=>({error:mr,signup:jS}),HS={name:"SignupForm",components:{Input:o_,Button:pu},setup(t,{emit:e}){const{error:n,signup:r}=qS(),s=mt(""),i=mt(""),o=mt("");return{name:s,email:i,password:o,error:n,handleSubmit:async()=>{await r(i.value,o.value,s.value),n.value||e("signup")}}}},WS={class:"flex items-center justify-center"},zS={class:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},KS={class:"mb-4"},GS={class:"mb-4"},QS={class:"mb-4"},YS={class:"text-red-600 mb-2"};function JS(t,e,n,r,s,i){const o=Ft("Input"),c=Ft("Button");return Fe(),ze("div",WS,[Ee("div",zS,[e[5]||(e[5]=Ee("h2",{class:"text-2xl font-semibold mb-4 text-gray-800"},"Sign up",-1)),Ee("form",{onSubmit:e[3]||(e[3]=Tl((...l)=>r.handleSubmit&&r.handleSubmit(...l),["prevent"]))},[Ee("div",KS,[Pe(o,{modelValue:r.name,"onUpdate:modelValue":e[0]||(e[0]=l=>r.name=l),type:"text",id:"name",placeholder:"Enter your name",label:"Name",required:""},null,8,["modelValue"])]),Ee("div",GS,[Pe(o,{modelValue:r.email,"onUpdate:modelValue":e[1]||(e[1]=l=>r.email=l),autocomplete:"email",type:"email",id:"email",placeholder:"Enter your email",label:"Email",required:""},null,8,["modelValue"])]),Ee("div",QS,[Pe(o,{modelValue:r.password,"onUpdate:modelValue":e[2]||(e[2]=l=>r.password=l),autocomplete:"new-password",type:"password",id:"password",placeholder:"Enter your password",label:"Password",required:""},null,8,["modelValue"])]),Ee("div",YS,qt(r.error),1),Pe(c,{type:"submit",class:"w-full"},{default:ia(()=>e[4]||(e[4]=[qn("Sign up")])),_:1})],32)])])}const XS=Bt(HS,[["render",JS]]),ZS={name:"HomeView",components:{SignupForm:XS,LoginForm:$S},setup(){const t=mt(!0),e=da();return{showLogin:t,enterChat:()=>{e.push({name:"Chatroom"})}}}},eP={class:"container text-center py-5 px-0 mx-auto"},tP={key:0},nP={class:"mt-3 text-white"},rP={key:1},sP={class:"mt-3 text-white"};function iP(t,e,n,r,s,i){const o=Ft("LoginForm"),c=Ft("SignupForm");return Fe(),ze("div",eP,[r.showLogin?(Fe(),ze("div",tP,[Pe(o,{onLogin:r.enterChat},null,8,["onLogin"]),Ee("p",nP,[e[2]||(e[2]=qn(" No account yet? ")),Ee("span",{class:"cursor-pointer text-blue-500 font-bold",onClick:e[0]||(e[0]=l=>r.showLogin=!r.showLogin)}," Sign up "),e[3]||(e[3]=qn(" instead "))])])):(Fe(),ze("div",rP,[Pe(c,{onSignup:r.enterChat},null,8,["onSignup"]),Ee("p",sP,[e[4]||(e[4]=qn(" Already registered? ")),Ee("span",{class:"cursor-pointer text-blue-500 font-bold",onClick:e[1]||(e[1]=l=>r.showLogin=!r.showLogin)}," Sign in "),e[5]||(e[5]=qn(" instead "))])]))])}const oP=Bt(ZS,[["render",iP]]),el=mt(null),aP=async()=>{el.value=null;try{await uR(Dr),console.log("sign out")}catch(t){console.error(t.message),el.value=t.message}},cP=()=>({logout:aP,error:el}),tl=mt(null);lR(Dr,t=>{t?(tl.value=t,console.log("User logged in:",t.email)):(tl.value=null,console.log("No user logged in"))});const mu=()=>({user:tl}),lP={setup(){const{logout:t,error:e}=cP(),{user:n}=mu();return da(),{logout:t,handleClick:async()=>{await t(),e.value||console.log("user logged out")},user:n}}},uP={class:"bg-blue-500 text-white shadow-md"},hP={class:"container mx-auto px-4 py-3 flex justify-between items-center"},dP={class:"text-lg font-bold"},fP={key:0};function pP(t,e,n,r,s,i){var o;return Fe(),ze("nav",uP,[Ee("div",hP,[Ee("div",dP,[e[1]||(e[1]=Ee("a",{href:"/"},"MyApp",-1)),(o=r.user)!=null&&o.email?(Fe(),ze("p",fP,qt(r.user.email),1)):Do("",!0)]),Ee("div",null,[Ee("button",{onClick:e[0]||(e[0]=(...c)=>r.handleClick&&r.handleClick(...c)),class:"px-4 py-2 bg-white text-blue-500 rounded-md shadow hover:bg-gray-100"}," Logout ")])])])}const mP=Bt(lP,[["render",pP],["__scopeId","data-v-0136e286"]]),gP=oa({name:"TextAreaWithEnter",props:{modelValue:{type:String,default:""},attrs:{type:Object,default:()=>({})}},emits:["update:modelValue","keypress.enter"],methods:{updateValue(t){this.$emit("update:modelValue",t.target.value)},handleKeypress(t){t.key==="Enter"&&this.$emit("keypress.enter",t)}}}),_P=["value"];function yP(t,e,n,r,s,i){return Fe(),ze("textarea",bp(t.attrs,{value:t.modelValue,onInput:e[0]||(e[0]=(...o)=>t.updateValue&&t.updateValue(...o)),onKeypress:e[1]||(e[1]=(...o)=>t.handleKeypress&&t.handleKeypress(...o)),class:"textarea focus:outline-none"}),null,16,_P)}const vP=Bt(gP,[["render",yP],["__scopeId","data-v-73a9ff0b"]]),EP=t=>{const e=mt(null);return{error:e,sendDataToFirestore:async r=>{e.value=null;try{const s=await nb(ug(i_,t),r);console.log("Document written with ID: ",s.id)}catch(s){console.error("Error adding document: ",s),e.value="Could not send the data to the server"}}}},TP={name:"NewChatForm",components:{Textarea:vP},setup(){const t=mt(null),{user:e}=mu(),{sendDataToFirestore:n,error:r}=EP("messages");return{message:t,error:r,handleSubmit:async()=>{const i={name:e.value.displayName,message:t.value,createdAt:ob()};await n(i),r.value||(t.value="")}}}},wP={class:"error"};function IP(t,e,n,r,s,i){const o=Ft("Textarea");return Fe(),ze("form",null,[Pe(o,{modelValue:r.message,"onUpdate:modelValue":e[0]||(e[0]=c=>r.message=c),placeholder:"Type a message and hit enter to send...",class:"rounded-b-lg",onKeypress:Xv(Tl(r.handleSubmit,["prevent"]),["enter"])},null,8,["modelValue","onKeypress"]),Ee("div",wP,qt(r.error),1)])}const AP=Bt(TP,[["render",IP]]),bP=t=>{const e=mt([]),n=mt(null);try{const r=YA(ug(i_,t),JA("createdAt")),s=rb(r,i=>{const o=i.docs.map(c=>({...c.data(),id:c.id}));e.value=o,n.value=null},i=>{console.error("Error fetching documents: ",i.message),n.value="Could not fetch the data",e.value=[]});return av(i=>{i(()=>{console.log("unsub"),s()})}),{documents:e,error:n}}catch(r){return console.error("Error fetching documents: ",r.message),n.value="Could not fetch the data",e.value=[],{documents:e,error:n}}},oo=43200,Ef=1440,Tf=Symbol.for("constructDateFrom");function gu(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Tf in t?t[Tf](e):t instanceof Date?new t.constructor(e):new Date(e)}function nr(t,e){return gu(t,t)}let RP={};function SP(){return RP}function wf(t){const e=nr(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function _u(t,...e){const n=gu.bind(null,t||e.find(r=>typeof r=="object"));return e.map(n)}function Io(t,e){const n=+nr(t)-+nr(e);return n<0?-1:n>0?1:n}function PP(t){return gu(t,Date.now())}function CP(t,e,n){const[r,s]=_u(n==null?void 0:n.in,t,e),i=r.getFullYear()-s.getFullYear(),o=r.getMonth()-s.getMonth();return i*12+o}function kP(t){return e=>{const n=Math.trunc,r=n(e);return r===0?0:r}}function DP(t,e){return+nr(t)-+nr(e)}function VP(t,e){const n=nr(t);return n.setHours(23,59,59,999),n}function NP(t,e){const n=nr(t),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function OP(t,e){const n=nr(t);return+VP(n)==+NP(n)}function xP(t,e,n){const[r,s,i]=_u(n==null?void 0:n.in,t,t,e),o=Io(s,i),c=Math.abs(CP(s,i));if(c<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-o*c);let l=Io(s,i)===-o;OP(r)&&c===1&&Io(r,i)===1&&(l=!1);const h=o*(c-+l);return h===0?0:h}function MP(t,e,n){const r=DP(t,e)/1e3;return kP()(r)}const LP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},FP=(t,e,n)=>{let r;const s=LP[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function gc(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const UP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},BP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$P={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},jP={date:gc({formats:UP,defaultWidth:"full"}),time:gc({formats:BP,defaultWidth:"full"}),dateTime:gc({formats:$P,defaultWidth:"full"})},qP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},HP=(t,e,n,r)=>qP[t];function Ls(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let s;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,c=n!=null&&n.width?String(n.width):o;s=t.formattingValues[c]||t.formattingValues[o]}else{const o=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;s=t.values[c]||t.values[o]}const i=t.argumentCallback?t.argumentCallback(e):e;return s[i]}}const WP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},zP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},KP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},GP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},QP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},YP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},JP=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},XP={ordinalNumber:JP,era:Ls({values:WP,defaultWidth:"wide"}),quarter:Ls({values:zP,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ls({values:KP,defaultWidth:"wide"}),day:Ls({values:GP,defaultWidth:"wide"}),dayPeriod:Ls({values:QP,defaultWidth:"wide",formattingValues:YP,defaultFormattingWidth:"wide"})};function Fs(t){return(e,n={})=>{const r=n.width,s=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(s);if(!i)return null;const o=i[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(c)?eC(c,p=>p.test(o)):ZP(c,p=>p.test(o));let h;h=t.valueCallback?t.valueCallback(l):l,h=n.valueCallback?n.valueCallback(h):h;const d=e.slice(o.length);return{value:h,rest:d}}}function ZP(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function eC(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function tC(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const s=r[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const c=e.slice(s.length);return{value:o,rest:c}}}const nC=/^(\d+)(th|st|nd|rd)?/i,rC=/\d+/i,sC={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},iC={any:[/^b/i,/^(a|c)/i]},oC={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},aC={any:[/1/i,/2/i,/3/i,/4/i]},cC={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},lC={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},uC={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},hC={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},dC={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},fC={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pC={ordinalNumber:tC({matchPattern:nC,parsePattern:rC,valueCallback:t=>parseInt(t,10)}),era:Fs({matchPatterns:sC,defaultMatchWidth:"wide",parsePatterns:iC,defaultParseWidth:"any"}),quarter:Fs({matchPatterns:oC,defaultMatchWidth:"wide",parsePatterns:aC,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Fs({matchPatterns:cC,defaultMatchWidth:"wide",parsePatterns:lC,defaultParseWidth:"any"}),day:Fs({matchPatterns:uC,defaultMatchWidth:"wide",parsePatterns:hC,defaultParseWidth:"any"}),dayPeriod:Fs({matchPatterns:dC,defaultMatchWidth:"any",parsePatterns:fC,defaultParseWidth:"any"})},mC={code:"en-US",formatDistance:FP,formatLong:jP,formatRelative:HP,localize:XP,match:pC,options:{weekStartsOn:0,firstWeekContainsDate:1}};function gC(t,e,n){const r=SP(),s=(n==null?void 0:n.locale)??r.locale??mC,i=2520,o=Io(t,e);if(isNaN(o))throw new RangeError("Invalid time value");const c=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:o}),[l,h]=_u(n==null?void 0:n.in,...o>0?[e,t]:[t,e]),d=MP(h,l),p=(wf(h)-wf(l))/1e3,g=Math.round((d-p)/60);let y;if(g<2)return n!=null&&n.includeSeconds?d<5?s.formatDistance("lessThanXSeconds",5,c):d<10?s.formatDistance("lessThanXSeconds",10,c):d<20?s.formatDistance("lessThanXSeconds",20,c):d<40?s.formatDistance("halfAMinute",0,c):d<60?s.formatDistance("lessThanXMinutes",1,c):s.formatDistance("xMinutes",1,c):g===0?s.formatDistance("lessThanXMinutes",1,c):s.formatDistance("xMinutes",g,c);if(g<45)return s.formatDistance("xMinutes",g,c);if(g<90)return s.formatDistance("aboutXHours",1,c);if(g<Ef){const C=Math.round(g/60);return s.formatDistance("aboutXHours",C,c)}else{if(g<i)return s.formatDistance("xDays",1,c);if(g<oo){const C=Math.round(g/Ef);return s.formatDistance("xDays",C,c)}else if(g<oo*2)return y=Math.round(g/oo),s.formatDistance("aboutXMonths",y,c)}if(y=xP(h,l),y<12){const C=Math.round(g/oo);return s.formatDistance("xMonths",C,c)}else{const C=y%12,D=Math.trunc(y/12);return C<3?s.formatDistance("aboutXYears",D,c):C<9?s.formatDistance("overXYears",D,c):s.formatDistance("almostXYears",D+1,c)}}function _C(t,e){return gC(t,PP(t),e)}const yC={name:"ChatWindow",setup(){const{documents:t,error:e}=bP("messages"),n=Rt(()=>t.value?t.value.map(s=>{let i=s.createdAt&&typeof s.createdAt.toDate=="function"?_C(s.createdAt.toDate()):"Unknown time";return{...s,createdAt:i}}):[]),r=mt(null);return sp(()=>{r.value.scrollTop=r.value.scrollHeight}),{error:e,documents:t,formattedDocuments:n,messages:r}}},vC={class:"chat-window"},EC={key:0,class:"text-red-500 font-semibold"},TC={key:1,class:"messages space-y-4",ref:"messages"},wC={class:"text-sm text-gray-500"},IC={class:"font-semibold text-gray-800"},AC={class:"text-gray-700"};function bC(t,e,n,r,s,i){return Fe(),ze("div",vC,[r.error?(Fe(),ze("div",EC,qt(r.error),1)):Do("",!0),r.formattedDocuments?(Fe(),ze("div",TC,[(Fe(!0),ze(wt,null,Uy(r.formattedDocuments,o=>(Fe(),ze("div",{key:o.id,class:"single"},[Ee("div",wC,qt(o.createdAt),1),Ee("div",IC,qt(o.name),1),Ee("div",AC,qt(o.message),1)]))),128))],512)):Do("",!0)])}const RC=Bt(yC,[["render",bC]]),SC={name:"Chatroom",components:{Navbar:mP,NewChatForm:AP,ChatWindow:RC},setup(){const{user:t}=mu(),e=da();Ys(t,()=>{t.value||e.push({name:"Home"})})}},PC={class:"max-w-[796px] mx-auto"};function CC(t,e,n,r,s,i){const o=Ft("Navbar"),c=Ft("ChatWindow"),l=Ft("NewChatForm");return Fe(),ze(wt,null,[Pe(o),Ee("div",PC,[e[0]||(e[0]=Ee("div",{class:"text-white"},"Chatroom",-1)),Pe(c,{class:"rounded-t-lg"}),Pe(l)])],64)}const kC=Bt(SC,[["render",CC]]),DC={name:"NotFoundView",components:{Button:pu},setup(){const t=da();return{goToHome:()=>{t.push({name:"Home"})}}}},VC={class:"min-h-screen flex flex-col items-center justify-center"};function NC(t,e,n,r,s,i){const o=Ft("Button");return Fe(),ze("div",VC,[e[1]||(e[1]=Ee("h1",{class:"text-6xl font-bold text-white mb-4"},"404",-1)),e[2]||(e[2]=Ee("p",{class:"text-lg text-white mb-8 text-center"}," Oops! The page you're looking for doesn't exist. ",-1)),Pe(o,{size:"large",onClick:r.goToHome},{default:ia(()=>e[0]||(e[0]=[qn("Go back to Home")])),_:1},8,["onClick"])])}const OC=Bt(DC,[["render",NC]]),xC=(t,e,n)=>{Dr.currentUser?n():n({name:"Home"})},MC=(t,e,n)=>{Dr.currentUser?n({name:"Chatroom"}):n()},LC=sT({history:OE("/"),routes:[{path:"/",name:"Home",component:oP,beforeEnter:MC},{path:"/chatroom",name:"Chatroom",component:kC,beforeEnter:xC},{path:"/:pathMatch(.*)*",name:"NotFound",component:OC}]});let ao;Dr.onAuthStateChanged(()=>{ao||(ao=tE(cT),ao.use(LC),ao.mount("#app"))});
