<template>
  <div class="taskbar-program" v-on:click="minimizeWindow" >
    <span
      class="icon"
      :style="{
        backgroundImage: 'url(' + require('@/assets/icon/' + icon + '.png') + ')',
      }"
    ></span>
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  name: "TaskbarProgram",
  props: {
    title: String,
    icon: String,
  },
  methods: {
    minimizeWindow() {
      this.$emit("minimizeWindow", this.title);
    },
  }
};
</script>
<style lang="scss" scoped>
.taskbar-program {
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  text-overflow: ellipsis;
  padding: 2px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 160px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10)
    rgb(254, 254, 254);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset,
    rgb(132 133 132) 0px 0px 0px 1px inset;
  background: rgb(198, 198, 198);
  &:active {
    border-style: solid;
    border-width: 1px;
    border-color: rgb(10, 10, 10) rgb(254, 254, 254) rgb(254, 254, 254)
      rgb(10, 10, 10);
    box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
  }
  .icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background-size: 16px 16px;
    position: relative;
    display: block;
  }
}
</style>