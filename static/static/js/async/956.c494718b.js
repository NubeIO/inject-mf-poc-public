"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([["956"],{10881:function(e,t,n){n.r(t),n.d(t,{Virtualizer:function(){return o.dM},approxEqual:function(){return o.mQ},debounce:function(){return o.Ds},defaultKeyExtractor:function(){return o.hn},defaultRangeExtractor:function(){return o.MK},elementScroll:function(){return o.sA},measureElement:function(){return o.Iv},memo:function(){return o.X$},notUndefined:function(){return o.Av},observeElementOffset:function(){return o.ND},observeElementRect:function(){return o.nr},observeWindowOffset:function(){return o.DS},observeWindowRect:function(){return o.uT},useVirtualizer:function(){return h},useWindowVirtualizer:function(){return u},windowScroll:function(){return o.dd}});var s=n(34403),i=n(71022),o=n(59601);let l="undefined"!=typeof document?s.useLayoutEffect:s.useEffect;function r(e){let t=s.useReducer(()=>({}),{})[1],n={...e,onChange:(n,s)=>{var o;s?(0,i.flushSync)(t):t(),null==(o=e.onChange)||o.call(e,n,s)}},[r]=s.useState(()=>new o.dM(n));return r.setOptions(n),s.useEffect(()=>r._didMount(),[]),l(()=>r._willUpdate()),r}function h(e){return r({observeElementRect:o.nr,observeElementOffset:o.ND,scrollToFn:o.sA,...e})}function u(e){return r({getScrollElement:()=>"undefined"!=typeof document?window:null,observeElementRect:o.uT,observeElementOffset:o.DS,scrollToFn:o.dd,initialOffset:()=>"undefined"!=typeof document?window.scrollY:0,...e})}},59601:function(e,t,n){n.d(t,{Av:function(){return s.Av},DS:function(){return c},Ds:function(){return s.Ds},Iv:function(){return d},MK:function(){return o},ND:function(){return a},X$:function(){return s.X$},dM:function(){return g},dd:function(){return f},hn:function(){return i},mQ:function(){return s.mQ},nr:function(){return l},sA:function(){return m},uT:function(){return h}});var s=n(33625);let i=e=>e,o=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1),s=[];for(let e=t;e<=n;e++)s.push(e);return s},l=(e,t)=>{let n=e.scrollElement;if(!n)return;let s=e.targetWindow;if(!s)return;let i=e=>{let{width:n,height:s}=e;t({width:Math.round(n),height:Math.round(s)})};if(i(n.getBoundingClientRect()),!s.ResizeObserver)return()=>{};let o=new s.ResizeObserver(e=>{let t=e[0];if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e){i({width:e.inlineSize,height:e.blockSize});return}}i(n.getBoundingClientRect())});return o.observe(n,{box:"border-box"}),()=>{o.unobserve(n)}},r={passive:!0},h=(e,t)=>{let n=e.scrollElement;if(!n)return;let s=()=>{t({width:n.innerWidth,height:n.innerHeight})};return s(),n.addEventListener("resize",s,r),()=>{n.removeEventListener("resize",s)}},u="undefined"==typeof window||"onscrollend"in window,a=(e,t)=>{let n=e.scrollElement;if(!n)return;let i=e.targetWindow;if(!i)return;let o=0,l=u?()=>void 0:(0,s.Ds)(i,()=>{t(o,!1)},e.options.isScrollingResetDelay),h=s=>()=>{o=n[e.options.horizontal?"scrollLeft":"scrollTop"],l(),t(o,s)},a=h(!0),c=h(!1);return c(),n.addEventListener("scroll",a,r),n.addEventListener("scrollend",c,r),()=>{n.removeEventListener("scroll",a),n.removeEventListener("scrollend",c)}},c=(e,t)=>{let n=e.scrollElement;if(!n)return;let i=e.targetWindow;if(!i)return;let o=0,l=u?()=>void 0:(0,s.Ds)(i,()=>{t(o,!1)},e.options.isScrollingResetDelay),h=s=>()=>{o=n[e.options.horizontal?"scrollX":"scrollY"],l(),t(o,s)},a=h(!0),c=h(!1);return c(),n.addEventListener("scroll",a,r),n.addEventListener("scrollend",c,r),()=>{n.removeEventListener("scroll",a),n.removeEventListener("scrollend",c)}},d=(e,t,n)=>{if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?"inlineSize":"blockSize"])}return Math.round(e.getBoundingClientRect()[n.options.horizontal?"width":"height"])},f=(e,{adjustments:t=0,behavior:n},s)=>{var i,o;null==(o=null==(i=s.scrollElement)?void 0:i.scrollTo)||o.call(i,{[s.options.horizontal?"left":"top"]:e+t,behavior:n})},m=(e,{adjustments:t=0,behavior:n},s)=>{var i,o;null==(o=null==(i=s.scrollElement)?void 0:i.scrollTo)||o.call(i,{[s.options.horizontal?"left":"top"]:e+t,behavior:n})};class g{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null,t=()=>e?e:this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{this._measureElement(e.target,e)})}):null;return{disconnect:()=>{var e;return null==(e=t())?void 0:e.disconnect()},observe:e=>{var n;return null==(n=t())?void 0:n.observe(e,{box:"border-box"})},unobserve:e=>{var n;return null==(n=t())?void 0:n.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([t,n])=>{void 0===n&&delete e[t]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:i,rangeExtractor:o,onChange:()=>{},measureElement:d,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,...e}},this.notify=(e,t)=>{var n,s;let{startIndex:i,endIndex:o}=this.range??{startIndex:void 0,endIndex:void 0},l=this.calculateRange();(e||i!==(null==l?void 0:l.startIndex)||o!==(null==l?void 0:l.endIndex))&&(null==(s=(n=this.options).onChange)||s.call(n,this,t))},this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.observer.disconnect(),this.elementsCache.clear()},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t){this.notify(!1,!1);return}this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.notify(!1,!1)})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<e?"forward":"backward":null,this.scrollOffset=e;let n=this.isScrolling;this.isScrolling=t,this.notify(n!==t,t)}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,s=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let o=s.get(t.lane);if(null==o||t.end>o.end?s.set(t.lane,t):t.end<o.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return s.size===this.options.lanes?Array.from(s.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=(0,s.X$)(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,t,n,s,i)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:n,getItemKey:s,enabled:i}),{key:!1}),this.getMeasurements=(0,s.X$)(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:t,scrollMargin:n,getItemKey:s,enabled:i},o)=>{var l;if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];0===this.measurementsCache.length&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let r=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];let h=this.measurementsCache.slice(0,r);for(let i=r;i<e;i++){let e=null==(l=this.measurementsCache[i])?void 0:l.measureElement;!e&&(e=e=>{let t=s(i),n=this.elementsCache.get(t);if(!e){n&&(this.observer.unobserve(n),this.elementsCache.delete(t));return}n!==e&&(n&&this.observer.unobserve(n),this.observer.observe(e),this.elementsCache.set(t,e)),e.isConnected&&this.resizeItem(i,this.options.measureElement(e,void 0,this))});let r=s(i),u=1===this.options.lanes?h[i-1]:this.getFurthestMeasurement(h,i),a=u?u.end+this.options.gap:t+n,c=o.get(r),d="number"==typeof c?c:this.options.estimateSize(i),f=a+d,m=u?u.lane:i%this.options.lanes;h[i]={index:i,start:a,size:d,end:f,key:r,lane:m,measureElement:e}}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=(0,s.X$)(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(e,t,n)=>this.range=e.length>0&&t>0?function({measurements:e,outerSize:t,scrollOffset:n}){let s=e.length-1,i=p(0,s,t=>e[t].start,n),o=i;for(;o<s&&e[o].end<n+t;)o++;return{startIndex:i,endIndex:o}}({measurements:e,outerSize:t,scrollOffset:n}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=(0,s.X$)(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(e,t,n,s)=>null===t?[]:e({startIndex:t.startIndex,endIndex:t.endIndex,overscan:n,count:s}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this._measureElement=(e,t)=>{let n=this.indexFromElement(e),s=this.getMeasurements()[n];if(!s||!e.isConnected){this.elementsCache.forEach((t,n)=>{t===e&&(this.observer.unobserve(e),this.elementsCache.delete(n))});return}let i=this.elementsCache.get(s.key);i!==e&&(i&&this.observer.unobserve(i),this.observer.observe(e),this.elementsCache.set(s.key,e)),this.resizeItem(n,this.options.measureElement(e,t,this))},this.resizeItem=(e,t)=>{let n=this.getMeasurements()[e];if(!n)return;let s=t-(this.itemSizeCache.get(n.key)??n.size);0!==s&&((void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(n,s,this):n.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=s,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(n.index),this.itemSizeCache=new Map(this.itemSizeCache.set(n.key,t)),this.notify(!0,!1))},this.measureElement=e=>{if(!!e)this._measureElement(e,void 0)},this.getVirtualItems=(0,s.X$)(()=>[this.getIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let s=0,i=e.length;s<i;s++){let i=t[e[s]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0!==t.length)return(0,s.Av)(t[p(0,t.length-1,e=>(0,s.Av)(t[e]).start,e)])},this.getOffsetForAlignment=(e,t)=>{let n=this.getSize(),s=this.getScrollOffset();"auto"===t&&(t=e<=s?"start":e>=s+n?"end":"start"),"start"===t||("end"===t?e-=n:"center"===t&&(e-=n/2));let i=this.options.horizontal?"scrollWidth":"scrollHeight",o=this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[i]:this.scrollElement[i]:0;return Math.max(Math.min(o-n,e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getMeasurements()[e];if(!n)return;let s=this.getSize(),i=this.getScrollOffset();if("auto"===t){if(n.end>=i+s-this.options.scrollPaddingEnd)t="end";else{if(!(n.start<=i+this.options.scrollPaddingStart))return[i,t];t="start"}}let o="end"===t?n.end+this.options.scrollPaddingEnd:n.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(o,t),t]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{null!==this.scrollToIndexTimeoutId&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:t="start",behavior:n}={})=>{this.cancelScrollToIndex(),"smooth"===n&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,t),{adjustments:void 0,behavior:n})},this.scrollToIndex=(e,{align:t="auto",behavior:n}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),"smooth"===n&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");let i=this.getOffsetForIndex(e,t);if(!i)return;let[o,l]=i;this._scrollToOffset(o,{adjustments:void 0,behavior:n}),"smooth"!==n&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(e))){let[t]=(0,s.Av)(this.getOffsetForIndex(e,l));!(0,s.mQ)(t,this.getScrollOffset())&&this.scrollToIndex(e,{align:l,behavior:n})}else this.scrollToIndex(e,{align:l,behavior:n})}))},this.scrollBy=(e,{behavior:t}={})=>{this.cancelScrollToIndex(),"smooth"===t&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:t})},this.getTotalSize=()=>{var e;let t;let n=this.getMeasurements();return(t=0===n.length?this.options.paddingStart:1===this.options.lanes?(null==(e=n[n.length-1])?void 0:e.end)??0:Math.max(...n.slice(-this.options.lanes).map(e=>e.end)))-this.options.scrollMargin+this.options.paddingEnd},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{var e,t;this.itemSizeCache=new Map,null==(t=(e=this.options).onChange)||t.call(e,this,!1)},this.setOptions(e)}}let p=(e,t,n,s)=>{for(;e<=t;){let i=(e+t)/2|0,o=n(i);if(o<s)e=i+1;else{if(!(o>s))return i;t=i-1}}return e>0?e-1:0}},33625:function(e,t,n){function s(e,t,n){let s,i=n.initialDeps??[];return()=>{var o,l,r,h;let u,a;n.key&&(null==(o=n.debug)?void 0:o.call(n))&&(u=Date.now());let c=e();if(!(c.length!==i.length||c.some((e,t)=>i[t]!==e)))return s;if(i=c,n.key&&(null==(l=n.debug)?void 0:l.call(n))&&(a=Date.now()),s=t(...c),n.key&&(null==(r=n.debug)?void 0:r.call(n))){let e=Math.round((Date.now()-u)*100)/100,t=Math.round((Date.now()-a)*100)/100,s=t/16,i=(e,t)=>{for(e=String(e);e.length<t;)e=" "+e;return e};console.info(`%c\u{23F1} ${i(t,5)} /${i(e,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*s,120))}deg 100% 31%);`,null==n?void 0:n.key)}return null==(h=null==n?void 0:n.onChange)||h.call(n,s),s}}function i(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}n.d(t,{Av:function(){return i},Ds:function(){return l},X$:function(){return s},mQ:function(){return o}});let o=(e,t)=>1>Math.abs(e-t),l=(e,t,n)=>{let s;return function(...i){e.clearTimeout(s),s=e.setTimeout(()=>t.apply(this,i),n)}}}}]);