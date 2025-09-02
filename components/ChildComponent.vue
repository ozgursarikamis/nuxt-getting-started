<script setup lang="ts">
// To inject data provided by an ancestor component, use the inject() function:

import { inject } from 'vue';

const foo = inject('foo');

</script>

<template>
    <div>
        Child Component
    </div>
    Reading from parent: {{ foo }}
</template>