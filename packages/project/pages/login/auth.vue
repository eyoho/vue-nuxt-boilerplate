<template>
  <section class="main">
    <p>{{ $store.state.auth.user.email }} 님 반갑습니다.</p>
    <button type="button" class="button" @click="signOut">로그아웃</button>
  </section>
</template>

<script>
export default {
  name: 'Auth',
  methods: {
    signOut () {
      this.$router.push('/login')
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
