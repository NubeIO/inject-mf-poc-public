/*! For license information please see 898.edc55d1b.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["898"],{344:function(){},193:function(e,t,n){var a,i=n(929),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var a,i={},o=null,u=null;for(a in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:o,ref:u,props:i,_owner:s.current}}t.jsx=u},676:function(e,t,n){e.exports=n(193)},70:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(676),i=n(929),r=n(878),o=n(952);n(344);let l=e=>{let{api:t,coreClasses:n}=e,{setCustomMenuBar:l,currentSelectedPanel:s}=t(),c=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];return(0,i.useEffect)(()=>{if(!!(null==n?void 0:n.i18nService))(async()=>{await (null==n?void 0:n.i18nService.addExtensionTranslation(o.s))})()},[n]),(0,i.useEffect)(()=>{(null==s?void 0:s.contentUrl)==="i18n_manager/i18n_manager"&&l(c)},[s]),(0,a.jsx)(r.f,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,a.jsx)("div",{className:"content",children:(0,a.jsx)("p",{children:"Start building amazing things with Rsbuild."})})})}},878:function(e,t,n){n.d(t,{f:function(){return o}});var a=n(676),i=n(929);let r=(0,i.createContext)({theme:"system",setTheme:()=>null});function o(e){let{children:t,defaultTheme:n="system",storageKey:o="vite-ui-theme",...l}=e,[s,c]=(0,i.useState)(()=>localStorage.getItem(o)||n);return(0,i.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===s){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(s)},[s]),(0,a.jsx)(r.Provider,{...l,value:{theme:s,setTheme:e=>{localStorage.setItem(o,e),c(e)}},children:t})}},952:function(e,t,n){n.d(t,{s:function(){return a}});let a={name:"i18n-manager",data:{en:{"Internationalisation Manager":"Internationalisation Manager",Rsbuild:"Rsbuild with React!!!!"},zh:{"Internationalisation Manager":"\u56FD\u9645\u5316\u7BA1\u7406\u5668",Rsbuild:"\u4F7F\u7528React\u6784\u5EFARsbuild\uFF01\uFF01\uFF01\uFF01"}}}}}]);