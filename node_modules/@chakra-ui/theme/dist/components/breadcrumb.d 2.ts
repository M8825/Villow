import * as _chakra_ui_styled_system from '@chakra-ui/styled-system';

declare const breadcrumbTheme: {
    baseStyle?: {
        link: {
            transitionProperty: string;
            transitionDuration: string;
            transitionTimingFunction: string;
            cursor: string;
            textDecoration: string;
            outline: string;
            color: string;
            _hover: {
                textDecoration: string;
            };
            _focusVisible: {
                boxShadow: string;
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: _chakra_ui_styled_system.PartsStyleInterpolation<{
            keys: ("link" | "container" | "separator" | "item")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: _chakra_ui_styled_system.PartsStyleInterpolation<{
            keys: ("link" | "container" | "separator" | "item")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("link" | "container" | "separator" | "item")[];
};

export { breadcrumbTheme };
