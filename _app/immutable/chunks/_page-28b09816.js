import{a as c}from"./updatedPosts-23439f27.js";async function p(o){const e=o.filter(t=>!t.draft).map(t=>t);function s(){return[...e].sort((t,r)=>new Date(r.date).getTime()-new Date(t.date).getTime())}function n(){return s().slice(0,4)}return{posts:s(),latest:n()}}async function g(o){return(await p(o)).latest}const f=async({setHeaders:o,url:a,fetch:e})=>{const s=await e(`${a.origin}/api/blog`),n=await e(`${a.origin}/api/portfolio`),t=await s.json(),r=await n.json(),i=await c(t),l=await g(r);return o({"Cache-Control":`max-age=0, s-maxage=${60*60}`}),{posts:i,portfolios:l}},m=Object.freeze(Object.defineProperty({__proto__:null,load:f},Symbol.toStringTag,{value:"Module"}));export{m as _,f as l};