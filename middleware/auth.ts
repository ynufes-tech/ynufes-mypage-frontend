import { useIsLoggedIn } from "~/composables/useLogin";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    const IsLoggedIn = await useIsLoggedIn();
    if (!IsLoggedIn) return navigateTo("/login");
  }
});
