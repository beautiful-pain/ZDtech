import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('./views/home/home.vue')), 'home')
const xinyongka = r => require.ensure([], () => r(require('./views/home/children/xinyongka.vue')), 'xinyongka')
const center = r => require.ensure([], () => r(require('./views/center/center.vue')), 'center')
const news = r => require.ensure([], () => r(require('./views/news/news.vue')), 'news')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '智贷金管家'
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
      path: '/center',
      name: 'center',
      component: center,
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
        title: '智贷金管家'
      }
    },
  ]
})

router.beforeEach((to, from, next) => { /* 全局前置钩子 */
  document.title = to.meta.title || '智贷金管家'
  next()
})
router.beforeResolve((to, from, next) => { /* 全局解析守卫 */
  next()
})
router.afterEach((to, from) => { /* 全局后置钩子 */ })

export default router
