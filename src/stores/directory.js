import { defineStore } from "pinia";

export const useDirectoryStore = defineStore("directory", {
  state: () => ({
    openPrograms: [],
    activeDirectory: [
      [
        "My Computer",
        "MyComputer",
        "Folder",
        true,
        [
          ["3½ Floppy (A:)", "FloppyDrive", "Folder", true],
          [
            "Local Disk (C:)",
            "Drive",
            "Folder",
            true,
            [
              ["My Documents", "MyDocuments", "Folder", true],
              ["My Pictures", "Folder", "Folder", true],
            ],
          ],
          ["(D:)", "DiskDrive", "Dialog", true],
          ["Control Panel", "Folder", true],
        ],
      ],
      ["Internet", "Internet", "Internet", true],
      ["Notepad", "Notepad", "Notepad", true],
      ["Paint", "Paint", "Paint", true],
      [
        "Programs",
        "Programs",
        "Folder",
        true,
        [
          ["Internet", "Internet", "Internet", true],
          ["Notepad", "Notepad", "Notepad", true],
          ["AOL", "AOL", "AOL", true],
          ["Paint", "Paint", "Paint", true],
        ],
      ],
      ["Recycle Bin", "RecycleBin", "Folder", true],
      [
        "Folder",
        "Folder",
        "Folder",
        true,
        [
          [
            "Games",
            "Folder",
            "Folder",
            true,
            [
              ["Example", "Internet", "Internet", true],
              ["OctoPet", "Internet", "Internet", true],
              [
                "Even Deeper Folder",
                "Folder",
                "Folder",
                true,
                [["Recycle Bin", "RecycleBin", "Folder", true]],
              ],
            ],
          ],
          ["Internet Link", "Internet", "Internet", true],
        ],
      ],
    ],
  }),
  actions: {
    async addBlog(title, imageUrl, author, body, category, dateTime) {
      this.activeDirectory.push({
        title,
        imageUrl,
        author,
        body,
        category,
        dateTime,
      });
    },
    async removeBlog(index) {
      if (index > -1) {
        this.activeDirectory.splice(index, 1);
      }
    },
  },
});
