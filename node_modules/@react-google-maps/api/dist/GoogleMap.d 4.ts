/// <reference types="google.maps" />
import { type CSSProperties, PureComponent, type ReactNode } from 'react';
export interface GoogleMapState {
    map: google.maps.Map | null;
}
export interface GoogleMapProps {
    children?: ReactNode | undefined;
    id?: string | undefined;
    mapContainerStyle?: CSSProperties | undefined;
    mapContainerClassName?: string | undefined;
    options?: google.maps.MapOptions | undefined;
    /** Additional map types to overlay. Overlay map types will display on top of the base map they are attached to, in the order in which they appear in the overlayMapTypes array (overlays with higher index values are displayed in front of overlays with lower index values). */
    extraMapTypes?: google.maps.MapType[] | undefined;
    /** The initial Map center. */
    center?: google.maps.LatLng | google.maps.LatLngLiteral | undefined;
    /** When false, map icons are not clickable. A map icon represents a point of interest, also known as a POI. By default map icons are clickable. */
    clickableIcons?: boolean | undefined;
    /** The heading for aerial imagery in degrees measured clockwise from cardinal direction North. Headings are snapped to the nearest available angle for which imagery is available. */
    heading?: number | undefined;
    /** The initial Map mapTypeId. Defaults to ROADMAP. */
    mapTypeId?: string | undefined;
    /** A StreetViewPanorama to display when the Street View pegman is dropped on the map. If no panorama is specified, a default StreetViewPanorama will be displayed in the map's div when the pegman is dropped. */
    streetView?: google.maps.StreetViewPanorama | undefined;
    /** Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are 0 and 45. The value 0 causes the map to always use a 0° overhead view regardless of the zoom level and viewport. The value 45 causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for satellite and hybrid map types, within some locations, and at some zoom levels. Note: getTilt returns the current tilt angle, not the value specified by this option. Because getTilt and this option refer to different things, do not bind() the tilt property; doing so may yield unpredictable effects. */
    tilt?: number | undefined;
    /** The initial Map zoom level. Required. Valid values: Integers between zero, and up to the supported maximum zoom level. */
    zoom?: number | undefined;
    /** This event is fired when the user clicks on the map. An ApiMouseEvent with properties for the clicked location is returned unless a place icon was clicked, in which case an IconMouseEvent with a placeId is returned. IconMouseEvent and ApiMouseEvent are identical, except that IconMouseEvent has the placeId field. The event can always be treated as an ApiMouseEvent when the placeId is not important. The click event is not fired if a Marker or InfoWindow was clicked. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one. */
    onDblClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is repeatedly fired while the user drags the map. */
    onDrag?: (() => void) | undefined;
    /** This event is fired when the user stops dragging the map. */
    onDragEnd?: (() => void) | undefined;
    /** This event is fired when the user starts dragging the map. */
    onDragStart?: (() => void) | undefined;
    /** This event is fired whenever the user's mouse moves over the map container. */
    onMouseMove?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user's mouse exits the map container. */
    onMouseOut?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the user's mouse enters the map container. */
    onMouseOver?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousedown event is fired on the map container. */
    onMouseDown?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM mouseup event is fired on the map container. */
    onMouseUp?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM contextmenu event is fired on the map container. */
    onRightClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the mapTypeId property changes. */
    onMapTypeIdChanged?: (() => void) | undefined;
    /** This event is fired when the visible tiles have finished loading. */
    onTilesLoaded?: (() => void) | undefined;
    /** This event is fired when the viewport bounds have changed. */
    onBoundsChanged?: (() => void) | undefined;
    /** This event is fired when the map center property changes. */
    onCenterChanged?: (() => void) | undefined;
    /** This event is fired when the map heading property changes. */
    onHeadingChanged?: (() => void) | undefined;
    /** This event is fired when the map becomes idle after panning or zooming. */
    onIdle?: (() => void) | undefined;
    /** This event is fired when the projection has changed. */
    onProjectionChanged?: (() => void) | undefined;
    /** This event is fired when the map size has changed. */
    onResize?: (() => void) | undefined;
    /** This event is fired when the map tilt property changes. */
    onTiltChanged?: (() => void) | undefined;
    /** This event is fired when the map zoom property changes. */
    onZoomChanged?: (() => void) | undefined;
    /** This callback is called when the map instance has loaded. It is called with the map instance. */
    onLoad?: ((map: google.maps.Map) => void | Promise<void>) | undefined;
    /** This callback is called when the component unmounts. It is called with the map instance. */
    onUnmount?: ((map: google.maps.Map) => void | Promise<void>) | undefined;
}
declare function GoogleMapFunctional({ children, options, id, mapContainerStyle, mapContainerClassName, center, onClick, onDblClick, onDrag, onDragEnd, onDragStart, onMouseMove, onMouseOut, onMouseOver, onMouseDown, onMouseUp, onRightClick, onCenterChanged, onLoad, onUnmount, }: GoogleMapProps): JSX.Element;
export declare const GoogleMapF: import("react").MemoExoticComponent<typeof GoogleMapFunctional>;
export declare class GoogleMap extends PureComponent<GoogleMapProps, GoogleMapState> {
    state: GoogleMapState;
    registeredEvents: google.maps.MapsEventListener[];
    mapRef: HTMLDivElement | null;
    getInstance: () => google.maps.Map | null;
    panTo: (latLng: google.maps.LatLng | google.maps.LatLngLiteral) => void;
    setMapCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: GoogleMapProps): void;
    componentWillUnmount(): void;
    getRef: React.LegacyRef<HTMLDivElement>;
    render(): ReactNode;
}
export default GoogleMap;
