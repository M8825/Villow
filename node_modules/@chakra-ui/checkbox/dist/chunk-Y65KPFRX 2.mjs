import {
  CheckboxGroupProvider
} from "./chunk-6XFPBTDN.mjs";
import {
  useCheckboxGroup
} from "./chunk-5F7ST2TT.mjs";

// src/checkbox-group.tsx
import { useMemo } from "react";
import { jsx } from "react/jsx-runtime";
function CheckboxGroup(props) {
  const { colorScheme, size, variant, children, isDisabled } = props;
  const { value, onChange } = useCheckboxGroup(props);
  const group = useMemo(
    () => ({
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled
    }),
    [size, onChange, colorScheme, value, variant, isDisabled]
  );
  return /* @__PURE__ */ jsx(CheckboxGroupProvider, { value: group, children });
}
CheckboxGroup.displayName = "CheckboxGroup";

export {
  CheckboxGroup
};
