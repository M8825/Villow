// src/components/input.ts
import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle
} from "@chakra-ui/styled-system";
import { getColor, mode } from "@chakra-ui/theme-tools";
var { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);
var baseStyle = definePartsStyle({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: defineStyle({
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  })
};
var sizes = {
  lg: definePartsStyle({
    field: size.lg,
    addon: size.lg
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md
  }),
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm
  }),
  xs: definePartsStyle({
    field: size.xs,
    addon: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
var variantOutline = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled = definePartsStyle({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled
};
var inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

export {
  inputTheme
};
