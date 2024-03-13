<script lang="ts" setup></script>

<template>
  <div
    id="bottom-app-bar"
    class="flex util-color-bg-sub justify-content-around absolute bottom-0 w-screen h-4rem align-items-center z-5"
    ontouchstart=""
  >
    <NuxtLink
      to="/"
      class="link-icon block util-color-text flex flex-column justify-content-center align-items-center"
      active-class="active-icon"
    >
      <i class="pi pi-home text-2xl"></i>
      <p class="text-sm">Home</p>
    </NuxtLink>
    <NuxtLink
      to="/forms"
      class="link-icon block util-color-text flex flex-column justify-content-center align-items-center"
      active-class="active-icon"
    >
      <i class="pi pi-list text-2xl"></i>
      <p class="text-sm">Forms</p>
    </NuxtLink>
    <NuxtLink
      to="/news"
      class="link-icon block util-color-text flex flex-column justify-content-center align-items-center"
      active-class="active-icon"
    >
      <i class="pi pi-envelope text-2xl"></i>
      <p class="text-sm">News</p>
    </NuxtLink>
    <NuxtLink
      to="/settings"
      class="link-icon block util-color-text flex flex-column justify-content-center align-items-center"
      active-class="active-icon"
    >
      <i class="pi pi-cog text-2xl"></i>
      <p class="text-sm">Settings</p>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/colors' as colors;
.active-icon {
  color: colors.$primary;
}
.link-icon {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 10%;
  padding: 0.5rem;
  -webkit-tap-highlight-color: colors.$main-background;
}
@media (any-hover: hover) {
  .link-icon {
    transition: background-color 0.2s;
  }
  .link-icon:hover {
    background-color: colors.$main-background;
  }
}
.link-icon:active {
  background-color: colors.$main-background;
}
@media screen and (min-width: 1024px) {
  #bottom-app-bar {
    display: none !important;
  }
}
</style>
