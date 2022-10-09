import { defineStore } from "pinia";

export const useInternetStore = defineStore("internet", {
  state: () => ({
    url: 'https://www.google.com/webhp?igu=1',
  }),
});
