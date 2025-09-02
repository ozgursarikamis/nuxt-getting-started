<script setup lang="ts">
// To provide data to a component's descendants, use the provide() function:

import { provide } from 'vue';

provide('foo', 'bar 1234');

</script>
<template>
    <div>
        Parent Component
    </div>
    <div>
        <child-component />
    </div>
</template>