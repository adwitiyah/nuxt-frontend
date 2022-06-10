export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'strapi-new-nuxt',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", type:"text/css", href:'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@400&display=swap",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'balm-ui/dist/balm-ui.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/balm-ui',
    '~plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

    axios: {
      baseURL: process.env.STRAPI_URL || 'http://localhost:1337/api'
    },
  
    auth: {
      // Options
      strategies: {
        local: {
          token: {
            property: 'jwt',
          },
          user: {
            property: false,
          },
          endpoints: {
            login: {
              url: 'auth/local',
              method: 'post',
            },
            user: {
              url: 'users/me',
              method: 'get',
            },
            logout: false,
          },
        },
      },
    }
}
