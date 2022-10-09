import { defineStore } from "pinia";

export const useInterfaceStore = defineStore("interface", {
  state: () => ({
    fullscreenMode: false,
    crtMode: true,
    programContextMenuActive: false, 
    desktopContextMenuActive: false, 
    desktopContextMenuPosition: [0, 0],
    desktopStartMenuActive: false,
  }),
});
