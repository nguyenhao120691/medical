import Vue from 'vue'
import Vuex from 'vuex'

import nil from './validation'

import Auth from '../modules/auth'
import Gritter from '../modules/gritter'
import Waiter from '../modules/waiter' 


Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    auth: Auth,
    gritter: Gritter,
    waiter: Waiter
  }
})

export default store
