<script lang="ts" setup>
useHead({ title: 'login' })
const config = useRuntimeConfig()
definePageMeta({
  layout: false
})
const goAuthURL = async () => {
  const { data, error } = await useFetch(
    config.public.baseURL + '/api/v1/auth/line/state',
    {
      method: 'GET'
    }
  )
  if (error.value) {
    console.log('STATE値の取得に失敗しました。CORSを無効化してください')
    console.log(error.value)
    return
  }
  if (data.value === '') console.log('stateの取得失敗')
  window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${config.public.lineClientID}&redirect_uri=${config.public.callbackURL}&state=${data.value}&scope=openid%20profile%20email`
}
</script>
<template>
  <div class="page-login">
    <img src="~/assets/MyPageLogoBig.svg" />
    <img src="~/assets/LoginImage.svg" />
    <div class="login-button d-flex" @click="goAuthURL()">
      <img src="~/assets/LINE-login-button.svg" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-login {
  width: 100vw;
  height: 100vh;
  background-color: #f5f6f4;
}
</style>
