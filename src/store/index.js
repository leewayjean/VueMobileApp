import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)
// state
const state = {
  geohash:"31.14419,121.66034",//地址geohash值
  latitude:null,
  longitude:null,
  cartList:[] // 购物车商品
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
