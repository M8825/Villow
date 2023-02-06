import { SystemProps, ResponsiveValue, SystemStyleObject } from '@chakra-ui/styled-system';
import { Interpolation } from '@emotion/react';

interface ChakraProps extends SystemProps {
    /**
     * Used to truncate text at a specific number of lines
     */
    noOfLines?: ResponsiveValue<number>;
    /**
     * Used for internal css management
     * @private
     */
    __css?: SystemStyleObject;
    /**
     * Used to pass theme-aware style props.
     * NB: This is the public API for user-land
     */
    sx?: SystemStyleObject;
    /**
     * The emotion's css style object
     */
    css?: Interpolation<{}>;
}
declare type As<Props = any> = React.ElementType<Props>;
/**
 * Extract the props of a React element or component
 */
declare type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
    as?: As;
};
declare type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<Target, "transition" | "as" | "color" | "translate" | OmitAdditionalProps> & {
    htmlTranslate?: "yes" | "no" | undefined;
};
declare type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;
declare type MergeWithAs<ComponentProps extends object, AsProps extends object, AdditionalProps extends object = {}, AsComponent extends As = As> = RightJoinProps<ComponentProps, AdditionalProps> & RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
};
declare type ComponentWithAs<Component extends As, Props extends object = {}> = {
    <AsComponent extends As = Component>(props: MergeWithAs<React.ComponentProps<Component>, React.ComponentProps<AsComponent>, Props, AsComponent>): JSX.Element;
    displayName?: string;
    propTypes?: React.WeakValidationMap<any>;
    contextTypes?: React.ValidationMap<any>;
    defaultProps?: Partial<any>;
    id?: string;
};
interface ChakraComponent<T extends As, P = {}> extends ComponentWithAs<T, ChakraProps & P> {
}

export { As, ChakraComponent, ChakraProps, ComponentWithAs, MergeWithAs, OmitCommonProps, PropsOf, RightJoinProps };
