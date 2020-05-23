
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    strapiBaseUri: process.env.API_URL || "http://cor9.pro"
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    script: [
      { src: '/main.js',}
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/style.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-backtotop',
    // '~/plugins/scroll-to'

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources:{
    sass: [
      '@/assets/sass/_variables.sass',
      '@/assets/smart-grid/smart-grid.sass'
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    // "@nuxtjs/apollo",
    "@nuxtjs/markdownit",
  ],
  axios: {

  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
  },
  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: "http://cor9.pro/graphql"
  //     }
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['axios'],

    extend (config, ctx) {
    },

    transpile: [
      'vue-backtotop',
    ]
  },
  server: {
    host: '192.168.244.128',
    timing: false,
    https: false
  },
  router: {
    scrollBehavior: async function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    }
  },

}
