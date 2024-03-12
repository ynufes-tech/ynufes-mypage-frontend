<script lang="ts" setup>
const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  },
  backLink: {
    type: String,
    default: '/'
  }
})
</script>

<template>
  <h1>{{ props.pageTitle }}</h1>
</template>

<style scoped></style>
