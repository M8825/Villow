import {
  ModalContent
} from "./chunk-66WFFNY3.mjs";
import {
  Modal
} from "./chunk-UUGUEMMH.mjs";

// src/alert-dialog.tsx
import { forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
function AlertDialog(props) {
  const { leastDestructiveRef, ...rest } = props;
  return /* @__PURE__ */ jsx(Modal, { ...rest, initialFocusRef: leastDestructiveRef });
}
var AlertDialogContent = forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(ModalContent, { ref, role: "alertdialog", ...props })
);

export {
  AlertDialog,
  AlertDialogContent
};
