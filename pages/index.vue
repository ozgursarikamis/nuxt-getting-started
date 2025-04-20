<template>
    <h1>Page Index</h1>
    <br>
    <UButton>
        <i class="material-icons">shopping_cart</i>
        Home
    </UButton>
    <UButton v-on:click="navigateTo('/about')">
        <i class="material-icons">list_alt</i>
        About
    </UButton>
    <UButton v-on:click="goToProducts()">
        <i class="material-icons">shopping_bag</i>
        Products
    </UButton>
</template>

<script setup>

const goToProducts = () => {
    // Option 1:
    // navigateTo('/products');

    // Option 2:
    const router = useRouter();
    router.push('/products');
}

</script>