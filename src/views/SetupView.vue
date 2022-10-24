<script>
import { h, ref } from 'vue'
export default {
  props: {
    msg: String
  },
  setup(props, context) {
    console.log('log props', props)
    console.log('log ctx attrs', context.attrs)
    console.log('log ctx slots', context.slots)
    console.log('log ctx expose', context.expose)

    const count = ref(11111111)
    const countAdd = () => {
      ++count.value
    }

    context.expose({
      countAdd
    })
    // return {
    //   count
    // }
    // 返回渲染函数

    return () => h('div', count.value)
  },
  mounted() {
    // this自动解包
    console.log(this.count)
  }
}
</script>
<template></template>
