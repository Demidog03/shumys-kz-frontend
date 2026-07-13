<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
</script>

<template>
  <div class="app-layout">
    <AppSidebar />
    <main class="app-layout__main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background: #ffffff;
}

.app-layout__main {
  flex: 1;
  min-width: 0;
  padding: 32px 40px;
  background: #ffffff;
}
</style>
