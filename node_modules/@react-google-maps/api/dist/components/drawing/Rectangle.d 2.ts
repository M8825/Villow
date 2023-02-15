/// <reference types="google.maps" />
import { PureComponent } from 'react';
interface RectangleState {
    rectangle: google.maps.Rectangle | null;
}
export interface RectangleProps {
    options?: google.maps.RectangleOptions | undefined;
    /** Sets the bounds of this rectangle. */
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | undefined;
    /** If set to true, the user can drag this rectangle over the map. */
    draggable?: boolean | undefined;
    /** If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge. */
    editable?: boolean | undefined;
    /** Hides this rectangle if set to false. */
    visible?: boolean | undefined;
    /** @deprecated Indicates whether this Rectangle handles mouse events. Defaults to true. Does not exist on RectangleF component. In google-maps-api types it belongs to options! update options.clickable instead! */
    clickable?: boolean | undefined;
    /** This event is fired when the DOM dblclick event is fired on the rectangle. */
    onDblClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user stops dragging the rectangle. */
    onDragEnd?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user starts dragging the rectangle. */
    onDragStart?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousedown event is fired on the rectangle. */
    onMouseDown?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousemove event is fired on the rectangle. */
    onMouseMove?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired on rectangle mouseout. */
    onMouseOut?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired on rectangle mouseover. */
    onMouseOver?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mouseup event is fired on the rectangle. */
    onMouseUp?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the rectangle is right-clicked on. */
    onRightClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM click event is fired on the rectangle. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is repeatedly fired while the user drags the rectangle. */
    onDrag?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the rectangle's bounds are changed. */
    onBoundsChanged?: (() => void) | undefined;
    /** This callback is called when the rectangle instance has loaded. It is called with the rectangle instance. */
    onLoad?: ((rectangle: google.maps.Rectangle) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the rectangle instance. */
    onUnmount?: ((rectangle: google.maps.Rectangle) => void) | undefined;
}
declare function RectangleFunctional({ options, bounds, draggable, editable, visible, onDblClick, onDragEnd, onDragStart, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onClick, onDrag, onBoundsChanged, onLoad, onUnmount, }: RectangleProps): null;
export declare const RectangleF: import("react").MemoExoticComponent<typeof RectangleFunctional>;
export declare class Rectangle extends PureComponent<RectangleProps, RectangleState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: RectangleState;
    setRectangleCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: RectangleProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default Rectangle;
