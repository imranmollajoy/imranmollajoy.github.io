import{S as N,i as T,s as j,k as b,a as q,q as G,l as P,m as k,c as I,r as H,h as d,T as A,n as _,N as D,b as E,B as m,u as M,A as S,C as w,e as V}from"./index-67032617.js";function y(n,e,t){const a=n.slice();return a[5]=e[t],a[7]=t,a}function z(n){let e,t=n[5]+"",a;return{c(){e=b("div"),a=G(t),this.h()},l(i){e=P(i,"DIV",{class:!0});var c=k(e);a=H(c,t),c.forEach(d),this.h()},h(){_(e,"class","badge uppercase")},m(i,c){E(i,e,c),m(e,a)},p(i,c){c&8&&t!==(t=i[5]+"")&&M(a,t)},d(i){i&&d(e)}}}function B(n){let e,t=n[7]<2&&z(n);return{c(){t&&t.c(),e=V()},l(a){t&&t.l(a),e=V()},m(a,i){t&&t.m(a,i),E(a,e,i)},p(a,i){a[7]<2&&t.p(a,i)},d(a){t&&t.d(a),a&&d(e)}}}function F(n){let e,t,a,i,c,o,u,r,g=n[3],f=[];for(let l=0;l<g.length;l+=1)f[l]=B(y(n,g,l));return{c(){e=b("a"),t=b("img"),i=q(),c=b("div");for(let l=0;l<f.length;l+=1)f[l].c();o=q(),u=b("h5"),r=G(n[2]),this.h()},l(l){e=P(l,"A",{href:!0,class:!0});var h=k(e);t=P(h,"IMG",{src:!0,alt:!0,class:!0}),i=I(h),c=P(h,"DIV",{class:!0});var s=k(c);for(let C=0;C<f.length;C+=1)f[C].l(s);o=I(s),u=P(s,"H5",{class:!0});var v=k(u);r=H(v,n[2]),v.forEach(d),s.forEach(d),h.forEach(d),this.h()},h(){A(t.src,a=n[1])||_(t,"src",a),_(t,"alt",""),_(t,"class","image"),_(u,"class","svelte-11evb77"),_(c,"class","texts svelte-11evb77"),_(e,"href",n[0]),_(e,"class","post-card svelte-11evb77"),D(e,"featured",n[4])},m(l,h){E(l,e,h),m(e,t),m(e,i),m(e,c);for(let s=0;s<f.length;s+=1)f[s].m(c,null);m(c,o),m(c,u),m(u,r)},p(l,[h]){if(h&2&&!A(t.src,a=l[1])&&_(t,"src",a),h&8){g=l[3];let s;for(s=0;s<g.length;s+=1){const v=y(l,g,s);f[s]?f[s].p(v,h):(f[s]=B(v),f[s].c(),f[s].m(c,o))}for(;s<f.length;s+=1)f[s].d(1);f.length=g.length}h&4&&M(r,l[2]),h&1&&_(e,"href",l[0]),h&16&&D(e,"featured",l[4])},i:S,o:S,d(l){l&&d(e),w(f,l)}}}function J(n,e,t){let{path:a}=e,{imgPath:i}=e,{name:c}=e,{tags:o}=e,{featured:u=!1}=e;return n.$$set=r=>{"path"in r&&t(0,a=r.path),"imgPath"in r&&t(1,i=r.imgPath),"name"in r&&t(2,c=r.name),"tags"in r&&t(3,o=r.tags),"featured"in r&&t(4,u=r.featured)},[a,i,c,o,u]}class L extends N{constructor(e){super(),T(this,e,J,F,j,{path:0,imgPath:1,name:2,tags:3,featured:4})}}export{L as P};