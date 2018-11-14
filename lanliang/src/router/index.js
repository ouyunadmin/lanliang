import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import get from '@/components/get/get.vue'
import set from '@/components/set/set.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/get',
      name: 'get',
      component: get
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    
  ]
})
