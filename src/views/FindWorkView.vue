<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '@/components/ui/SearchInput.vue'

const query = ref('')

function onSearch(value: string) {
  console.log('поиск...: ', value)
}
</script>

<template>
  <div class="find-work">
    <h1 class="find-work__title">Найти работу</h1>

    <SearchInput v-model="query" placeholder="Найти вакансию, компанию..." @search="onSearch" />
  </div>
</template>

<style scoped>
.find-work {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.find-work__title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  color: #111827;
}
</style>
