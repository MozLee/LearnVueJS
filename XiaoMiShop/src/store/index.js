import Vue from 'vue';
import Vuex from 'vuex'
import {
  getShopList
} from '../server'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    shopCarList: [],
    loading: true,
    havaValue: false,
  },
  getters: {
    isCheckAll(state) {
      return state.shopCarList.every(x => x.checked)
    },
    oneCheck(state) {
      return state.shopCarList.some(x => x.checked)
    }
  },
  mutations: {
    setShopList(state, newdata) {
      newdata.list.forEach((x) => {
        if (!x.hasOwnProperty('checked')) {
          x.checked = false
        }

      })
      state.shopCarList = newdata.list;
      if (newdata) {
        state.havaValue = true;
      }
    },
    lodingDone(state, newdata) {
      state.loading = newdata.loading;
    },
    setCheck(state, newdata) {
      state.shopCarList.forEach((x) => {
        if (x === newdata.item) {
          x.checked = newdata.check
        }
      })
    },
    subNum(state, newdata) {
        state.shopCarList.forEach((x) => {
          if (x === newdata.item) {
            if (x.buyNumber > 1) {
              x.buyNumber--;
            }
          }
        })
      },
    addNum(state, newdata) {
      state.shopCarList.forEach((x) => {
        if (x === newdata.item) {
          if (x.buyNumber < x.buylimit) {
            x.buyNumber++;
          }
        }
      })
    },
    delShop(state,newdata){
        let i = state.shopCarList.findIndex(x=>x===newdata.item);
        state.shopCarList.splice(i,1);
        if(!state.shopCarList.length>0){
            console.log();
            state.havaValue=false
        }
    },
    checkedAll(state, newdata) {
      if (newdata.check) {
        state.shopCarList.forEach(x => x.checked = true)
      } else {
        state.shopCarList.forEach(x => x.checked = false)

      }
    },
    addData(state){
      state.shopCarList.push({
        skuId: "215400012",
        title: "小米6 全网通版 4GB内存 亮蓝色123",
        image: "https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png",
        price: "200",
        buyNumber: 3,
        buylimit: 10,
        checked:true
      })
    }
  },
  actions: {
    getListsAction(store) {
      getShopList().then((data) => {
        store.commit('setShopList', {
          list: data.data.data.list
        })
      }).then(() => {
        store.commit('lodingDone', {
          loading: false
        })
      })
    }
  }
});
export default store
