(()=>{var e={204:function(e,r,t){Promise.all([t.e("373"),t.e("200")]).then(t.bind(t,789))}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,t.c=r,t.federation||(t.federation={chunkMatcher:function(e){return 373!=e}}),t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce(function(r,n){return t.f[n](e,r),r},[]))},t.u=function(e){return"static/js/async/"+e+"."+({200:"f363da2f",366:"89f6ad70",373:"036b6373",389:"84a02871"})[e]+".js"},t.miniCssF=function(e){return"static/css/async/"+e+".8d0fdb57.css"},t.h=function(){return"7b45a94a233233a3"},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},(()=>{var e={},r="i18n_manager:";t.l=function(n,o,a,i){if(e[n]){e[n].push(o);return}if(void 0!==a){for(var u,c,s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+a){u=l;break}}}!u&&(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",r+a),u.src=n),e[n]=[o];var d=function(r,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(t)}),r)return r(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}})(),(()=>{var e=[];t.O=function(r,n,o,a){if(n){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,o,a];return}for(var u=1/0,i=0;i<e.length;i++){for(var n=e[i][0],o=e[i][1],a=e[i][2],c=!0,s=0;s<n.length;s++)(!1&a||u>=a)&&Object.keys(t.O).every(function(e){return t.O[e](n[s])})?n.splice(s--,1):(c=!1,a<u&&(u=a));if(c){e.splice(i--,1);var f=o();void 0!==f&&(r=f)}}return r}})(),t.rv=function(){return"1.0.0-alpha.5"},t.S={},t.initializeSharingData={scopeToSharingDataMapping:{default:[{name:"react-dom",version:"18.3.1",factory:()=>Promise.all([t.e("389"),t.e("373")]).then(()=>()=>t(967)),eager:0},{name:"react",version:"18.3.1",factory:()=>t.e("366").then(()=>()=>t(271)),eager:0}]},uniqueName:"i18n_manager"},t.I=t.I||function(){throw Error("should have __webpack_require__.I")},(()=>{t.g.importScripts&&(e=t.g.location+"");var e,r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length){for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../../"})(),t.consumesLoadingData={chunkMapping:{373:["929"],200:["818"]},moduleIdToConsumeDataMapping:{929:{shareScope:"default",shareKey:"react",import:"react",requiredVersion:"^18.3.1",strictVersion:!1,singleton:!0,eager:!1,fallback:()=>t.e("366").then(()=>()=>t(271))},818:{shareScope:"default",shareKey:"react-dom",import:"react-dom",requiredVersion:"^18.3.1",strictVersion:!1,singleton:!0,eager:!1,fallback:()=>t.e("389").then(()=>()=>t(967))}},initialConsumes:[]},t.f.consumes=t.f.consumes||function(){throw Error("should have __webpack_require__.f.consumes")},(()=>{if("undefined"!=typeof document){var e=function(e,r,n,o,a){var i=document.createElement("link");return i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc),i.onerror=i.onload=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||r,c=Error("Loading CSS chunk "+e+" failed.\\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=u,i.parentNode&&i.parentNode.removeChild(i),a(c)}},i.href=r,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},r=function(e,r){for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=t[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===r))return o}for(var i=document.getElementsByTagName("style"),n=0;n<i.length;n++){var o=i[n],a=o.getAttribute("data-href");if(a===e||a===r)return o}},n={980:0};t.f.miniCss=function(o,a){if(n[o])a.push(n[o]);else if(0!==n[o]&&({200:1})[o]){var i;a.push(n[o]=(i=o,new Promise(function(n,o){var a=t.miniCssF(i),u=t.p+a;if(r(a,u))return n();e(i,u,null,n,o)})).then(function(){n[o]=0},function(e){throw delete n[o],e}))}}}})(),(()=>{var e={980:0};t.f.j=function(r,n){var o=t.o(e,r)?e[r]:void 0;if(0!==o){if(o)n.push(o[2]);else if(373!=r){var a=new Promise(function(t,n){o=e[r]=[t,n]});n.push(o[2]=a);var i=t.p+t.u(r),u=Error();t.l(i,function(n){if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}},"chunk-"+r,r)}else e[r]=0}},t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o=n[0],a=n[1],i=n[2],u,c,s=0;if(o.some(function(r){return 0!==e[r]})){for(u in a)t.o(a,u)&&(t.m[u]=a[u]);if(i)var f=i(t)}for(r&&r(n);s<o.length;s++)c=o[s],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(f)},n=self.webpackChunki18n_manager=self.webpackChunki18n_manager||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t.ruid="bundler=rspack@1.0.0-alpha.5",t.O(void 0,["889"],function(){return t("105")});var n=t.O(void 0,["889"],function(){return t("204")});n=t.O(n)})();