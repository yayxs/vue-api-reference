<script setup lang="ts">
import { nextTick, reactive } from 'vue'
const array = reactive([])

const object = reactive({})

const state = reactive({
  count: 0
})

const increment = () => {
  state.count++
  nextTick(() => {
    // console.log(ele)
  })
}

const raw = {}

const proxy = reactive(raw)

console.log('原始对象和代理后的值不相等')
</script>

<template>
  <div class="reactive-view">
    <button @click="increment">
      {{ state.count }}
    </button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
