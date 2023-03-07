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
  <!--企画団体ページに飛ぶためのカードコンポーネントorgPageLinkCard -->
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :elevation="isHovering ? 24 : 6"
      class="d-flex flex-column pa-0 rounded-xl text-center"
      width="200px"
      height="200px"
    >
      <!--企画団体名を指すorgName-->
      <p class="text-h5 font-weight-bold pa-2 pt-10 font-family-accent">
        {{ orgName }}
      </p>
      <div
        class="mt-auto h-25 bg-main-color pt-2"
        style="
          background: linear-gradient(
            40deg,
            #1d2630 20%,
            #213a57 50%,
            #1c2c87 80%
          );
        "
      >
        <img
          src="/white-ynufes-cube.svg"
          class="float-left pl-4"
          alt="Icon of YNU FES."
        />
        <!--22常盤などのイベント名を指すeventName-->
        <p class="font-weight-bold text-h5 text-white">
          {{ eventName }}
        </p>
      </div>
    </v-card>
  </v-hover>
</template>
