"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([["229"],{52153:function(){},50070:function(e,t,n){n.d(t,{h:function(){return g}});var r=n(85893),a=n(34403),l=n(78198),s=n(84320),i=n(32965),o=n(48669),d=n(53184),c=n(19469),u=n(27849),f=n(66444),m=n(95059),x=n(15234),p=n.n(x);n(52153);var h=n(78613),j=n(77071);let g=(0,h.create)(e=>({singleAppDisplay:null,setSingleAppDisplay:t=>e({singleAppDisplay:t}),test:10,setTest:t=>e({test:t})})),N=e=>{let{isExpanded:t,setIsExpanded:n}=e;return(0,r.jsx)(u.C,{className:"m-[5px] p-[2px]",children:t?(0,r.jsx)(s.Minimize2,{size:22,className:"p-[5px] cursor-pointer",onClick:()=>n(!1)}):(0,r.jsx)(s.Maximize2,{size:22,className:"p-[5px] cursor-pointer",onClick:()=>n(!0)})})};t.Z=()=>{let[e,t]=(0,a.useState)(10),[n,s]=(0,a.useState)(30),[x,h]=(0,a.useState)([]),[g,b]=(0,a.useState)(!1),[v,y]=(0,a.useState)(!1),[w,S]=(0,a.useState)(!1),[I,R]=(0,a.useState)("Application Specific Menu"),[C,k]=(0,a.useState)([]),[z,T]=(0,a.useState)([]),E=(0,a.useRef)(null);return(0,a.useEffect)(()=>{(async()=>{var e,t,n;let r=await p().get("http://localhost:4000/manifest");r&&(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.manifest)&&(h(r.data.manifest),console.log("registry",null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.manifest),await (0,j.init)({name:"host",remotes:null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.manifest}))})()},[]),(0,a.useEffect)(()=>{R("Test"),k([{id:"1",name:"Test",children:[]}]),T([{id:"root",name:"R-1",children:[]}])},[]),(0,r.jsx)(m.f,{defaultTheme:"light",storageKey:"vite-ui-theme",children:(0,r.jsxs)("div",{className:"main-panel",children:[(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(c.G,{})}),(0,r.jsxs)("div",{ref:E,id:"content-panel",className:"w-full h-full flex flex-row",children:[(0,r.jsx)(i.e,{isMenuCollapsed:g,menuItems:x}),(0,r.jsxs)(l.pO,{id:"main-content-resize-group",direction:"horizontal",className:"h-full w-full border-t",children:[(0,r.jsx)(l.ee,{defaultSize:e,collapsible:!0,minSize:e,maxSize:n,onCollapse:()=>b(!0),onExpand:()=>b(!1),children:(0,r.jsx)("div",{className:"flex flex-col h-full items-center justify-start p-[5px]",children:(0,r.jsxs)(l.pO,{direction:"vertical",children:[(0,r.jsx)(l.ee,{defaultSize:50,children:(0,r.jsxs)("div",{className:"flex flex-col h-full items-start justify-start pt-[5px]",children:[(0,r.jsxs)("div",{className:"flex flex-row w-full items-center justify-between",children:[(0,r.jsx)(u.C,{className:"text-sm m-[5px]",children:"Supervisor View"}),(0,r.jsx)(N,{isExpanded:v,setIsExpanded:y})]}),(0,r.jsx)(o.Q,{menuItems:z,isExpanded:v})]})}),(0,r.jsx)(l.Dp,{withHandle:!0}),(0,r.jsx)(l.ee,{defaultSize:50,children:(0,r.jsxs)("div",{className:"flex flex-col h-full items-start justify-start pt-[5px]",children:[(0,r.jsxs)("div",{className:"flex flex-row w-full items-center justify-between",children:[(0,r.jsx)(u.C,{className:"text-sm m-[5px]",children:I}),(0,r.jsx)(N,{isExpanded:w,setIsExpanded:S})]}),(0,r.jsx)(d.V,{menuItems:C,isExpanded:w})]})})]})})}),(0,r.jsx)(l.Dp,{withHandle:!0}),(0,r.jsx)(l.ee,{defaultSize:100-e,children:(0,r.jsx)("div",{id:"nube-main-content-container",className:"w-full h-full p-[10px]",children:(0,r.jsx)(f.z,{})})})]})]})]})})}},29161:function(e,t,n){n.r(t);var r=n(85893),a=n(34403),l=n.n(a),s=n(20745),i=n(50070);let o=document.getElementById("root");o&&s.createRoot(o).render((0,r.jsx)(l().StrictMode,{children:(0,r.jsx)(i.Z,{})}))},43493:function(e,t,n){n.d(t,{$B:function(){return h},gt:function(){return p},mp:function(){return m},nW:function(){return j}}),n(40777),n(39710),n(69929),n(36301),n(45123),n(35646),n(69774);var r=n(85893),a=n(93220),l=n(27271),s=n(17709),i=n(84320),o=n(34403),d=n(56470),c=n(40631);let u=(0,o.createContext)(null),f=()=>{let e=(0,o.useContext)(u);if(!e)throw Error("useTree must be used within a TreeProvider");return e},m=(0,o.forwardRef)((e,t)=>{let{className:n,elements:i,initialSelectedId:d,initialExpendedItems:c,children:f,indicator:m=!0,openIcon:x,closeIcon:p,dir:h,...j}=e,[g,N]=(0,o.useState)(d),[b,v]=(0,o.useState)(c),y=(0,o.useCallback)(e=>{N(e)},[]),w=(0,o.useCallback)((e,t)=>{["svg","span"].includes(t.target.tagName.toLowerCase())&&v(t=>(null==t?void 0:t.includes(e))?t.filter(t=>t!==e):[...t??[],e])},[]),S=(0,o.useCallback)((e,t)=>{if(!e||!t)return;let n=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=e.isSelectable??!0,l=[...r,e.id];if(e.id===t){a?v(e=>[...e??[],...l]):l.includes(e.id)&&(l.pop(),v(e=>[...e??[],...l]));return}a&&e.children&&e.children.length>0&&e.children.forEach(e=>{n(e,l)})};e.forEach(e=>{n(e)})},[]);(0,o.useEffect)(()=>{d&&S(i,d)},[d,i]);let I="rtl"===h?"rtl":"ltr";return(0,r.jsx)(u.Provider,{value:{selectedId:g,expendedItems:b,handleExpand:w,selectItem:y,setExpendedItems:v,indicator:m,openIcon:x,closeIcon:p,direction:I},children:(0,r.jsx)("div",{className:(0,l.cn)("size-full",n),children:(0,r.jsx)(a.x,{ref:t,className:"h-full relative px-2",dir:h,children:(0,r.jsx)(s.Root,{...j,type:"multiple",defaultValue:b,value:b,className:"flex flex-col gap-1",onValueChange:e=>v(t=>[...t??[],e[0]]),dir:h,children:f})})})})});m.displayName="Tree";let x=(0,o.forwardRef)((e,t)=>{let{className:n,...a}=e,{direction:s}=f();return(0,r.jsx)("div",{dir:s,ref:t,className:(0,l.cn)("h-full w-px bg-muted absolute left-1.5 rtl:right-1.5 py-3 rounded-md hover:bg-slate-300 duration-300 ease-in-out",n),...a})});x.displayName="TreeIndicator";let p=(0,o.forwardRef)(e=>{let{api:t,className:n,element:a,node:o,value:d,isSelectable:c=!0,isAllowContextMenu:u=!1,isSelect:m,children:p,customIcon:h,...j}=e,{direction:N,handleExpand:b,expendedItems:v,indicator:y,setExpendedItems:w,openIcon:S,closeIcon:I}=f();return(0,r.jsxs)(s.Item,{...j,value:d,className:"relative overflow-hidden h-full ",children:[(0,r.jsxs)(s.Trigger,{className:(0,l.cn)("flex items-center gap-1 text-sm rounded-md",n,{"bg-muted rounded-md":m&&c,"cursor-pointer":c,"cursor-not-allowed opacity-50":!c,"bg-amber-400":(null==o?void 0:o.isHighlighted)||!1}),disabled:!c,onClick:e=>b(d,e),children:[(null==v?void 0:v.includes(d))?S??(0,r.jsx)(i.SquareMinus,{className:"h-4 w-4"}):I??(0,r.jsx)(i.SquarePlus,{className:"h-4 w-4"}),h,(0,r.jsx)(g,{isEnabled:u,uuid:d,api:t,children:(0,r.jsx)("span",{children:a})})]}),(0,r.jsxs)(s.Content,{className:"text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down relative overflow-hidden h-full",children:[a&&y&&(0,r.jsx)(x,{"aria-hidden":"true"}),(0,r.jsx)(s.Root,{dir:N,type:"multiple",className:"flex flex-col gap-1 py-1 ml-5 rtl:mr-5 ",defaultValue:v,value:v,onValueChange:e=>{null==w||w(t=>[...t??[],e[0]])},children:p})]})]})});p.displayName="Folder";let h=(0,o.forwardRef)((e,t)=>{let{value:n,className:a,isSelectable:d=!0,isSelect:c,fileIcon:u,children:m,api:x,isAllowContextMenu:p=!1,...h}=e,j=(0,o.useRef)(null),{direction:N,selectedId:b,selectItem:v}=f(),y=c??b===n;return(0,r.jsx)(s.Item,{value:n,className:"relative",children:(0,r.jsxs)(s.Trigger,{ref:t,...h,dir:N,disabled:!d,"aria-label":"File",className:(0,l.cn)("flex items-center gap-1 cursor-pointer text-sm pr-1 rtl:pl-1 rtl:pr-0 rounded-md  duration-200 ease-in-out",{"bg-muted":y&&d},d?"cursor-pointer":"opacity-50 cursor-not-allowed",a),onClick:()=>{clearTimeout(j.current),j.current=setTimeout(()=>{v(n),!h.draggable&&x&&(x.set({selectNodeSignal:n}),x.set({selectNodeSignal:""}))},200)},onDoubleClick:()=>{clearTimeout(j.current),v(n),!h.draggable&&x&&(x.set({jumpToNodeSignal:n}),x.set({jumpToNodeSignal:""}))},children:[u??(0,r.jsx)(i.FileIcon,{className:"h-4 w-4"}),(0,r.jsx)(g,{isEnabled:p,uuid:n,api:x,children:m})]})})});h.displayName="File";let j=(0,o.forwardRef)((e,t)=>{let{elements:n,expandAll:a=!1,children:l,...s}=e,{expendedItems:i,setExpendedItems:c}=f(),u=(0,o.useCallback)(e=>{let t=e=>{(e.isSelectable??!0)&&e.children&&e.children.length>0&&(null==c||c(t=>[...t??[],e.id]),e.children.forEach(t))};e.forEach(t)},[]),m=(0,o.useCallback)(()=>{null==c||c([])},[]);return(0,o.useEffect)(()=>{a?u(n):m()},[a]),(0,r.jsxs)(d.z,{variant:"ghost",className:"h-8 w-fit p-1 absolute bottom-1 right-2",onClick:i&&i.length>0?m:()=>u(n),ref:t,...s,children:[l,(0,r.jsx)("span",{className:"sr-only",children:"Toggle"})]})});j.displayName="CollapseButton";let g=e=>{let{children:t,isEnabled:n,uuid:a,api:l}=e;if(!n)return(0,r.jsx)(r.Fragment,{children:t});let s=e=>{e.stopPropagation(),l.set({jumpToNodeSignal:a}),l.set({jumpToNodeSignal:""})},i=e=>{e.stopPropagation(),l.set({selectNodeSignal:a}),l.set({selectNodeSignal:""})};return(0,r.jsxs)(c.xV,{children:[(0,r.jsx)(c.W4,{children:t}),(0,r.jsxs)(c.h_,{children:[(0,r.jsx)(c.Zo,{onClick:e=>i(e),children:"Go To Node"}),(0,r.jsx)(c.Zo,{onClick:e=>s(e),children:"Open"})]})]})}},21842:function(e,t,n){n.d(t,{L:function(){return u}}),n(59560),n(59734);var r=n(85893),a=n(27271),l=n(34403),s=n(68221),i=n.n(s),o=n(88796),d=n(43493),c=n(59403);let u=e=>{let{elements:t,className:n,initialSelectedId:s,initialExpendedItems:c,expandAll:u,indicator:m=!1,isAllowContextMenu:x=!1,isAllowDrag:p=!1}=e,h=(0,l.useRef)(null),{getVirtualItems:j,getTotalSize:g}=(0,o.useVirtualizer)({count:t.length,getScrollElement:()=>h.current,estimateSize:(0,l.useCallback)(()=>40,[]),overscan:5}),{height:N=g(),width:b}=i()({ref:h});return(0,r.jsx)("div",{ref:h,className:(0,a.cn)("w-full rounded-md overflow-hidden py-1 relative",n),children:(0,r.jsxs)(d.mp,{initialSelectedId:s,initialExpendedItems:c,elements:t,style:{height:N,width:b},className:"w-full h-full overflow-y-auto",children:[j().map(e=>(0,r.jsx)(f,{"aria-label":"Root",elements:[t[e.index]],indicator:m,isAllowContextMenu:x,isAllowDrag:p},e.key)),(0,r.jsx)(d.nW,{elements:t,expandAll:u})]})})};u.displayName="TreeView";let f=(0,l.forwardRef)((e,t)=>{let{elements:n,indicator:a,isAllowContextMenu:l=!1,isAllowDrag:s=!1,...i}=e,o={set:e=>{}};return(0,r.jsx)("ul",{ref:t,className:"w-full space-y-1 ",...i,children:n&&n.map(e=>{var t,n,i,u;return(0,r.jsx)("li",{className:"w-full",children:e.children&&(null===(t=e.children)||void 0===t?void 0:t.length)>0?(0,r.jsx)(d.gt,{className:"px-[6px] py-[2px]",api:o,node:e,element:e.name,value:e.id,isSelectable:e.isSelectable,isAllowContextMenu:l,customIcon:(null==e?void 0:null===(n=e.info)||void 0===n?void 0:n.icon)?(0,r.jsx)(c.Icon,{icon:`codicon:${(null==e?void 0:null===(i=e.info)||void 0===i?void 0:i.icon)||null}`,className:"h-4 w-4"}):null,children:(0,r.jsx)(f,{"aria-label":`folder ${e.name}`,elements:e.children,indicator:a,isAllowContextMenu:l,isAllowDrag:s},e.id)}):(0,r.jsx)(d.$B,{className:"px-[6px] py-[2px]",value:e.id,"aria-label":`File ${e.name}`,isSelectable:e.isSelectable,isAllowContextMenu:l,api:o,fileIcon:(0,r.jsx)(c.Icon,{icon:`codicon:${(null==e?void 0:null===(u=e.info)||void 0===u?void 0:u.icon)||"file"}`,className:"h-4 w-4"}),draggable:s,onDragStart:()=>{o.set({dragItem:e})},children:(0,r.jsx)("span",{children:null==e?void 0:e.name})},e.id)},e.id)})})});f.displayName="TreeItem"},95059:function(e,t,n){n.d(t,{F:function(){return i},f:function(){return s}}),n(40777);var r=n(85893),a=n(34403);let l=(0,a.createContext)({theme:"system",setTheme:()=>null});function s(e){let{children:t,defaultTheme:n="system",storageKey:s="vite-ui-theme",...i}=e,[o,d]=(0,a.useState)(()=>localStorage.getItem(s)||n);return(0,a.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===o){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(o)},[o]),(0,r.jsx)(l.Provider,{...i,value:{theme:o,setTheme:e=>{localStorage.setItem(s,e),d(e)}},children:t})}let i=()=>{let e=(0,a.useContext)(l);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},27849:function(e,t,n){n.d(t,{C:function(){return i}});var r=n(85893);n(34403);var a=n(60118),l=n(27271);let s=(0,a.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:n,...a}=e;return(0,r.jsx)("div",{className:(0,l.cn)(s({variant:n}),t),...a})}},56470:function(e,t,n){n.d(t,{z:function(){return d}});var r=n(85893),a=n(34403),l=n(61289),s=n(60118),i=n(27271);let o=(0,s.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:n,variant:a,size:s,asChild:d=!1,...c}=e,u=d?l.Slot:"button";return(0,r.jsx)(u,{className:(0,i.cn)(o({variant:a,size:s,className:n})),ref:t,...c})});d.displayName="Button"},40631:function(e,t,n){n.d(t,{W4:function(){return d},Zo:function(){return u},h_:function(){return c},xV:function(){return o}});var r=n(85893),a=n(34403),l=n(6309),s=n(18524),i=n(27271);let o=l.Root,d=l.Trigger;l.Group,l.Portal,l.Sub,l.RadioGroup,a.forwardRef((e,t)=>{let{className:n,inset:a,children:o,...d}=e;return(0,r.jsxs)(l.SubTrigger,{ref:t,className:(0,i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",a&&"pl-8",n),...d,children:[o,(0,r.jsx)(s.ChevronRightIcon,{className:"ml-auto h-4 w-4"})]})}).displayName=l.SubTrigger.displayName,a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(l.SubContent,{ref:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...a})}).displayName=l.SubContent.displayName;let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(l.Portal,{children:(0,r.jsx)(l.Content,{ref:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...a})})});c.displayName=l.Content.displayName;let u=a.forwardRef((e,t)=>{let{className:n,inset:a,...s}=e;return(0,r.jsx)(l.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",n),...s})});u.displayName=l.Item.displayName,a.forwardRef((e,t)=>{let{className:n,children:a,checked:o,...d}=e;return(0,r.jsxs)(l.CheckboxItem,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:o,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(l.ItemIndicator,{children:(0,r.jsx)(s.CheckIcon,{className:"h-4 w-4"})})}),a]})}).displayName=l.CheckboxItem.displayName,a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsxs)(l.RadioItem,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...o,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(l.ItemIndicator,{children:(0,r.jsx)(s.DotFilledIcon,{className:"h-4 w-4 fill-current"})})}),a]})}).displayName=l.RadioItem.displayName,a.forwardRef((e,t)=>{let{className:n,inset:a,...s}=e;return(0,r.jsx)(l.Label,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold text-foreground",a&&"pl-8",n),...s})}).displayName=l.Label.displayName,a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(l.Separator,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-border",n),...a})}).displayName=l.Separator.displayName},85525:function(e,t,n){n.d(t,{$F:function(){return d},AW:function(){return p},Ju:function(){return j},KM:function(){return N},Ph:function(){return f},Qk:function(){return c},TG:function(){return x},VD:function(){return g},Xi:function(){return h},cq:function(){return u},h_:function(){return o},kt:function(){return m}});var r=n(85893),a=n(34403),l=n(13542),s=n(18524),i=n(27271);let o=l.Root,d=l.Trigger,c=l.Group,u=l.Portal,f=l.Sub;l.RadioGroup;let m=a.forwardRef((e,t)=>{let{className:n,inset:a,children:o,...d}=e;return(0,r.jsxs)(l.SubTrigger,{ref:t,className:(0,i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",a&&"pl-8",n),...d,children:[o,(0,r.jsx)(s.ChevronRightIcon,{className:"ml-auto h-4 w-4"})]})});m.displayName=l.SubTrigger.displayName;let x=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(l.SubContent,{ref:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...a})});x.displayName=l.SubContent.displayName;let p=a.forwardRef((e,t)=>{let{className:n,sideOffset:a=4,...s}=e;return(0,r.jsx)(l.Portal,{children:(0,r.jsx)(l.Content,{ref:t,sideOffset:a,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...s})})});p.displayName=l.Content.displayName;let h=a.forwardRef((e,t)=>{let{className:n,inset:a,...s}=e;return(0,r.jsx)(l.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",n),...s})});h.displayName=l.Item.displayName,a.forwardRef((e,t)=>{let{className:n,children:a,checked:o,...d}=e;return(0,r.jsxs)(l.CheckboxItem,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:o,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(l.ItemIndicator,{children:(0,r.jsx)(s.CheckIcon,{className:"h-4 w-4"})})}),a]})}).displayName=l.CheckboxItem.displayName,a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsxs)(l.RadioItem,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...o,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(l.ItemIndicator,{children:(0,r.jsx)(s.DotFilledIcon,{className:"h-4 w-4 fill-current"})})}),a]})}).displayName=l.RadioItem.displayName;let j=a.forwardRef((e,t)=>{let{className:n,inset:a,...s}=e;return(0,r.jsx)(l.Label,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",n),...s})});j.displayName=l.Label.displayName;let g=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(l.Separator,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",n),...a})});g.displayName=l.Separator.displayName;let N=e=>{let{className:t,...n}=e;return(0,r.jsx)("span",{className:(0,i.cn)("ml-auto text-xs tracking-widest opacity-60",t),...n})};N.displayName="DropdownMenuShortcut"},93664:function(e,t,n){n.d(t,{B:function(){return c},Gm:function(){return g},N:function(){return h},QP:function(){return o},U7:function(){return b},g6:function(){return j},hL:function(){return m},lS:function(){return x},nm:function(){return u},rQ:function(){return f},tP:function(){return d},uE:function(){return p},yE:function(){return N}});var r=n(85893),a=n(34403),l=n(18524),s=n(95764),i=n(27271);let o=s.Menu;s.Group,s.Portal;let d=s.Sub,c=s.RadioGroup,u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.Root,{ref:t,className:(0,i.cn)("flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",n),...a})});u.displayName=s.Root.displayName;let f=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.Trigger,{ref:t,className:(0,i.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",n),...a})});f.displayName=s.Trigger.displayName;let m=a.forwardRef((e,t)=>{let{className:n,inset:a,children:o,...d}=e;return(0,r.jsxs)(s.SubTrigger,{ref:t,className:(0,i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",a&&"pl-8",n),...d,children:[o,(0,r.jsx)(l.ChevronRightIcon,{className:"ml-auto h-4 w-4"})]})});m.displayName=s.SubTrigger.displayName;let x=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.SubContent,{ref:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...a})});x.displayName=s.SubContent.displayName;let p=a.forwardRef((e,t)=>{let{className:n,align:a="start",alignOffset:l=-4,sideOffset:o=8,...d}=e;return(0,r.jsx)(s.Portal,{children:(0,r.jsx)(s.Content,{ref:t,align:a,alignOffset:l,sideOffset:o,className:(0,i.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...d})})});p.displayName=s.Content.displayName;let h=a.forwardRef((e,t)=>{let{className:n,inset:a,...l}=e;return(0,r.jsx)(s.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",n),...l})});h.displayName=s.Item.displayName;let j=a.forwardRef((e,t)=>{let{className:n,children:a,checked:o,...d}=e;return(0,r.jsxs)(s.CheckboxItem,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:o,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.ItemIndicator,{children:(0,r.jsx)(l.CheckIcon,{className:"h-4 w-4"})})}),a]})});j.displayName=s.CheckboxItem.displayName;let g=a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsxs)(s.RadioItem,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...o,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.ItemIndicator,{children:(0,r.jsx)(l.DotFilledIcon,{className:"h-4 w-4 fill-current"})})}),a]})});g.displayName=s.RadioItem.displayName,a.forwardRef((e,t)=>{let{className:n,inset:a,...l}=e;return(0,r.jsx)(s.Label,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",n),...l})}).displayName=s.Label.displayName;let N=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.Separator,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",n),...a})});N.displayName=s.Separator.displayName;let b=e=>{let{className:t,...n}=e;return(0,r.jsx)("span",{className:(0,i.cn)("ml-auto text-xs tracking-widest text-muted-foreground",t),...n})};b.displayname="MenubarShortcut"},78198:function(e,t,n){n.d(t,{Dp:function(){return d},ee:function(){return o},pO:function(){return i}});var r=n(85893),a=n(18524),l=n(53350),s=n(27271);let i=e=>{let{className:t,...n}=e;return(0,r.jsx)(l.PanelGroup,{className:(0,s.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",t),...n})},o=l.Panel,d=e=>{let{withHandle:t,className:n,...i}=e;return(0,r.jsx)(l.PanelResizeHandle,{className:(0,s.cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",n),...i,children:t&&(0,r.jsx)("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",children:(0,r.jsx)(a.DragHandleDots2Icon,{className:"h-2.5 w-2.5"})})})}},93220:function(e,t,n){n.d(t,{x:function(){return i}});var r=n(85893),a=n(34403),l=n(42e3),s=n(27271);let i=a.forwardRef((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(l.Root,{ref:t,className:(0,s.cn)("relative overflow-hidden",n),...i,children:[(0,r.jsx)(l.Viewport,{className:"h-full w-full rounded-[inherit]",children:a}),(0,r.jsx)(o,{}),(0,r.jsx)(l.Corner,{})]})});i.displayName=l.Root.displayName;let o=a.forwardRef((e,t)=>{let{className:n,orientation:a="vertical",...i}=e;return(0,r.jsx)(l.ScrollAreaScrollbar,{ref:t,orientation:a,className:(0,s.cn)("flex touch-none select-none transition-colors","vertical"===a&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===a&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...i,children:(0,r.jsx)(l.ScrollAreaThumb,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=l.ScrollAreaScrollbar.displayName},12334:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(85893),a=n(34403),l=n(13336),s=n(27271);let i=a.forwardRef((e,t)=>{let{className:n,orientation:a="horizontal",decorative:i=!0,...o}=e;return(0,r.jsx)(l.Root,{ref:t,decorative:i,orientation:a,className:(0,s.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",n),...o})});i.displayName=l.Root.displayName},14361:function(e,t,n){n.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return i},u:function(){return o}});var r=n(85893),a=n(34403),l=n(66442),s=n(27271);let i=l.Provider,o=l.Root,d=l.Trigger,c=a.forwardRef((e,t)=>{let{className:n,sideOffset:a=4,...i}=e;return(0,r.jsx)(l.Content,{ref:t,sideOffset:a,className:(0,s.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})});c.displayName=l.Content.displayName},27271:function(e,t,n){n.d(t,{R:function(){return i},cn:function(){return l}});var r=n(25876),a=n(58223);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.twMerge)((0,r.clsx)(t))}let s=[];for(let e=0;e<256;e++)s[e]=(e<16?"0":"")+e.toString(16);let i=()=>{let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return`${s[255&e]+s[e>>8&255]+s[e>>16&255]+s[e>>24&255]}-${s[255&t]}${s[t>>8&255]}-${s[t>>16&15|64]}${s[t>>24&255]}-${s[63&n|128]}${s[n>>8&255]}-${s[n>>16&255]}${s[n>>24&255]}${s[255&r]}${s[r>>8&255]}${s[r>>16&255]}${s[r>>24&255]}`.toUpperCase().split("-").join("")}},32965:function(e,t,n){n.d(t,{e:function(){return u}}),n(59560),n(59734);var r=n(85893),a=n(34403),l=n(65090),s=n(12865),i=n(27515),o=n(50070),d=n(77071);let c="h-[50px] w-full flex items-center justify-center cursor-pointer",u=(0,a.memo)(e=>{let{isMenuCollapsed:t,menuItems:n}=e,{test:a,setSingleAppDisplay:u}=(0,o.h)(),f="h-[34px] w-[34px] hover:bg-gray-200 rounded-lg p-[7px] ",m=async e=>{let t=(await (0,d.loadRemote)(e.url)).default;u((0,r.jsx)(t,{api:o.h}))};return(0,r.jsxs)("div",{className:`w-[50px] h-full flex flex-col items-center border-t justify-between ${!t&&"border-r"}`,children:[(0,r.jsx)("div",{className:"w-[50px] flex flex-col items-center",children:n.map((e,t)=>(0,r.jsx)(s.p,{content:e.name,children:(0,r.jsx)("div",{className:`${c}`,children:(0,r.jsx)(l.J,{name:e.icon,className:f,onClick:()=>m(e)})},t)}))}),a,(0,r.jsx)("div",{className:"w-[50px] flex flex-col items-center",children:(0,r.jsx)(i.T,{children:(0,r.jsx)("div",{className:`${c}`,children:(0,r.jsx)(s.p,{content:"Settings",children:(0,r.jsx)(l.J,{name:"Settings",className:f})})})})})]})})},65090:function(e,t,n){n.d(t,{J:function(){return l}});var r=n(85893),a=n(84320);let l=e=>{let{name:t,className:n,onClick:l}=e,s=a.icons[t];return(0,r.jsx)(s,{className:n,onClick:l})}},66444:function(e,t,n){n.d(t,{z:function(){return m}}),n(64510),n(35646),n(69774),n(45123),n(73293),n(25128),n(69929),n(36301),n(59560),n(59734);var r=n(85893),a=n(34403),l=n(50070),s=n(3640),i=n(12334),o=n(78198),d=n(84320),c=n(27271);n(99038),n(77093),(0,s.WidthProvider)(s.Responsive);let u="w-[32px] h-[32px] p-[5px] rounded-lg hover:bg-slate-200",f={id:"a",style:"horizontal",parentId:null,children:[{id:"b",style:"vertical",parentId:"a",children:[{id:"c",style:"horizontal",parentId:"b",children:[]},{id:"d",style:"horizontal",parentId:"b",children:[]}]},{id:"e",style:"vertical",parentId:"a",children:[{id:"f",style:"horizontal",parentId:"e",children:[]},{id:"g",style:"horizontal",parentId:"e",children:[]}]}]},m=(0,a.memo)(e=>{let{singleAppDisplay:t}=(0,l.h)(),n=(0,a.useRef)(null),[s,m]=(0,a.useState)(f),x=(e,t,n)=>{let r={id:(0,c.R)(),style:t,parentId:e.parentId,children:[]},a=JSON.parse(JSON.stringify(s)),l=(e,t)=>(console.log(e,t),null===t)?a.style:(e.id!==t&&0!==e.children.length&&e.children.forEach(e=>{let n=l(e,t);if(n)return n}),null);console.log("res",l(a,"f"));let i=a=>{let l=-1;if(a.children.some((t,n)=>t.id===e.id&&(l=n,!0))&&-1!==l){if("add"===n){if(a.style===t)a.children.splice(l+1,0,r);else{let n=(0,c.R)(),s={id:n,style:t,parentId:a.id,children:[{...e,parentId:n},{...r,parentId:n}]};a.children[l]=s}}else if("remove"===n){if(a.children.length>2)a.children.splice(l,1);else{let t=a.children.filter(t=>t.id!==e.id)[0];a.children=[...t.children],a.style=t.style,a.id=t.id}}}else a.children.forEach(e=>{i(e)})};console.log("copy before",JSON.parse(JSON.stringify(a))),0===a.children.length&&null===a.parentId?(a.id=(0,c.R)(),a.style=t,a.children=[{...e,parentId:a.id},{...r,parentId:a.id}]):i(a),console.log("copy after",a),m(a)},p=e=>{let t=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"font-semibold",children:e.id}),(0,r.jsx)(d.CirclePlus,{className:u}),(0,r.jsx)(i.Z,{className:"my-4 w-[150px]"}),(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(0,r.jsx)(d.SquareSplitHorizontal,{className:u,onClick:()=>{x(e,"horizontal","add")}}),(0,r.jsx)(i.Z,{className:"mx-4",orientation:"vertical"}),(0,r.jsx)(d.SquareSplitVertical,{className:u,onClick:()=>{x(e,"vertical","add")}}),e.parentId&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{className:"mx-4",orientation:"vertical"}),(0,r.jsx)(d.Trash2,{className:u,onClick:()=>{x(e,e.style,"remove")}})]})]})]});return 0===e.children.length?(0,r.jsx)("div",{className:"flex flex-col w-full h-full items-center justify-center",children:t(e)},e.id):(0,r.jsx)(o.pO,{direction:e.style,className:`w-full h-full p-0 ${e.parentId?"":"rounded-lg border"}`,children:e.children.map((n,a)=>{let l=0!==n.children.length,s=l?100/e.children.length:100;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.ee,{defaultSize:s,minSize:10,maxSize:90,children:(0,r.jsx)("div",{className:"flex flex-col w-full h-full items-center justify-center",children:l?p(n):t(n)})}),a!==e.children.length-1&&(0,r.jsx)(o.Dp,{})]})})})};return(0,r.jsx)("div",{ref:n,id:"main-display-area",className:"flex w-full h-full",children:p(s)})})},19469:function(e,t,n){n.d(t,{G:function(){return l}});var r=n(85893),a=n(93664);let l=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.nm,{className:"border-0 ",children:[(0,r.jsxs)(a.QP,{children:[(0,r.jsx)(a.rQ,{children:"File"}),(0,r.jsxs)(a.uE,{children:[(0,r.jsxs)(a.N,{children:["New Tab ",(0,r.jsx)(a.U7,{children:"\u2318T"})]}),(0,r.jsxs)(a.N,{children:["New Window ",(0,r.jsx)(a.U7,{children:"\u2318N"})]}),(0,r.jsx)(a.N,{disabled:!0,children:"New Incognito Window"}),(0,r.jsx)(a.yE,{}),(0,r.jsxs)(a.tP,{children:[(0,r.jsx)(a.hL,{children:"Share"}),(0,r.jsxs)(a.lS,{children:[(0,r.jsx)(a.N,{children:"Email link"}),(0,r.jsx)(a.N,{children:"Messages"}),(0,r.jsx)(a.N,{children:"Notes"})]})]}),(0,r.jsx)(a.yE,{}),(0,r.jsxs)(a.N,{children:["Print... ",(0,r.jsx)(a.U7,{children:"\u2318P"})]})]})]}),(0,r.jsxs)(a.QP,{children:[(0,r.jsx)(a.rQ,{children:"Edit"}),(0,r.jsxs)(a.uE,{children:[(0,r.jsxs)(a.N,{children:["Undo ",(0,r.jsx)(a.U7,{children:"\u2318Z"})]}),(0,r.jsxs)(a.N,{children:["Redo ",(0,r.jsx)(a.U7,{children:"\u21E7\u2318Z"})]}),(0,r.jsx)(a.yE,{}),(0,r.jsxs)(a.tP,{children:[(0,r.jsx)(a.hL,{children:"Find"}),(0,r.jsxs)(a.lS,{children:[(0,r.jsx)(a.N,{children:"Search the web"}),(0,r.jsx)(a.yE,{}),(0,r.jsx)(a.N,{children:"Find..."}),(0,r.jsx)(a.N,{children:"Find Next"}),(0,r.jsx)(a.N,{children:"Find Previous"})]})]}),(0,r.jsx)(a.yE,{}),(0,r.jsx)(a.N,{children:"Cut"}),(0,r.jsx)(a.N,{children:"Copy"}),(0,r.jsx)(a.N,{children:"Paste"})]})]}),(0,r.jsxs)(a.QP,{children:[(0,r.jsx)(a.rQ,{children:"View"}),(0,r.jsxs)(a.uE,{children:[(0,r.jsx)(a.g6,{children:"Always Show Bookmarks Bar"}),(0,r.jsx)(a.g6,{checked:!0,children:"Always Show Full URLs"}),(0,r.jsx)(a.yE,{}),(0,r.jsxs)(a.N,{inset:!0,children:["Reload ",(0,r.jsx)(a.U7,{children:"\u2318R"})]}),(0,r.jsxs)(a.N,{disabled:!0,inset:!0,children:["Force Reload ",(0,r.jsx)(a.U7,{children:"\u21E7\u2318R"})]}),(0,r.jsx)(a.yE,{}),(0,r.jsx)(a.N,{inset:!0,children:"Toggle Fullscreen"}),(0,r.jsx)(a.yE,{}),(0,r.jsx)(a.N,{inset:!0,children:"Hide Sidebar"})]})]}),(0,r.jsxs)(a.QP,{children:[(0,r.jsx)(a.rQ,{children:"Profiles"}),(0,r.jsxs)(a.uE,{children:[(0,r.jsxs)(a.B,{value:"benoit",children:[(0,r.jsx)(a.Gm,{value:"andy",children:"Andy"}),(0,r.jsx)(a.Gm,{value:"benoit",children:"Benoit"}),(0,r.jsx)(a.Gm,{value:"Luis",children:"Luis"})]}),(0,r.jsx)(a.yE,{}),(0,r.jsx)(a.N,{inset:!0,children:"Edit..."}),(0,r.jsx)(a.yE,{}),(0,r.jsx)(a.N,{inset:!0,children:"Add Profile..."})]})]})]})})},53184:function(e,t,n){n.d(t,{V:function(){return l}});var r=n(85893),a=n(21842);let l=e=>{let{menuItems:t,isExpanded:n}=e;return(0,r.jsx)(a.L,{className:"rounded-md h-full bg-background overflow-hidden p-0 ",elements:t,expandAll:n,isAllowDrag:!0})}},48669:function(e,t,n){n.d(t,{Q:function(){return l}});var r=n(85893),a=n(21842);let l=e=>{let{menuItems:t,isExpanded:n}=e;return(0,r.jsx)(a.L,{className:"rounded-md h-full bg-background overflow-hidden p-0 ",elements:t,expandAll:n,isAllowContextMenu:!0,isAllowDrag:!1})}},27515:function(e,t,n){n.d(t,{T:function(){return s}});var r=n(85893),a=n(85525),l=n(95059);function s(e){let{children:t}=e,{theme:n,setTheme:s}=(0,l.F)();return(0,r.jsxs)(a.h_,{children:[(0,r.jsx)(a.$F,{asChild:!0,children:t}),(0,r.jsxs)(a.AW,{className:"w-56 ",side:"right",children:[(0,r.jsx)(a.Ju,{children:"My Account"}),(0,r.jsx)(a.VD,{}),(0,r.jsx)(a.Qk,{children:(0,r.jsxs)(a.Ph,{children:[(0,r.jsx)(a.kt,{children:"Theme"}),(0,r.jsx)(a.cq,{children:(0,r.jsxs)(a.TG,{className:"",children:[(0,r.jsx)(a.Xi,{onClick:()=>s("light"),children:"Light"}),(0,r.jsx)(a.Xi,{onClick:()=>s("dark"),children:"Dark"}),(0,r.jsx)(a.VD,{}),(0,r.jsx)(a.Xi,{onClick:()=>s("system"),children:"System"})]})})]})}),(0,r.jsx)(a.VD,{}),(0,r.jsxs)(a.Qk,{children:[(0,r.jsx)(a.Xi,{children:"Team"}),(0,r.jsxs)(a.Ph,{children:[(0,r.jsx)(a.kt,{children:"Invite users"}),(0,r.jsx)(a.cq,{children:(0,r.jsxs)(a.TG,{className:"",children:[(0,r.jsx)(a.Xi,{children:"Email"}),(0,r.jsx)(a.Xi,{children:"Message"}),(0,r.jsx)(a.VD,{}),(0,r.jsx)(a.Xi,{children:"More..."})]})})]}),(0,r.jsxs)(a.Xi,{children:["New Team",(0,r.jsx)(a.KM,{children:"\u2318+T"})]})]}),(0,r.jsx)(a.VD,{}),(0,r.jsx)(a.Xi,{children:"GitHub"}),(0,r.jsx)(a.Xi,{children:"Support"}),(0,r.jsx)(a.Xi,{disabled:!0,children:"API"}),(0,r.jsx)(a.VD,{}),(0,r.jsxs)(a.Xi,{children:["Log out",(0,r.jsx)(a.KM,{children:"\u21E7\u2318Q"})]})]})]})}},12865:function(e,t,n){n.d(t,{p:function(){return l}});var r=n(85893),a=n(14361);function l(e){let{children:t,content:n}=e;return(0,r.jsx)(a.pn,{delayDuration:10,children:(0,r.jsxs)(a.u,{children:[(0,r.jsx)(a.aJ,{asChild:!0,children:t}),(0,r.jsx)(a._v,{side:"right",children:(0,r.jsx)("p",{children:n})})]})})}}}]);