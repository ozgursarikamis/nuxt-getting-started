<template>
    <div>
        <UAlert color="neutral" :title="error?.message" />
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>