import { auth } from '~/plugins/firebase'

export default ({ store }) => {
  // 현재 로그인한 사용자 가져오기
  auth.onAuthStateChanged((user) => {
    store.commit('auth/setUser', user)
  })
}
