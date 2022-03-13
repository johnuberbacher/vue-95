<template>
  <div>
    <div
      class="window"
      ref="draggable"
      :class="{ dragging: isDragging, maximize: maximizeWindow }"
      :style="windowPosition"
    >
      <div
        class="menu-bar"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @dblclick.stop="doubleClick($event)"
      >
        <div class="title">
          <span
            class="icon"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/icon/' + icon + '.png') + ')',
            }"
          ></span
          ><span>{{title}}</span>
        </div>
        <div class="actions">
          <div>
            <img :src="require('@/assets/icon/minimize.png')" />
          </div>
          <div v-on:click="maximize()">
            <img :src="require('@/assets/icon/maximize.png')" />
          </div>
          <div v-on:click="closeProgram">
            <img :src="require('@/assets/icon/close.png')" />
          </div>
        </div>
      </div>
      <WindowBody />
    </div>
  </div>
</template>
<script>
import WindowBody from "./FileExplorer.vue";
const clamp = (num, lower = 0, upper) => {
  return num < lower ? lower : num > upper ? upper : num;
};
export default {
  name: "Window",
  components: {
    WindowBody,
  },
  data() {
    return {
      maximizeWindow: false,
      isDragging: false,
      dragItemCoords: {
        top: 5,
        left: 5,
      },
    };
  },
  props: {
    title: String,
    icon: String,
    minimize: Boolean,
    boundary: Object,
  },
  computed: {
    windowPosition() {
      console.log(this.dragItemCoords.top);
      console.log(this.dragItemCoords.left);
      return {
        top: this.dragItemCoords.top + "px",
        left: this.dragItemCoords.left + "px",
      };
    },
  },
  methods: {
    clampInsideBoundary(x, y, e) {
      const boundaryPos = this.boundary.getBoundingClientRect();
      const maxWidth = boundaryPos.width - e.target.clientWidth;
      const maxHeight = boundaryPos.height - e.target.clientHeight;

      return {
        x: clamp(x - boundaryPos.x, 0, maxWidth),
        y: clamp(y - boundaryPos.y, 0, maxHeight),
      };
    },
    findPositionInsideBound(e) {
      const x = e.clientX - e.target.clientWidth / 2;
      const y = e.clientY - e.target.clientHeight / 2;

      return this.clampInsideBoundary(x, y, e);
    },
    handleMouseDown(e) {
      if (e.target === e.target) {
        this.isDragging = true;
        console.log("clicked");
      }
    },
    handleMouseMove(e) {
      if (this.isDragging) {
        const position = this.findPositionInsideBound(e);

        this.dragItemCoords = { left: position.x, top: position.y };
      }
    },
    handleMouseUp() {
      this.isDragging = false;
    },
    doubleClick(event) {
      this.maximizeWindow = !this.maximizeWindow;
      event.preventDefault();
    },
    closeProgram() {
      this.$emit("closeProgram", this.title, this.icon);
    },
    maximize() {
      console.log("clicked");
      this.maximizeWindow = !this.maximizeWindow;
    },
  },
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.window {
  position: absolute;
  resize: both;
  overflow: auto;
  top: calc(70% - 200px);
  left: calc(66% - 200px);
  min-width: 200px;
  z-index: 1;
  padding: 2px;
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
    z-index: 2;
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
    background-color: $highlight;
    padding: 0px 3px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    .title {
      padding: 2px 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: white;
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
}
</style>