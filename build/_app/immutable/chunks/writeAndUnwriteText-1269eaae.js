import{w as s,t as e}from"./writeEffect-2fc7057a.js";import{u as f}from"./unwriteEffect-eed595e5.js";import{b as l}from"./animationSetup-51a50bb9.js";const y=async({currentNode:t,text:r},a)=>{await s({currentNode:t,text:r},a);const n=r.replaceAll("&","&amp;");t.innerHTML===n&&(a.dispatch("done"),await e(a.wordInterval),await f(t,a)),l(t,a.parentElement,i=>{t===i?i.classList.remove("typing"):i.classList.remove("finished-typing")})};export{y as w};