<template>
  <main class="main-content-wrapper">
    <h1>企画団体マイページへようこそ</h1>
    <div class="count-down"></div>
    <OrgPageLinkCard />
    <!--    <v-btn class="ma-5" color="primary"-->
    <!--           href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz">-->
    <!--      my-btn-->
    <!--    </v-btn>-->
    <!--    <nuxt-link to="/about">Go to about</nuxt-link>-->
  </main>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";

const showLogin = ref(false);
const showOrgs = ref(false);
onBeforeMount(() => {
  console.log(document.cookie);
});
</script>
<style>
.main-content-wrapper {
  margin: 20px 10%;
}
.count-down {
  margin: 40px 0;
}
</style>
