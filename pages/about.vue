<template>
    <h1>About</h1>

    <br>

    {{ data }}
</template>

<script setup>
// const { data } = await useFetch('/api/ninja?name=SponsorMap', {
//     method: 'POST',
//     body: {
//         age: 30
//     }
// });

const { data } = await useFetch('/api/currency/GBP');
</script>