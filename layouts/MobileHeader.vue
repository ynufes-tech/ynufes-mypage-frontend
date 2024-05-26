<script lang="ts" setup>
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
</script>
<template>
  <div
    id="mobile-header"
    class="z-5 util-color-bg-sub w-full h-3rem p-2 flex align-items-center justify-content-between"
  >
    <img src="/mypage-logo-prime.svg" class="h-2rem" />
    <div class="flex w-fit align-items-center">
      <p v-if="orgInfo" class="text-right text-xs">
        {{ orgInfo.event_name }}<br />
        <span class="font-bold">
          {{ orgInfo.org_name }}
        </span>
      </p>
      <i class="pi pi-user text-xl ml-1"></i>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  #mobile-header {
    display: none !important;
  }
}
</style>
