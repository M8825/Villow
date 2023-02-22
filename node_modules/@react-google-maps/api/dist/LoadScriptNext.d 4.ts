import { ReactElement } from 'react';
import { UseLoadScriptOptions } from './useLoadScript';
export interface LoadScriptNextProps extends UseLoadScriptOptions {
    loadingElement?: ReactElement | undefined;
    onLoad?: (() => void) | undefined;
    onError?: ((error: Error) => void) | undefined;
    onUnmount?: (() => void) | undefined;
    children: ReactElement;
}
declare function LoadScriptNext({ loadingElement, onLoad, onError, onUnmount, children, ...hookOptions }: LoadScriptNextProps): JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof LoadScriptNext>;
export default _default;
