<script setup lang="ts">
import Button from 'primevue/button'
import FilterChip from './FilterChip.vue'
import type { FilterOption } from '@/constants/mock/filterMock'

const props = defineProps<{
  options: FilterOption[]
  modelValue: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const toggleFilter = (id: string) => {
  const updated = props.modelValue.includes(id)
    ? props.modelValue.filter((item) => item !== id)
    : [...props.modelValue, id]

  emit('update:modelValue', updated)
}

const clearFilters = () => {
  emit('update:modelValue', [])
}
</script>

<template>
  <div class="filter-bar">
    <div class="filter-bar__chips">
      <FilterChip
        v-for="option in options"
        :key="option.id"
        :label="option.label"
        :is-active="modelValue.includes(option.id)"
        @toggle="toggleFilter(option.id)"
      />
    </div>

    <Button
      v-if="modelValue.length > 0"
      type="button"
      label="Clear filters"
      link
      severity="secondary"
      @click="clearFilters"
    />
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
}

.filter-bar__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
