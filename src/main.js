import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

Vue.config.productionTip = false

/* eslint-disable no-new */

fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
