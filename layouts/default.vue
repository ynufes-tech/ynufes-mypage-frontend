<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
import BottomAppBar from './BottomAppBar.vue'
import MobileHeader from './MobileHeader.vue'

useHead({
  title: 'Top',
  titleTemplate: (title) => `${title} | YNU-fes`
})

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

const user = await useLogin().getCurrentUser()
</script>
<template>
  <div id="dashboard-root-frame" class="util-color-bg-main">
    <MobileHeader />
    <div id="dashboard-pc-frame">
      <AppSidebar />
      <div id="dashboard-root-content">
        <slot />
      </div>
    </div>
    <BottomAppBar />
  </div>
</template>
<style lang="scss" scoped>
#dashboard-root-frame {
  width: 100vw;
  min-height: 100svh;
}

#dashboard-pc-frame {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
}

#dashboard-root-content {
  margin-left: 180px;
  width: calc(100svw - 180px);
  height: 100%;
}

@media (max-aspect-ratio: 3/4) and (max-width: 1024px) {
  #dashboard-root-content {
    margin-left: 0;
    width: 100svw;
  }
}
@media (min-aspect-ratio: 3/4) and (max-width: 1024px) {
  #dashboard-root-content {
    margin-left: 80px;
    width: 100svw;
  }
}
@media (max-height: 576px) {
  #dashboard-root-content {
    margin-left: 0;
    width: 100svw;
  }
}
</style>
