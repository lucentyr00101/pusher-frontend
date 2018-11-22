import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history',
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
          name: 'realtime-app',
          component: () => import('@/views/users')
        },
        {
          path: 'users/:id',
          name: 'user-show',
          component: () => import('@/views/user-show')
        },
        {
          path: 'users/:id/edit',
          name: 'user-edit',
          component: () => import('@/views/user-edit')
        }
      ]
    }
  ]
})
