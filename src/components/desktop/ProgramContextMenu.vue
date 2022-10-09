<template>
  <div
    v-bind:style="{
      left: props.position[0] + 'px',
      top: props.position[1] + 'px',
    }"
    class="contextMenu"
  >
    <div class="link">Lorem Ipsum</div>
    <div class="link">Lorem Ipsum</div>
    <div class="divider"></div>
    <div class="link">Lorem Ipsum</div>
    <div class="link">Lorem Ipsum</div>
  </div>
</template>
<script setup>
const props = defineProps(["position"]);
</script>
<style lang="scss" scoped>
.contextMenu {
  @include v95();
  position: absolute;
  min-width: 122px;
  padding: 2px;
  z-index: 10;
  user-select: none;
  .divider {
    margin-right: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(254, 254, 254) rgb(223 223 223) rgb(254, 254, 254)
      rgb(254, 254, 254);
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 24px;
    padding: 4px 8px 4px 16px;
    position: relative;
    &:hover {
      background-color: $highlightV95;
      color: white;
    }
    &:hover,
    &:active {
      background-color: $highlightV95;
      color: white;
      > .submenu {
        display: block;
      }
    }
    .submenu {
      @include v95;
      color: initial;
      position: absolute;
      min-width: 122px;
      top: 0;
      left: 100%;
      display: none;
      padding: 2px;
      z-index: 10;
      user-select: none;
      background-color: rgba(191, 193, 192, 1);
    }
    span {
      &:nth-of-type(2) {
        font-weight: bold;
      }
    }
  }
}
</style>
