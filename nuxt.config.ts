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
        // only variables under public are exposed to the client side
        // refer: https://dev.to/amitgurbani/environment-variables-in-nuxt-3-9p6
        public: {
            baseURL: 'http://localhost:1306',
            callbackURL: 'http://localhost:1306/api/v1/auth/line/callback',
            lineClientID: process.env.LINE_CLIENT_ID,
        }
    },
    ssr: false,
})
