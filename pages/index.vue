<script setup lang="ts">
import Map from '~/components/Map.vue';

</script>

<template>
  <Header />
  <Map class="h-full w-full" />
</template>

<style>
footer {
  margin-top: 3rem;
  padding: 1rem;
  background-color: #eee;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
