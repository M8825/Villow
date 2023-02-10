import {
  badgeTheme
} from "./chunk-UTUD2BXK.mjs";

// src/components/code.ts
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
var { variants, defaultProps } = badgeTheme;
var baseStyle = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
});
var codeTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps
});

export {
  codeTheme
};
