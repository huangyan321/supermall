import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Shopcart = () => import('views/shopcart/Shopcart')
const Detail = () => import('views/detail/Detail')
Vue.use(Router)
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
export default new Router({
  routes,
  mode: 'hash'
})
