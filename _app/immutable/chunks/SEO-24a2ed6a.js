import{S as E,i as I,s as M,E as h,e as p,I as A,a as g,f as d,g as c,u as b,n as _,p as N,r as v,j as y}from"./index-a18a9394.js";const j="Imran Molla Joy",G="I'm a web designer and developer who blogs about web development.",C=["JavaScript","CSS","General","Web Design","Git & GitHub","TypeScript","Svelte","SvelteKit"];function k(l){return document.title=l[0]+"-"+j,{c:_,l:_,m:_,d:_}}function T(l){let e,n,i;return{c(){e=p("meta"),n=N(),i=p("meta"),this.h()},l(t){e=g(t,"META",{name:!0,content:!0}),n=v(t),i=g(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"name","description"),c(e,"content",l[1]),c(i,"property","og:description"),c(i,"content",l[1])},m(t,m){y(t,e,m),y(t,n,m),y(t,i,m)},p(t,m){m&2&&c(e,"content",t[1]),m&2&&c(i,"content",t[1])},d(t){t&&d(e),t&&d(n),t&&d(i)}}}function S(l){let e,n;return{c(){e=p("meta"),this.h()},l(i){e=g(i,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name","keywords"),c(e,"content",n=l[2].join(","))},m(i,t){y(i,e,t)},p(i,t){t&4&&n!==(n=i[2].join(","))&&c(e,"content",n)},d(i){i&&d(e)}}}function w(l){let e;return{c(){e=p("meta"),this.h()},l(n){e=g(n,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","og:image"),c(e,"content",l[4])},m(n,i){y(n,e,i)},p(n,i){i&16&&c(e,"content",n[4])},d(n){n&&d(e)}}}function D(l){let e,n,i,t,m,r=l[0]&&k(l),f=l[1]&&T(l),o=l[2].length>0&&S(l),s=l[4]&&w(l);return{c(){r&&r.c(),e=h(),f&&f.c(),n=h(),o&&o.c(),i=h(),s&&s.c(),t=p("meta"),m=p("meta"),this.h()},l(a){const u=A("svelte-s7208n",document.head);r&&r.l(u),e=h(),f&&f.l(u),n=h(),o&&o.l(u),i=h(),s&&s.l(u),t=g(u,"META",{property:!0,content:!0}),m=g(u,"META",{property:!0,content:!0}),u.forEach(d),this.h()},h(){c(t,"property","og:type"),c(t,"content",l[3]),c(m,"property","og:title"),c(m,"content",l[0])},m(a,u){r&&r.m(document.head,null),b(document.head,e),f&&f.m(document.head,null),b(document.head,n),o&&o.m(document.head,null),b(document.head,i),s&&s.m(document.head,null),b(document.head,t),b(document.head,m)},p(a,[u]){a[0]?r||(r=k(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),a[1]?f?f.p(a,u):(f=T(a),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null),a[2].length>0?o?o.p(a,u):(o=S(a),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null),a[4]?s?s.p(a,u):(s=w(a),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),u&8&&c(t,"content",a[3]),u&1&&c(m,"content",a[0])},i:_,o:_,d(a){r&&r.d(a),d(e),f&&f.d(a),d(n),o&&o.d(a),d(i),s&&s.d(a),d(t),d(m)}}}function J(l,e,n){let{title:i=""}=e,{description:t=G}=e,{keywords:m=C}=e,{ogType:r="website"}=e,{ogImage:f=""}=e;return l.$$set=o=>{"title"in o&&n(0,i=o.title),"description"in o&&n(1,t=o.description),"keywords"in o&&n(2,m=o.keywords),"ogType"in o&&n(3,r=o.ogType),"ogImage"in o&&n(4,f=o.ogImage)},[i,t,m,r,f]}class H extends E{constructor(e){super(),I(this,e,J,D,M,{title:0,description:1,keywords:2,ogType:3,ogImage:4})}}export{H as S};