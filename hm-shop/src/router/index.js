import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import Prodetail from '@/views/prodetail'
import Pay from '@/views/pay'
import Myorder from '@/views/myorder'
import Home from '@/views/layout/home'
import Cart from '@/views/layout/cart'
import Category from '@/views/layout/category'
import User from '@/views/layout/user'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/cart', component: Cart },
      { path: '/category', component: Category },
      { path: '/user', component: User }
    ]
  },
  { path: '/search', component: Search },
  { path: '/searchlist', component: SearchList },
  { path: '/prodetail/:id', component: Prodetail },
  { path: '/pay', component: Pay },
  { path: '/myorder', component: Myorder }

]

const router = new VueRouter({
  routes
})

// 全局前置守卫
const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  // 1. to 往哪里去,from 从哪里来, next() 是否放行，如果next()调用,就是放行,next(路径)拦截到某个路径页面
  const token = store.getters.token
  if (!authUrl.includes(to.path)) { // 如果不在 authUrl里面，则直接访问
    next()
    return
  }
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
