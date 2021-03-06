import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('./views/home/home')), 'home')
const credit = r => require.ensure([], () => r(require('./views/credit/credit')), 'credit')
const loans = r => require.ensure([], () => r(require('./views/loans/loans')), 'loans')
const pledge = r => require.ensure([], () => r(require('./views/pledge/pledge')), 'pledge')
const insurance = r => require.ensure([], () => r(require('./views/insurance/insurance')), 'insurance')
const progress = r => require.ensure([], () => r(require('./views/progress/progress')), 'progress')
const xinyongka = r => require.ensure([], () => r(require('./views/home/children/xinyongka')), 'xinyongka')
const center = r => require.ensure([], () => r(require('./views/center/center')), 'center')
const news = r => require.ensure([], () => r(require('./views/news/news')), 'news')
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [{
      path: '/',
      component: home,
      meta: {
        title: '智银家'
      },
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '个人中心'
      },
      children: [{
        path: 'xinyongka',
        name: 'xinyongka',
        component: xinyongka,
        meta: {
          title: '个人中心'
        }
      }]
    },
    {
      path: '/credit',
      name: 'credit',
      component: credit,
      meta: {
        title: '信用卡申请'
      },
    },
    {
      path: '/loans',
      name: 'loans',
      component: loans,
      meta: {
        title: '网贷超市'
      },
    },
    {
      path: '/pledge',
      name: 'pledge',
      component: pledge,
      meta: {
        title: '贷款'
      },
    },
    {
      path: '/insurance',
      name: 'insurance',
      component: insurance,
      meta: {
        title: '保险特卖平台'
      },
    },
    {
      path: '/progress',
      name: 'progress',
      component: progress,
      meta: {
        title: '进度查询'
      },
    },
    {
      path: '/center',
      name: 'center',
      component: center,
      meta: {
        title: '个人中心'
      },
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        title: '咨询中心'
      }
    },
    {
      path: '*',
      component: home,
      meta: {
        title: '智银家'
      }
    },
  ]
})

router.beforeEach((to, from, next) => { /* 全局前置钩子 */
  document.title = to.meta.title || '智银家'
  next()
})
router.beforeResolve((to, from, next) => { /* 全局解析守卫 */
  next()
})
router.afterEach((to, from) => { /* 全局后置钩子 */ })

export default router
