import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import './assets/stylus/common.styl'
import './assets/stylus/printstyl.styl'

Vue.config.productionTip = false



import {get ,post }from '@/plugins/axios.js'
import api from '@/assets/api/api.js'

Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
