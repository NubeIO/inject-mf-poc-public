/*! For license information please see 898.87f247d0.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["898"],{455:function(){},193:function(e,t,r){var n=r(929),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!o.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:u,props:i,_owner:l.current}}t.jsx=c,t.jsxs=c},676:function(e,t,r){e.exports=r(193)},70:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(676),s=r(402);r(455);let i=()=>(0,n.jsx)(s.f,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("h1",{children:"Rsbuild with React!!!!"}),(0,n.jsx)("p",{children:"Start building amazing things with Rsbuild."})]})})},402:function(e,t,r){r.d(t,{f:function(){return a}});var n=r(676),s=r(929);let i=(0,s.createContext)({theme:"system",setTheme:()=>null});function a(e){let{children:t,defaultTheme:r="system",storageKey:a="vite-ui-theme",...l}=e,[o,c]=(0,s.useState)(()=>localStorage.getItem(a)||r);return(0,s.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===o){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(o)},[o]),(0,n.jsx)(i.Provider,{...l,value:{theme:o,setTheme:e=>{localStorage.setItem(a,e),c(e)}},children:t})}}}]);