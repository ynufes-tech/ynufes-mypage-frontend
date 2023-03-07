<script setup lang="ts">
const array = ref<string>()
const func = (eventData: string) => {
  array.value = eventData
}
</script>
<template>
  <v-sheet width="640" class="mx-auto">
    <v-form>
      <!-- <AtomsFormQuestionsCheckbox @update:checkbox="func" /> -->
      <!-- <AtomsFormQuestionsRadio @update:radio="func" /> -->
      <!-- <AtomsFormQuestionsTextarea @update:textarea="func" /> -->
      <!-- <AtomsFormQuestionsText @update:text="func" /> -->
    </v-form>
    <p>{{ array }}</p>
  </v-sheet>
</template>
