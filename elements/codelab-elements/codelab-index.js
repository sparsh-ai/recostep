(function(){'use strict';var h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var m;a:{var ba={F:!0},ca={};try{ca.__proto__=ba;m=ca.F;break a}catch(a){}m=!1}k=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=k;
function ea(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}var fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ha(){ha=function(){};h.Symbol||(h.Symbol=ia)}
var ia=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function n(){ha();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&fa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(this)}});n=function(){}}function ja(a){var b=0;return ka(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ka(a){n();a={next:a};a[h.Symbol.iterator]=function(){return this};return a}
function p(a){if(!(a instanceof Array)){n();var b=a[Symbol.iterator];a=b?b.call(a):ja(a);for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var q=this;function r(a){return"string"==typeof a}function t(){}
function u(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function v(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var la="closure_uid_"+(1E9*Math.random()>>>0),ma=0;function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=na:w=oa;return w.apply(null,arguments)}var pa=Date.now||function(){return+new Date};
function x(a,b){function c(){}c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.M=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var qa;var ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function sa(){};function ta(){}x(ta,sa);function y(a){this.j=a}x(y,ta);y.prototype.set=function(a,b){try{this.j.setItem(a,b)}catch(c){if(0==this.j.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};y.prototype.get=function(a){a=this.j.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};y.prototype.key=function(a){return this.j.key(a)};function ua(){var a=null;try{a=window.localStorage||null}catch(b){}this.j=a}x(ua,y);var va=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function z(a){if(!wa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Aa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ba,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ca,"&#0;"));return a}
var xa=/&/g,ya=/</g,za=/>/g,Aa=/"/reco-step/g,Ba=/'/g,Ca=/\x00/g,wa=/[\x00&<>"']/;function A(a,b){return a<b?-1:a>b?1:0};function Da(a,b,c){for(var d in a)b.call(c,a[d],d,a)};function B(){this.a="";this.v=Ea}B.prototype.i=!0;B.prototype.c=function(){return this.a};B.prototype.b=function(){return 1};var Fa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ea={};function Ga(a){var b=new B;b.a=a;return b}Ga("about:blank");var C;a:{var Ha=q.navigator;if(Ha){var Ia=Ha.userAgent;if(Ia){C=Ia;break a}}C=""};function D(){this.a=Ja}D.prototype.b=function(){return null};D.prototype.i=!0;D.prototype.c=function(){return""};var Ja={};var E={},Ka={};function F(){throw Error("Do not instantiate directly");}F.prototype.B=null;F.prototype.toString=function(){return this.u};function G(){F.call(this)}x(G,F);G.prototype.s=E;function H(a){H[" "](a);return a}H[" "]=t;var La=-1!=C.indexOf("Opera"),I=-1!=C.indexOf("Trident")||-1!=C.indexOf("MSIE"),Ma=-1!=C.indexOf("Edge"),Na=-1!=C.indexOf("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&-1==C.indexOf("Edge"))&&!(-1!=C.indexOf("Trident")||-1!=C.indexOf("MSIE"))&&-1==C.indexOf("Edge"),Oa=-1!=C.toLowerCase().indexOf("webkit")&&-1==C.indexOf("Edge");function Sa(){var a=q.document;return a?a.documentMode:void 0}var J;
a:{var K="",L=function(){var a=C;if(Na)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ma)return/Edge\/([\d\.]+)/.exec(a);if(I)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Oa)return/WebKit\/(\S+)/.exec(a);if(La)return/(?:Version)[ \/]?(\S+)/.exec(a)}();L&&(K=L?L[1]:"");if(I){var Ta=Sa();if(null!=Ta&&Ta>parseFloat(K)){J=String(Ta);break a}}J=K}var Ua={},Va;var Wa=q.document;Va=Wa&&I?Sa()||("CSS1Compat"==Wa.compatMode?parseInt(J,10):5):void 0;function Xa(a){if(null!=a)switch(a.B){case 1:return 1;case -1:return-1;case 0:return 0}return null}function M(a){return null!=a&&a.s===E?a:a instanceof D?N(a instanceof D&&a.constructor===D&&a.a===Ja?"":"type_error:SafeHtml",a.b()):N(z(String(String(a))),Xa(a))}var N=function(a){function b(a){this.u=a}b.prototype=a.prototype;return function(a,d){a=new b(String(a));void 0!==d&&(a.B=d);return a}}(G);
function O(a){return null!=a&&a.s===E?String(String(a.u).replace(Ya,"").replace(Za,"&lt;")).replace($a,ab):z(String(a))}var bb={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/reco-step/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function ab(a){return bb[a]}
var $a=/[\x00\x22\x27\x3c\x3e]/g,Ya=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Za=/</g;function cb(a){var b=a.sort;a=a.H;b='<div id="sort-by-tabs" class="sort-by-inner"><a href="#" sort="alpha"'+("alpha"==b?" selected":"")+'>A-Z</a><a href="#" sort="recent"'+("recent"==b?" selected":"")+'>Recent</a><a href="#" sort="duration"'+("duration"==b?" selected":"")+'>Duration</a></div><div class="sort-by-inner"><select id="codelab-categories"><option value="">Category</option>';for(var c=Math.max(0,Math.ceil(a.length)),d=0;d<c;d++){var e=d;b+='<option value="'+O(a[e])+'">'+M(a[e])+"</option>"}return N(b+
"</select></div>")};var db=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});function eb(a,b){if(db())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=b};function fb(){this.a=q.document||document};function gb(a,b){b=a(b||hb,void 0,void 0);a=(qa||(qa=new fb)).a.createElement("DIV");b=ib(b);eb(a,b);1==a.childNodes.length&&(b=a.firstChild,1==b.nodeType&&(a=b));return a}function ib(a){if(a instanceof F){if(a.s===E)return a.u;if(a.s===Ka)return z(a.u)}return"zSoyz"}var hb={};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function P(){var a=HTMLElement.call(this)||this;a.j=new ua;return a}ea(P,HTMLElement);P.prototype.connectedCallback=function(){this.hasAttribute("sort")?jb(this):this.setAttribute("sort","alpha");(this.hasAttribute("filter")||this.hasAttribute("category")||this.hasAttribute("tags"))&&kb(this)};P.prototype.connectedCallback=P.prototype.connectedCallback;P.prototype.attributeChangedCallback=function(a){switch(a){case "sort":jb(this);break;case "filter":case "category":case "tags":kb(this)}};
P.prototype.attributeChangedCallback=P.prototype.attributeChangedCallback;
function jb(a){var b=a.getAttribute("sort")||"alpha",c=[].concat(p(a.querySelectorAll(".card")));if(!(2>c.length)){switch(b){case "duration":c.sort(a.i.bind(a));break;case "recent":c.sort(a.c.bind(a));break;default:b="alpha",c.sort(a.b.bind(a))}c.forEach(function(b){return a.appendChild(b)});c=new URL(document.location.toString());b&&"alpha"!==b?c.searchParams.set("sort",b):c.searchParams.delete("sort");lb(a);b=c.pathname+c.search;window.history.replaceState({path:b},document.title,b)}}
function lb(a){a.setAttribute("num",a.querySelectorAll(".card:not([hidden])").length)}P.prototype.i=function(a,b){if(!a||!b)return 0;var c=parseFloat(a.getAttribute("duration"))||0,d=parseFloat(b.getAttribute("duration"))||0;c-=d;return 0===c?this.c(a,b):c};P.prototype.c=function(a,b){if(!a||!b)return 0;var c=new Date(a.getAttribute("updated")||0);c=(new Date(b.getAttribute("updated")||0)).getTime()-c.getTime();return 0===c?this.b(a,b):c};
P.prototype.b=function(a,b){if(!a||!b)return 0;a=a.getAttribute("title");b=b.getAttribute("title");return a<b?-1:a>b?1:0};
function kb(a){var b=mb(a.getAttribute("filter")),c=Q((a.getAttribute("tags")||"").split(",")),d=Q((a.getAttribute("category")||"").split(","));[].concat(p(a.querySelectorAll(".card"))).forEach(function(a){var e=mb(a.getAttribute("title")),f=Q((a.getAttribute("category")||"").split(",")),Sb=Q((a.getAttribute("tags")||"").split(",")),Pa=!0,Qa=!0,Ra=!0;b&&(Pa=-1!==e.indexOf(b));c.length&&(Qa=nb(Sb,c));d.length&&(Ra=nb(f,d));Pa&&Qa&&Ra?a.removeAttribute("hidden"):a.setAttribute("hidden","")});var e=
new URL(document.location.toString());c.length?e.searchParams.set("tags",c.join(",")):e.searchParams.delete("tags");d.length?e.searchParams.set("cat",d.join(",")):e.searchParams.delete("cat");b?e.searchParams.set("filter",b):e.searchParams.delete("filter");lb(a);a=e.pathname+e.search;window.history.replaceState({path:a},document.title,a)}function nb(a,b){for(var c=0;c<a.length;c++)if(b.includes(a[c]))return!0;return!1}
function mb(a){return(a||"").trim().toLowerCase().replace("\n","").replace(/\s+/g," ")}function Q(a){a=a||[];var b=[];a.forEach(function(a){(a=mb(a))&&b.push(a)});return b.sort()}
P.prototype.G=function(a){var b=(a.getAttribute("category")||"").toLowerCase().replace(/\s+/g,"-").replace(/--+/g,"-").trim().split(",").shift();var c=a.getAttribute("title")||"",d=parseInt(a.getAttribute("duration"),10)||0,e;(e=a.getAttribute("updated"))?(e=new Date(e),e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[e.getMonth()]+" "+e.getUTCDate()+", "+e.getFullYear()):e="";e=e||"";a.getAttribute("tags");var f=a.getAttribute("authors")||"";b=N('<div class="card-header '+O(b)+'-bg"><span class="category-icon '+
O(b)+'-icon"></span><span class="card-duration">'+(d?'<img src="/reco-step//codelabs.developers.google.com/images/schedule.svg">'+M(d)+" min":"")+'</span></div><div class="card-description">'+M(c)+'</div><div class="card-footer '+O(b)+'-footer"><span class="card-start '+O(b)+'-start">Start</span><span class="card-updated">'+(f?"<div>"+M(f)+"</div>":"")+(e?"<div>Updated "+M(e)+"</div>":"")+"</span></div>");eb(a,ib(b));a.classList.add("card");b=new URL(a.href,document.location.origin);b.searchParams.has("index")||
b.searchParams.set("index",document.location.pathname);b=b.href;b instanceof B||b instanceof B||(b="object"==typeof b&&b.i?b.c():String(b),Fa.test(b)||(b="about:invalid#zClosurez"),b=Ga(b));a.href=b instanceof B&&b.constructor===B&&b.v===Ea?b.a:"type_error:SafeUrl";if(b=a.getAttribute("id"))b=this.j.get("progress_"+b),c=a.getAttribute("steps"),b&&c&&a.setAttribute("progress",(parseFloat(b)/parseFloat(c)-1).toFixed(2));this.appendChild(a)};P.prototype.addCard=P.prototype.G;
h.Object.defineProperties(P,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return["sort","filter","category","tags"]}}});try{window.customElements.define("google-codelab-index-cards",P)}catch(a){console.warn("googlecodelabs.CodelabIndex.Cards",a)};function R(){0!=ob&&(this[la]||(this[la]=++ma))}var ob=0;var pb;(pb=!I)||(pb=9<=Number(Va));var qb=pb,rb;
if(rb=I){var sb;if(Object.prototype.hasOwnProperty.call(Ua,"9"))sb=Ua["9"];else{for(var S=0,tb=va(String(J)).split("."),ub=va("9").split("."),vb=Math.max(tb.length,ub.length),T=0;0==S&&T<vb;T++){var wb=tb[T]||"",xb=ub[T]||"";do{var U=/(\d*)(\D*)(.*)/.exec(wb)||["","","",""],V=/(\d*)(\D*)(.*)/.exec(xb)||["","","",""];if(0==U[0].length&&0==V[0].length)break;S=A(0==U[1].length?0:parseInt(U[1],10),0==V[1].length?0:parseInt(V[1],10))||A(0==U[2].length,0==V[2].length)||A(U[2],V[2]);wb=U[3];xb=V[3]}while(0==
S)}sb=Ua["9"]=0<=S}rb=!sb}var yb=rb,zb=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});q.addEventListener("test",t,b);q.removeEventListener("test",t,b);return a}();function Ab(a,b){this.type=a;this.a=this.target=b}Ab.prototype.preventDefault=function(){};function W(a,b){Ab.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.b=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Na){a:{try{H(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:
"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;
this.pointerId=a.pointerId||0;this.pointerType=r(a.pointerType)?a.pointerType:Bb[a.pointerType]||"";this.b=a;a.defaultPrevented&&this.preventDefault()}}x(W,Ab);var Bb={2:"touch",3:"pen",4:"mouse"};W.prototype.preventDefault=function(){W.D.preventDefault.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,yb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Cb="closure_listenable_"+(1E6*Math.random()|0),Db=0;function Eb(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.a=e;this.key=++Db;this.o=this.A=!1}function Fb(a){a.o=!0;a.listener=null;a.proxy=null;a.src=null;a.a=null};function Gb(a){this.src=a;this.a={};this.b=0}Gb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g;a:{for(g=0;g<a.length;++g){var l=a[g];if(!l.o&&l.listener==b&&l.capture==!!d&&l.a==e)break a}g=-1}-1<g?(b=a[g],c||(b.A=!1)):(b=new Eb(b,this.src,f,!!d,e),b.A=c,a.push(b));return b};function Hb(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ra(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Fb(b),0==a.a[c].length&&(delete a.a[c],a.b--))}};var Ib="closure_lm_"+(1E6*Math.random()|0),Jb={},Kb=0;function Lb(a,b,c,d,e){if(d&&d.once)return Mb(a,b,c,d,e);if("array"==u(b)){for(var f=0;f<b.length;f++)Lb(a,b[f],c,d,e);return null}c=Nb(c);return a&&a[Cb]?a.a.add(String(b),c,!1,v(d)?!!d.capture:!!d,e):Ob(a,b,c,!1,d,e)}
function Ob(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=v(e)?!!e.capture:!!e,l=Pb(a);l||(a[Ib]=l=new Gb(a));c=l.add(b,c,d,g,f);if(c.proxy)return c;d=Qb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)zb||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Rb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Kb++;return c}
function Qb(){var a=Tb,b=qb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Mb(a,b,c,d,e){if("array"==u(b)){for(var f=0;f<b.length;f++)Mb(a,b[f],c,d,e);return null}c=Nb(c);return a&&a[Cb]?a.a.add(String(b),c,!0,v(d)?!!d.capture:!!d,e):Ob(a,b,c,!0,d,e)}
function Ub(a){if("number"!=typeof a&&a&&!a.o){var b=a.src;if(b&&b[Cb])Hb(b.a,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Rb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Kb--;(c=Pb(b))?(Hb(c,a),0==c.b&&(c.src=null,b[Ib]=null)):Fb(a)}}}function Rb(a){return a in Jb?Jb[a]:Jb[a]="on"+a}
function Vb(a,b,c,d){var e=!0;if(a=Pb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.o&&(f=Wb(f,d),e=e&&!1!==f)}return e}function Wb(a,b){var c=a.listener,d=a.a||a.src;a.A&&Ub(a);return c.call(d,b)}
function Tb(a,b){if(a.o)return!0;if(!qb){if(!b)a:{b=["window","event"];for(var c=q,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new W(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=Vb(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=Vb(d[e],a,!1,b),c=c&&f}return c}return Wb(a,
new W(b,this))}function Pb(a){a=a[Ib];return a instanceof Gb?a:null}var Xb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Nb(a){if("function"==u(a))return a;a[Xb]||(a[Xb]=function(b){return a.handleEvent(b)});return a[Xb]};function Yb(a,b){if("function"!=u(a))if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:q.setTimeout(a,b||0)};function X(a,b,c){R.call(this);this.J=null!=c?w(a,c):a;this.v=b;this.i=w(this.K,this);this.a=this.b=null;this.c=[]}x(X,R);X.prototype.I=function(a){this.c=arguments;this.b?this.a=pa()+this.v:this.b=Yb(this.i,this.v)};X.prototype.K=function(){this.a?(this.b=Yb(this.i,this.a-pa()),this.a=null):(this.b=null,this.J.apply(null,this.c))};function Zb(a){R.call(this);this.b=a;this.a={}}x(Zb,R);var $b=[];function Y(a,b,c,d){"array"!=u(c)&&(c&&($b[0]=c.toString()),c=$b);for(var e=0;e<c.length;e++){var f=Lb(b,c[e],d||a.handleEvent,!1,a.b||a);if(!f)break;a.a[f.key]=f}}function ac(a){Da(a.a,function(a,c){this.a.hasOwnProperty(c)&&Ub(a)},a);a.a={}}Zb.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Z(){var a=HTMLElement.call(this)||this;a.m=new Zb;a.C=!1;a.g=null;a.w=null;a.f=null;a.l=null;a.h=null;a.L=new X(function(){var b=a.f.value.trim();a.l&&(""===b?a.l.setAttribute("hide",""):a.l.removeAttribute("hide"));a.g&&a.g.setAttribute("filter",b)},20);return a}ea(Z,HTMLElement);Z.prototype.connectedCallback=function(){this.C||bc(this);cc(this);window.requestAnimationFrame(function(){document.body.removeAttribute("unresolved")})};Z.prototype.connectedCallback=Z.prototype.connectedCallback;
Z.prototype.disconnectedCallback=function(){ac(this.m)};Z.prototype.disconnectedCallback=Z.prototype.disconnectedCallback;
function cc(a){if(a.w){var b=a.w.querySelector("#sort-by-tabs");b&&Y(a.m,b,"click",function(b){b.preventDefault();b=b.target;var c=b.getAttribute("sort");a.g&&a.g.setAttribute("sort",c);(c=a.querySelector("[selected]"))&&c.removeAttribute("selected");b.setAttribute("selected","")})}a.f&&Y(a.m,a.f,"keyup",function(){return dc(a)});a.l&&Y(a.m,a.l,"click",function(){a.f&&(a.f.value="");dc(a)});a.h&&Y(a.m,a.h,"change",function(){a.g&&a.h&&a.g.setAttribute("category",a.h.value)})}
function dc(a){window.requestAnimationFrame(function(){return a.L.I()})}
function bc(a){var b=a.querySelector("main .main-inner");if(b){a.f=document.querySelector("#search-field");a.l=document.querySelector("#clear-icon");var c=a.querySelector("main ul"),d=document.createElement("google-codelab-index-cards"),e=new URL(document.location.toString());e.searchParams.has("tags")&&d.setAttribute("tags",e.searchParams.getAll("tags").join(","));var f="";if(e.searchParams.has("cat")){var g=e.searchParams.getAll("cat");f=g[0].trim().toLowerCase();d.setAttribute("category",g.join(","))}g=
"alpha";e.searchParams.has("sort")&&(g=e.searchParams.get("sort"),d.setAttribute("sort",g));c?([].concat(p(c.querySelectorAll("a"))).forEach(function(a){d.addCard(a)}),c&&c.parentNode&&c.parentNode.removeChild(c),b.appendChild(d)):d=b.querySelector("google-codelab-index-cards");if(d){var l=new Set;[].concat(p(d.querySelectorAll(".card"))).forEach(function(a){(a=a.getAttribute("category"))&&a.split(",").forEach(function(a){l.add(a.trim())})});b=gb(cb,{H:Array.from(l).sort(),N:f,sort:g});b.setAttribute("id",
"sort-by");d.parentNode&&d.parentNode.insertBefore(b,d);a.w=b;a.g=d;a.h=a.w.querySelector("#codelab-categories");f&&a.h&&[].concat(p(a.h.options)).forEach(function(a){a.value.toLowerCase()===f&&(a.selected=!0)})}e.searchParams.has("filter")&&(e=e.searchParams.get("filter"),a.f&&(a.f.value=e,dc(a)));a.C=!0}};try{window.customElements.define("google-codelab-index",Z)}catch(a){console.warn("googlecodelabs.CodelabIndex",a)};}).call(this);