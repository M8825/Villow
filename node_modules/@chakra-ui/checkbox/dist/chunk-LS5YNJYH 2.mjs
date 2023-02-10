import {
  useCheckboxGroupContext
} from "./chunk-6XFPBTDN.mjs";
import {
  CheckboxIcon
} from "./chunk-DFEUIRKX.mjs";
import {
  useCheckbox
} from "./chunk-3NTD6TBK.mjs";

// src/checkbox.tsx
import {
  chakra,
  forwardRef,
  keyframes,
  omitThemingProps,
  useMultiStyleConfig
} from "@chakra-ui/system";
import { callAll, cx } from "@chakra-ui/shared-utils";
import { cloneElement, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var controlStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
};
var rootStyles = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
};
var checkAnim = keyframes({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
});
var indeterminateOpacityAnim = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var indeterminateScaleAnim = keyframes({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
});
var Checkbox = forwardRef(function Checkbox2(props, ref) {
  const group = useCheckboxGroupContext();
  const mergedProps = { ...group, ...props };
  const styles = useMultiStyleConfig("Checkbox", mergedProps);
  const ownProps = omitThemingProps(props);
  const {
    spacing = "0.5rem",
    className,
    children,
    iconColor,
    iconSize,
    icon = /* @__PURE__ */ jsx(CheckboxIcon, {}),
    isChecked: isCheckedProp,
    isDisabled = group == null ? void 0 : group.isDisabled,
    onChange: onChangeProp,
    inputProps,
    ...rest
  } = ownProps;
  let isChecked = isCheckedProp;
  if ((group == null ? void 0 : group.value) && ownProps.value) {
    isChecked = group.value.includes(ownProps.value);
  }
  let onChange = onChangeProp;
  if ((group == null ? void 0 : group.onChange) && ownProps.value) {
    onChange = callAll(group.onChange, onChangeProp);
  }
  const {
    state,
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps
  } = useCheckbox({
    ...rest,
    isDisabled,
    isChecked,
    onChange
  });
  const iconStyles = useMemo(
    () => ({
      animation: state.isIndeterminate ? `${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear` : `${checkAnim} 200ms linear`,
      fontSize: iconSize,
      color: iconColor,
      ...styles.icon
    }),
    [iconColor, iconSize, , state.isIndeterminate, styles.icon]
  );
  const clonedIcon = cloneElement(icon, {
    __css: iconStyles,
    isIndeterminate: state.isIndeterminate,
    isChecked: state.isChecked
  });
  return /* @__PURE__ */ jsxs(
    chakra.label,
    {
      __css: { ...rootStyles, ...styles.container },
      className: cx("chakra-checkbox", className),
      ...getRootProps(),
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "chakra-checkbox__input",
            ...getInputProps(inputProps, ref)
          }
        ),
        /* @__PURE__ */ jsx(
          chakra.span,
          {
            __css: { ...controlStyles, ...styles.control },
            className: "chakra-checkbox__control",
            ...getCheckboxProps(),
            children: clonedIcon
          }
        ),
        children && /* @__PURE__ */ jsx(
          chakra.span,
          {
            className: "chakra-checkbox__label",
            ...getLabelProps(),
            __css: {
              marginStart: spacing,
              ...styles.label
            },
            children
          }
        )
      ]
    }
  );
});
Checkbox.displayName = "Checkbox";

export {
  Checkbox
};
