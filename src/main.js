// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Http from '@/utils/http'
import Toast from '@/components/toast'
import Dialog from '@/components/dialog'

Vue.prototype.$http = Http
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default app
