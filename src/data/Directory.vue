<script>
export default [
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
      ["(D:)", "DiskDrive", "Folder", true],
      ["Control Panel", "Folder", "Folder", true],
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
];
</script>