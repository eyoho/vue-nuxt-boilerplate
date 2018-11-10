export default function({ store, redirect, route }) {
  store.state.auth.user === null && isLoginRoute(route) ? redirect('/login') : ''
}

// 로그인 안한 사용자가 접근 할 수 없는 라우트 목록
function isLoginRoute(route) {
  switch (route.path) {
    case '/login/auth': return true
    default: return false
  }
}
