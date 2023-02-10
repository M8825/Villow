import {
  usePopoverContext
} from "./chunk-FOAN3JQV.mjs";

// src/popover-trigger.tsx
import { Children, cloneElement } from "react";
function PopoverTrigger(props) {
  const child = Children.only(props.children);
  const { getTriggerProps } = usePopoverContext();
  return cloneElement(child, getTriggerProps(child.props, child.ref));
}
PopoverTrigger.displayName = "PopoverTrigger";

export {
  PopoverTrigger
};
