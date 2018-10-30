<template>
  <section class="main">
    <div :class="{error: validation.hasError('name')}">
      <label for="name" class="required">Name</label>
      <input type="text" id="name" name="name" v-model="name" placeholder="only accepts alphabetic characters">
      <p>{{ validation.firstError('name') }}</p>
    </div>
    <div :class="{error: validation.hasError('gender')}">
      <label class="required">Gender</label>
      <div>
        <label>
          <input type="radio" name="gender" value="mail" v-model="gender">
          <span>Male</span>
        </label>
        <label>
          <input type="radio" name="gender" value="female" v-model="gender">
          <span>Female</span>
        </label>
      </div>
      <p>{{ validation.firstError('gender') }}</p>
    </div>
    <div :class="{error: validation.hasError('phone')}">
      <label for="phone">Phone</label>
      <input type="text" id="phone" name="phone" v-model="phone">
      <p>{{ validation.firstError('phone') }}</p>
    </div>
    <div :class="{error: validation.hasError('age')}">
      <label for="age">Age</label>
      <input type="text" id="age" name="age" v-model="age">
      <p>{{ validation.firstError('age') }}</p>
    </div>
    <div>
      <button type="button" class="button" @click="reset">Reset</button>
      <button type="button" class="button" @click="submit">Submit</button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Validation',
  data () {
    return {
      name: '',
      gender: '',
      phone: '',
      age: ''
    }
  },
  validators: {
    name: function (value) {
      return this.$Validator.value(value).required().regex('^[A-Za-z]*$', 'Must only contain alphabetic characters.')
    },
    gender: function (value) {
      return this.$Validator.value(value).required()
    },
    phone: function (value) {
      return this.$Validator.value(value).digit().length(11)
    },
    age: function (value) {
      return this.$Validator.value(value).integer().greaterThan(20)
    }
  },
  methods: {
    submit: function () {
      this.$validate()
      .then((success) => (success) && alert('Validation succeeded!'))
    },
    reset: function () {
      this.name = ''
      this.gender = ''
      this.phone = ''
      this.age = ''
      this.validation.reset()
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
