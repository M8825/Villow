import { IconProps } from '@chakra-ui/icon';

declare type AccordionIconProps = IconProps;
/**
 * AccordionIcon that gives a visual cue of the open/close state of the accordion item.
 * It rotates `180deg` based on the open/close state.
 */
declare function AccordionIcon(props: AccordionIconProps): JSX.Element;
declare namespace AccordionIcon {
    var displayName: string;
}

export { AccordionIcon, AccordionIconProps };
