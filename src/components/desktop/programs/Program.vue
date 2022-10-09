<template>
  <div class="program" @dblclick.stop="openProgram()">
    <span
      class="icon"
      :style="{
        backgroundImage:
          'url(' + ('./src/assets/icon/' + fileIcon + '.png') + ')',
      }"
    ></span>
    <span class="title"  contenteditable="true" @dblclick.stop="renameFile()">{{ fileName }}</span>
  </div>
</template>
<script setup>
import { useDirectoryStore } from "../../../stores/directory";
const directoryStore = useDirectoryStore();

const props = defineProps(["fileName", "fileIcon", "fileType", "files"]);
function renameFile() {
  console.log('he')
}
function openProgram() {
  if (directoryStore.openPrograms.find(([title]) => title === props.fileName)) {
    console.log("This program already open");
  } else {
    directoryStore.openPrograms.push([
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
.program {
  height: 75px;
  width: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2px;
  color: white;
  user-select: none;
  .title {
    border: 1px solid transparent;
    cursor: default;
    &:focus {
      background-color: $highlightV95;
      border: 1px dotted #939393;
      outline: 0px solid transparent;
    }
  }
  .icon {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    background-size: 32px 32px;
    position: relative;
    display: block;
  }
  &:focus,
  &:active {
    span.title {
      background-color: $highlightV95;
      border: 1px dotted #939393;
    }
    .icon {
      filter: opacity(0.5) drop-shadow(0 0 0 $highlightV95);
    }
  }
}
</style>
