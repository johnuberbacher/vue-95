<template>
  <div class="notepad">
    <div class="file-bar">
      <div class="link">
        Fileopoo
        <div class="submenu">
          <div class="link" v-on:click="this.$emit('saveFile')">Save</div>
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
