import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/events',
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/EventsView.vue'),
    },
    {
      path: '/events/:id',
      name: 'event-detail',
      component: () => import('@/views/EventDetailView.vue'),
      props: route => ({ id: Number(route.params.id) }),
    },
    {
      path: '/scanner',
      name: 'scanner',
      component: () => import('@/views/ScannerView.vue'),
    },
  ],
})

export default router
