<script setup lang="ts">
import { computed, ref } from 'vue'

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

const inputRef = ref<HTMLInputElement | null>(null)

const hasText = computed(() => props.modelValue.trim().length > 0)

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

function onSearch() {
  emit('search', props.modelValue)
}

function onClear() {
  emit('update:modelValue', '')
  inputRef.value?.focus()
}
</script>

<template>
  <div class="search-input">
    <input
      ref="inputRef"
      class="search-input__field"
      type="search"
      :value="modelValue"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onInput"
      @keydown.enter.prevent="onSearch"
    />

    <button
      v-if="hasText"
      type="button"
      class="search-input__clear"
      aria-label="Очистить"
      @click="onClear"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <button type="button" class="search-input__submit" aria-label="Искать" @click="onSearch">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          d="M10.5 3a7.5 7.5 0 1 0 4.73 13.36l4.25 4.25a1 1 0 0 0 1.42-1.42l-4.25-4.25A7.47 7.47 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 560px;
  padding: 6px 6px 6px 20px;
  background: #f3f4f6;
  border-radius: 999px;
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

.search-input__field::-webkit-search-cancel-button,
.search-input__field::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.search-input__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
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
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #5060ff;
  color: #ffffff;
  cursor: pointer;
}

.search-input__submit:hover {
  background: #3f4fe6;
}

.search-input__submit svg {
  width: 20px;
  height: 20px;
}
</style>
