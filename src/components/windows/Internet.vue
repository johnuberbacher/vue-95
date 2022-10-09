<template>
  <div class="embed">
    <div class="file-bar">
      <div class="link">
        File
        <div class="submenu">
          <div class="link">Save</div>
          <div class="link">Exit</div>
        </div>
      </div>
      <div class="link">
        View
        <div class="submenu">
          <div class="link">Zoom In</div>
          <div class="link">Zoom Out</div>
        </div>
      </div>
      <div class="link">
        Favorites
        <div class="submenu">
          <div class="link">JohnUberbacher</div>
          <div class="link">Minecraft</div>
        </div>
      </div>
    </div>
    <form @submit.prevent="searchInternet(currentUrl)">
      <span>Address</span>
      <input v-model="currentUrl" type="text" />
      <button @submit.prevent="searchInternet(currentUrl)" type="submit">
        s
      </button>
    </form>
    <embed :src="internetStore.url" />
  </div>
</template>
<script setup>
import { useInternetStore } from "../../stores/internet";

const internetStore = useInternetStore();

let currentUrl = internetStore.url;

function searchInternet(currentUrl) {
  internetStore.url = currentUrl;
}
</script>
<style lang="scss" scoped>
.embed {
  display: flex;
  flex-direction: column;
  height: 100%;
  embed {
    resize: none;
    height: 100%;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(10, 10, 10) rgb(254, 254, 254) rgb(254, 254, 254)
      rgb(10, 10, 10);
    box-shadow: rgb(223 223 223) 1px 1px 0px 0px inset;
  }
  form {
    background-color: rgba(191, 193, 192, 1);
    padding: 2px 1px 2px 4px;
    border-top: 1px solid;
    border-color: rgb(254, 254, 254) rgb(223 223 223) rgb(254, 254, 254)
      rgb(254, 254, 254);

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    user-select: none;
    span {
      display: block;
      margin-right: 4px;
    }
    input {
      width: 100%;
    }
    button {
      width: 23px;
      height: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 4px;
      background-color: rgba(191, 193, 192, 1);
      border-radius: 0px;
      outline: none;
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
    }
  }
}
</style>
