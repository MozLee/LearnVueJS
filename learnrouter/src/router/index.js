import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/about/:username',
      component:{
        template:`<div>
        <h2>你好亲爱的{{$route.params.username}}</h2>
        <router-link to="more" append>更多信息</router-link>
        <router-view></router-view>
        </div>`
      },
      children:[{
        path:'more',
        component:{
          template:`<div>User:{{$route.params.username}}的详细信息</div>`
        }
      }]
    }
  ]
})
