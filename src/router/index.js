import { createRouter, createWebHashHistory } from 'vue-router'
import { Toast } from 'vant'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/myHome/MyHome.vue')
    },
    {
      path: '/home',
      component: () => import('../pages/myHome/MyHome.vue')
    },
    {
      path: '/cart',
      component: () => import('../pages/myCart/MyCart.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/order',
      component: () => import('../pages/myOrder/MyOrder.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/mine',
      component: () => import('../pages/mine/Mine.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/store',
      component: () => import('../pages/myStore/MyStore.vue')
    },
    {
      path: '/createorder',
      component: () => import('../pages/createOrder/CreateOrder.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/address',
      component: () => import('../pages/myAddress/Address.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/addressedit',
      component: () => import('../pages/myAddress/components/AddressEdit.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/login',
      component: () => import('../pages/login/Login.vue')
    },
    {
      path: '/register',
      component: () => import('../pages/register/Register.vue')
    },
    {
      path: '/userinfoedit',
      component: () => import('../pages/userinfoedit/userInfoEdit.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.isLogin === '1') {
      next()
    } else {
      Toast('请先登录')
      router.push('./login')
    }
  } else {
    next()
  }
})
export default router
