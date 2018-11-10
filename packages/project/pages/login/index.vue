<template>
  <section class="main">
    <div :class="{error: validation.hasError('email')}">
      <label for="email" class="required">Email</label>
      <input type="text" id="email" name="email" v-model="email" placeholder="test@test.com">
      <p>{{ validation.firstError('email') }}</p>
    </div>
    <div :class="{error: validation.hasError('password')}">
      <label for="password" class="required">Password</label>
      <input type="password" id="password" name="password" v-model="password" placeholder="test12">
      <p>{{ validation.firstError('password') }}</p>
    </div>
    <button type="button" class="button" @click="signInEmail">로그인</button>
    <button type="button" class="button" @click="signInGoogle">구글 계정으로 로그인</button>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: 'test@test.com',
      password: 'test12'
    }
  },
  validators: {
    email: function (value) {
      return this.$Validator.value(value).required().email()
    },
    password: function (value) {
      return this.$Validator.value(value).required()
    }
  },
  methods: {
    signInEmail () {
      this.$validate().then((success) => (success) && this.$store.dispatch('auth/signInEmail', {
        email: this.email,
        password: this.password,
      }))
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
