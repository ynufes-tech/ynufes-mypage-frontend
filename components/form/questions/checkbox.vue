<script lang="ts" setup>
interface Props {
  question: string
  description?: null | string
  options: string[]
}
const props = withDefaults(defineProps<Props>(), {
  question: '使用したい教室名を選択してください',
  description: '',
  options: () => ['経済101', '教育1305', '情報基盤センター全館']
})
</script>

<template>
  <v-card width="100%" elevation="2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-checkbox v-for="option in options" :label="option"></v-checkbox>
  </v-card>
</template>

<style scoped></style>
