import {
  withDefaultColorScheme
} from "./chunk-DFL6DXJX.mjs";
import {
  withDefaultSize
} from "./chunk-YKDMERD6.mjs";
import {
  withDefaultVariant
} from "./chunk-HA5PBA4B.mjs";
import {
  mergeThemeOverride
} from "./chunk-AQYX3YP4.mjs";

// src/theme-extensions/with-default-props.ts
function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function withDefaultProps({
  defaultProps: { colorScheme, variant, size },
  components
}) {
  const identity = (t) => t;
  const fns = [
    colorScheme ? withDefaultColorScheme({ colorScheme, components }) : identity,
    size ? withDefaultSize({ size, components }) : identity,
    variant ? withDefaultVariant({ variant, components }) : identity
  ];
  return (theme) => mergeThemeOverride(pipe(...fns)(theme));
}

export {
  withDefaultProps
};
