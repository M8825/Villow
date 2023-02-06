import {
  useAvatarStyles
} from "./chunk-QVBG3QXJ.mjs";

// src/avatar-name.tsx
import { chakra } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
function initials(name) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
function AvatarName(props) {
  const { name, getInitials, ...rest } = props;
  const styles = useAvatarStyles();
  return /* @__PURE__ */ jsx(chakra.div, { role: "img", "aria-label": name, ...rest, __css: styles.label, children: name ? getInitials == null ? void 0 : getInitials(name) : null });
}
AvatarName.displayName = "AvatarName";

export {
  initials,
  AvatarName
};
