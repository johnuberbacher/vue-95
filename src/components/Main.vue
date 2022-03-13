<template>
  <div class="container">
    <div
      class="desktop"
      v-on:click="resetDesktopContextMenu"
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
          @closeProgram="closeProgram(program[0])"
          @minimizeWindow="minimizeWindow(program[0])"
        />
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
      />
    </div>
    <Taskbar
      :programsOpen="programsOpen"
      :desktopStartMenuActive="this.desktopStartMenuActive"
      @minimizeWindow="minimizeWindow"
    />
  </div>
</template>
<script>
import Program from "./desktop/programs/Program.vue";
import DesktopContextMenu from "./desktop/DesktopContextMenu.vue";
import Taskbar from "./taskbar/Taskbar.vue";
import Window from "./windows/Window.vue";
export default {
  name: "Main",
  props: {
    msg: String,
  },
  data() {
    return {
      desktopContextMenuActive: false,
      desktopStartMenuActive: false,
      desktopContextMenuPosition: [0, 0],
      programs: [
        ["My Computer", "MyComputer", true],
        ["Notepad", "NotePad", true],
        ["Folder", "Folder", true],
      ],
      programsOpen: [],
    };
  },
  components: {
    Program,
    DesktopContextMenu,
    Taskbar,
    Window,
  },
  methods: {
    openProgram(programTitle, programIcon) {
      if (this.programsOpen.find(([title]) => title === programTitle)) {
        console.log("found");
      } else {
        this.programsOpen.push([programTitle, programIcon, true]);
      }
    },
    closeProgram(program) {
      for (let i = 0; i < this.programsOpen.length; i++) {
        if (this.programsOpen[i][0] == program) this.programsOpen.splice(i, 1);
      }
    },
    minimizeWindow(program) {
      for (let i = 0; i < this.programsOpen.length; i++) {
        if (this.programsOpen[i][0] == program) this.programsOpen[i][2] = !this.programsOpen[i][2]
      }
    },
    minimizeProgram(program) {
      console.log('here')
      for (let i = 0; i < this.programsOpen.length; i++) {
        if (this.programsOpen[i][0] == program) this.programsOpen[i][2] = !this.programsOpen[i][2]
      }
    },
    resetDesktopContextMenu() {
      this.desktopContextMenuActive = false;
      this.desktopStartMenuActive = false;
    },
    desktopContextMenu(e) {
      e.preventDefault();
      this.desktopContextMenuPosition[0] = e.pageX;
      this.desktopContextMenuPosition[1] = e.pageY;
      this.desktopContextMenuActive = true;
    },
  },
};
</script>
<style lang="scss" scoped>
$cursor-arrow: url("../assets/cursor/arrow.png"), default;
$cursor-pointer: url("../assets/cursor/pointer.png"), pointer;
$highlight: #000080;

@font-face {
  font-family: "W95A";
  src: url("../assets/font/W95A.woff2") format("woff2"),
    url("../assets/font/W95A.woff") format("woff"),
    url("../assets/font/W95A.otf") format("otf");
}

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
* {
  font-family: "W95A";
  font-smooth: never;
  -webkit-font-smoothing: none;
}

.container {
  width: 100%;
  max-width: 640px;
  height: 480px;
}

.programs {
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  .child-class {
    width: auto;
    @media (min-width: 992px) {
      width: 100%;
    }
  }
}

/********************************** */

.programs {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
@media (min-width: 992px) {
  .programs {
    flex-direction: row;
  }
}
.child-class {
  width: auto;
}
@media (min-width: 992px) {
  .child-class {
    width: 100%;
  }
}

.programs {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 992px) {
    width: 100%;
  }
}
.desktop {
  width: 100%;
  max-width: 640px;
  height: 452px;
  padding: 0;
  position: relative;
  background-color: #008080;
}
</style>
