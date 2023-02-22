import { PureComponent, type ReactNode, type RefObject } from 'react';
import { LoadScriptUrlOptions } from './utils/make-load-script-url';
interface LoadScriptState {
    loaded: boolean;
}
export interface LoadScriptProps extends LoadScriptUrlOptions {
    children?: ReactNode | undefined;
    id: string;
    nonce?: string | undefined;
    loadingElement?: ReactNode;
    onLoad?: () => void;
    onError?: (error: Error) => void;
    onUnmount?: () => void;
    preventGoogleFontsLoading?: boolean;
}
export declare function DefaultLoadingElement(): JSX.Element;
export declare const defaultLoadScriptProps: {
    id: string;
    version: string;
};
declare class LoadScript extends PureComponent<LoadScriptProps, LoadScriptState> {
    static defaultProps: {
        id: string;
        version: string;
    };
    check: RefObject<HTMLDivElement>;
    state: {
        loaded: boolean;
    };
    cleanupCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: LoadScriptProps): void;
    componentWillUnmount(): void;
    isCleaningUp: () => Promise<void>;
    cleanup: () => void;
    injectScript: () => void;
    render(): ReactNode;
}
export default LoadScript;
