<script lang="ts" setup></script>

<template>
  <div class="dashboard-root-frame">
    Layout: default
    <sidebar />
    <div id="dashboard-root-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
#dashboard-root-frame {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}

#dashboard-root-content {
  width: calc(100vw - 200px);
  height: 100%;
}
</style>
