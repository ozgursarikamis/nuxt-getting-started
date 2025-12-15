import Keycloak from 'keycloak-js'

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()

    const keycloak = new Keycloak({
        url: config.public.keycloakUrl,
        realm: config.public.keycloakRealm,
        clientId: config.public.keycloakClient
    })

    nuxtApp.provide('keycloak', keycloak)

    try {
        await keycloak.init({
            onLoad: 'check-sso',
        })
    } catch (error) {
        console.error('Keycloak init failed', error)
    }
})
