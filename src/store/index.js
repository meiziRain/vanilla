import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    dark: true,
    overlay: {},
    flashword: false,
    home: {}, // home, about, blog
    blog: {},
    about: {},
    isInitAnimations: false
  },
  mutations: {
    toggleOverlay(state) {
      state.overlay.toggle()
    },
    initHomeAnim(state) {
      setTimeout(() => {
        state.home.initAnim()
      }, 1200)
    },
    initAboutAnim(state) {
      setTimeout(() => {
        state.about.initAnim()
      }, 1200)
    },
    initBlogAnim(state) {
      setTimeout(() => {
        state.blog.initAnim()
      }, 1200)
    }
  },
  actions: {
  },
  modules: {
  }
})
