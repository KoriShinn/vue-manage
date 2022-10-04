import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home')
      },
      {
        path: '/mall',
        name: 'Mall',
        component: () => import('@/views/Mall')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/User')
      },
      {
        path: '/page1',
        name: 'Page1',
        component: () => import('@/views/Other/PageOne')
      },
      {
        path: '/page2',
        name: 'Page2',
        component: () => import('@/views/Other/PageTwo')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
