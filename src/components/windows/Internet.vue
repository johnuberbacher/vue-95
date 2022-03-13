<template>
  <div class="iframe">
    <iframe src="https://www.google.com/webhp?igu=1"></iframe>
  </div>
</template>
<script>
export default {
  name: "Internet",
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.iframe {
  height: 100%;
  iframe {
    resize: none;
    height: 100%;
    width: 100%;
  }
}
</style>