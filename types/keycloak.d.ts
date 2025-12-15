import Keycloak from 'keycloak-js'

declare module '#app' {
  interface NuxtApp {
    $keycloak: Keycloak
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $keycloak: Keycloak
  }
}
