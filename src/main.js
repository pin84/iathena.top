import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/stylus/common.styl'
import './assets/stylus/printstyl.styl'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
