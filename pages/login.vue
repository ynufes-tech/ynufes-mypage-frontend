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
      <v-btn class="login-button">LINEでログイン</v-btn>
    </v-container>
    <v-container class="login-icon-wrapper m-0" color="primary">
      <v-img src="/login-page.svg" justify="center" class="w-50"></v-img>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
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
  width: 55vw;
}
.login-icon-wrapper {
  height: 100vh;
  width: 45vw;
  background-color: #92e3a9;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
