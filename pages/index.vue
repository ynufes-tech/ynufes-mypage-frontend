<template>
  <div>
    <h1>企画団体マイページへようこそ</h1>
    <!--    <v-btn class="ma-5" color="primary"-->
    <!--           href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz">-->
    <!--      my-btn-->
    <!--    </v-btn>-->
    <!--    <nuxt-link to="/about">Go to about</nuxt-link>-->
    <div class="cards">
      <FormCard :status="1" title="受理済みのフォーム"/>
      <FormCard :status="2" title="提出済みのフォーム"/>
      <FormCard :status="3" title="期限内未提出のフォーム"/>
      <FormCard :status="4" title="期限間近未提出のフォーム"/>
      <FormCard :status="5" title="期限超過未提出のフォーム"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1000px;
  gap: 10px;
}
</style>
<script setup>
import FormCard from "../components/org/FormLinkCard";

</script>