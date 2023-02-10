import {
  useTableStyles
} from "./chunk-B3MS3L3D.mjs";

// src/tr.tsx
import { chakra, forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var Tr = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.tr, { ...props, ref, __css: styles.tr });
});

export {
  Tr
};
