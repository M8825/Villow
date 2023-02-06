import {
  useTableStyles
} from "./chunk-B3MS3L3D.mjs";

// src/thead.tsx
import { chakra, forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var Thead = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.thead, { ...props, ref, __css: styles.thead });
});

export {
  Thead
};
