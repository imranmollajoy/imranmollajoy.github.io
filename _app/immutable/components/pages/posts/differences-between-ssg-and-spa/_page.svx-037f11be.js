import{S as D,i as F,s as Z,M as O,k as u,q as b,a as x,w as J,l as h,m,r as k,h as t,c as $,x as K,n as d,b as l,C as n,y as Q,V as X,Z as M,f as ee,t as te,z as se,N,F as ae,B as oe}from"../../../../chunks/index-b59cce2c.js";import{B as ie}from"../../../../chunks/blog-layout-6cf70c55.js";const le=""+new URL("../../../../assets/thumb2-f1e57964.png",import.meta.url).href;function ne(P){let a,_,v,f,q,y,p,A,g,S,C,G,r,E,I,w,s,i,c,B,L,R,H;return{c(){a=u("img"),v=x(),f=u("h2"),q=b("SSR"),y=x(),p=u("p"),A=b("SSR means Server side rendering. In this mode, the requested page gets rendered on the server."),g=x(),S=u("p"),C=b("Building in SSR is fast compared to SSG when dealing with many pages. However it is slower than SSG in client side. SEO can be a little tricky but can do its job when done properly. Useful for app/sites that depends on everchanging data or interactive elements."),G=x(),r=u("h2"),E=b("SSG"),I=x(),w=u("p"),s=b("SSG means Static site generation. The site is rendered once during build time. It is faster than SSR in terms of performance. Useful for blogs, magazines, documentation etc. where data is not dynamic."),i=x(),c=u("h2"),B=b("What should You Choose"),L=x(),R=u("p"),H=b(`This depends on your use cases. If you are making a simple website like a blog, you should use an SSG. On the other hand, it you want to make am interactive app like a weather app, or an app which requires data fetching by the users, use a SSR.
Also, many frameworks allow you to use both SSG and SSR side by side, meaning you can use SSR on dynamic parts and SSG on other parts of your site.`),this.h()},l(e){a=h(e,"IMG",{src:!0}),v=$(e),f=h(e,"H2",{id:!0});var o=m(f);q=k(o,"SSR"),o.forEach(t),y=$(e),p=h(e,"P",{});var T=m(p);A=k(T,"SSR means Server side rendering. In this mode, the requested page gets rendered on the server."),T.forEach(t),g=$(e),S=h(e,"P",{});var U=m(S);C=k(U,"Building in SSR is fast compared to SSG when dealing with many pages. However it is slower than SSG in client side. SEO can be a little tricky but can do its job when done properly. Useful for app/sites that depends on everchanging data or interactive elements."),U.forEach(t),G=$(e),r=h(e,"H2",{id:!0});var W=m(r);E=k(W,"SSG"),W.forEach(t),I=$(e),w=h(e,"P",{});var Y=m(w);s=k(Y,"SSG means Static site generation. The site is rendered once during build time. It is faster than SSR in terms of performance. Useful for blogs, magazines, documentation etc. where data is not dynamic."),Y.forEach(t),i=$(e),c=h(e,"H2",{id:!0});var j=m(c);B=k(j,"What should You Choose"),j.forEach(t),L=$(e),R=h(e,"P",{});var z=m(R);H=k(z,`This depends on your use cases. If you are making a simple website like a blog, you should use an SSG. On the other hand, it you want to make am interactive app like a weather app, or an app which requires data fetching by the users, use a SSR.
Also, many frameworks allow you to use both SSG and SSR side by side, meaning you can use SSR on dynamic parts and SSG on other parts of your site.`),z.forEach(t),this.h()},h(){ae(a.src,_=le)||d(a,"src",_),d(f,"id","ssr"),d(r,"id","ssg"),d(c,"id","what-should-you-choose")},m(e,o){l(e,a,o),l(e,v,o),l(e,f,o),n(f,q),l(e,y,o),l(e,p,o),n(p,A),l(e,g,o),l(e,S,o),n(S,C),l(e,G,o),l(e,r,o),n(r,E),l(e,I,o),l(e,w,o),n(w,s),l(e,i,o),l(e,c,o),n(c,B),l(e,L,o),l(e,R,o),n(R,H)},p:oe,d(e){e&&t(a),e&&t(v),e&&t(f),e&&t(y),e&&t(p),e&&t(g),e&&t(S),e&&t(G),e&&t(r),e&&t(I),e&&t(w),e&&t(i),e&&t(c),e&&t(L),e&&t(R)}}}function re(P){let a,_,v,f,q,y,p,A,g,S,C,G,r,E;const I=[P[0],V];let w={$$slots:{default:[ne]},$$scope:{ctx:P}};for(let s=0;s<I.length;s+=1)w=O(w,I[s]);return r=new ie({props:w}),{c(){a=u("nav"),_=u("ol"),v=u("li"),f=u("a"),q=b("SSR"),y=u("li"),p=u("a"),A=b("SSG"),g=u("li"),S=u("a"),C=b("What should You Choose"),G=x(),J(r.$$.fragment),this.h()},l(s){a=h(s,"NAV",{class:!0});var i=m(a);_=h(i,"OL",{class:!0});var c=m(_);v=h(c,"LI",{class:!0});var B=m(v);f=h(B,"A",{class:!0,href:!0});var L=m(f);q=k(L,"SSR"),L.forEach(t),B.forEach(t),y=h(c,"LI",{class:!0});var R=m(y);p=h(R,"A",{class:!0,href:!0});var H=m(p);A=k(H,"SSG"),H.forEach(t),R.forEach(t),g=h(c,"LI",{class:!0});var e=m(g);S=h(e,"A",{class:!0,href:!0});var o=m(S);C=k(o,"What should You Choose"),o.forEach(t),e.forEach(t),c.forEach(t),i.forEach(t),G=$(s),K(r.$$.fragment,s),this.h()},h(){d(f,"class","page-link page-link-h2"),d(f,"href","#ssr"),d(v,"class","toc-item toc-item-h2"),d(p,"class","page-link page-link-h2"),d(p,"href","#ssg"),d(y,"class","toc-item toc-item-h2"),d(S,"class","page-link page-link-h2"),d(S,"href","#what-should-you-choose"),d(g,"class","toc-item toc-item-h2"),d(_,"class","toc-level toc-level-1"),d(a,"class","page-outline")},m(s,i){l(s,a,i),n(a,_),n(_,v),n(v,f),n(f,q),n(_,y),n(y,p),n(p,A),n(_,g),n(g,S),n(S,C),l(s,G,i),Q(r,s,i),E=!0},p(s,[i]){const c=i&1?X(I,[i&1&&M(s[0]),i&0&&M(V)]):{};i&2&&(c.$$scope={dirty:i,ctx:s}),r.$set(c)},i(s){E||(ee(r.$$.fragment,s),E=!0)},o(s){te(r.$$.fragment,s),E=!1},d(s){s&&t(a),s&&t(G),se(r,s)}}}const V={slug:"differences-between-ssg-and-ssr",name:"Differences between SSG and SSR, also when to use them",category:["Web development"],date:"30 Aug, 2022",featuredImg:"./thumb2.png",layout:"blog",excerpt:"Learn about SSG and SSR, and what you should use."};function ue(P,a,_){return P.$$set=v=>{_(0,a=O(O({},a),N(v)))},a=N(a),[a]}class ce extends D{constructor(a){super(),F(this,a,ue,re,Z,{})}}export{ce as default,V as metadata};
