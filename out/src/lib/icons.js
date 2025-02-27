const a21_0x5d09d1 = (function () {
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
const a21_0x20ddba = a21_0x5d09d1(this, function () {
  return a21_0x20ddba
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a21_0x20ddba)
    .search("(((.+)+)+)+$");
});
a21_0x20ddba();
("use strict");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.getIconsPath = undefined;
const getIconsPath = (f, g) => {
  const h = f.contributes.iconThemes.find((i) => i.id === g);
  return h ? h.path : "";
};
exports.getIconsPath = getIconsPath;
