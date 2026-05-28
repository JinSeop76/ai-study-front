<template>
  <div class="map-page">
    <div ref="mapRef" class="map-canvas" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { basemap } from '@/composables/basemap'

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
</style>