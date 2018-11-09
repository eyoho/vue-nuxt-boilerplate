<template>
  <section class="main">
    <p>{{ count }}</p>
    <button type="button" class="button" v-stream:click="plus$">Plus</button>
    <button type="button" class="button" v-stream:click="minus$">Minus</button>
  </section>
</template>

<script>
import { merge } from 'rxjs'
import { map, startWith, scan } from 'rxjs/operators'

export default {
  name: 'Rxjs',
  domStreams: ['plus$', 'minus$'],
  subscriptions () {
    return {
      count: merge(
        this.plus$.pipe(map(() => 1)),
        this.minus$.pipe(map(() => -1))
      ).pipe(
        startWith(0),
        scan((total, change) => total + change)
      )
    }
  }
}
</script>
