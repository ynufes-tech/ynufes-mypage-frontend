<script lang="ts" setup>
interface Props {
  question: string
  description?: null | string
  options: string[]
}
const props = withDefaults(defineProps<Props>(), {
  question: '使用したい教室名を選択してください(デフォルト)',
  description: '複数選択可能ですので、選択したいだけ選択してね',
  options: () => ['経済101', '教育1305', '情報基盤センター']
})
interface Emits {
  (e: 'update:checkbox', checkboxOption: string[]): void
}
const emits = defineEmits<Emits>()
const checked = ref<string[]>([])
const changed = (event: Event) => {
  if (!(event.target instanceof HTMLInputElement)) return
  if (!checked.value.includes(event.target.value)) {
    checked.value.push(event.target.value)
  } else {
    const index = checked.value.indexOf(event.target.value)
    checked.value.splice(index, 1)
  }
  emits('update:checkbox', checked.value)
}
</script>

<template>
  <v-card elevation="2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <div v-for="option in options">
      <v-checkbox :label="option" :value="option" @input="changed"></v-checkbox>
    </div>
  </v-card>
</template>
