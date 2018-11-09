import { firebaseAction } from 'vuexfire'

export const state = () => ({
  todos: []
})

export const getters = {
  todos: state => state.todos
}

export const actions = {
  setTodosRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('todos', ref)
  })
}
