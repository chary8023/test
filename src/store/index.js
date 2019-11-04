import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userhead:'' , //用户头像
  },
  mutations: {
    changeUserHead(state,val){
      state.userhead = val
    }
  },
  actions: {
  },
  modules: {
  }
})
