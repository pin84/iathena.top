import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Job from '../components/job'
import About from '../components/about'

export default new Router({
  mode: 'history',
  // linkActiveClass:'acitve',
  routes: [
    {
      path:'/',
      redirect: '/about'
    },
    {
      path: '/job',
      component: Job
    },
    {
      path: '/about',
      component: About
    }
  ]
})