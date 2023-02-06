import {
  Skeleton
} from "./chunk-WTFA3K5H.mjs";

// src/skeleton-circle.tsx
import { jsx } from "react/jsx-runtime";
var SkeletonCircle = ({
  size = "2rem",
  ...rest
}) => /* @__PURE__ */ jsx(Skeleton, { borderRadius: "full", boxSize: size, ...rest });
SkeletonCircle.displayName = "SkeletonCircle";

export {
  SkeletonCircle
};
