import * as _chakra_ui_system from '@chakra-ui/system';
import { ThemingProps, HTMLChakraProps, PropsOf } from '@chakra-ui/system';
import { a as UseCheckboxProps, b as CheckboxOptions } from './checkbox-types-85aeb1f7.js';
import 'react';

declare type CheckboxControlProps = Omit<HTMLChakraProps<"div">, keyof UseCheckboxProps>;
declare type BaseInputProps = Pick<PropsOf<"input">, "onBlur" | "checked" | "defaultChecked">;
interface CheckboxProps extends CheckboxControlProps, BaseInputProps, ThemingProps<"Checkbox">, UseCheckboxProps, CheckboxOptions {
}
/**
 * Checkbox
 *
 * React component used in forms when a user needs to select
 * multiple values from several options.
 *
 * @see Docs https://chakra-ui.com/checkbox
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
declare const Checkbox: _chakra_ui_system.ComponentWithAs<"input", CheckboxProps>;

export { Checkbox, CheckboxProps };
