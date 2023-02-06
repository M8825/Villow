declare type ColorMode = "light" | "dark";
declare type ColorModeWithSystem = ColorMode | "system" | undefined;
/**
 * @deprecated use `ColorModeWithSystem` instead
 */
declare type ConfigColorMode = ColorModeWithSystem;
interface ColorModeOptions {
    initialColorMode?: ColorModeWithSystem;
    useSystemColorMode?: boolean;
    disableTransitionOnChange?: boolean;
}
interface ColorModeContextType {
    forced?: boolean;
    colorMode: ColorMode;
    toggleColorMode: () => void;
    setColorMode: (value: any) => void;
}

export { ColorMode, ColorModeContextType, ColorModeOptions, ColorModeWithSystem, ConfigColorMode };
