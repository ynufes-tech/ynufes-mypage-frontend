<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
useHead({ title: 'top' })

const showLogin = ref(false)
const showOrgs = ref(false)
onBeforeMount(() => {
  console.log(document.cookie)
})
</script>
<template>
  <main class="main-content-wrapper"></main>
</template>
<style>
.main-content-wrapper {
  margin: 20px 40px;
}
.count-down {
  margin: 40px 0;
}
</style>
