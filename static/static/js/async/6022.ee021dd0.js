"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([["6022"],{23541:function(e,n,t){t.d(n,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},u=0,i=function(e){return e&&(e.host||i(e.parentNode))},c=function(e,n,t,c){var l,f=(l=n,(Array.isArray(e)?e:[e]).map(function(e){if(l.contains(e))return e;var n=i(e);return n&&l.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",l,". Doing nothing"),null)}).filter(function(e){return!!e}));!a[t]&&(a[t]=new WeakMap);var d=a[t],s=[],v=new Set,p=new Set(f),m=function(e){if(!(!e||v.has(e)))v.add(e),m(e.parentNode)};f.forEach(m);var h=function(e){if(!(!e||p.has(e)))Array.prototype.forEach.call(e.children,function(e){if(v.has(e))h(e);else try{var n=e.getAttribute(c),a=null!==n&&"false"!==n,u=(r.get(e)||0)+1,i=(d.get(e)||0)+1;r.set(e,u),d.set(e,i),s.push(e),1===u&&a&&o.set(e,!0),1===i&&e.setAttribute(t,"true"),!a&&e.setAttribute(c,"true")}catch(n){console.error("aria-hidden: cannot operate on ",e,n)}})};return h(n),v.clear(),u++,function(){s.forEach(function(e){var n=r.get(e)-1,a=d.get(e)-1;r.set(e,n),d.set(e,a),!n&&(!o.has(e)&&e.removeAttribute(c),o.delete(e)),!a&&e.removeAttribute(t)}),!--u&&(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,n,t){void 0===t&&(t="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]);var a=n||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),c(o,a,t,"aria-hidden")):function(){return null}}},5356:function(e,n,t){t.d(n,{V:function(){return o}});var r,o=function(){return r?r:t.nc}},22709:function(e,n,t){t.d(n,{jp:function(){return s}});var r=t(5674),o=t(15576),a=t(71642),u=t(56436),i=(0,o.Ws)(),c="data-scroll-locked",l=function(e,n,t,r){var o=e.left,u=e.top,i=e.right,l=e.gap;return void 0===t&&(t="margin"),"\n  .".concat(a.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body[").concat(c,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a.pF," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(a.zi," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(a.pF," .").concat(a.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(a.zi," .").concat(a.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(c,"] {\n    ").concat(a.Av,": ").concat(l,"px;\n  }\n")},f=function(){var e=parseInt(document.body.getAttribute(c)||"0",10);return isFinite(e)?e:0},d=function(){r.useEffect(function(){return document.body.setAttribute(c,(f()+1).toString()),function(){var e=f()-1;e<=0?document.body.removeAttribute(c):document.body.setAttribute(c,e.toString())}},[])},s=function(e){var n=e.noRelative,t=e.noImportant,o=e.gapMode,a=void 0===o?"margin":o;d();var c=r.useMemo(function(){return(0,u.P)(a)},[a]);return r.createElement(i,{styles:l(c,!n,a,t?"":"!important")})}},71642:function(e,n,t){t.d(n,{Av:function(){return u},pF:function(){return r},xv:function(){return a},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",a="with-scroll-bars-hidden",u="--removed-body-scroll-bar-size"},1499:function(e,n,t){t.d(n,{jp:function(){return r.jp}});var r=t(22709)},56436:function(e,n,t){t.d(n,{P:function(){return u}});var r={left:0,top:0,right:0,gap:0},o=function(e){return parseInt(e||"",10)||0},a=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],a=n["padding"===e?"paddingRight":"marginRight"];return[o(t),o(r),o(a)]},u=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return r;var n=a(e),t=document.documentElement.clientWidth,o=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,o-t+n[2]-n[0])}}},97787:function(e,n,t){var r=t(28395),o=t(5674),a=t(13974),u=t(14443),i=o.forwardRef(function(e,n){return o.createElement(a.f,(0,r.pi)({},e,{ref:n,sideCar:u.Z}))});i.classNames=a.f.classNames,n.Z=i},88102:function(e,n,t){t.d(n,{k5:function(){return p}});var r=t(28395),o=t(5674),a=t(1499),u=t(15576),i=t(40432),c=t(56939),l=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},f=function(e){return[e.deltaX,e.deltaY]},d=function(e){return e&&"current"in e?e.current:e},s=0,v=[];function p(e){var n,t=o.useRef([]),p=o.useRef([0,0]),m=o.useRef(),h=o.useState(s++)[0],g=o.useState(u.Ws)[0],y=o.useRef(e);o.useEffect(function(){y.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(h));var n=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(d),!0).filter(Boolean);return n.forEach(function(e){return e.classList.add("allow-interactivity-".concat(h))}),function(){document.body.classList.remove("block-interactivity-".concat(h)),n.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(h))})}}},[e.inert,e.lockRef.current,e.shards]);var b=o.useCallback(function(e,n){if("touches"in e&&2===e.touches.length)return!y.current.allowPinchZoom;var t,r=l(e),o=p.current,a="deltaX"in e?e.deltaX:o[0]-r[0],u="deltaY"in e?e.deltaY:o[1]-r[1],i=e.target,f=Math.abs(a)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===f&&"range"===i.type)return!1;var d=(0,c.D)(f,i);if(!d)return!0;if(d?t=f:(t="v"===f?"h":"v",d=(0,c.D)(f,i)),!d)return!1;if(!m.current&&"changedTouches"in e&&(a||u)&&(m.current=t),!t)return!0;var s=m.current||t;return(0,c.r)(s,n,e,"h"===s?a:u,!0)},[]),E=o.useCallback(function(e){if(!!v.length&&v[v.length-1]===g){var n="deltaY"in e?f(e):l(e),r=t.current.filter(function(t){var r,o;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta,o=n,r[0]===o[0]&&r[1]===o[1])})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(y.current.shards||[]).map(d).filter(Boolean).filter(function(n){return n.contains(e.target)});(o.length>0?b(e,o[0]):!y.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),w=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var n=null;null!==e;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),S=o.useCallback(function(e){p.current=l(e),m.current=void 0},[]),k=o.useCallback(function(n){w(n.type,f(n),n.target,b(n,e.lockRef.current))},[]),C=o.useCallback(function(n){w(n.type,l(n),n.target,b(n,e.lockRef.current))},[]);o.useEffect(function(){return v.push(g),e.setCallbacks({onScrollCapture:k,onWheelCapture:k,onTouchMoveCapture:C}),document.addEventListener("wheel",E,i.i),document.addEventListener("touchmove",E,i.i),document.addEventListener("touchstart",S,i.i),function(){v=v.filter(function(e){return e!==g}),document.removeEventListener("wheel",E,i.i),document.removeEventListener("touchmove",E,i.i),document.removeEventListener("touchstart",S,i.i)}},[]);var A=e.removeScrollBar,L=e.inert;return o.createElement(o.Fragment,null,L?o.createElement(g,{styles:(n=h,"\n  .block-interactivity-".concat(n," {pointer-events: none;}\n  .allow-interactivity-").concat(n," {pointer-events: all;}\n"))}):null,A?o.createElement(a.jp,{gapMode:e.gapMode}):null)}},13974:function(e,n,t){t.d(n,{f:function(){return l}});var r=t(28395),o=t(5674),a=t(71642),u=t(80075),i=t(90386),c=function(){},l=o.forwardRef(function(e,n){var t=o.useRef(null),a=o.useState({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:c}),l=a[0],f=a[1],d=e.forwardProps,s=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,S=e.gapMode,k=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=(0,u.q)([t,n]),A=(0,r.pi)((0,r.pi)({},k),l);return o.createElement(o.Fragment,null,m&&o.createElement(g,{sideCar:i._,removeScrollBar:p,shards:h,noIsolation:y,inert:b,setCallbacks:f,allowPinchZoom:!!E,lockRef:t,gapMode:S}),d?o.cloneElement(o.Children.only(s),(0,r.pi)((0,r.pi)({},A),{ref:C})):o.createElement(void 0===w?"div":w,(0,r.pi)({},A,{className:v,ref:C}),s))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:a.zi,zeroRight:a.pF}},40432:function(e,n,t){t.d(n,{i:function(){return a}});var r=!1;if("undefined"!=typeof window)try{var o=Object.defineProperty({},"passive",{get:function(){return r=!0,!0}});window.addEventListener("test",o,o),window.removeEventListener("test",o,o)}catch(e){r=!1}var a=!!r&&{passive:!1}},56939:function(e,n,t){t.d(n,{D:function(){return o},r:function(){return i}});var r=function(e,n){var t=window.getComputedStyle(e);return"hidden"!==t[n]&&!(t.overflowY===t.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===t[n])},o=function(e,n){var t=n.ownerDocument,r=n;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),a(e,r)){var o=u(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==t.body);return!1},a=function(e,n){return"v"===e?r(n,"overflowY"):r(n,"overflowX")},u=function(e,n){var t,r;return"v"===e?[(t=n).scrollTop,t.scrollHeight,t.clientHeight]:[(r=n).scrollLeft,r.scrollWidth,r.clientWidth]},i=function(e,n,t,r,o){var i,c,l=(i=e,c=window.getComputedStyle(n).direction,"h"===i&&"rtl"===c?-1:1),f=l*r,d=t.target,s=n.contains(d),v=!1,p=f>0,m=0,h=0;do{var g=u(e,d),y=g[0],b=g[1]-g[2]-l*y;(y||b)&&a(e,d)&&(m+=b,h+=y),d instanceof ShadowRoot?d=d.host:d=d.parentNode}while(!s&&d!==document.body||s&&(n.contains(d)||n===d));return p&&(o&&1>Math.abs(m)||!o&&f>m)?v=!0:!p&&(o&&1>Math.abs(h)||!o&&-f>h)&&(v=!0),v}},90386:function(e,n,t){t.d(n,{_:function(){return r}});var r=(0,t(87122)._)()},14443:function(e,n,t){var r=t(66781),o=t(88102),a=t(90386);n.Z=(0,r.L)(a._,o.k5)},82476:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(27419),o=function(){var e=(0,r.w)();return function(n){return e(n.styles,n.dynamic),null}}},27419:function(e,n,t){t.d(n,{w:function(){return a}});var r=t(5674),o=t(22722),a=function(){var e=(0,o.Q)();return function(n,t){r.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}}},15576:function(e,n,t){t.d(n,{Ws:function(){return r.W}});var r=t(82476);t(27419)},22722:function(e,n,t){t.d(n,{Q:function(){return o}});var r=t(5356),o=function(){var e=0,n=null;return{add:function(t){if(0==e&&(n=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=(0,r.V)();return n&&e.setAttribute("nonce",n),e}())){var o,a,u;o=n,a=t,o.styleSheet?o.styleSheet.cssText=a:o.appendChild(document.createTextNode(a)),u=n,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){!--e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}}},99994:function(e,n,t){t.d(n,{k:function(){return r}});function r(e,n){return"function"==typeof e?e(n):e&&(e.current=n),e}},80075:function(e,n,t){t.d(n,{q:function(){return c}});var r=t(5674),o=t(99994),a=t(15429),u="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,i=new WeakMap;function c(e,n){var t=(0,a.W)(n||null,function(n){return e.forEach(function(e){return(0,o.k)(e,n)})});return u(function(){var n=i.get(t);if(n){var r=new Set(n),a=new Set(e),u=t.current;r.forEach(function(e){!a.has(e)&&(0,o.k)(e,null)}),a.forEach(function(e){!r.has(e)&&(0,o.k)(e,u)})}i.set(t,e)},[e]),t}},15429:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(5674);function o(e,n){var t=(0,r.useState)(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(value){var r=t.value;r!==value&&(t.value=value,t.callback(value,r))}}}})[0];return t.callback=n,t.facade}},66781:function(e,n,t){t.d(n,{L:function(){return u}});var r=t(28395),o=t(5674),a=function(e){var n=e.sideCar,t=(0,r._T)(e,["sideCar"]);if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=n.read();if(!a)throw Error("Sidecar medium not found");return o.createElement(a,(0,r.pi)({},t))};function u(e,n){return e.useMedium(n),a}a.isSideCarExport=!0},87122:function(e,n,t){t.d(n,{_:function(){return a}});var r=t(28395);function o(e){return e}function a(e){void 0===e&&(e={});var n,t,a,u,i=(n=null,void 0===t&&(t=o),a=[],u=!1,{read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var n=t(e,u);return a.push(n),function(){a=a.filter(function(e){return e!==n})}},assignSyncMedium:function(e){for(u=!0;a.length;){var n=a;a=[],n.forEach(e)}a={push:function(n){return e(n)},filter:function(){return a}}},assignMedium:function(e){u=!0;var n=[];if(a.length){var t=a;a=[],t.forEach(e),n=a}var r=function(){var t=n;n=[],t.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){n.push(e),o()},filter:function(e){return n=n.filter(e),a}}}});return i.options=(0,r.pi)({async:!0,ssr:!1},e),i}},68:function(e,n,t){t.d(n,{EW:function(){return a}});var r=t(92494),o=0;function a(){r.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??u()),document.body.insertAdjacentElement("beforeend",e[1]??u()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function u(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},51871:function(e,n,t){t.d(n,{M:function(){return d}});var r=t(92494),o=t(23712),a=t(73174),u=t(42783),i=t(85893),c="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",f={bubbles:!1,cancelable:!0},d=r.forwardRef((e,n)=>{let{loop:t=!1,trapped:d=!1,onMountAutoFocus:h,onUnmountAutoFocus:g,...y}=e,[b,E]=r.useState(null),w=(0,u.W)(h),S=(0,u.W)(g),k=r.useRef(null),C=(0,o.e)(n,e=>E(e)),A=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(d){let e=function(e){if(A.paused||!b)return;let n=e.target;b.contains(n)?k.current=n:p(k.current,{select:!0})},n=function(e){if(A.paused||!b)return;let n=e.relatedTarget;null!==n&&!b.contains(n)&&p(k.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",n);let t=new MutationObserver(function(e){if(document.activeElement===document.body)for(let n of e)n.removedNodes.length>0&&p(b)});return b&&t.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",n),t.disconnect()}}},[d,b,A.paused]),r.useEffect(()=>{if(b){m.add(A);let e=document.activeElement;if(!b.contains(e)){let n=new CustomEvent(c,f);b.addEventListener(c,w),b.dispatchEvent(n),!n.defaultPrevented&&(function(e,{select:n=!1}={}){let t=document.activeElement;for(let r of e)if(p(r,{select:n}),document.activeElement!==t)return}(function(e){return e.filter(e=>"A"!==e.tagName)}(s(b)),{select:!0}),document.activeElement===e&&p(b))}return()=>{b.removeEventListener(c,w),setTimeout(()=>{let n=new CustomEvent(l,f);b.addEventListener(l,S),b.dispatchEvent(n),!n.defaultPrevented&&p(e??document.body,{select:!0}),b.removeEventListener(l,S),m.remove(A)},0)}}},[b,w,S,A]);let L=r.useCallback(e=>{if(!t&&!d||A.paused)return;let n="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(n&&r){let n=e.currentTarget,[o,a]=function(e){let n=s(e),t=v(n,e);return[t,v(n.reverse(),e)]}(n);o&&a?e.shiftKey||r!==a?e.shiftKey&&r===o&&(e.preventDefault(),t&&p(a,{select:!0})):(e.preventDefault(),t&&p(o,{select:!0})):r===n&&e.preventDefault()}},[t,d,A.paused]);return(0,i.jsx)(a.WV.div,{tabIndex:-1,...y,ref:C,onKeyDown:L})});d.displayName="FocusScope";function s(e){let n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let n="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||n?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function v(e,n){for(let t of e)if(!function(e,{upTo:n}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,{upTo:n}))return t}function p(e,{select:n=!1}={}){if(e&&e.focus){var t;let r=document.activeElement;if(e.focus({preventScroll:!0}),e!==r&&(t=e)instanceof HTMLInputElement&&"select"in t&&n)e.select()}}var m=function(){let e=[];return{add(n){let t=e[0];n!==t&&t?.pause(),(e=h(e,n)).unshift(n)},remove(n){e=h(e,n),e[0]?.resume()}}}();function h(e,n){let t=[...e],r=t.indexOf(n);return -1!==r&&t.splice(r,1),t}},28395:function(e,n,t){t.d(n,{_T:function(){return o},ev:function(){return a},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t],n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function o(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>n.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t}function a(e,n,t){if(t||2==arguments.length)for(var r,o=0,a=n.length;o<a;o++)(r||!(o in n))&&(!r&&(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}}}]);