import {
  visuallyHiddenStyle
} from "./chunk-RSUMUOHR.mjs";

// src/visually-hidden.tsx
import { chakra } from "@chakra-ui/system";
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";
var VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHiddenInput.displayName = "VisuallyHiddenInput";
var visually_hidden_default = VisuallyHidden;

export {
  VisuallyHidden,
  VisuallyHiddenInput,
  visually_hidden_default
};
