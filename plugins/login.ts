export default defineNuxtPlugin(async (app) => {
  const { trySignIn } = useLogin()
  await trySignIn()
})
