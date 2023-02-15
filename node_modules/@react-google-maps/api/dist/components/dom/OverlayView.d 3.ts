/// <reference types="google.maps" />
import { PureComponent, type ReactNode, type RefObject, type ReactPortal, type CSSProperties } from 'react';
interface OverlayViewState {
    paneEl: Element | null;
    containerStyle: CSSProperties;
}
export type PaneNames = keyof google.maps.MapPanes;
export interface OverlayViewProps {
    children?: ReactNode | undefined;
    mapPaneName: PaneNames;
    position?: google.maps.LatLng | google.maps.LatLngLiteral | undefined;
    getPixelPositionOffset?: ((offsetWidth: number, offsetHeight: number) => {
        x: number;
        y: number;
    }) | undefined;
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | undefined;
    zIndex?: number;
    onLoad?: ((overlayView: google.maps.OverlayView) => void) | undefined;
    onUnmount?: ((overlayView: google.maps.OverlayView) => void) | undefined;
}
export declare const FLOAT_PANE: PaneNames;
export declare const MAP_PANE: PaneNames;
export declare const MARKER_LAYER: PaneNames;
export declare const OVERLAY_LAYER: PaneNames;
export declare const OVERLAY_MOUSE_TARGET: PaneNames;
declare function OverlayViewFunctional({ position, bounds, mapPaneName, zIndex, onLoad, onUnmount, getPixelPositionOffset, children, }: OverlayViewProps): ReactPortal;
export declare const OverlayViewF: import("react").MemoExoticComponent<typeof OverlayViewFunctional>;
export declare class OverlayView extends PureComponent<OverlayViewProps, OverlayViewState> {
    static FLOAT_PANE: PaneNames;
    static MAP_PANE: PaneNames;
    static MARKER_LAYER: PaneNames;
    static OVERLAY_LAYER: PaneNames;
    static OVERLAY_MOUSE_TARGET: PaneNames;
    static contextType: import("react").Context<google.maps.Map | null>;
    state: OverlayViewState;
    overlayView: google.maps.OverlayView;
    containerRef: RefObject<HTMLDivElement>;
    updatePane: () => void;
    onAdd: () => void;
    onPositionElement: () => void;
    draw: () => void;
    onRemove: () => void;
    constructor(props: OverlayViewProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: OverlayViewProps): void;
    componentWillUnmount(): void;
    render(): ReactPortal | ReactNode;
}
export default OverlayView;
