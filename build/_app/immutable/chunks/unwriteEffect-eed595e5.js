import{t as l}from"./writeEffect-2fc7057a.js";const c=async(r,n)=>{const e=r.innerHTML.replaceAll("&amp;","&");for(let t=e.length-1;t>=0;t--)e[t]===">"&&(t=e.lastIndexOf("<",t)),r.innerHTML=e.slice(0,t),await l(n.unwriteInterval?n.unwriteInterval:n.interval)};export{c as u};
