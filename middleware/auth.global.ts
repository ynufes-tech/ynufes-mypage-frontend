import {useLogin} from "~/composables/useLogin";

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path.startsWith('/login')) return;
    const {isSignedIn} = useLogin();
    if (!isSignedIn()) {
        return navigateTo('/login');
    }
});
