(function(e){function t(t){for(var n,a,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},r={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-450366fc":"0e677e7c","chunk-576bd87a":"f48efeca","chunk-9224477a":"565d81d2","chunk-c6fef444":"773abeb4","chunk-5c29b230":"14b1356d","chunk-91b532de":"ecb30f87","chunk-c82b07b2":"5a28d160","chunk-f31c431e":"3b33ccb9"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={"chunk-450366fc":1,"chunk-9224477a":1,"chunk-5c29b230":1,"chunk-91b532de":1,"chunk-c82b07b2":1,"chunk-f31c431e":1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-450366fc":"6f67fbc4","chunk-576bd87a":"31d6cfe0","chunk-9224477a":"97d4d767","chunk-c6fef444":"31d6cfe0","chunk-5c29b230":"da183c6a","chunk-91b532de":"45607ed9","chunk-c82b07b2":"4e1a3a9a","chunk-f31c431e":"2e4028e1"}[e]+".css",r=i.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],m.parentNode.removeChild(m),o(s)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"360b":function(e,t,o){"use strict";o("73dc")},"4e3e":function(e,t,o){"use strict";o.d(t,"c",(function(){return n})),o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return r}));o("d3b7"),o("25f0");var n=function(){return"id"+Math.random().toString(36).substr(2,9)},a=function(e){var t={hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Intl.DateTimeFormat("ru-RU",t).format(e)},r=function(e,t){var o=Math.abs(e-t)/1e3,n=Math.floor(o/86400);o-=86400*n;var a=Math.floor(o/3600)%24;o-=3600*a;var r=Math.floor(o/60)%60;o-=60*r;var s=Math.floor(o%60);return{days:n,hours:a,minutes:r,seconds:s}}},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=o("289d"),r=(o("5abe"),o("6c42")),s=(o("da96"),o("1dce")),c=o.n(s),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o(e.layout,{tag:"component"},[o("router-view")],1)],1)},l=[],u=o("53ca"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("section",{staticClass:"columns is-gapless is-fullheight mb-0"},[o("div",{staticClass:"column has-background-grey-lighter is-narrow"},[o("aside",{staticClass:"menu"},[o("div",{staticClass:"menu__header"},[e._m(0),o("h1",{staticClass:"title py-1 mb-4"},[e._v(" "+e._s(e.user&&e.user.email.split("@")[0])+" ")]),o("div",{staticClass:"tags has-addons"},[o("span",{staticClass:"tag is-dark"},[e._v(" "+e._s(e.$t("menu.userRole"))+" ")]),o("span",{staticClass:"tag is-info"},[e._v(" "+e._s(e.claims&&e.claims.role||"not set")+" ")])]),o("div",{staticClass:"tags has-addons"},[o("span",{staticClass:"tag is-dark"},[e._v(" "+e._s(e.$t("menu.userPlace"))+" ")]),o("span",{staticClass:"tag is-info"},[e._v(" "+e._s(e.claims&&e.claims.place||"not set")+" ")])])]),o("ul",{staticClass:"menu-list"},[o("li",[e._l(e.links,(function(t){return[t.roles.includes(e.role)?o("router-link",{key:t.to,staticClass:"is-flex is-align-items-center active",attrs:{to:t.to}},[o("span",{staticClass:"icon pr-2"},[o("i",{class:t.icon})]),e._v(" "+e._s(e.$t(t.name))+" ")]):e._e()]}))],2),o("li",[o("a",{staticClass:"is-flex is-align-items-center",on:{click:e.logout}},[e._m(1),e._v(" "+e._s(e.$t("menu.menuLogout"))+" ")])]),o("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.test(t)}}},[e._v("test")])])])]),o("div",{staticClass:"column has-background-white-ter"},[e.loading?o("Loader"):o("router-view")],1)]),o("footer",{staticClass:"footer has-background-grey-lighter py-6"},[o("div",{staticClass:"container"},[o("div",{staticClass:"level"},[o("div",{staticClass:"level-item"},[o("div",{staticClass:"content"},[o("h2",[e._v(e._s(e.$t("footer.info")))]),o("p",{staticClass:"is-flex is-align-items-center"},[e._m(2),o("a",{attrs:{href:""}},[e._v(e._s(e.$t("footer.infoAbout")))])]),o("p",{staticClass:"is-flex is-align-items-center"},[e._m(3),o("a",{attrs:{href:""}},[e._v(e._s(e.$t("footer.infoWorks")))])]),o("p",{staticClass:"is-flex is-align-items-center"},[e._m(4),o("a",{attrs:{href:""}},[e._v(e._s(e.$t("footer.infoPartners")))])])])]),o("div",{staticClass:"level-item"},[o("div",{staticClass:"content"},[o("h2",[e._v(e._s(e.$t("footer.contacts")))]),e._m(5),e._m(6),e._m(7)])])])])]),e._m(8)])},m=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"menu__logo"},[o("span",{staticClass:"icon is-large"},[o("i",{staticClass:"far fa-2x fa-user"})])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"icon pr-2"},[o("i",{staticClass:"fas fa-sign-out-alt"})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"icon is-medium"},[o("i",{staticClass:"fas fa-lg fa-info"})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"icon is-medium"},[o("i",{staticClass:"fas fa-lg fa-question"})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"icon is-medium"},[o("i",{staticClass:"far fa-lg fa-handshake"})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"is-flex is-align-items-center"},[o("span",{staticClass:"icon is-medium"},[o("i",{staticClass:"fab fa-lg fa-facebook-f"})]),o("a",{attrs:{href:"facebook.page"}},[e._v("facebook.page")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"is-flex is-align-items-center"},[o("span",{staticClass:"icon is-medium"},[o("i",{staticClass:"fas fa-lg fa-phone"})]),o("a",{attrs:{href:"tel:+380 (44) 444 22 22"}},[e._v("+380 (44) 444 22 22")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"is-flex is-align-items-center"},[o("span",{staticClass:"icon is-medium"},[o("i",{staticClass:"fas fa-lg fa-envelope"})]),o("a",{attrs:{href:"mailto:email@email.com"}},[e._v("email@email.com")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content has-text-centered has-background-grey has-text-white-ter"},[o("strong",{staticClass:"has-text-white-ter"},[e._v("BestMenu")]),e._v(" by "),o("a",{staticClass:"has-text-white-ter",attrs:{href:""}},[e._v("BestMenu inc.")]),e._v(". Created for your and your customers convinience ")])}],f=o("1da1"),p=(o("96cf"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),h=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"load_container"},[o("div",{staticClass:"loader"})])}],g={},v=g,b=(o("e410"),o("2877")),w=Object(b["a"])(v,p,h,!1,null,"5d8b150a",null),k=w.exports,y=o("4e3e"),C={name:"Main",components:{Loader:k},data:function(){return{date:new Date,links:[{name:"menu.menuPlace",to:"/place",icon:"fas fa-map-marked",roles:["owner"]},{name:"menu.menuWorkers",to:"/workers",icon:"fas fa-users",roles:["owner"]},{name:"menu.menuMenuItems",to:"/menuitems",icon:"fas fa-list-alt",roles:["owner","admin"]},{name:"menu.menuOrders",to:"/orders",icon:"fas fa-tasks",roles:["owner","admin","waiter"]},{name:"menu.menuWaiters",to:"/waiters",icon:"fas fa-child",roles:["owner","admin","waiter"]},{name:"menu.menuDashboard",to:"/dashboard",icon:"fas fa-chart-bar",roles:["owner"]}]}},methods:{test:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("test");case 2:o=t.sent,console.log("temp",o);case 4:case"end":return t.stop()}}),t)})))()},logout:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:case"end":return t.stop()}}),t)})))()},dateFormat:y["b"],getClaims:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getClaims");case 2:case"end":return t.stop()}}),t)})))()},setClaims:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("setClaims",{uid:e.user.uid,claims:{x:5,r:3}});case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;setInterval((function(){e.date=new Date}),1e3)},computed:{loading:function(){return this.$store.state.loading},user:function(){return this.$store.state.user},claims:function(){return this.$store.state.claims},role:function(){var e;return null===(e=this.$store.state.claims)||void 0===e?void 0:e.role},place:function(){return this.$store.state.place},workers:function(){return this.$store.state.workers},menuItems:function(){return this.$store.state.menuItems},error:function(){return this.$store.state.error}},watch:{loading:function(e){console.log("w loading",e)},user:function(e){console.log("w user",e)},claims:function(e){console.log("w claims",e)},place:function(e){console.log("w place",e)},workers:function(e){console.log("w workers",e)},menuItems:function(e){console.log("w menuItems",e)},error:function(e){console.log("w error",e),this.$toast.error(e.code)}}},E=C,_=(o("360b"),Object(b["a"])(E,d,m,!1,null,"166ef657",null)),O=_.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("router-view")},P=[],x={name:"Login",components:{},computed:{loading:function(){return this.$store.state.loading},user:function(){return this.$store.state.user},error:function(){return this.$store.state.error}},watch:{loading:function(e){console.log("w loading",e)},user:function(e){console.log("w user",e)},error:function(e){console.log("w error",e),this.$toast.error(e.code)}}},I=x,M=Object(b["a"])(I,S,P,!1,null,null,null),L=M.exports,G=o("260b"),R=(o("ea7b"),o("e71f"),o("588e"),o("8934"),G["a"].initializeApp({apiKey:"AIzaSyDunW8SG2RPWMJcr73GI_1wYBUYUQ7lhNc",authDomain:"vmenu-e85ed.firebaseapp.com",projectId:"vmenu-e85ed",storageBucket:"vmenu-e85ed.appspot.com",messagingSenderId:"682782611957",appId:"1:682782611957:web:0910e87cc184f1514628bc"})),j=R.auth(),A=R.firestore(),D=R.storage(),U=R.functions(),W={methods:{test:function(){var e=U.httpsCallable("test");console.log("testfunc",Object(u["a"])(e)),e({text:"HUY2"}).then((function(e){console.log(e),alert(JSON.stringify({HZ:"good",res:e}))})).catch((function(e){console.log(e),alert(JSON.stringify({HZ:"error",e:e}))}))}},components:{Main:O,Login:L},computed:{layout:function(){return this.$route.meta.layout}}},$=W,T=Object(b["a"])($,i,l,!1,null,null,null),B=T.exports,N=o("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7"),o("3ca3"),o("ddb0"),o("caad"),o("2532"),o("b0c0");var q=o("8c4f");n["a"].use(q["a"]);var H=[{path:"/",redirect:"/orders"},{path:"/auth",name:"Auth",meta:{layout:"Login",requiresAuth:!1,roles:[]},component:function(){return o.e("chunk-450366fc").then(o.bind(null,"2fef"))}},{path:"/place",name:"Place",meta:{layout:"Main",requiresAuth:!0,roles:["owner"]},component:function(){return o.e("chunk-9224477a").then(o.bind(null,"e756"))}},{path:"/workers",name:"Workers",meta:{layout:"Main",requiresAuth:!0,roles:["owner"]},component:function(){return o.e("chunk-576bd87a").then(o.bind(null,"0996"))}},{path:"/menuitems",name:"Menu",meta:{layout:"Main",requiresAuth:!0,roles:["owner","admin"]},component:function(){return o.e("chunk-f31c431e").then(o.bind(null,"b6c6"))}},{path:"/orders",name:"Orders",meta:{layout:"Main",requiresAuth:!0,roles:["owner","admin","waiter"]},component:function(){return Promise.all([o.e("chunk-c6fef444"),o.e("chunk-5c29b230")]).then(o.bind(null,"159d"))}},{path:"/waiters",name:"Waiters",meta:{layout:"Main",requiresAuth:!0,roles:["owner","admin","waiter"]},component:function(){return Promise.all([o.e("chunk-c6fef444"),o.e("chunk-c82b07b2")]).then(o.bind(null,"8cd7"))}},{path:"/dashboard",name:"Dashboard",meta:{layout:"Main",requiresAuth:!0,roles:["owner"]},component:function(){return Promise.all([o.e("chunk-c6fef444"),o.e("chunk-91b532de")]).then(o.bind(null,"7277"))}}],F=new q["a"]({mode:"history",base:"/",routes:H,linkActiveClass:"is-active",scrollBehavior:function(e,t,o){return{x:0,y:0,behavior:"smooth"}}});F.beforeEach(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,o,n){var a,r,s,c,i,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.matched.some((function(e){return e.meta.requiresAuth})),c=t.meta.roles,e.next=4,null===(a=j.currentUser)||void 0===a?void 0:a.getIdTokenResult();case 4:i=e.sent,l=null===i||void 0===i||null===(r=i.claims)||void 0===r?void 0:r.role,u=c.includes(l),console.log("beforeEach",c,l,u),s&&!j.currentUser?n({path:"Auth",replace:!0}):s&&!u?n({path:o.name,replace:!0}):n();case 9:case"end":return e.stop()}}),e)})));return function(t,o,n){return e.apply(this,arguments)}}());var Q=F,V=o("2f62"),J=o("2ef0"),Y=o.n(J),z=!0,K={state:{},getters:{},mutations:{},actions:{login:function(e,t){var o=e.commit,n=t.email,a=t.password;o("setLoading",!0),j.signInWithEmailAndPassword(n,a).then((function(e){o("setUser",e.user),Q.push("/orders")})).catch((function(e){o("setError",e)})).finally((function(){return o("setLoading",!1)}))},logout:function(e){var t=e.commit;j.signOut().then((function(){t("setUser",null),Q.push("/auth?message=logout")})).catch((function(e){return t("setError",e)}))},register:function(e,t){var o=e.commit,n=e.dispatch,a=t.email,r=t.password;o("setLoading",!0),j.createUserWithEmailAndPassword(a,r).then((function(e){n("setClaims",{uid:e.user.uid,place:null,role:"owner"}),o("setUser",e.user),Q.push("/orders")})).catch((function(e){return o("setError",e)})).finally((function(){return o("setLoading",!1)}))},setClaims:function(e,t){var o=e.commit,n=e.dispatch,a=t.uid,r=t.place,s=t.role;z&&console.log("setClaims payload ",t);var c=U.httpsCallable("changeUserClaims");c({uid:a,place:r||null,role:s}).then((function(){return n("getClaims")})).catch((function(e){return o("setError",e)}))},getClaims:function(e){var t=e.commit;return z&&console.log("getClaims"),j.currentUser.getIdTokenResult(!0).then((function(e){return t("setClaims",e.claims)})).catch((function(e){return t("setError",e)}))}}},Z=o("ade3"),X=o("5530"),ee=(o("99af"),!0),te={state:{},getters:{},mutations:{},actions:{savePlace:function(e,t){var o,n=e.rootState,a=e.commit,r=e.dispatch,s=n.user.uid,c=t.id,i=null===(o=n.claims)||void 0===o?void 0:o.role;ee&&console.log("savePlace UID ".concat(s," PLACE ").concat(c," ROLE ").concat(i)),s&&c&&i&&A.collection("places").doc(c).set(t).then((function(){ee&&console.log("savePlace is done"),r("setClaims",{uid:s,place:c,role:i})})).catch((function(e){return a("setError",e)}))},editPlace:function(e,t){var o,n,a=e.rootState,r=e.commit,s=a.user.uid,c=null===(o=a.claims)||void 0===o?void 0:o.place,i=null===(n=a.claims)||void 0===n?void 0:n.role;ee&&console.log("editPlace UID ".concat(s," PLACE ").concat(c," ROLE ").concat(i)),s&&c&&i&&A.collection("places").doc(c).update(Object(X["a"])(Object(X["a"])({},t),{},{id:c})).then((function(){ee&&console.log("editPlace is done")})).catch((function(e){return r("setError",e)}))},delPlace:function(e){var t,o,n=e.rootState,a=e.commit,r=e.dispatch,s=n.user.uid,c=null===(t=n.claims)||void 0===t?void 0:t.place,i=null===(o=n.claims)||void 0===o?void 0:o.role;ee&&console.log("delPlace UID ".concat(s," PLACE ").concat(c," ROLE ").concat(i)),s&&c&&i&&A.collection("places").doc(c).delete().then((function(){ee&&console.log("delPlace is done"),r("setClaims",{uid:s,place:null,role:i})})).catch((function(e){return a("setError",e)}))},autoGetPlace:function(e){var t,o,n=e.rootState,a=e.commit,r=n.user.uid,s=null===(t=n.claims)||void 0===t?void 0:t.place,c=null===(o=n.claims)||void 0===o?void 0:o.role;ee&&console.log("autoGetPlace UID ".concat(r," PLACE ").concat(s," ROLE ").concat(c)),a("setLoading",!0),s&&A.collection("places").doc(s).onSnapshot((function(e){console.log("autoGetPlace dome",e.data()),a("setPlace",e.data()),a("setLoading",!1)}))},savePlaceImage:function(e,t){var o,n=e.rootState,a=e.commit,r=e.dispatch,s=null===(o=n.claims)||void 0===o?void 0:o.place,c=t.name,i=t.data;if(ee&&console.log("savePlaceImage payload",t),s){var l=D.ref("places/".concat(s,"/").concat(c)).put(i);l.on("state_changed",(function(e){a("setUploadStatus",e.bytesTransferred/e.totalBytes*100)}),(function(e){return a("setError",e)}),(function(){a("setUploadStatus",100),l.snapshot.ref.getDownloadURL().then((function(e){r("editPlace",Object(Z["a"])({},c,e))}))}))}}}},oe=(o("159b"),o("25f0"),!0),ne={state:{},getters:{},mutations:{},actions:{updateMenuItem:function(e,t){var o,n=e.rootState,a=e.commit,r=null===(o=n.claims)||void 0===o?void 0:o.place;r&&A.collection("places").doc(r).collection("menuItems").doc(t.id).update(t,{merge:!0}).then((function(){return oe&&console.log("updateMenuItem done")})).catch((function(e){return a("setError",e)}))},deleteMenuItem:function(e,t){var o,n=e.rootState,a=e.commit,r=null===(o=n.claims)||void 0===o?void 0:o.place;oe&&console.log("deleteMenuItem payload",t),r&&A.collection("places").doc(r).collection("menuItems").doc(t.id).delete().then((function(){return oe&&console.log("deleteMenuItem is done")})).catch((function(e){return a("setError",e)}))},saveMenuItems:function(e,t){var o,n=e.rootState,a=null===(o=n.claims)||void 0===o?void 0:o.place;if(oe&&console.log("saveMenuItems payload",t),a){var r=A.batch(),s=A.collection("places").doc(a).collection("menuItems");return t.forEach((function(e){var t=s.doc(e.id.toString());r.set(t,e,{merge:!0})})),r.commit()}},autoGetMenuItems:function(e){var t,o=e.rootState,n=e.commit,a=o.user.uid,r=null===(t=o.claims)||void 0===t?void 0:t.place;oe&&console.log("autoGetMenuItems UID ".concat(a," PLACE ").concat(r)),n("setLoading",!0),a&&r&&A.collection("places").doc(r).collection("menuItems").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(X["a"])({id:e.id},e.data()))})),oe&&console.log("autoGetMenuItems done",t),n("setMenuItems",t),n("setLoading",!1)}))},saveItemImage:function(e,t){var o,n=e.rootState,a=e.commit,r=e.dispatch,s=null===(o=n.claims)||void 0===o?void 0:o.place,c=t.id,i=t.data;if(oe&&console.log("saveImage payload",t),s){var l=D.ref("places/".concat(s,"/menuItems/").concat(c)).put(i);l.on("state_changed",(function(e){a("setUploadStatus",e.bytesTransferred/e.totalBytes*100)}),(function(e){return a("setError",e)}),(function(){a("setUploadStatus",100),l.snapshot.ref.getDownloadURL().then((function(e){r("updateMenuItem",{id:c,image:e})}))}))}},deleteItemImage:function(e,t){var o,n=e.rootState,a=e.commit,r=null===(o=n.claims)||void 0===o?void 0:o.place,s=t.id;if(oe&&console.log("deleteItemImage payload",t),r){var c=D.ref("places/".concat(r,"/menuItems/").concat(s));console.log("storageRef",c),c.delete().then((function(){oe&&console.log("deleteItemImage is done")})).catch((function(e){a("setError",e)}))}}}},ae=!0,re={state:{},getters:{},mutations:{},actions:{updateMenuGroup:function(e,t){var o,n=e.rootState,a=e.commit,r=null===(o=n.claims)||void 0===o?void 0:o.place;r&&A.collection("places").doc(r).collection("menuGroups").doc(t.id).set(t,{merge:!0}).then((function(){return ae&&console.log("updateMenuGroup done")})).catch((function(e){return a("setError",e)}))},deleteMenuGroup:function(e,t){var o,n=e.rootState,a=e.commit,r=null===(o=n.claims)||void 0===o?void 0:o.place;ae&&console.log("deleteMenuGroup payload",t),r&&A.collection("places").doc(r).collection("menuGroups").doc(t.id).delete().then((function(){return ae&&console.log("deleteMenuGroup is done")})).catch((function(e){return a("setError",e)}))},saveMenuGroups:function(e,t){var o,n=e.rootState,a=null===(o=n.claims)||void 0===o?void 0:o.place;if(ae&&console.log("saveMenuGroups payload",t),a){var r=A.batch(),s=A.collection("places").doc(a).collection("menuGroups");return t.forEach((function(e){var t=s.doc(e.id.toString());r.set(t,e)})),r.commit()}},autoGetMenuGroups:function(e){var t,o=e.rootState,n=e.commit,a=o.user.uid,r=null===(t=o.claims)||void 0===t?void 0:t.place;ae&&console.log("autoGetMenuGroups UID ".concat(a," PLACE ").concat(r)),n("setLoading",!0),a&&r&&A.collection("places").doc(r).collection("menuGroups").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(X["a"])({id:e.id},e.data()))})),ae&&console.log("autoGetMenuGroups done",t),n("setMenuGroups",t),n("setLoading",!1)}))}}},se=!0,ce={state:{},getters:{},mutations:{},actions:{updateOrder:function(e,t){var o,n,a=e.rootState,r=e.commit,s=a.user.uid,c=null===(o=a.claims)||void 0===o?void 0:o.place,i=null===(n=a.claims)||void 0===n?void 0:n.role;se&&console.log("updateOrder payload",t),s&&c&&i&&A.collection("places").doc(c).collection("orders").doc(t.id).update(t).then((function(){return se&&console.log("updateOrder done")})).catch((function(e){return r("setError",e)}))},autoGetOrders:function(e){var t,o,n=e.rootState,a=e.commit,r=n.user.uid,s=null===(t=n.claims)||void 0===t?void 0:t.place,c=null===(o=n.claims)||void 0===o?void 0:o.role,i=new Date;i.setHours(0,0,0,0);var l=new Date;l.setHours(23,59,59,999),se&&console.log("autoGetOrders start"),a("setLoading",!0),r&&s&&c&&A.collection("places").doc(s).collection("orders").where("orderTime",">",i).where("orderTime","<",l).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(X["a"])({id:e.id},e.data()))})),a("setOrders",t),a("setLoading",!1),se&&console.log("autoGetOrders done",t)}))}}},ie=(o("b64b"),!0),le={state:{},getters:{},mutations:{},actions:{updateUserDB:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function o(){var n,a,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,a={},r=["place","uid","email","name","phone","role","status"],Object.keys(t).forEach((function(e){return r.includes(e)&&(a[e]=t[e])})),ie&&console.log('VT STARTED updateUserDB with status "'.concat(t.status,'"'),a),o.prev=5,o.next=8,A.collection("places").doc(t.place).collection("workers").doc(t.email).set(Object(X["a"])({},a),{merge:!0});case 8:ie&&console.log('VT DONE updateUserDB with status "'.concat(t.status,'"')),o.next=15;break;case 11:o.prev=11,o.t0=o["catch"](5),ie&&console.log('VT ERROR updateUserDB with status "'.concat(t.status,'"'),o.t0),n("setError",o.t0);case 15:case"end":return o.stop()}}),o,null,[[5,11]])})))()},deleteUserDB:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,ie&&console.log("VT STARTED deleteUserDB"),o.prev=2,o.next=5,A.collection("places").doc(t.place).collection("workers").doc(t.email).delete();case 5:ie&&console.log("VT DONE deleteUserDB"),o.next=12;break;case 8:o.prev=8,o.t0=o["catch"](2),ie&&console.log("VT ERROR deleteUserDB",o.t0),n("setError",o.t0);case 12:case"end":return o.stop()}}),o,null,[[2,8]])})))()},createWorker:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function o(){var n,a,r,s,c,i,l,u;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a=e.rootState,r=e.commit,s=e.dispatch,c=t.password,i=t.email,l=null===(n=a.claims)||void 0===n?void 0:n.place,ie&&console.log("createWorker PLACE ".concat(l," ROLE ").concat(t.role)),!l){o.next=23;break}return o.next=7,s("updateUserDB",Object(X["a"])(Object(X["a"])({},t),{},{place:l,status:"draft"}));case 7:return o.prev=7,o.next=10,U.httpsCallable("createWorker")({email:i,password:c});case 10:return u=o.sent,ie&&console.log("createWorker done",u),o.next=14,U.httpsCallable("changeUserClaims")({uid:u.data.uid,place:l,role:t.role});case 14:return o.next=16,s("updateUserDB",Object(X["a"])(Object(X["a"])({},t),{},{place:l,status:"done",uid:u.data.uid}));case 16:o.next=23;break;case 18:return o.prev=18,o.t0=o["catch"](7),o.next=22,s("deleteUserDB",Object(X["a"])({},t));case 22:r("setError",null===o.t0||void 0===o.t0?void 0:o.t0.details);case 23:case"end":return o.stop()}}),o,null,[[7,18]])})))()},updateWorker:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function o(){var n,a,r,s,c,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a=e.rootState,r=e.commit,s=e.dispatch,c=t.uid,i=null===(n=a.claims)||void 0===n?void 0:n.place,ie&&console.log("editWorker PLACE ".concat(i," ROLE ").concat(t.role),t),!i){o.next=19;break}if(o.prev=5,null===t||void 0===t||!t.password){o.next=9;break}return o.next=9,U.httpsCallable("updateWorker")({uid:c,password:t.password});case 9:if(null===t||void 0===t||!t.role){o.next=12;break}return o.next=12,U.httpsCallable("changeUserClaims")({uid:c,place:i,role:t.role});case 12:return o.next=14,s("updateUserDB",Object(X["a"])(Object(X["a"])({},t),{},{place:i,status:"updated"}));case 14:o.next=19;break;case 16:o.prev=16,o.t0=o["catch"](5),r("setError",o.t0);case 19:case"end":return o.stop()}}),o,null,[[5,16]])})))()},deleteWorker:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function o(){var n,a,r,s,c,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a=e.rootState,r=e.commit,s=e.dispatch,c=t.uid,i=null===(n=a.claims)||void 0===n?void 0:n.place,ie&&console.log("deleteWorker PLACE ".concat(i," UID ").concat(c),t),!i){o.next=15;break}return o.prev=5,o.next=8,U.httpsCallable("deleteWorker")({uid:c});case 8:return o.next=10,s("deleteUserDB",Object(X["a"])(Object(X["a"])({},t),{},{place:i}));case 10:o.next=15;break;case 12:o.prev=12,o.t0=o["catch"](5),r("setError",null===o.t0||void 0===o.t0?void 0:o.t0.details);case 15:case"end":return o.stop()}}),o,null,[[5,12]])})))()},autoGetWorkers:function(e){var t,o=e.rootState,n=e.commit,a=null===(t=o.claims)||void 0===t?void 0:t.place;ie&&console.log("autoGetWorkers PLACE ".concat(a)),n("setLoading",!0),a&&A.collection("places").doc(a).collection("workers").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(X["a"])({email:e.id},e.data()))})),ie&&console.log("autoGetWorkers",t),n("setWorkers",t),n("setLoading",!1)}))}}},ue=!0,de={state:{},getters:{},mutations:{},actions:{updateWaiter:function(e,t){var o,n,a=e.rootState,r=e.commit,s=a.user.uid,c=null===(o=a.claims)||void 0===o?void 0:o.place,i=null===(n=a.claims)||void 0===n?void 0:n.role;ue&&console.log("updateWaiter payload",t),s&&c&&i&&A.collection("places").doc(c).collection("waiters").doc(t.id).update(t).then((function(){return ue&&console.log("updateWaiter done")})).catch((function(e){return r("setError",e)}))},autoGetWaiters:function(e){var t,o,n=e.rootState,a=e.commit,r=n.user.uid,s=null===(t=n.claims)||void 0===t?void 0:t.place,c=null===(o=n.claims)||void 0===o?void 0:o.role;ue&&console.log("autoGetWaiters start"),a("setLoading",!0),r&&s&&c&&A.collection("places").doc(s).collection("waiters").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(X["a"])({id:e.id},e.data()))})),a("setWaiters",t),a("setLoading",!1),ue&&console.log("autoGetWaiters done",t)}))}}},me=!0,fe={state:{},getters:{},mutations:{},actions:{getSummaryForDash:function(e){var t,o,n=e.rootState,a=e.commit,r=n.user.uid,s=null===(t=n.claims)||void 0===t?void 0:t.place,c=null===(o=n.claims)||void 0===o?void 0:o.role;me&&console.log("getSummaryForDash start"),a("setLoading",!0),r&&s&&c&&A.collection("places").doc(s).collection("orders").get().where("capital","==",!0).then((function(e){var t=[];e.forEach((function(e){t.push(Object(X["a"])({id:e.id},e.data()))})),a("setOrdersDash",t),a("setLoading",!1),me&&console.log("getSummaryForDash done",t)}))},autoGetSummary:function(e){var t,o,n=e.rootState,a=e.commit,r=n.user.uid,s=null===(t=n.claims)||void 0===t?void 0:t.place,c=null===(o=n.claims)||void 0===o?void 0:o.role;me&&console.log("autoGetSummary start"),a("setLoading",!0),r&&s&&c&&A.collection("places").doc(s).collection("summary").onSnapshot((function(e){var t={};e.forEach((function(e){t[e.id]=Object(X["a"])({id:e.id},e.data())})),a("setSummary",t),a("setLoading",!1),me&&console.log("autoGetSummary done",t)}))}}},pe=!0,he={state:{},getters:{},mutations:{},actions:{test:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var o,n,a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.rootState,a=e.commit,r=null===(o=n.claims)||void 0===o?void 0:o.place,pe&&console.log("test PLACE ".concat(r)),!r){t.next=14;break}return t.prev=4,t.next=7,U.httpsCallable("createSummary")({place:r});case 7:s=t.sent,pe&&console.log("createWorker done",s),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](4),a("setError",null===t.t0||void 0===t.t0?void 0:t.t0.details);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))()}}};n["a"].use(V["a"]);var ge=new V["a"].Store({state:{loading:!0,error:null,user:null,claims:[],place:null,workers:[],menuItems:[],menuGroups:[],orders:[],waiters:[],summary:[],uploadStatus:0},getters:{loading:function(e){return e.loading},menuItemsGroupped:function(e){return Y.a.chain(e.menuItems).orderBy(["rank"],["asc"]).groupBy("group").value()}},mutations:{setLoading:function(e,t){e.loading=t},setError:function(e,t){e.error=t},setUser:function(e,t){e.user=t},setClaims:function(e,t){e.claims=t},setPlace:function(e,t){e.place=t},setWorkers:function(e,t){e.workers=t},setMenuItems:function(e,t){e.menuItems=t},setMenuGroups:function(e,t){e.menuGroups=t},setOrders:function(e,t){e.orders=t},setUploadStatus:function(e,t){e.uploadStatus=t},setWaiters:function(e,t){e.waiters=t},setSummary:function(e,t){e.summary=t}},actions:{},modules:{moduleAuth:K,modulePlace:te,moduleWorkers:le,moduleMenuItems:ne,moduleMenuGroups:re,moduleOrders:ce,moduleWaiters:de,moduleDashboard:fe,moduleTest:he}}),ve=o("a925"),be={general:{btnOk:"ok",btnCancel:"cancel",btnSave:"Save",btnUpload:"btnUpload",btnPrint:"Ptint"},auth:{},menu:{userName:"User:",userRole:"Role:",userPlace:"Place:",menuPlace:"Edit Place",menuWorkers:"Edit Workers",menuMenuItems:"Edit Menu",menuOrders:"Track Orders",menuWaiters:"Track Waiters",menuDashboard:"Dashboard",menuLogout:"Logout"},footer:{info:"Information",infoAbout:"About",infoWorks:"How it works",infoPartners:"Our partners",contacts:"Our contacts"},place:{pagename:"Set / edit restaurant details",subheader:"Restaurant details settings",description:"In this section you can record details of you restaurant. This information will be avialibe to your clients in their application. After you compleate this section print QR codes.",empyMessage:"Do not have place yet. Please create one :)",btnEdit:"Place edit",btnAdd:"Place add",btnShowQr:"Show QR",labels:{link:"Link:",name:"NameX:",tables:"Number of tables:",address:"Address:",city:"City:",country:"Country:",phone:"Phone:",email:"Email:",description:"Description:",uploadBg:"labelUploadBg",uploadLogo:"labelUploadLogo"},modalEditHeader:"Edit your place",modalQrHeader:"Print this QRs",modelQrTable:"Table"},workers:{pagename:"Add / edit your workers",subheader:"Workers' settings",description:"In this section you can record all details of you restaurant. this information will be avialibe to your clients in their part of application.",btnAddWorker:"Add worker",tableEmail:"email",tableName:"name",tablePhone:"phone",tableRole:"role",tableEdit:"edit",tableDelete:"delete",labelEmail:"Email",labelPassword:"Password",labelName:"Name",labelPhone:"Phone",labelRole:"Please select role for the worker",modalEditHeader:"Edit your worker"},menuItems:{pagename:"Edit menu items",subheaderGroups:"Create menu groups",descriptionGroups:"Please enter the groups you want to use in your menu and then drag and drop group items to arange them accordingly",subheaderItems:"Create menu items",descriptionItems:"Please create your menu items. You can create menu items one by one by preassing the button add item or you can download csv file and fill it in excel after which you can upload the file",empyMessageItems:"ou do not have menu items yet. Please create some",table:{rank:"rank",groupName:"group",name:"name",description:"description",weight:"weight",price:"price",image:"image",edit:"edit",delete:"delete"}},orders:{pagename:"Track Orders",subheader:"Select what to look",description:"in this arear you can select all the orders or look only on orders that were already accepted or those which were already compleated. Please select what you want to look in the following menu",empyMessage:"Do not have orders yet.",tabs:{all:"All items",notCompleated:"Not compleated items",compleated:"Compleated items"},table:{table:"table",order:"order",items:"items",ordered:"ordered",control:"control"}},waiters:{pagename:"Workers details",subheader:"here you can select bla bla bla",description:"In this section you can record all details of you restaurant. this information will be avialibe to your clients in their part of application.",empyMessage:"Do not have waiters' requests yet.",tabs:{all:"All items",notCompleated:" Not compleated items"},table:{table:"table",client:"client",time:"time",control:"control"}},dashboard:{pagename:"Dashboard",subheader:"",description:"",empyMessage:"",kpis:{revenu:"Revenue",orders:"Orders",average:"Average rder"},tabs:{graph:"Graph",table:"Table"}}},we=be,ke={},ye=ke;n["a"].use(ve["a"]);var Ce=new ve["a"]({locale:"ua",fallbackLocale:"ua",messages:{ua:we,en:ye}});n["a"].config.productionTip=!1,n["a"].use(a["a"]);var Ee,_e={};n["a"].use(r["a"],_e),n["a"].use(c.a),j.onAuthStateChanged((function(e){Ee||(Ee=new n["a"]({router:Q,store:ge,i18n:Ce,render:function(e){return e(B)}}).$mount("#app")),e&&(ge.commit("setUser",e),ge.dispatch("getClaims").then((function(){ge.dispatch("autoGetPlace"),ge.dispatch("autoGetWorkers"),ge.dispatch("autoGetMenuItems"),ge.dispatch("autoGetMenuGroups"),ge.dispatch("autoGetOrders"),ge.dispatch("autoGetWaiters"),ge.dispatch("autoGetSummary")})))}),(function(e){return console.log(e)}))},"73dc":function(e,t,o){},c5d0:function(e,t,o){},e410:function(e,t,o){"use strict";o("c5d0")}});
//# sourceMappingURL=app.0c6f0d08.js.map