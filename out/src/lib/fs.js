const a20_0x8cc54c = (function () {
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
const a20_0x491c1c = a20_0x8cc54c(this, function () {
  return a20_0x491c1c
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a20_0x491c1c)
    .search("(((.+)+)+)+$");
});
a20_0x491c1c();
("use strict");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.getAbsolutePath =
  exports.getIconsVariantJson =
  exports.getPackageJson =
  exports.getDefaultsJson =
    undefined;
const node_path_1 = require("node:path");
const constants_1 = require("./constants");
const getDefaultsJson = () => {
  0x0;
  const f = require(
    node_path_1.join(
      constants_1.PATHS.extensionDir,
      constants_1.PATHS.defaults,
    ),
  );
  if (f === undefined || f === null) {
    throw new Error("Cannot find defaults params");
  }
  return f;
};
exports.getDefaultsJson = getDefaultsJson;
const getPackageJson = () =>
  require(
    (0x0, node_path_1.join)(
      constants_1.PATHS.rootDir,
      constants_1.PATHS["package"],
    ),
  );
exports.getPackageJson = getPackageJson;
const getIconsVariantJson = (g) =>
  require((0x0, node_path_1.join)(constants_1.PATHS.rootDir, g));
exports.getIconsVariantJson = getIconsVariantJson;
const getAbsolutePath = (h) =>
  (0x0, node_path_1.join)(constants_1.PATHS.rootDir, h);
exports.getAbsolutePath = getAbsolutePath;
