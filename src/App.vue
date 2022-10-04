<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
body,
html {
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
}
* {
  font-weight: normal;
}
#app {
  height: 100vh;
}
</style>
