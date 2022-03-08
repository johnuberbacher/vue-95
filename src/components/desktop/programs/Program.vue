<template>
  <div class="program">
    <span
      class="icon"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/icon/my-computer.png') + ')',
      }"
    ></span>
    <span>My Computer</span>
  </div>
</template>
<script>
export default {
  name: "Program",
};
</script>
<style lang="scss" scoped>
.program {
  height: 72px;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2px;
  color: white;
  .icon {
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
    background-size: 32px 32px;
    display: block;
  }
}
</style>