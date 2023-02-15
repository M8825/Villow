export type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];
export interface LoadScriptUrlOptions {
    googleMapsApiKey: string | "";
    googleMapsClientId?: string | undefined;
    version?: string | undefined;
    language?: string | undefined;
    region?: string | undefined;
    libraries?: Libraries | undefined;
    channel?: string | undefined;
    mapIds?: string[] | undefined;
    authReferrerPolicy?: 'origin' | undefined;
}
export declare function makeLoadScriptUrl({ googleMapsApiKey, googleMapsClientId, version, language, region, libraries, channel, mapIds, authReferrerPolicy }: LoadScriptUrlOptions): string;
