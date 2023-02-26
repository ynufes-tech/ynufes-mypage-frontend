<script lang="ts" setup>
interface Props {
  question: string
  description?: null | string
  options: string[]
}
const props = withDefaults(defineProps<Props>(), {
  question: '使用したい教室名を選択してください',
  description: '',
  options: () => ['経済101', '教育1305', '情報基盤センター']
})
const checked = ref<boolean[]>([])
</script>

<template>
  <v-card width="100%" elevation="2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <div v-for="option in options">
      <v-checkbox
        v-model="checked"
        :label="option"
        :value="option"
      ></v-checkbox>
    </div>
    <p>{{ checked }}</p>
  </v-card>
</template>

<style scoped></style>
