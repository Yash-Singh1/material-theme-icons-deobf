const a18_0x1d149e = (function () {
  let a = true;
  return function (b, c) {
    const d = a
      ? function () {
          if (c) {
            const e = c.apply(b, arguments);
            c = null;
            return e;
          }
        }
      : function () {};
    a = false;
    return d;
  };
})();
const a18_0x517cc7 = a18_0x1d149e(this, function () {
  return a18_0x517cc7
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a18_0x517cc7)
    .search("(((.+)+)+)+$");
});
a18_0x517cc7();
("use strict");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
const fileExtensions_1 = require("./partials/fileExtensions");
const fileFolders_1 = require("./partials/fileFolders");
const fileNames_1 = require("./partials/fileNames");
const folderNames_1 = require("./partials/folderNames");
const folderNamesExpanded_1 = require("./partials/folderNamesExpanded");
const iconsDefinition_1 = require("./partials/iconsDefinition");
const languageIds_1 = require("./partials/languageIds");
exports["default"] = Object.assign(
  Object.assign(
    Object.assign(
      {
        hidesExplorerArrows: true,
      },
      iconsDefinition_1["default"],
    ),
    fileFolders_1.fileFolders,
  ),
  {
    fileExtensions: fileExtensions_1.fileExtensions,
    fileNames: fileNames_1.fileNames,
    folderNames: folderNames_1.folderNames,
    folderNamesExpanded: folderNamesExpanded_1.folderNamesExpanded,
    languageIds: languageIds_1.languageIds,
  },
);
