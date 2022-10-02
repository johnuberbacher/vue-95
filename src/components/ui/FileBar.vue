<template>
  <div class="file-bar">
    <div class="link">
      File
      <div class="submenu">
        <div class="link">Save</div>
        <div class="link">Exit</div>
      </div>
    </div>
    <div class="link">
      File
      <div class="submenu">
        <div class="link">Save</div>
        <div class="link">Exit</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FileBar",
};
</script>
<style lang="scss">
.file-bar {
  width: 100%;
  background-color: rgba(191, 193, 192, 1);
  padding: 2px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  .link {
    cursor: default;
    padding: 0px 4px 0px 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 18px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 4px;
      left: 4px;
      width: 6px;
      height: 1px;
      background: #000000;
    }
    &:hover,
    &:active {
      background-color: $highlightV95;
      color: white;
      &:after {
        content: "";
        position: absolute;
        bottom: 4px;
        left: 4px;
        width: 6px;
        height: 1px;
        background: #ffffff;
      }
      > .submenu {
        display: block;
      }
    }
    .submenu {
      @include v95;
      color: initial;
      position: absolute;
      min-width: 122px;
      top: 100%;
      left: 0;
      display: none;
      padding: 2px;
      z-index: 10;
      user-select: none;
      background-color: rgba(191, 193, 192, 1);
    }
  }
}
</style>
