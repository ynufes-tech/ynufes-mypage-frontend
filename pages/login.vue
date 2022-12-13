<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="d-flex m-0">
    <v-container
      class="login-button-wrapper d-flex m-0 justify-center align-center"
    >
      <div>
        <v-img class="cite-logo" src="/YNUFES-icon-color.png"></v-img>
        <v-btn class="login-button"
          ><NuxtLink to="" style="text-decoration: none">
            LINEでログイン</NuxtLink
          ></v-btn
        >
      </div>
    </v-container>
    <v-container class="login-icon-wrapper m-0">
      <v-img src="/login-page.svg" justify="center" class="w-50"></v-img>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.cite-logo {
  position: absolute;
  width: 240px;
  height: 120px;
  top: 10%;
  transform: translateX(5%);
}
.login-button {
  background-color: #06c755;
  width: 256px;
  height: 68px;
  font-size: 1.2rem;
  color: #fff;
  padding-left: 48px;
}
.login-button::before {
  content: url("/line_btn_base.png");
  width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.login-button-wrapper {
  width: 45vw;
}
.login-icon-wrapper {
  height: 100vh;
  width: 55vw;
  background-color: #92e3a9;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
