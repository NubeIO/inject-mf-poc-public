(()=>{var e={204:function(e,r,t){Promise.all([t.e("373"),t.e("457")]).then(t.bind(t,3))}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,t.c=r,t.federation||(t.federation={chunkMatcher:function(e){return 373!=e}}),t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce(function(r,n){return t.f[n](e,r),r},[]))},t.u=function(e){return"static/js/async/"+e+"."+({366:"89f6ad70",373:"036b6373",389:"84a02871",457:"97f809e9"})[e]+".js"},t.miniCssF=function(e){return"static/css/async/"+e+".8d0fdb57.css"},t.h=function(){return"ede6a8cb3408f840"},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},(()=>{var e={},r="i18n_manager:";t.l=function(n,o,i,a){if(e[n]){e[n].push(o);return}if(void 0!==i){for(var u,c,s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+i){u=l;break}}}!u&&(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",r+i),u.src=n),e[n]=[o];var d=function(r,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(t)}),r)return r(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}})(),(()=>{var e=[];t.O=function(r,n,o,i){if(n){i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,o,i];return}for(var u=1/0,a=0;a<e.length;a++){for(var n=e[a][0],o=e[a][1],i=e[a][2],c=!0,s=0;s<n.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every(function(e){return t.O[e](n[s])})?n.splice(s--,1):(c=!1,i<u&&(u=i));if(c){e.splice(a--,1);var f=o();void 0!==f&&(r=f)}}return r}})(),t.rv=function(){return"1.0.0-alpha.5"},t.S={},t.initializeSharingData={scopeToSharingDataMapping:{default:[{name:"react-dom",version:"18.3.1",factory:()=>Promise.all([t.e("389"),t.e("373")]).then(()=>()=>t(967)),eager:0},{name:"react",version:"18.3.1",factory:()=>t.e("366").then(()=>()=>t(271)),eager:0}]},uniqueName:"i18n_manager"},t.I=t.I||function(){throw Error("should have __webpack_require__.I")},(()=>{t.g.importScripts&&(e=t.g.location+"");var e,r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length){for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../../"})(),t.consumesLoadingData={chunkMapping:{373:["929"],457:["818"]},moduleIdToConsumeDataMapping:{929:{shareScope:"default",shareKey:"react",import:"react",requiredVersion:"^18.3.1",strictVersion:!1,singleton:!0,eager:!1,fallback:()=>t.e("366").then(()=>()=>t(271))},818:{shareScope:"default",shareKey:"react-dom",import:"react-dom",requiredVersion:"^18.3.1",strictVersion:!1,singleton:!0,eager:!1,fallback:()=>t.e("389").then(()=>()=>t(967))}},initialConsumes:[]},t.f.consumes=t.f.consumes||function(){throw Error("should have __webpack_require__.f.consumes")},(()=>{if("undefined"!=typeof document){var e=function(e,r,n,o,i){var a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc),a.onerror=a.onload=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||r,c=Error("Loading CSS chunk "+e+" failed.\\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}},a.href=r,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},r=function(e,r){for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=t[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===r))return o}for(var a=document.getElementsByTagName("style"),n=0;n<a.length;n++){var o=a[n],i=o.getAttribute("data-href");if(i===e||i===r)return o}},n={980:0};t.f.miniCss=function(o,i){if(n[o])i.push(n[o]);else if(0!==n[o]&&({457:1})[o]){var a;i.push(n[o]=(a=o,new Promise(function(n,o){var i=t.miniCssF(a),u=t.p+i;if(r(i,u))return n();e(a,u,null,n,o)})).then(function(){n[o]=0},function(e){throw delete n[o],e}))}}}})(),(()=>{var e={980:0};t.f.j=function(r,n){var o=t.o(e,r)?e[r]:void 0;if(0!==o){if(o)n.push(o[2]);else if(373!=r){var i=new Promise(function(t,n){o=e[r]=[t,n]});n.push(o[2]=i);var a=t.p+t.u(r),u=Error();t.l(a,function(n){if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}},"chunk-"+r,r)}else e[r]=0}},t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o=n[0],i=n[1],a=n[2],u,c,s=0;if(o.some(function(r){return 0!==e[r]})){for(u in i)t.o(i,u)&&(t.m[u]=i[u]);if(a)var f=a(t)}for(r&&r(n);s<o.length;s++)c=o[s],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(f)},n=self.webpackChunki18n_manager=self.webpackChunki18n_manager||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t.ruid="bundler=rspack@1.0.0-alpha.5",t.O(void 0,["889"],function(){return t("105")});var n=t.O(void 0,["889"],function(){return t("204")});n=t.O(n)})();