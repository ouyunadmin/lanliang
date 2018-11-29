// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'

import "../node_modules/ag-grid-community/dist/styles/ag-grid.css"
import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css"

import 'ag-grid-enterprise'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
