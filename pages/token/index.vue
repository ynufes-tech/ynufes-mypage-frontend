<script lang='ts' setup>
import { useAuthStore } from '~/stores/auth'

// get token from query
const route = useRoute()
const token = route.query.token as string

// set token to store
const authStore = useAuthStore()
authStore.setToken(token)

// redirect to home
useRouter().push('/')
</script>
