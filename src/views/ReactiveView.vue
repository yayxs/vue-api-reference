<script setup lang="ts">
import { reactive } from 'vue'
const array = reactive([])

const object = reactive({})

const func = () => {
  console.log('func is run ')
}

const raw = {}

const proxy = reactive(raw)

console.log('原始对象和代理后的值不相等')
</script>

<template>
  <div class=""></div>
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
