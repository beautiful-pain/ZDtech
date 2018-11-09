import Vue from 'vue'
import axios from 'axios'
import store from './store'
import App from './App.vue'
import vuex from 'vuex'
import iView from 'iview'
// import vux from 'vux'
import router from './router'
import './registerServiceWorker'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'font-awesome/css/font-awesome.css'
import './index.less'


// require styles
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(iView, axios, VueAwesomeSwiper, VueAxios, vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
