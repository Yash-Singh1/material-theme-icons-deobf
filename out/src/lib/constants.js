const a19_0x552eee = (function () {
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
const a19_0x1794f6 = a19_0x552eee(this, function () {
  return a19_0x1794f6
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a19_0x1794f6)
    .search("(((.+)+)+)+$");
});
a19_0x1794f6();
("use strict");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.FILES = exports.PATHS = undefined;
const node_path_1 = require("node:path");
0x0;
0x0;
exports.PATHS = {
  rootDir: node_path_1.join(__dirname, "../../../"),
  extensionDir: node_path_1.join(__dirname, "../../"),
  defaults: "./src/defaults.json",
  package: "./package.json",
};
exports.FILES = {
  persistentSettings: "eq-material-theme-icons.json",
};
