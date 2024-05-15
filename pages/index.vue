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
    <div class="p-2 overflow-x-scroll w-full white-space-nowrap">
      <FormStatusCard
        class="mr-2 inline-block white-space-normal"
        :status="0"
        :deadline="new Date('2024-05-15T23:59:59').toISOString()"
      />
      <FormStatusCard
        title="物品貸借申請フォーム"
        class="mr-2 inline-block white-space-normal"
        :status="1"
        :deadline="new Date(2024, 5, 8, 12, 12).toISOString() /**6/1 */"
      />
      <FormStatusCard
        title="目安箱フォーム"
        class="mr-2 inline-block white-space-normal"
        :status="1"
        :deadline="new Date(2024, 4, 1, 12, 12).toISOString() /**6/1 */"
      />
      <FormStatusCard
        class="mr-2 inline-block white-space-normal"
        :status="0"
        :deadline="new Date(2024, 4, 15, 12, 12).toISOString() /** 7/30 */"
      />
    </div>
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
