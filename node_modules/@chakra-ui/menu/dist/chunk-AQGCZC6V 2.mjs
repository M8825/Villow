import {
  useMenuStyles
} from "./chunk-Z6E7Q7NQ.mjs";

// src/menu-command.tsx
import { chakra, forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var MenuCommand = forwardRef(
  (props, ref) => {
    const styles = useMenuStyles();
    return /* @__PURE__ */ jsx(
      chakra.span,
      {
        ref,
        ...props,
        __css: styles.command,
        className: "chakra-menu__command"
      }
    );
  }
);
MenuCommand.displayName = "MenuCommand";

export {
  MenuCommand
};
