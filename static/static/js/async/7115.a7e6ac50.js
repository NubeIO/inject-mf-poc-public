"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([["7115"],{86388:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var t=r(75103);function u(e,n,r){if(!e[n])return"contentBoxSize"===n?e.contentRect["inlineSize"===r?"width":"height"]:void 0;return e[n][0]?e[n][0][r]:e[n][r]}function c(e){void 0===e&&(e={});var n,r,c,i,o,f,s=e.onResize,l=(0,t.useRef)(void 0);l.current=s;var h=e.round||Math.round,a=(0,t.useRef)(),d=(0,t.useState)({width:void 0,height:void 0}),b=d[0],v=d[1],x=(0,t.useRef)(!1);(0,t.useEffect)(function(){return x.current=!1,function(){x.current=!0}},[]);var w=(0,t.useRef)({width:void 0,height:void 0});var R=(n=(0,t.useCallback)(function(n){return(!a.current||a.current.box!==e.box||a.current.round!==h)&&(a.current={box:e.box,round:h,instance:new ResizeObserver(function(n){var r=n[0],t="border-box"===e.box?"borderBoxSize":"device-pixel-content-box"===e.box?"devicePixelContentBoxSize":"contentBoxSize",c=u(r,t,"inlineSize"),i=u(r,t,"blockSize"),o=c?h(c):void 0,f=i?h(i):void 0;if(w.current.width!==o||w.current.height!==f){var s={width:o,height:f};w.current.width=o,w.current.height=f,l.current?l.current(s):!x.current&&v(s)}})}),a.current.instance.observe(n,{box:e.box}),function(){a.current&&a.current.instance.unobserve(n)}},[e.box,h]),r=e.ref,c=(0,t.useRef)(null),(i=(0,t.useRef)(null)).current=r,o=(0,t.useRef)(null),(0,t.useEffect)(function(){f()}),f=(0,t.useCallback)(function(){var e=o.current,r=i.current,t=e||(r?r instanceof Element?r:r.current:null);if(!c.current||c.current.element!==t||c.current.subscriber!==n)c.current&&c.current.cleanup&&c.current.cleanup(),c.current={element:t,subscriber:n,cleanup:t?n(t):void 0}},[n]),(0,t.useEffect)(function(){return function(){c.current&&c.current.cleanup&&(c.current.cleanup(),c.current=null)}},[]),(0,t.useCallback)(function(e){o.current=e,f()},[f]));return(0,t.useMemo)(function(){return{ref:R,width:b.width,height:b.height}},[R,b.width,b.height])}}}]);