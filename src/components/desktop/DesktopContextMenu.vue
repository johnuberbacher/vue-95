<template>
  <div
    v-bind:style="{
      left: this.position[0] + 'px',
      top: this.position[1] + 'px',
    }"
    v-if="this.active"
    class="desktopContextMenu"
  >
    Tester
  </div>
</template>
<script >
export default {
  name: "DesktopContextMenu",
  props: {
    active: {
      type: Boolean,
    },
    position: {
        type: Array,
    },
  }
};
</script>
<style lang="scss" scoped>
.desktopContextMenu {
  position: absolute;
  min-width: 128px;
  z-index: 1;
  padding: 2px;
  background-color: rgba(191, 193, 192, 1);
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
}
</style>