import{w as P}from"./index-4db62b91.js";import{C}from"./index-04714a88.js";const f={};function S(e){return e==="local"?localStorage:sessionStorage}function m(e,r,s){const o=(s==null?void 0:s.serializer)??JSON,i=(s==null?void 0:s.storage)??"local",c=typeof window<"u"&&typeof document<"u";function u(n,l){c&&S(i).setItem(n,o.stringify(l))}if(!f[e]){const n=P(r,t=>{const a=c?S(i).getItem(e):null;if(a&&t(o.parse(a)),c){const w=d=>{d.key===e&&t(d.newValue?o.parse(d.newValue):null)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)}}),{subscribe:l,set:g}=n;f[e]={set(t){u(e,t),g(t)},update(t){const a=t(C(n));u(e,a),g(a)},subscribe:l}}return f[e]}m("modeOsPrefers",!1);const U=m("modeUserPrefers",void 0),_=m("modeCurrent",!1);function h(e){U.set(e)}function v(e){const r=document.documentElement.classList,s="dark";e===!0?r.remove(s):r.add(s),_.set(e)}function E(){const e=document.documentElement.classList,r=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),o=window.matchMedia("(prefers-color-scheme: dark)").matches;r||s&&o?e.add("dark"):e.remove("dark")}export{h as a,v as b,_ as m,E as s};
