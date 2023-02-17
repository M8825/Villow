/// <reference types="google.maps" />
import { PureComponent, type ReactNode, type ContextType } from 'react';
import MapContext from '../../map-context';
import { Clusterer } from '@react-google-maps/marker-clusterer';
import { MarkerClusterer as GoogleClusterer } from '@googlemaps/markerclusterer';
export interface MarkerProps {
    /** Marker position. */
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    children?: ReactNode | undefined;
    options?: google.maps.MarkerOptions | undefined;
    /** Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in null will cause any animation to stop. */
    animation?: google.maps.Animation | undefined;
    /** If true, the marker receives mouse and touch events. Default value is true. */
    clickable?: boolean | undefined;
    /** Mouse cursor to show on hover */
    cursor?: string | undefined;
    /** If true, the marker can be dragged. Default value is false. */
    draggable?: boolean | undefined;
    /** Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. */
    icon?: string | google.maps.Icon | google.maps.Symbol | undefined;
    /** Adds a label to the marker. The label can either be a string, or a MarkerLabel object. */
    label?: string | google.maps.MarkerLabel | undefined;
    /** The marker's opacity between 0.0 and 1.0. */
    opacity?: number | undefined;
    /** Image map region definition used for drag/click. */
    shape?: google.maps.MarkerShape | undefined;
    /** Rollover text */
    title?: string | undefined;
    /** If true, the marker is visible */
    visible?: boolean | undefined;
    /** All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen. */
    zIndex?: number | undefined;
    /** Render prop that handles clustering markers */
    clusterer?: Clusterer | GoogleClusterer | undefined;
    /** Clusters are redrawn when a Marker is added unless noClustererRedraw? is set to true. */
    noClustererRedraw?: boolean | undefined;
    /** This event is fired when the marker icon was clicked. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the marker's clickable property changes. */
    onClickableChanged?: (() => void) | undefined;
    /** This event is fired when the marker's cursor property changes. */
    onCursorChanged?: (() => void) | undefined;
    /** This event is fired when the marker's animation property changes. */
    onAnimationChanged?: (() => void) | undefined;
    /** This event is fired when the marker icon was double clicked. */
    onDblClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is repeatedly fired while the user drags the marker. */
    onDrag?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user stops dragging the marker. */
    onDragEnd?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the marker's draggable property changes. */
    onDraggableChanged?: (() => void) | undefined;
    /** This event is fired when the user starts dragging the marker. */
    onDragStart?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the marker's flat property changes. */
    onFlatChanged?: (() => void) | undefined;
    /** This event is fired when the marker icon property changes. */
    onIconChanged?: (() => void) | undefined;
    /** This event is fired for a mousedown on the marker. */
    onMouseDown?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the mouse leaves the area of the marker icon. */
    onMouseOut?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the mouse enters the area of the marker icon. */
    onMouseOver?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired for a mouseup on the marker. */
    onMouseUp?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the marker position property changes. */
    onPositionChanged?: (() => void) | undefined;
    /** This event is fired for a rightclick on the marker. */
    onRightClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the marker's shape property changes. */
    onShapeChanged?: (() => void) | undefined;
    /** This event is fired when the marker title property changes. */
    onTitleChanged?: (() => void) | undefined;
    /** This event is fired when the marker's visible property changes. */
    onVisibleChanged?: (() => void) | undefined;
    /** This event is fired when the marker's zIndex property changes. */
    onZindexChanged?: (() => void) | undefined;
    /** This callback is called when the marker instance has loaded. It is called with the marker instance. */
    onLoad?: ((marker: google.maps.Marker) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the marker instance. */
    onUnmount?: ((marker: google.maps.Marker) => void) | undefined;
}
declare function MarkerFunctional({ position, options, clusterer, noClustererRedraw, children, draggable, visible, animation, clickable, cursor, icon, label, opacity, shape, title, zIndex, onClick, onDblClick, onDrag, onDragEnd, onDragStart, onMouseOut, onMouseOver, onMouseUp, onMouseDown, onRightClick, onClickableChanged, onCursorChanged, onAnimationChanged, onDraggableChanged, onFlatChanged, onIconChanged, onPositionChanged, onShapeChanged, onTitleChanged, onVisibleChanged, onZindexChanged, onLoad, onUnmount }: MarkerProps): JSX.Element | null;
export declare const MarkerF: import("react").MemoExoticComponent<typeof MarkerFunctional>;
export declare class Marker extends PureComponent<MarkerProps> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    marker: google.maps.Marker | undefined;
    componentDidMount(): void;
    componentDidUpdate(prevProps: MarkerProps): void;
    componentWillUnmount(): void;
    render(): ReactNode;
}
export default Marker;
