<template>
  <header class="header">
    <div class="header-inner">
      <!-- 로고 / 서비스명 -->
      <div class="logo" @click="goHome">
        <span class="logo-icon">🗺</span>
        <span class="logo-text">AI 스터디 시작해보기</span>
      </div>

      <!-- 네비게이션 -->
      <nav class="nav">
        <RouterLink to="/" class="nav-link">홈</RouterLink>
        <RouterLink to="/map" class="nav-link">지도</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
}

.logo-icon {
  font-size: 22px;
}

.logo-text {
  font-size: 16px;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.02em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 14px;
  color: #555;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}

.nav-link:hover {
  background: #f5f5f5;
  color: #111;
}

.nav-link.router-link-active {
  background: #EBF4FF;
  color: #1A56DB;
  font-weight: 500;
}
</style>