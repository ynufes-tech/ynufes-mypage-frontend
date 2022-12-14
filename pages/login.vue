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
        <v-img class="cite-logo" src="/YNUFES-icon-color.svg"></v-img>
        <a href="https://www.google.com" class="login-button d-flex">
          <v-img src="/line_btn_base.png" class="login-button__icon"></v-img>
          <p>LINEでログイン</p>
        </a>
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
  text-decoration: none;
  border-radius: 12px;
  background-color: #06c755;
  width: fit-content;
  font-size: 1.2rem;
  color: #fff;
  // box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    filter: opacity(0.9);
    // box-shadow: 4px 4px 4px rgba(0, 0, 0, 0);
  }

  &__icon {
    width: 64px;
    height: 64px;
    margin-left: 4px;
  }

  > p {
    padding: 16px 10px;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
  }
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
