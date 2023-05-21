/*! For license information please see sw.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,e={378:(t,e,r)=>{r(666);const n="RestaurantCatalogue-V1";function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,o){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function v(){}function d(){}function y(){}var g={};f(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(S([])));w&&w!==e&&r.call(w,c)&&(g=w);var b=y.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function a(n,i,c,u){var s=l(t[n],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==o(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){a("next",t,c,u)}),(function(t){a("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return a("throw",t,c,u)}))}u(s.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:d,configurable:!0}),d.displayName=f(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),f(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(h(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),f(b,s,"Generator"),f(b,c,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}const u={cachingAppShell:function(t){var e=this;return c(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._openCache();case 2:r.sent.addAll(t);case 4:case"end":return r.stop()}}),r)})))()},deleteOldCache:function(){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:t.sent.filter((function(t){return t!==n})).map((function(t){return caches.delete(t)}));case 4:case"end":return t.stop()}}),t)})))()},revalidateCache:function(t){var e=this;return c(a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,caches.match(t);case 2:if(!(n=r.sent)){r.next=6;break}return e._fetchRequest(t),r.abrupt("return",n);case 6:return r.abrupt("return",e._fetchRequest(t));case 7:case"end":return r.stop()}}),r)})))()},_openCache:function(){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",caches.open(n));case 1:case"end":return t.stop()}}),t)})))()},_fetchRequest:function(t){var e=this;return c(a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(t);case 2:if((n=r.sent)&&200===n.status){r.next=5;break}return r.abrupt("return",n);case 5:return r.next=7,e._addCache(t);case 7:return r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))()},_addCache:function(t){var e=this;return c(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._openCache();case 2:r.sent.add(t);case 4:case"end":return r.stop()}}),r)})))()}};var s=["./","./images/dreamy-meal-icon.svg","./images/heros/hero-image.jpg","./images/heros/hero-image-large.jpg","./images/heros/hero-image-small.jpg","./images/meal-icon.svg","./images/app-icon/Icon-72.png","./images/app-icon/Icon-96.png","./images/app-icon/Icon-128.png","./images/app-icon/Icon-144.png","./images/app-icon/Icon-152.png","./images/app-icon/Icon-192.png","./images/app-icon/Icon-256.png","./images/app-icon/Icon-512.png","./index.html","./app.bundle.js","./app.webmanifest","./sw.bundle.js"];self.addEventListener("install",(function(t){t.waitUntil(u.cachingAppShell([].concat(s)))})),self.addEventListener("activate",(function(t){t.waitUntil(u.deleteOldCache())})),self.addEventListener("fetch",(function(t){t.respondWith(u.revalidateCache(t.request))}))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(f=0;f<t.length;f++){for(var[r,o,a]=t[f],c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[r,o,a]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={670:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[i,c,u]=r,s=0;if(i.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(f)},r=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[666],(()=>n(378)));o=n.O(o)})();
//# sourceMappingURL=sw.bundle.js.map