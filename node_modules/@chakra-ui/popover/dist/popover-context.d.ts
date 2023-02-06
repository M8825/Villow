import * as react from 'react';
import * as _chakra_ui_react_types from '@chakra-ui/react-types';
import { SystemStyleObject } from '@chakra-ui/system';

declare const PopoverProvider: react.Provider<{
    forceUpdate: () => void;
    isOpen: boolean;
    onAnimationComplete: () => void;
    onClose: () => void;
    getAnchorProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getArrowProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getArrowInnerProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getPopoverPositionerProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getPopoverProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getTriggerProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getHeaderProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getBodyProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
}>;
declare const usePopoverContext: () => {
    forceUpdate: () => void;
    isOpen: boolean;
    onAnimationComplete: () => void;
    onClose: () => void;
    getAnchorProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getArrowProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getArrowInnerProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getPopoverPositionerProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getPopoverProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getTriggerProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getHeaderProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
    getBodyProps: _chakra_ui_react_types.PropGetter<Record<string, unknown>, _chakra_ui_react_types.DOMAttributes<_chakra_ui_react_types.DOMElement>>;
};
declare const PopoverStylesProvider: react.Provider<Record<string, SystemStyleObject>>;
declare const usePopoverStyles: () => Record<string, SystemStyleObject>;

export { PopoverProvider, PopoverStylesProvider, usePopoverContext, usePopoverStyles };
