<script setup lang="ts">
let name = defineModel<string>();

setTimeout(() => {
    name.value = 'Ozgur 2'
}, 2000);
</script>

<template>
    Name in child component is: {{ name }}
</template>