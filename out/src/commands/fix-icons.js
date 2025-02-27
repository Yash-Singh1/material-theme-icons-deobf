const a9_0x55127c = (function () {
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
const a9_0x5a76c9 = a9_0x55127c(this, function () {
  return a9_0x5a76c9
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a9_0x5a76c9)
    .search("(((.+)+)+)+$");
});
a9_0x5a76c9();
("use strict");
var __awaiter =
  (this && this.__awaiter) ||
  function (f, g, h, i) {
    function j(k) {
      return k instanceof h
        ? k
        : new h(function (l) {
            l(k);
          });
    }
    return new (h || (h = Promise))(function (m, n) {
      function o(p) {
        try {
          q(i.next(p));
        } catch (r) {
          n(r);
        }
      }
      function t(u) {
        try {
          q(i["throw"](u));
        } catch (v) {
          n(v);
        }
      }
      function q(w) {
        if (w.done) {
          m(w.value);
        } else {
          j(w.value).then(o, t);
        }
      }
      q((i = i.apply(f, g || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", {
  value: true,
});
const fs = require("fs-extra");
const fs_1 = require("../lib/fs");
const icons_1 = require("../lib/icons");
const material_theme_1 = require("../lib/material-theme");
const vscode_1 = require("../lib/vscode");
const isAccent = (x, y) => Boolean(Object.keys(y).find((z) => z === x));
exports["default"] = () =>
  __awaiter(undefined, undefined, undefined, function* () {
    const aa = {
      resolve: () => null,
      reject: () => null,
    };
    const ab = new Promise((ac, ad) => {
      aa.resolve = ac;
      aa.reject = ad;
    });
    0x0;
    const ae = vscode_1.getCurrentThemeID();
    0x0;
    if (!material_theme_1.isMaterialTheme(ae)) {
      return null;
    }
    0x0;
    const af = fs_1.getDefaultsJson();
    0x0;
    const ag = fs_1.getPackageJson();
    0x0;
    const ah = vscode_1.getMaterialThemeSettings();
    0x0;
    const ai = material_theme_1.getThemeIconVariant(af, ae);
    0x0;
    const aj = vscode_1.getCurrentIconsID();
    const ak = ai ? "eq-material-theme-icons-" + ai : "eq-material-theme-icons";
    if (aj !== ak) {
      0x0;
      yield vscode_1.setIconsID(ak);
    }
    0x0;
    const al = icons_1.getIconsPath(ag, ak);
    0x0;
    const am = fs_1.getIconsVariantJson(al);
    af.accentableIcons.forEach((an) => {
      const ao = am.iconDefinitions[an];
      const ap = af.icons.theme.iconDefinitions[an];
      if (typeof ao === "object" && typeof ap === "object") {
        ao.iconPath = isAccent(ah.accent, af.accents)
          ? ap.iconPath.replace(
              ".svg",
              ".accent." + ah.accent.replace(/\s+/, "-") + ".svg",
            )
          : ap.iconPath;
      }
    });
    0x0;
    const aq = fs_1.getAbsolutePath(al);
    fs.writeFile(
      aq,
      JSON.stringify(am),
      {
        encoding: "utf-8",
      },
      (ar) =>
        __awaiter(undefined, undefined, undefined, function* () {
          if (ar) {
            null;
            return;
          }
          null;
        }),
    );
    try {
      yield ab;
      0x0;
      yield vscode_1.reloadWindow();
    } catch (as) {
      console.trace(as);
    }
  });
