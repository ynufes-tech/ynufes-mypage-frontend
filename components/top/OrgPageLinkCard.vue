<script lang="ts" setup>
const props = defineProps({
  orgName: {
    type: String,
    default: "お散歩サークル てくてく",
  },
});
</script>
<template>
  <NuxtLink :to="'/org/' + props.orgName" class="org-page-link">
    <v-card elevation="6" class="org-page-link-card">
      <p class="org-name">{{ props.orgName }}</p>
      <div class="link-card-divider"></div>
      <span class="link-card-text">団体ページへ移動</span>
    </v-card>
  </NuxtLink>
</template>

<style scoped lang="scss">
.org-page-link {
  display: block;
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
  background-color: #fff;

  .org-page-link-card::before {
    content: "22常盤";
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 40px;
    padding-top: 10px;
    background-color: #1d2630;
    color: #fff;
  }
  .org-page-link-card {
    width: 200px;
    height: 200px;
    padding: 60px 10px 0px;
    position: relative;
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

    .link-card-divider {
      position: absolute;
      left: 0;
      bottom: 40px;
      width: 200px;
      border-top: 2px solid #1d2630;
    }

    .link-card-text {
      position: absolute;
      bottom: 10px;
      left: 0;
      text-align: center;
      width: 200px;
      border-top: #1d2630;
    }

    &:hover {
      transform: scale(0.99);
    }
  }
}
</style>
