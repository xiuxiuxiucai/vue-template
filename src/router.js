// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloWorld from './components/HelloWorld.vue'

const routes = [
  { path: '/', component: HelloWorld }
]

export default new VueRouter({
  routes
})
