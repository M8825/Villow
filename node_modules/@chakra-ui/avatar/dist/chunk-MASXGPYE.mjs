import {
  AvatarImage
} from "./chunk-RBT32FI6.mjs";
import {
  initials
} from "./chunk-XLTSJSZV.mjs";
import {
  AvatarStylesProvider
} from "./chunk-QVBG3QXJ.mjs";
import {
  GenericAvatarIcon
} from "./chunk-ZXZNYCCD.mjs";

// src/avatar.tsx
import {
  chakra,
  forwardRef,
  omitThemingProps,
  useMultiStyleConfig
} from "@chakra-ui/system";
import { callAllHandlers, cx, dataAttr } from "@chakra-ui/shared-utils";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var baseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
};
var Avatar = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Avatar", props);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    src,
    srcSet,
    name,
    showBorder,
    borderRadius = "full",
    onError,
    onLoad: onLoadProp,
    getInitials = initials,
    icon = /* @__PURE__ */ jsx(GenericAvatarIcon, {}),
    iconLabel = " avatar",
    loading,
    children,
    borderColor,
    ignoreFallback,
    ...rest
  } = omitThemingProps(props);
  const avatarStyles = {
    borderRadius,
    borderWidth: showBorder ? "2px" : void 0,
    ...baseStyle,
    ...styles.container
  };
  if (borderColor) {
    avatarStyles.borderColor = borderColor;
  }
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      ref,
      ...rest,
      className: cx("chakra-avatar", props.className),
      "data-loaded": dataAttr(isLoaded),
      __css: avatarStyles,
      children: /* @__PURE__ */ jsxs(AvatarStylesProvider, { value: styles, children: [
        /* @__PURE__ */ jsx(
          AvatarImage,
          {
            src,
            srcSet,
            loading,
            onLoad: callAllHandlers(onLoadProp, () => {
              setIsLoaded(true);
            }),
            onError,
            getInitials,
            name,
            borderRadius,
            icon,
            iconLabel,
            ignoreFallback
          }
        ),
        children
      ] })
    }
  );
});
Avatar.displayName = "Avatar";

export {
  baseStyle,
  Avatar
};
