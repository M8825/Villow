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

// src/components/badge.ts
var badge_exports = {};
__export(badge_exports, {
  badgeTheme: () => badgeTheme
});
module.exports = __toCommonJS(badge_exports);
var import_styled_system = require("@chakra-ui/styled-system");
var import_theme_tools = require("@chakra-ui/theme-tools");
var baseStyle = (0, import_styled_system.defineStyle)({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
});
var $bg = (0, import_styled_system.cssVar)("badge-bg");
var $fg = (0, import_styled_system.cssVar)("badge-color");
var variantSolid = (0, import_styled_system.defineStyle)((props) => {
  const { colorScheme: c, theme } = props;
  const dark = (0, import_theme_tools.transparentize)(`${c}.500`, 0.6)(theme);
  return {
    [$bg.variable]: `colors.${c}.500`,
    [$fg.variable]: `colors.white`,
    _dark: {
      [$bg.variable]: dark,
      [$fg.variable]: `colors.whiteAlpha.800`
    },
    bg: $bg.reference,
    color: $fg.reference
  };
});
var variantSubtle = (0, import_styled_system.defineStyle)((props) => {
  const { colorScheme: c, theme } = props;
  const darkBg = (0, import_theme_tools.transparentize)(`${c}.200`, 0.16)(theme);
  return {
    [$bg.variable]: `colors.${c}.100`,
    [$fg.variable]: `colors.${c}.800`,
    _dark: {
      [$bg.variable]: darkBg,
      [$fg.variable]: `colors.${c}.200`
    },
    bg: $bg.reference,
    color: $fg.reference
  };
});
var variantOutline = (0, import_styled_system.defineStyle)((props) => {
  const { colorScheme: c, theme } = props;
  const darkColor = (0, import_theme_tools.transparentize)(`${c}.200`, 0.8)(theme);
  return {
    [$fg.variable]: `colors.${c}.500`,
    _dark: {
      [$fg.variable]: darkColor
    },
    color: $fg.reference,
    boxShadow: `inset 0 0 0px 1px ${$fg.reference}`
  };
});
var variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline
};
var badgeTheme = (0, import_styled_system.defineStyleConfig)({
  baseStyle,
  variants,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  badgeTheme
});
