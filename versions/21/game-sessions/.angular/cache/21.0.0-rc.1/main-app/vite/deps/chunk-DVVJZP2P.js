// node_modules/@angular/common/fesm2022/_xhr-chunk.mjs
function parseCookieValue(cookieStr, name) {
  name = encodeURIComponent(name);
  for (const cookie of cookieStr.split(";")) {
    const eqIndex = cookie.indexOf("=");
    const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ""] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
var XhrFactory = class {
};

export {
  parseCookieValue,
  XhrFactory
};
/*! Bundled license information:

@angular/common/fesm2022/_xhr-chunk.mjs:
  (**
   * @license Angular v21.0.0-rc.1
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-DVVJZP2P.js.map
