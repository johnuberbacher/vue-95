<template>
  <div class="hello">
    <div class="desktop" @click="resetDesktopContextMenu()" @contextmenu.prevent="desktopContextMenu">
      <div class="programs">
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
      </div>
      <DesktopContextMenu :active="this.desktopContextMenuActive" :position="this.desktopContextMenuPosition"/>
    </div>
    <div class="taskbar">
      <div class="start">Start</div>
      <div class="clock">Start</div>
    </div>
  </div>
</template>

<script>
import Program from "./desktop/programs/Program.vue";
import DesktopContextMenu from "./desktop/DesktopContextMenu.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      desktopContextMenuActive: false,
      desktopContextMenuPosition: [0,0],
    };
  },
  components: {
    Program,
    DesktopContextMenu,
  },
  methods: {
    resetDesktopContextMenu() {
      this.desktopContextMenuActive = false;
    },
    desktopContextMenu: function (e) {
      this.desktopContextMenuPosition[0] = e.pageX;
      this.desktopContextMenuPosition[1] = e.pageY;
      this.desktopContextMenuActive = !this.desktopContextMenuActive;
      e.preventDefault();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$cursor-arrow: url("../assets/cursor/arrow.png"), default;
$cursor-pointer: url("../assets/cursor/pointer.png"), pointer;

.hello {
  width: 100%;
  max-width: 640px;
  height: 480px;
  font-size: 8px;
}
.programs {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.desktop {
  width: 100%;
  max-width: 640px;
  height: 452px;
  padding: 0;
  position: relative;
  background-color: #008080;
}
.taskbar {
  padding: 2px 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
  background: rgb(198, 198, 198);
}
.start {
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
