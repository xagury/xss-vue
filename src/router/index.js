import Vue from 'vue'
import Router from 'vue-router'

import '../../static/bootstrap.min.css'


import Home from '../components/Home'
import My from '../components/My'
import Pay from '../components/Pay'
import Details from '../components/Details'
import DetailsBrand from '../components/DetailsBrand'
import Login from '../components/Login'
import ShopDetail from '../components/ShopDetail'
import ShowCart from '../components/ShowCart'
import Product from '../components/Product'
import LoginPsd from '../components/LoginPsd'
import Search from '../components/Search'



let name = localStorage.getItem('username');
Vue.use(Router)

//路由表
let options = {
  routes: [{
      name: 'home',
      path: '/home',
      component: Home
    },
    {

      path: '/',
      redirect: '/home'
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'loginPsd',
      path: '/loginPsd',
      component: LoginPsd
    },
    {
      name: 'pay',
      path: '/pay',
      component: Pay
    },
    {
      name: 'shopdetail',
      path: '/shopdetail',
      component: ShopDetail
    },

    {
      name: 'product',
      path: '/product',
      component: Product,
      //二级路由
      children: [{
        name: "details",
        path: 'details/:id',
        component: Details,
      }, {
        name: "detailsBrand",
        path: 'detailsBrand/:id',
        component: DetailsBrand,
      }]
    },
    {
      name: 'showcart',
      path: '/showcart',
      component: ShowCart,
      beforeEnter: (to, from, next) => {
        if (name) {
          setTimeout(() => {
            next()
          }, 2000)
          return;
        }
        next('/login')
      }
    },
    {
      name: 'my',
      path: '/my',
      component: My
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    },
    {
      name: 'error',
      path: '/error',
      component: Error
    },
    {
      path: '/**',
      redirect: '/error' //路由重定向
    }
  ],
  mode: 'history'
}



//得到路由对象 routes:路由表
let router = new Router(options)



//导出路由对象
export default router
