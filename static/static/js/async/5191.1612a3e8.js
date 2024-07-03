/*! For license information please see 5191.1612a3e8.js.LICENSE.txt */
"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([["5191"],{75251:function(e,r,n){var t=n(65117),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,u={},c=null,l=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,t)&&!s.hasOwnProperty(t)&&(u[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===u[t]&&(u[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:l,props:u,_owner:i.current}}r.Fragment=u,r.jsx=c,r.jsxs=c},85893:function(e,r,n){e.exports=n(75251)},62933:function(e,r,n){n.r(r),n.d(r,{Anchor:function(){return Z},Arrow:function(){return G},Close:function(){return q},Content:function(){return X},Popover:function(){return w},PopoverAnchor:function(){return b},PopoverArrow:function(){return V},PopoverClose:function(){return z},PopoverContent:function(){return F},PopoverPortal:function(){return k},PopoverTrigger:function(){return j},Portal:function(){return K},Root:function(){return Y},Trigger:function(){return $},createPopoverScope:function(){return N}});var t=n(92494),o=n(68743),u=n(23712),a=n(70763),i=n(90066),s=n(68),c=n(51871),l=n(63287),p=n(79601),f=n(13358),d=n(30485),v=n(73174),m=n(61289),g=n(48743),h=n(23541),P=n(97787),O=n(85893),C="Popover",[y,N]=(0,a.b)(C,[p.D7]),x=(0,p.D7)(),[R,_]=y(C),w=e=>{let{__scopePopover:r,children:n,open:o,defaultOpen:u,onOpenChange:a,modal:i=!1}=e,s=x(r),c=t.useRef(null),[f,d]=t.useState(!1),[v=!1,m]=(0,g.T)({prop:o,defaultProp:u,onChange:a});return(0,O.jsx)(p.fC,{...s,children:(0,O.jsx)(R,{scope:r,contentId:(0,l.M)(),triggerRef:c,open:v,onOpenChange:m,onOpenToggle:t.useCallback(()=>m(e=>!e),[m]),hasCustomAnchor:f,onCustomAnchorAdd:t.useCallback(()=>d(!0),[]),onCustomAnchorRemove:t.useCallback(()=>d(!1),[]),modal:i,children:n})})};w.displayName=C;var A="PopoverAnchor",b=t.forwardRef((e,r)=>{let{__scopePopover:n,...o}=e,u=_(A,n),a=x(n),{onCustomAnchorAdd:i,onCustomAnchorRemove:s}=u;return t.useEffect(()=>(i(),()=>s()),[i,s]),(0,O.jsx)(p.ee,{...a,...o,ref:r})});b.displayName=A;var E="PopoverTrigger",j=t.forwardRef((e,r)=>{let{__scopePopover:n,...t}=e,a=_(E,n),i=x(n),s=(0,u.e)(r,a.triggerRef),c=(0,O.jsx)(v.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":B(a.open),...t,ref:s,onClick:(0,o.M)(e.onClick,a.onOpenToggle)});return a.hasCustomAnchor?c:(0,O.jsx)(p.ee,{asChild:!0,...i,children:c})});j.displayName=E;var T="PopoverPortal",[M,D]=y(T,{forceMount:void 0}),k=e=>{let{__scopePopover:r,forceMount:n,children:t,container:o}=e,u=_(T,r);return(0,O.jsx)(M,{scope:r,forceMount:n,children:(0,O.jsx)(d.z,{present:n||u.open,children:(0,O.jsx)(f.h,{asChild:!0,container:o,children:t})})})};k.displayName=T;var I="PopoverContent",F=t.forwardRef((e,r)=>{let n=D(I,e.__scopePopover),{forceMount:t=n.forceMount,...o}=e,u=_(I,e.__scopePopover);return(0,O.jsx)(d.z,{present:t||u.open,children:u.modal?(0,O.jsx)(S,{...o,ref:r}):(0,O.jsx)(U,{...o,ref:r})})});F.displayName=I;var S=t.forwardRef((e,r)=>{let n=_(I,e.__scopePopover),a=t.useRef(null),i=(0,u.e)(r,a),s=t.useRef(!1);return t.useEffect(()=>{let e=a.current;if(e)return(0,h.Ry)(e)},[]),(0,O.jsx)(P.Z,{as:m.Slot,allowPinchZoom:!0,children:(0,O.jsx)(L,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{e.preventDefault(),!s.current&&n.triggerRef.current?.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let r=e.detail.originalEvent,n=0===r.button&&!0===r.ctrlKey,t=2===r.button||n;s.current=t},{checkForDefaultPrevented:!1}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),U=t.forwardRef((e,r)=>{let n=_(I,e.__scopePopover),o=t.useRef(!1),u=t.useRef(!1);return(0,O.jsx)(L,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{e.onCloseAutoFocus?.(r),!r.defaultPrevented&&(!o.current&&n.triggerRef.current?.focus(),r.preventDefault()),o.current=!1,u.current=!1},onInteractOutside:r=>{e.onInteractOutside?.(r),!r.defaultPrevented&&(o.current=!0,"pointerdown"===r.detail.originalEvent.type&&(u.current=!0));let t=r.target;n.triggerRef.current?.contains(t)&&r.preventDefault(),"focusin"===r.detail.originalEvent.type&&u.current&&r.preventDefault()}})}),L=t.forwardRef((e,r)=>{let{__scopePopover:n,trapFocus:t,onOpenAutoFocus:o,onCloseAutoFocus:u,disableOutsidePointerEvents:a,onEscapeKeyDown:l,onPointerDownOutside:f,onFocusOutside:d,onInteractOutside:v,...m}=e,g=_(I,n),h=x(n);return(0,s.EW)(),(0,O.jsx)(c.M,{asChild:!0,loop:!0,trapped:t,onMountAutoFocus:o,onUnmountAutoFocus:u,children:(0,O.jsx)(i.XB,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:v,onEscapeKeyDown:l,onPointerDownOutside:f,onFocusOutside:d,onDismiss:()=>g.onOpenChange(!1),children:(0,O.jsx)(p.VY,{"data-state":B(g.open),role:"dialog",id:g.contentId,...h,...m,ref:r,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),W="PopoverClose",z=t.forwardRef((e,r)=>{let{__scopePopover:n,...t}=e,u=_(W,n);return(0,O.jsx)(v.WV.button,{type:"button",...t,ref:r,onClick:(0,o.M)(e.onClick,()=>u.onOpenChange(!1))})});z.displayName=W;var V=t.forwardRef((e,r)=>{let{__scopePopover:n,...t}=e,o=x(n);return(0,O.jsx)(p.Eh,{...o,...t,ref:r})});function B(e){return e?"open":"closed"}V.displayName="PopoverArrow";var Y=w,Z=b,$=j,K=k,X=F,q=z,G=V},30485:function(e,r,n){n.d(r,{z:function(){return i}});var t=n(92494),o=n(2052),u=n(23712),a=n(84997),i=e=>{let{present:r,children:n}=e,i=function(e){var r,n;let[u,i]=t.useState(),c=t.useRef({}),l=t.useRef(e),p=t.useRef("none");let[f,d]=(r=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},t.useReducer((e,r)=>n[e][r]??e,r));return t.useEffect(()=>{let e=s(c.current);p.current="mounted"===f?e:"none"},[f]),(0,a.b)(()=>{let r=c.current,n=l.current;if(n!==e){let t=p.current,o=s(r);e?d("MOUNT"):"none"===o||r?.display==="none"?d("UNMOUNT"):n&&t!==o?d("ANIMATION_OUT"):d("UNMOUNT"),l.current=e}},[e,d]),(0,a.b)(()=>{if(u){let e=e=>{let r=s(c.current).includes(e.animationName);e.target===u&&r&&o.flushSync(()=>d("ANIMATION_END"))},r=e=>{e.target===u&&(p.current=s(c.current))};return u.addEventListener("animationstart",r),u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationstart",r),u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e)}}d("ANIMATION_END")},[u,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:t.useCallback(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(r),c="function"==typeof n?n({present:i.isPresent}):t.Children.only(n),l=(0,u.e)(i.ref,function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(c));return"function"==typeof n||i.isPresent?t.cloneElement(c,{ref:l}):null};i.displayName="Presence";function s(e){return e?.animationName||"none"}}}]);