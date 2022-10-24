<script setup lang="ts">
import { ref } from 'vue'
import { Setting } from '@element-plus/icons-vue'
const isCollapse = ref(true)
</script>
<template>
  <el-menu :collapse="isCollapse">
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>v-model</template>
    </el-menu-item>
  </el-menu>
</template>
