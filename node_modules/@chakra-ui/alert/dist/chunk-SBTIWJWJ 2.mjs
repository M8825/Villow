import {
  AlertProvider,
  AlertStylesProvider,
  getStatusColorScheme
} from "./chunk-FZCW3KO4.mjs";

// src/alert.tsx
import {
  chakra,
  forwardRef,
  omitThemingProps,
  useMultiStyleConfig
} from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { jsx } from "react/jsx-runtime";
var Alert = forwardRef(function Alert2(props, ref) {
  var _a;
  const { status = "info", addRole = true, ...rest } = omitThemingProps(props);
  const colorScheme = (_a = props.colorScheme) != null ? _a : getStatusColorScheme(status);
  const styles = useMultiStyleConfig("Alert", { ...props, colorScheme });
  const alertStyles = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles.container
  };
  return /* @__PURE__ */ jsx(AlertProvider, { value: { status }, children: /* @__PURE__ */ jsx(AlertStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    chakra.div,
    {
      role: addRole ? "alert" : void 0,
      ref,
      ...rest,
      className: cx("chakra-alert", props.className),
      __css: alertStyles
    }
  ) }) });
});
Alert.displayName = "Alert";

export {
  Alert
};
