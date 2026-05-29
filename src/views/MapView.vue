<template>
  <div class="page">
    <Header />
  
    <div class="map-page">
      <div ref="mapRef" class="map-canvas" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { basemap } from '@/composables/basemap'
import Header from '@/components/Header.vue'

const mapRef = ref(null)
const { initMap } = basemap()

onMounted(() => {
  initMap(mapRef.value)
})
</script>

<style scoped>
.map-page {
  width: 100%;
  height: 100vh;
}

.map-canvas {
  width: 100%;
  height: 100%;
}

.page {
  min-height: 100vh;
  background: #f8f9fa;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px 60px;
}
</style>