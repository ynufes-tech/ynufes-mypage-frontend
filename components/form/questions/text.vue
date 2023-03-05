<script lang="ts" setup>
interface Props {
  question: string
  description?: null | string
  label?: null | string
}
const props = withDefaults(defineProps<Props>(), {
  question: '学部を教えてください',
  label: '例) 経済学部'
})
interface Emits {
  (e: 'update:text', text: string): void
}
const emits = defineEmits<Emits>()
const text = ref<string>('')
const changed = () => {
  emits('update:text', text.value)
}
</script>

<template>
  <v-card elevation="2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-text-field
      v-model="text"
      clearable
      class="w-90 mx-auto"
      :label="label || ''"
      @input="changed"
    ></v-text-field>
  </v-card>
</template>
