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
  <div
    class="page-login flex flex-column w-screen h-screen justify-content-center align-items-center util-color-bg-main"
  >
    <div
      class="images flex flex-column w-8 justify-content-around align-items-center"
    >
      <img
        src="~/assets/MyPageLogoBig.svg"
        class="mypage-logo w-9 max-w-16rem"
        alt="サイトロゴ"
      />
      <img
        src="~/assets/LoginImage.svg"
        class="login-image w-full max-w-28rem"
        alt="キービジュアル"
      />
      <div class="login-button d-flex w-full">
        <img
          src="~/assets/LINE-login-button.svg"
          @click="goAuthURL()"
          class="block w-8 max-w-17rem mx-auto my-0"
          alt="ラインログインボタン"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media screen and (min-width: 1080px) {
  .images {
    height: 90vh;
  }
}
// page transitionのアニメーション
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
