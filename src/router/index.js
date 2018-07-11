import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from "@/components/index/Header"
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})

export default router;