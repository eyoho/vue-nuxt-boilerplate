// https://github.com/robinvdvleuten/vuex-persistedstate
import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'project',
    paths: [
      'counter.count'
    ]
    // 쿠키 사용 예
    /*
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key),
    }
    */
  })(store)
}
