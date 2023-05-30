import{L as kt,S as Ae,i as Fe,s as Ce,v as X,e as C,p as B,a as I,b as F,r as z,f as S,g as v,j as O,u as H,t as x,H as $,k as A,J as ee,w as Y,x as G,y as J,M as Lt,A as he,D as me,N as se,O as pe,o as ce,q as ue,P as Vt,F as Xe,Q as Ye,G as Ut,R as Bt,T as Ge,n as Ue,U as zt,V as Wt,W as jt,X as qt,c as Se,d as Re,m as De,l as Pe,h as ie,Y as Qt}from"../../chunks/index-df6e685e.js";import{w as St}from"../../chunks/index-a2c166b8.js";import{S as Xt}from"../../chunks/SEO-3eab8ed9.js";function ye(t){return t.split("-")[1]}function je(t){return t==="y"?"height":"width"}function ae(t){return t.split("-")[0]}function we(t){return["top","bottom"].includes(ae(t))?"x":"y"}function Je(t,e,n){let{reference:o,floating:s}=t;const l=o.x+o.width/2-s.width/2,i=o.y+o.height/2-s.height/2,a=we(e),f=je(a),m=o[f]/2-s[f]/2,d=a==="x";let u;switch(ae(e)){case"top":u={x:l,y:o.y-s.height};break;case"bottom":u={x:l,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:i};break;case"left":u={x:o.x-s.width,y:i};break;default:u={x:o.x,y:o.y}}switch(ye(e)){case"start":u[a]-=m*(n&&d?-1:1);break;case"end":u[a]+=m*(n&&d?-1:1)}return u}const Yt=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:l=[],platform:i}=n,a=l.filter(Boolean),f=await(i.isRTL==null?void 0:i.isRTL(e));let m=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:u}=Je(m,o,f),g=o,c={},_=0;for(let p=0;p<a.length;p++){const{name:r,fn:h}=a[p],{x:y,y:P,data:R,reset:k}=await h({x:d,y:u,initialPlacement:o,placement:g,strategy:s,middlewareData:c,rects:m,platform:i,elements:{reference:t,floating:e}});d=y??d,u=P??u,c={...c,[r]:{...c[r],...R}},k&&_<=50&&(_++,typeof k=="object"&&(k.placement&&(g=k.placement),k.rects&&(m=k.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):k.rects),{x:d,y:u}=Je(m,g,f)),p=-1)}return{x:d,y:u,placement:g,strategy:s,middlewareData:c}};function Rt(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function xe(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Dt(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:l,rects:i,elements:a,strategy:f}=t,{boundary:m="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:c=0}=e,_=Rt(c),p=a[g?u==="floating"?"reference":"floating":u],r=xe(await l.getClippingRect({element:(n=await(l.isElement==null?void 0:l.isElement(p)))==null||n?p:p.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(a.floating)),boundary:m,rootBoundary:d,strategy:f})),h=u==="floating"?{...i.floating,x:o,y:s}:i.reference,y=await(l.getOffsetParent==null?void 0:l.getOffsetParent(a.floating)),P=await(l.isElement==null?void 0:l.isElement(y))&&await(l.getScale==null?void 0:l.getScale(y))||{x:1,y:1},R=xe(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h,offsetParent:y,strategy:f}):h);return{top:(r.top-R.top+_.top)/P.y,bottom:(R.bottom-r.bottom+_.bottom)/P.y,left:(r.left-R.left+_.left)/P.x,right:(R.right-r.right+_.right)/P.x}}const Gt=Math.min,Jt=Math.max;function Be(t,e,n){return Jt(t,Gt(e,n))}const Kt=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:s,y:l,placement:i,rects:a,platform:f,elements:m}=e;if(n==null)return{};const d=Rt(o),u={x:s,y:l},g=we(i),c=je(g),_=await f.getDimensions(n),p=g==="y",r=p?"top":"left",h=p?"bottom":"right",y=p?"clientHeight":"clientWidth",P=a.reference[c]+a.reference[g]-u[g]-a.floating[c],R=u[g]-a.reference[g],k=await(f.getOffsetParent==null?void 0:f.getOffsetParent(n));let D=k?k[y]:0;D&&await(f.isElement==null?void 0:f.isElement(k))||(D=m.floating[y]||a.floating[c]);const L=P/2-R/2,w=d[r],E=D-_[c]-d[h],b=D/2-_[c]/2+L,T=Be(w,b,E),M=ye(i)!=null&&b!=T&&a.reference[c]/2-(b<w?d[r]:d[h])-_[c]/2<0;return{[g]:u[g]-(M?b<w?w-b:E-b:0),data:{[g]:T,centerOffset:b-T}}}}),Zt=["top","right","bottom","left"];Zt.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);const Nt={left:"right",right:"left",bottom:"top",top:"bottom"};function Te(t){return t.replace(/left|right|bottom|top/g,e=>Nt[e])}function $t(t,e,n){n===void 0&&(n=!1);const o=ye(t),s=we(t),l=je(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(i=Te(i)),{main:i,cross:Te(i)}}const el={start:"end",end:"start"};function Oe(t){return t.replace(/start|end/g,e=>el[e])}const tl=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:s,rects:l,initialPlacement:i,platform:a,elements:f}=e,{mainAxis:m=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:c="none",flipAlignment:_=!0,...p}=t,r=ae(o),h=ae(i)===i,y=await(a.isRTL==null?void 0:a.isRTL(f.floating)),P=u||(h||!_?[Te(i)]:function(T){const M=Te(T);return[Oe(T),M,Oe(M)]}(i));u||c==="none"||P.push(...function(T,M,j,W){const U=ye(T);let V=function(K,te,fe){const oe=["left","right"],Ee=["right","left"],ke=["top","bottom"],Le=["bottom","top"];switch(K){case"top":case"bottom":return fe?te?Ee:oe:te?oe:Ee;case"left":case"right":return te?ke:Le;default:return[]}}(ae(T),j==="start",W);return U&&(V=V.map(K=>K+"-"+U),M&&(V=V.concat(V.map(Oe)))),V}(i,_,c,y));const R=[i,...P],k=await Dt(e,p),D=[];let L=((n=s.flip)==null?void 0:n.overflows)||[];if(m&&D.push(k[r]),d){const{main:T,cross:M}=$t(o,l,y);D.push(k[T],k[M])}if(L=[...L,{placement:o,overflows:D}],!D.every(T=>T<=0)){var w,E;const T=(((w=s.flip)==null?void 0:w.index)||0)+1,M=R[T];if(M)return{data:{index:T,overflows:L},reset:{placement:M}};let j=(E=L.filter(W=>W.overflows[0]<=0).sort((W,U)=>W.overflows[1]-U.overflows[1])[0])==null?void 0:E.placement;if(!j)switch(g){case"bestFit":{var b;const W=(b=L.map(U=>[U.placement,U.overflows.filter(V=>V>0).reduce((V,K)=>V+K,0)]).sort((U,V)=>U[1]-V[1])[0])==null?void 0:b[0];W&&(j=W);break}case"initialPlacement":j=i}if(o!==j)return{reset:{placement:j}}}return{}}}},ll=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,s=await async function(l,i){const{placement:a,platform:f,elements:m}=l,d=await(f.isRTL==null?void 0:f.isRTL(m.floating)),u=ae(a),g=ye(a),c=we(a)==="x",_=["left","top"].includes(u)?-1:1,p=d&&c?-1:1,r=typeof i=="function"?i(l):i;let{mainAxis:h,crossAxis:y,alignmentAxis:P}=typeof r=="number"?{mainAxis:r,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...r};return g&&typeof P=="number"&&(y=g==="end"?-1*P:P),c?{x:y*p,y:h*_}:{x:h*_,y:y*p}}(e,t);return{x:n+s.x,y:o+s.y,data:s}}}};function nl(t){return t==="x"?"y":"x"}const ol=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:l=!0,crossAxis:i=!1,limiter:a={fn:r=>{let{x:h,y}=r;return{x:h,y}}},...f}=t,m={x:n,y:o},d=await Dt(e,f),u=we(ae(s)),g=nl(u);let c=m[u],_=m[g];if(l){const r=u==="y"?"bottom":"right";c=Be(c+d[u==="y"?"top":"left"],c,c-d[r])}if(i){const r=g==="y"?"bottom":"right";_=Be(_+d[g==="y"?"top":"left"],_,_-d[r])}const p=a.fn({...e,[u]:c,[g]:_});return{...p,data:{x:p.x-n,y:p.y-o}}}}};function Q(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Z(t){return Q(t).getComputedStyle(t)}function Pt(t){return t instanceof Q(t).Node}function ne(t){return Pt(t)?(t.nodeName||"").toLowerCase():""}function N(t){return t instanceof Q(t).HTMLElement}function q(t){return t instanceof Q(t).Element}function Ke(t){return typeof ShadowRoot>"u"?!1:t instanceof Q(t).ShadowRoot||t instanceof ShadowRoot}function ve(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=Z(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(s)}function il(t){return["table","td","th"].includes(ne(t))}function ze(t){const e=qe(),n=Z(t);return n.transform!=="none"||n.perspective!=="none"||!e&&!!n.backdropFilter&&n.backdropFilter!=="none"||!e&&!!n.filter&&n.filter!=="none"||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function qe(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ie(t){return["html","body","#document"].includes(ne(t))}const Ze=Math.min,be=Math.max,He=Math.round;function xt(t){const e=Z(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=N(t),l=s?t.offsetWidth:n,i=s?t.offsetHeight:o,a=He(n)!==l||He(o)!==i;return a&&(n=l,o=i),{width:n,height:o,fallback:a}}function Tt(t){return q(t)?t:t.contextElement}const Ht={x:1,y:1};function de(t){const e=Tt(t);if(!N(e))return Ht;const n=e.getBoundingClientRect(),{width:o,height:s,fallback:l}=xt(e);let i=(l?He(n.width):n.width)/o,a=(l?He(n.height):n.height)/s;return i&&Number.isFinite(i)||(i=1),a&&Number.isFinite(a)||(a=1),{x:i,y:a}}const Ne={x:0,y:0};function At(t,e,n){var o,s;if(e===void 0&&(e=!0),!qe())return Ne;const l=t?Q(t):window;return!n||e&&n!==l?Ne:{x:((o=l.visualViewport)==null?void 0:o.offsetLeft)||0,y:((s=l.visualViewport)==null?void 0:s.offsetTop)||0}}function re(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),l=Tt(t);let i=Ht;e&&(o?q(o)&&(i=de(o)):i=de(t));const a=At(l,n,o);let f=(s.left+a.x)/i.x,m=(s.top+a.y)/i.y,d=s.width/i.x,u=s.height/i.y;if(l){const g=Q(l),c=o&&q(o)?Q(o):o;let _=g.frameElement;for(;_&&o&&c!==g;){const p=de(_),r=_.getBoundingClientRect(),h=getComputedStyle(_);r.x+=(_.clientLeft+parseFloat(h.paddingLeft))*p.x,r.y+=(_.clientTop+parseFloat(h.paddingTop))*p.y,f*=p.x,m*=p.y,d*=p.x,u*=p.y,f+=r.x,m+=r.y,_=Q(_).frameElement}}return xe({width:d,height:u,x:f,y:m})}function le(t){return((Pt(t)?t.ownerDocument:t.document)||window.document).documentElement}function Me(t){return q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Ft(t){return re(le(t)).left+Me(t).scrollLeft}function ge(t){if(ne(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ke(t)&&t.host||le(t);return Ke(e)?e.host:e}function Ct(t){const e=ge(t);return Ie(e)?e.ownerDocument.body:N(e)&&ve(e)?e:Ct(e)}function _e(t,e){var n;e===void 0&&(e=[]);const o=Ct(t),s=o===((n=t.ownerDocument)==null?void 0:n.body),l=Q(o);return s?e.concat(l,l.visualViewport||[],ve(o)?o:[]):e.concat(o,_e(o))}function $e(t,e,n){let o;if(e==="viewport")o=function(s,l){const i=Q(s),a=le(s),f=i.visualViewport;let m=a.clientWidth,d=a.clientHeight,u=0,g=0;if(f){m=f.width,d=f.height;const c=qe();(!c||c&&l==="fixed")&&(u=f.offsetLeft,g=f.offsetTop)}return{width:m,height:d,x:u,y:g}}(t,n);else if(e==="document")o=function(s){const l=le(s),i=Me(s),a=s.ownerDocument.body,f=be(l.scrollWidth,l.clientWidth,a.scrollWidth,a.clientWidth),m=be(l.scrollHeight,l.clientHeight,a.scrollHeight,a.clientHeight);let d=-i.scrollLeft+Ft(s);const u=-i.scrollTop;return Z(a).direction==="rtl"&&(d+=be(l.clientWidth,a.clientWidth)-f),{width:f,height:m,x:d,y:u}}(le(t));else if(q(e))o=function(s,l){const i=re(s,!0,l==="fixed"),a=i.top+s.clientTop,f=i.left+s.clientLeft,m=N(s)?de(s):{x:1,y:1};return{width:s.clientWidth*m.x,height:s.clientHeight*m.y,x:f*m.x,y:a*m.y}}(e,n);else{const s=At(t);o={...e,x:e.x-s.x,y:e.y-s.y}}return xe(o)}function It(t,e){const n=ge(t);return!(n===e||!q(n)||Ie(n))&&(Z(n).position==="fixed"||It(n,e))}function et(t,e){return N(t)&&Z(t).position!=="fixed"?e?e(t):t.offsetParent:null}function tt(t,e){const n=Q(t);if(!N(t))return n;let o=et(t,e);for(;o&&il(o)&&Z(o).position==="static";)o=et(o,e);return o&&(ne(o)==="html"||ne(o)==="body"&&Z(o).position==="static"&&!ze(o))?n:o||function(s){let l=ge(s);for(;N(l)&&!Ie(l);){if(ze(l))return l;l=ge(l)}return null}(t)||n}function sl(t,e,n){const o=N(e),s=le(e),l=n==="fixed",i=re(t,!0,l,e);let a={scrollLeft:0,scrollTop:0};const f={x:0,y:0};if(o||!o&&!l)if((ne(e)!=="body"||ve(s))&&(a=Me(e)),N(e)){const m=re(e,!0,l,e);f.x=m.x+e.clientLeft,f.y=m.y+e.clientTop}else s&&(f.x=Ft(s));return{x:i.left+a.scrollLeft-f.x,y:i.top+a.scrollTop-f.y,width:i.width,height:i.height}}const al={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const l=n==="clippingAncestors"?function(m,d){const u=d.get(m);if(u)return u;let g=_e(m).filter(r=>q(r)&&ne(r)!=="body"),c=null;const _=Z(m).position==="fixed";let p=_?ge(m):m;for(;q(p)&&!Ie(p);){const r=Z(p),h=ze(p);h||r.position!=="fixed"||(c=null),(_?!h&&!c:!h&&r.position==="static"&&c&&["absolute","fixed"].includes(c.position)||ve(p)&&!h&&It(m,p))?g=g.filter(y=>y!==p):c=r,p=ge(p)}return d.set(m,g),g}(e,this._c):[].concat(n),i=[...l,o],a=i[0],f=i.reduce((m,d)=>{const u=$e(e,d,s);return m.top=be(u.top,m.top),m.right=Ze(u.right,m.right),m.bottom=Ze(u.bottom,m.bottom),m.left=be(u.left,m.left),m},$e(e,a,s));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const s=N(n),l=le(n);if(n===l)return e;let i={scrollLeft:0,scrollTop:0},a={x:1,y:1};const f={x:0,y:0};if((s||!s&&o!=="fixed")&&((ne(n)!=="body"||ve(l))&&(i=Me(n)),N(n))){const m=re(n);a=de(n),f.x=m.x+n.clientLeft,f.y=m.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-i.scrollLeft*a.x+f.x,y:e.y*a.y-i.scrollTop*a.y+f.y}},isElement:q,getDimensions:function(t){return xt(t)},getOffsetParent:tt,getDocumentElement:le,getScale:de,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const s=this.getOffsetParent||tt,l=this.getDimensions;return{reference:sl(e,await s(n),o),floating:{x:0,y:0,...await l(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Z(t).direction==="rtl"};function rl(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:i=!0,animationFrame:a=!1}=o,f=s||l?[...q(t)?_e(t):t.contextElement?_e(t.contextElement):[],..._e(e)]:[];f.forEach(g=>{const c=!q(g)&&g.toString().includes("V");!s||a&&!c||g.addEventListener("scroll",n,{passive:!0}),l&&g.addEventListener("resize",n)});let m,d=null;i&&(d=new ResizeObserver(()=>{n()}),q(t)&&!a&&d.observe(t),q(t)||!t.contextElement||a||d.observe(t.contextElement),d.observe(e));let u=a?re(t):null;return a&&function g(){const c=re(t);!u||c.x===u.x&&c.y===u.y&&c.width===u.width&&c.height===u.height||n(),u=c,m=requestAnimationFrame(g)}(),n(),()=>{var g;f.forEach(c=>{s&&c.removeEventListener("scroll",n),l&&c.removeEventListener("resize",n)}),(g=d)==null||g.disconnect(),d=null,a&&cancelAnimationFrame(m)}}const fl=(t,e,n)=>{const o=new Map,s={platform:al,...n},l={...s.platform,_c:o};return Yt(t,e,{...s,platform:l})},Mt=St(void 0);function cl(t,e){const{computePosition:n,autoUpdate:o,offset:s,shift:l,flip:i,arrow:a,size:f,autoPlacement:m,hide:d,inline:u}=kt(Mt),g={open:!1,autoUpdateCleanup:()=>{}},c=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let _;const p="https://www.skeleton.dev/utilities/popups";let r,h;function y(){r=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),h=(r==null?void 0:r.querySelector(".arrow"))??document.createElement("div")}y();function P(){var b,T,M,j,W,U,V,K;if(!r)throw new Error(`The data-popup="${e.target}" element was not found. ${p}`);if(!n)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${p}`);if(!s)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${p}`);if(!l)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${p}`);if(!i)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${p}`);if(!a)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${p}`);const E=[];f&&E.push(f((b=e.middleware)==null?void 0:b.size)),m&&E.push(m((T=e.middleware)==null?void 0:T.autoPlacement)),d&&E.push(d((M=e.middleware)==null?void 0:M.hide)),u&&E.push(u((j=e.middleware)==null?void 0:j.inline)),n(t,r,{placement:e.placement??"bottom",middleware:[s(((W=e.middleware)==null?void 0:W.offset)??8),l(((U=e.middleware)==null?void 0:U.shift)??{padding:8}),i((V=e.middleware)==null?void 0:V.flip),a(((K=e.middleware)==null?void 0:K.arrow)??{element:h||null}),...E]}).then(({x:te,y:fe,placement:oe,middlewareData:Ee})=>{if(Object.assign(r.style,{left:`${te}px`,top:`${fe}px`}),h){const{x:ke,y:Le}=Ee.arrow,Ot={top:"bottom",right:"left",bottom:"top",left:"right"}[oe.split("-")[0]];Object.assign(h.style,{left:ke!=null?`${ke}px`:"",top:Le!=null?`${Le}px`:"",right:"",bottom:"",[Ot]:"-4px"})}})}function R(){r&&(g.open=!0,e.state&&e.state({state:g.open}),P(),r.style.display="block",r.style.opacity="1",r.style.pointerEvents="auto",g.autoUpdateCleanup=o(t,r,P),_=Array.from(r==null?void 0:r.querySelectorAll(c)))}function k(E){if(!r)return;const b=parseFloat(window.getComputedStyle(r).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{g.open=!1,e.state&&e.state({state:g.open}),r.style.opacity="0",r.style.pointerEvents="none",g.autoUpdateCleanup&&g.autoUpdateCleanup(),E&&E()},b)}function D(){g.open===!1?R():k()}function L(E){if(g.open===!1||t.contains(E.target))return;if(r&&r.contains(E.target)===!1){k();return}const b=e.closeQuery===void 0?"a[href], button":e.closeQuery,T=r==null?void 0:r.querySelectorAll(b);T==null||T.forEach(M=>{M.contains(E.target)&&k()})}const w=E=>{if(g.open===!1)return;const b=E.key;if(b==="Escape"){E.preventDefault(),t.focus(),k();return}g.open&&document.activeElement===t&&(b==="ArrowDown"||b==="Tab")&&c.length>0&&_.length>0&&(E.preventDefault(),_[0].focus())};switch(e.event){case"click":t.addEventListener("click",D,!0),window.addEventListener("click",L,!0);break;case"hover":t.addEventListener("mouseover",R,!0),t.addEventListener("mouseleave",()=>k(),!0);break;case"focus-blur":t.addEventListener("focus",D,!0),t.addEventListener("blur",()=>k(),!0);break;case"focus-click":t.addEventListener("focus",R,!0),window.addEventListener("click",L,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${p}`)}return window.addEventListener("keydown",w,!0),P(),{update(E){k(()=>{e=E,P(),y()})},destroy(){t.removeEventListener("click",D,!0),t.removeEventListener("mouseover",R,!0),t.removeEventListener("mouseleave",()=>k(),!0),t.removeEventListener("focus",D,!0),t.removeEventListener("focus",R,!0),t.removeEventListener("blur",()=>k(),!0),window.removeEventListener("click",L,!0),window.removeEventListener("keydown",w,!0)}}}const Ve={};function lt(t){return t==="local"?localStorage:sessionStorage}function Qe(t,e,n){const o=(n==null?void 0:n.serializer)??JSON,s=(n==null?void 0:n.storage)??"local";function l(i,a){lt(s).setItem(i,o.stringify(a))}if(!Ve[t]){const i=St(e,m=>{const d=lt(s).getItem(t);d&&m(o.parse(d));{const u=g=>{g.key===t&&m(g.newValue?o.parse(g.newValue):null)};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)}}),{subscribe:a,set:f}=i;Ve[t]={set(m){l(t,m),f(m)},update(m){const d=m(kt(i));l(t,d),f(d)},subscribe:a}}return Ve[t]}const ul=Qe("modeOsPrefers",!1),dl=Qe("modeUserPrefers",void 0),We=Qe("modeCurrent",!1);function hl(){const t=window.matchMedia("(prefers-color-scheme: light)").matches;return ul.set(t),t}function ml(t){dl.set(t)}function nt(t){const e=document.documentElement.classList,n="dark";t===!0?e.remove(n):e.add(n),We.set(t)}function gl(){const t=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",n=!("modeUserPrefers"in localStorage),o=window.matchMedia("(prefers-color-scheme: dark)").matches;e||n&&o?t.add("dark"):t.remove("dark")}const pl=t=>({}),ot=t=>({}),bl=t=>({}),it=t=>({}),_l=t=>({}),st=t=>({});function at(t){let e,n,o;const s=t[22].lead,l=X(s,t,t[21],st);return{c(){e=C("div"),l&&l.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var a=F(e);l&&l.l(a),a.forEach(S),this.h()},h(){v(e,"class",n="app-bar-slot-lead "+t[4])},m(i,a){O(i,e,a),l&&l.m(e,null),o=!0},p(i,a){l&&l.p&&(!o||a&2097152)&&Y(l,s,i,i[21],o?J(s,i[21],a,_l):G(i[21]),st),(!o||a&16&&n!==(n="app-bar-slot-lead "+i[4]))&&v(e,"class",n)},i(i){o||(x(l,i),o=!0)},o(i){A(l,i),o=!1},d(i){i&&S(e),l&&l.d(i)}}}function rt(t){let e,n,o;const s=t[22].trail,l=X(s,t,t[21],it);return{c(){e=C("div"),l&&l.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var a=F(e);l&&l.l(a),a.forEach(S),this.h()},h(){v(e,"class",n="app-bar-slot-trail "+t[2])},m(i,a){O(i,e,a),l&&l.m(e,null),o=!0},p(i,a){l&&l.p&&(!o||a&2097152)&&Y(l,s,i,i[21],o?J(s,i[21],a,bl):G(i[21]),it),(!o||a&4&&n!==(n="app-bar-slot-trail "+i[2]))&&v(e,"class",n)},i(i){o||(x(l,i),o=!0)},o(i){A(l,i),o=!1},d(i){i&&S(e),l&&l.d(i)}}}function ft(t){let e,n,o;const s=t[22].headline,l=X(s,t,t[21],ot);return{c(){e=C("div"),l&&l.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var a=F(e);l&&l.l(a),a.forEach(S),this.h()},h(){v(e,"class",n="app-bar-row-headline "+t[5])},m(i,a){O(i,e,a),l&&l.m(e,null),o=!0},p(i,a){l&&l.p&&(!o||a&2097152)&&Y(l,s,i,i[21],o?J(s,i[21],a,pl):G(i[21]),ot),(!o||a&32&&n!==(n="app-bar-row-headline "+i[5]))&&v(e,"class",n)},i(i){o||(x(l,i),o=!0)},o(i){A(l,i),o=!1},d(i){i&&S(e),l&&l.d(i)}}}function vl(t){let e,n,o,s,l,i,a,f,m,d,u=t[8].lead&&at(t);const g=t[22].default,c=X(g,t,t[21],null);let _=t[8].trail&&rt(t),p=t[8].headline&&ft(t);return{c(){e=C("div"),n=C("div"),u&&u.c(),o=B(),s=C("div"),c&&c.c(),i=B(),_&&_.c(),f=B(),p&&p.c(),this.h()},l(r){e=I(r,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var h=F(e);n=I(h,"DIV",{class:!0});var y=F(n);u&&u.l(y),o=z(y),s=I(y,"DIV",{class:!0});var P=F(s);c&&c.l(P),P.forEach(S),i=z(y),_&&_.l(y),y.forEach(S),f=z(h),p&&p.l(h),h.forEach(S),this.h()},h(){v(s,"class",l="app-bar-slot-default "+t[3]),v(n,"class",a="app-bar-row-main "+t[6]),v(e,"class",m="app-bar "+t[7]),v(e,"data-testid","app-bar"),v(e,"role","toolbar"),v(e,"aria-label",t[0]),v(e,"aria-labelledby",t[1])},m(r,h){O(r,e,h),H(e,n),u&&u.m(n,null),H(n,o),H(n,s),c&&c.m(s,null),H(n,i),_&&_.m(n,null),H(e,f),p&&p.m(e,null),d=!0},p(r,[h]){r[8].lead?u?(u.p(r,h),h&256&&x(u,1)):(u=at(r),u.c(),x(u,1),u.m(n,o)):u&&($(),A(u,1,1,()=>{u=null}),ee()),c&&c.p&&(!d||h&2097152)&&Y(c,g,r,r[21],d?J(g,r[21],h,null):G(r[21]),null),(!d||h&8&&l!==(l="app-bar-slot-default "+r[3]))&&v(s,"class",l),r[8].trail?_?(_.p(r,h),h&256&&x(_,1)):(_=rt(r),_.c(),x(_,1),_.m(n,null)):_&&($(),A(_,1,1,()=>{_=null}),ee()),(!d||h&64&&a!==(a="app-bar-row-main "+r[6]))&&v(n,"class",a),r[8].headline?p?(p.p(r,h),h&256&&x(p,1)):(p=ft(r),p.c(),x(p,1),p.m(e,null)):p&&($(),A(p,1,1,()=>{p=null}),ee()),(!d||h&128&&m!==(m="app-bar "+r[7]))&&v(e,"class",m),(!d||h&1)&&v(e,"aria-label",r[0]),(!d||h&2)&&v(e,"aria-labelledby",r[1])},i(r){d||(x(u),x(c,r),x(_),x(p),d=!0)},o(r){A(u),A(c,r),A(_),A(p),d=!1},d(r){r&&S(e),u&&u.d(),c&&c.d(r),_&&_.d(),p&&p.d()}}}const yl="flex flex-col",wl="grid items-center",El="",kl="flex-none flex justify-between items-center",Ll="flex-auto",Sl="flex-none flex items-center space-x-4";function Rl(t,e,n){let o,s,l,i,a,f,{$$slots:m={},$$scope:d}=e;const u=Lt(m);let{background:g="bg-surface-100-800-token"}=e,{border:c=""}=e,{padding:_="p-4"}=e,{shadow:p=""}=e,{spacing:r="space-y-4"}=e,{gridColumns:h="grid-cols-[auto_1fr_auto]"}=e,{gap:y="gap-4"}=e,{regionRowMain:P=""}=e,{regionRowHeadline:R=""}=e,{slotLead:k=""}=e,{slotDefault:D=""}=e,{slotTrail:L=""}=e,{label:w=""}=e,{labelledby:E=""}=e;return t.$$set=b=>{n(23,e=he(he({},e),me(b))),"background"in b&&n(9,g=b.background),"border"in b&&n(10,c=b.border),"padding"in b&&n(11,_=b.padding),"shadow"in b&&n(12,p=b.shadow),"spacing"in b&&n(13,r=b.spacing),"gridColumns"in b&&n(14,h=b.gridColumns),"gap"in b&&n(15,y=b.gap),"regionRowMain"in b&&n(16,P=b.regionRowMain),"regionRowHeadline"in b&&n(17,R=b.regionRowHeadline),"slotLead"in b&&n(18,k=b.slotLead),"slotDefault"in b&&n(19,D=b.slotDefault),"slotTrail"in b&&n(20,L=b.slotTrail),"label"in b&&n(0,w=b.label),"labelledby"in b&&n(1,E=b.labelledby),"$$scope"in b&&n(21,d=b.$$scope)},t.$$.update=()=>{n(7,o=`${yl} ${g} ${c} ${r} ${_} ${p} ${e.class??""}`),t.$$.dirty&114688&&n(6,s=`${wl} ${h} ${y} ${P}`),t.$$.dirty&131072&&n(5,l=`${El} ${R}`),t.$$.dirty&262144&&n(4,i=`${kl} ${k}`),t.$$.dirty&524288&&n(3,a=`${Ll} ${D}`),t.$$.dirty&1048576&&n(2,f=`${Sl} ${L}`)},e=me(e),[w,E,f,a,i,l,s,o,u,g,c,_,p,r,h,y,P,R,k,D,L,d,m]}class Dl extends Ae{constructor(e){super(),Fe(this,e,Rl,vl,Ce,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Pl=t=>({}),ct=t=>({}),xl=t=>({}),ut=t=>({}),Tl=t=>({}),dt=t=>({}),Hl=t=>({}),ht=t=>({}),Al=t=>({}),mt=t=>({}),Fl=t=>({}),gt=t=>({});function pt(t){let e,n,o;const s=t[18].header,l=X(s,t,t[17],gt);return{c(){e=C("header"),l&&l.c(),this.h()},l(i){e=I(i,"HEADER",{id:!0,class:!0});var a=F(e);l&&l.l(a),a.forEach(S),this.h()},h(){v(e,"id","shell-header"),v(e,"class",n="flex-none "+t[7])},m(i,a){O(i,e,a),l&&l.m(e,null),o=!0},p(i,a){l&&l.p&&(!o||a&131072)&&Y(l,s,i,i[17],o?J(s,i[17],a,Fl):G(i[17]),gt),(!o||a&128&&n!==(n="flex-none "+i[7]))&&v(e,"class",n)},i(i){o||(x(l,i),o=!0)},o(i){A(l,i),o=!1},d(i){i&&S(e),l&&l.d(i)}}}function bt(t){let e,n;const o=t[18].sidebarLeft,s=X(o,t,t[17],mt);return{c(){e=C("aside"),s&&s.c(),this.h()},l(l){e=I(l,"ASIDE",{id:!0,class:!0});var i=F(e);s&&s.l(i),i.forEach(S),this.h()},h(){v(e,"id","sidebar-left"),v(e,"class",t[6])},m(l,i){O(l,e,i),s&&s.m(e,null),n=!0},p(l,i){s&&s.p&&(!n||i&131072)&&Y(s,o,l,l[17],n?J(o,l[17],i,Al):G(l[17]),mt),(!n||i&64)&&v(e,"class",l[6])},i(l){n||(x(s,l),n=!0)},o(l){A(s,l),n=!1},d(l){l&&S(e),s&&s.d(l)}}}function _t(t){let e,n,o;const s=t[18].pageHeader,l=X(s,t,t[17],ht),i=l||Cl();return{c(){e=C("header"),i&&i.c(),this.h()},l(a){e=I(a,"HEADER",{id:!0,class:!0});var f=F(e);i&&i.l(f),f.forEach(S),this.h()},h(){v(e,"id","page-header"),v(e,"class",n="flex-none "+t[4])},m(a,f){O(a,e,f),i&&i.m(e,null),o=!0},p(a,f){l&&l.p&&(!o||f&131072)&&Y(l,s,a,a[17],o?J(s,a[17],f,Hl):G(a[17]),ht),(!o||f&16&&n!==(n="flex-none "+a[4]))&&v(e,"class",n)},i(a){o||(x(i,a),o=!0)},o(a){A(i,a),o=!1},d(a){a&&S(e),i&&i.d(a)}}}function Cl(t){let e;return{c(){e=ce("(slot:header)")},l(n){e=ue(n,"(slot:header)")},m(n,o){O(n,e,o)},d(n){n&&S(e)}}}function vt(t){let e,n,o;const s=t[18].pageFooter,l=X(s,t,t[17],dt),i=l||Il();return{c(){e=C("footer"),i&&i.c(),this.h()},l(a){e=I(a,"FOOTER",{id:!0,class:!0});var f=F(e);i&&i.l(f),f.forEach(S),this.h()},h(){v(e,"id","page-footer"),v(e,"class",n="flex-none "+t[2])},m(a,f){O(a,e,f),i&&i.m(e,null),o=!0},p(a,f){l&&l.p&&(!o||f&131072)&&Y(l,s,a,a[17],o?J(s,a[17],f,Tl):G(a[17]),dt),(!o||f&4&&n!==(n="flex-none "+a[2]))&&v(e,"class",n)},i(a){o||(x(i,a),o=!0)},o(a){A(i,a),o=!1},d(a){a&&S(e),i&&i.d(a)}}}function Il(t){let e;return{c(){e=ce("(slot:footer)")},l(n){e=ue(n,"(slot:footer)")},m(n,o){O(n,e,o)},d(n){n&&S(e)}}}function yt(t){let e,n;const o=t[18].sidebarRight,s=X(o,t,t[17],ut);return{c(){e=C("aside"),s&&s.c(),this.h()},l(l){e=I(l,"ASIDE",{id:!0,class:!0});var i=F(e);s&&s.l(i),i.forEach(S),this.h()},h(){v(e,"id","sidebar-right"),v(e,"class",t[5])},m(l,i){O(l,e,i),s&&s.m(e,null),n=!0},p(l,i){s&&s.p&&(!n||i&131072)&&Y(s,o,l,l[17],n?J(o,l[17],i,xl):G(l[17]),ut),(!n||i&32)&&v(e,"class",l[5])},i(l){n||(x(s,l),n=!0)},o(l){A(s,l),n=!1},d(l){l&&S(e),s&&s.d(l)}}}function wt(t){let e,n,o;const s=t[18].footer,l=X(s,t,t[17],ct);return{c(){e=C("footer"),l&&l.c(),this.h()},l(i){e=I(i,"FOOTER",{id:!0,class:!0});var a=F(e);l&&l.l(a),a.forEach(S),this.h()},h(){v(e,"id","shell-footer"),v(e,"class",n="flex-none "+t[1])},m(i,a){O(i,e,a),l&&l.m(e,null),o=!0},p(i,a){l&&l.p&&(!o||a&131072)&&Y(l,s,i,i[17],o?J(s,i[17],a,Pl):G(i[17]),ct),(!o||a&2&&n!==(n="flex-none "+i[1]))&&v(e,"class",n)},i(i){o||(x(l,i),o=!0)},o(i){A(l,i),o=!1},d(i){i&&S(e),l&&l.d(i)}}}function Ml(t){let e,n,o,s,l,i,a,f,m,d,u,g,c,_,p,r=t[9].header&&pt(t),h=t[9].sidebarLeft&&bt(t),y=t[9].pageHeader&&_t(t);const P=t[18].default,R=X(P,t,t[17],null);let k=t[9].pageFooter&&vt(t),D=t[9].sidebarRight&&yt(t),L=t[9].footer&&wt(t);return{c(){e=C("div"),r&&r.c(),n=B(),o=C("div"),h&&h.c(),s=B(),l=C("div"),y&&y.c(),i=B(),a=C("main"),R&&R.c(),m=B(),k&&k.c(),u=B(),D&&D.c(),g=B(),L&&L.c(),this.h()},l(w){e=I(w,"DIV",{id:!0,class:!0,"data-testid":!0});var E=F(e);r&&r.l(E),n=z(E),o=I(E,"DIV",{class:!0});var b=F(o);h&&h.l(b),s=z(b),l=I(b,"DIV",{id:!0,class:!0});var T=F(l);y&&y.l(T),i=z(T),a=I(T,"MAIN",{id:!0,class:!0});var M=F(a);R&&R.l(M),M.forEach(S),m=z(T),k&&k.l(T),T.forEach(S),u=z(b),D&&D.l(b),b.forEach(S),g=z(E),L&&L.l(E),E.forEach(S),this.h()},h(){v(a,"id","page-content"),v(a,"class",f="flex-auto "+t[3]),v(l,"id","page"),v(l,"class",d=t[0]+" "+Et),v(o,"class","flex-auto "+Vl),v(e,"id","appShell"),v(e,"class",t[8]),v(e,"data-testid","app-shell")},m(w,E){O(w,e,E),r&&r.m(e,null),H(e,n),H(e,o),h&&h.m(o,null),H(o,s),H(o,l),y&&y.m(l,null),H(l,i),H(l,a),R&&R.m(a,null),H(l,m),k&&k.m(l,null),H(o,u),D&&D.m(o,null),H(e,g),L&&L.m(e,null),c=!0,_||(p=se(l,"scroll",t[19]),_=!0)},p(w,[E]){w[9].header?r?(r.p(w,E),E&512&&x(r,1)):(r=pt(w),r.c(),x(r,1),r.m(e,n)):r&&($(),A(r,1,1,()=>{r=null}),ee()),w[9].sidebarLeft?h?(h.p(w,E),E&512&&x(h,1)):(h=bt(w),h.c(),x(h,1),h.m(o,s)):h&&($(),A(h,1,1,()=>{h=null}),ee()),w[9].pageHeader?y?(y.p(w,E),E&512&&x(y,1)):(y=_t(w),y.c(),x(y,1),y.m(l,i)):y&&($(),A(y,1,1,()=>{y=null}),ee()),R&&R.p&&(!c||E&131072)&&Y(R,P,w,w[17],c?J(P,w[17],E,null):G(w[17]),null),(!c||E&8&&f!==(f="flex-auto "+w[3]))&&v(a,"class",f),w[9].pageFooter?k?(k.p(w,E),E&512&&x(k,1)):(k=vt(w),k.c(),x(k,1),k.m(l,null)):k&&($(),A(k,1,1,()=>{k=null}),ee()),(!c||E&1&&d!==(d=w[0]+" "+Et))&&v(l,"class",d),w[9].sidebarRight?D?(D.p(w,E),E&512&&x(D,1)):(D=yt(w),D.c(),x(D,1),D.m(o,null)):D&&($(),A(D,1,1,()=>{D=null}),ee()),w[9].footer?L?(L.p(w,E),E&512&&x(L,1)):(L=wt(w),L.c(),x(L,1),L.m(e,null)):L&&($(),A(L,1,1,()=>{L=null}),ee()),(!c||E&256)&&v(e,"class",w[8])},i(w){c||(x(r),x(h),x(y),x(R,w),x(k),x(D),x(L),c=!0)},o(w){A(r),A(h),A(y),A(R,w),A(k),A(D),A(L),c=!1},d(w){w&&S(e),r&&r.d(),h&&h.d(),y&&y.d(),R&&R.d(w),k&&k.d(),D&&D.d(),L&&L.d(),_=!1,p()}}}const Ol="w-full h-full flex flex-col overflow-hidden",Vl="w-full h-full flex overflow-hidden",Et="flex-1 overflow-x-hidden flex flex-col",Ul="flex-none overflow-x-hidden overflow-y-auto",Bl="flex-none overflow-x-hidden overflow-y-auto";function zl(t,e,n){let o,s,l,i,a,f,m,d,{$$slots:u={},$$scope:g}=e;const c=Lt(u);let{regionPage:_=""}=e,{slotHeader:p="z-10"}=e,{slotSidebarLeft:r="w-auto"}=e,{slotSidebarRight:h="w-auto"}=e,{slotPageHeader:y=""}=e,{slotPageContent:P=""}=e,{slotPageFooter:R=""}=e,{slotFooter:k=""}=e;function D(L){pe.call(this,t,L)}return t.$$set=L=>{n(20,e=he(he({},e),me(L))),"regionPage"in L&&n(0,_=L.regionPage),"slotHeader"in L&&n(10,p=L.slotHeader),"slotSidebarLeft"in L&&n(11,r=L.slotSidebarLeft),"slotSidebarRight"in L&&n(12,h=L.slotSidebarRight),"slotPageHeader"in L&&n(13,y=L.slotPageHeader),"slotPageContent"in L&&n(14,P=L.slotPageContent),"slotPageFooter"in L&&n(15,R=L.slotPageFooter),"slotFooter"in L&&n(16,k=L.slotFooter),"$$scope"in L&&n(17,g=L.$$scope)},t.$$.update=()=>{n(8,o=`${Ol} ${e.class??""}`),t.$$.dirty&1024&&n(7,s=`${p}`),t.$$.dirty&2048&&n(6,l=`${Ul} ${r}`),t.$$.dirty&4096&&n(5,i=`${Bl} ${h}`),t.$$.dirty&8192&&n(4,a=`${y}`),t.$$.dirty&16384&&n(3,f=`${P}`),t.$$.dirty&32768&&n(2,m=`${R}`),t.$$.dirty&65536&&n(1,d=`${k}`)},e=me(e),[_,d,m,f,a,i,l,s,o,c,p,r,h,y,P,R,k,g,u,D]}class Wl extends Ae{constructor(e){super(),Fe(this,e,zl,Ml,Ce,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function jl(t){let e,n=`<script nonce="%sveltekit.nonce%">(${gl.toString()})();<\/script>`,o,s,l,i,a,f,m,d,u,g,c,_,p;return{c(){e=new Vt(!1),o=Xe(),s=B(),l=C("div"),i=C("div"),a=Ye("svg"),f=Ye("path"),this.h()},l(r){const h=Ut("svelte-qwgpj2",document.head);e=Bt(h,!1),o=Xe(),h.forEach(S),s=z(r),l=I(r,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var y=F(l);i=I(y,"DIV",{class:!0});var P=F(i);a=Ge(P,"svg",{class:!0,xmlns:!0,viewBox:!0});var R=F(a);f=Ge(R,"path",{d:!0}),F(f).forEach(S),R.forEach(S),P.forEach(S),y.forEach(S),this.h()},h(){e.a=o,v(f,"d",m=t[0]?t[4].sun:t[4].moon),v(a,"class",d="lightswitch-icon "+t[1]),v(a,"xmlns","http://www.w3.org/2000/svg"),v(a,"viewBox","0 0 512 512"),v(i,"class",u="lightswitch-thumb "+t[2]),v(l,"class",g="lightswitch-track "+t[3]),v(l,"role","switch"),v(l,"aria-label","Light Switch"),v(l,"aria-checked",t[0]),v(l,"title",c="Toggle "+(t[0]===!0?"Dark":"Light")+" Mode"),v(l,"tabindex","0")},m(r,h){e.m(n,document.head),H(document.head,o),O(r,s,h),O(r,l,h),H(l,i),H(i,a),H(a,f),_||(p=[se(l,"click",t[5]),se(l,"click",t[18]),se(l,"keydown",Yl),se(l,"keydown",t[19]),se(l,"keyup",t[20]),se(l,"keypress",t[21])],_=!0)},p(r,[h]){h&1&&m!==(m=r[0]?r[4].sun:r[4].moon)&&v(f,"d",m),h&2&&d!==(d="lightswitch-icon "+r[1])&&v(a,"class",d),h&4&&u!==(u="lightswitch-thumb "+r[2])&&v(i,"class",u),h&8&&g!==(g="lightswitch-track "+r[3])&&v(l,"class",g),h&1&&v(l,"aria-checked",r[0]),h&1&&c!==(c="Toggle "+(r[0]===!0?"Dark":"Light")+" Mode")&&v(l,"title",c)},i:Ue,o:Ue,d(r){S(o),r&&e.d(),r&&S(s),r&&S(l),_=!1,zt(p)}}}const ql="cursor-pointer",Ql="aspect-square scale-[0.8] flex justify-center items-center",Xl="w-[70%] aspect-square";function Yl(t){["Enter","Space"].includes(t.code)&&(t.preventDefault(),t.currentTarget.click())}function Gl(t,e,n){let o,s,l,i,a,f,m,d;Wt(t,We,b=>n(0,d=b));let{bgLight:u="bg-surface-50"}=e,{bgDark:g="bg-surface-900"}=e,{fillLight:c="fill-surface-50"}=e,{fillDark:_="fill-surface-900"}=e,{width:p="w-12"}=e,{height:r="h-6"}=e,{ring:h="ring-[1px] ring-surface-500/30"}=e,{rounded:y="rounded-token"}=e;const P="transition-all duration-[200ms]",R={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function k(){qt(We,d=!d,d),ml(d),nt(d)}jt(()=>{"modeCurrent"in localStorage||nt(hl())});function D(b){pe.call(this,t,b)}function L(b){pe.call(this,t,b)}function w(b){pe.call(this,t,b)}function E(b){pe.call(this,t,b)}return t.$$set=b=>{n(23,e=he(he({},e),me(b))),"bgLight"in b&&n(6,u=b.bgLight),"bgDark"in b&&n(7,g=b.bgDark),"fillLight"in b&&n(8,c=b.fillLight),"fillDark"in b&&n(9,_=b.fillDark),"width"in b&&n(10,p=b.width),"height"in b&&n(11,r=b.height),"ring"in b&&n(12,h=b.ring),"rounded"in b&&n(13,y=b.rounded)},t.$$.update=()=>{t.$$.dirty&193&&n(17,o=d===!0?u:g),t.$$.dirty&193&&n(16,s=d===!0?g:u),t.$$.dirty&1&&n(15,l=d===!0?"translate-x-[100%]":""),t.$$.dirty&769&&n(14,i=d===!0?c:_),n(3,a=`${ql} ${P} ${p} ${r} ${h} ${y} ${o} ${e.class??""}`),t.$$.dirty&108544&&n(2,f=`${Ql} ${P} ${r} ${y} ${s} ${l}`),t.$$.dirty&16384&&n(1,m=`${Xl} ${i}`)},e=me(e),[d,m,f,a,R,k,u,g,c,_,p,r,h,y,i,l,s,o,D,L,w,E]}class Jl extends Ae{constructor(e){super(),Fe(this,e,Gl,jl,Ce,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Kl(t){let e;const n=t[2].default,o=X(n,t,t[3],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,l){o&&o.m(s,l),e=!0},p(s,l){o&&o.p&&(!e||l&8)&&Y(o,n,s,s[3],e?J(n,s[3],l,null):G(s[3]),null)},i(s){e||(x(o,s),e=!0)},o(s){A(o,s),e=!1},d(s){o&&o.d(s)}}}function Zl(t){let e,n,o,s,l,i,a,f,m,d,u,g,c,_,p,r,h,y,P,R,k,D,L;return{c(){e=C("div"),n=C("a"),o=C("strong"),s=ce("Imjoy"),l=B(),i=C("button"),a=C("i"),f=ce("menu"),m=B(),d=C("span"),u=ce("Explore"),g=B(),c=C("div"),_=C("nav"),p=C("ul"),r=C("li"),h=C("a"),y=C("span"),P=ce("Homepage"),R=B(),k=C("div"),this.h()},l(w){e=I(w,"DIV",{class:!0});var E=F(e);n=I(E,"A",{href:!0,class:!0});var b=F(n);o=I(b,"STRONG",{class:!0});var T=F(o);s=ue(T,"Imjoy"),T.forEach(S),b.forEach(S),E.forEach(S),l=z(w),i=I(w,"BUTTON",{class:!0});var M=F(i);a=I(M,"I",{class:!0});var j=F(a);f=ue(j,"menu"),j.forEach(S),m=z(M),d=I(M,"SPAN",{class:!0});var W=F(d);u=ue(W,"Explore"),W.forEach(S),M.forEach(S),g=z(w),c=I(w,"DIV",{class:!0,"data-popup":!0,style:!0});var U=F(c);_=I(U,"NAV",{class:!0});var V=F(_);p=I(V,"UL",{});var K=F(p);r=I(K,"LI",{});var te=F(r);h=I(te,"A",{href:!0});var fe=F(h);y=I(fe,"SPAN",{});var oe=F(y);P=ue(oe,"Homepage"),oe.forEach(S),fe.forEach(S),te.forEach(S),K.forEach(S),V.forEach(S),R=z(U),k=I(U,"DIV",{class:!0,style:!0}),F(k).forEach(S),U.forEach(S),this.h()},h(){v(o,"class","text-xl uppercase"),v(n,"href","/"),v(n,"class","text-primary-500"),v(e,"class","flex items-center"),v(a,"class","icon text-lg md:hidden"),v(d,"class","hidden md:inline-block"),v(i,"class","btn ml-2 hover:variant-soft-primary"),v(h,"href","/"),v(_,"class","list-nav"),v(k,"class","arrow bg-surface-100-800-token"),ie(k,"left","116px"),ie(k,"top","-4px"),v(c,"class","card p-4 w-60 shadow-xl"),v(c,"data-popup","goto"),ie(c,"left","-62.414px"),ie(c,"top","49.8012px"),ie(c,"opacity","0"),ie(c,"pointer-events","none"),ie(c,"display","block")},m(w,E){O(w,e,E),H(e,n),H(n,o),H(o,s),O(w,l,E),O(w,i,E),H(i,a),H(a,f),H(i,m),H(i,d),H(d,u),O(w,g,E),O(w,c,E),H(c,_),H(_,p),H(p,r),H(r,h),H(h,y),H(y,P),H(c,R),H(c,k),D||(L=Qt(cl.call(null,i,t[0])),D=!0)},p:Ue,d(w){w&&S(e),w&&S(l),w&&S(i),w&&S(g),w&&S(c),D=!1,L()}}}function Nl(t){let e,n;return e=new Jl({}),{c(){Se(e.$$.fragment)},l(o){Re(e.$$.fragment,o)},m(o,s){De(e,o,s),n=!0},i(o){n||(x(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){Pe(e,o)}}}function $l(t){let e,n;return e=new Dl({props:{background:"bg-surface-100n space-y-4 p-4 shadow-xl",$$slots:{trail:[Nl],lead:[Zl]},$$scope:{ctx:t}}}),{c(){Se(e.$$.fragment)},l(o){Re(e.$$.fragment,o)},m(o,s){De(e,o,s),n=!0},p(o,s){const l={};s&8&&(l.$$scope={dirty:s,ctx:o}),e.$set(l)},i(o){n||(x(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){Pe(e,o)}}}function en(t){let e,n,o,s;return e=new Xt({}),o=new Wl({props:{$$slots:{header:[$l],default:[Kl]},$$scope:{ctx:t}}}),{c(){Se(e.$$.fragment),n=B(),Se(o.$$.fragment)},l(l){Re(e.$$.fragment,l),n=z(l),Re(o.$$.fragment,l)},m(l,i){De(e,l,i),O(l,n,i),De(o,l,i),s=!0},p(l,[i]){const a={};i&8&&(a.$$scope={dirty:i,ctx:l}),o.$set(a)},i(l){s||(x(e.$$.fragment,l),x(o.$$.fragment,l),s=!0)},o(l){A(e.$$.fragment,l),A(o.$$.fragment,l),s=!1},d(l){Pe(e,l),l&&S(n),Pe(o,l)}}}function tn(t,e,n){let{$$slots:o={},$$scope:s}=e,{data:l}=e;l.categories,Mt.set({computePosition:fl,autoUpdate:rl,flip:tl,shift:ol,offset:ll,arrow:Kt});let i={event:"click",target:"goto"};return t.$$set=a=>{"data"in a&&n(1,l=a.data),"$$scope"in a&&n(3,s=a.$$scope)},[i,l,o,s]}class sn extends Ae{constructor(e){super(),Fe(this,e,tn,en,Ce,{data:1})}}export{sn as default};
