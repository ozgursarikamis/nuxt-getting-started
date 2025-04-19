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
</script>