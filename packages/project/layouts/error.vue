<template>
  <section class="main">
    <h2 v-if="error.statusCode === 404">Page not found</h2>
    <h2 v-else>An error occurred</h2>
    <nuxt-link class="button" tag="button" to="/">Home page</nuxt-link>
  </section>
</template>

<script>
export default {
  layout: 'default',
  /* eslint-disable vue/require-prop-types */
  props: ['error']
}
</script>
