const n=async({setHeaders:e,url:a,fetch:s})=>{const t=await s(`${a.origin}/api/story`);if(!t.ok)throw new Error("💩 Could not fetch posts");const r=(await t.json()).filter(o=>!o.draft).map(o=>o);return e({"Cache-Control":"max-age=0, s-maxage=3600"}),{posts:r}},p=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{p as _,n as l};