<script lang="ts" setup>
interface Props {
  question: string
  description?: null | string
  label?: null | string
}
const props = withDefaults(defineProps<Props>(), {
  question: 'その他、感想や意見等ございましたらご回答お願いいたします',
  label: '例) 特になし'
})
interface Emits {
  (e: 'update:textarea', textarea: string): void
}
const emits = defineEmits<Emits>()
const textarea = ref<string>('')
const changed = () => {
  emits('update:textarea', textarea.value)
}
</script>

<template>
  <v-card elevation="2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-textarea
      v-model="textarea"
      clearable
      counter
      variant="outlined"
      class="w-90 mx-auto"
      :label="label || ''"
      @input="changed"
    ></v-textarea>
  </v-card>
</template>
