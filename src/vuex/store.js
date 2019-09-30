import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  userInfo: JSON.parse(window.localStorage.getItem("localUserInfo")),
  requestUrl: "http://127.0.0.1:3005"
};

export default new Vuex.Store({
  state,
  mutations
})
