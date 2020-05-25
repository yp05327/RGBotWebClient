//import Vue from 'vue'
import Router from 'vueRouter'
import home from '@/components/home'
import about from '@/components/about'
import help from '@/components/help'
import user from '@/components/user'

import arcaea from '@/components/arcaea/index'
import bangdream from '@/components/bangdream/index'
import cgss from '@/components/cgss/index'
import arcaea_account from '@/components/arcaea/account'
import bangdream_account from '@/components/bangdream/account'
import cgss_account from '@/components/cgss/account'


//Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/arcaea',
      name: 'arcaea',
      component: arcaea
    },
    {
      path: '/bangdream',
      name: 'bangdream',
      component: bangdream
    },
    {
      path: '/cgss',
      name: 'cgss',
      component: cgss
    },
    {
      path: '/arcaea/account',
      name: 'arcaea-account',
      component: arcaea_account
    },
    {
      path: '/bangdream/account',
      name: 'bangdream-account',
      component: bangdream_account
    },
    {
      path: '/cgss/account',
      name: 'cgss-account',
      component: cgss_account
    },
  ]
})
