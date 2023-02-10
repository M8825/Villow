// src/switch.tsx
import { useCheckbox } from "@chakra-ui/checkbox";
import {
  chakra,
  forwardRef,
  omitThemingProps,
  useMultiStyleConfig
} from "@chakra-ui/system";
import { cx, dataAttr } from "@chakra-ui/shared-utils";
import { useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Switch = forwardRef(function Switch2(props, ref) {
  const styles = useMultiStyleConfig("Switch", props);
  const { spacing = "0.5rem", children, ...ownProps } = omitThemingProps(props);
  const {
    state,
    getInputProps,
    getCheckboxProps,
    getRootProps,
    getLabelProps
  } = useCheckbox(ownProps);
  const containerStyles = useMemo(
    () => ({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      lineHeight: 0,
      ...styles.container
    }),
    [styles.container]
  );
  const trackStyles = useMemo(
    () => ({
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      boxSizing: "content-box",
      cursor: "pointer",
      ...styles.track
    }),
    [styles.track]
  );
  const labelStyles = useMemo(
    () => ({
      userSelect: "none",
      marginStart: spacing,
      ...styles.label
    }),
    [spacing, styles.label]
  );
  return /* @__PURE__ */ jsxs(
    chakra.label,
    {
      ...getRootProps(),
      className: cx("chakra-switch", props.className),
      __css: containerStyles,
      children: [
        /* @__PURE__ */ jsx("input", { className: "chakra-switch__input", ...getInputProps({}, ref) }),
        /* @__PURE__ */ jsx(
          chakra.span,
          {
            ...getCheckboxProps(),
            className: "chakra-switch__track",
            __css: trackStyles,
            children: /* @__PURE__ */ jsx(
              chakra.span,
              {
                __css: styles.thumb,
                className: "chakra-switch__thumb",
                "data-checked": dataAttr(state.isChecked),
                "data-hover": dataAttr(state.isHovered)
              }
            )
          }
        ),
        children && /* @__PURE__ */ jsx(
          chakra.span,
          {
            className: "chakra-switch__label",
            ...getLabelProps(),
            __css: labelStyles,
            children
          }
        )
      ]
    }
  );
});
Switch.displayName = "Switch";

export {
  Switch
};
