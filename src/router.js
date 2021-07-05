import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about'
import Job from './components/Job'
import Skill from './components/Skill'
import Experience from './components/experience/index'
import Message from './components/message'
import Fireworks from './components/fireworks'
// import ThreeDImage from './components/works/ThreeDImage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: About,
      meta: { keepAlive: true }
    },
    {
      path: '/job',
      component: Job,
      meta: { keepAlive: true }
    },
    {
      path: '/skill',
      component: Skill,
      meta: { keepAlive: true }
    },
    {
      path: '/experience',
      component: Experience,
      meta: { keepAlive: true }
    },
    {
      path: '/fireworks',
      component: Fireworks,
      meta: { keepAlive: true }
    },

    {
      path: '/ThreeDPic',
      name: 'threeDPic',
      component: () => import('@/views/works/ThreeDPic.vue'),
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/audio',
      name: 'Audio',
      component: () => import('@/views/works/audio/index.vue'),
      meta: {
        keepAlive: false // 不需要缓存
      }
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
