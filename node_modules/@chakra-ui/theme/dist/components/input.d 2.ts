import * as _chakra_ui_styled_system from '@chakra-ui/styled-system';

declare const inputTheme: {
    baseStyle?: {
        field: {
            width: string;
            minWidth: number;
            outline: number;
            position: string;
            appearance: string;
            transitionProperty: string;
            transitionDuration: string;
            _disabled: {
                opacity: number;
                cursor: string;
            };
        };
    } | undefined;
    sizes?: {
        lg: {
            field: {
                fontSize: string;
                px: string;
                h: string;
                borderRadius: string;
            };
            addon: {
                fontSize: string;
                px: string;
                h: string;
                borderRadius: string;
            };
        };
        md: {
            field: {
                fontSize: string;
                px: string;
                h: string;
                borderRadius: string;
            };
            addon: {
                fontSize: string;
                px: string;
                h: string;
                borderRadius: string;
            };
        };
        sm: {
            field: {
                fontSize: string;
                px: string;
                h: string;
                borderRadius: string;
            };
            addon: {
                fontSize: string;
                px: string;
                h: string;
                borderRadius: string;
            };
        };
        xs: {
            field: {
                fontSize: string;
                px: string;
                h: string;
                borderRadius: string;
            };
            addon: {
                fontSize: string;
                px: string;
                h: string;
                borderRadius: string;
            };
        };
    } | undefined;
    variants?: {
        outline: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            field: {
                border: string;
                borderColor: string;
                bg: string;
                _hover: {
                    borderColor: string;
                };
                _readOnly: {
                    boxShadow: string;
                    userSelect: string;
                };
                _invalid: {
                    borderColor: any;
                    boxShadow: string;
                };
                _focusVisible: {
                    zIndex: number;
                    borderColor: any;
                    boxShadow: string;
                };
            };
            addon: {
                border: string;
                borderColor: string;
                bg: string;
            };
        };
        filled: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            field: {
                border: string;
                borderColor: string;
                bg: string;
                _hover: {
                    bg: string;
                };
                _readOnly: {
                    boxShadow: string;
                    userSelect: string;
                };
                _invalid: {
                    borderColor: any;
                };
                _focusVisible: {
                    bg: string;
                    borderColor: any;
                };
            };
            addon: {
                border: string;
                borderColor: string;
                bg: string;
            };
        };
        flushed: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            field: {
                borderBottom: string;
                borderColor: string;
                borderRadius: string;
                px: string;
                bg: string;
                _readOnly: {
                    boxShadow: string;
                    userSelect: string;
                };
                _invalid: {
                    borderColor: any;
                    boxShadow: string;
                };
                _focusVisible: {
                    borderColor: any;
                    boxShadow: string;
                };
            };
            addon: {
                borderBottom: string;
                borderColor: string;
                borderRadius: string;
                px: string;
                bg: string;
            };
        };
        unstyled: {
            field: {
                bg: string;
                px: string;
                height: string;
            };
            addon: {
                bg: string;
                px: string;
                height: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: "md" | "xs" | "sm" | "lg" | undefined;
        variant?: "outline" | "filled" | "unstyled" | "flushed" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("element" | "addon" | "field")[];
};

export { inputTheme };
