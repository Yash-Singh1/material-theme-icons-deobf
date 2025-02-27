const a10_0x3f000e = (function () {
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
const a10_0x6bcbdc = a10_0x3f000e(this, function () {
  return a10_0x6bcbdc
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a10_0x6bcbdc)
    .search("(((.+)+)+)+$");
});
a10_0x6bcbdc();
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
      function s(t) {
        try {
          q(i["throw"](t));
        } catch (u) {
          n(u);
        }
      }
      function q(v) {
        if (v.done) {
          m(v.value);
        } else {
          j(v.value).then(o, s);
        }
      }
      q((i = i.apply(f, g || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const fix_icons_1 = require("./commands/fix-icons");
const persistent_settings_1 = require("./lib/persistent-settings");
function activate(w) {
  return __awaiter(this, undefined, undefined, function* () {
    const x = new persistent_settings_1["default"](vscode, w.globalStoragePath);
    x.updateStatus();
    const y = vscode.commands.registerCommand(
      "eqMaterialThemeIcons.fixIcons",
      fix_icons_1["default"],
    );
    w.subscriptions.push(y);
  });
}
function deactivate() {}
