<template>
  <UDrawer direction="right" inset>
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"/>

    <template #content>
      Card Content
    </template>
  </UDrawer>
  <UCard variant="soft">
    <template #header>
      <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </template>

    [Content]

    <template #footer>
      Footer Content
    </template>
  </UCard>
</template>

<script setup>
const {product} = defineProps(['product']);
</script>