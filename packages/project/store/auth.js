import { auth, GoogleProvider } from '~/scripts/firebase'

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
    auth.signInWithEmailAndPassword(email, password).then(
      () => {
        commit('setUser', { email })
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
  },
  signInGoogle ({ commit }) {
    auth.signInWithPopup(GoogleProvider).then((result) => {
      commit('setUser', {
        email: result.user.email
      })
      this.$router.push('/login/auth')
    })
  },
  signOut ({ commit }) {
    auth.signOut().then(() => {
      commit('setUser', null)
    }).catch(error => console.log(error))
  }
}
