<template>
  <main class="main-content-wrapper">
    <h1>企画団体マイページへようこそ</h1>
    <div class="count-down"></div>
    <TopOrgPageLinkCard />
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
  margin: 20px 40px;
}
.count-down {
  margin: 40px 0;
}
</style>
