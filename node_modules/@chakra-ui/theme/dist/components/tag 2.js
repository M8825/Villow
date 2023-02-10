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

// src/components/tag.ts
var tag_exports = {};
__export(tag_exports, {
  tagTheme: () => tagTheme
});
module.exports = __toCommonJS(tag_exports);
var import_anatomy = require("@chakra-ui/anatomy");
var import_styled_system2 = require("@chakra-ui/styled-system");

// src/components/badge.ts
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

// src/components/tag.ts
var { defineMultiStyleConfig, definePartsStyle } = (0, import_styled_system2.createMultiStyleConfigHelpers)(import_anatomy.tagAnatomy.keys);
var baseStyleContainer = (0, import_styled_system2.defineStyle)({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyleLabel = (0, import_styled_system2.defineStyle)({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton = (0, import_styled_system2.defineStyle)({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle2 = definePartsStyle({
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
});
var sizes = {
  sm: definePartsStyle({
    container: {
      minH: "5",
      minW: "5",
      fontSize: "xs",
      px: "2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle({
    container: {
      minH: "6",
      minW: "6",
      fontSize: "sm",
      px: "2"
    }
  }),
  lg: definePartsStyle({
    container: {
      minH: "8",
      minW: "8",
      fontSize: "md",
      px: "3"
    }
  })
};
var variants2 = {
  subtle: definePartsStyle((props) => {
    var _a;
    return {
      container: (_a = badgeTheme.variants) == null ? void 0 : _a.subtle(props)
    };
  }),
  solid: definePartsStyle((props) => {
    var _a;
    return {
      container: (_a = badgeTheme.variants) == null ? void 0 : _a.solid(props)
    };
  }),
  outline: definePartsStyle((props) => {
    var _a;
    return {
      container: (_a = badgeTheme.variants) == null ? void 0 : _a.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig({
  variants: variants2,
  baseStyle: baseStyle2,
  sizes,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tagTheme
});
