import Cookie from 'js-cookie'
import firebase from '~/plugins/firebase'

const auth = firebase.auth()

export const state = () => ({
  user: null,
  token: null
})

export const getters = {
  isLogged (state) {
    return !!state.token
  }
}

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  resetUser (state) {
    state.user = null
  },
  setToken (state, token) {
    state.token = token
  },
  resetToken (state) {
    state.token = null
  }
}

// Todo: 새탭에서 접속시 토큰 유지(세션), 쿠키와 로컬스토리지 보안 강화

const saveToken = (commit) => {
  window.onbeforeunload = () => {
    deleteToken()
  }
  return auth.currentUser.getIdToken(true).then((idToken) => {
    Cookie.set('token', idToken)
    window.localStorage.setItem('token', idToken)
    commit('setToken', idToken)
  })
}

const deleteToken = (commit) => {
  Cookie.remove('token')
  window.localStorage.removeItem('token')
  commit('resetToken')
}

export const actions = {
  async signInEmail ({ commit }, { email, password }) {
    await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      return auth.signInWithEmailAndPassword(email, password).then(
        ({ user }) => {
          commit('setUser', user)
        },
        (error) => {
          switch (error.code) {
            case 'auth/user-not-found':
              alert('등록된 이메일이 없습니다.')
              break
            case 'auth/wrong-password':
              alert('비밀번호가 틀렸습니다.')
              break
          }
        }
      )
    })
    await saveToken(commit)
    this.$router.push('/')
  },
  async signInGoogle ({ commit }) {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(({ user }) => {
      commit('setUser', user)
    })
    await saveToken(commit)
    this.$router.push('/')
  },
  async signOut ({ commit, state }) {
    await auth.signOut().catch(error => console.log(error))
    commit('resetUser')
    deleteToken(commit)
    this.$router.push('/')
  }
}
