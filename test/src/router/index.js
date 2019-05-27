import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ConfirmCom from '@/components/oneComponent'
import EchartDemo from '@/components/echartDemo'

import sub from '@/components/sub'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/a',
      component: ConfirmCom
    },
    {
      path: '/sub',
      component: sub
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/e',
      name: 'e',
      component: EchartDemo
    }
  ]
})
