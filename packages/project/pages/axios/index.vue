<template>
  <section class="main">
    <button type="button" class="button" @click="fetchPosts">get posts</button>
    <p v-if="loading">Loading...</p>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <h2 class="title">{{ post.title }}</h2>
        <p class="description">{{ post.body }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import Post from '~/models/Post'

export default {
  name: 'Axios',
  data () {
    return {
      loading: false,
      posts: []
    }
  },
  methods: {
    async fetchPosts () {
      this.loading = true
      this.posts = await Post.get()
      this.loading = false
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
