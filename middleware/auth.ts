import {useLogin} from "~/composables/useLogin";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const {isSignedIn} = useLogin();
    if (!isSignedIn) {
        return "/login";
    }
});
