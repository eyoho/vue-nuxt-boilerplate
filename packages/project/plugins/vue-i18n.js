import Vue from 'vue'
// https://kazupon.github.io/vue-i18n/
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: 'kr',
    messages: {
      'ko': require('~/locales/ko.json'),
      'en': require('~/locales/en.json')
    },
    path (link) {
      if (this.locale === this.fallbackLocale) {
        return `/${link}`
      }

      return `/${this.locale}/${link}`
    }
  })
}
