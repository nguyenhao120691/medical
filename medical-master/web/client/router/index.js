import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Signin from '../views/Signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/signin',
      component: Signin
    }
  ]
})