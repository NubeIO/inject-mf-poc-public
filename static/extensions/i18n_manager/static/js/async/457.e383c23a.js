/*! For license information please see 457.e383c23a.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["457"],{751:function(e,t,r){var n=r(818);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},193:function(e,t,r){var n=r(929),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:s.current}}t.jsx=c,t.jsxs=c},676:function(e,t,r){e.exports=r(193)},3:function(e,t,r){let n=r("676"),o=r("929"),a=r.n(o),i=r("751"),s=(0,o.createContext)({theme:"system",setTheme:()=>null});function l(e){let{children:t,defaultTheme:r="system",storageKey:a="vite-ui-theme",...i}=e,[l,c]=(0,o.useState)(()=>localStorage.getItem(a)||r);return(0,o.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===l){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(l)},[l]),(0,n.jsx)(s.Provider,{...i,value:{theme:l,setTheme:e=>{localStorage.setItem(a,e),c(e)}},children:t})}let c=document.getElementById("root");c&&i.createRoot(c).render((0,n.jsx)(a().StrictMode,{children:(0,n.jsx)(e=>{let{api:t,coreClasses:r}=e,{setCustomMenuBar:a,currentSelectedPanel:i,i18nService:s}=t(),c=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];return(0,o.useEffect)(()=>{console.log("coreClasses in i18n manager is: ",r)},[r]),(0,o.useEffect)(()=>{(null==i?void 0:i.contentUrl)==="i18n_manager/i18n_manager"&&a(c)},[i]),(0,n.jsx)(l,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("h1",{children:"Rsbuild with React!!!!"}),(0,n.jsx)("p",{children:"Start building amazing things with Rsbuild."})]})})},{})}))}}]);