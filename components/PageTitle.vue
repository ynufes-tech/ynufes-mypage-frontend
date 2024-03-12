<script lang="ts" setup>
const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  },
  backLink: {
    type: String
  }
})
</script>

<template>
  <div class="page-title">
    <a v-if="props.backLink" class="util-color-text" :href="props.backLink">
      <i class="pi pi-angle-left text-xl mr-1 font-bold inline"></i>
    </a>
    <i
      v-if="!props.backLink"
      class="pi pi-angle-right text-xl mr-1 font-bold inline"
    ></i>
    <h1 class="text-xl font-bold inline vertical-align-text-top">
      {{ props.pageTitle }}
    </h1>
  </div>
</template>

<style scoped></style>
