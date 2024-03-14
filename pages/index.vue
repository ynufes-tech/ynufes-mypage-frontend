<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { useOrg, type AccessibleOrg } from '~/composables/useOrg'
useHead({ title: 'top' })

const showLogin = ref(false)
const showOrgs = ref(false)
onBeforeMount(() => {
  console.log(document.cookie)
})
const accessibleOrgs: AccessibleOrg[] | null =
  await useOrg().getAccessibleOrgs()
const orgInfo =
  accessibleOrgs != null
    ? await useOrg().getOrgInfo(accessibleOrgs[0].id)
    : null
</script>
<template>
  <main class="main-content-wrapper">
    <div v-if="!accessibleOrgs">
      <p class="mx-auto w-fit mt-4 xl:ml-8">
        アクセスできる企画団体が存在しません
      </p>
    </div>
    <div v-else></div>
  </main>
</template>
<style></style>
