// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [
                { name: 'description', content: 'test...'}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}  
            ]
        }
    },
    runtimeConfig: {
        apiKey: process.env.API_KEY
    }
})
