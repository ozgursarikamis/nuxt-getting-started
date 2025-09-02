<script setup lang="ts">
import { ref, watch, reactive } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

setTimeout(() => {
    count.value = Math.random();
}, 1500);

// watch for changes for count:
watch(count, (newCount) => {
    console.log('count changed', newCount);
});

const firstName = ref<string>('');
const lastName = ref<string>('');

watch([firstName, lastName], ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
    console.log(`First name: ${oldFirstName} → ${newFirstName}`)
    console.log(`Last name: ${oldLastName} → ${newLastName}`)
});

function submit() {
    console.log('submitted', firstName.value, lastName.value);
}

// Watching an object's property's change:
const user = reactive({ name: 'John', age: 30 });

// watch a nested property:
watch(() => user.age, (newAge, oldAge) => {
    console.log(`Age changed: ${oldAge} → ${newAge}`)
});

</script>
<template>
    <div>
        Count: {{ count }} <br>
        Double Count: {{ doubleCount }}
    </div>
    <hr>
    <div>
        <br>
        <UInput v-model="firstName" placeholder="First name" />
        <UInput v-model="lastName" placeholder="Last name" />
        <UButton @click="submit">Submit</UButton>
        <br>
        <br>
        <hr>
        {{ firstName }} {{ lastName }}
    </div>
    <hr>
    <UInputNumber v-model="user.age" />
</template>

<style scoped></style>