import {
  useEditableContext
} from "./chunk-WADSSRGF.mjs";

// src/use-editable-controls.tsx
function useEditableControls() {
  const {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  } = useEditableContext();
  return {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  };
}

export {
  useEditableControls
};
