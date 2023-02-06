import {
  useCardStyles
} from "./chunk-4DHADF5X.mjs";

// src/card-body.tsx
import { cx } from "@chakra-ui/shared-utils";
import { forwardRef, chakra } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var CardBody = forwardRef(function CardBody2(props, ref) {
  const { className, ...rest } = props;
  const styles = useCardStyles();
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      className: cx("chakra-card__body", className),
      __css: styles.body,
      ...rest
    }
  );
});

export {
  CardBody
};
