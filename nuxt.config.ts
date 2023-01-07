// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
        // strict: true
    },
    css: ['vuetify/styles', '@/assets/css/index.css'],
    build: {
        transpile: ['vuetify']
    },
    vite: {
        define: {
            'process.env.DEBUG': false
        },
        server: {
            watch: {
                usePolling: true
            }
        }
    },
    components: {
        dirs: [
            '~/components',
            '~/components/sidebar',
        ]
    },
    runtimeConfig: {
        BACKEND_BASE_URL: 'http://localhost:1306/api/v1/'
    },
    ssr: false,
})
