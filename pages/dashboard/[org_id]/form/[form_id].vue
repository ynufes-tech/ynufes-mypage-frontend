<script setup lang="ts">
const array = ref<string>()
const func = (eventData: string) => {
  array.value = eventData
}
</script>
<template>
  <v-sheet width="640" class="mx-auto">
    <v-form>
      <!-- <FormQuestionsCheckbox @update:checkbox="func" /> -->
      <!-- <FormQuestionsRadio @update:radio="func" /> -->
      <!-- <FormQuestionsTextarea @update:textarea="func" /> -->
      <FormQuestionsText @update:text="func" />
    </v-form>
    <p>{{ array }}</p>
  </v-sheet>
</template>
