import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'css-doodle'
Vue.config.productionTip = false

// 着重文本
const options = {
  // Turn on/off animation when annotating.
  animate: true,
  // Duration of the animation in milliseconds.
  animationDuration: 800,
  // Representing the color of the annotation sketch.
  color: 'currentColor',
  // Width of the annotation strokes.
  strokeWidth: 1,
  // (in pixels) Padding between the element and roughly where the annotation is drawn.
  padding: 5,
  // To annotate multiline text (each line separately), set this property to true.
  multiline: false,
  // By default annotations are drawn in two iterations.
  iterations: 2,
  // When drawing a bracket, this configures which side(s) of the element to bracket.
  brackets: `right`
}
import VueRoughNotation from 'vue-rough-notation'
Vue.use(VueRoughNotation, options)

import imagesloaded from 'imagesloaded'
Vue.prototype.$imagesLoaded = imagesloaded || new Vue()

import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue() // 广播

import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

// global import gsap, Why can't add `{}` ?
import GSAP from 'gsap'
Vue.prototype.$GSAP = GSAP || new Vue()

function logSth() {
  const styles = [
    'color: green',
    'font-size: 20px',
    'font-family: 华文仿宋',
    'text-shadow: 2px 2px black',
    'padding: 10px'
  ].join(';')
  // 传入样式
  console.log('%cHello There, This is Vanilla', styles)

  // 屏蔽后面的console
  const logDebug = true
  console.log = (function(oriLogFunc) {
    return function() {
      if (logDebug) {
        oriLogFunc.apply(this, arguments)
      }
    }
  })(console.log)
}
logSth()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 路由全局守卫
// 当路由进入前
// 最好放在new Vue下面，刷新和第一次进入不会触发beforeEach,
const routerLogStyles = [
  'color: red',
  'padding: 10px'
].join(';')
router.beforeEach((to, from, next) => {
  console.log('%cbeforeEach--' + 'to.name:' + to.name + ',' + 'from.name:' + from.name, routerLogStyles)
  if (to.matched.length === 0) { // 如果未匹配到路由
    console.log('stop')
    from.name ? next({
      name: from.name
    }) : next('/') // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    store.commit('toggleOverlay')
    next() // 如果匹配到正确跳转
  }
})

router.afterEach((to, from) => {
  if (from.name !== null) {
    store.commit('toggleOverlay')
    if (to.name === 'Home') {
      store.commit('initHomeAnim')
    }
    if (to.name === 'About') {
      store.commit('initAboutAnim')
    }
    if (to.name === 'Blog') {
      store.commit('initBlogAnim')
    }
  }
  console.log('%cafterEach--' + 'to.name:' + to.name + ',' + 'from.name:' + from.name, routerLogStyles)
})
