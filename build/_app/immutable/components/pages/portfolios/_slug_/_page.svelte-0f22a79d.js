import{S as w,i as L,s as T,v as k,a as x,k as v,q,w as B,c as E,l as h,m as y,r as C,h as _,n as $,x as D,b as H,F as p,u as M,f as P,t as S,y as V}from"../../../../chunks/index-80b58b41.js";import{B as A}from"../../../../chunks/Breadcrumb-643c78c0.js";function F(o){let a,i,e,s,l,m=o[0].name+"",f,g,r,u=o[0].content+"",c;return a=new A({props:{links:o[1]}}),{c(){k(a.$$.fragment),i=x(),e=v("div"),s=v("article"),l=v("h1"),f=q(m),g=x(),r=v("div"),this.h()},l(t){B(a.$$.fragment,t),i=E(t),e=h(t,"DIV",{class:!0});var n=y(e);s=h(n,"ARTICLE",{class:!0});var d=y(s);l=h(d,"H1",{});var b=y(l);f=C(b,m),b.forEach(_),g=E(d),r=h(d,"DIV",{class:!0});var I=y(r);I.forEach(_),d.forEach(_),n.forEach(_),this.h()},h(){$(r,"class","post svelte-uanlp1"),$(s,"class","svelte-uanlp1"),$(e,"class","container")},m(t,n){D(a,t,n),H(t,i,n),H(t,e,n),p(e,s),p(s,l),p(l,f),p(s,g),p(s,r),r.innerHTML=u,c=!0},p(t,[n]){(!c||n&1)&&m!==(m=t[0].name+"")&&M(f,m),(!c||n&1)&&u!==(u=t[0].content+"")&&(r.innerHTML=u)},i(t){c||(P(a.$$.fragment,t),c=!0)},o(t){S(a.$$.fragment,t),c=!1},d(t){V(a,t),t&&_(i),t&&_(e)}}}function R(o,a,i){let{data:e}=a,s=[{path:"/",text:"Home"},{path:"/portfolios",text:"Portfolios"},{path:"/portfolios/"+e.slug,text:e.name}];return o.$$set=l=>{"data"in l&&i(0,e=l.data)},[e,s]}class z extends w{constructor(a){super(),L(this,a,R,F,T,{data:0})}}export{z as default};