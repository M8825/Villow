import {
  useMediaQuery
} from "./chunk-MG6WC47T.mjs";

// src/visibility.tsx
function Visibility(props) {
  const { breakpoint, hide, children, ssr } = props;
  const [show] = useMediaQuery(breakpoint, { ssr });
  const isVisible = hide ? !show : show;
  const rendered = isVisible ? children : null;
  return rendered;
}

export {
  Visibility
};
