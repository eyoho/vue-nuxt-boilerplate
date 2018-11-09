<template>
  <nav>
    <ul>
      <li role="presentation">
        <nuxt-link to="/" tag="button" type="button" class="button">go to Home</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="/ssr" tag="button" type="button" class="button">SSR Test</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="/vuex" tag="button" type="button" class="button">Vuex Test</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="/validation" tag="button" type="button" class="button">Validation</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="/axios" tag="button" type="button" class="button">Axios Test</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="/rxjs" tag="button" type="button" class="button">Rxjs Counter</nuxt-link>
      </li>
      <li role="presentation">
        <nuxt-link to="/rxjs/search" tag="button" type="button" class="button">Rxjs Search</nuxt-link>
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
button {
  font-size: 12px;
}
</style>
