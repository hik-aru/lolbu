export const strict = false

export const state = () => ({
  user: null,
  clans: [],
})

export const mutations = {
  loadState (state) {
    if (localStorage.getItem('vuex')) {
      const state = localStorage.getItem('vuex');
      console.log(state);
    }
  },
  setUser (state, payload) {
    state.user = {
      uid : payload.uid,
      display_name : payload.displayName,
      emial : payload.email
    }
    console.log(state.user);
  },

  setClans (state, payload) {
    // state.clans.filter(function (item) {
    //   return 
    // })
    state.clans.push({
      clan_id: payload.clan_id,
      clan_name: payload.clan_name
    });
    console.log(state.clans);
    // state.clans[clan_id] = {
    //   clan_id: payload.clan_id,
    //   clan_name: payload.clan_name
    // }
  }
}

export const actions = {
  loadState({ commit }) {
    commit('loadState')
  },
  setUser ({ commit }, payload) {
    commit('setUser', payload)
  },

  setClans ({ commit }, payload) {
    commit('setClans', payload)
  },
  
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },

  myClanList (state) {
    return state.clans
  },

}