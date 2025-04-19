<template>
    <div>
        <UAlert color="neutral" :title="error?.message" />
        <br />
        <UButton color="neutral" @click="handleClearError">Go home</UButton>
    </div>
</template>

<script setup>
defineProps(['error']);

const handleClearError = () => clearError({ redirect: '/' })
</script>