/*! For license information please see 898.770ebd95.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["898"],{344:function(){},193:function(e,t,n){var r=n(929),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:s.current}}t.jsx=c,t.jsxs=c},676:function(e,t,n){e.exports=n(193)},70:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(676),i=n(929),a=n(878);n(344);let l=e=>{let{api:t,coreClasses:n}=e,{setCustomMenuBar:l,currentSelectedPanel:s}=t(),o=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];return(0,i.useEffect)(()=>{if(!!(null==n?void 0:n.i18nService))console.log("coreClasses in i18n manager is: ",null==n?void 0:n.i18nService)},[n]),(0,i.useEffect)(()=>{(null==s?void 0:s.contentUrl)==="i18n_manager/i18n_manager"&&l(o)},[s]),(0,r.jsx)(a.f,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h1",{children:"Rsbuild with React!!!!"}),(0,r.jsx)("p",{children:"Start building amazing things with Rsbuild."})]})})}},878:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(676),i=n(929);let a=(0,i.createContext)({theme:"system",setTheme:()=>null});function l(e){let{children:t,defaultTheme:n="system",storageKey:l="vite-ui-theme",...s}=e,[o,c]=(0,i.useState)(()=>localStorage.getItem(l)||n);return(0,i.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===o){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(o)},[o]),(0,r.jsx)(a.Provider,{...s,value:{theme:o,setTheme:e=>{localStorage.setItem(l,e),c(e)}},children:t})}}}]);