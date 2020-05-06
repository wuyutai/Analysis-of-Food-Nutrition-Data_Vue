<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="stylus">
html, body, #app {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
