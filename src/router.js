import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('./views/Front/Home/Home.vue')), 'home')
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '智贷金管家'
    }
  }, ]
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
