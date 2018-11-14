<template>
  <section class="main">
    <label for="email" class="required">{{ $t('content.name') }}</label>
    <input id="email" type="email" name="user.email" v-model="user.email" v-validate="'required|email'" v-once :placeholder="user.email">
    <p>{{ errors.first('user.email') }}</p>
    <label for="password" class="required">{{ $t('content.password') }}</label>
    <input id="password" type="password" name="user.password" v-model="user.password" v-validate="'required'" v-once :placeholder="user.password">
    <p>{{ errors.first('user.password') }}</p>
    <button type="button" class="button" @click="signInEmail">로그인</button>
    <button type="button" class="button" @click="signInGoogle">구글 계정으로 로그인</button>
  </section>
</template>

<script>
export default {
  name: 'Login',
  middleware: 'auth-logged',
  data () {
    return {
      user: {
        email: 'test@test.com',
        password: 'test12'
      }
    }
  },
  methods: {
    signInEmail () {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.$store.dispatch('auth/signInEmail', {
            email: this.user.email,
            password: this.user.password
          })
        } else {
          this.$el.querySelector('input[name="' + this.errors.items[0].field + '"]').focus()
        }
      })
    },
    signInGoogle () {
      this.$store.dispatch('auth/signInGoogle')
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: #f66;
  input[type=text] {
    border-color: #f66;
  }
}
.required:after {
  margin: 0 5px;
  color: red;
  content: '*';
}
</style>
