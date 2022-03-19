<template>
  <div
    class="container"
    :class="{ fullscreenMode: fullscreenMode, crtMode: crtMode }"
  >
    <div>
      <Desktop
        :programs="programs"
        :programsOpen="programsOpen"
        @openProgram="openProgram"
        @closeProgram="closeProgram"
        @minimizeWindow="minimizeWindow"
        @resetDesktopContext="resetDesktopContext"
        @fullscreenMode="toggleFullscreenMoode"
        @crtMode="toggleCrtMode"
      />
      <Taskbar
        :programs="programs"
        :programsOpen="programsOpen"
        :desktopStartMenuActive="desktopStartMenuActive"
        @toggleTaskBar="toggleTaskBar"
        @closeTaskBar="closeTaskBar"
        @minimizeWindow="minimizeWindow"
      />
    </div>
  </div>
</template>
<script>
import Desktop from "./desktop/Desktop.vue";
import Taskbar from "./taskbar/Taskbar.vue";
export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    Desktop,
    Taskbar,
  },
  data() {
    return {
      fullscreenMode: false,
      crtMode: true,
      desktopStartMenuActive: false,
      programsOpen: [],
      programs: [
        ["My Computer", "Folder", true],
        ["My Documents", "Folder", true],
        ["Internet", "Internet", true],
        ["Notepad", "Notepad", true],
        ["Folder", "Folder", true],
        ["Paint", "Paint", true],
        ["Recycle Bin", "Folder", true],
      ],
    };
  },
  methods: {
    openProgram(programTitle, programIcon) {
      console.log("Loading Program:");
      console.table([programTitle, programIcon]);
      if (this.programsOpen.find(([title]) => title === programTitle)) {
        console.log("found");
      } else {
        this.programsOpen.push([programTitle, programIcon, true]);
      }
    },
    closeProgram(programTitle) {
      for (let i = 0; i < this.programsOpen.length; i++) {
        if (this.programsOpen[i][0] == programTitle)
          this.programsOpen.splice(i, 1);
      }
    },
    minimizeWindow(program) {
      for (let i = 0; i < this.programsOpen.length; i++) {
        if (this.programsOpen[i][0] == program)
          this.programsOpen[i][2] = !this.programsOpen[i][2];
      }
    },
    resetDesktopContext() {
      console.log("here!");
      this.desktopStartMenuActive = false;
      console.log(this.desktopStartMenuActive);
    },
    toggleTaskBar() {
      this.desktopStartMenuActive = !this.desktopStartMenuActive;
    },
    closeTaskBar() {
      this.desktopStartMenuActive = false;
    },
    toggleFullscreenMoode() {
      this.fullscreenMode = !this.fullscreenMode;
    },
    toggleCrtMode() {
      this.crtMode = !this.crtMode;
    },
  },
};
</script>
<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
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
  &.crtMode {
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
      z-index: 100;
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
      background: linear-gradient(
          rgba(18, 16, 16, 0) 50%,
          rgba(0, 0, 0, 0.1) 50%
        ),
        linear-gradient(
          90deg,
          rgba(255, 0, 0, 0.1),
          rgba(0, 255, 0, 0.1),
          rgba(0, 0, 255, 0.1)
        );
      z-index: 100;
      box-shadow: inset 0 0 100px rgba(0, 0, 0, 1);
      background-size: 100% 3px, 3px 100%;
      pointer-events: none;
    }
  }
  &.fullscreenMode {
    max-width: 100%;
    height: 100%;
    .desktop {
      height: 100% !important;
    }
  }
  > div {
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    flex-direction: column;
  }
}
</style>
