<!-- <template>
  <div>
    <nav class="header-nav">
      <div class="link">
        <RouterLink to="/api">api</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/sfc">sfc</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/setup">setup</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/api">API</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/ref">Ref</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/reactive">reactive</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/computed">computed</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/ts">ts</RouterLink>
      </div>
    </nav>
    <RouterView></RouterView>
  </div>
</template> -->

<template>
  <el-config-provider namespace="vl">
    <BaseHeader />
    <main class="main-container">
      <BaseSide />
      <div class="render-wrap">
        <RouterView></RouterView>
      </div>
    </main>
  </el-config-provider>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
}
</style>
