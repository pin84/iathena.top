import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Job from '../components/job'
import About from '../components/about'
import Contact from '../components/contact/contact'
import Skill from '../components/skill'
import Blog from '../components/blog/blog'

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
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/skill',
      component: Skill
    },
    {
      path: '/blog',
      component: Blog
    }
  ]
})