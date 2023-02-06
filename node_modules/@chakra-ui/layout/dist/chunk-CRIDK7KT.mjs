// src/wrap.tsx
import {
  chakra,
  forwardRef,
  tokenToCSSVar
} from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { mapResponsive } from "@chakra-ui/breakpoint-utils";
import { Children, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
function px(value) {
  return typeof value === "number" ? `${value}px` : value;
}
var Wrap = forwardRef(function Wrap2(props, ref) {
  const {
    spacing = "0.5rem",
    spacingX,
    spacingY,
    children,
    justify,
    direction,
    align,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const styles = useMemo(() => {
    const { spacingX: x = spacing, spacingY: y = spacing } = {
      spacingX,
      spacingY
    };
    return {
      "--chakra-wrap-x-spacing": (theme) => mapResponsive(x, (value) => px(tokenToCSSVar("space", value)(theme))),
      "--chakra-wrap-y-spacing": (theme) => mapResponsive(y, (value) => px(tokenToCSSVar("space", value)(theme))),
      "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)",
      "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: justify,
      alignItems: align,
      flexDirection: direction,
      listStyleType: "none",
      padding: "0",
      margin: "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)",
      "& > *:not(style)": {
        margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)"
      }
    };
  }, [spacing, spacingX, spacingY, justify, align, direction]);
  const childrenToRender = useMemo(
    () => shouldWrapChildren ? Children.map(children, (child, index) => /* @__PURE__ */ jsx(WrapItem, { children: child }, index)) : children,
    [children, shouldWrapChildren]
  );
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      className: cx("chakra-wrap", className),
      overflow: "hidden",
      ...rest,
      children: /* @__PURE__ */ jsx(chakra.ul, { className: "chakra-wrap__list", __css: styles, children: childrenToRender })
    }
  );
});
Wrap.displayName = "Wrap";
var WrapItem = forwardRef(function WrapItem2(props, ref) {
  const { className, ...rest } = props;
  return /* @__PURE__ */ jsx(
    chakra.li,
    {
      ref,
      __css: { display: "flex", alignItems: "flex-start" },
      className: cx("chakra-wrap__listitem", className),
      ...rest
    }
  );
});
WrapItem.displayName = "WrapItem";

export {
  Wrap,
  WrapItem
};
