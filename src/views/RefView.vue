<script setup lang="ts">
import { reactive, ref } from 'vue'
const count = ref(0)

const state = reactive({
  count
})
console.log(state.count)

state.count = 1
console.log(count.value)

const object = { foo: ref(1) }

const otherCount = ref(2)

const books = reactive([ref('vue')])
const map = reactive(new Map([['count', ref(0)]]))

// const c = $ref(0)
</script>

<template>
  <div class="ref-view">
    {{ object.foo }}
  </div>
</template>
