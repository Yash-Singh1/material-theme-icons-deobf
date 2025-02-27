const a23_0x50b0a3 = (function () {
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
const a23_0x35265d = a23_0x50b0a3(this, function () {
  return a23_0x35265d
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a23_0x35265d)
    .search("(((.+)+)+)+$");
});
a23_0x35265d();
("use strict");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
const node_path_1 = require("node:path");
const path = require("node:path");
const fs_extra_1 = require("fs-extra");
const os = require("os");
const semver_1 = require("semver");
const constants_1 = require("./constants");
const fs_1 = require("./fs");
class PersistentSettings {
  constructor(f, g) {
    Object.defineProperty(this, "vscode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: f,
    });
    Object.defineProperty(this, "globalStoragePath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: g,
    });
    Object.defineProperty(this, "settings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined,
    });
    Object.defineProperty(this, "defaultState", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined,
    });
    this.settings = this.getSettings();
    this.defaultState = {
      version: "0.0.0",
    };
  }
  ["getSettings"]() {
    var h;
    const j =
      (h = this.vscode.env.appName) !== null && h !== undefined ? h : "";
    const k = /dev/i.test(j);
    const l = k && /oss/i.test(j);
    const m = /insiders/i.test(j);
    const n = new semver_1.SemVer(this.vscode.version).version;
    const o = process.platform.startsWith("win");
    0x0;
    const { version: p } = fs_1.getPackageJson();
    const q = {
      version: p,
    };
    const r = path.join(this.globalStoragePath, "settings.json");
    this.settings = {
      isDev: k,
      isOSS: l,
      isInsiders: m,
      isWin: o,
      vscodeVersion: n,
      persistentSettingsFilePath: r,
      extensionSettings: q,
    };
    0x0;
    if (!fs_extra_1.existsSync(this.globalStoragePath)) {
      0x0;
      fs_extra_1.mkdirSync(this.globalStoragePath);
    }
    this.migrateOldPersistentSettings(m, l, k);
    return this.settings;
  }
  ["getOldPersistentSettingsPath"](s, t, u) {
    const v = this.vscodePath();
    const w = this.vscodeAppName(s, t, u);
    0x0;
    const x = node_path_1.join(v, w, "User");
    0x0;
    return node_path_1.join(x, constants_1.FILES.persistentSettings);
  }
  ["migrateOldPersistentSettings"](y, z, aa) {
    const ab = this.getOldPersistentSettingsPath(y, z, aa);
    0x0;
    if (fs_extra_1.existsSync(ab)) {
      const ac = require(ab);
      this.setState(ac);
      0x0;
      fs_extra_1.unlinkSync(ab);
    }
  }
  ["getState"]() {
    0x0;
    if (!fs_extra_1.existsSync(this.settings.persistentSettingsFilePath)) {
      return this.defaultState;
    }
    try {
      return require(this.settings.persistentSettingsFilePath);
    } catch (ad) {
      console.log(ad);
      return this.defaultState;
    }
  }
  ["setState"](ae) {
    try {
      0x0;
      fs_extra_1.writeFileSync(
        this.settings.persistentSettingsFilePath,
        JSON.stringify(ae),
      );
    } catch (af) {
      console.log(af);
    }
  }
  ["deleteState"]() {
    0x0;
    fs_extra_1.unlinkSync(this.settings.persistentSettingsFilePath);
  }
  ["updateStatus"]() {
    const ag = this.getState();
    ag.version = this.settings.extensionSettings.version;
    this.setState(ag);
    return ag;
  }
  ["isNewVersion"]() {
    const ah = this.getState().version;
    return ah === this.defaultState.version
      ? false
      : (0x0, semver_1.lt)(ah, this.settings.extensionSettings.version);
  }
  ["isFirstInstall"]() {
    return this.getState().version === this.defaultState.version;
  }
  ["vscodeAppName"](ai, aj, ak) {
    if (process.env.VSCODE_PORTABLE) {
      return "user-data";
    }
    if (ai) {
      return "Code - Insiders";
    }
    if (aj) {
      return "Code - OSS";
    }
    if (ak) {
      return "code-oss-dev";
    }
    return "Code";
  }
  ["vscodePath"]() {
    switch (process.platform) {
      case "darwin":
        return os.homedir() + "/Library/Application Support";
      case "linux":
        return os.homedir() + "/.config";
      case "win32":
        return process.env.APPDATA;
      default:
        return "/var/local";
    }
  }
}
exports["default"] = PersistentSettings;
