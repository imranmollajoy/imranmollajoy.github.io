import{S as C,i as y,s as A,v as F,a as $,k as g,q as P,w as N,c as I,l as b,m as k,r as D,h as u,n as E,x as O,b as x,F as m,f as T,t as j,y as z,I as w,u as B}from"../../../chunks/index-80b58b41.js";import{B as G}from"../../../chunks/Breadcrumb-643c78c0.js";function H(i,a,o){const s=i.slice();return s[3]=a[o],s[5]=o,s}function S(i,a,o){const s=i.slice();return s[6]=a[o],s}function V(i){let a,o=i[6]+"",s;return{c(){a=g("div"),s=P(o),this.h()},l(n){a=b(n,"DIV",{class:!0});var c=k(a);s=D(c,o),c.forEach(u),this.h()},h(){E(a,"class","badge uppercase")},m(n,c){x(n,a,c),m(a,s)},p(n,c){c&1&&o!==(o=n[6]+"")&&B(s,o)},d(n){n&&u(a)}}}function q(i){let a,o,s=i[3].meta.name+"",n,c,f,p,d,h=i[3].meta.stacks,l=[];for(let e=0;e<h.length;e+=1)l[e]=V(S(i,h,e));return{c(){a=g("a"),o=g("h5"),n=P(s),c=$(),f=g("div");for(let e=0;e<l.length;e+=1)l[e].c();p=$(),this.h()},l(e){a=b(e,"A",{href:!0,class:!0});var r=k(a);o=b(r,"H5",{});var t=k(o);n=D(t,s),t.forEach(u),c=I(r),f=b(r,"DIV",{class:!0});var _=k(f);for(let v=0;v<l.length;v+=1)l[v].l(_);_.forEach(u),p=I(r),r.forEach(u),this.h()},h(){E(f,"class","tags"),E(a,"href",d=i[3].path),E(a,"class","post")},m(e,r){x(e,a,r),m(a,o),m(o,n),m(a,c),m(a,f);for(let t=0;t<l.length;t+=1)l[t].m(f,null);m(a,p)},p(e,r){if(r&1&&s!==(s=e[3].meta.name+"")&&B(n,s),r&1){h=e[3].meta.stacks;let t;for(t=0;t<h.length;t+=1){const _=S(e,h,t);l[t]?l[t].p(_,r):(l[t]=V(_),l[t].c(),l[t].m(f,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=h.length}r&1&&d!==(d=e[3].path)&&E(a,"href",d)},d(e){e&&u(a),w(l,e)}}}function J(i){let a,o,s,n,c,f,p,d;a=new G({props:{links:i[1]}});let h=i[0].portfolios,l=[];for(let e=0;e<h.length;e+=1)l[e]=q(H(i,h,e));return{c(){F(a.$$.fragment),o=$(),s=g("section"),n=g("div"),c=g("h2"),f=P("Portfolios"),p=$();for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){N(a.$$.fragment,e),o=I(e),s=b(e,"SECTION",{});var r=k(s);n=b(r,"DIV",{class:!0});var t=k(n);c=b(t,"H2",{});var _=k(c);f=D(_,"Portfolios"),_.forEach(u),p=I(t);for(let v=0;v<l.length;v+=1)l[v].l(t);t.forEach(u),r.forEach(u),this.h()},h(){E(n,"class","container")},m(e,r){O(a,e,r),x(e,o,r),x(e,s,r),m(s,n),m(n,c),m(c,f),m(n,p);for(let t=0;t<l.length;t+=1)l[t].m(n,null);d=!0},p(e,[r]){if(r&1){h=e[0].portfolios;let t;for(t=0;t<h.length;t+=1){const _=H(e,h,t);l[t]?l[t].p(_,r):(l[t]=q(_),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=h.length}},i(e){d||(T(a.$$.fragment,e),d=!0)},o(e){j(a.$$.fragment,e),d=!1},d(e){z(a,e),e&&u(o),e&&u(s),w(l,e)}}}function K(i,a,o){let{data:s}=a,n=[{path:"/",text:"Home"},{path:"/portfolios",text:"Portfolios"}];return i.$$set=c=>{"data"in c&&o(0,s=c.data)},[s,n]}class Q extends C{constructor(a){super(),y(this,a,K,J,A,{data:0})}}export{Q as default};