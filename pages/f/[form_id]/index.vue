<script setup lang="ts">
import { useForm } from '~/composables/useForm'

const route = useRoute()
const formID = route.params.form_id as string
let form: FormInfo | null = null
try {
  form = await useForm().getForm(formID)
} catch (e) {
  console.error(e)
  const form = null
}
</script>

<template>
  <div class="w-11 mx-auto mt-4">
    <div v-text="JSON.stringify(form, null, '\t')" />
    <ClientOnly>
      <Vueform size="md" :display-errors="false">
        <StaticElement name="register_title" content="Formページ" tag="h1" />
        <StaticElement name="divider" tag="hr" />
      </Vueform>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss"></style>
