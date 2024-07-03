/*! For license information please see 71.9a83f27a.js.LICENSE.txt */
"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([["71"],{75251:function(e,t,r){var n=r(34403),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,c=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},85893:function(e,t,r){e.exports=r(75251)},34234:function(e,t,r){r.r(t),r.d(t,{Arrow:function(){return q},Content:function(){return $},Portal:function(){return U},Provider:function(){return Y},Root:function(){return X},Tooltip:function(){return j},TooltipArrow:function(){return W},TooltipContent:function(){return N},TooltipPortal:function(){return S},TooltipProvider:function(){return E},TooltipTrigger:function(){return L},Trigger:function(){return z},createTooltipScope:function(){return g}});var n=r(34403),o=r(68743),i=r(23712),l=r(70763),a=r(90066),u=r(63287),s=r(79601),c=r(13358),p=r(30485),d=r(73174),f=r(61289),h=r(48743),x=r(37392),y=r(85893),[v,g]=(0,l.b)("Tooltip",[s.D7]),w=(0,s.D7)(),b="TooltipProvider",m="tooltip.open",[T,C]=v(b),E=e=>{let{__scopeTooltip:t,delayDuration:r=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:l}=e,[a,u]=n.useState(!0),s=n.useRef(!1),c=n.useRef(0);return n.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,y.jsx)(T,{scope:t,isOpenDelayed:a,delayDuration:r,onOpen:n.useCallback(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),o)},[o]),isPointerInTransitRef:s,onPointerInTransitChange:n.useCallback(e=>{s.current=e},[]),disableHoverableContent:i,children:l})};E.displayName=b;var k="Tooltip",[_,R]=v(k),j=e=>{let{__scopeTooltip:t,children:r,open:o,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:c}=e,p=C(k,e.__scopeTooltip),d=w(t),[f,x]=n.useState(null),v=(0,u.M)(),g=n.useRef(0),b=a??p.disableHoverableContent,T=c??p.delayDuration,E=n.useRef(!1),[R=!1,j]=(0,h.T)({prop:o,defaultProp:i,onChange:e=>{e?(p.onOpen(),document.dispatchEvent(new CustomEvent(m))):p.onClose(),l?.(e)}}),P=n.useMemo(()=>R?E.current?"delayed-open":"instant-open":"closed",[R]),L=n.useCallback(()=>{window.clearTimeout(g.current),E.current=!1,j(!0)},[j]),M=n.useCallback(()=>{window.clearTimeout(g.current),j(!1)},[j]),O=n.useCallback(()=>{window.clearTimeout(g.current),g.current=window.setTimeout(()=>{E.current=!0,j(!0)},T)},[T,j]);return n.useEffect(()=>()=>window.clearTimeout(g.current),[]),(0,y.jsx)(s.fC,{...d,children:(0,y.jsx)(_,{scope:t,contentId:v,open:R,stateAttribute:P,trigger:f,onTriggerChange:x,onTriggerEnter:n.useCallback(()=>{p.isOpenDelayed?O():L()},[p.isOpenDelayed,O,L]),onTriggerLeave:n.useCallback(()=>{b?M():window.clearTimeout(g.current)},[M,b]),onOpen:L,onClose:M,disableHoverableContent:b,children:r})})};j.displayName=k;var P="TooltipTrigger",L=n.forwardRef((e,t)=>{let{__scopeTooltip:r,...l}=e,a=R(P,r),u=C(P,r),c=w(r),p=n.useRef(null),f=(0,i.e)(t,p,a.onTriggerChange),h=n.useRef(!1),x=n.useRef(!1),v=n.useCallback(()=>h.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",v),[v]),(0,y.jsx)(s.ee,{asChild:!0,...c,children:(0,y.jsx)(d.WV.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...l,ref:f,onPointerMove:(0,o.M)(e.onPointerMove,e=>{"touch"!==e.pointerType&&!x.current&&!u.isPointerInTransitRef.current&&(a.onTriggerEnter(),x.current=!0)}),onPointerLeave:(0,o.M)(e.onPointerLeave,()=>{a.onTriggerLeave(),x.current=!1}),onPointerDown:(0,o.M)(e.onPointerDown,()=>{h.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:(0,o.M)(e.onFocus,()=>{!h.current&&a.onOpen()}),onBlur:(0,o.M)(e.onBlur,a.onClose),onClick:(0,o.M)(e.onClick,a.onClose)})})});L.displayName=P;var M="TooltipPortal",[O,D]=v(M,{forceMount:void 0}),S=e=>{let{__scopeTooltip:t,forceMount:r,children:n,container:o}=e,i=R(M,t);return(0,y.jsx)(O,{scope:t,forceMount:r,children:(0,y.jsx)(p.z,{present:r||i.open,children:(0,y.jsx)(c.h,{asChild:!0,container:o,children:n})})})};S.displayName=M;var I="TooltipContent",N=n.forwardRef((e,t)=>{let r=D(I,e.__scopeTooltip),{forceMount:n=r.forceMount,side:o="top",...i}=e,l=R(I,e.__scopeTooltip);return(0,y.jsx)(p.z,{present:n||l.open,children:l.disableHoverableContent?(0,y.jsx)(H,{side:o,...i,ref:t}):(0,y.jsx)(A,{side:o,...i,ref:t})})}),A=n.forwardRef((e,t)=>{let r=R(I,e.__scopeTooltip),o=C(I,e.__scopeTooltip),l=n.useRef(null),a=(0,i.e)(t,l),[u,s]=n.useState(null),{trigger:c,onClose:p}=r,d=l.current,{onPointerInTransitChange:f}=o,h=n.useCallback(()=>{s(null),f(!1)},[f]),x=n.useCallback((e,t)=>{let r=e.currentTarget,n={x:e.clientX,y:e.clientY},o=function(e,t){let r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(r,n,o,i)){case i:return"left";case o:return"right";case r:return"top";case n:return"bottom";default:throw Error("unreachable")}}(n,r.getBoundingClientRect()),i=function(e,t,r=5){let n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r})}return n}(n,o);s(function(e){let t=e.slice();return t.sort((e,t)=>{if(e.x<t.x)return -1;if(e.x>t.x)return 1;if(e.y<t.y)return -1;else if(e.y>t.y)return 1;else return 0}),function(e){if(e.length<=1)return e.slice();let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(;t.length>=2;){let e=t[t.length-1],r=t[t.length-2];if((e.x-r.x)*(n.y-r.y)>=(e.y-r.y)*(n.x-r.x))t.pop();else break}t.push(n)}t.pop();let r=[];for(let t=e.length-1;t>=0;t--){let n=e[t];for(;r.length>=2;){let e=r[r.length-1],t=r[r.length-2];if((e.x-t.x)*(n.y-t.y)>=(e.y-t.y)*(n.x-t.x))r.pop();else break}r.push(n)}return(r.pop(),1===t.length&&1===r.length&&t[0].x===r[0].x&&t[0].y===r[0].y)?t:t.concat(r)}(t)}([...i,...function(e){let{top:t,right:r,bottom:n,left:o}=e;return[{x:o,y:t},{x:r,y:t},{x:r,y:n},{x:o,y:n}]}(t.getBoundingClientRect())])),f(!0)},[f]);return n.useEffect(()=>()=>h(),[h]),n.useEffect(()=>{if(c&&d){let e=e=>x(e,d),t=e=>x(e,c);return c.addEventListener("pointerleave",e),d.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),d.removeEventListener("pointerleave",t)}}},[c,d,x,h]),n.useEffect(()=>{if(u){let e=e=>{let t=e.target,r={x:e.clientX,y:e.clientY},n=c?.contains(t)||d?.contains(t),o=!function(e,t){let{x:r,y:n}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,s=t[i].y;a>n!=s>n&&r<(u-l)*(n-a)/(s-a)+l&&(o=!o)}return o}(r,u);n?h():o&&(h(),p())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,d,u,p,h]),(0,y.jsx)(H,{...e,ref:a})}),[B,F]=v(k,{isInside:!1}),H=n.forwardRef((e,t)=>{let{__scopeTooltip:r,children:o,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:u,...c}=e,p=R(I,r),d=w(r),{onClose:h}=p;return n.useEffect(()=>(document.addEventListener(m,h),()=>document.removeEventListener(m,h)),[h]),n.useEffect(()=>{if(p.trigger){let e=e=>{let t=e.target;t?.contains(p.trigger)&&h()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[p.trigger,h]),(0,y.jsx)(a.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:h,children:(0,y.jsxs)(s.VY,{"data-state":p.stateAttribute,...d,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,y.jsx)(f.Slottable,{children:o}),(0,y.jsx)(B,{scope:r,isInside:!0,children:(0,y.jsx)(x.f,{id:p.contentId,role:"tooltip",children:i||o})})]})})});N.displayName=I;var V="TooltipArrow",W=n.forwardRef((e,t)=>{let{__scopeTooltip:r,...n}=e,o=w(r);return F(V,r).isInside?null:(0,y.jsx)(s.Eh,{...o,...n,ref:t})});W.displayName=V;var Y=E,X=j,z=L,U=S,$=N,q=W},37392:function(e,t,r){r.d(t,{f:function(){return a}});var n=r(34403),o=r(73174),i=r(85893),l=n.forwardRef((e,t)=>(0,i.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));l.displayName="VisuallyHidden";var a=l}}]);