<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    orgName: string
  }>(),
  {
    orgName: 'お散歩サークルてくてく'
  }
)
</script>
<template>
  <v-card elevation="6" class="org-page-link-card">
    <p class="event-name">23常盤</p>
    <p class="org-name">{{ orgName }}</p>
  </v-card>
</template>

<style scoped lang="scss">
.org-page-link-card {
  width: 200px;
  height: 200px;
  padding: 0 10px;
  text-align: center;
  font-family: 'Zen Maru Gothic';
  border-radius: 20px;
  background-image: url('/logo_background.svg');
  background-color: #fff;
  transition: all 0.3s;

  .event-name {
    color: rgba(29, 38, 48, 0.3);
    font-weight: bold;
  }

  .org-name {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2rem;
  }

  &:hover {
    scale: 0.99;
  }
}
</style>
