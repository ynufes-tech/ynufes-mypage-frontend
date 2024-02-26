<script lang='ts' setup>
import { useAuthStore } from '~/stores/auth'

// get token from query
const route = useRoute()
const token = route.query.code as string

// set token to store
const ul = useLogin()
await ul.authWithCode(token)

// redirect to home
useRouter().push('/')
</script>
