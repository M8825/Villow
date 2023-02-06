// src/forward-ref.tsx
import { forwardRef as forwardReactRef } from "react";
function forwardRef(component) {
  return forwardReactRef(component);
}

export {
  forwardRef
};
