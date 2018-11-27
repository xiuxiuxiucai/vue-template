import Vue from 'vue'
import App from './App.vue'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vue-router
import VueRouter from 'vue-router'
// echarts
import Chart from 'vue-echarts/components/ECharts'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.component('chart', Chart)

new Vue({
  render: h => h(App),
}).$mount('#app')
