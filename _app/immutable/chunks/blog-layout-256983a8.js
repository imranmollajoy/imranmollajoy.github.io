import{S as ne,i as re,s as se,D as ie,k as D,q as U,a as X,l as $,m as q,r as V,h as j,c as Z,n as K,b as oe,B as E,u as Y,E as le,F as ue,G as ce,f as pe,t as de}from"./index-fd2240df.js";var ge=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},i=function(c){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,k={},a={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof f?new f(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++p}),t.__id},clone:function t(e,n){var r,s;switch(n=n||{},a.util.type(e)){case"Object":if(s=a.util.objId(e),n[s])return n[s];for(var u in r={},n[s]=r,e)e.hasOwnProperty(u)&&(r[u]=t(e[u],n));return r;case"Array":return s=a.util.objId(e),n[s]?n[s]:(r=[],n[s]=r,e.forEach(function(l,b){r[b]=t(l,n)}),r);default:return e}},getLanguage:function(t){for(;t;){var e=o.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(o,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var r="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(r))return!1;t=t.parentElement}return!!n}},languages:{plain:k,plaintext:k,text:k,txt:k,extend:function(t,e){var n=a.util.clone(a.languages[t]);for(var r in e)n[r]=e[r];return n},insertBefore:function(t,e,n,r){var s=(r=r||a.languages)[t],u={};for(var l in s)if(s.hasOwnProperty(l)){if(l==e)for(var b in n)n.hasOwnProperty(b)&&(u[b]=n[b]);n.hasOwnProperty(l)||(u[l]=s[l])}var F=r[t];return r[t]=u,a.languages.DFS(a.languages,function(S,N){N===F&&S!=t&&(this[S]=u)}),u},DFS:function t(e,n,r,s){s=s||{};var u=a.util.objId;for(var l in e)if(e.hasOwnProperty(l)){n.call(e,l,e[l],r||l);var b=e[l],F=a.util.type(b);F!=="Object"||s[u(b)]?F!=="Array"||s[u(b)]||(s[u(b)]=!0,t(b,n,l,s)):(s[u(b)]=!0,t(b,n,null,s))}}},plugins:{},highlightAll:function(t,e){a.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var r={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var s,u=0;s=r.elements[u++];)a.highlightElement(s,e===!0,r.callback)},highlightElement:function(t,e,n){var r=a.util.getLanguage(t),s=a.languages[r];a.util.setLanguage(t,r);var u=t.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(u,r);var l={element:t,language:r,grammar:s,code:t.textContent};function b(S){l.highlightedCode=S,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),n&&n.call(l.element)}if(a.hooks.run("before-sanity-check",l),(u=l.element.parentElement)&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!l.code)return a.hooks.run("complete",l),void(n&&n.call(l.element));if(a.hooks.run("before-highlight",l),l.grammar)if(e&&c.Worker){var F=new Worker(a.filename);F.onmessage=function(S){b(S.data)},F.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else b(a.highlight(l.code,l.grammar,l.language));else b(a.util.encode(l.code))},highlight:function(t,e,n){var r={code:t,grammar:e,language:n};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),f.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var r in n)e[r]=n[r];delete e.rest}var s=new g;return h(s,s.head,t),v(t,s,e,s.head,0),function(u){for(var l=[],b=u.head.next;b!==u.tail;)l.push(b.value),b=b.next;return l}(s)},hooks:{all:{},add:function(t,e){var n=a.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=a.hooks.all[t];if(n&&n.length)for(var r,s=0;r=n[s++];)r(e)}},Token:f};function f(t,e,n,r){this.type=t,this.content=e,this.alias=n,this.length=0|(r||"").length}function d(t,e,n,r){t.lastIndex=e;var s=t.exec(n);if(s&&r&&s[1]){var u=s[1].length;s.index+=u,s[0]=s[0].slice(u)}return s}function v(t,e,n,r,s,u){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var b=n[l];b=Array.isArray(b)?b:[b];for(var F=0;F<b.length;++F){if(u&&u.cause==l+","+F)return;var S=b[F],N=S.inside,J=!!S.lookbehind,Q=!!S.greedy,ee=S.alias;if(Q&&!S.pattern.global){var te=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,te+"g")}for(var H=S.pattern||S,C=r.next,w=s;C!==e.tail&&!(u&&w>=u.reach);w+=C.value.length,C=C.next){var _=C.value;if(e.length>t.length)return;if(!(_ instanceof f)){var L,M=1;if(Q){if(!(L=d(H,w,t,J))||L.index>=t.length)break;var O=L.index,ae=L.index+L[0].length,T=w;for(T+=C.value.length;O>=T;)T+=(C=C.next).value.length;if(w=T-=C.value.length,C.value instanceof f)continue;for(var P=C;P!==e.tail&&(T<ae||typeof P.value=="string");P=P.next)M++,T+=P.value.length;M--,_=t.slice(w,T),L.index-=w}else if(!(L=d(H,0,_,J)))continue;O=L.index;var B=L[0],I=_.slice(0,O),W=_.slice(O+B.length),z=w+_.length;u&&z>u.reach&&(u.reach=z);var R=C.prev;if(I&&(R=h(e,R,I),w+=I.length),A(e,R,M),C=h(e,R,new f(l,N?a.tokenize(B,N):B,ee,B)),W&&h(e,C,W),M>1){var G={cause:l+","+F,reach:z};v(t,e,n,C.prev,w,G),u&&G.reach>u.reach&&(u.reach=G.reach)}}}}}}function g(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function h(t,e,n){var r=e.next,s={value:n,prev:e,next:r};return e.next=s,r.prev=s,t.length++,s}function A(t,e,n){for(var r=e.next,s=0;s<n&&r!==t.tail;s++)r=r.next;e.next=r,r.prev=e,t.length-=s}if(c.Prism=a,f.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(F){r+=t(F,n)}),r}var s={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(s.classes,u):s.classes.push(u)),a.hooks.run("wrap",s);var l="";for(var b in s.attributes)l+=" "+b+'="'+(s.attributes[b]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+l+">"+s.content+"</"+s.tag+">"},!c.document)return c.addEventListener&&(a.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,r=e.code,s=e.immediateClose;c.postMessage(a.highlight(r,a.languages[n],n)),s&&c.close()},!1)),a;var y=a.util.currentScript();function m(){a.manual||a.highlightAll()}if(y&&(a.filename=y.src,y.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var x=document.readyState;x==="loading"||x==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return a}(ge);typeof module<"u"&&module.exports&&(module.exports=i),typeof global<"u"&&(global.Prism=i);i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(c,o){var p={};p["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[o]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var k={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};k["language-"+o]={pattern:/[\s\S]+/,inside:i.languages[o]};var a={};a[c]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:k},i.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(c,o){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+c+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:i.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml;(function(c){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+o.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var p=c.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))})(i);i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),i.languages.js=i.languages.javascript;(function(){if(typeof i<"u"&&typeof document<"u"){var c=[],o={},p=function(){};i.plugins.toolbar={};var k=i.plugins.toolbar.registerButton=function(f,d){var v;v=typeof d=="function"?d:function(g){var h;return typeof d.onClick=="function"?((h=document.createElement("button")).type="button",h.addEventListener("click",function(){d.onClick.call(this,g)})):typeof d.url=="string"?(h=document.createElement("a")).href=d.url:h=document.createElement("span"),d.className&&h.classList.add(d.className),h.textContent=d.text,h},f in o?console.warn('There is a button with the key "'+f+'" registered already.'):c.push(o[f]=v)},a=i.plugins.toolbar.hook=function(f){var d=f.element.parentNode;if(d&&/pre/i.test(d.nodeName)&&!d.parentNode.classList.contains("code-toolbar")){var v=document.createElement("div");v.classList.add("code-toolbar"),d.parentNode.insertBefore(v,d),v.appendChild(d);var g=document.createElement("div");g.classList.add("toolbar");var h=c,A=function(y){for(;y;){var m=y.getAttribute("data-toolbar-order");if(m!=null)return(m=m.trim()).length?m.split(/\s*,\s*/g):[];y=y.parentElement}}(f.element);A&&(h=A.map(function(y){return o[y]||p})),h.forEach(function(y){var m=y(f);if(m){var x=document.createElement("div");x.classList.add("toolbar-item"),x.appendChild(m),g.appendChild(x)}}),v.appendChild(g)}};k("label",function(f){var d=f.element.parentNode;if(d&&/pre/i.test(d.nodeName)&&d.hasAttribute("data-label")){var v,g,h=d.getAttribute("data-label");try{g=document.querySelector("template#"+h)}catch{}return g?v=g.content:(d.hasAttribute("data-url")?(v=document.createElement("a")).href=d.getAttribute("data-url"):v=document.createElement("span"),v.textContent=h),v}}),i.hooks.add("complete",a)}})();(function(){if(typeof i<"u"&&typeof document<"u")if(i.plugins.toolbar){var c={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",sh:"Shell",basic:"BASIC",bbcode:"BBcode",bbj:"BBj",bnf:"BNF",rbnf:"RBNF",bqn:"BQN",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cilkc:"Cilk/C","cilk-c":"Cilk/C",cilkcpp:"Cilk/C++","cilk-cpp":"Cilk/C++",cilk:"Cilk/C++",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (\u041A\u0443\u041C\u0438\u0440)",kum:"KuMir (\u041A\u0443\u041C\u0438\u0440)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",metafont:"METAFONT",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",res:"ReScript",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (SCSS)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wgsl:"WGSL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};i.plugins.toolbar.registerButton("show-language",function(o){var p=o.element.parentNode;if(p&&/pre/i.test(p.nodeName)){var k,a=p.getAttribute("data-language")||c[o.language]||((k=o.language)?(k.substring(0,1).toUpperCase()+k.substring(1)).replace(/s(?=cript)/,"S"):k);if(a){var f=document.createElement("span");return f.textContent=a,f}}})}else console.warn("Show Languages plugin loaded before Toolbar plugin.")})();(function(){function c(o){var p=document.createElement("textarea");p.value=o.getText(),p.style.top="0",p.style.left="0",p.style.position="fixed",document.body.appendChild(p),p.focus(),p.select();try{var k=document.execCommand("copy");setTimeout(function(){k?o.success():o.error()},1)}catch(a){setTimeout(function(){o.error(a)},1)}document.body.removeChild(p)}typeof i<"u"&&typeof document<"u"&&(i.plugins.toolbar?i.plugins.toolbar.registerButton("copy-to-clipboard",function(o){var p=o.element,k=function(g){var h={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var A in h){for(var y="data-prismjs-"+A,m=g;m&&!m.hasAttribute(y);)m=m.parentElement;m&&(h[A]=m.getAttribute(y))}return h}(p),a=document.createElement("button");a.className="copy-to-clipboard-button",a.setAttribute("type","button");var f=document.createElement("span");return a.appendChild(f),v("copy"),function(g,h){g.addEventListener("click",function(){(function(A){navigator.clipboard?navigator.clipboard.writeText(A.getText()).then(A.success,function(){c(A)}):c(A)})(h)})}(a,{getText:function(){return p.textContent},success:function(){v("copy-success"),d()},error:function(){v("copy-error"),setTimeout(function(){(function(g){window.getSelection().selectAllChildren(g)})(p)},1),d()}}),a;function d(){setTimeout(function(){v("copy")},k["copy-timeout"])}function v(g){f.textContent=k[g],a.setAttribute("data-copy-state",g)}}):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))})();function me(c){let o,p,k,a,f,d,v,g,h;const A=c[4].default,y=ie(A,c,c[3],null);return{c(){o=D("section"),p=D("h1"),k=U(c[0]),a=X(),f=D("p"),d=U(c[1]),v=X(),g=D("main"),y&&y.c(),this.h()},l(m){o=$(m,"SECTION",{class:!0});var x=q(o);p=$(x,"H1",{});var t=q(p);k=V(t,c[0]),t.forEach(j),a=Z(x),f=$(x,"P",{});var e=q(f);d=V(e,c[1]),e.forEach(j),v=Z(x),g=$(x,"MAIN",{class:!0});var n=q(g);y&&y.l(n),n.forEach(j),x.forEach(j),this.h()},h(){K(g,"class","svelte-mlbt6q"),K(o,"class","container")},m(m,x){oe(m,o,x),E(o,p),E(p,k),E(o,a),E(o,f),E(f,d),E(o,v),E(o,g),y&&y.m(g,null),h=!0},p(m,[x]){(!h||x&1)&&Y(k,m[0]),(!h||x&2)&&Y(d,m[1]),y&&y.p&&(!h||x&8)&&le(y,A,m,m[3],h?ce(A,m[3],x,null):ue(m[3]),null)},i(m){h||(pe(y,m),h=!0)},o(m){de(y,m),h=!1},d(m){m&&j(o),y&&y.d(m)}}}function fe(c,o,p){let{$$slots:k={},$$scope:a}=o,{name:f}=o,{date:d}=o,{featuredImg:v}=o;return c.$$set=g=>{"name"in g&&p(0,f=g.name),"date"in g&&p(1,d=g.date),"featuredImg"in g&&p(2,v=g.featuredImg),"$$scope"in g&&p(3,a=g.$$scope)},[f,d,v,a,k]}class be extends ne{constructor(o){super(),re(this,o,fe,me,se,{name:0,date:1,featuredImg:2})}}export{be as B};
