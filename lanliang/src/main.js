// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'

// import "../node_modules/ag-grid-community/dist/styles/ag-grid.css"
// import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css"
// import 'ag-grid-enterprise'
//引入
import Bus from './bus/index.js'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

import JsEncrypt from '../node_modules/jsencrypt'
let jsEnt = new JsEncrypt()
// 设置加密公钥
jsEnt.setPrivateKey(`-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyllCigI5N4m4++gVoFqqf+IpCAN1Daxo9pLeapl4hN7ST2S5GtKY43l2VWW3Xo6/c7HDHwOTSb1uQCx5yojAn/ZK+EgIUMxzjf9b+2k/rswhyF6GpTDuDHo4t/ac2znyjU9bh848jGV7N+XP8wyHgTgyJEdsQtDEHprvDCioQdwIDAQAB-----END PUBLIC KEY-----`)
Vue.prototype.$jsEncrypt = jsEnt
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
