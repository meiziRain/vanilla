import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    overlay: {}
  },
  mutations: {
    toggleOverlay(state) {
      state.overlay.toggle()
    }
  },
  actions: {
  },
  modules: {
  }
})
