import {
  getStatusIcon,
  useAlertContext,
  useAlertStyles
} from "./chunk-FZCW3KO4.mjs";

// src/alert-icon.tsx
import { chakra } from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { jsx } from "react/jsx-runtime";
function AlertIcon(props) {
  const { status } = useAlertContext();
  const BaseIcon = getStatusIcon(status);
  const styles = useAlertStyles();
  const css = status === "loading" ? styles.spinner : styles.icon;
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      display: "inherit",
      ...props,
      className: cx("chakra-alert__icon", props.className),
      __css: css,
      children: props.children || /* @__PURE__ */ jsx(BaseIcon, { h: "100%", w: "100%" })
    }
  );
}
AlertIcon.displayName = "AlertIcon";

export {
  AlertIcon
};
