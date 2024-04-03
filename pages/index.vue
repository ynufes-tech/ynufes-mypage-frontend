<script lang="ts" setup>
import { useOrg } from '~/composables/useOrg'
useHead({ title: 'top' })

const accessibleOrgs: Ref<AccessibleOrg[]> = ref(
  await useOrg()
    .getAccessibleOrgs()
    .catch((e) => {
      console.error(e)
      return []
    })
)
const orgInfo: Ref<OrgInfo | null> = ref(
  await useOrg()
    .getCurrentOrg()
    .catch((e) => {
      console.error(e)
      return null
    })
)
const switchOrg = async (orgId: string) => {
  await useOrg().setCurrentOrg(orgId)
  orgInfo.value = await useOrg().getCurrentOrg()
}
</script>
<template>
  <main>
    <div v-if="accessibleOrgs.length === 0">
      <p class="mx-auto w-fit mt-4 xl:ml-8">
        アクセスできる企画団体が存在しません
      </p>
    </div>
    <div v-else>
      <pre class="util-color-bg-main w-fit p-5 mx-auto mt-4">{{
        'アクセスできる企画団体一覧: ' +
        JSON.stringify(accessibleOrgs, null, '\t')
      }}</pre>
      <pre class="util-color-bg-main w-fit p-5 mx-auto mt-4">{{
        'デフォルトの企画団体情報: ' + JSON.stringify(orgInfo, null, '\t')
      }}</pre>
    </div>
    <div class="util-color-bg-main w-fit p-5 mx-auto mt-4">
      <p
        v-for="org in accessibleOrgs"
        class="util-color-border border-solid m-2 border-round p-2 border-round-xl hover:text-primary hover:border-primary"
      >
        <span @click="switchOrg(org.id)">{{ org.name }}</span>
      </p>
    </div>
  </main>
</template>
<style></style>
