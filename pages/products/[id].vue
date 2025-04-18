<template>
    Product Details for {{ converted }}
</template>

<script setup>
    const { id } = useRoute().params;
    const converted = Number(id);
</script>