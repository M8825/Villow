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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/menu-icon.tsx
var menu_icon_exports = {};
__export(menu_icon_exports, {
  MenuIcon: () => MenuIcon
});
module.exports = __toCommonJS(menu_icon_exports);
var import_system = require("@chakra-ui/system");
var import_shared_utils = require("@chakra-ui/shared-utils");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var MenuIcon = (props) => {
  const { className, children, ...rest } = props;
  const child = import_react.Children.only(children);
  const clone = (0, import_react.isValidElement)(child) ? (0, import_react.cloneElement)(child, {
    focusable: "false",
    "aria-hidden": true,
    className: (0, import_shared_utils.cx)("chakra-menu__icon", child.props.className)
  }) : null;
  const _className = (0, import_shared_utils.cx)("chakra-menu__icon-wrapper", className);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_system.chakra.span,
    {
      className: _className,
      ...rest,
      __css: {
        flexShrink: 0
      },
      children: clone
    }
  );
};
MenuIcon.displayName = "MenuIcon";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MenuIcon
});
