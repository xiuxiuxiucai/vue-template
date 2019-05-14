// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MainPage from './views/MainPage'
import TodayMission from './views/TodayMission'
import MissionAlter from './views/MissionAlter'
import MissionCenter from './views/MissionCenter'
import MissionItem from './views/MissionItem'
import StatisticsItem from './views/StatisticsItem'
import MissionChart from './views/MissionChart'
import AccountManage from './views/AccountManage'
import PersonalSettings from './views/PersonalSettings'
import StaffManage from './views/StaffManage'
import StaffMission from './views/StaffMission'
import test from './views/test'

import Login from './views/login/Login'

const routes = [
  { path: '/', redirect: '/index/MissionCenter' },
  { path: '/Login', component: Login },
  { path: '/index', component: MainPage,
    children: [
      { path: 'TodayMission', component: TodayMission, name: 'TodayMission'  },
      { path: 'MissionAlter', component: MissionAlter, name: 'MissionAlter' },
      { path: 'MissionCenter', component: MissionCenter, name: 'MissionCenter'  },
      { path: 'MissionItem', component: MissionItem, name: 'MissionItem' },
      { path: 'StatisticsItem', component: StatisticsItem, name: 'StatisticsItem'  },
      { path: 'MissionChart', component: MissionChart },
      { path: 'PersonalSettings', component: PersonalSettings },
      { path: 'AccountManage', component: AccountManage },
      { path: 'StaffManage', component: StaffManage },
      { path: 'StaffMission', component: StaffMission, name: 'StaffMission' },
      { path: 'test', component: test }
    ]
  }
]

export default new VueRouter({
  routes
})
