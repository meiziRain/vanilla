import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'css-doodle'
Vue.config.productionTip = false

import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)
// eslint-disable-next-line no-unused-vars
import { TweenMax as TM, Power1, Power2, Power4, Sine, Expo } from 'gsap'
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue() // 广播

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
