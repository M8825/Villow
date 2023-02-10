import * as _chakra_ui_system from '@chakra-ui/system';
import { HTMLChakraProps } from '@chakra-ui/system';
import { HTMLMotionProps, Variant } from 'framer-motion';
import react__default from 'react';

declare type HTMLMotionChakraProps<T extends keyof react__default.ReactHTML> = Omit<HTMLChakraProps<T>, keyof HTMLMotionProps<T>> & Omit<HTMLMotionProps<T>, "style" | "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "variants" | "transition"> & {
    variants?: MotionVariants;
};
declare type MotionVariants = Partial<Record<"enter" | "exit", Variant>>;
interface PopoverTransitionProps extends HTMLMotionChakraProps<"section"> {
}
declare const PopoverTransition: _chakra_ui_system.ComponentWithAs<_chakra_ui_system.As<any>, PopoverTransitionProps>;

export { PopoverTransition, PopoverTransitionProps };
