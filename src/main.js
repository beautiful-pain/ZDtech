import Vue from 'vue'
import iView from 'iview'
import axios from 'axios'
import store from './store'
import App from './App.vue'
import vuex from 'vuex'
import router from './router'
import './registerServiceWorker'
import 'swiper/dist/css/swiper.css'
import 'iview/dist/styles/iview.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'font-awesome/css/font-awesome.css'
import '../theme/index.less';
import './index.less'

// require styles
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(iView, VueAxios, axios, VueAwesomeSwiper, vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
