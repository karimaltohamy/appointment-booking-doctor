import { createStore } from 'vuex'

export default createStore({
  
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    booking: JSON.parse(localStorage.getItem("booking")) || null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      localStorage.setItem("user", JSON.stringify(payload));
    },
    setBooking(state, payload) {
      state.booking = payload
      localStorage.setItem("booking", JSON.stringify(payload));
    },
  },
  actions: {
  },
  modules: {
  }
})
