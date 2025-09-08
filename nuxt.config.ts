// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer: {
        port: 4200
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui']
})