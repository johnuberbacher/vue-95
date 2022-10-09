<template>
  <div class="folder">
    <div class="file-bar">
      <div class="link">
        File
        <div class="submenu">
          <div class="link">Save</div>
          <div class="link">Exit</div>
        </div>
      </div>
      <div class="link">
        File
        <div class="submenu">
          <div class="link">Save</div>
          <div class="link">Exit</div>
        </div>
      </div>
    </div>
    <div class="file-explorer">
      <Program
        v-for="(file, index) in currentDirectory"
        v-bind:key="index"
        :fileName="file[0]"
        :fileIcon="file[1]"
        :fileType="file[2]"
        :files="file[3]"
      />
    </div>
    <div class="details-bar">
      <div>
        {{ currentDirectory ? currentDirectory.length : "0" }}
        object(s)
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted,computed  } from "vue";
import Program from "../desktop/programs/Program.vue";
import { useDirectoryStore } from "../../stores/directory";

let currentDirectory = computed(() => loadDirectory(directoryStore.openPrograms, props.fileName));

const directoryStore = useDirectoryStore();
const props = defineProps([
  "fileName",
  "fileIcon",
  "fileType",
  "files",
]);

function loadDirectory(searchDirectory, fileSearch) {
  let filteredResult = searchDirectory
    .filter((row) => row[0] === fileSearch)
    .map((row) => row);
  return filteredResult[0][4];
}
</script>
<style lang="scss" scoped>
.folder {
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
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
