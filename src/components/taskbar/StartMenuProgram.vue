<template>
  <div class="start-menu-program">
    <span
      class="icon"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/icon/' + icon + '.png') + ')',
      }"
    ></span>
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "StartMenuProgram",
  props: {
    title: String,
    icon: String,
  },
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.start-menu-program {
  cursor: pointer;
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
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    background-size: 24px 24px;
    position: relative;
    display: block;
  }
}
</style>