import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import mock from './mock/mock'
mock.start()

Vue.use(ElementUI)
Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

window.addEventListener("popstate", (e) => {
  router.goBack()
  // e.preventDefault()
}, false);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
