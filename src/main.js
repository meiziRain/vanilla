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

import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue() // 广播

import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
