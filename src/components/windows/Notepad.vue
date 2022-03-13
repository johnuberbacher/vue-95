<template>
  <div class="notepad">
    <textarea></textarea>
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
    resize: none;
    height: 100%;
    width: 100%;
  }
}
</style>