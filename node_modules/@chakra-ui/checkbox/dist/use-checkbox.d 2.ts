import * as react from 'react';
import * as _chakra_ui_react_types from '@chakra-ui/react-types';
import { PropGetter } from '@chakra-ui/react-types';
import { a as UseCheckboxProps, c as CheckboxState } from './checkbox-types-85aeb1f7.js';
import '@chakra-ui/system';

/**
 * useCheckbox that provides all the state and focus management logic
 * for a checkbox. It is consumed by the `Checkbox` component
 *
 * @see Docs https://chakra-ui.com/checkbox#hooks
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
declare function useCheckbox(props?: UseCheckboxProps): {
    state: CheckboxState;
    getRootProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getCheckboxProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getInputProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getLabelProps: PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    htmlProps: Omit<{
        isDisabled?: boolean | undefined;
        isReadOnly?: boolean | undefined;
        isInvalid?: boolean | undefined;
        isRequired?: boolean | undefined;
        onBlur?: ((event: react.FocusEvent<HTMLInputElement, Element>) => void) | undefined;
        onFocus?: ((event: react.FocusEvent<HTMLInputElement, Element>) => void) | undefined;
        id?: string | undefined;
        "aria-describedby"?: string | undefined;
    }, "id" | "aria-describedby" | "onFocus" | "onBlur" | "isDisabled" | "isRequired" | "isInvalid" | "isReadOnly">;
};
declare type UseCheckboxReturn = ReturnType<typeof useCheckbox>;

export { UseCheckboxReturn, useCheckbox };
