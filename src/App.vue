<template>
 <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
    box-sizing: border-box;
}
html, body, #app {
  min-height: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*display: flex;*/
  align-items: center;
  justify-content: center;
  background-color: #000000;
}
</style>
