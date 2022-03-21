<template>
  <div class="notepad">
    <div class="file-bar">
      <div class="link">
        File
        <div class="submenu">
          <div class="link">Save as...</div>
          <div class="link" v-on:click="closeProgram">Exit</div>
        </div>
      </div>
      <a
        href="https://github.com/johnuberbacher/vue-95"
        target="_blank"
        class="link"
      >
        About
      </a>
      <div class="link">Help</div>
    </div>
    <textarea autofocus></textarea>
  </div>
</template>
<script>
export default {
  name: "Notepad",
  props: {
    fileName: String,
  },
  methods: {
    closeProgram(fileName) {
      this.$emit("closeProgram", fileName);
    },
  },
};
</script>
<style lang="scss" scoped>
.notepad {
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .file-bar {
    background-color: rgba(191, 193, 192, 1);
    padding: 2px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    z-index: 1;
    .link {
      cursor: default;
      text-decoration: none;
      padding: 0px 4px 0px 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 18px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        z-index: 1;
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
        text-decoration: none;
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
  textarea {
    border-radius: 0px;
    padding: 6px 6px;
    resize: none;
    height: 100%;
    width: 100%;
    pointer-events: all;
    box-shadow: none;
    outline: none;
    z-index: 0;
    &:focus,
    &:active {
      outline: none;
      box-shadow: inset 0 0 0px 1px black;
      border-radius: 0px;
    }
  }
}
</style>