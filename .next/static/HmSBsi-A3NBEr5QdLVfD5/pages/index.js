(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI")),a=r("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,a=t.hasQuery;return r||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"2SVd":function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},"5oMp":function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},"7W2i":function(t,e,r){var n=r("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"8Kt/":function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI")),a=n(r("Xuae")),i=r("lwAK"),u=r("FYa8"),s=r("/0+H");function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(l,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var c=f[u];if(o.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?a=!1:r.add(c);else{var l=o.props[c],p=n[c]||new Set;p.has(l)?a=!1:(p.add(l),n[c]=p)}}}return a}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}var d=a.default();function m(t){var e=t.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(r){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:r,inAmpMode:s.isInAmpMode(t)},e)}))}))}m.rewind=d.rewind,e.default=m},"8oxB":function(t,e){var r,n,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(t){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=u(p);l=!0;for(var e=c.length;e;){for(s=c,c=[];++f<e;)s&&s[f].run();f=-1,e=c.length}s=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new m(t,e)),1!==c.length||l||u(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(t,e,r){"use strict";var n=r("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},CgaS:function(t,e,r){"use strict";var n=r("xTJ+"),o=r("MLWZ"),a=r("9rSQ"),i=r("UnBK"),u=r("SntB");function s(t){this.defaults=t,this.interceptors={request:new a,response:new a}}s.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=u(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[i,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)r=r.then(e.shift(),e.shift());return r},s.prototype.getUri=function(t){return t=u(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){s.prototype[t]=function(e,r){return this.request(n.merge(r||{},{method:t,url:e}))}})),n.forEach(["post","put","patch"],(function(t){s.prototype[t]=function(e,r,o){return this.request(n.merge(o||{},{method:t,url:e,data:r}))}})),t.exports=s},DfZB:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI"));e.HeadManagerContext=o.createContext(null)},HSsa:function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},JEQr:function(t,e,r){"use strict";(function(e){var n=r("xTJ+"),o=r("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var u={adapter:function(){var t;return"undefined"!==typeof XMLHttpRequest?t=r("tQ2B"):"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e)&&(t=r("tQ2B")),t}(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){u.headers[t]=n.merge(a)})),t.exports=u}).call(this,r("8oxB"))},LYNF:function(t,e,r){"use strict";var n=r("OH9c");t.exports=function(t,e,r,o,a){var i=new Error(t);return n(i,e,r,o,a)}},Lmem:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},MLWZ:function(t,e,r){"use strict";var n=r("xTJ+");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var a;if(r)a=r(e);else if(n.isURLSearchParams(e))a=e.toString();else{var i=[];n.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))})))})),a=i.join("&")}if(a){var u=t.indexOf("#");-1!==u&&(t=t.slice(0,u)),t+=(-1===t.indexOf("?")?"?":"&")+a}return t}},Nsbk:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},OH9c:function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},OTTw:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("Bnag");t.exports=function(t){return n(t)||o(t)||a()}},RNiq:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function s(t){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){return(c="function"===typeof Symbol&&"symbol"===s(Symbol.iterator)?function(t){return s(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":s(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?l(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.r(e);var d=r("q1tI"),m=r.n(d);var h=m.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var v=function(t){u(r,t);var e=y(r);function r(t){var o,a,i,u;return n(this,r),o=e.call(this,t),a=l(o),u=function(t){return"#"==o.props.href?t.preventDefault():null},(i="handleClick")in a?Object.defineProperty(a,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[i]=u,o.state={pathname:"/"},o}return a(r,[{key:"render",value:function(){var t=this.props||"",e=(t.href,t.title),r=t.extra;return h("a",{href:this.props.href,onClick:this.handleClick,className:r+" effect-slash",active:this.props.active},h("div",{className:"effect-inner"},h("span",{className:"effect-l"},h("span",null,e)),h("span",{className:"effect-r"},h("span",null,e)),h("span",{className:"effect-shade"},h("span",null,e))))}}]),r}(m.a.Component),_=m.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var x=function(t){u(r,t);var e=g(r);function r(t){var o;return n(this,r),(o=e.call(this,t)).state={menuOpen:!1},o}return a(r,[{key:"handleMenu",value:function(t){this.setState({menuOpen:!this.state.menuOpen})}},{key:"render",value:function(){return _("nav",{className:"navbar"+(this.state.menuOpen?" responsive-active":"")},_("ul",{className:"navbar-nav text-right"},_("li",null,_(v,{href:"/",title:"Home"})),_("li",null,_(v,{href:"/calender",title:"Calender"})),_("li",null,_(v,{href:"/punishments",title:"Punishments"})),_("li",null,_(v,{href:"/resources",title:"Resources"})),_("li",null,_(v,{href:"/support",title:"Support"})),_("li",null,_(v,{href:"/store",title:"Store"})),_("li",{active:"true",className:"header-cta"},_(v,{href:"/login",title:"Login",extra:"btn-effect"}))))}}]),r}(m.a.Component),w=m.a.createElement;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var S=function(t){u(r,t);var e=b(r);function r(t){return n(this,r),e.call(this,t)}return a(r,[{key:"render",value:function(){return w("header",{id:"header"},w("div",{className:"header"},w("div",{className:"container"},w("div",{className:"row"},w("div",{className:"col-3"},w("div",{className:"logo"},w("img",{src:"/images/UltraCraft.png",alt:"UltraCraft",hidden:!0}),w("img",{src:"/images/logo.png",alt:"UltraCraft",hidden:!0}),w("h1",{className:"logo-text"},"UltraCraft"))),w("div",{className:"col-9"},w(x,null))))))}}]),r}(m.a.Component),C=m.a.createElement;var k=function(){return C("footer",null,C("picture",{className:"dividerTop"},C("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2",media:"(max-width: 480px)"}),C("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2",media:"(max-width: 768px)"}),C("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2",media:"(max-width: 1080px)"}),C("img",{className:"dividerTop",src:"https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/bottom_dark.png"})),C("div",{className:"container"},C("div",{className:"row"},C("div",{className:"col-4"},C("h3",{className:"footer-logo"},"UltraCraft"),C("p",null,"Ultracraft is a Bangladeshi server")),C("div",{className:"col-4"}),C("div",{className:"col-4"}))))},N=r("8Kt/"),j=r.n(N),T=r("vDqi"),E=r.n(T),O=m.a.createElement;function R(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var U=function(t){u(r,t);var e=R(r);function r(t){var o;return n(this,r),(o=e.call(this,t)).state={ip:"play.ultracraft.xyz",port:25582,playerCount:"N/A",ipText:O("span",null,O("small",null,"play"),".UltraCraft.",O("small",null,"xyz"))},o}return a(r,[{key:"componentDidMount",value:function(){var t=this,e=this.state,r=e.ip,n=e.port;E.a.get("https://mcapi.us/server/status?ip="+r+"&port="+n,{"Content-Type":"application/json"}).then((function(e){t.setState({playerCount:e.data.online?e.data.players.now:"N/A"})}))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"handleIpCopy",value:function(t){var e=this;this.setState({ipText:O("span",null,"IP Copied!")}),navigator.clipboard.writeText(this.state.ip),this.timeout=setTimeout((function(){e.setState({ipText:O("span",null,O("small",null,"play"),".UltraCraft.",O("small",null,"xyz"))})}),800)}},{key:"render",value:function(){var t=this;return O("main",null,O(j.a,null,O("title",null,"UltraCraft")),O("div",{className:"page-wrapper"},O(S,null),O("section",{id:"Slider"},O("div",{id:"particles-js"}),O("picture",{className:"image-bg"},O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jp2",media:"(max-width: 480px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jp2",media:"(max-width: 768px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jp2",media:"(max-width: 1080px)"}),O("img",{src:"https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jp2",className:"image-bg"})),O("div",{className:"container"},O("div",{className:"row"},O("div",{className:"col-12"},O("div",{style:{margin:"0 0 5% 0"}},O("h3",{style:{margin:0}},"Survival ",O("span",null,"//")," Skyblock ",O("span",null,"//")," Skywars"),O("h1",null,"UltraCrafT"))),O("div",{className:"col-12"},O("h3",{className:"slider-playercount"},"Join ",this.state.playerCount," other players"),O("a",{href:"#",className:"server-ip btn-effect btn-secondary effect-slash",onClick:function(){return t.handleIpCopy()}},O("div",{className:"effect-inner"},O("span",{className:"effect-l"},this.state.ipText),O("span",{className:"effect-r"},this.state.ipText),O("span",{className:"effect-shade"},this.state.ipText)))))),O("picture",{className:"dividerBottom"},O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",media:"(max-width: 480px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",media:"(max-width: 768px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",media:"(max-width: 1080px)"}),O("img",{className:"dividerBottom",src:"https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/header1.png"}))),O("section",{id:"Section2"},O("div",{className:"container"},O("div",{className:"row column-height"},O("div",{className:"col-6 col-md-6"},O("picture",null,O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",media:"(max-width: 480px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",media:"(max-width: 768px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_440,h_400,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",media:"(max-width: 1080px)"}),O("img",{src:"https://res.cloudinary.com/xianmalik/image/upload/w_540,h_450,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2"}))),O("div",{className:"col-6 col-md-6"},O("h5",null,"INTRODUCTION"),O("h2",null,"What Is... ",O("br",null),"UltraCraft?"),O("h6",null,"A Survival & SkyBlock Server"),O("p",null,"Started back in October 2019, Ultracraft was founded by four of Minecraft Enthusiasts who are eager enough to start their own community of players. Main goal of UltraCraft till now is to provide lag free, toxicity free community to the players of Bangladesh."),O("a",{href:"#",className:"btn-effect btn-white-bg effect-slash"},O("div",{className:"effect-inner"},O("span",{className:"effect-l"},O("span",null,"Learn More")),O("span",{className:"effect-r"},O("span",null,"Learn More")),O("span",{className:"effect-shade"},O("span",null,"Learn More"))))))),O("picture",{className:"dividerBottom"},O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",media:"(max-width: 480px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",media:"(max-width: 768px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",media:"(max-width: 1080px)"}),O("img",{className:"dividerBottom",src:"https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/top_dark.png"}))),O("section",{id:"Section3"},O("div",{className:"container"},O("div",{className:"row column-height clearfix"},O("div",{className:"col-6 col-md-6 col-push-6"},O("picture",null,O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2",media:"(max-width: 480px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2",media:"(max-width: 768px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_440,h_400,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2",media:"(max-width: 1080px)"}),O("img",{src:"https://res.cloudinary.com/xianmalik/image/upload/w_540,h_400,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2",alt:"Survival"}))),O("div",{className:"col-6 col-md-6 col-pull-6 text-right"},O("h5",null,"GAMEMODES"),O("h2",null,"Survival"),O("h6",null,"An Enhanced Survival Experience"),O("p",null,"Survival mode is one of the main game modes in Minecraft. Players must collect resources, build structures, battle mobs, eat, and explore the world in an effort to thrive and survive."))),O("br",null),O("div",{className:"row column-height"},O("div",{className:"col-6 col-md-6"},O("picture",null,O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2",media:"(max-width: 480px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2",media:"(max-width: 768px)"}),O("source",{srcSet:"https://res.cloudinary.com/xianmalik/image/upload/w_440,h_400,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2",media:"(max-width: 1080px)"}),O("img",{src:"https://res.cloudinary.com/xianmalik/image/upload/w_540,h_400,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2",alt:"Survival"}))),O("div",{className:"col-6 col-md-6"},O("h5",null,"GAMEMODES"),O("h2",null,"SkyBlock"),O("h6",null,"Classic Skyblock (Currently Offline)"),O("p",null,"SkyBlock is a survival gamemode where players live and build on a floating island. The goal of the map is to survive without cheating, expand your island, grow your own food and thrive."))))),O(k,null)))}}]),r}(m.a.Component);e.default=U},"Rn+g":function(t,e,r){"use strict";var n=r("LYNF");t.exports=function(t,e,r){var o=r.config.validateStatus;!o||o(r.status)?t(r):e(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},SntB:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=function(t,e){e=e||{};var r={},o=["url","method","params","data"],a=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(t){"undefined"!==typeof e[t]&&(r[t]=e[t])})),n.forEach(a,(function(o){n.isObject(e[o])?r[o]=n.deepMerge(t[o],e[o]):"undefined"!==typeof e[o]?r[o]=e[o]:n.isObject(t[o])?r[o]=n.deepMerge(t[o]):"undefined"!==typeof t[o]&&(r[o]=t[o])})),n.forEach(i,(function(n){"undefined"!==typeof e[n]?r[n]=e[n]:"undefined"!==typeof t[n]&&(r[n]=t[n])}));var u=o.concat(a).concat(i),s=Object.keys(e).filter((function(t){return-1===u.indexOf(t)}));return n.forEach(s,(function(n){"undefined"!==typeof e[n]?r[n]=e[n]:"undefined"!==typeof t[n]&&(r[n]=t[n])})),r}},UnBK:function(t,e,r){"use strict";var n=r("xTJ+"),o=r("xAGQ"),a=r("Lmem"),i=r("JEQr");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||i.adapter)(t).then((function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return a(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},W8MJ:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},Xuae:function(t,e,r){"use strict";var n=r("lwsE"),o=r("PJYZ"),a=r("W8MJ"),i=r("7W2i"),u=r("a1gu"),s=r("Nsbk"),c=r("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}Object.defineProperty(e,"__esModule",{value:!0});var f=r("q1tI"),p=!1;e.default=function(){var t,e=new Set;function r(r){t=r.props.reduceComponentsToState(c(e),r.props),r.props.handleStateChange&&r.props.handleStateChange(t)}return(function(u){i(c,u);var s=l(c);function c(t){var a;return n(this,c),a=s.call(this,t),p&&(e.add(o(a)),r(o(a))),a}return a(c,null,[{key:"rewind",value:function(){var r=t;return t=void 0,e.clear(),r}}]),a(c,[{key:"componentDidMount",value:function(){e.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),r(this)}},{key:"render",value:function(){return null}}]),c}(f.Component))}},a1gu:function(t,e,r){var n=r("cDf5"),o=r("PJYZ");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?t.exports=n=function(t){return r(t)}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},n(e)}t.exports=n},endd:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},eqyj:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,a,i){var u=[];u.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(a)&&u.push("domain="+a),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(t,e,r){"use strict";var n=r("2SVd"),o=r("5oMp");t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},"jfS+":function(t,e,r){"use strict";var n=r("endd");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},lwAK:function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI"));e.AmpStateContext=o.createContext({})},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"m0L+":function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},tQ2B:function(t,e,r){"use strict";var n=r("xTJ+"),o=r("Rn+g"),a=r("MLWZ"),i=r("g7np"),u=r("w0Vi"),s=r("OTTw"),c=r("LYNF");t.exports=function(t){return new Promise((function(e,l){var f=t.data,p=t.headers;n.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var m=t.auth.username||"",h=t.auth.password||"";p.Authorization="Basic "+btoa(m+":"+h)}var y=i(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),a(y,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,n={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};o(e,l,n),d=null}},d.onabort=function(){d&&(l(c("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){l(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),l(c(e,t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var v=r("eqyj"),_=(t.withCredentials||s(y))&&t.xsrfCookieName?v.read(t.xsrfCookieName):void 0;_&&(p[t.xsrfHeaderName]=_)}if("setRequestHeader"in d&&n.forEach(p,(function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(g){if("json"!==t.responseType)throw g}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),l(t),d=null)})),void 0===f&&(f=null),d.send(f)}))}},vDqi:function(t,e,r){t.exports=r("zuR4")},w0Vi:function(t,e,r){"use strict";var n=r("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,a,i={};return t?(n.forEach(t.split("\n"),(function(t){if(a=t.indexOf(":"),e=n.trim(t.substr(0,a)).toLowerCase(),r=n.trim(t.substr(a+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([r]):i[e]?i[e]+", "+r:r}})),i):i}},xAGQ:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=function(t,e,r){return n.forEach(r,(function(r){t=r(t,e)})),t}},"xTJ+":function(t,e,r){"use strict";var n=r("HSsa"),o=Object.prototype.toString;function a(t){return"[object Array]"===o.call(t)}function i(t){return"undefined"===typeof t}function u(t){return null!==t&&"object"===typeof t}function s(t){return"[object Function]"===o.call(t)}function c(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!i(t)&&null!==t.constructor&&!i(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!==typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"===typeof t},isNumber:function(t){return"number"===typeof t},isObject:u,isUndefined:i,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:s,isStream:function(t){return u(t)&&s(t.pipe)},isURLSearchParams:function(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:c,merge:function t(){var e={};function r(r,n){"object"===typeof e[n]&&"object"===typeof r?e[n]=t(e[n],r):e[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return e},deepMerge:function t(){var e={};function r(r,n){"object"===typeof e[n]&&"object"===typeof r?e[n]=t(e[n],r):e[n]="object"===typeof r?t({},r):r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return e},extend:function(t,e,r){return c(e,(function(e,o){t[o]=r&&"function"===typeof e?n(e,r):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(t,e,r){"use strict";var n=r("xTJ+");t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},zuR4:function(t,e,r){"use strict";var n=r("xTJ+"),o=r("HSsa"),a=r("CgaS"),i=r("SntB");function u(t){var e=new a(t),r=o(a.prototype.request,e);return n.extend(r,a.prototype,e),n.extend(r,e),r}var s=u(r("JEQr"));s.Axios=a,s.create=function(t){return u(i(s.defaults,t))},s.Cancel=r("endd"),s.CancelToken=r("jfS+"),s.isCancel=r("Lmem"),s.all=function(t){return Promise.all(t)},s.spread=r("DfZB"),t.exports=s,t.exports.default=s}},[["m0L+",0,1]]]);