const n=async({url:o})=>{const t=await fetch(`${o.origin}/api/portfolios`),s=await fetch(`${o.origin}/api/posts`),a=await t.json(),e=await s.json();return{portfolios:a,blogs:e}},i=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{i as _,n as l};