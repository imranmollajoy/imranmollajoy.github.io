import{S as E,i as M,s as A,e as h,k as p,P as I,l as b,h as d,n as r,E as g,B as _,a as N,c as v,b as y}from"./index-5e6cffc8.js";const G="Imran Molla Joy",j="I'm a web designer and developer who blogs about web development.",C=["JavaScript","CSS","General","Web Design","Git & GitHub","TypeScript","Svelte","SvelteKit"];function k(l){return document.title=l[0]+"-"+G,{c:_,l:_,m:_,d:_}}function T(l){let e,n,i;return{c(){e=p("meta"),n=N(),i=p("meta"),this.h()},l(t){e=b(t,"META",{name:!0,content:!0}),n=v(t),i=b(t,"META",{property:!0,content:!0}),this.h()},h(){r(e,"name","description"),r(e,"content",l[1]),r(i,"property","og:description"),r(i,"content",l[1])},m(t,m){y(t,e,m),y(t,n,m),y(t,i,m)},p(t,m){m&2&&r(e,"content",t[1]),m&2&&r(i,"content",t[1])},d(t){t&&d(e),t&&d(n),t&&d(i)}}}function S(l){let e,n;return{c(){e=p("meta"),this.h()},l(i){e=b(i,"META",{name:!0,content:!0}),this.h()},h(){r(e,"name","keywords"),r(e,"content",n=l[2].join(","))},m(i,t){y(i,e,t)},p(i,t){t&4&&n!==(n=i[2].join(","))&&r(e,"content",n)},d(i){i&&d(e)}}}function w(l){let e;return{c(){e=p("meta"),this.h()},l(n){e=b(n,"META",{property:!0,content:!0}),this.h()},h(){r(e,"property","og:image"),r(e,"content",l[4])},m(n,i){y(n,e,i)},p(n,i){i&16&&r(e,"content",n[4])},d(n){n&&d(e)}}}function D(l){let e,n,i,t,m,f=l[0]&&k(l),c=l[1]&&T(l),o=l[2].length>0&&S(l),s=l[4]&&w(l);return{c(){f&&f.c(),e=h(),c&&c.c(),n=h(),o&&o.c(),i=h(),s&&s.c(),t=p("meta"),m=p("meta"),this.h()},l(a){const u=I("svelte-s7208n",document.head);f&&f.l(u),e=h(),c&&c.l(u),n=h(),o&&o.l(u),i=h(),s&&s.l(u),t=b(u,"META",{property:!0,content:!0}),m=b(u,"META",{property:!0,content:!0}),u.forEach(d),this.h()},h(){r(t,"property","og:type"),r(t,"content",l[3]),r(m,"property","og:title"),r(m,"content",l[0])},m(a,u){f&&f.m(document.head,null),g(document.head,e),c&&c.m(document.head,null),g(document.head,n),o&&o.m(document.head,null),g(document.head,i),s&&s.m(document.head,null),g(document.head,t),g(document.head,m)},p(a,[u]){a[0]?f||(f=k(a),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null),a[1]?c?c.p(a,u):(c=T(a),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),a[2].length>0?o?o.p(a,u):(o=S(a),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null),a[4]?s?s.p(a,u):(s=w(a),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),u&8&&r(t,"content",a[3]),u&1&&r(m,"content",a[0])},i:_,o:_,d(a){f&&f.d(a),d(e),c&&c.d(a),d(n),o&&o.d(a),d(i),s&&s.d(a),d(t),d(m)}}}function J(l,e,n){let{title:i=""}=e,{description:t=j}=e,{keywords:m=C}=e,{ogType:f="website"}=e,{ogImage:c=""}=e;return l.$$set=o=>{"title"in o&&n(0,i=o.title),"description"in o&&n(1,t=o.description),"keywords"in o&&n(2,m=o.keywords),"ogType"in o&&n(3,f=o.ogType),"ogImage"in o&&n(4,c=o.ogImage)},[i,t,m,f,c]}class B extends E{constructor(e){super(),M(this,e,J,D,A,{title:0,description:1,keywords:2,ogType:3,ogImage:4})}}export{B as S};
