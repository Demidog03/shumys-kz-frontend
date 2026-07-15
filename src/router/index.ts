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
        
      ],
    },
  ],
})

export default router
