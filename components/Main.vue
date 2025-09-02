<script setup lang="ts">
import { ref, watch } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

setTimeout(() => {
    count.value = Math.random();
}, 1500);

// watch for changes for count:
watch(count, (newCount) => {
    console.log('count changed', newCount);
});
</script>
<template>
<div>
    Count: {{  count }} <br>
    Double Count: {{ doubleCount }}
</div>
</template>

<style scoped>
* {
    padding: 1rem;
}
</style>