<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    orgName: string
    eventName: string
  }>(),
  {
    orgName: 'お散歩サークルてくてく',
    eventName: '22常盤'
  }
)
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :elevation="isHovering ? 24 : 6"
      class="org-page-link-card d-flex flex-column pa-0 rounded-xl text-center"
      width="200px"
      height="200px"
    >
      <p class="org-name text-h5 font-weight-bold pa-2 pt-10">{{ orgName }}</p>
      <div
        class="event-name mt-auto h-25 bg-main-color pt-2"
        style="
          background: linear-gradient(
            40deg,
            #1d2630 20%,
            #213a57 50%,
            #1c2c87 80%
          );
        "
      >
        <img src="white-ynufes-cube.svg" class="float-left pl-4" />
        <p class="font-weight-bold text-h5 text-white">
          {{ eventName }}
        </p>
      </div>
    </v-card>
  </v-hover>
</template>

<style scoped lang="scss">
.org-page-link-card {
  font-family: 'Zen Maru Gothic';
}
</style>
