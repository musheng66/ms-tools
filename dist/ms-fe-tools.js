!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MsFeTools=e():t.MsFeTools=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=63)}([function(t,e,n){t.exports=!n(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(9),i=n(32),o=n(13),u=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(1),i=n(11),o=n(20),u=n(22),f=n(34),c=function(t,e,n){var a,l,s,p,h=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,b=t&c.B,g=d?r:y?r[e]||(r[e]={}):(r[e]||{}).prototype,m=d?i:i[e]||(i[e]={}),S=m.prototype||(m.prototype={});for(a in d&&(n=e),n)s=((l=!h&&g&&void 0!==g[a])?g:n)[a],p=b&&l?f(s,r):v&&"function"==typeof s?f(Function.call,s):s,g&&u(g,a,s,t&c.U),m[a]!=s&&o(m,a,p),v&&S[a]!=s&&(S[a]=s)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(6);r(r.S+r.F*!n(0),"Object",{defineProperty:n(2).f})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(36),i=n(24);t.exports=function(t){return r(i(t))}},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(11),i=n(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(17)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(35),i=n(25);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){n(30)("asyncIterator")},function(t,e){t.exports=!1},function(t,e,n){var r=n(12)("wks"),i=n(8),o=n(1).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,e,n){"use strict";var r=n(1),i=n(5),o=n(0),u=n(6),f=n(22),c=n(45).KEY,a=n(4),l=n(12),s=n(46),p=n(8),h=n(18),d=n(31),y=n(30),v=n(47),b=n(39),g=n(9),m=n(3),S=n(40),I=n(10),O=n(13),w=n(21),j=n(41),N=n(53),_=n(28),x=n(26),k=n(2),E=n(14),P=_.f,T=k.f,A=N.f,F=r.Symbol,M=r.JSON,C=M&&M.stringify,B=h("_hidden"),G=h("toPrimitive"),D={}.propertyIsEnumerable,J=l("symbol-registry"),$=l("symbols"),R=l("op-symbols"),L=Object.prototype,W="function"==typeof F&&!!x.f,z=r.QObject,U=!z||!z.prototype||!z.prototype.findChild,V=o&&a((function(){return 7!=j(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=P(L,e);r&&delete L[e],T(t,e,n),r&&t!==L&&T(L,e,r)}:T,Y=function(t){var e=$[t]=j(F.prototype);return e._k=t,e},K=W&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},X=function(t,e,n){return t===L&&X(R,e,n),g(t),e=O(e,!0),g(n),i($,e)?(n.enumerable?(i(t,B)&&t[B][e]&&(t[B][e]=!1),n=j(n,{enumerable:w(0,!1)})):(i(t,B)||T(t,B,w(1,{})),t[B][e]=!0),V(t,e,n)):T(t,e,n)},Z=function(t,e){g(t);for(var n,r=v(e=I(e)),i=0,o=r.length;o>i;)X(t,n=r[i++],e[n]);return t},q=function(t){var e=D.call(this,t=O(t,!0));return!(this===L&&i($,t)&&!i(R,t))&&(!(e||!i(this,t)||!i($,t)||i(this,B)&&this[B][t])||e)},Q=function(t,e){if(t=I(t),e=O(e,!0),t!==L||!i($,e)||i(R,e)){var n=P(t,e);return!n||!i($,e)||i(t,B)&&t[B][e]||(n.enumerable=!0),n}},H=function(t){for(var e,n=A(I(t)),r=[],o=0;n.length>o;)i($,e=n[o++])||e==B||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===L,r=A(n?R:I(t)),o=[],u=0;r.length>u;)!i($,e=r[u++])||n&&!i(L,e)||o.push($[e]);return o};W||(f((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===L&&e.call(R,n),i(this,B)&&i(this[B],t)&&(this[B][t]=!1),V(this,t,w(1,n))};return o&&U&&V(L,t,{configurable:!0,set:e}),Y(t)}).prototype,"toString",(function(){return this._k})),_.f=Q,k.f=X,n(27).f=N.f=H,n(15).f=q,x.f=tt,o&&!n(17)&&f(L,"propertyIsEnumerable",q,!0),d.f=function(t){return Y(h(t))}),u(u.G+u.W+u.F*!W,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var rt=E(h.store),it=0;rt.length>it;)y(rt[it++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return i(J,t+="")?J[t]:J[t]=F(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in J)if(J[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,e){return void 0===e?j(t):Z(j(t),e)},defineProperty:X,defineProperties:Z,getOwnPropertyDescriptor:Q,getOwnPropertyNames:H,getOwnPropertySymbols:tt});var ot=a((function(){x.f(1)}));u(u.S+u.F*ot,"Object",{getOwnPropertySymbols:function(t){return x.f(S(t))}}),M&&u(u.S+u.F*(!W||a((function(){var t=F();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(m(e)||void 0!==t)&&!K(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),r[1]=e,C.apply(M,r)}}),F.prototype[G]||n(20)(F.prototype,G,F.prototype.valueOf),s(F,"Symbol"),s(Math,"Math",!0),s(r.JSON,"JSON",!0)},function(t,e,n){var r=n(2),i=n(21);t.exports=n(0)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),i=n(20),o=n(5),u=n(8)("src"),f=n(43),c=(""+f).split("toString");n(11).inspectSource=function(t){return f.call(t)},(t.exports=function(t,e,n,f){var a="function"==typeof n;a&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(a&&(o(n,u)||i(n,u,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:f?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||f.call(this)}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(35),i=n(25).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(15),i=n(21),o=n(10),u=n(13),f=n(5),c=n(32),a=Object.getOwnPropertyDescriptor;e.f=n(0)?a:function(t,e){if(t=o(t),e=u(e,!0),c)try{return a(t,e)}catch(t){}if(f(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r=n(1),i=n(5),o=n(23),u=n(54),f=n(13),c=n(4),a=n(27).f,l=n(28).f,s=n(2).f,p=n(56).trim,h=r.Number,d=h,y=h.prototype,v="Number"==o(n(41)(y)),b="trim"in String.prototype,g=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=b?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var u,c=e.slice(2),a=0,l=c.length;a<l;a++)if((u=c.charCodeAt(a))<48||u>i)return NaN;return parseInt(c,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?c((function(){y.valueOf.call(n)})):"Number"!=o(n))?u(new d(g(e)),n,h):g(e)};for(var m,S=n(0)?a(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;S.length>I;I++)i(d,m=S[I])&&!i(h,m)&&s(h,m,l(d,m));h.prototype=y,y.constructor=h,n(22)(r,"Number",h)}},function(t,e,n){var r=n(1),i=n(11),o=n(17),u=n(31),f=n(2).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(18)},function(t,e,n){t.exports=!n(0)&&!n(4)((function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(44);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),i=n(10),o=n(48)(!1),u=n(38)("IE_PROTO");t.exports=function(t,e){var n,f=i(t),c=0,a=[];for(n in f)n!=u&&r(f,n)&&a.push(n);for(;e.length>c;)r(f,n=e[c++])&&(~o(a,n)||a.push(n));return a}},function(t,e,n){var r=n(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(12)("keys"),i=n(8);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(23);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(24);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(9),i=n(51),o=n(25),u=n(38)("IE_PROTO"),f=function(){},c=function(){var t,e=n(33)("iframe"),r=o.length;for(e.style.display="none",n(52).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[u]=t):n=c(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(2).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(0)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,e,n){t.exports=n(12)("native-function-to-string",Function.toString)},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(8)("meta"),i=n(3),o=n(5),u=n(2).f,f=0,c=Object.isExtensible||function(){return!0},a=!n(4)((function(){return c(Object.preventExtensions({}))})),l=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},s=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[r].w},onFreeze:function(t){return a&&s.NEED&&c(t)&&!o(t,r)&&l(t),t}}},function(t,e,n){var r=n(2).f,i=n(5),o=n(18)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(14),i=n(26),o=n(15);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var u,f=n(t),c=o.f,a=0;f.length>a;)c.call(t,u=f[a++])&&e.push(u);return e}},function(t,e,n){var r=n(10),i=n(49),o=n(50);t.exports=function(t){return function(e,n,u){var f,c=r(e),a=i(c.length),l=o(u,a);if(t&&n!=n){for(;a>l;)if((f=c[l++])!=f)return!0}else for(;a>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(37),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(37),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(2),i=n(9),o=n(14);t.exports=n(0)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),f=u.length,c=0;f>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(10),i=n(27).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(r(t))}},function(t,e,n){var r=n(3),i=n(55).set;t.exports=function(t,e,n){var o,u=e.constructor;return u!==n&&"function"==typeof u&&(o=u.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){var r=n(3),i=n(9),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(34)(Function.call,n(28).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){var r=n(6),i=n(24),o=n(4),u=n(57),f="["+u+"]",c=RegExp("^"+f+f+"*"),a=RegExp(f+f+"*$"),l=function(t,e,n){var i={},f=o((function(){return!!u[t]()||"​"!="​"[t]()})),c=i[t]=f?e(s):u[t];n&&(i[n]=c),r(r.P+r.F*f,"String",i)},s=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(a,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var r=n(6);r(r.S,"Array",{isArray:n(39)})},function(t,e,n){var r=n(6);r(r.S,"Number",{isInteger:n(60)})},function(t,e,n){var r=n(3),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,e,n){var r=n(6);r(r.S+r.F,"Object",{assign:n(62)})},function(t,e,n){"use strict";var r=n(0),i=n(14),o=n(26),u=n(15),f=n(40),c=n(36),a=Object.assign;t.exports=!a||n(4)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r}))?function(t,e){for(var n=f(t),a=arguments.length,l=1,s=o.f,p=u.f;a>l;)for(var h,d=c(arguments[l++]),y=s?i(d).concat(s(d)):i(d),v=y.length,b=0;v>b;)h=y[b++],r&&!p.call(d,h)||(n[h]=d[h]);return n}:a},function(t,e,n){"use strict";n.r(e);n(16),n(19),n(7),n(29),n(42),n(58);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"isObject",value:function(t){return t&&"object"===r(t)&&!Array.isArray(t)}},{key:"isNull",value:function(t){if("boolean"==typeof t)return!1;if("number"==typeof t)return!1;if(t instanceof Array){if(0===t.length)return!0}else{if(!(t instanceof Object))return"null"===String(t)||"undefined"===String(t);if("{}"===JSON.stringify(t))return!0}return!1}},{key:"isURL",value:function(t){return!this.isNull(t)&&/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t)}},{key:"isEmail",value:function(t){return!this.isNull(t)&&/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}},{key:"isMobile",value:function(t){return!this.isNull(t)&&/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t)}},{key:"isTel",value:function(t){return!this.isNull(t)&&/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(t)}},{key:"isIdCard",value:function(t){return!this.isNull(t)&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t)}}])&&i(e.prototype,n),o&&i(e,o),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s={LocalStorage:function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!window)return Error("Can not init LocalStorage because there is no Window object.");this._validate=new o}var e,n,r;return e=t,(n=[{key:"set",value:function(t){var e=t.name,n=t.content,r={dataType:u(n),content:n,datetime:(new Date).getTime()};localStorage.setItem(e,JSON.stringify(r))}},{key:"get",value:function(t){var e=t.name,n=t.debug,r=localStorage.getItem(e),i=null;if(n)return r;if(this._validate.isNull(r))return i;try{r=JSON.parse(r)}catch(t){return r}switch(r.dataType){case"string":i=r.content;break;case"number":i=Number(r.content);break;case"boolean":i=Boolean(r.content);break;case"object":default:i=r.content}return i}},{key:"remove",value:function(t){var e=t.name;localStorage.removeItem(e)}},{key:"getAll",value:function(){for(var t=[],e=0;e<localStorage.length;e++)t.push({name:localStorage.key(e),content:this.get({name:localStorage.key(e)})});return t}},{key:"removeAll",value:function(){localStorage.clear()}}])&&f(e.prototype,n),r&&f(e,r),t}(),SessionStorage:function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!window)return Error("Can not init SessionStorage because there is no Window object.");this._validate=new o}var e,n,r;return e=t,(n=[{key:"set",value:function(t){var e=t.name,n=t.content,r={dataType:c(n),content:n,datetime:(new Date).getTime()};sessionStorage.setItem(e,JSON.stringify(r))}},{key:"get",value:function(t){var e=t.name,n=t.debug,r=sessionStorage.getItem(e),i=null;if(n)return r;if(this._validate.isNull(r))return i;try{r=JSON.parse(r)}catch(t){return r}switch(r.dataType){case"string":i=r.content;break;case"number":i=Number(r.content);break;case"boolean":i=Boolean(r.content);break;case"object":default:i=r.content}return i}},{key:"remove",value:function(t){var e=t.name;sessionStorage.removeItem(e)}},{key:"getAll",value:function(){for(var t=[],e=0;e<sessionStorage.length;e++)t.push({name:sessionStorage.key(e),content:this.get({name:sessionStorage.key(e)})});return t}},{key:"removeAll",value:function(){sessionStorage.clear()}}])&&a(e.prototype,n),r&&a(e,r),t}(),Cookie:function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!document)return Error("Can not init Cookie because there is no Document object.");this._validate=new o}var e,n,r;return e=t,(n=[{key:"set",value:function(t){}},{key:"get",value:function(t){}},{key:"remove",value:function(t){}},{key:"getAll",value:function(){}},{key:"removeAll",value:function(){}}])&&l(e.prototype,n),r&&l(e,r),t}()};n(59);function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h={JsonTree:function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validate=new o,this.identifier=e.identifier||"id",this.childrenIdentifier=e.childrenIdentifier||"children",this.nodeGet=null,this.parentNodeGet=null,this.treeNode=null}var e,n,r;return e=t,(n=[{key:"getNodeByIdentifier",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this._validate.isNull(e)||""===e)return t;if(t[this.identifier]===e)this.nodeGet=t;else if(t[this.childrenIdentifier]&&t[this.childrenIdentifier].length>0)for(var n=0;n<t[this.childrenIdentifier].length;n++)this.getNodeByIdentifier(t[this.childrenIdentifier][n],e);return this.nodeGet}},{key:"getParentNodeByIdentifier",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this._validate.isNull(e)||""===e)return t;if(t[this.childrenIdentifier]&&t[this.childrenIdentifier].length>0)for(var n=0;n<t[this.childrenIdentifier].length;n++){if(t[this.childrenIdentifier][n][this.identifier]===e){this.parentNodeGet=t;break}this.getParentNodeByIdentifier(t[this.childrenIdentifier][n],e)}return this.parentNodeGet}},{key:"addNodeByIdentifier",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if((this._validate.isNull(n)||""===n)&&(t.children?Number.isInteger(r)?t[this.childrenIdentifier].splice(r,0,e):t[this.childrenIdentifier].push(e):(t[this.childrenIdentifier]=[],t[this.childrenIdentifier].push(e))),t[this.identifier]===n)t[this.childrenIdentifier]=t[this.childrenIdentifier]||[],Number.isInteger(r)?t[this.childrenIdentifier].splice(r,0,e):t[this.childrenIdentifier].push(e);else if(t[this.childrenIdentifier]&&t[this.childrenIdentifier].length>0)for(var i=0;i<t[this.childrenIdentifier].length;i++)this.addNodeByIdentifier(t[this.childrenIdentifier][i],e,n,r)}},{key:"updateNodeByIdentifier",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if((this._validate.isNull(n)||""===n)&&(t[0]=e),t[this.identifier]!==n){if(t[this.childrenIdentifier]&&t[this.childrenIdentifier].length>0)for(var r=0;r<t[this.childrenIdentifier].length;r++){if(t[this.childrenIdentifier][r][this.identifier]===n)return void(t[this.childrenIdentifier][r]=e);t[this.childrenIdentifier][r][this.childrenIdentifier]&&t[this.childrenIdentifier][r][this.childrenIdentifier].length>0&&this.updateNodeByIdentifier(t[this.childrenIdentifier][r],e,n)}}else t=e}},{key:"deleteNodeByIdentifier",value:function(t,e){if(t[this.identifier]!==e){if(t[this.childrenIdentifier]&&t[this.childrenIdentifier].length>0)for(var n=0;n<t[this.childrenIdentifier].length;n++){if(t[this.childrenIdentifier][n][this.identifier]===e)return void t[this.childrenIdentifier].splice(n,1);t[this.childrenIdentifier][n][this.childrenIdentifier]&&t[this.childrenIdentifier][n][this.childrenIdentifier].length>0&&this.deleteNodeByIdentifier(t[this.childrenIdentifier][n],e)}}else t=null}}])&&p(e.prototype,n),r&&p(e,r),t}()};n(61);function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validate=new o}var e,n,r;return e=t,(n=[{key:"mergeDeep",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=n.shift();if(this._validate.isObject(t)&&this._validate.isObject(i))for(var o in i)this._validate.isObject(i[o])?(t[o]||Object.assign(t,d({},o,{})),this.mergeDeep(t[o],i[o])):Object.assign(t,d({},o,i[o]));return this.mergeDeep.apply(this,[t].concat(n))}}])&&y(e.prototype,n),r&&y(e,r),t}();e.default={Store:s,Validate:o,Tree:h,Common:v}}]).default}));