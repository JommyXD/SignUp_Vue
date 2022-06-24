import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    myuser: 0,
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
      let index = state.users.findIndex(item => {
        return item.id == id
      })
      return state.users[index].firstname + ' ' + state.users[index].lastname;
    }
  },
  mutations: {
    setAuthenticated(state, status) {
      state.authenticated = status
    },
    addUser(state, user){
      var id = state.users.length + 1
      var newUser = {
        id,
        ...user
      }
      state.users.push(newUser);
      console.log("this step");
      console.log(newUser);
    }
  },
  actions: {
  },
  modules: {
  }
})
