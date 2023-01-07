export default defineNuxtPlugin(async (app) => {
    const {$config} = useRuntimeConfig()
    const authorization = useCookie('Authorization')
    console.log('Authorization: ' + authorization.value)
    if (!authorization.value) {
        console.log('no cookie')
        return
    }
    const {data: post, error} = await useFetch('http://localhost:1306/api/v1/user/info', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authorization.value,
        }
    })
    if (error.value != null) {
        console.log('401 Unauthorized')
        console.log(error)
        return
    } else {
        console.log('200 OK')
        console.log(post)
    }
})