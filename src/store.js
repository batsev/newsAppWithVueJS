import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    post: {}
  },
  mutations: {
    'SET_POST': (state, post) => {
      state.post = post
    }
  },
  actions: {

  }
})
