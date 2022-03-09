<template>
  <div class="taskbar">
    <div class="intro">
      <StartMenu :showStartMenu="this.showStartMenu" />
      <div class="divider"></div>
      <TaskbarProgram />
    </div>
    <div class="clock">Clock</div>
  </div>
</template>
<script>
import TaskbarProgram from "./TaskbarProgram.vue";
import StartMenu from "./StartMenu.vue";
export default {
  name: "Taskbar",
  props: {
    showStartMenu: Boolean,
  },
  components: {
    TaskbarProgram,
    StartMenu,
  },
};
</script>
<style lang="scss" scoped>
.taskbar {
  padding: 2px 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
  background: rgb(198, 198, 198);
  .intro {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: start;
    height: 100%;
  }
.divider {
    margin-right: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(254, 254, 254) rgb(223 223 223) rgb(254, 254, 254)
    rgb(254, 254, 254);
}
}
.clock {
  margin-right: 2px;
  padding: 2px 4px;
  background-color: rgba(191, 193, 192, 1);
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
}
</style>