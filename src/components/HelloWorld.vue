<template>
  <div class="hello">
    <div
      class="desktop"
      v-on:click="resetDesktopContextMenu"
      @contextmenu.prevent="desktopContextMenu"
    >
      <div class="programs" ref="boundary">
        <Window :boundary="this.$refs.boundary" />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
      </div>
      <DesktopContextMenu
        v-if="this.desktopContextMenuActive"
        :position="this.desktopContextMenuPosition"
      />
    </div>
    <Taskbar :desktopStartMenuActive="this.desktopStartMenuActive" />
  </div>
</template>
<script>
import Program from "./desktop/programs/Program.vue";
import DesktopContextMenu from "./desktop/DesktopContextMenu.vue";
import Taskbar from "./taskbar/Taskbar.vue";
import Window from "./windows/Window.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      desktopContextMenuActive: false,
      desktopStartMenuActive: false,
      desktopContextMenuPosition: [0, 0],
      windowsOpen: {},
    };
  },
  components: {
    Program,
    DesktopContextMenu,
    Taskbar,
    Window,
  },
  methods: {
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

.hello {
  width: 100%;
  max-width: 640px;
  height: 480px;
  font-weight: 300;
  font-size: 12px;
  overflow: hidden;
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
