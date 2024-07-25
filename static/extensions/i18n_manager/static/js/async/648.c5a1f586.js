/*! For license information please see 648.c5a1f586.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["648"],{8751:function(e,t,r){var n=r(4818);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},8193:function(e,t,r){var n=r(5929),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,s={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:d,ref:c,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},2676:function(e,t,r){e.exports=r(8193)},8227:function(e,t,r){let n=r("2676"),a=r("5929"),s=r.n(a),i=r("8751"),o=(0,a.createContext)({theme:"system",setTheme:()=>null});function l(e){let{children:t,defaultTheme:r="system",storageKey:s="vite-ui-theme",...i}=e,[l,d]=(0,a.useState)(()=>localStorage.getItem(s)||r);return(0,a.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===l){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(l)},[l]),(0,n.jsx)(o.Provider,{...i,value:{theme:l,setTheme:e=>{localStorage.setItem(s,e),d(e)}},children:t})}let d={name:"i18n-manager",data:{en:{"Internationalisation Manager":"Internationalisation Manager",Rsbuild:"Rsbuild with React!!!!"},zh:{"Internationalisation Manager":"\u56FD\u9645\u5316\u7BA1\u7406\u5668",Rsbuild:"\u4F7F\u7528React\u6784\u5EFARsbuild\uFF01\uFF01\uFF01\uFF01"}}},c=r("8748"),u=r("5231"),f=r("1918");function g(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,f.twMerge)((0,u.clsx)(t))}let m=c.Root,v=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(c.List,{ref:t,className:g("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",r),...a})});v.displayName=c.List.displayName;let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(c.Trigger,{ref:t,className:g("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",r),...a})});x.displayName=c.Trigger.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(c.Content,{ref:t,className:g("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...a})});p.displayName=c.Content.displayName;let h=r("300"),b=(0,h.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function y(e){let{className:t,variant:r,...a}=e;return(0,n.jsx)("div",{className:g(b({variant:r}),t),...a})}let w=a.forwardRef((e,t)=>{let{className:r,type:a,...s}=e;return(0,n.jsx)("input",{type:a,className:g("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})});w.displayName="Input";let j=r("8839"),N=(0,h.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),R=a.forwardRef((e,t)=>{let{className:r,variant:a,size:s,asChild:i=!1,...o}=e,l=i?j.Slot:"button";return(0,n.jsx)(l,{className:g(N({variant:a,size:s,className:r})),ref:t,...o})});R.displayName="Button";let k=document.getElementById("root");k&&i.createRoot(k).render((0,n.jsx)(s().StrictMode,{children:(0,n.jsx)(e=>{let{api:t,coreClasses:r}=e,{setCustomMenuBar:s,currentSelectedPanel:i}=t(),o=null==r?void 0:r.languageRegistry.i18nInstance,c=o.t,[u,f]=(0,a.useState)(o.language),[g,h]=(0,a.useState)({}),b=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];(0,a.useEffect)(()=>{let e=e=>{console.log("language changed to: ",e),f(e)};return o.on("languageChanged",e),()=>{o.off("languageChanged",e)}},[]),(0,a.useEffect)(()=>{if(!!(null==r?void 0:r.i18nService))(async()=>{await (null==r?void 0:r.i18nService.addExtensionTranslation(d));let e=await (null==r?void 0:r.i18nService.getAllTranslations());h(e),console.log("translations in i18n manager: ",e)})()},[r]),(0,a.useEffect)(()=>{(null==i?void 0:i.contentUrl)==="i18n_manager/i18n_manager"&&s(b)},[i]);let j=(e,t,r)=>(console.log("translations in fun: ",e),(0,n.jsx)("div",{className:"w-full ml-[20px] flex flex-col items-start gap-y-[10px]",children:Object.keys(e).map(t=>(0,n.jsxs)("div",{className:"w-full flex flex-row items-center gap-x-[10px]",children:[(0,n.jsx)("span",{children:t}),":"," ",(0,n.jsx)(w,{className:"w-[300px]",value:e[t],onChange:e=>{console.log("e: ",e.target.value)}})]},t))}));return(0,n.jsx)(l,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,n.jsxs)("div",{className:"content w-[800px] border-2 rounded-lg border-slate-400 p-[20px]",children:[(0,n.jsx)("h1",{children:c("Rsbuild",{ns:"i18n-manager"})}),(0,n.jsxs)(m,{defaultValue:"account",className:"w-full",children:[(0,n.jsx)(v,{children:Object.keys(g).map(e=>(0,n.jsx)(x,{value:e,children:e},e))}),Object.keys(g).map(e=>(0,n.jsx)(p,{value:e,children:Object.keys(g[e]).map(t=>(0,n.jsxs)("div",{className:"flex flex-col items-start gap-y-[15px]",children:[(0,n.jsx)(y,{children:t}),j(g[e][t],e,t)]},t))},e))]}),(0,n.jsx)("div",{className:"w-full flex flex-row items-center justify-end",children:(0,n.jsx)(R,{children:"Commit"})})]})})},{})}))}}]);