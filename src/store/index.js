import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// mutations type
const SAVE_GEOHASH = "SAVE_GEOHASH"

export default new Vuex.Store({
  state: {
    geohash:"",//地址hash值
  },
  mutations: {
    // 保存geohash值
    [SAVE_GEOHASH](state,geohash){
      state.geohash = geohash;
    }
  },
  actions: {
  },
  modules: {
  }
})
