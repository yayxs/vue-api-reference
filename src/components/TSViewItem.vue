<script setup lang="ts">
import { withDefaults } from 'vue'
export interface Props {
  msg?: string
  list?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'default-msg',
  list: () => ['van', 'lee']
})
// 运行时
const emit = defineEmits(['change', 'update'])
// 基于类型

const emit1 = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
