import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Info from '@/pages/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/info/:domain',
      name: 'Info',
      component: Info
    }
  ]
})
