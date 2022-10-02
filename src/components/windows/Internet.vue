<template>
  <div class="embed">
    <div class="file-bar">
      <div class="link">
        File
        <div class="submenu">
          <div class="link">Save</div>
          <div class="link">Exit</div>
        </div>
      </div>
      <div class="link">
        File
        <div class="submenu">
          <div class="link">Save</div>
          <div class="link">Exit</div>
        </div>
      </div>
    </div>
    <embed src="https://www.google.com/webhp?igu=1" />
  </div>
</template>
<script>
export default {
  name: "Internet",
};
</script>
<style lang="scss" scoped>
.embed {
  display: flex;
  flex-direction: column;
  height: 100%;
  embed {
    resize: none;
    height: 100%;
    width: 100%;
  }
}
</style>
