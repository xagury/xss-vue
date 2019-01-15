// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./utils/rem')
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$http = axios
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
