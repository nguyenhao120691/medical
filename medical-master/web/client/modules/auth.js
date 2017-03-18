import Api from '../utils/api'
import router from '../router'

const state = {
  user: null,
  token: '',
  logged: false
}

const mutations = {
  UPDATE_EMAIL(state, payload) {
    state.email = payload
  },
  UPDATE_PASSWORD(state, payload) {
    state.password = payload
  },
  SIGNIN_START(state){
    state.user = null
    state.token = ''
    state.logged = false
  },
  SIGNIN(state, {user = null, token = ''}) {
    state.user = user
    state.token = token
    state.logged = true
  },
  SIGNIN_FAILE() {},
  CHECK_EMAIL_START(){},
  CHECK_EMAIL_VALID(){},
  CHECK_EMAIL_INVALID(){},
  CHECK_EMAIL_FAILE() {}
}

const actions = {
  checkEmail( { commit }, email ) {
    Api.call.user.emailExist(email)
        .catch((error) => {
          commit('CHECK_EMAIL_FAILE')
        })
        .then((data) => {
          if(data.valid){
            commit('CHECK_EMAIL_VALID', data)
          } else {
            commit('CHECK_EMAIL_INVALID', data)
          }
        })

        commit('CHECK_EMAIL_START', email)
  },
  callSignin({commit, dispatch}, {  email, password }) {
    const lazy = Api.call.auth
      .signin(email, password)
      .then((data) => {
        commit('SIGNIN', data)
      })
      .catch((error) => {
        commit('SIGNIN_FAILE', error.responseJSON)
      })
    
    commit('SIGNIN_START')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

// middleware

function signinHandler(mutation, state) {
  router.push('/');
}

const handlers = {
  'signin/SIGNIN': signinHandler
}

export const middleware = (mutation, state) => {
  let handler = handlers[mutation.type]
  return handler ? handler(mutation, state) : false
}
