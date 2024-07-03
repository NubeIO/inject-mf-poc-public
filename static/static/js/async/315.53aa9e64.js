"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([["315"],{68743:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),!1===t||!r.defaultPrevented)return n?.(r)}}},32401:function(e,n,t){t.r(n),t.d(n,{Accordion:function(){return w},AccordionContent:function(){return V},AccordionHeader:function(){return U},AccordionItem:function(){return P},AccordionTrigger:function(){return $},Content:function(){return K},Header:function(){return F},Item:function(){return B},Root:function(){return H},Trigger:function(){return q},createAccordionScope:function(){return N}});var r=t(34403),o=t(70763),i=t(54387),a=t(23712),u=t(68743),c=t(48743),l=t(73174),d=t(30970),s=t(63287),f=t(8093),p=t(85893),m="Accordion",v=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[b,g,h]=(0,i.B)(m),[x,N]=(0,o.b)(m,[h,d.p_]),y=(0,d.p_)(),w=r.forwardRef((e,n)=>{let{type:t,...r}=e;return(0,p.jsx)(b.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,p.jsx)(M,{...r,ref:n}):(0,p.jsx)(I,{...r,ref:n})})});w.displayName=m;var[R,C]=x(m),[A,j]=x(m,{collapsible:!1}),I=r.forwardRef((e,n)=>{let{value:t,defaultValue:o,onValueChange:i=()=>{},collapsible:a=!1,...u}=e,[l,d]=(0,c.T)({prop:t,defaultProp:o,onChange:i});return(0,p.jsx)(R,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:d,onItemClose:r.useCallback(()=>a&&d(""),[a,d]),children:(0,p.jsx)(A,{scope:e.__scopeAccordion,collapsible:a,children:(0,p.jsx)(S,{...u,ref:n})})})}),M=r.forwardRef((e,n)=>{let{value:t,defaultValue:o,onValueChange:i=()=>{},...a}=e,[u=[],l]=(0,c.T)({prop:t,defaultProp:o,onChange:i}),d=r.useCallback(e=>l((n=[])=>[...n,e]),[l]),s=r.useCallback(e=>l((n=[])=>n.filter(n=>n!==e)),[l]);return(0,p.jsx)(R,{scope:e.__scopeAccordion,value:u,onItemOpen:d,onItemClose:s,children:(0,p.jsx)(A,{scope:e.__scopeAccordion,collapsible:!0,children:(0,p.jsx)(S,{...a,ref:n})})})}),[O,_]=x(m),S=r.forwardRef((e,n)=>{let{__scopeAccordion:t,disabled:o,dir:i,orientation:c="vertical",...d}=e,s=r.useRef(null),m=(0,a.e)(s,n),h=g(t),x="ltr"===(0,f.gm)(i),N=(0,u.M)(e.onKeyDown,e=>{if(!v.includes(e.key))return;let n=e.target,t=h().filter(e=>!e.ref.current?.disabled),r=t.findIndex(e=>e.ref.current===n),o=t.length;if(-1===r)return;e.preventDefault();let i=r,a=o-1,u=()=>{(i=r+1)>a&&(i=0)},l=()=>{(i=r-1)<0&&(i=a)};switch(e.key){case"Home":i=0;break;case"End":i=a;break;case"ArrowRight":"horizontal"===c&&(x?u():l());break;case"ArrowDown":"vertical"===c&&u();break;case"ArrowLeft":"horizontal"===c&&(x?l():u());break;case"ArrowUp":"vertical"===c&&l()}let d=i%o;t[d].ref.current?.focus()});return(0,p.jsx)(O,{scope:t,disabled:o,direction:i,orientation:c,children:(0,p.jsx)(b.Slot,{scope:t,children:(0,p.jsx)(l.WV.div,{...d,"data-orientation":c,ref:m,onKeyDown:o?void 0:N})})})}),T="AccordionItem",[k,E]=x(T),P=r.forwardRef((e,n)=>{let{__scopeAccordion:t,value:r,...o}=e,i=_(T,t),a=C(T,t),u=y(t),c=(0,s.M)(),l=r&&a.value.includes(r)||!1,f=i.disabled||e.disabled;return(0,p.jsx)(k,{scope:t,open:l,disabled:f,triggerId:c,children:(0,p.jsx)(d.fC,{"data-orientation":i.orientation,"data-state":z(l),...u,...o,ref:n,disabled:f,open:l,onOpenChange:e=>{e?a.onItemOpen(r):a.onItemClose(r)}})})});P.displayName=T;var D="AccordionHeader",U=r.forwardRef((e,n)=>{let{__scopeAccordion:t,...r}=e,o=_(m,t),i=E(D,t);return(0,p.jsx)(l.WV.h3,{"data-orientation":o.orientation,"data-state":z(i.open),"data-disabled":i.disabled?"":void 0,...r,ref:n})});U.displayName=D;var W="AccordionTrigger",$=r.forwardRef((e,n)=>{let{__scopeAccordion:t,...r}=e,o=_(m,t),i=E(W,t),a=j(W,t),u=y(t);return(0,p.jsx)(b.ItemSlot,{scope:t,children:(0,p.jsx)(d.xz,{"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...u,...r,ref:n})})});$.displayName=W;var L="AccordionContent",V=r.forwardRef((e,n)=>{let{__scopeAccordion:t,...r}=e,o=_(m,t),i=E(L,t),a=y(t);return(0,p.jsx)(d.VY,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...a,...r,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function z(e){return e?"open":"closed"}V.displayName=L;var H=w,B=P,F=U,q=$,K=V},30970:function(e,n,t){t.d(n,{VY:function(){return I},fC:function(){return A},p_:function(){return v},xz:function(){return j}});var r=t(34403),o=t(68743),i=t(70763),a=t(48743),u=t(84997),c=t(23712),l=t(73174),d=t(30485),s=t(63287),f=t(85893),p="Collapsible",[m,v]=(0,i.b)(p),[b,g]=m(p),h=r.forwardRef((e,n)=>{let{__scopeCollapsible:t,open:o,defaultOpen:i,disabled:u,onOpenChange:c,...d}=e,[p=!1,m]=(0,a.T)({prop:o,defaultProp:i,onChange:c});return(0,f.jsx)(b,{scope:t,disabled:u,contentId:(0,s.M)(),open:p,onOpenToggle:r.useCallback(()=>m(e=>!e),[m]),children:(0,f.jsx)(l.WV.div,{"data-state":C(p),"data-disabled":u?"":void 0,...d,ref:n})})});h.displayName=p;var x="CollapsibleTrigger",N=r.forwardRef((e,n)=>{let{__scopeCollapsible:t,...r}=e,i=g(x,t);return(0,f.jsx)(l.WV.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":C(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...r,ref:n,onClick:(0,o.M)(e.onClick,i.onOpenToggle)})});N.displayName=x;var y="CollapsibleContent",w=r.forwardRef((e,n)=>{let{forceMount:t,...r}=e,o=g(y,e.__scopeCollapsible);return(0,f.jsx)(d.z,{present:t||o.open,children:({present:e})=>(0,f.jsx)(R,{...r,ref:n,present:e})})});w.displayName=y;var R=r.forwardRef((e,n)=>{let{__scopeCollapsible:t,present:o,children:i,...a}=e,d=g(y,t),[s,p]=r.useState(o),m=r.useRef(null),v=(0,c.e)(n,m),b=r.useRef(0),h=b.current,x=r.useRef(0),N=x.current,w=d.open||s,R=r.useRef(w),A=r.useRef();return r.useEffect(()=>{let e=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=m.current;if(e){A.current=A.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let n=e.getBoundingClientRect();b.current=n.height,x.current=n.width,!R.current&&(e.style.transitionDuration=A.current.transitionDuration,e.style.animationName=A.current.animationName),p(o)}},[d.open,o]),(0,f.jsx)(l.WV.div,{"data-state":C(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!w,...a,ref:v,style:{"--radix-collapsible-content-height":h?`${h}px`:void 0,"--radix-collapsible-content-width":N?`${N}px`:void 0,...e.style},children:w&&i})});function C(e){return e?"open":"closed"}var A=h,j=N,I=w},54387:function(e,n,t){t.d(n,{B:function(){return c}});var r=t(34403),o=t(70763),i=t(23712),a=t(61289),u=t(85893);function c(e){let n=e+"CollectionProvider",[t,c]=(0,o.b)(n),[l,d]=t(n,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:n,children:t}=e,o=r.useRef(null),i=r.useRef(new Map).current;return(0,u.jsx)(l,{scope:n,itemMap:i,collectionRef:o,children:t})};s.displayName=n;let f=e+"CollectionSlot",p=r.forwardRef((e,n)=>{let{scope:t,children:r}=e,o=d(f,t),c=(0,i.e)(n,o.collectionRef);return(0,u.jsx)(a.Slot,{ref:c,children:r})});p.displayName=f;let m=e+"CollectionItemSlot",v="data-radix-collection-item",b=r.forwardRef((e,n)=>{let{scope:t,children:o,...c}=e,l=r.useRef(null),s=(0,i.e)(n,l),f=d(m,t);return r.useEffect(()=>(f.itemMap.set(l,{ref:l,...c}),()=>void f.itemMap.delete(l))),(0,u.jsx)(a.Slot,{[v]:"",ref:s,children:o})});return b.displayName=m,[{Provider:s,Slot:p,ItemSlot:b},function(n){let t=d(e+"CollectionConsumer",n);return r.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let n=Array.from(e.querySelectorAll(`[${v}]`));return Array.from(t.itemMap.values()).sort((e,t)=>n.indexOf(e.ref.current)-n.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},c]}},23712:function(e,n,t){t.d(n,{F:function(){return o},e:function(){return i}});var r=t(34403);function o(...e){return n=>e.forEach(e=>{var t,r;return t=e,r=n,void("function"==typeof t?t(r):null!=t&&(t.current=r))})}function i(...e){return r.useCallback(o(...e),e)}},70763:function(e,n,t){t.d(n,{b:function(){return i}});var r=t(34403),o=t(85893);function i(e,n=[]){let t=[],i=()=>{let n=t.map(e=>r.createContext(e));return function(t){let o=t?.[e]||n;return r.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return i.scopeName=e,[function(n,i){let a=r.createContext(i),u=t.length;function c(n){let{scope:t,children:i,...c}=n,l=t?.[e][u]||a,d=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:d,children:i})}return t=[...t,i],c.displayName=n+"Provider",[c,function(t,o){let c=o?.[e][u]||a,l=r.useContext(c);if(l)return l;if(void 0!==i)return i;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((n,{useScope:t,scopeName:r})=>{let o=t(e)[`__scope${r}`];return{...n,...o}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:o}),[o])}};return t.scopeName=n.scopeName,t}(i,...n)]}},8093:function(e,n,t){t.d(n,{gm:function(){return i}});var r=t(34403);t(85893);var o=r.createContext(void 0);function i(e){let n=r.useContext(o);return e||n||"ltr"}},63287:function(e,n,t){t.d(n,{M:function(){return c}});var r,o=t(34403),i=t(84997),a=(r||(r=t.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function c(e){let[n,t]=o.useState(a());return(0,i.b)(()=>{!e&&t(e=>e??String(u++))},[e]),e||(n?`radix-${n}`:"")}},30485:function(e,n,t){t.d(n,{z:function(){return u}});var r=t(34403),o=t(71022),i=t(23712),a=t(84997),u=e=>{let{present:n,children:t}=e,u=function(e){var n,t;let[i,u]=r.useState(),l=r.useRef({}),d=r.useRef(e),s=r.useRef("none");let[f,p]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,n)=>t[e][n]??e,n));return r.useEffect(()=>{let e=c(l.current);s.current="mounted"===f?e:"none"},[f]),(0,a.b)(()=>{let n=l.current,t=d.current;if(t!==e){let r=s.current,o=c(n);e?p("MOUNT"):"none"===o||n?.display==="none"?p("UNMOUNT"):t&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),d.current=e}},[e,p]),(0,a.b)(()=>{if(i){let e=e=>{let n=c(l.current).includes(e.animationName);e.target===i&&n&&o.flushSync(()=>p("ANIMATION_END"))},n=e=>{e.target===i&&(s.current=c(l.current))};return i.addEventListener("animationstart",n),i.addEventListener("animationcancel",e),i.addEventListener("animationend",e),()=>{i.removeEventListener("animationstart",n),i.removeEventListener("animationcancel",e),i.removeEventListener("animationend",e)}}p("ANIMATION_END")},[i,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),u(e)},[])}}(n),l="function"==typeof t?t({present:u.isPresent}):r.Children.only(t),d=(0,i.e)(u.ref,function(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof t||u.isPresent?r.cloneElement(l,{ref:d}):null};u.displayName="Presence";function c(e){return e?.animationName||"none"}},73174:function(e,n,t){t.d(n,{WV:function(){return u},jH:function(){return c}});var r=t(34403),o=t(71022),i=t(61289),a=t(85893),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=r.forwardRef((e,t)=>{let{asChild:r,...o}=e,u=r?i.Slot:n;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(u,{...o,ref:t})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function c(e,n){e&&o.flushSync(()=>e.dispatchEvent(n))}},42783:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(34403);function o(e){let n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...e)=>n.current?.(...e),[])}},48743:function(e,n,t){t.d(n,{T:function(){return i}});var r=t(34403),o=t(42783);function i({prop:e,defaultProp:n,onChange:t=()=>{}}){let[i,a]=function({defaultProp:e,onChange:n}){let t=r.useState(e),[i]=t,a=r.useRef(i),u=(0,o.W)(n);return r.useEffect(()=>{a.current!==i&&(u(i),a.current=i)},[i,a,u]),t}({defaultProp:n,onChange:t}),u=void 0!==e,c=u?e:i,l=(0,o.W)(t);return[c,r.useCallback(n=>{if(u){let t="function"==typeof n?n(e):n;t!==e&&l(t)}else a(n)},[u,e,a,l])]}},84997:function(e,n,t){t.d(n,{b:function(){return o}});var r=t(34403),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);