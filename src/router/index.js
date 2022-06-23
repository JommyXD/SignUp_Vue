import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/LoginPage.vue'
import User from '../views/UserPage.vue'
import SignUp from '../views/SignUpPage.vue'
import store from '../store/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        next('/login');
      } else {
        next();
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
