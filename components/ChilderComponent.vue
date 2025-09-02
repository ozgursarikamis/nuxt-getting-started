<script setup lang="ts">
import { inject } from 'vue';

const foo = inject('foo');

const emit = defineEmits<{ (e: 'update', value: string): void }>();

function sendMessageToParent() {
    emit('update', 'Hello from child component');
}
</script>

<template>
    <div>
        Childer Component: {{ foo }}
        <div>
            <UButton @click="sendMessageToParent">Send data to the parent component</UButton>
        </div>
    </div>
</template>