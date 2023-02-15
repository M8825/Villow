/// <reference types="google.maps" />
import { PureComponent } from 'react';
interface StreetViewPanoramaState {
    streetViewPanorama: google.maps.StreetViewPanorama | null;
}
export interface StreetViewPanoramaProps {
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
export declare class StreetViewPanorama extends PureComponent<StreetViewPanoramaProps, StreetViewPanoramaState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: StreetViewPanoramaState;
    setStreetViewPanoramaCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: StreetViewPanoramaProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default StreetViewPanorama;
