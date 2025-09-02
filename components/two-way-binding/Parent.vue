<script setup lang="ts">
import Child from './Child.vue';
const name = ref<string>('Ozgur');
</script>

<template>
    Name in parent component is <b>{{ name }}</b>
    <br>
    <Child v-model="name" />
</template>