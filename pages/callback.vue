<script setup lang="ts">
const { $keycloak } = useNuxtApp()
const router = useRouter()
const message = ref('Processing login...')

onMounted(async () => {
    if ($keycloak) {
        // The keycloak plugin initialization (check-sso) handles the token parsing 
        // from the URL hash/query automatically when the app loads.
        
        // We wait a brief moment to ensure init is done or just check status
        // referencing the authenticated state from the plugin's init result wouldn't work directly 
        // because the plugin runs before this component. 
        // However, we can check $keycloak.authenticated.

        if ($keycloak.authenticated) {
            message.value = 'Login successful! Redirecting...'
            setTimeout(() => {
                router.push('/')
            }, 1000)
        } else {
            // If the user arrived here without valid auth params or init failed
             message.value = 'Login failed or session invalid.'
             setTimeout(() => {
                router.push('/')
            }, 2000)
        }
    }
})
</script>

<template>
  <div class="callback-container">
    <div class="card">
        <h2>{{ message }}</h2>
        <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped>
.callback-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
}
.card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: center;
}
.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: 1rem auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
