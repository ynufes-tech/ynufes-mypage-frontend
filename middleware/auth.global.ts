import { useLogin } from '~/composables/useLogin'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!useRuntimeConfig().public.enableRouting) return
  const { getCurrentUser } = useLogin()
  if (to.path.startsWith('/token')) return
  const user = await getCurrentUser()
  console.log('user', user)
  if (to.path.startsWith('/login')) {
    if (user === null) return
    switch (user.status) {
      case 1:
        return navigateTo('/welcome')
      case 2:
        return navigateTo('/')
      default:
        return
    }
  }
  if (user === null) return navigateTo('/login')
  if (to.path.startsWith('/welcome')) {
    switch (user.status) {
      case 1:
        return
      case 2:
        return navigateTo('/')
    }
  }
  if (user.status === 1) {
    return navigateTo('/welcome')
  }
})
