<template>
  <div class="window-body window-file-explorer">Hello!</div>
</template>
<script>
export default {
  name: "FileExplorer",
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.window-body {
  overflow: auto;
  height: calc(100% - 22px);
  margin-top: 3px;
  padding: 4px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(10, 10, 10) rgb(254, 254, 254) rgb(254, 254, 254)
    rgb(10, 10, 10);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
}
</style>