import Vue from 'vue';
import Vuex from 'vuex';
import {getList,getUsers} from '@/server';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        shopList:[],
        recommendList:[],
        listLoading:true,
        recommendLoadig:true,
        shopListNum:0,
    },
    mutations:{
        changeList(state,newdata){
            // console.log(newdata);
            state.shopList=newdata;
            state.listLoading=!state.listLoading;  
            // console.log(state.shopList);
        },
        changeRecommendList(state,newdata){
            state.recommendList = newdata;
            state.recommendLoadig = !state.recommendLoadig;
        }
    },
    actions:{
        getListAction(store){
            getList().then((data) => {
                store.commit('changeList',{list:data.data.data.list})
            })
        },
        getRecommendedListAction(store){
            getUsers().then((data) => {
                console.log(data);
                store.commit('changeRecommendList',{list:data.data.data.list})
            })
        }
    }
})

export default store;