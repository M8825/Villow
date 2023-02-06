import {
  useTabsStyles
} from "./chunk-ZWUY3VWT.mjs";
import {
  useTab
} from "./chunk-ROBISDLO.mjs";

// src/tab.tsx
import { cx } from "@chakra-ui/shared-utils";
import {
  chakra,
  forwardRef
} from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var Tab = forwardRef(function Tab2(props, ref) {
  const styles = useTabsStyles();
  const tabProps = useTab({ ...props, ref });
  const tabStyles = {
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles.tab
  };
  return /* @__PURE__ */ jsx(
    chakra.button,
    {
      ...tabProps,
      className: cx("chakra-tabs__tab", props.className),
      __css: tabStyles
    }
  );
});
Tab.displayName = "Tab";

export {
  Tab
};
