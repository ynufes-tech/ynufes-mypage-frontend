<script setup>
import FormCard from '@/components/atoms/card/status'
</script>
<template>
  <main class="main-content-wrapper">
    <h1 style="margin-bottom: 40px">{{ $route.params.orgName }}</h1>

    <h2 style="margin-bottom: 20px">フォーム提出状況</h2>
    <div class="cards">
      <FormCard :status="1" title="受理済みのフォーム" />
      <FormCard :status="2" title="提出済みのフォーム" />
      <FormCard :status="3" title="期限内未提出のフォーム" />
      <FormCard :status="4" title="期限間近未提出のフォーム" />
      <FormCard :status="5" title="期限超過未提出のフォーム" />
    </div>
  </main>
</template>
<style lang="scss" scoped>
.main-content-wrapper {
  margin: 20px 40px;
}
.count-down {
  margin: 40px 0;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1000px;
  gap: 10px;
}
</style>
