import {
  useTableStyles
} from "./chunk-B3MS3L3D.mjs";

// src/tbody.tsx
import { chakra, forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var Tbody = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.tbody, { ...props, ref, __css: styles.tbody });
});

export {
  Tbody
};
