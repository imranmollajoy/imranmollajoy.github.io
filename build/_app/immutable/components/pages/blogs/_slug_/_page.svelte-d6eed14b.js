import{S as ce,i as pe,s as de,v as ee,a as J,k as j,q as te,w as ae,c as Q,l as N,m as M,r as ne,h as T,n as _,x as re,b as Z,G as E,u as se,f as ie,t as oe,y as le}from"../../../../chunks/index-3faacf74.js";import{B as ge}from"../../../../chunks/Breadcrumb-45a279c3.js";import{S as me}from"../../../../chunks/SEO-52394ce0.js";var fe=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},o=function(p){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,g=0,f={},s={manual:p.Prism&&p.Prism.manual,disableWorkerMessageHandler:p.Prism&&p.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof m?new m(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++g}),t.__id},clone:function t(e,r){var a,n;switch(r=r||{},s.util.type(e)){case"Object":if(n=s.util.objId(e),r[n])return r[n];for(var u in a={},r[n]=a,e)e.hasOwnProperty(u)&&(a[u]=t(e[u],r));return a;case"Array":return n=s.util.objId(e),r[n]?r[n]:(a=[],r[n]=a,e.forEach(function(l,i){a[i]=t(l,r)}),a);default:return e}},getLanguage:function(t){for(;t;){var e=c.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(c,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var a="no-"+e;t;){var n=t.classList;if(n.contains(e))return!0;if(n.contains(a))return!1;t=t.parentElement}return!!r}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(t,e){var r=s.util.clone(s.languages[t]);for(var a in e)r[a]=e[a];return r},insertBefore:function(t,e,r,a){var n=(a=a||s.languages)[t],u={};for(var l in n)if(n.hasOwnProperty(l)){if(l==e)for(var i in r)r.hasOwnProperty(i)&&(u[i]=r[i]);r.hasOwnProperty(l)||(u[l]=n[l])}var v=a[t];return a[t]=u,s.languages.DFS(s.languages,function(x,C){C===v&&x!=t&&(this[x]=u)}),u},DFS:function t(e,r,a,n){n=n||{};var u=s.util.objId;for(var l in e)if(e.hasOwnProperty(l)){r.call(e,l,e[l],a||l);var i=e[l],v=s.util.type(i);v!=="Object"||n[u(i)]?v!=="Array"||n[u(i)]||(n[u(i)]=!0,t(i,r,l,n)):(n[u(i)]=!0,t(i,r,null,n))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var a={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),s.hooks.run("before-all-elements-highlight",a);for(var n,u=0;n=a.elements[u++];)s.highlightElement(n,e===!0,a.callback)},highlightElement:function(t,e,r){var a=s.util.getLanguage(t),n=s.languages[a];s.util.setLanguage(t,a);var u=t.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(u,a);var l={element:t,language:a,grammar:n,code:t.textContent};function i(x){l.highlightedCode=x,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),r&&r.call(l.element)}if(s.hooks.run("before-sanity-check",l),(u=l.element.parentElement)&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!l.code)return s.hooks.run("complete",l),void(r&&r.call(l.element));if(s.hooks.run("before-highlight",l),l.grammar)if(e&&p.Worker){var v=new Worker(s.filename);v.onmessage=function(x){i(x.data)},v.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else i(s.highlight(l.code,l.grammar,l.language));else i(s.util.encode(l.code))},highlight:function(t,e,r){var a={code:t,grammar:e,language:r};if(s.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),m.stringify(s.util.encode(a.tokens),a.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var a in r)e[a]=r[a];delete e.rest}var n=new y;return b(n,n.head,t),h(t,n,e,n.head,0),function(u){for(var l=[],i=u.head.next;i!==u.tail;)l.push(i.value),i=i.next;return l}(n)},hooks:{all:{},add:function(t,e){var r=s.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=s.hooks.all[t];if(r&&r.length)for(var a,n=0;a=r[n++];)a(e)}},Token:m};function m(t,e,r,a){this.type=t,this.content=e,this.alias=r,this.length=0|(a||"").length}function d(t,e,r,a){t.lastIndex=e;var n=t.exec(r);if(n&&a&&n[1]){var u=n[1].length;n.index+=u,n[0]=n[0].slice(u)}return n}function h(t,e,r,a,n,u){for(var l in r)if(r.hasOwnProperty(l)&&r[l]){var i=r[l];i=Array.isArray(i)?i:[i];for(var v=0;v<i.length;++v){if(u&&u.cause==l+","+v)return;var x=i[v],C=x.inside,R=!!x.lookbehind,B=!!x.greedy,q=x.alias;if(B&&!x.pattern.global){var W=x.pattern.toString().match(/[imsuy]*$/)[0];x.pattern=RegExp(x.pattern.source,W+"g")}for(var K=x.pattern||x,F=a.next,L=n;F!==e.tail&&!(u&&L>=u.reach);L+=F.value.length,F=F.next){var O=F.value;if(e.length>t.length)return;if(!(O instanceof m)){var $,z=1;if(B){if(!($=d(K,L,t,R))||$.index>=t.length)break;var I=$.index,ue=$.index+$[0].length,P=L;for(P+=F.value.length;I>=P;)P+=(F=F.next).value.length;if(L=P-=F.value.length,F.value instanceof m)continue;for(var D=F;D!==e.tail&&(P<ue||typeof D.value=="string");D=D.next)z++,P+=D.value.length;z--,O=t.slice(L,P),$.index-=L}else if(!($=d(K,0,O,R)))continue;I=$.index;var G=$[0],U=O.slice(0,I),Y=O.slice(I+G.length),X=L+O.length;u&&X>u.reach&&(u.reach=X);var H=F.prev;if(U&&(H=b(e,H,U),L+=U.length),S(e,H,z),F=b(e,H,new m(l,C?s.tokenize(G,C):G,q,G)),Y&&b(e,F,Y),z>1){var V={cause:l+","+v,reach:X};h(t,e,r,F.prev,L,V),u&&V.reach>u.reach&&(u.reach=V.reach)}}}}}}function y(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function b(t,e,r){var a=e.next,n={value:r,prev:e,next:a};return e.next=n,a.prev=n,t.length++,n}function S(t,e,r){for(var a=e.next,n=0;n<r&&a!==t.tail;n++)a=a.next;e.next=a,a.prev=e,t.length-=n}if(p.Prism=s,m.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(v){a+=t(v,r)}),a}var n={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(n.classes,u):n.classes.push(u)),s.hooks.run("wrap",n);var l="";for(var i in n.attributes)l+=" "+i+'="'+(n.attributes[i]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+l+">"+n.content+"</"+n.tag+">"},!p.document)return p.addEventListener&&(s.disableWorkerMessageHandler||p.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,a=e.code,n=e.immediateClose;p.postMessage(s.highlight(a,s.languages[r],r)),n&&p.close()},!1)),s;var A=s.util.currentScript();function k(){s.manual||s.highlightAll()}if(A&&(s.filename=A.src,A.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return s}(fe);typeof module<"u"&&module.exports&&(module.exports=o),typeof global<"u"&&(global.Prism=o);o.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},o.languages.markup.tag.inside["attr-value"].inside.entity=o.languages.markup.entity,o.languages.markup.doctype.inside["internal-subset"].inside=o.languages.markup,o.hooks.add("wrap",function(p){p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))}),Object.defineProperty(o.languages.markup.tag,"addInlined",{value:function(p,c){var g={};g["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:o.languages[c]},g.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:g}};f["language-"+c]={pattern:/[\s\S]+/,inside:o.languages[c]};var s={};s[p]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:f},o.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(o.languages.markup.tag,"addAttribute",{value:function(p,c){o.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+p+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:o.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),o.languages.html=o.languages.markup,o.languages.mathml=o.languages.markup,o.languages.svg=o.languages.markup,o.languages.xml=o.languages.extend("markup",{}),o.languages.ssml=o.languages.xml,o.languages.atom=o.languages.xml,o.languages.rss=o.languages.xml;(function(p){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;p.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+c.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},p.languages.css.atrule.inside.rest=p.languages.css;var g=p.languages.markup;g&&(g.tag.addInlined("style","css"),g.tag.addAttribute("style","css"))})(o);o.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};o.languages.javascript=o.languages.extend("clike",{"class-name":[o.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),o.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,o.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:o.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:o.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:o.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:o.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:o.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),o.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:o.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),o.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),o.languages.markup&&(o.languages.markup.tag.addInlined("script","javascript"),o.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),o.languages.js=o.languages.javascript;(function(){if(typeof o<"u"&&typeof document<"u"){var p=[],c={},g=function(){};o.plugins.toolbar={};var f=o.plugins.toolbar.registerButton=function(m,d){var h;h=typeof d=="function"?d:function(y){var b;return typeof d.onClick=="function"?((b=document.createElement("button")).type="button",b.addEventListener("click",function(){d.onClick.call(this,y)})):typeof d.url=="string"?(b=document.createElement("a")).href=d.url:b=document.createElement("span"),d.className&&b.classList.add(d.className),b.textContent=d.text,b},m in c?console.warn('There is a button with the key "'+m+'" registered already.'):p.push(c[m]=h)},s=o.plugins.toolbar.hook=function(m){var d=m.element.parentNode;if(d&&/pre/i.test(d.nodeName)&&!d.parentNode.classList.contains("code-toolbar")){var h=document.createElement("div");h.classList.add("code-toolbar"),d.parentNode.insertBefore(h,d),h.appendChild(d);var y=document.createElement("div");y.classList.add("toolbar");var b=p,S=function(A){for(;A;){var k=A.getAttribute("data-toolbar-order");if(k!=null)return(k=k.trim()).length?k.split(/\s*,\s*/g):[];A=A.parentElement}}(m.element);S&&(b=S.map(function(A){return c[A]||g})),b.forEach(function(A){var k=A(m);if(k){var w=document.createElement("div");w.classList.add("toolbar-item"),w.appendChild(k),y.appendChild(w)}}),h.appendChild(y)}};f("label",function(m){var d=m.element.parentNode;if(d&&/pre/i.test(d.nodeName)&&d.hasAttribute("data-label")){var h,y,b=d.getAttribute("data-label");try{y=document.querySelector("template#"+b)}catch{}return y?h=y.content:(d.hasAttribute("data-url")?(h=document.createElement("a")).href=d.getAttribute("data-url"):h=document.createElement("span"),h.textContent=b),h}}),o.hooks.add("complete",s)}})();(function(){if(typeof o<"u"&&typeof document<"u")if(o.plugins.toolbar){var p={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",sh:"Shell",basic:"BASIC",bbcode:"BBcode",bbj:"BBj",bnf:"BNF",rbnf:"RBNF",bqn:"BQN",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cilkc:"Cilk/C","cilk-c":"Cilk/C",cilkcpp:"Cilk/C++","cilk-cpp":"Cilk/C++",cilk:"Cilk/C++",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (\u041A\u0443\u041C\u0438\u0440)",kum:"KuMir (\u041A\u0443\u041C\u0438\u0440)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",metafont:"METAFONT",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",res:"ReScript",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (SCSS)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wgsl:"WGSL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};o.plugins.toolbar.registerButton("show-language",function(c){var g=c.element.parentNode;if(g&&/pre/i.test(g.nodeName)){var f,s=g.getAttribute("data-language")||p[c.language]||((f=c.language)?(f.substring(0,1).toUpperCase()+f.substring(1)).replace(/s(?=cript)/,"S"):f);if(s){var m=document.createElement("span");return m.textContent=s,m}}})}else console.warn("Show Languages plugin loaded before Toolbar plugin.")})();(function(){function p(c){var g=document.createElement("textarea");g.value=c.getText(),g.style.top="0",g.style.left="0",g.style.position="fixed",document.body.appendChild(g),g.focus(),g.select();try{var f=document.execCommand("copy");setTimeout(function(){f?c.success():c.error()},1)}catch(s){setTimeout(function(){c.error(s)},1)}document.body.removeChild(g)}typeof o<"u"&&typeof document<"u"&&(o.plugins.toolbar?o.plugins.toolbar.registerButton("copy-to-clipboard",function(c){var g=c.element,f=function(y){var b={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var S in b){for(var A="data-prismjs-"+S,k=y;k&&!k.hasAttribute(A);)k=k.parentElement;k&&(b[S]=k.getAttribute(A))}return b}(g),s=document.createElement("button");s.className="copy-to-clipboard-button",s.setAttribute("type","button");var m=document.createElement("span");return s.appendChild(m),h("copy"),function(y,b){y.addEventListener("click",function(){(function(S){navigator.clipboard?navigator.clipboard.writeText(S.getText()).then(S.success,function(){p(S)}):p(S)})(b)})}(s,{getText:function(){return g.textContent},success:function(){h("copy-success"),d()},error:function(){h("copy-error"),setTimeout(function(){(function(y){window.getSelection().selectAllChildren(y)})(g)},1),d()}}),s;function d(){setTimeout(function(){h("copy")},f["copy-timeout"])}function h(y){m.textContent=f[y],s.setAttribute("data-copy-state",y)}}):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))})();function he(p){let c,g,f,s,m,d,h,y,b=p[0].name+"",S,A,k,w,t=p[0].category+"",e,r,a,n,u=p[0].content+"",l;return c=new me({props:{title:p[0].name,article:!0}}),f=new ge({props:{links:p[1]}}),{c(){ee(c.$$.fragment),g=J(),ee(f.$$.fragment),s=J(),m=j("div"),d=j("main"),h=j("article"),y=j("h1"),S=te(b),A=J(),k=j("a"),w=j("p"),e=te(t),a=J(),n=j("div"),this.h()},l(i){ae(c.$$.fragment,i),g=Q(i),ae(f.$$.fragment,i),s=Q(i),m=N(i,"DIV",{class:!0});var v=M(m);d=N(v,"MAIN",{class:!0});var x=M(d);h=N(x,"ARTICLE",{class:!0});var C=M(h);y=N(C,"H1",{class:!0});var R=M(y);S=ne(R,b),R.forEach(T),A=Q(C),k=N(C,"A",{href:!0});var B=M(k);w=N(B,"P",{class:!0});var q=M(w);e=ne(q,t),q.forEach(T),B.forEach(T),a=Q(C),n=N(C,"DIV",{class:!0});var W=M(n);W.forEach(T),C.forEach(T),x.forEach(T),v.forEach(T),this.h()},h(){_(y,"class","toc-exclude"),_(w,"class","badge clickable"),_(k,"href",r=`/blogs/categories/${p[0].category}`),_(n,"class","post-body svelte-1uam6sk"),_(h,"class","svelte-1uam6sk"),_(d,"class","container"),_(m,"class","row svelte-1uam6sk")},m(i,v){re(c,i,v),Z(i,g,v),re(f,i,v),Z(i,s,v),Z(i,m,v),E(m,d),E(d,h),E(h,y),E(y,S),E(h,A),E(h,k),E(k,w),E(w,e),E(h,a),E(h,n),n.innerHTML=u,l=!0},p(i,[v]){const x={};v&1&&(x.title=i[0].name),c.$set(x),(!l||v&1)&&b!==(b=i[0].name+"")&&se(S,b),(!l||v&1)&&t!==(t=i[0].category+"")&&se(e,t),(!l||v&1&&r!==(r=`/blogs/categories/${i[0].category}`))&&_(k,"href",r),(!l||v&1)&&u!==(u=i[0].content+"")&&(n.innerHTML=u)},i(i){l||(ie(c.$$.fragment,i),ie(f.$$.fragment,i),l=!0)},o(i){oe(c.$$.fragment,i),oe(f.$$.fragment,i),l=!1},d(i){le(c,i),i&&T(g),le(f,i),i&&T(s),i&&T(m)}}}function be(p,c,g){let{data:f}=c,s=[{path:"/",text:"Home"},{path:"/blogs",text:"Blogs"},{path:"/blogs/"+f.slug,text:f.name}];return p.$$set=m=>{"data"in m&&g(0,f=m.data)},[f,s]}class xe extends ce{constructor(c){super(),pe(this,c,be,he,de,{data:0})}}export{xe as default};