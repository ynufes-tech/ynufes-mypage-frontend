import { useIsLoggedIn } from "~~/composables/isLoggedIn";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    const IsLoggedIn = await useIsLoggedIn();
    if (!IsLoggedIn) return navigateTo("/login");
  }
});
