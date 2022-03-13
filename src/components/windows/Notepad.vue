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
$highlight: #000080;
.notepad {
  width: 100%;
  height: 100%;
  textarea {
    border-radius: 0px;
    padding: 4px 6px;
    resize: none;
    height: 100%;
    width: 100%;
  }
}
</style>