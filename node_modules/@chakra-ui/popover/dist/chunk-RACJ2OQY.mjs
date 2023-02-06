import {
  usePopoverContext,
  usePopoverStyles
} from "./chunk-FOAN3JQV.mjs";

// src/popover-arrow.tsx
import { chakra } from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { jsx } from "react/jsx-runtime";
function PopoverArrow(props) {
  var _a;
  const { bg, bgColor, backgroundColor, shadow, boxShadow } = props;
  const { getArrowProps, getArrowInnerProps } = usePopoverContext();
  const styles = usePopoverStyles();
  const arrowBg = (_a = bg != null ? bg : bgColor) != null ? _a : backgroundColor;
  const arrowShadow = shadow != null ? shadow : boxShadow;
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ...getArrowProps(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ jsx(
        chakra.div,
        {
          className: cx("chakra-popover__arrow", props.className),
          ...getArrowInnerProps(props),
          __css: {
            "--popper-arrow-bg": arrowBg ? `colors.${arrowBg}, ${arrowBg}` : void 0,
            "--popper-arrow-shadow": arrowShadow ? `shadows.${arrowShadow}, ${arrowShadow}` : void 0,
            ...styles.arrow
          }
        }
      )
    }
  );
}
PopoverArrow.displayName = "PopoverArrow";

export {
  PopoverArrow
};
