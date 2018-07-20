import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/components/index/index"
import Detail from "@/components/detail/detail"
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path:"/detail",
    	name :"detail",
    	component:Detail,
    	props:true,
    	meta:{
        login:true
     }
    }
  ]
})

export default router;