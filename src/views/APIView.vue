<script setup lang="ts">
import { inject } from 'vue'
import SlotComp from '../components/SlotView.vue'
import APITitle from '../components/APITitle.vue'
const htmlStr = `
<div class="is-html">
  is html  
</div>
`
console.log(inject('key'))
</script>

<template>
  <div class="api-view">
    <APITitle title="组件作用域CSS" />
    <div class="scoped-cls"></div>
    <div v-html="htmlStr"></div>
    <SlotComp> slot comp </SlotComp>
  </div>
</template>

<style scoped>
.scoped-cls {
  color: red;
}

.api-view :deep(.is-html) {
  color: pink;
}

/* .is-html {
  color: red;
} */
</style>
