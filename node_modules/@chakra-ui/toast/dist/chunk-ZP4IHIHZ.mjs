import {
  ToastComponent
} from "./chunk-7WY3NOY6.mjs";
import {
  toastStore
} from "./chunk-RANSABEB.mjs";
import {
  getToastListStyle
} from "./chunk-5XWPESX6.mjs";

// src/toast.provider.tsx
import { AnimatePresence } from "framer-motion";
import { Portal } from "@chakra-ui/portal";
import { useSyncExternalStore } from "react";
import { createContext } from "@chakra-ui/react-context";
import { jsx } from "react/jsx-runtime";
var [ToastOptionProvider, useToastOptionContext] = createContext({
  name: `ToastOptionsContext`,
  strict: false
});
var ToastProvider = (props) => {
  const state = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );
  const {
    motionVariants,
    component: Component = ToastComponent,
    portalProps
  } = props;
  const stateKeys = Object.keys(state);
  const toastList = stateKeys.map((position) => {
    const toasts = state[position];
    return /* @__PURE__ */ jsx(
      "ul",
      {
        role: "region",
        "aria-live": "polite",
        id: `chakra-toast-manager-${position}`,
        style: getToastListStyle(position),
        children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: toasts.map((toast) => /* @__PURE__ */ jsx(
          Component,
          {
            motionVariants,
            ...toast
          },
          toast.id
        )) })
      },
      position
    );
  });
  return /* @__PURE__ */ jsx(Portal, { ...portalProps, children: toastList });
};

export {
  ToastOptionProvider,
  useToastOptionContext,
  ToastProvider
};
