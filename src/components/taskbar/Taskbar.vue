<template>
  <div class="taskbar">
    <div class="intro">
      <div class="start-menu-wrapper" ref="startmenu">
        <div class="start-menu" v-if="interfaceStore.desktopStartMenuActive">
          <div>
            <span>Windows<span>95</span></span>
          </div>

          <div class="start-menu-program-wrapper">
            <StartMenuProgram
              href="www.google.com"
              :fileName="'GitHub'"
              :fileIcon="'GitHub'"
            />

            <div class="divider"></div>

            <StartMenuProgram
              v-for="(program, index) in directoryStore.activeDirectory.slice(
                0,
                6
              )"
              v-bind:key="index"
              :fileName="program[0]"
              :fileIcon="program[1]"
              :fileType="program[2]"
              :files="program[4]"
              :openPrograms="directoryStore.openPrograms"
            />

            <div class="divider"></div>

            <StartMenuProgram
              :fileName="'Shut Down...'"
              :fileIcon="'Shutdown'"
            />
          </div>
        </div>
        <div class="start" v-on:click="toggleTaskBar()">
          <div
            class="icon"
            :style="{
              backgroundImage: 'url(' + './src/assets/icon/start.png' + ')',
            }"
          ></div>
          Start
        </div>
      </div>
      <div class="divider"></div>
      <div class="taskbar-program-wrapper">
        <TaskbarProgram
          v-for="(program, index) in directoryStore.openPrograms"
          v-bind:key="index"
          :fileName="program[0]"
          :fileIcon="program[1]"
          :openPrograms="directoryStore.openPrograms"
          :desktopStartMenuActive="interfaceStore.desktopStartMenuActive"
        />
      </div>
      <div class="divider"></div>
      <Clock />
    </div>
  </div>
</template>
<script setup>
import TaskbarProgram from "./TaskbarProgram.vue";
import StartMenuProgram from "./StartMenuProgram.vue";
import Clock from "./Clock.vue";

import { useDirectoryStore } from "../../stores/directory";
import { useInterfaceStore } from "../../stores/interface";
const directoryStore = useDirectoryStore();
const interfaceStore = useInterfaceStore();

function toggleTaskBar() {
  interfaceStore.desktopStartMenuActive =
    !interfaceStore.desktopStartMenuActive;
}
function closeTaskBar() {
  interfaceStore.desktopStartMenuActive = false;
}
</script>
<style lang="scss" scoped>
.taskbar {
  @include v95;
  padding: 2px 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 29px;
  z-index: 5;
  .intro {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    white-space: nowrap;
    height: 100%;
    width: 100%;
    .start-menu-wrapper {
      position: relative;
      user-select: none;
      .start {
        @include v95;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 4px;
        padding: 2px 4px;
        font-weight: bold;
        height: 100%;
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
        @include v95();
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        position: absolute;
        bottom: calc(100% + 3px);
        left: -4px;
        width: 164px;
        height: 275px;
        z-index: 2;
        padding: 2px 3px 3px 2px;
        > div {
          &:nth-of-type(1) {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            margin-right: 3px;
            background-color: #808080;
            height: 100%;
            width: 24px;
            > span {
              opacity: 0.8;
              display: block;
              transform: rotate(270deg);
              margin-bottom: 48px;
              margin-left: 1px;
              font-weight: 600;
              color: #c0c0c0;
              font-size: 22px;
              span {
                padding-left: 2px;
                font-weight: 300;
                color: white;
              }
            }
          }
          &:nth-of-type(2) {
            width: 100%;
          }
        }
      }
      .start-menu-program-wrapper {
        .divider {
          margin: 2px 2px 2px 0px;
          border-style: solid;
          border-width: 1px;
          border-color: rgb(254, 254, 254) rgb(223 223 223) rgb(254, 254, 254)
            rgb(254, 254, 254);
        }
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
  .taskbar-program-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    width: 100%;
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
