export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ANHE-OFFICAL-NUXT-APP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css/normalize.css',
    // https://github.com/im-fahad/nuxt-video-player
    'nuxt-video-player/src/assets/css/main.css'
  ],

  styleResources: {
    scss: [
      '~assets/const/_vars.scss',
      '~assets/styles/common.scss',
      '~assets/styles/layout.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // With options
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  // i18n settings
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    vueI18n: {

    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  //  To make it work for SSR, remember to set `ssr: true` and `target: 'server'`
  ssr: true,
  target: 'server',
}
