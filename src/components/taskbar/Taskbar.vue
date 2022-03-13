<template>
  <div class="taskbar">
    <div class="intro">
      <div class="start-menu-wrapper">
        <div
          class="start-menu"
          v-show="this.activeStartMenu"
          v-click-outside="onClickOutside"
        >
          <StartMenuProgram :title="'My Computer'" :icon="'MyComputer'" />
          <StartMenuProgram :title="'My Documents'" :icon="'Documents'" />
          <StartMenuProgram :title="'Notepad'" :icon="'NotePad'" />
        </div>
        <div class="start" v-on:click="toggleStartMenu">
          <div
            class="icon"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/icon/start.png') + ')',
            }"
          ></div>
          Start
        </div>
      </div>
      <div class="divider"></div>
      <TaskbarProgram
        v-for="(program, index) in programsOpen"
        v-bind:key="index"
        :title="program[0]"
        :icon="program[1]"
        @minimizeProgram="minimizeProgram(program[0])"
      />
    </div>
    <Clock />
  </div>
</template>
<script>
import TaskbarProgram from "./TaskbarProgram.vue";
import StartMenuProgram from "./StartMenuProgram.vue";
import Clock from "./Clock.vue";
import vClickOutside from "v-click-outside";
export default {
  name: "Taskbar",
  data: function () {
    return {
      activeStartMenu: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    programsOpen: Object,
    desktopStartMenuActive: Boolean,
  },
  components: {
    TaskbarProgram,
    StartMenuProgram,
    Clock,
  },
  mounted() {
    this.activeStartMenu = this.desktopStartMenuActive;
  },
  methods: {
    minimizeProgram(programTitle) {
      this.$emit("minimizeProgram", programTitle);
    },
    onClickOutside(event) {
      console.log("Clicked outside. Event: ", event);
      this.activeStartMenu = false;
    },
    toggleStartMenu() {
      console.log("toggling");
      this.activeStartMenu = !this.activeStartMenu;
      console.log(this.activeStartMenu);
    },
    closeStartMenu() {
      this.activeStartMenu = false;
    },
  },
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
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
    .start-menu-wrapper {
      position: relative;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      .start {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 4px;
        padding: 2px 4px;
        font-weight: bold;
        height: 100%;
        background-color: rgba(191, 193, 192, 1);
        border-style: solid;
        border-width: 1px;
        border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
          rgb(254, 254, 254);
        box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
          rgb(132 133 132) 0px 0px 0px 1px inset;
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
      }
      .start-menu {
        position: absolute;
        z-index: 3;
        bottom: calc(100% + 3px);
        left: -4px;
        width: 164px;
        height: 240px;
        background-color: rgba(191, 193, 192, 1);
        border-style: solid;
        border-width: 1px;
        padding: 2px 3px 3px 2px;
        border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
          rgb(254, 254, 254);
        box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
          rgb(132 133 132) 0px 0px 0px 1px inset;
      }
    }
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