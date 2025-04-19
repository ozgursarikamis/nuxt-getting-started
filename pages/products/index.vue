<template>
    <h1>Products</h1>
    <div v-for="product in products">
        <ProductCard :product="product" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
});

// fetch:
const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({ // override what's declared in nuxt.config.js
    title: `Products | Nuxt Dojo`,
    meta: [
        { name: 'description', content: 'Nuxt 3 Merch' }
    ]
});
</script>