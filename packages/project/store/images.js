import { firebaseAction } from 'vuexfire'

export const state = () => ({
  images: []
})

export const getters = {
  images: state => state.images
}

export const actions = {
  setImagesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('images', ref)
  })
}
