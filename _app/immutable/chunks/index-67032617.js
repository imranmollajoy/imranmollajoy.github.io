function v(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t&&typeof t=="object"&&typeof t.then=="function"}function T(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(T)}function L(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function dt(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(J(e,n))}function mt(t,e,n,r){if(t){const c=B(t,e,n,r);return t[0](c)}}function B(t,e,n,r){return t[1]&&r?I(n.ctx.slice(),t[1](r(e))):n.ctx}function pt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(e.dirty.length,c.length);for(let u=0;u<l;u+=1)s[u]=e.dirty[u]|c[u];return s}return e.dirty|c}return e.dirty}function yt(t,e,n,r,c,s){if(c){const l=B(e,n,r,s);t.p(l,c)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t){return t&&L(t.destroy)?t.destroy:v}let $=!1;function K(){$=!0}function Q(){$=!1}function R(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const o=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=o?c+1:R(1,c,d=>e[n[d]].claim_order,o))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const s=[],l=[];let u=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(s.push(e[i-1]);u>=i;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);s.reverse(),l.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<l.length;i++){for(;o<s.length&&l[i].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(l[i],f)}}function V(t,e){if($){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){$&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function $t(){return N(" ")}function Et(){return N("")}function wt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:Z(t,r,e[r])}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,r,c=!1){et(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function nt(t,e,n,r){return D(t,c=>c.nodeName===e,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const u=c.attributes[l];n[u.name]||s.push(u.name)}s.forEach(l=>c.removeAttribute(l))},()=>r(e))}function At(t,e,n){return nt(t,e,n,Y)}function rt(t,e){return D(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>N(e),!0)}function Nt(t){return rt(t," ")}function St(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function qt(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,r,e),c}function Mt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let p;function _(t){p=t}function E(){if(!p)throw new Error("Function called outside component initialization");return p}function Ot(t){E().$$.on_mount.push(t)}function Pt(t){E().$$.after_update.push(t)}function Tt(){const t=E();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const s=ct(e,n,{cancelable:r});return c.slice().forEach(l=>{l.call(t,s)}),!s.defaultPrevented}return!0}}const m=[],O=[],x=[],P=[],z=Promise.resolve();let j=!1;function F(){j||(j=!0,z.then(S))}function Lt(){return F(),z}function A(t){x.push(t)}const w=new Set;let g=0;function S(){const t=p;do{for(;g<m.length;){const e=m[g];g++,_(e),it(e.$$)}for(_(null),m.length=0,g=0;O.length;)O.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];w.has(n)||(w.add(n),n())}x.length=0}while(m.length);for(;P.length;)P.pop()();j=!1,w.clear(),_(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const k=new Set;let h;function lt(){h={r:0,c:[],p:h}}function st(){h.r||y(h.c),h=h.p}function H(t,e){t&&t.i&&(k.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Bt(t,e){const n=e.token={};function r(c,s,l,u){if(e.token!==n)return;e.resolved=u;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=u);const o=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==s&&a&&(lt(),ut(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),st())}):e.block.d(1),o.c(),H(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[s]=o),f&&S()}if(W(t)){const c=E();if(t.then(s=>{_(c),r(e.then,1,e.value,s),_(null)},s=>{if(_(c),r(e.catch,2,e.error,s),_(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Dt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function zt(t,e){const n={},r={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],u=e[s];if(u){for(const i in l)i in u||(r[i]=1);for(const i in u)c[i]||(n[i]=u[i],c[i]=1);t[s]=u}else for(const i in l)c[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function Ht(t){t&&t.c()}function It(t,e){t&&t.l(e)}function ot(t,e,n,r){const{fragment:c,on_mount:s,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),r||A(()=>{const i=s.map(T).filter(L);l?l.push(...i):y(i),t.$$.on_mount=[]}),u.forEach(A)}function at(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(m.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,r,c,s,l,u=[-1]){const i=p;_(t);const o=t.$$={fragment:null,ctx:null,props:s,update:v,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,d,...C)=>{const q=C.length?C[0]:d;return o.ctx&&c(o.ctx[a],o.ctx[a]=q)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](q),f&&ft(t,a)),d}):[],o.update(),f=!0,y(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){K();const a=tt(e.target);o.fragment&&o.fragment.l(a),a.forEach(X)}else o.fragment&&o.fragment.c();e.intro&&H(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),Q(),S()}_(i)}class Gt{$destroy(){at(this,1),this.$destroy=v}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{v as A,V as B,vt as C,mt as D,yt as E,bt as F,pt as G,ht as H,I,gt as J,Bt as K,Dt as L,jt as M,qt as N,xt as O,zt as P,L as Q,A as R,Gt as S,dt as T,wt as U,Mt as V,Ft as W,Tt as X,$t as a,kt as b,Nt as c,st as d,Et as e,H as f,lt as g,X as h,Wt as i,Pt as j,Y as k,At as l,tt as m,Z as n,Ot as o,Ct as p,N as q,rt as r,_t as s,ut as t,St as u,Ht as v,It as w,ot as x,at as y,Lt as z};