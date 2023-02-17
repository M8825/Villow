interface InjectScriptArg {
    url: string;
    id: string;
    nonce?: string | undefined;
}
export declare function injectScript({ url, id, nonce }: InjectScriptArg): Promise<any>;
export {};
