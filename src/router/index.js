import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Projets from '@/components/Projets'
import Apropos from '@/components/Apropos'
import Contact from '@/components/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/portfolio',
      name: 'Projets',
      component: Projets
    },
    {
      path: '/a-propos',
      name: 'Apropos',
      component: Apropos
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
