<template>
  <div class="page">
    <Header />

    <main class="main">
      <!-- 서비스 소개 -->
      <section class="hero">
        <h1 class="hero-title">
          AI 공부 프로젝트
        </h1>
        <p class="hero-desc">
          AI 공부를 위한 프로젝트입니다.<br />
          일단 시작해
        </p>

        <!-- 지도로 이동 버튼 -->
        <button class="btn-primary" @click="goToMap">
          지도 화면으로 시작하기 →
        </button>
      </section>

      <!-- 기능 소개 카드 -->
      <section class="features">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <div class="feature-title">{{ feature.title }}</div>
          <div class="feature-desc">{{ feature.desc }}</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'

const router = useRouter()

function goToMap() {
  router.push('/map')
}

const features = [
  {
    icon: '📍',
    title: '필지 선택',
    desc: '지도에서 원하는 토지를 클릭하거나 주소로 검색하세요.',
  },
  {
    icon: '🧠',
    title: 'AI 자동 판단',
    desc: 'AI가 법령·조례를 분석하여 인허가 가능 여부를 판정합니다.',
  },
  {
    icon: '📄',
    title: '근거 조문 제공',
    desc: '판정 결과에 적용된 법령 조문을 근거로 함께 제공합니다.',
  },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f8f9fa;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px 60px;
}

/* 히어로 */
.hero {
  text-align: center;
  margin-bottom: 72px;
}

.hero-title {
  font-size: 42px;
  font-weight: 800;
  color: #111;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 17px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 36px;
}

.btn-primary {
  display: inline-block;
  padding: 14px 32px;
  background: #1A56DB;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}

.btn-primary:hover {
  background: #1447BE;
  transform: translateY(-1px);
}

/* 기능 카드 */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
  transition: box-shadow 0.15s, transform 0.15s;
}

.feature-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 14px;
}

.feature-title {
  font-size: 16px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 반응형 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 28px;
  }

  .features {
    grid-template-columns: 1fr;
  }
}
</style>