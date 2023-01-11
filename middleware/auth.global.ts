import { useLogin } from "~/composables/useLogin";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isSignedIn, getCurrentUser } = useLogin();
  if (to.path.startsWith("/login")) {
    if (!isSignedIn()) return;
    switch (getCurrentUser().status) {
      case 1:
        return navigateTo("/welcome");
      case 2:
        return navigateTo("/");
      default:
        return;
    }
  }
  if (to.path.startsWith("/welcome")) {
    if (!isSignedIn()) return navigateTo("/login");
    switch (getCurrentUser().status) {
      case 1:
        return;
      case 2:
        return navigateTo("/");
    }
  }
  if (!isSignedIn()) return navigateTo("/login");
  if (getCurrentUser().status === 1) {
    return navigateTo("/welcome");
  }
});
