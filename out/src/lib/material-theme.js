const a22_0x5de03d = (function () {
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
const a22_0xb6afce = a22_0x5de03d(this, function () {
  return a22_0xb6afce
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a22_0xb6afce)
    .search("(((.+)+)+)+$");
});
a22_0xb6afce();
("use strict");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.getThemeIconVariant =
  exports.isMaterialTheme =
  exports.materialThemes =
    undefined;
exports.materialThemes = [
  "Material Theme",
  "Material Theme High Contrast",
  "Material Theme Darker",
  "Material Theme Darker High Contrast",
  "Material Theme Palenight",
  "Material Theme Palenight High Contrast",
  "Material Theme Ocean",
  "Material Theme Ocean High Contrast",
  "Material Theme Deep Forest",
  "Material Theme Deep Forest High Contrast",
  "Material Theme Lighter",
  "Material Theme Lighter High Contrast",
];
const isMaterialTheme = (f) => exports.materialThemes.includes(f);
exports.isMaterialTheme = isMaterialTheme;
const getThemeIconVariant = (g, h) => {
  const i = Object.keys(g.themeIconVariants).find((j) => h.includes(j));
  return i ? i.toLowerCase() : undefined;
};
exports.getThemeIconVariant = getThemeIconVariant;
