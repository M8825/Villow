import * as _chakra_ui_system from '@chakra-ui/system';
import { SystemStyleObject, ThemingProps, HTMLChakraProps } from '@chakra-ui/system';

declare type Chunk = {
    text: string;
    match: boolean;
};
declare type HighlightOptions = {
    text: string;
    query: string | string[];
};
declare type UseHighlightProps = HighlightOptions;
declare function useHighlight(props: UseHighlightProps): Chunk[];
declare type HighlightProps = {
    query: string | string[];
    children: string | ((props: Chunk[]) => React.ReactNode);
    styles?: SystemStyleObject;
};
declare type MarkProps = ThemingProps<"Mark"> & HTMLChakraProps<"mark">;
declare const Mark: _chakra_ui_system.ComponentWithAs<"mark", MarkProps>;
/**
 * `Highlight` allows you to highlight substrings of a text.
 *
 * @see Docs https://chakra-ui.com/docs/components/highlight
 */
declare function Highlight(props: HighlightProps): JSX.Element;

export { Highlight, HighlightProps, Mark, MarkProps, UseHighlightProps, useHighlight };
