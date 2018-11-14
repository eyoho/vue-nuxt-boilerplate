<template>
  <nav>
    <ul>
      <li role="presentation">
        <nuxt-link class="button" to="/">go to Home</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link class="button" to="/ssr">SSR Test</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link class="button" to="/vuex">Vuex Test</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link class="button" to="/validation">Validation</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link class="button" to="/firebase">Firebase Database</nuxt-link>
      </li>
      <li role="presentation" v-if="!isLogged">
        <nuxt-link class="button" to="/auth/login">Firebase Auth Login</nuxt-link>
      </li>
      <li role="presentation" v-else>
        <nuxt-link class="button" to="/auth/logout">Firebase Auth Logout</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters({
      isLogged: 'auth/isLogged'
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  white-space: nowrap;
  margin: 0 -5px;
  font-size: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
  vertical-align: top;
}
a {
  font-size: 12px;
}
</style>
