<template>
  <section class="main">
    <h2>{{ $t('content.vuex') }}</h2>
    <p>{{ $store.state.counter.count | thousandSeparator }}</p>

    <h2>{{ $t('content.image') }}</h2>
    <p class="cover">
      <img src="/img/nuxt-views-schema_800x400.png" width="400" height="200" alt="임시 이미지">
    </p>
  </section>
</template>

<script>
import { thousandSeparator } from '~/filters'

export default {
  name: 'Home',
  filters: {
    thousandSeparator
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/sprite";

h2 {
  font-weight: bold;
}
p {
  margin-bottom: 20px;
}
.cover {
  height: 200px;
  background: url("/img/bg_store_directfarm_1280x130.jpg");
  &:before {
    display: inline-block;
    @include png-sprite('icon_department_48x48', $png-icons);
    content: '';
  }
  &:after {
    display: inline-block;
    @include svg-sprite('icon_circle_face_smile_26x26_red', $svg-icons, $svg-icons-sizes);
    vertical-align: top;
    content: '';
  }
}
</style>
