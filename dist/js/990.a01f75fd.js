"use strict";(self["webpackChunkapi_demo_ionic_vue"]=self["webpackChunkapi_demo_ionic_vue"]||[]).push([[990],{8990:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return c}});var i=n(6587),r=n(545),o=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(e,t,n,c,a)=>{const s=e.ownerDocument.defaultView,u=(0,r.i)(e),d=e=>{const t=50,{startX:n}=e;return u?n>=s.innerWidth-t:n<=t},h=e=>u?-e.deltaX:e.deltaX,l=e=>u?-e.velocityX:e.velocityX,p=e=>d(e)&&t(),f=e=>{const t=h(e),n=t/s.innerWidth;c(n)},k=e=>{const t=h(e),n=s.innerWidth,r=t/n,o=l(e),c=n/2,u=o>=0&&(o>.2||t>c),d=u?1-r:r,p=d*n;let f=0;if(p>5){const e=p/Math.abs(o);f=Math.min(e,540)}a(u,r<=0?.01:(0,i.e)(0,r,.9999),f)};return(0,o.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:f,onEnd:k})}}}]);
//# sourceMappingURL=990.a01f75fd.js.map