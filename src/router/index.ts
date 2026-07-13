import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import PageView from '@/views/PageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: PageView,
          meta: { title: 'Home' },
        },
        {
          path: 'find-work',
          name: 'find-work',
          component: PageView,
          meta: { title: 'Find Work' },
        },
        {
          path: 'my-jobs',
          name: 'my-jobs',
          component: PageView,
          meta: { title: 'My Jobs' },
        },
        {
          path: 'my-activity',
          name: 'my-activity',
          component: PageView,
          meta: { title: 'My Activity' },
        },
        {
          path: 'messages',
          name: 'messages',
          component: PageView,
          meta: { title: 'Messages' },
        },
        {
          path: 'reports',
          name: 'reports',
          component: PageView,
          meta: { title: 'Reports' },
        },
      ],
    },
  ],
})

export default router
