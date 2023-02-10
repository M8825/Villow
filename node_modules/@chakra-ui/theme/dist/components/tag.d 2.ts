import * as _chakra_ui_styled_system from '@chakra-ui/styled-system';

declare const tagTheme: {
    baseStyle?: {
        container: {
            fontWeight: string;
            lineHeight: number;
            outline: number;
            borderRadius: string;
            _focusVisible: {
                boxShadow: string;
            };
        };
        label: {
            lineHeight: number;
            overflow: string;
        };
        closeButton: {
            fontSize: string;
            w: string;
            h: string;
            transitionProperty: string;
            transitionDuration: string;
            borderRadius: string;
            marginStart: string;
            marginEnd: string;
            opacity: number;
            _disabled: {
                opacity: number;
            };
            _focusVisible: {
                boxShadow: string;
                bg: string;
            };
            _hover: {
                opacity: number;
            };
            _active: {
                opacity: number;
            };
        };
    } | undefined;
    sizes?: {
        sm: {
            container: {
                minH: string;
                minW: string;
                fontSize: string;
                px: string;
            };
            closeButton: {
                marginEnd: string;
                marginStart: string;
            };
        };
        md: {
            container: {
                minH: string;
                minW: string;
                fontSize: string;
                px: string;
            };
        };
        lg: {
            container: {
                minH: string;
                minW: string;
                fontSize: string;
                px: string;
            };
        };
    } | undefined;
    variants?: {
        subtle: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            container: {
                [x: string]: string | {
                    [x: string]: string;
                };
                _dark: {
                    [x: string]: string;
                };
                bg: string;
                color: string;
            } | undefined;
        };
        solid: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            container: {
                [x: string]: string | {
                    [x: string]: string;
                };
                _dark: {
                    [x: string]: string;
                };
                bg: string;
                color: string;
            } | undefined;
        };
        outline: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            container: {
                [x: string]: string | {
                    [x: string]: string;
                };
                _dark: {
                    [x: string]: string;
                };
                color: string;
                boxShadow: string;
            } | undefined;
        };
    } | undefined;
    defaultProps?: {
        size?: "md" | "sm" | "lg" | undefined;
        variant?: "outline" | "solid" | "subtle" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "label" | "closeButton")[];
};

export { tagTheme };
