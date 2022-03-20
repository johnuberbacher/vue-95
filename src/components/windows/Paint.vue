<template>
  <div class="paint">
    <div class="paint-wrapper">
      <div class="toolbar">
        <div
          v-for:="(stroke, index) in 6"
          v-bind:key="index"
          v-on:click="this.setStroke($event, index)"
          :class="{ active: index + 1 === selectedStroke}"
          class="stroke-selector"
        >
          <div class="stroke">
            <span
              v-bind:key="index"
              v-bind:style="{
                height: index + 5 + 'px',
                width: index + 5 + 'px',
                minHeight: index + 5 + 'px',
                minWidth: index + 5 + 'px',
              }"
            ></span>
          </div>
        </div>
        <div class="stroke-selector">
          <div class="stroke">
            <img
              width="9"
              height="9"
              :src="require('@/assets/icon/close.png')"
            />
          </div>
        </div>
      </div>
      <div class="canvas-wrapper">
        <canvas
          width="634"
          height="359"
          ref="canvas"
          @mousemove="mouseMove"
          @mousedown="mouseDown"
        ></canvas>
      </div>
    </div>
    <div class="colors">
      <div class="selected-color">
        <div
          class="color"
          v-bind:style="{ backgroundColor: '#' + this.selectedLeftColor }"
        ></div>
        <div
          class="color"
          v-bind:style="{ backgroundColor: '#' + this.selectedRightColor }"
        ></div>
      </div>
      <div class="color-picker">
        <div
          class="color"
          v-for="(color, index) in colors"
          v-on:click.left.stop="setLeftColor($event, color)"
          v-on:click.right.stop="setRightColor($event, color)"
          v-bind:key="index"
          v-bind:style="{
            backgroundColor: '#' + color,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Paint",
  data() {
    return {
      isMouseClicked: false,
      isMouseInCanvas: false,
      lastX: 0,
      lastY: 0,
      currX: 0,
      currY: 0,
      canvas: "",
      selectedStroke: 1,
      selectedLeftColor: "000000",
      selectedRightColor: "FFFFFF",
      colors: [
        "000000",
        "808080",
        "800000",
        "808000",
        "008000",
        "008080",
        "000080",
        "800080",
        "808040",
        "004040",
        "0080ff",
        "004080",
        "8000ff",
        "804000",
        "FFFFFF",
        "c0c0c0",
        "ff0000",
        "ffff00",
        "00ff00",
        "00ffff",
        "0000ff",
        "ff00ff",
        "ffff80",
        "00ff80",
        "80ffff",
        "8080ff",
        "ff0080",
        "ff8040",
      ],
    };
  },
  mounted: function () {
    this.canvas = this.$refs.canvas.getContext("2d");
  },
  methods: {
    setStroke(e, index) {
      this.selectedStroke = index + 1;
    },
    setLeftColor(e, color) {
      this.selectedLeftColor = color;
    },
    setRightColor(e, color) {
      e.preventDefault();
      e.stopPropagation();
      this.selectedRightColor = color;
    },
    mouseDown(e) {
      const { x, y } = this.$refs.canvas.getBoundingClientRect();
      this.lastX = e.clientX - x;
      this.lastY = e.clientY - y;
    },
    mouseMove(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.buttons !== 1 && e.buttons !== 2) return;
      this.draw(e);
    },
    draw(e) {
      const { x, y } = this.$refs.canvas.getBoundingClientRect();
      const newX = e.clientX - x;
      const newY = e.clientY - y;

      this.canvas.beginPath();
      this.canvas.lineWidth = this.selectedStroke;
      this.canvas.moveTo(this.lastX, this.lastY);
      this.canvas.lineTo(newX, newY);
      if (e.buttons == 1) {
        this.canvas.strokeStyle = "#" + this.selectedLeftColor;
      } else if (e.buttons == 2) {
        this.canvas.strokeStyle = "#" + this.selectedRightColor;
      } else {
        this.canvas.strokeStyle = "#" + this.selectedLeftColor;
      }
      this.canvas.stroke();
      this.canvas.closePath();

      this.lastX = newX;
      this.lastY = newY;
    },
  },
};
</script>
<style lang="scss" scoped>
.paint {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  .paint-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    overflow: hidden;
    .canvas-wrapper {
      @include v95Hover;
      height: 100%;
      width: 100%;
      overflow: auto;
    }
  }
  .toolbar {
    @include v95Hover;
    overflow: hidden;
    width: 48px;
    padding: 2px 2px 0px 2px;
    .stroke-selector {
      @include v95;
      height: 24px;
      width: 24px;
      margin-top: 1px;
      margin-bottom: 5px;
      .stroke {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          display: block;
          border-radius: 100px;
          background-color: black;
        }
      }
      &:active,
      &.active {
        @include v95Hover;
      }
    }
  }
  .colors {
    padding-top: 2px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .selected-color {
    @include v95Hover;
    min-width: 43px;
    min-height: 43px;
    width: 44px;
    height: 43px;
    position: relative;
    .color {
      margin: 1px 0px 0px 1px;
      &:nth-of-type(1) {
        z-index: 2 !important;
        position: absolute;
        left: 7px;
        top: 7px;
      }
      &:nth-of-type(2) {
        z-index: 1 !important;
        position: absolute;
        left: 17px;
        top: 17px;
      }
    }
  }
  .color-picker {
    @include v95Hover;
    max-width: 258px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 3px;
    padding-left: 3px;
  }
  .color {
    @include v95Hover;
    width: 16px;
    height: 16px;
    background: red;
    margin-right: 2px;
    margin-top: 3px;
    box-shadow: #000000 1px 1px 0px 0px inset;
  }
  canvas {
    width: 632px;
    height: 357px;
    object-fit: contain;
    background-color: white;
  }
}
</style>