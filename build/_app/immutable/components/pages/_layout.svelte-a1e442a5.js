import"../../chunks/preload-helper-aa6bc0ce.js";import{S as N,i as E,s as q,B as L,C as M,D as U,E as O,f as z,t as B,F as W}from"../../chunks/index-3faacf74.js";import{n as R}from"../../chunks/stores-38424dc8.js";import"../../chunks/singletons-abd867a3.js";var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(l,c){(function(r,n){l.exports=n()})(x,function(){var r={};r.version="0.2.0";var n=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(e){var t,s;for(t in e)s=e[t],s!==void 0&&e.hasOwnProperty(t)&&(n[t]=s);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=o(e,n.minimum,1),r.status=e===1?null:e;var s=r.render(!t),a=s.querySelector(n.barSelector),f=n.speed,m=n.easing;return s.offsetWidth,T(function(i){n.positionUsing===""&&(n.positionUsing=r.getPositioningCSS()),h(a,v(e,f,m)),e===1?(h(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout(function(){h(s,{transition:"all "+f+"ms linear",opacity:0}),setTimeout(function(){r.remove(),i()},f)},f)):setTimeout(i,f)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){!r.status||(r.trickle(),e())},n.trickleSpeed)};return n.trickle&&e(),this},r.done=function(e){return!e&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(e){var t=r.status;return t?(typeof e!="number"&&(e=(1-t)*o(Math.random()*t,.1,.95)),t=o(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*n.trickleRate)},function(){var e=0,t=0;r.promise=function(s){return!s||s.state()==="resolved"?this:(t===0&&r.start(),e++,t++,s.always(function(){t--,t===0?(e=0,r.done()):r.set((e-t)/e)}),this)}}(),r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");C(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=n.template;var s=t.querySelector(n.barSelector),a=e?"-100":u(r.status||0),f=document.querySelector(n.parent),m;return h(s,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),n.showSpinner||(m=t.querySelector(n.spinnerSelector),m&&w(m)),f!=document.body&&C(f,"nprogress-custom-parent"),f.appendChild(t),t},r.remove=function(){k(document.documentElement,"nprogress-busy"),k(document.querySelector(n.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&w(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};function o(e,t,s){return e<t?t:e>s?s:e}function u(e){return(-1+e)*100}function v(e,t,s){var a;return n.positionUsing==="translate3d"?a={transform:"translate3d("+u(e)+"%,0,0)"}:n.positionUsing==="translate"?a={transform:"translate("+u(e)+"%,0)"}:a={"margin-left":u(e)+"%"},a.transition="all "+t+"ms "+s,a}var T=function(){var e=[];function t(){var s=e.shift();s&&s(t)}return function(s){e.push(s),e.length==1&&t()}}(),h=function(){var e=["Webkit","O","Moz","ms"],t={};function s(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(d,p){return p.toUpperCase()})}function a(i){var d=document.body.style;if(i in d)return i;for(var p=e.length,y=i.charAt(0).toUpperCase()+i.slice(1),g;p--;)if(g=e[p]+y,g in d)return g;return i}function f(i){return i=s(i),t[i]||(t[i]=a(i))}function m(i,d,p){d=f(d),i.style[d]=p}return function(i,d){var p=arguments,y,g;if(p.length==2)for(y in d)g=d[y],g!==void 0&&d.hasOwnProperty(y)&&m(i,y,g);else m(i,p[1],p[2])}}();function _(e,t){var s=typeof e=="string"?e:b(e);return s.indexOf(" "+t+" ")>=0}function C(e,t){var s=b(e),a=s+t;_(s,t)||(e.className=a.substring(1))}function k(e,t){var s=b(e),a;!_(e,t)||(a=s.replace(" "+t+" "," "),e.className=a.substring(1,a.length-1))}function b(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function w(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})})(P);const S=P.exports;function I(l){let c;const r=l[2].default,n=L(r,l,l[1],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,u){n&&n.m(o,u),c=!0},p(o,[u]){n&&n.p&&(!c||u&2)&&M(n,r,o,o[1],c?O(r,o[1],u,null):U(o[1]),null)},i(o){c||(z(n,o),c=!0)},o(o){B(n,o),c=!1},d(o){n&&n.d(o)}}}function $(l,c,r){let n;W(l,R,v=>r(0,n=v));let{$$slots:o={},$$scope:u}=c;return S.configure({minimum:.16,showSpinner:!0}),l.$$set=v=>{"$$scope"in v&&r(1,u=v.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&(n&&S.start(),n||S.done())},[n,u,o]}class G extends N{constructor(c){super(),E(this,c,$,I,q,{})}}export{G as default};
