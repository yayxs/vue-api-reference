<script setup lang="ts">
import { reactive, ref } from 'vue'
const isActive = ref(true)

const clsObj = reactive({
  container: true,
  'add-cls': true
})

const activeCls = ref('active')
const errCls = ref('err')

const activeColor = ref('red')
const fontSize = ref(20)

const styObj = reactive({
  color: 'pink',
  fontSize: '13px'
})
</script>
<template>
  <div class="style-view">
    <div class="static" :class="{ cls: isActive }"></div>
    <div :class="{ active: isActive }"></div>
    <div :class="clsObj"></div>
    <div :class="[activeCls, errCls]"></div>
    <div :class="[isActive ? activeCls : '', errCls]"></div>
    <div :style="{ color: activeColor, fontSize: `${fontSize}px` }"></div>
    <div :style="styObj"></div>
  </div>
</template>
