<template>
  <div
    v-bind:style="{
      left: this.position[0] + 'px',
      top: this.position[1] + 'px',
    }"
    class="desktopContextMenu"
  >
    <div class="link"><span>Arrange Icons</span> <span>›</span></div>
    <div class="link">Line Up Icons</div>
    <div class="divider"></div>
    <div class="link"><span>New</span> <span>›</span></div>
    <div class="divider"></div>
    <div class="link">Properties</div>
  </div>
</template>
<script >
export default {
  name: "DesktopContextMenu",
  props: {
    position: Array,
  },
  data() {
    return {
      showContextMenu: this.active,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
.desktopContextMenu {
  position: absolute;
  min-width: 122px;
  padding: 2px;
  background-color: rgba(191, 193, 192, 1);
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  .link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 24px;
    padding: 4px 8px 4px 16px;
    &:hover {
      background-color: $highlight;
      color: white;
    }
    span {
      &:nth-of-type(2) {
        font-weight: bold;
      }
    }
  }
  .divider {
    margin-right: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(254, 254, 254) rgb(223 223 223) rgb(254, 254, 254)
      rgb(254, 254, 254);
  }
}
</style>