<template v-slot="{title}">
  <div
    v-if="minimize"
    class="window"
    ref="draggableContainer"
    :class="{ maximize: maximizeWindow }"
    :style="windowPosition"
  >
    <div
      class="menu-bar"
      @mousedown="dragMouseDown"
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
        ><span>{{ title }}</span>
      </div>
      <div class="actions">
        <div v-on:click="minimizeWindow()">
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
    <div class="file-bar">
      <div>File</div>
      <div>Edit</div>
      <div>Test</div>
      <div>Test</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Window",
  data() {
    return {
      maximizeWindow: false,
      isDragging: false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  },
  props: {
    title: String,
    icon: String,
    minimize: Boolean,
    boundary: Object,
  },
  methods: {
    dragMouseDown: function (event) {
      event.preventDefault();
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.dragMove;
      document.onmouseup = this.dragMouseUp;
    },
    dragMove: function (event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
    },
    dragMouseUp() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
    doubleClick(event) {
      this.maximizeWindow = !this.maximizeWindow;
      event.preventDefault();
    },
    closeProgram() {
      this.$emit("closeProgram", this.title);
    },
    minimizeWindow() {
      this.$emit("minimizeWindow", this.title);
    },
    maximize() {
      this.maximizeWindow = !this.maximizeWindow;
    },
  },
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.window {
  height: 50%;
  width: 50%;
  position: absolute;
  resize: both;
  overflow: auto;
  top: 10%;
  left: 10%;
  min-height: 150px;
  min-width: 200px;
  z-index: 2;
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
    z-index: 2;
    resize: none !important;
    width: auto !important;
    height: auto !important;
  }
  .file-bar {
    padding: 2px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    > div {
      cursor: default;
      padding: 1px 4px 0px 2px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 16px;
      &:hover,
      &:active {
        background-color: $highlight;
        color: white;
      }
    }
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