<!-- <script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import {h} from 'vue'



</script> -->

<!-- <template>
  <main>
    Home
    <TheWelcome />
  </main>
</template> -->

<!-- <script lang="ts">
import { h } from 'vue'

export default {
  render() {
    // h函数调用
    return h('h1', 'is h1')
  }
}
</script> -->

<script setup lang="ts">
const clickDiv = () => {
  console.log('click div')
}
</script>
<template>
  <div class="div" @click="clickDiv"></div>
</template>
