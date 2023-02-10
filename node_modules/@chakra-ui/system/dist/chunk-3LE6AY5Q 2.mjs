import {
  styled
} from "./chunk-E32MZNBA.mjs";

// src/factory.ts
function factory() {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    apply(target, thisArg, argArray) {
      return styled(...argArray);
    },
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
var chakra = factory();

export {
  chakra
};
