export const state = () => ({
  locales: [
    {
      code: 'en',
      name: 'US'
    },
    {
      code: 'ko',
      name: 'KR'
    }
  ],
  locale: 'ko'
})

export const mutations = {
  setLocale (state, locale) {
    if (state.locales.find(el => el.code === locale)) {
      state.locale = locale
    }
  }
}
