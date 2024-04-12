import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('@/views/RankList.vue')
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('@/views/DailyTask.vue')
  },
  {
    path: '/private',
    name: 'private',
    component: () => import('@/views/Private.vue')
  },
  {
    path: '*',
    name: 'NOT_FOUND',
    redirect: '/'
    // component: () => import('@/views/sys/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
