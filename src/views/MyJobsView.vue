<script setup lang="ts">
import JobCard from '@/components/layout/JobCard.vue'

const mockJob = {
  logoUrl: '',
  companyName: 'Google Inc.',
  position: 'UX Designer, Google Pay',
  location: 'Shanghai China',
  views: 240,
  postedLabel: 'Today',
  employmentType: 'Full-time',
  appliedCount: 5,
  team: 'Product and Design',
  salaryValue: '$120k',
  salaryPeriod: '/year',
  isSaved: false,
}
</script>

<template>
  <div style="max-width: 1100px; margin: 40px auto; padding: 0 16px">
    <JobCard
      :logo-url="mockJob.logoUrl"
      :company-name="mockJob.companyName"
      :position="mockJob.position"
      :location="mockJob.location"
      :views="mockJob.views"
      :posted-label="mockJob.postedLabel"
      :employment-type="mockJob.employmentType"
      :applied-count="mockJob.appliedCount"
      :team="mockJob.team"
      :salary-value="mockJob.salaryValue"
      :salary-period="mockJob.salaryPeriod"
      :is-saved="mockJob.isSaved"
    />
  </div>
</template>
