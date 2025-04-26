<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';
const store = useCounterStore();
</script>

<template>
  Component 2 {{ store.count }}
</template>

<style scoped>

</style>