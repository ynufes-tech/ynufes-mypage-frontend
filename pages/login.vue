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
  <div class="d-flex m-0">
    <button class="login-button d-flex" @click="goAuthURL()">
      <img src="/line_btn_base.png" class="login-button__icon" />
      <span>LINEでログイン</span>
    </button>
  </div>
</template>
<style scoped lang="scss"></style>
