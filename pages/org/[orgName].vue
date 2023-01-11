<template>
  <main class="main-content-wrapper">
    <h1>{{ $route.params.orgName }}</h1>
    <div class="count-down"></div>
    <TopOrgPageLinkCard />
  </main>
</template>
<script setup></script>
<style>
.main-content-wrapper {
  margin: 20px 40px;
}
.count-down {
  margin: 40px 0;
}
</style>
