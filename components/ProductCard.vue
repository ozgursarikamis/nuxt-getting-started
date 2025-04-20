<template>
  <!-- <UDrawer direction="right" inset>
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"/>

    <template #content>
      Drawer content
    </template>
  </UDrawer> -->
  <UCard variant="soft" style="margin-bottom: 1rem;">
    <template #header>
      <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </template>
    <img :src="product.image" alt="product.title" style="max-height: 4rem;"/>
    <template #footer>
      Footer Content
    </template>
  </UCard>
</template>

<script setup>
const {product} = defineProps(['product']);
</script>