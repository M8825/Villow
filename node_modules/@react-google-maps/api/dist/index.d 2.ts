import * as react from 'react';
import { ReactNode, CSSProperties, PureComponent, RefObject, ReactElement, ContextType, ReactPortal, ReactChild } from 'react';
import { Clusterer, ClustererOptions, TCalculator, ClusterIconStyle, Cluster } from '@react-google-maps/marker-clusterer';
import { MarkerClusterer, MarkerClustererOptions } from '@googlemaps/markerclusterer';
import * as markerclusterer from '@googlemaps/markerclusterer';
export { markerclusterer as GoogleMapsMarkerClusterer };
import { InfoBoxOptions, InfoBox } from '@react-google-maps/infobox';

interface GoogleMapState {
    map: google.maps.Map | null;
}
interface GoogleMapProps {
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
declare class GoogleMap extends PureComponent<GoogleMapProps, GoogleMapState> {
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

type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];
interface LoadScriptUrlOptions {
    googleMapsApiKey: string | "";
    googleMapsClientId?: string | undefined;
    version?: string | undefined;
    language?: string | undefined;
    region?: string | undefined;
    libraries?: Libraries | undefined;
    channel?: string | undefined;
    mapIds?: string[] | undefined;
    authReferrerPolicy?: 'origin' | undefined;
}

interface LoadScriptState {
    loaded: boolean;
}
interface LoadScriptProps extends LoadScriptUrlOptions {
    children?: ReactNode | undefined;
    id: string;
    nonce?: string | undefined;
    loadingElement?: ReactNode;
    onLoad?: () => void;
    onError?: (error: Error) => void;
    onUnmount?: () => void;
    preventGoogleFontsLoading?: boolean;
}
declare class LoadScript extends PureComponent<LoadScriptProps, LoadScriptState> {
    static defaultProps: {
        id: string;
        version: string;
    };
    check: RefObject<HTMLDivElement>;
    state: {
        loaded: boolean;
    };
    cleanupCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: LoadScriptProps): void;
    componentWillUnmount(): void;
    isCleaningUp: () => Promise<void>;
    cleanup: () => void;
    injectScript: () => void;
    render(): ReactNode;
}

interface UseLoadScriptOptions$1 extends LoadScriptUrlOptions {
    id?: string | undefined;
    nonce?: string | undefined;
    preventGoogleFontsLoading?: boolean | undefined;
}
declare function useLoadScript({ id, version, nonce, googleMapsApiKey, googleMapsClientId, language, region, libraries, preventGoogleFontsLoading, channel, mapIds, authReferrerPolicy, }: UseLoadScriptOptions$1): {
    isLoaded: boolean;
    loadError: Error | undefined;
    url: string;
};

interface LoadScriptNextProps extends UseLoadScriptOptions$1 {
    loadingElement?: ReactElement | undefined;
    onLoad?: (() => void) | undefined;
    onError?: ((error: Error) => void) | undefined;
    onUnmount?: (() => void) | undefined;
    children: ReactElement;
}
declare function LoadScriptNext({ loadingElement, onLoad, onError, onUnmount, children, ...hookOptions }: LoadScriptNextProps): JSX.Element;
declare const _default$1: react.MemoExoticComponent<typeof LoadScriptNext>;

interface UseLoadScriptOptions extends LoadScriptUrlOptions {
    id?: string | undefined;
    nonce?: string | undefined;
    preventGoogleFontsLoading?: boolean | undefined;
}
declare function useJsApiLoader({ id, version, nonce, googleMapsApiKey, language, region, libraries, preventGoogleFontsLoading, mapIds, authReferrerPolicy, }: UseLoadScriptOptions): {
    isLoaded: boolean;
    loadError: Error | undefined;
};

declare const MapContext: react.Context<google.maps.Map | null>;
declare function useGoogleMap(): google.maps.Map | null;

interface TrafficLayerState {
    trafficLayer: google.maps.TrafficLayer | null;
}
interface TrafficLayerProps {
    options?: google.maps.TrafficLayerOptions | undefined;
    /** This callback is called when the trafficLayer instance has loaded. It is called with the trafficLayer instance. */
    onLoad?: ((trafficLayer: google.maps.TrafficLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the trafficLayer instance. */
    onUnmount?: ((trafficLayer: google.maps.TrafficLayer) => void) | undefined;
}
declare function TrafficLayerFunctional({ options, onLoad, onUnmount }: TrafficLayerProps): null;
declare const TrafficLayerF: react.MemoExoticComponent<typeof TrafficLayerFunctional>;
declare class TrafficLayer extends PureComponent<TrafficLayerProps, TrafficLayerState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    state: {
        trafficLayer: null;
    };
    setTrafficLayerCallback: () => void;
    registeredEvents: google.maps.MapsEventListener[];
    componentDidMount(): void;
    componentDidUpdate(prevProps: TrafficLayerProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface BicyclingLayerState {
    bicyclingLayer: google.maps.BicyclingLayer | null;
}
interface BicyclingLayerProps {
    /** This callback is called when the bicyclingLayer instance has loaded. It is called with the bicyclingLayer instance. */
    onLoad?: ((bicyclingLayer: google.maps.BicyclingLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the bicyclingLayer instance. */
    onUnmount?: ((bicyclingLayer: google.maps.BicyclingLayer) => void) | undefined;
}
declare function BicyclingLayerFunctional({ onLoad, onUnmount }: BicyclingLayerProps): null;
declare const BicyclingLayerF: react.MemoExoticComponent<typeof BicyclingLayerFunctional>;
declare class BicyclingLayer extends PureComponent<BicyclingLayerProps, BicyclingLayerState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    state: BicyclingLayerState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    setBicyclingLayerCallback: () => void;
    render(): null;
}

interface TransitLayerState {
    transitLayer: google.maps.TransitLayer | null;
}
interface TransitLayerProps {
    /** This callback is called when the transitLayer instance has loaded. It is called with the transitLayer instance. */
    onLoad?: ((transitLayer: google.maps.TransitLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the transitLayer instance. */
    onUnmount?: ((transitLayer: google.maps.TransitLayer) => void) | undefined;
}
declare function TransitLayerFunctional({ onLoad, onUnmount }: TransitLayerProps): null;
declare const TransitLayerF: react.MemoExoticComponent<typeof TransitLayerFunctional>;
declare class TransitLayer extends PureComponent<TransitLayerProps, TransitLayerState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    state: {
        transitLayer: null;
    };
    setTransitLayerCallback: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): null;
}

interface DrawingManagerState {
    drawingManager: google.maps.drawing.DrawingManager | null;
}
interface DrawingManagerProps {
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
declare const DrawingManagerF: react.MemoExoticComponent<typeof DrawingManagerFunctional>;
declare class DrawingManager extends PureComponent<DrawingManagerProps, DrawingManagerState> {
    static contextType: react.Context<google.maps.Map | null>;
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

interface MarkerProps {
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
    clusterer?: Clusterer | MarkerClusterer | undefined;
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
declare const MarkerF: react.MemoExoticComponent<typeof MarkerFunctional>;
declare class Marker extends PureComponent<MarkerProps> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    marker: google.maps.Marker | undefined;
    componentDidMount(): void;
    componentDidUpdate(prevProps: MarkerProps): void;
    componentWillUnmount(): void;
    render(): ReactNode;
}

interface ClustererState {
    markerClusterer: Clusterer | null;
}
interface MarkerClustererProps {
    children: (markerClusterer: Clusterer) => JSX.Element;
    options?: ClustererOptions | undefined;
    /** Whether the position of a cluster marker should be the average position of all markers in the cluster. If set to false, the cluster marker is positioned at the location of the first marker added to the cluster. The default value is false. */
    averageCenter?: boolean | undefined;
    /** When Internet Explorer is being used, markers are processed in several batches with a small delay inserted between each batch in an attempt to avoid Javascript timeout errors. Set this property to the number of markers to be processed in a single batch; select as high a number as you can without causing a timeout error in the browser. This number might need to be as low as 100 if 15,000 markers are being managed, for example. The default value is MarkerClusterer.BATCH_SIZE_IE. */
    batchSizeIE?: number | undefined;
    /** The function used to determine the text to be displayed on a cluster marker and the index indicating which style to use for the cluster marker. The input parameters for the function are (1) the array of markers represented by a cluster marker and (2) the number of cluster icon styles. It returns a ClusterIconInfo object. The default calculator returns a text property which is the number of markers in the cluster and an index property which is one higher than the lowest integer such that 10^i exceeds the number of markers in the cluster, or the size of the styles array, whichever is less. The styles array element used has an index of index minus 1. For example, the default calculator returns a text value of "125" and an index of 3 for a cluster icon representing 125 markers so the element used in the styles array is 2. A calculator may also return a title property that contains the text of the tooltip to be used for the cluster marker. If title is not defined, the tooltip is set to the value of the title property for the MarkerClusterer. The default value is MarkerClusterer.CALCULATOR. */
    calculator?: TCalculator | undefined;
    /** The name of the CSS class defining general styles for the cluster markers. Use this class to define CSS styles that are not set up by the code that processes the styles array. The default value is "cluster". */
    clusterClass?: string | undefined;
    /** Whether to allow the use of cluster icons that have sizes that are some multiple (typically double) of their actual display size. Icons such as these look better when viewed on high-resolution monitors such as Apple's Retina displays. Note: if this property is true, sprites cannot be used as cluster icons. The default value is false. */
    enableRetinaIcons?: boolean | undefined;
    /** The grid size of a cluster in pixels. The grid is a square. The default value is 60. */
    gridSize?: number | undefined;
    /** Whether to ignore hidden markers in clusters. You may want to set this to true to ensure that hidden markers are not included in the marker count that appears on a cluster marker (this count is the value of the text property of the result returned by the default calculator). If set to true and you change the visibility of a marker being clustered, be sure to also call MarkerClusterer.repaint(). The default value is false. */
    ignoreHidden?: boolean | undefined;
    /** The extension name for the cluster icon image files (e.g., "png" or "jpg"). The default value is MarkerClusterer.IMAGE_EXTENSION. */
    imageExtension?: string | undefined;
    /** The full URL of the root name of the group of image files to use for cluster icons. The complete file name is of the form imagePath.imageExtension where n is the image file number (1, 2, etc.). The default value is MarkerClusterer.IMAGE_PATH. */
    imagePath?: string | undefined;
    /** An array of numbers containing the widths of the group of imagePath.imageExtension image files. (The images are assumed to be square.) The default value is MarkerClusterer.IMAGE_SIZES. */
    imageSizes?: number[] | undefined;
    /** The maximum zoom level at which clustering is enabled or null if clustering is to be enabled at all zoom levels. The default value is null. */
    maxZoom?: number | undefined;
    /** The minimum number of markers needed in a cluster before the markers are hidden and a cluster marker appears. The default value is 2. */
    minimumClusterSize?: number | undefined;
    /** An array of ClusterIconStyle elements defining the styles of the cluster markers to be used. The element to be used to style a given cluster marker is determined by the function defined by the calculator property. The default is an array of ClusterIconStyle elements whose properties are derived from the values for imagePath, imageExtension, and imageSizes. */
    styles?: ClusterIconStyle[] | undefined;
    /** The tooltip to display when the mouse moves over a cluster marker. (Alternatively, you can use a custom calculator function to specify a different tooltip for each cluster marker.) The default value is "". */
    title?: string | undefined;
    /** Whether to zoom the map when a cluster marker is clicked. You may want to set this to false if you have installed a handler for the click event and it deals with zooming on its own. The default value is true. */
    zoomOnClick?: boolean | undefined;
    /** This event is fired when a cluster marker is clicked. */
    onClick?: ((cluster: Cluster) => void) | undefined;
    /** This event is fired when the MarkerClusterer begins clustering markers. */
    onClusteringBegin?: ((markerClusterer: Clusterer) => void) | undefined;
    /** This event is fired when the MarkerClusterer stops clustering markers. */
    onClusteringEnd?: ((markerClusterer: Clusterer) => void) | undefined;
    /** 	This event is fired when the mouse moves over a cluster marker. */
    onMouseOver?: (cluster: Cluster) => void | undefined;
    /** This event is fired when the mouse moves out of a cluster marker. */
    onMouseOut?: (cluster: Cluster) => void | undefined;
    /** This callback is called when the markerClusterer instance has loaded. It is called with the markerClusterer instance. */
    onLoad?: ((markerClusterer: Clusterer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the markerClusterer instance. */
    onUnmount?: ((markerClusterer: Clusterer) => void) | undefined;
}
declare function MarkerClustererFunctional(props: MarkerClustererProps): JSX.Element | null;
declare const MarkerClustererF: react.MemoExoticComponent<typeof MarkerClustererFunctional>;
declare class ClustererComponent extends PureComponent<MarkerClustererProps, ClustererState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: ClustererState;
    setClustererCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: MarkerClustererProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}

interface InfoBoxState {
    infoBox: InfoBox | null;
}
interface InfoBoxProps {
    children?: ReactNode | undefined;
    /** Can be any MVCObject that exposes a LatLng position property and optionally a Point anchorPoint property for calculating the pixelOffset. The anchorPoint is the offset from the anchor's position to the tip of the InfoBox. */
    anchor?: google.maps.MVCObject | undefined;
    options?: InfoBoxOptions | undefined;
    /** The LatLng at which to display this InfoBox. If the InfoBox is opened with an anchor, the anchor's position will be used instead. */
    position?: google.maps.LatLng | undefined;
    /** All InfoBoxes are displayed on the map in order of their zIndex, with higher values displaying in front of InfoBoxes with lower values. By default, InfoBoxes are displayed according to their latitude, with InfoBoxes of lower latitudes appearing in front of InfoBoxes at higher latitudes. InfoBoxes are always displayed in front of markers. */
    zIndex?: number | undefined;
    /** This event is fired when the close button was clicked. */
    onCloseClick?: (() => void) | undefined;
    /** This event is fired when the <div> containing the InfoBox's content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically. */
    onDomReady?: (() => void) | undefined;
    /** This event is fired when the content property changes. */
    onContentChanged?: (() => void) | undefined;
    /** This event is fired when the position property changes. */
    onPositionChanged?: (() => void) | undefined;
    /** This event is fired when the InfoBox's zIndex changes. */
    onZindexChanged?: (() => void) | undefined;
    /** This callback is called when the infoBox instance has loaded. It is called with the infoBox instance. */
    onLoad?: ((infoBox: InfoBox) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the infoBox instance. */
    onUnmount?: ((infoBox: InfoBox) => void) | undefined;
}
declare function InfoBoxFunctional({ children, anchor, options, position, zIndex, onCloseClick, onDomReady, onContentChanged, onPositionChanged, onZindexChanged, onLoad, onUnmount }: InfoBoxProps): ReactPortal | null;
declare const InfoBoxF: react.MemoExoticComponent<typeof InfoBoxFunctional>;
declare class InfoBoxComponent extends PureComponent<InfoBoxProps, InfoBoxState> {
    static contextType: react.Context<google.maps.Map | null>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: HTMLElement | null;
    state: InfoBoxState;
    open: (infoBox: InfoBox, anchor?: google.maps.MVCObject) => void;
    setInfoBoxCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: InfoBoxProps): void;
    componentWillUnmount(): void;
    render(): ReactPortal | null;
}

type MarkerClustererOptionsSubset = Omit<MarkerClustererOptions, 'map' | 'markers'>;
interface GoogleMarkerClustererProps {
    /** Render prop that exposes marker clusterer to children components
     *
     * The callback function should return a list of Marker components.
     */
    children: (markerClusterer: MarkerClusterer) => ReactElement<any, any>;
    /** Subset of {@link MarkerClustererOptions} options
     *
     * ```
     * {
     *   algorithm?: Algorithm;
     *   renderer?: Renderer;
     *   onClusterClick?: onClusterClickHandler;
     * }
     * ```
     */
    options: MarkerClustererOptionsSubset;
}
/** Wrapper around [@googlemaps/markerclusterer](https://github.com/googlemaps/js-markerclusterer)
 *
 * Accepts {@link  MarkerClustererOptionsSubset} which is a subset of  {@link MarkerClustererOptions}
 */
declare function GoogleMarkerClusterer({ children, options }: GoogleMarkerClustererProps): ReactElement<any, any> | null;
declare const _default: react.MemoExoticComponent<typeof GoogleMarkerClusterer>;

interface InfoWindowState {
    infoWindow: google.maps.InfoWindow | null;
}
interface InfoWindowProps {
    children?: ReactNode | undefined;
    /** Can be any MVCObject that exposes a LatLng position property and optionally a Point anchorPoint property for calculating the pixelOffset. The anchorPoint is the offset from the anchor's position to the tip of the InfoWindow. */
    anchor?: google.maps.MVCObject | undefined;
    options?: google.maps.InfoWindowOptions | undefined;
    /** The LatLng at which to display this InfoWindow. If the InfoWindow is opened with an anchor, the anchor's position will be used instead. */
    position?: google.maps.LatLng | google.maps.LatLngLiteral | undefined;
    /** All InfoWindows are displayed on the map in order of their zIndex, with higher values displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed according to their latitude, with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers. */
    zIndex?: number | undefined;
    /** This event is fired when the close button was clicked. */
    onCloseClick?: (() => void) | undefined;
    /** This event is fired when the <div> containing the InfoWindow's content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically. */
    onDomReady?: (() => void) | undefined;
    /** This event is fired when the content property changes. */
    onContentChanged?: (() => void) | undefined;
    /** This event is fired when the position property changes. */
    onPositionChanged?: (() => void) | undefined;
    /** This event is fired when the InfoWindow's zIndex changes. */
    onZindexChanged?: (() => void) | undefined;
    /** This callback is called when the infoWindow instance has loaded. It is called with the infoWindow instance. */
    onLoad?: ((infoWindow: google.maps.InfoWindow) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the infoWindow instance. */
    onUnmount?: ((infoWindow: google.maps.InfoWindow) => void) | undefined;
}
declare function InfoWindowFunctional({ children, anchor, options, position, zIndex, onCloseClick, onDomReady, onContentChanged, onPositionChanged, onZindexChanged, onLoad, onUnmount }: InfoWindowProps): ReactPortal | null;
declare const InfoWindowF: react.MemoExoticComponent<typeof InfoWindowFunctional>;
declare class InfoWindow extends PureComponent<InfoWindowProps, InfoWindowState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: HTMLElement | null;
    state: InfoWindowState;
    open: (infoWindow: google.maps.InfoWindow, anchor?: google.maps.MVCObject | undefined) => void;
    setInfoWindowCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: InfoWindowProps): void;
    componentWillUnmount(): void;
    render(): ReactPortal | null;
}

interface PolylineState {
    polyline: google.maps.Polyline | null;
}
interface PolylineProps {
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
declare const PolylineF: react.MemoExoticComponent<typeof PolylineFunctional>;
declare class Polyline extends PureComponent<PolylineProps, PolylineState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: PolylineState;
    setPolylineCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PolylineProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface PolygonState {
    polygon: google.maps.Polygon | null;
}
interface PolygonProps {
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
declare const PolygonF: react.MemoExoticComponent<typeof PolygonFunctional>;
declare class Polygon extends PureComponent<PolygonProps, PolygonState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: PolygonState;
    setPolygonCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PolygonProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface RectangleState {
    rectangle: google.maps.Rectangle | null;
}
interface RectangleProps {
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
declare const RectangleF: react.MemoExoticComponent<typeof RectangleFunctional>;
declare class Rectangle extends PureComponent<RectangleProps, RectangleState> {
    static contextType: react.Context<google.maps.Map | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: RectangleState;
    setRectangleCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: RectangleProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface CircleState {
    circle: google.maps.Circle | null;
}
interface CircleProps {
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
declare const CircleF: react.MemoExoticComponent<typeof CircleFunctional>;
declare class Circle extends PureComponent<CircleProps, CircleState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: CircleState;
    setCircleCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: CircleProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface DataState {
    data: google.maps.Data | null;
}
interface DataProps {
    options?: google.maps.Data.DataOptions | undefined;
    /**  This event is fired for a click on the geometry. */
    onClick?: ((e: google.maps.Data.MouseEvent) => void) | undefined;
    /**  This event is fired for a double click on the geometry. */
    onDblClick?: ((e: google.maps.Data.MouseEvent) => void) | undefined;
    /**  This event is fired for a mousedown on the geometry. */
    onMouseDown?: ((e: google.maps.Data.MouseEvent) => void) | undefined;
    /** This event is fired when the DOM mousemove event is fired on the rectangle. */
    onMouseMove?: ((e: google.maps.Data.MouseEvent) => void) | undefined;
    /**  This event is fired when the mouse leaves the area of the geometry. */
    onMouseOut?: ((e: google.maps.Data.MouseEvent) => void) | undefined;
    /**  This event is fired when the mouse enters the area of the geometry. */
    onMouseOver?: ((e: google.maps.Data.MouseEvent) => void) | undefined;
    /**  This event is fired for a mouseup on the geometry. */
    onMouseUp?: ((e: google.maps.Data.MouseEvent) => void) | undefined;
    /**  This event is fired for a rightclick on the geometry. */
    onRightClick?: ((e: google.maps.Data.MouseEvent) => void) | undefined;
    /**  This event is fired when a feature is added to the collection. */
    onAddFeature?: ((e: google.maps.Data.AddFeatureEvent) => void) | undefined;
    /**  This event is fired when a feature is removed from the collection. */
    onRemoveFeature?: ((e: google.maps.Data.RemoveFeatureEvent) => void) | undefined;
    /**  This event is fired when a feature's property is removed. */
    onRemoveProperty?: ((e: google.maps.Data.RemovePropertyEvent) => void) | undefined;
    /**  This event is fired when a feature's geometry is set. */
    onSetGeometry?: ((e: google.maps.Data.SetGeometryEvent) => void) | undefined;
    /**  This event is fired when a feature's property is set. */
    onSetProperty?: ((e: google.maps.Data.SetPropertyEvent) => void) | undefined;
    /**  This callback is called when the data instance has loaded. It is called with the data instance. */
    onLoad?: ((data: google.maps.Data) => void) | undefined;
    /**  This callback is called when the component unmounts. It is called with the data instance.  */
    onUnmount?: ((data: google.maps.Data) => void) | undefined;
}
declare function DataFunctional({ options, onClick, onDblClick, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onAddFeature, onRemoveFeature, onRemoveProperty, onSetGeometry, onSetProperty, onLoad, onUnmount, }: DataProps): null;
declare const DataF: react.MemoExoticComponent<typeof DataFunctional>;
declare class Data extends PureComponent<DataProps, DataState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: DataState;
    setDataCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DataProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface KmlLayerState {
    kmlLayer: google.maps.KmlLayer | null;
}
interface KmlLayerProps {
    options?: google.maps.KmlLayerOptions | undefined;
    /** The URL of the KML document to display. */
    url?: string | undefined;
    /** The z-index of the layer. */
    zIndex?: number | undefined;
    /** This event is fired when a feature in the layer is clicked. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the KML layers default viewport has changed. */
    onDefaultViewportChanged?: (() => void) | undefined | undefined;
    /** This event is fired when the KML layer has finished loading. At this point it is safe to read the status property to determine if the layer loaded successfully. */
    onStatusChanged?: (() => void) | undefined | undefined;
    /** This callback is called when the kmlLayer instance has loaded. It is called with the kmlLayer instance. */
    onLoad?: ((kmlLayer: google.maps.KmlLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the kmlLayer instance. */
    onUnmount?: ((kmlLayer: google.maps.KmlLayer) => void) | undefined;
}
declare class KmlLayer extends PureComponent<KmlLayerProps, KmlLayerState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: KmlLayerState;
    setKmlLayerCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: KmlLayerProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface OverlayViewState {
    paneEl: Element | null;
    containerStyle: CSSProperties;
}
type PaneNames = keyof google.maps.MapPanes;
interface OverlayViewProps {
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
declare const FLOAT_PANE: PaneNames;
declare const MAP_PANE: PaneNames;
declare const MARKER_LAYER: PaneNames;
declare const OVERLAY_LAYER: PaneNames;
declare const OVERLAY_MOUSE_TARGET: PaneNames;
declare function OverlayViewFunctional({ position, bounds, mapPaneName, zIndex, onLoad, onUnmount, getPixelPositionOffset, children, }: OverlayViewProps): ReactPortal;
declare const OverlayViewF: react.MemoExoticComponent<typeof OverlayViewFunctional>;
declare class OverlayView extends PureComponent<OverlayViewProps, OverlayViewState> {
    static FLOAT_PANE: PaneNames;
    static MAP_PANE: PaneNames;
    static MARKER_LAYER: PaneNames;
    static OVERLAY_LAYER: PaneNames;
    static OVERLAY_MOUSE_TARGET: PaneNames;
    static contextType: react.Context<google.maps.Map | null>;
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

declare function noop(): void;

interface GroundOverlayState {
    groundOverlay: google.maps.GroundOverlay | null;
}
interface GroundOverlayProps {
    options?: google.maps.GroundOverlayOptions | undefined;
    /** The opacity of the overlay, expressed as a number between 0 and 1. Optional. Defaults to 1. */
    opacity?: number | undefined;
    /** This event is fired when the DOM dblclick event is fired on the GroundOverlay. */
    onDblClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM click event is fired on the GroundOverlay. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** The url of the projected image */
    url: string;
    /** The bounds that the image will be scaled to fit */
    bounds: google.maps.LatLngBoundsLiteral;
    /** This callback is called when the groundOverlay instance has loaded. It is called with the groundOverlay instance. */
    onLoad?: ((groundOverlay: google.maps.GroundOverlay) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the groundOverlay instance. */
    onUnmount?: ((groundOverlay: google.maps.GroundOverlay) => void) | undefined;
    visible?: boolean;
}
declare function GroundOverlayFunctional({ url, bounds, options, visible }: GroundOverlayProps): null;
declare const GroundOverlayF: react.MemoExoticComponent<typeof GroundOverlayFunctional>;
declare class GroundOverlay extends PureComponent<GroundOverlayProps, GroundOverlayState> {
    static defaultProps: {
        onLoad: typeof noop;
    };
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: GroundOverlayState;
    setGroundOverlayCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: GroundOverlayProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface HeatmapLayerState {
    heatmapLayer: google.maps.visualization.HeatmapLayer | null;
}
interface HeatmapLayerProps {
    /** The data points to display. Required. */
    data: google.maps.MVCArray<google.maps.LatLng | google.maps.visualization.WeightedLocation> | google.maps.LatLng[] | google.maps.visualization.WeightedLocation[];
    options?: google.maps.visualization.HeatmapLayerOptions | undefined;
    /** This callback is called when the heatmapLayer instance has loaded. It is called with the heatmapLayer instance. */
    onLoad?: ((heatmapLayer: google.maps.visualization.HeatmapLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the heatmapLayer instance. */
    onUnmount?: ((heatmapLayer: google.maps.visualization.HeatmapLayer) => void) | undefined;
}
declare function HeatmapLayerFunctional({ data, onLoad, onUnmount, options, }: HeatmapLayerProps): null;
declare const HeatmapLayerF: react.MemoExoticComponent<typeof HeatmapLayerFunctional>;
declare class HeatmapLayer extends PureComponent<HeatmapLayerProps, HeatmapLayerState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: HeatmapLayerState;
    setHeatmapLayerCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: HeatmapLayerProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface StreetViewPanoramaState {
    streetViewPanorama: google.maps.StreetViewPanorama | null;
}
interface StreetViewPanoramaProps {
    options?: google.maps.StreetViewPanoramaOptions | undefined;
    /** This event is fired when the close button is clicked. */
    onCloseclick?: ((event: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the panorama's pano id changes. The pano may change as the user navigates through the panorama or the position is manually set. Note that not all position changes trigger a pano_changed. */
    onPanoChanged?: (() => void) | undefined;
    /** This event is fired when the panorama's position changes. The position changes as the user navigates through the panorama or the position is set manually. */
    onPositionChanged?: (() => void) | undefined;
    /** This event is fired when the panorama's point-of-view changes. The point of view changes as the pitch, zoom, or heading changes. */
    onPovChanged?: (() => void) | undefined;
    /** Developers should trigger this event on the panorama when its div changes size: google.maps.event.trigger(panorama, 'resize'). */
    onResize?: (() => void) | undefined;
    /** This event is fired after every panorama lookup by id or location, via setPosition() or setPano(). */
    onStatusChanged?: (() => void) | undefined;
    /** This event is fired when the panorama's visibility changes. The visibility is changed when the Pegman is dragged onto the map, the close button is clicked, or setVisible() is called. */
    onVisibleChanged?: (() => void) | undefined;
    /** This event is fired when the panorama's zoom level changes. */
    onZoomChange?: (() => void) | undefined;
    /** This callback is called when the streetViewPanorama instance has loaded. It is called with the streetViewPanorama instance. */
    onLoad?: ((streetViewPanorama: google.maps.StreetViewPanorama) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the streetViewPanorama instance. */
    onUnmount?: ((streetViewPanorama: google.maps.StreetViewPanorama) => void) | undefined;
}
declare class StreetViewPanorama extends PureComponent<StreetViewPanoramaProps, StreetViewPanoramaState> {
    static contextType: react.Context<google.maps.Map | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: StreetViewPanoramaState;
    setStreetViewPanoramaCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: StreetViewPanoramaProps): void;
    componentWillUnmount(): void;
    render(): null;
}

interface StreetViewServiceProps {
    /** This callback is called when the streetViewService instance has loaded. It is called with the streetViewService instance. */
    onLoad?: ((streetViewService: google.maps.StreetViewService | null) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the streetViewService instance. */
    onUnmount?: ((streetViewService: google.maps.StreetViewService | null) => void) | undefined;
}
interface StreetViewServiceState {
    streetViewService: google.maps.StreetViewService | null;
}
declare class StreetViewService extends PureComponent<StreetViewServiceProps, StreetViewServiceState> {
    static contextType: react.Context<google.maps.Map | null>;
    state: {
        streetViewService: null;
    };
    setStreetViewServiceCallback: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): null;
}

interface DirectionsServiceState {
    directionsService: google.maps.DirectionsService | null;
}
interface DirectionsServiceProps {
    options: google.maps.DirectionsRequest;
    callback: (
    /** The directions response retrieved from the directions server. You can render these using a DirectionsRenderer or parse this object and render it yourself. You must display the warnings and copyrights as noted in the Google Maps Platform Terms of Service. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes LatLng objects */
    result: google.maps.DirectionsResult | null, 
    /** The status returned by the DirectionsService on the completion of a call to route(). Specify these by value, or by using the constant's name. For example, 'OK' or google.maps.DirectionsStatus.OK */
    status: google.maps.DirectionsStatus) => void;
    /** This callback is called when the directionsService instance has loaded. It is called with the directionsService instance. */
    onLoad?: ((directionsService: google.maps.DirectionsService) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the directionsService instance. */
    onUnmount?: ((directionsService: google.maps.DirectionsService) => void) | undefined;
}
declare class DirectionsService extends react.PureComponent<DirectionsServiceProps, DirectionsServiceState> {
    state: DirectionsServiceState;
    setDirectionsServiceCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): null;
}

interface DirectionsRendererState {
    directionsRenderer: google.maps.DirectionsRenderer | null;
}
interface DirectionsRendererProps {
    options?: google.maps.DirectionsRendererOptions | undefined;
    /** The directions to display on the map and/or in a <div> panel, retrieved as a DirectionsResult object from DirectionsService. */
    directions?: google.maps.DirectionsResult | undefined;
    /** The <div> in which to display the directions steps. */
    panel?: HTMLElement | undefined;
    /** The index of the route within the DirectionsResult object. The default value is 0. */
    routeIndex?: number | undefined;
    /** This event is fired when the rendered directions change, either when a new DirectionsResult is set or when the user finishes dragging a change to the directions path. */
    onDirectionsChanged?: (() => void) | undefined;
    /** This callback is called when the directionsRenderer instance has loaded. It is called with the directionsRenderer instance. */
    onLoad?: ((directionsRenderer: google.maps.DirectionsRenderer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the directionsRenderer instance. */
    onUnmount?: ((directionsRenderer: google.maps.DirectionsRenderer) => void) | undefined;
}
declare class DirectionsRenderer extends PureComponent<DirectionsRendererProps, DirectionsRendererState> {
    static contextType: react.Context<google.maps.Map | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: DirectionsRendererState;
    setDirectionsRendererCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DirectionsRendererProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}

interface DistanceMatrixServiceState {
    distanceMatrixService: google.maps.DistanceMatrixService | null;
}
interface DistanceMatrixServiceProps {
    options: google.maps.DistanceMatrixRequest;
    callback: (
    /** The response to a DistanceMatrixService request, consisting of the formatted origin and destination addresses, and a sequence of DistanceMatrixResponseRows, one for each corresponding origin address. */
    response: google.maps.DistanceMatrixResponse | null, 
    /** The top-level status about the request in general returned by the DistanceMatrixService upon completion of a distance matrix request. Specify these by value, or by using the constant's name. For example, 'OK' or google.maps.DistanceMatrixStatus.OK. */
    status: google.maps.DistanceMatrixStatus) => void;
    /** This callback is called when the distanceMatrixService instance has loaded. It is called with the distanceMatrixService instance. */
    onLoad?: ((distanceMatrixService: google.maps.DistanceMatrixService) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the distanceMatrixService instance. */
    onUnmount?: ((distanceMatrixService: google.maps.DistanceMatrixService) => void) | undefined;
}
declare class DistanceMatrixService extends react.PureComponent<DistanceMatrixServiceProps, DistanceMatrixServiceState> {
    state: DistanceMatrixServiceState;
    setDistanceMatrixServiceCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): null;
}

interface StandaloneSearchBoxState {
    searchBox: google.maps.places.SearchBox | null;
}
interface StandaloneSearchBoxProps {
    children?: ReactNode | undefined;
    /** The area towards which to bias query predictions. Predictions are biased towards, but not restricted to, queries targeting these bounds. */
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | undefined;
    options?: google.maps.places.SearchBoxOptions | undefined;
    /** This event is fired when the user selects a query, getPlaces should be used to get new places. */
    onPlacesChanged?: (() => void) | undefined;
    /** This callback is called when the searchBox instance has loaded. It is called with the searchBox instance. */
    onLoad?: ((searchBox: google.maps.places.SearchBox) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the searchBox instance. */
    onUnmount?: ((searchBox: google.maps.places.SearchBox) => void) | undefined;
}
declare class StandaloneSearchBox extends PureComponent<StandaloneSearchBoxProps, StandaloneSearchBoxState> {
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: RefObject<HTMLDivElement>;
    state: StandaloneSearchBoxState;
    setSearchBoxCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: StandaloneSearchBoxProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}

interface AutocompleteState {
    autocomplete: google.maps.places.Autocomplete | null;
}
interface AutocompleteProps {
    children: ReactChild;
    /** The area in which to search for places. */
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | undefined;
    /** The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country. */
    restrictions?: google.maps.places.ComponentRestrictions | undefined;
    /** Fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see PlaceResult. Nested fields can be specified with dot-paths (for example, "geometry.location"). */
    fields?: string[] | undefined;
    options?: google.maps.places.AutocompleteOptions | undefined;
    /** The types of predictions to be returned. For a list of supported types, see the developer's guide. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the 'geocode' and 'establishment' types, but note that this will have the same effect as specifying no types. */
    types?: string[] | undefined;
    /** This event is fired when a PlaceResult is made available for a Place the user has selected. If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place Details request fails, the PlaceResult contains the user input in the name property, with no other properties defined. */
    onPlaceChanged?: (() => void) | undefined;
    /** This callback is called when the autocomplete instance has loaded. It is called with the autocomplete instance. */
    onLoad?: ((autocomplete: google.maps.places.Autocomplete) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the autocomplete instance. */
    onUnmount?: ((autocomplete: google.maps.places.Autocomplete) => void) | undefined;
    className?: string | undefined;
}
declare class Autocomplete extends PureComponent<AutocompleteProps, AutocompleteState> {
    static defaultProps: {
        className: string;
    };
    static contextType: react.Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: RefObject<HTMLDivElement>;
    state: AutocompleteState;
    setAutocompleteCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: AutocompleteProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}

export { Autocomplete, AutocompleteProps, BicyclingLayer, BicyclingLayerF, BicyclingLayerProps, Circle, CircleF, CircleProps, Data, DataF, DataProps, DirectionsRenderer, DirectionsRendererProps, DirectionsService, DirectionsServiceProps, DistanceMatrixService, DistanceMatrixServiceProps, DrawingManager, DrawingManagerF, DrawingManagerProps, FLOAT_PANE, GoogleMap, GoogleMapProps, _default as GoogleMarkerClusterer, GoogleMarkerClustererProps, GroundOverlay, GroundOverlayF, GroundOverlayProps, HeatmapLayer, HeatmapLayerF, HeatmapLayerProps, InfoBoxComponent as InfoBox, InfoBoxF, InfoBoxProps, InfoWindow, InfoWindowF, InfoWindowProps, KmlLayer, KmlLayerProps, LoadScript, _default$1 as LoadScriptNext, LoadScriptNextProps, LoadScriptProps, MAP_PANE, MARKER_LAYER, MapContext, Marker, ClustererComponent as MarkerClusterer, MarkerClustererF, MarkerClustererProps, MarkerF, MarkerProps, OVERLAY_LAYER, OVERLAY_MOUSE_TARGET, OverlayView, OverlayViewF, OverlayViewProps, Polygon, PolygonF, PolygonProps, Polyline, PolylineF, PolylineProps, Rectangle, RectangleF, RectangleProps, StandaloneSearchBox, StandaloneSearchBoxProps, StreetViewPanorama, StreetViewPanoramaProps, StreetViewService, StreetViewServiceProps, TrafficLayer, TrafficLayerF, TrafficLayerProps, TransitLayer, TransitLayerF, TransitLayerProps, useGoogleMap, useJsApiLoader, useLoadScript };
