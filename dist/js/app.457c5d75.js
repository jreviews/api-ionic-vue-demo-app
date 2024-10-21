(function(){var e={1993:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=1993,e.exports=t},1875:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=1875,e.exports=t},9205:function(e,t,n){"use strict";var r=n(9963),o=n(6252),a=n(2262),i=n(3577),s=n(7732),u=n(4155),c=n(8903);const l={class:"flex flex-row items-center space-x-2 justify-center"};var d=(0,o.aZ)({__name:"DarkModeToggle",setup(e){const t=e=>{document.body.classList.toggle("dark",e)};return(e,n)=>((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)((0,a.SU)(s.gu),{class:"w-6 h-6",slot:"end",icon:(0,a.SU)(c.BBf),color:"medium"},null,8,["icon"]),(0,o.Wm)((0,a.SU)(s.ho),{onIonChange:n[0]||(n[0]=e=>t(e.detail.checked))}),(0,o.Wm)((0,a.SU)(s.gu),{class:"w-6 h-6",icon:(0,a.SU)(c.Z1O),color:"medium"},null,8,["icon"])]))}});const f=d;var m=f;const p=(0,o.Uk)("Directory App"),h=(0,o.Uk)("Sign In"),g={key:1,class:"mt-8"};var v=(0,o.aZ)({__name:"App",setup(e){const t=(0,u.t)(),n=[{title:"Hotels",url:"/tabs/hotels"},{title:"Restaurants",url:"/tabs/restaurants"},{title:"Galleries",url:"/tabs/galleries"}],r=[{title:"Account",url:"/account"},{title:"My Favorites",url:"/my-favorites"},{title:"My Listings",url:"/my-listings"}];return(e,u)=>((0,o.wg)(),(0,o.j4)((0,a.SU)(s.dr),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.z0),{"content-id":"main-content",type:"overlay"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.Gu),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.sr),{translucent:!0,color:"light"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.wd),null,{default:(0,o.w5)((()=>[p])),_:1})])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(s.W2),{class:"flex flex-col justify-between"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.q_),{id:"app-menu",class:"h-[calc(100%-100px)]"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.zc),{"auto-hide":!1},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(n,((e,t)=>(0,o.Wm)((0,a.SU)(s.Ie),{role:"button",key:t,"router-direction":"forward","router-link":e.url},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.Q$),{textContent:(0,i.zw)(e.title)},null,8,["textContent"])])),_:2},1032,["router-link"]))),64)),(0,a.SU)(t).isLoggedIn()?((0,o.wg)(),(0,o.iD)("div",g,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(r,((e,t)=>(0,o.Wm)((0,a.SU)(s.Ie),{role:"button",key:t,"router-direction":"forward","router-link":e.url},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.Q$),{textContent:(0,i.zw)(e.title)},null,8,["textContent"])])),_:2},1032,["router-link"]))),64))])):((0,o.wg)(),(0,o.j4)((0,a.SU)(s.Ie),{key:0,role:"button","router-direction":"forward","router-link":"/login",class:"mt-8"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(s.Q$),null,{default:(0,o.w5)((()=>[h])),_:1})])),_:1}))])),_:1})])),_:1}),(0,o.Wm)(m)])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(s.jP),{id:"main-content"})])),_:1}))}});const y=v;var b=y,w=n(1089);const k=[{path:"/",redirect:"/tabs/widgets"},{path:"/listings/:id",name:"listings.show",component:()=>Promise.all([n.e(53),n.e(926)]).then(n.bind(n,6310)),props:e=>({id:e.params.id})},{path:"/my-favorites",name:"my-favorites",meta:{requiresAuth:!0},component:()=>Promise.all([n.e(53),n.e(153)]).then(n.bind(n,279)),props:()=>({me:"favorites"})},{path:"/my-listings",name:"my-listings",meta:{requiresAuth:!0},component:()=>Promise.all([n.e(53),n.e(153)]).then(n.bind(n,279)),props:()=>({me:"listings"})},{path:"/login",name:"login",meta:{guestsOnly:!0},component:()=>n.e(988).then(n.bind(n,1988))},{path:"/account",name:"account",meta:{requiresAuth:!0},component:()=>n.e(640).then(n.bind(n,9640))},{path:"/tabs/",component:()=>n.e(980).then(n.bind(n,3980)),children:[{path:"",redirect:"/tabs/widgets"},{path:"widgets",component:()=>n.e(148).then(n.bind(n,2148))},{name:"hotels",path:"hotels",component:()=>Promise.all([n.e(53),n.e(153)]).then(n.bind(n,279)),props:()=>({query:{sort:"created",cat:23,heading:"Hotels"}})},{name:"restaurants",path:"restaurants",component:()=>Promise.all([n.e(53),n.e(153)]).then(n.bind(n,279)),props:()=>({query:{sort:"created",cat:24,heading:"Restaurants"}})},{name:"galleries",path:"galleries",component:()=>Promise.all([n.e(53),n.e(153)]).then(n.bind(n,279)),props:()=>({query:{sort:"created",cat:26,heading:"Galleries"}})}]}],S=(0,w.p7)({history:(0,w.PO)("/"),routes:k});S.beforeEach((async e=>{const t=(0,u.t)();return e.meta.requiresAuth&&!t.isLoggedIn()?{path:"/login"}:e.meta.guestsOnly&&t.isLoggedIn()?{path:"/account"}:void 0}));var U=S;n(8851),n(1292),n(1633),n(1045);const _=(0,r.ri)(b).use(s.oX).use(U);U.isReady().then((()=>{const e=new URLSearchParams(document.location.search),t=e.get("theme");document.body.classList.toggle("dark","dark"==t),_.mount("#app")}))},9575:function(e,t,n){"use strict";n.d(t,{N:function(){return o},f:function(){return a}});var r=n(365);async function o(e){const{data:t,status:n}=await(0,r.Mx)("https://demo.jreviews.com/jreviews-api/jreviews/auth/email",e);if(200!==n)throw t.message;return{data:t,status:n}}async function a(){const{data:e,status:t}=await(0,r.gc)("https://demo.jreviews.com/jreviews-api/jreviews/auth/logout");return{data:e,status:t}}},365:function(e,t,n){"use strict";n.d(t,{Mx:function(){return s},gc:function(){return i},q1:function(){return u}});var r=n(4232),o=n(4155);async function a(e={}){const t=(0,o.t)(),n=t.getToken();return n&&(e["Authorization"]=`Bearer ${n}`),e}async function i(e,t={}){t.params=t.params||{},t.params={...t.params,format:"raw"},void 0!==t.params&&Object.keys(t.params).forEach((e=>t.params[e]=t.params[e].toString()));const n={url:e,headers:{"Content-Type":"application/json",Accept:"application/json"}};t.headers=await a(t.headers||{});const o=await r.e.get({...n,...t});return o}async function s(e,t={},n={}){const o={url:e,data:t},i={"Content-Type":"application/json",Accept:"application/json"};n.headers=await a(n.headers||{}),n.headers={...i,...n.headers};const s=await r.e.post({...o,...n});return s}async function u(e,t={},n={}){const o={url:e,data:t},i={"Content-Type":"application/json",Accept:"application/json"};n.headers=await a(n.headers||{}),n.headers={...i,...n.headers};const s=await r.e.del({...o,...n});return s}},4155:function(e,t,n){"use strict";n.d(t,{t:function(){return u},A:function(){return i}});var r=n(2262),o=n(9575);const a=(0,r.iH)({});function i(){const e=(e,t)=>{void 0!==a.value[e]?a.value[e]={...a.value[e],...t}:a.value[e]=t},t=e=>(e.forEach(((t,n)=>{void 0!==a.value[t.id]&&(e[n]={...t,...a.value[t.id]})})),e),n=e=>(void 0!==a.value[e.id]&&(e={...e,...a.value[e.id]}),e),r=()=>{Object.keys(a.value).forEach((e=>{a.value[e]={...a.value[e],favorites:{did_favorite:!1}}}))};return{listings:a,updateListing:e,getUpdatedListing:n,getUpdatedListings:t,reset:r}}const s=(0,r.iH)(null);function u(){const e=e=>{localStorage.setItem("user",JSON.stringify(e)),s.value=e},t=()=>null!==s.value,n=()=>{if(t()){const e=s.value;return e.token}return null},r=()=>s,a=async()=>{i().reset();try{await(0,o.f)()}finally{localStorage.removeItem("user"),s.value=null}},u=localStorage.getItem("user");return u&&e(JSON.parse(u)),{loggedInUser:s,isLoggedIn:t,getUser:r,getToken:n,setUser:e,logout:a}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{53:"6c19cf22",78:"f6fa18b7",148:"9ce17e83",153:"4f069c8e",338:"8852b0aa",541:"e15534a0",544:"a642cb54",576:"543fb12a",577:"0c08c596",640:"bc2468a8",753:"31c47fbd",775:"7b11a44a",823:"41dd0141",880:"15c255c6",926:"6f3ab3b0",980:"ee3372a5",988:"9ab11db4",990:"a01f75fd"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{148:"e17647b4",153:"21463469",640:"cec194f7",926:"584b455e",980:"00f2686a",988:"5c99a681"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="api-demo-ionic-vue:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={148:1,153:1,640:1,926:1,980:1,988:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkapi_demo_ionic_vue"]=self["webpackChunkapi_demo_ionic_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9205)}));r=n.O(r)})();
//# sourceMappingURL=app.457c5d75.js.map