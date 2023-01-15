<script lang="ts" setup>
const props = defineProps({
  orgName: {
    type: String,
    default: "お散歩サークル てくてく",
  },
});
</script>
<template>
    <v-card elevation="6" class="org-page-link-card">
      <p class="org-name">{{ props.orgName }}</p>
      <div class="link-card-divider"></div>
    </v-card>
</template>

<style scoped lang="scss">

  .org-page-link-card {
    width: 200px;
    height: 200px;
    padding: 20px 10px 0px;
    font-family: "Zen Maru Gothic";
    text-align: center;
    transition: all 0.3s;
    border-radius: 20px;
    background-color: #fff;

    .org-name {
      font-size: 1.2rem;
      font-weight: bold;
      line-height: 1.2rem;
    }

    &:hover {
      scale: 0.99;
    }
  }

</style>
