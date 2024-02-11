<script lang="ts" setup>
useHead({ title: 'welcome' })
definePageMeta({
  layout: false
})
const valid = ref<boolean>(false)
const firstName = ref<string>('')
const lastName = ref<string>('')
const firstNameKana = ref<string>('')
const lastNameKana = ref<string>('')
const email = ref<string>('')
const gender = ref<string>('')
const studentID = ref<number>()
const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])
const checked = ref<boolean>(false)
</script>
<template>
  <main class="surface-ground w-screen min-h-screen p-3">
    <Card class="bg-white shadow-none w-95 m-auto mt-2 border-round-lg">
      <template #title>ボタンギャラリー</template>
      <template #content>
        <div class="flex gap-3">
          <Button label="ボタン" icon="pi pi-check" />
          <Button type="button" label="Button 1"></Button>
          <Button type="button" label="Button 2" severity="secondary"></Button>
          <Button type="button" label="Button 3" severity="help"></Button>
        </div>
      </template>
    </Card>
    <Card class="bg-white shadow-none w-95 m-auto mt-2 border-round-lg">
      <template #title>フォームギャラリー</template>
      <template #content>
        <InputGroup class="flex gap-4">
          <FloatLabel class="w-20rem">
            <InputText v-model="firstName" type="text" />
            <label for="username">姓</label>
          </FloatLabel>
          <FloatLabel class="w-20rem">
            <InputText v-model="lastName" type="text" />
            <label for="username">名</label>
          </FloatLabel>
        </InputGroup>
        <InputGroup class="flex mt-4 gap-4">
          <FloatLabel class="w-20rem">
            <InputText v-model="firstNameKana" type="text" />
            <label for="username">セイ</label>
          </FloatLabel>
          <FloatLabel class="w-20rem">
            <InputText v-model="lastNameKana" type="text" />
            <label for="username">メイ</label>
          </FloatLabel>
        </InputGroup>
        <FloatLabel class="mt-4">
          <InputText v-model="email" type="email" class="w-30rem" />
          <label for="username">メールアドレス</label>
        </FloatLabel>
        <InputGroup class="mt-4">
          <div>
            <RadioButton
              v-model="gender"
              inputId="gender1"
              name="gender"
              value="0"
            />
            <label for="gender1" class="p-2">男性</label>
          </div>
          <div>
            <RadioButton
              v-model="gender"
              inputId="gender2"
              name="gender"
              value="1"
            />
            <label for="gender2" class="p-2">女性</label>
          </div>
        </InputGroup>
        <FloatLabel class="mt-4">
          <InputNumber
            v-model="studentID"
            inputId="student-id"
            :useGrouping="false"
            mode="decimal"
          />
          <label for="student-id">学籍番号</label>
        </FloatLabel>
        <div class="card flex justify-content-center">
          <Listbox
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            class="w-full md:w-14rem"
          />
        </div>
        <Checkbox v-model="checked" :binary="true" />
      </template>
    </Card>
  </main>
</template>
