/*! For license information please see 898.046af05a.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["898"],{344:function(){},193:function(e,t,n){var i=n(929),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,r={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,i)&&!s.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:a,type:e,key:c,ref:u,props:r,_owner:o.current}}t.jsx=c,t.jsxs=c},676:function(e,t,n){e.exports=n(193)},70:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(676),a=n(929),r=n(878),l=n(952),o=n(875);n(344);var s=n(112),c=n.n(s);let u=e=>{let{api:t,coreClasses:n}=e;console.log("imported i18n: ",c());let{setCustomMenuBar:s,currentSelectedPanel:u}=t(),{t:d}=(0,o.useTranslation)("i18n-manager"),f=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];return(0,a.useEffect)(()=>{if(!!(null==n?void 0:n.i18nService))(async()=>{await (null==n?void 0:n.i18nService.addExtensionTranslation(l.s))})()},[n]),(0,a.useEffect)(()=>{(null==u?void 0:u.contentUrl)==="i18n_manager/i18n_manager"&&s(f)},[u]),(0,i.jsx)(r.f,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h1",{children:"Rsbuild with React!!!!"}),(0,i.jsx)("p",{children:d("Start building amazing things with Rsbuild.")})]})})}},878:function(e,t,n){n.d(t,{f:function(){return l}});var i=n(676),a=n(929);let r=(0,a.createContext)({theme:"system",setTheme:()=>null});function l(e){let{children:t,defaultTheme:n="system",storageKey:l="vite-ui-theme",...o}=e,[s,c]=(0,a.useState)(()=>localStorage.getItem(l)||n);return(0,a.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===s){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(s)},[s]),(0,i.jsx)(r.Provider,{...o,value:{theme:s,setTheme:e=>{localStorage.setItem(l,e),c(e)}},children:t})}},952:function(e,t,n){n.d(t,{s:function(){return i}});let i={name:"i18n-manager",data:{en:{"Internationalisation Manager":"Internationalisation Manager","Rsbuild with React!!!!":"Rsbuild with React!!!!"},zh:{"Internationalisation Manager":"\u56FD\u9645\u5316\u7BA1\u7406\u5668","Rsbuild with React!!!!":"\u4F7F\u7528React\u6784\u5EFARsbuild\uFF01\uFF01\uFF01\uFF01"}}}}}]);