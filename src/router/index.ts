import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import FindWorkView from '@/views/FindWorkView.vue'
import MyJobsView from '@/views/MyJobsView.vue'

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
          component: FindWorkView,
          meta: { title: 'find-work' },
        },
        {
          path: 'my-jobs',
          name: 'my-jobs',
          component: MyJobsView,
          meta: { title: 'my-jobs' },
        },
      ],
    },
  ],
})

export default router
