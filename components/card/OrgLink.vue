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
  <div v-bind="props" class="">
    <!--企画団体名を指すorgName-->
    <p class="">
      {{ orgName }}
    </p>
    <div class="">
      <img src="/white-ynufes-cube.svg" class="" alt="Icon of YNU FES." />
      <!--22常盤などのイベント名を指すeventName-->
      <p class="">
        {{ eventName }}
      </p>
    </div>
  </div>
</template>
