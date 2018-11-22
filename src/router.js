import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/components/home'),
      name: 'home'
    },
    {
      path: '/realtime-app-pusher',
      component: () => import('@/base/realtime-app'),
      children: [
        {
          path: 'users',
          name: 'realtime-posts',
          component: () => import('@/components/users')
        },
        {
          path: 'users/:id',
          name: 'single-post',
          component: () => import('@/components/single-user')
        }
      ]
    }
  ]
})
