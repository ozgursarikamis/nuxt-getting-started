<template>
    <h1>
        {{  product.title }}
    </h1>
    <NuxtImg :src="`${product.image}`" />
    <p>
        {{ product.rating.rate }} ({{ product.rating.count }})
    </p>
</template>

<script setup>
    const { id } = useRoute().params;
    const converted = Number(id);

    const uri = "https://fakestoreapi.com/products/" + converted;
    const { data: product } = await useFetch(uri);

    definePageMeta({
        layout: 'products'
    });
</script>