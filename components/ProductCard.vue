<template>
      <UDrawer direction="right" inset>
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

    <template #content>
      <Placeholder class="min-w-96 min-h-96 size-full m-4"/>
    </template>
  </UDrawer>
    <UCard variant="soft">
        <template #header>
            <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
        </template>

        
      <Placeholder class="min-w-96 min-h-96 size-full m-4" />

        <template #footer>
            <Placeholder class="h-8" />
        </template>
    </UCard>qq
</template>

<script setup>
const { product } = defineProps(['product']);
</script>