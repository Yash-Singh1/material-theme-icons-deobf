const a24_0x5dc4a3 = (function () {
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
const a24_0x4c6fc3 = a24_0x5dc4a3(this, function () {
  return a24_0x4c6fc3
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a24_0x4c6fc3)
    .search("(((.+)+)+)+$");
});
a24_0x4c6fc3();
("use strict");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.reloadWindow =
  exports.openMaterialThemeExt =
  exports.getMaterialThemeSettings =
  exports.setIconsID =
  exports.getCurrentIconsID =
  exports.getCurrentThemeID =
    undefined;
const vscode_1 = require("vscode");
const getCurrentThemeID = () =>
  vscode_1.workspace.getConfiguration().get("workbench.colorTheme", "");
exports.getCurrentThemeID = getCurrentThemeID;
const getCurrentIconsID = () =>
  vscode_1.workspace.getConfiguration().get("workbench.iconTheme", "");
exports.getCurrentIconsID = getCurrentIconsID;
const setIconsID = (f) =>
  vscode_1.workspace.getConfiguration().update("workbench.iconTheme", f, true);
exports.setIconsID = setIconsID;
const getMaterialThemeSettings = () =>
  vscode_1.workspace.getConfiguration().get("materialTheme", {
    accent: "",
  });
exports.getMaterialThemeSettings = getMaterialThemeSettings;
const openMaterialThemeExt = () =>
  vscode_1.commands.executeCommand(
    "workbench.extensions.action.showExtensionsWithIds",
    ["equinusocio.vsc-material-theme"],
  );
exports.openMaterialThemeExt = openMaterialThemeExt;
const reloadWindow = () =>
  vscode_1.commands.executeCommand("workbench.action.reloadWindow");
exports.reloadWindow = reloadWindow;
