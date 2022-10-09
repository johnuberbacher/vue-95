<template>
  <div class="start-menu-program" v-on:click="openProgram()">
    <span
      class="icon"
      :style="{
        backgroundImage:
          'url(' + ('./src/assets/icon/' + fileIcon + '.png') + ')',
      }"
    ></span>
    <span>{{ fileName }}</span>
  </div>
</template>
<script setup>
const props = defineProps([
  "fileName",
  "fileIcon",
  "fileType",
  "files",
  "openPrograms",
]);
function openProgram() {
  console.log(props.openPrograms);
  if (props.openPrograms.find(([title]) => title === props.fileName)) {
    console.log("found");
  } else {
    props.openPrograms.push([
      props.fileName,
      props.fileIcon,
      props.fileType,
      true,
      props.files,
    ]);
  }
}
</script>
<style lang="scss" scoped>
.start-menu-program {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 32px;
  padding: 0px 6px;
  &:hover,
  &:active {
    background-color: $highlightV95;
    color: white;
  }
  .icon {
    width: 24px;
    min-width: 24px;
    height: 24px;
    margin-right: 8px;
    background-size: 24px 24px;
    position: relative;
    display: block;
  }
}
</style>
