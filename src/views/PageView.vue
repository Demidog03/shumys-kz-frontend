<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const title = route.meta.title as string
</script>

<template>
  <div class="page">
    <h1 class="page__title">{{ title }}</h1>
  </div>
</template>

<style scoped>
.page__title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  color: #111827;
}
</style>
