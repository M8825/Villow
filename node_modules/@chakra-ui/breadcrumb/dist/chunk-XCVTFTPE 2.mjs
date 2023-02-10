import {
  useBreadcrumbStyles
} from "./chunk-OLDTR4XF.mjs";

// src/breadcrumb-separator.tsx
import {
  chakra,
  forwardRef
} from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var BreadcrumbSeparator = forwardRef(
  function BreadcrumbSeparator2(props, ref) {
    const { spacing, ...rest } = props;
    const styles = useBreadcrumbStyles();
    const separatorStyles = {
      mx: spacing,
      ...styles.separator
    };
    return /* @__PURE__ */ jsx(
      chakra.span,
      {
        ref,
        role: "presentation",
        ...rest,
        __css: separatorStyles
      }
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export {
  BreadcrumbSeparator
};
