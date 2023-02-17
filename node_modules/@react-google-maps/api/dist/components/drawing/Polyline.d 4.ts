/// <reference types="google.maps" />
import { type ContextType, PureComponent } from 'react';
import MapContext from '../../map-context';
interface PolylineState {
    polyline: google.maps.Polyline | null;
}
export interface PolylineProps {
    options?: google.maps.PolylineOptions | undefined;
    /** If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging. */
    draggable?: boolean | undefined;
    /** If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. */
    editable?: boolean | undefined;
    /** Hides this poly if set to false. */
    visible?: boolean | undefined;
    /** Sets the path. The ordered sequence of coordinates of the Polyline. This path may be specified using either a simple array of LatLngs, or an MVCArray of LatLngs. Note that if you pass a simple array, it will be converted to an MVCArray Inserting or removing LatLngs in the MVCArray will automatically update the polyline on the map. */
    path?: google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[] | google.maps.LatLngLiteral[] | undefined;
    /** This event is fired when the DOM dblclick event is fired on the Polyline. */
    onDblClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user stops dragging the polyline. */
    onDragEnd?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user starts dragging the polyline. */
    onDragStart?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousedown event is fired on the Polyline. */
    onMouseDown?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousemove event is fired on the Polyline. */
    onMouseMove?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired on Polyline mouseout. */
    onMouseOut?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired on Polyline mouseover. */
    onMouseOver?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mouseup event is fired on the Polyline. */
    onMouseUp?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the Polyline is right-clicked on. */
    onRightClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM click event is fired on the Polyline. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is repeatedly fired while the user drags the polyline. */
    onDrag?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This callback is called when the polyline instance has loaded. It is called with the polyline instance. */
    onLoad?: ((polyline: google.maps.Polyline) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the polyline instance. */
    onUnmount?: ((polyline: google.maps.Polyline) => void) | undefined;
}
declare function PolylineFunctional({ options, draggable, editable, visible, path, onDblClick, onDragEnd, onDragStart, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onClick, onDrag, onLoad, onUnmount, }: PolylineProps): null;
export declare const PolylineF: import("react").MemoExoticComponent<typeof PolylineFunctional>;
export declare class Polyline extends PureComponent<PolylineProps, PolylineState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: PolylineState;
    setPolylineCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PolylineProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default Polyline;
