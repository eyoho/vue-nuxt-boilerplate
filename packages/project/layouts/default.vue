<template>
  <div>
    <header>
      <h1>{{ $t('header.title') }}</h1>
      <navigation />
      <locale />
    </header>
    <nuxt/>
    <footer>{{ $t('footer.copyright') }}</footer>
  </div>
</template>

<script>
import Navigation from '~/components/Common/Navigation'
import Locale from '~/components/Common/Locale'

export default {
  name: 'Default',
  components: {
    Navigation,
    Locale
  }
}
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 20px;
  h1 {
    margin-bottom: 30px;
    font-size: 30px;
  }
}
footer {
  margin-top: 20px;
}
</style>
