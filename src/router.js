import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('./views/Front/Home/Home.vue')), 'home')
const about = r => require.ensure([], () => r(require('./views/Front/About/About.vue')), 'about')
const guide = r => require.ensure([], () => r(require('./views/Front/Guide/Guide.vue')), 'guide')
const help = r => require.ensure([], () => r(require('./views/Front/Help/Help.vue')), 'help')
const notice = r => require.ensure([], () => r(require('./views/Front/Notice/Notice.vue')), 'notice')
const user = r => require.ensure([], () => r(require('./views/Front/User/User.vue')), 'user')

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '智贷科技云算力'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于-智贷科技'
      }
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
      meta: {
        title: '指南-智贷科技'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: help,
      meta: {
        title: '帮助-智贷科技'
      }
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice,
      meta: {
        title: '公告-智贷科技'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        title: '登录/注册-智贷科技'
      }
    },
  ]
})

router.beforeEach((to, from, next) => { /* 全局前置钩子 */
  document.title = to.meta.title || '智贷科技云算力'
  next()
})
router.beforeResolve((to, from, next) => { /* 全局解析守卫 */
  next()
})
router.afterEach((to, from) => { /* 全局后置钩子 */ })

export default router
