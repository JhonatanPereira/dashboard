import Vue from 'vue'
import Router from 'vue-router'

// Views - Pages
const Login = () => import('@/views/Login')
const Home = () => import('@/containers/Home')
const Dashboard = () => import('@/views/Dashboard')
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
      path: '/home',
      redirect: '/dashboard',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
