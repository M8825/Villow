/// <reference types="google.maps" />
import { PureComponent } from 'react';
interface DirectionsRendererState {
    directionsRenderer: google.maps.DirectionsRenderer | null;
}
export interface DirectionsRendererProps {
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
export declare class DirectionsRenderer extends PureComponent<DirectionsRendererProps, DirectionsRendererState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: DirectionsRendererState;
    setDirectionsRendererCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DirectionsRendererProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default DirectionsRenderer;
