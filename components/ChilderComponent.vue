<script setup lang="ts">
import { inject } from 'vue';

const foo = inject('foo');

</script>

<template>
    <div>
        Childer Component: {{ foo }}
    </div>
</template>