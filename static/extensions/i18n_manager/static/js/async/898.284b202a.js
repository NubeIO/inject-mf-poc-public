/*! For license information please see 898.284b202a.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["898"],{9344:function(){},8193:function(e,t,n){var r=n(5929),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,u=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:u,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},2676:function(e,t,n){e.exports=n(8193)},70:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(2676),a=n(5929),i=n(9878),s=n(6952),o=n(561),l=n(7849),d=n(9691),u=n(6470);n(9344);let c=e=>{let{api:t,coreClasses:n}=e,{setCustomMenuBar:c,currentSelectedPanel:f}=t(),g=null==n?void 0:n.languageRegistry.i18nInstance,m=g.t,[v,p]=(0,a.useState)(g.language),[x,b]=(0,a.useState)({}),h=[{id:"i18n-manager",name:"Internationalisation Manager",info:void 0,isSelectable:void 0,children:void 0}];(0,a.useEffect)(()=>{let e=e=>{console.log("language changed to: ",e),p(e)};return g.on("languageChanged",e),()=>{g.off("languageChanged",e)}},[]),(0,a.useEffect)(()=>{if(!!(null==n?void 0:n.i18nService))(async()=>{await (null==n?void 0:n.i18nService.addExtensionTranslation(s.s));let e=await (null==n?void 0:n.i18nService.getAllTranslations());b(e),console.log("translations in i18n manager: ",e)})()},[n]),(0,a.useEffect)(()=>{(null==f?void 0:f.contentUrl)==="i18n_manager/i18n_manager"&&c(h)},[f]);let y=(e,t,n)=>(console.log("translations in fun: ",e),(0,r.jsx)("div",{className:"w-full ml-[20px] flex flex-col items-start gap-y-[10px]",children:Object.keys(e).map(a=>(0,r.jsxs)("div",{className:"w-full flex flex-row items-center gap-x-[10px]",children:[(0,r.jsx)("span",{children:a}),":"," ",(0,r.jsx)(d.I,{className:"w-[300px]",value:e[a],onChange:e=>{b(r=>r[t][n]=e.target.value)}})]},a))}));return(0,r.jsx)(i.f,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,r.jsxs)("div",{className:"content w-[800px] border-2 rounded-lg border-slate-400 p-[20px]",children:[(0,r.jsx)("h1",{children:m("Rsbuild",{ns:"i18n-manager"})}),(0,r.jsxs)(o.mQ,{defaultValue:"account",className:"w-full",children:[(0,r.jsx)(o.dr,{children:Object.keys(x).map(e=>(0,r.jsx)(o.SP,{value:e,children:e},e))}),Object.keys(x).map(e=>(0,r.jsx)(o.nU,{value:e,children:Object.keys(x[e]).map(t=>(0,r.jsxs)("div",{className:"flex flex-col items-start gap-y-[15px]",children:[(0,r.jsx)(l.C,{children:t}),y(x[e][t],e,t)]},t))},e))]}),(0,r.jsx)("div",{className:"w-full flex flex-row items-center justify-end",children:(0,r.jsx)(u.z,{onClick:()=>{console.log("updated translations: ",x)},children:"Commit"})})]})})}},9878:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(2676),a=n(5929);let i=(0,a.createContext)({theme:"system",setTheme:()=>null});function s(e){let{children:t,defaultTheme:n="system",storageKey:s="vite-ui-theme",...o}=e,[l,d]=(0,a.useState)(()=>localStorage.getItem(s)||n);return(0,a.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===l){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(l)},[l]),(0,r.jsx)(i.Provider,{...o,value:{theme:l,setTheme:e=>{localStorage.setItem(s,e),d(e)}},children:t})}},7849:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(2676);n(5929);var a=n(300),i=n(7271);let s=(0,a.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:t,variant:n,...a}=e;return(0,r.jsx)("div",{className:(0,i.cn)(s({variant:n}),t),...a})}},6470:function(e,t,n){n.d(t,{z:function(){return d}});var r=n(2676),a=n(5929),i=n(8839),s=n(300),o=n(7271);let l=(0,s.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:n,variant:a,size:s,asChild:d=!1,...u}=e,c=d?i.Slot:"button";return(0,r.jsx)(c,{className:(0,o.cn)(l({variant:a,size:s,className:n})),ref:t,...u})});d.displayName="Button"},9691:function(e,t,n){n.d(t,{I:function(){return s}});var r=n(2676),a=n(5929),i=n(7271);let s=a.forwardRef((e,t)=>{let{className:n,type:a,...s}=e;return(0,r.jsx)("input",{type:a,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...s})});s.displayName="Input"},561:function(e,t,n){n.d(t,{SP:function(){return d},dr:function(){return l},mQ:function(){return o},nU:function(){return u}});var r=n(2676),a=n(5929),i=n(8748),s=n(7271);let o=i.Root,l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(i.List,{ref:t,className:(0,s.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",n),...a})});l.displayName=i.List.displayName;let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(i.Trigger,{ref:t,className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",n),...a})});d.displayName=i.Trigger.displayName;let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(i.Content,{ref:t,className:(0,s.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...a})});u.displayName=i.Content.displayName},7271:function(e,t,n){n.d(t,{cn:function(){return i}});var r=n(5231),a=n(1918);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.twMerge)((0,r.clsx)(t))}},6952:function(e,t,n){n.d(t,{s:function(){return r}});let r={name:"i18n-manager",data:{en:{"Internationalisation Manager":"Internationalisation Manager",Rsbuild:"Rsbuild with React!!!!"},zh:{"Internationalisation Manager":"\u56FD\u9645\u5316\u7BA1\u7406\u5668",Rsbuild:"\u4F7F\u7528React\u6784\u5EFARsbuild\uFF01\uFF01\uFF01\uFF01"}}}}}]);