<script setup lang="ts">
import { navItems } from '@/config/navigation'
import AppNavItem from './AppNavItem.vue'
import UserProfileCard from './UserProfileCard.vue'
</script>

<template>
  <aside class="sidebar">

    <div class="sidebar-logo">
      <span class="logo-text">Shumys<span class="logo-accent">.kz</span></span>
   </div>

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
.sidebar-logo {
  padding: 13px 0 12px 21px; 
}

.logo-text,
.logo-accent {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
}
.logo-text {
  color: #5060FF;
}

.logo-accent {
  color: #000000;
}

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
