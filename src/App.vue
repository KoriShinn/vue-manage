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
  }
  * {
    font-weight: normal;
  }
  #app{
    height: 100vh;
  }
</style>
