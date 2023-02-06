import {
  useTabsStyles
} from "./chunk-ZWUY3VWT.mjs";
import {
  useTabPanel
} from "./chunk-ROBISDLO.mjs";

// src/tab-panel.tsx
import { cx } from "@chakra-ui/shared-utils";
import { chakra, forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var TabPanel = forwardRef(function TabPanel2(props, ref) {
  const panelProps = useTabPanel({ ...props, ref });
  const styles = useTabsStyles();
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      outline: "0",
      ...panelProps,
      className: cx("chakra-tabs__tab-panel", props.className),
      __css: styles.tabpanel
    }
  );
});
TabPanel.displayName = "TabPanel";

export {
  TabPanel
};
