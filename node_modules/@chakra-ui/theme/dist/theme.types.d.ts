import { ThemingProps, StyleObjectOrFn, SystemStyleInterpolation, PartsStyleInterpolation, SemanticValue, Pseudos } from '@chakra-ui/styled-system';
import { Styles } from '@chakra-ui/theme-tools';

declare type ColorMode = "light" | "dark";
declare type Dict = Record<string, any>;
declare type ColorModeOptions = {
    initialColorMode?: "light" | "dark" | "system";
    useSystemColorMode?: boolean;
    disableTransitionOnChange?: boolean;
};
declare type RecursiveProperty<T = string | number> = RecursiveObject<T> | T;
interface RecursiveObject<T = string | number> {
    [property: string]: RecursiveProperty<T>;
}
interface ThemeConfig extends ColorModeOptions {
    cssVarPrefix?: string;
}
declare type ThemeTransitions = RecursiveObject & {
    property: RecursiveObject;
    easing: RecursiveObject;
    duration: RecursiveObject;
};
interface ColorHues {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}
declare type Colors = RecursiveObject<Record<string, Partial<ColorHues>> | string>;
declare type ThemeDirection = "ltr" | "rtl";
interface ComponentDefaultProps extends Omit<ThemingProps, "styleConfig">, Dict {
}
interface ThemeComponentProps<T extends ChakraTheme = ChakraTheme> extends Omit<ThemingProps, "styleConfig"> {
    colorMode: ColorMode;
    theme: T;
    [x: string]: any;
}
declare type ThemeComponentFunction<S, T extends ChakraTheme = ChakraTheme> = (props: ThemeComponentProps<T>) => S;
declare type ThemingPropsThunk<S, T extends ChakraTheme = ChakraTheme> = S | ThemeComponentFunction<S, T>;
interface SystemStyleObjectRecord {
    [key: string]: StyleObjectOrFn;
}
interface ComponentSingleStyleConfig {
    parts?: never;
    baseStyle?: SystemStyleInterpolation;
    sizes?: Record<string, SystemStyleInterpolation>;
    variants?: Record<string, SystemStyleInterpolation>;
    defaultProps?: any;
}
interface ComponentMultiStyleConfig {
    parts: string[];
    baseStyle?: PartsStyleInterpolation;
    sizes?: Record<string, PartsStyleInterpolation>;
    variants?: Record<string, PartsStyleInterpolation>;
    defaultProps?: any;
}
declare type ComponentStyleConfig = ComponentSingleStyleConfig | ComponentMultiStyleConfig;
interface ThemeComponents {
    [componentName: string]: ComponentStyleConfig;
}
interface Typography {
    fonts: RecursiveObject<string>;
    fontSizes: RecursiveObject;
    fontWeights: RecursiveObject;
    letterSpacings: RecursiveObject;
    lineHeights: RecursiveObject;
}
interface Foundations extends Typography {
    borders: RecursiveObject;
    breakpoints: Dict;
    colors: Colors;
    radii: RecursiveObject;
    shadows: RecursiveObject<string>;
    sizes: RecursiveObject;
    space: RecursiveObject;
    transition: ThemeTransitions;
    zIndices: RecursiveObject;
}
interface ChakraTheme extends Foundations {
    semanticTokens?: Partial<Record<keyof Foundations, Record<string, SemanticValue<keyof Pseudos>>>>;
    components: ThemeComponents;
    config: ThemeConfig;
    direction: ThemeDirection;
    styles: Styles;
    layerStyles?: SystemStyleObjectRecord;
    textStyles?: SystemStyleObjectRecord;
}

export { ChakraTheme, ColorHues, Colors, ComponentDefaultProps, ComponentMultiStyleConfig, ComponentSingleStyleConfig, ComponentStyleConfig, RecursiveObject, RecursiveProperty, SystemStyleObjectRecord, ThemeComponentFunction, ThemeComponentProps, ThemeComponents, ThemeConfig, ThemeDirection, ThemeTransitions, ThemingPropsThunk };
