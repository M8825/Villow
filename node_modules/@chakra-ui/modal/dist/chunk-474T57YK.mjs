import {
  __publicField
} from "./chunk-NHABU752.mjs";

// src/modal-manager.ts
import { useEffect, useState } from "react";
var ModalManager = class {
  constructor() {
    __publicField(this, "modals");
    this.modals = /* @__PURE__ */ new Map();
  }
  add(modal) {
    this.modals.set(modal, this.modals.size + 1);
    return this.modals.size;
  }
  remove(modal) {
    this.modals.delete(modal);
  }
  isTopModal(modal) {
    if (!modal)
      return false;
    return this.modals.get(modal) === this.modals.size;
  }
};
var manager = new ModalManager();
function useModalManager(ref, isOpen) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node)
      return;
    if (isOpen) {
      const index2 = manager.add(node);
      setIndex(index2);
    }
    return () => {
      manager.remove(node);
      setIndex(0);
    };
  }, [isOpen, ref]);
  return index;
}

export {
  manager,
  useModalManager
};
