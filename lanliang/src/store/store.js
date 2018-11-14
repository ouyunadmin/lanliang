import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)
export default new Vuex.Store({
    state:{
      data:[]
    },
    mutations:{
       addData(state,cart){
        state.data = cart
       } 
    },
    getters: {
        getData(state){
            return state.data
        }
    },
    actions: {
  
    }
})