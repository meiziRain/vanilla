(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},o={app:0},a=[];function s(t){return c.p+"js/"+({blog:"blog"}[t]||t)+"."+{blog:"608ae824"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={blog:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({blog:"blog"}[t]||t)+"."+{blog:"fce53d05"}[t]+".css",o=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],h.parentNode.removeChild(h),n(a)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){i[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e39":function(t,e,n){},"2dca":function(t,e,n){},4916:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"mobile-header-wrapper"}},[n("div",{ref:"mobile",attrs:{id:"mobile"}},[n("div",{attrs:{id:"mobile-header"}},[n("Ham",{ref:"ham",attrs:{id:"hamburger"},nativeOn:{click:function(e){return t.onHamClick()}}}),n("div",{attrs:{id:"logo"}}),n("LightSwitch",{attrs:{id:"light-switch"}})],1),n("div",{ref:"mobile_nav",attrs:{id:"mobile-nav"},on:{click:t.jump}},[n("router-link",{attrs:{to:"/"}},[t._v(" Home ")]),n("router-link",{attrs:{to:"/blog"}},[t._v(" Blog ")])],1)])]),n("div",{attrs:{id:"pc"}},[n("Iris",{ref:"nav",attrs:{id:"pc-nav"}})],1),n("keep-alive",[n("router-view")],1)],1)},o=[],a=(n("ac1f"),n("466d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"ham"}},[n("svg",{ref:"hamRotate",staticClass:"ham hamRotate ham1",attrs:{viewBox:"0 0 100 100",width:"60"},on:{click:t.toggle}},[n("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),n("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),n("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])}),s=[],c={methods:{toggle:function(){this.$refs.hamRotate.classList.toggle("active")}}},u=c,l=(n("aefa"),n("2877")),d=Object(l["a"])(u,a,s,!1,null,"11ce0159",null),h=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"menu menu--iris",attrs:{id:"menu"}},[n("ul",{staticClass:"menu__list"},[n("li",{class:0==t.currentindex?"menu__item menu__item--current":"menu__item"},[n("a",{staticClass:"menu__link",on:{click:t.toHome}},[t._v("Home")])]),n("li",{class:1==t.currentindex?"menu__item menu__item--current":"menu__item"},[n("a",{staticClass:"menu__link",on:{click:t.toBlog}},[t._v("Blog")])]),n("li",{class:2==t.currentindex?"menu__item menu__item--current":"menu__item"},[n("a",{staticClass:"menu__link",on:{click:t.toAbout}},[t._v("Me！")])])])])])},m=[],v=(n("c975"),{name:"Iris",components:{},data:function(){return{currentindex:0,ways:["home","blog","about"]}},watch:{$route:function(t,e){this.keepNavRender()}},created:function(){this.keepNavRender=this.keepNavRender.bind(this)},mounted:function(){},methods:{keepNavRender:function(){var t=this,e=t.$route.path;for(var n in this.ways)e.indexOf(this.ways[n])>-1&&(this.currentindex=n)},toHome:function(){var t=this;t.currentindex=0,t.$router.push("/")},toBlog:function(){var t=this;t.currentindex=1,t.$router.push("blog")},toStudio:function(){var t=this;t.currentindex=2,t.$router.push("studio")},toAbout:function(){var t=this;t.currentindex=3,t.$router.push("about")}}}),p=v,g=(n("b4bb"),Object(l["a"])(p,f,m,!1,null,null,null)),b=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"light-switch-wrapper"},on:{click:t.switchLightMode}},[n("svg",{staticClass:"lightswitch__icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[t.dark?n("path",{staticClass:"lightswitch__icon__off",attrs:{d:"M9 20h6v2H9zm3-18C8.141 2 5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7zm2.836 6.836C14.836 7.272 13.563 6 12 6V4c2.667 0 4.836 2.169 4.836 4.836h-2z"}}):n("path",{staticClass:"lightswitch__icon__on",attrs:{d:"M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z"}})])])])},_=[],w={data:function(){return{dark:!1}},mounted:function(){"true"===window.localStorage.getItem("dark")?this.initTheme(!0):this.initTheme(!1)},methods:{initTheme:function(t){t?(this.dark=!0,document.body.setAttribute("data-user-color-scheme","dark")):(this.dark=!1,document.body.setAttribute("data-user-color-scheme","light"))},switchLightMode:function(){this.dark=!this.dark,window.localStorage.setItem("dark",this.dark),this.$eventHub.$emit("darkListener",this.dark),this.initTheme(this.dark)}}},x=w,k=(n("d233"),Object(l["a"])(x,y,_,!1,null,null,null)),O=k.exports,S={components:{Ham:h,Iris:b,LightSwitch:O},created:function(){this._isMobile()?(console.log("Mobile"),this.$store.state.isMobile=!0):(console.log("PC"),this.$store.state.isMobile=!1)},mounted:function(){this.$refs.nav.keepNavRender()},methods:{jump:function(){var t=this.$refs.mobile_nav;t.style.animation="headerShrink 500ms forwards",t.classList.toggle("active"),this.$refs.ham.toggle()},onHamClick:function(){var t=this.$refs.mobile_nav;t.classList.contains("active")?t.style.animation="headerShrink 500ms forwards":t.style.animation="headerExpand 500ms forwards",t.classList.toggle("active")},_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t}}},C=S,M=(n("5c0b"),Object(l["a"])(C,i,o,!1,null,null,null)),E=M.exports,$=n("9483");Object($["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var T=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{attrs:{id:"word"}},[n("Flashword",{key:t.refreshKey,attrs:{mode:t.dark}}),n("MagneticButton")],1)])},A=[],L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"magnetic"}},[n("button",{staticClass:"magnetic-button"},[n("span",{staticClass:"magnetic-button__text"},[n("span",{staticClass:"magnetic-button__text-inner"},[t._v("Discover")])])])])}],D=(n("99af"),n("d4ec")),P=n("bee2"),H=n("262e"),z=n("2caf"),R=n("cffa"),N=n("faa1"),q=(n("4057"),n("b680"),function(t,e,n){return(1-n)*t+n*e}),F=function(){return{width:window.innerWidth,height:window.innerHeight}},I=function(t){var e=0,n=0;return t||(t=window.event),t.pageX||t.pageY?(e=t.pageX,n=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+body.scrollTop+document.documentElement.scrollTop),{x:e,y:n}},X=function(t,e,n,r){var i=t-n,o=e-r;return Math.hypot(i,o)};F();window.addEventListener("resize",(function(){F()}));var K={x:0,y:0};window.addEventListener("mousemove",(function(t){K=I(t)}));var Y=function(t){Object(H["a"])(n,t);var e=Object(z["a"])(n);function n(t){var r;return Object(D["a"])(this,n),r=e.call(this),r.DOM={el:t},r.DOM.text=r.DOM.el.querySelector(".magnetic-button__text"),r.DOM.textinner=r.DOM.el.querySelector(".magnetic-button__text-inner"),r.renderedStyles={tx:{previous:0,current:0,amt:.1},ty:{previous:0,current:0,amt:.1}},r.state={hover:!1},r.calculateSizePosition(),r.initEvents(),requestAnimationFrame((function(){return r.render()})),r}return Object(P["a"])(n,[{key:"calculateSizePosition",value:function(){this.rect=this.DOM.el.getBoundingClientRect(),this.distanceToTrigger=1*this.rect.width}},{key:"initEvents",value:function(){var t=this;this.onResize=function(){return t.calculateSizePosition()},window.addEventListener("resize",this.onResize)}},{key:"render",value:function(){var t=this,e=X(K.x,K.y,this.rect.left+this.rect.width/2,this.rect.top+this.rect.height/2),n=0,r=0;for(var i in e<this.distanceToTrigger?(this.state.hover||this.enter(),n=.3*(K.x-(this.rect.left+this.rect.width/2)),r=.3*(K.y-(this.rect.top+this.rect.height/2))):this.state.hover&&this.leave(),this.renderedStyles["tx"].current=n,this.renderedStyles["ty"].current=r,this.renderedStyles)this.renderedStyles[i].previous=q(this.renderedStyles[i].previous,this.renderedStyles[i].current,this.renderedStyles[i].amt);this.DOM.el.style.transform="translate3d(".concat(this.renderedStyles["tx"].previous,"px, ").concat(this.renderedStyles["ty"].previous,"px, 0)"),this.DOM.text.style.transform="translate3d(".concat(.5*this.renderedStyles["tx"].previous,"px, ").concat(.5*this.renderedStyles["ty"].previous,"px, 0)"),requestAnimationFrame((function(){return t.render()}))}},{key:"enter",value:function(){this.emit("enter"),this.state.hover=!0,this.DOM.el.classList.add("button--hover"),document.body.classList.add("active"),R["b"].killTweensOf(this.DOM.textinner),R["b"].timeline().to(this.DOM.textinner,.15,{ease:"Power2.easeIn",opacity:0,x:"20%"}).to(this.DOM.textinner,.2,{ease:"Expo.easeOut",opacity:1,startAt:{x:"-20%"},x:"0%"})}},{key:"leave",value:function(){this.emit("leave"),this.state.hover=!1,this.DOM.el.classList.remove("button--hover"),document.body.classList.remove("active"),R["b"].killTweensOf(this.DOM.textinner),R["b"].timeline().to(this.DOM.textinner,.15,{ease:"Power2.easeIn",opacity:0,x:"-20%"}).to(this.DOM.textinner,.2,{ease:"Expo.easeOut",opacity:1,startAt:{x:"20%"},x:"0%"})}}]),n}(N["EventEmitter"]),J={name:"MagneticButton",components:{},data:function(){return{}},created:function(){},mounted:function(){this.init()},methods:{init:function(){new Y(document.querySelector(".magnetic-button"))}}},W=J,Q=(n("906f"),Object(l["a"])(W,L,B,!1,null,"5c4218b2",null)),U=Q.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"flashword"}},[n("div",{staticClass:"flashword-content"},[n("h2",{staticClass:"content__title"},[t._v("V a n i l l a")]),n("p",{staticClass:"content__subtitle"},[t._v("Say something...")])]),n("div",{staticClass:"overlay"})])}],Z=(n("a630"),n("fb6a"),n("25f0"),n("3ca3"),n("a5cf")),tt=n("f4fb"),et={name:"Flashword",props:{mode:{type:Boolean,default:!1,description:"light or dark mode"}},data:function(){return{animated:!1}},created:function(){},mounted:function(){this.mode?this.animateTitles(!0):this.animateTitles(!1)},methods:{getRandomColor:function(){return"#"+("00000"+(16777215*Math.random()+.5>>0).toString(16)).slice(-6)},animateTitles:function(t){var e=this,n=function(t,e){return Math.random()*(e-t)+t},r=document.querySelector(".overlay"),i=document.querySelector(".content__title");tt(i);var o=Array.from(i.querySelectorAll("span"));R["a"].to(r,2,{ease:Z["f"].easeOut,opacity:0}),R["a"].set(o,{opacity:0}),R["a"].staggerTo(o,1.5,{ease:Z["a"].easeOut,startAt:{rotationX:-100,z:-1e3},opacity:1,rotationX:0,z:0},.1);var a=document.querySelector(".content__subtitle");R["a"].set(a,{opacity:0}),R["a"].to(a,1.5,{ease:Z["a"].easeOut,startAt:{y:30},opacity:1,y:0});var s=function r(i,o){0===o||o>3||(R["a"].set(i,{x:n(-20,20),y:n(-20,20),color:[e.getRandomColor(),e.getRandomColor(),e.getRandomColor()][o-1]}),setTimeout((function(){R["a"].set(i,{x:0,y:0,color:t?"#fff":"#000"}),r(i,o-1)}),n(20,100)))},c=function t(e){setTimeout((function(){for(var e=o.sort((function(t,e){return.5-Math.random()})),r=e.slice(0,n(1,o.length+1)),i=0,a=r.length;i<a-1;++i)s(r[i],3);t()}),e||n(500,3e3))};c(1500)}}},nt=et,rt=(n("8b4f"),Object(l["a"])(nt,V,G,!1,null,null,null)),it=rt.exports,ot={name:"Home",components:{Flashword:it,MagneticButton:U},data:function(){return{dark:!1,refreshKey:""}},mounted:function(){var t=this;this.$eventHub.$on("darkListener",(function(e){t.refreshKey=(new Date).getTime(),t.dark=e}))}},at=ot,st=(n("e2d8"),Object(l["a"])(at,j,A,!1,null,"39c28e1a",null)),ct=st.exports;r["a"].use(T["a"]);var ut=T["a"].prototype.push;T["a"].prototype.push=function(t){return ut.call(this,t).catch((function(t){return t}))};var lt=[{path:"/",name:"Home",component:ct},{path:"/blog",name:"Blog",component:function(){return n.e("blog").then(n.bind(null,"fd3f"))}},{path:"/about",name:"About",component:function(){return n.e("blog").then(n.bind(null,"f820"))}}],dt=new T["a"]({routes:lt}),ht=dt,ft=n("2f62");r["a"].use(ft["a"]);var mt=new ft["a"].Store({state:{isMobile:!1},mutations:{},actions:{},modules:{}}),vt=n("a45e"),pt=n.n(vt);r["a"].config.productionTip=!1,r["a"].use(pt.a),r["a"].prototype.$eventHub=r["a"].prototype.$eventHub||new r["a"],new r["a"]({router:ht,store:mt,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"5eef":function(t,e,n){},"8b4f":function(t,e,n){"use strict";var r=n("1e39"),i=n.n(r);i.a},"906f":function(t,e,n){"use strict";var r=n("d5ae"),i=n.n(r);i.a},"9c0c":function(t,e,n){},aefa:function(t,e,n){"use strict";var r=n("5eef"),i=n.n(r);i.a},b4bb:function(t,e,n){"use strict";var r=n("2dca"),i=n.n(r);i.a},d233:function(t,e,n){"use strict";var r=n("d7f9"),i=n.n(r);i.a},d5ae:function(t,e,n){},d7f9:function(t,e,n){},e2d8:function(t,e,n){"use strict";var r=n("4916"),i=n.n(r);i.a}});
//# sourceMappingURL=app.5e3de6ee.js.map