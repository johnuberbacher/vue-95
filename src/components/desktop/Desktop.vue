<template>
  <div
    ref="desktop"
    class="desktop"
    v-on:click.stop="resetDesktopContextMenu"
    @contextmenu.prevent="desktopContextMenu"
  >
    <div class="programs" ref="boundary">
      <Window
        v-bind:key="index"
        v-for="(program, index) in programsOpen"
        :title="program[0]"
        :icon="program[1]"
        :minimize="program[2]"
        :boundary="this.$refs.boundary"
        @openProgram="openProgram"
        @closeProgram="closeProgram"
        @minimizeWindow="minimizeWindow"
      >
        <component :is="program[1]"></component>
      </Window>
      <Program
        v-for="(program, index) in programs"
        v-bind:key="index"
        :title="program[0]"
        :icon="program[1]"
        @openProgram="openProgram"
      />
    </div>
    <DesktopContextMenu
      v-if="this.desktopContextMenuActive"
      :position="this.desktopContextMenuPosition"
      @fullscreenMode="$emit('fullscreenMode')"
      @crtMode="$emit('crtMode')"
    />
  </div>
</template>
<script>
import Window from "../windows/Window.vue";
import Internet from "../windows/Internet.vue";
import Folder from "../windows/Folder.vue";
import Notepad from "../windows/Notepad.vue";
import Program from "./programs/Program.vue";
import DesktopContextMenu from "./DesktopContextMenu.vue";
export default {
  name: "Desktop",
  components: {
    Program,
    DesktopContextMenu,
    Window,
    Notepad,
    Folder,
    Internet,
  },
  props: {
    programs: Object,
    programsOpen: Object,
  },
  data() {
    return {
      desktopContextMenuActive: false,
      desktopVolumeMenuActive: false,
      desktopContextMenuPosition: [0, 0],
    };
  },
  methods: {
    openProgram(programTitle, programIcon) {
      this.$emit("openProgram", programTitle, programIcon);
    },
    closeProgram(programTitle) {
      this.$emit("closeProgram", programTitle);
    },
    minimizeWindow(programTitle) {
      this.$emit("minimizeWindow", programTitle);
    },
    resetDesktopContextMenu() {
      this.$emit("resetDesktopContext");
      this.desktopContextMenuActive = false;
      this.desktopVolumeMenuActive = false;
    },
    desktopContextMenu(e) {
      e.preventDefault();
      this.desktopContextMenuPosition[0] =
        e.pageX - this.$refs.desktop.getBoundingClientRect().left;
      this.desktopContextMenuPosition[1] =
        e.pageY - this.$refs.desktop.getBoundingClientRect().top;
      this.desktopContextMenuActive = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.desktop {
  width: 100%;
  height: 452px;
  padding: 0;
  position: relative;
  background-color: #008080;
  .programs {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    @media (min-width: 992px) {
      flex-direction: column;
    }
  }
}
</style>