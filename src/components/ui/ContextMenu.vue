<template>
  <div
    v-bind:style="{
      left: props.position[0] + 'px',
      top: props.position[1] + 'px',
    }"
    class="contextMenu"
  >
    <div
      class="link"
      v-bind:key="index"
      v-for="(menuItem, index) in menuItems"
      v-on:click="menuItem[1]"
    >
      {{ menuItem[0] }}
    </div>
    <div class="divider"></div>
    <div class="link">Create Shortcut</div>
  </div>
</template>
<script setup>
const props = defineProps(["position", "menuItems"]);
</script>
<style scoped>
</style>
