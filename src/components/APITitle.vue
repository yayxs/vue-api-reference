<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="api-header">
    {{ props.title }}
  </div>
</template>
