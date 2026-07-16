<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits([
  'change-tab',
  'change-sort'
])

const activeTab = ref('popular')
const selectedSort = ref('newest')
const showSortList = ref(false)

const sortOptions = [
  {
    name: 'Newest',
    value: 'newest'
  },
  {
    name: 'Oldest',
    value: 'oldest'
  },
  {
    name: 'Relevance',
    value: 'relevance'
  }
]

function changeTab(tab: string) {
  activeTab.value = tab
  emit('change-tab', tab)}
function openSortList() {
  showSortList.value = !showSortList.value}
function changeSort(sort: string) {
  selectedSort.value = sort
  showSortList.value = false

  emit('change-sort', sort)}
function getSortName() {
  const option = sortOptions.find(item => item.value === selectedSort.value)
  return option ? option.name : 'Newest'}
</script>
<template>
  <div class="jobs-header">
    <div class="tabs">
      <button
        class="tab"
        :class="{ active: activeTab === 'jobs-for-you' }"
        @click="changeTab('jobs-for-you')">
        Jobs For You
      </button>
      <button
        class="tab"
        :class="{ active: activeTab === 'popular' }"
        @click="changeTab('popular')">
        Popular
      </button>
    </div>
    <div class="sort">
      <span class="sort-label">Sort:</span>
      <div class="sort-dropdown">
        <button
          class="sort-button"
          @click="openSortList">{{ getSortName() }}
          <span class="arrow" :class="{ opened: showSortList }">▼</span>
        </button>
        <div
          v-if="showSortList"
          class="sort-list">
          <button
            v-for="option in sortOptions"
            :key="option.value"
            class="sort-option"
            :class="{ selected: selectedSort === option.value }"
            @click="changeSort(option.value)">
            {{ option.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jobs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 52px;
  padding: 0 16px;
  border-bottom: 1px solid #e5e7eb;
  background: white;
}

.tabs {
  display: flex;
  gap: 18px;
}

.tab {
  position: relative;
  padding: 17px 0;
  color: #8a94a6;
  font-size: 14px;
}

.tab.active {
  color: #356ae6;
  font-weight: 600;
}

.tab.active::after {
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  height: 2px;
  background: #356ae6;
  content: '';
}

.sort {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sort-label {
  color: #8a94a6;
  font-size: 13px;
}

.sort-dropdown {
  position: relative;
}

.sort-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 105px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid #d9dee8;
  border-radius: 20px;
  color: #3d4655;
  font-size: 13px;
  background: white;
}

.arrow {
  color: #6f7887;
  font-size: 9px;
  transition: 0.2s;
}

.arrow.opened {
  transform: rotate(180deg);
}

.sort-list {
  position: absolute;
  z-index: 10;
  top: 38px;
  right: 0;
  width: 140px;
  padding: 5px;
  border: 1px solid #e1e5ec;
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.sort-option {
  width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  color: #4b5563;
  font-size: 13px;
  text-align: left;
}

.sort-option:hover {
  background: #f3f6fb;
}

.sort-option.selected {
  color: #356ae6;
  background: #eef4ff;
}

@media (max-width: 520px) {
  .jobs-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .tab {
    padding: 8px 0;
  }

  .sort {
    justify-content: space-between;
    width: 100%;
  }
}
</style>
