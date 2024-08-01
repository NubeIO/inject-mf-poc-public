/*! For license information please see 648.48275d61.js.LICENSE.txt */
"use strict";(self.webpackChunki18n_manager=self.webpackChunki18n_manager||[]).push([["648"],{8751:function(e,t,n){var r=n(4818);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},8193:function(e,t,n){var r=n(5929),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},2676:function(e,t,n){e.exports=n(8193)},8227:function(e,t,n){let r=n("2676"),a=n("5929"),i=n.n(a),s=n("8751"),o=(0,a.createContext)({theme:"system",setTheme:()=>null});function l(e){let{children:t,defaultTheme:n="system",storageKey:i="vite-ui-theme",...s}=e,[l,d]=(0,a.useState)(()=>localStorage.getItem(i)||n);return(0,a.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===l){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(l)},[l]),(0,r.jsx)(o.Provider,{...s,value:{theme:l,setTheme:e=>{localStorage.setItem(i,e),d(e)}},children:t})}let d={name:"i18n-manager",data:{en:{"Internationalisation Manager":"Internationalisation Manager",Rsbuild:"Rsbuild with React!!!!"},zh:{"Internationalisation Manager":"\u56FD\u9645\u5316\u7BA1\u7406\u5668",Rsbuild:"\u4F7F\u7528React\u6784\u5EFARsbuild\uFF01\uFF01\uFF01\uFF01"}}},c=n("8748"),u=n("5231"),f=n("1918");function g(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,f.twMerge)((0,u.clsx)(t))}let m=c.Root,v=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(c.List,{ref:t,className:g("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",n),...a})});v.displayName=c.List.displayName;let p=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(c.Trigger,{ref:t,className:g("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",n),...a})});p.displayName=c.Trigger.displayName;let x=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(c.Content,{ref:t,className:g("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...a})});x.displayName=c.Content.displayName;let b=n("300"),h=(0,b.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function y(e){let{className:t,variant:n,...a}=e;return(0,r.jsx)("div",{className:g(h({variant:n}),t),...a})}let w=a.forwardRef((e,t)=>{let{className:n,type:a,...i}=e;return(0,r.jsx)("input",{type:a,className:g("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...i})});w.displayName="Input";let j=n("8839"),N=(0,b.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),R=a.forwardRef((e,t)=>{let{className:n,variant:a,size:i,asChild:s=!1,...o}=e,l=s?j.Slot:"button";return(0,r.jsx)(l,{className:g(N({variant:a,size:i,className:n})),ref:t,...o})});R.displayName="Button";let k=document.getElementById("root");k&&s.createRoot(k).render((0,r.jsx)(i().StrictMode,{children:(0,r.jsx)(e=>{let{api:t,coreClasses:n}=e,{setCustomMenuBar:i,currentSelectedPanel:s}=t(),o=null==n?void 0:n.languageRegistry.i18nInstance,c=o.t,[u,f]=(0,a.useState)(o.language),[g,b]=(0,a.useState)({}),h=()=>[{id:"i18n-manager",name:c("Internationalisation Manager",{ns:"i18n-manager"}),info:void 0,isSelectable:void 0,children:void 0}];(0,a.useEffect)(()=>{let e=e=>{console.log("language changed to: ",e),f(e),console.log("updated menu: ",h()),i(h())};return o.on("languageChanged",e),()=>{o.off("languageChanged",e)}},[]),(0,a.useEffect)(()=>{if(!!(null==n?void 0:n.i18nService))(async()=>{await (null==n?void 0:n.i18nService.addExtensionTranslation(d)),b(await (null==n?void 0:n.i18nService.getAllTranslations())),null==n||n.communicationService.subscribeToTopic("flex.settings.logout",e=>{console.log("received event: ",e)}),console.log("history message: ",null==n?void 0:n.communicationService.getAllStoredMessagesByTopic("flex.settings.logout")),console.log("ability: ",null==n?void 0:n.aclService.getAbility)})()},[n]),(0,a.useEffect)(()=>{(null==s?void 0:s.contentUrl)==="i18n_manager/i18n_manager"&&i(h())},[s]);let j=(e,t,n)=>(0,r.jsx)("div",{className:"w-full ml-[20px] flex flex-col items-start gap-y-[10px]",children:Object.keys(e).map(a=>(0,r.jsxs)("div",{className:"w-full flex flex-row items-center gap-x-[10px]",children:[(0,r.jsx)("span",{children:a}),":"," ",(0,r.jsx)(w,{className:"w-[300px]",value:e[a],onChange:e=>{b(r=>{let i={...r};return i[t][n][a]=e.target.value,i})}})]},a))});return(0,r.jsx)(l,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,r.jsxs)("div",{className:"content w-[800px] border-2 rounded-lg border-slate-400 p-[20px]",children:[(0,r.jsx)("h1",{children:c("Rsbuild",{ns:"i18n-manager"})}),(0,r.jsxs)(m,{defaultValue:"flex",className:"w-full",children:[(0,r.jsx)(v,{children:Object.keys(g).map(e=>(0,r.jsx)(p,{value:e,children:e},e))}),Object.keys(g).map(e=>(0,r.jsx)(x,{value:e,children:Object.keys(g[e]).map(t=>(0,r.jsxs)("div",{className:"flex flex-col items-start gap-y-[15px]",children:[(0,r.jsx)(y,{children:t}),j(g[e][t],e,t)]},t))},e))]}),(0,r.jsx)("div",{className:"w-full flex flex-row items-center justify-end",children:(0,r.jsx)(R,{onClick:()=>{null==n||n.i18nService.updateTranslations({data:g}),console.log("updated translations: ",g)},children:"Commit"})})]})})},{})}))}}]);