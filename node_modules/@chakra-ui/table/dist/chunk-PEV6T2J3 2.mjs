import {
  useTableStyles
} from "./chunk-B3MS3L3D.mjs";

// src/tfooter.tsx
import { chakra, forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var Tfoot = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.tfoot, { ...props, ref, __css: styles.tfoot });
});

export {
  Tfoot
};
