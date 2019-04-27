import Vue from 'vue'
import App from './views/App.vue'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vcharts
import VCharts from 'v-charts'
// router
import router from './router.js'
// ajax
import './api.js'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VCharts)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
