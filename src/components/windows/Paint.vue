<template>
  <div class="paint">
    <div class="file-bar">
      <div class="link">
        File
        <div class="submenu">
          <div class="link">Save</div>
          <div class="link">Exit</div>
        </div>
      </div>
    </div>
    <div class="paint-wrapper">
      <div class="toolbar">
        <div class="item">
          <img src="../../assets/icon/erase.png" />
        </div>
        <div class="item"><img src="../../assets/icon/fill.png" /></div>
        <div
          class="item"
          :class="{ active: 'pencil' === selectedTool }"
          v-on:click="this.setToolBrush('pencil')"
        >
          <img src="../../assets/icon/pencil.png" />
        </div>
        <div
          class="item"
          v-on:click="this.setToolBrush('brush')"
        >
          <img src="../../assets/icon/brush.png" />
        </div>
        <div class="item"><img src="../../assets/icon/text.png" /></div>
        <div class="item"><img src="../../assets/icon/rectangle.png" /></div>
        <div class="strokes" v-if="selectedTool === 'brush'">
          <div
            v-for:="(stroke, index) in 5"
            v-bind:key="index"
            v-on:click="this.setStroke($event, index)"
            :class="{ active: index + 1 === selectedStroke }"
            class="item"
          >
            <div
              v-bind:key="index"
              v-bind:style="{
                height: index + 1 + 'px',
                minHeight: index + 1 + 'px',
              }"
            ></div>
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
      selectedTool: "pencil",
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
    setToolPencil(type) {
      this.selectedStroke = 1;
      this.selectedTool = type;
    },
    setToolBrush(type) {
      this.selectedStroke = 1;
      this.selectedTool = type;
    },
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
  .file-bar {
    background-color: rgba(191, 193, 192, 1);
    padding: 2px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    .link {
      cursor: default;
      padding: 0px 4px 0px 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 18px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: 4px;
        left: 4px;
        width: 6px;
        height: 1px;
        background: #000000;
      }
      &:hover,
      &:active {
        background-color: $highlightV95;
        color: white;
        &:after {
          content: "";
          position: absolute;
          bottom: 4px;
          left: 4px;
          width: 6px;
          height: 1px;
          background: #ffffff;
        }
        > .submenu {
          display: block;
        }
      }
      .submenu {
        @include v95;
        color: initial;
        position: absolute;
        min-width: 122px;
        top: 100%;
        left: 0;
        display: none;
        padding: 2px;
        z-index: 10;
        user-select: none;
        background-color: rgba(191, 193, 192, 1);
      }
    }
  }
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
    overflow: hidden;
    width: 100%;
    min-width: 49px;
    max-width: 49px;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 24px);
    grid-gap: 1px;
    justify-content: start;
    align-content: start;
    .strokes {
      margin-top: 4px;
      border-style: solid;
      border-width: 1px;
      border-color: rgb(10, 10, 10) rgb(254, 254, 254) rgb(254, 254, 254)
        rgb(10, 10, 10);
      box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
      min-width: 48px;
      padding: 2px;
      .item {
        border-width: 0px;
        background: transparent;
        box-shadow: none;
        padding: 0 4px;
        width: auto;
        height: 16px;
        border-radius: 0;
        > div {
          width: 100%;
          background: black;
        }
        &.active,
        &:active,
        &:focus {
          border-width: 0px;
          background: $highlightV95;
          box-shadow: none;
          > div {
            width: 100%;
            background: white;
          }
        }
      }
    }
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 24px;
      height: 24px;
      outline: none;
      border: none;
      border-radius: 0;
      margin: 0;
      padding: 0;
      box-shadow: 1px 1px black, inset -1px -1px grey, inset 1px 1px white;
      &:focus,
      &:active,
      &.active {
        box-shadow: inset 1px 1px rgba(black, 1), inset 2px 2px rgba(grey, 1),
          1px 1px rgba(white, 1);

        background-image: repeating-linear-gradient(
          to left bottom,
          rgba(white, 0.8),
          rgba(white, 0.8) 0.25px,
          rgba(grey, 0.1) 0.25px,
          rgba(grey, 0.1) 0.5px
        );
      }
      &.stroke {
        grid-column: 1 / span 2;
        width: 48px;
        background-color: black;
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
