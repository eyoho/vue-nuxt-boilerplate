<template>
  <section class="main">
    <h2>{{ $t('content.vuex') }}</h2>
    <p>{{ $store.state.counter.count | thousandSeparator }}</p>

    <h2>{{ $t('content.image') }}</h2>
    <p class="cover">
      <img src="/img/nuxt-views-schema_800x400.png" width="400" height="200" alt="임시 이미지">
    </p>
    <template v-if="isLogged">
      <h2>로그인 되었습니다.</h2>
      <p v-if="$store.state.auth.user">{{ $store.state.auth.user.email }} 님 반갑습니다.</p>
      <p v-else>사용자 정보를 가져오는 중입니다.</p>
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { thousandSeparator } from '~/filters'

export default {
  name: 'Home',
  filters: {
    thousandSeparator
  },
  computed: {
    ...mapGetters({
      isLogged: 'auth/isLogged'
    })
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
