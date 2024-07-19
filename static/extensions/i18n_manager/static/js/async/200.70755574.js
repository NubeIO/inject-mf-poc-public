/*! For license information please see 200.70755574.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["200"],{751:function(e,t,n){var a=n(818);t.createRoot=a.createRoot,t.hydrateRoot=a.hydrateRoot},193:function(e,t,n){var a,r=n(929),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,r={},o=null,d=null;for(a in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,a)&&!c.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:i,type:e,key:o,ref:d,props:r,_owner:s.current}}t.jsx=d},676:function(e,t,n){e.exports=n(193)},789:function(e,t,n){let a=n("676"),r=n("929"),i=n.n(r),o=n("751"),l=(0,r.createContext)({theme:"system",setTheme:()=>null});function s(e){let{children:t,defaultTheme:n="system",storageKey:i="vite-ui-theme",...o}=e,[s,c]=(0,r.useState)(()=>localStorage.getItem(i)||n);return(0,r.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===s){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(s)},[s]),(0,a.jsx)(l.Provider,{...o,value:{theme:s,setTheme:e=>{localStorage.setItem(i,e),c(e)}},children:t})}let c={name:"i18n-manager",data:{en:{"Internationalisation Manager":"Internationalisation Manager",Rsbuild:"Rsbuild with React!!!!"},zh:{"Internationalisation Manager":"\u56FD\u9645\u5316\u7BA1\u7406\u5668",Rsbuild:"\u4F7F\u7528React\u6784\u5EFARsbuild\uFF01\uFF01\uFF01\uFF01"}}},d=document.getElementById("root");d&&o.createRoot(d).render((0,a.jsx)(i().StrictMode,{children:(0,a.jsx)(e=>{let{api:t,coreClasses:n}=e,{setCustomMenuBar:o,currentSelectedPanel:l}=t(),[d,u]=i().useState(null);null==n||n.languageRegistry.subscribeToI18nInstance(e=>{u(e.i18nInstance)});let m=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];return(0,r.useEffect)(()=>{if(!!(null==n?void 0:n.i18nService))(async()=>{await (null==n?void 0:n.i18nService.addExtensionTranslation(c))})()},[n]),(0,r.useEffect)(()=>{(null==l?void 0:l.contentUrl)==="i18n_manager/i18n_manager"&&o(m)},[l]),(0,a.jsx)(s,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,a.jsx)("div",{className:"content",children:(0,a.jsx)("h1",{children:(null==d?void 0:d.t("Rsbuild",{ns:"i18n-manager"}))||"N/A"})})})},{})}))}}]);