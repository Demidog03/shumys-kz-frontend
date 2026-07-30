<script setup lang="ts"></script>

<template>
  <div class="login-page">
    <div class="auth-card">
      <div class="left-side">
        <div class="shape-top"></div>
        <div class="shape-bottom"></div>

        <h2 class="logo">Shumys.kz</h2>

        <div class="hero-text">
          <h1 class="hero-title">Find work that<br />works for you.</h1>
          <p class="hero-subtitle">
            Thousands of design &amp; product roles from top companies — all in one calm, focused
            place.
          </p>
        </div>

        <div class="job-conteiner">
          <div class="job-card">
            <div class="icon-circle"><span class="icon-letter">G</span></div>
            <div>
              <p class="company">Google Inc.</p>
              <p class="role">UX Designer, Google Pay</p>
            </div>
            <p class="salary">$120k/yr</p>
          </div>

          <div class="job-card">
            <div class="icon-circle"><span class="icon-letter">f</span></div>
            <div>
              <p class="company">Facebook</p>
              <p class="role">Product Manager - Reality Labs</p>
            </div>
            <p class="salary">$100k/yr</p>
          </div>
        </div>
      </div>
      <div class="right-side">
        <h2 class="logo-mobile">Shumys.kz</h2>

        <div class="tabs">
          <button class="tab-btn active">Log in</button>
          <button class="tab-btn">Sign up</button>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  background: #f5f6fa;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  font-family: 'Inter', sans-serif;
}

.auth-card {
  display: flex;
  width: 100%;
  max-width: 1120px;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 20px 60px rgba(31, 35, 51, 0.12);
}

.left-side,
.right-side {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: clamp(28px, 3.5vw, 48px);
}


.left-side {
  background: #6366f1;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.shape-top,
.shape-bottom {
  position: absolute;
  z-index: -1;
  border-radius: 50px;
  background: #fff;
}

.shape-top {
  width: 280px;
  height: 280px;
  top: -90px;
  right: -70px;
  opacity: 0.08;
}

.shape-bottom {
  width: 320px;
  height: 320px;
  left: -60px;
  bottom: -120px;
  opacity: 0.06;
}

.logo {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
}

.hero-text {
  margin-top: 48px;
  color: #fff;
}

.hero-title {
  margin: 0;
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  margin: 16px 0 0;
  max-width: 42ch;
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.9;
}

.job-conteiner {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: auto;
  padding-top: 64px;
}

.job-card {
  background: #fff;
  color: #1f2333;
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.icon-circle {
  flex: 0 0 46px;
  height: 46px;
  display: grid;
  place-items: center;
  background: #f1f3f9;
  border-radius: 6px;
}

.icon-letter {
  color: #4285f4;
  font-weight: 700;
  font-size: 20px;
}

.company {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
}

.role {
  margin: 0;
  font-size: 12px;
  color: #8a90a6;
}

.salary {
  margin-left: auto;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.right-side {
  align-items: center;
  justify-content: center;
}


.tabs {
  display: flex;
  width: 100%;
  max-width: 260px;
  height: 50px;
  background: #f2f3f9;
  border-radius: 999px;
  padding: 5px;
  box-sizing: border-box;
  gap: 6px;
  margin-bottom: 32px;
}

.tab-btn {
  flex: 1;
  display: grid;
  place-items: center;
  border-radius: 999px;
  font-size: 14px;
  color: #9ca3af;
  text-decoration: none;
}

.active {
  background: #fff;
  font-weight: 700;
  color: #111827;
  box-shadow: 0 4px 12px rgba(50, 40, 120, 0.12);
}

.logo-mobile {
  display: none;
}

@media (max-width: 900px) {
  .login-page {
    padding: 0;
    background: #fff;
  }

  .auth-card {
    max-width: 100%;
    min-height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }

  .left-side {
    display: none;
  }

  .right-side {
    justify-content: flex-start;
    padding: 40px 20px;
  }

  .logo-mobile {
    display: block;
    width: 100%;
    max-width: 420px;
    margin: 0 0 24px;
    color: #6366f1;
    font-size: 22px;
  }
}
</style>
