<script setup lang="ts">
const { $keycloak } = useNuxtApp()
const user = ref<any>(null)
const authenticated = ref(false)

onMounted(async () => {
  if ($keycloak) {
    authenticated.value = !!$keycloak.authenticated
    if (authenticated.value) {
      try {
        user.value = await $keycloak.loadUserProfile()
      } catch (error) {
        console.error('Failed to load user profile', error)
      }
    }
  }
})

const login = () => {
  $keycloak.login({
    redirectUri: window.location.origin + '/callback'
  })
}

const logout = () => {
  $keycloak.logout({
    redirectUri: window.location.origin
  })
}
</script>

<template>
  <div>
    <header>
      <Header/>
    </header>
    <main>
      <div v-if="authenticated && user" style="text-align: center; margin: 2rem;">
        <h2>Welcome, {{ user.username }}</h2>
        <p>Email: {{ user.email }}</p>
        <button @click="logout" style="margin-top: 1rem; padding: 0.5rem 1rem; cursor: pointer;">Logout</button>
      </div>
      <div v-else style="text-align: center; margin: 2rem;">
        <p>Please log in to access more features.</p>
        <button @click="login" style="margin-top: 1rem; padding: 0.5rem 1rem; cursor: pointer;">Login with Keycloak</button>
      </div>
      <Main/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<style>
footer {
  margin-top: 3rem;
  padding: 1rem;
  background-color: #eee;
  text-align: center;
  border-top: 1px solid salmon;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
