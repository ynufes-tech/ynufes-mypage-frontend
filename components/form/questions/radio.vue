<script lang="ts" setup>
interface Props {
  question: string
  description?: null | string
  options: string[]
}
const props = withDefaults(defineProps<Props>(), {
  question: '使用したい教室名を選択してください(デフォルト)',
  description: 'ひとつだけ選択してください',
  options: () => ['経済101', '教育1305', '情報基盤センター']
})
interface Emits {
  (e: 'update:radio', radioOption: string): void
}
const emits = defineEmits<Emits>()
const checked = ref<string>()
const changed = (event: Event) => {
  if (!(event.target instanceof HTMLInputElement)) return
  if (!(checked.value === event.target.value)) {
    checked.value = event.target.value
  } else {
    checked.value = ''
  }
  emits('update:radio', checked.value)
}
</script>

<template>
  <v-card elevation="2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-radio-group>
      <div v-for="option in options">
        <v-radio :label="option" :value="option" @input="changed"></v-radio>
      </div>
    </v-radio-group>
  </v-card>
</template>
