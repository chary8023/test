import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/index.less'
import {getToken} from './apis/api'

Vue.use(ElementUI);

Vue.config.productionTip = false

// 设置全局路由拦截，在所有的hash地址切换之前，都会触发这个钩子函数
// router.beforeEach(function (to, from, next) {
//   // to表示即将要跳转进入的路由对象
//   // from表示从哪个路由跳转过来的，离开的路由对象
//   // next表示跳转到当前路由对象，即执行下一步，不执行next函数则不会跳转
//   console.log(to)
//   console.log(from)
//   console.log(next)
//   if (to.meta.required_login) {
//     next("login")
//   }
//   next()
// })

// 设置全局路由拦截
router.beforeEach((to,from,next)=>{
  if(to.path!='/'){//如果不是登录页面
    // 验证token，通过getToken获取token
    getToken(localStorage.token).then(res=>{
      if(res.data=="timeout"){//token超时，返回到登录页面
        next('/')
      }else{ //不超时，跳转下一步
        next()
      }
    })
  }else{ //是登陆页面，执行next下一步
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
