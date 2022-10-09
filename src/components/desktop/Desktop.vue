<template>
  <div
    ref="desktop"
    class="desktop"
    v-on:click.left="resetDesktopContextMenu"
    v-on:click.right="desktopContextMenu"
  >
    <div class="programs">
      <!--Open Windows-->
      <Window
        v-bind:key="index"
        v-for="(program, index) in openPrograms"
        :fileName="program[0]"
        :fileIcon="program[1]"
        :fileType="program[2]"
        :files="program[4]"
        :minimize="program[3]"
      />

      <!--Desktop Icons-->
      <Program
        v-for="(program, index) in activeDirectory"
        v-bind:key="index"
        :fileName="program[0]"
        :fileIcon="program[1]"
        :fileType="program[2]"
        :files="program[4]"
        v-on:click.right="programContextMenu"
      />
    </div>
    <ContextMenu
      v-if="interfaceStore.programContextMenuActive"
      :position="interfaceStore.desktopContextMenuPosition"
      :menuItems="[
        ['link', 'function'],
        ['link', 'function'],
      ]"
    />
    <DesktopContextMenu
      v-if="interfaceStore.desktopContextMenuActive"
      :position="interfaceStore.desktopContextMenuPosition"
      @crtMode="toggleCrtMode"
      @fullscreenMode="toggleFullscreenMode"
      @newTextDocument="newTextDocument"
      @newFolder="newFolder"
    />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Window from "../windows/Window.vue";
import Program from "./programs/Program.vue";
import ContextMenu from "../ui/ContextMenu.vue";
import DesktopContextMenu from "./DesktopContextMenu.vue";
import { useDirectoryStore } from "../../stores/directory";
import { useInterfaceStore } from "../../stores/interface";

const directoryStore = useDirectoryStore();
const interfaceStore = useInterfaceStore();
const activeDirectory = directoryStore.activeDirectory;
const openPrograms = directoryStore.openPrograms;
let desktop = ref(null);

function toggleFullscreenMode() {
  interfaceStore.fullscreenMode = !interfaceStore.fullscreenMode;
}

function toggleCrtMode() {
  interfaceStore.crtMode = !interfaceStore.crtMode;
}

function newFolder() {
  directoryStore.activeDirectory.push(["Folder", "Folder", "Folder", false]);
}

function newTextDocument() {
  directoryStore.activeDirectory.push(["Notepad", "Notepad", "Notepad", false]);
}

function resetDesktopContextMenu() {
  interfaceStore.programContextMenuActive = false;
  interfaceStore.desktopStartMenuActive = false;
  interfaceStore.desktopContextMenuActive = false;
}

function programContextMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  resetDesktopContextMenu();
  interfaceStore.desktopContextMenuPosition[0] =
    e.pageX - desktop.value.getBoundingClientRect().left;
  interfaceStore.desktopContextMenuPosition[1] =
    e.pageY - desktop.value.getBoundingClientRect().top;
  interfaceStore.programContextMenuActive = true;
}
function desktopContextMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  resetDesktopContextMenu();
  interfaceStore.desktopContextMenuPosition[0] =
    e.pageX - desktop.value.getBoundingClientRect().left;
  interfaceStore.desktopContextMenuPosition[1] =
    e.pageY - desktop.value.getBoundingClientRect().top;
  interfaceStore.desktopContextMenuActive = true;
}
</script>
<style lang="scss" scoped>
.desktop {
  width: 100%;
  height: 452px;
  padding: 0;
  position: relative;
  /*background: url("../src/assets/img/wallpaper/clouds.png");*/
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #008080;
  .programs {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
  }
}
</style>
