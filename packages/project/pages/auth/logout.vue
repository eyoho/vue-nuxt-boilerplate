<template>
  <section class="main">
    <button type="button" class="button" @click="signOut">로그아웃</button>
  </section>
</template>

<script>
export default {
  name: 'Logout',
  middleware: 'auth-not-logged',
  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
