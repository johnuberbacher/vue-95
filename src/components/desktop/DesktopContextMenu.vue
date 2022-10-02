<template>
  <div
    v-bind:style="{
      left: this.position[0] + 'px',
      top: this.position[1] + 'px',
    }"
    class="desktopContextMenu"
  >
    <div class="link">
      <span>Arrange Icons</span><span>›</span>
      <div class="submenu">
        <div class="link">Name</div>
        <div class="link">Size</div>
        <div class="link">Item Type</div>
      </div>
    </div>
    <div class="divider"></div>
    <div v-on:click="this.$emit('crtMode')" class="link">
      Disable&nbsp;CRT/Flicker
    </div>
    <div v-on:click="this.$emit('fullscreenMode')" class="link">
      Fullscreen Mode
    </div>
    <div class="divider"></div>
    <div class="link">
      <span>New</span><span>›</span>
      <div class="submenu">
        <div class="link">Folder</div>
        <div class="divider"></div>
        <div class="link" v-on:click="this.$emit('createFile')">Text Document</div>
        <div class="link">Bitmap Image</div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="link">Properties</div>
  </div>
</template>
<script>
export default {
  name: "DesktopContextMenu",
  props: {
    position: Array,
  },
  data() {
    return {
      showContextMenu: this.active,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.desktopContextMenu {
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
