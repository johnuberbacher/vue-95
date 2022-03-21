<template>
  <div class="folder">
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
      <div>
        {{ this.currentDirectory ? this.currentDirectory.length : "0" }}
        object(s)
      </div>
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
      currentDirectory: [],
    };
  },
  props: {
    fileName: String,
    fileIcon: String,
    fileType: String,
    files: Array,
    programsOpen: Array,
  },
  created() {
    this.loadDirectory(this.programsOpen, this.fileName);
  },
  methods: {
    loadDirectory(searchDirectory, fileSearch) {
      let filteredResult = searchDirectory
        .filter((row) => row[0] === fileSearch)
        .map((row) => row);
      this.currentDirectory = filteredResult[0][4];
    },
    openProgram(fileName, fileIcon, fileType, files) {
      this.$emit("openProgram", fileName, fileIcon, fileType, files);
      /*  if (fileType === "Folder") {
        let filteredResult = this.currentDirectory
          .filter((row) => row[0] === fileName)
          .map((row) => row);
        this.currentDirectory = filteredResult[0][4];
      } else {
        this.$emit("openProgram", fileName, fileIcon, fileType, files);
      }*/
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