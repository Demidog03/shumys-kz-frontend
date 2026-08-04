<script setup lang="ts">
interface JobCardProps {
  logoUrl?: string
  companyName: string
  position: string
  location: string
  views: number
  postedLabel: string // "Today", "3 days ago" и т.п.
  employmentType: string // "Full-time", "Part-time"...
  appliedCount: number
  team: string // "Product and Design"
  salaryValue: string // "120k"
  salaryPeriod?: string // "/year"
  isSaved?: boolean
}

withDefaults(defineProps<JobCardProps>(), {
  logoUrl: '',
  salaryPeriod: '/year',
  isSaved: false,
})

defineEmits<{
  (e: 'toggle-save'): void
  (e: 'open-menu'): void
}>()
</script>

<template>
  <article class="job-card">
    <div class="job-card__left">
      <div class="job-card__logo">
        <img v-if="logoUrl" :src="logoUrl" :alt="companyName" />
        <span v-else class="job-card__logo-fallback">{{ companyName.charAt(0) }}</span>
      </div>

      <div class="job-card__texts">
        <h3 class="job-card__company">{{ companyName }}</h3>
        <p class="job-card__position">{{ position }}</p>

        <div class="job-card__meta-row">
          <span class="job-card__meta-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path
                d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
                stroke="currentColor"
                stroke-width="1.6"
              />
              <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.6" />
            </svg>
            {{ location }}
          </span>

          <span class="job-card__meta-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path
                d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
                stroke="currentColor"
                stroke-width="1.6"
              />
              <circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.6" />
            </svg>
            {{ views }} views
          </span>
        </div>

        <div class="job-card__meta-row">
          <span>{{ postedLabel }}</span>
          <span class="job-card__dot">•</span>
          <span>{{ employmentType }}</span>
          <span class="job-card__dot">•</span>
          <span>{{ appliedCount }} applied</span>
        </div>
      </div>
    </div>

    <div class="job-card__right">
      <span class="job-card__team-label">Team</span>
      <span class="job-card__team-name">{{ team }}</span>
      <p class="job-card__salary">
        {{ salaryValue }}<span class="job-card__salary-period">{{ salaryPeriod }}</span>
      </p>
    </div>

    <div class="job-card__actions">
      <button
        type="button"
        class="job-card__icon-btn job-card__icon-btn--bookmark"
        :class="{ 'job-card__icon-btn--active': isSaved }"
        :aria-pressed="isSaved"
        aria-label="Сохранить вакансию"
        @click="$emit('toggle-save')"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v16l-6-4-6 4v-16Z"
            :fill="isSaved ? 'currentColor' : 'none'"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        class="job-card__icon-btn job-card__icon-btn--menu"
        aria-label="Открыть меню"
        @click="$emit('open-menu')"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <circle cx="12" cy="6" r="1.6" fill="currentColor" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
          <circle cx="12" cy="18" r="1.6" fill="currentColor" />
        </svg>
      </button>
    </div>
  </article>
</template>

<style scoped>
.job-card {
  --jc-ink: #1d1f2c;
  --jc-muted: #7c8493;
  --jc-line: #e5e7eb;
  --jc-accent: #5b4fe9;
  --jc-logo-bg: #d8e3ff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  row-gap: 20px;
  flex-wrap: wrap;
  padding: 32px 40px;
  background: #ffffff;
  border: 2px solid #14151a;
  border-radius: 40px;
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
}

.job-card__left {
  display: flex;
  align-items: center;
  gap: 24px;
  min-width: 0;
}

.job-card__logo {
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  border-radius: 22px;
  background: var(--jc-logo-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.job-card__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.job-card__logo-fallback {
  font-size: 28px;
  font-weight: 700;
  color: var(--jc-accent);
}

.job-card__texts {
  min-width: 0;
}

.job-card__company {
  margin: 0 0 4px;
  font-size: 26px;
  font-weight: 800;
  color: var(--jc-ink);
  white-space: nowrap;
}

.job-card__position {
  margin: 0 0 12px;
  font-size: 18px;
  color: var(--jc-muted);
}

.job-card__meta-row {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 15px;
  color: var(--jc-muted);
  margin-bottom: 8px;
}

.job-card__meta-row:last-child {
  margin-bottom: 0;
  gap: 10px;
}

.job-card__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.job-card__dot {
  color: #c9ccd3;
}

.job-card__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

.job-card__team-label {
  font-size: 14px;
  color: var(--jc-muted);
}

.job-card__team-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--jc-ink);
}

.job-card__salary {
  margin: 6px 0 0;
  font-size: 22px;
  font-weight: 800;
  color: var(--jc-accent);
}

.job-card__salary-period {
  font-size: 15px;
  font-weight: 400;
  color: var(--jc-muted);
  margin-left: 4px;
}

.job-card__actions {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  align-self: flex-start;
}

.job-card__icon-btn {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1.5px solid var(--jc-line);
  background: #ffffff;
  color: var(--jc-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease;
}

.job-card__icon-btn--bookmark:hover,
.job-card__icon-btn--bookmark.job-card__icon-btn--active {
  border-color: var(--jc-accent);
  color: var(--jc-accent);
}

.job-card__icon-btn--menu {
  border-radius: 50%;
  background: var(--jc-ink);
  border-color: var(--jc-ink);
  color: #ffffff;
}

.job-card__icon-btn--menu:hover {
  background: #000000;
}

.job-card__icon-btn:focus-visible {
  outline: 2px solid var(--jc-accent);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .job-card {
    padding: 24px;
    border-radius: 28px;
  }

  .job-card__left {
    flex-basis: 100%;
  }

  .job-card__right {
    align-items: flex-start;
    flex-basis: 100%;
  }

  .job-card__actions {
    order: -1;
    margin-left: auto;
  }
}
</style>
