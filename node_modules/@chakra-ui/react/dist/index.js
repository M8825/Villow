"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ChakraBaseProvider: () => ChakraBaseProvider,
  ChakraProvider: () => ChakraProvider
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("@chakra-ui/accordion"), module.exports);
__reExport(src_exports, require("@chakra-ui/alert"), module.exports);
__reExport(src_exports, require("@chakra-ui/avatar"), module.exports);
__reExport(src_exports, require("@chakra-ui/breadcrumb"), module.exports);
__reExport(src_exports, require("@chakra-ui/button"), module.exports);
__reExport(src_exports, require("@chakra-ui/card"), module.exports);
__reExport(src_exports, require("@chakra-ui/checkbox"), module.exports);
__reExport(src_exports, require("@chakra-ui/close-button"), module.exports);
__reExport(src_exports, require("@chakra-ui/control-box"), module.exports);
__reExport(src_exports, require("@chakra-ui/counter"), module.exports);
__reExport(src_exports, require("@chakra-ui/css-reset"), module.exports);
__reExport(src_exports, require("@chakra-ui/editable"), module.exports);
__reExport(src_exports, require("@chakra-ui/form-control"), module.exports);
__reExport(src_exports, require("@chakra-ui/hooks"), module.exports);
__reExport(src_exports, require("@chakra-ui/icon"), module.exports);
__reExport(src_exports, require("@chakra-ui/image"), module.exports);
__reExport(src_exports, require("@chakra-ui/input"), module.exports);
__reExport(src_exports, require("@chakra-ui/layout"), module.exports);
__reExport(src_exports, require("@chakra-ui/media-query"), module.exports);
__reExport(src_exports, require("@chakra-ui/menu"), module.exports);
__reExport(src_exports, require("@chakra-ui/modal"), module.exports);
__reExport(src_exports, require("@chakra-ui/number-input"), module.exports);
__reExport(src_exports, require("@chakra-ui/pin-input"), module.exports);
__reExport(src_exports, require("@chakra-ui/popover"), module.exports);
__reExport(src_exports, require("@chakra-ui/popper"), module.exports);
__reExport(src_exports, require("@chakra-ui/portal"), module.exports);
__reExport(src_exports, require("@chakra-ui/progress"), module.exports);
__reExport(src_exports, require("@chakra-ui/radio"), module.exports);
__reExport(src_exports, require("@chakra-ui/react-env"), module.exports);
__reExport(src_exports, require("@chakra-ui/select"), module.exports);
__reExport(src_exports, require("@chakra-ui/skeleton"), module.exports);
__reExport(src_exports, require("@chakra-ui/slider"), module.exports);
__reExport(src_exports, require("@chakra-ui/spinner"), module.exports);
__reExport(src_exports, require("@chakra-ui/stat"), module.exports);
__reExport(src_exports, require("@chakra-ui/switch"), module.exports);
__reExport(src_exports, require("@chakra-ui/system"), module.exports);
__reExport(src_exports, require("@chakra-ui/table"), module.exports);
__reExport(src_exports, require("@chakra-ui/tabs"), module.exports);
__reExport(src_exports, require("@chakra-ui/tag"), module.exports);
__reExport(src_exports, require("@chakra-ui/textarea"), module.exports);
__reExport(src_exports, require("@chakra-ui/theme"), module.exports);
__reExport(src_exports, require("@chakra-ui/toast"), module.exports);
__reExport(src_exports, require("@chakra-ui/tooltip"), module.exports);
__reExport(src_exports, require("@chakra-ui/transition"), module.exports);
__reExport(src_exports, require("@chakra-ui/visually-hidden"), module.exports);
__reExport(src_exports, require("@chakra-ui/theme-utils"), module.exports);

// src/chakra-provider.tsx
var import_provider = require("@chakra-ui/provider");
var import_theme = require("@chakra-ui/theme");
var import_toast = require("@chakra-ui/toast");
var import_jsx_runtime = require("react/jsx-runtime");
var createChakraProvider = (providerTheme) => {
  return function ChakraProvider2({
    children,
    theme = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_provider.ChakraProvider, { theme, ...restProps, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.ToastOptionProvider, { value: toastOptions == null ? void 0 : toastOptions.defaultOptions, children }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.ToastProvider, { ...toastOptions })
    ] });
  };
};
var ChakraProvider = createChakraProvider(import_theme.theme);
var ChakraBaseProvider = createChakraProvider(import_theme.baseTheme);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChakraBaseProvider,
  ChakraProvider
});
