/// <reference types="google.maps" />
import { type ContextType, PureComponent } from 'react';
import MapContext from '../../map-context';
interface PolygonState {
    polygon: google.maps.Polygon | null;
}
export interface PolygonProps {
    options?: google.maps.PolygonOptions | undefined;
    /** If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging. */
    draggable?: boolean | undefined;
    /** If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. */
    editable?: boolean | undefined;
    /** Hides this poly if set to false. */
    visible?: boolean | undefined;
    /** Sets the first path. See Paths for more details. */
    path?: google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[] | google.maps.LatLngLiteral[] | undefined;
    /** Sets the path for this polygon. The ordered sequence of coordinates that designates a closed loop. Unlike polylines, a polygon may consist of one or more paths. As a result, the paths property may specify one or more arrays of LatLng coordinates. Paths are closed automatically; do not repeat the first vertex of the path as the last vertex. Simple polygons may be defined using a single array of LatLngs. More complex polygons may specify an array of arrays. Any simple arrays are converted into MVCArrays. Inserting or removing LatLngs from the MVCArray will automatically update the polygon on the map. */
    paths?: google.maps.MVCArray<google.maps.LatLng> | google.maps.MVCArray<google.maps.MVCArray<google.maps.LatLng>> | google.maps.LatLng[] | google.maps.LatLng[][] | google.maps.LatLngLiteral[] | google.maps.LatLngLiteral[][] | undefined;
    /** This event is fired when the DOM dblclick event is fired on the Polygon. */
    onDblClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user stops dragging the polygon. */
    onDragEnd?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user starts dragging the polygon. */
    onDragStart?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousedown event is fired on the Polygon. */
    onMouseDown?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousemove event is fired on the Polygon. */
    onMouseMove?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired on Polygon mouseout. */
    onMouseOut?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired on Polygon mouseover. */
    onMouseOver?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mouseup event is fired on the Polygon. */
    onMouseUp?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the Polygon is right-clicked on. */
    onRightClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM click event is fired on the Polygon. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is repeatedly fired while the user drags the polygon. */
    onDrag?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This callback is called when the polygon instance has loaded. It is called with the polygon instance. */
    onLoad?: ((polygon: google.maps.Polygon) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the polygon instance. */
    onUnmount?: ((polygon: google.maps.Polygon) => void) | undefined;
}
declare function PolygonFunctional({ options, draggable, editable, visible, path, paths, onDblClick, onDragEnd, onDragStart, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onClick, onDrag, onLoad, onUnmount, }: PolygonProps): null;
export declare const PolygonF: import("react").MemoExoticComponent<typeof PolygonFunctional>;
export declare class Polygon extends PureComponent<PolygonProps, PolygonState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: PolygonState;
    setPolygonCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PolygonProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default Polygon;
