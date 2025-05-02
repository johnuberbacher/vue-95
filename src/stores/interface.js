import { defineStore } from "pinia";

export const useInterfaceStore = defineStore("interface", {
  state: () => ({
    fullscreenMode: true,
    crtMode: true,
    programContextMenuActive: false, 
    desktopContextMenuActive: false, 
    desktopContextMenuPosition: [0, 0],
    desktopStartMenuActive: false,
  }),
});
