<script setup lang="ts">
import type { NavItem } from '@/config/navigation'

defineProps<{
  name: NavItem['icon']
}>()
</script>

<template>
  <svg
    class="nav-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      v-if="name === 'home'"
      d="M12 3.172 4 9.172V20a1 1 0 0 0 1 1h5v-6h4v6h5a1 1 0 0 0 1-1V9.172L12 3.172ZM11 21H7v-6h4v6Zm2 0v-6h4v6h-4ZM5 10.172 12 4.343l7 5.829V19h-3v-6H10v6H5v-8.828Z"
    />
    <path
      v-else-if="name === 'search'"
      d="M10.5 3a7.5 7.5 0 1 0 4.73 13.36l4.25 4.25a1 1 0 0 0 1.42-1.42l-4.25-4.25A7.47 7.47 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"
    />
    <path
      v-else-if="name === 'briefcase'"
      d="M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2Zm2-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H10V5ZM6 9v10h12V9H6Z"
    />
    <path
      v-else-if="name === 'activity'"
      d="M5 19h14a1 1 0 0 0 1-1v-1H4v1a1 1 0 0 0 1 1Zm2.5-8.5 2.5 3 3.5-4.5 4.5 6H5l2.5-4.5ZM4 7a1 1 0 0 0-1 1v7h16V8a1 1 0 0 0-1-1H4Z"
    />
    <path
      v-else-if="name === 'messages'"
      d="M6 4h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v9h1.17L8 16.83V15h10V6H6Zm3 3h6v2H9V9Zm0 3h4v2H9v-2Z"
    />
    <path
      v-else-if="name === 'reports'"
      d="M5 4h3v16H5V4Zm6 6h3v10h-3V10Zm6-4h3v14h-3V6Z"
    />
  </svg>
</template>

<style scoped>
.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
</style>
