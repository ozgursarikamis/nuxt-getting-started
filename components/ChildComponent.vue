<script setup lang="ts">
import { ref } from 'vue';

const message = ref<string>(''); // Initialize with an empty string or a default value

function handleMessageFromChildComponent(_message: string) {
    message.value = _message;
}
</script>

<template>
    <div>
        Child Component: {{ message }}
    </div>
    <ChilderComponent @update="handleMessageFromChildComponent" />
</template>