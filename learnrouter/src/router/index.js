import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import faxian from '../components/content/faxian.vue';
import guanzhu from '../components/content/guanzhu.vue';
import xiaoxi from '../components/content/xiaoxi.vue';
const router = new Router({
  routes: [
    {
      path:'/',
      name:'Faxian',
      component:faxian
    },
    {
      path:'/guanzhu',
      name:'Guanzhu',
      component:guanzhu,
      beforeEnter:(to,from,next)=>{
        next()
      }
     
    },
    {
      path:'/xiaoxi',
      name:'Xiaoxi',
      component:xiaoxi
    }
  ],
  // beforeEnter: (to, from, next) => {
  //   console.log(to);
  //   console.log(from);
  // }
})
router.beforeEach((go,from,next) => {
  // console.log('go',go);
  // console.log('from',from);  
  next()
})
export default router;
