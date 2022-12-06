import{S as at,i as ot,s as st,a as it,e as F,c as lt,b as K,g as he,t as B,d as me,f as J,h as M,j as ct,o as Pe,k as ft,l as ut,m as dt,n as ke,p as V,q as pt,r as ht,u as mt,v as W,w as Y,x as Ne,y as X,z as Z,A as ce}from"./chunks/index-181874b9.js";import{S as tt,I as q,g as He,f as We,a as Re,b as fe,s as G,i as Ye,c as pe,P as Xe,d as _t,e as gt,h as wt}from"./chunks/singletons-88021d18.js";import{_ as D}from"./chunks/preload-helper-9b728935.js";function yt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function bt(n){return n.split("%25").map(decodeURI).join("%25")}function vt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(n,e){const t=new URL(n);for(const i of Et){let s=t[i];Object.defineProperty(t,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Rt(t),t}function Rt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function It(n){return n.replace(/\/$/,"")+St}function Ot(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=t.length;for(;i;)e=e*33^t[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ne.delete(i)}return _e(n,e)};const ne=new Map;function Lt(n,e){const t=nt(n,e),i=document.querySelector(t);if(i!=null&&i.textContent){const{body:s,...f}=JSON.parse(i.textContent),r=i.getAttribute("data-ttl");return r&&ne.set(t,{body:s,init:f,ttl:1e3*Number(r)}),Promise.resolve(new Response(s,f))}return _e(n,e)}function Pt(n,e,t){if(ne.size>0){const i=nt(n,t),s=ne.get(i);if(s){if(performance.now()<s.ttl)return new Response(s.body,s.init);ne.delete(i)}}return _e(e,t)}function nt(n,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Ot(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Nt(n).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const r=i.split(/\[(.+?)\](?!\])/);return"/"+r.map((m,_)=>{if(_%2){if(m.startsWith("x+"))return Se(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return Se(String.fromCharCode(...m.slice(2).split("-").map(C=>parseInt(C,16))));const w=At.exec(m);if(!w)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,k,R,T,A]=w;return e.push({name:T,matcher:A,optional:!!k,rest:!!R,chained:R?_===1&&r[0]==="":!1}),R?"(.*?)":k?"([^/]*)?":"([^/]+?)"}return Se(m)}).join("")}).join("")}/?$`),params:e}}function jt(n){return!/^\([^)]+\)$/.test(n)}function Nt(n){return n.slice(1).split("/").filter(jt)}function Tt(n,e,t){const i={},s=n.slice(1);let f="";for(let r=0;r<e.length;r+=1){const u=e[r];let m=s[r];if(u.chained&&u.rest&&f&&(m=m?f+"/"+m:f),f="",m===void 0)u.rest&&(i[u.name]="");else{if(u.matcher&&!t[u.matcher](m)){if(u.optional&&u.chained){let _=s.indexOf(void 0,r);if(_===-1){const w=e[r+1];if((w==null?void 0:w.rest)&&w.chained)f=m;else return}for(;_>=r;)s[_]=s[_-1],_-=1;continue}return}i[u.name]=m}}if(!f)return i}function Se(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(n,e,t,i){const s=new Set(e);return Object.entries(t).map(([u,[m,_,w]])=>{const{pattern:k,params:R}=$t(u),T={id:u,exec:A=>{const C=k.exec(A);if(C)return Tt(C,R,i)},errors:[1,...w||[]].map(A=>n[A]),layouts:[0,..._||[]].map(r),leaf:f(m)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function f(u){const m=u<0;return m&&(u=~u),[m,n[u]]}function r(u){return u===void 0?u:[s.has(u),n[u]]}}function Dt(n){let e,t,i;var s=n[0][0];function f(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=W(s,f(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Ne(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),K(r,t,u),i=!0},p(r,u){const m={};if(u&4&&(m.data=r[2]),u&2&&(m.form=r[1]),s!==(s=r[0][0])){if(e){he();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),me()}s?(e=W(s,f(r)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&M(t),e&&Z(e,r)}}}function Vt(n){let e,t,i;var s=n[0][0];function f(r){return{props:{data:r[2],$$slots:{default:[qt]},$$scope:{ctx:r}}}}return s&&(e=W(s,f(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Ne(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),K(r,t,u),i=!0},p(r,u){const m={};if(u&4&&(m.data=r[2]),u&523&&(m.$$scope={dirty:u,ctx:r}),s!==(s=r[0][0])){if(e){he();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),me()}s?(e=W(s,f(r)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&M(t),e&&Z(e,r)}}}function qt(n){let e,t,i;var s=n[0][1];function f(r){return{props:{data:r[3],form:r[1]}}}return s&&(e=W(s,f(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Ne(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),K(r,t,u),i=!0},p(r,u){const m={};if(u&8&&(m.data=r[3]),u&2&&(m.form=r[1]),s!==(s=r[0][1])){if(e){he();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),me()}s?(e=W(s,f(r)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&M(t),e&&Z(e,r)}}}function Ze(n){let e,t=n[5]&&Qe(n);return{c(){e=ft("div"),t&&t.c(),this.h()},l(i){e=ut(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=dt(e);t&&t.l(s),s.forEach(M),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(i,s){K(i,e,s),t&&t.m(e,null)},p(i,s){i[5]?t?t.p(i,s):(t=Qe(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&M(e),t&&t.d()}}}function Qe(n){let e;return{c(){e=pt(n[6])},l(t){e=ht(t,n[6])},m(t,i){K(t,e,i)},p(t,i){i&64&&mt(e,t[6])},d(t){t&&M(e)}}}function Ct(n){let e,t,i,s,f;const r=[Vt,Dt],u=[];function m(w,k){return w[0][1]?0:1}e=m(n),t=u[e]=r[e](n);let _=n[4]&&Ze(n);return{c(){t.c(),i=it(),_&&_.c(),s=F()},l(w){t.l(w),i=lt(w),_&&_.l(w),s=F()},m(w,k){u[e].m(w,k),K(w,i,k),_&&_.m(w,k),K(w,s,k),f=!0},p(w,[k]){let R=e;e=m(w),e===R?u[e].p(w,k):(he(),B(u[R],1,1,()=>{u[R]=null}),me(),t=u[e],t?t.p(w,k):(t=u[e]=r[e](w),t.c()),J(t,1),t.m(i.parentNode,i)),w[4]?_?_.p(w,k):(_=Ze(w),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(w){f||(J(t),f=!0)},o(w){B(t),f=!1},d(w){u[e].d(w),w&&M(i),_&&_.d(w),w&&M(s)}}}function Ft(n,e,t){let{stores:i}=e,{page:s}=e,{components:f}=e,{form:r}=e,{data_0:u=null}=e,{data_1:m=null}=e;ct(i.page.notify);let _=!1,w=!1,k=null;return Pe(()=>{const R=i.page.subscribe(()=>{_&&(t(5,w=!0),t(6,k=document.title||"untitled page"))});return t(4,_=!0),R}),n.$$set=R=>{"stores"in R&&t(7,i=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,f=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,u=R.data_0),"data_1"in R&&t(3,m=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&i.page.set(s)},[f,r,u,m,_,w,k,i,s]}class Bt extends at{constructor(e){super(),ot(this,e,Ft,Ct,st,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Jt={},ge=[()=>D(()=>import("./chunks/0-b2a12f1c.js"),["./chunks/0-b2a12f1c.js","./chunks/_layout-10dc9958.js","./components/pages/_layout.svelte-03600086.js","./chunks/index-181874b9.js","./chunks/stores-b9c0b3c7.js","./chunks/singletons-88021d18.js","./assets/_layout-dd84ef70.css"],import.meta.url),()=>D(()=>import("./chunks/1-0f5a495e.js"),["./chunks/1-0f5a495e.js","./components/error.svelte-e2a5d132.js","./chunks/index-181874b9.js","./chunks/stores-b9c0b3c7.js","./chunks/singletons-88021d18.js"],import.meta.url),()=>D(()=>import("./chunks/2-7f4ddad2.js"),["./chunks/2-7f4ddad2.js","./chunks/_page-a1b7d4c2.js","./components/pages/_page.svelte-730c0eab.js","./chunks/index-181874b9.js","./chunks/preload-helper-9b728935.js","./chunks/SEO-40f9fc32.js","./assets/SEO-885f5852.css","./assets/_page-58e4f5d9.css"],import.meta.url),()=>D(()=>import("./chunks/3-8a7766dc.js"),["./chunks/3-8a7766dc.js","./chunks/_page-dc5b7bcd.js","./components/pages/portfolios/_page.svelte-dc88f8e8.js","./chunks/index-181874b9.js","./chunks/SEO-40f9fc32.js","./assets/SEO-885f5852.css"],import.meta.url),()=>D(()=>import("./chunks/4-e3610c4c.js"),["./chunks/4-e3610c4c.js","./chunks/_page-bc9dc9fd.js","./components/pages/posts/_page.svelte-5c269ab3.js","./chunks/index-181874b9.js","./chunks/SEO-40f9fc32.js","./assets/SEO-885f5852.css","./assets/_page-b70b746c.css"],import.meta.url),()=>D(()=>import("./chunks/5-1c506ed2.js"),["./chunks/5-1c506ed2.js","./components/pages/posts/ad-free-alternatives-on-android-and-ios/_page.svx-204d2e33.js","./chunks/index-181874b9.js","./chunks/blog-layout-ddaac7e9.js","./assets/blog-layout-135a48f2.css","./assets/_page-2ec508a3.css"],import.meta.url),()=>D(()=>import("./chunks/6-ca8379ae.js"),["./chunks/6-ca8379ae.js","./components/pages/posts/differences-between-ssg-and-spa/_page.svx-8a91465c.js","./chunks/index-181874b9.js","./chunks/blog-layout-ddaac7e9.js","./assets/blog-layout-135a48f2.css"],import.meta.url),()=>D(()=>import("./chunks/7-5f60825b.js"),["./chunks/7-5f60825b.js","./components/pages/posts/horizontal-scroll-section/_page.svx-5adcd639.js","./chunks/index-181874b9.js","./chunks/blog-layout-ddaac7e9.js","./assets/blog-layout-135a48f2.css","./assets/_page-1a43d6e4.css"],import.meta.url),()=>D(()=>import("./chunks/8-b03c6a87.js"),["./chunks/8-b03c6a87.js","./components/pages/posts/why-i-chose-sveltekit-over-gatsby/_page.svx-36baefbb.js","./chunks/index-181874b9.js","./chunks/blog-layout-ddaac7e9.js","./assets/blog-layout-135a48f2.css"],import.meta.url),()=>D(()=>import("./chunks/9-673c48c5.js"),["./chunks/9-673c48c5.js","./chunks/_page-02a16c4f.js"],import.meta.url)],Mt=[],zt={"/":[2],"/portfolios":[3],"/posts":[4],"/posts/ad-free-alternatives-on-android-and-ios":[5],"/posts/differences-between-ssg-and-spa":[6],"/posts/horizontal-scroll-section":[7],"/posts/why-i-chose-sveltekit-over-gatsby":[8],"/rss.xml":[9]},Gt={handleError:({error:n})=>{console.error(n)}};class Ae{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,t){this.status=e,this.location=t}}async function Kt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,s])=>[i,await s])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ht=-1,Wt=-2,Yt=-3,Xt=-4,Zt=-5,Qt=-6;function xt(n){if(typeof n=="number")return i(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,t=Array(e.length);function i(s,f=!1){if(s===Ht)return;if(s===Yt)return NaN;if(s===Xt)return 1/0;if(s===Zt)return-1/0;if(s===Qt)return-0;if(f)throw new Error("Invalid input");if(s in t)return t[s];const r=e[s];if(!r||typeof r!="object")t[s]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":t[s]=new Date(r[1]);break;case"Set":const m=new Set;t[s]=m;for(let k=1;k<r.length;k+=1)m.add(i(r[k]));break;case"Map":const _=new Map;t[s]=_;for(let k=1;k<r.length;k+=2)_.set(i(r[k]),i(r[k+1]));break;case"RegExp":t[s]=new RegExp(r[1],r[2]);break;case"Object":t[s]=Object(r[1]);break;case"BigInt":t[s]=BigInt(r[1]);break;case"null":const w=Object.create(null);t[s]=w;for(let k=1;k<r.length;k+=2)w[r[k]]=i(r[k+1]);break}else{const u=new Array(r.length);t[s]=u;for(let m=0;m<r.length;m+=1){const _=r[m];_!==Wt&&(u[m]=i(_))}}else{const u={};t[s]=u;for(const m in r){const _=r[m];u[m]=i(_)}}return t[s]}return i(0)}const Ie=Ut(ge,Mt,zt,Jt),$e=ge[0],je=ge[1];$e();je();let re={};try{re=JSON.parse(sessionStorage[tt])}catch{}function Oe(n){re[n]=pe()}function en({target:n,base:e}){var ze;const t=[];let i=null;const s={before_navigate:[],after_navigate:[]};let f={branch:[],error:null,url:null},r=!1,u=!1,m=!0,_=!1,w=!1,k=!1,R=!1,T,A=(ze=history.state)==null?void 0:ze[q];A||(A=Date.now(),history.replaceState({...history.state,[q]:A},"",location.href));const C=re[A];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let z,Te,ae;async function Ue(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),o=ve(a,!0);i=null,await Ve(o,a,[])}async function we(a,{noScroll:o=!1,replaceState:l=!1,keepFocus:c=!1,state:h={},invalidateAll:p=!1},d,E){return typeof a=="string"&&(a=new URL(a,He(document))),ie({url:a,scroll:o?pe():null,keepfocus:c,redirect_chain:d,details:{state:h,replaceState:l},nav_token:E,accepted:()=>{p&&(R=!0)},blocked:()=>{},type:"goto"})}async function De(a){const o=ve(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return i={id:o.id,promise:Fe(o).then(l=>(l.type==="loaded"&&l.state.error&&(i=null),l))},i.promise}async function oe(...a){const l=Ie.filter(c=>a.some(h=>c.exec(h))).map(c=>Promise.all([...c.layouts,c.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(l)}async function Ve(a,o,l,c,h={},p){var E,b;Te=h;let d=a&&await Fe(a);if(d||(d=await Me(o,{id:null},await te(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Te!==h)return!1;if(d.type==="redirect")if(l.length>10||l.includes(o.pathname))d=await se({status:500,error:await te(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(d.location,o).href,{},[...l,o.pathname],h),!1;else((b=(E=d.props)==null?void 0:E.page)==null?void 0:b.status)>=400&&await G.updated.check()&&await le(o);if(t.length=0,R=!1,_=!0,c&&c.details){const{details:y}=c,v=y.replaceState?0:1;y.state[q]=A+=v,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,u){f=d.state,d.props.page&&(d.props.page.url=o);const y=de();T.$set(d.props),y()}else qe(d);if(c){const{scroll:y,keepfocus:v}=c;if(v||Le(),await ce(),m){const I=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ce();m=!0,d.props.page&&(z=d.props.page),p&&p(),_=!1}function qe(a){var h,p;f=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),z=a.props.page;const l=de();T=new Bt({target:n,props:{...a.props,stores:G},hydrate:!0}),l();const c={from:null,to:ue("to",{params:f.params,route:{id:(p=(h=f.route)==null?void 0:h.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};s.after_navigate.forEach(d=>d(c)),u=!0}async function Q({url:a,params:o,branch:l,status:c,error:h,route:p,form:d}){var j;const E=l.filter(Boolean);let b="never";for(const O of l)(O==null?void 0:O.slash)!==void 0&&(b=O.slash);a.pathname=yt(a.pathname,b),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:l,error:h,route:p},props:{components:E.map(O=>O.node.component)}};d!==void 0&&(y.props.form=d);let v={},I=!z;for(let O=0;O<E.length;O+=1){const $=E[O];v={...v,...$.data},(I||!f.branch.some(U=>U===$))&&(y.props[`data_${O}`]=v,I=I||Object.keys((j=$.data)!=null?j:{}).length>0)}if(I||(I=Object.keys(z.data).length!==Object.keys(v).length),!f.url||a.href!==f.url.href||f.error!==h||d!==void 0||I){y.props.page={error:h,params:o,route:p,status:c,url:new URL(a),form:d,data:I?v:z.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const O=($,U)=>{Object.defineProperty(y.props.page,$,{get:()=>{throw new Error(`$page.${$} has been replaced by $page.url.${U}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return y}async function ye({loader:a,parent:o,url:l,params:c,route:h,server_data_node:p}){var y,v,I,N,j,O,$;let d=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if((y=b.shared)!=null&&y.load){let U=function(...g){for(const S of g){const{href:L}=new URL(S,l);E.dependencies.add(L)}};const x={route:{get id(){return E.route=!0,h.id}},params:new Proxy(c,{get:(g,S)=>(E.params.add(S),g[S])}),data:(v=p==null?void 0:p.data)!=null?v:null,url:kt(l,()=>{E.url=!0}),async fetch(g,S){let L;g instanceof Request?(L=g.url,S={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...S}):L=g;const P=new URL(L,l).href;return U(P),u?Pt(L,P,S):Lt(L,S)},setHeaders:()=>{},depends:U,parent(){return E.parent=!0,o()}};Object.defineProperties(x,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),d=(I=await b.shared.load.call(null,x))!=null?I:null,d=d?await Kt(d):null}return{node:b,loader:a,server:p,shared:(N=b.shared)!=null&&N.load?{type:"data",data:d,uses:E}:null,data:(j=d!=null?d:p==null?void 0:p.data)!=null?j:null,slash:($=(O=b.shared)==null?void 0:O.trailingSlash)!=null?$:p==null?void 0:p.slash}}function Ce(a,o,l,c,h){if(R)return!0;if(!c)return!1;if(c.parent&&a||c.route&&o||c.url&&l)return!0;for(const p of c.params)if(h[p]!==f.params[p])return!0;for(const p of c.dependencies)if(t.some(d=>d(new URL(p))))return!0;return!1}function be(a,o){var l,c;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((l=a.uses.dependencies)!=null?l:[]),params:new Set((c=a.uses.params)!=null?c:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&o!=null?o:null}async function Fe({id:a,invalidating:o,url:l,params:c,route:h}){var x;if((i==null?void 0:i.id)===a)return i.promise;const{errors:p,layouts:d,leaf:E}=h,b=[...d,E];p.forEach(g=>g==null?void 0:g().catch(()=>{})),b.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let y=null;const v=f.url?a!==f.url.pathname+f.url.search:!1,I=f.route?a!==f.route.id:!1,N=b.reduce((g,S,L)=>{var ee;const P=f.branch[L],H=!!(S!=null&&S[0])&&((P==null?void 0:P.loader)!==S[1]||Ce(g.some(Boolean),I,v,(ee=P.server)==null?void 0:ee.uses,c));return g.push(H),g},[]);if(N.some(Boolean)){try{y=await et(l,N)}catch(g){return se({status:500,error:await te(g,{url:l,params:c,route:{id:h.id}}),url:l,route:h})}if(y.type==="redirect")return y}const j=y==null?void 0:y.nodes;let O=!1;const $=b.map(async(g,S)=>{var ee;if(!g)return;const L=f.branch[S],P=j==null?void 0:j[S];if((!P||P.type==="skip")&&g[1]===(L==null?void 0:L.loader)&&!Ce(O,I,v,(ee=L.shared)==null?void 0:ee.uses,c))return L;if(O=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:g[1],url:l,params:c,route:h,parent:async()=>{var Ke;const Ge={};for(let Ee=0;Ee<S;Ee+=1)Object.assign(Ge,(Ke=await $[Ee])==null?void 0:Ke.data);return Ge},server_data_node:be(P===void 0&&g[0]?{type:"skip"}:P!=null?P:null,L==null?void 0:L.server)})});for(const g of $)g.catch(()=>{});const U=[];for(let g=0;g<b.length;g+=1)if(b[g])try{U.push(await $[g])}catch(S){if(S instanceof xe)return{type:"redirect",location:S.location};let L=500,P;j!=null&&j.includes(S)?(L=(x=S.status)!=null?x:L,P=S.error):S instanceof Ae?(L=S.status,P=S.body):P=await te(S,{params:c,url:l,route:{id:h.id}});const H=await Be(g,U,p);return H?await Q({url:l,params:c,branch:U.slice(0,H.idx).concat(H.node),status:L,error:P,route:h}):await Me(l,{id:h.id},P,L)}else U.push(void 0);return await Q({url:l,params:c,branch:U,status:200,error:null,route:h,form:o?void 0:null})}async function Be(a,o,l){for(;a--;)if(l[a]){let c=a;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await l[a](),loader:l[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:o,url:l,route:c}){var y;const h={},p=await $e();let d=null;if(p.server)try{const v=await et(l,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;d=(y=v.nodes[0])!=null?y:null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||r)&&await le(l)}const E=await ye({loader:$e,url:l,params:h,route:c,parent:()=>Promise.resolve({}),server_data_node:be(d)}),b={node:await je(),loader:je,shared:null,server:null,data:null};return await Q({url:l,params:h,branch:[E,b],status:a,error:o,route:null})}function ve(a,o){if(Ye(a,e))return;const l=bt(a.pathname.slice(e.length)||"/");for(const c of Ie){const h=c.exec(l);if(h)return{id:a.pathname+a.search,invalidating:o,route:c,params:vt(h),url:a}}}function Je({url:a,type:o,intent:l,delta:c}){var E,b,y,v,I;let h=!1;const p={from:ue("from",{params:f.params,route:{id:(b=(E=f.route)==null?void 0:E.id)!=null?b:null},url:f.url}),to:ue("to",{params:(y=l==null?void 0:l.params)!=null?y:null,route:{id:(I=(v=l==null?void 0:l.route)==null?void 0:v.id)!=null?I:null},url:a}),willUnload:!l,type:o};c!==void 0&&(p.delta=c);const d={...p,cancel:()=>{h=!0}};return w||s.before_navigate.forEach(N=>N(d)),h?null:p}async function ie({url:a,scroll:o,keepfocus:l,redirect_chain:c,details:h,type:p,delta:d,nav_token:E,accepted:b,blocked:y}){const v=ve(a,!1),I=Je({url:a,type:p,delta:d,intent:v});if(!I){y();return}Oe(A),b(),w=!0,u&&G.navigating.set(I),await Ve(v,a,c,{scroll:o,keepfocus:l,details:h},E,()=>{w=!1,s.after_navigate.forEach(N=>N(I)),G.navigating.set(null)})}async function Me(a,o,l,c){return a.origin===location.origin&&a.pathname===location.pathname&&!r?await se({status:c,error:l,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;n.addEventListener("mousemove",p=>{const d=p.target;clearTimeout(a),a=setTimeout(()=>{c(d,2)},20)});function o(p){c(p.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const l=new IntersectionObserver(p=>{for(const d of p)d.isIntersecting&&(oe(new URL(d.target.href).pathname),l.unobserve(d.target))},{threshold:0});function c(p,d){const E=We(p,n);if(!E)return;const{url:b,external:y}=Re(E,e);if(y)return;const v=fe(E);v.reload||(d<=v.preload_data?De(b):d<=v.preload_code&&oe(b.pathname))}function h(){l.disconnect();for(const p of n.querySelectorAll("a")){const{url:d,external:E}=Re(p,e);if(E)continue;const b=fe(p);b.reload||(b.preload_code===Xe.viewport&&l.observe(p),b.preload_code===Xe.eager&&oe(d.pathname))}}s.after_navigate.push(h),h()}return{after_navigate:a=>{Pe(()=>(s.after_navigate.push(a),()=>{const o=s.after_navigate.indexOf(a);s.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(s.before_navigate.push(a),()=>{const o=s.before_navigate.indexOf(a);s.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!u)&&(m=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return we(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:o}=new URL(a,location.href);t.push(l=>l.href===o)}return Ue()},invalidateAll:()=>(R=!0,Ue()),preload_data:async a=>{const o=new URL(a,He(document));await De(o)},preload_code:oe,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:l,route:c}=f;if(!c)return;const h=await Be(f.branch.length,l,c.errors);if(h){const p=await Q({url:o,params:f.params,branch:l.slice(0,h.idx).concat(h.node),status:500,error:a.error,route:c});f=p.state;const d=de();T.$set(p.props),d(),ce().then(Le)}}else if(a.type==="redirect")we(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...z,form:a.data,status:a.status}},l=de();T.$set(o),l(),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c,h;let l=!1;if(!w){const p={from:ue("from",{params:f.params,route:{id:(h=(c=f.route)==null?void 0:c.id)!=null?h:null},url:f.url}),to:null,willUnload:!0,type:"leave",cancel:()=>l=!0};s.before_navigate.forEach(d=>d(p))}l?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(A);try{sessionStorage[tt]=JSON.stringify(re)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const l=We(o.composedPath()[0],n);if(!l)return;const{url:c,external:h,has:p}=Re(l,e),d=fe(l);if(!c||!(l instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||p.download)return;if(h||d.reload){Je({url:c,type:"link"})||o.preventDefault(),w=!0;return}const[b,y]=c.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){k=!0,Oe(A),f.url=c,G.page.set({...z,url:c}),G.page.notify();return}ie({url:c,scroll:d.noscroll?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var b;if(o.defaultPrevented)return;const l=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||l.method)!=="get")return;const p=new URL(((b=o.submitter)==null?void 0:b.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||l.action);if(Ye(p,e))return;const{noscroll:d,reload:E}=fe(o.target);E||(o.preventDefault(),o.stopPropagation(),p.search=new URLSearchParams(new FormData(o.target)).toString(),ie({url:p,scroll:d?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var l;if((l=o.state)!=null&&l[q]){if(o.state[q]===A)return;const c=o.state[q]-A;ie({url:new URL(location.href),scroll:re[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[q]:++A},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:o,node_ids:l,params:c,route:h,data:p,form:d})=>{var y;r=!0;const E=new URL(location.href);let b;try{const v=l.map(async(I,N)=>{const j=p[N];return ye({loader:ge[I],url:E,params:c,route:h,parent:async()=>{const O={};for(let $=0;$<N;$+=1)Object.assign(O,(await v[$]).data);return O},server_data_node:be(j)})});b=await Q({url:E,params:c,branch:await Promise.all(v),status:a,error:o,form:d,route:(y=Ie.find(({id:I})=>I===h.id))!=null?y:null})}catch(v){if(v instanceof xe){await le(new URL(v.location,location.href));return}b=await se({status:v instanceof Ae?v.status:500,error:await te(v,{url:E,params:c,route:h}),url:E,route:h})}qe(b)}}}async function et(n,e){var f;const t=new URL(n);t.pathname=It(n.pathname),t.searchParams.append("x-sveltekit-invalidated",e.map(r=>r?"1":"").join("_"));const i=await _e(t.href),s=await i.json();if(!i.ok)throw new Error(s);return(f=s.nodes)==null||f.forEach(r=>{var u,m;(r==null?void 0:r.type)==="data"&&(r.data=xt(r.data),r.uses={dependencies:new Set((u=r.uses.dependencies)!=null?u:[]),params:new Set((m=r.uses.params)!=null?m:[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),s}function te(n,e){var t;return n instanceof Ae?n.body:(t=Gt.handleError({error:n,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const tn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(n,e){for(const t of tn)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function Le(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function on({env:n,hydrate:e,paths:t,target:i,version:s}){_t(t),wt(s);const f=en({target:i,base:t.base});gt({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{on as start};
