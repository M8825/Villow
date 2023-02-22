/// <reference types="google.maps" />
import { type ContextType, PureComponent } from 'react';
import MapContext from '../../map-context';
interface DrawingManagerState {
    drawingManager: google.maps.drawing.DrawingManager | null;
}
export interface DrawingManagerProps {
    options?: google.maps.drawing.DrawingManagerOptions | undefined;
    /** Changes the DrawingManager's drawing mode, which defines the type of overlay to be added on the map. Accepted values are 'marker', 'polygon', 'polyline', 'rectangle', 'circle', or null. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. */
    drawingMode?: google.maps.drawing.OverlayType | null | undefined;
    /** This event is fired when the user has finished drawing a circle. */
    onCircleComplete?: ((circle: google.maps.Circle) => void) | undefined;
    /** This event is fired when the user has finished drawing a marker. */
    onMarkerComplete?: ((marker: google.maps.Marker) => void) | undefined;
    /** This event is fired when the user has finished drawing an overlay of any type. */
    onOverlayComplete?: ((e: google.maps.drawing.OverlayCompleteEvent) => void) | undefined;
    /** This event is fired when the user has finished drawing a polygon. */
    onPolygonComplete?: ((polygon: google.maps.Polygon) => void) | undefined;
    /** This event is fired when the user has finished drawing a polyline. */
    onPolylineComplete?: ((polyline: google.maps.Polyline) => void) | undefined;
    /** This event is fired when the user has finished drawing a rectangle. */
    onRectangleComplete?: ((rectangle: google.maps.Rectangle) => void) | undefined;
    /** This callback is called when the drawingManager instance has loaded. It is called with the drawingManager instance. */
    onLoad?: ((drawingManager: google.maps.drawing.DrawingManager) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the drawingManager instance. */
    onUnmount?: ((drawingManager: google.maps.drawing.DrawingManager) => void) | undefined;
}
declare function DrawingManagerFunctional({ options, drawingMode, onCircleComplete, onMarkerComplete, onOverlayComplete, onPolygonComplete, onPolylineComplete, onRectangleComplete, onLoad, onUnmount }: DrawingManagerProps): null;
export declare const DrawingManagerF: import("react").MemoExoticComponent<typeof DrawingManagerFunctional>;
export declare class DrawingManager extends PureComponent<DrawingManagerProps, DrawingManagerState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: DrawingManagerState;
    constructor(props: DrawingManagerProps);
    setDrawingManagerCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DrawingManagerProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default DrawingManager;
