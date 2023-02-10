import {
  badgeTheme
} from "./chunk-UTUD2BXK.mjs";

// src/components/tag.ts
import { tagAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle
} from "@chakra-ui/styled-system";
var { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);
var baseStyleContainer = defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyleLabel = defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton = defineStyle({
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
var baseStyle = definePartsStyle({
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
var variants = {
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
  variants,
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});

export {
  tagTheme
};
