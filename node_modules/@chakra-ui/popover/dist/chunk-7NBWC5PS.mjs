import {
  usePopoverContext
} from "./chunk-FOAN3JQV.mjs";

// src/popover-anchor.tsx
import { Children, cloneElement } from "react";
function PopoverAnchor(props) {
  const child = Children.only(props.children);
  const { getAnchorProps } = usePopoverContext();
  return cloneElement(child, getAnchorProps(child.props, child.ref));
}
PopoverAnchor.displayName = "PopoverAnchor";

export {
  PopoverAnchor
};
