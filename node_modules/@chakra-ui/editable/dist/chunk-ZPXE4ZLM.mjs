import {
  useEditableContext
} from "./chunk-WADSSRGF.mjs";

// src/use-editable-state.tsx
function useEditableState() {
  const { isEditing, onSubmit, onCancel, onEdit, isDisabled } = useEditableContext();
  return {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled
  };
}

export {
  useEditableState
};
