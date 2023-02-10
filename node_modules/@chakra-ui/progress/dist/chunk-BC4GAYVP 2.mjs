import {
  useProgressStyles
} from "./chunk-W6SSP5F2.mjs";

// src/progress-label.tsx
import { chakra } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var ProgressLabel = (props) => {
  const styles = useProgressStyles();
  const labelStyles = {
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...styles.label
  };
  return /* @__PURE__ */ jsx(chakra.div, { ...props, __css: labelStyles });
};
ProgressLabel.displayName = "ProgressLabel";

export {
  ProgressLabel
};
