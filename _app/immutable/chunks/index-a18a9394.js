function T(){}function lt(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function W(){return Object.create(null)}function $(t){t.forEach(U)}function q(t){return typeof t=="function"}function vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function kt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ut(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return T;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function At(t){let e;return V(t,n=>e=n)(),e}function Mt(t,e,n){t.$$.on_destroy.push(V(e,n))}function St(t,e,n,i){if(t){const s=X(t,e,n,i);return t[0](s)}}function X(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Ht(t,e,n,i,s,o){if(s){const r=X(e,n,i,o);t.p(r,s)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ct(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Pt(t){const e={};for(const n in t)e[n]=!0;return e}function Dt(t,e,n){return t.set(n),e}function Bt(t){return t&&q(t.destroy)?t.destroy:T}let j=!1;function at(){j=!0}function ft(){j=!1}function _t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:_t(1,s,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(r[c],f)}}function ht(t,e){if(j){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){t.insertBefore(e,n||null)}function pt(t,e,n){j&&!n?ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Ot(){return G(" ")}function qt(){return G("")}function Gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Rt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yt(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,s=!1){tt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function nt(t,e,n,i){return et(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function zt(t,e,n){return nt(t,e,n,Y)}function Ft(t,e,n){return nt(t,e,n,Z)}function gt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function Wt(t){return gt(t," ")}function I(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function It(t,e){const n=I(t,"HTML_TAG_START",0),i=I(t,"HTML_TAG_END",n);if(n===i)return new J(void 0,e);tt(t);const s=t.splice(n,i-n+1);S(s[0]),S(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function Jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Kt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Qt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class xt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Z(n.nodeName):this.e=Y(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}class J extends xt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)pt(this.t,this.n[n],e)}}function Ut(t,e){return new t(e)}let N;function E(t){N=t}function it(){if(!N)throw new Error("Function called outside component initialization");return N}function Vt(t){it().$$.on_mount.push(t)}function Xt(t){it().$$.after_update.push(t)}function Yt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],K=[];let w=[];const Q=[],st=Promise.resolve();let B=!1;function rt(){B||(B=!0,st.then(ct))}function Zt(){return rt(),st}function O(t){w.push(t)}const D=new Set;let x=0;function ct(){if(x!==0)return;const t=N;do{try{for(;x<b.length;){const e=b[x];x++,E(e),bt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(E(null),b.length=0,x=0;K.length;)K.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];D.has(n)||(D.add(n),n())}w.length=0}while(b.length);for(;Q.length;)Q.pop()();B=!1,D.clear(),E(t)}function bt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function wt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}const M=new Set;let g;function te(){g={r:0,c:[],p:g}}function ee(){g.r||$(g.c),g=g.p}function ot(t,e){t&&t.i&&(M.delete(t),t.i(e))}function $t(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ne(t,e){t.d(1),e.delete(t.key)}function ie(t,e){$t(t,1,1,()=>{e.delete(t.key)})}function se(t,e,n,i,s,o,r,l,c,u,f,d){let _=t.length,m=o.length,h=_;const H={};for(;h--;)H[t[h].key]=h;const v=[],L=new Map,C=new Map,R=[];for(h=m;h--;){const a=d(s,o,h),p=n(a);let y=r.get(p);y?i&&R.push(()=>y.p(a,e)):(y=u(p,a),y.c()),L.set(p,v[h]=y),p in H&&C.set(p,Math.abs(h-H[p]))}const z=new Set,F=new Set;function P(a){ot(a,1),a.m(l,f),r.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=v[m-1],p=t[_-1],y=a.key,k=p.key;a===p?(f=a.first,_--,m--):L.has(k)?!r.has(y)||z.has(y)?P(a):F.has(k)?_--:C.get(y)>C.get(k)?(F.add(y),P(a)):(z.add(k),_--):(c(p,r),_--)}for(;_--;){const a=t[_];L.has(a.key)||c(a,r)}for(;m;)P(v[m-1]);return $(R),v}function re(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ce(t){return typeof t=="object"&&t!==null?t:{}}function oe(t){t&&t.c()}function le(t,e){t&&t.l(e)}function Et(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(U).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...r):$(r),t.$$.on_mount=[]}),o.forEach(O)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(wt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(b.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,s,o,r,l=[-1]){const c=N;E(t);const u=t.$$={fragment:null,ctx:[],props:o,update:T,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:W(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return u.ctx&&s(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),f&&Nt(t,d)),_}):[],u.update(),f=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){at();const d=yt(e.target);u.fragment&&u.fragment.l(d),d.forEach(S)}else u.fragment&&u.fragment.c();e.intro&&ot(t.$$.fragment),Et(t,e.target,e.anchor,e.customElement),ft(),ct()}E(c)}class ae{$destroy(){Tt(this,1),this.$destroy=T}$on(e,n){if(!q(n))return T;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ut as $,lt as A,re as B,ce as C,Ct as D,qt as E,se as F,ne as G,kt as H,Qt as I,te as J,ee as K,ie as L,At as M,Pt as N,Gt as O,Yt as P,J as Q,Z as R,ae as S,It as T,Ft as U,$ as V,Mt as W,Vt as X,Dt as Y,Bt as Z,Xt as _,zt as a,Zt as a0,yt as b,oe as c,le as d,Y as e,S as f,Rt as g,Kt as h,ue as i,pt as j,$t as k,Tt as l,Et as m,T as n,G as o,Ot as p,gt as q,Wt as r,vt as s,ot as t,ht as u,St as v,Jt as w,Ht as x,Lt as y,jt as z};