import {
  useTabsStyles
} from "./chunk-ZWUY3VWT.mjs";
import {
  useTabList
} from "./chunk-ROBISDLO.mjs";

// src/tab-list.tsx
import { cx } from "@chakra-ui/shared-utils";
import {
  chakra,
  forwardRef
} from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var TabList = forwardRef(function TabList2(props, ref) {
  const tablistProps = useTabList({ ...props, ref });
  const styles = useTabsStyles();
  const tablistStyles = {
    display: "flex",
    ...styles.tablist
  };
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ...tablistProps,
      className: cx("chakra-tabs__tablist", props.className),
      __css: tablistStyles
    }
  );
});
TabList.displayName = "TabList";

export {
  TabList
};
