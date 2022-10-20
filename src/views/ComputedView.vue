<script setup lang="ts">
import { ref, computed } from 'vue'

const name1 = ref('van')
const name2 = ref('lee')

const full = computed<string>({
  get() {
    return 'get'
  },
  set(newVal) {
    ;[name1.value, name2.value] = ''
  }
})
</script>

<template>
  <div class="com-view"></div>
</template>
