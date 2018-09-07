import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'normalize.css'
import './assets/stylus/common.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
