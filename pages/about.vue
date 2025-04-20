<template>
    <h1>About</h1>

    <br>

    {{ data }}
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=SponsorMap');
</script>