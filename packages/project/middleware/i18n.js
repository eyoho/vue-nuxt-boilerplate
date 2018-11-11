// https://webdevchallenges.com/nuxt-js-internationalization-without-route-param/

export default ({ isHMR, app, store, route, req }) => {
  if (isHMR) {
    return
  }

  if (req) {
    if (route.name) {
      const { headers } = req
      let locale = null

      if (headers.cookie) {
        const cookies = headers.cookie.split(/[;] */).reduce((result, pairStr) => {
          const arr = pairStr.split('=')
          if (arr.length === 2) result[arr[0]] = arr[1]
          return result
        }, {})

        locale = cookies.locale
      }

      if (!locale) {
        locale = headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)
      }

      store.commit('i18n/setLocale', locale)
      app.i18n.locale = locale
    }
  }
}
