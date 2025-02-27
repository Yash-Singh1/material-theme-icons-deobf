const a16_0x21d4da = (function () {
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
const a16_0x132d22 = a16_0x21d4da(this, function () {
  return a16_0x132d22
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a16_0x132d22)
    .search("(((.+)+)+)+$");
});
a16_0x132d22();
("use strict");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
const path = require("node:path");
const fs = require("fs-extra");
const paths_1 = require("../../../builder/helpers/paths");
const iconsList = fs
  .readdirSync(path.resolve(paths_1.PATHS.srcSvgs))
  .map((f) => {
    if (/\.svg$/i.exec(f)) {
      return f.replace(/\.[^/.]+$/, "");
    }
    return "";
  });
class Icon {
  constructor(g) {
    let h = "";
    if (g.indexOf("folder")) {
      if (g.indexOf("file")) {
        h = "_file_" + g;
      } else {
        h = "_" + g;
      }
    } else {
      h = "_" + g;
    }
    this[h] = {
      iconPath: "../icons/" + g + ".svg",
    };
  }
}
const icons = iconsList.reduce(
  (j, k) => {
    const l = new Icon(k);
    j.iconDefinitions = Object.assign(Object.assign({}, j.iconDefinitions), l);
    return j;
  },
  {
    iconDefinitions: {},
  },
);
exports["default"] = icons;
