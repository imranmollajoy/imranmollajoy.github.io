import{S as H,i as N,s as T,w as I,a as E,k as P,q as V,x as O,c as C,l as S,m as k,r as j,h as p,n as b,y,b as w,C as g,f as u,d as x,t as d,z,D as A,g as F}from"../../../chunks/index-e9547ea1.js";import{S as G,P as J}from"../../../chunks/SEO-13b481a6.js";function q(i,s,l){const t=i.slice();return t[1]=s[l],t[3]=l,t}function D(i){let s,l;return s=new J({props:{path:i[1].post.path,imgPath:i[1].imgSrc.meta,tags:i[1].post.meta.stacks,name:i[1].post.meta.name}}),{c(){I(s.$$.fragment)},l(t){O(s.$$.fragment,t)},m(t,r){y(s,t,r),l=!0},p(t,r){const c={};r&1&&(c.path=t[1].post.path),r&1&&(c.imgPath=t[1].imgSrc.meta),r&1&&(c.tags=t[1].post.meta.stacks),r&1&&(c.name=t[1].post.meta.name),s.$set(c)},i(t){l||(u(s.$$.fragment,t),l=!0)},o(t){d(s.$$.fragment,t),l=!1},d(t){z(s,t)}}}function K(i){let s,l,t,r,c,$,f,_;s=new G({props:{title:"Portfolios"}});let m=i[0].portfolios,a=[];for(let e=0;e<m.length;e+=1)a[e]=D(q(i,m,e));const B=e=>d(a[e],1,1,()=>{a[e]=null});return{c(){I(s.$$.fragment),l=E(),t=P("section"),r=P("h2"),c=V("Portfolios"),$=E(),f=P("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){O(s.$$.fragment,e),l=C(e),t=S(e,"SECTION",{class:!0});var n=k(t);r=S(n,"H2",{});var o=k(r);c=j(o,"Portfolios"),o.forEach(p),$=C(n),f=S(n,"DIV",{class:!0});var h=k(f);for(let v=0;v<a.length;v+=1)a[v].l(h);h.forEach(p),n.forEach(p),this.h()},h(){b(f,"class","grid"),b(t,"class","responsive")},m(e,n){y(s,e,n),w(e,l,n),w(e,t,n),g(t,r),g(r,c),g(t,$),g(t,f);for(let o=0;o<a.length;o+=1)a[o].m(f,null);_=!0},p(e,[n]){if(n&1){m=e[0].portfolios;let o;for(o=0;o<m.length;o+=1){const h=q(e,m,o);a[o]?(a[o].p(h,n),u(a[o],1)):(a[o]=D(h),a[o].c(),u(a[o],1),a[o].m(f,null))}for(F(),o=m.length;o<a.length;o+=1)B(o);x()}},i(e){if(!_){u(s.$$.fragment,e);for(let n=0;n<m.length;n+=1)u(a[n]);_=!0}},o(e){d(s.$$.fragment,e),a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)d(a[n]);_=!1},d(e){z(s,e),e&&p(l),e&&p(t),A(a,e)}}}function L(i,s,l){let{data:t}=s;return i.$$set=r=>{"data"in r&&l(0,t=r.data)},[t]}class R extends H{constructor(s){super(),N(this,s,L,K,T,{data:0})}}export{R as default};
