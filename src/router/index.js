import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Enrol from '@/components/Enrol'
import Import from '@/components/Import'
import Sold from '@/components/Sold'
import Appraise from '@/components/Appraise'
import Consignment from '@/components/Consignment'
import Addition from '@/components/Addition'
import Editor from '@/components/Editor'
import Logistic from '@/components/Logistic'
import List from '@/components/List'
import Refund from '@/components/Refund'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Enrol',
      name: 'Enrol',
      component: Enrol,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Import',
      name: 'Import',
      component: Import,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Sold',
      name: 'Sold',
      component: Sold,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Refund/Appraise',
      name: 'Appraise',
      component: Appraise,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Consignment',
      name: 'Consignment',
      component: Consignment,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Sold/List',
      name: 'List',
      component: List,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Sold/List/Addition',
      name: 'Addition',
      component: Addition,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Editor',
      name: 'Editor',
      component: Editor,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Refund/Logistic',
      name: 'Logistic',
      component: Logistic,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Refund',
      name: 'Refund',
      component: Refund,
      meta: {
        keepAlive: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login') {
    next()
  } else {
    // let token = localStorage.getItem('Authorization')
    // if (token === 'null' || token === '') {
    //   next({name: 'Login'})
    // } else {
    next()
    // }
  }
})

export default router
