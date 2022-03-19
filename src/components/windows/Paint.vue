<template>
  <div class="paint">
    <div class="canvas-wrapper">
      <div class="toolbar"></div>
      <canvas
        width="634"
        height="359"
        ref="canvas"
        @mousemove="mouseMove"
        @mousedown="mouseDown"
      ></canvas>
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
    setLeftColor(e, color) {
      e.preventDefault();
      e.stopPropagation();
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
      this.canvas.lineWidth = 1.5;
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
  overflow: initial;
  display: flex;
  flex-direction: column;
  .canvas-wrapper {
    @include v95Hover;
    height: 100%;
    overflow: auto;
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
          z-index: 2!important;
          position: absolute;
          left: 7.5px;
          top: 7.5px;
      }
      &:nth-of-type(2) {
          z-index: 1!important;
          position: absolute;
          left: 18px;
          top: 18px;
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