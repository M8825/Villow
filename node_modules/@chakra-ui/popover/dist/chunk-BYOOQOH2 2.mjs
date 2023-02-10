import {
  usePopoverContext,
  usePopoverStyles
} from "./chunk-FOAN3JQV.mjs";

// src/popover-header.tsx
import { chakra, forwardRef } from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { jsx } from "react/jsx-runtime";
var PopoverHeader = forwardRef(
  function PopoverHeader2(props, ref) {
    const { getHeaderProps } = usePopoverContext();
    const styles = usePopoverStyles();
    return /* @__PURE__ */ jsx(
      chakra.header,
      {
        ...getHeaderProps(props, ref),
        className: cx("chakra-popover__header", props.className),
        __css: styles.header
      }
    );
  }
);
PopoverHeader.displayName = "PopoverHeader";

export {
  PopoverHeader
};
