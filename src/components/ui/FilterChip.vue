<script setup lang="ts">
import Button from 'primevue/button'

defineProps<{
  label: string
  isActive: boolean
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <Button
    type="button"
    :label="label"
    rounded
    :outlined="!isActive"
    :severity="isActive ? 'primary' : 'secondary'"
    @click="$emit('toggle')"
  />
</template>
