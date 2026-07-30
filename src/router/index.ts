import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import PageView from '@/views/PageView.vue'
import MyJobsView from '@/views/MyJobsView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { title: 'login' },
    },
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: 'find-work',
          name: 'find-work',
          component: PageView,
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
