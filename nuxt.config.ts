export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'format-detection', content: 'telephone=no' }
      ],

      link: [
        {
          rel: 'icon',
          href: '/favicon.png'
        }
      ],
      bodyAttrs: {
        class: 'test'
      }
    }
  },
  typescript: {
    shim: false,
    strict: true
  },
  modules: ['nuxt-primevue'],
  // TODO: CSSの読み込み順序を制御する
  primevue: {
    options: {
      ripple: true
    },
    components: {
      include: ['Button']
    },
    // theme: 'aura-light-green',
    cssLayerOrder: [
      // '@/assets/css/reset.css,primevue/resources/themes/aura-light-green/theme.css'
    ]
  },
  css: [
    '@/assets/css/reset.css',
    'primevue/resources/themes/aura-light-green/theme.css',
    '@/assets/css/index.scss'
  ],
  build: {},
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
  runtimeConfig: {
    // only variables under public are exposed to the client side
    // refer: https://dev.to/amitgurbani/environment-variables-in-nuxt-3-9p6
    public: {
      baseURL: 'http://localhost:1306',
      callbackURL: 'http://localhost:1306/api/v1/auth/line/callback',
      lineClientID: process.env.LINE_CLIENT_ID,
      enableRouting: false
    }
  }
})
