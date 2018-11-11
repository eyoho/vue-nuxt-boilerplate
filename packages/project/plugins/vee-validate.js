import Vue from 'vue'
// https://github.com/baianat/vee-validate
import VeeValidate, { Validator } from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import ko from 'vee-validate/dist/locale/ko'

Vue.use(VeeValidate, {
  delay: 100,
  dictionary: {
    en: {
      attributes: {
        'user.name': 'Name',
        'user.email': 'Email'
      }
    },
    ko: {
      attributes: {
        'user.name': '이름',
        'user.email': '이메일'
      }
    }
  }
})

export default ({ app, store }) => {
  Validator.localize('en', en)
  Validator.localize('ko', ko)
  Validator.localize(store.state.i18n.locale)
}
