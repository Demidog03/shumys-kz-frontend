<script setup lang="ts">
defineProps<{
  name?: string
  role?: string
  avatarUrl?: string
}>()
</script>

<template>
  <div class="profile-card">
    <div class="profile-card__avatar-wrap">
      <img
        class="profile-card__avatar"
        :src="avatarUrl ?? 'https://i.pravatar.cc/80?img=32'"
        :alt="name ?? 'User avatar'"
      />
      <span class="profile-card__status" aria-label="Online status" />
    </div>

    <div class="profile-card__info">
      <div class="profile-card__name-row">
        <span class="profile-card__name">{{ name ?? 'Alexis Wolen' }}</span>
        <button type="button" class="profile-card__menu" aria-label="Profile options">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="5" r="1.75" />
            <circle cx="12" cy="12" r="1.75" />
            <circle cx="12" cy="19" r="1.75" />
          </svg>
        </button>
      </div>
      <span class="profile-card__role">{{ role ?? 'UX Designer' }}</span>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
}

.profile-card__avatar-wrap {
  position: relative;
  flex-shrink: 0;
}

.profile-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.profile-card__status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: #ef4444;
}

.profile-card__info {
  flex: 1;
  min-width: 0;
}

.profile-card__name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.profile-card__name {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.profile-card__role {
  display: block;
  margin-top: 2px;
  font-size: 13px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.profile-card__menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: #9ca3af;
  padding: 0;
}

.profile-card__menu svg {
  width: 16px;
  height: 16px;
}

.profile-card__menu:hover {
  color: #6b7280;
}
</style>
