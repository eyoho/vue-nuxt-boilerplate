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
        <nuxt-link class="button" to="/firebase">Firebase</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link class="button" to="/firebase/storage">Firebase Storage</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
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
