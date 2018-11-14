export default function ({ store, redirect }) {
  // 로그인 안되어 있을 때, 로그인으로 이동
  if (!store.getters['auth/isLogged']) {
    return redirect('/auth/login')
  }
}
