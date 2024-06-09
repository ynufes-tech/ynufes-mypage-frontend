<script lang="ts" setup>
import { vOnClickOutside } from '@vueuse/components'
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
const isOrgCardDisplayed = ref(false)

// 表示切り替えのために、 isOrgCardDisplayed の論理値を逆転させる
const toggleOrgCard = () => {
  isOrgCardDisplayed.value = !isOrgCardDisplayed.value
}

const activateOrg = async (orgId: string) => {
  await useOrg().setCurrentOrg(orgId)
  orgInfo.value = await useOrg().getCurrentOrg()
  toggleOrgCard()
}
</script>
<template>
  <div
    id="mobile-header"
    class="z-2 util-color-bg-sub w-full h-3rem flex align-items-center justify-content-between relative"
  >
    <img src="/mypage-logo-prime.svg" class="h-2rem px-2" />
    <div
      class="flex w-fit align-items-center util-ha-color-bg-main p-1 border-round-sm px-2"
      @click="toggleOrgCard"
    >
      <p v-if="orgInfo" class="text-right text-xs">
        {{ orgInfo.event_name }}<br />
        <span class="font-bold">
          {{ orgInfo.org_name }}
        </span>
      </p>
      <i class="pi pi-user text-xl ml-1"></i>
    </div>
    <div
      v-if="isOrgCardDisplayed"
      v-on-click-outside="toggleOrgCard"
      class="absolute z-5 util-color-bg-sub shadow-3 p-2 border-round-md w-fit"
      style="right: 0.5rem; top: 0.5rem"
    >
      <div
        v-for="org in accessibleOrgs"
        class="flex align-item-center justify-content-between cursor-pointer my-1 p-1 border-round-sm util-ha-color-bg-main"
        @click="activateOrg(org.id)"
      >
        <p class="text-sm mr-6">{{ org.name }}</p>
        <i
          v-if="orgInfo?.org_id === org.id"
          class="pi pi-check-circle text-sm"
        ></i>
        <i v-if="orgInfo?.org_id !== org.id" class="pi pi-circle text-sm"></i>
      </div>
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
