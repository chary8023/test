import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../pages/Index'),
    children: [
      // 商品管理子菜单路由
      { path: '/index/goods', component: () => import('../pages/index/goods/Goods.vue') },
      { path: '/index/goodsadd', component: () => import('../pages/index/goods/GoodsAdd.vue') },
      // 进货管理子菜单路由
      { path: '/index/instore', component: () => import('../pages/index/instore/Instore.vue') },
      { path: '/index/instoreadd', component: () => import('../pages/index/instore/Instoreadd.vue') },
      // 出货子菜单路由
      { path: '/index/goodsout', component: () => import('../pages/index/outstore/GoodsOut.vue') },
      { path: '/index/goodsreturn', component: () => import('../pages/index/outstore/GoodsReturn.vue') },
      { path: '/index/salelist', component: () => import('../pages/index/outstore/SaleList.vue') },
      // 统计管理子菜单路由
      { path: '/index/salesta', component: () => import('../pages/index/statistic/SaleSta.vue') },
      { path: '/index/instoresta', component: () => import('../pages/index/statistic/InstoreSta.vue') },
      // 账户管理子菜单路由
      { path: '/index/account', component: () => import('../pages/index/account/Account.vue') },
      { path: '/index/accountadd', component: () => import('../pages/index/account/AccountAdd.vue') },
      { path: '/index/accountpwd', component: () => import('../pages/index/account/AccountPwd.vue') },
      // 会员管理子菜单路由
      { path: '/index/VIP', component: () => import('../pages/index/VIP/VIP.vue') },
      { path: '/index/VIPAdd', component: () => import('../pages/index/VIP/VIPAdd.vue') },

      // 用户头像上传
      { path: '/index/Userheadpic', component: () => import('../pages/index/userHeadPic/Userheadpic') },
    ]
  }
]

const router = new VueRouter({
  routes
})



export default router
