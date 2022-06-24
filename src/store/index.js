import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    users: [{
      id: 1,
      username: "admin",
      password: 1234,
      firstname: "Sittisak",
      lastname: "Seti",
    }]
  },
  getters: {
    fullName:state => {
      return state.users.firstname + ' ' + state.users.lastname
    }
  },
  mutations: {
    setAuthenticated(state, status) {
      state.authenticated = status
    },
    addUser(state, user){
      state.users.push(user);
      console.log("this step");
      console.log(user);
    }
  },
  actions: {
  },
  modules: {
  }
})
