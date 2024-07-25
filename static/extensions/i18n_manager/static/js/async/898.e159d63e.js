/*! For license information please see 898.e159d63e.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["898"],{344:function(){},193:function(e,n,t){var r=t(929),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},676:function(e,n,t){e.exports=t(193)},70:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r=t(676),a=t(929),i=t(878),s=t(952),o=t(561),l=t(849);t(344);let c=e=>{let{api:n,coreClasses:t}=e,{setCustomMenuBar:c,currentSelectedPanel:u}=n(),d=null==t?void 0:t.languageRegistry.i18nInstance,f=d.t,[g,m]=(0,a.useState)(d.language),[v,p]=(0,a.useState)({}),x=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];(0,a.useEffect)(()=>{let e=e=>{console.log("language changed to: ",e),m(e)};return d.on("languageChanged",e),()=>{d.off("languageChanged",e)}},[]),(0,a.useEffect)(()=>{if(!!(null==t?void 0:t.i18nService))(async()=>{await (null==t?void 0:t.i18nService.addExtensionTranslation(s.s));let e=await (null==t?void 0:t.i18nService.getAllTranslations());p(e),console.log("translations in i18n manager: ",e)})()},[t]),(0,a.useEffect)(()=>{(null==u?void 0:u.contentUrl)==="i18n_manager/i18n_manager"&&c(x)},[u]);let h=e=>(console.log("translations in fun: ",e),(0,r.jsx)("div",{className:"w-full ml-[20px] flex flex-col items-start gap-y-[10px]",children:Object.keys(e).map(n=>(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:n}),": ",(0,r.jsx)("input",{value:e[n]})]},n))}));return(0,r.jsx)(i.f,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,r.jsxs)("div",{className:"content w-[800px] border-2 rounded-lg border-slate-400 p-[20px]",children:[(0,r.jsx)("h1",{children:f("Rsbuild",{ns:"i18n-manager"})}),(0,r.jsxs)(o.mQ,{defaultValue:"account",className:"w-full",children:[(0,r.jsx)(o.dr,{children:Object.keys(v).map(e=>(0,r.jsx)(o.SP,{value:e,children:e},e))}),Object.keys(v).map(e=>(0,r.jsx)(o.nU,{value:e,children:Object.keys(v[e]).map(n=>(0,r.jsxs)("div",{className:"flex flex-col items-start gap-y-[15px]",children:[(0,r.jsx)(l.C,{children:n}),h(v[e][n])]},n))},e))]})]})})}},878:function(e,n,t){t.d(n,{f:function(){return s}});var r=t(676),a=t(929);let i=(0,a.createContext)({theme:"system",setTheme:()=>null});function s(e){let{children:n,defaultTheme:t="system",storageKey:s="vite-ui-theme",...o}=e,[l,c]=(0,a.useState)(()=>localStorage.getItem(s)||t);return(0,a.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===l){let n=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(n);return}e.classList.add(l)},[l]),(0,r.jsx)(i.Provider,{...o,value:{theme:l,setTheme:e=>{localStorage.setItem(s,e),c(e)}},children:n})}},849:function(e,n,t){t.d(n,{C:function(){return o}});var r=t(676);t(929);var a=t(300),i=t(271);let s=(0,a.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:n,variant:t,...a}=e;return(0,r.jsx)("div",{className:(0,i.cn)(s({variant:t}),n),...a})}},561:function(e,n,t){t.d(n,{SP:function(){return c},dr:function(){return l},mQ:function(){return o},nU:function(){return u}});var r=t(676),a=t(929),i=t(748),s=t(271);let o=i.Root,l=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)(i.List,{ref:n,className:(0,s.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",t),...a})});l.displayName=i.List.displayName;let c=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)(i.Trigger,{ref:n,className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",t),...a})});c.displayName=i.Trigger.displayName;let u=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,r.jsx)(i.Content,{ref:n,className:(0,s.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...a})});u.displayName=i.Content.displayName},271:function(e,n,t){t.d(n,{cn:function(){return i}});var r=t(231),a=t(918);function i(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.twMerge)((0,r.clsx)(n))}},952:function(e,n,t){t.d(n,{s:function(){return r}});let r={name:"i18n-manager",data:{en:{"Internationalisation Manager":"Internationalisation Manager",Rsbuild:"Rsbuild with React!!!!"},zh:{"Internationalisation Manager":"\u56FD\u9645\u5316\u7BA1\u7406\u5668",Rsbuild:"\u4F7F\u7528React\u6784\u5EFARsbuild\uFF01\uFF01\uFF01\uFF01"}}}}}]);