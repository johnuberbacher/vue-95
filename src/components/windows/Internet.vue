<template>
  <div class="embed">
    <embed src="https://www.google.com/webhp?igu=1"/>
  </div>
</template>
<script>
export default {
  name: "Internet",
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.embed {
  height: 100%;
  embed {
    resize: none;
    height: 100%;
    width: 100%;
  }
}
</style>