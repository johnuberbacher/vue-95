<template>
  <div class="program" @dblclick.stop="openProgram">
    <span
      class="icon"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/icon/' + fileIcon + '.png') + ')',
      }"
    ></span>
    <span class="title">{{ fileName }}</span>
  </div>
</template>
<script>
export default {
  name: "Program",
  props: {
    fileName: String,
    fileIcon: String,
    fileType: String,
    files: Array,
    open: Boolean,
  },
  methods: {
    openProgram() {
      this.$emit("openProgram", this.fileName, this.fileIcon, this.fileType, this.files);
    },
  },
};
</script>
<style lang="scss" scoped>
.program {
  height: 74px;
  width: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2px;
  color: white;
  user-select: none;
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
  &:active {
    span.title {
      background-color: $highlightV95;
      border: 1px dotted #939393;
    }
    .icon {
      filter: opacity(0.5) drop-shadow(0 0 0 $highlightV95);
    }
  }
}
</style>