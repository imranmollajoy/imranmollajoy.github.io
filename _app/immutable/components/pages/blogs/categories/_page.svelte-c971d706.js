import{S as B,i as S,s as q,x as w,a as v,l as d,u as H,y as A,c as x,m as b,p as $,v as y,h as m,q as p,z,b as C,H as g,f as I,t as K,A as N,K as O,w as P}from"../../../../chunks/index-e52b287a.js";import{B as T}from"../../../../chunks/Breadcrumb-dabbe838.js";/* empty css                                                                  */function E(c,t,n){const a=c.slice();return a[2]=t[n],a}function k(c){let t,n,a=c[2]+"",i,f,_;return{c(){t=d("a"),n=d("h5"),i=H(a),f=v(),this.h()},l(o){t=b(o,"A",{href:!0,class:!0});var r=$(t);n=b(r,"H5",{});var s=$(n);i=y(s,a),s.forEach(m),f=x(r),r.forEach(m),this.h()},h(){p(t,"href",_=`/blogs/categories/${c[2]}`),p(t,"class","post")},m(o,r){C(o,t,r),g(t,n),g(n,i),g(t,f)},p(o,r){r&1&&a!==(a=o[2]+"")&&P(i,a),r&1&&_!==(_=`/blogs/categories/${o[2]}`)&&p(t,"href",_)},d(o){o&&m(t)}}}function j(c){let t,n,a,i,f,_,o;t=new T({props:{links:c[1]}});let r=c[0].categories,s=[];for(let e=0;e<r.length;e+=1)s[e]=k(E(c,r,e));return{c(){w(t.$$.fragment),n=v(),a=d("section"),i=d("h2"),f=H("Categories"),_=v();for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){A(t.$$.fragment,e),n=x(e),a=b(e,"SECTION",{class:!0});var h=$(a);i=b(h,"H2",{});var l=$(i);f=y(l,"Categories"),l.forEach(m),_=x(h);for(let u=0;u<s.length;u+=1)s[u].l(h);h.forEach(m),this.h()},h(){p(a,"class","container")},m(e,h){z(t,e,h),C(e,n,h),C(e,a,h),g(a,i),g(i,f),g(a,_);for(let l=0;l<s.length;l+=1)s[l].m(a,null);o=!0},p(e,[h]){if(h&1){r=e[0].categories;let l;for(l=0;l<r.length;l+=1){const u=E(e,r,l);s[l]?s[l].p(u,h):(s[l]=k(u),s[l].c(),s[l].m(a,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=r.length}},i(e){o||(I(t.$$.fragment,e),o=!0)},o(e){K(t.$$.fragment,e),o=!1},d(e){N(t,e),e&&m(n),e&&m(a),O(s,e)}}}function D(c,t,n){let{data:a}=t,i=[{path:"/",text:"Home"},{path:"/blogs",text:"Blogs"},{path:"/blogs/categories",text:"Categories"}];return c.$$set=f=>{"data"in f&&n(0,a=f.data)},[a,i]}class L extends B{constructor(t){super(),S(this,t,D,j,q,{data:0})}}export{L as default};