export const store = {
  state: {
    count: 0,
  },
  mutations: {
    set(state, newCount) {
      state.count = newCount;
    }
  },
  actions: {
    change({commit}, newCount) {
      commit('set', newCount)
    }
  }
};