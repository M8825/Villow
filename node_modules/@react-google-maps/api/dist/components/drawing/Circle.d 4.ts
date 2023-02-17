/// <reference types="google.maps" />
import { type ContextType, PureComponent } from 'react';
import MapContext from '../../map-context';
interface CircleState {
    circle: google.maps.Circle | null;
}
export interface CircleProps {
    options?: google.maps.CircleOptions | undefined;
    /** sets the center of the circle */
    center?: google.maps.LatLng | google.maps.LatLngLiteral | undefined;
    /** Sets the radius of this circle (in meters) */
    radius?: number | undefined;
    /** If set to true, the user can drag this circle over the map */
    draggable?: boolean | undefined;
    /** If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle. */
    editable?: boolean | undefined;
    /** Hides this circle if set to false. */
    visible?: boolean | undefined;
    /** This event is fired when the DOM dblclick event is fired on the circle. */
    onDblClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user stops dragging the circle. */
    onDragEnd?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /**  This event is fired when the user starts dragging the circle. */
    onDragStart?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousedown event is fired on the circle. */
    onMouseDown?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousemove event is fired on the circle. */
    onMouseMove?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired on circle mouseout. */
    onMouseOut?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired on circle mouseover. */
    onMouseOver?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mouseup event is fired on the circle. */
    onMouseUp?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the circle is right-clicked on. */
    onRightClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM click event is fired on the circle. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is repeatedly fired while the user drags the circle. */
    onDrag?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the circle's center is changed. */
    onCenterChanged?: (() => void) | undefined;
    /** This event is fired when the circle's radius is changed. */
    onRadiusChanged?: (() => void) | undefined;
    /** This callback is called when the circle instance has loaded. It is called with the circle instance. */
    onLoad?: ((circle: google.maps.Circle) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the circle instance. */
    onUnmount?: ((circle: google.maps.Circle) => void) | undefined;
}
declare function CircleFunctional({ options, center, radius, draggable, editable, visible, onDblClick, onDragEnd, onDragStart, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onClick, onDrag, onCenterChanged, onRadiusChanged, onLoad, onUnmount, }: CircleProps): null;
export declare const CircleF: import("react").MemoExoticComponent<typeof CircleFunctional>;
export declare class Circle extends PureComponent<CircleProps, CircleState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: CircleState;
    setCircleCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: CircleProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default Circle;
