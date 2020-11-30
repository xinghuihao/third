import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    comingList: []
  },
  // getters: {
  //   comingListgetters (state) {
  //     return state.comingList.filter((item, index) => index < 1)
  //   }
  // },
  mutations: {
    Hidemaizuo (state, data) {
      state.isTabbarShow = data
    },
    Showmaizuo (state, data) {
      state.isTabbarShow = data
    },
    comingListmutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    listenaction (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=2267092',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606301763110097191665665","bc":"510100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        store.commit('comingListmutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})
