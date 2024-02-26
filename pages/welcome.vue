<script lang="ts" setup>
import { useLogin } from '~/composables/useLogin'
import { useUserInfo } from '~/composables/useUserInfo'
useHead({ title: 'welcome' })
definePageMeta({
  layout: false
})
const firstName = ref<string>('')
const lastName = ref<string>('')
const firstNameKana = ref<string>('')
const lastNameKana = ref<string>('')
const email = ref<string>('')
const gender = ref<number>()
const studentID = ref<string>()
const checked = ref<boolean>()

const submit = async () => {
  if (!checked.value) {
    return
  }
  const userInfo: UserInfo = {
    name_first: firstName.value,
    name_first_kana: firstNameKana.value,
    name_last: lastName.value,
    name_last_kana: lastNameKana.value,
    email: email.value,
    gender: gender.value,
    student_id: studentID.value
  }
  await useUserInfo().updateUserInfo(userInfo)

  console.log(userInfo)
}

const user = await useLogin().getCurrentUser()
</script>
<template>
  <main class="surface-ground w-screen min-h-screen p-3">
    <div class="flex justify-content-center mb-4">
      <Avatar :image="user?.profile_picture" size="xlarge" shape="circle" />
    </div>
    <Card
      class="bg-white shadow-none w-98 m-auto mt-2 border-round-lg"
      style="max-width: 1024px"
    >
      <template #content>
        <p class="text-xl font-bold mb-2">お名前</p>
        <InputGroup class="flex gap-3">
          <FloatLabel class="min-w-20rem">
            <InputText
              v-model="firstName"
              type="text"
              class="border-round-lg"
            />
            <label for="username">姓</label>
          </FloatLabel>
          <FloatLabel class="min-w-20rem">
            <InputText v-model="lastName" type="text" class="border-round-lg" />
            <label for="username">名</label>
          </FloatLabel>
        </InputGroup>
        <p class="text-xl font-bold mb-2 mt-3">お名前(カタカナ)</p>
        <InputGroup class="flex gap-3">
          <FloatLabel class="min-w-20rem">
            <InputText
              v-model="firstNameKana"
              type="text"
              class="border-round-lg"
            />
            <label for="username">セイ</label>
          </FloatLabel>
          <FloatLabel class="min-w-20rem">
            <InputText
              v-model="lastNameKana"
              type="text"
              class="border-round-lg"
            />
            <label for="username">メイ</label>
          </FloatLabel>
        </InputGroup>
        <p class="text-xl font-bold mb-2 mt-3">メールアドレス</p>
        <div class="">
          <InputText
            v-model="email"
            type="email"
            class="border-round-lg w-full"
          />
        </div>
        <p class="text-xl font-bold mb-2 mt-3">性別</p>
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

        <p class="text-xl font-bold mb-2 mt-3">学籍番号</p>
        <div class="">
          <InputText
            v-model="studentID"
            inputId="student-id"
            :useGrouping="false"
            type="number"
            class="border-round-lg w-full"
          />
        </div>
      </template>
    </Card>
    <Card
      class="util-color-bg-main shadow-none w-98 m-auto mt-1 border-round-lg"
      style="max-width: 1024px"
    >
      <template #content>
        <p>
          ※個人情報の詳しい取扱いに関しましては、<a
            href="https://ynu-fes.notion.site/7ea030037f6e4226b0f3ca7476e98453?pvs=4"
            target="_blank"
            noreferrer
            noopener
            >こちら</a
          >のリンクからご確認ください。
        </p>
        <div class="flex align-items-center mt-3">
          <Checkbox v-model="checked" class="" binary="true" />
          <label class="text-sm util-color-text-danger underline">
            上記の個人情報の取扱いについて同意します。
          </label>
        </div>
      </template>
    </Card>

    <div class="flex justify-center">
      <Button
        label="登録"
        class="px-4 m-auto mt-3 border-round-lg"
        @click="submit"
      />
    </div>
  </main>
</template>
