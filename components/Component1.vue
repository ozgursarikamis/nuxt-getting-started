<script setup lang="ts">
import { useCounterStore } from "~/stores/counter";
const store = useCounterStore();
</script>

<template>
  Component 1: {{ store.count }}
</template>

<style scoped>

</style>