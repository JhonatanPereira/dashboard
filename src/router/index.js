import Vue from 'vue'
import Router from 'vue-router'

// Views - Pages
const Login = () => import('@/views/Login')
const Dashboard = () => import('@/views/dashboard/Home')
Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard
    }
  ]
})
