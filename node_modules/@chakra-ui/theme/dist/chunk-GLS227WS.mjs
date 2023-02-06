// src/components/breadcrumb.ts
import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle
} from "@chakra-ui/styled-system";
var { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);
var baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyle = definePartsStyle({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig({
  baseStyle
});

export {
  breadcrumbTheme
};
