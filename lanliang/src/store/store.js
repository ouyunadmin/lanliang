import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)
export default new Vuex.Store({
  state: {
    data: [],
    token: '',
    bbis:''
  },
  mutations: {
    addData(state, cart) {
      state.data = cart
    },
    toKen(state,num) {
      state.token = num
    },
    bbisShow(state, val) {
      // console.log(data)
      state.bbis = val
    }
  },
  getters: {
    getData(state) {
      return state.data
    },
    getToken(state) {
      return state.token
    },
    getisShow(state) {
      return state.bbis
    }
  },
  actions: {
    addCurrent({ commit }, cart) { 
      commit('addData', cart)
    },
    setToken({ commit },val) {
      commit('toKen', val)
    },
    getbbShow({commit},val){
      commit('bbisShow',val)
    }
  }
})
