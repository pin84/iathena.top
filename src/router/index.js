import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Job from '../components/job'
import About from '../components/about'
import Contact from '../components/contact/contact'
import Skill from '../components/skill'
import Blog from '../components/blog'

import One from '../components/blog/blog'
import Two from '../components/blog/blog_1'
import Experience from '../components/Experience'
import Message from '../components/message'

export default new Router({
  // mode: 'history',
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
      path: '/experience',
      component: Experience
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/blog',
      component: Blog,
      children:[
        {
          path: '',
          redirect: 'one'
        },
        {
          path: 'one',
          component: One
        },
        {
          path: 'two',
          component: Two
        }
      ]
    }
  ]
})