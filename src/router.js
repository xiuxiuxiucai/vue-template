// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MainPage from './views/MainPage'
import TodayMission from './views/TodayMission'
import NewMission from './views/NewMission'
import MissionCenter from './views/MissionCenter'
import MissionItem from './views/MissionItem'
import StatisticsItem from './views/StatisticsItem'
import MissionChart from './views/MissionChart'
import test from './views/test'

import Login from './views/login/Login'

const routes = [
  { path: '/', redirect: '/index/MissionCenter' },
  { path: '/Login', component: Login },
  { path: '/index', component: MainPage,
    children: [
      { path: 'TodayMission', component: TodayMission },
      { path: 'NewMission', component: NewMission },
      { path: 'MissionCenter', component: MissionCenter },
      { path: 'MissionItem', component: MissionItem },
      { path: 'StatisticsItem', component: StatisticsItem },
      { path: 'MissionChart', component: MissionChart },
      { path: 'test', component: test }
    ]
  }
]

export default new VueRouter({
  routes
})
