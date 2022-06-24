import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    users: [
      {
      id: 1,
      username: "admin",
      password: 1234,
      firstname: "Sittisak",
      lastname: "Seti",
      },
      {
      id: 2,
      username: "root",
      password: 1111,
      firstname: "Manisara",
      lastname: "Piboon",
      },

    ]
  },
  getters: {
    fullName:state => id => {
      let index = state.users.findIndex(e => {
        e == id
      })
      console.log("My index is");
      console.log(index);
      return state.users[index+1].firstname + ' ' + state.users[index+1].lastname;
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
