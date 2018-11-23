import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)
export default new Vuex.Store({
  state: {
    data: [],
    token: ''
  },
  mutations: {
    addData(state, cart) {
      state.data = cart
    },
    toKen(state,num) {
      state.token = num
    }
  },
  getters: {
    getData(state) {
      return state.data
    },
    getToken(state) {
      return state.token
    }
  },
  actions: {
    addCurrent({ commit }, cart) { 
      commit('addData', cart)
    },
    setToken({ commit },val) {
      commit('toKen', val)
    }
  }
})
