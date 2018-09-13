const path = require('path');
const resolve = path.resolve;
module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    middleware: 'auth'
  },
  head: {
    title: 'AIVision',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        async: 'async',
        defer: 'defer',
        type: 'text/javascript',
        src: '/libs/echarts.min.js'
      }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '@assets/css/main.css',
    '@assets/icons/iconfont.css',
    'element-ui/lib/theme-chalk/index.css',
    'video.js/dist/video-js.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      config.resolve.alias['@components'] = path.join(__dirname, 'components')
      config.resolve.alias['@plugins'] = path.join(__dirname, 'plugins')
      config.resolve.alias['@assets'] = path.join(__dirname, 'assets')
      config.resolve.alias['@static'] = path.join(__dirname, 'static')
      config.resolve.alias['@store'] = path.join(__dirname, 'store')
      config.resolve.alias['@pages'] = path.join(__dirname, 'pages')
      config.resolve.alias['@js'] = path.join(__dirname, 'js')
      config.resolve.alias['@style'] = path.join(__dirname, 'style')
      config.resolve.alias['@filters'] = path.join(__dirname, 'filters')
      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  },
  plugins: [
    '@plugins/element-ui',
    '~/utils/auth',
    '~theme/index.css',
    { src: '@plugins/nuxt-video-player-plugin.js', ssr: false }
  ]
}
