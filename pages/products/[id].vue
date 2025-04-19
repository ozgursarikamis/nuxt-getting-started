<template>
    <Head>
        <Title>Nuxt Dojo | {{  product.title }}</Title>
    </Head>
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

    if(!product.value) {
        throw createError({ statusCode: 404, statusMessage: "I have no idea what you're talking about...", fatal: true });
    }
    definePageMeta({
        layout: 'products'
    });
</script>