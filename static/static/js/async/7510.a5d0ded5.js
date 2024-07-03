/*! For license information please see 7510.a5d0ded5.js.LICENSE.txt */
"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([["7510"],{75251:function(e,r,n){var t=n(65117),a=Symbol.for("react.element"),u=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,u={},d=null,f=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(f=r.ref),r)o.call(r,t)&&!l.hasOwnProperty(t)&&(u[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===u[t]&&(u[t]=r[t]);return{$$typeof:a,type:e,key:d,ref:f,props:u,_owner:i.current}}r.Fragment=u,r.jsx=d,r.jsxs=d},85893:function(e,r,n){e.exports=n(75251)},83416:function(e,r,n){n.r(r),n.d(r,{Arrow:function(){return eo},CheckboxItem:function(){return er},Content:function(){return J},Group:function(){return Q},Item:function(){return ee},ItemIndicator:function(){return ea},Label:function(){return X},Menu:function(){return z},Menubar:function(){return I},MenubarArrow:function(){return V},MenubarCheckboxItem:function(){return L},MenubarContent:function(){return E},MenubarGroup:function(){return P},MenubarItem:function(){return F},MenubarItemIndicator:function(){return U},MenubarLabel:function(){return D},MenubarMenu:function(){return O},MenubarPortal:function(){return T},MenubarRadioGroup:function(){return G},MenubarRadioItem:function(){return K},MenubarSeparator:function(){return B},MenubarSub:function(){return W},MenubarSubContent:function(){return Z},MenubarSubTrigger:function(){return Y},MenubarTrigger:function(){return N},Portal:function(){return H},RadioGroup:function(){return en},RadioItem:function(){return et},Root:function(){return $},Separator:function(){return eu},Sub:function(){return ei},SubContent:function(){return ed},SubTrigger:function(){return el},Trigger:function(){return q},createMenubarScope:function(){return x}});var t=n(92494),a=n(54387),u=n(8093),o=n(68743),i=n(23712),l=n(70763),d=n(63287),f=n(86973),c=n(15614),s=n(73174),p=n(48743),b=n(85893),g="Menubar",[v,m,h]=(0,a.B)(g),[M,x]=(0,l.b)(g,[h,c.Pc]),w=(0,f.Wf)(),y=(0,c.Pc)(),[R,C]=M(g),I=t.forwardRef((e,r)=>{let{__scopeMenubar:n,value:a,onValueChange:o,defaultValue:i,loop:l=!0,dir:d,...f}=e,g=(0,u.gm)(d),m=y(n),[h="",M]=(0,p.T)({prop:a,onChange:o,defaultProp:i}),[x,w]=t.useState(null);return(0,b.jsx)(R,{scope:n,value:h,onMenuOpen:t.useCallback(e=>{M(e),w(e)},[M]),onMenuClose:t.useCallback(()=>M(""),[M]),onMenuToggle:t.useCallback(e=>{M(r=>r?"":e),w(e)},[M]),dir:g,loop:l,children:(0,b.jsx)(v.Provider,{scope:n,children:(0,b.jsx)(v.Slot,{scope:n,children:(0,b.jsx)(c.fC,{asChild:!0,...m,orientation:"horizontal",loop:l,dir:g,currentTabStopId:x,onCurrentTabStopIdChange:w,children:(0,b.jsx)(s.WV.div,{role:"menubar",...f,ref:r})})})})})});I.displayName=g;var j="MenubarMenu",[S,k]=M(j),O=e=>{let{__scopeMenubar:r,value:n,...a}=e,u=(0,d.M)(),o=n||u||"LEGACY_REACT_AUTO_VALUE",i=C(j,r),l=w(r),c=t.useRef(null),s=t.useRef(!1),p=i.value===o;return t.useEffect(()=>{!p&&(s.current=!1)},[p]),(0,b.jsx)(S,{scope:r,value:o,triggerId:(0,d.M)(),triggerRef:c,contentId:(0,d.M)(),wasKeyboardTriggerOpenRef:s,children:(0,b.jsx)(f.fC,{...l,open:p,onOpenChange:e=>{!e&&i.onMenuClose()},modal:!1,dir:i.dir,...a})})};O.displayName=j;var _="MenubarTrigger",N=t.forwardRef((e,r)=>{let{__scopeMenubar:n,disabled:a=!1,...u}=e,l=y(n),d=w(n),p=C(_,n),g=k(_,n),m=t.useRef(null),h=(0,i.e)(r,m,g.triggerRef),[M,x]=t.useState(!1),R=p.value===g.value;return(0,b.jsx)(v.ItemSlot,{scope:n,value:g.value,disabled:a,children:(0,b.jsx)(c.ck,{asChild:!0,...l,focusable:!a,tabStopId:g.value,children:(0,b.jsx)(f.ee,{asChild:!0,...d,children:(0,b.jsx)(s.WV.button,{type:"button",role:"menuitem",id:g.triggerId,"aria-haspopup":"menu","aria-expanded":R,"aria-controls":R?g.contentId:void 0,"data-highlighted":M?"":void 0,"data-state":R?"open":"closed","data-disabled":a?"":void 0,disabled:a,...u,ref:h,onPointerDown:(0,o.M)(e.onPointerDown,e=>{!a&&0===e.button&&!1===e.ctrlKey&&(p.onMenuOpen(g.value),!R&&e.preventDefault())}),onPointerEnter:(0,o.M)(e.onPointerEnter,()=>{p.value&&!R&&(p.onMenuOpen(g.value),m.current?.focus())}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{!a&&(["Enter"," "].includes(e.key)&&p.onMenuToggle(g.value),"ArrowDown"===e.key&&p.onMenuOpen(g.value),["Enter"," ","ArrowDown"].includes(e.key)&&(g.wasKeyboardTriggerOpenRef.current=!0,e.preventDefault()))}),onFocus:(0,o.M)(e.onFocus,()=>x(!0)),onBlur:(0,o.M)(e.onBlur,()=>x(!1))})})})})});N.displayName=_;var T=e=>{let{__scopeMenubar:r,...n}=e,t=w(r);return(0,b.jsx)(f.h_,{...t,...n})};T.displayName="MenubarPortal";var A="MenubarContent",E=t.forwardRef((e,r)=>{let{__scopeMenubar:n,align:a="start",...u}=e,i=w(n),l=C(A,n),d=k(A,n),c=m(n),s=t.useRef(!1);return(0,b.jsx)(f.VY,{id:d.contentId,"aria-labelledby":d.triggerId,"data-radix-menubar-content":"",...i,...u,ref:r,align:a,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{!l.value&&!s.current&&d.triggerRef.current?.focus(),s.current=!1,e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>{let r=e.target;c().some(e=>e.ref.current?.contains(r))&&e.preventDefault()}),onInteractOutside:(0,o.M)(e.onInteractOutside,()=>{s.current=!0}),onEntryFocus:e=>{!d.wasKeyboardTriggerOpenRef.current&&e.preventDefault()},onKeyDown:(0,o.M)(e.onKeyDown,e=>{if(["ArrowRight","ArrowLeft"].includes(e.key)){let r=e.target,n=r.hasAttribute("data-radix-menubar-subtrigger"),t=r.closest("[data-radix-menubar-content]")!==e.currentTarget,a=("rtl"===l.dir?"ArrowRight":"ArrowLeft")===e.key;if(!a&&n||t&&a)return;let u=c().filter(e=>!e.disabled).map(e=>e.value);a&&u.reverse();let o=u.indexOf(d.value),[i]=u=l.loop?function(e,r){return e.map((n,t)=>e[(r+t)%e.length])}(u,o+1):u.slice(o+1);i&&l.onMenuOpen(i)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});E.displayName=A;var P=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.ZA,{...a,...t,ref:r})});P.displayName="MenubarGroup";var D=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.__,{...a,...t,ref:r})});D.displayName="MenubarLabel";var F=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.ck,{...a,...t,ref:r})});F.displayName="MenubarItem";var L=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.oC,{...a,...t,ref:r})});L.displayName="MenubarCheckboxItem";var G=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.Ee,{...a,...t,ref:r})});G.displayName="MenubarRadioGroup";var K=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.Rk,{...a,...t,ref:r})});K.displayName="MenubarRadioItem";var U=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.wU,{...a,...t,ref:r})});U.displayName="MenubarItemIndicator";var B=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.Z0,{...a,...t,ref:r})});B.displayName="MenubarSeparator";var V=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.Eh,{...a,...t,ref:r})});V.displayName="MenubarArrow";var W=e=>{let{__scopeMenubar:r,children:n,open:t,onOpenChange:a,defaultOpen:u}=e,o=w(r),[i=!1,l]=(0,p.T)({prop:t,defaultProp:u,onChange:a});return(0,b.jsx)(f.Tr,{...o,open:i,onOpenChange:l,children:n})};W.displayName="MenubarSub";var Y=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.fF,{"data-radix-menubar-subtrigger":"",...a,...t,ref:r})});Y.displayName="MenubarSubTrigger";var Z=t.forwardRef((e,r)=>{let{__scopeMenubar:n,...t}=e,a=w(n);return(0,b.jsx)(f.tu,{...a,"data-radix-menubar-content":"",...t,ref:r,style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});Z.displayName="MenubarSubContent";var $=I,z=O,q=N,H=T,J=E,Q=P,X=D,ee=F,er=L,en=G,et=K,ea=U,eu=B,eo=V,ei=W,el=Y,ed=Z}}]);