<script lang="ts" setup></script>

<template>
  <NuxtLink class="org-page-link">
    <v-card elevation="8" width="200" height="200" class="org-page-link-card">
      <p class="event-title">22常盤</p>
      <h2 class="org-page-title">プログラミングサークル Lumos</h2>
    </v-card>
  </NuxtLink>
</template>

<style scoped lang="scss">
.org-page-link {
  width: 200px;
  height: 200px;
  .org-page-link-card {
    padding: 8px 12px;
    font-family: "Zen Maru Gothic";
    text-align: center;
    position: relative;
    background-color: #36c678;
    transition: 0.5s ease;
    color: #fff;
    border-radius: 20px;
    .event-title {
      font-size: 1.2rem;
      font-weight: bold;
      font-weight: 500;
      margin: 10px 0;
    }
    .org-page-title {
      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: 700;
    }
    &:hover {
      transform: scale(0.95);
    }
  }
}
</style>
