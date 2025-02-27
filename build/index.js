"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (b, c) => {
  for (var d in c)
    __defProp(b, d, {
      get: c[d],
      enumerable: true,
    });
};
var __copyProps = (e, f, g, h) => {
  if ((f && typeof f === "object") || typeof f === "function") {
    for (let i of __getOwnPropNames(f))
      if (!__hasOwnProp.call(e, i) && i !== g) {
        __defProp(e, i, {
          get: () => f[i],
          enumerable: !(h = __getOwnPropDesc(f, i)) || h.enumerable,
        });
      }
  }
  return e;
};
var __toESM = (j, k, l) => (
  (l = j != null ? __create(__getProtoOf(j)) : {}),
  __copyProps(
    k || !j || !j.__esModule
      ? __defProp(l, "default", {
          value: j,
          enumerable: true,
        })
      : l,
    j,
  )
);
var __toCommonJS = (m) =>
  __copyProps(
    __defProp({}, "__esModule", {
      value: true,
    }),
    m,
  );
var src_exports = {};
__export(src_exports, {
  activate: () => activate,
  deactivate: () => deactivate,
});
module.exports = __copyProps(
  __defProp({}, "__esModule", {
    value: true,
  }),
  src_exports,
);
var vscode7 = __toESM(require("vscode"));
var import_node_fs = __toESM(require("node:fs"));
var import_node_path = __toESM(require("node:path"));
var themesDir = import_node_path["default"].join(__dirname, "themes");
var hideExplorerArrows = async (n) => {
  import_node_fs["default"].readdirSync(themesDir).forEach((o) => {
    const p = import_node_path["default"].join(themesDir, o);
    const q = JSON.parse(import_node_fs["default"].readFileSync(p, "utf-8"));
    const r = {
      ...q,
    };
    if (n) {
      r.hidesExplorerArrows = true;
    } else {
      r.hidesExplorerArrows = false;
    }
    import_node_fs["default"].writeFileSync(p, JSON.stringify(r, null, 0x2), {
      encoding: "utf-8",
    });
  });
};
var import_node_fs2 = __toESM(require("node:fs"));
var import_node_path2 = __toESM(require("node:path"));
var themesDir2 = import_node_path2["default"].join(__dirname, "themes");
var useGradientIcons = async (s) => {
  import_node_fs2["default"].readdirSync(themesDir2).forEach((t) => {
    const u = import_node_path2["default"].join(themesDir2, t);
    const v = JSON.parse(import_node_fs2["default"].readFileSync(u, "utf-8"));
    const w = {
      ...v,
    };
    Object.values(w.iconDefinitions).forEach((x) => {
      if (s) {
        x.iconPath = x.iconPath.replace("flat", "gradient");
      } else {
        x.iconPath = x.iconPath.replace("gradient", "flat");
      }
    });
    import_node_fs2["default"].writeFileSync(u, JSON.stringify(w, null, 0x2), {
      encoding: "utf-8",
    });
  });
};
var import_node_fs3 = __toESM(require("node:fs"));
var import_node_path3 = __toESM(require("node:path"));
var vscode3 = __toESM(require("vscode"));
var dictionary_default = {
  feedbacks: {
    reload: {
      title: "",
      message:
        "Material Theme accent (with sync on) or Icons settings changed. A window reload is required.",
      cta: "Reload now",
    },
    no_accent: {
      title: "",
      message: "No material theme accent found",
    },
    no_material_theme: {
      title: "",
      message: "Material Theme Icons extension is not installed",
    },
  },
};
var material_theme_icons_config_default = {
  accents: {
    Tomato: "#F44336",
    Orange: "#FF7042",
    Yellow: "#FFBF00",
    "Acid Lime": "#C6FF00",
    Lime: "#7CB342",
    "Breaking Bad": "#388E3C",
    Teal: "#80CBC4",
    "Bright Teal": "#64FFDA",
    Cyan: "#28BAE8",
    Blue: "#2979FF",
    Indigo: "#5C6BC0",
    Purple: "#AB47BC",
    Pink: "#FF4081",
  },
  accentableIcons: [
    "_folder_open",
    "_folder_root_open",
    "_folder_vscode_open",
    "_folder_gulp_open",
    "_folder_node_open",
    "_folder_images_open",
    "_folder_js_open",
    "_folder_css_open",
    "_folder_sass_open",
    "_folder_src_open",
    "_folder_assets_open",
    "_folder_git_open",
    "_folder_github_open",
    "_folder_test_open",
    "_folder_dist_open",
    "_folder_ci_open",
    "_folder_nginx_open",
  ],
  icons: {
    theme: {
      iconDefinitions: {
        _folder_nginx: {
          iconPath: "../icons/folder_nginx.svg",
        },
        _folder_nginx_open: {
          iconPath: "../icons/folder_nginx_open.svg",
        },
        _folder_sass: {
          iconPath: "../icons/folder_sass.svg",
        },
        _folder_sass_open: {
          iconPath: "../icons/folder_sass_open.svg",
        },
        _folder_css: {
          iconPath: "../icons/folder_css.svg",
        },
        _folder_css_open: {
          iconPath: "../icons/folder_css_open.svg",
        },
        _folder_ci: {
          iconPath: "../icons/folder_ci.svg",
        },
        _folder_ci_open: {
          iconPath: "../icons/folder_ci_open.svg",
        },
        _folder_dist: {
          iconPath: "../icons/folder_dist.svg",
        },
        _folder_dist_open: {
          iconPath: "../icons/folder_dist_open.svg",
        },
        _folder_test: {
          iconPath: "../icons/folder_test.svg",
        },
        _folder_test_open: {
          iconPath: "../icons/folder_test_open.svg",
        },
        _folder_github: {
          iconPath: "../icons/folder_github.svg",
        },
        _folder_github_open: {
          iconPath: "../icons/folder_github_open.svg",
        },
        _folder_git: {
          iconPath: "../icons/folder_git.svg",
        },
        _folder_git_open: {
          iconPath: "../icons/folder_git_open.svg",
        },
        _folder_assets: {
          iconPath: "../icons/folder_assets.svg",
        },
        _folder_assets_open: {
          iconPath: "../icons/folder_assets_open.svg",
        },
        _folder_src: {
          iconPath: "../icons/folder_src.svg",
        },
        _folder_src_open: {
          iconPath: "../icons/folder_src_open.svg",
        },
        _folder_js: {
          iconPath: "../icons/folder_js.svg",
        },
        _folder_js_open: {
          iconPath: "../icons/folder_js_open.svg",
        },
        _folder_images: {
          iconPath: "../icons/folder_images.svg",
        },
        _folder_images_open: {
          iconPath: "../icons/folder_images_open.svg",
        },
        _folder_gulp: {
          iconPath: "../icons/folder_gulp.svg",
        },
        _folder_gulp_open: {
          iconPath: "../icons/folder_gulp_open.svg",
        },
        _folder_node: {
          iconPath: "../icons/folder_node.svg",
        },
        _folder_node_open: {
          iconPath: "../icons/folder_node_open.svg",
        },
        _folder_vscode: {
          iconPath: "../icons/folder_vscode.svg",
        },
        _folder_vscode_open: {
          iconPath: "../icons/folder_vscode_open.svg",
        },
        _folder_dark: {
          iconPath: "../icons/folder_dark.svg",
        },
        _folder_light: {
          iconPath: "../icons/folder_light.svg",
        },
        _folder_root_dark: {
          iconPath: "../icons/folder_root_dark.svg",
        },
        _folder_root_light: {
          iconPath: "../icons/folder_root_light.svg",
        },
        _file_folder: {
          iconPath: "../icons/file_folder.svg",
        },
        _folder_open: {
          iconPath: "../icons/folder_open.svg",
        },
        _folder_root_open: {
          iconPath: "../icons/folder_root_open.svg",
        },
      },
    },
  },
  themeIconVariants: {
    Darker: "eq-mt-icons-pro-darker",
    Light: "eq-mt-icons-pro-light",
    Palenight: "eq-mt-icons-pro-palenight",
    Ocean: "eq-mt-icons-pro-ocean",
    Deepforest: "eq-mt-icons-pro-deepforest",
  },
  themeVariantsColors: {
    Darker: "#636363",
    Default: "#587380",
    Light: "#869CA7",
    Palenight: "#686F93",
    Ocean: "#5B6380",
    Deepforest: "#44855D",
  },
  variantsIcons: [
    "_folder_nginx",
    "_folder_sass",
    "_folder_css",
    "_folder_ci",
    "_folder_dist",
    "_folder_test",
    "_folder_github",
    "_folder_git",
    "_folder_assets",
    "_folder_src",
    "_folder_js",
    "_folder_images",
    "_folder_gulp",
    "_folder_node",
    "_folder_vscode",
    "_folder_dark",
    "_folder_light",
    "_folder_root_dark",
    "_folder_root_light",
  ],
};
var getThemeConfig = () => {
  if (
    material_theme_icons_config_default === undefined ||
    material_theme_icons_config_default === null
  ) {
    throw new Error("Cannot find extension config");
  }
  return material_theme_icons_config_default;
};
var vscode = __toESM(require("vscode"));
var getPackageJSON = () => {
  const y = vscode.extensions.getExtension(
    "equinusocio.vsc-material-theme-icons-pro",
  );
  if (!y) {
    throw new Error(
      "Extension with ID equinusocio.vsc-material-theme-icons-pro not found",
    );
  }
  return y.packageJSON;
};
var vscode2 = __toESM(require("vscode"));
var getThemeSetting = (z) =>
  vscode2.workspace.getConfiguration().get("materialThemeIcons." + z);
var hasThemeSetting = (aa) =>
  vscode2.workspace.getConfiguration().has("materialThemeIcons." + aa);
var useMaterialThemeAccent = async (ab) => {
  if (
    vscode3.extensions.getExtension("Equinusocio.vsc-material-theme-pro") ===
    undefined
  ) {
    vscode3.window.showInformationMessage(
      String(dictionary_default.feedbacks.no_material_theme.message),
    );
    return;
  }
  const ac = vscode3.workspace.getConfiguration().has("materialTheme.accent");
  const ad =
    !vscode2.workspace
      .getConfiguration()
      .has("materialThemeIcons.syncAccentWithMaterialTheme") ||
    vscode2.workspace
      .getConfiguration()
      .get("materialThemeIcons.syncAccentWithMaterialTheme") !== false;
  const ae = ad
    ? vscode3.workspace.getConfiguration().get("materialTheme.accent")
    : ab;
  if (!ac || !ae) {
    vscode3.window.showInformationMessage(
      dictionary_default.feedbacks.no_accent.message,
    );
    return;
  }
  const { accentableIcons: af } = getThemeConfig();
  const ag = import_node_path3["default"].join(__dirname, "themes");
  const ah = ae.replace(" ", "-");
  import_node_fs3["default"].readdirSync(ag).forEach((ai) => {
    const aj = import_node_path3["default"].join(ag, ai);
    const ak = JSON.parse(import_node_fs3["default"].readFileSync(aj, "utf-8"));
    const al = {
      ...ak,
    };
    af.forEach((am) => {
      const an = al.iconDefinitions[am];
      if (an) {
        const { iconPath: ao } = an;
        const ap = ao.includes(".accent.")
          ? ao.replace(/\.accent\.[^.]+\.svg$/, ".accent." + ah + ".svg")
          : ao.replace(".svg", ".accent." + ah + ".svg");
        const aq = ao.replace(/\.accent\.[^.]+\.svg$/, ".svg");
        an.iconPath = ae === "Teal" ? aq : ap;
      }
    });
    import_node_fs3["default"].writeFileSync(
      aj,
      JSON.stringify(al, null, 0x2),
      "utf-8",
    );
  });
};
var env = {
  BUILD_PATH: "./build",
  SRC_SVG: "./svgs",
  OUT_THEMES: "./build/themes",
  FINAL_DEFAULT_THEME_PATH: "./build/themes/Material-Theme-Icons.json",
  THEME_CONFIG: "./src/material-theme-icons.config.json",
  pathJsonThemeVariant: (ar) =>
    "./build/themes/Material-Theme-Icons-" + ar + ".json",
  THEME_VERSION_KEY: "materialThemeIcons.version",
};
var vscode4 = __toESM(require("vscode"));
var watchUseGradientIcons = vscode4.workspace.onDidChangeConfiguration((as) => {
  if (as.affectsConfiguration("materialThemeIcons.useGradientIcons")) {
    vscode4.commands.executeCommand(
      "materialThemeIcons.useGradientIcons",
      vscode2.workspace
        .getConfiguration()
        .get("materialThemeIcons.useGradientIcons"),
    );
  }
});
var vscode5 = __toESM(require("vscode"));
var watchHidesExplorerArrows = vscode5.workspace.onDidChangeConfiguration(
  (at) => {
    if (at.affectsConfiguration("materialThemeIcons.hidesExplorerArrows")) {
      vscode5.commands.executeCommand(
        "materialThemeIcons.hideExplorerArrows",
        vscode2.workspace
          .getConfiguration()
          .get("materialThemeIcons.hidesExplorerArrows"),
      );
    }
  },
);
var vscode6 = __toESM(require("vscode"));
var watchSyncAccentSetting = vscode6.workspace.onDidChangeConfiguration(
  (au) => {
    if (
      au.affectsConfiguration("materialTheme.accent") ||
      au.affectsConfiguration("materialThemeIcons.iconsAccent") ||
      au.affectsConfiguration("materialThemeIcons.syncAccentWithMaterialTheme")
    ) {
      vscode6.commands.executeCommand(
        "materialThemeIcons.matchAccent",
        vscode2.workspace
          .getConfiguration()
          .get("materialThemeIcons.iconsAccent"),
      );
    }
  },
);
async function activate(av) {
  av.globalState.setKeysForSync(["materialThemeIcons.version"]);
  const aw = av.globalState.get("materialThemeIcons.version");
  const ax = aw === undefined || typeof aw !== "string";
  if (ax && aw) {
    av.globalState.update(aw, getPackageJSON().version);
  }
  const ay = vscode7.workspace.onDidChangeConfiguration((az) => {
    const ba = [
      "materialThemeIcons.syncAccentWithMaterialTheme",
      "materialThemeIcons.useGradientIcons",
      "materialThemeIcons.hidesExplorerArrows",
    ];
    if (
      ba.some((bb) => az.affectsConfiguration(bb)) ||
      (az.affectsConfiguration("materialTheme.accent") &&
        vscode2.workspace
          .getConfiguration()
          .get("materialThemeIcons.syncAccentWithMaterialTheme") === true)
    ) {
      vscode7.window
        .showInformationMessage(
          dictionary_default.feedbacks.reload.message,
          dictionary_default.feedbacks.reload.cta,
        )
        .then((bc) => {
          if (bc === "Reload now") {
            vscode7.commands.executeCommand("workbench.action.reloadWindow");
          }
        });
    }
  });
  vscode7.commands.executeCommand(
    "materialThemeIcons.useGradientIcons",
    vscode2.workspace
      .getConfiguration()
      .get("materialThemeIcons.useGradientIcons"),
  );
  vscode7.commands.executeCommand(
    "materialThemeIcons.hideExplorerArrows",
    vscode2.workspace
      .getConfiguration()
      .get("materialThemeIcons.hidesExplorerArrows"),
  );
  vscode7.commands.executeCommand(
    "materialThemeIcons.matchAccent",
    vscode2.workspace.getConfiguration().get("materialThemeIcons.iconsAccent"),
  );
  const bd = vscode7.commands.registerCommand(
    "materialThemeIcons.matchAccent",
    useMaterialThemeAccent,
  );
  const be = vscode7.commands.registerCommand(
    "materialThemeIcons.useGradientIcons",
    useGradientIcons,
  );
  const bf = vscode7.commands.registerCommand(
    "materialThemeIcons.hideExplorerArrows",
    hideExplorerArrows,
  );
  av.subscriptions.push(
    bd,
    be,
    bf,
    watchSyncAccentSetting,
    watchUseGradientIcons,
    watchHidesExplorerArrows,
    ay,
  );
}
function deactivate() {}
