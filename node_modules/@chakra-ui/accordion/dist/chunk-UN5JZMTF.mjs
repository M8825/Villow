import {
  useAccordionItemContext
} from "./chunk-JST25EWU.mjs";

// src/use-accordion-item-state.ts
function useAccordionItemState() {
  const { isOpen, isDisabled, onClose, onOpen } = useAccordionItemContext();
  return { isOpen, onClose, isDisabled, onOpen };
}

export {
  useAccordionItemState
};
