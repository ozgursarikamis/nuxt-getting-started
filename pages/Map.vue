<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

console.log(runtimeConfig.GoogleMapsKey);
console.log(runtimeConfig.public.apiBase);
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>