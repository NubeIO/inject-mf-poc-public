/*! For license information please see 572.7dc5de97.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["572"],{751:function(e,t,n){var r=n(818);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},193:function(e,t,n){var r=n(929),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},676:function(e,t,n){e.exports=n(193)},499:function(e,t,n){let r=n("676"),a=n("929"),i=n.n(a),s=n("751"),o=(0,a.createContext)({theme:"system",setTheme:()=>null});function l(e){let{children:t,defaultTheme:n="system",storageKey:i="vite-ui-theme",...s}=e,[l,d]=(0,a.useState)(()=>localStorage.getItem(i)||n);return(0,a.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===l){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(l)},[l]),(0,r.jsx)(o.Provider,{...s,value:{theme:l,setTheme:e=>{localStorage.setItem(i,e),d(e)}},children:t})}let d={name:"i18n-manager",data:{en:{"Internationalisation Manager":"Internationalisation Manager",Rsbuild:"Rsbuild with React!!!!"},zh:{"Internationalisation Manager":"\u56FD\u9645\u5316\u7BA1\u7406\u5668",Rsbuild:"\u4F7F\u7528React\u6784\u5EFARsbuild\uFF01\uFF01\uFF01\uFF01"}}},c=n("748"),u=n("231"),f=n("918");function g(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,f.twMerge)((0,u.clsx)(t))}let m=c.Root,v=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(c.List,{ref:t,className:g("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",n),...a})});v.displayName=c.List.displayName;let h=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(c.Trigger,{ref:t,className:g("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",n),...a})});h.displayName=c.Trigger.displayName;let p=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(c.Content,{ref:t,className:g("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...a})});p.displayName=c.Content.displayName;let x=(0,n("300").cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function y(e){let{className:t,variant:n,...a}=e;return(0,r.jsx)("div",{className:g(x({variant:n}),t),...a})}let b=document.getElementById("root");b&&s.createRoot(b).render((0,r.jsx)(i().StrictMode,{children:(0,r.jsx)(e=>{let{api:t,coreClasses:n}=e,{setCustomMenuBar:i,currentSelectedPanel:s}=t(),o=null==n?void 0:n.languageRegistry.i18nInstance,c=o.t,[u,f]=(0,a.useState)(o.language),[g,x]=(0,a.useState)({}),b=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];(0,a.useEffect)(()=>{let e=e=>{console.log("language changed to: ",e),f(e)};return o.on("languageChanged",e),()=>{o.off("languageChanged",e)}},[]),(0,a.useEffect)(()=>{if(!!(null==n?void 0:n.i18nService))(async()=>{await (null==n?void 0:n.i18nService.addExtensionTranslation(d));let e=await (null==n?void 0:n.i18nService.getAllTranslations());x(e),console.log("translations in i18n manager: ",e)})()},[n]),(0,a.useEffect)(()=>{(null==s?void 0:s.contentUrl)==="i18n_manager/i18n_manager"&&i(b)},[s]);let j=e=>(console.log("translations in fun: ",e),(0,r.jsx)("div",{className:"w-full ml-[20px] flex flex-col items-start gap-y-[10px]",children:Object.keys(e).map(t=>(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:t}),": ",(0,r.jsx)("input",{value:e[t]})]},t))}));return(0,r.jsx)(l,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,r.jsxs)("div",{className:"content w-[800px] border-2 rounded-lg border-slate-400",children:[(0,r.jsx)("h1",{children:c("Rsbuild",{ns:"i18n-manager"})}),(0,r.jsxs)(m,{defaultValue:"account",className:"w-full",children:[(0,r.jsx)(v,{children:Object.keys(g).map(e=>(0,r.jsx)(h,{value:e,children:e},e))}),Object.keys(g).map(e=>(0,r.jsx)(p,{value:e,children:Object.keys(g[e]).map(t=>(0,r.jsxs)("div",{className:"flex flex-col items-start gap-y-[15px]",children:[(0,r.jsx)(y,{children:t}),j(g[e][t])]},t))},e))]})]})})},{})}))}}]);