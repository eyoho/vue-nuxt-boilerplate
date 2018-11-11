<template>
  <section class="main">
    <h2 v-visible="$store.state.counter.count <= 10000">custom directive</h2>
    <input type="text" v-model="$store.state.counter.count" v-focus>
    <button type="button" class="button" @click="increment">increment</button>
    <button type="button" class="button" @click="decrement">decrement</button>
  </section>
</template>

<script>
import { visible, focus } from '~/directives'

export default {
  name: 'Vuex',
  directives: {
    visible,
    focus
  },
  methods: {
    increment () {
      this.$store.commit('counter/increment')
    },
    decrement () {
      this.$store.commit('counter/decrement')
    }
  }
}
</script>
