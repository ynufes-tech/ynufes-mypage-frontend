<script lang="ts" setup></script>

<template>
  <NuxtLink class="org-page-link">
    <v-card elevation="4" width="200" height="200" class="org-page-link-card">
      <div class="link-card-titile-wrapper">
        <p class="event-title">22常盤</p>
        <h2 class="org-page-title">プログラミングサークル Lumos</h2>
      </div>
      <div class="link-card-text"><span>団体ページへ移動する</span></div>
    </v-card>
  </NuxtLink>
</template>

<style scoped lang="scss">
.org-page-link {
  cursor: pointer;

  .org-page-link-card {
    width: 200px;
    height: 200px;
    position: relative;
    font-family: "Zen Maru Gothic";
    text-align: center;
    background-color: #36c678;
    transition: 0.3s ease;
    color: #fff;
    border-radius: 20px;

    .link-card-title-wrapper {
      padding: 8px 12px;
      font-size: 1.2rem;
      .org-page-title {
        line-height: 1.5rem;
        font-weight: 700;
      }
    }

    .link-card-text {
      width: 100%;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover {
      transform: scale(0.95);
    }
  }
}
</style>
