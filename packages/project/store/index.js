import { firebaseMutations } from 'vuexfire'

// Do not mutate vuex store state outside mutation handlers. 에러 해결
export const strict = false

export const mutations = {
  ...firebaseMutations
}
