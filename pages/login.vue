<script lang="ts" setup>
definePageMeta({
  layout: false,
});
const authToken = useCookie("Authorization");
authToken.value = "";
</script>

<template>
  <div class="d-flex m-0">
    <v-container class="login-button-wrapper">
      <v-img class="site-logo" src="/mypage-logo-dark.webp"></v-img>
      <a href="https://www.google.com" class="login-button d-flex">
        <v-img src="/line_btn_base.png" class="login-button__icon"></v-img>
        <span>LINEでログイン</span>
      </a>
    </v-container>
    <v-container class="login-icon-wrapper mx-0">
      <v-img src="/login-page.svg" class="login-icon-img"></v-img>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.site-logo {
  width: 100%;
  height: 60px;
  margin-top: calc((100svh - 60px - 48px - 32px - 60px) / 2);
  margin-bottom: 60px;
}
.login-button {
  text-decoration: none;
  border-radius: 10px;
  background-color: #06c755;
  height: 48px;
  width: fit-content;
  color: #fff;
  padding-right: 16px;
  margin: 0 auto;

  &:hover {
    filter: opacity(0.9);
  }

  &__icon {
    width: 40px;
    height: 40px;
    margin: 5px 8px 0 8px;
  }

  > span {
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    line-height: 1.5em;
  }
}
.login-button-wrapper {
  width: 45vw;
  max-width: 520px;
  flex: 0 0 45vw;
}
.login-icon-wrapper {
  height: 100svh;
  width: 55vw;
  flex: 1;
  background-color: #92e3a9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-icon-img {
  max-height: 480px;
}
</style>
