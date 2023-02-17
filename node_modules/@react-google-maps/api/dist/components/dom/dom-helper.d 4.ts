/// <reference types="google.maps" />
import { PositionDrawProps } from "../../types";
export declare function getOffsetOverride(containerElement: HTMLElement, getPixelPositionOffset?: ((offsetWidth: number, offsetHeight: number) => {
    x: number;
    y: number;
}) | undefined): {
    x: number;
    y: number;
};
export declare function getLayoutStyles(mapCanvasProjection: google.maps.MapCanvasProjection, offset: {
    x: number;
    y: number;
}, bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | undefined, position?: google.maps.LatLng | google.maps.LatLngLiteral | undefined): PositionDrawProps;
export declare function arePositionsEqual(currentPosition: PositionDrawProps, previousPosition: PositionDrawProps): boolean;
