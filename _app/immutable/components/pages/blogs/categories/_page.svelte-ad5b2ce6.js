import{S as N,i as P,s as R,v as S,a as d,k as C,q as F,w,c as b,l as E,m as k,r as I,h as _,n as v,x as y,b as x,F as $,f as B,t as H,y as q,R as T,u as j}from"../../../../chunks/index-ea49385d.js";import{B as z}from"../../../../chunks/Breadcrumb-26a96f1a.js";import{S as D}from"../../../../chunks/SEO-541a60a7.js";function O(f,t,n){const a=f.slice();return a[2]=t[n],a}function A(f){let t,n,a=f[2]+"",h,r,m;return{c(){t=C("a"),n=C("h5"),h=F(a),r=d(),this.h()},l(i){t=E(i,"A",{href:!0,class:!0});var c=k(t);n=E(c,"H5",{});var u=k(n);h=I(u,a),u.forEach(_),r=b(c),c.forEach(_),this.h()},h(){v(t,"href",m=`/blogs/categories/${f[2]}`),v(t,"class","post")},m(i,c){x(i,t,c),$(t,n),$(n,h),$(t,r)},p(i,c){c&1&&a!==(a=i[2]+"")&&j(h,a),c&1&&m!==(m=`/blogs/categories/${i[2]}`)&&v(t,"href",m)},d(i){i&&_(t)}}}function G(f){let t,n,a,h,r,m,i,c,u;t=new D({props:{title:"Categories"}}),a=new z({props:{links:f[1]}});let g=f[0].categories,l=[];for(let e=0;e<g.length;e+=1)l[e]=A(O(f,g,e));return{c(){S(t.$$.fragment),n=d(),S(a.$$.fragment),h=d(),r=C("section"),m=C("h2"),i=F("Categories"),c=d();for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){w(t.$$.fragment,e),n=b(e),w(a.$$.fragment,e),h=b(e),r=E(e,"SECTION",{class:!0});var o=k(r);m=E(o,"H2",{});var s=k(m);i=I(s,"Categories"),s.forEach(_),c=b(o);for(let p=0;p<l.length;p+=1)l[p].l(o);o.forEach(_),this.h()},h(){v(r,"class","container")},m(e,o){y(t,e,o),x(e,n,o),y(a,e,o),x(e,h,o),x(e,r,o),$(r,m),$(m,i),$(r,c);for(let s=0;s<l.length;s+=1)l[s].m(r,null);u=!0},p(e,[o]){if(o&1){g=e[0].categories;let s;for(s=0;s<g.length;s+=1){const p=O(e,g,s);l[s]?l[s].p(p,o):(l[s]=A(p),l[s].c(),l[s].m(r,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=g.length}},i(e){u||(B(t.$$.fragment,e),B(a.$$.fragment,e),u=!0)},o(e){H(t.$$.fragment,e),H(a.$$.fragment,e),u=!1},d(e){q(t,e),e&&_(n),q(a,e),e&&_(h),e&&_(r),T(l,e)}}}function J(f,t,n){let{data:a}=t,h=[{path:"/",text:"Home"},{path:"/blogs",text:"Blogs"},{path:"/blogs/categories",text:"Categories"}];return f.$$set=r=>{"data"in r&&n(0,a=r.data)},[a,h]}class Q extends N{constructor(t){super(),P(this,t,J,G,R,{data:0})}}export{Q as default};
