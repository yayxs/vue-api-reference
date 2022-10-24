<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { Ref } from 'vue'

const props = defineProps({
  object: {
    type: String,
    required: true
  },
  number: Number
})
console.log(props.object)
console.log(props.number)

// ref 标注类型

const numberOrString: Ref<string | number> = ref(0)

// reactive
interface IObj {
  name: string
  id: number
}

const o: IObj = reactive({ name: 'vue', id: 1 })
// 为computed 标注类型

const double = computed<number>(() => {
  return 0
})
// 事件类型标注

function handleChange(e: Event) {}
</script>

<template>
  <div class="ts-view">
    <input type="text" name="" id="" @change="handleChange" />
  </div>
</template>
