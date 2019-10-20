export const strict = false

export const state = () => ({
  user: null,
})

export const mutations = {
  setUser (state, payload) {
    state.user = {
      uid : payload.uid,
      display_name : payload.displayName,
      emial : payload.email
    }
    console.log(state.user);
  }
}

export const actions = {
  setUser ({ commit }, payload) {
    commit('setUser', payload)
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}