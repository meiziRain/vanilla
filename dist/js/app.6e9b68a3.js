(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},o={app:0},a=[];function s(t){return c.p+"js/"+({blog:"blog"}[t]||t)+"."+{blog:"faafc2a2"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={blog:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="css/"+({blog:"blog"}[t]||t)+"."+{blog:"a2095b91"}[t]+".css",o=c.p+i,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===i||u===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var i=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete r[t],h.parentNode.removeChild(h),n(a)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[t]=0})));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,n){i=o[t]=[e,n]}));e.push(i[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}o[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2dca":function(t,e,n){},"2f14":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"d",(function(){return c}));n("99af"),n("4057"),n("b680");var i=function(t,e,n,i,r){return(t-e)*(r-i)/(n-e)+i},r=function(t,e,n){return(1-n)*t+n*e},o=function(){return{width:window.innerWidth,height:window.innerHeight}},a=function(t){var e=0,n=0;return t||(t=window.event),t.pageX||t.pageY?(e=t.pageX,n=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e,y:n}},s=function(t,e,n,i){var r=t-n,o=e-i;return Math.hypot(r,o)},c=function(){return"CSS1Compat"===document.compatMode?document.documentElement.clientWidth:document.body.clientWidth},l=function(t,e){return parseFloat(Math.min(t+Math.random()*(e-t),e).toFixed(2))}},"3da7":function(t,e,n){"use strict";var i=n("5e75"),r=n.n(i);r.a},"43ba":function(t,e,n){"use strict";var i=n("9701"),r=n.n(i);r.a},4953:function(t,e,n){t.exports=n.p+"img/3.b2e5bd81.jpg"},"55e0":function(t,e,n){t.exports=n.p+"img/1.5e132c94.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("a15b"),n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{width:"0",height:"0"},attrs:{id:"img-factory"}},[i("img",{attrs:{src:n("ef5f")}}),i("img",{attrs:{src:n("d298")}}),i("img",{attrs:{src:n("7a5c")}}),i("img",{attrs:{src:n("c8fb")}}),i("img",{attrs:{src:n("6944")}}),i("img",{attrs:{src:n("55e0")}}),i("img",{attrs:{src:n("8476")}}),i("img",{attrs:{src:n("4953")}}),i("img",{attrs:{src:n("c21b")}}),i("img",{attrs:{src:n("9bad")}}),i("img",{attrs:{src:n("a695")}}),i("img",{attrs:{src:n("c8cf")}}),i("img",{attrs:{src:n("5dcd")}}),i("img",{attrs:{src:n("5dda")}}),i("img",{attrs:{src:n("5ddf")}})]),t.loader?i("div",{attrs:{id:"loader"}},[i("Loader",{model:{value:t.progressNumber,callback:function(e){t.progressNumber=e},expression:"progressNumber"}})],1):i("div",{attrs:{id:"container"}},[i("Zip",{ref:"zip"}),i("Gates",{ref:"gates"}),i("svg",{staticClass:"shape-overlays",attrs:{viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[i("path",{staticClass:"shape-overlays__path"}),i("path",{staticClass:"shape-overlays__path"}),i("path",{staticClass:"shape-overlays__path"}),i("path",{staticClass:"shape-overlays__path"})]),t._m(0),i("div",{attrs:{id:"mobile-header-wrapper"}},[i("div",{ref:"mobile",attrs:{id:"mobile"}},[i("div",{attrs:{id:"mobile-header"}},[i("Ham",{ref:"ham",attrs:{id:"hamburger"},nativeOn:{click:function(e){return t.onHamClick()}}}),i("LightSwitch",{attrs:{id:"mobile-light-switch"}})],1),i("div",{ref:"mobile_nav",attrs:{id:"mobile-nav"},on:{click:t.jump}},[i("router-link",{attrs:{to:"/"}},[t._v(" Home ")]),i("router-link",{attrs:{to:"/blog"}},[t._v(" Blog ")]),i("router-link",{attrs:{to:"/about"}},[t._v(" Me！ ")])],1)])]),i("div",{attrs:{id:"pc"}},[i("div",{staticClass:"click-me",style:{backgroundImage:"url("+t.bgImage+")"}}),i("LightSwitch",{attrs:{id:"pc-light-switch",size:"6vh"}}),i("Iris",{ref:"nav",attrs:{id:"pc-nav"}}),i("div",{staticClass:"logo",attrs:{id:"pc-logo"}},[i("router-link",{attrs:{to:"/"}},[t._v(" V ")])],1)],1),i("keep-alive",[i("router-view")],1)],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cursor",staticStyle:{visibility:"hidden"}},[n("div",{staticClass:"cursor-point"}),n("div",{staticClass:"cursor__inner--circle"})])}],a=(n("99af"),n("ac1f"),n("466d"),n("d4ec")),s=n("bee2"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("div",{staticClass:"load-progress"},[t._v(t._s(t.number)+"%")]),n("svg",{staticClass:"loader-circle",attrs:{viewBox:"0 0 249 247",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M113.245 236.413l-1.368 10.58-2.222-.287 1.081-8.358-4.707-.609.287-2.221 6.929.895zM91.868 240.99l4.463 1.14 1.533-5.995-4.463-1.141-1.533 5.996zm1.627-8.284l5.371 1.373 1.282 2.163-1.765 6.904-2.16 1.269-5.37-1.373-1.273-2.146 1.765-6.904 2.15-1.286zM77.466 232.845l1.407 3.349 3.355-1.419.22-.545-4.761-1.93-.221.545zm2.05-5.06l-.988 2.439 4.762 1.93.988-2.439 2.076.841-2.35 5.8-5.744 2.43-.74-.3-2.43-5.743 2.35-5.8 2.077.842zM61.756 228.193l3.997 2.288 3.074-5.371-3.998-2.288-3.073 5.371zm3.773-7.551l6.355 3.637-5.3 9.259-6.354-3.638-.655-2.407 3.54-6.184 2.414-.667zM59.24 216.54l-6.197 8.683-1.823-1.301 6.197-8.683 1.823 1.301zM46.445 206.226l.552 9.011 4.23-4.782 1.677 1.484-7.068 7.991-.744-.659-.552-9.011-4.23 4.782-1.678-1.484 7.068-7.991.745.659zM36.564 195.662l3.621 4.198-.185 2.508-5.395 4.654-2.497-.194-3.622-4.198.184-2.487 1.558-1.345 1.463 1.696-1.198 1.034 3.009 3.487 4.685-4.042-3.008-3.487-1.092.942 1.372 1.59-1.697 1.463-2.834-3.286 3.137-2.707 2.499.174zM24.554 186.189l-1.909 1.173-1.172-1.909 1.908-1.173 1.173 1.909zM21.063 171.058l-9.83 4.143-.87-2.065 7.766-3.272-1.842-4.374 2.064-.869 2.712 6.437zM6.352 154.889l1.26 4.43 5.951-1.692-1.26-4.431-5.951 1.693zm7.976-2.763l1.516 5.333-1.224 2.196-6.854 1.949-2.183-1.228-1.516-5.332 1.214-2.18 6.854-1.949 2.193 1.211zM6.142 138.344l-2.187 2.901 2.916 2.185.582-.084-.729-5.086-.582.084zm5.405-.774l-2.605.373.728 5.086 2.605-.373.318 2.217-6.195.887-4.99-3.74-.114-.79 3.74-4.991 6.195-.887.318 2.218zM2.257 122.427l.034 4.606 6.188-.046-.034-4.606-6.188.046zm8.424-.539l.055 7.322-10.668.08-.055-7.322 1.751-1.777 7.126-.054 1.79 1.751zM11.06 114.39l-10.622-.986.207-2.231 10.623.986-.207 2.231zM13.535 98.141l-7.51 5.012 6.26 1.249-.437 2.197-10.462-2.087.194-.975 7.51-5.012-6.261-1.248.438-2.197 10.462 2.087-.194.974zM17.691 84.287l-1.805 5.242-2.26 1.102-6.738-2.32L5.8 86.055l1.805-5.242 2.243-1.093 1.946.67-.73 2.118-1.496-.515-1.5 4.355 5.851 2.015 1.5-4.355-1.363-.47-.684 1.986-2.118-.73 1.413-4.103 3.918 1.35 1.107 2.246zM19.834 69.141l-1.974-1.059 1.06-1.973 1.973 1.059-1.059 1.973zM31.153 58.511l-8.526-6.41 1.346-1.791 6.736 5.065 2.852-3.794 1.79 1.347-4.198 5.583zM37.723 37.661l-3.195 3.318 4.458 4.292 3.194-3.318-4.457-4.292zm6.401 5.503l-3.845 3.993-2.514.048-5.133-4.942-.038-2.505 3.845-3.993 2.495-.048 5.133 4.943.057 2.504zM51.915 29.154l-3.608-.43-.42 3.62.364.46 4.029-3.189-.365-.46zm3.389 4.281l-1.634-2.063-4.029 3.189 1.634 2.063-1.756 1.39-3.884-4.906.72-6.195.626-.495 6.195.72 3.884 4.907-1.757 1.39zM63.714 17.787l-3.962 2.348 3.153 5.324 3.963-2.348-3.154-5.324zm4.705 7.009l-6.3 3.732-5.436-9.179 6.3-3.732 2.416.62 3.632 6.13-.612 2.429zM75.09 21.35l-4.493-9.675 2.032-.943 4.493 9.675-2.031.944zM90.376 15.313l-8.11-3.968 2.071 6.039-2.118.727L78.757 8.02l.94-.323 8.11 3.968-2.07-6.039 2.118-.727 3.461 10.091-.94.323zM104.44 11.932l-5.438 1.078-2.09-1.398-1.385-6.99 1.401-2.076 5.438-1.078 2.074 1.387.4 2.02-2.198.435-.307-1.552-4.518.895 1.203 6.07 4.518-.895-.28-1.415-2.06.409-.436-2.198 4.257-.843.806 4.064-1.385 2.087zM118.607 6.163l-.078-2.239 2.238-.078.078 2.239-2.238.078zM133.489 10.595L134.738 0l2.225.262-.987 8.37 4.713.556-.262 2.225-6.938-.818zM154.813 5.78l-4.475-1.091-1.466 6.012 4.475 1.09 1.466-6.011zm-1.534 8.3l-5.386-1.312-1.306-2.149 1.688-6.923 2.145-1.293 5.386 1.313 1.296 2.132-1.688 6.923-2.135 1.31zM169.306 13.764l-1.444-3.334-3.339 1.457-.215.547 4.783 1.877.215-.547zm-1.995 5.082l.962-2.45-4.783-1.877-.962 2.45-2.085-.818 2.286-5.825 5.716-2.495.743.292 2.494 5.716-2.285 5.825-2.086-.818zM185.066 18.24l-4.022-2.243-3.014 5.404 4.023 2.244 3.013-5.405zm-3.689 7.593l-6.395-3.566 5.196-9.318 6.395 3.566.682 2.4-3.471 6.224-2.407.694zM187.712 29.864l6.1-8.752 1.837 1.28-6.1 8.753-1.837-1.281zM200.622 40.035l-.653-9.005-4.176 4.829-1.694-1.465 6.978-8.07.752.65.653 9.006 4.176-4.83 1.694 1.466-6.978 8.07-.752-.651zM210.62 50.487l-3.668-4.157.157-2.51 5.343-4.714 2.499.166 3.668 4.157-.155 2.49-1.544 1.362-1.482-1.68 1.187-1.047-3.048-3.453-4.64 4.094 3.048 3.454 1.081-.955-1.389-1.574 1.679-1.482 2.872 3.254-3.108 2.742-2.5-.147zM222.735 59.826l1.895-1.194 1.194 1.896-1.896 1.194-1.193-1.896zM226.394 74.917l9.784-4.252.892 2.054-7.729 3.36 1.891 4.352-2.054.893-2.784-6.407zM241.285 90.921l-1.309-4.416-5.933 1.759 1.309 4.416 5.933-1.759zm-7.945 2.852l-1.576-5.315 1.199-2.21 6.833-2.026 2.196 1.204 1.576 5.315-1.19 2.192-6.832 2.026-2.206-1.186zM241.679 107.463l2.155-2.926-2.94-2.152-.581.09.785 5.078.581-.09zm-5.396.834l2.601-.402-.785-5.078-2.601.403-.342-2.214 6.185-.956 5.032 3.684.122.789-3.685 5.032-6.184.956-.343-2.214zM245.741 123.335l-.085-4.605-6.187.115.085 4.605 6.187-.115zm-8.417.633l-.137-7.321 10.667-.198.136 7.32-1.731 1.797-7.125.133-1.81-1.731zM237.028 131.471l10.633.867-.182 2.232-10.633-.867.182-2.232zM234.735 147.745l7.454-5.095-6.275-1.179.414-2.202 10.484 1.97-.183.977-7.453 5.096 6.274 1.178-.414 2.202-10.484-1.97.183-.977zM230.734 161.645l1.747-5.262 2.247-1.127 6.763 2.245 1.114 2.243-1.746 5.262-2.23 1.118-1.953-.648.705-2.126 1.502.499 1.451-4.372-5.873-1.949-1.451 4.371 1.368.454.662-1.993 2.126.706-1.367 4.119-3.933-1.306-1.132-2.234zM228.76 176.814l1.985 1.037-1.037 1.985-1.985-1.037 1.037-1.985zM217.561 187.569l8.597 6.316-1.326 1.805-6.792-4.989-2.81 3.825-1.805-1.326 4.136-5.631zM211.224 208.492l3.157-3.354-4.505-4.242-3.157 3.354 4.505 4.242zm-6.462-5.431l3.8-4.037 2.513-.075 5.189 4.885.065 2.503-3.8 4.037-2.494.075-5.188-4.885-.085-2.503zM197.127 217.156l3.613.39.38-3.623-.37-.457-3.993 3.233.37.457zm-3.436-4.243l1.657 2.046 3.992-3.234-1.656-2.045 1.741-1.41 3.938 4.863-.651 6.203-.621.502-6.202-.652-3.939-4.863 1.741-1.41zM185.455 228.654l3.937-2.391-3.213-5.289-3.937 2.392 3.213 5.288zm-4.782-6.956l6.257-3.801 5.539 9.117-6.257 3.802-2.424-.592-3.7-6.09.585-2.436zM174.04 225.218l4.602 9.625-2.021.966-4.602-9.625 2.021-.966zM158.823 231.426l8.153 3.877-2.138-6.015 2.11-.751 3.574 10.052-.937.333-8.153-3.877 2.138 6.016-2.11.75-3.574-10.052.937-.333zM144.797 234.963l5.426-1.138 2.105 1.375 1.464 6.974-1.378 2.091-5.426 1.139-2.089-1.364-.422-2.015 2.192-.46.325 1.549 4.508-.946-1.271-6.056-4.508.946.296 1.411 2.055-.431.46 2.192-4.247.891-.851-4.056 1.361-2.102zM130.696 240.891l.103 2.237-2.238.103-.103-2.238 2.238-.102z",fill:"#fff"}})])])},l=[],u=(n("a9e3"),{name:"Loader",props:{value:{type:Number,default:0,description:"进度"}},data:function(){return{number:0}},watch:{value:function(t,e){this.number=t}},mounted:function(){},methods:{}}),d=u,h=(n("3da7"),n("2877")),m=Object(h["a"])(d,c,l,!1,null,"0decae9d",null),f=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"zip"}})},g=[],v=n("a5cf"),b={name:"Logo",data:function(){return{}},created:function(){},methods:{zip:function(){var t=this;this.$GSAP.to(document.querySelector("#zip"),{height:"100%",ease:v["a"].easeIn,duration:1,onComplete:function(){t.$GSAP.to(document.querySelector("#zip"),{scale:0,ease:v["a"].easeIn,duration:.3})}})}}},y=b,w=(n("43ba"),Object(h["a"])(y,p,g,!1,null,"00ddfa9b",null)),M=w.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gates"},[n("div",{staticClass:"gate gate--left"}),n("div",{staticClass:"gate gate--right"})])}],_={name:"Gates",data:function(){return{}},created:function(){},mounted:function(){},methods:{openGates:function(){this.$GSAP.to(document.querySelector(".gate--left"),{x:"-100%",ease:v["a"].easeIn,duration:1}),this.$GSAP.to(document.querySelector(".gate--right"),{x:"100%",ease:v["a"].easeIn,duration:1})}}},x=_,S=(n("7e6e"),Object(h["a"])(x,z,k,!1,null,"e2bc7e80",null)),A=S.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"ham"}},[n("svg",{ref:"hamRotate",staticClass:"ham hamRotate ham1",attrs:{viewBox:"0 0 100 100",width:"60"},on:{click:t.toggle}},[n("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),n("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),n("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])},C=[],$={methods:{toggle:function(){this.$refs.hamRotate.classList.toggle("active")}}},P=$,L=(n("f46b"),Object(h["a"])(P,O,C,!1,null,"c555909e",null)),j=L.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"menu menu--iris",attrs:{id:"menu"}},[n("ul",{staticClass:"menu__list"},[t._e(),t._e(),n("li",{class:2==t.currentindex?"menu__item menu__item--current":"menu__item"},[n("a",{staticClass:"menu__link",on:{click:t.toAbout}},[t._v("Me！")])])])])])},H=[],I=(n("c975"),{name:"Iris",components:{},data:function(){return{currentindex:0,ways:["home","blog","about"]}},watch:{$route:function(t,e){this.keepNavRender()}},created:function(){this.keepNavRender=this.keepNavRender.bind(this)},mounted:function(){},methods:{keepNavRender:function(){var t=this,e=t.$route.path;for(var n in this.ways)e.indexOf(this.ways[n])>-1&&(this.currentindex=n)},toHome:function(){var t=this;t.currentindex=0,t.$router.push("/")},toBlog:function(){var t=this;t.currentindex=1,t.$router.push("blog")},toStudio:function(){var t=this;t.currentindex=2,t.$router.push("studio")},toAbout:function(){var t=this;t.currentindex=3,t.$router.push("about")}}}),B=I,T=(n("b4bb"),Object(h["a"])(B,E,H,!1,null,null,null)),q=T.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"switch",attrs:{id:"light-switch-wrapper"},on:{click:t.switchLightMode}},[n("svg",{ref:"lightswitch",staticClass:"lightswitch__icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[t.dark?n("path",{staticClass:"lightswitch__icon__off",attrs:{d:"M9 20h6v2H9zm3-18C8.141 2 5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7zm2.836 6.836C14.836 7.272 13.563 6 12 6V4c2.667 0 4.836 2.169 4.836 4.836h-2z"}}):n("path",{staticClass:"lightswitch__icon__on",attrs:{d:"M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z"}})])])])},D=[],G={props:{size:{type:String,default:"30px",description:"尺寸"}},data:function(){return{dark:!0}},mounted:function(){var t=this;this.initStyle(),"false"===window.localStorage.getItem("dark")?this.initTheme(!1):this.initTheme(!0),this.$eventHub.$on("darkListener",(function(e){t.dark=e}))},methods:{initTheme:function(t){t?(this.dark=!0,this.$store.state.dark=!0,document.body.setAttribute("data-user-color-scheme","dark"),this.$refs.switch.style.color="white"):(this.dark=!1,this.$store.state.dark=!1,document.body.setAttribute("data-user-color-scheme","light"),this.$refs.switch.style.color="black")},switchLightMode:function(){this.dark=!this.dark,window.localStorage.setItem("dark",this.dark),this.$eventHub.$emit("darkListener",this.dark),console.log("$emit(darkListener)",this.dark),this.initTheme(this.dark)},initStyle:function(){var t=this.$refs.lightswitch;t.style.width=this.size,t.style.height=this.size}}},R=G,F=(n("d233"),Object(h["a"])(R,N,D,!1,null,null,null)),W=F.exports,V=n("2f14"),X={components:{Ham:j,Iris:q,LightSwitch:W,Gates:A,Zip:M,Loader:f},data:function(){return{cursor:{},loader:!0,progressNumber:4,bgImage:n("6eea")}},created:function(){this._isMobile()?(console.log("Mobile"),this.$store.state.isMobile=!0):(console.log("PC"),this.$store.state.isMobile=!1)},mounted:function(){var t=this;console.log("APP mounted");var e=this.$imagesLoaded("#img-factory");e.on("progress",(function(e){t.progressNumber+=Math.floor(96/e.images.length)})).on("done",(function(e){t.loader=!1,t.$nextTick((function(){t.init()}))}))},methods:{init:function(){var t=this;document.fonts.ready.then((function(){console.log("fonts.ready"),t.initCursor(),t._isMobile||t.$refs.nav.keepNavRender(),t.initOverlay(),t.$refs.zip.zip(),t.$GSAP.delayedCall(1,(function(){t.$refs.gates.openGates()})),document.querySelector(".cursor").style.visibility="visible",t.$GSAP.delayedCall(2,(function(){console.log("App: initAnimations"),t.$store.state.isInitAnimations=!0,t.$eventHub.$emit("initAnimations")}))}))},initOverlay:function(){console.log("initOverlay");var t={exponentialIn:function(t){return 0===t?t:Math.pow(2,10*(t-1))},exponentialOut:function(t){return 1===t?t:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1},sineOut:function(t){var e=1.5707963267948966;return Math.sin(t*e)},circularInOut:function(t){return t<.5?.5*(1-Math.sqrt(1-4*t*t)):.5*(Math.sqrt((3-2*t)*(2*t-1))+1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){var e=t-1;return e*e*e+1},cubicInOut:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},quadraticOut:function(t){return-t*(t-2)},quarticOut:function(t){return Math.pow(t-1,3)*(1-t)+1}},e=function(){function e(t){Object(a["a"])(this,e),this.elm=t,this.path=t.querySelectorAll("path"),this.numPoints=2.5,this.duration=1200,this.delayPointsArray=[],this.delayPointsMax=180,this.delayPerPath=70,this.timeStart=Date.now(),this.isOpened=!1,this.isAnimating=!1}return Object(s["a"])(e,[{key:"toggle",value:function(){this.isAnimating=!0;for(var t=Math.random()*Math.PI*2,e=0;e<this.numPoints;e++){var n=e/(this.numPoints-1)*Math.PI*2;this.delayPointsArray[e]=(Math.sin(n+t)+1)/2*this.delayPointsMax}!1===this.isOpened?this.open():this.close()}},{key:"open",value:function(){this.isOpened=!0,this.elm.classList.add("is-opened"),this.timeStart=Date.now(),this.renderLoop()}},{key:"close",value:function(){this.isOpened=!1,this.elm.classList.remove("is-opened"),this.timeStart=Date.now(),this.renderLoop()}},{key:"updatePath",value:function(e){for(var n=[],i=0;i<this.numPoints;i++)n[i]=100*t.cubicInOut(Math.min(Math.max(e-this.delayPointsArray[i],0)/this.duration,1));var r="";r+=this.isOpened?"M 0 0 V ".concat(n[0]," "):"M 0 ".concat(n[0]," ");for(var o=0;o<this.numPoints-1;o++){var a=(o+1)/(this.numPoints-1)*100,s=a-1/(this.numPoints-1)*100/2;r+="C ".concat(s," ").concat(n[o]," ").concat(s," ").concat(n[o+1]," ").concat(a," ").concat(n[o+1]," ")}return r+=this.isOpened?"V 0 H 0":"V 100 H 0",r}},{key:"render",value:function(){if(this.isOpened)for(var t=0;t<this.path.length;t++)this.path[t].setAttribute("d",this.updatePath(Date.now()-(this.timeStart+this.delayPerPath*t)));else for(var e=0;e<this.path.length;e++)this.path[e].setAttribute("d",this.updatePath(Date.now()-(this.timeStart+this.delayPerPath*(this.path.length-e-1))))}},{key:"renderLoop",value:function(){var t=this;this.render(),Date.now()-this.timeStart<this.duration+this.delayPerPath*(this.path.length-1)+this.delayPointsMax?requestAnimationFrame((function(){t.renderLoop()})):this.isAnimating=!1}}]),e}(),n=document.querySelector(".shape-overlays");this.$store.state.overlay=new e(n)},initCursor:function(){var t=document.querySelector(".cursor-point");window.onmousemove=function(e){var n=e||window.event,i=document.documentElement.offsetLeft||document.body.offsetLeft,r=document.documentElement.offsetTop||document.body.offsetTop,o=n.clientX+i,a=n.clientY+r;t.style.display="block",t.style.left=o+"px",t.style.top=a+"px"},this.initMouse()},initMouse:function(){var t,e=function(){return t={width:window.innerWidth,height:window.innerHeight}};e(),window.addEventListener("resize",e);var n={x:t.width/2,y:t.height/2};window.addEventListener("mousemove",(function(t){return n=Object(V["c"])(t)}));var i=function(){function t(e){var n=this;Object(a["a"])(this,t),this.DOM={el:e},this.DOM.circle=this.DOM.el.querySelector(".cursor__inner--circle"),this.bounds=this.DOM.circle.getBoundingClientRect(),this.renderedStyles={tx:{previous:0,current:0,amt:.2},ty:{previous:0,current:0,amt:.2},scale:{previous:1,current:1,amt:.2}},requestAnimationFrame((function(){return n.render()}))}return Object(s["a"])(t,[{key:"render",value:function(){var t=this;for(var e in this.renderedStyles["tx"].current=n.x-this.bounds.width/2,this.renderedStyles["ty"].current=n.y-this.bounds.height/2,this.renderedStyles)this.renderedStyles[e].previous=Object(V["e"])(this.renderedStyles[e].previous,this.renderedStyles[e].current,this.renderedStyles[e].amt);this.DOM.circle.style.transform="translateX(".concat(this.renderedStyles["tx"].previous,"px) translateY(").concat(this.renderedStyles["ty"].previous,"px) scale(").concat(this.renderedStyles["scale"].previous,")"),requestAnimationFrame((function(){return t.render()}))}},{key:"enter",value:function(){this.renderedStyles["scale"].current=1.9}},{key:"leave",value:function(){this.renderedStyles["scale"].current=1}},{key:"click",value:function(){this.renderedStyles["scale"].previous=.4}}]),t}();this.cursor=new i(document.querySelector(".cursor"))},jump:function(){var t=this.$refs.mobile_nav;t.style.animation="headerShrink 500ms forwards ease",t.classList.toggle("active"),this.$refs.ham.toggle()},onHamClick:function(){var t=this.$refs.mobile_nav;t.classList.contains("active")?t.style.animation="headerShrink 500ms forwards ease":t.style.animation="headerExpand 500ms forwards ease",t.classList.toggle("active")},_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t}}},Y=X,J=(n("5c0b"),Object(h["a"])(Y,r,o,!1,null,null,null)),U=J.exports,Q=n("9483");Object(Q["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var Z=n("8c4f");i["a"].use(Z["a"]);var K=Z["a"].prototype.push;Z["a"].prototype.push=function(t){return K.call(this,t).catch((function(t){return t}))};var tt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:function(){return n.e("blog").then(n.bind(null,"bb51"))},meta:{title:"HOME",keepAlive:!0}},{path:"/blog",name:"Blog",component:function(){return n.e("blog").then(n.bind(null,"fd3f"))},meta:{title:"BLOG",keepAlive:!0}},{path:"/about",name:"About",component:function(){return n.e("blog").then(n.bind(null,"f820"))},meta:{title:"ABOUT",keepAlive:!0}}],et=new Z["a"]({routes:tt}),nt=et,it=n("2f62");i["a"].use(it["a"]);var rt=new it["a"].Store({state:{isMobile:!1,dark:!0,overlay:{},flashword:!1,home:{},blog:{},about:{},isInitAnimations:!1},mutations:{toggleOverlay:function(t){t.overlay.toggle()},initHomeAnim:function(t){setTimeout((function(){t.home.initAnim()}),1200)},initAboutAnim:function(t){setTimeout((function(){t.about.initAnim()}),1200)},initBlogAnim:function(t){setTimeout((function(){t.blog.initAnim()}),1200)}},actions:{},modules:{}}),ot=(n("1054"),n("f13f")),at=n("bd7e"),st=n.n(at),ct=n("a45e"),lt=n.n(ct),ut=n("77ed"),dt=n.n(ut),ht=n("f5af"),mt=n.n(ht),ft=(n("e829"),n("cffa"));i["a"].config.productionTip=!1;var pt={animate:!0,animationDuration:800,color:"currentColor",strokeWidth:1,padding:5,multiline:!1,iterations:2,brackets:"right"};function gt(){var t=["color: green","font-size: 20px","font-family: 华文仿宋","text-shadow: 2px 2px black","padding: 10px"].join(";");console.log("%cHello There, This is Vanilla",t);var e=!0;console.log=function(t){return function(){e&&t.apply(this,arguments)}}(console.log)}i["a"].use(ot["a"],pt),i["a"].prototype.$imagesLoaded=st.a||new i["a"],i["a"].use(lt.a),i["a"].prototype.$eventHub=i["a"].prototype.$eventHub||new i["a"],i["a"].use(dt.a),mt.a.init(),i["a"].prototype.$GSAP=ft["b"]||new i["a"],gt(),new i["a"]({router:nt,store:rt,render:function(t){return t(U)}}).$mount("#app");var vt=["color: red","padding: 10px"].join(";");nt.beforeEach((function(t,e,n){console.log("%cbeforeEach--to.name:"+t.name+",from.name:"+e.name,vt),0===t.matched.length?(console.log("stop"),e.name?n({name:e.name}):n("/")):(rt.commit("toggleOverlay"),n());var i=document.querySelector(".shape-overlays");"Home"===e.name?(i.classList.remove("shape-overlays-others-to-home"),i.classList.add("shape-overlays-home-to-others")):(i.classList.remove("shape-overlays-home-to-others"),i.classList.add("shape-overlays-others-to-home"))})),nt.afterEach((function(t,e){null!==e.name&&(rt.commit("toggleOverlay"),"Home"===t.name&&(console.log("store afterEach initHomeAnim"),rt.commit("initHomeAnim")),"About"===t.name&&(console.log("store afterEach initAboutAnim"),rt.commit("initAboutAnim")),"Blog"===t.name&&(console.log("store afterEach initBlogAnim"),rt.commit("initBlogAnim"))),console.log("%cafterEach--to.name:"+t.name+",from.name:"+e.name,vt)}))},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"5dcd":function(t,e,n){t.exports=n.p+"img/8.4dc41ed2.jpg"},"5dda":function(t,e,n){t.exports=n.p+"img/9.557a05be.jpg"},"5ddf":function(t,e,n){t.exports=n.p+"img/10.8f562a5a.jpg"},"5e75":function(t,e,n){},6944:function(t,e,n){t.exports=n.p+"img/miao1.0a938cc4.jpg"},"6eea":function(t,e,n){t.exports=n.p+"img/click-me.995f9d43.png"},"7a5c":function(t,e,n){t.exports=n.p+"img/Logo-2.5ba4c1fc.png"},"7e6e":function(t,e,n){"use strict";var i=n("f69e"),r=n.n(i);r.a},8476:function(t,e,n){t.exports=n.p+"img/2.b434efe2.jpg"},"8bba":function(t,e,n){},9701:function(t,e,n){},"9bad":function(t,e,n){t.exports=n.p+"img/5.997e1a19.jpg"},"9c0c":function(t,e,n){},a695:function(t,e,n){t.exports=n.p+"img/6.5065334c.jpg"},b4bb:function(t,e,n){"use strict";var i=n("2dca"),r=n.n(i);r.a},c21b:function(t,e,n){t.exports=n.p+"img/4.223af95f.jpg"},c8cf:function(t,e,n){t.exports=n.p+"img/7.6f9faa42.jpg"},c8fb:function(t,e,n){t.exports=n.p+"img/Logo.9f019711.png"},d233:function(t,e,n){"use strict";var i=n("d7f9"),r=n.n(i);r.a},d298:function(t,e,n){t.exports=n.p+"img/shancheng-high.4112bd41.jpg"},d7f9:function(t,e,n){},ef5f:function(t,e,n){t.exports=n.p+"img/red-head-high.761b9bca.jpg"},f46b:function(t,e,n){"use strict";var i=n("8bba"),r=n.n(i);r.a},f69e:function(t,e,n){}});
//# sourceMappingURL=app.6e9b68a3.js.map