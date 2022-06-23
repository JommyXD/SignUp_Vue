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
      firstname: "Sittisak",
      lastname: "Seti",
    }
  },
  getters: {
    fullName:state => {
      return state.user.firstname + ' ' + state.user.lastname
    }
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
