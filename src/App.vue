<template>
  <Main />
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body,
#app {
  min-height: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  width: 100%;
  height: 100%;
  font-weight: 300;
  font-size: 12px;
  overflow: hidden;
}
</style>
