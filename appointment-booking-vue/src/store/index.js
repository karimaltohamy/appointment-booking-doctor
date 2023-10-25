import { createStore } from 'vuex'

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      localStorage.setItem("user", JSON.stringify(payload));
    },
  },
  actions: {
  },
  modules: {
  }
})
