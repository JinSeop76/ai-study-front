import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/map',
    name: 'map',
    // 지도 페이지는 나중에 만들 예정 — 지금은 lazy load로 선언만
    component: () => import('@/views/MapView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router