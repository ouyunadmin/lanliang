import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import get from '@/components/get/get.vue'
import set from '@/components/set/set.vue'
import a from '@/components/path/a.vue'
import b from '@/components/path/b.vue'
import c from '@/components/path/c.vue'

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
    {
      path: '/a',
      name: 'a',
      component: a
    },
    {
      path: '/b',
      name: 'b',
      component: b
    },
    {
      path: '/c',
      name: 'c',
      component: c
    }
    
  ]
})
