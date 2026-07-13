<script setup lang="ts">
import { navItems } from '@/config/navigation'
import AppNavItem from './AppNavItem.vue'
import UserProfileCard from './UserProfileCard.vue'
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar__nav">
      <AppNavItem
        v-for="item in navItems"
        :key="item.name"
        :item="item"
      />
    </nav>

    <div class="sidebar__footer">
      <UserProfileCard />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100vh;
  padding: 24px 16px 20px;
  background: #ffffff;
  border-right: 1px solid #f3f4f6;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.sidebar__footer {
  margin-top: auto;
  padding-top: 24px;
}
</style>
