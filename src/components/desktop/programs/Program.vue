<template>
  <div class="program">
    <span
      class="icon"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/icon/my-computer.png') + ')',
      }"
    ></span>
    <span class="title">My Computer</span>
  </div>
</template>
<script>
export default {
  name: "Program",
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.program {
  height: 72px;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2px;
  color: white;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  .title {
    border: 1px solid transparent;
    cursor: default;
  }
  .icon {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    background-size: 32px 32px;
    position: relative;
    display: block;
  }
  &:hover {
    span.title {
      background-color: $highlight;
      border: 1px dotted #939393;
    }
    .icon {
      filter: opacity(0.5) drop-shadow(0 0 0 $highlight);
    }
  }
}
</style>