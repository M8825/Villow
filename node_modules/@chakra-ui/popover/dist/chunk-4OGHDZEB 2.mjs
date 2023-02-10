import {
  usePopover
} from "./chunk-BOXNG7YC.mjs";
import {
  PopoverProvider,
  PopoverStylesProvider
} from "./chunk-FOAN3JQV.mjs";

// src/popover.tsx
import {
  omitThemingProps,
  useMultiStyleConfig,
  useTheme
} from "@chakra-ui/system";
import { runIfFn } from "@chakra-ui/shared-utils";
import { jsx } from "react/jsx-runtime";
function Popover(props) {
  const styles = useMultiStyleConfig("Popover", props);
  const { children, ...rest } = omitThemingProps(props);
  const theme = useTheme();
  const context = usePopover({ ...rest, direction: theme.direction });
  return /* @__PURE__ */ jsx(PopoverProvider, { value: context, children: /* @__PURE__ */ jsx(PopoverStylesProvider, { value: styles, children: runIfFn(children, {
    isOpen: context.isOpen,
    onClose: context.onClose,
    forceUpdate: context.forceUpdate
  }) }) });
}
Popover.displayName = "Popover";

export {
  Popover
};
