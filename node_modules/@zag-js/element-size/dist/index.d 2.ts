declare type ElementSize = {
    width: number;
    height: number;
};
declare type ElementSizeCallback = (size: ElementSize | undefined) => void;
declare function trackElementSize(element: HTMLElement | null, callback: ElementSizeCallback): (() => void) | undefined;

declare type TrackElementsSizeOptions<T extends HTMLElement | null> = {
    getNodes: () => T[];
    observeMutation?: boolean;
    callback: (size: ElementSize | undefined, index: number) => void;
};
declare function trackElementsSize<T extends HTMLElement | null>(options: TrackElementsSizeOptions<T>): () => void;

export { ElementSize, ElementSizeCallback, trackElementSize, trackElementsSize };
