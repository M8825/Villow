import {
  LiveRegion
} from "./chunk-DQ52EMTS.mjs";

// src/use-live-region.ts
import { useEffect, useState } from "react";
function useLiveRegion(options) {
  const [liveRegion] = useState(() => new LiveRegion(options));
  useEffect(
    () => () => {
      liveRegion.destroy();
    },
    [liveRegion]
  );
  return liveRegion;
}
var use_live_region_default = useLiveRegion;

export {
  useLiveRegion,
  use_live_region_default
};
