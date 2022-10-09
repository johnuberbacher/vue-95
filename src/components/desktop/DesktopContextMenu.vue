<template>
  <div
    v-bind:style="{
      left: props.position[0] + 'px',
      top: props.position[1] + 'px',
    }"
    class="contextMenu"
  >
    <div class="link">
      <span>Arrange Icons</span><span>›</span>
      <div class="submenu">
        <div class="link">Name</div>
        <div class="link">Size</div>
        <div class="link">Item Type</div>
      </div>
    </div>
    <div class="link">
      <span>Backgrounds</span><span>›</span>
      <div class="submenu">
        <div class="link">Name</div>
        <div class="link">Size</div>
        <div class="link">Item Type</div>
      </div>
    </div>
    <div class="divider"></div>
    <div v-on:click="this.$emit('crtMode')" class="link">
      Disable&nbsp;CRT&nbsp;Mode
    </div>
    <div v-on:click="this.$emit('fullscreenMode')" class="link">
      Fullscreen Mode
    </div>
    <div class="divider"></div>
    <div class="link">
      <span>New</span><span>›</span>
      <div class="submenu">
        <div class="link" v-on:click="this.$emit('newFolder')">Folder</div>
        <div class="divider"></div>
        <div class="link" v-on:click="this.$emit('newTextDocument')">
          Text Document
        </div>
        <div class="link">Bitmap Image</div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="link">Properties</div>
  </div>
</template>
<script setup>
const props = defineProps(["position"]);
</script>
