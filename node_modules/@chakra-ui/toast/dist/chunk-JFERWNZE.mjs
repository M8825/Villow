import {
  useToastOptionContext
} from "./chunk-ZP4IHIHZ.mjs";
import {
  createToastFn
} from "./chunk-RANSABEB.mjs";

// src/use-toast.tsx
import { useChakra } from "@chakra-ui/system";
import { useMemo } from "react";
function useToast(options) {
  const { theme } = useChakra();
  const defaultOptions = useToastOptionContext();
  return useMemo(
    () => createToastFn(theme.direction, {
      ...defaultOptions,
      ...options
    }),
    [options, theme.direction, defaultOptions]
  );
}
var use_toast_default = useToast;

export {
  useToast,
  use_toast_default
};
