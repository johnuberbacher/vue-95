<template>
  <div class="taskbar-program" v-on:click="minimizeWindow">
    <span
      class="icon"
      :style="{
        backgroundImage:
          'url(' + ('./src/assets/icon/' + fileIcon + '.png') + ')',
      }"
    ></span>
    <span class="title">{{ fileName }}</span>
  </div>
</template>
<script setup>
const props = defineProps(["fileName", "fileIcon", "openPrograms"]);

function minimizeWindow() {
  for (let i = 0; i < props.openPrograms.length; i++) {
    if (props.openPrograms[i][0] == props.fileName)
      props.openPrograms[i][3] = !props.openPrograms[i][3];
  }
}
</script>
<style lang="scss" scoped>
.taskbar-program {
  cursor: pointer;
  user-select: none;
  text-overflow: ellipsis;
  padding: 2px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 60px;
  width: 100%;
  max-width: 160px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
  background: rgb(198, 198, 198);
  &:active {
    border-style: solid;
    border-width: 1px;
    border-color: rgb(10, 10, 10) rgb(254, 254, 254) rgb(254, 254, 254)
      rgb(10, 10, 10);
    box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
  }
  .icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background-size: 16px 16px;
    position: relative;
    display: block;
  }
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
