import autoprefixer from 'autoprefixer'
import spritePng from './scripts/spritePng'
import spriteSvg from './scripts/spriteSvg'

const isProduction = (process.env.NODE_ENV === 'production')
const isPC = (process.env.DEVICE_ENV === 'pc')

export default {
  cache: {
    max: 1000,
    maxAge: 900000
  },
  head: {
    title: 'vue-boilerplate',
    meta: [
      {charset: 'utf-8'},
      isPC && {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'},
      {hid: 'description', name: 'description', content: 'project description'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    {src: '~/assets/scss/style.scss', lang: 'scss'}
  ],
  loading: {
    color: 'blue',
    failedColor: 'red',
    height: '5px'
  },
  build: {
    extend (config, { isDev }) {
      if (isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // Todo: CND 경로 설정
    // publicPath: 'https://cdn.nuxtjs.org',
    postcss: [
      autoprefixer({
        browsers: [
          '> 1%',
          'last 2 versions',
          'not ie <= 8'
        ]
      })
    ],
    // Todo: 빌드시 CSS 외부파일로 생성
    // https://ssr.vuejs.org/guide/css.html#enabling-css-extraction
    extractCSS: isProduction && {
      allChunks: true
    },
    plugins: [
      ...spritePng,
      ...spriteSvg
    ]
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    {src: '~/plugins/vue-i18n.js', injectAs: 'i18n'},
    '~/plugins/vee-validate.js'
  ]
}
