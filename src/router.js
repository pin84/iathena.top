import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about'
import Job from './components/Job'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Message from './components/message'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/about',
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/job',
      component: Job
    },
    {
      path: '/skill',
      component: Skill
    },
    {
      path: '/experience',
      component: Experience
    },
    {
      path: '/message',
      component: Message,
      meta: { keepAlive: true }
    },


    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
