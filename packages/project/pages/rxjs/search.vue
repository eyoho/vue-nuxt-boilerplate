<template>
  <section class="main">
    <input type="text" v-model="search" placeholder="Insert ID (1 ~ 10)">
    <div v-if="results">
      <ul v-if="results.matches.length">
        <li v-for="match in results.matches" :key="match.id">
          <h2 class="title">{{ match.title }}</h2>
          <p class="description">{{ match.description }}</p>
        </li>
      </ul>
      <p v-else>No matches found.</p>
    </div>
  </section>
</template>

<script>
import { from } from 'rxjs'
import { pluck, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators'
import Post from '~/models/Post'

export default {
  name: 'RxjsSearch',
  data () {
    return {
      search: ''
    }
  },
  subscriptions () {
    return {
      results: this.$watchAsObservable('search').pipe(
        pluck('newValue'),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(this.fetchTerm),
        map(this.formatResult)
      )
    }
  },
  methods: {
    fetchTerm: (term) => from(Post.params({userId: term}).get()),
    formatResult: (result) => {
      return {
        term: result,
        matches: result.map((item) => ({
          title: item.title,
          description: item.body
        }))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
}
.description {
  color: #aaa;
}
</style>
