<template>
  {{ store.count }}

  <button @click="increment()">+ Increment</button>
  <button @click="decrement()">- Decrement</button>
</template>

<script setup>

import { useCounterStore } from './stores/counter';

console.log({
  message: 'Hello from app.vue'
})

const store = useCounterStore();

const increment = () => {
  store.increment();
}

const decrement = () => {
  store.decrement();
}
</script>