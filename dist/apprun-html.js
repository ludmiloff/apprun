!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.onRoute=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return!0},this._events={}}return e.prototype.on=function(e,t,n){void 0===n&&(n={}),this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})},e.prototype.run=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[e];console.assert(!!o,"No subscriber for event: "+e),o&&(this._events[e]=o.filter(function(r){var o=r.fn,i=r.options;return i.delay?t.delay(e,o,n,i):o.apply(t,n),!r.options.once}))},e.prototype.once=function(e,t){this.on(e,t)},e.prototype.delay=function(e,t,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),t.apply(o,n)},r.delay)},e}();t.App=r,t.default=new r},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(7),i=n(5);t.Component=i.Component;var a=n(2);t.on=a.on,t.update=a.update,t.event=a.update;var u=n(4);r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,r.default.start=function(e,t,n,r,o){var a=Object.assign(o||{},{render:!0,global_event:!0}),u=new i.Component(t,n,r);return o&&o.rendered&&(u.rendered=o.rendered),u.mount(e,a),u};var s=r.default,d=e||window;d.app&&d.app.start?s=d.app:(d.app=s,"object"==typeof document&&document.addEventListener("DOMContentLoaded",function(){window.onpopstate=function(){return u.default(location.hash||location.pathname)},u.default(location.hash)})),t.default=s,r.default.on("debug",function(e){return 0})}).call(this,n(8))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata:function(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys:function(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata:function(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=function(e,n){return void 0===n&&(n={}),function(r,o,i){return e=o+(e?","+e:""),t.Reflect.defineMetadata("apprun-update:"+e,{name:e,key:o,options:n},r),i}},t.on=function(e,n){return void 0===n&&(n={}),function(r,o){e=o+(e?","+e:""),t.Reflect.defineMetadata("apprun-update:"+e,{name:e,key:o,options:n},r)}}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),i="_props";function a(e){var t=[],n=function(e){null!==e&&void 0!==e&&""!==e&&t.push("function"==typeof e||"object"==typeof e?e:""+e)};return e&&e.forEach(function(e){Array.isArray(e)?e.forEach(function(e){return n(e)}):n(e)}),t}t.createElement=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var u=a(n);return"string"==typeof e?{tag:e,props:t,children:u}:void 0===e&&n?u:Object.getPrototypeOf(e).__isAppRunComponent?o.default(e,r({},t,{children:n})):e(t,u)};var u={};function s(e,t){if(null!=t&&e)if(Array.isArray(t))l(e,t);else{var n=t;e.firstElementChild?d(e.firstElementChild,n):e.appendChild(f(n))}}function d(e,t){console.assert(!!e),function(e,t){return e.nodeName===(""+(t.tag||"")).toUpperCase()}(e,t)?(l(e,t.children),p(e,t.props)):e.parentNode.replaceChild(f(t),e)}function l(e,t){for(var n=Math.min(e.childNodes.length,t.length),r=0;r<n;r++){var o=t[r],i=e.childNodes[r];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:e.replaceChild(c(o),i));else{var a=o.props&&o.props.key;if(a)if(i.key===a)d(e.childNodes[r],o);else{var s=a&&u[a];s?(e.replaceChild(s,i),e.appendChild(i),d(e.childNodes[r],o)):(e.appendChild(f(o),i),d(e.childNodes[r],o))}else d(e.childNodes[r],o)}}for(var l=e.childNodes.length;l>n;)e.removeChild(e.lastChild),l--;if(t.length>n){var p=document.createDocumentFragment();for(r=n;r<t.length;r++)p.appendChild(f(t[r]));e.appendChild(p)}}function c(e){if(0===e.indexOf("_html:")){var t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function f(e){if(console.assert(null!==e&&void 0!==e),"string"==typeof e)return c(e);if(!e.tag)return c(JSON.stringify(e));var t="svg"===e.tag?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return p(t,e.props),e.children&&e.children.forEach(function(e){return t.appendChild(f(e))}),t}function p(e,t){console.assert(!!e);var n=e[i]||{};for(var r in t=function(e,t){var n={};return e&&Object.keys(e).forEach(function(e){return n[e]=""}),t&&Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}(n,t),e[i]=t,t){var o=t[r];if("style"===r)for(var a in e.style.cssText&&(e.style.cssText=""),o)e.style[a]!==o[a]&&(e.style[a]=o[a]);else if(r.startsWith("data-")){var s=r.substring(5);e.dataset[s]!==o&&(e.dataset[s]=o)}else r.startsWith("role")||r.startsWith("aria-")?e.getAttribute(r)!==o&&e.setAttribute(r,o):(e[r]!==o&&(e[r]=o),"key"===r&&o&&(u[o]=e))}}t.updateElement=s,t.render=s,t.Fragment=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return a(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);function o(e){if(e||(e="#"),e.startsWith("#")){var t=e.split("/"),n=t[0],o=t.slice(1);r.default.onRoute.apply(r.default,[n].concat(o))&&r.default.run.apply(r.default,[n].concat(o))}else if(e.startsWith("/")){var i=e.split("/"),a=(i[0],i[1]);o=i.slice(2);r.default.onRoute.apply(r.default,["/"+a].concat(o))&&r.default.run.apply(r.default,["/"+a].concat(o))}else r.default.onRoute(e)&&r.default.run(e)}r.default.on("#",function(e){}),r.default.on("route",function(e){return o(e)}),t.default=o},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(2),a=function(){function e(e,t,n,i){var a=this;this.state=e,this.view=t,this.update=n,this.options=i,this._app=new o.App,this._history=[],this._history_idx=-1,this.start=function(e,t){return void 0===e&&(e=null),void 0===t&&(t={render:!0}),a.mount(e,r({},t,{render:!0}))}}return e.prototype.renderState=function(e){if(this.view){var t=this.view(e);o.default.run("debug",{component:this,state:e,vdom:t||"[vdom is null - no render]"});var n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),n&&o.default.render&&(o.default.render(n,t),this.rendered&&this.rendered(this.state))}},e.prototype.setState=function(e,t){var n=this;if(e instanceof Promise)e.then(function(e){n.setState(e,t)}).catch(function(e){throw console.error(e),e});else{if(null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=this._history.concat([e]),this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}},e.prototype.mount=function(e,t){var n=this;if(void 0===e&&(e=null),console.assert(!this.element,"Component already mounted."),this.options=t=Object.assign(this.options||{},t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history){this.on(t.history.prev||"history-prev",function(){n._history_idx--,n._history_idx>=0?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=0}),this.on(t.history.next||"history-next",function(){n._history_idx++,n._history_idx<n._history.length?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=n._history.length-1})}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),this},e.prototype.is_global_event=function(e){return e&&(e.startsWith("#")||e.startsWith("/"))},e.prototype.add_action=function(e,t,n){var r=this;void 0===n&&(n={}),t&&"function"==typeof t&&this.on(e,function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var u=t.apply(void 0,[r.state].concat(i));o.default.run("debug",{component:r,event:e,e:i,state:r.state,newState:u,options:n}),r.setState(u,n)},n)},e.prototype.add_actions=function(){var e=this,t=this.update||{};i.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=i.Reflect.getMetadata(n,e);t[r.name]=[e[r.key].bind(e),r.options]}});var n={};Object.keys(t).forEach(function(e){var r=t[e];("function"==typeof r||Array.isArray(r))&&e.split(",").forEach(function(e){return n[e.trim()]=r})}),Object.keys(n).forEach(function(t){var r=n[t];"function"==typeof r?e.add_action(t,r):Array.isArray(r)&&e.add_action(t,r[0],r[1])})},e.prototype.run=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return this.global_event||this.is_global_event(e)?o.default.run.apply(o.default,[e].concat(n)):(t=this._app).run.apply(t,[e].concat(n))},e.prototype.on=function(e,t,n){return this.global_event||this.is_global_event(e)?o.default.on(e,t,n):this._app.on(e,t,n)},e.__isAppRunComponent=!0,e}();t.Component=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o={};r.default.on("get-components",function(e){return e.components=o}),t.default=function(e,t){var n=t&&t.id;n||(n="_"+e.name+"_"+performance.now());var i=n&&o[n]?o[n]:o[n]=new e(t).mount(n);return i.mounted&&setTimeout(function(){return i.mounted(t)},0),i.rendered&&setTimeout(function(){return i.rendered(i.state)},0),r.default.createElement("div",{id:n},i.view&&i.view(i.state))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.createElement=r.createElement,t.Fragment=r.Fragment,t.render=function(e,t){console.assert(!!e),r.updateElement(e,t)}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,,,,,,function(e,t,n){"use strict";var r,o="http://www.w3.org/1999/xhtml",i="undefined"==typeof document?void 0:document,a=i?i.body||i.createElement("div"):{},u=a.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:a.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};function s(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function d(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}var l={OPTION:function(e,t){d(e,t,"selected")},INPUT:function(e,t){d(e,t,"checked"),d(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),u(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!u(t,null,"multiple")){for(var n=0,r=t.firstChild;r;){var o=r.nodeName;if(o&&"OPTION"===o.toUpperCase()){if(u(r,null,"selected")){n;break}n++}r=r.nextSibling}e.selectedIndex=n}}},c=1,f=3,p=8;function h(){}function v(e){return e.id}var y=function(e){return function(t,n,a){if(a||(a={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var u=n;(n=i.createElement("html")).innerHTML=u}else d=n,!r&&i.createRange&&(r=i.createRange()).selectNode(i.body),r&&r.createContextualFragment?y=r.createContextualFragment(d):(y=i.createElement("body")).innerHTML=d,n=y.childNodes[0];var d,y,m,g=a.getNodeKey||v,_=a.onBeforeNodeAdded||h,b=a.onNodeAdded||h,C=a.onBeforeElUpdated||h,N=a.onElUpdated||h,x=a.onBeforeNodeDiscarded||h,E=a.onNodeDiscarded||h,O=a.onBeforeElChildrenUpdated||h,w=!0===a.childrenOnly,A={};function j(e){m?m.push(e):m=[e]}function S(e,t,n){!1!==x(e)&&(t&&t.removeChild(e),E(e),function e(t,n){if(t.nodeType===c)for(var r=t.firstChild;r;){var o=void 0;n&&(o=g(r))?j(o):(E(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function T(e){b(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=g(t);if(r){var o=A[r];o&&s(t,o)&&(t.parentNode.replaceChild(o,t),M(o,t))}T(t),t=n}}function M(r,o,a){var u,d=g(o);if(d&&delete A[d],!n.isSameNode||!n.isSameNode(t)){if(!a){if(!1===C(r,o))return;if(e(r,o),N(r),!1===O(r,o))return}if("TEXTAREA"!==r.nodeName){var h,v,y,m,b=o.firstChild,x=r.firstChild;e:for(;b;){for(y=b.nextSibling,h=g(b);x;){if(v=x.nextSibling,b.isSameNode&&b.isSameNode(x)){b=y,x=v;continue e}u=g(x);var E=x.nodeType,w=void 0;if(E===b.nodeType&&(E===c?(h?h!==u&&((m=A[h])?x.nextSibling===m?w=!1:(r.insertBefore(m,x),v=x.nextSibling,u?j(u):S(x,r,!0),x=m):w=!1):u&&(w=!1),(w=!1!==w&&s(x,b))&&M(x,b)):E!==f&&E!=p||(w=!0,x.nodeValue!==b.nodeValue&&(x.nodeValue=b.nodeValue))),w){b=y,x=v;continue e}u?j(u):S(x,r,!0),x=v}if(h&&(m=A[h])&&s(m,b))r.appendChild(m),M(m,b);else{var P=_(b);!1!==P&&(P&&(b=P),b.actualize&&(b=b.actualize(r.ownerDocument||i)),r.appendChild(b),T(b))}b=y,x=v}for(;x;)v=x.nextSibling,(u=g(x))?j(u):S(x,r,!0),x=v}var R=l[r.nodeName];R&&R(r,o)}}!function e(t){if(t.nodeType===c)for(var n=t.firstChild;n;){var r=g(n);r&&(A[r]=n),e(n),n=n.nextSibling}}(t);var P,R,k=t,F=k.nodeType,U=n.nodeType;if(!w)if(F===c)U===c?s(t,n)||(E(t),k=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(P=n.nodeName,(R=n.namespaceURI)&&R!==o?i.createElementNS(R,P):i.createElement(P)))):k=n;else if(F===f||F===p){if(U===F)return k.nodeValue!==n.nodeValue&&(k.nodeValue=n.nodeValue),k;k=n}if(k===n)E(t);else if(M(k,n,w),m)for(var V=0,W=m.length;V<W;V++){var I=A[m[V]];I&&S(I,I.parentNode,!1)}return!w&&k!==t&&t.parentNode&&(k.actualize&&(k=k.actualize(t.ownerDocument||i)),t.parentNode.replaceChild(k,t)),k}}(function(e,t){var n,r,o,i,a,s=t.attributes;for(n=s.length-1;n>=0;--n)o=(r=s[n]).name,i=r.namespaceURI,a=r.value,i?(o=r.localName||o,e.getAttributeNS(i,o)!==a&&e.setAttributeNS(i,o,a)):e.getAttribute(o)!==a&&e.setAttribute(o,a);for(n=(s=e.attributes).length-1;n>=0;--n)!1!==(r=s[n]).specified&&(o=r.name,(i=r.namespaceURI)?(o=r.localName||o,u(t,i,o)||e.removeAttributeNS(i,o)):u(t,null,o)||e.removeAttribute(o))});e.exports=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.createElement=r.createElement,t.Fragment=r.Fragment;var o=n(20);t.render=function(e,t){console.assert(!!e),"string"==typeof t?e.firstChild?o(e.firstChild,t):e.innerHTML=t:r.updateElement(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.Component=r.Component,t.on=r.on,t.update=r.update;var o=n(21);r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,t.default=r.default,"object"==typeof window&&(window.Component=r.Component)}])});
//# sourceMappingURL=apprun-html.js.map