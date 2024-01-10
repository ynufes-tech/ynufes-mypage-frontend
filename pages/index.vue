<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
useHead({ title: 'top' })

const showLogin = ref(false)
const showOrgs = ref(false)
onBeforeMount(() => {
  console.log(document.cookie)
})

const userName = ref('MyPageユーザ') // 一時的な処置
// const greetings = ['こんにちは!', 'Hello!', 'やっほ〜', 'よくぞ参った！']
// function randomGreetings() {
//   const length = greetings.length
//   const randomIndex = Math.floor(Math.random() * length)
//   return greetings[randomIndex]
// }
</script>
<template>
  <main class="main-content-wrapper">
    <!-- <h1>{{ randomGreetings() }} {{ userName }}さん</h1> -->
    <div class="count-down"></div>
    <CardOrgLink />
  </main>
</template>
<style>
.main-content-wrapper {
  margin: 20px 40px;
}
.count-down {
  margin: 40px 0;
}
</style>
