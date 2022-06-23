import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    user: {
      id: 1,
      username: "admin",
      password: 1234,
      fullname: "Sittisak Seti"
    }
  },
  getters: {
  },
  mutations: {
    setAuthenticated(state, status) {
      state.authenticated = status
    }
  },
  actions: {
  },
  modules: {
  }
})
