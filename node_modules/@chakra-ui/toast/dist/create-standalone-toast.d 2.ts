import { useChakra, ColorMode } from '@chakra-ui/system';
import { T as ToastProviderProps } from './toast.provider-02a226a3.js';
import { U as UseToastOptions, C as CreateToastFnReturn } from './toast.types-76829e6b.js';
import 'react';
import 'framer-motion';
import '@chakra-ui/portal';
import './toast.placement.js';
import '@chakra-ui/alert';

interface CreateStandAloneToastParam extends Partial<ReturnType<typeof useChakra> & {
    setColorMode: (value: ColorMode) => void;
    defaultOptions: UseToastOptions;
}>, Omit<ToastProviderProps, "children"> {
}
declare const defaultStandaloneParam: CreateStandAloneToastParam & Required<Omit<CreateStandAloneToastParam, keyof ToastProviderProps>>;
declare type CreateStandaloneToastReturn = {
    ToastContainer: () => JSX.Element;
    toast: CreateToastFnReturn;
};
/**
 * Create a toast
 */
declare function createStandaloneToast({ theme, colorMode, toggleColorMode, setColorMode, defaultOptions, motionVariants, toastSpacing, component, forced, }?: CreateStandAloneToastParam): CreateStandaloneToastReturn;

export { CreateStandAloneToastParam, CreateStandaloneToastReturn, createStandaloneToast, defaultStandaloneParam };
