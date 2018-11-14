<template>
  <section class="main">
    <label for="inputData">텍스트 입력후 엔터</label>
    <input id="inputData" v-model.trim="newTodoText" @keyup.enter="addTodo" placeholder="Add new todo">
    <ul>
      <li v-for="todo in todos" :key="todo['.key']">
        <input :value="todo.text" @input="updateTodo(todo, $event.target.value)">
        <button class="button" @click="removeTodo(todo)">삭제</button>
      </li>
    </ul>
    <p>수정은 바로 반영 됨</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { database } from '~/utils/firebase'

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
