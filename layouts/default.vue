<script lang="ts" setup></script>

<template>
  <div id="dashboard-root-frame">
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
  height: 100svh;
}

#dashboard-root-content {
  width: calc(100vw - 200px);
  height: 100%;
}
</style>
