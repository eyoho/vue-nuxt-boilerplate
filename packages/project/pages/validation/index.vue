<template>
  <section class="main">
    <label for="name" class="required">{{ $t('content.name') }}</label>
    <input id="name" type="text" name="user.name" v-model="user.name" v-validate="'required|alpha'">
    <p>{{ errors.first('user.name') }}</p>
    <label for="email" class="required">{{ $t('content.email') }}</label>
    <input id="email" type="email" name="user.email" v-model="user.email" v-validate="'required|email'">
    <p>{{ errors.first('user.email') }}</p>
    <div>
      <button type="submit" class="button" @click="onSubmit">전송</button>
    </div>
    <ul v-if="errors.items.length" v-for="error in errors.items" :key="error.id">
      <li>{{ error.msg }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Validation',
  data () {
    return {
      user: {
        name: null,
        email: null
      }
    }
  },
  methods: {
    onSubmit () {
      this.$validator.validateAll().then((success) => {
        if (success) {
          alert('성공')
          this.user.name = null
          this.user.email = null
          this.$validator.reset()
          this.errors.clear()
        } else {
          this.$el.querySelector('input[name="' + this.errors.items[0].field + '"]').focus()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.required:before {
  margin: 0 5px;
  color: red;
  content: '*';
}
</style>
