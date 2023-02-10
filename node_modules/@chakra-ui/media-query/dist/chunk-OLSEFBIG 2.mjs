import {
  Visibility
} from "./chunk-DZU5YH7Z.mjs";
import {
  useQuery
} from "./chunk-R3K6W4OF.mjs";

// src/show.tsx
import { jsx } from "react/jsx-runtime";
function Show(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return /* @__PURE__ */ jsx(Visibility, { breakpoint: query, ssr, children });
}
Show.displayName = "Show";

export {
  Show
};
