import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import faxian from '../components/content/faxian.vue';
import guanzhu from '../components/content/guanzhu.vue';
import xiaoxi from '../components/content/xiaoxi.vue';
export default new Router({
  routes: [
    {
      path:'/',
      name:'Faxian',
      component:faxian
    },
    {
      path:'/guanzhu',
      name:'Guanzhu',
      component:guanzhu
    },
    {
      path:'/xiaoxi',
      name:'Xiaoxi',
      component:xiaoxi
    }
  ]
})
