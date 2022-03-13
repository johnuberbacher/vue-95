<template>
  <div class="taskbar-program">
    <span
      class="icon"
      :style="{
        backgroundImage: 'url(' + require('@/assets/icon/' + icon + '.png') + ')',
      }"
    ></span>
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  name: "TaskbarProgram",
  props: {
    title: String,
    icon: String,
  },
};
</script>
<style lang="scss" scoped>
.taskbar-program {
  padding: 2px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 160px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
  background: rgb(198, 198, 198);
  .icon {
    width: 16px;
    height: 16px;
    margin-right: 2px;
    background-size: 16px 16px;
    position: relative;
    display: block;
  }
}
</style>