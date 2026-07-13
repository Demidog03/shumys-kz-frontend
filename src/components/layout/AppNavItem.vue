<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { NavItem } from '@/config/navigation'
import NavIcon from './NavIcon.vue'

const props = defineProps<{
  item: NavItem
}>()

const route = useRoute()

const isActive = computed(() => route.name === props.item.name)
</script>

<template>
  <RouterLink
    :to="{ name: item.name }"
    class="nav-item"
    :class="{ 'nav-item--active': isActive }"
  >
    <NavIcon :name="item.icon" />
    <span class="nav-item__label">{{ item.label }}</span>
  </RouterLink>
</template>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  color: #6b7280;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
}

.nav-item:hover {
  color: #374151;
}

.nav-item--active {
  color: #2563eb;
  font-weight: 600;
}

.nav-item--active:hover {
  color: #2563eb;
}
</style>
