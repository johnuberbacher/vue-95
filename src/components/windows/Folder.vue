<template>
  <div class="folder">
    <div class="file-explorer">
      <Program 
        v-for="(file, index) in directory"
        v-bind:key="index"
        :title="file.fileName"
        :icon="file.type"
        @openProgram="openProgram(file.fileName, file.type)"
      />
    </div>
  </div>
</template>
<script>
import Program from "../desktop/programs/Program.vue";
export default {
  name: "Folder",
  components: {
    Program,
  },
  data() {
    return {
      directory: [
        {
          fileName: "Local Disk (C:)",
          type: "Folder",
        },
        {
          fileName: "Desktop",
          type: "Folder",
        },
        {
          fileName: "Notepad",
          type: "Notepad",
        },
      ],
    };
  },
  methods: {
    openProgram(programTitle, programIcon) {
      console.log(programTitle, programTitle);
      this.$emit("openProgram", programTitle, programIcon);
    },
  },
};
</script>
<style lang="scss" scoped>
.folder {
  height: 100%;
  width: 100%;
  overflow: auto;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(10, 10, 10) rgb(254, 254, 254) rgb(254, 254, 254)
    rgb(10, 10, 10);
  box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
  background: white;
  .file-explorer {
    width: 100%;
    height: 100%;
    .program {
      color: inherit;
      &:active {
        color: white;
      }
    }
  }
}
</style>