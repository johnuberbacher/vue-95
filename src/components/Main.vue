<template>
  <div class="container">
    <div>
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
            @closeProgram="closeProgram(program[0])"
            @minimizeWindow="minimizeWindow(program[0])"
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
        />
      </div>
      <Taskbar
        :programs="programs"
        :programsOpen="programsOpen"
        :desktopStartMenuActive="this.desktopStartMenuActive"
        @minimizeWindow="minimizeWindow"
      />
    </div>
  </div>
</template>
<script>
import Program from "./desktop/programs/Program.vue";
import DesktopContextMenu from "./desktop/DesktopContextMenu.vue";
import Taskbar from "./taskbar/Taskbar.vue";
import Window from "./windows/Window.vue";
import Internet from "./windows/Internet.vue";
import Notepad from "./windows/Notepad.vue";
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
        ["My Documents", "Documents", true],
        ["Internet", "Internet", true],
        ["Notepad", "Notepad", true],
        ["Paint", "Paint", true],
        ["Recycle Bin", "RecycleBin", true],
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
    Notepad,
    Internet,
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
        if (this.programsOpen[i][0] == program)
          this.programsOpen[i][2] = !this.programsOpen[i][2];
      }
    },
    minimizeProgram(program) {
      console.log("here");
      for (let i = 0; i < this.programsOpen.length; i++) {
        if (this.programsOpen[i][0] == program)
          this.programsOpen[i][2] = !this.programsOpen[i][2];
      }
    },
    resetDesktopContextMenu() {
      this.desktopContextMenuActive = false;
      this.desktopStartMenuActive = false;
    },
    desktopContextMenu(e) {
      console.log(this.$refs.desktop.style.marginLeft);
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
@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
}
.container {
  width: 100%;
  max-width: 640px;
  height: 480px;
  position: relative;
  overflow: hidden;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 30;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }
  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.1),
        rgba(0, 255, 0, 0.1),
        rgba(0, 0, 255, 0.1)
      );
    z-index: 30;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
}

.programs {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
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
