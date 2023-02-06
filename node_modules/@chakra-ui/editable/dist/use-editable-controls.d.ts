import * as _chakra_ui_react_types from '@chakra-ui/react-types';

/**
 * React hook use to create controls for the editable component
 */
declare function useEditableControls(): {
    isEditing: boolean;
    getEditButtonProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getCancelButtonProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getSubmitButtonProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
};

export { useEditableControls };
