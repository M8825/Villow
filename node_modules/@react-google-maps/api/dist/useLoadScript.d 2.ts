import { LoadScriptUrlOptions } from './utils/make-load-script-url';
export interface UseLoadScriptOptions extends LoadScriptUrlOptions {
    id?: string | undefined;
    nonce?: string | undefined;
    preventGoogleFontsLoading?: boolean | undefined;
}
export declare function useLoadScript({ id, version, nonce, googleMapsApiKey, googleMapsClientId, language, region, libraries, preventGoogleFontsLoading, channel, mapIds, authReferrerPolicy, }: UseLoadScriptOptions): {
    isLoaded: boolean;
    loadError: Error | undefined;
    url: string;
};
