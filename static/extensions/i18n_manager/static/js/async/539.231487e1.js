(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["539"],{626:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},690:function(e,t,n){"use strict";let a;n.r(t),n.d(t,{useSSR:()=>Q,getInitialProps:()=>U,Trans:()=>M,withSSR:()=>X,selectOrdinal:()=>er,useTranslation:()=>_,withTranslation:()=>Z,setDefaults:()=>I,TransWithoutContext:()=>F,setI18n:()=>j,I18nContext:()=>D,select:()=>ea,date:()=>ee,Translation:()=>G,getDefaults:()=>S,getI18n:()=>C,I18nextProvider:()=>J,composeInitialProps:()=>H,initReactI18next:()=>B,number:()=>en,plural:()=>ei,time:()=>et});let i=n("929"),r=n("626"),s=n.n(r);var l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function o(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(s()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var a=e.indexOf("--\x3e");return{type:"comment",comment:-1!==a?e.slice(4,a):""}}for(var i=new RegExp(l),r=null;null!==(r=i.exec(e));)if(r[0].trim()){if(r[1]){var o=r[1].trim(),u=[o,""];o.indexOf("=")>-1&&(u=o.split("=")),t.attrs[u[0]]=u[1],i.lastIndex--}else r[2]&&(t.attrs[r[2]]=r[3].trim().substring(1,r[3].length-1))}return t}var u=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,c=/^\s*$/,p=Object.create(null);let d={parse:function(e,t){t||(t={}),t.components||(t.components=p);var n,a=[],i=[],r=-1,s=!1;if(0!==e.indexOf("<")){var l=e.indexOf("<");a.push({type:"text",content:-1===l?e:e.substring(0,l)})}return e.replace(u,function(l,u){if(s){if(l!=="</"+n.name+">")return;s=!1}var p,d="/"!==l.charAt(1),f=l.startsWith("\x3c!--"),m=u+l.length,g=e.charAt(m);if(f){var h=o(l);return r<0?a.push(h):(p=i[r]).children.push(h),a}if(d&&(r++,"tag"===(n=o(l)).type&&t.components[n.name]&&(n.type="component",s=!0),n.voidElement||s||!g||"<"===g||n.children.push({type:"text",content:e.slice(m,e.indexOf("<",m))}),0===r&&a.push(n),(p=i[r-1])&&p.children.push(n),i[r]=n),(!d||n.voidElement)&&(r>-1&&(n.voidElement||n.name===l.slice(2,-1))&&(n=-1==--r?a:i[r]),!s&&"<"!==g&&g)){p=-1===r?a:i[r].children;var y=e.indexOf("<",m),b=e.slice(m,-1===y?void 0:y);c.test(b)&&(b=" "),(y>-1&&r+p.length>=0||" "!==b)&&p.push({type:"text",content:b})}}),a}},f=(...e)=>{console?.warn&&(E(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},m={},g=(...e)=>{(!E(e[0])||!m[e[0]])&&(E(e[0])&&(m[e[0]]=new Date),f(...e))},h=(e,t)=>()=>{if(e.isInitialized)t();else{let n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},y=(e,t,n)=>{e.loadNamespaces(t,h(e,n))},b=(e,t,n,a)=>{E(n)&&(n=[n]),n.forEach(t=>{0>e.options.ns.indexOf(t)&&e.options.ns.push(t)}),e.loadLanguages(t,h(e,a))},x=(e,t,n={})=>t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,a)=>{if(n.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))return!1}}):(g("i18n.languages were undefined or empty",t.languages),!0),v=e=>e.displayName||e.name||(E(e)&&e.length>0?e:"Unknown"),E=e=>"string"==typeof e,$=e=>"object"==typeof e&&null!==e,N=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,O={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},k=e=>O[e],w={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(N,k)},I=(e={})=>{w={...w,...e}},S=()=>w,j=e=>{a=e},C=()=>a,R=(e,t)=>{if(!e)return!1;let n=e.props?.children??e.children;return t?n.length>0:!!n},T=e=>{if(!e)return[];let t=e.props?.children??e.children;return e.props?.i18nIsDynamicList?P(t):t},L=e=>Array.isArray(e)&&e.every(i.isValidElement),P=e=>Array.isArray(e)?e:[e],z=(e,t)=>{let n={...t};return n.props=Object.assign(e.props,t.props),n},V=(e,t)=>{if(!e)return"";let n="",a=P(e),r=t?.transSupportBasicHtmlNodes?t.transKeepBasicHtmlNodesFor??[]:[];return a.forEach((e,a)=>{if(E(e))n+=`${e}`;else if((0,i.isValidElement)(e)){let{props:i,type:s}=e,l=Object.keys(i).length,o=r.indexOf(s)>-1,u=i.children;if(u||!o||l){if(!u&&(!o||l)||i.i18nIsDynamicList)n+=`<${a}></${a}>`;else if(o&&1===l&&E(u))n+=`<${s}>${u}</${s}>`;else{let e=V(u,t);n+=`<${a}>${e}</${a}>`}}else n+=`<${s}/>`}else if(null===e)f("Trans: the passed in value is invalid - seems you passed in a null child.");else if($(e)){let{format:t,...a}=e,i=Object.keys(a);if(1===i.length){let e=t?`${i[0]}, ${t}`:i[0];n+=`{{${e}}}`}else f("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else f("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)}),n},A=(e,t,n,a,r,s)=>{if(""===t)return[];let l=a.transKeepBasicHtmlNodesFor||[],o=t&&new RegExp(l.map(e=>`<${e}`).join("|")).test(t);if(!e&&!o&&!s)return[t];let u={},c=e=>{P(e).forEach(e=>{!E(e)&&(R(e)?c(T(e)):$(e)&&!(0,i.isValidElement)(e)&&Object.assign(u,e))})};c(e);let p=d.parse(`<0>${t}</0>`),f={...u,...r},m=(e,t,n)=>{let a=T(e),i=h(a,t.children,n);return L(a)&&0===i.length||e.props?.i18nIsDynamicList?a:i},g=(e,t,n,a,r)=>{e.dummy?(e.children=t,n.push((0,i.cloneElement)(e,{key:a},r?void 0:t))):n.push(...i.Children.map([e],e=>{let n={...e.props};return delete n.i18nIsDynamicList,(0,i.createElement)(e.type,{...n,key:a,ref:e.ref},r?null:t)}))},h=(t,r,u)=>{let c=P(t);return P(r).reduce((t,r,p)=>{let d=r.children?.[0]?.content&&n.services.interpolator.interpolate(r.children[0].content,f,n.language);if("tag"===r.type){let s=c[parseInt(r.name,10)];1===u.length&&!s&&(s=u[0][r.name]),!s&&(s={});let y=0!==Object.keys(r.attrs).length?z({props:r.attrs},s):s,b=(0,i.isValidElement)(y),x=b&&R(r,!0)&&!r.voidElement,v=o&&$(y)&&y.dummy&&!b,N=$(e)&&Object.hasOwnProperty.call(e,r.name);if(E(y)){let e=n.services.interpolator.interpolate(y,f,n.language);t.push(e)}else if(R(y)||x){let e=m(y,r,u);g(y,e,t,p)}else if(v)g(y,h(c,r.children,u),t,p);else if(Number.isNaN(parseFloat(r.name))){if(N){let e=m(y,r,u);g(y,e,t,p,r.voidElement)}else if(a.transSupportBasicHtmlNodes&&l.indexOf(r.name)>-1){if(r.voidElement)t.push((0,i.createElement)(r.name,{key:`${r.name}-${p}`}));else{let e=h(c,r.children,u);t.push((0,i.createElement)(r.name,{key:`${r.name}-${p}`},e))}}else if(r.voidElement)t.push(`<${r.name} />`);else{let e=h(c,r.children,u);t.push(`<${r.name}>${e}</${r.name}>`)}}else if($(y)&&!b){let e=r.children[0]?d:null;e&&t.push(e)}else g(y,d,t,p,1!==r.children.length||!d)}else if("text"===r.type){let e=a.transWrapTextNodes,l=s?a.unescape(n.services.interpolator.interpolate(r.content,f,n.language)):n.services.interpolator.interpolate(r.content,f,n.language);e?t.push((0,i.createElement)(e,{key:`${r.name}-${p}`},l)):t.push(l)}return t},[])};return T(h([{dummy:!0,children:e||[]}],p,P(e||[]))[0])};function F({children:e,count:t,parent:n,i18nKey:a,context:r,tOptions:s={},values:l,defaults:o,components:u,ns:c,i18n:p,t:d,shouldUnescape:f,...m}){let h=p||C();if(!h)return g("You will need to pass in an i18next instance by using i18nextReactModule"),e;let y=d||h.t.bind(h)||(e=>e),b={...S(),...h.options?.react},x=c||y.ns||h.options?.defaultNS;x=E(x)?[x]:x||["translation"];let v=V(e,b),$=o||v||b.transEmptyNodeValue||a,{hashTransKey:N}=b,O=a||(N?N(v||$):v||$);h.options?.interpolation?.defaultVariables&&(l=l&&Object.keys(l).length>0?{...l,...h.options.interpolation.defaultVariables}:{...h.options.interpolation.defaultVariables});let k=l||void 0!==t||!e?s.interpolation:{interpolation:{...s.interpolation,prefix:"#$?",suffix:"?$#"}},w={...s,context:r||s.context,count:t,...l,...k,defaultValue:$,ns:x},I=O?y(O,w):$;u&&Object.keys(u).forEach(e=>{let t=u[e];!("function"==typeof t.type||!t.props||!t.props.children||0>I.indexOf(`${e}/>`)&&0>I.indexOf(`${e} />`))&&(u[e]=(0,i.createElement)(function(){return(0,i.createElement)(i.Fragment,null,t)}))});let j=A(u||e,I,h,b,w,f),R=n??b.defaultTransParent;return R?(0,i.createElement)(R,m,j):j}let B={type:"3rdParty",init(e){I(e.options.react),j(e)}},D=(0,i.createContext)();class W{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]??=!0})}getUsedNamespaces=()=>Object.keys(this.usedNamespaces)}let H=e=>async t=>{let n=await e.getInitialProps?.(t)??{},a=U();return{...n,...a}},U=()=>{let e=C(),t=e.reportNamespaces?.getUsedNamespaces()??[],n={},a={};return e.languages.forEach(n=>{a[n]={},t.forEach(t=>{a[n][t]=e.getResourceBundle(n,t)||{}})}),n.initialI18nStore=a,n.initialLanguage=e.language,n};function M({children:e,count:t,parent:n,i18nKey:a,context:r,tOptions:s={},values:l,defaults:o,components:u,ns:c,i18n:p,t:d,shouldUnescape:f,...m}){let{i18n:g,defaultNS:h}=(0,i.useContext)(D)||{},y=p||g||C(),b=d||y?.t.bind(y);return F({children:e,count:t,parent:n,i18nKey:a,context:r,tOptions:s,values:l,defaults:o,components:u,ns:c||b?.ns||h||y?.options?.defaultNS,i18n:y,t:d,shouldUnescape:f,...m})}let K=(e,t)=>{let n=(0,i.useRef)();return(0,i.useEffect)(()=>{n.current=t?n.current:e},[e,t]),n.current},q=(e,t,n,a)=>e.getFixedT(t,n,a),Y=(e,t,n,a)=>(0,i.useCallback)(q(e,t,n,a),[e,t,n,a]),_=(e,t={})=>{let{i18n:n}=t,{i18n:a,defaultNS:r}=(0,i.useContext)(D)||{},s=n||a||C();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new W),!s){g("You will need to pass in an i18next instance by using initReactI18next");let e=(e,t)=>E(t)?t:$(t)&&E(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}s.options.react?.wait&&g("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let l={...S(),...s.options.react,...t},{useSuspense:o,keyPrefix:u}=l,c=e||r||s.options?.defaultNS;c=E(c)?[c]:c||["translation"],s.reportNamespaces.addUsedNamespaces?.(c);let p=(s.isInitialized||s.initializedStoreOnce)&&c.every(e=>x(e,s,l)),d=Y(s,t.lng||null,"fallback"===l.nsMode?c:c[0],u),f=()=>d,m=()=>q(s,t.lng||null,"fallback"===l.nsMode?c:c[0],u),[h,v]=(0,i.useState)(f),N=c.join();t.lng&&(N=`${t.lng}${N}`);let O=K(N),k=(0,i.useRef)(!0);(0,i.useEffect)(()=>{let{bindI18n:e,bindI18nStore:n}=l;k.current=!0,!p&&!o&&(t.lng?b(s,t.lng,c,()=>{k.current&&v(m)}):y(s,c,()=>{k.current&&v(m)})),p&&O&&O!==N&&k.current&&v(m);let a=()=>{k.current&&v(m)};return e&&s?.on(e,a),n&&s?.store.on(n,a),()=>{k.current=!1,s&&e?.split(" ").forEach(e=>s.off(e,a)),n&&s&&n.split(" ").forEach(e=>s.store.off(e,a))}},[s,N]),(0,i.useEffect)(()=>{k.current&&p&&v(f)},[s,u,p]);let w=[h,s,p];if(w.t=h,w.i18n=s,w.ready=p,p||!p&&!o)return w;throw new Promise(e=>{t.lng?b(s,t.lng,c,()=>e()):y(s,c,()=>e())})},Z=(e,t={})=>function(n){function a({forwardedRef:a,...r}){let[s,l,o]=_(e,{...r,keyPrefix:t.keyPrefix}),u={...r,t:s,i18n:l,tReady:o};return t.withRef&&a?u.ref=a:!t.withRef&&a&&(u.forwardedRef=a),(0,i.createElement)(n,u)}return a.displayName=`withI18nextTranslation(${v(n)})`,a.WrappedComponent=n,t.withRef?(0,i.forwardRef)((e,t)=>(0,i.createElement)(a,Object.assign({},e,{forwardedRef:t}))):a},G=({ns:e,children:t,...n})=>{let[a,i,r]=_(e,n);return t(a,{i18n:i,lng:i.language},r)};function J({i18n:e,defaultNS:t,children:n}){let a=(0,i.useMemo)(()=>({i18n:e,defaultNS:t}),[e,t]);return(0,i.createElement)(D.Provider,{value:a},n)}let Q=(e,t,n={})=>{let{i18n:a}=n,{i18n:r}=(0,i.useContext)(D)||{},s=a||r||C();!s.options?.isClone&&(e&&!s.initializedStoreOnce&&(s.services.resourceStore.data=e,s.options.ns=Object.values(e).reduce((e,t)=>(Object.keys(t).forEach(t=>{0>e.indexOf(t)&&e.push(t)}),e),s.options.ns),s.initializedStoreOnce=!0,s.isInitialized=!0),t&&!s.initializedLanguageOnce&&(s.changeLanguage(t),s.initializedLanguageOnce=!0))},X=()=>function(e){function t({initialI18nStore:t,initialLanguage:n,...a}){return Q(t,n),(0,i.createElement)(e,{...a})}return t.getInitialProps=H(e),t.displayName=`withI18nextSSR(${v(e)})`,t.WrappedComponent=e,t},ee=()=>"",et=()=>"",en=()=>"",ea=()=>"",ei=()=>"",er=()=>""}}]);