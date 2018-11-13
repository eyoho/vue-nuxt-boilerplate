import { auth, session, GoogleProvider } from '~/scripts/firebase'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

export const actions = {
  signInEmail ({ commit }, { email, password }) {
    auth.setPersistence(session).then(() => {
      return auth.signInWithEmailAndPassword(email, password).then(
        ({ user }) => {
          commit('setUser', user)
          this.$router.push('/login/auth')
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
  },
  signInGoogle ({ commit }) {
    auth.signInWithPopup(GoogleProvider).then(({ user }) => {
      commit('setUser', user)
      this.$router.push('/login/auth')
    })
  },
  async signOut ({ commit, state }) {
    await auth.signOut().catch(error => console.log(error))
    this.$router.push('/login')
  }
}
