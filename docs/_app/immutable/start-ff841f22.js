import{S as at,i as rt,s as ot,a as st,e as B,c as it,b as M,g as de,t as F,d as pe,f as z,h as G,j as lt,o as Ie,k as ct,l as ft,m as ut,n as ve,p as V,q as dt,r as pt,u as ht,v as W,w as Y,x as Ue,y as X,z as Z,A as ce}from"./chunks/index-d2e4a462.js";import{S as tt,I as C,g as Me,f as He,a as Ee,b as fe,s as K,i as We,c as ue,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-91d34402.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function wt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const s of vt){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function St(a){return a.replace(/\/$/,"")+Rt}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete($e(a)),he(a,e));const te=new Map;function It(a,e){const n=$e(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...f}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:i,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,f))}return he(a,e)}function Ot(a,e,n){if(te.size>0){const s=$e(a,n),i=te.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);te.delete(s)}}return he(e,n)}function $e(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Lt(e.body)}"]`),s}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${$t(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((g,d)=>{if(d%2){if(g.startsWith("x+"))return ke(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ke(String.fromCharCode(...g.slice(2).split("-").map(U=>parseInt(U,16))));const _=At.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,k,L,T]=_;return e.push({name:L,matcher:T,optional:!!E,rest:!!k,chained:k?d===1&&t[0]==="":!1}),k?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return ke(g)}).join("")}).join("")}/?$`),params:e}}function Ut(a){return!/^\([^)]+\)$/.test(a)}function $t(a){return a.slice(1).split("/").filter(Ut)}function Nt(a,e,n){const s={},i=a.slice(1);let f="";for(let t=0;t<e.length;t+=1){const l=e[t];let g=i[t];if(l.chained&&l.rest&&f&&(g=g?f+"/"+g:f),f="",g===void 0)l.rest&&(s[l.name]="");else{if(l.matcher&&!n[l.matcher](g)){if(l.optional&&l.chained){let d=i.indexOf(void 0,t);if(d===-1){const _=e[t+1];if(_!=null&&_.rest&&_.chained)f=g;else return}for(;d>=t;)i[d]=i[d-1],d-=1;continue}return}s[l.name]=g}}if(!f)return s}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([l,[g,d,_]])=>{const{pattern:E,params:k}=Pt(l),L={id:l,exec:T=>{const U=E.exec(T);if(U)return Nt(U,k,s)},errors:[1,..._||[]].map(T=>a[T]),layouts:[0,...d||[]].map(t),leaf:f(g)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function f(l){const g=l<0;return g&&(l=~l),[g,a[l]]}function t(l){return l===void 0?l:[i.has(l),a[l]]}}function Tt(a){let e,n,s;var i=a[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=W(i,f(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,l){e&&X(e,t,l),M(t,n,l),s=!0},p(t,l){const g={};if(l&4&&(g.data=t[2]),l&2&&(g.form=t[1]),l&1&&i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,f(t)),Y(e.$$.fragment),z(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Dt(a){let e,n,s;var i=a[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return i&&(e=W(i,f(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,l){e&&X(e,t,l),M(t,n,l),s=!0},p(t,l){const g={};if(l&4&&(g.data=t[2]),l&523&&(g.$$scope={dirty:l,ctx:t}),l&1&&i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,f(t)),Y(e.$$.fragment),z(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Vt(a){let e,n,s;var i=a[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=W(i,f(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,l){e&&X(e,t,l),M(t,n,l),s=!0},p(t,l){const g={};if(l&8&&(g.data=t[3]),l&2&&(g.form=t[1]),l&1&&i!==(i=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,f(t)),Y(e.$$.fragment),z(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){s||(e&&z(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ut(e);n&&n.l(i),i.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(s,i){M(s,e,i),n&&n.m(e,null)},p(s,i){s[5]?n?n.p(s,i):(n=Ze(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[6])},l(n){e=pt(n,a[6])},m(n,s){M(n,e,s)},p(n,s){s&64&&ht(e,n[6])},d(n){n&&G(e)}}}function Ct(a){let e,n,s,i,f;const t=[Dt,Tt],l=[];function g(_,E){return _[0][1]?0:1}e=g(a),n=l[e]=t[e](a);let d=a[4]&&Xe(a);return{c(){n.c(),s=st(),d&&d.c(),i=B()},l(_){n.l(_),s=it(_),d&&d.l(_),i=B()},m(_,E){l[e].m(_,E),M(_,s,E),d&&d.m(_,E),M(_,i,E),f=!0},p(_,[E]){let k=e;e=g(_),e===k?l[e].p(_,E):(de(),F(l[k],1,1,()=>{l[k]=null}),pe(),n=l[e],n?n.p(_,E):(n=l[e]=t[e](_),n.c()),z(n,1),n.m(s.parentNode,s)),_[4]?d?d.p(_,E):(d=Xe(_),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(_){f||(z(n),f=!0)},o(_){F(n),f=!1},d(_){l[e].d(_),_&&G(s),d&&d.d(_),_&&G(i)}}}function qt(a,e,n){let{stores:s}=e,{page:i}=e,{components:f}=e,{form:t}=e,{data_0:l=null}=e,{data_1:g=null}=e;lt(s.page.notify);let d=!1,_=!1,E=null;return Ie(()=>{const k=s.page.subscribe(()=>{d&&(n(5,_=!0),n(6,E=document.title||"untitled page"))});return n(4,d=!0),k}),a.$$set=k=>{"stores"in k&&n(7,s=k.stores),"page"in k&&n(8,i=k.page),"components"in k&&n(0,f=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,l=k.data_0),"data_1"in k&&n(3,g=k.data_1)},a.$$.update=()=>{a.$$.dirty&384&&s.page.set(i)},[f,t,l,g,d,_,E,s,i]}class Bt extends at{constructor(e){super(),rt(this,e,qt,Ct,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",zt=function(a,e){return new URL(a,e).href},Qe={},q=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=zt(f,s),f in Qe)return;Qe[f]=!0;const t=f.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!s)for(let _=i.length-1;_>=0;_--){const E=i[_];if(E.href===f&&(!t||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${l}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Ft,t||(d.as="script",d.crossOrigin=""),d.href=f,document.head.appendChild(d),t)return new Promise((_,E)=>{d.addEventListener("load",_),d.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Gt={},me=[()=>q(()=>import("./chunks/0-e15db668.js"),["./chunks/0-e15db668.js","./components/pages/_layout.svelte-bdb04e6c.js","./chunks/index-d2e4a462.js","./chunks/index-7df088d4.js","./chunks/ProgressBar.svelte_svelte_type_style_lang-4e490c8a.js","./assets/ProgressBar-05e4960c.css","./assets/_layout-5bd1a388.css"],import.meta.url),()=>q(()=>import("./chunks/1-09380ff4.js"),["./chunks/1-09380ff4.js","./components/error.svelte-17fb23d3.js","./chunks/index-d2e4a462.js","./chunks/singletons-91d34402.js","./chunks/index-7df088d4.js"],import.meta.url),()=>q(()=>import("./chunks/2-c594d754.js"),["./chunks/2-c594d754.js","./components/pages/_page.svelte-7711a3a2.js","./chunks/index-d2e4a462.js","./chunks/ProgressBar.svelte_svelte_type_style_lang-4e490c8a.js","./chunks/index-7df088d4.js","./assets/ProgressBar-05e4960c.css","./assets/_page-a7e68128.css"],import.meta.url),()=>q(()=>import("./chunks/3-54146878.js"),["./chunks/3-54146878.js","./components/pages/posts/ad-free-alternatives-on-android-and-ios/_page.svx-4c31c601.js","./chunks/index-d2e4a462.js","./chunks/default-2bc4d721.js","./chunks/ProgressBar.svelte_svelte_type_style_lang-4e490c8a.js","./chunks/index-7df088d4.js","./assets/ProgressBar-05e4960c.css","./assets/default-3042a569.css"],import.meta.url),()=>q(()=>import("./chunks/4-20754936.js"),["./chunks/4-20754936.js","./components/pages/posts/category/_page.svelte-5c0eb79a.js","./chunks/index-d2e4a462.js"],import.meta.url),()=>q(()=>import("./chunks/5-7775835f.js"),["./chunks/5-7775835f.js","./components/pages/posts/create-button-component-for-svelte/_page.svx-70a308b3.js","./chunks/index-d2e4a462.js","./chunks/default-2bc4d721.js","./chunks/ProgressBar.svelte_svelte_type_style_lang-4e490c8a.js","./chunks/index-7df088d4.js","./assets/ProgressBar-05e4960c.css","./assets/default-3042a569.css","./assets/_page-113b8192.css"],import.meta.url),()=>q(()=>import("./chunks/6-21489c82.js"),["./chunks/6-21489c82.js","./components/pages/posts/create-horizontal-scroll-section-html-css-js/_page.svx-af095251.js","./chunks/index-d2e4a462.js","./chunks/default-2bc4d721.js","./chunks/ProgressBar.svelte_svelte_type_style_lang-4e490c8a.js","./chunks/index-7df088d4.js","./assets/ProgressBar-05e4960c.css","./assets/default-3042a569.css"],import.meta.url),()=>q(()=>import("./chunks/7-50e865d0.js"),["./chunks/7-50e865d0.js","./components/pages/posts/passkeys-now-available-in-chrome/_page.svx-0676d0c5.js","./chunks/index-d2e4a462.js","./chunks/default-2bc4d721.js","./chunks/ProgressBar.svelte_svelte_type_style_lang-4e490c8a.js","./chunks/index-7df088d4.js","./assets/ProgressBar-05e4960c.css","./assets/default-3042a569.css"],import.meta.url)],Jt=[0],Kt={"/":[-3],"/posts/ad-free-alternatives-on-android-and-ios":[3],"/posts/category":[-5],"/posts/create-button-component-for-svelte":[5],"/posts/create-horizontal-scroll-section-html-css-js":[6],"/posts/passkeys-now-available-in-chrome":[7]},Mt={handleError:({error:a})=>{console.error(a)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Ht(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,s=Array(n.length);function i(f,t=!1){if(f===Wt)return;if(f===Xt)return NaN;if(f===Zt)return 1/0;if(f===Qt)return-1/0;if(f===xt)return-0;if(t)throw new Error("Invalid input");if(f in s)return s[f];const l=n[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],d=e==null?void 0:e[g];if(d)return s[f]=d(i(l[1]));switch(g){case"Date":s[f]=new Date(l[1]);break;case"Set":const _=new Set;s[f]=_;for(let L=1;L<l.length;L+=1)_.add(i(l[L]));break;case"Map":const E=new Map;s[f]=E;for(let L=1;L<l.length;L+=2)E.set(i(l[L]),i(l[L+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const k=Object.create(null);s[f]=k;for(let L=1;L<l.length;L+=2)k[l[L]]=i(l[L+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);s[f]=g;for(let d=0;d<l.length;d+=1){const _=l[d];_!==Yt&&(g[d]=i(_))}}else{const g={};s[f]=g;for(const d in l){const _=l[d];g[d]=i(_)}}return s[f]}return i(0)}const Re=jt(me,Jt,Kt,Gt),Ae=me[0],Pe=me[1];Ae();Pe();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Se(a){ne[a]=ue()}function tn({target:a,base:e}){var Ge;const n=document.documentElement,s=[];let i=null;const f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,g=!1,d=!0,_=!1,E=!1,k=!1,L=!1,T,U=(Ge=history.state)==null?void 0:Ge[C];U||(U=Date.now(),history.replaceState({...history.state,[C]:U},"",location.href));const _e=ne[U];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let J,Ne,ae;async function je(){ae=ae||Promise.resolve(),await ae,ae=null;const r=new URL(location.href),o=se(r,!0);i=null,await De(o,r,[])}async function ge(r,{noScroll:o=!1,replaceState:u=!1,keepFocus:c=!1,state:p={},invalidateAll:h=!1},m,b){return typeof r=="string"&&(r=new URL(r,Me(document))),ie({url:r,scroll:o?ue():null,keepfocus:c,redirect_chain:m,details:{state:p,replaceState:u},nav_token:b,accepted:()=>{h&&(L=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const o=se(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:qe(o).then(u=>(u.type==="loaded"&&u.state.error&&(i=null),u))},i.promise}async function re(...r){const u=Re.filter(c=>r.some(p=>c.exec(p))).map(c=>Promise.all([...c.layouts,c.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(u)}async function De(r,o,u,c,p={},h){var b,w;Ne=p;let m=r&&await qe(r);if(m||(m=await ze(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Ne!==p)return!1;if(m.type==="redirect")if(u.length>10||u.includes(o.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(m.location,o).href,{},[...u,o.pathname],p),!1;else((w=(b=m.props)==null?void 0:b.page)==null?void 0:w.status)>=400&&await K.updated.check()&&await le(o);if(s.length=0,L=!1,_=!0,c&&c.details){const{details:y}=c,S=y.replaceState?0:1;y.state[C]=U+=S,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,g?(t=m.state,m.props.page&&(m.props.page.url=o),T.$set(m.props)):Ve(m),c){const{scroll:y,keepfocus:S}=c;if(S||Le(),await ce(),d){const I=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ce();d=!0,m.props.page&&(J=m.props.page),h&&h(),_=!1}function Ve(r){var c;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),J=r.props.page,T=new Bt({target:a,props:{...r.props,stores:K},hydrate:!0});const u={from:null,to:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};f.after_navigate.forEach(p=>p(u)),g=!0}async function Q({url:r,params:o,branch:u,status:c,error:p,route:h,form:m}){const b=u.filter(Boolean);let w="never";for(const O of u)(O==null?void 0:O.slash)!==void 0&&(w=O.slash);r.pathname=yt(r.pathname,w),r.search=r.search;const y={type:"loaded",state:{url:r,params:o,branch:u,error:p,route:h},props:{components:b.map(O=>O.node.component)}};m!==void 0&&(y.props.form=m);let S={},I=!J;for(let O=0;O<b.length;O+=1){const v=b[O];S={...S,...v.data},(I||!t.branch.some(N=>N===v))&&(y.props[`data_${O}`]=S,I=I||Object.keys(v.data??{}).length>0)}return I||(I=Object.keys(J.data).length!==Object.keys(S).length),(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0||I)&&(y.props.page={error:p,params:o,route:h,status:c,url:new URL(r),form:m??null,data:I?S:J.data}),y}async function ye({loader:r,parent:o,url:u,params:c,route:p,server_data_node:h}){var y,S,I;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},w=await r();if((y=w.universal)!=null&&y.load){let D=function(...v){for(const N of v){const{href:j}=new URL(N,u);b.dependencies.add(j)}};const O={route:{get id(){return b.route=!0,p.id}},params:new Proxy(c,{get:(v,N)=>(b.params.add(N),v[N])}),data:(h==null?void 0:h.data)??null,url:Et(u,()=>{b.url=!0}),async fetch(v,N){let j;v instanceof Request?(j=v.url,N={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...N}):j=v;const R=new URL(j,u).href;return D(R),g?Ot(j,R,N):It(j,N)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,o()}};m=await w.universal.load.call(null,O)??null,m=m?await Ht(m):null}return{node:w,loader:r,server:h,universal:(S=w.universal)!=null&&S.load?{type:"data",data:m,uses:b}:null,data:m??(h==null?void 0:h.data)??null,slash:((I=w.universal)==null?void 0:I.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(r,o,u,c,p){if(L)return!0;if(!c)return!1;if(c.parent&&r||c.route&&o||c.url&&u)return!0;for(const h of c.params)if(p[h]!==t.params[h])return!0;for(const h of c.dependencies)if(s.some(m=>m(new URL(h))))return!0;return!1}function we(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function qe({id:r,invalidating:o,url:u,params:c,route:p}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:h,layouts:m,leaf:b}=p,w=[...m,b];h.forEach(R=>R==null?void 0:R().catch(()=>{})),w.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let y=null;const S=t.url?r!==t.url.pathname+t.url.search:!1,I=t.route?r!==t.route.id:!1,D=w.reduce((R,P,$)=>{var x;const A=t.branch[$],H=!!(P!=null&&P[0])&&((A==null?void 0:A.loader)!==P[1]||Ce(R.some(Boolean),I,S,(x=A.server)==null?void 0:x.uses,c));return R.push(H),R},[]);if(D.some(Boolean)){try{y=await et(u,D)}catch(R){return oe({status:500,error:await ee(R,{url:u,params:c,route:{id:p.id}}),url:u,route:p})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let v=!1;const N=w.map(async(R,P)=>{var x;if(!R)return;const $=t.branch[P],A=O==null?void 0:O[P];if((!A||A.type==="skip")&&R[1]===($==null?void 0:$.loader)&&!Ce(v,I,S,(x=$.universal)==null?void 0:x.uses,c))return $;if(v=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:R[1],url:u,params:c,route:p,parent:async()=>{var Ke;const Je={};for(let be=0;be<P;be+=1)Object.assign(Je,(Ke=await N[be])==null?void 0:Ke.data);return Je},server_data_node:we(A===void 0&&R[0]?{type:"skip"}:A??null,$==null?void 0:$.server)})});for(const R of N)R.catch(()=>{});const j=[];for(let R=0;R<w.length;R+=1)if(w[R])try{j.push(await N[R])}catch(P){if(P instanceof xe)return{type:"redirect",location:P.location};let $=500,A;O!=null&&O.includes(P)?($=P.status??$,A=P.error):P instanceof Oe?($=P.status,A=P.body):A=await ee(P,{params:c,url:u,route:{id:p.id}});const H=await Be(R,j,h);return H?await Q({url:u,params:c,branch:j.slice(0,H.idx).concat(H.node),status:$,error:A,route:p}):await ze(u,{id:p.id},A,$)}else j.push(void 0);return await Q({url:u,params:c,branch:j,status:200,error:null,route:p,form:o?void 0:null})}async function Be(r,o,u){for(;r--;)if(u[r]){let c=r;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await u[r](),loader:u[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:o,url:u,route:c}){const p={},h=await Ae();let m=null;if(h.server)try{const y=await et(u,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||l)&&await le(u)}const b=await ye({loader:Ae,url:u,params:p,route:c,parent:()=>Promise.resolve({}),server_data_node:we(m)}),w={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:u,params:p,branch:[b,w],status:r,error:o,route:null})}function se(r,o){if(We(r,e))return;const u=wt(r.pathname.slice(e.length)||"/");for(const c of Re){const p=c.exec(u);if(p)return{id:r.pathname+r.search,invalidating:o,route:c,params:bt(p),url:r}}}function Fe({url:r,type:o,intent:u,delta:c}){var b,w;let p=!1;const h={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((w=u==null?void 0:u.route)==null?void 0:w.id)??null},url:r},willUnload:!u,type:o};c!==void 0&&(h.delta=c);const m={...h,cancel:()=>{p=!0}};return E||f.before_navigate.forEach(y=>y(m)),p?null:h}async function ie({url:r,scroll:o,keepfocus:u,redirect_chain:c,details:p,type:h,delta:m,nav_token:b,accepted:w,blocked:y}){const S=se(r,!1),I=Fe({url:r,type:h,delta:m,intent:S});if(!I){y();return}Se(U),w(),E=!0,g&&K.navigating.set(I),await De(S,r,c,{scroll:o,keepfocus:u,details:p},b,()=>{E=!1,f.after_navigate.forEach(D=>D(I)),K.navigating.set(null)})}async function ze(r,o,u,c){return r.origin===location.origin&&r.pathname===location.pathname&&!l?await oe({status:c,error:u,url:r,route:o}):await le(r)}function le(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(r),r=setTimeout(()=>{c(m,2)},20)});function o(h){c(h.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const u=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(re(new URL(m.target.href).pathname),u.unobserve(m.target))},{threshold:0});function c(h,m){const b=He(h,n);if(!b)return;const{url:w,external:y}=Ee(b,e);if(y)return;const S=fe(b);S.reload||(m<=S.preload_data?Te(w):m<=S.preload_code&&re(w.pathname))}function p(){u.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:b}=Ee(h,e);if(b)continue;const w=fe(h);w.reload||(w.preload_code===Ye.viewport&&u.observe(h),w.preload_code===Ye.eager&&re(m.pathname))}}f.after_navigate.push(p),p()}return{after_navigate:r=>{Ie(()=>(f.after_navigate.push(r),()=>{const o=f.after_navigate.indexOf(r);f.after_navigate.splice(o,1)}))},before_navigate:r=>{Ie(()=>(f.before_navigate.push(r),()=>{const o=f.before_navigate.indexOf(r);f.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!g)&&(d=!1)},goto:(r,o={})=>ge(r,o,[]),invalidate:r=>{if(typeof r=="function")s.push(r);else{const{href:o}=new URL(r,location.href);s.push(u=>u.href===o)}return je()},invalidateAll:()=>(L=!0,je()),preload_data:async r=>{const o=new URL(r,Me(document));await Te(o)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:u,route:c}=t;if(!c)return;const p=await Be(t.branch.length,u,c.errors);if(p){const h=await Q({url:o,params:t.params,branch:u.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:c});t=h.state,T.$set(h.props),ce().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...J,form:r.data,status:r.status}};T.$set(o),r.type==="success"&&ce().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c;let u=!1;if(!E){const p={from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};f.before_navigate.forEach(h=>h(p))}u?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(U);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const u=He(o.composedPath()[0],n);if(!u)return;const{url:c,external:p,has:h}=Ee(u,e),m=fe(u);if(!c||!(u instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||h.download)return;if(p||m.reload){Fe({url:c,type:"link"})||o.preventDefault(),E=!0;return}const[w,y]=c.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){k=!0,Se(U),t.url=c,K.page.set({...J,url:c}),K.page.notify();return}ie({url:c,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var w;if(o.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||u.method)!=="get")return;const h=new URL(((w=o.submitter)==null?void 0:w.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||u.action);if(We(h,e))return;const{noscroll:m,reload:b}=fe(o.target);b||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),ie({url:h,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var u;if((u=o.state)!=null&&u[C]){if(o.state[C]===U)return;const c=o.state[C]-U;ie({url:new URL(location.href),scroll:ne[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=o.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[C]:++U},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:u,params:c,route:p,data:h,form:m})=>{l=!0;const b=new URL(location.href);({params:c={},route:p={id:null}}=se(b,!1)||{});let w;try{const y=u.map(async(S,I)=>{const D=h[I];return ye({loader:me[S],url:b,params:c,route:p,parent:async()=>{const O={};for(let v=0;v<I;v+=1)Object.assign(O,(await y[v]).data);return O},server_data_node:we(D)})});w=await Q({url:b,params:c,branch:await Promise.all(y),status:r,error:o,form:m,route:Re.find(({id:S})=>S===p.id)??null})}catch(y){if(y instanceof xe){await le(new URL(y.location,location.href));return}w=await oe({status:y instanceof Oe?y.status:500,error:await ee(y,{url:b,params:c,route:p}),url:b,route:p})}Ve(w)}}}async function et(a,e){var f;const n=new URL(a);n.pathname=St(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(n.href),i=await s.json();if(!s.ok)throw new Error(i);return(f=i.nodes)==null||f.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ee(a,e){return a instanceof Oe?a.body:Mt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function rn({env:a,hydrate:e,paths:n,target:s,version:i}){mt(n),gt(i);const f=tn({target:s,base:n.base});_t({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{rn as start};
