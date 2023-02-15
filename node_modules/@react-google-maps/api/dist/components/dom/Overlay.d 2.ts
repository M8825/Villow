/// <reference types="google.maps" />
type fnPixelPositionOffset = (offsetWidth: number, offsetHeight: number) => {
    x: number;
    y: number;
};
export declare function createOverlay(container: HTMLElement, pane: keyof google.maps.MapPanes, position?: google.maps.LatLng | google.maps.LatLngLiteral, bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, getPixelPositionOffset?: fnPixelPositionOffset): {
    container: HTMLElement;
    pane: keyof google.maps.MapPanes;
    position: google.maps.LatLng | google.maps.LatLngLiteral | undefined;
    bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | undefined;
    onAdd(): void;
    draw(): void;
    onRemove(): void;
    getMap(): google.maps.Map | google.maps.StreetViewPanorama | null;
    getPanes(): google.maps.MapPanes | null;
    getProjection(): google.maps.MapCanvasProjection;
    setMap(map: google.maps.Map | google.maps.StreetViewPanorama | null): void;
    addListener(eventName: string, handler: Function): google.maps.MapsEventListener;
    bindTo(key: string, target: google.maps.MVCObject, targetKey?: string | null | undefined, noNotify?: boolean | undefined): void;
    get(key: string): any;
    notify(key: string): void;
    set(key: string, value: any): void;
    setValues(values?: object | null | undefined): void;
    unbind(key: string): void;
    unbindAll(): void;
};
export {};
