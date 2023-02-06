import {
  useAlertStyles
} from "./chunk-FZCW3KO4.mjs";

// src/alert-title.tsx
import { chakra, forwardRef } from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { jsx } from "react/jsx-runtime";
var AlertTitle = forwardRef(
  function AlertTitle2(props, ref) {
    const styles = useAlertStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        ...props,
        className: cx("chakra-alert__title", props.className),
        __css: styles.title
      }
    );
  }
);
AlertTitle.displayName = "AlertTitle";

export {
  AlertTitle
};
