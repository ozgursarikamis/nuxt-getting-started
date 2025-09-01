<script setup lang="ts">
import type { CheckboxGroupItem, CheckboxGroupValue } from '@nuxt/ui'

const items = ref<CheckboxGroupItem[]>([
  {
    label: 'System',
    description: 'This is the first option.',
    value: 'system'
  },
  {
    label: 'Light',
    description: 'This is the second option.',
    value: 'light'
  },
  {
    label: 'Dark',
    description: 'This is the third option.',
    value: 'dark'
  }
])
const value = ref<CheckboxGroupValue[]>([
  'system'
])
</script>

<template>

  <UIcon name="i-lucide-lightbulb" class="size-5" />
  <UCheckboxGroup v-model="value" :items="items" />
</template>
