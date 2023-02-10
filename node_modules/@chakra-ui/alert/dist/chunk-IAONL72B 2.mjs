import {
  useAlertStyles
} from "./chunk-FZCW3KO4.mjs";

// src/alert-description.tsx
import {
  chakra,
  forwardRef
} from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { jsx } from "react/jsx-runtime";
var AlertDescription = forwardRef(
  function AlertDescription2(props, ref) {
    const styles = useAlertStyles();
    const descriptionStyles = {
      display: "inline",
      ...styles.description
    };
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        ...props,
        className: cx("chakra-alert__desc", props.className),
        __css: descriptionStyles
      }
    );
  }
);
AlertDescription.displayName = "AlertDescription";

export {
  AlertDescription
};
