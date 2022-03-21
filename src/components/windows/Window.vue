<template>
  <div
    style="z-index: 2"
    @mousedown="windowMouseDown($event)"
    v-on:click.right.stop="preventDefault($event)"
    v-if="minimize"
    class="window"
    :class="{ maximize: maximizeWindow }"
  >
    <div
      class="menu-bar"
      @dblclick.stop="doubleClick($event)"
      @mousedown="mouseDown($event)"
      @mouseup="mouseUp()"
      @mousemove="mouseMove($event)"
      @mouseleave="mouseLeave($event)"
    >
      <div class="title">
        <span
          class="icon"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/icon/' + fileIcon + '.png') + ')',
          }"
        ></span
        ><span>{{ fileName }}</span>
      </div>
      <div class="actions">
        <div v-on:click="minimizeWindow()" @mouseleave="releaseWindow()">
          <img :src="require('@/assets/icon/minimize.png')" />
        </div>
        <div v-on:click="maximize()" @mouseleave="releaseWindow()">
          <img :src="require('@/assets/icon/maximize.png')" />
        </div>
        <div v-on:click="closeProgram" @mouseleave="releaseWindow()">
          <img :src="require('@/assets/icon/close.png')" />
        </div>
      </div>
    </div>
    <div class="loaded-program">
      <component
        :is="loadedProgram"
        :fileName="fileName"
        :fileIcon="fileIcon"
        :fileType="fileType"
        :programsOpen="programsOpen"
        @openProgram="openProgram"
        @closeProgram="closeProgram"
      ></component>
    </div>
  </div>
</template>
<script>
import Notepad from "./Notepad.vue";
import Paint from "./Paint.vue";
import Internet from "./Internet.vue";
import AOL from "./AOL.vue";
import Dialog from "./Dialog.vue";
import Folder from "./Folder.vue";
export default {
  name: "Window",
  data() {
    return {
      loadedProgram: this.fileType,
      pointer: {
        state: "up",
        xDiff: 0,
        yDiff: 0,
      },
      maximizeWindow: false,
    };
  },
  components: {
    Notepad,
    Folder,
    Paint,
    Internet,
    AOL,
    Dialog,
  },
  props: {
    fileName: String,
    fileIcon: String,
    fileType: String,
    minimize: Boolean,
    programsOpen: Array,
  },
  mounted: function () {
    this.zCycle();
  },
  methods: {
    zCycle(zIndex) {
      var programs = document.querySelectorAll(".window");
      zIndex = zIndex || 2;
      for (let i = 0; i < programs.length; i++) {
        if (parseInt(programs[i].style.zIndex) > zIndex) {
          programs[i].style.zIndex = parseInt(programs[i].style.zIndex) - 1;
        }
      }
    },
    windowMouseDown(event) {
      let elmt = event.target;
      let maxIndex = document.querySelectorAll(".window").length;
      this.zCycle(parseInt(elmt.style.zIndex));
      elmt.style.zIndex = maxIndex + 2;
    },
    doubleClick(event) {
      this.maximizeWindow = !this.maximizeWindow;
      event.preventDefault();
    },
    mouseDown(event) {
      // Dragging
      let elmt = event.target.parentNode;
      this.pointer.state = "down";
      if (this.pointer.yDiff == 0)
        this.pointer.yDiff = elmt.offsetTop - event.clientY;
      if (this.pointer.xDiff == 0)
        this.pointer.xDiff = elmt.offsetLeft - event.clientX;
      // Z CYCLE
      let maxIndex = document.querySelectorAll(".window").length;
      this.zCycle(parseInt(elmt.style.zIndex));
      elmt.style.zIndex = maxIndex + 2;
    },
    mouseMove(event) {
      if (this.pointer.state == "down") {
        let elmt = event.target.parentNode;
        elmt.style.top = this.pointer.yDiff + event.clientY + "px";
        elmt.style.left = this.pointer.xDiff + event.clientX + "px";
      }
    },
    mouseLeave(event) {
      if (this.pointer.state == "down") {
        this.mouseMove(event);
      } else {
        this.releaseWindow();
      }
    },
    mouseUp() {
      this.releaseWindow();
    },
    releaseWindow() {
      this.pointer.state = "up";
      this.pointer.xDiff = 0;
      this.pointer.yDiff = 0;
    },
    openProgram(fileName, fileIcon, fileType, files) {
      this.$emit("openProgram", fileName, fileIcon, fileType, files);
    },
    closeProgram() {
      this.$emit("closeProgram", this.fileName);
    },
    minimizeWindow() {
      this.$emit("minimizeWindow", this.fileName);
    },
    maximize() {
      this.maximizeWindow = !this.maximizeWindow;
    },
    preventDefault(event) {
      event.stopPropagation();
      event.preventDefault();
    },
  },
};
</script>
<style lang="scss" scoped>
.window {
  height: 60%;
  width: 60%;
  position: absolute;
  resize: both;
  overflow: auto;
  top: 10%;
  left: 10%;
  min-height: 150px;
  min-width: 310px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  background-color: rgba(191, 193, 192, 1);
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
  &.maximize {
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    top: 0 !important;
    resize: none !important;
    width: auto !important;
    height: auto !important;
  }
  .menu-bar {
    height: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: $highlightV95;
    padding: 0px 3px;
    user-select: none;
    .title {
      padding: 2px 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: white;
      pointer-events: none;
      .icon {
        width: 16px;
        height: 16px;
        margin-right: 2px;
        background-size: 16px 16px;
        position: relative;
        display: block;
      }
    }
    .actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      div {
        width: 16px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(191, 193, 192, 1);
        border-style: solid;
        border-width: 1px;
        border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
          rgb(254, 254, 254);
        box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
        &:active {
          border-style: solid;
          border-width: 1px;
          border-color: rgb(10, 10, 10) rgb(254, 254, 254) rgb(254, 254, 254)
            rgb(10, 10, 10);
          box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
        }
      }
    }
  }
  .loaded-program {
    overflow: auto;
    height: 100%;
    width: 100%;
    > div {
      height: 100%;
      width: 100%;
    }
  }
}
</style>