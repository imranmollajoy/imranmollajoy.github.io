import{g as s}from"./updatedPosts-23439f27.js";const a=async({setHeaders:i,url:e,fetch:t})=>{const o=await t(`${e.origin}/api/blog`);if(!o.ok)throw new Error("💩 Could not fetch posts");const r=await o.json();return{categories:await s(r)}},n=!0,p=Object.freeze(Object.defineProperty({__proto__:null,load:a,prerender:n},Symbol.toStringTag,{value:"Module"}));export{p as _,a as l,n as p};