import {useLogin} from "~/composables/useLogin";

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path.startsWith('/login')) return;
    const {isSignedIn, getCurrentUser} = useLogin();
    if (!isSignedIn()) {
        return navigateTo('/login');
    }
    if (getCurrentUser().status === 1) {
        return navigateTo('/welcome');
    }
});
