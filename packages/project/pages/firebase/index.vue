<template>
  <section class="main">
    <input v-model.trim="newTodoText" @keyup.enter="addTodo" placeholder="Add new todo">
    <ul>
      <li v-for="todo in todos" :key="todo['.key']">
        <input :value="todo.text" @input="updateTodo(todo, $event.target.value)">
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { database } from '~/plugins/firebase'

const todosRef = database.ref('todos')

export default {
  name: 'Firebase',
  data () {
    return {
      newTodoText: ''
    }
  },
  computed: {
    ...mapGetters({
      todos: 'todos/todos'
    })
  },
  created () {
    this.$store.dispatch('todos/setTodosRef', todosRef)
  },
  methods: {
    addTodo () {
      if (this.newTodoText.trim()) {
        todosRef.push({
          text: this.newTodoText
        })
        this.newTodoText = ''
      }
    },
    updateTodo: function (todo, newText) {
      todosRef.child(todo['.key']).child('text').set(newText)
    },
    removeTodo (todo) {
      todosRef.child(todo['.key']).remove()
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 10px 0 0 20px;
  li {
    list-style: square;
  }
}
</style>
