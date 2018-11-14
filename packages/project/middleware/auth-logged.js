export default function ({ store, redirect }) {
  // 로그인 되어 있을 때, 루트로 이동
  if (store.getters['auth/isLogged']) {
    return redirect('/')
  }
}
