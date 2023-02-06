import * as _chakra_ui_styled_system from '@chakra-ui/styled-system';

declare const badgeTheme: {
    baseStyle?: {
        px: number;
        textTransform: string;
        fontSize: string;
        borderRadius: string;
        fontWeight: string;
    } | undefined;
    sizes?: {
        [key: string]: _chakra_ui_styled_system.SystemStyleInterpolation;
    } | undefined;
    variants?: {
        solid: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            [x: string]: string | {
                [x: string]: string;
            };
            _dark: {
                [x: string]: string;
            };
            bg: string;
            color: string;
        };
        subtle: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            [x: string]: string | {
                [x: string]: string;
            };
            _dark: {
                [x: string]: string;
            };
            bg: string;
            color: string;
        };
        outline: (props: _chakra_ui_styled_system.StyleFunctionProps) => {
            [x: string]: string | {
                [x: string]: string;
            };
            _dark: {
                [x: string]: string;
            };
            color: string;
            boxShadow: string;
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "outline" | "solid" | "subtle" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};

export { badgeTheme };
