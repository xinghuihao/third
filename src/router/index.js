import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/Film'
import nowpling from '@/views/film/nowpling'
import comingsoon from '@/views/film/comingsoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import detail from '@/views/Detail'
import login from '@/views/login'
import City from '@/views/City'
Vue.use(Router)

const router = new Router({
  mode: 'history', // 使路径变得好看,否则告诉后端返回一个html页面；
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: 'nowpling',
          component: nowpling
        },
        {
          path: 'comingsoon',
          component: comingsoon
        },
        {
          path: '',
          redirect: '/film/comingsoon'
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/detail/:id', // 动态路由 :myid
      name: 'detail',
      component: detail
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '*',
      redirect: '/film'
    }
  ]
})
// 全局守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/center') {
//     if (auth.islogin()) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })
export default router
