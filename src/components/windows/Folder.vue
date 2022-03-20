<template>
  <div class="folder">
    <div class="file-bar">
      <div>File</div>
      <div>Edit</div>
    </div>
    <div class="file-explorer">
      <Program
        v-for="(file, index) in currentDirectory"
        v-bind:key="index"
        :fileName="file[0]"
        :fileIcon="file[1]"
        :fileType="file[2]"
        :files="file[4]"
        :programsOpen="programsOpen"
        @openProgram="openProgram"
      />
    </div>
    <div class="details-bar">
      <div>{{ this.programsOpen.length }} object(s)</div>
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
      currentDirectory: this.loadDirectory(),
    };
  },
  props: {
    fileName: String,
    fileIcon: String,
    fileType: String,
    files: Array,
    programsOpen: Array,
  },
  methods: {
    loadDirectory() {
      let filteredResult = this.programsOpen
        .filter((row) => row[0] === this.fileName)
        .map((row) => row);
        console.log(filteredResult[0][4])
      return filteredResult[0][4]
    },
    openProgram(fileName, fileIcon, fileType, files) {
      this.$emit("openProgram", fileName, fileIcon, fileType, files);
    },
  },
};
</script>
<style lang="scss" scoped>
.folder {
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .file-bar {
    background-color: rgba(191, 193, 192, 1);
    padding: 2px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    > div {
      cursor: default;
      padding: 1px 4px 0px 2px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 16px;
      &:hover,
      &:active {
        background-color: $highlightV95;
        color: white;
      }
    }
  }
  .details-bar {
    @include v95Hover;
    background-color: rgba(191, 193, 192, 1);
    padding: 4px 2px 2px 2px;
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
  }
  .file-explorer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    overflow: auto;
    @include v95Hover;
    background-color: white;
    .program {
      color: inherit;
      &:active {
        color: white;
      }
    }
  }
}
</style>