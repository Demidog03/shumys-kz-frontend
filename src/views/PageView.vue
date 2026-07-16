<script setup lang="ts">
import { ref } from 'vue'
import JobsResultsHeader from '@/components/JobsResultsHeader.vue'

const activeTab = ref('popular')
const activeSort = ref('newest')

function changeTab(tab: string) {activeTab.value = tab}
function changeSort(sort: string) {activeSort.value = sort}

</script>
<template>
  <div class="page">
    <JobsResultsHeader
      @change-tab="changeTab"
      @change-sort="changeSort" />
    <div class="jobs-list">
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
}

.jobs-list {
  padding: 24px 16px;
}
</style>
