import {
  MenuCommand
} from "./chunk-AQGCZC6V.mjs";
import {
  StyledMenuItem
} from "./chunk-65QGG7UJ.mjs";
import {
  useMenuItem
} from "./chunk-CRQSZOKU.mjs";
import {
  MenuIcon
} from "./chunk-I3AUOXDN.mjs";

// src/menu-item.tsx
import { forwardRef } from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { jsx, jsxs } from "react/jsx-runtime";
var MenuItem = forwardRef((props, ref) => {
  const {
    icon,
    iconSpacing = "0.75rem",
    command,
    commandSpacing = "0.75rem",
    children,
    ...rest
  } = props;
  const menuitemProps = useMenuItem(rest, ref);
  const shouldWrap = icon || command;
  const _children = shouldWrap ? /* @__PURE__ */ jsx("span", { style: { pointerEvents: "none", flex: 1 }, children }) : children;
  return /* @__PURE__ */ jsxs(
    StyledMenuItem,
    {
      ...menuitemProps,
      className: cx("chakra-menu__menuitem", menuitemProps.className),
      children: [
        icon && /* @__PURE__ */ jsx(MenuIcon, { fontSize: "0.8em", marginEnd: iconSpacing, children: icon }),
        _children,
        command && /* @__PURE__ */ jsx(MenuCommand, { marginStart: commandSpacing, children: command })
      ]
    }
  );
});
MenuItem.displayName = "MenuItem";

export {
  MenuItem
};
