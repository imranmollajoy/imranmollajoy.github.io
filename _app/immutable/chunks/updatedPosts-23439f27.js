async function f(e){const o=e.filter(t=>!t.draft).map(t=>{const g=t.description.length>80?"...":"",l=t.description.substring(0,80)+g;return{...t,description:l}});function s(){return[...o].sort((t,i)=>new Date(i.date).getTime()-new Date(t.date).getTime())}function c(){return s().slice(0,4)}function a(){return s().sort((t,i)=>i.views-t.views).slice(0,4)}function u(){return s().filter(t=>t.series).slice(0,4)}function p(){return s().sort(()=>Math.random()-.5).slice(0,4)}return{posts:s(),latestPost:c()[0],latest:c(),popular:a(),series:u(),picks:p()}}async function m(e){const r=e;return[...new Set(r.map(n=>n.category))]}async function y(e,r){return e.filter(s=>!s.draft&&s.category===r)}async function d(e){return(await f(e)).latest}export{d as a,f as b,y as c,m as g};
