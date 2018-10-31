<template>
  <div>
    <button type="button" class="button" v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Locale',
  computed: {
    locales () {
      return this.$store.state.i18n.locales
    },
    locale () {
      return this.$store.state.i18n.locale
    }
  },
  methods: {
    setLocale (locale) {
      document.cookie = `locale=${locale}`
      location.reload()
    }
  }
}
</script>
