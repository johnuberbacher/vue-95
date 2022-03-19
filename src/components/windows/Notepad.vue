<template>
  <div class="notepad">
    <textarea autofocus></textarea>
  </div>
</template>
<script>
export default {
  name: "Notepad",
};
</script>
<style lang="scss" scoped>
.notepad {
  width: 100%;
  height: 100%;
  textarea {
    border-radius: 0px;
    padding: 4px 6px;
    resize: none;
    height: 100%;
    width: 100%;
    pointer-events: all;
    box-shadow: none!important;
    &:focus, &:active {}
  }
}
</style>