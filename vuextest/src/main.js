// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    count:0,    
  },
  mutations:{
    changeCount(state){
      state.count++
    }
  },
  actions:{
    changeN({commit}){
      setTimeout(() => {
        commit('changeCount')
      }, 2000);
    }
  }  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store:store,
})
