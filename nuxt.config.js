export default {
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3000,
    host: '0.0.0.0' 
  },
  head: {
    title: 'safematrix',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/littleLogo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['@/assets/style/main.scss'],
  styleResources: {
    scss: ['~/assets/style/main.scss'],
    hoistUseStatements: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/anime.js",
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  image: {
    provider: 'static',
    dir: 'static',
    screens: {
      xs: 320,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1920,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
