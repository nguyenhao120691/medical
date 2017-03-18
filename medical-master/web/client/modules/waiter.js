const state = {
    timeout: 0,
    animationTimeout: 0,
    show: false,
    value: 0,
}

const mutations = {
    RESET(state){
        state.value = 0;
        state.show = true;
        state.timeout = 0;
        state.animationTimeout = 0;
    },
    HIDE(state){
        state.show = false
    },
    SHOW(state){
        state.show = true
    },
    SEEK(state, {value = 5, timeout = 0}){
        state.value += value
        state.timeout = timeout
    },
    FILL(state, {value = 100, animationTimeout = 0}){
        state.value = 100
    }
}


const actions = {
  start({commit, state, dispatch}){
    const {timeout, animationTimeout} = state
    clearTimeout(timeout)
    clearTimeout(animationTimeout)
    commit('RESET')
    dispatch('next')
  },
  next({commit, dispatch, state}){
    if (state >= 95) return;

    const timeout = setTimeout(() => {
        commit('SEEK', {value: 5, timeout})
    }, 100)
  },
  cancel({commit}){
    commit('HIDE')
  },
  fill({commit}){
    const animationTimeout = setTimeout(() => {
        commit('HIDE')
    }, 540)
    commit('FILL', {value: 100, animationTimeout})
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}