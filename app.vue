<template>
  <div id="dashboard-root-frame">
    <sidebar/>
    <div id="dashboard-root-content">
      <NuxtPage/>
    </div>
  </div>
</template>
<style scoped>
#dashboard-root-frame {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}

#dashboard-root-content {
  width: calc(100vw - 200px);
  height: 100%;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Zen Maru Gothic', 'Klee One', 'Noto Color Emoji', sans-serif;
}
</style>