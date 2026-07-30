<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>

<template>
  <AuthLayout>
    <h2 class="welcome-title">Welcome back</h2>
    <p class="welcome-subtitle">Log in to keep exploring roles picked for you.</p>

    <form class="auth-form">
      <label for="email" class="text">Email address</label>
      <InputText id="email" placeholder="you@example.com" autocomplete="email" />

      <label for="password" class="text">Password</label>
      <Password inputId="password" placeholder="••••••••" toggleMask :feedback="false" autocomplete="current-password" />

      <div class="row">
        <Checkbox inputId="remember" binary />
        <label for="remember">Remember me</label>
        <a href="#">Forgot password?</a>
      </div>

      <Button label="Log in" class="submit-btn" />

      <p class="bottom-text">
        Don't have an account?
        <a href="#">Sign up</a>
      </p>
    </form>
  </AuthLayout>
</template>

