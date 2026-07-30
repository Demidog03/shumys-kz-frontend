<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import InputText from 'primevue/inputtext'
import CloseIcon from '@/shared/ui/icons/CloseIcon.vue'
import SearchIcon from '@/shared/ui/icons/SearchIcon.vue'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
  }>(),
  {
    placeholder: 'Search...',
    modelValue: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: [value: string]
}>()

const inputRef = ref<ComponentPublicInstance | null>(null)

const hasText = computed(() => props.modelValue.trim().length > 0)

function onUpdate(value: string | undefined) {
  emit('update:modelValue', value ?? '')
}

function onSearch() {
  emit('search', props.modelValue)
}

function onClear() {
  emit('update:modelValue', '')
  const el = inputRef.value?.$el
  if (el instanceof HTMLElement) {
    el.focus()
  }
}
</script>

<template>
  <div class="search-input">
    <inputText
      ref="inputRef"
      class="search-input__field"
      :model-value="modelValue"
      :placeholder="placeholder"
      autocomplete="off"
      unstyled
      fluid
      @update:model-value="onUpdate"
      @keydown.enter.prevent="onSearch"
    />

    <button
      v-if="hasText"
      type="button"
      class="search-input__clear"
      aria-label="Очистить"
      @click="onClear"
    >
      <CloseIcon />
    </button>

    <button type="button" class="search-input__submit" aria-label="Искать" @click="onSearch">
      <SearchIcon />
    </button>
  </div>
</template>

<style scoped>
.search-input {
  display: flex;
  align-items: stretch;
  gap: 4px;
  width: 100%;
  /* max-width: 560px; */
  /* padding: 6px 6px 6px 20px; */
  min-height: 52px;
  padding: 0 0 0 20px;
  background: #f3f4f6;
  border-radius: 999px;
  overflow: hidden;
}

.search-input__field {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
  line-height: 1.4;
  color: #111827;
}

.search-input__field::placeholder {
  color: #9ca3af;
}

.search-input__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  margin-right: 4px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
}

.search-input__clear:hover {
  color: #111827;
  background: #e5e7eb;
}

.search-input__clear svg {
  width: 16px;
  height: 16px;
}

.search-input__submit {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* width: 44px;
  height: 44px; */
  width: 64px;
  padding: 0;
  border: none;
  /* border-radius: 50%; */
  border-radius: 0 999px 999px 0;
  background: #5060ff;
  color: #ffffff;
  cursor: pointer;
}

.search-input__submit:hover {
  background: #3f4fe6;
}

.search-input__submit svg {
  width: 22px;
  height: 22px;
}
</style>
