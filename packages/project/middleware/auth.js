export default ({ req, store }) => {
  if (process.server && !req) return

  let token = null

  if (process.server) {
    if (!req.headers.cookie) return
    const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
    if (!cookie) return
    token = cookie.split('=')[1]
  } else {
    token = window.localStorage.getItem('token')
  }

  store.commit('auth/setToken', token)
}
