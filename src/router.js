import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('./views/Front/Home/Home.vue')), 'home')
const center = r => require.ensure([], () => r(require('./views/Front/Center/Center.vue')), 'center')
const news = r => require.ensure([], () => r(require('./views/Front/News/News.vue')), 'news')
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '智贷金管家'
      }
    },
    {
      path: '/center',
      name: 'center',
      component: center,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        title: '咨询中心'
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
