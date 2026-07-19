<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
</script>

<template>
  <div class="login-page">
    <div class="left-side">
      <div class="circle-top"></div>
      <div class="circle-bottom"></div>
      <h2 class="logo">Shumys.kz</h2>

      <div class="hero-text">
        <h1 class="hero-title">
          Find work that<br />
          works for you.
        </h1>
        <p class="hero-subtitle">
          Thousands of design and product roles from top companies — all in one calm, focused place.
        </p>
      </div>

      <div class="job-conteiner">
        <div class="job-card">
          <div class="icon-circle">
            <span class="icon-letter">G</span>
          </div>
          <div>
            <p class="company">Google Inc.</p>
            <p class="role">UX Designer, Google Pay</p>
          </div>
          <p class="salary">$120k/yr</p>
        </div>

        <div class="job-card">
          <div class="icon-circle">
            <span class="icon-letter">f</span>
          </div>
          <div>
            <p class="company">Facebook</p>
            <p class="role">Product Manager - Reality Labs</p>
          </div>
          <p class="salary">$100k/yr</p>
        </div>
      </div>
    </div>

    <div class="right-side">
      <div class="tabs">
        <button class="tab-btn active">Log in</button>
        <button class="tab-btn">Sign up</button>
      </div>

      <h2 class="welcome-title">Welcome back</h2>
      <p class="welcome-subtitle">Log in to keep exploring roles picked for you.</p>

      <form>
        <label for="email" class="text">Email address</label>
        <InputText id="email" placeholder="you@example.com" />

        <label for="password" class="text">Password</label>
        <Password id="password" placeholder="••••••••" toggleMask />

        <div class="row">
          <Checkbox inputId="remember" binary />
          <label for="remember">Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <Button label="Log in" class="login-btn" />

        <p class="bottom-text">
          Don't have an account?
          <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.left-side {
  width: 563.41px;
  height: 720px;
  background: #6366f1;
  color: white;
  padding: 40px;
  border-radius: 16px 0 0 16px;
  position: relative;
  overflow: hidden;
}

.circle-top {
  position: absolute;
  width: 280px;
  height: 280px;
  top: -90px;
  left: 353.41px;
  border-radius: 50px;
  background: #ffffff;
  opacity: 0.08;
}

.circle-bottom {
  position: absolute;
  width: 320px;
  height: 320px;
  top: 520px;
  left: -60px;
  border-radius: 50px;
  background: #ffffff;
  opacity: 0.06;
}
.logo {
  width: 484.51px;
  height: 31px;
  margin-top: 48px;
  margin-left: 44px;
  font-size: 26px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
}
.hero-text {
  max-width: 476px;
  margin-top: 45.8px;
  margin-left: 44px;
  margin-bottom: 197.8px;
}
.hero-title {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 38px;
  line-height: 43.7px;
  letter-spacing: -0.76px;
  margin: 0;
}
.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0%;
  max-width: 348px;
  margin-top: 15.4px;
}
.job-conteiner {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 48px;
  margin-left: 44px;
}
.job-card {
  background: white;
  color: #1f2333;
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 74px;
  box-sizing: border-box;
}

.icon-circle {
  width: 46px;
  height: 46px;
  margin-top: 14px;
  margin-left: 16px;
  border-radius: 16px;
  background: #f1f3f9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-letter {
  font-family: 'Inter', sans-serif;
  color: #4285f4;
  font-weight: 700;
  font-size: 20px;
}

.company {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin: 0;
}

.role {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #8a90a6;
  margin: 0;
}

.salary {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 13px;
  margin-left: auto;
  font-weight: bold;
}

.right-side {
  max-width: 563.41px;
  height: 720px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 16px 16px 0;
  box-shadow: 0 4px 20px gray;
  background: white;
  text-align: left;
  gap: 24px;
}

.tabs {
  display: flex;
  width: 260px;
  height: 50px;
  background: #f2f3f9;
  border-radius: 999px;
  padding: 5px;
  box-sizing: border-box;
  gap: 6px;
  margin-bottom: 20px;
}

.tab-btn {
  flex: 1;
  border: none;
  border-radius: 999px;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #9ca3af;
  cursor: pointer;
}

.active {
  background: #ffffff;
  font-weight: 700;
  color: #111827;
  box-shadow: 0 4px 12px rgba(50, 40, 120, 0.12);
}
.welcome-title {
  font-family: 'Inter', sans-serif;
  color: #1f2333;
  font-weight: 700;
  font-size: 28px;
  margin: 0;
  text-align: left;
}
.welcome-subtitle {
  font-family: 'Inter', sans-serif;
  width: 432.59px;
  font-weight: 400;
  font-size: 15px;
  color: #8a90a6;
  margin-top: 4px;
  margin-bottom: 28px;
  text-align: left;
}

:deep(.p-inputtext) {
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: 0.8px solid #eceef5;
  background: #f7f8fc;
  padding: 0 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  box-sizing: border-box;
}

:deep(.p-password) {
  width: 100%;
}

:deep(.p-password-input) {
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: 0.8px solid #eceef5;
  background: #f7f8fc;
  padding: 0 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  box-sizing: border-box;
}
form {
  display: flex;
  flex-direction: column;
  gap: 16.8px;
  width: 100%;
  max-width: 424.59px;
}

.text {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #5b6172;
  line-height: 120%;
  margin-bottom: 2px;
  display: block;
}

.row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
}

.row a {
  margin-left: auto;
  color: #6366f1;
  text-decoration: none;
}

.login-btn {
  width: 100%;
  height: 52px;
  background: #6366f1;
  border: none;
  border-radius: 12px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
}

.bottom-text {
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #6b7280;
}

.bottom-text a {
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 1100px) {
  .login-page {
    flex-direction: column;
    height: auto;
    align-items: center;
  }

  .left-side,
  .right-side {
    width: 100%;
    max-width: 536px;
    height: auto;
    border-radius: 16px;
  }
}

@media (max-width: 900px) {
  .left-side,
  .right-side {
    padding: 32px 24px;
  }

  .job-card {
    flex-wrap: wrap;
  }

  .salary {
    margin-left: 0;
    width: 100%;
    text-align: right;
  }

  .logo,
  .hero-text,
  .job-conteiner {
    margin-left: 0;
  }
}

@media (max-width: 500px) {
  .hero-title {
    font-size: 28px;
  }

  form {
    max-width: 100%;
  }

  .row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
