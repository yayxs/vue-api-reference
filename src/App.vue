<template>
  <div>
    <nav>
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
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.link {
  margin-right: 20px;
}
</style>
