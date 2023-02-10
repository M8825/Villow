// src/use-is-first-render.ts
import { useEffect, useRef } from "react";
function useIsFirstRender() {
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}

export {
  useIsFirstRender
};
