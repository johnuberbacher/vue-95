<template>
  <div class="start-menu-wrapper">
    <div class="start-menu" v-if="activeStartMenu" ref="target">
      <div class="link">Shut Down...</div>
      <div class="link">Shut Down...</div>
      <div class="link">Shut Down...</div>
      <div class="link">Shut Down...</div>
    </div>
    <div class="start" v-on:click="toggleStartMenu()">
      <div
        class="icon"
        :style="{
          backgroundImage: 'url(' + require('@/assets/icon/start.png') + ')',
        }"
      ></div>
      Start
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
  name: "StartMenu",
  data: function () {
    return {
      activeStartMenu: false,
    };
  },
  setup() {
    const target = ref(null)

    onClickOutside(target, () =>  console.log('here'))

    return (this.activeStartMenu)
  },
  methods: {
    toggleStartMenu() {
      this.activeStartMenu = !this.activeStartMenu;
    },
    closeStartMenu() {
      this.activeStartMenu = false;
    },
  },
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.start-menu-wrapper {
  position: relative;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  .start {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    padding: 2px 4px;
    font-weight: bold;
    height: 100%;
    background-color: rgba(191, 193, 192, 1);
    border-style: solid;
    border-width: 1px;
    border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
      rgb(254, 254, 254);
    box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
      rgb(132 133 132) 0px 0px 0px 1px inset;
    &:active {
      border-style: solid;
      border-width: 1px;
      border-color: rgb(10, 10, 10) rgb(254, 254, 254) rgb(254, 254, 254)
        rgb(10, 10, 10);
      box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
    }
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 4px;
      background-size: 16px 16px;
      position: relative;
      display: block;
    }
  }
  .start-menu {
    position: absolute;
    z-index: 3;
    bottom: calc(100% + 3px);
    left: -4px;
    width: 200px;
    height: 300px;
    background-color: rgba(191, 193, 192, 1);
    border-style: solid;
    border-width: 1px;
    padding: 2px 3px 3px 2px;
    border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
      rgb(254, 254, 254);
    box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
      rgb(132 133 132) 0px 0px 0px 1px inset;
    .link {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      height: 32px;
      padding: 0px 6px;
      &:active {
        background-color: $highlight;
        color: white;
      }
    }
  }
}
</style>