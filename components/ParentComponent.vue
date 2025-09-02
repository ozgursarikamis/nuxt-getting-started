<script setup lang="ts">
// To provide data to a component's descendants, use the provide() function:

import { provide } from 'vue';

const reactiveText = ref<string>('');

provide('foo', reactiveText);

</script>
<template>
    <div>
        Parent Component
        <UInput color="neutral" variant="subtle" placeholder="Search..." v-model="reactiveText" />
    </div>
    <div>
        <child-component />
    </div>
</template>