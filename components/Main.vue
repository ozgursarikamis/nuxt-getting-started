<script setup lang="ts">
import type { RadioGroupItem, RadioGroupValue } from '@nuxt/ui'
import type { CheckboxGroupItem } from '@nuxt/ui';

const checkboxGroupItem = ref<CheckboxGroupItem[]>(['System', 'Light', 'Dark'])
const checkboxValue = ref(true);

const radioGroupItems = ref<RadioGroupItem[]>([
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
]);

const value = ref<RadioGroupValue>('system');

</script>
<template>
    <div>
        <UCheckbox v-model="checkboxValue" label="Checkbox 1" />
        <UCheckboxGroup indicator="end" variant="card" :default-value="['System']" :items="checkboxGroupItem" />
        <URadioGroup v-model="value" :items="radioGroupItems" />
    </div>
</template>

<style scoped>
* {
    padding: 1rem;
}
</style>